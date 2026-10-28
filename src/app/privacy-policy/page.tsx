import React from 'react';
import { Metadata } from 'next';
import { Lock, EyeOff, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Coastline Reporters data protection principles, reader confidentiality, and Nigeria Data Protection Act (NDPA) compliance.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-8 shadow-xs">
        <span className="px-2.5 py-1 rounded bg-brand-teal-100 text-brand-teal-800 text-xs font-bold uppercase tracking-wider">
          Data Governance
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 tracking-tight mt-2">
          Privacy Policy & Reader Data Protection
        </h1>
        <p className="text-slate-600 text-base mt-2 leading-relaxed">
          Coastline Reporters respects reader anonymity and conforms with the Nigeria Data Protection Act (NDPA) and global privacy standards.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs space-y-8 text-slate-800 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <EyeOff size={18} className="text-brand-teal-600" />
            <span>1. Zero Commercial Ad Trackers</span>
          </h2>
          <p>
            We do not sell, rent, or syndicate user browsing habits to third-party ad brokers. Public reading of articles on Coastline Reporters requires no user account, no tracking cookies, and no personal data harvesting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <Lock size={18} className="text-brand-teal-600" />
            <span>2. Newsroom Staff & Author Data</span>
          </h2>
          <p>
            Authentication data collected for newsroom personnel (editors, reporters, administrators) is processed exclusively for role-based access control, revision audit logging, and platform security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
            <ShieldCheck size={18} className="text-brand-teal-600" />
            <span>3. Inquiries & Data Rights</span>
          </h2>
          <p>
            For privacy inquiries or data subject access requests under Nigerian law, contact our Data Protection Officer at <strong>privacy@coastlinereporters.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
