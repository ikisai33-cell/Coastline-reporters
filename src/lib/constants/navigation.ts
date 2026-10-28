export interface NavCategory {
  id: string;
  name: string;
  slug: string;
  href: string;
  description: string;
  highlight?: boolean;
}

export const EDITORIAL_CATEGORIES: NavCategory[] = [
  {
    id: 'niger-delta',
    name: 'Niger Delta',
    slug: 'niger-delta',
    href: '/category/niger-delta',
    description: 'Investigative reporting, community developments, crude oil impacts, and grassroots governance across the Niger Delta region.',
    highlight: true,
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    slug: 'nigeria',
    href: '/category/nigeria',
    description: 'National affairs, federal policies, public infrastructure, and security from across Nigeria.',
  },
  {
    id: 'politics',
    name: 'Politics',
    slug: 'politics',
    href: '/category/politics',
    description: 'Elections, legislative actions, executive accountability, and political analyses.',
  },
  {
    id: 'business',
    name: 'Business & Finance',
    slug: 'business',
    href: '/category/business',
    description: 'Macroeconomics, markets, regional trade, fiscal policies, and corporate enterprise.',
  },
  {
    id: 'environment',
    name: 'Environment',
    slug: 'environment',
    href: '/category/environment',
    description: 'Ecological conservation, oil spill remediation, climate change, and coastal sustainability.',
    highlight: true,
  },
  {
    id: 'society',
    name: 'Society',
    slug: 'society',
    href: '/category/society',
    description: 'Education, public health, human rights, civic freedoms, and grassroots communities.',
  },
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    href: '/category/technology',
    description: 'African tech innovations, digital governance, connectivity, and digital media.',
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Culture',
    slug: 'entertainment',
    href: '/category/entertainment',
    description: 'Arts, Nollywood, literature, maritime heritage, and contemporary culture.',
  },
  {
    id: 'sports',
    name: 'Sports',
    slug: 'sports',
    href: '/category/sports',
    description: 'Football, grassroots athletics, maritime water sports, and international competitions.',
  },
  {
    id: 'world',
    name: 'World',
    slug: 'world',
    href: '/category/world',
    description: 'Global geopolitical shifts, international diplomacy, diaspora affairs, and global energy trends.',
  },
];

export const MULTIMEDIA_CHANNELS = [
  { name: 'Coastline TV', href: '/coastline-tv', badge: 'Live / VOD' },
  { name: 'Podcasts', href: '/podcasts', badge: 'Audio' },
];

export const INSTITUTIONAL_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact & News Bureaus', href: '/contact' },
  { name: 'Editorial Policy', href: '/editorial-policy' },
  { name: 'Corrections Policy', href: '/corrections-policy' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export const NEWSROOM_ROLES = [
  { id: 'super_admin', label: 'Super Administrator', level: 100 },
  { id: 'admin', label: 'Administrator', level: 80 },
  { id: 'editor_in_chief', label: 'Editor-in-Chief', level: 70 },
  { id: 'managing_editor', label: 'Managing Editor', level: 60 },
  { id: 'section_editor', label: 'Section Editor', level: 50 },
  { id: 'reporter', label: 'Reporter', level: 30 },
  { id: 'multimedia_producer', label: 'Multimedia Producer', level: 30 },
] as const;
