# Product Requirements Document (PRD)
## Coastline Reporters Digital Journalism Platform

**Document Version:** 1.0.0  
**Status:** Approved for Phase 1 Engineering  
**Organisation:** Coastline Reporters  
**Tagline:** Local News. Global Perspective.  
**Target Market:** Niger Delta Communities, Nigeria, African Continent & Global Observers  

---

## 1. Executive Summary

Coastline Reporters is establishing a high-integrity, digital-first news organisation dedicated to rigorous journalism, environmental accountability, and regional storytelling. Initiated with zero starting capital, the engineering architecture must optimize free-tier operational thresholds (Supabase PostgreSQL, Vercel/Cloudflare Next.js edge deployment, GitHub version control) while maintaining enterprise-grade security and editorial rigor.

This PRD formalizes the requirements for **Phase 1: Architectural Foundation, Design System, Database DDL, and Security Scaffolding**.

---

## 2. User Personas & Audience Profiles

### 2.1 Public Readers
- **Riverine & Grassroots Community Member:** Accesses news primarily via mobile devices on 3G/4G cellular connections across coastal communities in Rivers, Bayelsa, and Delta states. Demands fast load times, minimal data consumption, and clear legibility.
- **National Policy Maker & Civil Servant:** Abuja and Lagos-based professionals tracking environmental regulation, maritime commerce, and subnational politics. Demands evidence-backed investigative depth and reliable search.
- **International Energy Analyst & Climate Researcher:** Diaspora and international stakeholders tracking African energy transitions, oil remediation compliance, and coastal biodiversity.

### 2.2 Newsroom Personas
- **Investigative Field Reporter:** Operates across coastal creeks; pitches investigations, drafts articles, uploads geotagged photo evidence, and responds to editorial review feedback.
- **Section Editor:** Supervises specific news desks (e.g., Environment Desk, Politics Desk); reviews reporter drafts, requests revisions, and validates factual corroboration.
- **Managing Editor / Editor-in-Chief:** Exercises final publication clearance, manages sensitive whistleblower disclosures, approves retractions, and enforces journalistic ethics.
- **System Administrator:** Oversees role provisioning, reviews PostgreSQL audit logs, and monitors infrastructure security.

---

## 3. Product Scope & Functional Requirements

### 3.1 Public Portal Requirements (FR-PUB)
- **FR-PUB-01 (Information Hierarchy):** The public interface must implement a clean editorial hierarchy inspired by BBC News, featuring:
  - Top masthead with dynamic local date, regional bureau weather, and edition toggle (`Niger Delta | Nigeria | Global`).
  - Breaking news alert banner with live badge and headline link.
  - Primary editorial category ribbon with active indicator.
  - Homepage grid: Lead investigative hero card, secondary supporting briefs, and editor's pick analysis column.
- **FR-PUB-02 (News Desks Coverage):** Full support for 10 core editorial disciplines:
  1. Niger Delta (Regional investigative focus)
  2. Nigeria (National affairs)
  3. Politics (Governance and elections)
  4. Business & Finance (Maritime commerce and macroeconomics)
  5. Environment (Oil spills, ecology, and climate resilience)
  6. Society (Public health, education, and human rights)
  7. Technology (Digital infrastructure and African innovations)
  8. Entertainment & Culture (Maritime heritage and arts)
  9. Sports (Grassroots and national competitions)
  10. World (Global energy markets and geopolitics)
- **FR-PUB-03 (Editorial Specimen Disclaimers):** During Phase 1, all sample stories must carry prominent, accessible specimen disclosures stating that content is illustrative architectural data and does not represent verified journalism.
- **FR-PUB-04 (Ethics & Institutional Pages):** Publicly accessible policies covering About Us, Contact & Regional Bureaus, Editorial Standards, Corrections & Retractions Protocol, and Privacy Policy (NDPA compliant).

### 3.2 Newsroom Publishing System Requirements (FR-NEWS)
- **FR-NEWS-01 (Role-Based Access Control):** Enforce 7 distinct newsroom tiers:
  1. `super_admin` (Full root systems access)
  2. `admin` (Staff management and system auditing)
  3. `editor_in_chief` (Supreme editorial sign-off)
  4. `managing_editor` (Daily newsdesk operations and legal clearance)
  5. `section_editor` (Desk review and revision direction)
  6. `reporter` (Drafting and evidence submission)
  7. `multimedia_producer` (Photo, audio, and video desk)
- **FR-NEWS-02 (Publishing Workflow Stages):** State transition pipeline:  
  `pitch` &rarr; `draft` &rarr; `under_review` &rarr; `revision_requested` &rarr; `approved` &rarr; `published` &rarr; `archived`.
- **FR-NEWS-03 (Row-Level Security):** Public visitors must be prevented from reading any article whose status is not `published` or whose `published_at` timestamp is in the future.
- **FR-NEWS-04 (Immutable Revision Logs):** Every update to article content must be tracked with revision number, modifying editor ID, and change summary.

---

## 4. Non-Functional Requirements (NFR)

- **NFR-01 (Performance & Bandwidth):** Core Web Vitals target: LCP < 2.0s on 3G networks. No heavy third-party tracking scripts.
- **NFR-02 (Accessibility):** WCAG 2.1 AA compliance: semantic landmarks, screen reader-friendly aria labels, high contrast text ratios (> 4.5:1).
- **NFR-03 (Security & Zero Trust):** No public self-registration for newsroom accounts; secret keys strictly excluded from client-side bundles; automated audit trails for administrative actions.
- **NFR-04 (Maintainability):** 100% TypeScript coverage across components, lib utilities, and database contracts.

---

## 5. Out of Scope for Phase 1
- Interactive WYSIWYG rich text block editor (Scheduled for Phase 3).
- Live Supabase Auth token exchange in production (Scheduled for Phase 4).
- Video transcoding, Coastline TV player, and Podcast RSS feeds (Scheduled for Phase 5).
- Newsletter dispatch, push notifications, and audience comments (Scheduled for Phase 6).
