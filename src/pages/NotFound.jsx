import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import useSeo from '../lib/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(100%_80%_at_50%_30%,#000,transparent_75%)]" />
      <div className="container-shell relative text-center">
        <div className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</div>
        <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">We couldn’t find that page</h1>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">The link may be broken or the page may have moved. Let’s get you back on track.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="gradient" size="lg">Back to home <ArrowRight className="h-4 w-4" /></Button>
          <Button to="/event-data" variant="outline" size="lg">Explore event data</Button>
        </div>
      </div>
    </section>
  )
}
