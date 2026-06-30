import PageHero from '../components/PageHero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { StatGrid, FeatureCards, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const values = [
  { icon: 'BadgeCheck', title: 'Accuracy over volume', body: 'We would rather hand you a smaller, verified list than a bloated one that bounces. Quality is the product.' },
  { icon: 'ShieldCheck', title: 'Compliant by default', body: 'Documented opt-in sourcing and alignment with GDPR, CAN-SPAM and CASL — so your team can send with confidence.' },
  { icon: 'CalendarDays', title: 'Event-native', body: 'We live and breathe trade shows. Every record is mapped to the show, edition and audience it came from.' },
  { icon: 'Handshake', title: 'Partners, not list sellers', body: 'We win when your events drive pipeline, so we measure ourselves on meetings booked — not records shipped.' },
]

export default function About() {
  useSeo({ title: 'About', description: `${brand.name} turns the world’s trade shows and conferences into verified pipeline.` })
  return (
    <>
      <PageHero
        eyebrow="About Eventra"
        headline="We turn the world’s events into pipeline"
        subcopy={`Since ${brand.foundedYear}, ${brand.name} has helped B2B teams reach the right buyers around the trade shows, expos and conferences that matter most to them.`}
        trail={[{ label: 'About' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-6 bg-brand-400/50" />Our story</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Built by event marketers, for event marketers</h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-4">
            <p className="leading-relaxed text-ink-muted">Eventra started after years of watching great trade-show booths go to waste. Teams spent fortunes on space and travel, collected a pile of badge scans, then let the leads go cold because the data was messy and slow to clean.</p>
            <p className="leading-relaxed text-ink-muted">So we built the data layer events were missing: verified attendee, exhibitor and visitor contacts, mapped to the specific show and ready to action before the doors even open. Today we cover {brand.metrics[1].value} events across {brand.metrics[3].value} countries.</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading align="left" eyebrow="By the numbers" title="Scale you can trust" description="Big enough to cover every major show — clean enough to put your name behind." />
          <StatGrid stats={brand.metrics} />
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="What we value" title="How we work" />
        <div className="mt-10"><FeatureCards items={values} columns={4} /></div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Let’s make your next event pay for itself"
          body="Tell us the shows you’re targeting and we’ll send matched counts and a free data sample."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'See our solutions', to: '/solutions' }}
        />
      </Section>
    </>
  )
}
