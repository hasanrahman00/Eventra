import { Section } from '../components/Section.jsx'
import { Breadcrumbs, CTABand, StatGrid } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import { Quote } from 'lucide-react'

const kindMeta = {
  blog: { label: 'Blog', base: '/blog' },
  'case-study': { label: 'Case Study', base: '/case-studies' },
}

export default function ArticleTemplate({ page }) {
  useSeo({ title: page.title, description: page.excerpt })
  const meta = kindMeta[page.kind] || kindMeta.blog
  const trail = [{ label: meta.label, to: meta.base }, { label: page.title }]

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div className="container-shell relative py-14 lg:py-16">
          <Breadcrumbs trail={trail} light />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent-soft">{page.category}</span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">{page.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/60">
            {page.author && <span>{page.author}</span>}
            {page.date && <span>{page.date}</span>}
            {page.readMins && <span>{page.readMins} min read</span>}
          </div>
        </div>
      </section>

      {/* Results band (case studies) */}
      {page.metrics?.length > 0 && (
        <Section tone="subtle" className="!py-12">
          <StatGrid stats={page.metrics} />
        </Section>
      )}

      {/* Body */}
      <Section>
        <div className="mx-auto max-w-3xl">
          {page.excerpt && <p className="text-xl font-medium leading-relaxed text-ink">{page.excerpt}</p>}
          {(page.sections || []).map((s, i) => (
            <Reveal key={i} className="mt-10">
              {s.heading && <h2 className="text-2xl font-bold tracking-tight text-ink">{s.heading}</h2>}
              {(s.paras || []).map((p, j) => <p key={j} className="mt-4 leading-relaxed text-ink-muted">{p}</p>)}
              {s.bullets?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-3 text-ink-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{b}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {page.quote && (
            <figure className="mt-12 rounded-2xl border border-surface-muted bg-surface-subtle p-7">
              <Quote className="h-8 w-8 text-brand-300" />
              <blockquote className="mt-3 text-lg font-medium leading-relaxed text-ink">“{page.quote.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-ink-muted"><span className="font-bold text-ink">{page.quote.name}</span>, {page.quote.role}{page.quote.company ? `, ${page.quote.company}` : ''}</figcaption>
            </figure>
          )}
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Put verified event data behind your next campaign"
          body="Tell us the shows and audience you’re targeting — we’ll send matched counts and a free sample."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Explore event data', to: '/event-data' }}
        />
      </Section>
    </>
  )
}
