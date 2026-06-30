// Central content index. Imports data files, normalizes into a uniform shape
// (template + path), and exposes selectors used by the registry and pages.
import services from './pages/services.js'
import audiences from './pages/audiences.js'
import blog from './pages/blog.js'
import caseStudies from './pages/caseStudies.js'
import legal from './pages/legal.js'

export const servicePages = [...(services || []), ...(audiences || [])].map((p) => ({
  ...p,
  template: 'service',
  path: p.path || `/solutions/${p.slug}`,
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

export const routablePages = [
  ...servicePages,
  ...blogPosts,
  ...caseStudyPosts,
  ...legalPages,
]
