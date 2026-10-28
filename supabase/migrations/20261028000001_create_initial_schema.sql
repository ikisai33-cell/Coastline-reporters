-- ==============================================================================
-- COASTLINE REPORTERS - PHASE 1 DATABASE MIGRATION 01: INITIAL SCHEMA
-- Description: Core tables, constraints, indexes, and automated triggers.
-- Target Engine: PostgreSQL 15+ / Supabase PostgreSQL
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. ENUM TYPES
DO $$ BEGIN
    CREATE TYPE article_status_type AS ENUM (
        'draft',
        'pitch',
        'under_review',
        'revision_requested',
        'approved',
        'published',
        'archived'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE review_decision_type AS ENUM (
        'approved',
        'rejected',
        'changes_requested'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE newsroom_role_type AS ENUM (
        'super_admin',
        'admin',
        'editor_in_chief',
        'managing_editor',
        'section_editor',
        'reporter',
        'multimedia_producer'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. PROFILES TABLE (Linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    title TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. ROLES DEFINITIONS TABLE
CREATE TABLE IF NOT EXISTS public.roles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    permissions JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. USER ROLES JUNCTION TABLE (RBAC)
CREATE TABLE IF NOT EXISTS public.user_roles (
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    role_id TEXT NOT NULL REFERENCES public.roles(id) ON DELETE CASCADE,
    assigned_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    assigned_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    PRIMARY KEY (user_id, role_id)
);

-- 6. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    display_order INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 7. TAGS TABLE
CREATE TABLE IF NOT EXISTS public.tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 8. ARTICLES TABLE (Core Editorial Entity)
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
    author_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    status article_status_type NOT NULL DEFAULT 'draft',
    is_breaking BOOLEAN NOT NULL DEFAULT FALSE,
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    is_editor_pick BOOLEAN NOT NULL DEFAULT FALSE,
    featured_image_url TEXT,
    featured_image_caption TEXT,
    read_time_minutes INT DEFAULT 4,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT valid_published_status CHECK (
        (status = 'published' AND published_at IS NOT NULL) OR
        (status <> 'published')
    )
);

-- 9. ARTICLE TAGS JUNCTION TABLE
CREATE TABLE IF NOT EXISTS public.article_tags (
    article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, tag_id)
);

-- 10. ARTICLE REVISIONS TABLE (Immutable audit trail of drafts)
CREATE TABLE IF NOT EXISTS public.article_revisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
    revision_number INT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    edited_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    change_summary TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE(article_id, revision_number)
);

-- 11. EDITORIAL REVIEWS TABLE
CREATE TABLE IF NOT EXISTS public.editorial_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
    reviewer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    decision review_decision_type NOT NULL,
    feedback TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 12. MEDIA ASSETS TABLE
CREATE TABLE IF NOT EXISTS public.media_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    uploader_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    file_path TEXT NOT NULL UNIQUE,
    file_name TEXT NOT NULL,
    file_size_bytes BIGINT,
    mime_type TEXT NOT NULL,
    alt_text TEXT,
    caption TEXT,
    credit TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 13. AUDIT LOGS TABLE (Tamper-evident governance tracking)
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    metadata JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 14. PERFORMANCE & SEARCH INDEXES
CREATE INDEX IF NOT EXISTS idx_articles_status_published_at ON public.articles(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_category ON public.articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_author ON public.articles(author_id);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON public.articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_breaking ON public.articles(is_breaking) WHERE is_breaking = TRUE;
CREATE INDEX IF NOT EXISTS idx_articles_featured ON public.articles(is_featured) WHERE is_featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_tags_slug ON public.tags(slug);
CREATE INDEX IF NOT EXISTS idx_revisions_article ON public.article_revisions(article_id);
CREATE INDEX IF NOT EXISTS idx_reviews_article ON public.editorial_reviews(article_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON public.audit_logs(actor_id);

-- 15. AUTOMATIC TRIGGER FOR UPDATED_AT
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trigger_articles_updated_at ON public.articles;
CREATE TRIGGER trigger_articles_updated_at
    BEFORE UPDATE ON public.articles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trigger_profiles_updated_at ON public.profiles;
CREATE TRIGGER trigger_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
