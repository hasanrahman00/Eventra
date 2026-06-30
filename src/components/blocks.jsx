import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Check, ArrowRight, Quote, Plus, Minus, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { getIcon } from '../lib/icons.js'
import { cn } from '../lib/cn.js'

/* ---------- Breadcrumbs ---------- */
export function Breadcrumbs({ trail = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
      <Link to="/" className="transition hover:text-accent">Home</Link>
      {trail.map((t, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          {t.to && i < trail.length - 1 ? (
            <Link to={t.to} className="transition hover:text-accent">{t.label}</Link>
          ) : (
            <span className="text-white">{t.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

/* ---------- Count-up number ---------- */
export function Counter({ value, className, duration = 1400 }) {
  const ref = useRef(null)
  const m = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/)
  const prefix = m ? m[1] : ''
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : 0
  const suffix = m ? m[3] : ''
  const decimals = m && m[2].includes('.') ? 1 : 0
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!ref.current || !m) return
    let raf, start
    const obs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      obs.disconnect()
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setN(target * eased)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    obs.observe(ref.current)
    return () => { obs.disconnect(); cancelAnimationFrame(raf) }
  }, [target, duration]) // eslint-disable-line

  return (
    <span ref={ref} className={className}>
      {prefix}{n.toFixed(decimals)}{suffix}
    </span>
  )
}

/* ---------- Stat grid (animated) ---------- */
export function StatGrid({ stats = [], className }) {
  if (!stats.length) return null
  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06}>
          <div className="rounded-2xl border border-white/10 bg-card p-6 text-center shadow-soft">
            <Counter value={s.value} className="block font-display text-4xl font-bold tracking-tight text-white" />
            <div className="mt-1.5 text-sm text-ink-muted">{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- Feature cards (green-outline icons) ---------- */
export function FeatureCards({ items = [], columns = 3 }) {
  const cols = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }
  return (
    <div className={cn('grid gap-5', cols[columns])}>
      {items.map((f, i) => {
        const Icon = getIcon(f.icon)
        return (
          <Reveal key={f.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-white/10 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/50">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl border-2 border-accent text-accent transition group-hover:bg-accent group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.body}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ---------- Check list ---------- */
export function CheckList({ items = [], columns = 2, className }) {
  return (
    <ul className={cn('grid gap-x-8 gap-y-3', columns === 2 && 'sm:grid-cols-2', className)}>
      {items.map((b, i) => (
        <Reveal as="li" key={i} delay={i * 0.03} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-sm leading-relaxed text-white/80">{b}</span>
        </Reveal>
      ))}
    </ul>
  )
}

/* ---------- Steps ---------- */
export function Steps({ steps = [] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 0.06} className="relative">
          <div className="font-display text-5xl font-bold leading-none text-gradient opacity-80">{String(i + 1).padStart(2, '0')}</div>
          <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{s.body}</p>
        </Reveal>
      ))}
    </ol>
  )
}

/* ---------- FAQ (navy items, green outline) ---------- */
export function FAQ({ items = [] }) {
  const [open, setOpen] = useState(0)
  if (!items.length) return null
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={cn('overflow-hidden rounded-xl border bg-card transition', isOpen ? 'border-accent/60' : 'border-white/10')}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
              <span className="text-base font-medium text-white">{f.q}</span>
              <span className={cn('grid h-7 w-7 shrink-0 place-items-center rounded-full border', isOpen ? 'border-accent text-accent' : 'border-white/20 text-white/70')}>
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Testimonial card (5-star) ---------- */
export function TestimonialCard({ quote, name, role, company, avatar }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
      <div className="flex gap-0.5 text-[#f5b50a]">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
      </div>
      <Quote className="mt-3 h-6 w-6 text-brand-400" />
      <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-white/85">“{quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        {avatar ? (
          <img src={avatar} alt={name} loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" />
        ) : (
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-xs font-semibold text-white">
            {name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
          </span>
        )}
        <span>
          <span className="block text-sm font-semibold text-white">{name}</span>
          <span className="block text-xs text-ink-muted">{role}{company ? `, ${company}` : ''}</span>
        </span>
      </figcaption>
    </figure>
  )
}

/* ---------- CTA band ---------- */
export function CTABand({ title, body, primary, secondary }) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-navy px-6 py-12 text-white sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-green-radial" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {body && <p className="mt-2 text-white/70">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {primary && <Button to={primary.to} variant="accent" size="lg">{primary.label} <ArrowRight className="h-4 w-4" /></Button>}
          {secondary && <Button to={secondary.to} variant="outline" size="lg">{secondary.label}</Button>}
        </div>
      </div>
    </div>
  )
}

/* ---------- Marquee ---------- */
export function Marquee({ items = [], className }) {
  return (
    <div className="group mask-fade-x overflow-hidden">
      <div className={cn('flex w-max items-center gap-12 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none', className)}>
        {[...items, ...items].map((c, i) => (
          <span key={i} aria-hidden={i >= items.length} className="shrink-0 font-display text-xl font-bold tracking-tight text-white/30">{c}</span>
        ))}
      </div>
    </div>
  )
}
