import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import useSeo from '../lib/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
      <div className="container-shell relative text-center">
        <div className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</div>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">We couldn’t find that page</h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">The link may be broken or the page may have moved. Let’s get you back on track.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="accent" size="lg">Back to home <ArrowRight className="h-4 w-4" /></Button>
          <Button to="/event-data" variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white">Explore event data</Button>
        </div>
      </div>
    </section>
  )
}
