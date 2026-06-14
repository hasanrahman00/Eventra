// Resource library items. `type` is the filter key used by ResourceListing.
// type: 'guide' | 'white-paper' | 'infographic' | 'video' | 'tool'
const resources = [
  // Guides
  { type: 'guide', slug: 'pre-show-campaign-playbook', category: 'Guide', title: 'The Pre-Show Campaign Playbook', excerpt: 'A six-week timeline for turning an attendee list into booked meetings before the doors open.' },
  { type: 'guide', slug: 'exhibitor-outreach-guide', category: 'Guide', title: 'Selling to Exhibitors: A Field Guide', excerpt: 'How to reach the booths on the floor with offers they actually open and act on.' },
  { type: 'guide', slug: 'post-show-followup-system', category: 'Guide', title: 'The 48-Hour Post-Show Follow-Up System', excerpt: 'Work your event leads while they’re still warm — a repeatable follow-up cadence.' },
  { type: 'guide', slug: 'event-list-buyers-checklist', category: 'Guide', title: 'The Event List Buyer’s Checklist', excerpt: 'Twelve questions to ask any data vendor before you buy a single trade-show list.' },

  // White papers
  { type: 'white-paper', slug: 'state-of-event-marketing-2026', category: 'White Paper', title: 'The State of Event Marketing 2026', excerpt: 'Benchmarks from 1,200 B2B teams on event spend, pipeline contribution and ROI.' },
  { type: 'white-paper', slug: 'deliverability-for-event-lists', category: 'White Paper', title: 'Deliverability for Purchased Event Lists', excerpt: 'How verification, warm-up and sending hygiene keep event campaigns out of spam.' },
  { type: 'white-paper', slug: 'event-data-compliance-report', category: 'White Paper', title: 'Event Data & Compliance: A Practical Report', excerpt: 'GDPR, CAN-SPAM and opt-in obligations explained for marketers using event data.' },

  // Infographics
  { type: 'infographic', slug: 'anatomy-of-a-trade-show-lead', category: 'Infographic', title: 'Anatomy of a Trade-Show Lead', excerpt: 'What separates a badge scan from a sales-ready contact, visualized.' },
  { type: 'infographic', slug: 'event-roi-by-the-numbers', category: 'Infographic', title: 'Event ROI by the Numbers', excerpt: 'The metrics that actually predict return on event spend, at a glance.' },
  { type: 'infographic', slug: 'pre-vs-post-show-timing', category: 'Infographic', title: 'Pre-Show vs Post-Show Timing', excerpt: 'When to send, and to whom, across the full event lifecycle.' },

  // Videos
  { type: 'video', slug: 'how-eventra-verifies-data', category: 'Demo', title: 'How Eventra Verifies Event Data', excerpt: 'A two-minute look inside our multi-step verification pipeline.', duration: '2:14' },
  { type: 'video', slug: 'pre-show-webinar', category: 'Webinar', title: 'Webinar: Filling Your Booth Before the Show', excerpt: 'A 30-minute session on pre-show outreach that drives booth traffic.', duration: '31:40' },
  { type: 'video', slug: 'customer-story-helix', category: 'Customer Story', title: 'Customer Story: Helix Robotics', excerpt: 'How a field-marketing team doubled show ROI with verified attendee data.', duration: '4:52' },

  // Tools
  { type: 'tool', slug: 'email-verifier', category: 'Tool', title: 'Free Email Verifier', excerpt: 'Check up to 100 emails for deliverability before you hit send.', icon: 'MailCheck' },
  { type: 'tool', slug: 'event-roi-calculator', category: 'Tool', title: 'Event ROI Calculator', excerpt: 'Model the return on your next trade show before you commit the budget.', icon: 'PieChart' },
  { type: 'tool', slug: 'audience-size-estimator', category: 'Tool', title: 'Audience Size Estimator', excerpt: 'Estimate reachable contacts for any show, audience and region in seconds.', icon: 'Users' },
]

export default resources
