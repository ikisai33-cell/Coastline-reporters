import { Article, BreakingAlert, NigerDeltaState } from '@/types';

export const SPECIMEN_ARTICLES: Article[] = [
  // 1. LEAD INVESTIGATION (Environment & Rivers State) - BREAKING
  {
    id: 'art-001',
    title: 'Niger Delta Coastal Mangrove Restoration Initiative Reports Landmark Community Tree Planting Benchmark',
    subheadline: 'Participatory conservation model across coastal creek corridors shows measurable reduction in shoreline erosion.',
    slug: 'niger-delta-coastal-mangrove-restoration-benchmark',
    excerpt: 'Community-led conservation partnerships across Bayelsa and Rivers state coastal belts demonstrate scalable models for estuary revitalization and erosion prevention.',
    content: `
## Regional Ecological Preservation in Focus

Across the brackish estuaries of the Niger Delta basin, cooperative coastal alliances have embarked on a comprehensive mangrove reforestation programme aimed at stabilising vulnerable shorelines and revitalising indigenous marine ecosystems.

Environmental researchers affiliated with regional academic institutes emphasise that mangrove ecosystems serve as indispensable natural barriers against rising sea levels, storm surges, and shoreline degradation. In communities where tidal erosion has steadily encroached upon residential clusters and ancestral fishing piers, these botanical seawalls represent both ecological resilience and economic survival.

> "Preserving the coastline is not merely an environmental obligation; it is fundamental to the economic livelihood and cultural heritage of our maritime communities," notes the regional project director in Port Harcourt.

## Participatory Governance and Community Monitoring

The initiative prioritises direct participatory governance, pairing indigenous coastal fishermen with marine biologists to map high-risk saltwater inlets. Over the past twelve months, community nurseries have nurtured resilient saplings tailored for brackish water endurance, creating local green employment for youth and women in coastal villages.

Key milestones verified by the joint technical advisory team include:
- Establishment of twelve community-managed seedling nurseries across five riverine local government councils.
- Documented recovery of native crab and juvenile fish species in previously degraded saltwater creeks.
- Integration of remote drone surveying with traditional boat-patrol observation logs.

## Scalable Frameworks for Regional Policy

As federal environmental authorities review nationwide coastal climate resilience strategies, this community-centred approach offers a transparent, verifiable benchmark for conservation investments. Independent observers underline that sustainable funding mechanisms and strict anti-spill enforcement must accompany ecological restoration to safeguard gains.
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
    is_breaking: true,
    is_featured: true,
    is_editor_pick: true,
    state: 'rivers',
    featured_image_url: '/images/specimens/mangrove-restoration.jpg',
    featured_image_caption: 'Specimen Photograph: Estuary conservation teams monitoring coastal mangrove replanting in the Niger Delta basin.',
    featured_image_credit: 'Coastline Reporters / Port Harcourt Bureau Photo Desk',
    read_time_minutes: 5,
    published_at: '2026-10-28T09:30:00Z',
    created_at: '2026-10-28T08:00:00Z',
    updated_at: '2026-10-28T09:45:00Z',
    sources: [
      { title: 'Niger Delta Coastal Basin Environmental Survey (2025/2026)', publisher: 'Marine Ecology Institute' },
      { title: 'Community Estuary Monitoring White Paper', publisher: 'Coastal Resource Alliance' },
    ],
    correction_notice: 'Updated on 28 October 2026 at 09:45 GMT to clarify the number of community nurseries established across participating riverine councils.',
    is_specimen: true,
  },

  // 2. BUSINESS & MARITIME (Delta State)
  {
    id: 'art-002',
    title: 'Southern Seaports Modernisation: Evaluating Maritime Freight Capacity and Inland Transit Networks',
    subheadline: 'Strategic dredging and digital terminal upgrades at Warri and Onne ease congestion across southern maritime corridors.',
    slug: 'southern-seaports-modernisation-maritime-freight',
    excerpt: 'Infrastructure investments at Onne, Warri, and Calabar deep seaports seek to decongest metropolitan bottlenecks and stimulate regional non-oil exports.',
    content: `
## Expanding Maritime Gateways

Shipping logistics experts evaluate dockside automation, digital customs clearing corridors, and dry port connections designed to accelerate cargo transit times across southern maritime terminals.

For decades, the heavy concentration of commercial shipping in Lagos metropolitan ports produced chronic arterial roadway congestion and increased demurrage expenses for importers across eastern and northern commercial hubs. Current capital investments by port authorities aim to disperse commercial maritime traffic more evenly across the southern coastline.

> "Upgrading channel drafts and cargo handling equipment in Warri and Calabar delivers substantial logistical cost savings for industrial shippers across the south-south and south-east regions," states a senior maritime economist.

## Intermodal Rail and Inland Waterway Connections

A vital pillar of the modernisation master plan involves connecting dock terminals with inland rail sidings and dredged river barges, reducing dependence on heavy haulage vehicles that strain regional highways.
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
    state: 'delta',
    featured_image_url: '/images/specimens/container-terminal.jpg',
    featured_image_caption: 'Specimen Image: Container freight handling operations at southern deep seaport facilities.',
    featured_image_credit: 'Maritime Ports Authority / Specimen Archive',
    read_time_minutes: 4,
    published_at: '2026-10-28T08:15:00Z',
    created_at: '2026-10-28T07:00:00Z',
    updated_at: '2026-10-28T08:15:00Z',
    sources: [
      { title: 'Federal Seaport Capacity Utilization Review (Q3 2026)', publisher: 'National Maritime Logistics Bureau' },
    ],
    is_specimen: true,
  },

  // 3. TECHNOLOGY & ENTERPRISE (Bayelsa State)
  {
    id: 'art-003',
    title: 'Niger Delta Digital Innovation Labs Foster Next-Generation Agritech and Clean Energy Startups',
    subheadline: 'Decentralised solar-powered cold storage and riverine logistics applications secure early-stage angel commitments.',
    slug: 'niger-delta-digital-innovation-labs-agritech',
    excerpt: 'Youth-led technology incubators across Yenagoa, Port Harcourt, and Warri develop decentralised solar irrigation and aquaculture monitoring tools.',
    content: `
## Cultivating Local Technological Solutions

Tech entrepreneurs in the Niger Delta are building bespoke hardware and software solutions addressing unique hydrological and agricultural challenges faced by coastal farmers.

In Yenagoa, a cohort of software engineers and agronomists has successfully piloted a low-power acoustic sensor system for commercial catfish aquaculture. The device alerts farmers via SMS whenever dissolved oxygen levels fluctuate beyond safe thresholds, significantly reducing stock mortality in tidal ponds.

## Capital Inflows and Tech Ecosystem Maturation

While capital raising in the Nigerian tech landscape has historically gravitated towards fintech ventures in Lagos, regional incubators in the Delta are increasingly demonstrating commercial viability in hardware, cold-chain refrigeration, and riverine delivery logistics.
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
    state: 'bayelsa',
    featured_image_url: '/images/specimens/tech-hub.jpg',
    featured_image_caption: 'Specimen Image: Young software engineers testing IoT water sensor prototypes.',
    featured_image_credit: 'Coastline Technology Desk / Specimen Archive',
    read_time_minutes: 3,
    published_at: '2026-10-28T07:45:00Z',
    created_at: '2026-10-28T06:30:00Z',
    updated_at: '2026-10-28T07:45:00Z',
    is_specimen: true,
  },

  // 4. POLITICS & GOVERNANCE (National / Akwa Ibom)
  {
    id: 'art-004',
    title: 'National Grid Decentralisation: State Governments Advance Regional Renewable Energy Charters',
    subheadline: 'Subnational electricity markets take shape as coastal states commission independent regulatory commissions.',
    slug: 'national-grid-decentralisation-state-energy-charters',
    excerpt: 'Following constitutional amendments granting subnational electricity regulation, several states inaugurate independent power transmission boards.',
    content: `
## Constitutional Devolution of Energy Powers

Following constitutional amendments that empowered Nigerian states to legislate on electricity generation, transmission, and distribution within their territories, regional energy boards are beginning to redefine power procurement.

In Akwa Ibom and Edo states, state energy commissioners have published foundational grid codes permitting private solar micro-grids and gas-to-power industrial concessions.

> "Energy decentralisation represents the single most consequential economic reform for subnational industrialization in modern Nigerian history," observes an infrastructure law specialist.

## Managing Transition Dynamics

Legal analysts point out that harmonising legacy federal power purchase agreements with nascent state power markets will require close regulatory coordination between state authorities and the Nigerian Electricity Regulatory Commission (NERC).
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
    state: 'akwa-ibom',
    featured_image_url: '/images/specimens/solar-grid.jpg',
    featured_image_caption: 'Specimen Image: Regional solar mini-grid installation site.',
    featured_image_credit: 'Energy Infrastructure Archive',
    read_time_minutes: 6,
    published_at: '2026-10-28T06:20:00Z',
    created_at: '2026-10-28T05:00:00Z',
    updated_at: '2026-10-28T06:20:00Z',
    is_specimen: true,
  },

  // 5. NIGERIA (National Affairs)
  {
    id: 'art-005',
    title: 'Federal Infrastructure Audit Targets Bridge Reinforcement Across Coastal Transport Arteries',
    subheadline: 'Public works ministry allocates maintenance funding for maritime causeways and highway flyovers.',
    slug: 'federal-infrastructure-audit-coastal-bridges',
    excerpt: 'Comprehensive engineering assessments evaluate structural integrity and corrosion resilience along high-traffic coastal transport routes.',
    content: `
## Engineering Scrutiny on Critical Transport Links

A nationwide assessment of maritime causeways, bridges, and bypass routes has been initiated by federal civil engineering inspectors. Structural engineers note that saltwater spray and heavy haulage loads require specialised anti-corrosive treatments and regular bearing inspections.
    `,
    category_id: 'nigeria',
    category: {
      id: 'nigeria',
      name: 'Nigeria',
      slug: 'nigeria',
      display_order: 2,
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
    featured_image_url: '/images/specimens/bridge-inspection.jpg',
    featured_image_caption: 'Specimen Image: Bridge structural inspection engineers surveying coastal transport links.',
    featured_image_credit: 'Civil Engineering Inspection Corps',
    read_time_minutes: 4,
    published_at: '2026-10-27T19:00:00Z',
    created_at: '2026-10-27T16:00:00Z',
    updated_at: '2026-10-27T19:00:00Z',
    is_specimen: true,
  },

  // 6. SOCIETY & PUBLIC HEALTH (Cross River State)
  {
    id: 'art-006',
    title: 'Riverine Telemedicine Clinics Bridge Healthcare Gaps Across Remote Island Settlements',
    subheadline: 'Solar-powered satellite broadband enables specialist consultations for maternal and child health in isolated communities.',
    slug: 'riverine-telemedicine-clinics-island-settlements',
    excerpt: 'Mobile medical boats equipped with satellite communication systems connect rural healthcare centres with metropolitan teaching hospitals.',
    content: `
## Overcoming Geographical Barriers in Primary Healthcare

In coastal settlements where the nearest tertiary hospital is several hours away by motorized canoe, solar-powered medical boats equipped with portable ultrasound and satellite data terminals are transforming emergency medical care.

Frontline medical officers in Cross River and Delta state coastal settlements report that tele-consultations have reduced maternal transfer delays by over forty percent.
    `,
    category_id: 'society',
    category: {
      id: 'society',
      name: 'Society',
      slug: 'society',
      display_order: 6,
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
    is_featured: false,
    is_editor_pick: true,
    state: 'cross-river',
    featured_image_url: '/images/specimens/telemedicine-boat.jpg',
    featured_image_caption: 'Specimen Image: Mobile medical boat providing primary clinical services along riverine waterways.',
    featured_image_credit: 'Coastline Community Health Desk',
    read_time_minutes: 4,
    published_at: '2026-10-27T18:00:00Z',
    created_at: '2026-10-27T15:00:00Z',
    updated_at: '2026-10-27T18:00:00Z',
    is_specimen: true,
  },

  // 7. ENTERTAINMENT & CULTURE (Edo State)
  {
    id: 'art-007',
    title: 'Preserving Coastal Maritime Heritage: Traditional Boat Regattas and Canoe Carving in the Delta',
    subheadline: 'Master craftsmen and cultural custodians document oral riverine epics and centuries-old ceremonial maritime arts.',
    slug: 'preserving-coastal-maritime-heritage-regattas',
    excerpt: 'Cultural historians and master craftsmen collaborate to safeguard centuries-old ceremonial canoe festivals and oral maritime traditions.',
    content: `
## Honouring Maritime Traditions

A comprehensive multimedia feature detailing the cultural significance, canoe building craftsmanship, and community regatta celebrations along the riverine waterways. In historic boatyards along the Benin River and Escravos estuary, master woodworkers continue to carve racing hulls using sustainable timber harvesting traditions passed down across generations.
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
    state: 'edo',
    featured_image_url: '/images/specimens/boat-regatta.jpg',
    featured_image_caption: 'Specimen Image: Traditional riverine ceremonial boat parade.',
    featured_image_credit: 'Coastline Arts & Heritage Archives',
    read_time_minutes: 4,
    published_at: '2026-10-27T17:00:00Z',
    created_at: '2026-10-27T14:00:00Z',
    updated_at: '2026-10-27T17:00:00Z',
    is_specimen: true,
  },

  // 8. SPORTS (Ondo State)
  {
    id: 'art-008',
    title: 'Coastal Secondary Schools Championship Kicks Off with 32 Maritime Academies Competing',
    subheadline: 'Annual inter-state tournament fosters grassroots athletics, canoeing, and football across nine southern states.',
    slug: 'coastal-secondary-schools-championship-athletics',
    excerpt: 'Annual inter-state football and swimming tournament brings together students across Delta, Bayelsa, Rivers, Akwa Ibom, Cross River, and Ondo states.',
    content: `
## Youth Athletics Across the Coastal Belt

A showcase of youth athletic talent, swimming championships, and football tournaments fostering regional cohesion and grassroots development. Hosted in coastal Ondo state, this year's championship includes traditional open-water swimming alongside track and field events.
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
    state: 'ondo',
    featured_image_url: '/images/specimens/youth-sports.jpg',
    featured_image_caption: 'Specimen Image: Opening ceremonies for the inter-state coastal tournament.',
    featured_image_credit: 'Regional Sports Federation Archive',
    read_time_minutes: 3,
    published_at: '2026-10-27T15:30:00Z',
    created_at: '2026-10-27T13:00:00Z',
    updated_at: '2026-10-27T15:30:00Z',
    is_specimen: true,
  },

  // 9. WORLD & GEOPOLITICS (Global Energy Markets)
  {
    id: 'art-009',
    title: 'Global Energy Transition Summits Examine Maritime LNG Corridors and African Gas Exports',
    subheadline: 'European and Asian demand for diversified natural gas supplies accelerates Gulf of Guinea terminal investments.',
    slug: 'global-energy-transition-summits-african-gas',
    excerpt: 'International energy ministers and multilateral financiers analyse long-term contracts, carbon offsets, and domestic energy security imperatives.',
    content: `
## Global Gas Dynamics and African Infrastructure

As international economies balance decarbonisation targets with near-term energy security, natural gas infrastructure along the Gulf of Guinea has attracted renewed multilateral scrutiny.

Energy policy delegates at international climate symposiums emphasise that gas projects must integrate strict methane leak detection, flare elimination, and local power access guarantees to deliver equitable economic benefits.
    `,
    category_id: 'world',
    category: {
      id: 'world',
      name: 'World',
      slug: 'world',
      display_order: 10,
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
    is_featured: false,
    is_editor_pick: false,
    featured_image_url: '/images/specimens/lng-tanker.jpg',
    featured_image_caption: 'Specimen Image: Liquefied Natural Gas carrier vessel departing coastal export terminal.',
    featured_image_credit: 'Global Energy Visuals',
    read_time_minutes: 5,
    published_at: '2026-10-27T12:00:00Z',
    created_at: '2026-10-27T09:00:00Z',
    updated_at: '2026-10-27T12:00:00Z',
    is_specimen: true,
  },

  // 10. NIGER DELTA / ABIA (Aba Manufacturing & Maritime Supply Chains)
  {
    id: 'art-010',
    title: 'Aba Manufacturing Clusters Forge Direct Supply Chains with Maritime Component Importers',
    subheadline: 'Subnational logistics agreements streamline component shipping from coastal dry ports to regional fabricators.',
    slug: 'aba-manufacturing-clusters-maritime-supply-chains',
    excerpt: 'Commercial associations in Abia state partner with bonded container terminals to accelerate light manufacturing raw material imports.',
    content: `
## Enhancing Commercial Trade Corridors

Light manufacturers, footwear artisans, and garment fabricators in Abia state are establishing direct logistics corridors with southern seaports. By routing raw textile and machinery consignments through Onne and Port Harcourt bonded terminals rather than distant northern ports, regional commercial operators report substantial reductions in transit turnaround times.
    `,
    category_id: 'niger-delta',
    category: {
      id: 'niger-delta',
      name: 'Niger Delta',
      slug: 'niger-delta',
      display_order: 1,
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
    is_editor_pick: false,
    state: 'abia',
    featured_image_url: '/images/specimens/manufacturing-cluster.jpg',
    featured_image_caption: 'Specimen Image: Industrial machining workshop in regional manufacturing hub.',
    featured_image_credit: 'Coastline Commercial Archives',
    read_time_minutes: 4,
    published_at: '2026-10-26T16:00:00Z',
    created_at: '2026-10-26T13:00:00Z',
    updated_at: '2026-10-26T16:00:00Z',
    is_specimen: true,
  },

  // 11. NIGER DELTA / IMO (Oguta Lake Eco-Tourism & Agricultural Transport)
  {
    id: 'art-011',
    title: 'Oguta Lake Conservation Council Reviews Sustainable Eco-Tourism and Agro-Riverine Transport Plans',
    subheadline: 'Multi-stakeholder committee balances water quality preservation with commercial ferry route expansion.',
    slug: 'oguta-lake-conservation-council-eco-tourism',
    excerpt: 'Community elders and environmental scientists in Imo state initiate water monitoring safeguards across historic freshwater lake.',
    content: `
## Protecting Historic Freshwater Basins

In Imo state, the Oguta freshwater lake basin represents both a critical inland fishery and a cherished cultural landmark. A newly formed conservation council has published sustainable watercraft navigation guidelines aimed at preventing fuel leaks and conserving indigenous aquatic plant life while supporting local passenger ferry connections.
    `,
    category_id: 'niger-delta',
    category: {
      id: 'niger-delta',
      name: 'Niger Delta',
      slug: 'niger-delta',
      display_order: 1,
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
    is_featured: false,
    is_editor_pick: false,
    state: 'imo',
    featured_image_url: '/images/specimens/oguta-lake.jpg',
    featured_image_caption: 'Specimen Image: Morning mist across freshwater inland lake basin.',
    featured_image_credit: 'Coastline Environmental Photo Desk',
    read_time_minutes: 3,
    published_at: '2026-10-26T11:00:00Z',
    created_at: '2026-10-26T08:00:00Z',
    updated_at: '2026-10-26T11:00:00Z',
    is_specimen: true,
  },
];
