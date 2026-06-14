import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Target } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import { StatGrid, CTABand } from '../components/blocks.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const values = [
  { icon: Compass, title: 'Outcomes over volume', body: 'We measure ourselves on the meetings you book, not on how many records we can ship.' },
  { icon: ShieldCheck, title: 'Quality is non-negotiable', body: 'If a record won’t pass verification, it doesn’t reach your CRM. Full stop.' },
  { icon: HeartHandshake, title: 'Partner, not vendor', body: 'We win when your show wins, so we tune segments and timing alongside your team.' },
  { icon: Target, title: 'Mapped to the moment', body: 'Every contact is tied to a real event and audience — precision is the whole point.' },
]

const timeline = [
  { year: '2015', text: `${brand.name} is founded to fix the scramble for clean trade-show attendee lists.` },
  { year: '2018', text: 'Launches an automated verification pipeline and crosses 10,000 covered events.' },
  { year: '2021', text: 'Adds pre- and post-show marketing services; opens EMEA operations in London.' },
  { year: '2024', text: 'Introduces exhibitor intelligence and per-edition show mapping for ABM teams.' },
  { year: '2026', text: `Serves event marketers in 150+ countries with ${brand.metrics[0].value} verified contacts across ${brand.metrics[1].value} events.` },
]

export default function About() {
  useSeo({ title: 'About Us', description: `${brand.name} turns the world’s trade shows and expos into pipeline for B2B teams worldwide.` })
  return (
    <>
      <PageHero
        eyebrow="About us"
        headline="We turn the world’s events into clean, reachable pipeline"
        subcopy={`Since ${brand.foundedYear}, ${brand.name} has helped B2B teams reach trade-show buyers and exhibitors with data they can actually trust.`}
        trail={[{ label: 'Company' }, { label: 'About Us' }]}
        highlights={['Founded ' + brand.foundedYear, '150+ countries', '40K+ events covered']}
        primary={{ label: 'Work with us', to: '/contact' }}
        secondary={{ label: 'See careers', to: '/careers' }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
              Born from one frustration: the last-minute scramble for the attendee list
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="prose-muted space-y-4">
            <p>
              {brand.name} started when our founders — former event marketers and data engineers — got tired of
              scrambling for a usable attendee list days before every show, only to watch campaigns bounce on stale data.
            </p>
            <p>
              We built the verification and show-mapping engine we wished we’d had: one that ties every contact to a
              real event and treats each record as a promise to a sender’s reputation. Today that engine powers data,
              enrichment and event-marketing programs for teams of every size.
            </p>
            <p>
              We’re still obsessed with the same thing — making sure the next message you send reaches a real buyer
              who chose to be in the room.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading light eyebrow="Where we are today" title="A foundation built to scale with you" />
        <div className="mt-12">
          <StatGrid stats={brand.metrics} light />
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="What we value" title="The principles behind every record we ship" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-surface-muted bg-white p-6 shadow-soft">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Milestones" title="A decade of building trust in event data" />
        <div className="mx-auto mt-12 max-w-3xl">
          <ol className="relative border-l border-surface-muted">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.05} className="mb-8 ml-6">
                <span className="absolute -left-2.5 grid h-5 w-5 place-items-center rounded-full bg-brand-600 ring-4 ring-white" />
                <div className="text-sm font-extrabold text-brand-600">{t.year}</div>
                <p className="mt-1 text-ink/80">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Let’s build event pipeline together"
          body="Get a free sample matched to the shows and audiences that matter to you — and see the quality for yourself."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: `Why ${brand.name}`, to: '/why-us' }}
        />
      </Section>
    </>
  )
}
