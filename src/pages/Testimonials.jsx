import ListingTemplate from '../templates/ListingTemplate.jsx'
import testimonials from '../data/pages/testimonials.js'

export default function Testimonials() {
  return (
    <ListingTemplate
      page={{
        title: 'What customers say',
        subcopy: 'Event, marketing and revenue leaders on what changed after switching to Eventra.',
        variant: 'testimonials',
        items: testimonials,
        seo: { title: 'Testimonials', description: 'Customer testimonials about Eventra event data and marketing programs.' },
      }}
    />
  )
}
