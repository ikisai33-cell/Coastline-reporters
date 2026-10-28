import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Compass, Eye, Users } from 'lucide-react';
import { CoastlineLogo } from '@/components/brand/CoastlineLogo';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Coastline Reporters: mission, editorial values, Niger Delta focus, and journalistic leadership.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <CoastlineLogo size="md" theme="light" showTagline={false} />
          <span className="px-3 py-1 rounded bg-brand-teal-100 text-brand-teal-800 text-xs font-bold uppercase tracking-wider">
            Institutional Identity
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 tracking-tight">
          Local News. Global Perspective.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
          Coastline Reporters is an independent digital-first media organisation based in Nigeria, providing authoritative, evidence-based reporting from the riverine communities of the Niger Delta to national and international audiences.
        </p>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-teal-100 text-brand-teal-700 flex items-center justify-center font-bold">
            <Compass size={20} />
          </div>
          <h2 className="text-lg font-bold text-brand-navy-950">Our Mission</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            To illuminate public interest stories through fearless investigative journalism, monitor natural resource stewardship, champion human rights, and hold public and private institutions accountable to the citizens of Nigeria.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-navy-100 text-brand-navy-900 flex items-center justify-center font-bold">
            <Eye size={20} />
          </div>
          <h2 className="text-lg font-bold text-brand-navy-950">Our Vision</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            To build Africa’s pre-eminent coastal and environmental investigative media institution, bridging the information divide between frontline riverine communities and global decision-makers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-teal-100 text-brand-teal-700 flex items-center justify-center font-bold">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-lg font-bold text-brand-navy-950">Editorial Independence</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Coastline Reporters operates with complete editorial freedom. Our newsroom accepts no political patronage, commercial interference, or state censorship. Every published report adheres to strict multi-source verification.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-navy-100 text-brand-navy-900 flex items-center justify-center font-bold">
            <Users size={20} />
          </div>
          <h2 className="text-lg font-bold text-brand-navy-950">Regional Rootedness</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            With resident correspondents throughout Rivers, Bayelsa, Delta, Akwa Ibom, Cross River, and Edo states, our reporting captures lived realities, maritime heritage, and local voices with unmatched authenticity.
          </p>
        </div>
      </div>
    </div>
  );
}
