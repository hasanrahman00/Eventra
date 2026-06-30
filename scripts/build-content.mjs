// Reads the content-authoring workflow output and writes the data files.
// Usage: node scripts/build-content.mjs "<path-to-workflow-output.json>"
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const outPath = process.argv[2]
if (!outPath) { console.error('Pass the workflow output path'); process.exit(1) }

const raw = JSON.parse(readFileSync(outPath, 'utf8'))
const result = raw.result || raw

function clean(v) {
  if (typeof v === 'string') {
    return v
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
  }
  if (Array.isArray(v)) return v.map(clean)
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, val]) => [k, clean(val)]))
  }
  return v
}

const services = clean(result.services || [])
const blog = clean(result.blog || [])
const cases = clean(result.cases || [])

const solutions = services.filter((s) => s.group === 'solutions')
const audiences = services.filter((s) => s.group === 'event-data')

mkdirSync('src/data/pages', { recursive: true })
const emit = (file, arr, header) =>
  writeFileSync(`src/data/pages/${file}`, `// ${header}\nexport default ${JSON.stringify(arr, null, 2)}\n`)

emit('services.js', solutions, 'Eventra Solutions service pages (rendered by ServicePageTemplate).')
emit('audiences.js', audiences, 'Eventra Event Data audience pages (rendered by ServicePageTemplate).')
emit('blog.js', blog, 'Eventra blog posts (rendered by ArticleTemplate).')
emit('caseStudies.js', cases, 'Eventra case studies (rendered by ArticleTemplate).')

console.log(`solutions=${solutions.length} audiences=${audiences.length} blog=${blog.length} cases=${cases.length}`)
