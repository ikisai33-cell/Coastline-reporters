'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { Article, NigerDeltaState } from '@/types';
import { NIGER_DELTA_STATES, getStateConfig } from '@/lib/constants/states';
import { ArticleCard } from './ArticleCard';

interface NigerDeltaSectionProps {
  initialArticles: Article[];
}

export const NigerDeltaSection: React.FC<NigerDeltaSectionProps> = ({
  initialArticles,
}) => {
  const [selectedState, setSelectedState] = useState<NigerDeltaState | 'all'>('all');

  // Filter articles based on selected state
  const filteredArticles = initialArticles.filter((article) => {
    if (selectedState === 'all') return true;
    return article.state?.toLowerCase() === selectedState.toLowerCase();
  });

  const activeStateConfig = selectedState !== 'all' ? getStateConfig(selectedState) : null;

  return (
    <section aria-labelledby="niger-delta-desk-heading" className="space-y-6 pt-8 border-t-4 border-brand-teal-500">
      {/* Section Masthead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700">
            <Compass size={15} />
            <span>Core Editorial Mandate &bull; Regional Priority</span>
          </div>
          <h2 id="niger-delta-desk-heading" className="text-2xl sm:text-3xl font-black text-brand-navy-950 uppercase tracking-tight mt-1">
            Niger Delta Regional Bureau
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            In-depth investigative journalism, crude oil impact tracking, estuary ecology, and grassroots community governance across the nine coastal and riverine states.
          </p>
        </div>

        <Link
          href="/category/niger-delta"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal-700 hover:text-brand-navy-950 transition-colors whitespace-nowrap self-start md:self-end"
        >
          <span>All Niger Delta Reports</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Configurable 9-State Navigation Bar */}
      <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-brand-teal-600" />
            <span>Filter Coverage by State:</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">9 Configured Regional Bureaux</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            type="button"
            onClick={() => setSelectedState('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              selectedState === 'all'
                ? 'bg-brand-navy-900 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All States ({initialArticles.length})
          </button>

          {NIGER_DELTA_STATES.map((state) => {
            const count = initialArticles.filter(
              (a) => a.state?.toLowerCase() === state.id.toLowerCase()
            ).length;
            const isSelected = selectedState === state.id;

            return (
              <button
                key={state.id}
                type="button"
                onClick={() => setSelectedState(state.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-teal-700 text-white shadow-xs font-bold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{state.name}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-brand-teal-900 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* State Spotlight Banner when a specific state is selected */}
      {activeStateConfig && (
        <div className="bg-brand-teal-50 border-l-4 border-brand-teal-600 p-4 rounded-r-lg text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-brand-teal-950">
          <div>
            <span className="font-extrabold uppercase tracking-wider text-[11px] text-brand-teal-800">
              State Focus: {activeStateConfig.name}
            </span>
            <p className="mt-0.5 text-slate-600">
              Regional Bureau Headquarters: <strong>{activeStateConfig.capital}</strong> &bull; Code: {activeStateConfig.code}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedState('all')}
            className="text-xs font-bold text-brand-teal-800 hover:underline"
          >
            &larr; View all Niger Delta states
          </button>
        </div>
      )}

      {/* Filtered Stories Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      ) : (
        /* Professional Empty State */
        <div className="bg-white rounded-lg border border-slate-200 p-12 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Compass size={24} />
          </div>
          <h3 className="font-bold text-base text-brand-navy-950">
            No Published Reports Currently Listed for {activeStateConfig?.name || 'Selected Area'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Our regional correspondents in {activeStateConfig?.name} are actively pursuing on-the-ground investigations. Published reports will appear here following multi-source editorial fact-checking.
          </p>
          <button
            type="button"
            onClick={() => setSelectedState('all')}
            className="px-4 py-2 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-xs transition-colors inline-block mt-2"
          >
            Reset to All Niger Delta Stories
          </button>
        </div>
      )}
    </section>
  );
};
