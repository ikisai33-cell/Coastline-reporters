import React from 'react';
import { Metadata } from 'next';
import { History, AlertCircle, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corrections Policy',
  description: 'Coastline Reporters protocol for transparent corrections, clarifications, and editorial accountability.',
};

export default function CorrectionsPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-8 shadow-xs">
        <span className="px-2.5 py-1 rounded bg-brand-teal-100 text-brand-teal-800 text-xs font-bold uppercase tracking-wider">
          Accountability
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 tracking-tight mt-2">
          Corrections & Retractions Policy
        </h1>
        <p className="text-slate-600 text-base mt-2 leading-relaxed">
          Coastline Reporters prioritises transparency. When errors of fact occur, we correct them promptly, prominently, and unreservedly.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-8 text-slate-800 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <History size={18} className="text-brand-teal-600" />
            <span>1. Mandatory Footnotes on Corrections</span>
          </h2>
          <p>
            When a published story is altered to correct a factual inaccuracies, a clear footnote is appended at the top or bottom of the article specifying the exact date, time, and nature of the correction. Articles are never silently edited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <AlertCircle size={18} className="text-brand-teal-600" />
            <span>2. Submitting a Correction Request</span>
          </h2>
          <p>
            Readers, subjects of reporting, and institutions who identify an error of fact should email <strong>corrections@coastlinereporters.com</strong> with the URL of the article, the specific text in dispute, and supporting documentary evidence.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <FileCheck size={18} className="text-brand-teal-600" />
            <span>3. Review Protocol & Retractions</span>
          </h2>
          <p>
            The Managing Editor and the originating reporter review every correction request within 24 hours. If an article fails our threshold of factual integrity, a full retraction will be issued and archived in our public corrections log.
          </p>
        </section>
      </div>
    </div>
  );
}
