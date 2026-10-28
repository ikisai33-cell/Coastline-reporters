import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Radio, Mic, Headphones, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coastline Podcasts & Audio Desk',
  description: 'In-depth audio journalism, discussions, and investigative audio features from Coastline Reporters.',
};

export default function PodcastsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-brand-navy-950 text-white rounded-lg border border-brand-navy-800 p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded bg-brand-teal-900 text-brand-teal-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Radio size={14} />
            <span>Phase 5 Scheduled Capability</span>
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Coastline Podcasts
        </h1>
        <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
          Audio journalism, long-form roundtable discussions, and audio documentaries exploring maritime governance, oil politics, culture, and environmental stewardship.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-6">
        <div className="border-l-4 border-brand-teal-500 pl-4 py-1">
          <h2 className="text-lg font-bold text-brand-navy-950">Architectural Status: Scheduled for Phase 5</h2>
          <p className="text-xs text-slate-500 mt-1">
            Coastline Podcasts RSS syndication, podcast player, and audio CDN pipelines are scheduled for implementation in Phase 5 of the Master Development Plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-brand-teal-700 font-bold text-sm">
              <Mic size={18} />
              <span>The Coastal Briefing</span>
            </div>
            <p className="text-xs text-slate-600">Weekly audio analysis of Niger Delta politics, energy policy, and regional security.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-brand-teal-700 font-bold text-sm">
              <Headphones size={18} />
              <span>Voices of the Delta</span>
            </div>
            <p className="text-xs text-slate-600">Oral histories, folklore, and frontline community stories from riverine elders and activists.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
          <Link href="/" className="inline-flex items-center gap-1 text-brand-teal-700 font-bold hover:underline">
            <ArrowLeft size={14} />
            <span>Return to Home Top Stories</span>
          </Link>
          <span className="text-slate-400">Master Plan Phase 5 Milestone</span>
        </div>
      </div>
    </div>
  );
}
