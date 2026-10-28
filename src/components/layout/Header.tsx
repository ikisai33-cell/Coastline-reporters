'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Tv, Radio, Menu, X } from 'lucide-react';
import { CoastlineLogo } from '@/components/brand/CoastlineLogo';
import { EDITORIAL_CATEGORIES } from '@/lib/constants/navigation';

export const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-brand-navy-900 border-b border-brand-navy-800 text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Main Brand Logo */}
          <div className="flex-shrink-0 py-2">
            <CoastlineLogo size="md" theme="dark" showTagline={true} />
          </div>

          {/* Desktop Right Actions: Coastline TV, Podcasts, Search */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/coastline-tv"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-navy-850 hover:bg-brand-navy-800 text-slate-200 hover:text-white border border-brand-navy-700 transition-colors"
            >
              <Tv size={14} className="text-brand-teal-400" />
              <span>Coastline TV</span>
            </Link>

            <Link
              href="/podcasts"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-navy-850 hover:bg-brand-navy-800 text-slate-200 hover:text-white border border-brand-navy-700 transition-colors"
            >
              <Radio size={14} className="text-brand-teal-400" />
              <span>Podcasts</span>
            </Link>

            {/* Search Input / Trigger */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stories, topics, archives..."
                    className="w-64 bg-brand-navy-950 border border-brand-teal-600 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-teal-400"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="ml-2 p-1.5 text-brand-teal-400 hover:text-white"
                    aria-label="Submit search query"
                  >
                    <Search size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-white"
                    aria-label="Close search"
                  >
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-brand-navy-850 border border-brand-navy-800 transition-colors"
                  aria-label="Open search input"
                  title="Search news stories"
                >
                  <Search size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/search"
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-brand-navy-850 transition-colors"
              aria-label="Open search page"
            >
              <Search size={20} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-brand-navy-850 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy-950 border-t border-brand-navy-800 px-4 pt-3 pb-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Coastline Reporters..."
              className="w-full bg-brand-navy-900 border border-brand-navy-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-teal-400"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-2.5 text-brand-teal-400"
              aria-label="Execute search"
            >
              <Search size={18} />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-navy-850">
            {EDITORIAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-2 text-sm font-medium text-slate-200 hover:text-brand-teal-400 hover:bg-brand-navy-900 rounded transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-brand-navy-850 flex items-center justify-between text-xs">
            <Link
              href="/coastline-tv"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-teal-400"
            >
              <Tv size={14} />
              <span>Coastline TV</span>
            </Link>
            <Link
              href="/podcasts"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-teal-400"
            >
              <Radio size={14} />
              <span>Podcasts</span>
            </Link>
            <Link
              href="/newsroom"
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-slate-300 hover:text-white"
            >
              <span>Staff Newsroom</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
