import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileEdit, CheckCircle, Clock, ShieldCheck, AlertCircle, ArrowUpRight, Lock } from 'lucide-react';
import { NEWSROOM_ROLES } from '@/lib/constants/navigation';

export const metadata: Metadata = {
  title: 'Newsroom Overview',
  description: 'Coastline Reporters Newsroom Dashboard - Phase 1 Architectural Framework',
};

export default function NewsroomDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Phase 3 Scope Notice */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg border border-amber-200">
        <div className="flex items-start gap-3">
          <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950">
            <h2 className="font-bold text-sm text-amber-900">
              Newsroom Dashboard: Phase 1 Architectural Blueprint
            </h2>
            <p className="mt-1 leading-relaxed">
              In accordance with Section 5 (Task C &amp; D) and Section 6 of the Master Instructions, the complete multi-user publishing CMS and editorial approval workflow will be fully implemented in <strong>Phase 3</strong>. This Phase 1 environment verifies the route hierarchy, data schema relationships, role access matrices, and Row-Level Security policies.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Health & Pipeline KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Draft Pipeline</span>
            <FileEdit size={16} className="text-slate-400" />
          </div>
          <div className="text-2xl font-black text-brand-navy-950">12</div>
          <p className="text-[11px] text-slate-500">Reporters drafting in progress</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Under Editorial Review</span>
            <Clock size={16} className="text-amber-500" />
          </div>
          <div className="text-2xl font-black text-brand-navy-950">4</div>
          <p className="text-[11px] text-amber-700 font-medium">Pending section editor sign-off</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Published Stories</span>
            <CheckCircle size={16} className="text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-brand-navy-950">6</div>
          <p className="text-[11px] text-slate-500">Live Phase 1 specimens</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Active Bureaus</span>
            <ShieldCheck size={16} className="text-brand-teal-600" />
          </div>
          <div className="text-2xl font-black text-brand-navy-950">5</div>
          <p className="text-[11px] text-slate-500">PH, Warri, Yenagoa, Lagos, Abuja</p>
        </div>
      </div>

      {/* Main Grid: Publishing Workflow + Access Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 7-Stage Editorial Publishing Pipeline */}
        <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-brand-navy-950">
              Editorial Publishing Lifecycle
            </h2>
            <span className="text-[11px] text-slate-500 font-mono">ISO-Grade Governance</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Coastline Reporters enforces a strict multi-tier editorial progression preventing unauthorized publishing:
          </p>

          <div className="space-y-3 pt-2">
            {[
              { stage: '1. Story Pitch', desc: 'Reporter submits investigative pitch with proposed source list and hypothesis.', role: 'Reporter & Section Editor' },
              { stage: '2. Draft & Investigation', desc: 'Field reporting, primary evidence collection, and draft composition.', role: 'Reporter' },
              { stage: '3. Section Review', desc: 'Section Editor examines factual accuracy, structure, and tone.', role: 'Section Editor' },
              { stage: '4. Legal & Fact-Checking', desc: 'Multi-source confirmation, legal risk review, and defamatory risk analysis.', role: 'Managing Editor & Legal' },
              { stage: '5. Executive Approval', desc: 'Final sign-off by Editor-in-Chief prior to staging.', role: 'Editor-in-Chief' },
              { stage: '6. Live Publication', desc: 'Automated release, RSS update, and social syndication.', role: 'System Automated' },
              { stage: '7. Revisions & Errata', desc: 'Immutable version control and transparent corrections if updated.', role: 'Managing Editor' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-md bg-slate-50 border border-slate-200/70 text-xs">
                <span className="w-5 h-5 rounded-full bg-brand-navy-900 text-brand-teal-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-navy-950">{item.stage}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">{item.role}</span>
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Roles & Authorization Matrix */}
        <div className="lg:col-span-5 bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-brand-navy-950">
              Role-Based Access Control (RBAC)
            </h2>
            <Lock size={15} className="text-slate-400" />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Newsroom permissions are enforced strictly via PostgreSQL Row-Level Security (RLS) policies. Client-side fields cannot grant elevated access:
          </p>

          <div className="space-y-2 pt-2">
            {NEWSROOM_ROLES.map((role) => (
              <div key={role.id} className="flex items-center justify-between p-2.5 rounded border border-slate-200 hover:bg-slate-50 transition-colors text-xs">
                <div>
                  <div className="font-bold text-brand-navy-950">{role.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono">role: {role.id}</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-teal-100 text-brand-teal-800">
                  Level {role.level}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/newsroom/login"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-brand-teal-400 font-bold text-xs transition-colors"
            >
              <span>Test Staff Authentication Flow</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
