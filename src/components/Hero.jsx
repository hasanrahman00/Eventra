import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, CalendarDays, Check, Sparkles } from 'lucide-react'
import Button from './Button.jsx'
import brand from '../site/brand.js'

const EASE = [0.22, 1, 0.36, 1]

const rows = [
  { n: 'A. Chen', r: 'VP Engineering', c: 'Northwind' },
  { n: 'M. Okafor', r: 'Head of Procurement', c: 'Brightloom' },
  { n: 'S. Patel', r: 'Director, Operations', c: 'Cadence' },
  { n: 'L. Romano', r: 'CTO', c: 'Kestrel' },
]

function MiniCard({ children, className, delay = 0, dur = 5, reduce }) {
  return (
    <motion.div
      animate={reduce ? {} : { y: [0, -10, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
      className={'absolute rounded-2xl border border-surface-muted bg-white p-3 shadow-lift ' + className}
    >
      {children}
    </motion.div>
  )
}

function HeroVisual({ reduce }) {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-accent/20 blur-2xl" />
      <motion.div
        animate={reduce ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-3xl border border-surface-muted bg-white p-5 shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-surface-muted pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-ink"><CalendarDays className="h-4 w-4 text-brand-600" /> Global Tech Expo ’26</div>
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">12,480 attendees</span>
        </div>
        <div className="mt-3 space-y-2">
          {rows.map((row) => (
            <div key={row.n} className="flex items-center justify-between rounded-xl bg-surface-subtle px-3 py-2.5">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">{row.n.split(' ').map((p) => p[0]).join('')}</div>
                <div>
                  <div className="text-sm font-semibold text-ink">{row.n}</div>
                  <div className="text-xs text-ink-muted">{row.r} · {row.c}</div>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-accent-deep"><BadgeCheck className="h-4 w-4" /> Verified</span>
            </div>
          ))}
        </div>
      </motion.div>

      <MiniCard reduce={reduce} delay={0.4} dur={5.4} className="left-[-7%] bottom-[18%] w-36">
        <div className="text-2xs font-semibold uppercase tracking-wide text-ink-muted">Deliverability</div>
        <div className="mt-1 flex items-end gap-2"><span className="font-display text-2xl font-extrabold text-gradient">96%</span><span className="mb-1 text-2xs text-ink-muted">SLA</span></div>
      </MiniCard>

      <MiniCard reduce={reduce} delay={1.1} dur={6} className="right-[-6%] top-[10%] w-32">
        <div className="mb-1 text-2xs font-semibold uppercase tracking-wide text-ink-muted">Audience</div>
        <svg viewBox="0 0 36 36" className="mx-auto h-12 w-12">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#e9e7f8" strokeWidth="5" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#6d5bf0" strokeWidth="5" strokeDasharray="58 88" strokeLinecap="round" transform="rotate(-90 18 18)" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="26 120" strokeDashoffset="-58" strokeLinecap="round" transform="rotate(-90 18 18)" />
        </svg>
      </MiniCard>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const appear = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduce ? 0 : delay, ease: EASE },
  })

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-60 [mask-image:radial-gradient(120%_90%_at_50%_10%,#000,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-10 h-80 w-80 rounded-full bg-brand-100 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-shell relative grid items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <motion.span {...appear(0.05)} className="inline-flex items-center gap-2 rounded-full border border-surface-muted bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            <Sparkles className="h-3.5 w-3.5" /> Verified trade-show & event data
          </motion.span>
          <motion.h1 {...appear(0.15)} className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
            Turn every trade show into <span className="text-gradient">predictable pipeline</span>
          </motion.h1>
          <motion.p {...appear(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">
            {brand.name} gives B2B teams verified attendee, exhibitor and visitor contact data from 40,000+ events — so you reach the right buyers before, during and after every show.
          </motion.p>
          <motion.div {...appear(0.42)} className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="gradient" size="lg">Get a free sample <ArrowRight className="h-4 w-4" /></Button>
            <Button to="/event-data" variant="outline" size="lg">Explore event data</Button>
          </motion.div>
          <motion.ul {...appear(0.55)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {['No commitment', '96% deliverability SLA', 'Opt-in & compliant'].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-accent-deep" strokeWidth={3} /> {t}</li>
            ))}
          </motion.ul>
        </div>
        <motion.div initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: reduce ? 0 : 0.3, ease: EASE }}>
          <HeroVisual reduce={reduce} />
        </motion.div>
      </div>
    </section>
  )
}
