# Quality Assurance & Verification Test Plan
## Coastline Reporters Testing Matrix: Phase 1

---

## 1. Test Philosophy & Scope

Phase 1 testing focuses on architectural validation, responsive design system integrity, database DDL syntax correctness, route tree accessibility, and zero-trust security policy review.

---

## 2. Test Execution Matrix

### 2.1 Route Tree Verification
| Route | Expected Outcome | Verification Status |
| :--- | :--- | :--- |
| `/` | Renders Masthead, Header, CategoryNav, BreakingBanner, StoryGrid (Hero + Featured + Analysis), and Footer without errors. | Passed |
| `/category/niger-delta` | Displays Niger Delta desk banner, specimen disclaimer, and category-filtered articles. | Passed |
| `/category/environment` | Displays Environmental desk banner, specimen notice, and articles. | Passed |
| `/category/[all others]` | Displays respective news desk descriptions (Nigeria, Politics, Business, Society, Technology, Entertainment, Sports, World). | Passed |
| `/articles/[slug]` | Renders full article layout: breadcrumbs, byline, reading time, specimen disclaimer, article body, verification badge, and related stories. | Passed |
| `/about` | Renders organisational mission, vision, editorial independence, and regional rootedness pillars. | Passed |
| `/contact` | Renders bureau addresses (Port Harcourt, Warri, Yenagoa, Abuja, Lagos) and secure whistleblower PGP details. | Passed |
| `/editorial-policy` | Renders 4-point verification, right of reply, and conflict of interest standards. | Passed |
| `/corrections-policy` | Renders transparent corrections, footnote mandates, and retraction protocols. | Passed |
| `/privacy-policy` | Renders data protection terms, NDPA compliance, and zero-ad-tracker pledge. | Passed |
| `/coastline-tv` | Displays Phase 5 scheduled capability badge and multimedia roadmap callout. | Passed |
| `/podcasts` | Displays Phase 5 scheduled capability badge and audio briefing overview. | Passed |
| `/newsroom` | Displays newsroom control bar, editorial health KPIs, publishing lifecycle, and RBAC matrix. | Passed |
| `/newsroom/login` | Displays staff login gateway with password login, invitation token, and recovery modes. | Passed |
| `/newsroom/articles` | Displays Phase 3 publishing pipeline blueprint and specimen table. | Passed |
| `/newsroom/reviews` | Displays Phase 3 peer review desk and fact-checking clearance queue. | Passed |
| `/newsroom/media` | Displays Phase 3 media asset repository and photo desk specs. | Passed |
| `/newsroom/settings` | Displays Phase 3 access control, active roles hierarchy, and audit logging overview. | Passed |

---

### 2.2 Design System & Responsive Breakpoint Validation
- **Mobile (360px - 480px):** Tested on standard riverine mobile viewport. Hamburger menu toggles navigation drawer cleanly; breaking ticker truncates safely; masthead collapses into single line; article cards transition to single-column vertical flow.
- **Tablet (768px - 1024px):** Category nav supports horizontal swipe without layout shift; 2-column secondary stories display cleanly.
- **Desktop (1280px+):** Full 12-column BBC-inspired editorial grid with lead hero investigation, secondary briefs, and side analysis column.

---

### 2.3 Database DDL & Security Review
- **Migration 01 (`20261028000001_create_initial_schema.sql`):** 11 tables, 3 enums, automated updated_at triggers, foreign keys with appropriate cascades (`ON DELETE CASCADE` for child revisions/tags, `ON DELETE RESTRICT` for authors and categories).
- **Migration 02 (`20261028000002_create_rls_policies.sql`):** Zero-trust RLS policies verified. Public `anon` role is strictly restricted to published articles where `published_at <= NOW()`. Administrative tables (`roles`, `user_roles`, `audit_logs`) completely deny unauthenticated access.
- **Migration 03 (`20261028000003_seed_categories_and_roles.sql`):** Clean seed script for all 10 categories and 7 newsroom roles.

---

### 2.4 Code Quality & Static Analysis
- **TypeScript:** Strict type checking enabled (`strict: true` in `tsconfig.json`). Zero TypeScript compiler errors.
- **ESLint:** Configured and passed with zero syntax or rule warnings.
- **Next.js Production Build:** Completed successfully via `npm run build`.
