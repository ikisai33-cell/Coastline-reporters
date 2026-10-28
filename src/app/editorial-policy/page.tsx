import React from 'react';
import { Metadata } from 'next';
import { Shield, CheckCircle, Scale, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'Coastline Reporters editorial guidelines: journalistic standards, fact-checking, verification, and conflict of interest policies.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-8 shadow-xs">
        <span className="px-2.5 py-1 rounded bg-brand-teal-100 text-brand-teal-800 text-xs font-bold uppercase tracking-wider">
          Standards & Ethics
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 tracking-tight mt-2">
          Coastline Reporters Editorial Policy
        </h1>
        <p className="text-slate-600 text-base mt-2 leading-relaxed">
          Our commitment to uncompromising accuracy, fairness, public interest accountability, and source protection.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-8 text-slate-800 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <CheckCircle size={18} className="text-brand-teal-600" />
            <span>1. Verification & Multi-Source Confirmation</span>
          </h2>
          <p>
            Coastline Reporters does not publish speculation or uncorroborated allegations. Every factual assertion must be substantiated by primary documentation, direct on-the-record eyewitness accounts, or at least two independent secondary sources with direct knowledge of the facts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <Scale size={18} className="text-brand-teal-600" />
            <span>2. Right of Reply and Fairness</span>
          </h2>
          <p>
            Whenever a report contains criticism or allegations against individuals, corporate entities, or government agencies, our journalists must make reasonable, verifiable efforts to obtain their perspective prior to publication. Responses must be fairly reflected within the reporting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <Shield size={18} className="text-brand-teal-600" />
            <span>3. Anonymous Sources & Whistleblower Shield</span>
          </h2>
          <p>
            Confidentiality is granted solely when sources face legitimate physical, legal, or retaliatory economic danger, and the information is indispensable to the public interest. The reporter must disclose the source&apos;s identity and credentials privately to the Editor-in-Chief to ensure editorial integrity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <AlertTriangle size={18} className="text-brand-teal-600" />
            <span>4. Conflicts of Interest & Independence</span>
          </h2>
          <p>
            Newsroom staff are prohibited from accepting gifts, sponsored travel, or hospitality from political candidates, government officials, or commercial interests. All secondary business interests and board memberships must be formally registered with the Managing Editor.
          </p>
        </section>
      </div>
    </div>
  );
}
