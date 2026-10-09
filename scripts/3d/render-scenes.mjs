// Genera les il·lustracions 3D estàtiques de Numi Tech:
//   img/tech/isles/<curs>-<unitat>.webp  (illes de l'inici)  +  tech-isles.js (on va cada parada, en %)
//   img/tech/scenes/<escena>.webp        (escenes de les històries)  i  img/tech/scenes/hero-<curs>.webp (capçaleres)
//   img/tech/bit-<posa>.webp, img/tech/maqueen-<posa>.webp  (retrats d'en Bit i del Maqueen, fons transparent)
// Cada curs és un món diferent (vegeu WORLD i scripts/3d/diorama.mjs): robot → tropic, robotica → lab, creadors → teatre,
// digital → ciutat, model (Tech 3D · Nivell 1) → fab (el taller d'impressió 3D d'en Bit i la Nuvi), modelpro (Nivell 2) → estudi.
// Ús (cal el servidor estàtic del repo a http://127.0.0.1:5190, o BASE=<url>):
//   node scripts/3d/render-scenes.mjs                                   tot: illes dels cursos actius, escenes, capçaleres i retrats
//   ONLY=isles node scripts/3d/render-scenes.mjs                        només les illes
//   ONLY=isles COURSES=model,modelpro node scripts/3d/render-scenes.mjs  només les illes d'aquests cursos (UNITS=1,3 per a unes unitats)
//   ONLY=scenes [SCENES=fab,estudi] node scripts/3d/render-scenes.mjs   només les escenes de les històries
//   ONLY=heroes [HEROES=model,modelpro] node scripts/3d/render-scenes.mjs  només les capçaleres dels cursos
//   ONLY=portraits [POSES=idle,wave] node scripts/3d/render-scenes.mjs  només els retrats (portraits.mjs i maqueen-portrait.mjs)
// Navegador: RENDERER=puppeteer|playwright. Per defecte, puppeteer si existeix PUPPETEER (o el camí del Mac); si no, Playwright
// amb el Chromium de BROWSER o de /opt/pw-browsers/chromium (WebGL per programari amb SwiftShader).
// tech-isles.js es fusiona: es conserven les entrades dels cursos o unitats que no es tornen a renderitzar.
import fs from 'fs';
import { execFileSync } from 'child_process';
import { build } from 'esbuild';
const root = new URL('../../', import.meta.url).pathname;
const ONLY = process.env.ONLY || 'all', BASE = process.env.BASE || 'http://127.0.0.1:5190/';
const WORLD = { robot: 'tropic', robotica: 'lab', creadors: 'teatre', digital: 'ciutat', web: 'tropic', model: 'fab', modelpro: 'estudi' };
const THEMES = { robot: ['algo', 'loop', 'llum', 'sensor', 'ciutat', 'fruita', 'cova', 'trofeu'], robotica: ['lab', 'algo', 'sensor', 'loop', 'llum', 'ciutat', 'cova', 'trofeu'], creadors: ['llum', 'loop', 'ciutat', 'algo', 'sensor', 'fruita', 'cova', 'trofeu'], web: ['ciutat', 'algo', 'loop', 'llum', 'sensor', 'ciutat', 'fruita', 'trofeu'], digital: ['sensor', 'llum'],
  // Tech 3D: una fita per unitat (vegeu FABHERO a diorama.mjs)
  model: ['eixos', 'formes', 'mesura', 'casa', 'forats', 'impressio', 'persones', 'trofeu'], modelpro: ['codi', 'moli', 'dau', 'caixa', 'engranatge', 'ciutat', 'frontissa', 'trofeu'] };
// el curs web està aparcat: les seves illes no es tornen a fer si no es demana explícitament amb COURSES
const COURSES = process.env.COURSES ? process.env.COURSES.split(',').map(s => s.trim()) : ['robot', 'robotica', 'creadors', 'digital', 'model', 'modelpro'];
const UNITS = process.env.UNITS ? process.env.UNITS.split(',').map(Number) : null;
const list = (k, all) => process.env[k] ? process.env[k].split(',').map(s => s.trim()) : all;
const SCENES = list('SCENES', ['illa', 'poble', 'taller', 'moll', 'lab', 'fab', 'estudi']);
// capçaleres: curs → escena; robòtica porta el Maqueen (la seva mascota), la resta en Bit
const HERO = { robot: 'illa', robotica: 'lab', creadors: 'poble', web: 'poble', digital: 'taller', model: 'fab', modelpro: 'estudi' };
const HEROES = list('HEROES', Object.keys(HERO));
// retrats: mides de sortida (les de sempre: l'app les fa servir tal qual)
const BIT = { idle: [280, 490], happy: [289, 489], win: [315, 524], dance: [321, 480], wave: [293, 489], think: [296, 487], sad: [289, 484] }, MAQ = { idle: [640, 640], happy: [640, 640] };
const POSES = list('POSES', [...new Set([...Object.keys(BIT), ...Object.keys(MAQ)])]);

