// Títols de Numi Tech (cursos, unitats, sessions i insígnies) per al panell i els informes, a partir de tech-c*.js.
// Genera panel-tech.js (navegador) i api/_techunits.js (servidor). Cal tornar-lo a executar quan canviï el temari.
import fs from 'fs'; import vm from 'vm';
const R = new URL('..', import.meta.url).pathname;
const ctx = { LANG: 'ca', console, document: { querySelector: () => null } }; vm.createContext(ctx);
vm.runInContext(`const L=(ca,es)=>LANG==='es'?es:ca; const tx=v=>v;`, ctx);
const src = fs.readdirSync(R).filter(f => /^tech-c\d+\.js$/.test(f)).sort().map(f => fs.readFileSync(R + f, 'utf8')).join('\n');
vm.runInContext(fs.readFileSync(R + 'tech-bot.js', 'utf8') + '\n' + src + '\n;globalThis.__ = { TECH, TBADGE };', ctx);
const { TECH, TBADGE } = ctx.__, T = { courses: {}, units: {}, s: {}, badges: {} };
for (const c of TECH) {
  T.courses[c.id] = { n: c.name, age: c.age, units: c.units.length, total: c.units.reduce((a, u) => a + u.s.length, 0), ready: c.units.reduce((a, u) => a + u.s.filter(s => s.steps && s.steps.length).length, 0) };
  c.units.forEach((u, ui) => { T.units[`${c.id}:${ui + 1}`] = u.t; u.s.forEach((s, si) => { T.s[s.id] = { t: s.t, c: c.id, u: ui + 1, n: si + 1, proj: !!s.proj, min: s.min || 40 }; }); });
}
for (const b of Object.values(TBADGE)) T.badges[b.id] = { n: b.n, ico: b.ico };
const json = JSON.stringify(T);
fs.writeFileSync(R + 'panel-tech.js', `/* Títols de Numi Tech per al panell (ca|es). Generat per scripts/tech-units.mjs a partir de tech-c*.js */\nconst TECH_T = ${json};\n`);
fs.writeFileSync(R + 'api/_techunits.js', `// Títols de Numi Tech (ca|es) per als informes del servidor. Generat per scripts/tech-units.mjs\nexport const TECH_T = ${json};\n`);
console.log('panel-tech.js i api/_techunits.js fets:', Object.keys(T.s).length, 'sessions');
