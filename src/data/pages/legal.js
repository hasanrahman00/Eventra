// Legal / policy pages rendered by LegalTemplate. All copy is generic and
// illustrative — replace with counsel-reviewed language before going live.
const legal = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: 'June 2026',
    seo: { title: 'Privacy Policy', description: 'How Eventra collects, uses and protects personal information.' },
    intro:
      'This Privacy Policy explains how Eventra collects, uses, shares and safeguards information in connection with our websites and data services. By using our services you agree to the practices described here.',
    sections: [
      { heading: 'Information we collect', body: ['We collect information you provide directly — such as your name, work email, company and message when you request a sample or contact us — as well as limited technical data like IP address and device type collected automatically through cookies and similar technologies.'] },
      { heading: 'How we use information', body: ['We use information to respond to requests, deliver and improve our services, send service and marketing communications you may opt out of, and meet legal obligations.'], bullets: ['Fulfilling sample and data requests', 'Improving data quality and site performance', 'Detecting and preventing fraud and abuse'] },
      { heading: 'Sharing and disclosure', body: ['We do not sell personal information collected through this website. We may share data with vetted service providers who process it on our behalf under contract, or where required by law.'] },
      { heading: 'Data retention', body: ['We retain personal information only as long as necessary for the purposes described here, after which it is deleted or anonymized.'] },
      { heading: 'Your rights', body: ['Depending on your location, you may have the right to access, correct, delete or restrict use of your personal information, and to object to processing. To exercise these rights, contact us at the address below.'] },
      { heading: 'Contact us', body: ['Questions about this policy can be sent to privacy@eventra.io or to our headquarters address listed in the site footer.'] },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    updated: 'June 2026',
    seo: { title: 'Terms of Service', description: 'The terms governing your use of Eventra’s website and services.' },
    intro:
      'These Terms of Service govern your access to and use of Eventra’s website, data and services. Please read them carefully.',
    sections: [
      { heading: 'Use of services', body: ['You agree to use our services only for lawful purposes and in compliance with all applicable laws, including anti-spam and data-protection regulations in the jurisdictions you operate in.'] },
      { heading: 'Acceptable use of data', body: ['Data licensed from Eventra is provided for your internal business use under the terms of your order. You agree not to resell, sublicense or redistribute data except as expressly permitted.'], bullets: ['Honor opt-out and unsubscribe requests promptly', 'Maintain sender reputation and follow email best practices', 'Do not use data for unlawful or deceptive purposes'] },
      { heading: 'Intellectual property', body: ['All content on this website, excluding your own materials, is owned by or licensed to Eventra and protected by applicable laws.'] },
      { heading: 'Disclaimers', body: ['Services are provided on an “as is” basis. While we verify data rigorously, we do not warrant that every record will be error-free at the moment of use.'] },
      { heading: 'Limitation of liability', body: ['To the maximum extent permitted by law, Eventra is not liable for indirect, incidental or consequential damages arising from use of the services.'] },
      { heading: 'Changes to these terms', body: ['We may update these terms from time to time. Continued use of the services after changes take effect constitutes acceptance.'] },
    ],
  },
  {
    slug: 'refund-policy',
    title: 'Refund Policy',
    updated: 'June 2026',
    seo: { title: 'Refund Policy', description: 'Eventra’s policy on refunds and data-quality guarantees.' },
    intro:
      'We stand behind the quality of our data. This policy explains when refunds or replacements apply.',
    sections: [
      { heading: 'Data accuracy guarantee', body: ['We guarantee a minimum verified accuracy rate on every delivered list. If verified deliverability falls below the agreed threshold, we will replace the affected records at no charge.'] },
      { heading: 'Requesting a replacement', body: ['To claim a replacement, notify us within 30 days of delivery with the campaign bounce report so we can validate and remediate the affected records.'] },
      { heading: 'Refund eligibility', body: ['Where replacement is not possible, a pro-rated refund may be issued for the affected portion of the order at our discretion.'], bullets: ['Claims must be submitted within 30 days', 'Bounce evidence is required to validate a claim', 'Custom-built datasets follow the terms of their statement of work'] },
    ],
  },
  {
    slug: 'data-policy',
    title: 'Data Sourcing & Compliance Policy',
    updated: 'June 2026',
    seo: { title: 'Data Policy', description: 'How Eventra sources, verifies and governs event contact data.' },
    intro:
      'This policy describes how Eventra sources and governs the event contact data we provide, and the compliance standards we hold ourselves to.',
    sections: [
      { heading: 'Sourcing', body: ['Event data is aggregated from public exhibitor directories, registration and opt-in partners, and our own research. Each source is documented and auditable.'] },
      { heading: 'Verification', body: ['Records pass a multi-step pipeline — syntax checks, domain and mailbox validation, and human review — before delivery.'] },
      { heading: 'Compliance', body: ['Our practices are designed to align with GDPR, CAN-SPAM, CASL and similar frameworks. We maintain opt-out mechanisms and honor suppression requests across our database.'], bullets: ['Documented opt-in trails where applicable', 'Global suppression and do-not-contact handling', 'Regional handling aligned to local privacy law'] },
    ],
  },
  {
    slug: 'do-not-sell',
    title: 'Opt-Out & Do Not Sell My Information',
    updated: 'June 2026',
    seo: { title: 'Opt-Out / Do Not Sell', description: 'Submit an opt-out or do-not-sell request to Eventra.' },
    intro:
      'You can ask us to remove your information from our database or to not “sell” or “share” it as those terms are defined under applicable privacy laws.',
    sections: [
      { heading: 'How to submit a request', body: ['Email optout@eventra.io with the email address or contact details you want suppressed. We process verified requests promptly and confirm completion.'] },
      { heading: 'What happens next', body: ['Once processed, your details are added to our global suppression list and excluded from future datasets and communications.'] },
      { heading: 'Authorized agents', body: ['You may designate an authorized agent to submit a request on your behalf; we may ask for proof of authorization.'] },
    ],
  },
  {
    slug: 'reseller-program',
    title: 'Reseller Program',
    updated: 'June 2026',
    seo: { title: 'Reseller Program', description: 'Partner with Eventra to resell verified event data to your clients.' },
    intro:
      'Agencies and data partners can resell Eventra’s verified event data under a dedicated program with wholesale pricing and white-label delivery.',
    sections: [
      { heading: 'Who it’s for', body: ['Marketing agencies, lead-gen firms and data brokers who serve clients running event-driven campaigns.'] },
      { heading: 'What you get', body: ['Wholesale pricing, white-label delivery, priority turnaround and a dedicated partner manager.'], bullets: ['Volume-based wholesale rates', 'White-label files and reporting', 'Priority sample and delivery turnaround'] },
      { heading: 'How to join', body: ['Apply through our contact form and a partner manager will reach out to scope terms and onboarding.'] },
    ],
  },
]

export default legal
