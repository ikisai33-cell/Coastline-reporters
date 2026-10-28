'use client';

import React from 'react';
import { CheckSquare, MessageSquare, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export default function NewsroomReviewsPage() {
  const handleInspect = (title: string) => {
    alert(`[Phase 3 Blueprint]: Inline draft diff inspector and peer review markup opened for "${title}".`);
  };

  const handleClear = (title: string) => {
    alert(`[Phase 3 Blueprint]: Fact-check verification sign-off submitted for "${title}". Triggering Editor-in-Chief review.`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-700">
          Peer Review &amp; Clearance (Phase 3 Blueprint)
        </span>
        <h1 className="text-2xl font-black text-brand-navy-950 mt-1">
          Editorial Review Queue
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Managing editors, section editors, and legal counsel scrutinize drafts against Coastline Reporters verification policies before sign-off.
        </p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg border border-amber-200 text-xs text-amber-950">
        <p>
          <strong>Phase 1 Architectural Status:</strong> The PostgreSQL <code>editorial_reviews</code> table and review decision triggers are fully modeled in migration scripts. Interactive inline comment threads, line-by-line editorial markups, and one-click approvals will be fully functional in <strong>Phase 3</strong>.
        </p>
      </div>

      {/* Review Queue Cards */}
      <div className="space-y-4">
        {[
          {
            title: 'Audit of Niger Delta Coastal Defense Funding Allocations (2024-2026)',
            desk: 'Environment & Accountability',
            reporter: 'Tarebi Wilcox',
            stage: 'Awaiting Fact-Check Clearance',
            priority: 'High',
            status: 'under_review',
          },
          {
            title: 'Subsea Fiber Cable Connectivity & Internet Resilience in Riverine Communities',
            desk: 'Technology Desk',
            reporter: 'Ebiere Dan-Princewill',
            stage: 'Section Editor Structural Review',
            priority: 'Normal',
            status: 'under_review',
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold uppercase text-[10px]">
                  {item.stage}
                </span>
                <span className="text-slate-400">&bull;</span>
                <span className="font-semibold text-brand-teal-700">{item.desk}</span>
              </div>
              <h3 className="font-bold text-sm text-brand-navy-950">{item.title}</h3>
              <p className="text-xs text-slate-500">By {item.reporter} &bull; Priority: {item.priority}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleInspect(item.title)}
                className="px-3 py-1.5 rounded border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
              >
                Inspect Draft
              </button>
              <button
                type="button"
                onClick={() => handleClear(item.title)}
                className="px-3 py-1.5 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-brand-teal-400 font-bold text-xs transition-colors"
              >
                Clear for Publish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
