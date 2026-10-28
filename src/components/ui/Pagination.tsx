import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const separator = basePath.includes('?') ? '&' : '?';
    return `${basePath}${separator}page=${page}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination Navigation"
      className="flex items-center justify-center gap-1.5 pt-8 pb-4 text-xs font-semibold"
    >
      {/* Previous Page Link */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="inline-flex items-center gap-1 px-3 py-2 rounded border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={14} />
          <span>Previous</span>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 px-3 py-2 rounded border border-slate-200 text-slate-300 cursor-not-allowed">
          <ChevronLeft size={14} />
          <span>Previous</span>
        </span>
      )}

      {/* Numbered Page Buttons */}
      <div className="flex items-center gap-1">
        {pages.map((pageNum) => {
          const isCurrent = pageNum === currentPage;
          return (
            <Link
              key={pageNum}
              href={getPageUrl(pageNum)}
              className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
                isCurrent
                  ? 'bg-brand-navy-900 text-white font-bold shadow-xs'
                  : 'border border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Page Link */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="inline-flex items-center gap-1 px-3 py-2 rounded border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRight size={14} />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 px-3 py-2 rounded border border-slate-200 text-slate-300 cursor-not-allowed">
          <span>Next</span>
          <ChevronRight size={14} />
        </span>
      )}
    </nav>
  );
};
