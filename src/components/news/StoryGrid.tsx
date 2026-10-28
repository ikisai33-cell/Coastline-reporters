import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame, Tv, Radio } from 'lucide-react';
import { Article } from '@/types';
import { ArticleCard } from './ArticleCard';
import { SpecimenNotice } from './SpecimenNotice';

interface StoryGridProps {
  articles: Article[];
}

export const StoryGrid: React.FC<StoryGridProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
        <p className="text-slate-500 text-sm">No articles currently published in this section.</p>
      </div>
    );
  }

  const heroArticle = articles.find((a) => a.is_featured) || articles[0];
  const remainingFeatured = articles
    .filter((a) => a.id !== heroArticle.id)
    .slice(0, 2);
  const sideArticles = articles
    .filter((a) => a.id !== heroArticle.id && !remainingFeatured.some((f) => f.id === a.id))
    .slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Specimen Disclaimer Notice */}
      <SpecimenNotice />

      {/* Top Editorial Hierarchy: Lead Hero + Secondary + Side Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Column (8 cols): Hero Story + 2 Featured */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Hero Card */}
          <ArticleCard article={heroArticle} variant="hero" />

          {/* 2 Featured Supporting Stories */}
          {remainingFeatured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingFeatured.map((article) => (
                <ArticleCard key={article.id} article={article} variant="featured" />
              ))}
            </div>
          )}
        </div>

        {/* Side Column (4 cols): Editor's Picks & Multimedia Highlights */}
        <div className="lg:col-span-4 space-y-6">
          {/* Editor's Analysis & Top Picks */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-2">
              <div className="flex items-center gap-1.5 text-brand-navy-950 font-black text-sm uppercase tracking-wider">
                <Flame size={16} className="text-brand-teal-600" />
                <span>Editorial Focus</span>
              </div>
              <span className="text-[11px] font-semibold text-brand-teal-700">Niger Delta</span>
            </div>

            <div className="divide-y divide-slate-100">
              {sideArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </div>

          {/* Multimedia Spotlight Card */}
          <div className="bg-brand-navy-950 text-white rounded-lg border border-brand-navy-800 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-brand-navy-850 pb-2">
              <span className="font-extrabold uppercase text-xs tracking-wider text-brand-teal-400">
                Coastline Multimedia
              </span>
              <span className="text-[10px] bg-brand-teal-900 text-brand-teal-300 px-2 py-0.5 rounded">
                Phase 5 Preview
              </span>
            </div>

            <div className="space-y-3">
              <Link
                href="/coastline-tv"
                className="flex items-start gap-3 p-2.5 rounded-md bg-brand-navy-900 hover:bg-brand-navy-850 border border-brand-navy-800 transition-colors group"
              >
                <div className="p-2 rounded bg-brand-teal-900/60 text-brand-teal-400 group-hover:scale-105 transition-transform">
                  <Tv size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-brand-teal-400 transition-colors">
                    Coastline TV & Video Desks
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Live broadcasts, documentaries, and investigative video reports.
                  </p>
                </div>
              </Link>

              <Link
                href="/podcasts"
                className="flex items-start gap-3 p-2.5 rounded-md bg-brand-navy-900 hover:bg-brand-navy-850 border border-brand-navy-800 transition-colors group"
              >
                <div className="p-2 rounded bg-brand-teal-900/60 text-brand-teal-400 group-hover:scale-105 transition-transform">
                  <Radio size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-brand-teal-400 transition-colors">
                    Coastline Podcasts
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Weekly in-depth audio discussions on governance, oil politics, and culture.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Focus: Niger Delta & Environment Section */}
      <section className="pt-6 border-t-2 border-brand-teal-500">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-black text-brand-navy-950 uppercase tracking-tight">
              Niger Delta & Environmental Inquiries
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Dedicated investigative coverage into maritime communities, oil remediation, and coastal ecology.
            </p>
          </div>
          <Link
            href="/category/niger-delta"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-teal-700 hover:text-brand-teal-800"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </section>
    </div>
  );
};
