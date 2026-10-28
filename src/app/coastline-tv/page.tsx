import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Tv, PlayCircle, Video, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coastline TV & Video Desks',
  description: 'Digital video broadcasts, regional documentaries, and investigative reports from Coastline Reporters.',
};

export default function CoastlineTvPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-brand-navy-950 text-white rounded-lg border border-brand-navy-800 p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded bg-brand-teal-900 text-brand-teal-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Tv size={14} />
            <span>Phase 5 Scheduled Capability</span>
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Coastline TV
        </h1>
        <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
          High-definition broadcast video journalism, long-form documentary storytelling, and live press event coverage from across the Niger Delta and Nigeria.
        </p>
      </div>

      {/* Development Roadmap Callout */}
      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-6">
        <div className="border-l-4 border-brand-teal-500 pl-4 py-1">
          <h2 className="text-lg font-bold text-brand-navy-950">Architectural Status: Scheduled for Phase 5</h2>
          <p className="text-xs text-slate-500 mt-1">
            Coastline TV video streaming and transcoding infrastructure is scheduled for implementation in Phase 5 of the Master Development Plan following newsroom workflow consolidation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <Video size={20} className="text-brand-teal-700" />
            <h3 className="font-bold text-sm text-brand-navy-950">Investigative Documentaries</h3>
            <p className="text-xs text-slate-600">Deep-dive video features on oil spills, estuary conservation, and riverine trade.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <PlayCircle size={20} className="text-brand-teal-700" />
            <h3 className="font-bold text-sm text-brand-navy-950">Coastline Live Desk</h3>
            <p className="text-xs text-slate-600">Real-time live feeds covering elections, legislative hearings, and coastal summits.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <Clock size={20} className="text-brand-teal-700" />
            <h3 className="font-bold text-sm text-brand-navy-950">Digital Video Shorts</h3>
            <p className="text-xs text-slate-600">Mobile-optimized daily news roundups and explanatory infographics.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
          <Link href="/" className="text-brand-teal-700 font-bold hover:underline">
            &larr; Return to Home Top Stories
          </Link>
          <span className="text-slate-400">Master Plan Phase 5 Milestone</span>
        </div>
      </div>
    </div>
  );
}
