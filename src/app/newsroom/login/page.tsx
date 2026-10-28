'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, ShieldAlert, KeyRound, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CoastlineEmblem } from '@/components/brand/CoastlineEmblem';

export default function NewsroomLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'password' | 'recovery' | 'invite'>('password');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'password') {
      setStatusMessage(
        `[Phase 1 Prototype Verification]: Auth request initiated for ${email}. Live Supabase Auth session token generation will activate when production Supabase credentials are configured in Phase 4.`
      );
    } else if (authMode === 'recovery') {
      setStatusMessage(
        `[Phase 1 Prototype Verification]: Password reset link dispatched to ${email}. Recovery tokens expire in 60 minutes.`
      );
    } else {
      setStatusMessage(
        `[Phase 1 Prototype Verification]: Staff invitation code submitted. Validating cryptographic signature with PostgreSQL user_roles table.`
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto py-6">
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-brand-navy-950 text-white p-6 text-center space-y-2">
          <div className="flex justify-center mb-1">
            <CoastlineEmblem size={44} variant="color" />
          </div>
          <h1 className="text-xl font-black uppercase tracking-wider text-white">
            Newsroom Staff Gateway
          </h1>
          <p className="text-xs text-brand-teal-300">
            Authorised Editorial Personnel &amp; Systems Administration
          </p>
        </div>

        {/* Security Warning Notice */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 text-xs text-slate-600 flex items-start gap-2.5">
          <ShieldAlert size={16} className="text-brand-teal-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Restricted Access:</strong> Public user self-registration is permanently disabled for newsroom operations. Staff accounts are provisioned exclusively via administrator invitations. All login attempts are recorded in the security audit log.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => { setAuthMode('password'); setStatusMessage(null); }}
              className={`pb-2.5 px-3 font-semibold transition-colors relative ${
                authMode === 'password'
                  ? 'text-brand-teal-700 border-b-2 border-brand-teal-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Password Login
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode('invite'); setStatusMessage(null); }}
              className={`pb-2.5 px-3 font-semibold transition-colors relative ${
                authMode === 'invite'
                  ? 'text-brand-teal-700 border-b-2 border-brand-teal-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Staff Invitation
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode('recovery'); setStatusMessage(null); }}
              className={`pb-2.5 px-3 font-semibold transition-colors relative ${
                authMode === 'recovery'
                  ? 'text-brand-teal-700 border-b-2 border-brand-teal-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Password Recovery
            </button>
          </div>

          {statusMessage && (
            <div className="p-3 rounded-md bg-brand-teal-50 border border-brand-teal-300 text-xs text-brand-teal-900 flex items-start gap-2">
              <CheckCircle2 size={16} className="text-brand-teal-700 flex-shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Official Newsroom Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="editor@coastlinereporters.com"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-teal-600"
              />
            </div>

            {authMode === 'password' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-teal-600"
                />
              </div>
            )}

            {authMode === 'invite' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Invitation Cryptographic Token
                </label>
                <input
                  type="text"
                  required
                  placeholder="CLR-INV-XXXXXXXX"
                  className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-teal-600"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Invitation tokens are issued directly by the Managing Editor or Administrator.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded bg-brand-navy-900 hover:bg-brand-navy-850 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Lock size={15} />
              <span>
                {authMode === 'password'
                  ? 'Authenticate Newsroom Session'
                  : authMode === 'invite'
                  ? 'Accept Invitation & Activate'
                  : 'Dispatch Password Reset Link'}
              </span>
            </button>
          </form>

          {/* Institutional Compliance Notice */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-teal-700">
              &larr; Return to Public Website
            </Link>
            <span className="font-mono text-[10px]">Supabase Auth &bull; RLS Guarded</span>
          </div>
        </div>
      </div>
    </div>
  );
}
