import { Link } from 'react-router-dom'
import { ArrowRight, Database, BadgeCheck, Megaphone, Rocket } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { Marquee, FeatureCards, Steps, StatGrid, TestimonialCard, CTABand } from '../components/blocks.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'
import testimonials from '../data/pages/testimonials.js'
import { caseStudyPosts, blogPosts } from '../data/collections.js'

const clients = ['Helix', 'Cargoline', 'Brightloom', 'Northwind', 'Vantage', 'Cadence', 'Pinnacle', 'Orbit', 'Kestrel', 'Meridian']

const valueProps = [
  { icon: 'BadgeCheck', title: 'Verified before delivery', body: 'Every record clears a multi-step validation pipeline, so deliverability stays high and your sender reputation stays clean.' },
  { icon: 'CalendarDays', title: 'Mapped to the show', body: 'Contacts are tied to the specific event, edition and audience — not a generic database dump that’s months out of date.' },
  { icon: 'ShieldCheck', title: 'Opt-in & compliant', body: 'Sourced through a documented opt-in process and aligned with GDPR, CAN-SPAM and CASL so legal signs off fast.' },
  { icon: 'Target', title: 'Built around your plan', body: 'Tell us the shows and audiences that matter — we build to your target list, not a one-size-fits-all template.' },
]

const solutions = [
  { Icon: Database, title: 'Event Data', body: 'Verified attendee, exhibitor and visitor lists by show, audience, industry and region.', to: '/event-data' },
  { Icon: BadgeCheck, title: 'Data Services', body: 'Verify, append and enrich your event records to cut bounces and fill the gaps.', to: '/solutions/data-verification' },
  { Icon: Megaphone, title: 'Event Marketing', body: 'Pre-show, post-show and ABM programs that turn the guest list into booked meetings.', to: '/solutions/pre-show-marketing' },
  { Icon: Rocket, title: 'Account-Based', body: 'Target the exact accounts attending a show across email, ads and direct mail.', to: '/solutions/account-based-marketing' },
]

const steps = [
  { title: 'Pick your shows & audience', body: 'Tell us the events and roles you want — attendees, exhibitors or visitors. We translate them into precise filters.' },
  { title: 'Get counts & a sample', body: 'See matched volume and a free sample to validate fit and quality before you commit.' },
  { title: 'Verify & deliver', body: 'We re-verify the segment and deliver as CSV/XLSX or straight into your CRM.' },
  { title: 'Run pre- & post-show', body: 'Launch outreach before the doors open and follow up while leads are still warm.' },
]

export default function Home() {
  useSeo()
  const cases = caseStudyPosts.slice(0, 3)
  const posts = blogPosts.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Client marquee */}
      <div className="border-y border-surface-muted bg-white py-8">
        <div className="container-shell">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">Trusted by event marketers at fast-growing companies</p>
          <div className="mt-6"><Marquee items={clients} /></div>
        </div>
      </div>

      {/* Value props */}
      <Section>
        <SectionHeading eyebrow={`Why ${brand.name}`} title="Event data your team can actually campaign on" description="Quality, show-level accuracy and compliance are the difference between booked meetings and a spam folder. We obsess over all three." />
        <div className="mt-12"><FeatureCards items={valueProps} columns={4} /></div>
      </Section>

      {/* Solutions */}
      <Section tone="subtle">
        <SectionHeading eyebrow="What we do" title="One partner for the whole event-to-pipeline journey" description="From the guest list to the booked meeting — pick a single service or run the full motion with us." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link to={s.to} className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><s.Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats band */}
      <Section tone="night">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading align="left" light eyebrow="By the numbers" title="Scale without sacrificing quality" description="A data foundation big enough to cover every major show — and clean enough to trust." />
          <StatGrid stats={brand.metrics} light />
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading eyebrow="How it works" title="From show list to pipeline in four steps" />
        <div className="mt-12"><Steps steps={steps} /></div>
      </Section>

      {/* Case studies */}
      {cases.length > 0 && (
        <Section tone="subtle">
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
                      <span className="font-display text-3xl font-extrabold text-gradient">{c.headline.value}</span>
                      <span className="ml-1.5 text-sm text-ink-muted">{c.headline.label}</span>
                    </div>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Testimonials — auto-scrolling loop */}
      <Section>
        <SectionHeading eyebrow="Testimonials" title="Teams that switched, stayed" />
        <div className="group mask-fade-x relative mt-12 overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[320px] shrink-0 sm:w-[360px]" aria-hidden={i >= testimonials.length}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <Section tone="subtle">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="From the blog" title="Ideas worth stealing" className="!mx-0" />
            <Button to="/blog" variant="ghost">Read the blog <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.path} delay={i * 0.06}>
                <Link to={p.path} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative h-36 bg-brand-gradient bg-[length:200%_auto]">
                    <div className="absolute inset-0 bg-grid-glow [background-size:24px_24px] opacity-25" />
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

      <Section className="!pt-0">
        <CTABand
          title="Turn your next show into pipeline"
          body="Get a free, targeted sample of verified attendee or exhibitor data — matched to the events that matter to you."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Explore event data', to: '/event-data' }}
        />
      </Section>
    </>
  )
}