const BUNDLE = '_scenes-bundle' + process.pid;
const need = { d: ONLY !== 'portraits', b: ONLY === 'all' || ONLY === 'portraits' };
if (need.d) await build({ entryPoints: [root + 'scripts/3d/diorama.mjs'], bundle: true, format: 'esm', outfile: root + BUNDLE + '.js', logLevel: 'error' });
if (need.b) { await build({ entryPoints: [root + 'scripts/3d/portraits.mjs'], bundle: true, format: 'esm', outfile: root + BUNDLE + '-bit.js', logLevel: 'error' }); await build({ entryPoints: [root + 'scripts/3d/maqueen-portrait.mjs'], bundle: true, format: 'esm', outfile: root + BUNDLE + '-maq.js', logLevel: 'error' }); }
const PUP = process.env.PUPPETEER || '/private/tmp/claude-501/-Users-moisesmora/391d7d52-d6fb-463f-a637-bcf20cd39079/scratchpad/pp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const RENDERER = process.env.RENDERER || (fs.existsSync(PUP) ? 'puppeteer' : 'playwright');
let b, p;
if (RENDERER === 'puppeteer') {
  const { default: puppeteer } = await import(PUP);
  b = await puppeteer.launch({ executablePath: process.env.BROWSER || '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: 'new', protocolTimeout: 0 });
  p = await b.newPage(); await p.goto(BASE + 'presenta.html', { waitUntil: 'networkidle0' });
} else {
  let pw; try { pw = await import('playwright'); } catch { pw = await import(process.env.PLAYWRIGHT || '/opt/node22/lib/node_modules/playwright/index.mjs'); }
  const chromium = pw.chromium || pw.default.chromium, exe = process.env.BROWSER || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  b = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'] });
  p = await b.newPage(); p.on('pageerror', e => console.log('error a la pàgina:', e.message)); p.setDefaultTimeout(0);
  await p.goto(BASE + 'presenta.html', { waitUntil: 'networkidle' });
}
console.log('navegador:', RENDERER);
const save = (f, url) => fs.writeFileSync(f, Buffer.from(url.split(',')[1], 'base64'));
// el navegador desa l'alfa del webp sense pèrdua (fitxers grossos): si hi ha ImageMagick, es torna a codificar amb l'alfa amb pèrdua
const slim = (f, q) => { try { execFileSync('convert', [f, '-define', 'webp:alpha-quality=85', '-define', 'webp:method=6', '-quality', String(q), f]); } catch { /* sense ImageMagick: es queda com està */ } };
const run = (file, fn, arg) => p.evaluate(async ({ file, fn, arg }) => { const m = await import('./' + file); return m[fn](...arg); }, { file, fn, arg });
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
        const r = await run(BUNDLE + '.js', 'island', [{ n: u.n, seed: (c.id.length * 31 + ui * 7 + 3), theme: th === 'lab' && WORLD[c.id] !== 'lab' ? 'llum' : th, color: u.color, world: WORLD[c.id] || 'tropic', W: 1080, H: 1350, q: .9 }]);
        save(root + `img/tech/isles/${c.id}-${ui + 1}.webp`, r.url); NODES[`${c.id}-${ui + 1}`] = r.nodes;
        // es desa a cada illa: si s'atura a mitges, tech-isles.js ja té les posicions de les illes fetes
        const ord = {}; for (const cc of CAT) cc.units.forEach((_, k) => { const key = `${cc.id}-${k + 1}`; if (NODES[key]) ord[key] = NODES[key]; }); for (const k in NODES) if (!ord[k]) ord[k] = NODES[k];
        fs.writeFileSync(root + 'tech-isles.js', `/* On va cada parada (sessió) a les illes 3D de l'inici, en % de la imatge. Generat per scripts/3d/render-scenes.mjs */\nconst TECH_ISLES = ${JSON.stringify(ord)};\n`);
        console.log(`${c.id}-${ui + 1}`, WORLD[c.id], th, ((Date.now() - t0) / 1000).toFixed(1) + ' s', r.hidden.some(h => h > .25) ? 'ALERTA: parada tapada ' + JSON.stringify(r.hidden) : '');
      } }
    console.log('illes:', ((Date.now() - t00) / 1000).toFixed(0) + ' s');
  }
  if (ONLY === 'all' || ONLY === 'scenes') for (const k of SCENES) {
    save(root + `img/tech/scenes/${k}.webp`, await run(BUNDLE + '.js', 'scene', [k])); console.log('escena', k);
  }
  if (ONLY === 'all' || ONLY === 'heroes') for (const c of HEROES) {
    save(root + `img/tech/scenes/hero-${c}.webp`, await run(BUNDLE + '.js', 'scene', [HERO[c], 2000, 800, c === 'robotica' ? { bot: true } : { bit: true }])); console.log('capçalera', c);
  }
  if (ONLY === 'all' || ONLY === 'portraits') for (const pose of POSES) {
    if (BIT[pose]) { const f = root + `img/tech/bit-${pose}.webp`; save(f, await run(BUNDLE + '-bit.js', 'portrait', [pose, { W: BIT[pose][0], H: BIT[pose][1] }])); slim(f, 92); console.log('bit-' + pose); }
    if (MAQ[pose]) { const f = root + `img/tech/maqueen-${pose}.webp`; save(f, await run(BUNDLE + '-maq.js', 'portrait', [pose, MAQ[pose][0]])); slim(f, 88); console.log('maqueen-' + pose); }
  }
} finally {
  await b.close();
  for (const s of ['', '-bit', '-maq']) fs.rmSync(root + BUNDLE + s + '.js', { force: true });
}
console.log('fet');
