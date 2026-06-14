// Category hub pages. Either `childCategory` (lists leaf pages of that category)
// or `categories` (a directory of sub-hubs) drives the card grid.

const hubs = [
  {
    slug: 'event-data',
    path: '/event-data',
    title: 'Trade Show & Event Data',
    eyebrow: 'Event Data',
    seo: {
      title: 'Trade Show & Event Attendee Data',
      description:
        'Verified attendee, exhibitor and visitor contact data from trade shows, expos and conferences worldwide. Segment by audience, event type, industry or region.',
    },
    hero: {
      headline: 'Every trade show is a pipeline — we hand you the guest list',
      subcopy:
        'Verified attendee, exhibitor, visitor and speaker contact data from 40,000+ events worldwide. Reach the room before, during and after the show.',
    },
    highlights: ['120M+ event contacts', '96% deliverability SLA', 'Opt-in & compliant', '40K+ events covered'],
    stats: [
      { value: '120M+', label: 'Event contacts' },
      { value: '40K+', label: 'Events covered' },
      { value: '96%', label: 'Deliverability SLA' },
      { value: '150+', label: 'Countries' },
    ],
    categories: [
      { title: 'By Audience', blurb: 'Attendees, exhibitors, visitors, speakers, sponsors and delegates.', path: '/audience-lists' },
      { title: 'By Event Type', blurb: 'Trade shows, expos, conferences, conventions and summits.', path: '/event-type-lists' },
      { title: 'By Industry', blurb: 'Sector-specific event audiences from tech to healthcare.', path: '/industry-event-lists' },
      { title: 'By Region', blurb: 'Country and region-level coverage across the globe.', path: '/regional-event-lists' },
    ],
    gridEyebrow: 'Browse',
    gridTitle: 'Find your event audience',
    gridDesc: 'Start with a category — each one drills into ready-to-deploy event segments.',
    features: [
      { icon: 'BadgeCheck', title: 'Verified before delivery', body: 'Every record passes multi-step validation so your sender reputation stays intact.' },
      { icon: 'CalendarDays', title: 'Mapped to the show', body: 'Contacts are tied to the specific event, year and edition — not a generic database dump.' },
      { icon: 'ShieldCheck', title: 'Opt-in & compliant', body: 'Sourced through a documented opt-in process and aligned with GDPR and CAN-SPAM.' },
    ],
    faqs: [
      { q: 'Where does the event data come from?', a: 'We aggregate from public exhibitor directories, registration partners, opt-in sign-ups and our own research team, then verify every record before delivery.' },
      { q: 'Can I get data for a specific show?', a: 'Yes. Tell us the event, edition and the audience you want — attendees, exhibitors or visitors — and we’ll return matched counts and a free sample.' },
      { q: 'What formats do you deliver in?', a: 'CSV and XLSX by default, with direct push to most major CRMs and marketing platforms on request.' },
    ],
  },
  {
    slug: 'audience-lists',
    path: '/audience-lists',
    title: 'Event Audience Lists',
    childCategory: 'By Audience',
    eyebrow: 'Event Data',
    seo: {
      title: 'Event Audience Email Lists — Attendees, Exhibitors & More',
      description: 'Reach the exact role at every show — attendees, exhibitors, visitors, speakers, sponsors and delegates — with verified contact data.',
    },
    hero: {
      headline: 'Target the exact role in the room',
      subcopy: 'Whether you sell to the exhibitors on the floor or the buyers walking it, we segment every event audience by the role that matters to you.',
    },
    highlights: ['Attendees & visitors', 'Exhibitors & sponsors', 'Speakers & delegates'],
    stats: [
      { value: '120M+', label: 'Event contacts' },
      { value: '8+', label: 'Audience types' },
      { value: '96%', label: 'Deliverability SLA' },
      { value: 'Per-show', label: 'Segmentation' },
    ],
    gridTitle: 'Audience types',
    features: [
      { icon: 'Users', title: 'Role-level targeting', body: 'Reach attendees, exhibitors, visitors or speakers — not an undifferentiated blob.' },
      { icon: 'BadgeCheck', title: 'Verified contacts', body: 'Names, titles and work emails are validated so you reach real people.' },
      { icon: 'Target', title: 'Buyer or seller', body: 'Sell to the booths on the floor or the buyers walking it — your call.' },
    ],
  },
  {
    slug: 'event-type-lists',
    path: '/event-type-lists',
    title: 'Event Type Lists',
    childCategory: 'By Event Type',
    eyebrow: 'Event Data',
    seo: {
      title: 'Email Lists by Event Type — Trade Shows, Expos & Conferences',
      description: 'Verified contact data segmented by event format — trade shows, expos, conferences, conventions, summits and virtual events.',
    },
    hero: {
      headline: 'Match your message to the format',
      subcopy: 'A trade show buyer and a conference delegate behave differently. Segment by event format so your outreach lands in context.',
    },
    highlights: ['Trade shows & expos', 'Conferences & summits', 'Virtual & hybrid'],
    stats: [
      { value: '40K+', label: 'Events covered' },
      { value: '9+', label: 'Event formats' },
      { value: '96%', label: 'Deliverability SLA' },
      { value: '150+', label: 'Countries' },
    ],
    gridTitle: 'Event formats',
    features: [
      { icon: 'Tent', title: 'Format-aware', body: 'Trade shows, expos, conferences and summits each get their own treatment.' },
      { icon: 'MonitorPlay', title: 'Virtual & hybrid', body: 'Reach registrants from webinars and virtual events, not just in-person shows.' },
      { icon: 'CalendarClock', title: 'Current editions', body: 'Tied to the latest edition of each event so contacts are fresh.' },
    ],
  },
  {
    slug: 'industry-event-lists',
    path: '/industry-event-lists',
    title: 'Industry Event Lists',
    childCategory: 'By Industry',
    eyebrow: 'Event Data',
    seo: {
      title: 'Industry-Specific Trade Show & Event Lists',
      description: 'Verified event contact data segmented by industry — technology, healthcare, manufacturing, automotive, construction and more.',
    },
    hero: {
      headline: 'Own the show floor in your vertical',
      subcopy: 'From medical congresses to tech expos, reach the buyers and exhibitors at the events that define your industry.',
    },
    highlights: ['16+ industries', 'Sector-verified', 'Buyer & exhibitor data'],
    stats: [
      { value: '16+', label: 'Industries' },
      { value: '40K+', label: 'Events covered' },
      { value: '96%', label: 'Deliverability SLA' },
      { value: '150+', label: 'Countries' },
    ],
    gridTitle: 'Industries',
    features: [
      { icon: 'Factory', title: 'Vertical depth', body: 'Industry-tagged event audiences so messaging fits each sector’s context.' },
      { icon: 'Handshake', title: 'Buyers & exhibitors', body: 'Reach both sides of the floor — the booths and the foot traffic.' },
      { icon: 'Globe', title: 'Global shows', body: 'Coverage of flagship industry events across 150+ countries.' },
    ],
  },
  {
    slug: 'regional-event-lists',
    path: '/regional-event-lists',
    title: 'Regional Event Lists',
    childCategory: 'By Region',
    eyebrow: 'Event Data',
    seo: {
      title: 'Regional Trade Show & Event Email Lists',
      description: 'Country and region-level event contact data — USA, UK, Germany, UAE/Dubai, Singapore, India and more major expo hubs.',
    },
    hero: {
      headline: 'Go to market show by show, region by region',
      subcopy: 'Expand into new markets with localized event data from the world’s biggest expo hubs — handled to each region’s privacy standard.',
    },
    highlights: ['Major expo hubs', 'Locale-aware', 'Compliant sourcing'],
    stats: [
      { value: '150+', label: 'Countries' },
      { value: '40K+', label: 'Events covered' },
      { value: '96%', label: 'Deliverability SLA' },
      { value: 'GDPR', label: 'Aligned' },
    ],
    gridTitle: 'Regions',
    features: [
      { icon: 'MapPin', title: 'Expo-hub coverage', body: 'From Las Vegas to Dubai to Singapore — the cities where the big shows happen.' },
      { icon: 'ShieldCheck', title: 'Region-aware compliance', body: 'Data handled to the privacy standard of each target market.' },
      { icon: 'Plane', title: 'Market expansion', body: 'Test and scale into new geographies without sourcing local vendors.' },
    ],
  },
]

export default hubs
