// Genera les il·lustracions 3D estàtiques de Numi Tech:
//   img/tech/isles/<curs>-<unitat>.webp  (illes de l'inici)  +  tech-isles.js (on va cada parada, en %)
//   img/tech/scenes/<escena>.webp        (escenes de les històries)
// Cada curs és un món diferent (vegeu WORLD i scripts/3d/diorama.mjs): robot → tropic, robotica → lab, creadors → teatre, digital → ciutat.
// Ús (cal el servidor estàtic del repo a http://127.0.0.1:5190, o BASE=<url>):
//   node scripts/3d/render-scenes.mjs                                   tot: illes dels cursos actius + escenes
//   ONLY=isles node scripts/3d/render-scenes.mjs                        només les illes
//   ONLY=isles COURSES=robot,robotica node scripts/3d/render-scenes.mjs  només les illes d'aquests cursos (UNITS=1,3 per a unes unitats)
//   ONLY=scenes node scripts/3d/render-scenes.mjs                       només les escenes de les històries
// Navegador: RENDERER=puppeteer|playwright. Per defecte, puppeteer si existeix PUPPETEER (o el camí del Mac); si no, Playwright
// amb el Chromium de BROWSER o de /opt/pw-browsers/chromium (WebGL per programari amb SwiftShader).
// tech-isles.js es fusiona: es conserven les entrades dels cursos o unitats que no es tornen a renderitzar (p. ex. web-*).
import fs from 'fs';
import { build } from 'esbuild';
const root = new URL('../../', import.meta.url).pathname;
const ONLY = process.env.ONLY || 'all', BASE = process.env.BASE || 'http://127.0.0.1:5190/';
const WORLD = { robot: 'tropic', robotica: 'lab', creadors: 'teatre', digital: 'ciutat', web: 'tropic' };
const THEMES = { robot: ['algo', 'loop', 'llum', 'sensor', 'ciutat', 'fruita', 'cova', 'trofeu'], robotica: ['lab', 'algo', 'sensor', 'loop', 'llum', 'ciutat', 'cova', 'trofeu'], creadors: ['llum', 'loop', 'ciutat', 'algo', 'sensor', 'fruita', 'cova', 'trofeu'], web: ['ciutat', 'algo', 'loop', 'llum', 'sensor', 'ciutat', 'fruita', 'trofeu'], digital: ['sensor', 'llum'] };
// el curs web està aparcat: les seves illes no es tornen a fer si no es demana explícitament amb COURSES
const COURSES = process.env.COURSES ? process.env.COURSES.split(',').map(s => s.trim()) : ['robot', 'robotica', 'creadors', 'digital'];
const UNITS = process.env.UNITS ? process.env.UNITS.split(',').map(Number) : null;

