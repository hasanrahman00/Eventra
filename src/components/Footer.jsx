import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Facebook, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import brand from '../site/brand.js'
import { solutionLinks, eventDataHubs, resourceLinks, companyLinks, legalLinks } from '../data/nav.js'

const iconMap = { Linkedin, Twitter, Youtube, Facebook }

function Column({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-white/55 transition hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = 2026
  return (
    <footer className="bg-night text-white">
      <div className="container-shell">
        <div className="relative -mb-px overflow-hidden rounded-t-4xl border border-white/10 bg-brand-gradient bg-[length:200%_auto] px-6 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Turn your next show into pipeline</h3>
              <p className="mt-2 text-white/80">Get a free, targeted sample of verified attendee or exhibitor data — matched to the events that matter to you.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="light" size="lg">Get a free sample <ArrowRight className="h-4 w-4" /></Button>
              <Button href={`mailto:${brand.salesEmail}`} variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">Talk to sales</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/55">{brand.description}</p>
            <div className="mt-5 flex gap-2.5">
              {brand.socials.map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white">
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                )
              })}
            </div>
          </div>
          <Column title="Event Data" links={eventDataHubs.slice(0, 4)} />
          <Column title="Solutions" links={solutionLinks} />
          <Column title="Resources" links={resourceLinks} />
          <div>
            <h4 className="text-sm font-semibold text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" /><a href={`mailto:${brand.email}`} className="hover:text-white">{brand.email}</a></li>
              <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" /><a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">{brand.phone}</a></li>
              {brand.offices.map((o) => (
                <li key={o.city} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  <span><span className="font-medium text-white/80">{o.city}</span><br />{o.lines[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>© {year} {brand.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[...companyLinks, ...legalLinks].map((l) => (
              <li key={l.to}><Link to={l.to} className="transition hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
