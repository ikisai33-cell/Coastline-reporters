import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { EDITORIAL_CATEGORIES } from '@/lib/constants/navigation';
import { getPublishedArticles } from '@/lib/content';
import { ArticleCard } from '@/components/news/ArticleCard';
import { SpecimenNotice } from '@/components/news/SpecimenNotice';
import { Pagination } from '@/components/ui/Pagination';
import { Compass, Newspaper, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = EDITORIAL_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return { title: 'Editorial Desk Not Found' };
  }

  return {
    title: `${category.name} News & Analysis`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Coastline Reporters`,
      description: category.description,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageStr } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageStr || '1', 10) || 1);
  const pageSize = 6;

  const category = EDITORIAL_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Fetch published articles for this category
  const paginatedResult = await getPublishedArticles({
    categorySlug: slug,
    page: currentPage,
    pageSize,
  });

  const { data: articles, totalPages, total } = paginatedResult;
  const featuredStory = articles.find((a) => a.is_featured) || articles[0];
  const remainingStories = articles.filter((a) => a.id !== featuredStory?.id);

  return (
    <div className="space-y-8">
      {/* Category Desk Header Banner */}
      <header className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700">
            <Newspaper size={14} />
            <span>Editorial News Desk</span>
            <span>&bull;</span>
            <span className="text-slate-500 font-normal">Coastline Reporters</span>
          </div>

          <span className="text-xs text-slate-500 font-mono">
            {total} Published {total === 1 ? 'Dispatch' : 'Dispatches'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 uppercase tracking-tight">
          {category.name}
        </h1>

        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </header>

      {/* Phase 2 Specimen Prototype Notice */}
      <SpecimenNotice />

      {articles.length > 0 ? (
        <div className="space-y-8">
          {/* Featured Story for Category (when on Page 1) */}
          {currentPage === 1 && featuredStory && (
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy-950 flex items-center gap-1.5">
                <span>Featured Investigation</span>
              </span>
              <ArticleCard article={featuredStory} variant="hero" />
            </div>
          )}

          {/* Published Articles Grid */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold uppercase tracking-wider text-brand-navy-950 pb-2 border-b border-slate-200">
              {currentPage === 1 ? 'Recent Desk Reports' : `Reports (Page ${currentPage})`}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(currentPage === 1 ? remainingStories : articles).map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
          </div>

          {/* Reusable Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/category/${slug}`}
          />
        </div>
      ) : (
        /* Professional Empty State */
        <div className="bg-white rounded-lg border border-slate-200 p-12 text-center space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Compass size={24} />
          </div>
          <h2 className="font-bold text-lg text-brand-navy-950">
            No Published Reports Currently in {category.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Our newsdesk is actively researching upcoming investigative features for this section. All reports undergo multi-source fact-checking before publication.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-xs transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Return to Top Stories</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
