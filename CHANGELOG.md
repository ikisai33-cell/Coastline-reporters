# Changelog
All notable changes to the Coastline Reporters digital journalism platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0-phase1] - 2026-10-28

### Initial Release: Master Development Instructions Phase 1

#### Added
- **Core Technology Framework:**
  - Initialized Next.js (App Router, Server Components) with TypeScript and Tailwind CSS v4.
  - Configured `@/*` path aliases and clean modular project structure.
  - Added `.env.example` and local `.env.local` templates with clear key segregation.
  - Added hardened `.gitignore` preventing credential, certificate, or environment leaks.
- **Brand Identity & Design System:**
  - Designed custom bird-and-wave SVG emblem (`CoastlineEmblem.tsx`) representing soaring investigative journalism over coastal riverine waters.
  - Implemented responsive `CoastlineLogo.tsx` with light/dark variants, bold typography, and the official tagline: *"Local News. Global Perspective."*
  - Generated dynamic Edge SVG favicon (`icon.tsx`).
  - Defined brand color tokens: Deep navy blue (`#0A192F` / `#050C18`), Coastal teal (`#00A896` / `#028090`), and Breaking red (`#D90429`).
  - Created BBC-inspired editorial layout components:
    - `Masthead.tsx` (Current date, regional weather/bureaus, edition switcher, newsroom staff gateway).
    - `Header.tsx` (Brand logo, quick multimedia pills, search trigger, responsive mobile drawer).
    - `CategoryNav.tsx` (10-desk horizontal ribbon with active state indicators).
    - `BreakingBanner.tsx` (Pulsing live/breaking ticker with headline shortcuts and dismiss controls).
    - `Footer.tsx` (4-column directory, bureau locations, whistleblower channel, legal disclaimers).
    - `ArticleCard.tsx` (Hero, Featured, Standard, Compact, and Horizontal variants).
    - `StoryGrid.tsx` (12-column editorial hierarchy: lead hero + supporting briefs + editor's picks).
    - `SpecimenNotice.tsx` (Transparent Phase 1 development specimen disclaimer badge).
- **Public & Institutional Routes:**
  - Homepage (`/`) with full StoryGrid editorial hierarchy.
  - Dynamic Category Desk pages (`/category/[slug]`) supporting all 10 approved news desks: *Niger Delta, Nigeria, Politics, Business & Finance, Environment, Society, Technology, Entertainment & Culture, Sports, World*.
  - Permanent top-level URL redirects in `next.config.ts` for clean paths (e.g. `/niger-delta` &rarr; `/category/niger-delta`).
  - Full Article Reader page (`/articles/[slug]`) with breadcrumbs, author byline, reading time, fact-checked badge, specimen notice, and social share bar.
  - Institutional & Ethics Desks:
    - `/about` (Mission, vision, editorial independence, regional rootedness).
    - `/contact` (Bureaus in Port Harcourt, Warri, Yenagoa, Lagos, Abuja, plus encrypted whistleblower tips).
    - `/editorial-policy` (Multi-source verification, right of reply, anonymous sources, conflict of interest policy).
    - `/corrections-policy` (Mandatory correction footnotes, reader submission, transparent retractions).
    - `/privacy-policy` (Zero third-party commercial trackers, NDPA data governance).
  - Multimedia Portals (Phase 5 placeholders):
    - `/coastline-tv` (VOD and live broadcasts placeholder).
    - `/podcasts` (Audio briefings and documentary audio placeholder).
- **Newsroom Dashboard Architecture:**
  - `/newsroom` (Dashboard overview with editorial health KPIs, 7-stage publishing lifecycle, and RBAC matrix).
  - `/newsroom/login` (Staff authentication gateway with password, cryptographic invitation code, and password recovery modes).
  - `/newsroom/articles` (Publishing pipeline placeholder).
  - `/newsroom/reviews` (Peer review and fact-checking queue placeholder).
  - `/newsroom/media` (Photo desk and media asset manager placeholder).
  - `/newsroom/settings` (Access control roles and security audit summary).
- **PostgreSQL Database Schema & Migrations:**
  - `20261028000001_create_initial_schema.sql`: 11 core tables (`profiles`, `roles`, `user_roles`, `categories`, `tags`, `articles`, `article_tags`, `article_revisions`, `editorial_reviews`, `media_assets`, `audit_logs`), 3 enums, automated `updated_at` trigger functions, constraints, and performance indexes.
  - `20261028000002_create_rls_policies.sql`: Zero-trust Row-Level Security (RLS) policies completely isolating unpublished drafts from public queries and securing administrative tables.
  - `20261028000003_seed_categories_and_roles.sql`: Seeds the 10 editorial news desks and 7 newsroom roles.
- **Supabase Integration Helpers & Middleware:**
  - `src/lib/supabase/client.ts` (Browser SSR client).
  - `src/lib/supabase/server.ts` (Server Component client with async cookies).
  - `src/lib/supabase/middleware.ts` & `src/middleware.ts` (Edge session updater and route guard).
- **Complete Documentation Suite:**
  - `README.md`
  - `PRD.md`
  - `ARCHITECTURE.md`
  - `DATABASE_SCHEMA.md`
  - `ROADMAP.md`
  - `SECURITY.md`
  - `TEST_PLAN.md`
  - `CHANGELOG.md`

#### Security
- Enforced strict public registration ban for newsroom accounts.
- Enforced database-level Row-Level Security on all 11 PostgreSQL entities.
- Isolated client-safe public keys from private server role keys.
- Implemented tamper-resistant audit logging schema capturing user UUID, IP address, user agent, and action metadata.
