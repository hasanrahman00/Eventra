import { useEffect } from 'react'
import brand from '../site/brand.js'

// Sets document title + meta description per page.
export default function useSeo({ title, description } = {}) {
  useEffect(() => {
    document.title = title ? `${title} — ${brand.name}` : `${brand.name} — ${brand.tagline}`
    const desc = description || brand.description
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', desc)
  }, [title, description])
}
