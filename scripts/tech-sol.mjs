// Genera tech-sol.js (el solucionari del professor) a partir dels passos de tots els cursos.
// Ús: node scripts/tech-sol.mjs [url de l'app en local]   (per defecte http://127.0.0.1:5190)
// Necessita Playwright (NODE_PATH amb el seu node_modules) i un servidor estàtic de la carpeta del projecte.
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const { chromium } = await import(process.env.PLAYWRIGHT || 'playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), base = (process.argv[2] || 'http://127.0.0.1:5190').replace(/\/$/, '');
const b = await chromium.launch(); const p = await b.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
const res = {};
for (const lang of ['ca', 'es']) {
  await p.goto(`${base}/?v=tech&revisio=1`); await p.waitForTimeout(2500);
  await p.addScriptTag({ path: path.join(root, 'scripts/tech-solgen.js') });
  res[lang] = await p.evaluate(l => { LANG = l; return TSOLGEN(); }, lang);
}
await b.close();
if (errs.length) console.warn('errors a la pàgina:', [...new Set(errs)].slice(0, 5));
const out = {};
for (const [sid, rows] of Object.entries(res.ca)) out[sid] = rows.map((r, i) => { const e = (res.es[sid] || [])[i] || r; return { n: r.n, k: [r.k, e.k], q: [r.q, e.q], a: [r.a, e.a] }; });
const n = Object.values(out).reduce((a, r) => a + r.length, 0);
fs.writeFileSync(path.join(root, 'tech-sol.js'), `/* Numi Tech · solucionari del professor (generat per scripts/tech-sol.mjs a partir dels passos; no l'editeu a mà) */\nconst TSOL = ${JSON.stringify(out)};\n`);
console.log(`tech-sol.js: ${Object.keys(out).length} sessions, ${n} respostes`);
