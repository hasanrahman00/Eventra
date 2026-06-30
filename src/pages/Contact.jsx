import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import LeadForm from '../components/LeadForm.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const tel = brand.phone.replace(/[^+\d]/g, '')

export default function Contact() {
  useSeo({ title: 'Contact', description: `Talk to ${brand.name} about verified event data, enrichment and event marketing.` })
  const infoCards = [
    { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
    { icon: Phone, label: 'Phone', value: brand.phone, href: `tel:${tel}` },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri · 8am–7pm across US, UK & APAC' },
  ]

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        headline="Let’s build your event pipeline"
        subcopy="Tell us the shows and audience that matter to you. We’ll come back with matched counts, a free sample and a plan — within one business day."
        trail={[{ label: 'Contact' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="space-y-3">
              {infoCards.map((c) => {
                const Icon = c.icon
                const body = (
                  <div className="flex items-center gap-3.5 rounded-2xl border border-surface-muted bg-white px-4 py-3.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                    <span>
                      <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">{c.label}</span>
                      <span className="block text-sm font-semibold text-ink">{c.value}</span>
                    </span>
                  </div>
                )
                return c.href ? <a key={c.label} href={c.href} className="block">{body}</a> : <div key={c.label}>{body}</div>
              })}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {brand.offices.map((o) => (
                <div key={o.city} className="rounded-2xl border border-surface-muted bg-surface-subtle p-4">
                  <MapPin className="h-4 w-4 text-brand-600" />
                  <div className="mt-2 text-sm font-bold text-ink">{o.label}</div>
                  <div className="text-xs text-ink-muted">{o.city}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm title="Tell us what you need" subtitle="Share your target events and audience — a data strategist replies within one business day." cta="Send my request" />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
