// Parses the trade-show CSV into public/events.json (fetched by the Events page).
// Usage: node scripts/build-events.mjs "<path-to-csv>"
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const src = process.argv[2]
if (!src) { console.error('Pass the CSV path'); process.exit(1) }
const text = readFileSync(src, 'utf8')

// Minimal RFC-4180 CSV parser (handles quoted fields containing commas).
function parseCSV(str) {
  const rows = []
  let row = [], field = '', inQ = false
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (inQ) {
      if (c === '"') {
        if (str[i + 1] === '"') { field += '"'; i++ } else inQ = false
      } else field += c
    } else if (c === '"') inQ = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
    else if (c === '\r') { /* skip */ }
    else field += c
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows
}

const rows = parseCSV(text)
rows.shift() // header
const events = rows
  .filter((r) => r[0] && r[0].trim())
  .map((r) => ({
    name: (r[0] || '').trim(),
    start: (r[1] || '').trim(),
    end: (r[2] || '').trim(),
    location: (r[3] || '').trim(),
  }))

mkdirSync('public', { recursive: true })
writeFileSync('public/events.json', JSON.stringify(events))
console.log('events written:', events.length)
