// Single source of truth for brand identity. Swap these values to rebrand.
export const brand = {
  name: 'Eventra',
  legalName: 'Eventra Data, Inc.',
  tagline: 'Verified attendee & exhibitor data for event-driven pipeline',
  domain: 'eventra.io',
  email: 'hello@eventra.io',
  salesEmail: 'sales@eventra.io',
  phone: '+1 (888) 555-0188',
  foundedYear: 2015,
  description:
    'Eventra turns the world’s trade shows, expos and conferences into pipeline — verified attendee, exhibitor and visitor contact data so you reach the right buyers before, during and after every event.',
  offices: [
    {
      label: 'Headquarters',
      city: 'Chicago, IL',
      lines: ['200 E Randolph St, Suite 5100', 'Chicago, IL 60601, USA'],
    },
    {
      label: 'EMEA',
      city: 'London, UK',
      lines: ['1 Finsbury Avenue', 'London EC2M 2PF, United Kingdom'],
    },
    {
      label: 'APAC',
      city: 'Singapore',
      lines: ['80 Robinson Road, #10-01', 'Singapore 068898'],
    },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'Linkedin' },
    { label: 'X', href: 'https://x.com', icon: 'Twitter' },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: 'Youtube' },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: 'Facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: 'Instagram' },
  ],
  // Headline metrics reused across hero / about / stats.
  metrics: [
    { value: '120M+', label: 'Verified event contacts' },
    { value: '40K+', label: 'Trade shows & expos covered' },
    { value: '96%', label: 'Email deliverability SLA' },
    { value: '150+', label: 'Countries' },
  ],
}

export default brand
