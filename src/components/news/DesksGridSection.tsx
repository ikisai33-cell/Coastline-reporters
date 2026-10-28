import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';
import { Article, Category } from '@/types';
import { ArticleCard } from './ArticleCard';

interface DesksGridSectionProps {
  categories: Category[];
  articles: Article[];
}

export const DesksGridSection: React.FC<DesksGridSectionProps> = ({
  categories,
  articles,
}) => {
  // Editorial desks to display (excluding Niger Delta which has its own priority section)
  const targetDesks = [
    { slug: 'nigeria', title: 'Nigeria & National Affairs' },
    { slug: 'politics', title: 'Politics & Governance' },
    { slug: 'business', title: 'Business & Maritime Economy' },
    { slug: 'environment', title: 'Environment & Climate' },
    { slug: 'technology', title: 'Technology & Enterprise' },
    { slug: 'society', title: 'Society & Education' },
    { slug: 'entertainment', title: 'Culture, Arts & Heritage' },
    { slug: 'sports', title: 'Sports & Maritime Athletics' },
    { slug: 'world', title: 'World Affairs & Global Energy' },
  ];

  return (
    <div className="space-y-12 pt-8 border-t-2 border-slate-200">
      <div className="border-b border-slate-200 pb-2">
        <h2 className="text-2xl font-black text-brand-navy-950 uppercase tracking-tight">
          Specialised Editorial Desks
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Comprehensive reporting across key national, economic, and cultural beats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {targetDesks.map((desk) => {
          const deskArticles = articles.filter(
            (a) => a.category?.slug.toLowerCase() === desk.slug || a.category_id.toLowerCase() === desk.slug
          );

          // Section 3.F: "Where no articles exist, show a professional empty state or hide the section."
          if (deskArticles.length === 0) {
            return null; // Gracefully omit empty blocks to avoid clutter
          }

          const primaryArticle = deskArticles[0];
          const remainingArticles = deskArticles.slice(1, 3);

          return (
            <div
              key={desk.slug}
              className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Desk Header */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-brand-teal-500 mb-3">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-brand-navy-950">
                    {desk.title}
                  </h3>
                  <Link
                    href={`/category/${desk.slug}`}
                    className="text-[11px] font-bold text-brand-teal-700 hover:text-brand-navy-950 flex items-center gap-1"
                    title={`View all ${desk.title} stories`}
                  >
                    <span>Desk</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Primary Card in this desk */}
                <ArticleCard article={primaryArticle} variant="compact" />

                {/* Secondary list */}
                {remainingArticles.length > 0 && (
                  <div className="divide-y divide-slate-100 pt-2 border-t border-slate-100 mt-2">
                    {remainingArticles.map((subArticle) => (
                      <ArticleCard key={subArticle.id} article={subArticle} variant="compact" />
                    ))}
                  </div>
                )}
              </div>

              {/* Desk Footer Link */}
              <div className="pt-2 border-t border-slate-100 text-right">
                <Link
                  href={`/category/${desk.slug}`}
                  className="text-xs font-bold text-brand-teal-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore All {primaryArticle.category?.name || 'Stories'}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
