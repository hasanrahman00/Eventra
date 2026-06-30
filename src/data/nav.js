// Navigation model — drives the header mega-menu, mobile menu and footer.

export const eventDataHubs = [
  { label: 'Attendee Lists', to: '/event-data/attendees', desc: 'Registered attendees by show, role & industry' },
  { label: 'Exhibitor Lists', to: '/event-data/exhibitors', desc: 'Booth exhibitors and their decision-makers' },
  { label: 'Visitor Data', to: '/event-data/visitors', desc: 'Trade visitors and walk-the-floor buyers' },
  { label: 'By Industry', to: '/event-data#industries', desc: 'Tech, healthcare, manufacturing & more' },
  { label: 'By Region', to: '/event-data#regions', desc: 'North America, EMEA & APAC coverage' },
  { label: 'By Event Type', to: '/event-data#event-types', desc: 'Expos, conferences, summits & trade fairs' },
]

export const eventDataFeatured = [
  { label: 'Browse all event data', to: '/event-data' },
  { label: 'Attendee vs exhibitor data', to: '/event-data/attendees' },
  { label: 'Pre-show email marketing', to: '/solutions/pre-show-marketing' },
]

export const solutionLinks = [
  { label: 'Data Verification', to: '/solutions/data-verification' },
  { label: 'Data Enrichment', to: '/solutions/data-enrichment' },
  { label: 'Email & Data Append', to: '/solutions/data-append' },
  { label: 'Pre-Show Marketing', to: '/solutions/pre-show-marketing' },
  { label: 'Post-Show Follow-up', to: '/solutions/post-show-followup' },
  { label: 'Account-Based Marketing', to: '/solutions/account-based-marketing' },
]

export const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Case Studies', to: '/case-studies' },
]

export const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

export const primaryNav = [
  {
    label: 'Event Data', type: 'mega', to: '/event-data', panelLabel: 'Browse event data',
    hubs: eventDataHubs, featured: eventDataFeatured,
    cta: { label: 'Explore all event data', to: '/event-data' },
  },
  { label: 'Solutions', type: 'list', to: '/solutions', links: solutionLinks },
  { label: 'Resources', type: 'list', to: '/blog', links: resourceLinks },
  { label: 'Company', type: 'list', to: '/about', links: companyLinks },
]
