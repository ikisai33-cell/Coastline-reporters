'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lock, CloudSun, Globe } from 'lucide-react';

export const Masthead: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('Wednesday, 28 October 2026');
  const [activeEdition, setActiveEdition] = useState<'nigeria' | 'niger-delta' | 'global'>('niger-delta');

  useEffect(() => {
    try {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now);
      setCurrentDate(formatted);
    } catch {
      // Fallback
    }
  }, []);

  return (
    <div className="bg-brand-navy-950 text-slate-300 text-xs border-b border-brand-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Current Date and Regional Weather/Bureaus */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="font-medium text-slate-200">{currentDate}</span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <CloudSun size={13} className="text-brand-teal-400" />
              <span>PH 28°C &bull; Lagos 29°C &bull; Abuja 31°C</span>
            </div>
          </div>

          {/* Right: Edition Selector & Newsroom Staff Gateway */}
          <div className="flex items-center gap-4">
            {/* Edition Selector */}
            <div className="flex items-center gap-1 text-[11px]">
              <Globe size={12} className="text-brand-teal-400 hidden sm:inline-block" />
              <span className="text-slate-400 hidden sm:inline">Edition:</span>
              <button
                type="button"
                onClick={() => setActiveEdition('niger-delta')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  activeEdition === 'niger-delta'
                    ? 'bg-brand-teal-700 text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Niger Delta
              </button>
              <span className="text-slate-600">/</span>
              <button
                type="button"
                onClick={() => setActiveEdition('nigeria')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  activeEdition === 'nigeria'
                    ? 'bg-brand-teal-700 text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Nigeria
              </button>
              <span className="text-slate-600">/</span>
              <button
                type="button"
                onClick={() => setActiveEdition('global')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  activeEdition === 'global'
                    ? 'bg-brand-teal-700 text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Global
              </button>
            </div>

            <span className="text-slate-700">|</span>

            {/* Newsroom Staff Gateway Link */}
            <Link
              href="/newsroom"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-navy-850 hover:bg-brand-navy-800 text-brand-teal-400 hover:text-brand-teal-300 border border-brand-navy-700 transition-colors font-medium text-[11px]"
              title="Authorised Newsroom Staff Portal"
            >
              <Lock size={11} />
              <span>Newsroom</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
