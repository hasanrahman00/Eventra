import { Link } from 'react-router-dom'
import { cn } from '../lib/cn.js'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variants = {
  // green submit / primary CTA
  accent: 'bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:bg-accent-soft',
  // blue
  primary: 'bg-brand-600 text-white hover:-translate-y-0.5 hover:bg-brand-500',
  // dark navy secondary (e.g. "Browse more events")
  navy: 'border border-white/10 bg-navy text-white hover:-translate-y-0.5 hover:bg-navy-soft',
  gradient: 'bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:bg-accent-soft',
  outline: 'border border-white/25 text-white hover:border-accent hover:text-accent',
  ghost: 'text-white/80 hover:bg-white/10',
  light: 'bg-white text-navy hover:-translate-y-0.5 hover:bg-white/90',
}

export default function Button({
  children, to, href, variant = 'accent', size = 'md', className, ...props
}) {
  const cls = cn(base, sizes[size], variants[variant], className)
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
