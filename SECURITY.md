# Security Policy & Zero-Trust Architecture
## Coastline Reporters Cybersecurity Guidelines

---

## 1. Threat Model & Security Posture

As a digital investigative news organisation operating in Nigeria, Coastline Reporters faces distinct security challenges:
- **Unauthorized Publishing & Tampering:** Threat actors attempting to compromise journalist accounts to publish false, unverified, or defamatory material.
- **Source De-anonymisation:** State or corporate entities seeking the identities of confidential whistleblowers or investigative sources.
- **DDoS & Disruption:** Malicious traffic floods intended to take down breaking investigative exposés during critical news cycles.
- **Privilege Escalation:** Malicious users exploiting client-side web forms to grant themselves administrative or publishing rights.

---

## 2. Zero-Trust Access Controls

### 2.1 Complete Segregation of Public and Newsroom Surfaces
1. **No Public Registration:** Public visitors can never register an account that automatically grants dashboard access. Self-registration is permanently disabled for newsroom interfaces.
2. **Invitation-Only Account Provisioning:** New staff accounts are created exclusively by the Administrator or Managing Editor via cryptographically signed invitation tokens.
3. **Database-Enforced RBAC:** Administrative permissions are never assigned or trusted from client-side fields or session cookies. Every mutation is validated by PostgreSQL Row-Level Security (RLS) policies checking the `public.user_roles` table.

---

## 3. Row-Level Security (RLS) Enforcement

Every database table operates under mandatory Row-Level Security:
- `articles`: Public queries (`anon` role) can **ONLY** retrieve records where `status = 'published'` and `published_at <= NOW()`. Drafts, pitches, and internal editorial reviews are cryptographically invisible to unauthenticated connections.
- `audit_logs` & `user_roles`: Strictly blocked from all public queries. Only `super_admin` and `admin` roles can query security logs.
- `profiles`: Internal email addresses and administrative metadata are shielded; only public byline information (name, bio, title, avatar) is exposed.

---

## 4. Key Hygiene & Environment Secrets

### 4.1 Client vs Server Key Segregation
- **Public Client Key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`):** Designed for public browser execution. Governed 100% by Row-Level Security policies.
- **Service Role Key (`SUPABASE_SERVICE_ROLE_KEY`):** Possesses root database bypass authority.  
  > [!CAUTION]
  > The Service Role Key must **NEVER** be prefixed with `NEXT_PUBLIC_` and must **NEVER** be imported into Client Components or browser bundles. It is restricted exclusively to privileged server-side scripts and secure webhooks.

### 4.2 Version Control Protection
All `.env*` files containing credentials are added to `.gitignore`. Only `.env.example` containing non-secret template descriptions is tracked in Git.

---

## 5. Media Asset Sanitization

To protect investigative journalists and whistleblowers submitting field photographs:
1. **EXIF Metadata Scrubbing:** All uploaded images must have GPS coordinates, device serial numbers, and camera metadata stripped prior to storage.
2. **MIME-Type Validation:** File uploads are strictly validated against an approved whitelist (`image/jpeg`, `image/png`, `image/webp`, `image/avif`, `application/pdf`). Executable files (`.exe`, `.bat`, `.php`, `.js`) are rejected at the edge.
3. **File Size Caps:** Uploads are hard-capped at 25 MB to prevent resource exhaustion attacks.

---

## 6. Audit Logging & Forensics

Every sensitive operation generates an immutable record in `public.audit_logs`:
- User UUID (`actor_id`)
- Action performed (e.g. `ARTICLE_PUBLISHED`, `ROLE_ASSIGNED`, `INVITATION_DISPATCHED`)
- Entity type and Entity ID
- Source IP address (`inet`) and User-Agent string
- Timestamp in UTC (`now()`)

---

## 7. Reporting a Security Vulnerability

If you discover a security vulnerability within Coastline Reporters, email our engineering security team at **security@coastlinereporters.com** with details and reproduction steps. We acknowledge reports within 24 hours and commit to transparent remediation.
