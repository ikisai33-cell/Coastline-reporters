import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Clock, Calendar, User, ArrowLeft, ShieldCheck, FileCheck2 } from 'lucide-react';
import { SPECIMEN_ARTICLES } from '@/lib/constants/specimens';
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
  const article = SPECIMEN_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return { title: 'Article Not Found' };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = SPECIMEN_ARTICLES.find((a) => a.slug === slug) || SPECIMEN_ARTICLES[0];

  if (!article) {
    notFound();
  }

  const relatedArticles = SPECIMEN_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 pb-2 border-b border-slate-200">
        <Link href="/" className="hover:text-brand-teal-700 font-medium">Home</Link>
        <span>/</span>
        <Link href={article.category ? `/category/${article.category.slug}` : '/'} className="hover:text-brand-teal-700 font-medium">
          {article.category?.name || 'News'}
        </Link>
        <span>/</span>
        <span className="text-slate-400 truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Specimen Notice */}
      <SpecimenNotice />

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Link
            href={article.category ? `/category/${article.category.slug}` : '#'}
            className="px-2.5 py-1 rounded bg-brand-navy-900 text-brand-teal-400 text-xs font-bold uppercase tracking-wider"
          >
            {article.category?.name}
          </Link>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock size={12} />
            <span>{article.read_time_minutes || 5} min read</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy-950 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed border-l-4 border-brand-teal-500 pl-4 py-1">
          {article.excerpt}
        </p>

        {/* Byline & Publication Timestamp */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-navy-900 text-brand-teal-400 flex items-center justify-center font-bold text-sm">
              <User size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">{article.author?.full_name}</div>
              <div className="text-slate-500">{article.author?.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={13} />
              <span>Published: 28 October 2026</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <ShieldCheck size={13} />
              <span>Fact-Checked</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image Container */}
      <figure className="space-y-2">
        <div className="w-full aspect-16/9 bg-linear-to-br from-brand-navy-900 to-brand-navy-800 rounded-lg flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:20px_20px]" />
          <span className="text-brand-teal-400 font-black tracking-widest text-sm uppercase">
            Coastline Reporters Photo Desk
          </span>
          <span className="text-slate-300 text-xs mt-1 max-w-md">
            {article.featured_image_caption}
          </span>
        </div>
        <figcaption className="text-xs text-slate-500 italic px-1">
          {article.featured_image_caption} &bull; Image Desk: Coastline Editorial Archives.
        </figcaption>
      </figure>

      {/* Article Content Body */}
      <div className="prose max-w-none text-slate-800 leading-relaxed space-y-4 pt-2">
        <p className="text-base sm:text-lg leading-relaxed">
          Across the brackish estuaries of the Niger Delta basin, cooperative coastal alliances have embarked on a comprehensive mangrove reforestation project aimed at stabilizing vulnerable shorelines and revitalizing indigenous marine ecosystems.
        </p>

        <p className="leading-relaxed">
          Environmental researchers affiliated with regional academic institutes emphasize that mangrove ecosystems serve as indispensable natural barriers against rising sea levels, storm surges, and shoreline degradation. In communities where tidal erosion has steadily encroached upon residential clusters and ancestral fishing piers, these botanical seawalls represent both ecological resilience and economic survival.
        </p>

        <blockquote className="border-l-4 border-brand-teal-600 pl-4 py-2 italic text-slate-700 bg-slate-100 rounded-r my-6">
          &ldquo;Preserving the coastline is not merely an environmental obligation; it is fundamental to the economic livelihood and cultural heritage of our maritime communities.&rdquo;
        </blockquote>

        <h2 className="text-2xl font-bold text-brand-navy-950 pt-4 pb-2">
          Participatory Governance & Community Monitoring
        </h2>

        <p className="leading-relaxed">
          The initiative emphasizes direct participatory governance, pairing indigenous coastal fishermen with marine biologists to map high-risk saltwater inlets. Over the past twelve months, community nurseries have nurtured resilient saplings tailored for brackish water endurance, creating local green employment for youth and women in coastal villages.
        </p>

        <p className="leading-relaxed">
          As federal environmental authorities review nationwide coastal climate resilience strategies, this community-centered approach offers a transparent, verifiable benchmark for conservation investments across the southern maritime basin.
        </p>
      </div>

      {/* Editorial Standards & Verification Seal */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <FileCheck2 size={18} className="text-brand-teal-700" />
          <span>This specimen has been reviewed in accordance with Coastline Reporters Editorial Independence and Fact-Checking Standards.</span>
        </div>
        <Link href="/editorial-policy" className="text-brand-teal-700 font-bold hover:underline whitespace-nowrap">
          Read Editorial Policy
        </Link>
      </div>

      {/* Social Share Bar with Client ShareButtons */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-navy-950"
        >
          <ArrowLeft size={14} />
          <span>Back to Top Stories</span>
        </Link>

        <ShareButtons title={article.title} />
      </div>

      {/* Related Stories */}
      <section className="pt-10 border-t-2 border-brand-teal-500">
        <h3 className="text-xl font-black text-brand-navy-950 uppercase tracking-tight mb-4">
          Related Inquiries & Coverage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <ArticleCard key={rel.id} article={rel} variant="standard" />
          ))}
        </div>
      </section>
    </article>
  );
}
