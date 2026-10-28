import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckSquare, Image as ImageIcon, Settings, LogIn, ExternalLink } from 'lucide-react';
import { CoastlineEmblem } from '@/components/brand/CoastlineEmblem';

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      {/* Newsroom Dedicated Control Bar */}
      <div className="bg-brand-navy-950 text-white rounded-lg p-4 border border-brand-navy-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CoastlineEmblem size={36} variant="color" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-wider uppercase text-white">
                Coastline Reporters Newsroom
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-teal-900 text-brand-teal-300 border border-brand-teal-700/50">
                Staff Portal
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Authorised Editorial Publishing & Governance System (Phase 1 Prototype)
            </p>
          </div>
        </div>

        {/* Quick Newsroom Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <Link
            href="/newsroom"
            className="px-2.5 py-1.5 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-slate-200 hover:text-white border border-brand-navy-800 transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/newsroom/articles"
            className="px-2.5 py-1.5 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-slate-200 hover:text-white border border-brand-navy-800 transition-colors"
          >
            Pipeline
          </Link>
          <Link
            href="/newsroom/reviews"
            className="px-2.5 py-1.5 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-slate-200 hover:text-white border border-brand-navy-800 transition-colors"
          >
            Review Desk
          </Link>
          <Link
            href="/newsroom/media"
            className="px-2.5 py-1.5 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-slate-200 hover:text-white border border-brand-navy-800 transition-colors"
          >
            Media Assets
          </Link>
          <Link
            href="/newsroom/settings"
            className="px-2.5 py-1.5 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-slate-200 hover:text-white border border-brand-navy-800 transition-colors"
          >
            Access Roles
          </Link>
          <Link
            href="/newsroom/login"
            className="px-2.5 py-1.5 rounded bg-brand-teal-700 hover:bg-brand-teal-600 text-white font-semibold transition-colors flex items-center gap-1"
          >
            <LogIn size={13} />
            <span>Staff Login</span>
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
