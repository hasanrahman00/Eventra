import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { StatGrid, FeatureCards, CheckList, FAQ, TestimonialCard, CTABand, Steps } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'

const groupLabels = { solutions: 'Solutions', 'event-data': 'Event Data' }
const groupPaths = { solutions: '/solutions', 'event-data': '/event-data' }

export default function ServicePageTemplate({ page }) {
  useSeo({ title: page.title, description: page.blurb })
  const label = groupLabels[page.group] || 'Solutions'
  const trail = [{ label, to: groupPaths[page.group] }, { label: page.title }]

  return (
    <>
      <PageHero
        eyebrow={label}
        headline={page.hero?.headline || page.title}
        subcopy={page.hero?.subcopy}
        trail={trail}
        highlights={page.highlights}
        side={<LeadForm compact title="Request counts & a sample" cta="Get my free sample" subtitle="Tell us your target events and audience — we’ll reply within one business day." />}
      />

      {page.stats?.length > 0 && (
        <Section tone="subtle" className="!py-12">
          <StatGrid stats={page.stats} />
        </Section>
      )}

      {page.intro && (
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <span className="eyebrow"><span className="h-px w-6 bg-brand-400/50" />{page.intro.eyebrow || 'Overview'}</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">{page.intro.title}</h2>
            </Reveal>
            <Reveal delay={0.08} className="space-y-4">
              {(page.intro.body || []).map((p, i) => <p key={i} className="text-base leading-relaxed text-ink-muted">{p}</p>)}
            </Reveal>
          </div>
        </Section>
      )}

      {page.benefits?.length > 0 && (
        <Section tone={page.intro ? 'subtle' : 'default'}>
          <SectionHeading eyebrow="What you get" title={page.benefitsTitle || 'Outcomes we deliver'} />
          <div className="mt-10"><FeatureCards items={page.benefits} columns={3} /></div>
        </Section>
      )}

      {page.process?.length > 0 && (
        <Section>
          <SectionHeading eyebrow="How it works" title={page.processTitle || 'A clear, accountable process'} />
          <div className="mt-12"><Steps steps={page.process} /></div>
        </Section>
      )}

      {page.deliverables?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading eyebrow="Included" title="What’s included" />
          <div className="mt-10 rounded-4xl border border-surface-muted bg-white p-7 shadow-soft sm:p-10">
            <CheckList items={page.deliverables} columns={2} />
          </div>
        </Section>
      )}

      {page.testimonial && (
        <Section>
          <div className="mx-auto max-w-3xl"><TestimonialCard {...page.testimonial} /></div>
        </Section>
      )}

      {page.faqs?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10"><FAQ items={page.faqs} /></div>
        </Section>
      )}

      <Section className="!pt-0">
        <CTABand
          title={page.ctaTitle || `Let’s scope your ${page.title.toLowerCase()}`}
          body="Tell us the events and audience you want and we’ll come back with matched counts and a free sample."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'See case studies', to: '/case-studies' }}
        />
      </Section>
    </>
  )
}
