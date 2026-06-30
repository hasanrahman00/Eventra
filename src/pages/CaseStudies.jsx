import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import { caseStudyPosts } from '../data/collections.js'

export default function CaseStudies() {
  useSeo({ title: 'Case Studies', description: 'How teams turn trade shows and events into measurable pipeline with Eventra.' })
  return (
    <>
      <PageHero
        eyebrow="Proof"
        headline="Results, not promises"
        subcopy="How B2B teams turn the guest list into booked meetings and closed revenue with verified event data."
        trail={[{ label: 'Case Studies' }]}
      />
      <Section>
        {caseStudyPosts.length === 0 ? (
          <p className="text-center text-ink-muted">Case studies are on the way.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyPosts.map((c, i) => (
              <Reveal key={c.path} delay={(i % 3) * 0.06}>
                <Link to={c.path} className="group flex h-full flex-col justify-between rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{c.category}</span>
                    <h3 className="mt-4 text-lg font-bold text-ink group-hover:text-brand-700">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">{c.excerpt}</p>
                  </div>
                  {c.headline && (
                    <div className="mt-5 flex items-end justify-between border-t border-surface-muted pt-4">
                      <span><span className="font-display text-3xl font-extrabold text-gradient">{c.headline.value}</span> <span className="text-sm text-ink-muted">{c.headline.label}</span></span>
                      <ArrowRight className="h-4 w-4 text-ink-muted transition group-hover:translate-x-0.5 group-hover:text-brand-600" />
                    </div>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
