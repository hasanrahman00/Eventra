import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, BadgeCheck, Sparkles, Database, RefreshCw, CalendarDays,
  Target, MapPin, Megaphone, Rocket, Check,
} from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import LeadForm from '../components/LeadForm.jsx'
import {
  StatGrid, FeatureCards, Steps, TestimonialCard, CheckList,
} from '../components/blocks.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'
import testimonials from '../data/pages/testimonials.js'
import { caseStudyPosts, blogPosts } from '../data/collections.js'

const clients = ['Helix', 'Cargoline', 'Brightloom', 'Northwind', 'Vantage', 'Cadence', 'Pinnacle', 'Orbit']

const solutions = [
  { icon: 'Database', title: 'Event Data', body: 'Verified attendee, exhibitor and visitor lists by show, audience, industry and region.', to: '/event-data' },
  { icon: 'BadgeCheck', title: 'Data Services', body: 'Verify, append, enrich and cleanse your event records to cut bounces and fill gaps.', to: '/services/data-verification' },
  { icon: 'Megaphone', title: 'Event Marketing', body: 'Pre-show, post-show, ABM and email programs that turn the guest list into meetings.', to: '/services/pre-show-email-marketing' },
  { icon: 'Rocket', title: 'Growth', body: 'ROI consulting, sponsorship activation and inside-sales teams to scale event pipeline.', to: '/services/event-roi-consulting' },
]

const valueProps = [
  { icon: 'BadgeCheck', title: 'Verified before delivery', body: 'Every record clears a multi-step validation pipeline, so deliverability stays high and your sender reputation stays clean.' },
  { icon: 'CalendarDays', title: 'Mapped to the show', body: 'Contacts are tied to the specific event, edition and audience — not a generic database dump that’s months out of date.' },
  { icon: 'ShieldCheck', title: 'Opt-in & compliant', body: 'Sourced through a documented opt-in process and aligned with GDPR, CAN-SPAM and CASL so legal signs off fast.' },
  { icon: 'Target', title: 'Built around your event plan', body: 'Tell us the shows and audiences that matter to you — we build to your target list, not a one-size-fits-all template.' },
]

const intelFields = [
  'Full name & verified title', 'Verified work email', 'Direct-dial phone', 'LinkedIn URL',
  'Company & domain', 'Industry (SIC/NAICS)', 'Event name & edition', 'Registration / pass type',
  'Seniority & department', 'HQ & contact location', 'Audience type (attendee/exhibitor)', 'Opt-in source',
]

const steps = [
  { title: 'Pick your shows & audience', body: 'Tell us the events and roles you want — attendees, exhibitors or visitors. We translate them into precise filters.' },
  { title: 'Get counts & a sample', body: 'See matched volume and a free sample to validate fit and quality before you commit.' },
  { title: 'Verify & deliver', body: 'We re-verify the segment and deliver as CSV/XLSX or straight into your CRM.' },
  { title: 'Run pre- & post-show', body: 'Launch outreach before the doors open and follow up while leads are still warm.' },
]

