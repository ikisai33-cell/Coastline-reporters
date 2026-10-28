'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Radio, X, ChevronRight } from 'lucide-react';
import { SPECIMEN_BREAKING_ALERTS } from '@/lib/constants/specimens';

export const BreakingBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (dismissed || SPECIMEN_BREAKING_ALERTS.length === 0) {
    return null;
  }

  const activeAlert = SPECIMEN_BREAKING_ALERTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SPECIMEN_BREAKING_ALERTS.length);
  };

  return (
    <div className="bg-brand-red-600 text-white shadow-sm border-b border-brand-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 overflow-hidden">
            {/* Animated Live / Breaking badge */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white text-brand-red-600 font-extrabold text-[11px] uppercase tracking-wider animate-pulse flex-shrink-0">
              <Radio size={12} className="text-brand-red-600" />
              {activeAlert.isLive ? 'LIVE' : 'BREAKING'}
            </span>

            {/* Alert Category */}
            <span className="hidden md:inline-block font-semibold uppercase text-xs tracking-wider text-red-100 flex-shrink-0">
              [{activeAlert.category}]
            </span>

            {/* Headline link */}
            <Link
              href={activeAlert.href}
              className="font-semibold text-white hover:underline truncate"
            >
              {activeAlert.headline}
            </Link>

            <span className="hidden sm:inline text-red-200 text-xs flex-shrink-0">
              ({activeAlert.timestamp})
            </span>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {SPECIMEN_BREAKING_ALERTS.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="p-1 rounded hover:bg-red-700 text-white transition-colors"
                title="Next alert"
                aria-label="View next breaking alert"
              >
                <ChevronRight size={16} />
              </button>
            )}
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="p-1 rounded hover:bg-red-700 text-white transition-colors"
              title="Dismiss banner"
              aria-label="Dismiss breaking news banner"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
