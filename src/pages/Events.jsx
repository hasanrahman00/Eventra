import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Search, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import useSeo from '../lib/useSeo.js'
import { cn } from '../lib/cn.js'

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
  const navigate = useNavigate()
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

  const goto = (p) => setParams((prev) => { const n = new URLSearchParams(prev); n.set('page', String(p)); return n })
  const submitSearch = (e) => {
    e.preventDefault()
    setParams((prev) => {
      const n = new URLSearchParams(prev)
      if (query.trim()) n.set('q', query.trim()); else n.delete('q')
      n.set('page', '1')
      return n
    })
  }

  const th = 'px-5 py-4 text-left text-sm font-semibold text-brand-400 sm:text-base'
  const td = 'px-5 py-4 align-top text-sm'

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

            {/* Static table — no inner scroll */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-soft">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-white/10 bg-navy-soft">
                    <th className={cn(th, 'w-1/2')}>Name</th>
                    <th className={cn(th, 'hidden w-1/4 sm:table-cell')}>Date</th>
                    <th className={cn(th, 'w-1/2 sm:w-1/4')}>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {slice.map((e, i) => (
                    <tr
                      key={startIdx + i}
                      onClick={() => navigate('/contact')}
                      className={cn('cursor-pointer border-b border-white/5 transition last:border-0 hover:bg-brand-600/10', i % 2 && 'bg-navy-soft/40')}
                    >
                      <td className={td}>
                        <Link to="/contact" onClick={(ev) => ev.stopPropagation()} className="font-semibold leading-snug text-white hover:text-accent sm:text-base">{e.name}</Link>
                        <span className="mt-1 block text-xs text-ink-muted sm:hidden">{dateRange(e.start, e.end)}</span>
                      </td>
                      <td className={cn(td, 'hidden text-ink-muted sm:table-cell')}>{dateRange(e.start, e.end)}</td>
                      <td className={cn(td, 'text-ink-muted')}>{e.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-1.5">
                <button onClick={() => goto(current - 1)} disabled={current === 1} className="inline-flex h-9 items-center gap-1 rounded-lg border border-white/10 bg-card px-3 text-sm font-medium text-white/80 transition hover:border-accent/50 hover:text-white disabled:opacity-40">
                  <ChevronLeft className="h-4 w-4" /> Previous
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
                <button onClick={() => goto(current + 1)} disabled={current === totalPages} className="inline-flex h-9 items-center gap-1 rounded-lg border border-white/10 bg-card px-3 text-sm font-medium text-white/80 transition hover:border-accent/50 hover:text-white disabled:opacity-40">
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </nav>
            )}
          </>
        )}
      </Section>
    </>
  )
}
