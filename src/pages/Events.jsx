import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Users, ArrowRight, CalendarDays } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { Breadcrumbs, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import useSeo from '../lib/useSeo.js'
import events from '../data/pages/events.js'

export default function Events() {
  useSeo({
    title: 'Upcoming Trade Shows & Events',
    description: 'Browse upcoming trade shows, expos and conferences worldwide and request verified attendee and exhibitor lists for any event.',
  })

  const industries = useMemo(
    () => ['All', ...Array.from(new Set(events.map((e) => e.industry))).sort()],
    [],
  )
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? events : events.filter((e) => e.industry === active)

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-surface-muted bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] opacity-[0.07]" />
        <div className="container-shell relative py-14 lg:py-16">
          <Breadcrumbs trail={[{ label: 'Events' }]} light />
          <div className="mt-5 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
              <CalendarDays className="h-3.5 w-3.5" /> Event calendar
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-balance text-white sm:text-5xl">
              Upcoming trade shows & events
            </h1>
            <p className="mt-4 text-lg text-white/70 text-pretty">
              Browse the shows that matter to your market — then request a verified attendee or exhibitor
              list for any event on the calendar.
            </p>
          </div>
        </div>
      </div>

      <Section>
        {/* Industry filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActive(ind)}
              className={
                'rounded-full px-4 py-2 text-sm font-semibold transition ' +
                (active === ind
                  ? 'bg-ink text-white shadow-soft'
                  : 'border border-surface-muted bg-white text-ink-muted hover:border-ink/20 hover:text-ink')
              }
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e, i) => (
            <Reveal key={e.slug} delay={(i % 3) * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent text-center leading-none text-white">
                    <span className="text-base font-extrabold">{e.date.split(' ')[1]?.replace(/[–—].*/, '') || ''}</span>
                    <span className="text-2xs font-semibold uppercase tracking-wide">{e.month}</span>
                  </span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    {e.industry}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{e.name}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-ink-muted">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-brand-500" /> {e.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-500" /> {e.city} · {e.venue}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-brand-500" /> {e.attendees} expected
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-surface-muted pt-4 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Request attendee list <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-muted">No events found for this filter.</p>
        )}

        <div className="mt-10 rounded-2xl border border-dashed border-surface-muted bg-surface-subtle p-6 text-center">
          <p className="text-ink-muted">
            Don’t see your show?{' '}
            <Link to="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
              Tell us the event
            </Link>{' '}
            and we’ll source a verified list for it.
          </p>
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Turn the next show into pipeline"
          body="Request matched attendee and exhibitor counts for any event — with a free sample to prove the quality."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
