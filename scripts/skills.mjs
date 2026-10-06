// Genera panel-skills.js: per a cada habilitat (sk) la unitat i la lliçó on surt per primer cop (ca|es).
// El panell ho fa servir a «Errors freqüents». Es torna a executar si canvia curriculum.js o els generadors.
import fs from 'fs'; import vm from 'vm';
const root = new URL('..', import.meta.url);
const noop = () => {}; const el = new Proxy(function () {}, { get: () => el, apply: () => el, construct: () => el });
const ctx = { console, Math, Date, JSON, Object, Array, Set, Map, String, Number, Boolean, RegExp, parseInt, parseFloat, isNaN, Infinity, location: { search: '', hostname: 'app.numimates.com', href: 'https://app.numimates.com/' }, localStorage: { getItem: () => null, setItem: noop }, navigator: { language: 'ca' }, document: el, window: null, addEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }) };
ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
for (const f of ['variant.js', 'chars.js', 'ex.js', 'ex2.js', 'ex3.js', 'ex4.js', 'ex5.js', 'ex6.js', 'ex7.js', 'curriculum.js']) {
  try { vm.runInContext(fs.readFileSync(new URL(f, root), 'utf8') + '\n;globalThis.COURSES = typeof COURSES !== "undefined" ? COURSES : globalThis.COURSES;', ctx, { filename: f }); } catch (e) { console.error(f, e.message); }
}
const C = ctx.COURSES; if (!C) throw new Error('COURSES no carregat');
const SK = {};
C.forEach(c => c.units.forEach(u => u.lessons.forEach(l => (l.sk || []).forEach(s => { const k = String(s).slice(0, 40); if (!SK[k] || (l.tier || 1) < SK[k][2]) SK[k] = [u.id, l.t, l.tier || 1]; }))));
const out = Object.fromEntries(Object.entries(SK).map(([k, [u, t]]) => [k, [u, t]]));
fs.writeFileSync(new URL('panel-skills.js', root), '/* Habilitat → [unitat, lliçó (ca|es)] per al panell. Generat per scripts/skills.mjs a partir de curriculum.js */\nconst SK_T = ' + JSON.stringify(out) + ';\n');
console.log(Object.keys(out).length, 'habilitats', fs.statSync(new URL('panel-skills.js', root)).size, 'bytes');
