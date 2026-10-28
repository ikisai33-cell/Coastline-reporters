'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EDITORIAL_CATEGORIES } from '@/lib/constants/navigation';

export const CategoryNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-brand-navy-950 border-b border-brand-navy-800 sticky top-20 z-30 shadow-sm" aria-label="Editorial Categories Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-1">
          {/* Home Link */}
          <Link
            href="/"
            className={`px-3 py-2 text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-colors relative ${
              pathname === '/'
                ? 'text-brand-teal-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-teal-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </Link>

          {EDITORIAL_CATEGORIES.map((category) => {
            const isActive = pathname === category.href || pathname.startsWith(`${category.href}/`);
            return (
              <Link
                key={category.id}
                href={category.href}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors relative ${
                  isActive
                    ? 'text-brand-teal-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-teal-400'
                    : category.highlight
                    ? 'text-slate-100 hover:text-brand-teal-300'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
