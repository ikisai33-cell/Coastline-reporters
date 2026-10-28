import React from 'react';
import { Metadata } from 'next';
import { Settings, Shield, UserCheck, Key, Lock, History } from 'lucide-react';
import { NEWSROOM_ROLES } from '@/lib/constants/navigation';

export const metadata: Metadata = {
  title: 'Newsroom Governance & Access Roles',
  description: 'Role-based access control, security policies, and newsroom governance settings.',
};

export default function NewsroomSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-700">
          Newsroom Governance (Phase 3 Blueprint)
        </span>
        <h1 className="text-2xl font-black text-brand-navy-950 mt-1">
          Access Control &amp; Newsroom Governance
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Manage editorial permission tiers, invite staff journalists, review database row-level security, and audit system events.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Role Matrix */}
        <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider border-b border-slate-100 pb-2">
            Active Role Hierarchy
          </h2>
          <div className="space-y-2">
            {NEWSROOM_ROLES.map((role) => (
              <div key={role.id} className="p-3 rounded border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{role.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono">Database key: {role.id}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-brand-teal-400 font-bold text-[10px]">
                    Access Weight {role.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Audit Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs space-y-3">
            <h2 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
              <Shield size={16} className="text-brand-teal-700" />
              <span>Database Security Architecture</span>
            </h2>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-brand-teal-700 font-bold">&bull;</span>
                <span>PostgreSQL Row-Level Security enabled on all 11 core tables.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-brand-teal-700 font-bold">&bull;</span>
                <span>Unauthenticated public access restricted strictly to published articles.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-brand-teal-700 font-bold">&bull;</span>
                <span>Audit logging captures user_id, action, IP address, and payload hash.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-brand-teal-700 font-bold">&bull;</span>
                <span>Admin privileges cannot be elevated client-side.</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-navy-950 text-white p-5 rounded-lg border border-brand-navy-800 text-xs space-y-2">
            <div className="flex items-center gap-2 text-brand-teal-400 font-bold">
              <History size={16} />
              <span>Audit Log Engine</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Every draft revision, review decision, user invitation, and role assignment writes an immutable record to the <code>audit_logs</code> table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
