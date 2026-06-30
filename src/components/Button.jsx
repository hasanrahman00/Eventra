import { Link } from 'react-router-dom'
import { cn } from '../lib/cn.js'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:opacity-60'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variants = {
  primary: 'bg-brand-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-700',
  accent: 'bg-accent text-night shadow-[0_14px_40px_-16px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 hover:bg-accent-soft',
  gradient: 'bg-brand-gradient bg-[length:200%_auto] text-white shadow-glow hover:-translate-y-0.5 hover:bg-right',
  outline: 'border border-surface-muted bg-white text-ink hover:border-brand-300 hover:text-brand-700',
  ghost: 'text-brand-700 hover:bg-brand-50',
  light: 'bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50',
}

export default function Button({
  children, to, href, variant = 'primary', size = 'md', className, ...props
}) {
  const cls = cn(base, sizes[size], variants[variant], className)
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
