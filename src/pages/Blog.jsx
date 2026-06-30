import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import { blogPosts } from '../data/collections.js'

export default function Blog() {
  useSeo({ title: 'Blog', description: 'Playbooks and ideas for turning trade shows and events into pipeline.' })
  return (
    <>
      <PageHero
        eyebrow="Resources"
        headline="The Eventra blog"
        subcopy="Playbooks, benchmarks and field notes for marketers turning events into pipeline."
        trail={[{ label: 'Blog' }]}
      />
      <Section>
        {blogPosts.length === 0 ? (
          <p className="text-center text-ink-muted">New articles are on the way.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p, i) => (
              <Reveal key={p.path} delay={(i % 3) * 0.06}>
                <Link to={p.path} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative h-36 bg-brand-gradient bg-[length:200%_auto]">
                    <div className="absolute inset-0 bg-grid-glow [background-size:24px_24px] opacity-25" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">{p.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-ink group-hover:text-brand-700">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">{p.excerpt}</p>
                    <span className="mt-3 text-xs text-ink-muted">{[p.author, p.date].filter(Boolean).join(' · ')}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
