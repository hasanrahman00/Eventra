import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { FeatureCards, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import { getIcon } from '../lib/icons.js'
import useSeo from '../lib/useSeo.js'
import { servicePages } from '../data/collections.js'

const iconBySlug = {
  'data-verification': 'ShieldCheck',
  'data-enrichment': 'Sparkles',
  'data-append': 'MailCheck',
  'pre-show-marketing': 'Send',
  'post-show-followup': 'RefreshCw',
  'account-based-marketing': 'Target',
}

const valueProps = [
  { icon: 'BadgeCheck', title: 'Verified before delivery', body: 'Every record clears multi-step validation, so your sends land and your sender reputation stays intact.' },
  { icon: 'CalendarDays', title: 'Built around the event', body: 'Programs are scoped to the specific shows and audiences in your plan — not a generic database dump.' },
  { icon: 'Gauge', title: 'Measured on pipeline', body: 'We report on meetings booked and pipeline influenced, not vanity opens, so you can prove event ROI.' },
]

export default function Solutions() {
  useSeo({ title: 'Solutions', description: 'Data services and event marketing programs that turn the guest list into booked meetings.' })
  const services = servicePages.filter((p) => p.group === 'solutions')

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        headline="From the guest list to a booked meeting"
        subcopy="Pick a single service or run the full motion — data verification and enrichment, pre- and post-show campaigns, and account-based programs built around your event calendar."
        trail={[{ label: 'Solutions' }]}
        highlights={['Done-for-you', 'Verified data', 'Pipeline-focused']}
      />

      <Section>
        <SectionHeading eyebrow="What we do" title="Services that turn events into pipeline" description="Each program runs on verified event data and is measured on meetings and pipeline." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = getIcon(iconBySlug[s.slug])
            return (
              <Reveal key={s.path} delay={(i % 3) * 0.06}>
                <Link to={s.path} className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="Why Eventra" title="A partner that understands events" />
        <div className="mt-10"><FeatureCards items={valueProps} columns={3} /></div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Not sure which service you need?"
          body="Tell us about your event plan and goals — we’ll recommend the right mix and send a free data sample."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Explore event data', to: '/event-data' }}
        />
      </Section>
    </>
  )
}
