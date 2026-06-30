import { cn } from '../lib/cn.js'
import Reveal from './Reveal.jsx'

const tones = {
  default: 'bg-surface text-ink',
  subtle: 'bg-surface-subtle text-ink',
  muted: 'bg-surface-muted text-ink',
  night: 'bg-night text-white',
}

export function Section({ children, className, tone = 'default', id }) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
      <div className="container-shell">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow, title, description, align = 'center', light = false, className,
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className={cn('eyebrow', light && 'text-accent-soft', align === 'center' && 'justify-center')}>
          <span className={cn('h-px w-6', light ? 'bg-accent-soft/50' : 'bg-brand-400/50')} />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={cn('mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl', light ? 'text-white' : 'text-ink')}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn('mt-4 text-lg leading-relaxed text-pretty', light ? 'text-white/70' : 'text-ink-muted')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default Section
