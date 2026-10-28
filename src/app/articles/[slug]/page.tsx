import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ShieldCheck,
  FileCheck2,
  BookOpen,
  MapPin,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { getArticleBySlug, getRelatedStories } from '@/lib/content';
import { SpecimenNotice } from '@/components/news/SpecimenNotice';
import { ArticleCard } from '@/components/news/ArticleCard';
import { ShareButtons } from '@/components/news/ShareButtons';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const articleUrl = `${appUrl}/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | Coastline Reporters`,
      description: article.excerpt,
      url: articleUrl,
      type: 'article',
      publishedTime: article.published_at || undefined,
      modifiedTime: article.updated_at || undefined,
      authors: [article.author?.full_name || 'Coastline Reporters Newsdesk'],
      section: article.category?.name || 'News',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  // Requirement: "Unpublished drafts must never appear on public pages."
  if (!article) {
    notFound();
  }

  const relatedStories = await getRelatedStories(
    article.id,
    article.category?.slug || 'niger-delta',
    3
  );

  // Formatted dates (British English)
  const publishedDate = article.published_at
    ? new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      }).format(new Date(article.published_at))
    : '28 October 2026, 09:30 GMT';

  const updatedDate = article.updated_at
    ? new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      }).format(new Date(article.updated_at))
    : null;

  // Schema.org JSON-LD NewsArticle Structured Data (Section 9)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.published_at,
    dateModified: article.updated_at,
    author: {
      '@type': 'Person',
      name: article.author?.full_name || 'Coastline Reporters Staff',
      jobTitle: article.author?.title || 'Reporter',
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Coastline Reporters',
      url: appUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${appUrl}/icon`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${appUrl}/articles/${article.slug}`,
    },
  };

  // Convert raw markdown headings and paragraphs into safe semantic elements
  const renderFormattedBody = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = (key: number) => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${key}`} className="text-base sm:text-lg text-slate-800 leading-relaxed font-serif">
              {text}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushParagraph(index);
        elements.push(
          <h2
            key={`h2-${index}`}
            className="text-2xl sm:text-3xl font-black text-brand-navy-950 pt-6 pb-2 tracking-tight"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushParagraph(index);
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-xl sm:text-2xl font-bold text-brand-navy-950 pt-4 pb-1 tracking-tight"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('> ')) {
        flushParagraph(index);
        elements.push(
          <blockquote
            key={`quote-${index}`}
            className="border-l-4 border-brand-teal-600 bg-brand-teal-50/50 pl-5 pr-4 py-3 my-6 italic text-slate-800 text-lg sm:text-xl font-serif rounded-r"
          >
            &ldquo;{trimmed.replace('> ', '').replace(/^"|"$/g, '')}&rdquo;
          </blockquote>
        );
      } else if (trimmed.startsWith('- ')) {
        flushParagraph(index);
        elements.push(
          <li key={`li-${index}`} className="text-slate-800 list-disc ml-6 leading-relaxed">
            {trimmed.replace('- ', '')}
          </li>
        );
      } else if (trimmed === '') {
        flushParagraph(index);
      } else {
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph(lines.length);
    return elements;
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-slate-500 pb-2 border-b border-slate-200">
          <Link href="/" className="hover:text-brand-teal-700 font-medium">Home</Link>
          <span>/</span>
          <Link
            href={article.category ? `/category/${article.category.slug}` : '/'}
            className="hover:text-brand-teal-700 font-medium"
          >
            {article.category?.name || 'News'}
          </Link>
          {article.state && (
            <>
              <span>/</span>
              <span className="text-brand-teal-700 uppercase font-semibold text-[11px]">
                {article.state} State
              </span>
            </>
          )}
          <span>/</span>
          <span className="text-slate-400 truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Phase 2 Specimen Prototype Notice */}
        <SpecimenNotice />

        {/* 16. Corrections or Updates Notice (Item 16) */}
        {article.correction_notice && (
          <aside aria-label="Editorial Correction Notice" className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg text-xs text-amber-950 flex items-start gap-2.5">
            <AlertCircle size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold uppercase tracking-wider text-[11px] text-amber-900">
                Editorial Correction &amp; Clarification Notice
              </strong>
              <p className="mt-0.5 leading-relaxed">{article.correction_notice}</p>
            </div>
          </aside>
        )}

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* 3. Category Kicker (Item 3) */}
            <Link
              href={article.category ? `/category/${article.category.slug}` : '#'}
              className="px-2.5 py-1 rounded bg-brand-navy-900 text-brand-teal-400 text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-850 transition-colors"
            >
              {article.category?.name}
            </Link>

            {article.state && (
              <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-800">
                {article.state} State
              </span>
            )}

            <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
              <Clock size={12} />
              <span>{article.read_time_minutes || 5} min read</span>
            </span>
          </div>

          {/* 1. Headline (Item 1) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy-950 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* 2. Optional Subheadline (Item 2) */}
          {article.subheadline && (
            <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug border-l-4 border-brand-teal-500 pl-4 py-1">
              {article.subheadline}
            </p>
          )}

          {/* 4. Reporter Name & Byline, 5. Published Date/Time, 6. Updated Timestamp */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-navy-900 text-brand-teal-400 flex items-center justify-center font-bold text-sm">
                <User size={18} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">{article.author?.full_name}</div>
                <div className="text-slate-500">{article.author?.title || 'Senior Investigative Correspondent'}</div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1 text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                <span>Published: {publishedDate}</span>
              </div>
              {updatedDate && (
                <div className="text-[11px] text-slate-400 italic">
                  Last updated: {updatedDate}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* 7. Featured Photograph, 8. Caption, 9. Credit (Items 7, 8, 9) */}
        <figure className="space-y-2">
          <div className="w-full aspect-16/9 bg-linear-to-br from-brand-navy-950 via-brand-navy-900 to-brand-teal-950 rounded-lg flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:20px_20px]" />
            <span className="text-brand-teal-400 font-black tracking-widest text-sm uppercase">
              Coastline Reporters &bull; Field Photography Desk
            </span>
            <span className="text-slate-300 text-xs mt-1.5 max-w-lg">
              {article.featured_image_caption || article.title}
            </span>
          </div>

          <figcaption className="text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-1 px-1 pt-1 border-b border-slate-100 pb-2">
            <span className="italic">{article.featured_image_caption}</span>
            <span className="font-semibold text-slate-600 whitespace-nowrap">
              Photo Credit: {article.featured_image_credit || 'Coastline Reporters Bureau Archive'}
            </span>
          </figcaption>
        </figure>

        {/* 10. Full Article Body, 11. Subheadings, 12. Quotations (Items 10, 11, 12) */}
        <div className="prose max-w-none space-y-4 pt-2">
          {renderFormattedBody(article.content)}
        </div>

        {/* 13. Source References Where Appropriate (Item 13) */}
        {article.sources && article.sources.length > 0 && (
          <section aria-labelledby="sources-heading" className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2 text-xs text-slate-700">
            <h3 id="sources-heading" className="font-extrabold uppercase tracking-wider text-brand-navy-950 flex items-center gap-1.5">
              <BookOpen size={14} className="text-brand-teal-700" />
              <span>Documentary Sources &amp; Public Records Referenced</span>
            </h3>
            <ul className="space-y-1.5 pt-1 pl-2">
              {article.sources.map((source, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-teal-700 font-bold">&bull;</span>
                  <span className="font-medium text-slate-800">{source.title}</span>
                  {source.publisher && (
                    <span className="text-slate-500">({source.publisher})</span>
                  )}
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal-700 hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>Record</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Editorial Standards Seal */}
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <FileCheck2 size={18} className="text-brand-teal-700 flex-shrink-0" />
            <span>
              This report adheres to the Coastline Reporters Charter for Editorial Independence, Source Protection, and Multi-Source Verification.
            </span>
          </div>
          <Link
            href="/editorial-policy"
            className="text-brand-teal-700 font-bold hover:underline whitespace-nowrap"
          >
            Editorial Policy
          </Link>
        </div>

        {/* 15. Social Sharing Bar (Item 15) */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-navy-950"
          >
            <ArrowLeft size={14} />
            <span>Return to Top Stories</span>
          </Link>

          <ShareButtons title={article.title} />
        </div>

        {/* 14. Related Stories (Item 14) */}
        {relatedStories.length > 0 && (
          <section aria-labelledby="related-coverage-heading" className="pt-10 border-t-2 border-brand-teal-500 space-y-4">
            <h2 id="related-coverage-heading" className="text-xl font-black text-brand-navy-950 uppercase tracking-tight">
              Related Coverage &amp; Investigative Inquiries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="standard" />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
