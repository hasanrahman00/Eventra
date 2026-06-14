import ListingTemplate from '../templates/ListingTemplate.jsx'
import { blogPosts } from '../data/collections.js'

export default function Blog() {
  return (
    <ListingTemplate
      page={{
        title: 'The Eventra Blog',
        subcopy: 'Playbooks, benchmarks and field notes on event marketing, trade-show data and pipeline.',
        variant: 'articles',
        items: blogPosts,
        seo: { title: 'Blog', description: 'Playbooks and benchmarks on event marketing and trade-show data.' },
      }}
    />
  )
}
