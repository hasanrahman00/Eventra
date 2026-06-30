import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react'
import { cn } from '../lib/cn.js'

const listOptions = [
  'Attendee email list', 'Exhibitor email list', 'Visitor data', 'Data verification',
  'Data enrichment', 'Pre/post-show marketing', 'Not sure yet',
]
const dialCodes = ['+1', '+44', '+61', '+91', '+65', '+49', '+33', '+971']

// Lead-capture form styled per the dark design system: navy panel, blue
// outline, green field borders and a green submit button. Client-side only.
export default function LeadForm({
  title = 'Get in touch with us!',
  subtitle = 'Tell us the events and audience you want — we’ll reply with matched counts and a free sample.',
  cta = 'Submit',
  compact = false,
  className,
}) {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.currentTarget.company_website?.value) return
    setStatus('loading')
    setTimeout(() => setStatus('done'), 800)
  }

  if (status === 'done') {
    return (
      <div className={cn('rounded-2xl border-2 border-brand-500/60 bg-card p-7 text-center shadow-lift', className)}>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-white">Request received</h3>
        <p className="mt-1.5 text-sm text-ink-muted">Thanks — an event-data strategist will reach out shortly with your matched counts and a free sample.</p>
      </div>
    )
  }

  const field =
    'w-full rounded-lg border border-accent/60 bg-navy-soft px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30'

  return (
    <form onSubmit={handleSubmit} className={cn('rounded-2xl border-2 border-brand-500/60 bg-card p-6 shadow-lift', className)}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
      <div className="mt-5 grid gap-3">
        <input className={field} name="name" type="text" required placeholder="Full name" aria-label="Full name" />
        <input className={field} name="email" type="email" required placeholder="Business email" aria-label="Business email" />
        <div className="grid grid-cols-[88px_1fr] gap-2">
          <select className={cn(field, 'px-2')} name="dial" aria-label="Country code" defaultValue="+1">
            {dialCodes.map((d) => <option key={d} className="bg-navy-soft">{d}</option>)}
          </select>
          <input className={field} name="phone" type="tel" placeholder="Phone number" aria-label="Phone number" />
        </div>
        <select className={field} name="list" aria-label="What list are you looking for?" defaultValue="">
          <option value="" disabled className="bg-navy-soft">What list are you looking for?</option>
          {listOptions.map((o) => <option key={o} className="bg-navy-soft">{o}</option>)}
        </select>
        {!compact && (
          <textarea className={cn(field, 'min-h-[84px] resize-none')} name="requirements" placeholder="Your requirements" aria-label="Requirements" />
        )}
        <label className="flex items-start gap-2.5 text-xs text-ink-muted">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-navy-soft accent-accent" />
          I agree to be contacted about my request and accept the privacy policy.
        </label>
        <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-navy-soft px-3 py-2.5 text-xs text-ink-muted">
          <input type="checkbox" className="h-4 w-4 accent-accent" aria-label="I'm not a robot" />
          <ShieldCheck className="h-4 w-4 text-accent" /> I’m not a robot
        </div>
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-soft disabled:opacity-70"
        >
          {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>{cta} <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
    </form>
  )
}
