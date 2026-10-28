import React from 'react';
import { Metadata } from 'next';
import { Mail, MapPin, Phone, Lock, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & News Bureaus',
  description: 'Reach Coastline Reporters editorial desks, regional news bureaus, and confidential whistleblower channels.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-8 shadow-xs">
        <span className="px-2.5 py-1 rounded bg-brand-teal-100 text-brand-teal-800 text-xs font-bold uppercase tracking-wider">
          Newsroom Inquiries
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy-950 tracking-tight mt-2">
          Contact Coastline Reporters
        </h1>
        <p className="text-slate-600 text-base mt-2 leading-relaxed">
          Submit editorial tips, contact regional bureaus, or query the newsdesk. Confidential tip lines are monitored by senior editors.
        </p>
      </div>

      {/* Bureaus Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-base">
            <MapPin className="text-brand-teal-600" size={18} />
            <span>Headquarters & Port Harcourt Bureau</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Coastline House, Coastal Crescent, Old GRA, Port Harcourt, Rivers State, Nigeria.
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>Direct: +234 (0) 84 920 100</p>
            <p>Bureau Chief: ph-desk@coastlinereporters.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-base">
            <MapPin className="text-brand-teal-600" size={18} />
            <span>Niger Delta Coastal Desks</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Warri Bureau (Delta State) &bull; Yenagoa Bureau (Bayelsa State) &bull; Uyo Bureau (Akwa Ibom State) &bull; Calabar Bureau (Cross River State).
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>Regional Coordination: delta-desk@coastlinereporters.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-base">
            <MapPin className="text-brand-teal-600" size={18} />
            <span>National Affairs Bureau (Abuja)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Press Centre Annex, Central Business District, Abuja, FCT, Nigeria.
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>National Bureau: abuja-desk@coastlinereporters.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-base">
            <MapPin className="text-brand-teal-600" size={18} />
            <span>Commercial & Maritime Bureau (Lagos)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Maritime Tower, Marina, Lagos Island, Lagos State, Nigeria.
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>Commercial Desk: lagos-desk@coastlinereporters.com</p>
          </div>
        </div>
      </div>

      {/* Whistleblower Channel */}
      <div className="bg-brand-navy-950 text-white p-6 rounded-lg border border-brand-navy-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-brand-teal-400 font-bold text-base">
          <Lock size={18} />
          <span>Secure Whistleblower Portal & Anonymous Leaks</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Coastline Reporters safeguards investigative sources. For sensitive public-interest documents, leak materials, or corruption evidence, use our encrypted PGP channel or contact the Editor-in-Chief via Signal at +234 (0) 800-COASTLINE.
        </p>
        <p className="text-xs text-brand-teal-300 font-mono">
          PGP Fingerprint: 4E91 C802 7F9A 101E 52BA 891B 3D7C 9081
        </p>
      </div>
    </div>
  );
}
