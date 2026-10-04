// node scripts/tech-build-course.mjs <curs> <cN> <títol>   (des de l'arrel del repo), p. ex. robotica c2 "Tech Robòtica"
// Llegeix scripts/tech-src/<curs>/uN/{unit.js,tani.js,guide.js} i escriu tech-<cN>.js, tech-guide-<cN>.js i tech-anim-<cN>.js.
import fs from 'fs';
const [course, cn, title] = process.argv.slice(2);
const V = course === 'robotica' ? 'ROBOTICA_UNITS' : 'COURSE_UNITS';
const dirs = fs.readdirSync(`scripts/tech-src/${course}`).filter(d => /^u\d+$/.test(d)).sort((a, b) => a.slice(1) - b.slice(1));
const rd = (d, f) => { const p = `scripts/tech-src/${course}/${d}/${f}`; return fs.existsSync(p) ? fs.readFileSync(p, 'utf8').trim() + '\n' : ''; };
const head = (what) => `/* Numi Tech · ${title} · ${what}. Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */\n`;
let units = head('sessions de les unitats') + `(function () {\nconst ${V} = {};\n`;
for (const d of dirs) units += `\n/* ── unitat ${d.slice(1)} ── */\n` + rd(d, 'unit.js');
units += `\nconst c = TECH.find(x => x.id === '${course}'); delete c.soon;\nfor (const [n, u] of Object.entries(${V})) c.units[n - 1] = u;\n})();\n`;
let anim = head('animacions de teoria (TANI)');
for (const d of dirs) anim += `\n/* ── unitat ${d.slice(1)} ── */\n` + rd(d, 'tani.js');
let guide = head('guies del professor');
for (const d of dirs) guide += `\n/* ── unitat ${d.slice(1)} ── */\n` + rd(d, 'guide.js');
fs.writeFileSync(`tech-${cn}.js`, units); fs.writeFileSync(`tech-anim-${cn}.js`, anim); fs.writeFileSync(`tech-guide-${cn}.js`, guide);
console.log(course, dirs.join(' '), '→', `tech-${cn}.js tech-anim-${cn}.js tech-guide-${cn}.js`);
