import React from 'react';
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { Article } from '@/types';
import { SpecimenNotice } from './SpecimenNotice';

interface ArticleCardProps {
  article: Article;
  variant?: 'hero' | 'featured' | 'standard' | 'compact' | 'horizontal';
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'standard',
  className = '',
}) => {
  const articleUrl = `/articles/${article.slug}`;

  // Image Fallback Placeholder component with Coastline theme
  const renderImageFallback = (aspectClass: string) => (
    <div className={`w-full ${aspectClass} bg-linear-to-br from-brand-navy-900 to-brand-navy-800 flex flex-col items-center justify-center p-4 relative overflow-hidden group`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className="text-brand-teal-400 font-black tracking-widest text-xs uppercase opacity-80">
        Coastline Media
      </span>
      <span className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">
        {article.category?.name || 'News Desk'}
      </span>
    </div>
  );

  // 1. HERO VARIANT (BBC News Lead Story Style)
  if (variant === 'hero') {
    return (
      <article className={`bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative">
            <Link href={articleUrl} className="block overflow-hidden">
              {renderImageFallback('aspect-16/10')}
            </Link>
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-sm text-xs font-bold uppercase tracking-wider bg-brand-navy-900 text-brand-teal-400 border border-brand-teal-500/30">
                {article.category?.name}
              </span>
              {article.is_specimen && <SpecimenNotice variant="pill" />}
            </div>
          </div>
          <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-2 text-xs text-brand-teal-700 font-bold uppercase tracking-wider mb-2">
                <span>Lead Investigation</span>
                <span>&bull;</span>
                <span className="text-slate-500 font-normal">{article.read_time_minutes || 5} min read</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy-950 tracking-tight leading-tight hover:text-brand-teal-700 transition-colors">
                <Link href={articleUrl}>{article.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <User size={13} className="text-brand-teal-600" />
                <span className="font-semibold text-slate-800">{article.author?.full_name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // 2. FEATURED VARIANT (Top Secondary Stories)
  if (variant === 'featured') {
    return (
      <article className={`bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}>
        <div>
          <div className="relative">
            <Link href={articleUrl} className="block overflow-hidden">
              {renderImageFallback('aspect-16/9')}
            </Link>
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <span className="px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase tracking-wider bg-brand-navy-900 text-brand-teal-400">
                {article.category?.name}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 tracking-tight leading-snug hover:text-brand-teal-700 transition-colors">
              <Link href={articleUrl}>{article.title}</Link>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>

        <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="font-medium text-slate-700">{article.author?.full_name}</span>
          <div className="flex items-center gap-1">
            <Clock size={11} />
            <span>{article.read_time_minutes || 4}m read</span>
          </div>
        </div>
      </article>
    );
  }

  // 3. COMPACT VARIANT (Trending / Side Column list)
  if (variant === 'compact') {
    return (
      <article className={`py-3 border-b border-slate-200 last:border-0 ${className}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal-700">
            {article.category?.name}
          </span>
          {article.is_specimen && <SpecimenNotice variant="pill" />}
        </div>
        <h4 className="text-sm font-bold text-brand-navy-950 leading-snug hover:text-brand-teal-700 transition-colors">
          <Link href={articleUrl}>{article.title}</Link>
        </h4>
        <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1.5">
          <span>{article.author?.full_name}</span>
          <span>&bull;</span>
          <div className="flex items-center gap-1">
            <Clock size={10} />
            <span>{article.read_time_minutes || 3}m</span>
          </div>
        </div>
      </article>
    );
  }

  // 4. HORIZONTAL VARIANT (Archive / Category lists)
  if (variant === 'horizontal') {
    return (
      <article className={`bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow p-4 ${className}`}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-48 flex-shrink-0">
            <Link href={articleUrl}>
              {renderImageFallback('aspect-16/10 rounded')}
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-teal-100 text-brand-teal-800">
                  {article.category?.name}
                </span>
                {article.is_specimen && <SpecimenNotice variant="pill" />}
                <span className="text-[11px] text-slate-500">{article.read_time_minutes || 4} min read</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy-950 leading-snug hover:text-brand-teal-700 transition-colors">
                <Link href={articleUrl}>{article.title}</Link>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{article.author?.full_name}</span>
              <span>Published specimen</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // STANDARD CARD VARIANT (Default)
  return (
    <article className={`bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}>
      <div>
        <Link href={articleUrl} className="block overflow-hidden">
          {renderImageFallback('aspect-16/9')}
        </Link>
        <div className="p-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-brand-teal-700 uppercase tracking-wider text-[11px]">
              {article.category?.name}
            </span>
            {article.is_specimen && <SpecimenNotice variant="pill" />}
          </div>
          <h3 className="text-base font-bold text-brand-navy-950 leading-snug hover:text-brand-teal-700 transition-colors">
            <Link href={articleUrl}>{article.title}</Link>
          </h3>
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>
      <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="font-medium text-slate-700">{article.author?.full_name}</span>
        <span>{article.read_time_minutes || 4}m read</span>
      </div>
    </article>
  );
};
