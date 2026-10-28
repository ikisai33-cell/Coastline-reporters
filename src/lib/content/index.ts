import { Article, Category, BreakingAlert, PaginatedResult, NigerDeltaState } from '@/types';
import { SPECIMEN_ARTICLES } from '@/lib/constants/specimens';
import { EDITORIAL_CATEGORIES } from '@/lib/constants/navigation';

export interface ArticleQueryOptions {
  categorySlug?: string;
  state?: NigerDeltaState | string;
  isFeatured?: boolean;
  isBreaking?: boolean;
  isEditorPick?: boolean;
  searchQuery?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Check whether a live Supabase database is configured and reachable.
 */
function isLiveDatabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url && anonKey && !url.includes('placeholder'));
}

/**
 * Retrieve published articles with filtering and pagination.
 * Zero-trust: Unpublished drafts are strictly excluded.
 */
export async function getPublishedArticles(
  options: ArticleQueryOptions = {}
): Promise<PaginatedResult<Article>> {
  const {
    categorySlug,
    state,
    isFeatured,
    isBreaking,
    isEditorPick,
    searchQuery,
    page = 1,
    pageSize = 10,
  } = options;

  // If live Supabase is configured, in a later phase we will query Supabase here.
  // For development fixture mode, filter the verified specimen repository:
  let filtered = SPECIMEN_ARTICLES.filter((article) => {
    // 1. Mandatory publication status gate
    if (article.status !== 'published') return false;

    // 2. Publication timestamp check (no future embargoed stories)
    if (article.published_at && new Date(article.published_at) > new Date()) {
      return false;
    }

    // 3. Category filter
    if (categorySlug && categorySlug !== 'all') {
      const matchCat =
        article.category?.slug.toLowerCase() === categorySlug.toLowerCase() ||
        article.category_id.toLowerCase() === categorySlug.toLowerCase();
      if (!matchCat) return false;
    }

    // 4. State filter
    if (state && state !== 'all') {
      if (article.state?.toLowerCase() !== state.toLowerCase()) {
        return false;
      }
    }

    // 5. Featured filter
    if (isFeatured !== undefined && article.is_featured !== isFeatured) {
      return false;
    }

    // 6. Breaking filter
    if (isBreaking !== undefined && article.is_breaking !== isBreaking) {
      return false;
    }

    // 7. Editor's Pick filter
    if (isEditorPick !== undefined && article.is_editor_pick !== isEditorPick) {
      return false;
    }

    // 8. Search query filter (matches headline, subheadline, excerpt, or content)
    if (searchQuery && searchQuery.trim()) {
      const term = searchQuery.toLowerCase().trim();
      const inTitle = article.title.toLowerCase().includes(term);
      const inSubheadline = article.subheadline?.toLowerCase().includes(term) || false;
      const inExcerpt = article.excerpt.toLowerCase().includes(term);
      const inContent = article.content.toLowerCase().includes(term);
      const inAuthor = article.author?.full_name.toLowerCase().includes(term) || false;
      if (!inTitle && !inSubheadline && !inExcerpt && !inContent && !inAuthor) {
        return false;
      }
    }

    return true;
  });

  // Sort by published_at descending (reverse chronological order)
  filtered.sort((a, b) => {
    const timeA = a.published_at ? new Date(a.published_at).getTime() : 0;
    const timeB = b.published_at ? new Date(b.published_at).getTime() : 0;
    return timeB - timeA;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedData = filtered.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedData,
    total,
    page,
    pageSize,
    totalPages,
    hasMore: page < totalPages,
  };
}

/**
 * Retrieve a single published article by its unique URL slug.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = SPECIMEN_ARTICLES.find(
    (a) => a.slug === slug && a.status === 'published'
  );

  if (!article) return null;

  // Strict check: if published_at is in the future, don't expose
  if (article.published_at && new Date(article.published_at) > new Date()) {
    return null;
  }

  return article;
}

/**
 * Retrieve verified breaking news alerts.
 * Returns only stories explicitly marked as `is_breaking: true`.
 * Returns empty array when none exist (allowing the section to be hidden cleanly).
 */
export async function getBreakingNewsAlerts(): Promise<BreakingAlert[]> {
  const breakingArticles = SPECIMEN_ARTICLES.filter(
    (a) => a.status === 'published' && a.is_breaking === true
  );

  return breakingArticles.map((article) => ({
    id: `alert-${article.id}`,
    article_id: article.id,
    headline: article.title,
    href: `/articles/${article.slug}`,
    category: article.category?.name || 'Breaking',
    timestamp: article.published_at
      ? new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(new Date(article.published_at)) + ' GMT'
      : 'Just Now',
    published_at: article.published_at || new Date().toISOString(),
    isLive: true,
  }));
}

/**
 * Retrieve the principal lead story and supporting secondary stories.
 */
export async function getLeadStoryAndSecondary(): Promise<{
  lead: Article | null;
  secondary: Article[];
}> {
  const result = await getPublishedArticles({ page: 1, pageSize: 6 });
  const all = result.data;

  const lead = all.find((a) => a.is_featured) || all[0] || null;
  const secondary = all.filter((a) => a.id !== lead?.id).slice(0, 3);

  return { lead, secondary };
}

/**
 * Retrieve latest published stories in reverse chronological order.
 */
export async function getLatestStories(limit = 6, offset = 0): Promise<Article[]> {
  const result = await getPublishedArticles({ page: 1, pageSize: 30 });
  return result.data.slice(offset, offset + limit);
}

/**
 * Retrieve stories prioritizing the Niger Delta region.
 * Supports filtering by specific Niger Delta state.
 */
export async function getNigerDeltaStories(state?: NigerDeltaState | string): Promise<Article[]> {
  if (state && state !== 'all') {
    const result = await getPublishedArticles({ state, pageSize: 12 });
    return result.data;
  }

  // When no specific state is passed, retrieve Niger Delta category stories or stories with state tags
  const result = await getPublishedArticles({ pageSize: 12 });
  return result.data.filter(
    (a) => a.category?.slug === 'niger-delta' || a.category_id === 'niger-delta' || Boolean(a.state)
  );
}

/**
 * Retrieve related stories for a given article (same category or state).
 */
export async function getRelatedStories(
  currentArticleId: string,
  categorySlug: string,
  limit = 3
): Promise<Article[]> {
  const result = await getPublishedArticles({ categorySlug, pageSize: 10 });
  return result.data
    .filter((a) => a.id !== currentArticleId)
    .slice(0, limit);
}

/**
 * Retrieve active editorial categories.
 */
export async function getEditorialCategories(): Promise<Category[]> {
  return EDITORIAL_CATEGORIES.map((c, idx) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    description: c.description,
    display_order: idx + 1,
    is_active: true,
  }));
}
