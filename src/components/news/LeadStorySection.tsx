import React from 'react';
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { Article } from '@/types';
import { ArticleCard } from './ArticleCard';
import { SpecimenNotice } from './SpecimenNotice';

interface LeadStorySectionProps {
  leadStory: Article | null;
  secondaryStories: Article[];
}

export const LeadStorySection: React.FC<LeadStorySectionProps> = ({
  leadStory,
  secondaryStories,
}) => {
  if (!leadStory) {
    return null;
  }

  const leadUrl = `/articles/${leadStory.slug}`;

  // Formatted date for lead story (British English)
  const formattedDate = leadStory.published_at
    ? new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(leadStory.published_at))
    : '28 October 2026';

  return (
    <section aria-labelledby="lead-investigation-heading" className="space-y-6">
      {/* Specimen Prototype Transparency Notice */}
      <SpecimenNotice />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Principal Lead Story (8 cols on desktop) */}
        <div className="lg:col-span-8">
          <article className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Lead Image Area */}
            <div className="relative aspect-16/10 bg-linear-to-br from-brand-navy-950 via-brand-navy-900 to-brand-teal-950 flex flex-col justify-end p-6 text-white overflow-hidden group">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Category & Region Pill */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                <span className="px-3 py-1 rounded text-xs font-black uppercase tracking-wider bg-brand-navy-950/90 text-brand-teal-400 border border-brand-teal-500/40 backdrop-blur-xs">
                  {leadStory.category?.name || 'Lead Investigation'}
                </span>
                {leadStory.state && (
                  <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-brand-teal-900/80 text-white border border-brand-teal-600/40">
                    {leadStory.state.toUpperCase()} STATE
                  </span>
                )}
                {leadStory.is_specimen && <SpecimenNotice variant="pill" />}
              </div>

              {/* Watermark Branding */}
              <div className="absolute right-4 top-4 text-white/10 font-black text-2xl uppercase select-none tracking-widest hidden sm:block">
                Coastline Reporters
              </div>

              {/* Caption Overlay */}
              {leadStory.featured_image_caption && (
                <div className="z-10 text-[11px] text-slate-300 italic bg-brand-navy-950/60 p-2 rounded max-w-xl backdrop-blur-xs">
                  {leadStory.featured_image_caption}
                </div>
              )}
            </div>

            {/* Headline, Subheadline & Summary */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-teal-700 uppercase tracking-wider">
                <span>Principal Investigation</span>
                <span>&bull;</span>
                <span className="text-slate-500 font-normal">{leadStory.read_time_minutes || 5} min read</span>
              </div>

              <h1 id="lead-investigation-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy-950 tracking-tight leading-tight hover:text-brand-teal-700 transition-colors">
                <Link href={leadUrl}>{leadStory.title}</Link>
              </h1>

              {leadStory.subheadline && (
                <p className="text-base sm:text-lg font-semibold text-slate-700 leading-snug">
                  {leadStory.subheadline}
                </p>
              )}

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {leadStory.excerpt}
              </p>

              {/* Byline & Publication Timestamp */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-navy-900 text-brand-teal-400 flex items-center justify-center font-bold">
                    <User size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">{leadStory.author?.full_name}</span>
                    <span className="text-slate-400 mx-1.5">&bull;</span>
                    <span className="text-slate-500">{leadStory.author?.title || 'Editorial Correspondent'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500">
                  <Clock size={13} />
                  <span>Published: {formattedDate}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Secondary Supporting Stories (4 cols on desktop) */}
        <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
          <div className="bg-brand-navy-950 text-white rounded-lg p-4 border border-brand-navy-800">
            <h2 className="text-xs font-black uppercase tracking-wider text-brand-teal-400">
              Supporting Inquiries
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Verified investigative briefings from regional bureaux.
            </p>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {secondaryStories.map((story) => (
              <ArticleCard key={story.id} article={story} variant="standard" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
