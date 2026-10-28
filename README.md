# Coastline Reporters

> **Local News. Global Perspective.**  
> A secure, scalable, and independent digital-first news organisation based in Nigeria, reporting with depth, integrity, and investigative rigour from the Niger Delta to national and international audiences.

---

## 1. Project Overview

Coastline Reporters is an original, digital journalism platform designed from the ground up for editorial integrity, public accountability, and resilient performance. 

The platform architecture comprises two primary interfaces:
1. **Public News Website:** An accessible, responsive editorial portal serving readers across mobile, tablet, and desktop screens with zero commercial ad trackers.
2. **Authorised Newsroom Dashboard:** A multi-role editorial publishing and governance system protected by PostgreSQL Row-Level Security (RLS) and Supabase Auth.

---

## 2. Brand Identity & Visual System

- **Primary Brand Navy:** Deep ocean navy (`#0A192F` / `#050C18`) providing visual gravity, authority, and editorial contrast.
- **Coastal Teal:** Vibrant maritime teal (`#00A896` / `#028090`) representing coastal waterways, mangrove estuaries, and environmental focus.
- **Emblem:** Stylized soaring bird in flight above cresting ocean waves.
- **Editorial Information Hierarchy:** Inspired by the clean, functional structure of BBC News—featuring prominent lead investigation hero cards, secondary supporting analysis blocks, topic kicker badges, relative timestamps, and reading durations.

---

## 3. Technology Stack

- **Framework:** Next.js (App Router, Server Components) with TypeScript
- **Styling:** Tailwind CSS (v4 with custom theme tokens)
- **Icons:** Lucide React
- **Database & Auth:** Supabase PostgreSQL with Row-Level Security (RLS)
- **Media Storage:** Supabase Storage (CDN backed)
- **Version Control:** Git & GitHub

---

## 4. Phase 1 Accomplishments

- [x] **Next.js & TypeScript Setup:** Clean, modular project structure with `@/*` path aliases.
- [x] **Design Tokens & Brand Assets:** Custom bird-and-wave SVG emblem, full responsive logo components, and BBC-inspired editorial layout.
- [x] **Routing & Layout Architecture:**
  - Public Homepage (`/`)
  - Dynamic Category Desk Pages (`/category/[slug]` with top-level redirects for all 10 desks)
  - Full Article Reader with Specimen Notice (`/articles/[slug]`)
  - Institutional & Ethics Desks (`/about`, `/contact`, `/editorial-policy`, `/corrections-policy`, `/privacy-policy`)
  - Multimedia Portals (Phase 5 placeholders: `/coastline-tv`, `/podcasts`)
  - Authorised Newsroom Dashboard (`/newsroom`, `/newsroom/login`, `/newsroom/articles`, `/newsroom/reviews`, `/newsroom/media`, `/newsroom/settings`)
- [x] **Database & Security Architecture:**
  - Complete PostgreSQL DDL migrations for 11 core entities
  - Strict Row-Level Security (RLS) policies preventing unauthorized draft access
  - Automated triggers for `updated_at` timestamps and audit logging
- [x] **Documentation Suite:** Comprehensive PRD, Architecture, Database Schema, Roadmap, Security, Test Plan, and Changelog documents.

---

## 5. Local Development Setup

### Prerequisites
- Node.js 18+ (tested on Node.js v24 LTS)
- npm 9+ (or compatible package manager)

### Installation

1. Clone or open the repository:
   ```bash
   cd coastline-reporters
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Development placeholders are pre-configured in `.env.local`. For live PostgreSQL connectivity in later phases, populate `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.*

4. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Validate production build:
   ```bash
   npm run build
   ```

---

## 6. Phased Master Roadmap

- **Phase 1 (Current):** Foundation, Design System, Website Structure, Database Schema, Auth Architecture, and Documentation.
- **Phase 2:** Public-Facing News Website & Real-Time Search.
- **Phase 3:** Multi-User Newsroom Dashboard & Editorial Publishing System.
- **Phase 4:** Authentication Completion, Security Audit, and MVP Production Deployment.
- **Phase 5:** Coastline TV, Podcasts, and Long-Form Documentaries.
- **Phase 6:** Audience Engagement, Newsletters, and Distribution.
- **Phase 7:** Branded Storytelling & Sustainable Monetisation.
- **Phase 8:** Advanced Newsroom Automation & Scalability Enhancements.

---

## 7. License & Editorial Rights

© Coastline Reporters. All rights reserved. Registered digital media organisation in Nigeria.
