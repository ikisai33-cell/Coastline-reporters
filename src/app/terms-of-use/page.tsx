import React from 'react';
import { Metadata } from 'next';
import { Scale, FileText, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Coastline Reporters terms of service, syndication conditions, intellectual property rights, and reader guidelines.',
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-8 shadow-xs">
        <span className="px-2.5 py-1 rounded bg-brand-teal-100 text-brand-teal-800 text-xs font-bold uppercase tracking-wider">
          Legal Framework
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 tracking-tight mt-2">
          Terms of Use
        </h1>
        <p className="text-slate-600 text-base mt-2 leading-relaxed">
          Conditions governing access, content reproduction, journalistic syndication, and reader use of Coastline Reporters digital publications.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-8 text-slate-800 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <FileText size={18} className="text-brand-teal-600" />
            <span>1. Intellectual Property &amp; Copyright</span>
          </h2>
          <p>
            All original investigative reports, photographs, audio recordings, video features, graphics, and design emblems published by Coastline Reporters are protected by Nigerian copyright law and international intellectual property treaties.
          </p>
          <p>
            Non-commercial quotations and brief excerpts are permitted provided clear journalistic attribution is accorded to Coastline Reporters along with a direct hyperlink to the original article. Wholesale reproduction or automated scraping without written licence from the editorial board is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <Scale size={18} className="text-brand-teal-600" />
            <span>2. Syndication &amp; Commercial Republishing</span>
          </h2>
          <p>
            Media organisations, research institutions, and academic journals seeking syndication rights for our investigative reports or regional field documentation should contact our syndication desk at <strong>syndication@coastlinereporters.com</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <ShieldAlert size={18} className="text-brand-teal-600" />
            <span>3. Reader Conduct &amp; Prohibited Activities</span>
          </h2>
          <p>
            Readers accessing Coastline Reporters agree not to attempt unauthorised access to our newsroom publishing CMS, tamper with public article feeds, execute denial-of-service disruptions, or submit fabricated whistleblower tips with malicious intent.
          </p>
        </section>
      </div>
    </div>
  );
}
