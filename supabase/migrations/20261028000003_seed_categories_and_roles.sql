-- ==============================================================================
-- COASTLINE REPORTERS - PHASE 1 DATABASE MIGRATION 03: SEED DATA
-- Description: Core editorial categories and newsroom role definitions.
-- ==============================================================================

-- 1. SEED EDITORIAL CATEGORIES
INSERT INTO public.categories (name, slug, description, display_order, is_active)
VALUES
    (
        'Niger Delta',
        'niger-delta',
        'Investigative reporting, community developments, crude oil impacts, and grassroots governance across the Niger Delta region.',
        1,
        TRUE
    ),
    (
        'Nigeria',
        'nigeria',
        'National affairs, federal policies, public infrastructure, and security from across Nigeria.',
        2,
        TRUE
    ),
    (
        'Politics',
        'politics',
        'Elections, legislative actions, executive accountability, and political analyses.',
        3,
        TRUE
    ),
    (
        'Business & Finance',
        'business',
        'Macroeconomics, markets, regional trade, fiscal policies, and corporate enterprise.',
        4,
        TRUE
    ),
    (
        'Environment',
        'environment',
        'Ecological conservation, oil spill remediation, climate change, and coastal sustainability.',
        5,
        TRUE
    ),
    (
        'Society',
        'society',
        'Education, public health, human rights, civic freedoms, and grassroots communities.',
        6,
        TRUE
    ),
    (
        'Technology',
        'technology',
        'African tech innovations, digital governance, connectivity, and digital media.',
        7,
        TRUE
    ),
    (
        'Entertainment & Culture',
        'entertainment',
        'Arts, Nollywood, literature, maritime heritage, and contemporary culture.',
        8,
        TRUE
    ),
    (
        'Sports',
        'sports',
        'Football, grassroots athletics, maritime water sports, and international competitions.',
        9,
        TRUE
    ),
    (
        'World',
        'world',
        'Global geopolitical shifts, international diplomacy, diaspora affairs, and global energy trends.',
        10,
        TRUE
    )
ON CONFLICT (slug) DO UPDATE
SET name = EXCLUDED.name,
    description = EXCLUDED.description,
    display_order = EXCLUDED.display_order;

-- 2. SEED NEWSROOM ROLES & PERMISSION SETS
INSERT INTO public.roles (id, name, description, permissions)
VALUES
    (
        'super_admin',
        'Super Administrator',
        'Full root access to technical infrastructure, database roles, security audit logs, and newsroom management.',
        '["*"]'::jsonb
    ),
    (
        'admin',
        'Administrator',
        'Manages staff accounts, security logs, category structures, and publishing operations.',
        '["users:manage", "articles:*", "categories:manage", "media:*", "audit:read"]'::jsonb
    ),
    (
        'editor_in_chief',
        'Editor-in-Chief',
        'Supreme editorial authority over published journalism, retractions, whistleblower disclosures, and newsroom policy.',
        '["articles:*", "reviews:*", "revisions:*", "editorial_policy:manage", "media:*"]'::jsonb
    ),
    (
        'managing_editor',
        'Managing Editor',
        'Supervises daily desk operations, assigns investigative stories, conducts legal clearances, and publishes articles.',
        '["articles:read", "articles:review", "articles:publish", "articles:retract", "reviews:*", "media:*"]'::jsonb
    ),
    (
        'section_editor',
        'Section Editor',
        'Leads a specific news desk (e.g. Environment, Niger Delta, Politics), reviews reporter drafts, and requests revisions.',
        '["articles:read", "articles:review", "articles:edit", "reviews:create", "media:upload"]'::jsonb
    ),
    (
        'reporter',
        'Reporter',
        'Researches, investigates, pitches, and drafts investigative and breaking news articles.',
        '["articles:create", "articles:read_own", "articles:update_own_draft", "media:upload"]'::jsonb
    ),
    (
        'multimedia_producer',
        'Multimedia Producer',
        'Produces photojournalism, Coastline TV video segments, infographics, and podcast audio.',
        '["media:*", "articles:read", "podcasts:manage", "tv:manage"]'::jsonb
    )
ON CONFLICT (id) DO UPDATE
SET name = EXCLUDED.name,
    description = EXCLUDED.description,
    permissions = EXCLUDED.permissions;
