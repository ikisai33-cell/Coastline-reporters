import React from 'react';
import { Info } from 'lucide-react';

interface SpecimenNoticeProps {
  className?: string;
  variant?: 'banner' | 'pill' | 'card';
}

export const SpecimenNotice: React.FC<SpecimenNoticeProps> = ({
  className = '',
  variant = 'banner',
}) => {
  if (variant === 'pill') {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 ${className}`}>
        <Info size={10} />
        <span>Phase 1 Specimen</span>
      </span>
    );
  }

  return (
    <div className={`bg-amber-50 border-l-4 border-amber-500 p-3 text-xs text-amber-950 rounded-r shadow-xs ${className}`}>
      <div className="flex items-start gap-2.5">
        <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-900">
            Phase 1 Architectural Development Specimen
          </p>
          <p className="text-amber-800 text-[11px] mt-0.5 leading-relaxed">
            Content displayed during Phase 1 serves strictly to verify layout hierarchies, typography, database schema relations, and responsive breakpoints. It does not constitute published journalism. Verified newsroom publishing commences in Phase 4.
          </p>
        </div>
      </div>
    </div>
  );
};
