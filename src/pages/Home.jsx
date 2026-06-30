import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarDays, Search, UserCheck, ShieldCheck, Send, Building2, RefreshCw, Megaphone, Database, FileCheck2, Star } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { Counter, FeatureCards, FAQ, TestimonialCard, Marquee } from '../components/blocks.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'
import testimonials from '../data/pages/testimonials.js'

const categories = ['Trade Shows', 'Summit & Forums', 'Exhibitions', 'Conferences']
const clients = ['Helix', 'Cargoline', 'Brightloom', 'Northwind', 'Vantage', 'Cadence', 'Pinnacle', 'Orbit', 'Kestrel', 'Meridian']

const stats = [
  { value: '40K+', label: 'Events database' },
  { value: '96%', label: 'Assured data quality' },
  { value: '2 Days', label: 'On-time data delivery' },
  { value: '120M+', label: 'Attendee contacts' },
]

const competitive = [
  { icon: 'Building2', title: 'Exhibitor insights', body: 'Know who’s exhibiting, where their booth is and who makes the decisions before the show opens.' },
  { icon: 'Database', title: 'Attendee email lists', body: 'Verified, opt-in attendee contacts segmented by role, seniority and industry.' },
  { icon: 'RefreshCw', title: 'Fresh and reliable', body: 'Records are re-verified each edition, so you never work a list that went stale months ago.' },
  { icon: 'Megaphone', title: 'Pre- & post-event ready', body: 'Reach buyers before the doors open and follow up while the show is still fresh.' },
]

const sourcing = [
  { icon: 'Search', title: 'Data building', body: 'We compile attendee, exhibitor and visitor records from each event using documented, opt-in sources.' },
  { icon: 'ShieldCheck', title: 'Data verification', body: 'Every email and phone is checked against live signals so your sends land and your domain stays clean.' },
  { icon: 'BadgeCheck', title: 'Data validation', body: 'Records are deduplicated, normalized and scored before delivery — accurate the day you receive them.' },
]

const optIn = [
  { icon: Search, title: 'Sourcing', body: 'We identify the events and audiences that match your plan.' },
  { icon: UserCheck, title: 'Opt-in permission', body: 'Contacts are gathered through a documented opt-in process.' },
  { icon: ShieldCheck, title: 'Verification', body: 'Emails and phones are validated against live signals.' },
  { icon: BadgeCheck, title: 'Validation', body: 'Records are deduplicated, enriched and scored.' },
  { icon: Send, title: 'Delivery', body: 'A CRM-ready file lands within two business days.' },
]

const faqs = [
  { q: 'Where does your event data come from?', a: 'We compile records from each show through documented, opt-in sources and public business information, then verify every contact before delivery. We can walk your compliance team through sourcing on request.' },
  { q: 'Is the data compliant with GDPR and CAN-SPAM?', a: 'Yes. Our sourcing and handling are aligned with GDPR, CAN-SPAM and CASL, and each record carries its opt-in source so legal can sign off quickly.' },
  { q: 'How fresh are the lists?', a: 'Records are re-verified each event edition, and most orders are delivered within two business days so you’re working data that’s accurate today — not months old.' },
  { q: 'Can I get a free sample first?', a: 'Absolutely. Tell us the shows and audience you’re targeting and we’ll return matched counts and a free sample so you can validate fit before you commit.' },
]