await build({ entryPoints: [root + 'scripts/3d/diorama.mjs'], bundle: true, format: 'esm', outfile: root + '_scenes-bundle.js', logLevel: 'error' });
const PUP = process.env.PUPPETEER || '/private/tmp/claude-501/-Users-moisesmora/391d7d52-d6fb-463f-a637-bcf20cd39079/scratchpad/pp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const RENDERER = process.env.RENDERER || (fs.existsSync(PUP) ? 'puppeteer' : 'playwright');
let b, p;
if (RENDERER === 'puppeteer') {
  const { default: puppeteer } = await import(PUP);
  b = await puppeteer.launch({ executablePath: process.env.BROWSER || '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: 'new', protocolTimeout: 600000 });
  p = await b.newPage(); await p.goto(BASE + 'presenta.html', { waitUntil: 'networkidle0' });
} else {
  let pw; try { pw = await import('playwright'); } catch { pw = await import(process.env.PLAYWRIGHT || '/opt/node22/lib/node_modules/playwright/index.mjs'); }
  const chromium = pw.chromium || pw.default.chromium, exe = process.env.BROWSER || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  b = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'] });
  p = await b.newPage(); p.on('pageerror', e => console.log('error a la pàgina:', e.message));
  await p.goto(BASE + 'presenta.html', { waitUntil: 'networkidle' });
}
console.log('navegador:', RENDERER);
const save = (f, url) => fs.writeFileSync(f, Buffer.from(url.split(',')[1], 'base64'));
fs.mkdirSync(root + 'img/tech/isles', { recursive: true }); fs.mkdirSync(root + 'img/tech/scenes', { recursive: true });
try {
  if (ONLY === 'all' || ONLY === 'isles') {
    const CAT = await p.evaluate(() => TECH.map(c => ({ id: c.id, color: c.color, units: c.units.map(u => ({ n: (u.s || []).length, color: u.color || c.color })) })));
    // posicions actuals (es conserven les que no es tornen a fer)
    let NODES = {}; try { const t = fs.readFileSync(root + 'tech-isles.js', 'utf8'); NODES = JSON.parse(t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1)); } catch { NODES = {}; }
    const t00 = Date.now();
    for (const c of CAT) { if (!COURSES.includes(c.id)) continue;
      for (const [ui, u] of c.units.entries()) { if (!u.n || (UNITS && !UNITS.includes(ui + 1))) continue;
        const th = (THEMES[c.id] || THEMES.robot)[ui] || 'algo', t0 = Date.now();
        const r = await p.evaluate(async o => { const m = await import('./_scenes-bundle.js'); return m.island(o); }, { n: u.n, seed: (c.id.length * 31 + ui * 7 + 3), theme: th === 'lab' && WORLD[c.id] !== 'lab' ? 'llum' : th, color: u.color, world: WORLD[c.id] || 'tropic', W: 1080, H: 1350 });
        save(root + `img/tech/isles/${c.id}-${ui + 1}.webp`, r.url); NODES[`${c.id}-${ui + 1}`] = r.nodes;
        console.log(`${c.id}-${ui + 1}`, WORLD[c.id], th, ((Date.now() - t0) / 1000).toFixed(1) + ' s', r.hidden.some(h => h > .25) ? 'ALERTA: parada tapada ' + JSON.stringify(r.hidden) : '');
      } }
    // ordre estable: el del catàleg i, al final, qualsevol altra entrada que ja hi fos
    const ord = {}; for (const c of CAT) c.units.forEach((_, ui) => { const k = `${c.id}-${ui + 1}`; if (NODES[k]) ord[k] = NODES[k]; }); for (const k in NODES) if (!ord[k]) ord[k] = NODES[k];
    fs.writeFileSync(root + 'tech-isles.js', `/* On va cada parada (sessió) a les illes 3D de l'inici, en % de la imatge. Generat per scripts/3d/render-scenes.mjs */\nconst TECH_ISLES = ${JSON.stringify(ord)};\n`);
    console.log('illes:', ((Date.now() - t00) / 1000).toFixed(0) + ' s');
  }
  if (ONLY === 'all' || ONLY === 'scenes') {
    for (const k of ['illa', 'poble', 'taller', 'moll', 'lab']) {
      const url = await p.evaluate(async k => { const m = await import('./_scenes-bundle.js'); return m.scene(k); }, k);
      save(root + `img/tech/scenes/${k}.webp`, url); console.log('escena', k);
    }
    for (const [c, k] of [['robot', 'illa'], ['robotica', 'lab'], ['creadors', 'poble'], ['web', 'poble'], ['digital', 'taller']]) {
      const url = await p.evaluate(async k => { const m = await import('./_scenes-bundle.js'); return m.scene(k, 2000, 800, { bit: true }); }, k);
      save(root + `img/tech/scenes/hero-${c}.webp`, url); console.log('capçalera', c);
    }
  }
} finally {
  await b.close();
  fs.rmSync(root + '_scenes-bundle.js', { force: true });
}
console.log('fet');
