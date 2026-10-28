export type ArticleStatus =
  | 'draft'
  | 'pitch'
  | 'under_review'
  | 'revision_requested'
  | 'approved'
  | 'published'
  | 'archived';

export type UserRoleType =
  | 'super_admin'
  | 'admin'
  | 'editor_in_chief'
  | 'managing_editor'
  | 'section_editor'
  | 'reporter'
  | 'multimedia_producer';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string | null;
  bio?: string | null;
  title?: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRoleAssignment {
  user_id: string;
  role_id: UserRoleType;
  assigned_by?: string | null;
  assigned_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  display_order: number;
  is_active: boolean;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: string;
  category?: Category;
  author_id: string;
  author?: Profile;
  status: ArticleStatus;
  is_breaking: boolean;
  is_featured: boolean;
  is_editor_pick: boolean;
  featured_image_url?: string | null;
  featured_image_caption?: string | null;
  read_time_minutes?: number;
  published_at?: string | null;
  created_at: string;
  updated_at: string;
  tags?: Tag[];
  is_specimen?: boolean; // Transparency flag for Phase 1 prototype specimens
}

export interface ArticleRevision {
  id: string;
  article_id: string;
  revision_number: number;
  title: string;
  content: string;
  edited_by: string;
  change_summary?: string | null;
  created_at: string;
}

export interface EditorialReview {
  id: string;
  article_id: string;
  reviewer_id: string;
  reviewer?: Profile;
  decision: 'approved' | 'rejected' | 'changes_requested';
  feedback?: string | null;
  created_at: string;
}

export interface MediaAsset {
  id: string;
  uploader_id: string;
  file_path: string;
  file_name: string;
  file_size_bytes?: number | null;
  mime_type: string;
  alt_text?: string | null;
  caption?: string | null;
  credit?: string | null;
  created_at: string;
}

export interface AuditLog {
  id: string;
  actor_id?: string | null;
  action: string;
  entity_type: string;
  entity_id?: string | null;
  metadata?: Record<string, unknown> | null;
  ip_address?: string | null;
  user_agent?: string | null;
  created_at: string;
}

export interface BreakingAlert {
  id: string;
  headline: string;
  href: string;
  category: string;
  timestamp: string;
  isLive?: boolean;
}
