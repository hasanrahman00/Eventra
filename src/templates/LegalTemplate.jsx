import { Section } from '../components/Section.jsx'
import { Breadcrumbs } from '../components/blocks.jsx'
import useSeo from '../lib/useSeo.js'

export default function LegalTemplate({ page }) {
  useSeo({ title: page.title, description: `${page.title} — Eventra.` })
  return (
    <>
      <section className="border-b border-surface-muted bg-surface-subtle">
        <div className="container-shell py-14">
          <Breadcrumbs trail={[{ label: page.title }]} />
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{page.title}</h1>
          {page.updated && <p className="mt-3 text-sm text-ink-muted">Last updated {page.updated}</p>}
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-3xl">
          {(page.sections || []).map((s, i) => (
            <div key={i} className="mt-8 first:mt-0">
              <h2 className="text-xl font-bold tracking-tight text-ink">{s.heading}</h2>
              {(s.paras || []).map((p, j) => <p key={j} className="mt-3 leading-relaxed text-ink-muted">{p}</p>)}
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
