'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowDown, ChevronRight } from 'lucide-react';
import { Article } from '@/types';
import { ArticleCard } from './ArticleCard';

interface LatestNewsSectionProps {
  articles: Article[];
  initialCount?: number;
  increment?: number;
}

export const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({
  articles,
  initialCount = 6,
  increment = 3,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);

  const displayedArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + increment, articles.length));
  };

  return (
    <section aria-labelledby="latest-news-heading" className="space-y-6 pt-8 border-t-2 border-slate-200">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <h2 id="latest-news-heading" className="text-2xl font-black text-brand-navy-950 uppercase tracking-tight">
            Latest Dispatches
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Published reports organized in reverse chronological order across all news desks.
          </p>
        </div>
        <span className="text-xs text-slate-500 font-mono">
          Showing {displayedArticles.length} of {articles.length} dispatches
        </span>
      </div>

      {displayedArticles.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="standard" />
            ))}
          </div>

          {/* Load More Button / Mechanism */}
          {hasMore ? (
            <div className="pt-6 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-brand-teal-600 text-brand-navy-950 font-bold text-xs uppercase tracking-wider shadow-xs transition-all"
              >
                <ArrowDown size={14} className="text-brand-teal-600" />
                <span>Load More Published Reports ({articles.length - visibleCount} Remaining)</span>
              </button>
            </div>
          ) : (
            <div className="pt-4 text-center text-xs text-slate-400 italic">
              You have viewed all currently published reports.
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg border border-slate-200 text-center text-xs text-slate-500">
          No dispatches currently available.
        </div>
      )}
    </section>
  );
};
