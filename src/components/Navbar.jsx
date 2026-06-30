import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { cn } from '../lib/cn.js'
import { headerNav } from '../data/nav.js'

function isActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(to + '/')
}

function MobileMenu({ open, onClose, pathname }) {
  if (typeof document === 'undefined') return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-night text-white lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
            <Logo light />
            <button onClick={onClose} aria-label="Close menu" className="rounded-lg p-2 text-white/80 transition hover:bg-white/10"><X className="h-6 w-6" /></button>
          </div>
          <nav className="px-5 pb-8 pt-2">
            {headerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-between border-b border-white/10 py-5 text-lg font-semibold transition',
                  isActive(pathname, item.to) ? 'text-accent-soft' : 'text-white hover:text-white/80',
                )}
              >
                {item.label} <ArrowRight className="h-5 w-5 text-white/30" />
              </Link>
            ))}
            <div className="mt-8">
              <Button to="/contact" variant="accent" size="lg" onClick={onClose}>Get a free sample <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMobileOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/95 backdrop-blur-lg">
      <div className="container-shell flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo light />
        <nav className="hidden items-center gap-1 lg:flex">
          {headerNav.map((item) => {
            const active = isActive(pathname, item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={cn('relative rounded-lg px-3.5 py-2 text-sm font-medium transition', active ? 'text-white' : 'text-white/70 hover:text-white')}
              >
                {item.label}
                {active && <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-accent" />}
              </Link>
            )
          })}
        </nav>
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </header>
  )
}
