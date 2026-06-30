import { Breadcrumbs } from './blocks.jsx'
import Reveal from './Reveal.jsx'
import { cn } from '../lib/cn.js'

// Light inner-page hero with breadcrumb, eyebrow, headline, highlights and an
// optional side slot (e.g. a lead form).
export default function PageHero({ eyebrow, headline, subcopy, trail = [], highlights = [], side }) {
  return (
    <section className="relative overflow-hidden border-b border-surface-muted bg-surface-subtle">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(110%_90%_at_50%_0%,#000,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
      <div className={cn('container-shell relative grid items-center gap-12 py-14 lg:py-20', side && 'lg:grid-cols-[1.1fr_0.9fr]')}>
        <Reveal>
          {trail.length > 0 && <Breadcrumbs trail={trail} />}
          {eyebrow && (
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-surface-muted bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance text-ink sm:text-5xl">{headline}</h1>
          {subcopy && <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">{subcopy}</p>}
          {highlights.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {highlights.map((h) => (
                <li key={h} className="rounded-full border border-surface-muted bg-white px-3 py-1.5 text-xs font-semibold text-ink-muted shadow-soft">{h}</li>
              ))}
            </ul>
          )}
        </Reveal>
        {side && <Reveal delay={0.12}>{side}</Reveal>}
      </div>
    </section>
  )
}
