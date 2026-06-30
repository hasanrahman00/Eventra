// Maps each data-driven page to its template component and produces the
// <Route> list consumed by App.
import ServicePageTemplate from '../templates/ServicePageTemplate.jsx'
import ArticleTemplate from '../templates/ArticleTemplate.jsx'
import LegalTemplate from '../templates/LegalTemplate.jsx'
import { routablePages } from './collections.js'

export const templateMap = {
  service: ServicePageTemplate,
  article: ArticleTemplate,
  legal: LegalTemplate,
}

export function getContentRoutes() {
  return routablePages
    .filter((p) => p.path && templateMap[p.template])
    .map((p) => ({ path: p.path, Component: templateMap[p.template], page: p }))
}

export { routablePages }
