import { Check, X, ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import { FeatureCards, CTABand, FAQ } from '../components/blocks.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const differentiators = [
  { icon: 'ShieldCheck', title: 'Verification, not vibes', body: 'A multi-step pipeline validates every email, so deliverability is a guarantee, not a hope.' },
  { icon: 'CalendarDays', title: 'Mapped to the show', body: 'Contacts are tied to the specific event and edition — not a recycled database that’s months old.' },
  { icon: 'RefreshCw', title: 'Freshness on a schedule', body: 'Rolling re-verification means you never campaign against a record that quietly went stale.' },
  { icon: 'Megaphone', title: 'Data + activation', body: 'We don’t stop at the list — pre-show, post-show and ABM programs turn data into booked meetings.' },
  { icon: 'BadgeCheck', title: 'Compliance built in', body: 'Documented opt-in trails plus GDPR, CCPA/CPRA and CAN-SPAM alignment with full suppression handling.' },
  { icon: 'Headphones', title: 'Support that tunes', body: 'Event strategists tune your segments and timing to lift connect and reply rates show after show.' },
]

const compareRows = [
  ['Verified before delivery', true, false],
  ['Mapped to the specific event & edition', true, false],
  ['Free sample before purchase', true, false],
  ['Rolling re-verification', true, false],
  ['Pre- & post-show activation programs', true, false],
  ['Deliverability SLA & replacements', true, false],
  ['Documented opt-in / sourcing trail', true, false],
]

const faqs = [
  { q: `How is ${brand.name} different from a typical list broker?`, a: 'Most brokers resell static, generic files. We tie every record to a real event, verify it before delivery, refresh continuously and back deliverability with an SLA — plus we can activate the data through pre- and post-show programs.' },
  { q: 'Will the data hurt my sender reputation?', a: 'The opposite is the goal. By filtering bounce risk before delivery and honoring suppression rules, we help protect your domain reputation.' },
  { q: 'Do I have to commit before seeing quality?', a: 'No. We send matched counts and a free sample first so you can validate fit and accuracy with zero commitment.' },
]

export default function WhyUs() {
  useSeo({ title: `Why ${brand.name}`, description: `Why event marketers choose ${brand.name} over typical list vendors.` })
  return (
    <>
      <PageHero
        eyebrow={`Why ${brand.name}`}
        headline="The difference between a list and a pipeline"
        subcopy="Anyone can sell you rows. We sell reachable, event-mapped contacts — and the programs that turn them into revenue."
        trail={[{ label: 'Company' }, { label: `Why ${brand.name}` }]}
        highlights={['96% deliverability SLA', 'Free sample first', 'Data + activation']}
      />

      <Section>
        <SectionHeading eyebrow="What sets us apart" title="Six reasons teams switch and stay" />
        <div className="mt-12">
          <FeatureCards items={differentiators} columns={3} />
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="Compare" title={`${brand.name} vs. a typical list vendor`} />
        <Reveal className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-surface-muted bg-surface-subtle px-5 py-4 text-sm font-semibold text-ink">
            <span>Capability</span>
            <span className="w-24 text-center text-brand-700">{brand.name}</span>
            <span className="w-24 text-center text-ink-muted">Typical vendor</span>
          </div>
          {compareRows.map(([label, a, b], i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-surface-muted px-5 py-3.5 text-sm last:border-0">
              <span className="text-ink/80">{label}</span>
              <span className="grid w-24 place-items-center">
                {a ? <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent-deep"><Check className="h-4 w-4" strokeWidth={3} /></span>
                   : <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-muted text-ink-muted"><X className="h-4 w-4" /></span>}
              </span>
              <span className="grid w-24 place-items-center">
                {b ? <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent-deep"><Check className="h-4 w-4" strokeWidth={3} /></span>
                   : <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-muted text-ink-muted"><X className="h-4 w-4" /></span>}
              </span>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="See the quality before you commit"
          body="Request matched counts and a free sample built around the shows and audiences that matter to you."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'View case studies', to: '/case-studies' }}
        />
      </Section>
    </>
  )
}
