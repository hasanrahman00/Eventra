import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { CheckList, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { getIcon } from '../lib/icons.js'
import useSeo from '../lib/useSeo.js'

const audiences = [
  { icon: 'Users', title: 'Attendee Lists', to: '/event-data/attendees', body: 'Registered attendees by show, role, seniority and industry — opt-in and mapped to the exact event.' },
  { icon: 'Building2', title: 'Exhibitor Lists', to: '/event-data/exhibitors', body: 'Booth exhibitors and their decision-makers — ideal for partnerships, supplier and competitive plays.' },
  { icon: 'UserCheck', title: 'Visitor Data', to: '/event-data/visitors', body: 'Trade visitors and walk-the-floor buyers — high-intent, in-market contacts beyond the delegate list.' },
]

const industries = [
  ['Cpu', 'Technology & SaaS'], ['HeartPulse', 'Healthcare & Medical'], ['Factory', 'Manufacturing'],
  ['Banknote', 'Financial Services'], ['Building2', 'Construction & Real Estate'], ['Fuel', 'Energy & Utilities'],
  ['ShoppingCart', 'Retail & Consumer'], ['Truck', 'Logistics & Transport'], ['GraduationCap', 'Education'],
  ['Plane', 'Travel & Hospitality'], ['Wrench', 'Automotive'], ['Megaphone', 'Marketing & Media'],
]

const regions = [
  'North America', 'United Kingdom & Ireland', 'Europe (EMEA)', 'Asia-Pacific (APAC)', 'Middle East', 'Latin America',
]

const eventTypes = [
  { icon: 'Presentation', title: 'Trade Shows & Expos', body: 'Large-scale exhibitions with thousands of attendees and exhibitors.' },
  { icon: 'CalendarDays', title: 'Conferences & Summits', body: 'Agenda-led events with senior, decision-making audiences.' },
  { icon: 'Ticket', title: 'Industry Fairs', body: 'Vertical-specific fairs and showcases by sector and region.' },
  { icon: 'Handshake', title: 'Hosted-Buyer Events', body: 'Curated matchmaking events with pre-qualified buyers.' },
]

const fields = [
  'Full name & verified title', 'Verified work email', 'Direct-dial phone', 'LinkedIn URL',
  'Company & domain', 'Industry (SIC/NAICS)', 'Event name & edition', 'Registration / pass type',
  'Seniority & department', 'HQ & contact location', 'Audience type (attendee/exhibitor)', 'Opt-in source',
]

// lucide names used above that aren't in the shared icon map fall back gracefully.
import { Cpu, HeartPulse, Factory, Banknote, Fuel, ShoppingCart, Truck, GraduationCap, Plane, Wrench } from 'lucide-react'
const extraIcons = { Cpu, HeartPulse, Factory, Banknote, Fuel, ShoppingCart, Truck, GraduationCap, Plane, Wrench }
const icon = (n) => extraIcons[n] || getIcon(n)

export default function EventData() {
  useSeo({ title: 'Event Data', description: 'Verified attendee, exhibitor and visitor data from 40,000+ trade shows, expos and conferences worldwide.' })

  return (
    <>
      <PageHero
        eyebrow="Event Data"
        headline="Verified contact data from every major event"
        subcopy="Attendee, exhibitor and visitor records from 40,000+ trade shows, expos and conferences — mapped to the show, verified before delivery, and built around your target list."
        trail={[{ label: 'Event Data' }]}
        highlights={['120M+ contacts', '40K+ events', '150+ countries', '96% deliverability']}
        side={<LeadForm compact title="Get matched counts" cta="Get my free sample" subtitle="Tell us the shows and audience you want — we’ll send counts and a sample." />}
      />

      {/* Audiences */}
      <Section>
        <SectionHeading eyebrow="Audiences" title="Three ways to reach an event’s buyers" description="Choose the audience that fits your motion — or combine them around a single show." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = icon(a.icon)
            return (
              <Reveal key={a.title} delay={i * 0.06}>
                <Link to={a.to} className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{a.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">View {a.title.toLowerCase()} <ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* By industry */}
      <Section tone="subtle" id="industries">
        <SectionHeading eyebrow="Browse by industry" title="Event data for every vertical" description="We cover the flagship shows in the industries you sell into — and the niche fairs too." />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(([ic, label], i) => {
            const Icon = icon(ic)
            return (
              <Reveal key={label} delay={(i % 4) * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-surface-muted bg-card p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* By region */}
      <Section id="regions">
        <SectionHeading eyebrow="Browse by region" title="Global coverage, local accuracy" description="Reach the right buyers wherever the show is — with region-aware fields and compliance." />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {regions.map((r) => (
            <span key={r} className="rounded-full border border-surface-muted bg-card px-5 py-2.5 text-sm font-semibold text-ink shadow-soft">{r}</span>
          ))}
        </div>
      </Section>

      {/* By event type */}
      <Section tone="subtle" id="event-types">
        <SectionHeading eyebrow="Browse by event type" title="Every format, covered" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((e, i) => {
            const Icon = icon(e.icon)
            return (
              <Reveal key={e.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl border border-surface-muted bg-card p-6 shadow-soft">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-base font-bold text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{e.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Fields */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Every record, fully attributed" title="The fields your team needs to personalize" description="Each contact arrives mapped to the event and enriched with the detail you need to segment and prioritize." />
            <div className="mt-8"><CheckList items={fields} columns={2} /></div>
          </div>
          <Reveal delay={0.1}><LeadForm title="See your matched counts" /></Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Find your buyers at the next big show"
          body="Tell us the events and audience you’re targeting — we’ll send matched counts and a free sample within one business day."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'See our solutions', to: '/solutions' }}
        />
      </Section>
    </>
  )
}
