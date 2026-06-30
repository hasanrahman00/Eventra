import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import Logo from './Logo.jsx'
import LeadForm from './LeadForm.jsx'
import brand from '../site/brand.js'
import { companyLinks, resourceLinks, legalLinks } from '../data/nav.js'

const iconMap = { Linkedin, Twitter, Youtube, Facebook }

export default function Footer() {
  const year = 2026
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell py-14 lg:py-16">
        <div className="accent-bar mb-10">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Get in touch with us!</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: brand + links + contact card */}
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{brand.description}</p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-accent" /> Ask AI about {brand.name}
            </div>

            <div className="mt-6 grid gap-5 rounded-2xl border border-white/10 bg-navy-soft p-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-white">Our Links</h4>
                <ul className="mt-3 space-y-2">
                  {[...companyLinks, ...resourceLinks].map((l) => (
                    <li key={l.to}><Link to={l.to} className="text-sm text-white/55 transition hover:text-accent">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Contact Us</h4>
                <ul className="mt-3 space-y-3 text-sm text-white/55">
                  <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{brand.offices[0].lines[0]}, {brand.offices[0].city}</span></li>
                  <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0 text-accent" /><a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="hover:text-accent">{brand.phone}</a></li>
                  <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-accent" /><a href={`mailto:${brand.email}`} className="hover:text-accent">{brand.email}</a></li>
                </ul>
                <div className="mt-4 flex gap-2.5">
                  {brand.socials.map((s) => {
                    const Icon = iconMap[s.icon]
                    return (
                      <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-white/70 transition hover:bg-accent hover:text-white">
                        {Icon && <Icon className="h-4 w-4" />}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <LeadForm title="Get in touch with us!" />
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy-soft">
        <div className="container-shell flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/50 md:flex-row">
          <p>Copyright © {year} – {brand.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="transition hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
