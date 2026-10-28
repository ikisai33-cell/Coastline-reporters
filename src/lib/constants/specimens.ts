import { Article, BreakingAlert } from '@/types';

export const SPECIMEN_BREAKING_ALERTS: BreakingAlert[] = [
  {
    id: 'alert-1',
    headline: '[SPECIMEN] Niger Delta Coastal Basin Forum convenes over sustainable community remediation frameworks',
    href: '/articles/specimen-niger-delta-coastal-basin-forum',
    category: 'Environment',
    timestamp: '14m ago',
    isLive: true,
  },
  {
    id: 'alert-2',
    headline: '[SPECIMEN] Federal economic council deliberates maritime trade zone expansion across southern seaports',
    href: '/articles/specimen-maritime-trade-zone-expansion',
    category: 'Business',
    timestamp: '42m ago',
    isLive: false,
  },
];

export const SPECIMEN_ARTICLES: Article[] = [
  {
    id: 'specimen-1',
    title: 'Niger Delta Coastal Mangrove Restoration Initiative Reports Landmark Community Tree Planting Benchmark',
    slug: 'specimen-niger-delta-coastal-mangrove-restoration',
    excerpt: 'Community-led conservation partnerships across Bayelsa and Rivers state coastal belts demonstrate scalable models for estuary revitalization and erosion prevention.',
    content: `
# Niger Delta Coastal Mangrove Restoration

*Notice: This document is an editorial specimen and architectural layout prototype for Coastline Reporters Phase 1. It does not represent verified journalism.*

### Regional Ecological Preservation in Focus
Across the brackish estuaries of the Niger Delta basin, cooperative coastal alliances have embarked on a comprehensive mangrove reforestation project aimed at stabilizing vulnerable shorelines and revitalizing indigenous marine ecosystems.

Environmental researchers affiliated with regional academic institutes emphasize that mangrove ecosystems serve as indispensable natural barriers against rising sea levels, storm surges, and shoreline degradation.

### Community Governance and Local Ownership
The initiative emphasizes direct participatory governance, pairing indigenous coastal fishermen with marine biologists to map high-risk saltwater inlets. Over the past twelve months, community nurseries have nurtured resilient saplings tailored for brackish water endurance.

> "Preserving the coastline is not merely an environmental obligation; it is fundamental to the economic livelihood and cultural heritage of our maritime communities," notes the regional project director.

### Scalable Frameworks for Regional Policy
As federal environmental authorities review nationwide coastal climate resilience strategies, this community-centered approach offers a transparent, verifiable benchmark for conservation investments.
    `,
    category_id: 'environment',
    category: {
      id: 'environment',
      name: 'Environment',
      slug: 'environment',
      display_order: 5,
      is_active: true,
    },
    author_id: 'author-1',
    author: {
      id: 'author-1',
      email: 'investigations@coastlinereporters.com',
      full_name: 'Tarebi Wilcox',
      title: 'Senior Environmental & Maritime Reporter',
      created_at: '2026-01-15T08:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
    },
    status: 'published',
    is_breaking: false,
    is_featured: true,
    is_editor_pick: true,
    featured_image_url: '/images/specimens/mangrove-conservation.jpg',
    featured_image_caption: 'Specimen Photograph: Estuary conservation teams monitoring coastal mangrove replanting in the Niger Delta basin.',
    read_time_minutes: 5,
    published_at: '2026-10-28T09:30:00Z',
    created_at: '2026-10-28T08:00:00Z',
    updated_at: '2026-10-28T09:30:00Z',
    is_specimen: true,
  },
  {
    id: 'specimen-2',
    title: 'Southern Seaports Modernisation: Evaluating Maritime Freight Capacity and Inland Transit Networks',
    slug: 'specimen-southern-seaports-modernisation',
    excerpt: 'Infrastructure investments at Onne, Warri, and Calabar deep seaports seek to decongest metropolitan bottlenecks and stimulate regional non-oil exports.',
    content: `
# Southern Seaports Modernisation

*Notice: This document is an editorial specimen for Phase 1 architectural verification.*

Shipping logistics experts analyze current dockside automation, digital customs clearing corridors, and dry port connections designed to accelerate cargo transit times across southern maritime terminals.
    `,
    category_id: 'business',
    category: {
      id: 'business',
      name: 'Business & Finance',
      slug: 'business',
      display_order: 4,
      is_active: true,
    },
    author_id: 'author-2',
    author: {
      id: 'author-2',
      email: 'economy@coastlinereporters.com',
      full_name: 'Chidi Okonkwo',
      title: 'Maritime Economy Analyst',
      created_at: '2026-02-10T08:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
    },
    status: 'published',
    is_breaking: false,
    is_featured: true,
    is_editor_pick: false,
    featured_image_url: '/images/specimens/container-terminal.jpg',
    featured_image_caption: 'Specimen Image: Container freight handling operations at Onne deep seaport.',
    read_time_minutes: 4,
    published_at: '2026-10-28T08:15:00Z',
    created_at: '2026-10-28T07:00:00Z',
    updated_at: '2026-10-28T08:15:00Z',
    is_specimen: true,
  },
  {
    id: 'specimen-3',
    title: 'Niger Delta Digital Innovation Labs Foster Next-Generation Agritech and Clean Tech Startups',
    slug: 'specimen-niger-delta-digital-innovation-labs',
    excerpt: 'Youth-led technology incubators across Port Harcourt and Warri develop decentralized solar irrigation and aquaculture monitoring tools.',
    content: `
# Niger Delta Digital Innovation Labs

*Notice: Specimen article illustrating technology sector editorial hierarchy.*

Tech entrepreneurs in the Niger Delta are building bespoke hardware and software solutions addressing unique hydrological and agricultural challenges faced by coastal farmers.
    `,
    category_id: 'technology',
    category: {
      id: 'technology',
      name: 'Technology',
      slug: 'technology',
      display_order: 7,
      is_active: true,
    },
    author_id: 'author-3',
    author: {
      id: 'author-3',
      email: 'tech@coastlinereporters.com',
      full_name: 'Ebiere Dan-Princewill',
      title: 'Technology & Enterprise Correspondent',
      created_at: '2026-03-01T08:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
    },
    status: 'published',
    is_breaking: false,
    is_featured: false,
    is_editor_pick: true,
    featured_image_url: '/images/specimens/tech-hub.jpg',
    featured_image_caption: 'Specimen Image: Young software engineers testing IoT water sensor prototypes.',
    read_time_minutes: 3,
    published_at: '2026-10-28T07:45:00Z',
    created_at: '2026-10-28T06:30:00Z',
    updated_at: '2026-10-28T07:45:00Z',
    is_specimen: true,
  },
  {
    id: 'specimen-4',
    title: 'National Grid Decentralisation: State Governments Advance Regional Renewable Energy Charters',
    slug: 'specimen-national-grid-decentralisation',
    excerpt: 'Following constitutional amendments granting subnational electricity regulation, several states inaugurate independent power transmission boards.',
    content: `
# National Grid Decentralisation

*Notice: Editorial specimen demonstrating politics and governance reporting structure.*

An in-depth review of legislative frameworks enabling state-level independent power procurement, renewable micro-grids, and private distribution networks.
    `,
    category_id: 'politics',
    category: {
      id: 'politics',
      name: 'Politics',
      slug: 'politics',
      display_order: 3,
      is_active: true,
    },
    author_id: 'author-4',
    author: {
      id: 'author-4',
      email: 'politics@coastlinereporters.com',
      full_name: 'Balarabe Sani',
      title: 'National Governance Bureau Chief',
      created_at: '2026-01-20T08:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
    },
    status: 'published',
    is_breaking: false,
    is_featured: false,
    is_editor_pick: false,
    featured_image_url: '/images/specimens/solar-grid.jpg',
    featured_image_caption: 'Specimen Image: Rural solar mini-grid installation site.',
    read_time_minutes: 6,
    published_at: '2026-10-28T06:20:00Z',
    created_at: '2026-10-28T05:00:00Z',
    updated_at: '2026-10-28T06:20:00Z',
    is_specimen: true,
  },
  {
    id: 'specimen-5',
    title: 'Preserving Coastal Maritime Heritage: Traditional Boat Regattas and Canoe Carving in the Delta',
    slug: 'specimen-preserving-coastal-maritime-heritage',
    excerpt: 'Cultural historians and master craftsmen collaborate to safeguard centuries-old ceremonial canoe festivals and oral maritime traditions.',
    content: `
# Preserving Coastal Maritime Heritage

*Notice: Editorial specimen demonstrating arts, entertainment, and cultural heritage documentation.*

A comprehensive multimedia feature detailing the cultural significance, canoe building craftsmanship, and community regatta celebrations along the riverine waterways.
    `,
    category_id: 'entertainment',
    category: {
      id: 'entertainment',
      name: 'Entertainment & Culture',
      slug: 'entertainment',
      display_order: 8,
      is_active: true,
    },
    author_id: 'author-1',
    author: {
      id: 'author-1',
      email: 'culture@coastlinereporters.com',
      full_name: 'Tarebi Wilcox',
      title: 'Senior Cultural & Maritime Reporter',
      created_at: '2026-01-15T08:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
    },
    status: 'published',
    is_breaking: false,
    is_featured: false,
    is_editor_pick: false,
    featured_image_url: '/images/specimens/boat-regatta.jpg',
    featured_image_caption: 'Specimen Image: Traditional riverine ceremonial boat parade.',
    read_time_minutes: 4,
    published_at: '2026-10-27T17:00:00Z',
    created_at: '2026-10-27T14:00:00Z',
    updated_at: '2026-10-27T17:00:00Z',
    is_specimen: true,
  },
  {
    id: 'specimen-6',
    title: 'Coastal Secondary Schools Championship Kicks Off with 32 Maritime Academies Competing',
    slug: 'specimen-coastal-secondary-schools-championship',
    excerpt: 'Annual inter-state football and swimming tournament brings together students across Delta, Bayelsa, Rivers, Akwa Ibom, Cross River, and Ondo states.',
    content: `
# Coastal Secondary Schools Championship

*Notice: Specimen sports article demonstrating regional sports coverage.*

A showcase of youth athletic talent, swimming championships, and football tournaments fostering regional cohesion and grassroots development.
    `,
    category_id: 'sports',
    category: {
      id: 'sports',
      name: 'Sports',
      slug: 'sports',
      display_order: 9,
      is_active: true,
    },
    author_id: 'author-2',
    author: {
      id: 'author-2',
      email: 'sports@coastlinereporters.com',
      full_name: 'Chidi Okonkwo',
      title: 'Sports Correspondent',
      created_at: '2026-02-10T08:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
    },
    status: 'published',
    is_breaking: false,
    is_featured: false,
    is_editor_pick: false,
    featured_image_url: '/images/specimens/youth-sports.jpg',
    featured_image_caption: 'Specimen Image: Opening ceremonies for the inter-state tournament.',
    read_time_minutes: 3,
    published_at: '2026-10-27T15:30:00Z',
    created_at: '2026-10-27T13:00:00Z',
    updated_at: '2026-10-27T15:30:00Z',
    is_specimen: true,
  },
];
