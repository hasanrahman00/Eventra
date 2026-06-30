import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Gradient "E" badge mark + Eventra wordmark.
export default function Logo({ className, light = false }) {
  return (
    <Link to="/" aria-label={`${brand.name} home`} className={cn('group inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0 drop-shadow-[0_6px_16px_rgba(109,91,240,0.5)] transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden="true">
        <defs>
          <linearGradient id="logoE" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6d5bf0" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#logoE)" />
        <g fill="#fff">
          <rect x="23" y="18" width="8" height="28" rx="2" />
          <rect x="23" y="18" width="22" height="8" rx="2" />
          <rect x="23" y="28.5" width="17" height="7" rx="2" />
          <rect x="23" y="38" width="22" height="8" rx="2" />
        </g>
      </svg>
      <span className={cn('font-display text-xl font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
        Event<span className="text-gradient">ra</span>
      </span>
    </Link>
  )
}
