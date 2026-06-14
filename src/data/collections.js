// Central content index. Imports every data file, normalizes it into a uniform
// page shape (adding category / path / template), and exposes selectors used by
// the route registry and the hub template. No component imports here → no cycles.

import hubs from './pages/hubs.js'
import audience from './pages/audience.js'
import eventtype from './pages/eventtype.js'
import industry from './pages/industry.js'
import region from './pages/region.js'
import standalone from './pages/standalone.js'
import servicesData from './pages/services-data.js'
import servicesMarketing from './pages/services-marketing.js'
import servicesEngage from './pages/services-engage.js'
import servicesGrowth from './pages/services-growth.js'
import blog from './pages/blog.js'
import caseStudies from './pages/caseStudies.js'
import legal from './pages/legal.js'

const services = [
  ...servicesData,
  ...servicesMarketing,
  ...servicesEngage,
  ...servicesGrowth,
]

// Leaf data-list categories: file → routing metadata.
const CATEGORY_CONFIG = {
  audience: { source: audience, category: 'By Audience', hubPath: '/audience-lists', prefix: '/audience' },
  eventtype: { source: eventtype, category: 'By Event Type', hubPath: '/event-type-lists', prefix: '/event-type' },
  industry: { source: industry, category: 'By Industry', hubPath: '/industry-event-lists', prefix: '/industry' },
  region: { source: region, category: 'By Region', hubPath: '/regional-event-lists', prefix: '/region' },
}

function blurbOf(p) {
  return p.blurb || p.hero?.subcopy || p.seo?.description || ''
}

// Normalize leaf data pages from each category file.
const leafDataPages = Object.values(CATEGORY_CONFIG).flatMap(({ source, category, hubPath, prefix }) =>
  (source || []).map((p) => ({
    ...p,
    template: 'data',
    category,
    hubPath,
    path: p.path || `${prefix}/${p.slug}`,
    blurb: blurbOf(p),
  })),
)

// Standalone data pages carry their own path / category / hubPath.
const standaloneDataPages = (standalone || []).map((p) => ({
  ...p,
  template: 'data',
  hubPath: p.hubPath || '/event-data',
  path: p.path || `/${p.slug}`,
  blurb: blurbOf(p),
}))

export const allDataPages = [...leafDataPages, ...standaloneDataPages]

export const hubPages = (hubs || []).map((p) => ({ ...p, template: 'hub' }))

export const servicePages = (services || []).map((p) => ({
  ...p,
  template: 'service',
  path: p.path || `/services/${p.slug}`,
}))

export const blogPosts = (blog || []).map((p) => ({
  ...p,
  template: 'article',
  kind: 'blog',
  category: p.category || 'Article',
  path: p.path || `/blog/${p.slug}`,
}))

export const caseStudyPosts = (caseStudies || []).map((p) => ({
  ...p,
  template: 'article',
  kind: 'case-study',
  category: p.category || 'Case Study',
  path: p.path || `/case-studies/${p.slug}`,
}))

export const legalPages = (legal || []).map((p) => ({
  ...p,
  template: 'legal',
  path: p.path || `/${p.slug}`,
}))

// Selector used by HubTemplate to render the child grid of a category.
export function pagesByCategory(category) {
  return allDataPages
    .filter((p) => p.category === category)
    .map((p) => ({ title: p.title, path: p.path, blurb: p.blurb }))
}

// Every data-driven page that should become a route.
export const routablePages = [
  ...hubPages,
  ...allDataPages,
  ...servicePages,
  ...blogPosts,
  ...caseStudyPosts,
  ...legalPages,
]
