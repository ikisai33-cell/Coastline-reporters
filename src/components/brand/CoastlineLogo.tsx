import React from 'react';
import Link from 'next/link';
import { CoastlineEmblem } from './CoastlineEmblem';

interface CoastlineLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  isLink?: boolean;
  theme?: 'dark' | 'light';
}

export const CoastlineLogo: React.FC<CoastlineLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  isLink = true,
  theme = 'dark',
}) => {
  const emblemSizes = {
    sm: 32,
    md: 44,
    lg: 56,
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-brand-navy-950';
  const subTextColor = theme === 'dark' ? 'text-brand-teal-400' : 'text-brand-teal-700';

  const content = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <CoastlineEmblem size={emblemSizes[size]} variant="color" />
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-black uppercase tracking-wider ${titleSizes[size]} ${textColor}`}>
            COASTLINE
          </span>
          <span className={`font-extrabold uppercase tracking-wider ml-1.5 ${titleSizes[size]} text-brand-teal-500`}>
            REPORTERS
          </span>
        </div>
        {showTagline && (
          <span className={`font-semibold tracking-widest uppercase mt-0.5 ${taglineSizes[size]} ${subTextColor}`}>
            Local News. Global Perspective.
          </span>
        )}
      </div>
    </div>
  );

  if (isLink) {
    return (
      <Link href="/" className="inline-block hover:opacity-95 transition-opacity" aria-label="Coastline Reporters Homepage">
        {content}
      </Link>
    );
  }

  return content;
};
