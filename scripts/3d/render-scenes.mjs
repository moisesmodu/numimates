// Genera les il·lustracions 3D estàtiques de Numi Tech:
//   img/tech/isles/<curs>-<unitat>.webp  (illes de l'inici)  +  tech-isles.js (on va cada parada, en %)
//   img/tech/scenes/<escena>.webp        (escenes de les històries)
// Ús: node scripts/3d/render-scenes.mjs   (cal el servidor estàtic de ~/mates-numi a http://127.0.0.1:5190)
import fs from 'fs';
import { build } from 'esbuild';
const root = new URL('../../', import.meta.url).pathname;
await build({ entryPoints: [root + 'scripts/3d/diorama.mjs'], bundle: true, format: 'esm', outfile: root + '_scenes-bundle.js', logLevel: 'error' });
const PUP = process.env.PUPPETEER || '/private/tmp/claude-501/-Users-moisesmora/391d7d52-d6fb-463f-a637-bcf20cd39079/scratchpad/pp/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const { default: puppeteer } = await import(PUP);
const THEMES = { robot: ['algo', 'loop', 'llum', 'sensor', 'ciutat', 'fruita', 'cova', 'trofeu'], robotica: ['lab', 'algo', 'sensor', 'loop', 'llum', 'ciutat', 'cova', 'trofeu'], creadors: ['llum', 'loop', 'ciutat', 'algo', 'sensor', 'fruita', 'llum', 'trofeu'], web: ['ciutat', 'algo', 'loop', 'llum', 'sensor', 'ciutat', 'fruita', 'trofeu'], digital: ['sensor', 'llum'] };
fs.mkdirSync(root + 'img/tech/isles', { recursive: true }); fs.mkdirSync(root + 'img/tech/scenes', { recursive: true });
const b = await puppeteer.launch({ executablePath: process.env.BROWSER || '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: 'new', protocolTimeout: 600000 });
const p = await b.newPage(); await p.goto('http://127.0.0.1:5190/presenta.html', { waitUntil: 'networkidle0' });
const save = (f, url) => fs.writeFileSync(f, Buffer.from(url.split(',')[1], 'base64'));
const CAT = await p.evaluate(() => TECH.map(c => ({ id: c.id, color: c.color, units: c.units.map(u => ({ n: u.s.length, color: u.color || c.color })) })));
const NODES = {};
for (const c of CAT) for (const [ui, u] of c.units.entries()) {
  const th = (THEMES[c.id] || THEMES.robot)[ui] || 'algo';
  const r = await p.evaluate(async o => { const m = await import('./_scenes-bundle.js'); return m.island(o); }, { n: u.n, seed: (c.id.length * 31 + ui * 7 + 3), theme: th === 'lab' ? 'llum' : th, color: u.color, W: 1080, H: 1350 });
  save(root + `img/tech/isles/${c.id}-${ui + 1}.webp`, r.url); NODES[`${c.id}-${ui + 1}`] = r.nodes; console.log(c.id, ui + 1, th);
}
for (const [k, pose] of [['illa', 'wave'], ['poble', 'happy'], ['taller', 'think'], ['moll', 'wave'], ['lab', 'happy']]) { void pose;
  const url = await p.evaluate(async k => { const m = await import('./_scenes-bundle.js'); return m.scene(k); }, k);
  save(root + `img/tech/scenes/${k}.webp`, url); console.log('escena', k);
}
for (const [c, k] of [['robot', 'illa'], ['robotica', 'lab'], ['creadors', 'poble'], ['web', 'poble'], ['digital', 'taller']]) {
  const url = await p.evaluate(async k => { const m = await import('./_scenes-bundle.js'); return m.scene(k, 2000, 800, { bit: true }); }, k);
  save(root + `img/tech/scenes/hero-${c}.webp`, url); console.log('capçalera', c);
}
await b.close();
fs.writeFileSync(root + 'tech-isles.js', `/* On va cada parada (sessió) a les illes 3D de l'inici, en % de la imatge. Generat per scripts/3d/render-scenes.mjs */\nconst TECH_ISLES = ${JSON.stringify(NODES)};\n`);
fs.rmSync(root + '_scenes-bundle.js', { force: true });
console.log('fet');
