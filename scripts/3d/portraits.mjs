// Renders d'en Bit en 3D (img/tech/bit-<posa>.png) per fer-los servir a l'app i a les presentacions.
// Ús: node scripts/3d/portraits.mjs  (cal un servidor estàtic de ~/mates-numi a http://127.0.0.1:5190 i Brave o Chrome)
import fs from 'fs';
const PUP = process.env.PUPPETEER || '/private/tmp/claude-501/-Users-moisesmora/391d7d52-d6fb-463f-a637-bcf20cd39079/scratchpad/pp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const { default: puppeteer } = await import(PUP);
const root = new URL('../../', import.meta.url).pathname, out = root + 'img/tech/';
fs.mkdirSync(out, { recursive: true });
const b = await puppeteer.launch({ executablePath: process.env.BROWSER || '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: 'new' });
const p = await b.newPage(); await p.goto('http://127.0.0.1:5190/presenta.html', { waitUntil: 'networkidle0' });
for (const pose of ['idle', 'happy', 'win', 'dance', 'wave', 'think', 'sad']) {
  const url = await p.evaluate(async pose => { const m = await import('./tech-3d.js'); return m.portrait(pose, 640); }, pose);
  fs.writeFileSync(out + `bit-${pose}.png`, Buffer.from(url.split(',')[1], 'base64')); console.log('bit-' + pose);
}
await b.close();
