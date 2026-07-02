import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CalendarDays, MapPin, Search, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'

const PER_PAGE = 20

// "Jun/27/2026" -> { mon, day, year }
function parse(d) {
  const [mon, day, year] = (d || '').split('/')
  return { mon, day: day ? String(Number(day)) : '', year }
}
function dateRange(start, end) {
  const s = parse(start), e = parse(end)
  if (!s.mon) return ''
  if (!e.mon || (s.mon === e.mon && s.day === e.day && s.year === e.year)) return `${s.mon} ${s.day}, ${s.year}`
  if (s.year === e.year && s.mon === e.mon) return `${s.mon} ${s.day} – ${e.day}, ${s.year}`
  if (s.year === e.year) return `${s.mon} ${s.day} – ${e.mon} ${e.day}, ${s.year}`
  return `${s.mon} ${s.day}, ${s.year} – ${e.mon} ${e.day}, ${e.year}`
}

function pageList(cur, total) {
  const out = []
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || (p >= cur - 1 && p <= cur + 1)) out.push(p)
    else if (out[out.length - 1] !== '…') out.push('…')
  }
  return out
}

export default function Events() {
  useSeo({ title: 'Events', description: 'Browse 4,000+ trade shows, expos and conferences — and request a verified attendee or exhibitor list for any of them.' })
  const [all, setAll] = useState(null)
  const [params, setParams] = useSearchParams()
  const page = Math.max(1, parseInt(params.get('page') || '1', 10) || 1)
  const q = params.get('q') || ''
  const [query, setQuery] = useState(q)

  useEffect(() => {
    let live = true
    fetch('/events.json').then((r) => r.json()).then((d) => { if (live) setAll(d) }).catch(() => setAll([]))
    return () => { live = false }
  }, [])

  const filtered = useMemo(() => {
    if (!all) return []
    const needle = q.trim().toLowerCase()
    if (!needle) return all
    return all.filter((e) => e.name.toLowerCase().includes(needle) || e.location.toLowerCase().includes(needle))
  }, [all, q])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
  const current = Math.min(page, totalPages)
  const startIdx = (current - 1) * PER_PAGE
  const slice = filtered.slice(startIdx, startIdx + PER_PAGE)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [current, q])

  const goto = (p) => setParams((prev) => { const n = new URLSearchParams(prev); n.set('page', String(p)); return n }, { replace: false })
  const submitSearch = (e) => {
    e.preventDefault()
    setParams((prev) => {
      const n = new URLSearchParams(prev)
      if (query.trim()) n.set('q', query.trim()); else n.delete('q')
      n.set('page', '1')
      return n
    })
  }

  return (
    <>
      <PageHero
        eyebrow="Events"
        headline="Find your buyers at the world’s events"
        subcopy="Browse 4,000+ trade shows, expos and conferences. Pick any event and request a verified, opt-in attendee or exhibitor list built around your target audience."
        trail={[{ label: 'Events' }]}
        highlights={['4,000+ events', '150+ countries', 'Verified attendee data']}
      />

      <Section>
        {/* Search */}
        <form onSubmit={submitSearch} className="mx-auto mb-10 flex max-w-xl items-center gap-2 rounded-full border border-accent/60 bg-navy-soft px-4 py-2">
          <Search className="h-4 w-4 text-accent" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events by name or location…"
            aria-label="Search events"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
          />
          <button type="submit" className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-accent-soft">Search</button>
        </form>

        {all === null ? (
          <div className="flex items-center justify-center gap-2 py-20 text-ink-muted"><Loader2 className="h-5 w-5 animate-spin" /> Loading events…</div>
        ) : total === 0 ? (
          <p className="py-20 text-center text-ink-muted">No events match “{q}”. <button onClick={() => { setQuery(''); setParams({}) }} className="font-semibold text-accent">Clear search</button></p>
        ) : (
          <>
            <p className="mb-6 text-center text-sm text-ink-muted">
              Showing <span className="font-semibold text-white">{startIdx + 1}–{Math.min(startIdx + PER_PAGE, total)}</span> of <span className="font-semibold text-white">{total.toLocaleString()}</span> events{q && <> for “<span className="text-white">{q}</span>”</>}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {slice.map((e, i) => (
                <Reveal key={startIdx + i} delay={(i % 4) * 0.04}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:border-accent/50">
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                      <CalendarDays className="h-3.5 w-3.5" /> {dateRange(e.start, e.end)}
                    </span>
                    <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-snug text-white">{e.name}</h3>
                    <p className="mt-2 flex items-start gap-1.5 text-sm leading-snug text-ink-muted">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" /> {e.location}
                    </p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Get attendee list <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-1.5">
                <button onClick={() => goto(current - 1)} disabled={current === 1} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-card text-white/80 transition hover:border-accent/50 hover:text-white disabled:opacity-40" aria-label="Previous page">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {pageList(current, totalPages).map((p, i) =>
                  p === '…' ? (
                    <span key={`e${i}`} className="px-2 text-white/40">…</span>
                  ) : (
                    <button key={p} onClick={() => goto(p)} aria-current={p === current ? 'page' : undefined}
                      className={p === current
                        ? 'h-9 min-w-9 rounded-lg bg-accent px-2 text-sm font-semibold text-white'
                        : 'h-9 min-w-9 rounded-lg border border-white/10 bg-card px-2 text-sm font-medium text-white/80 transition hover:border-accent/50 hover:text-white'}>
                      {p}
                    </button>
                  ),
                )}
                <button onClick={() => goto(current + 1)} disabled={current === totalPages} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-card text-white/80 transition hover:border-accent/50 hover:text-white disabled:opacity-40" aria-label="Next page">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </nav>
            )}
          </>
        )}
      </Section>
    </>
  )
}
