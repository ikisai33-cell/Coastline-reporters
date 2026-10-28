import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Compass, Calendar, ArrowRight, Filter, AlertCircle } from 'lucide-react';
import { getPublishedArticles, getEditorialCategories } from '@/lib/content';
import { NIGER_DELTA_STATES } from '@/lib/constants/states';
import { ArticleCard } from '@/components/news/ArticleCard';
import { SpecimenNotice } from '@/components/news/SpecimenNotice';
import { Pagination } from '@/components/ui/Pagination';

export const metadata: Metadata = {
  title: 'Search Published Reports & Inquiries',
  description: 'Search Coastline Reporters investigative reports, regional dispatches, and archives across the Niger Delta and Nigeria.',
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    state?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '', category = 'all', state = 'all', page: pageStr } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageStr || '1', 10) || 1);
  const pageSize = 8;

  const [categories, searchResult] = await Promise.all([
    getEditorialCategories(),
    getPublishedArticles({
      searchQuery: q,
      categorySlug: category !== 'all' ? category : undefined,
      state: state !== 'all' ? state : undefined,
      page: currentPage,
      pageSize,
    }),
  ]);

  const { data: articles, total, totalPages } = searchResult;

  // Build query string for pagination
  const buildPaginationQuery = () => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (category !== 'all') params.set('category', category);
    if (state !== 'all') params.set('state', state);
    return `/search?${params.toString()}`;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Search Header */}
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700 mb-2">
          <Search size={14} />
          <span>Public News Archive Search</span>
        </div>
        <h1 className="text-3xl font-black text-brand-navy-950 uppercase tracking-tight">
          Search Coastline Reporters
        </h1>
        <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
          Search across published investigative journalism, environmental inquiries, policy reviews, and cultural reporting.
        </p>
      </div>

      <SpecimenNotice />

      {/* Search Input & Filtering Form */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
        <form method="GET" action="/search" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Search headlines, keywords, topics, or authors..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal-600 focus:border-brand-teal-600"
              />
              <Search
                size={18}
                className="absolute left-3 top-3 text-slate-400 pointer-events-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-md bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              Search
            </button>
          </div>

          {/* Faceted Filters: Category Desk & Niger Delta State */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <label htmlFor="category-select" className="font-bold text-slate-700">
                Editorial Desk:
              </label>
              <select
                id="category-select"
                name="category"
                defaultValue={category}
                className="border border-slate-300 rounded px-2.5 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-brand-teal-600"
              >
                <option value="all">All News Desks</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="state-select" className="font-bold text-slate-700">
                Niger Delta State:
              </label>
              <select
                id="state-select"
                name="state"
                defaultValue={state}
                className="border border-slate-300 rounded px-2.5 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-brand-teal-600"
              >
                <option value="all">All States</option>
                {NIGER_DELTA_STATES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} State
                  </option>
                ))}
              </select>
            </div>

            {(q || category !== 'all' || state !== 'all') && (
              <Link
                href="/search"
                className="text-xs text-brand-teal-700 hover:underline font-semibold ml-auto"
              >
                Clear all filters
              </Link>
            )}
          </div>
        </form>
      </div>

      {/* Search Results Summary */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1 border-b border-slate-200 pb-2">
        <div>
          {q ? (
            <span>
              Search results for <strong>&ldquo;{q}&rdquo;</strong> &bull; Found <strong>{total}</strong> matching {total === 1 ? 'report' : 'reports'}
            </span>
          ) : (
            <span>
              Browsing all published reports &bull; <strong>{total}</strong> items in public index
            </span>
          )}
        </div>
        <span className="font-mono">Page {currentPage} of {Math.max(1, totalPages)}</span>
      </div>

      {/* Results Listing */}
      {articles.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={buildPaginationQuery()}
          />
        </div>
      ) : (
        /* Section 6: Useful empty state when no matching articles exist */
        <div className="bg-white rounded-lg border border-slate-200 p-12 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Search size={24} />
          </div>
          <h2 className="font-bold text-lg text-brand-navy-950">
            No Published Reports Matched Your Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            We could not find any published articles matching <strong>&ldquo;{q}&rdquo;</strong> with the selected filters. Please check your spelling or adjust the editorial desk filter.
          </p>
          <div className="pt-2">
            <Link
              href="/search"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-xs transition-colors"
            >
              <span>Reset Search Query</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
