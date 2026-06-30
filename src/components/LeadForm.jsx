import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '../lib/cn.js'

// Lead-capture form. Shows a success state on submit (no backend wired yet —
// swap handleSubmit for a real endpoint when an inbox is connected).
export default function LeadForm({
  title = 'Request counts & a free sample',
  subtitle = 'Tell us the events and audience you want — we’ll reply with matched counts and a sample within one business day.',
  cta = 'Get my free sample',
  compact = false,
  className,
}) {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.currentTarget.company_website?.value) return // honeypot
    setStatus('loading')
    setTimeout(() => setStatus('done'), 800)
  }

  if (status === 'done') {
    return (
      <div className={cn('rounded-2xl border border-surface-muted bg-white p-7 text-center shadow-lift', className)}>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent-deep">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-ink">Request received</h3>
        <p className="mt-1.5 text-sm text-ink-muted">Thanks — an event-data strategist will reach out shortly with your matched counts and a free sample.</p>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-surface-muted bg-surface-subtle px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100'

  return (
    <form onSubmit={handleSubmit} className={cn('rounded-2xl border border-surface-muted bg-white p-6 shadow-lift', className)}>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
      <div className="mt-5 grid gap-3">
        <div className={cn('grid gap-3', !compact && 'sm:grid-cols-2')}>
          <input className={field} name="email" type="email" required placeholder="Work email" aria-label="Work email" />
          <input className={field} name="company" type="text" placeholder="Company" aria-label="Company" />
        </div>
        <input className={field} name="events" type="text" placeholder="Events or audience (e.g. CES attendees)" aria-label="Events or audience" />
        {!compact && (
          <textarea className={cn(field, 'min-h-[84px] resize-none')} name="message" placeholder="Anything else we should know?" aria-label="Message" />
        )}
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient bg-[length:200%_auto] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-right disabled:opacity-70"
        >
          {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>{cta} <ArrowRight className="h-4 w-4" /></>}
        </button>
        <p className="text-center text-2xs text-ink-muted">No spam. By submitting you agree to our privacy policy.</p>
      </div>
    </form>
  )
}
