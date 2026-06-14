import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Inline SVG mark + wordmark so the logo scales crisply and themes via currentColor.
export default function Logo({ className, mark = true, light = false }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5', className)} aria-label={`${brand.name} home`}>
      {mark && (
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink shadow-soft">
          <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden="true">
            <defs>
              <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#a78bfa" />
                <stop offset="1" stopColor="#f5a524" />
              </linearGradient>
            </defs>
            <path d="M32 13c-9 0-16 7-16 16 0 11 16 23 16 23s16-12 16-23c0-9-7-16-16-16z" fill="url(#logoG)" />
            <circle cx="32" cy="29" r="6" fill="#0b1020" />
          </svg>
        </span>
      )}
      <span className={cn('font-display text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
        {brand.name}
      </span>
    </Link>
  )
}
