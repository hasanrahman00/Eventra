// Eventra Solutions service pages (rendered by ServicePageTemplate).
export default [
  {
    "slug": "data-verification",
    "path": "/solutions/data-verification",
    "group": "solutions",
    "title": "Data Verification",
    "blurb": "Validate every email, phone number and company detail in your event contact lists against live signals before you send. Keep bounce rates under SLA and your sender reputation clean.",
    "hero": {
      "headline": "Verify your event contact data before it costs you a send",
      "subcopy": "Eventra checks emails, phone numbers and company details against live signals at the moment you need them. You ship campaigns to lists that land in the inbox, connect on the first dial, and keep your domain reputation intact."
    },
    "highlights": [
      "Real-time SMTP and DNS checks catch dead and risky mailboxes before they bounce",
      "Phone validation confirms line type, carrier and reachability so reps stop dialing dead numbers",
      "Company fields are reconciled against current firmographic signals, not a stale snapshot"
    ],
    "stats": [
      {
        "value": "96%",
        "label": "average inbox-deliverable rate after verification"
      },
      {
        "value": "120M+",
        "label": "contact records checked across our event datasets"
      },
      {
        "value": "<24h",
        "label": "turnaround on full-list verification"
      },
      {
        "value": "3.2x",
        "label": "fewer hard bounces versus unverified lists"
      }
    ],
    "intro": {
      "eyebrow": "Data Verification",
      "title": "A clean list is the cheapest insurance your outreach can buy",
      "body": [
        "Event contact data decays fast. Attendees change jobs, mailboxes get retired, and company records drift within weeks of a show closing. Send to that list as-is and you pay twice: once in wasted campaign spend, and again in the deliverability damage that follows a spike in bounces and spam traps.",
        "Eventra verifies each record against live signals before it reaches your sequencer or dialer. We confirm the mailbox accepts mail, the number is active and the company details still hold, then hand back a list scored and ready to send. Your team works from contacts that are real today, not the day the badge was scanned."
      ]
    },
    "benefits": [
      {
        "icon": "MailCheck",
        "title": "Stay under your bounce SLA",
        "body": "Every email runs through syntax, domain, MX and mailbox-level checks so dead and catch-all addresses get flagged before they reach your ESP. Bounce rates stay inside the threshold your sending platform enforces."
      },
      {
        "icon": "ShieldCheck",
        "title": "Protect sender reputation",
        "body": "Spam traps, role accounts and disposable domains are isolated and removed. Your domain keeps the clean sending history that gets future campaigns into the primary inbox."
      },
      {
        "icon": "Phone",
        "title": "Stop dialing dead numbers",
        "body": "Phone validation confirms each number is live, identifies mobile versus landline, and returns carrier and region. Reps spend their time on calls that actually connect."
      }
    ],
    "process": [
      {
        "title": "Ingest your list",
        "body": "Upload a CSV or push records through the API. Eventra maps your columns automatically and accepts lists from any source, including data you sourced outside of us."
      },
      {
        "title": "Check against live signals",
        "body": "Each email, phone and company field is validated in real time against SMTP, DNS, carrier and firmographic signals rather than a cached lookup."
      },
      {
        "title": "Score and segment",
        "body": "Records come back tagged deliverable, risky or invalid, with a confidence score on every field so you decide exactly what enters your campaign."
      },
      {
        "title": "Export ready to send",
        "body": "Download the verified file or sync it straight to your CRM or sequencer. Clean records flow in, flagged ones stay out of your send."
      }
    ],
    "deliverables": [
      "Per-record deliverability status for every email: valid, catch-all, risky or invalid",
      "Mailbox-level SMTP verification with full domain and MX checks",
      "Phone validation with line type, carrier and active-status results",
      "Company-detail reconciliation against current firmographic signals",
      "Spam-trap, role-account and disposable-domain flagging",
      "Field-level confidence scores so you set your own acceptance threshold",
      "Verified file delivered as CSV or XLSX, plus direct CRM and sequencer sync",
      "Verification summary report covering list health, removal counts and projected bounce rate"
    ],
    "faqs": [
      {
        "q": "How is this different from a one-time list scrub?",
        "a": "A scrub checks records against a static database. Eventra validates against live signals at the moment you run it, so a mailbox that went dark last week is caught now rather than passing a months-old snapshot."
      },
      {
        "q": "Will verification actually keep me under my ESP's bounce SLA?",
        "a": "Yes. Invalid and risky addresses are removed before export, which is what drives bounces down. On verified lists our customers typically run hard bounces 3x lower than on unverified data, comfortably inside standard ESP thresholds."
      },
      {
        "q": "Can I verify data I sourced from somewhere other than Eventra?",
        "a": "Absolutely. The verification engine works on any list you upload, regardless of where the records came from. Many teams run their existing CRM exports and third-party lists through it."
      },
      {
        "q": "How fast is turnaround on a large list?",
        "a": "Most full-list jobs complete in under 24 hours, and real-time API checks return per-record results in seconds for live form and enrichment workflows."
      }
    ],
    "testimonial": {
      "quote": "We were burning domain reputation on event lists that looked fine but weren't. Running everything through Eventra first dropped our bounce rate below two percent and our open rates climbed the next week. It paid for itself on the first campaign.",
      "name": "Priya Nair",
      "role": "Director of Demand Generation",
      "company": "Northwind Events"
    }
  },
  {
    "slug": "data-enrichment",
    "path": "/solutions/data-enrichment",
    "group": "solutions",
    "title": "Data Enrichment",
    "blurb": "Turn thin event records into complete, segment-ready profiles. Eventra appends firmographics, job role, seniority, verified contact details, LinkedIn and buying intent so your reps can prioritize and personalize from day one.",
    "hero": {
      "headline": "Make every event record worth working",
      "subcopy": "A badge scan or booth signup rarely gives you more than a name, an email and a company. Eventra fills the gaps: company size, industry, revenue band, role, seniority, verified email and direct dial, LinkedIn profile, and intent signals. Hand your team records they can actually segment and act on."
    },
    "highlights": [
      "Append 40+ firmographic, role and contact fields to each record",
      "Verified emails and direct dials, not guesses",
      "Intent and LinkedIn data so reps personalize the first touch"
    ],
    "stats": [
      {
        "value": "40+",
        "label": "Fields appended per record"
      },
      {
        "value": "96%",
        "label": "Match rate on event lists"
      },
      {
        "value": "<24h",
        "label": "Turnaround on a full file"
      },
      {
        "value": "3.2x",
        "label": "More replies on enriched outreach"
      }
    ],
    "intro": {
      "eyebrow": "Data Enrichment",
      "title": "Your event list is the start, not the finish",
      "body": [
        "The list you walk away from a trade show with is rarely ready for outreach. You have a name and a company, maybe an email that bounces, and no way to tell a buyer from a browser. Reps end up researching one record at a time, and most of the list goes cold before anyone gets to it.",
        "Eventra closes that gap. We match each record against our verified contact graph and append the context your team needs to segment, route and personalize. Firmographics tell you which accounts fit. Role and seniority tell you who to talk to. Verified email, direct dial and LinkedIn tell you how to reach them. Intent tells you who to call first."
      ]
    },
    "benefits": [
      {
        "icon": "Building2",
        "title": "Firmographics that drive segmentation",
        "body": "Append industry, employee count, revenue band, headquarters location and tech footprint so you can sort a flat list into named segments and territories in minutes instead of weeks."
      },
      {
        "icon": "UserCheck",
        "title": "Role and seniority on every contact",
        "body": "We resolve job title, function and seniority for each person, so reps know whether they have a decision-maker, an influencer or an end user before they send a single message."
      },
      {
        "icon": "MailCheck",
        "title": "Verified contact details",
        "body": "Every appended email is checked against our verification engine and paired with a direct dial and LinkedIn URL, so your sequences land in inboxes and your dialers reach real numbers."
      }
    ],
    "process": [
      {
        "title": "Send us your event file",
        "body": "Upload the raw export from your scanner, booth form or registration platform. A name and company is enough to start. Messy columns and partial rows are fine, we normalize them on intake."
      },
      {
        "title": "Match and append",
        "body": "We resolve each record against our verified contact graph and append firmographics, role, seniority, verified email, direct dial, LinkedIn and available intent signals."
      },
      {
        "title": "Verify and score",
        "body": "Every email runs through our verification engine, duplicates are merged, and each record is flagged by fit and intent so your team knows where to start."
      },
      {
        "title": "Get a segment-ready file",
        "body": "Receive a clean, deduplicated file or a direct push to your CRM, with the new fields mapped and ready for routing, sequencing and reporting."
      }
    ],
    "deliverables": [
      "Verified business email and deliverability status on every match",
      "Direct dial and mobile numbers where available",
      "Firmographics: industry, employee count, revenue band, HQ location",
      "Job title, function and seniority for each contact",
      "LinkedIn profile URL for the person and company",
      "Buying intent signals scored by topic and recency",
      "Deduplicated, normalized records with consistent formatting",
      "CRM-ready export or direct push to your stack"
    ],
    "faqs": [
      {
        "q": "What does an event record need before you can enrich it?",
        "a": "A full name and company name is enough to start. An email or LinkedIn URL improves match rates further, but we can resolve most records from name and company alone."
      },
      {
        "q": "How accurate is the appended data?",
        "a": "Every email is run through our verification engine before delivery, and firmographic and role fields are sourced from our continuously refreshed contact graph. We report match and verification rates on every file so you know exactly what you received."
      },
      {
        "q": "Can you push enriched records straight into our CRM?",
        "a": "Yes. We deliver a clean file with mapped fields, or push directly into Salesforce, HubSpot and most major CRMs with the new fields aligned to your schema."
      },
      {
        "q": "How fast is turnaround?",
        "a": "Most files are returned in under 24 hours. Larger lists and recurring post-event jobs can be scheduled so enriched records are waiting the morning after the show closes."
      }
    ],
    "testimonial": {
      "quote": "We used to spend the week after every conference manually researching badge scans. Eventra turns that list around overnight with verified emails, seniority and intent already on it. Our SDRs now start the day segmenting, not Googling.",
      "name": "Marisa Calder",
      "role": "Director of Demand Generation",
      "company": "Northbeam Robotics"
    }
  },
  {
    "slug": "data-append",
    "path": "/solutions/data-append",
    "group": "solutions",
    "title": "Email & Data Append",
    "blurb": "Turn name-only and partial event records into reachable contacts. Eventra matches stranded leads to verified business emails, direct dials and postal addresses so every badge scan, exhibitor list and registration file converts into outreach you can actually run.",
    "hero": {
      "headline": "Make every stranded event lead reachable again",
      "subcopy": "You captured the name and the company at the booth, but not a way to reach them. Eventra appends verified business emails, direct dials and postal data to your partial event records, so leads sitting idle in a spreadsheet become contacts your team can work this week."
    },
    "highlights": [
      "Match name-only and partial records to verified emails, direct dials and mailing addresses",
      "Every appended email is checked against our verification pipeline before it reaches you",
      "Upload a messy list, get back a clean, deduplicated file mapped to your original rows"
    ],
    "stats": [
      {
        "value": "96%",
        "label": "match accuracy on appended business emails"
      },
      {
        "value": "120M+",
        "label": "event-sourced contacts in the matching graph"
      },
      {
        "value": "<24h",
        "label": "typical turnaround on a standard append batch"
      },
      {
        "value": "3.2x",
        "label": "more reachable leads after append, on average"
      }
    ],
    "intro": {
      "eyebrow": "Email & Data Append",
      "title": "The contacts you already paid to meet, finally reachable",
      "body": [
        "Trade shows, expos and conferences generate leads faster than they generate complete contact records. A badge scan gives you a name and a company. An exhibitor directory lists who attended but not how to reach them. A registration export drops the work email and keeps a personal one. The intent was real; the contact data just never arrived.",
        "Eventra closes that gap. We take your partial records and match them against a contact graph built from years of verified trade show, expo and conference data, then return the missing pieces: business email, direct dial, title and postal address. The result is a list your sales and marketing teams can act on instead of one they have to apologize for."
      ]
    },
    "benefits": [
      {
        "icon": "MailCheck",
        "title": "Verified emails, not guesses",
        "body": "Appended emails pass through the same multi-step verification we use across Eventra, syntax, domain, mailbox and pattern checks, so you send to addresses that resolve instead of pattern-guessed combinations that bounce."
      },
      {
        "icon": "Phone",
        "title": "Direct dials and postal data",
        "body": "Beyond email, we append verified direct dials and mailing addresses, giving your team the channels it needs for multi-touch outreach and direct mail to event leads that only ever existed as a name on a badge."
      },
      {
        "icon": "Target",
        "title": "Mapped back to your rows",
        "body": "Every appended field is returned against your original record, with a clear match-confidence flag, so you know exactly which leads were recovered, which were partially filled, and which need a second pass."
      }
    ],
    "process": [
      {
        "title": "Send us your list",
        "body": "Upload the partial records you have, badge scans, exhibitor exports, registration files or CRM rows. Names, companies, partial emails or LinkedIn handles are all we need to start matching."
      },
      {
        "title": "We match and append",
        "body": "Your records run against our event-sourced contact graph. We identify the right person, then fill in business email, direct dial, title and postal address from verified source data."
      },
      {
        "title": "We verify every email",
        "body": "Each appended email is validated through our verification pipeline before delivery. Addresses that fail are flagged rather than shipped, so your bounce rate stays low and your sender reputation stays intact."
      },
      {
        "title": "You get a clean file back",
        "body": "Receive a deduplicated, match-flagged file aligned to your original rows, ready to import into your CRM or sequencer and start working the same day."
      }
    ],
    "deliverables": [
      "Verified business email appended to each matched record",
      "Direct dial phone numbers where available",
      "Postal and mailing address data for direct mail campaigns",
      "Job title and company fields filled in from verified sources",
      "Per-row match-confidence flags so you can triage results",
      "Deduplicated output mapped one-to-one to your original list",
      "Verification status on every appended email address",
      "Standard batch turnaround in under 24 hours"
    ],
    "faqs": [
      {
        "q": "What is the minimum data you need to append a record?",
        "a": "At minimum, a full name plus a company or domain. The more you provide, a partial email, a job title, a LinkedIn handle, the higher the match rate and confidence on what we return."
      },
      {
        "q": "How do you keep appended emails from bouncing?",
        "a": "Every appended email runs through our verification pipeline before it reaches you. We check syntax, domain, mailbox acceptance and known patterns, then flag anything that fails instead of shipping it. You only pay attention to addresses we are confident will resolve."
      },
      {
        "q": "What happens to records you cannot match?",
        "a": "Unmatched and low-confidence records are flagged clearly in the returned file rather than filled with guesses. You see exactly what was recovered and what was not, so you never mistake an unverified guess for a confirmed contact."
      },
      {
        "q": "How fast is turnaround and how do I send my list?",
        "a": "Upload a CSV or Excel file and a standard batch is typically returned in under 24 hours. Larger or more complex lists may take longer, and we will give you a clear estimate before we begin."
      }
    ],
    "testimonial": {
      "quote": "We came back from a regional expo with 1,400 badge scans and almost no usable email addresses. Eventra appended verified emails and direct dials to more than nine in ten of them inside a day. That single batch turned a stack of dead names into our best-performing campaign of the quarter.",
      "name": "Marcus Feltz",
      "role": "Director of Demand Generation",
      "company": "Northvale Industrial Systems"
    }
  },
  {
    "slug": "pre-show-marketing",
    "path": "/solutions/pre-show-marketing",
    "group": "solutions",
    "title": "Pre-Show Email Marketing",
    "blurb": "Book meetings before the doors open. Reach a verified attendee list with targeted email and outreach that drives booth visits, demos, and calendar holds while the show floor is still empty.",
    "hero": {
      "headline": "Fill your calendar before the show floor opens",
      "subcopy": "Most booth conversations start as cold introductions on day one. We help you skip that. Eventra matches your offer to a verified list of confirmed attendees, then runs targeted pre-show email and outreach with clear booth and meeting CTAs, so your reps walk in with a schedule instead of a hope."
    },
    "highlights": [
      "Verified attendee lists matched to your ideal buyer, not a rented blast list",
      "Sequenced email and outreach built around booth visits and pre-booked meetings",
      "Every send routed through real-time verification so bounces stay under 3%"
    ],
    "stats": [
      {
        "value": "96%",
        "label": "Deliverable inbox rate on verified pre-show sends"
      },
      {
        "value": "3.2x",
        "label": "More booked meetings vs. day-one cold outreach"
      },
      {
        "value": "<24h",
        "label": "From attendee list to first campaign live"
      },
      {
        "value": "120M+",
        "label": "Trade show contacts in the Eventra data set"
      }
    ],
    "intro": {
      "eyebrow": "Pre-Show Email Marketing",
      "title": "Turn a registration list into a booked agenda",
      "body": [
        "An event roster is only useful if you can reach the right people before they plan their floor route. By the time attendees arrive, their best slots are already spoken for. Pre-show outreach is how you claim those slots first, with a message that matches the reason each person registered.",
        "Eventra starts from verified attendee data sourced directly from trade shows, expos, and conferences, then filters it to the titles, companies, and segments you actually sell to. We write and run the campaigns, track replies, and hand your team a clean list of confirmed meetings and warm booth invites before the event begins."
      ]
    },
    "benefits": [
      {
        "icon": "CalendarCheck",
        "title": "Meetings booked, not just impressions",
        "body": "Every campaign is built to produce a calendar action: a confirmed slot, a booth time, or a demo hold. You measure outcomes in meetings on the agenda, not opens and clicks."
      },
      {
        "icon": "ShieldCheck",
        "title": "Verified contacts, low bounce",
        "body": "Each address is validated in real time before we send. Clean lists protect your sending reputation and keep your invitations landing in the primary inbox, not spam."
      },
      {
        "icon": "Target",
        "title": "Matched to your buyer",
        "body": "We filter the attendee set by title, company size, industry, and intent signals so your outreach reaches decision makers worth a meeting, not the whole badge list."
      }
    ],
    "process": [
      {
        "title": "Match the list",
        "body": "We take the confirmed attendee roster, verify every contact, and filter it down to the segments that fit your ideal customer profile and event goals."
      },
      {
        "title": "Build the campaign",
        "body": "We draft the sequence: a clear introduction, a reason to meet, and a strong booth or calendar CTA, written for the specific show and audience."
      },
      {
        "title": "Send and verify",
        "body": "Outreach goes out on a paced schedule with live address verification, reply routing, and automatic follow-ups for non-responders."
      },
      {
        "title": "Hand off booked meetings",
        "body": "Your team receives confirmed meetings, booth slots, and warm replies in a single tracker, ready to work before the doors open."
      }
    ],
    "deliverables": [
      "Verified, deduplicated attendee list filtered to your target segments",
      "Pre-show email sequence with booth and meeting CTAs written for the event",
      "Real-time address verification on every send to keep bounces under 3%",
      "Multi-step follow-up cadence for attendees who do not reply on the first touch",
      "Reply routing and a live tracker of confirmed meetings and booth slots",
      "Calendar links and meeting-hold workflow for your sales team",
      "Per-campaign reporting on deliverability, replies, and booked meetings",
      "Post-show list of engaged contacts for follow-up and retargeting"
    ],
    "faqs": [
      {
        "q": "Where does the attendee data come from?",
        "a": "From verified contacts Eventra sources directly across trade shows, expos, and conferences: attendees, exhibitors, and visitors. We match that data to the specific event you are exhibiting at and confirm each address before any campaign goes out."
      },
      {
        "q": "How far before the event should we start?",
        "a": "Two to three weeks is the sweet spot. That gives attendees time to plan their schedule around your booth while keeping the event top of mind. We can stand up a first campaign in under 24 hours once the list is ready, so tighter timelines still work."
      },
      {
        "q": "Will this hurt our sending reputation?",
        "a": "No. Every address is validated in real time before we send, and we pace delivery instead of blasting the full list at once. Clean lists and controlled volume are what keep deliverability high and your domain healthy."
      },
      {
        "q": "What do we actually receive at the end?",
        "a": "A live tracker of confirmed meetings, booth time slots, and warm replies, plus per-campaign reporting and a post-show list of engaged contacts you can re-engage. Your reps walk into the show with a schedule, not a stack of cold badges."
      }
    ],
    "testimonial": {
      "quote": "We used to spend day one of every expo scanning badges and hoping. Eventra had thirty-one meetings on our reps' calendars before the floor even opened, and more than half came from accounts we had been chasing for months. The booth finally felt like a destination instead of a booth.",
      "name": "Marcus Feldt",
      "role": "VP of Field Marketing",
      "company": "Northwind Robotics"
    }
  },
  {
    "slug": "post-show-followup",
    "path": "/solutions/post-show-followup",
    "group": "solutions",
    "title": "Post-Show Follow-up",
    "blurb": "Turn badge scans and booth visits into booked pipeline with verified, fast follow-up sequences that reach attendees while the event is still top of mind.",
    "hero": {
      "headline": "Follow up on every booth visit before the warmth wears off",
      "subcopy": "Eventra turns your badge scans, booth conversations and session attendees into verified, send-ready contacts and structured follow-up sequences. Reach the right people within hours of the show floor closing, not three weeks after the leads have gone cold."
    },
    "highlights": [
      "Verified email and direct-dial data appended to every scan within 24 hours of badge capture",
      "Sequences segmented by booth interaction, session attended and buying-stage signals",
      "Clean handoff to your CRM and sales floor so reps follow up the same week, not the next quarter"
    ],
    "stats": [
      {
        "value": "<24h",
        "label": "From badge scan to verified, send-ready contact"
      },
      {
        "value": "3.2x",
        "label": "More replies vs. delayed post-event blasts"
      },
      {
        "value": "96%",
        "label": "Email deliverability across follow-up sends"
      },
      {
        "value": "120M+",
        "label": "Verified event attendee records on file"
      }
    ],
    "intro": {
      "eyebrow": "Post-Show Follow-up",
      "title": "The deals are won in the week after the show, not on the show floor",
      "body": [
        "Most teams leave the booth with a stack of scanned badges and good intentions. By the time the data is cleaned, deduplicated and loaded into the CRM, the conversation is two weeks stale and the prospect has already moved on. The intent you paid five figures to capture quietly evaporates.",
        "Eventra closes that gap. We verify and enrich every scan as it comes in, group contacts by how they engaged with your booth and sessions, and hand your reps ready-to-send sequences while the event is still fresh. Follow-up goes out in hours, not weeks, and lands in the inbox instead of the spam folder."
      ]
    },
    "benefits": [
      {
        "icon": "Zap",
        "title": "Reach leads while they are warm",
        "body": "We process badge scans and booth lists as they arrive, so verified contacts and the first follow-up email can go out within hours of a conversation, not after the post-event cleanup drags on."
      },
      {
        "icon": "ShieldCheck",
        "title": "Verified data that protects your sender reputation",
        "body": "Every email is validated and every record cross-checked before it enters a sequence, keeping bounce rates low and your domain out of spam filters during high-volume post-show sends."
      },
      {
        "icon": "Filter",
        "title": "Sequences segmented by real intent",
        "body": "Contacts are grouped by booth interaction, demo interest and session attendance, so each prospect gets a follow-up that references what they actually engaged with instead of a generic thank-you blast."
      }
    ],
    "process": [
      {
        "title": "Capture and import",
        "body": "Send us your badge scans, booth lead lists or exhibitor exports in any format. We ingest them as the show runs, so processing starts before the doors even close."
      },
      {
        "title": "Verify and enrich",
        "body": "We validate every email, append direct dials and job context, and flag duplicates so your follow-up list is clean and accurate from the first send."
      },
      {
        "title": "Segment and sequence",
        "body": "Contacts are tagged by booth activity, session attended and buying signals, then mapped to follow-up sequences tuned to each segment's intent and timing."
      },
      {
        "title": "Hand off and send",
        "body": "Verified contacts and ready-to-run sequences sync straight into your CRM or outreach tool, so reps start following up the same week the show ends."
      }
    ],
    "deliverables": [
      "Verified, deduplicated contact file from every badge scan and booth list, delivered within 24 hours",
      "Email validation and bounce-risk scoring on every record before it enters a sequence",
      "Appended direct-dial numbers, job titles and company context for each contact",
      "Audience segments built from booth interaction, demo interest and session attendance",
      "Ready-to-send follow-up sequence copy mapped to each intent segment",
      "CRM and outreach-tool sync with clean field mapping and source tagging",
      "Per-event follow-up dashboard tracking deliverability, opens and reply rates",
      "Suppression and compliance checks applied across the full follow-up list"
    ],
    "faqs": [
      {
        "q": "How fast can follow-up actually go out after the show?",
        "a": "We start processing scans as they come in, so verified contacts and first-touch sequences are typically ready within 24 hours of badge capture. For multi-day events, we deliver day-one leads while day two is still happening."
      },
      {
        "q": "What if our badge scans only have a name and company?",
        "a": "That is exactly what we enrich. We append verified business email, direct dial, title and company context from our event data, so a thin scan becomes a complete, send-ready contact record."
      },
      {
        "q": "Will high-volume post-show sends hurt our domain reputation?",
        "a": "Not when the list is clean. We validate every email and score bounce risk before anything enters a sequence, which keeps deliverability high and protects your sending domain during the volume spike after an event."
      },
      {
        "q": "Do the sequences plug into the tools we already use?",
        "a": "Yes. Verified contacts and sequence copy sync into common CRMs and outreach platforms with proper field mapping and source tagging, so your reps work in the tools they already know."
      }
    ],
    "testimonial": {
      "quote": "We used to lose two weeks cleaning badge data before a single follow-up went out. With Eventra, verified contacts were in our reps' hands the morning after the show and sequences were already running. It changed how much pipeline we actually pull out of an event.",
      "name": "Marissa Cole",
      "role": "Director of Demand Generation",
      "company": "Northbeam Systems"
    }
  },
  {
    "slug": "account-based-marketing",
    "path": "/solutions/account-based-marketing",
    "group": "solutions",
    "title": "Account-Based Marketing for Events",
    "blurb": "Build target account lists from the companies attending your show, then reach them everywhere — ads, email, and direct mail — coordinated around the event calendar so every touch lands while the event is top of mind.",
    "hero": {
      "headline": "Run ABM around the accounts that show up",
      "subcopy": "Eventra turns a show's attendee, exhibitor, and visitor lists into verified target accounts, then helps you reach the right people through ads, email, and direct mail — timed to the weeks before, during, and after the event."
    },
    "highlights": [
      "Target accounts sourced directly from real event attendance — not a generic firmographic pull",
      "One coordinated play across paid ads, email, and direct mail, sequenced to the event calendar",
      "Verified contacts and company records so spend lands on real buyers, not bounced inboxes"
    ],
    "stats": [
      {
        "value": "96%",
        "label": "Email deliverability on contacts we verify"
      },
      {
        "value": "120M+",
        "label": "Verified event-sourced contacts on file"
      },
      {
        "value": "<24h",
        "label": "From show list to activated audience"
      },
      {
        "value": "3.2x",
        "label": "Average lift in account engagement vs. cold lists"
      }
    ],
    "intro": {
      "eyebrow": "Account-Based Marketing for Events",
      "title": "The accounts already told you they care — they registered for the show",
      "body": [
        "Trade shows, expos, and conferences are the rare moment when your entire target market raises its hand in one place. The exhibitor floor, the attendee badge scans, the session registrations — every one of them is a buying signal you can act on. Eventra captures that signal and turns it into a clean list of accounts worth marketing to.",
        "From there, ABM is about reaching those accounts everywhere they look. We hand you verified company and contact records, match them to ad platforms, and pace the outreach across email and direct mail so your brand shows up before the doors open, while the booth is busy, and after everyone heads home."
      ]
    },
    "benefits": [
      {
        "icon": "Target",
        "title": "Accounts grounded in real attendance",
        "body": "Your target list starts from who actually registered, exhibited, or walked the floor — verified against firmographics so you focus budget on accounts with a confirmed reason to buy."
      },
      {
        "icon": "Network",
        "title": "One audience across every channel",
        "body": "We match your account list to ad platforms, email, and direct mail so the same companies see a consistent message wherever they are, instead of three disconnected campaigns."
      },
      {
        "icon": "CalendarCheck",
        "title": "Sequenced to the event calendar",
        "body": "Touches are timed to pre-show, on-site, and post-show windows — so outreach lands when the event is fresh and your meeting requests actually get read."
      }
    ],
    "process": [
      {
        "title": "Define the target accounts",
        "body": "We pull the attendee, exhibitor, and visitor lists for your shows and filter to the companies that match your ICP — industry, size, region, and role."
      },
      {
        "title": "Verify and enrich the data",
        "body": "Every account is enriched with firmographics and matched to verified contacts and emails, so your campaigns reach decision-makers rather than dead addresses."
      },
      {
        "title": "Activate across channels",
        "body": "We push the audience to your ad platforms, load contacts into your email and CRM tools, and prepare direct-mail segments — all keyed to the same account list."
      },
      {
        "title": "Coordinate around the show",
        "body": "Touches are scheduled across pre-show, on-site, and follow-up windows, then refreshed with new attendance data so each campaign builds on the last."
      }
    ],
    "deliverables": [
      "A verified target-account list built from your selected shows' attendee, exhibitor, and visitor data",
      "Firmographic enrichment on every account — industry, size, revenue band, location, and tech signals",
      "Verified contacts and business emails for decision-makers at each target account",
      "Ad-platform match files ready to upload to LinkedIn, Meta, and Google for account targeting",
      "Email-ready contact segments formatted for your ESP or CRM",
      "Direct-mail segments with verified company mailing addresses",
      "An event-keyed campaign calendar mapping touches to pre-show, on-site, and post-show windows",
      "Post-event refresh with new attendance data and engagement reporting by account"
    ],
    "faqs": [
      {
        "q": "Where does the account data come from?",
        "a": "From the people and companies actually connected to a show — registered attendees, exhibitors, and floor visitors. We source and verify that data, then filter it to the accounts that match your ideal customer profile so you're not marketing to the whole hall."
      },
      {
        "q": "Which channels can you activate?",
        "a": "The same target-account list feeds paid ads (LinkedIn, Meta, Google), email through your ESP or CRM, and direct mail. Because every channel works off one verified list, the accounts you target stay consistent across all of them."
      },
      {
        "q": "How do you keep the data clean enough to spend on?",
        "a": "Every contact and email is verified before it reaches you, and we re-check addresses on each refresh. Verified records keep deliverability high and stop ad and mail budget from landing on bounced or stale contacts."
      },
      {
        "q": "Do I need a show I'm exhibiting at to use this?",
        "a": "No. You can target accounts attending any show in your market, whether you exhibit or not — which makes it a practical way to compete for the same buyers without paying for a booth."
      }
    ],
    "testimonial": {
      "quote": "We stopped treating our trade shows as a one-week sprint. Eventra gave us a verified account list weeks ahead, we ran ads and mail into those exact companies, and our booth meetings were booked before we landed. The follow-up afterward practically wrote itself.",
      "name": "Priya Venkatesan",
      "role": "VP of Demand Generation",
      "company": "Northbeam Industrial"
    }
  }
]
