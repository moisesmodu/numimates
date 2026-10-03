// Genera img/ment/<joc>.webp a partir de pieces/<joc>.mjs (cada peça exporta default () => string d'objectes SVG)
import fs from 'fs'; import path from 'path';
import { scene } from './base.mjs';
import puppeteer from '/private/tmp/claude-501/-Users-moisesmora/391d7d52-d6fb-463f-a637-bcf20cd39079/scratchpad/pp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const D = path.dirname(new URL(import.meta.url).pathname), OUT = path.resolve(D, '../../img/ment'), PREV = process.env.PREV || '/tmp';
const only = process.argv.slice(2);
const files = fs.readdirSync(D + '/pieces').filter(f => f.endsWith('.mjs')).filter(f => !only.length || only.includes(f.slice(0, -4)));
const b = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: 'new' });
const p = await b.newPage(); await p.setViewport({ width: 1600, height: 900 });
for (const f of files) {
  const g = f.slice(0, -4), mod = await import(D + '/pieces/' + f + '?t=' + Date.now());
  const svg = typeof mod.default === 'function' ? mod.default() : mod.default;
  const doc = svg.trim().startsWith('<svg') ? svg : scene(svg, mod.opts || {});
  await p.setContent(`<html><body style="margin:0">${doc}</body></html>`);
  const png = PREV + '/' + g + '.png'; await p.screenshot({ path: png });
  console.log('fet', g);
}
await b.close();
