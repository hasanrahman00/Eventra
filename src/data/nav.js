// Primary navigation model. Drives the header mega-menu and the footer.
// Leaf links point at routes registered in src/data/registry.js.

export const dataHubs = [
  { label: 'By Audience', to: '/audience-lists', desc: 'Attendees, exhibitors, visitors, speakers & more' },
  { label: 'By Event Type', to: '/event-type-lists', desc: 'Trade shows, expos, conferences, summits' },
  { label: 'By Industry', to: '/industry-event-lists', desc: 'Sector-specific event audiences' },
  { label: 'By Region', to: '/regional-event-lists', desc: 'Country & region-level event coverage' },
]

export const dataFeatured = [
  { label: 'All Event Data', to: '/event-data' },
  { label: 'Upcoming Events', to: '/events' },
  { label: 'Custom List Building', to: '/services/custom-list-building' },
  { label: 'Attendee Email Lists', to: '/audience/attendee-email-list' },
]

// Data Services (verification, append, enrichment, cleansing…)
export const dataServiceLinks = [
  { label: 'Data Verification', to: '/services/data-verification' },
  { label: 'Email Append', to: '/services/email-append' },
  { label: 'Data Enrichment', to: '/services/data-enrichment' },
  { label: 'Data Appending', to: '/services/data-appending' },
  { label: 'Data Cleansing', to: '/services/data-cleansing' },
  { label: 'Custom List Building', to: '/services/custom-list-building' },
  { label: 'Data Licensing', to: '/services/data-licensing' },
]

// Event Marketing (demand gen + engagement)
export const marketingLinks = [
  { label: 'Pre-Show Email Marketing', to: '/services/pre-show-email-marketing' },
  { label: 'Post-Show Follow-Up', to: '/services/post-show-follow-up' },
  { label: 'Account-Based Marketing', to: '/services/account-based-marketing' },
  { label: 'Lead Generation', to: '/services/lead-generation' },
  { label: 'Demand Generation', to: '/services/demand-generation' },
  { label: 'Email Marketing', to: '/services/email-marketing' },
  { label: 'Booth Traffic Campaigns', to: '/services/booth-traffic-campaigns' },
  { label: 'Appointment Setting', to: '/services/appointment-setting' },
  { label: 'Webinar Promotion', to: '/services/webinar-promotion' },
]

export const engageLinks = [
  { label: 'Booth Traffic Campaigns', to: '/services/booth-traffic-campaigns' },
  { label: 'Appointment Setting', to: '/services/appointment-setting' },
  { label: 'Lead Nurturing', to: '/services/lead-nurturing' },
  { label: 'Sales Enablement', to: '/services/sales-enablement' },
  { label: 'Retargeting', to: '/services/retargeting' },
]

export const growthLinks = [
  { label: 'Event ROI Consulting', to: '/services/event-roi-consulting' },
  { label: 'Sponsorship Activation', to: '/services/sponsorship-activation' },
  { label: 'Inside Sales Teams', to: '/services/inside-sales-teams' },
  { label: 'Reseller Program', to: '/services/reseller-program' },
]

export const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Why Eventra', to: '/why-us' },
  { label: 'Newsroom', to: '/news' },
  { label: 'Delivery Partners', to: '/partners' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Guides', to: '/resources/guides' },
  { label: 'White Papers', to: '/resources/white-papers' },
  { label: 'Infographics', to: '/resources/infographics' },
  { label: 'Video Gallery', to: '/resources/videos' },
  { label: 'Free Marketing Tools', to: '/resources/tools' },
]

// Top-level menu used by the header.
export const primaryNav = [
  {
    label: 'Event Data',
    type: 'mega',
    hubs: dataHubs,
    featured: dataFeatured,
    cta: { label: 'Explore all event data', to: '/event-data' },
  },
  { label: 'Data Services', type: 'list', links: dataServiceLinks, to: '/services/data-verification' },
  { label: 'Marketing', type: 'list', links: marketingLinks, to: '/services/pre-show-email-marketing' },
  { label: 'Growth', type: 'list', links: growthLinks, to: '/services/event-roi-consulting' },
  { label: 'Events', type: 'link', to: '/events' },
  { label: 'Resources', type: 'list', links: resourceLinks, to: '/blog' },
  { label: 'Company', type: 'list', links: companyLinks, to: '/about' },
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Data Policy', to: '/data-policy' },
  { label: 'Opt-Out / Do Not Sell', to: '/do-not-sell' },
  { label: 'Reseller Program', to: '/reseller-program' },
]
