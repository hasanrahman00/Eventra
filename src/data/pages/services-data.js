export default [
  {
    slug: "data-verification",
    group: "data",
    title: "Event Data Verification",
    hero: {
      headline: "Every attendee record, checked before it reaches your CRM",
      subcopy: "We run trade show and conference contact lists through multi-layer verification so your team stops paying for bounces, disconnected numbers, and people who left the company three jobs ago."
    },
    highlights: [
      "Real-time SMTP and syntax checks on every business email",
      "Phone validation that separates live direct dials from dead extensions",
      "Role and seniority confirmed against current employer data"
    ],
    stats: [
      { value: "96%", label: "Deliverability SLA on verified email" },
      { value: "12-point", label: "Validation checklist per record" },
      { value: "<2%", label: "Average hard-bounce rate post-verify" },
      { value: "48 hrs", label: "Typical turnaround on a full list" }
    ],
    intro: {
      title: "Bad event data is expensive long before it bounces",
      body: [
        "A trade show badge scan or a downloaded exhibitor list looks clean in a spreadsheet. The trouble shows up later — when a campaign tanks your sender reputation, when reps burn an afternoon dialing numbers that ring nowhere, or when finance asks why the cost-per-meeting doubled. Eventra verification catches those records before they ever touch your sending infrastructure.",
        "We treat verification as a pipeline, not a single checkbox. Syntax, domain health, mailbox existence, catch-all detection, role-account flagging, and a final human spot-check all run in sequence. What lands in your hands is a list you can mail on day one without holding your breath."
      ]
    },
    benefits: [
      { icon: "ShieldCheck", title: "Protect your sender score", body: "Scrubbing dead and risky addresses keeps your bounce rate low and your domain out of spam folders, so the deliverable emails actually get delivered." },
      { icon: "Gauge", title: "Spend on contacts that exist", body: "You only act on records that passed every gate, which means rep hours and ad budget go toward reachable, in-seat decision-makers." },
      { icon: "CheckCircle2", title: "Audit-ready confidence", body: "Each record carries a verification status and timestamp, so you can prove data quality to stakeholders and stay tidy for compliance reviews." }
    ],
    process: [
      { title: "Intake and mapping", body: "You hand us the raw list in any format. We normalize fields, dedupe obvious copies, and map columns to a clean schema." },
      { title: "Multi-layer validation", body: "Each email runs through syntax, MX, SMTP, and catch-all checks while phones and titles are cross-referenced against live company data." },
      { title: "Human spot review", body: "A data specialist audits a statistical sample and reviews every edge case the engine flags as ambiguous." },
      { title: "Scored delivery", body: "You receive the file back with valid, risky, and invalid records labeled, plus a short summary of what we caught." }
    ],
    deliverables: [
      "Cleaned list with per-record verification status",
      "Hard-bounce and risky-address flags",
      "Validated direct-dial and mobile numbers where available",
      "Confirmed job title and seniority tier",
      "Duplicate-removal report",
      "Domain and catch-all health notes",
      "Summary dashboard of pass and fail rates"
    ],
    faqs: [
      { q: "Can you verify a list I scraped or bought elsewhere?", a: "Yes. Source-agnostic verification is one of the most common reasons teams come to us. Send the file and we will tell you exactly how much of it is usable." },
      { q: "Do you guarantee zero bounces?", a: "No honest provider can. We back a 96% deliverability SLA on records we mark valid, and we re-credit anything that bounces beyond that threshold." },
      { q: "How fresh does data stay after verification?", a: "Business contacts decay around 2 to 3 percent a month as people change roles. We recommend re-verifying any list older than 90 days before a major send." }
    ],
    testimonial: {
      quote: "We fed Eventra a 40,000-row badge-scan dump from three shows. They handed back a list we could actually mail, and our bounce rate dropped from 19 percent to under 2.",
      name: "Priya Nathan",
      role: "Director of Demand Generation",
      company: "Northbridge Software"
    }
  },
  {
    slug: "email-append",
    group: "data",
    title: "Email Append for Event Lists",
    hero: {
      headline: "Turn a name and a company into a working business inbox",
      subcopy: "You have the attendees — names, titles, sometimes a phone number — but no email. We append verified, deliverable addresses so every record on your event list becomes a campaign you can actually send."
    },
    highlights: [
      "Match rate up to 75% on B2B records with a name and company",
      "Every appended address verified before it ships",
      "Privacy-conscious matching with opt-out suppression built in"
    ],
    stats: [
      { value: "70%+", label: "Typical append match rate" },
      { value: "96%", label: "Deliverability on appended emails" },
      { value: "0", label: "Personal consumer addresses added" },
      { value: "24 hrs", label: "Express turnaround available" }
    ],
    intro: {
      title: "Half a contact record is no contact at all",
      body: [
        "Exhibitor directories, sponsor pages, and speaker lineups are full of names you would love to reach — and almost never include an email. Manually hunting each one down is the kind of work that quietly eats a sales week. Email append fixes that gap at scale, pairing your existing identifiers with current, verified business addresses.",
        "Our matching engine works on business identity, not guesswork. We tie a person and their employer to a real, active mailbox, then push every candidate through the same verification pipeline we use on standalone lists. The result is a complete, mailable record — not a pattern-guessed address hoping to land."
      ]
    },
    benefits: [
      { icon: "MailCheck", title: "Reach people you already identified", body: "Stop letting half-complete records rot. Append fills the email gap so prospects you spotted at an event finally enter your sequences." },
      { icon: "Target", title: "Higher match, lower waste", body: "Identity-based matching beats role-pattern guessing, so more records convert into deliverable contacts and fewer addresses bounce." },
      { icon: "ShieldCheck", title: "Compliance baked in", body: "We screen against suppression and opt-out lists and append only business addresses, keeping your outreach on the right side of consent rules." }
    ],
    process: [
      { title: "Submit your partial list", body: "Provide records with at least a full name and company, or a name and verified domain. More fields lift the match rate." },
      { title: "Identity matching", body: "We resolve each person to a current employer and locate their active business mailbox across our verified data graph." },
      { title: "Verify and suppress", body: "Every candidate email is validated live and checked against your suppression and global opt-out lists." },
      { title: "Return complete records", body: "You get your list back with appended emails, match-confidence scores, and a tally of what we could and could not match." }
    ],
    deliverables: [
      "Original records with verified email appended",
      "Match-confidence score per appended address",
      "Deliverability status on every new email",
      "Unmatched records flagged for transparency",
      "Suppression and opt-out screening applied",
      "Source-identity notes for matched contacts",
      "Append summary with match-rate breakdown"
    ],
    faqs: [
      { q: "What is the minimum data you need to append?", a: "A full name plus a company name or domain. We can work from less, but match rates climb sharply when title or location is included." },
      { q: "Are appended emails guessed from a pattern?", a: "No. We resolve real business identities to active mailboxes and verify each one. Pattern-only guessing is what causes the bounces we are trying to eliminate." },
      { q: "Do you append personal or consumer emails?", a: "Never. We append business addresses only, which keeps your B2B outreach compliant and your match quality high." }
    ],
    testimonial: {
      quote: "We had a gorgeous list of 6,000 conference exhibitors and zero emails. Eventra appended verified addresses to nearly three-quarters of them and our first campaign booked 31 demos.",
      name: "Marcus Feld",
      role: "Head of Growth",
      company: "Cadence Analytics"
    }
  },
  {
    slug: "data-enrichment",
    group: "data",
    title: "Event Data Enrichment",
    hero: {
      headline: "Add the context that turns a contact into a conversation",
      subcopy: "A name and an email get you in the door. Firmographics, technographics, seniority, and intent signals get you a reply. We layer that context onto your event contacts so every message lands with relevance."
    },
    highlights: [
      "40+ firmographic and technographic fields per company",
      "Seniority, department, and decision-role tagging",
      "Refreshed from live sources, not a stale annual dump"
    ],
    stats: [
      { value: "40+", label: "Enrichment fields available" },
      { value: "90%+", label: "Field-fill rate on matched companies" },
      { value: "3x", label: "Reported lift in reply rate when segmented" },
      { value: "Weekly", label: "Source-data refresh cadence" }
    ],
    intro: {
      title: "Generic outreach to a great list still falls flat",
      body: [
        "The attendees you captured at an event are only as valuable as what you know about them. Without industry, company size, tech stack, or role context, even a verified contact gets a one-size-fits-all message — and ignores it. Enrichment is how you move from blasting to speaking to the right person about the right thing.",
        "Eventra pulls firmographic and technographic detail onto each record, then layers seniority and buying-role tags so your team can segment instantly. Marketing builds tighter audiences, sales prioritizes the accounts that fit, and nobody wastes a touch on a contact who was never a fit to begin with."
      ]
    },
    benefits: [
      { icon: "Layers", title: "Segment with precision", body: "Industry, headcount, revenue band, and tech stack let you slice an event list into audiences that each get a message built for them." },
      { icon: "Target", title: "Prioritize the right accounts", body: "Seniority and decision-role tags surface the buyers worth chasing first, so reps spend their day on fit, not on filler." },
      { icon: "TrendingUp", title: "Lift reply and conversion rates", body: "Relevant context drives sharper messaging, and sharper messaging is what turns a verified contact into a booked meeting." }
    ],
    process: [
      { title: "Define the fields you need", body: "Tell us which firmographic, technographic, and role attributes matter for your motion. We tailor the enrichment set to your use case." },
      { title: "Company and person matching", body: "We resolve each contact to a company entity and a current role, the anchors everything else attaches to." },
      { title: "Attribute layering", body: "Matched records are enriched from live sources with the fields you selected, each tagged with a recency stamp." },
      { title: "Segment-ready handoff", body: "You receive an enriched file structured for instant import, with the new columns mapped to your CRM or platform." }
    ],
    deliverables: [
      "Industry, sub-industry, and SIC or NAICS codes",
      "Company headcount and revenue bands",
      "Technographic stack indicators",
      "Seniority level and department tags",
      "Decision-role and buying-influence flags",
      "Headquarters and operating-region data",
      "LinkedIn and company-site references where available",
      "Field-recency stamps for freshness tracking"
    ],
    faqs: [
      { q: "Can you enrich data I already have in my CRM?", a: "Absolutely. Export the records, send them over, and we return them enriched and ready to re-import. We can also work from a flat file or an API feed." },
      { q: "Which fields make the biggest difference?", a: "It depends on your motion, but seniority, headcount, and technographics tend to drive the sharpest segmentation for B2B event audiences." },
      { q: "How current is the enriched data?", a: "We pull from sources refreshed weekly and stamp each field with its recency so you always know how fresh a given attribute is." }
    ],
    testimonial: {
      quote: "Enrichment is what made our event list usable. Once Eventra tagged seniority and tech stack, our SDRs could finally prioritize, and connect rates jumped immediately.",
      name: "Dana Whitfield",
      role: "VP of Sales Operations",
      company: "Lumen Industrial"
    }
  },
  {
    slug: "data-appending",
    group: "data",
    title: "Data Appending Services",
    hero: {
      headline: "Backfill the missing fields across your entire contact database",
      subcopy: "Phone numbers, job titles, company size, mailing addresses, social handles — whatever your records are missing, we append it. One pass to make a patchy database whole again."
    },
    highlights: [
      "Append phone, title, address, social, and firmographic fields",
      "Works on event lists and your existing CRM alike",
      "Every appended value validated, not just filled"
    ],
    stats: [
      { value: "60-80%", label: "Fill rate across common append fields" },
      { value: "Multi-field", label: "Phone, title, address, social, more" },
      { value: "100%", label: "Of appended phones validated" },
      { value: "Bulk", label: "Millions of records per project" }
    ],
    intro: {
      title: "A database full of blanks is a database you cannot trust",
      body: [
        "Most contact databases are a quilt of half-filled rows. One record has a phone but no title, the next has a title but no company size, and the one after that is missing a mailing address you need for a direct-mail push. Those gaps quietly cap what every team can do with the data. Appending closes them in a single coordinated pass.",
        "Where email append focuses on one field, data appending is the broad version — phones, titles, postal addresses, social profiles, and firmographics, all matched and validated together. Send us the database with its holes and get it back filled, so segmentation, routing, and multichannel outreach all finally work the way you planned."
      ]
    },
    benefits: [
      { icon: "Boxes", title: "One pass, many fields", body: "Instead of chasing phones one week and titles the next, we append the full set of missing attributes together in a single coordinated project." },
      { icon: "Phone", title: "Reach contacts on more channels", body: "Appended direct dials, mobiles, and mailing addresses open up calling and direct mail alongside email, so no channel is blocked by a blank cell." },
      { icon: "CheckCircle2", title: "Filled and verified, not just filled", body: "Every appended value is validated before delivery, so you are not trading empty cells for inaccurate ones." }
    ],
    process: [
      { title: "Field gap analysis", body: "We scan your database, report which fields are missing and how often, and confirm which ones are worth appending for your goals." },
      { title: "Record resolution", body: "Each contact is matched to a verified person and company entity, the foundation every appended field depends on." },
      { title: "Multi-field append and validation", body: "We append phones, titles, addresses, social, and firmographics, validating each value as it is added." },
      { title: "Merge and return", body: "Appended values are merged back into your record structure and delivered ready to load, with a fill-rate report per field." }
    ],
    deliverables: [
      "Appended direct-dial and mobile phone numbers",
      "Current job titles and seniority levels",
      "Verified postal and mailing addresses",
      "Linked social and professional profiles",
      "Company firmographic attributes",
      "Per-field fill-rate and validation report",
      "Records returned in your original schema",
      "Unmatched-record log for transparency"
    ],
    faqs: [
      { q: "How is this different from email append?", a: "Email append fills one field. Data appending backfills the whole record — phones, titles, addresses, social, and firmographics — in a single coordinated pass." },
      { q: "Will appending overwrite my existing data?", a: "Only if you ask it to. By default we fill blanks and flag conflicts, leaving you in control of whether new values replace old ones." },
      { q: "What scale can you handle?", a: "From a few thousand event records to multi-million-row databases. Larger projects simply move to a batch workflow with checkpoint reviews." }
    ],
    testimonial: {
      quote: "Our database was a mess of half-empty rows from years of events. Eventra appended phones and titles across the whole thing and our routing rules finally worked.",
      name: "Elena Soto",
      role: "Marketing Operations Manager",
      company: "Brightpath Medical"
    }
  },
  {
    slug: "data-cleansing",
    group: "data",
    title: "Data Cleansing & Hygiene",
    hero: {
      headline: "Deduped, standardized, and corrected — a database that behaves",
      subcopy: "Years of event imports leave duplicates, mismatched formats, dead records, and typos baked into your CRM. We cleanse the whole set so your reports add up and your automations stop misfiring."
    },
    highlights: [
      "Fuzzy deduplication that catches near-matches, not just exact ones",
      "Field standardization for names, titles, phones, and addresses",
      "Dead and obsolete records flagged and removed"
    ],
    stats: [
      { value: "15-30%", label: "Typical duplicates found in event-heavy CRMs" },
      { value: "100%", label: "Of records standardized to one format" },
      { value: "Cleaner", label: "Reports the moment cleansing finishes" },
      { value: "Recurring", label: "Hygiene plans to keep it clean" }
    ],
    intro: {
      title: "Dirty data does not sit quietly — it spreads",
      body: [
        "Every trade show import adds a fresh layer of mess: the same person entered three ways, a title typed as VP here and Vice President there, phone numbers in five different formats, contacts who left their company two years ago. Left alone, that grime corrupts dashboards, triggers duplicate emails, and slowly erodes trust in the whole database.",
        "Cleansing is the reset. We deduplicate with fuzzy matching that catches the near-copies exact matching misses, standardize every field to a single format, correct obvious errors, and retire records that are no longer real. What you keep is a database your team can actually rely on — and we can put a recurring plan in place so it stays that way."
      ]
    },
    benefits: [
      { icon: "RefreshCw", title: "Kill the duplicates for good", body: "Fuzzy matching collapses the three-versions-of-one-person problem, so contacts get one clean record and your counts finally make sense." },
      { icon: "Filter", title: "Standardized, consistent fields", body: "Titles, names, phones, and addresses all conform to one format, which makes filtering, routing, and reporting behave predictably." },
      { icon: "Sparkles", title: "Trustworthy reporting", body: "With dead records gone and fields normalized, your dashboards reflect reality and your automations stop firing on bad data." }
    ],
    process: [
      { title: "Audit and profiling", body: "We profile your database to surface duplicate rates, formatting inconsistencies, and the share of records that look obsolete." },
      { title: "Dedupe and merge", body: "Fuzzy matching identifies near-duplicates, and we merge them on rules you approve so no field of value is lost." },
      { title: "Standardize and correct", body: "Every field is normalized to a single format, common typos are corrected, and invalid entries are flagged." },
      { title: "Purge and deliver", body: "Confirmed-dead records are retired, and you receive a cleansed database plus a before-and-after hygiene report." }
    ],
    deliverables: [
      "Deduplicated database with merged records",
      "Standardized name, title, phone, and address fields",
      "Corrected common typos and malformed entries",
      "Obsolete and undeliverable records flagged",
      "Merge log showing what was combined and why",
      "Before-and-after data-quality report",
      "Optional recurring-hygiene schedule",
      "Cleansed file in your original schema"
    ],
    faqs: [
      { q: "Will I lose data when duplicates are merged?", a: "No. We merge on rules you approve, preserving the most complete value in each field and keeping a full log of every merge for review." },
      { q: "How many duplicates do you usually find?", a: "In CRMs fed by years of event imports, 15 to 30 percent is common. The audit gives you the exact figure before any changes are made." },
      { q: "Can you keep my data clean over time?", a: "Yes. We offer recurring hygiene runs and can set up standardization rules at the point of import so new mess never builds up." }
    ],
    testimonial: {
      quote: "After five years of conference imports our CRM was unusable for reporting. Eventra cleansed it, killed 22 percent in duplicates, and now leadership actually trusts the numbers.",
      name: "Tobias Renner",
      role: "Head of Revenue Operations",
      company: "Vertex Logistics"
    }
  },
  {
    slug: "custom-list-building",
    group: "data",
    title: "Custom List Building",
    hero: {
      headline: "Your exact audience, built to spec from event sources",
      subcopy: "Tell us the shows, the titles, the industries, and the regions you want to reach. We build a verified, made-to-order contact list around that brief — no buying a bloated database and hoping your people are in it."
    },
    highlights: [
      "Lists built to your industry, role, region, and event criteria",
      "Sourced from real attendee, exhibitor, and speaker data",
      "Verified before delivery, never recycled from old files"
    ],
    stats: [
      { value: "100%", label: "Built to your specification" },
      { value: "96%", label: "Deliverability SLA on delivered records" },
      { value: "Targeted", label: "No padding, no off-spec records" },
      { value: "5-7 days", label: "Typical build time per project" }
    ],
    intro: {
      title: "Off-the-shelf lists are built for everyone, which means no one",
      body: [
        "When you buy a generic database, you pay for a million rows to use the few thousand that fit. The rest is padding — wrong industries, wrong seniority, contacts who have nothing to do with your market. Custom list building flips that. You define the audience and we assemble it, so every record you receive is one you actually wanted.",
        "We start from real event data — attendees, exhibitors, speakers, and sponsors from the shows that matter in your space — then filter to your exact criteria and verify what remains. The deliverable is a lean, on-spec list of people who fit your ideal profile and who have already shown up where your market gathers."
      ]
    },
    benefits: [
      { icon: "Target", title: "Precision over volume", body: "You get a list shaped to your criteria, not a giant file you have to filter down. Every record fits the brief you set." },
      { icon: "Search", title: "Sourced from where buyers gather", body: "Drawing from event attendee and exhibitor data means your list is made of people already active and present in your market." },
      { icon: "ShieldCheck", title: "Verified, never recycled", body: "Each list is built and verified fresh for your project, so you are not paying for someone else’s stale, resold file." }
    ],
    process: [
      { title: "Scope the brief", body: "We work through your ideal-customer profile — target events, industries, titles, seniority, company size, and geography." },
      { title: "Source and assemble", body: "We pull matching contacts from relevant event data and assemble a candidate list against your exact filters." },
      { title: "Verify and refine", body: "Every candidate runs through verification, and we refine the set with you so it lands precisely on spec." },
      { title: "Deliver the list", body: "You receive a clean, verified, made-to-order list with the fields you need, ready for immediate use." }
    ],
    deliverables: [
      "Made-to-order list matching your full brief",
      "Verified business emails on every record",
      "Direct-dial and mobile numbers where available",
      "Job title, seniority, and department tags",
      "Company firmographics for each contact",
      "Source-event attribution per record",
      "Verification status and timestamp",
      "Delivery in CSV, XLSX, or direct CRM import"
    ],
    faqs: [
      { q: "How specific can the targeting get?", a: "Very. We routinely build to combinations of event, job title, seniority, industry, company size, and region. If you can describe the buyer, we can scope the list." },
      { q: "Where does the data come from?", a: "Real event sources — attendee, exhibitor, speaker, and sponsor data from the shows in your market — filtered and verified for your brief." },
      { q: "What if I need the list refreshed later?", a: "We keep your brief on file, so a refreshed or expanded build later is fast. Many clients re-run a list ahead of each event season." }
    ],
    testimonial: {
      quote: "We needed heads of procurement at mid-market manufacturers who attend three specific trade shows. Eventra built exactly that list, verified, in under a week. No padding, no waste.",
      name: "Hannah Okafor",
      role: "Founder",
      company: "Tilden Outbound"
    }
  },
  {
    slug: "data-licensing",
    group: "data",
    title: "Event Data Licensing",
    hero: {
      headline: "License verified event audiences for ongoing, at-scale use",
      subcopy: "For teams that need event contact data continuously — not as a one-off file. Flexible licensing with refresh cycles, API access, and usage terms built for platforms, agencies, and high-volume programs."
    },
    highlights: [
      "Ongoing access with scheduled data refreshes",
      "API or bulk delivery, whichever your stack prefers",
      "Clear, written usage rights and redistribution terms"
    ],
    stats: [
      { value: "Ongoing", label: "Access with refresh cycles" },
      { value: "API", label: "Or bulk feed delivery options" },
      { value: "96%", label: "Deliverability SLA maintained" },
      { value: "Clear", label: "Written usage and license terms" }
    ],
    intro: {
      title: "When a single export will never be enough",
      body: [
        "A one-time list is perfect for a single campaign. But platforms, data agencies, and large outbound programs need event audience data as a living feed — refreshed, queryable, and licensed for repeated use. Buying fresh files every quarter is slow, expensive, and leaves you with stale data the moment the project starts. Licensing solves the continuity problem.",
        "Eventra licenses verified event contact data under terms shaped to how you actually use it — embedded in a product, powering an agency service, or feeding an always-on outbound engine. You get scheduled refreshes so the data stays current, delivery by API or bulk feed to fit your stack, and unambiguous written rights so legal and procurement can sign off with confidence."
      ]
    },
    benefits: [
      { icon: "Database", title: "Always-current data feed", body: "Scheduled refreshes mean the audiences you license keep pace with real-world changes instead of decaying between one-off buys." },
      { icon: "Network", title: "Delivered to fit your stack", body: "Pull records via API for live integration or take scheduled bulk feeds for batch workflows — whichever your platform needs." },
      { icon: "FileCheck2", title: "Rights you can stand behind", body: "Written, transparent license and usage terms give your legal and procurement teams the clarity they need to approve and renew." }
    ],
    process: [
      { title: "Define scope and usage", body: "We map which event audiences you need, at what volume, and how the data will be used so the license fits your model exactly." },
      { title: "Set delivery and refresh", body: "Together we choose API or bulk delivery and a refresh cadence that keeps the licensed data current for your program." },
      { title: "Agree terms", body: "We put usage rights, redistribution rules, volume, and SLA in writing so everyone signs off with full clarity." },
      { title: "Provision and support", body: "Access is provisioned, the first feed is validated against your environment, and a named contact supports you through every refresh." }
    ],
    deliverables: [
      "Licensed access to verified event audience data",
      "Scheduled refresh cycles to maintain freshness",
      "API endpoint or recurring bulk feed",
      "Documented field schema and data dictionary",
      "Written usage rights and redistribution terms",
      "Maintained 96% deliverability SLA",
      "Named account contact for ongoing support",
      "Usage reporting and renewal review"
    ],
    faqs: [
      { q: "Who is licensing meant for?", a: "Platforms embedding contact data, agencies serving many clients, and teams running high-volume continuous outreach — anyone who needs ongoing access rather than a single file." },
      { q: "Can I redistribute the licensed data?", a: "It depends on the license tier. Some allow embedding or client delivery; others are for internal use. We define redistribution rights clearly in writing before you sign." },
      { q: "How often is licensed data refreshed?", a: "Refresh cadence is part of your terms and can range from monthly to continuous via API. We set it to match how fast your program consumes the data." }
    ],
    testimonial: {
      quote: "We embed Eventra event audiences directly into our platform. The API feed and scheduled refreshes mean our customers always see current data, and the license terms were refreshingly clear.",
      name: "Raj Malhotra",
      role: "Chief Product Officer",
      company: "Outflow Data Platform"
    }
  }
]
