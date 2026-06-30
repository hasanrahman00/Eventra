import { useState } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'

// Persistent floating widgets: a green chat/WhatsApp-style button (bottom-left)
// and a chat-bot widget (bottom-right). Generic icons — no third-party branding.
export default function FloatingWidgets() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a
        href="https://wa.me/18885550188"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-accent-soft"
      >
        <Phone className="h-6 w-6" />
      </a>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {open && (
          <div className="w-64 rounded-2xl border border-white/10 bg-card p-4 text-white shadow-lift">
            <p className="text-sm font-semibold">Hi there 👋</p>
            <p className="mt-1 text-xs text-ink-muted">Need event data fast? Tell us the show and audience and we’ll get back within a business day.</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-white">Start a chat</a>
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open chat"
          className="grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-500"
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </>
  )
}
