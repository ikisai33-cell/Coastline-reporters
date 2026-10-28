'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: 'whatsapp' | 'x' | 'copy') => {
    if (typeof window === 'undefined') return;
    const url = window.location.href;

    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - ' + url)}`, '_blank');
    } else if (platform === 'x') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
      <Share2 size={14} className="text-brand-teal-700" />
      <span>Share:</span>
      <button
        type="button"
        onClick={() => handleShare('whatsapp')}
        className="px-2.5 py-1 rounded bg-slate-200 hover:bg-slate-300 transition-colors"
      >
        WhatsApp
      </button>
      <button
        type="button"
        onClick={() => handleShare('x')}
        className="px-2.5 py-1 rounded bg-slate-200 hover:bg-slate-300 transition-colors"
      >
        X (Twitter)
      </button>
      <button
        type="button"
        onClick={() => handleShare('copy')}
        className="px-2.5 py-1 rounded bg-slate-200 hover:bg-slate-300 transition-colors inline-flex items-center gap-1"
        title="Copy article link"
      >
        {copied ? <Check size={12} className="text-emerald-700" /> : <Copy size={12} />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
};
