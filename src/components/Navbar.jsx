import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { cn } from '../lib/cn.js'
import { headerNav } from '../data/nav.js'

function isActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(to + '/')
}

function SearchBox({ className }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={cn('flex items-center gap-2 rounded-full bg-white px-3.5 py-2', className)}>
      <Search className="h-4 w-4 text-navy/50" />
      <input className="w-24 bg-transparent text-sm text-navy placeholder:text-navy/40 outline-none xl:w-32" placeholder="Search" aria-label="Search" />
    </form>
  )
}

function MobileMenu({ open, onClose, pathname }) {
  if (typeof document === 'undefined') return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[60] bg-navy text-white lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
            <Logo light />
            <button onClick={onClose} aria-label="Close menu" className="rounded-lg p-2 text-white/80 transition hover:bg-white/10"><X className="h-6 w-6" /></button>
          </div>
          <nav className="px-5 pb-8 pt-2">
            {headerNav.map((item) => (
              <Link key={item.to} to={item.to} onClick={onClose}
                className={cn('flex items-center justify-between border-b border-white/10 py-5 text-lg font-medium transition', isActive(pathname, item.to) ? 'text-accent' : 'text-white hover:text-white/80')}>
                {item.label} <ArrowRight className="h-5 w-5 text-white/30" />
              </Link>
            ))}
            <div className="mt-6"><SearchBox className="w-full" /></div>
            <div className="mt-4"><Button to="/contact" variant="accent" size="lg" onClick={onClose}>Get a free sample <ArrowRight className="h-4 w-4" /></Button></div>
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-lg">
      <div className="container-shell flex h-16 items-center justify-between gap-4 lg:h-[76px]">
        <Logo light />
        <nav className="hidden items-center rounded-full border border-white/10 bg-navy-soft px-2 py-1.5 lg:flex">
          {headerNav.map((item) => {
            const active = isActive(pathname, item.to)
            return (
              <Link key={item.to} to={item.to} aria-current={active ? 'page' : undefined}
                className={cn('relative rounded-full px-4 py-1.5 text-sm font-medium transition', active ? 'text-white' : 'text-white/70 hover:text-white')}>
                {item.label}
                {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent" />}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <SearchBox className="hidden md:flex" />
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </header>
  )
}