function EventVisual() {
  const rows = [['Global Tech Expo ’26', '12,480'], ['MedDevice Summit', '6,210'], ['LogiWorld Fair', '9,034']]
  return (
    <div className="rounded-3xl border border-white/10 bg-card p-5 shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-sm font-semibold text-white"><CalendarDays className="h-4 w-4 text-accent" /> Upcoming events</div>
      <div className="mt-3 space-y-2">
        {rows.map(([n, c]) => (
          <div key={n} className="flex items-center justify-between rounded-xl bg-navy-soft px-3 py-2.5">
            <span className="text-sm font-medium text-white">{n}</span>
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">{c} attendees</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProfileVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-card p-5 shadow-lift">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <img src="/avatars/alexandra-chen.jpg" alt="Alexandra Chen" loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
        <div>
          <div className="text-sm font-semibold text-white">Alexandra Chen</div>
          <div className="text-xs text-ink-muted">VP Engineering · Northwind</div>
        </div>
        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-accent"><BadgeCheck className="h-4 w-4" /> Verified</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        {[['Email', 'a.chen@northwind.co'], ['Direct dial', '+1 (415) •••'], ['Event', 'Global Tech Expo ’26'], ['Pass type', 'Delegate']].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-navy-soft px-3 py-2">
            <div className="text-ink-muted">{k}</div>
            <div className="mt-0.5 font-medium text-white">{v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  useSeo()
  return (
    <>
      <Hero />

      {/* 2 — category strip */}
      <div className="border-y border-white/10 bg-navy py-6">
        <div className="container-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
          {categories.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />}
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* 3 — Elevate B2B success */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Events data" title="Elevate B2B success with events data" description="Every trade show is a room full of in-market buyers. We turn that room into a verified, segment-ready contact list you can act on before, during and after the event." className="!max-w-none" />
            <div className="mt-8"><Button to="/event-data" variant="navy" size="lg">Browse more events <ArrowRight className="h-4 w-4" /></Button></div>
          </div>
          <Reveal delay={0.1}><EventVisual /></Reveal>
        </div>
      </Section>

      {/* 4 — Connecting you to precise data */}
      <Section tone="subtle">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Precision" title="Connecting you to precise B2B event contact data" description="Each record is mapped to the specific show and edition, then enriched with the role, seniority and verified contact details your team needs to personalize and prioritize." className="!max-w-none" />
            <div className="mt-8"><Button to="/event-data" variant="accent" size="lg">Explore event data <ArrowRight className="h-4 w-4" /></Button></div>
          </div>
          <Reveal delay={0.1} className="lg:order-first"><ProfileVisual /></Reveal>
        </div>
      </Section>

      {/* 5 — Stats counters */}
      <Section tone="night">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="rounded-2xl border border-white/10 bg-card p-6 text-center shadow-soft">
              <Counter value={s.value} className="block font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl" />
              <div className="mt-1.5 text-sm text-ink-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — Why choose us */}
      <Section>
        <SectionHeading eyebrow="Why choose us" title="Get the competitive edge" description="Everything you need to make the most of every event you attend or sponsor." />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {[Building2, Database, RefreshCw, Megaphone].map((Icon, i) => (
                <div key={i} className="grid aspect-square place-items-center rounded-3xl border border-white/10 bg-card shadow-soft">
                  <Icon className="h-12 w-12 text-accent" />
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-5">
            {competitive.map((c, i) => {
              const Icon = { Building2, Database, RefreshCw, Megaphone }[c.icon]
              return (
                <Reveal key={c.title} delay={i * 0.05} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-accent text-accent"><Icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{c.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* 7 — Verified high-impact data */}
      <Section tone="subtle">
        <SectionHeading eyebrow="Our process" title="Your source for verified, high-impact data" description="Three disciplines stand behind every list we deliver." />
        <div className="mt-12"><FeatureCards items={sourcing} columns={3} /></div>
      </Section>

      {/* 8 — How we work / opt-in process */}
      <Section>
        <SectionHeading eyebrow="How we work" title="A documented opt-in process" description="From sourcing to delivery, every record follows the same five accountable steps." />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {optIn.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="relative text-center">
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-card shadow-soft">
                <s.icon className="h-8 w-8 text-accent" />
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9 — Testimonials carousel */}
      <Section tone="night">
        <SectionHeading eyebrow="Testimonials" title="Trusted by thousands of event professionals" />
        <div className="group mask-fade-x relative mt-12 overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[320px] shrink-0 sm:w-[360px]" aria-hidden={i >= testimonials.length}><TestimonialCard {...t} /></div>
            ))}
          </div>
        </div>
        <div className="mt-10"><Marquee items={clients} /></div>
      </Section>

      {/* 10 — FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10"><FAQ items={faqs} /></div>
      </Section>
    </>
  )
}
