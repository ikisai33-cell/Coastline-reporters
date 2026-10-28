'use client';

import React from 'react';
import { Image as ImageIcon, Upload, FileImage, ShieldCheck } from 'lucide-react';

export default function NewsroomMediaPage() {
  const handleUpload = () => {
    alert('[Phase 3 Blueprint]: Supabase Storage direct CDN file uploader and EXIF sanitization wizard scheduled for Phase 3.');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-700">
            Digital Asset Management (Phase 3 Blueprint)
          </span>
          <h1 className="text-2xl font-black text-brand-navy-950 mt-1">
            Photo Desk &amp; Media Repository
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Secure storage for photojournalism, satellite imagery, infographics, and documentary video footage.
          </p>
        </div>

        <button
          type="button"
          onClick={handleUpload}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Upload size={15} />
          <span>Upload Media Asset</span>
        </button>
      </div>

      <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg text-xs text-slate-600">
        <p>
          <strong>Phase 1 Architectural Status:</strong> Media storage bucket permissions and the PostgreSQL <code>media_assets</code> metadata schema are defined in migrations. Automated image optimization (WebP/AVIF transcode), EXIF metadata scrubbing, and Supabase Storage CDN direct uploads will be activated in <strong>Phase 3</strong>.
        </p>
      </div>

      {/* Specimen Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: 'mangrove-conservation.jpg', desk: 'Environment', size: '2.4 MB', author: 'Tarebi Wilcox' },
          { name: 'container-terminal-onne.jpg', desk: 'Maritime Business', size: '3.1 MB', author: 'Chidi Okonkwo' },
          { name: 'tech-hub-portharcourt.jpg', desk: 'Technology', size: '1.8 MB', author: 'Ebiere Dan-Princewill' },
        ].map((media, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <div className="aspect-16/10 bg-brand-navy-900 flex items-center justify-center text-brand-teal-400">
              <FileImage size={32} />
            </div>
            <div className="p-3 text-xs space-y-1">
              <div className="font-bold text-brand-navy-950 truncate">{media.name}</div>
              <div className="flex justify-between text-slate-500 text-[11px]">
                <span>{media.desk}</span>
                <span>{media.size}</span>
              </div>
              <div className="text-[10px] text-slate-400">Uploader: {media.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
