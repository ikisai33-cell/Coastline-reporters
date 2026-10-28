-- ==============================================================================
-- COASTLINE REPORTERS - PHASE 1 DATABASE MIGRATION 02: ROW-LEVEL SECURITY (RLS)
-- Description: Zero-trust data segregation policies for public readers vs newsroom staff.
-- ==============================================================================

-- 1. ENABLE RLS ON ALL TABLES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.article_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.article_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.editorial_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- 2. SECURITY HELPER FUNCTIONS
-- Check if current authenticated user is active newsroom staff
CREATE OR REPLACE FUNCTION public.is_newsroom_staff()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Check if current authenticated user has specific role
CREATE OR REPLACE FUNCTION public.has_role(required_role TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = auth.uid()
          AND (role_id = required_role OR role_id = 'super_admin')
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Check if current authenticated user is an editor or executive
CREATE OR REPLACE FUNCTION public.is_editor_or_above()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = auth.uid()
          AND role_id IN ('super_admin', 'admin', 'editor_in_chief', 'managing_editor', 'section_editor')
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. PROFILES POLICIES
-- Public: Anyone can view public author profiles
CREATE POLICY "Public profiles are readable by all"
    ON public.profiles FOR SELECT
    USING (true);

-- User: Users can update their own profile bio/avatar
CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

-- 4. CATEGORIES & TAGS POLICIES
-- Public: Anyone can read active categories
CREATE POLICY "Active categories are publicly viewable"
    ON public.categories FOR SELECT
    USING (is_active = true);

-- Staff: Admins and editors can manage categories
CREATE POLICY "Editors can insert/update categories"
    ON public.categories FOR ALL
    USING (public.is_editor_or_above());

-- Tags: Anyone can read tags
CREATE POLICY "Tags are publicly viewable"
    ON public.tags FOR SELECT
    USING (true);

-- Staff: Staff can insert tags
CREATE POLICY "Staff can manage tags"
    ON public.tags FOR ALL
    USING (public.is_newsroom_staff());

-- 5. ARTICLES POLICIES (Critical Publishing Gate)
-- Public: Only published articles where published_at is past/now
CREATE POLICY "Public can view published articles"
    ON public.articles FOR SELECT
    USING (
        status = 'published'
        AND published_at IS NOT NULL
        AND published_at <= timezone('utc'::text, now())
    );

-- Newsroom Staff: Staff can view all articles (drafts, pitches, reviews)
CREATE POLICY "Staff can view all article states"
    ON public.articles FOR SELECT
    USING (public.is_newsroom_staff());

-- Reporters: Reporters can create drafts
CREATE POLICY "Reporters can draft articles"
    ON public.articles FOR INSERT
    WITH CHECK (
        public.is_newsroom_staff()
        AND author_id = auth.uid()
    );

-- Authors: Authors can update drafts before approval
CREATE POLICY "Authors can update own drafts"
    ON public.articles FOR UPDATE
    USING (
        author_id = auth.uid()
        AND status IN ('draft', 'pitch', 'revision_requested')
    );

-- Editors: Editors can review and transition article statuses
CREATE POLICY "Editors can manage and publish articles"
    ON public.articles FOR UPDATE
    USING (public.is_editor_or_above());

-- Article Tags: Public can view tags for published articles
CREATE POLICY "Public can view article tags"
    ON public.article_tags FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.articles a
            WHERE a.id = article_tags.article_id
              AND a.status = 'published'
              AND a.published_at <= timezone('utc'::text, now())
        )
    );

-- Staff: Staff can manage article tags
CREATE POLICY "Staff can manage article tags"
    ON public.article_tags FOR ALL
    USING (public.is_newsroom_staff());

-- 6. ARTICLE REVISIONS POLICIES
-- Only newsroom staff can inspect revisions
CREATE POLICY "Staff can view article revisions"
    ON public.article_revisions FOR SELECT
    USING (public.is_newsroom_staff());

CREATE POLICY "Staff can insert article revisions"
    ON public.article_revisions FOR INSERT
    WITH CHECK (public.is_newsroom_staff());

-- 7. EDITORIAL REVIEWS POLICIES
-- Editors and authors can view reviews
CREATE POLICY "Staff can view editorial reviews"
    ON public.editorial_reviews FOR SELECT
    USING (public.is_newsroom_staff());

CREATE POLICY "Editors can insert editorial reviews"
    ON public.editorial_reviews FOR INSERT
    WITH CHECK (public.is_editor_or_above());

-- 8. MEDIA ASSETS POLICIES
-- Public can view media assets
CREATE POLICY "Media assets are publicly viewable"
    ON public.media_assets FOR SELECT
    USING (true);

-- Staff can upload media assets
CREATE POLICY "Staff can upload media assets"
    ON public.media_assets FOR INSERT
    WITH CHECK (public.is_newsroom_staff());

-- 9. ROLES & USER ROLES POLICIES (Strictly Restricted)
-- Public access is COMPLETELY DENIED.
-- Only administrators can view role assignments
CREATE POLICY "Admins can view and assign roles"
    ON public.user_roles FOR ALL
    USING (public.has_role('admin') OR public.has_role('super_admin'));

CREATE POLICY "Roles table readable by authenticated staff"
    ON public.roles FOR SELECT
    USING (public.is_newsroom_staff());

-- 10. AUDIT LOGS POLICIES (Tamper-Resistant)
-- Public access is COMPLETELY DENIED.
-- Only Super Admins and Admins can view audit logs
CREATE POLICY "Admins can view audit logs"
    ON public.audit_logs FOR SELECT
    USING (public.has_role('admin') OR public.has_role('super_admin'));

-- Automated insert allowed for authenticated staff actions
CREATE POLICY "Staff actions can record audit logs"
    ON public.audit_logs FOR INSERT
    WITH CHECK (public.is_newsroom_staff());
