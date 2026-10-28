import React from 'react';
import Link from 'next/link';
import { Tv, Radio, PlayCircle, Mic, ArrowRight, Video, Sparkles } from 'lucide-react';

export const MultimediaPreviewSection: React.FC = () => {
  return (
    <section aria-labelledby="multimedia-heading" className="space-y-6 pt-8 border-t-2 border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal-700">
            <Sparkles size={14} />
            <span>Digital Video &amp; Audio Programmes</span>
          </div>
          <h2 id="multimedia-heading" className="text-2xl font-black text-brand-navy-950 uppercase tracking-tight mt-0.5">
            Coastline TV &amp; Podcasts
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Original documentaries, riverine field interviews, and weekly investigative podcasts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-brand-navy-900 text-brand-teal-400">
            Phase 2 Prototype Layout
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coastline TV Preview Card */}
        <div className="bg-brand-navy-950 text-white rounded-lg border border-brand-navy-800 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-teal-400 font-extrabold text-sm uppercase tracking-wider">
                <Tv size={18} />
                <span>Coastline TV &bull; Video Desks</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-navy-850 text-brand-teal-300 border border-brand-navy-700">
                Scheduled for Phase 5
              </span>
            </div>

            {/* Video Player Visual Frame (Clearly labelled empty state / preview) */}
            <div className="aspect-16/9 bg-linear-to-br from-brand-navy-900 to-brand-navy-850 rounded-md border border-brand-navy-800 flex flex-col items-center justify-center p-6 text-center relative group">
              <div className="w-14 h-14 rounded-full bg-brand-teal-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <PlayCircle size={32} />
              </div>
              <p className="text-xs font-bold text-slate-200 mt-3">
                [Video Stream Preview]: Mangrove Estuary Reforestation Field Briefing
              </p>
              <span className="text-[10px] text-slate-400 mt-1">
                High-definition transcode pipeline will stream live in Phase 5
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Broadcast investigations and field reports from coastal creeks and maritime hubs across the Niger Delta.
            </p>
          </div>

          <div className="px-6 py-4 bg-brand-navy-900/60 border-t border-brand-navy-850 flex items-center justify-between text-xs">
            <Link
              href="/coastline-tv"
              className="text-brand-teal-400 font-bold hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore Coastline TV Portal</span>
              <ArrowRight size={14} />
            </Link>
            <span className="text-slate-400 text-[11px]">Free Public Broadcast</span>
          </div>
        </div>

        {/* Coastline Podcasts Preview Card */}
        <div className="bg-brand-navy-950 text-white rounded-lg border border-brand-navy-800 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-teal-400 font-extrabold text-sm uppercase tracking-wider">
                <Radio size={18} />
                <span>Coastline Podcasts &bull; Audio Desk</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-navy-850 text-brand-teal-300 border border-brand-navy-700">
                Scheduled for Phase 5
              </span>
            </div>

            {/* Audio Player Visual Frame */}
            <div className="aspect-16/9 bg-linear-to-br from-brand-navy-900 to-brand-navy-850 rounded-md border border-brand-navy-800 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-brand-teal-900 text-brand-teal-300 flex items-center justify-center">
                <Mic size={28} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-100">The Coastal Briefing &bull; Episode 01</h4>
                <p className="text-[11px] text-brand-teal-400 font-mono mt-0.5">
                  &ldquo;Decentralising Energy and Securing Estuary Commerce&rdquo;
                </p>
              </div>
              {/* Simulated Audio Waveform */}
              <div className="flex items-center gap-1 h-6">
                {[40, 70, 90, 60, 30, 80, 100, 45, 65, 85, 30, 75, 95, 50, 80].map((height, idx) => (
                  <span
                    key={idx}
                    className="w-1 bg-brand-teal-500 rounded-full"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Weekly audio discussions, oral history archives, and deep-dive analyses with frontline maritime leaders.
            </p>
          </div>

          <div className="px-6 py-4 bg-brand-navy-900/60 border-t border-brand-navy-850 flex items-center justify-between text-xs">
            <Link
              href="/podcasts"
              className="text-brand-teal-400 font-bold hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore Podcasts Directory</span>
              <ArrowRight size={14} />
            </Link>
            <span className="text-slate-400 text-[11px]">RSS Syndication Planned</span>
          </div>
        </div>
      </div>
    </section>
  );
};