function HeroVisual() {
  const rows = [
    { n: 'A. Chen', r: 'VP Engineering', c: 'Northwind' },
    { n: 'M. Okafor', r: 'Head of Procurement', c: 'Brightloom' },
    { n: 'S. Patel', r: 'Director, Operations', c: 'Cadence' },
    { n: 'L. Romano', r: 'CTO', c: 'Kestrel' },
  ]
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/20 to-accent/20 blur-2xl" />
      <div className="relative rounded-3xl border border-white/10 bg-white/95 p-5 shadow-lift backdrop-blur">
        <div className="flex items-center justify-between border-b border-surface-muted pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-ink">
            <CalendarDays className="h-4 w-4 text-brand-600" /> Global Tech Expo ’26
          </div>
          <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent-deep">
            12,480 attendees
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {rows.map((row) => (
            <div key={row.n} className="flex items-center justify-between rounded-xl bg-surface-subtle px-3 py-2.5">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  {row.n.split(' ').map((p) => p[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{row.n}</div>
                  <div className="text-xs text-ink-muted">{row.r} · {row.c}</div>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-accent-deep">
                <BadgeCheck className="h-4 w-4" /> Verified
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[['96%', 'Deliverable'], ['12+', 'Fields'], ['<24h', 'Turnaround']].map(([v, l]) => (
            <div key={l} className="rounded-xl border border-surface-muted py-2">
              <div className="text-base font-extrabold text-ink">{v}</div>
              <div className="text-2xs text-ink-muted">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  useSeo()
  const cases = caseStudyPosts.slice(0, 3)
  const posts = blogPosts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-[0.06]" />
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-shell relative grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
              <Sparkles className="h-3.5 w-3.5" /> Verified trade-show & event data
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] text-balance text-white sm:text-5xl lg:text-6xl">
              Turn every trade show into <span className="bg-gradient-to-r from-brand-300 to-accent-soft bg-clip-text text-transparent">predictable pipeline</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
              {brand.name} gives B2B teams verified attendee, exhibitor and visitor contact data from 40,000+
              events — so you reach the right buyers before, during and after every show.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="accent" size="lg">
                Get a free sample <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/event-data" variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:bg-white/15">
                Explore event data
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {['No commitment', '96% deliverability SLA', 'Opt-in & compliant'].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* Client logo marquee */}
      <div className="border-y border-surface-muted bg-white py-8">
        <div className="container-shell">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Trusted by event marketers at fast-growing companies
          </p>
          <div className="mask-fade-x mt-6 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="text-xl font-extrabold tracking-tight text-ink/25">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Value props */}
      <Section>
        <SectionHeading
          eyebrow={`Why ${brand.name}`}
          title="Event data your team can actually campaign on"
          description="Quality, show-level accuracy and compliance are the difference between booked meetings and a spam folder. We obsess over all three."
        />
        <div className="mt-12">
          <FeatureCards items={valueProps} columns={4} />
        </div>
      </Section>

      {/* Solutions */}
      <Section tone="subtle">
        <SectionHeading
          eyebrow="What we do"
          title="One partner for the whole event-to-pipeline journey"
          description="From the guest list to the booked meeting — pick a single service or run the full motion with us."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link
                to={s.to}
                className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  {(() => { const I = { Database, BadgeCheck, Megaphone, Rocket }[s.icon]; return <I className="h-5 w-5" /> })()}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats band */}
      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            light
            eyebrow="By the numbers"
            title="Scale without sacrificing quality"
            description="A data foundation big enough to cover every major show — and clean enough to trust."
          />
          <StatGrid stats={brand.metrics} light />
        </div>
      </Section>

      {/* Intelligence fields */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Every record, fully attributed"
              title="The context your team needs to personalize"
              description="Each contact arrives mapped to the event and enriched with the fields you need to segment, personalize and prioritize."
            />
            <div className="mt-8">
              <CheckList items={intelFields} columns={2} />
            </div>
            <div className="mt-8">
              <Button to="/event-data" variant="primary">
                Explore all event data <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Reveal delay={0.1}>
            <LeadForm title="See your matched counts" />
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section tone="subtle">
        <SectionHeading eyebrow="How it works" title="From show list to pipeline in four steps" />
        <div className="mt-12">
          <Steps steps={steps} />
        </div>
      </Section>

      {/* Case studies */}
      {cases.length > 0 && (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="Proof" title="Results, not promises" className="!mx-0" />
            <Button to="/case-studies" variant="ghost">All case studies <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.path} delay={i * 0.06}>
                <Link to={c.path} className="group flex h-full flex-col justify-between rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{c.category}</span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">{c.excerpt}</p>
                  </div>
                  {c.headline && (
                    <div className="mt-5 border-t border-surface-muted pt-4">
                      <span className="text-2xl font-extrabold text-brand-600">{c.headline.value}</span>
                      <span className="ml-1.5 text-sm text-ink-muted">{c.headline.label}</span>
                    </div>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Testimonials */}
      <Section tone={cases.length > 0 ? 'subtle' : 'default'}>
        <SectionHeading eyebrow="Testimonials" title="Teams that switched, stayed" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="From the blog" title="Ideas worth stealing" className="!mx-0" />
            <Button to="/blog" variant="ghost">Read the blog <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.path} delay={i * 0.06}>
                <Link to={p.path} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative h-36 bg-gradient-to-br from-brand-600 to-accent">
                    <div className="absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-20" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">{p.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-ink group-hover:text-brand-700">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-2">{p.excerpt}</p>
                    <span className="mt-3 text-xs text-ink-muted">{p.date}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
