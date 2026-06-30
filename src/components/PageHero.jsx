import { Breadcrumbs } from './blocks.jsx'
import Reveal from './Reveal.jsx'
import { cn } from '../lib/cn.js'

// Inner-page hero on the charcoal background with a blue accent bar heading.
export default function PageHero({ eyebrow, headline, subcopy, trail = [], highlights = [], side }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow [background-size:46px_46px] opacity-40 [mask-image:radial-gradient(110%_90%_at_50%_0%,#000,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
      <div className={cn('container-shell relative grid items-center gap-12 py-14 lg:py-20', side && 'lg:grid-cols-[1.1fr_0.9fr]')}>
        <Reveal>
          {trail.length > 0 && <Breadcrumbs trail={trail} />}
          <div className="mt-5 border-l-4 border-brand-500 pl-4">
            {eyebrow && (
              <span className="eyebrow">{eyebrow}</span>
            )}
            <h1 className="mt-2 text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl">{headline}</h1>
          </div>
          {subcopy && <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">{subcopy}</p>}
          {highlights.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {highlights.map((h) => (
                <li key={h} className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">{h}</li>
              ))}
            </ul>
          )}
        </Reveal>
        {side && <Reveal delay={0.12}>{side}</Reveal>}
      </div>
    </section>
  )
}
