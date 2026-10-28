import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';
import { CoastlineLogo } from '@/components/brand/CoastlineLogo';
import { EDITORIAL_CATEGORIES, INSTITUTIONAL_LINKS, MULTIMEDIA_CHANNELS } from '@/lib/constants/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t-4 border-brand-teal-500 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <CoastlineLogo size="md" theme="dark" showTagline={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Coastline Reporters is an independent digital-first news organisation based in Nigeria, dedicated to rigorous investigative reporting, environmental stewardship, public accountability, and balanced storytelling from the Niger Delta to the global stage.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-teal-400 flex-shrink-0" />
                <span>Bureaus: Port Harcourt &bull; Warri &bull; Yenagoa &bull; Lagos &bull; Abuja</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-teal-400 flex-shrink-0" />
                <span>Editorial Desk: newsdesk@coastlinereporters.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand-teal-400 flex-shrink-0" />
                <span>Secure Whistleblower Tips: tips@coastlinereporters.com</span>
              </div>
            </div>
          </div>

          {/* Editorial Sections */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-teal-400 border-b border-brand-navy-800 pb-1.5">
              News Desks
            </h3>
            <ul className="space-y-2 text-xs">
              {EDITORIAL_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={cat.href} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-teal-400 border-b border-brand-navy-800 pb-1.5">
              Specialized Coverage
            </h3>
            <ul className="space-y-2 text-xs">
              {EDITORIAL_CATEGORIES.slice(5).map((cat) => (
                <li key={cat.id}>
                  <Link href={cat.href} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              {MULTIMEDIA_CHANNELS.map((channel) => (
                <li key={channel.name}>
                  <Link href={channel.href} className="hover:text-white text-slate-200 transition-colors flex items-center justify-between">
                    <span>{channel.name}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-brand-navy-850 text-brand-teal-400 border border-brand-navy-700">
                      {channel.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ethics & Institutional */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-teal-400 border-b border-brand-navy-800 pb-1.5">
              Standards & Newsroom
            </h3>
            <ul className="space-y-2 text-xs">
              {INSTITUTIONAL_LINKS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-brand-navy-850">
                <Link
                  href="/newsroom"
                  className="inline-flex items-center gap-1.5 text-brand-teal-400 hover:text-brand-teal-300 font-semibold"
                >
                  <Globe size={13} />
                  <span>Newsroom Publishing CMS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer / Legal & Specimen Disclaimers */}
      <div className="bg-brand-navy-950 border-t border-brand-navy-900 py-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Coastline Reporters. All rights reserved. Registered Digital Media Organisation in Nigeria.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="px-2 py-0.5 rounded bg-brand-navy-850 border border-brand-navy-700 text-brand-teal-400">
              Phase 1 Architectural MVP
            </span>
            <span>Zero Third-Party Ad Trackers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
