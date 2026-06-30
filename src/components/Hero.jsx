import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Button from './Button.jsx'
import LeadForm from './LeadForm.jsx'
import brand from '../site/brand.js'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()
  const appear = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduce ? 0 : delay, ease: EASE },
  })

  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-glow [background-size:46px_46px] opacity-40 [mask-image:radial-gradient(120%_90%_at_50%_10%,#000,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-10 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-shell relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <motion.div {...appear(0.1)} className="border-l-4 border-brand-500 pl-4">
            <span className="eyebrow">Verified trade-show & event data</span>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.2rem]">
              Expo, trade show & conference attendee email lists
            </h1>
          </motion.div>
          <motion.div {...appear(0.28)} className="mt-6 border-l-4 border-accent pl-4">
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">
              {brand.name} gives B2B teams verified attendee, exhibitor and visitor contact data from 40,000+ events — so you reach the right buyers before, during and after every show.
            </p>
          </motion.div>
          <motion.div {...appear(0.42)} className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="accent" size="lg">Get a free sample <ArrowRight className="h-4 w-4" /></Button>
            <Button to="/event-data" variant="navy" size="lg">Explore event data</Button>
          </motion.div>
          <motion.ul {...appear(0.55)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {['No commitment', '96% deliverability SLA', 'Opt-in & compliant'].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-accent" strokeWidth={3} /> {t}</li>
            ))}
          </motion.ul>
        </div>
        <motion.div {...appear(0.3)}>
          <LeadForm compact />
        </motion.div>
      </div>
    </section>
  )
}
