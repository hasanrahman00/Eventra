import { cn } from '../lib/cn.js'
import Reveal from './Reveal.jsx'

const tones = {
  default: 'bg-surface text-ink',
  subtle: 'bg-surface-subtle text-ink',
  muted: 'bg-navy-soft text-ink',
  night: 'bg-navy text-ink',
}

export function Section({ children, className, tone = 'default', id }) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
      <div className="container-shell">{children}</div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  const left = align === 'left'
  return (
    <Reveal className={cn('max-w-2xl', left ? 'text-left' : 'mx-auto text-center', className)}>
      <div className={cn(left && 'accent-bar')}>
        {eyebrow && (
          <span className={cn('eyebrow', !left && 'justify-center')}>
            {!left && <span className="h-px w-6 bg-accent/50" />}
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
        )}
      </div>
      {description && <p className="mt-4 text-lg leading-relaxed text-ink-muted text-pretty">{description}</p>}
    </Reveal>
  )
}

export default Section
