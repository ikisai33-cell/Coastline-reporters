'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Plus, Filter, Search, Clock, CheckCircle } from 'lucide-react';
import { SPECIMEN_ARTICLES } from '@/lib/constants/specimens';

export default function NewsroomArticlesPage() {
  const handleCompose = () => {
    alert('[Phase 3 Blueprint]: Full rich-text WYSIWYG editor and collaborative draft composition scheduled for Phase 3.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-700">
            Publishing Management (Phase 3 Feature Blueprint)
          </span>
          <h1 className="text-2xl font-black text-brand-navy-950 mt-1">
            Article Publishing Pipeline
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track investigations from initial draft and pitch to peer review, legal clearance, and live publication.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCompose}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Plus size={15} />
          <span>Compose New Investigation</span>
        </button>
      </div>

      {/* Phase 3 Scope Notice */}
      <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg text-xs text-slate-600">
        <p>
          <strong>Phase 1 Architectural Status:</strong> Full rich-text WYSIWYG block editing, collaborative multi-reporter drafting, revision diff viewer, and instant live staging will be delivered in <strong>Phase 3</strong>. Displayed below are the database-backed specimen articles mapped to our PostgreSQL <code>articles</code> schema.
        </p>
      </div>

      {/* Specimen Pipeline Table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Filter Desk:</span>
            <select className="border border-slate-300 rounded px-2 py-1 bg-white text-slate-700">
              <option>All News Desks</option>
              <option>Environment &amp; Maritime</option>
              <option>Business &amp; Finance</option>
              <option>Governance &amp; Politics</option>
            </select>
          </div>
          <span className="text-slate-500 font-mono">6 Articles In Database Schema</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Headline / Investigation</th>
                <th className="py-3 px-4">Desk</th>
                <th className="py-3 px-4">Lead Author</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Modified</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SPECIMEN_ARTICLES.map((article) => (
                <tr key={article.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-brand-navy-950 max-w-sm truncate">
                    <Link href={`/articles/${article.slug}`} className="hover:text-brand-teal-700">
                      {article.title}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{article.category?.name}</td>
                  <td className="py-3 px-4 text-slate-600">{article.author?.full_name}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      {article.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">28 Oct 2026</td>
                  <td className="py-3 px-4 text-right">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-brand-teal-700 font-semibold hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
