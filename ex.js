/* ===== Generador d'exercicis · base, visuals i habilitats de 4t (bilingüe CA/ES) ===== */
const ri = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = n => (n < 0 ? '−' : '') + String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const pad = n => String(n).padStart(2, '0');
const eur = c => { const e = Math.floor(c / 100), r = c % 100; return (r ? e + ',' + pad(r) : String(e)) + ' €'; };
const cap = s => s[0].toUpperCase() + s.slice(1);

function mc(q, correct, dis, o = {}) {
  const c = String(correct), set = [c];
  for (const d of dis) { const s = String(d); if (!set.includes(s) && set.length < 4) set.push(s); }
  const opts = o.fixed ? o.fixed.slice() : shuffle(set);
  const r = { type: 'choice', q, opts, ans: opts.indexOf(c), ...o };
  delete r.fixed;
  return r;
}
const inp = (q, ans, o = {}) => ({ type: 'input', q, ans, ...o });

/* --- Visuals --- */
const BOX = '<span class="box">?</span>';
const bigNum = s => `<div class="bignum">${s}</div>`;
const eqv = s => `<div class="eq">${s}</div>`;
const frac = (n, d) => `<span class="frac"><span>${n}</span><span>${d}</span></span>`;
const colOp = (a, b, op) => `<div class="colop"><div>${typeof a === 'string' ? a : fmt(a)}</div><div><span class="cop">${op}</span>${typeof b === 'string' ? b : fmt(b)}</div><div class="ln"></div><div class="cq">?</div></div>`;
const emGrid = (em, n, cols) => `<div class="emgrid" style="grid-template-columns:repeat(${cols},auto)">${Array(n).fill(0).map((_, i) => `<span style="animation-delay:${Math.min(i, 30) * 25}ms">${em}</span>`).join('')}</div>`;
const COLS = ['#FF9A3C', '#36A9E1', '#3CC46A', '#FF6FA3', '#8A4FB0', '#22B5A0'];

function pieSVG(n, d, col) {
  let s = '<svg viewBox="0 0 120 120" class="vsvg">';
  for (let i = 0; i < d; i++) {
    const a0 = -Math.PI / 2 + i * 2 * Math.PI / d, a1 = a0 + 2 * Math.PI / d;
    const p = (a, r = 52) => `${(60 + r * Math.cos(a)).toFixed(1)} ${(60 + r * Math.sin(a)).toFixed(1)}`;
    s += `<path d="M60 60 L${p(a0)} A52 52 0 0 1 ${p(a1)} Z" fill="${i < n ? col : '#fff'}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
  }
  return s + '</svg>';
}
function barSVG(n, d, col) {
  const w = 220 / d;
  let s = `<svg viewBox="0 0 230 70" class="vsvg wide">`;
  for (let i = 0; i < d; i++) s += `<rect x="${5 + i * w}" y="8" width="${w}" height="54" fill="${i < n ? col : '#fff'}" stroke="${INK}" stroke-width="2.5"/>`;
  return s + '</svg>';
}
function clockSVG(h, m) {
  const ha = ((h % 12) + m / 60) * 30 * Math.PI / 180, ma = m * 6 * Math.PI / 180, f = x => x.toFixed(1);
  let s = '<svg viewBox="0 0 200 200" class="clock"><circle cx="100" cy="100" r="92" fill="#fff" stroke="#602B7A" stroke-width="8"/>';
  for (let i = 0; i < 60; i++) {
    const a = i * 6 * Math.PI / 180, r1 = i % 5 ? 81 : 75;
    s += `<line x1="${f(100 + 85 * Math.sin(a))}" y1="${f(100 - 85 * Math.cos(a))}" x2="${f(100 + r1 * Math.sin(a))}" y2="${f(100 - r1 * Math.cos(a))}" stroke="${INK}" stroke-width="${i % 5 ? 1.5 : 3.2}"/>`;
  }
  for (let i = 1; i <= 12; i++) { const a = i * 30 * Math.PI / 180; s += `<text x="${f(100 + 61 * Math.sin(a))}" y="${f(100 - 61 * Math.cos(a) + 7)}" text-anchor="middle" font-size="20" font-weight="800" fill="${INK}" font-family="Lexend,sans-serif">${i}</text>`; }
  s += `<g class="hand-h"><line x1="100" y1="100" x2="${f(100 + 42 * Math.sin(ha))}" y2="${f(100 - 42 * Math.cos(ha))}" stroke="${INK}" stroke-width="9" stroke-linecap="round"/></g>`;
  s += `<g class="hand-m"><line x1="100" y1="100" x2="${f(100 + 70 * Math.sin(ma))}" y2="${f(100 - 70 * Math.cos(ma))}" stroke="#FF5A5F" stroke-width="5" stroke-linecap="round"/></g>`;
  return s + '<circle cx="100" cy="100" r="7" fill="#602B7A"/></svg>';
}
function shapeSVG(id, sides, col) {
  let body;
  if (id === 'cercle') body = `<circle cx="80" cy="60" r="48"/>`;
  else if (id === 'rectangle') body = `<rect x="15" y="22" width="130" height="76" rx="3"/>`;
  else if (id === 'quadrat') body = `<rect x="32" y="12" width="96" height="96" rx="3"/>`;
  else {
    const pts = [], off = Math.PI / 2 + (sides % 2 ? 0 : Math.PI / sides);
    for (let i = 0; i < sides; i++) { const a = off + i * 2 * Math.PI / sides; pts.push(`${(80 + 52 * Math.cos(a)).toFixed(1)},${(62 + 52 * Math.sin(a)).toFixed(1)}`); }
    body = `<polygon points="${pts.join(' ')}"/>`;
  }
  return `<svg viewBox="0 0 160 120" class="vsvg wide pop-in"><g fill="${col}" stroke="${INK}" stroke-width="3" stroke-linejoin="round">${body}</g></svg>`;
}
function rectSVG(w, h, lw, lh) {
  const sc = Math.min(160 / w, 90 / h), W = w * sc, H = h * sc, x = (230 - W) / 2 - 15, y = (130 - H) / 2;
  return `<svg viewBox="0 0 230 140" class="vsvg wide"><rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#E8F5FE" stroke="#36A9E1" stroke-width="4" class="draw"/>
  <text x="${x + W / 2}" y="${y + H + 22}" text-anchor="middle" font-size="17" font-weight="800" fill="${INK}" font-family="Lexend,sans-serif">${lw}</text>
  <text x="${x + W + 8}" y="${y + H / 2 + 6}" font-size="17" font-weight="800" fill="${INK}" font-family="Lexend,sans-serif">${lh}</text></svg>`;
}
const moneyVis = cs => `<div class="money">${cs.map((c, i) => c >= 500 ? `<div class="bill b${c / 100}" style="animation-delay:${i * 70}ms">${c / 100} €</div>` : `<div class="coin c${c}" style="animation-delay:${i * 70}ms">${c >= 100 ? c / 100 + ' €' : c + ' c'}</div>`).join('')}</div>`;

/* --- Números en paraules --- */
const U0 = ['zero', 'u', 'dos', 'tres', 'quatre', 'cinc', 'sis', 'set', 'vuit', 'nou', 'deu', 'onze', 'dotze', 'tretze', 'catorze', 'quinze', 'setze', 'disset', 'divuit', 'dinou'];
const T0 = ['', '', 'vint', 'trenta', 'quaranta', 'cinquanta', 'seixanta', 'setanta', 'vuitanta', 'noranta'];
function ca99(n, un) {
  if (n < 20) return n === 1 && un ? 'un' : U0[n];
  const t = Math.floor(n / 10), u = n % 10;
  if (!u) return T0[t];
  const uw = u === 1 && un ? 'un' : U0[u];
  return t === 2 ? 'vint-i-' + uw : T0[t] + '-' + uw;
}
function ca999(n, un) { const c = Math.floor(n / 100), r = n % 100; let s = c === 1 ? 'cent' : c > 1 ? U0[c] + '-cents' : ''; if (r) s += (s ? ' ' : '') + ca99(r, un); return s; }
function numCa(n) {
  if (n === 0) return 'zero';
  if (n >= 1e6) { const m = Math.floor(n / 1e6), r = n % 1e6; return (m === 1 ? 'un milió' : ca999(m, true) + ' milions') + (r ? ' ' + numCa(r) : ''); }
  const th = Math.floor(n / 1000), r = n % 1000;
  let s = th === 1 ? 'mil' : th > 1 ? ca999(th, true) + ' mil' : '';
  if (r) s += (s ? ' ' : '') + ca999(r, false);
  return s;
}
const UE = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const TE = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const CE = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
function es99(n, un) {
  if (n < 30) return un && n === 1 ? 'un' : un && n === 21 ? 'veintiún' : UE[n];
  const t = Math.floor(n / 10), u = n % 10;
  return TE[t] + (u ? ' y ' + (un && u === 1 ? 'un' : UE[u]) : '');
}
function es999(n, un) { const c = Math.floor(n / 100), r = n % 100; let s = c === 1 && !r ? 'cien' : CE[c]; if (r) s += (s ? ' ' : '') + es99(r, un); return s; }
function numEs(n) {
  if (n === 0) return 'cero';
  if (n >= 1e6) { const m = Math.floor(n / 1e6), r = n % 1e6; return (m === 1 ? 'un millón' : es999(m, true) + ' millones') + (r ? ' ' + numEs(r) : ''); }
  const th = Math.floor(n / 1000), r = n % 1000;
  let s = th === 1 ? 'mil' : th > 1 ? es999(th, true) + ' mil' : '';
  if (r) s += (s ? ' ' : '') + es999(r, false);
  return s;
}
const numToCa = n => L(numCa(n), numEs(n));

/* --- Ajudants --- */
const PL = () => L(['unitats', 'desenes', 'centenes', 'unitats de miler', 'desenes de miler', 'centenes de miler', 'unitats de milió'], ['unidades', 'decenas', 'centenas', 'unidades de millar', 'decenas de millar', 'centenas de millar', 'unidades de millón']);
const PLS = ['U', 'D', 'C', 'UM', 'DM', 'CM', 'UMi'];
const digOf = L_ => L_ <= 1 ? 3 : L_ === 2 ? 4 : 5;
function rndN(k, distinct) {
  if (distinct) { const d = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); if (d[0] === 0) [d[0], d[1]] = [d[1], d[0]]; return +d.slice(0, k).join(''); }
  return ri(10 ** (k - 1), 10 ** k - 1);
}
function variants(n) {
  const s = String(n).split(''), out = new Set();
  for (let g = 0; out.size < 5 && g < 60; g++) {
    const t = s.slice();
    if (Math.random() < .4) { const i = ri(0, t.length - 2); [t[i], t[i + 1]] = [t[i + 1], t[i]]; }
    else { const i = ri(0, t.length - 1); t[i] = String((+t[i] + pick([1, 9])) % 10); }
    if (t[0] === '0') continue;
    const v = +t.join(''); if (v !== n) out.add(v);
  }
  return [...out];
}
const TAB = L_ => L_ <= 1 ? [2, 5, 10] : L_ === 2 ? [3, 4, 6] : L_ === 3 ? [7, 8, 9] : [2, 3, 4, 5, 6, 7, 8, 9];
function addTip(a, b) {
  if (b < 10) { const f = 10 - a % 10; if (a % 10 && b > f) return L(`Completa la desena: ${a} + ${f} = ${a + f}, i ${a + f} + ${b - f} = ${a + b}.`, `Completa la decena: ${a} + ${f} = ${a + f}, y ${a + f} + ${b - f} = ${a + b}.`); return `${a} + ${b} = ${a + b}.`; }
  const t = b - b % 10, u = b % 10;
  return u ? L(`Primer les desenes: ${a} + ${t} = ${a + t}. Després les unitats: ${a + t} + ${u} = ${a + b}.`, `Primero las decenas: ${a} + ${t} = ${a + t}. Después las unidades: ${a + t} + ${u} = ${a + b}.`) : L(`Suma les desenes: ${a} + ${t} = ${a + b}.`, `Suma las decenas: ${a} + ${t} = ${a + b}.`);
}
function subTip(a, b) {
  if (b < 10) { const u = a % 10; if (u && u < b) return L(`Baixa fins a la desena: ${a} − ${u} = ${a - u}, i ${a - u} − ${b - u} = ${a - b}.`, `Baja hasta la decena: ${a} − ${u} = ${a - u}, y ${a - u} − ${b - u} = ${a - b}.`); return `${a} − ${b} = ${a - b}.`; }
  const t = b - b % 10, u = b % 10;
  return u ? L(`Primer treu les desenes: ${a} − ${t} = ${a - t}. Després les unitats: ${a - t} − ${u} = ${a - b}.`, `Primero quita las decenas: ${a} − ${t} = ${a - t}. Después las unidades: ${a - t} − ${u} = ${a - b}.`) : L(`Treu les desenes: ${a} − ${t} = ${a - b}.`, `Quita las decenas: ${a} − ${t} = ${a - b}.`);
}
function mulTip(t, b) {
  const p = t * b;
  return ({
    2: L(`Per 2 és fer el doble: ${b} + ${b} = ${p}.`, `Por 2 es hacer el doble: ${b} + ${b} = ${p}.`),
    3: L(`Suma el ${b} tres vegades: ${b} + ${b} + ${b} = ${p}.`, `Suma el ${b} tres veces: ${b} + ${b} + ${b} = ${p}.`),
    4: L(`Per 4 és el doble del doble: ${b} → ${2 * b} → ${p}.`, `Por 4 es el doble del doble: ${b} → ${2 * b} → ${p}.`),
    5: L(`Per 5 és la meitat de per 10: ${b} × 10 = ${b * 10}, i la meitat és ${p}.`, `Por 5 es la mitad de por 10: ${b} × 10 = ${b * 10}, y la mitad es ${p}.`),
    6: L(`Per 6 és per 5 i un cop més: ${5 * b} + ${b} = ${p}.`, `Por 6 es por 5 y una vez más: ${5 * b} + ${b} = ${p}.`),
    7: L(`Per 7 és per 5 més per 2: ${5 * b} + ${2 * b} = ${p}.`, `Por 7 es por 5 más por 2: ${5 * b} + ${2 * b} = ${p}.`),
    8: L(`Per 8 és fer el doble tres vegades: ${b} → ${2 * b} → ${4 * b} → ${p}.`, `Por 8 es hacer el doble tres veces: ${b} → ${2 * b} → ${4 * b} → ${p}.`),
    9: L(`Per 9 és per 10 i treure'n un: ${10 * b} − ${b} = ${p}.`, `Por 9 es por 10 y quitar uno: ${10 * b} − ${b} = ${p}.`),
    10: L(`Per 10 només cal afegir un zero: ${b} → ${p}.`, `Por 10 solo hay que añadir un cero: ${b} → ${p}.`)
  })[t] || `${t} × ${b} = ${p}.`;
}
const EMS_ = [['⭐', 'estrelles', 'estrellas'], ['🍪', 'galetes', 'galletas'], ['🍎', 'pomes', 'manzanas'], ['🌸', 'flors', 'flores'], ['⚽', 'pilotes', 'pelotas'], ['🧁', 'magdalenes', 'magdalenas']];
const pickEm = () => { const x = pick(EMS_); return [x[0], L(x[1], x[2])]; };
const SHARE_ = [['🍪', 'galetes', 'galletas', 'f'], ['🍬', 'caramels', 'caramelos', 'm'], ['🍓', 'maduixes', 'fresas', 'f'], ['🎈', 'globus', 'globos', 'm'], ['🖍️', 'ceres', 'ceras', 'f'], ['🌰', 'castanyes', 'castañas', 'f']];
const pickShare = () => { const x = pick(SHARE_); return { em: x[0], nm: L(x[1], x[2]), g: x[3], Q: x[3] === 'f' ? L('Quantes', 'Cuántas') : L('Quants', 'Cuántos') }; };
const FRIENDS = ['🧒', '👧', '👦', '🧑', '👧'];
const PSETS = [['🔴', '🔵', '🟡', '🟢'], ['🍎', '🍐', '🍇', '🍋'], ['⭐', '🌙', '☀️', '☁️'], ['🐱', '🐶', '🐭', '🐰'], ['🔺', '🟦', '⚪', '🔶']];
const FR = ['🍎', '🍌', '🍓', '🍐', '🍊', '🍇', '🧁', '🍩'];
const DENW = { 2: [['mig', 'mitjos'], ['medio', 'medios']], 3: [['terç', 'terços'], ['tercio', 'tercios']], 4: [['quart', 'quarts'], ['cuarto', 'cuartos']], 5: [['cinquè', 'cinquens'], ['quinto', 'quintos']], 6: [['sisè', 'sisens'], ['sexto', 'sextos']], 8: [['vuitè', 'vuitens'], ['octavo', 'octavos']], 10: [['desè', 'desens'], ['décimo', 'décimos']] };
const den = (d, pl) => L(DENW[d][0][pl], DENW[d][1][pl]);
const NUMW = () => L(['', 'un', 'dos', 'tres', 'quatre', 'cinc', 'sis', 'set', 'vuit', 'nou'], ['', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']);
const fracName = (n, d) => n === 1 ? `un ${den(d, 0)}` : `${NUMW()[n]} ${den(d, 1)}`;
const FOF = d => L({ 2: 'la meitat', 3: 'un terç', 4: 'un quart', 5: 'un cinquè', 6: 'un sisè', 8: 'un vuitè', 10: 'un desè' }, { 2: 'la mitad', 3: 'un tercio', 4: 'un cuarto', 5: 'un quinto', 6: 'un sexto', 8: 'un octavo', 10: 'un décimo' })[d];
const HW = ['', 'una', 'dues', 'tres', 'quatre', 'cinc', 'sis', 'set', 'vuit', 'nou', 'deu', 'onze', 'dotze'];
const HWE = ['', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'];
const deH = h => (h === 1 || h === 11) ? `d'${HW[h]}` : `de ${HW[h]}`;
const lesH = h => L(h === 1 ? 'la una' : 'les ' + HW[h], h === 1 ? 'la una' : 'las ' + HWE[h]);
const QN = ['', 'un quart', 'dos quarts', 'tres quarts'];
function quartName(h, m) {
  const nx = h % 12 + 1;
  if (LANG === 'es') return m === 0 ? `${lesH(h)} en punto` : m === 15 ? `${lesH(h)} y cuarto` : m === 30 ? `${lesH(h)} y media` : `${lesH(nx)} menos cuarto`;
  return m === 0 ? `${lesH(h)} en punt` : `${QN[m / 15]} ${deH(nx)}`;
}
const dig = (h, m) => `${h}:${pad(m)}`;
const durTxt = d => d < 60 ? L(`${d} minuts`, `${d} minutos`) : d === 60 ? L('una hora', 'una hora') : L('una hora i mitja', 'una hora y media');
const SHP = [['triangle', 3], ['quadrat', 4], ['rectangle', 4], ['pentàgon', 5], ['hexàgon', 6], ['octàgon', 8], ['cercle', 0]];
const SHN = { triangle: ['triangle', 'triángulo'], quadrat: ['quadrat', 'cuadrado'], rectangle: ['rectangle', 'rectángulo'], 'pentàgon': ['pentàgon', 'pentágono'], 'hexàgon': ['hexàgon', 'hexágono'], 'octàgon': ['octàgon', 'octágono'], cercle: ['cercle', 'círculo'] };
const shn = id => tx(SHN[id]);
const ITEMS = () => L(['un llibre', 'una pilota', 'una motxilla', 'un joc de taula', 'una samarreta', 'un estoig', 'un trencaclosques'], ['un libro', 'una pelota', 'una mochila', 'un juego de mesa', 'una camiseta', 'un estuche', 'un rompecabezas']);
const NOMS = [['Pau', 'en'], ['Laia', 'la'], ['Nil', 'en'], ['Júlia', 'la'], ['Arnau', "l'"], ['Aina', "l'"], ['Jan', 'en'], ['Martina', 'la'], ['Pol', 'en'], ['Ona', "l'"], ['Biel', 'en'], ['Carla', 'la']];
function nomP() {
  const [n, a] = pick(NOMS);
  if (LANG === 'es') return { c: n, C: n };
  const j = a.endsWith("'") ? '' : ' ';
  return { c: a + j + n, C: cap(a) + j + n };
}

/* --- Problemes --- */
const PROB = {
  add: [
    () => { const a = ri(12, 60), b = ri(5, 35), N = nomP(); return [L(`${N.C} té ${a} cromos i en guanya ${b} més al pati. Quants cromos té ara?`, `${N.C} tiene ${a} cromos y gana ${b} más en el patio. ¿Cuántos cromos tiene ahora?`), a + b, `${a} + ${b} = ${a + b} cromos.`]; },
    () => { const a = ri(25, 60), b = ri(5, a - 8); return [L(`En un autobús hi ha ${a} persones. A la parada en baixen ${b}. Quantes persones queden a l'autobús?`, `En un autobús hay ${a} personas. En la parada bajan ${b}. ¿Cuántas personas quedan en el autobús?`), a - b, L(`Baixar vol dir treure: ${a} − ${b} = ${a - b} persones.`, `Bajar quiere decir quitar: ${a} − ${b} = ${a - b} personas.`)]; },
    () => { const c = ri(60, 150), a = ri(15, c - 10), N = nomP(); return [L(`${N.C} llegeix un llibre de ${c} pàgines. Ja n'ha llegit ${a}. Quantes pàgines li falten?`, `${N.C} lee un libro de ${c} páginas. Ya ha leído ${a}. ¿Cuántas páginas le faltan?`), c - a, L(`${c} − ${a} = ${c - a} pàgines.`, `${c} − ${a} = ${c - a} páginas.`)]; },
    () => { const a = ri(8, 25), b = ri(4, 19); return [L(`Un llibre costa ${a} € i una llibreta, ${b} €. Quant costen tots dos junts?`, `Un libro cuesta ${a} € y una libreta, ${b} €. ¿Cuánto cuestan los dos juntos?`), a + b, `${a} + ${b} = ${a + b} €.`, '€']; },
    () => { const a = ri(120, 300), b = ri(40, 99); return [L(`Al matí, ${a} persones visiten el castell de Gardeny. A la tarda n'hi van ${b} més que al matí. Quantes persones hi van a la tarda?`, `Por la mañana, ${a} personas visitan el castillo de Gardeny. Por la tarde van ${b} más que por la mañana. ¿Cuántas personas van por la tarde?`), a + b, L(`«${b} més que al matí» vol dir sumar: ${a} + ${b} = ${a + b}.`, `«${b} más que por la mañana» quiere decir sumar: ${a} + ${b} = ${a + b}.`)]; }
  ],
  mul: [
    () => { const a = ri(4, 9), b = ri(5, 10); return [L(`Al teatre de la Fira de Titelles hi ha ${a} files amb ${b} cadires cada una. Quantes cadires hi ha en total?`, `En el teatro de la Fira de Titelles hay ${a} filas con ${b} sillas cada una. ¿Cuántas sillas hay en total?`), a * b, L(`${a} files × ${b} cadires = ${a * b} cadires.`, `${a} filas × ${b} sillas = ${a * b} sillas.`)]; },
    () => { const a = ri(3, 9), b = pick([6, 8, 10, 12]); return [L(`Un paquet porta ${b} retoladors. Quants retoladors hi ha en ${a} paquets?`, `Un paquete trae ${b} rotuladores. ¿Cuántos rotuladores hay en ${a} paquetes?`), a * b, L(`${a} × ${b} = ${a * b} retoladors.`, `${a} × ${b} = ${a * b} rotuladores.`)]; },
    () => { const a = ri(3, 9); return [L(`Una aranya té 8 potes. Quantes potes tenen ${a} aranyes?`, `Una araña tiene 8 patas. ¿Cuántas patas tienen ${a} arañas?`), a * 8, L(`${a} × 8 = ${a * 8} potes.`, `${a} × 8 = ${a * 8} patas.`)]; },
    () => { const a = ri(3, 10), b = ri(2, 9), N = nomP(); return [L(`${N.C} estalvia ${b} € cada setmana. Quants euros tindrà al cap de ${a} setmanes?`, `${N.C} ahorra ${b} € cada semana. ¿Cuántos euros tendrá al cabo de ${a} semanas?`), a * b, `${a} × ${b} = ${a * b} €.`, '€']; },
    () => { const a = ri(3, 9); return [L(`Un tricicle té 3 rodes. Quantes rodes tenen ${a} tricicles?`, `Un triciclo tiene 3 ruedas. ¿Cuántas ruedas tienen ${a} triciclos?`), a * 3, L(`${a} × 3 = ${a * 3} rodes.`, `${a} × 3 = ${a * 3} ruedas.`)]; }
  ],
  div: [
    () => { const b = ri(2, 6), q = ri(3, 9), N = nomP(); return [L(`${N.C} té ${b * q} caramels i els reparteix a parts iguals entre ${b} amics. Quants caramels li toquen a cada amic?`, `${N.C} tiene ${b * q} caramelos y los reparte a partes iguales entre ${b} amigos. ¿Cuántos caramelos le tocan a cada amigo?`), q, L(`${b * q} ÷ ${b} = ${q} caramels.`, `${b * q} ÷ ${b} = ${q} caramelos.`)]; },
    () => { const b = pick([3, 4, 5, 6]), q = ri(3, 8); return [L(`A la classe de programació hi ha ${b * q} alumnes i fan equips de ${b}. Quants equips surten?`, `En la clase de programación hay ${b * q} alumnos y hacen equipos de ${b}. ¿Cuántos equipos salen?`), q, L(`${b * q} ÷ ${b} = ${q} equips.`, `${b * q} ÷ ${b} = ${q} equipos.`)]; },
    () => { const q = ri(3, 9); return [L(`Una capsa d'ous en porta 6. Quantes capses necessites per guardar ${6 * q} ous?`, `Una caja de huevos lleva 6. ¿Cuántas cajas necesitas para guardar ${6 * q} huevos?`), q, L(`${6 * q} ÷ 6 = ${q} capses.`, `${6 * q} ÷ 6 = ${q} cajas.`)]; },
    () => { const b = ri(3, 8), q = ri(4, 9); return [L(`Tenim ${b * q} trossos de coca i cada persona en menja ${b}. Quantes persones en poden menjar?`, `Tenemos ${b * q} trozos de coca y cada persona come ${b}. ¿Cuántas personas pueden comer?`), q, L(`${b * q} ÷ ${b} = ${q} persones.`, `${b * q} ÷ ${b} = ${q} personas.`)]; },
    () => { const q = ri(4, 12), b = pick([2, 4, 5]); return [L(`Una corda de ${b * q} metres es talla en trossos de ${b} metres. Quants trossos surten?`, `Una cuerda de ${b * q} metros se corta en trozos de ${b} metros. ¿Cuántos trozos salen?`), q, L(`${b * q} ÷ ${b} = ${q} trossos.`, `${b * q} ÷ ${b} = ${q} trozos.`)]; }
  ],
  two: [
    () => { const a = ri(2, 5), b = pick([6, 8, 10, 12]), c = ri(2, a * b - 2), N = nomP(); return [L(`${N.C} compra ${a} paquets de ${b} galetes i se'n menja ${c}. Quantes galetes li queden?`, `${N.C} compra ${a} paquetes de ${b} galletas y se come ${c}. ¿Cuántas galletas le quedan?`), a * b - c, L(`Primer: ${a} × ${b} = ${a * b} galetes. Després: ${a * b} − ${c} = ${a * b - c}.`, `Primero: ${a} × ${b} = ${a * b} galletas. Después: ${a * b} − ${c} = ${a * b - c}.`)]; },
    () => { const a = ri(3, 8), b = ri(2, 5), N = nomP(); return [L(`Una entrada al museu costa ${a} €. ${N.C} hi va amb ${b} amics. Quant paguen en total?`, `Una entrada al museo cuesta ${a} €. ${N.C} va con ${b} amigos. ¿Cuánto pagan en total?`), a * (b + 1), L(`Compte! Són ${b} amics més ${N.c}: ${b + 1} persones. ${b + 1} × ${a} = ${a * (b + 1)} €.`, `¡Cuidado! Son ${b} amigos más ${N.c}: ${b + 1} personas. ${b + 1} × ${a} = ${a * (b + 1)} €.`), '€']; },
    () => { const b = ri(2, 5), c = ri(2, 6), a = b * c + ri(1, 15), N = nomP(); return [L(`${N.C} té ${a} €. Compra ${b} llibretes de ${c} € cadascuna. Quants diners li queden?`, `${N.C} tiene ${a} €. Compra ${b} libretas de ${c} € cada una. ¿Cuánto dinero le queda?`), a - b * c, L(`Les llibretes costen ${b} × ${c} = ${b * c} €. Li queden ${a} − ${b * c} = ${a - b * c} €.`, `Las libretas cuestan ${b} × ${c} = ${b * c} €. Le quedan ${a} − ${b * c} = ${a - b * c} €.`), '€']; },
    () => { const c = ri(150, 200), a = ri(40, 70), b = ri(30, 60), N = nomP(); return [L(`Per pujar a la Seu Vella, ${N.c} puja ${a} graons, descansa i en puja ${b} més. Si n'hi ha ${c} en total, quants graons li falten?`, `Para subir a la Seu Vella, ${N.c} sube ${a} escalones, descansa y sube ${b} más. Si hay ${c} en total, ¿cuántos escalones le faltan?`), c - a - b, L(`Ja n'ha pujat ${a} + ${b} = ${a + b}. Li falten ${c} − ${a + b} = ${c - a - b} graons.`, `Ya ha subido ${a} + ${b} = ${a + b}. Le faltan ${c} − ${a + b} = ${c - a - b} escalones.`)]; },
    () => { const a = ri(8, 12), b = ri(3, 9), N = nomP(); return [L(`${N.C} té ${a} anys i el seu cosí en té ${b} més. Quants anys sumen entre tots dos?`, `${N.C} tiene ${a} años y su primo tiene ${b} más. ¿Cuántos años suman entre los dos?`), 2 * a + b, L(`El cosí té ${a} + ${b} = ${a + b} anys. Junts: ${a} + ${a + b} = ${2 * a + b} anys.`, `El primo tiene ${a} + ${b} = ${a + b} años. Juntos: ${a} + ${a + b} = ${2 * a + b} años.`)]; }
  ],
  big: [
    () => { const c = pick([10, 12, 20]), k = ri(15, 40), t = c * k, a = ri(Math.round(t * .3), Math.round(t * .7)); return [L(`A l'Aplec del Caragol, una colla cuina ${a} caragols al matí i ${t - a} a la tarda. Si els serveixen en plats de ${c}, quants plats omplen?`, `En el Aplec del Caragol, una peña cocina ${a} caracoles por la mañana y ${t - a} por la tarde. Si los sirven en platos de ${c}, ¿cuántos platos llenan?`), k, L(`Primer: ${a} + ${t - a} = ${t} caragols. Després: ${t} ÷ ${c} = ${k} plats.`, `Primero: ${a} + ${t - a} = ${t} caracoles. Después: ${t} ÷ ${c} = ${k} platos.`)]; },
    () => { const a = ri(4, 9), b = ri(12, 25), c = ri(10, a * b - 10); return [L(`Un pagès de l'Horta de Lleida omple ${a} caixes amb ${b} peres cada una. En ven ${c}. Quantes peres li queden?`, `Un agricultor de la Huerta de Lleida llena ${a} cajas con ${b} peras cada una. Vende ${c}. ¿Cuántas peras le quedan?`), a * b - c, L(`Primer: ${a} × ${b} = ${a * b} peres. Després: ${a * b} − ${c} = ${a * b - c}.`, `Primero: ${a} × ${b} = ${a * b} peras. Después: ${a * b} − ${c} = ${a * b - c}.`)]; },
    () => { const b = ri(3, 6), q = ri(12, 25), c = ri(2, 9); return [L(`A la biblioteca hi ha ${b * q} llibres repartits en ${b} prestatges iguals. Si a cada prestatge hi posen ${c} llibres més, quants llibres hi haurà a cada prestatge?`, `En la biblioteca hay ${b * q} libros repartidos en ${b} estantes iguales. Si en cada estante ponen ${c} libros más, ¿cuántos libros habrá en cada estante?`), q + c, L(`Primer: ${b * q} ÷ ${b} = ${q} llibres per prestatge. Després: ${q} + ${c} = ${q + c}.`, `Primero: ${b * q} ÷ ${b} = ${q} libros por estante. Después: ${q} + ${c} = ${q + c}.`)]; },
    () => { const a = ri(20, 45), b = ri(5, 15), c = ri(8, 20); return [L(`Un autobús porta ${a} passatgers. A la primera parada en pugen ${b} i a la segona en baixen ${c}. Quants passatgers hi ha ara?`, `Un autobús lleva ${a} pasajeros. En la primera parada suben ${b} y en la segunda bajan ${c}. ¿Cuántos pasajeros hay ahora?`), a + b - c, L(`${a} + ${b} = ${a + b}, i ${a + b} − ${c} = ${a + b - c} passatgers.`, `${a} + ${b} = ${a + b}, y ${a + b} − ${c} = ${a + b - c} pasajeros.`)]; }
  ]
};
const probEx = k => () => { const [q, a, ex, u] = pick(PROB[k])(); return inp(q, a, { ex, unit: u, long: true }); };

/* ===== Habilitats ===== */
const EX = {
  'n.place': (L_, A) => {
    const k = +A || digOf(L_), n = rndN(k, true), s = String(n), pos = ri(0, k - 1), d = +s[k - 1 - pos], pl = PL()[pos];
    if (d === 0 || Math.random() < .5) {
      const others = shuffle(s.split('').map(Number).filter(x => x !== d));
      return mc(L(`Quina xifra hi ha a les <b>${pl}</b>?`, `¿Qué cifra hay en las <b>${pl}</b>?`), d, others.concat([(d + 3) % 10, (d + 7) % 10]), { vis: bigNum(fmt(n)), big: true, ex: L(`De dreta a esquerra: ${PLS.slice(0, k).join(', ')}. A les ${pl} hi ha la xifra ${d}.`, `De derecha a izquierda: ${PLS.slice(0, k).join(', ')}. En las ${pl} está la cifra ${d}.`) });
    }
    const v = d * 10 ** pos, dis = [];
    for (let p = 0; p <= k; p++) if (p !== pos) dis.push(fmt(d * 10 ** p));
    return mc(L(`Quant val la xifra <b>${d}</b> en aquest número?`, `¿Cuánto vale la cifra <b>${d}</b> en este número?`), fmt(v), shuffle(dis), { vis: bigNum(fmt(n)), ex: L(`La xifra ${d} és a les ${pl}, així que val ${fmt(v)}.`, `La cifra ${d} está en las ${pl}, así que vale ${fmt(v)}.`) });
  },
  'n.decomp': (L_, A) => {
    const k = +A || digOf(L_); let n = rndN(k);
    if (L_ >= 3 && Math.random() < .5) { const s = String(n).split(''); s[ri(1, k - 1)] = '0'; n = +s.join(''); }
    const s = String(n), parts = [], partsL = [];
    for (let i = 0; i < k; i++) { const d = +s[i], p = k - 1 - i; if (d) { parts.push(fmt(d * 10 ** p)); partsL.push(`${d} ${PLS[p]}`); } }
    const useL = L_ >= 2 && Math.random() < .5, t = (useL ? partsL : parts).join(' + ');
    const leg = useL ? `<div class="legend">${PLS.slice(0, k).map((x, i) => `${x} = ${PL()[i]}`).reverse().join(' · ')}</div>` : '';
    return inp(L('Quin número és?', '¿Qué número es?'), n, { vis: `<div class="stack">${eqv(t)}${leg}</div>`, ex: `${t} = ${fmt(n)}` });
  },
  'n.words': (L_, A) => {
    const k = +A || digOf(L_), n = rndN(k);
    if (L_ >= 3 && Math.random() < .4) return mc(L('Com es llegeix aquest número?', '¿Cómo se lee este número?'), numToCa(n), variants(n).map(numToCa), { vis: bigNum(fmt(n)), list: true, ex: L(`${fmt(n)} es llegeix «${numToCa(n)}».`, `${fmt(n)} se lee «${numToCa(n)}».`) });
    return inp(L('Escriu amb xifres:', 'Escribe con cifras:'), n, { vis: `<div class="words">${numToCa(n)}</div>`, ex: `«${numToCa(n)}» = ${fmt(n)}` });
  },
  'n.next': L_ => {
    const k = digOf(L_), after = Math.random() < .5, z = ri(1, k - 1);
    let base = ri(10 ** (k - z - 1), 10 ** (k - z) - 1);
    if (after && base % 10 === 9) base--;
    if (base < 1) base = 1;
    const n = after ? base * 10 ** z + (10 ** z - 1) : base * 10 ** z, ans = after ? n + 1 : n - 1;
    return inp(L(`Quin número va just <b>${after ? 'després' : 'abans'}</b> de ${fmt(n)}?`, `¿Qué número va justo <b>${after ? 'después' : 'antes'}</b> de ${fmt(n)}?`), ans, { vis: eqv(after ? `${fmt(n)} + 1 = ${BOX}` : `${fmt(n)} − 1 = ${BOX}`), ex: L(`${fmt(n)} ${after ? '+' : '−'} 1 = ${fmt(ans)}. Compte amb els ${after ? '9' : '0'} del final: canvien diverses xifres alhora!`, `${fmt(n)} ${after ? '+' : '−'} 1 = ${fmt(ans)}. ¡Cuidado con los ${after ? '9' : '0'} del final: cambian varias cifras a la vez!`) });
  },
  'n.compare': (L_, A) => {
    const k = +A || (L_ <= 3 ? digOf(L_) : 5), a = rndN(k); let b;
    const r = Math.random();
    if (r < .12) b = a;
    else if (L_ >= 4 && r < .25) b = rndN(k - 1);
    else { const s = String(a).split(''), p = ri(1, k - 1); let nd; do nd = ri(0, 9); while (nd === +s[p]); s[p] = nd; b = +s.join(''); }
    const sym = a < b ? '<' : a > b ? '>' : '=';
    let ex;
    if (a === b) ex = L('Són iguals: totes les xifres coincideixen.', 'Son iguales: todas las cifras coinciden.');
    else if (String(a).length !== String(b).length) ex = L(`${fmt(Math.max(a, b))} té més xifres, per tant és més gran.`, `${fmt(Math.max(a, b))} tiene más cifras, por lo tanto es mayor.`);
    else {
      const sa = String(a), sb = String(b); let i = 0; while (sa[i] === sb[i]) i++;
      ex = L(`Mirem d'esquerra a dreta. A les ${PL()[k - 1 - i]}: ${sa[i]} ${+sa[i] > +sb[i] ? 'és més gran que' : 'és més petit que'} ${sb[i]}. Per tant, ${fmt(a)} ${sym} ${fmt(b)}.`, `Miramos de izquierda a derecha. En las ${PL()[k - 1 - i]}: ${sa[i]} ${+sa[i] > +sb[i] ? 'es mayor que' : 'es menor que'} ${sb[i]}. Por lo tanto, ${fmt(a)} ${sym} ${fmt(b)}.`);
    }
    return mc(L('Quin signe hi va?', '¿Qué signo va?'), sym, [], { fixed: ['<', '=', '>'], vis: `<div class="cmp"><span>${fmt(a)}</span>${BOX}<span>${fmt(b)}</span></div>`, big: true, ex });
  },
  'n.order': (L_, A) => {
    const k = +A || (L_ <= 3 ? 4 : 5), desc = L_ >= 5 && Math.random() < .5, first = ri(1, 9), set = new Set();
    while (set.size < 4) set.add(+(String(first) + String(ri(0, 10 ** (k - 1) - 1)).padStart(k - 1, '0')));
    const vals = [...set], ans = vals.slice().sort((x, y) => desc ? y - x : x - y);
    return { type: 'order', q: L(`Toca els números de <b>${desc ? 'més gran a més petit' : 'més petit a més gran'}</b>:`, `Toca los números de <b>${desc ? 'mayor a menor' : 'menor a mayor'}</b>:`), items: shuffle(vals), ans, ex: ans.map(fmt).join(desc ? ' > ' : ' < ') };
  },
  'n.round': (L_, A) => {
    const k = +A || (L_ <= 4 ? 4 : 5), to = pick(k >= 6 ? [100, 1000, 10000] : L_ <= 4 ? [10, 100] : [10, 100, 1000]); let n = rndN(k);
    if (n % to === 0) n += ri(1, to - 1);
    const down = Math.floor(n / to) * to, up = down + to, r = Math.round(n / to) * to, other = r === down ? up : down;
    const nm = L({ 10: 'la desena', 100: 'la centena', 1000: 'la unitat de miler', 10000: 'la desena de miler' }, { 10: 'la decena', 100: 'la centena', 1000: 'la unidad de millar', 10000: 'la decena de millar' })[to];
    const half = n - down === to / 2, far = r === up ? up + to : Math.max(0, down - to);
    return mc(L(`Arrodoneix a <b>${nm}</b> més propera:`, `Redondea a <b>${nm}</b> más cercana:`), fmt(r), [fmt(other), fmt(far), fmt(Math.round(n / (to * 10)) * to * 10), fmt(n - n % Math.max(1, to / 10))], {
      vis: bigNum(fmt(n)),
      ex: half ? L(`${fmt(n)} és just al mig entre ${fmt(down)} i ${fmt(up)}. Quan és al mig, arrodonim cap amunt: ${fmt(r)}.`, `${fmt(n)} está justo en medio entre ${fmt(down)} y ${fmt(up)}. Cuando está en medio, redondeamos hacia arriba: ${fmt(r)}.`) : L(`${fmt(n)} és entre ${fmt(down)} i ${fmt(up)}, però està més a prop de ${fmt(r)}.`, `${fmt(n)} está entre ${fmt(down)} y ${fmt(up)}, pero está más cerca de ${fmt(r)}.`)
    });
  },

  'a.add': L_ => {
    let a, b;
    if (L_ <= 1) { if (Math.random() < .5) { a = ri(12, 88); b = ri(3, 9); } else { a = ri(1, 6) * 10 + ri(0, 5); b = ri(1, 3) * 10 + ri(0, 4); } }
    else if (L_ === 2) { a = ri(25, 79); b = ri(12, 49); }
    else if (L_ <= 4) { a = ri(125, 689); b = ri(108, 299); }
    else { a = ri(1200, 6800); b = Math.random() < .5 ? ri(150, 950) : ri(1100, 2900); }
    const s = a + b;
    if (a < 100) return inp(L('Quant fa?', '¿Cuánto es?'), s, { vis: eqv(`${a} + ${b} = ${BOX}`), ex: addTip(a, b) });
    return inp(L('Fes la suma:', 'Haz la suma:'), s, { vis: colOp(a, b, '+'), ex: L(`Comença per les unitats. Si passes de 9, te'n portes una a la columna del costat. ${fmt(a)} + ${fmt(b)} = ${fmt(s)}.`, `Empieza por las unidades. Si pasas de 9, te llevas una a la columna de al lado. ${fmt(a)} + ${fmt(b)} = ${fmt(s)}.`) });
  },
  'a.sub': L_ => {
    let a, b;
    if (L_ <= 1) { a = ri(15, 89); b = ri(2, 9); }
    else if (L_ === 2) { a = ri(40, 99); b = ri(11, a - 10); }
    else if (L_ <= 4) { a = ri(300, 950); b = ri(105, a - 50); }
    else { a = ri(2000, 9500); b = Math.random() < .5 ? ri(120, 990) : ri(1050, a - 100); }
    const d = a - b;
    if (a < 100) return inp(L('Quant fa?', '¿Cuánto es?'), d, { vis: eqv(`${a} − ${b} = ${BOX}`), ex: subTip(a, b) });
    return inp(L('Fes la resta:', 'Haz la resta:'), d, { vis: colOp(a, b, '−'), ex: L(`Resta columna per columna des de les unitats. Si la xifra de dalt és més petita, demana'n una a la columna del costat. Comprova-ho: ${fmt(d)} + ${fmt(b)} = ${fmt(a)}.`, `Resta columna por columna desde las unidades. Si la cifra de arriba es más pequeña, pide una a la columna de al lado. Compruébalo: ${fmt(d)} + ${fmt(b)} = ${fmt(a)}.`) });
  },
  'a.missing': L_ => {
    const big = L_ >= 5, a = ri(big ? 120 : 12, big ? 680 : 68), b = ri(big ? 110 : 8, big ? 290 : 39), c = a + b;
    const forms = [
      [`${BOX} + ${b} = ${c}`, a, L(`Fes l'operació contrària: ${c} − ${b} = ${a}.`, `Haz la operación contraria: ${c} − ${b} = ${a}.`)],
      [`${a} + ${BOX} = ${c}`, b, L(`Quant falta de ${a} a ${c}? ${c} − ${a} = ${b}.`, `¿Cuánto falta de ${a} a ${c}? ${c} − ${a} = ${b}.`)],
      [`${c} − ${BOX} = ${a}`, b, L(`Quant he de treure de ${c} per arribar a ${a}? ${c} − ${a} = ${b}.`, `¿Cuánto tengo que quitar a ${c} para llegar a ${a}? ${c} − ${a} = ${b}.`)],
      [`${BOX} − ${b} = ${a}`, c, L(`Fes l'operació contrària: ${a} + ${b} = ${c}.`, `Haz la operación contraria: ${a} + ${b} = ${c}.`)]
    ];
    const [s, ans, ex] = pick(forms);
    return inp(L("Quin número s'amaga a la capsa?", '¿Qué número se esconde en la caja?'), ans, { vis: eqv(s), ex });
  },
  'a.estimate': L_ => {
    const add = Math.random() < .5, h1 = add ? ri(2, 6) : ri(4, 9), h2 = ri(1, 3), j = () => pick([-4, -3, -2, -1, 1, 2, 3, 4]);
    const a = h1 * 100 + j(), b = h2 * 100 + j(), ap = add ? (h1 + h2) * 100 : (h1 - h2) * 100, op = add ? '+' : '−';
    return mc(L("Sense fer el càlcul exacte, quin resultat s'hi <b>acosta més</b>?", 'Sin hacer el cálculo exacto, ¿qué resultado se <b>acerca más</b>?'), ap, [ap - 100, ap + 100, ap + 200].filter(x => x > 0), { vis: eqv(`${a} ${op} ${b}`), ex: L(`${a} és gairebé ${h1 * 100} i ${b} és gairebé ${h2 * 100}: ${h1 * 100} ${op} ${h2 * 100} = ${ap}.`, `${a} es casi ${h1 * 100} y ${b} es casi ${h2 * 100}: ${h1 * 100} ${op} ${h2 * 100} = ${ap}.`) });
  },

  'm.table': L_ => {
    const t = pick(TAB(L_)), b = ri(2, 10), p = t * b, sw = Math.random() < .5, x = sw ? b : t, y = sw ? t : b;
    if (Math.random() < .35) return mc(L('Quant fa?', '¿Cuánto es?'), p, shuffle([p + t, p - t, x + y, p + pick([1, -1, 2, 10])]).filter(v => v > 0), { vis: eqv(`${x} × ${y}`), ex: mulTip(t, b) });
    return inp(L('Quant fa?', '¿Cuánto es?'), p, { vis: eqv(`${x} × ${y} = ${BOX}`), ex: mulTip(t, b) });
  },
  'm.array': L_ => {
    const [em, nm] = pickEm(), r = ri(2, L_ <= 1 ? 4 : 5), c = ri(2, L_ <= 1 ? 5 : 7);
    if (Math.random() < .5) return inp(L(`Quantes ${nm} hi ha? Pista: compta les files i les columnes.`, `¿Cuántas ${nm} hay? Pista: cuenta las filas y las columnas.`), r * c, { vis: emGrid(em, r * c, c), ex: L(`Hi ha ${r} files de ${c}: ${r} × ${c} = ${r * c}.`, `Hay ${r} filas de ${c}: ${r} × ${c} = ${r * c}.`) });
    return mc(L(`Quina multiplicació diu quantes ${nm} hi ha?`, `¿Qué multiplicación dice cuántas ${nm} hay?`), `${r} × ${c}`, [`${r} + ${c}`, `${r} × ${c + 1}`, `${r + 1} × ${c}`, `${r} × ${c + 2}`], { vis: emGrid(em, r * c, c), ex: L(`Hi ha ${r} files de ${c} ${nm}: ${r} × ${c} = ${r * c}.`, `Hay ${r} filas de ${c} ${nm}: ${r} × ${c} = ${r * c}.`) });
  },
  'm.by10': L_ => {
    const m = pick(L_ >= 5 ? [10, 100, 1000] : [10, 100]), a = ri(2, L_ >= 5 ? 99 : 60), zeros = L({ 10: 'un zero', 100: 'dos zeros', 1000: 'tres zeros' }, { 10: 'un cero', 100: 'dos ceros', 1000: 'tres ceros' })[m];
    if (L_ >= 5 && Math.random() < .35) return inp(L('Quin número falta?', '¿Qué número falta?'), m, { vis: eqv(`${a} × ${BOX} = ${fmt(a * m)}`), ex: L(`${a} → ${fmt(a * m)}: hi hem afegit ${zeros}, per tant és × ${fmt(m)}.`, `${a} → ${fmt(a * m)}: hemos añadido ${zeros}, por lo tanto es × ${fmt(m)}.`) });
    return inp(L('Quant fa?', '¿Cuánto es?'), a * m, { vis: eqv(`${a} × ${fmt(m)} = ${BOX}`), ex: L(`Multiplicar per ${fmt(m)} és afegir ${zeros}: ${a} → ${fmt(a * m)}.`, `Multiplicar por ${fmt(m)} es añadir ${zeros}: ${a} → ${fmt(a * m)}.`) });
  },
  'm.missing': L_ => {
    const t = pick(TAB(L_)), b = ri(2, 10), p = t * b;
    return inp(L('Quin número falta?', '¿Qué número falta?'), b, { vis: eqv(Math.random() < .5 ? `${t} × ${BOX} = ${p}` : `${BOX} × ${t} = ${p}`), ex: L(`Busca a la taula del ${t}: ${t} × ${b} = ${p}.`, `Busca en la tabla del ${t}: ${t} × ${b} = ${p}.`) });
  },
  'm.big': L_ => {
    let a, b;
    if (L_ <= 4 || Math.random() < .4) { a = ri(12, 49); b = ri(2, 6); } else { a = ri(102, 399); b = ri(2, 5); }
    const p = a * b, s = String(a), parts = [];
    for (let i = 0; i < s.length; i++) { const v = +s[i] * 10 ** (s.length - 1 - i); if (v) parts.push(v); }
    return inp(L('Fes la multiplicació:', 'Haz la multiplicación:'), p, { vis: colOp(a, b, '×'), ex: L('Descompon: ', 'Descompón: ') + `${parts.map(v => `${v} × ${b}`).join(' + ')} = ${parts.map(v => fmt(v * b)).join(' + ')} = ${fmt(p)}.` });
  },

  'd.share': L_ => {
    const { em, nm, Q } = pickShare(), b = ri(2, L_ <= 1 ? 4 : 5), q = ri(2, L_ <= 1 ? 5 : 6), n = b * q;
    return inp(L(`Reparteix ${n} ${nm} entre ${b} amics a parts iguals. ${Q} ${nm} li toquen a cada amic?`, `Reparte ${n} ${nm} entre ${b} amigos a partes iguales. ¿${Q} ${nm} le tocan a cada amigo?`), q, {
      vis: `<div class="stack"><div class="friends">${FRIENDS.slice(0, b).join('')}</div>${emGrid(em, n, Math.min(n, 6))}</div>`,
      ex: L(`${n} ÷ ${b} = ${q}, perquè ${b} × ${q} = ${n}. Cada amic en rep ${q}.`, `${n} ÷ ${b} = ${q}, porque ${b} × ${q} = ${n}. Cada amigo recibe ${q}.`)
    });
  },
  'd.table': L_ => {
    const t = pick(L_ <= 2 ? [2, 3, 4, 5, 10] : L_ === 3 ? [6, 7, 8, 9] : [2, 3, 4, 5, 6, 7, 8, 9]), q = ri(2, 10), p = t * q;
    return inp(L('Quant fa?', '¿Cuánto es?'), q, { vis: eqv(`${p} ÷ ${t} = ${BOX}`), ex: L(`Pensa en la taula del ${t}: ${t} × ${q} = ${p}. Per tant, ${p} ÷ ${t} = ${q}.`, `Piensa en la tabla del ${t}: ${t} × ${q} = ${p}. Por lo tanto, ${p} ÷ ${t} = ${q}.`) });
  },
  'd.rel': L_ => {
    const t = pick(L_ <= 2 ? [2, 3, 4, 5] : [6, 7, 8, 9]), q = ri(3, 10), p = t * q, f = Math.random() < .5, dv = f ? t : q, ans = f ? q : t;
    return mc(L(`Si <b>${t} × ${q} = ${p}</b>, quant fa <b>${p} ÷ ${dv}</b>?`, `Si <b>${t} × ${q} = ${p}</b>, ¿cuánto es <b>${p} ÷ ${dv}</b>?`), ans, [p, dv === ans ? ans + 2 : dv, ans + 1, ans - 1, p - dv].filter(x => x > 0), { ex: L(`La divisió és l'operació contrària de la multiplicació: ${p} ÷ ${dv} = ${ans}.`, `La división es la operación contraria de la multiplicación: ${p} ÷ ${dv} = ${ans}.`) });
  },
  'd.rem': L_ => {
    const b = ri(2, L_ >= 5 ? 9 : 6), q = ri(2, 9), r = ri(1, b - 1), a = b * q + r;
    if (Math.random() < .5) return inp(L(`Fas grups de ${b} amb ${a} boles. Quantes boles <b>sobren</b>?`, `Haces grupos de ${b} con ${a} bolas. ¿Cuántas bolas <b>sobran</b>?`), r, { vis: eqv(L(`${a} ÷ ${b} = ${q} i en sobren ${BOX}`, `${a} ÷ ${b} = ${q} y sobran ${BOX}`)), ex: L(`${b} × ${q} = ${b * q}, i de ${b * q} a ${a} en sobren ${r}. El que sobra sempre és més petit que ${b}.`, `${b} × ${q} = ${b * q}, y de ${b * q} a ${a} sobran ${r}. Lo que sobra siempre es menor que ${b}.`) });
    return inp(L(`Tens ${a} ous i els poses en capses de ${b}. Quantes capses <b>plenes</b> omples?`, `Tienes ${a} huevos y los pones en cajas de ${b}. ¿Cuántas cajas <b>llenas</b> completas?`), q, { ex: L(`${b} × ${q} = ${b * q}. Amb ${a} ous omples ${q} capses i en sobren ${r}, que no arriben a omplir-ne cap més.`, `${b} × ${q} = ${b * q}. Con ${a} huevos llenas ${q} cajas y sobran ${r}, que no llegan a llenar ninguna más.`) });
  },
  'd.big': L_ => {
    const b = ri(2, L_ >= 5 ? 6 : 4), q = ri(11, L_ >= 5 ? 49 : 29), a = b * q, qT = q - q % 10, qU = q % 10;
    return inp(L('Fes la divisió:', 'Haz la división:'), q, { vis: eqv(`${a} ÷ ${b} = ${BOX}`), ex: qU ? L(`Descompon: ${a} = ${qT * b} + ${qU * b}. ${qT * b} ÷ ${b} = ${qT} i ${qU * b} ÷ ${b} = ${qU}. Total: ${qT} + ${qU} = ${q}.`, `Descompón: ${a} = ${qT * b} + ${qU * b}. ${qT * b} ÷ ${b} = ${qT} y ${qU * b} ÷ ${b} = ${qU}. Total: ${qT} + ${qU} = ${q}.`) : L(`${a} ÷ ${b} = ${q}, perquè ${q} × ${b} = ${a}.`, `${a} ÷ ${b} = ${q}, porque ${q} × ${b} = ${a}.`) });
  },

  'l.series': L_ => {
    let arr, rule, tail = false;   // tail: en les sèries que creixen o alternen, el forat va al final (al mig hi pot encaixar una altra regla)
    const lin = (s, d) => { arr = [0, 1, 2, 3, 4].map(i => s + i * d); rule = d > 0 ? L(`Cada vegada sumem ${d}.`, `Cada vez sumamos ${d}.`) : L(`Cada vegada restem ${-d}.`, `Cada vez restamos ${-d}.`); };
    if (L_ <= 1) lin(ri(1, 20), pick([2, 5, 10]));
    else if (L_ === 2) { const d = pick([3, 4, -2, -5, -10]); lin(d < 0 ? ri(45, 90) : ri(1, 30), d); }
    else {
      const kind = pick(L_ === 3 ? ['lin', 'x2', 'big'] : L_ === 4 ? ['grow', 'alt', 'lin', 'x2'] : ['grow', 'alt', 'x2', 'x3', 'big']);
      if (kind === 'lin') { const d = pick([6, 7, 8, 9, -3, -4, -6]); lin(d < 0 ? ri(50, 90) : ri(1, 20), d); }
      if (kind === 'big') { const d = pick([25, 50, 100, 11, -9, -11]); lin(d < 0 ? ri(80, 150) : ri(1, 60), d); }
      if (kind === 'x2') { const s = ri(1, 6); arr = [0, 1, 2, 3, 4].map(i => s * 2 ** i); rule = L("Cada número és el doble de l'anterior.", 'Cada número es el doble del anterior.'); }
      if (kind === 'x3') { const s = ri(1, 3); arr = [0, 1, 2, 3, 4].map(i => s * 3 ** i); rule = L("Cada número és el triple de l'anterior.", 'Cada número es el triple del anterior.'); }
      if (kind === 'grow') { const s = ri(1, 10), d0 = ri(1, 3); arr = [s]; for (let i = 1; i < 5; i++) arr.push(arr[i - 1] + d0 + i - 1); tail = true; rule = L(`Cada vegada sumem un més: +${d0}, +${d0 + 1}, +${d0 + 2}…`, `Cada vez sumamos uno más: +${d0}, +${d0 + 1}, +${d0 + 2}…`); }
      if (kind === 'alt') { const a = ri(3, 6), b = ri(1, a - 1), s = ri(5, 20); arr = [s]; for (let i = 1; i < 6; i++) arr.push(arr[i - 1] + (i % 2 ? a : -b)); tail = true; rule = L(`Alternem: +${a}, −${b}, +${a}, −${b}…`, `Alternamos: +${a}, −${b}, +${a}, −${b}…`); }
    }
    const miss = L_ >= 3 && !tail ? ri(1, arr.length - 1) : arr.length - 1;
    return inp(L('Quin número falta a la sèrie?', '¿Qué número falta en la serie?'), arr[miss], { vis: `<div class="seq">${arr.map((v, i) => i === miss ? BOX : `<span style="animation-delay:${i * 80}ms">${fmt(v)}</span>`).join('')}</div>`, ex: rule });
  },
  'l.pattern': L_ => {
    const set = shuffle(pick(PSETS)), pat = pick(L_ <= 1 ? ['AB', 'ABC', 'AAB'] : ['ABB', 'AABB', 'ABC', 'ABCB', 'AAB', 'ABAC']);
    const map = { A: set[0], B: set[1], C: set[2] }, unit = pat.split('').map(c => map[c]);
    const total = unit.length * 2 + ri(1, unit.length), seq = [...Array(total)].map((_, i) => unit[i % unit.length]), ans = unit[total % unit.length];
    return mc(L('Quin ve ara?', '¿Cuál viene ahora?'), ans, set.filter(x => x !== ans), { vis: `<div class="seq em">${seq.map((s, i) => `<span style="animation-delay:${i * 60}ms">${s}</span>`).join('')}${BOX}</div>`, big: true, ex: L(`El tros que es repeteix és: ${unit.join(' ')}.`, `El trozo que se repite es: ${unit.join(' ')}.`) });
  },
  'l.odd': L_ => {
    const P_ = L_ <= 2 ? pick(['par', 'sen', 'm5']) : pick(['par', 'sen', 'm5', 'm10', 'm3']);
    const test = { par: n => n % 2 === 0, sen: n => n % 2 === 1, m5: n => n % 5 === 0, m10: n => n % 10 === 0, m3: n => n % 3 === 0 }[P_];
    const nm = L({ par: 'parells', sen: 'senars', m5: 'múltiples de 5', m10: 'múltiples de 10', m3: 'múltiples de 3' }, { par: 'pares', sen: 'impares', m5: 'múltiplos de 5', m10: 'múltiplos de 10', m3: 'múltiplos de 3' })[P_];
    const rule = L({ par: 'Els parells acaben en 0, 2, 4, 6 o 8.', sen: 'Els senars acaben en 1, 3, 5, 7 o 9.', m5: 'Els múltiples de 5 acaben en 0 o en 5.', m10: 'Els múltiples de 10 acaben en 0.', m3: 'Un número és múltiple de 3 si la suma de les seves xifres és 3, 6, 9, 12…' }, { par: 'Los pares acaban en 0, 2, 4, 6 u 8.', sen: 'Los impares acaban en 1, 3, 5, 7 o 9.', m5: 'Los múltiplos de 5 acaban en 0 o en 5.', m10: 'Los múltiplos de 10 acaban en 0.', m3: 'Un número es múltiplo de 3 si la suma de sus cifras es 3, 6, 9, 12…' })[P_];
    const max = L_ <= 2 ? 99 : 999, yes = new Set(); let no;
    while (yes.size < 3) { const v = ri(10, max); if (test(v)) yes.add(v); }
    do no = ri(10, max); while (test(no));
    return mc(L(`Tres d'aquests números són <b>${nm}</b>. Quin <b>no</b> ho és?`, `Tres de estos números son <b>${nm}</b>. ¿Cuál <b>no</b> lo es?`), fmt(no), [...yes].map(fmt), { big: true, ex: rule + L(` El número ${fmt(no)} no compleix la regla.`, ` El número ${fmt(no)} no cumple la regla.`) });
  },
  'l.balance': L_ => {
    const [x, y] = shuffle(FR);
    const row = (l, r) => `<div class="bal"><span>${l}</span><span class="be">=</span><b>${r}</b></div>`, wrap = r => `<div class="bals">${r.join('')}</div>`;
    const v = L_ <= 3 ? pick([1, 2]) : L_ === 4 ? pick([2, 3]) : pick([3, 4, 5]), Qv = e => L(`Quant val ${e}?`, `¿Cuánto vale ${e}?`);
    if (v === 1) { const k = ri(2, 4), a = ri(2, 9); return inp(Qv(x), a, { vis: wrap([row(Array(k).fill(x).join(' + '), k * a)]), ex: L(`${k} vegades ${x} fan ${k * a}. Per tant, ${x} = ${k * a} ÷ ${k} = ${a}.`, `${k} veces ${x} son ${k * a}. Por lo tanto, ${x} = ${k * a} ÷ ${k} = ${a}.`) }); }
    if (v === 2) { const a = ri(3, 15), c = ri(2, 12); return inp(Qv(x), a, { vis: wrap([row(`${x} + ${c}`, a + c)]), ex: L(`Treu ${c} als dos costats: ${a + c} − ${c} = ${a}.`, `Quita ${c} a los dos lados: ${a + c} − ${c} = ${a}.`) }); }
    if (v === 3) { const a = ri(2, 9), b = ri(2, 9); return inp(Qv(y), b, { vis: wrap([row(`${x} + ${x}`, 2 * a), row(`${x} + ${y}`, a + b)]), ex: L(`Si ${x} + ${x} = ${2 * a}, llavors ${x} = ${a}. I si ${x} + ${y} = ${a + b}, llavors ${y} = ${a + b} − ${a} = ${b}.`, `Si ${x} + ${x} = ${2 * a}, entonces ${x} = ${a}. Y si ${x} + ${y} = ${a + b}, entonces ${y} = ${a + b} − ${a} = ${b}.`) }); }
    if (v === 4) { const a = ri(2, 9), b = ri(2, 6); return inp(Qv(x), a, { vis: wrap([row(`${x} + ${y}`, a + b), row(`${y} + ${y} + ${y}`, 3 * b)]), ex: L(`${y} = ${3 * b} ÷ 3 = ${b}. Llavors ${x} = ${a + b} − ${b} = ${a}.`, `${y} = ${3 * b} ÷ 3 = ${b}. Entonces ${x} = ${a + b} − ${b} = ${a}.`) }); }
    const a = ri(2, 8), b = ri(1, 6);
    return inp(Qv(x), a, { vis: wrap([row(`${x} + ${x} + ${y}`, 2 * a + b), row(y, b)]), ex: L(`Treu ${y}: ${2 * a + b} − ${b} = ${2 * a}. Dos ${x} fan ${2 * a}, així que ${x} = ${a}.`, `Quita ${y}: ${2 * a + b} − ${b} = ${2 * a}. Dos ${x} son ${2 * a}, así que ${x} = ${a}.`) });
  },
  'l.riddle': L_ => {
    const ds = n => String(n).split('').reduce((a, b) => a + +b, 0);
    for (let tries = 0; tries < 60; tries++) {
      const lo = ri(1, 7) * 10, hi = lo + (L_ >= 5 ? 30 : 20), t = ri(lo + 1, hi - 1), clues = [];
      [3, 4, 5, 6, 7, 9].forEach(k => { if (t % k === 0) clues.push([L(`Soc <b>múltiple de ${k}</b>.`, `Soy <b>múltiplo de ${k}</b>.`), n => n % k === 0]); });
      if (L_ >= 5 || Math.random() < .5) { const s = ds(t); clues.push([L(`Les meves xifres sumen <b>${s}</b>.`, `Mis cifras suman <b>${s}</b>.`), n => ds(n) === s]); }
      if (t - lo > 4) { const g = ri(lo + 2, t - 1); clues.push([L(`Soc <b>més gran que ${g}</b>.`, `Soy <b>mayor que ${g}</b>.`), n => n > g]); }
      if (hi - t > 4) { const g = ri(t + 1, hi - 2); clues.push([L(`Soc <b>més petit que ${g}</b>.`, `Soy <b>menor que ${g}</b>.`), n => n < g]); }
      const order = [[t % 2 ? L('Soc <b>senar</b>.', 'Soy <b>impar</b>.') : L('Soc <b>parell</b>.', 'Soy <b>par</b>.'), n => n % 2 === t % 2], ...shuffle(clues), [`Acabo en <b>${t % 10}</b>.`, n => n % 10 === t % 10]];
      let cands = []; for (let n = lo + 1; n < hi; n++) cands.push(n);
      const used = [];
      for (const c of order) { const nc = cands.filter(c[1]); if (nc.length < cands.length) { used.push(c); cands = nc; } if (cands.length === 1) break; }
      if (cands.length === 1 && used.length >= 2 && used.length <= (L_ >= 5 ? 4 : 3))
        return inp(L('Endevina quin número soc!', '¡Adivina qué número soy!'), t, { vis: `<div class="riddle"><div>🔎 ${L(`Soc un número entre <b>${lo}</b> i <b>${hi}</b>.`, `Soy un número entre <b>${lo}</b> y <b>${hi}</b>.`)}</div>${used.map((c, i) => `<div style="animation-delay:${(i + 1) * 150}ms">${c[0]}</div>`).join('')}</div>`, ex: L(`Només el ${t} compleix totes les pistes.`, `Solo el ${t} cumple todas las pistas.`) });
    }
    return EX['l.series'](L_);
  },

  'f.pie': L_ => {
    const d = pick(L_ <= 1 ? [2, 4] : L_ <= 4 ? [2, 3, 4, 5, 6, 8] : [3, 4, 5, 6, 8, 10]), n = ri(1, d - 1), col = pick(COLS);
    const vis = (Math.random() < .5 || d > 8) ? barSVG(n, d, col) : pieSVG(n, d, col);
    const dis = [[d - n, d], [n, d - n], [d, n], [n, d + 1]].filter(([a, b]) => a > 0 && b > 0 && !(a === n && b === d));
    return mc(L('Quina fracció està <b>pintada</b>?', '¿Qué fracción está <b>pintada</b>?'), frac(n, d), dis.map(([a, b]) => frac(a, b)), { vis, big: true, ex: L(`Hi ha ${d} parts iguals i n'hi ha ${n} de pintades: ${n}/${d} (${fracName(n, d)}).`, `Hay ${d} partes iguales y hay ${n} pintadas: ${n}/${d} (${fracName(n, d)}).`) });
  },
  'f.read': L_ => {
    const dens = [2, 3, 4, 5, 6, 8, 10], d = pick(dens), n = ri(1, d - 1);
    const expl = L(`El número de dalt (${n}) diu quantes parts agafem; el de baix (${d}), en quantes parts iguals ho dividim. Es llegeix «${fracName(n, d)}».`, `El número de arriba (${n}) dice cuántas partes cogemos; el de abajo (${d}), en cuántas partes iguales lo dividimos. Se lee «${fracName(n, d)}».`);
    const od = pick(dens.filter(x => x !== d && x > n));
    if (Math.random() < .5) {
      const dis = [];
      [[n, od], [d - n, d], [n + 1 < d ? n + 1 : n - 1, d], [1, d]].forEach(([a, b]) => { if (a > 0 && b && a < b && !(a === n && b === d)) dis.push(fracName(a, b)); });
      return mc(L('Com es llegeix aquesta fracció?', '¿Cómo se lee esta fracción?'), fracName(n, d), dis, { vis: `<div class="bignum">${frac(n, d)}</div>`, list: true, ex: expl });
    }
    return mc(L(`Quina fracció és «<b>${fracName(n, d)}</b>»?`, `¿Qué fracción es «<b>${fracName(n, d)}</b>»?`), frac(n, d), [frac(d, n), od ? frac(n, od) : frac(n, d + 1), frac(d - n === n ? n + 1 : d - n, d)], { big: true, ex: expl });
  },
  'f.of': L_ => {
    let n = 1; const d = pick(L_ <= 3 ? [2, 3, 4, 5, 10] : [2, 3, 4, 5, 6, 8, 10]);
    if (L_ >= 4 && d > 2 && Math.random() < .5) n = ri(2, d - 1);
    const k = ri(2, L_ <= 3 ? 10 : 12), q = d * k, ans = n * k, t = n === 1 ? FOF(d) : frac(n, d);
    return inp(L(`Quant és ${t} de ${q}?`, `¿Cuánto es ${t} de ${q}?`), ans, { vis: q <= 30 ? emGrid('🍬', q, d) : '', ex: n === 1 ? L(`Dividim en ${d} parts iguals: ${q} ÷ ${d} = ${k}.`, `Dividimos en ${d} partes iguales: ${q} ÷ ${d} = ${k}.`) : L(`Primer una part: ${q} ÷ ${d} = ${k}. Després n'agafem ${n}: ${k} × ${n} = ${ans}.`, `Primero una parte: ${q} ÷ ${d} = ${k}. Después cogemos ${n}: ${k} × ${n} = ${ans}.`) });
  },
  'f.cmp': L_ => {
    if (L_ <= 4 || Math.random() < .5) {
      const d = pick([3, 4, 5, 6, 8, 10]), a = ri(1, d - 1), b = ri(1, d - 1), sym = a < b ? '<' : a > b ? '>' : '=';
      return mc(L('Quin signe hi va?', '¿Qué signo va?'), sym, [], { fixed: ['<', '=', '>'], vis: `<div class="cmp">${frac(a, d)}${BOX}${frac(b, d)}</div>`, big: true, ex: a === b ? L('Són iguals!', '¡Son iguales!') : L(`Les parts són de la mateixa mida (totes són ${den(d, 1)}). ${Math.max(a, b)} trossos són més que ${Math.min(a, b)}.`, `Las partes son del mismo tamaño (todas son ${den(d, 1)}). ${Math.max(a, b)} trozos son más que ${Math.min(a, b)}.`) });
    }
    const [x, y] = shuffle([2, 3, 4, 5, 6, 8, 10]).slice(0, 2), mn = Math.min(x, y), mx = Math.max(x, y), col = pick(COLS);
    return mc(L('Quina fracció és <b>més gran</b>?', '¿Qué fracción es <b>mayor</b>?'), frac(1, mn), [frac(1, mx)], { vis: `<div class="pies">${pieSVG(1, x, col)}${pieSVG(1, y, col)}</div>`, big: true, ex: L(`Com més parts fem, més petita és cada part. Per això 1/${mn} és més gran que 1/${mx}.`, `Cuantas más partes hacemos, más pequeña es cada parte. Por eso 1/${mn} es mayor que 1/${mx}.`) });
  },

  'me.clock': L_ => clockEx(L_ <= 1 ? 'o' : L_ === 2 ? 'q' : L_ === 3 ? pick(['q', 'five']) : L_ === 4 ? pick(['five', 'name']) : pick(['name', 'dur', 'dur'])),
  'me.units': L_ => {
    const K = [['kg', 'g', 1000, ['quilos', 'kilos'], ['grams', 'gramos'], ['quilo', 'kilo']], ['km', 'm', 1000, ['quilòmetres', 'kilómetros'], ['metres', 'metros'], ['quilòmetre', 'kilómetro']], ['l', 'ml', 1000, ['litres', 'litros'], ['mil·lilitres', 'mililitros'], ['litre', 'litro']], ['m', 'cm', 100, ['metres', 'metros'], ['centímetres', 'centímetros'], ['metre', 'metro']]];
    if (L_ <= 3) {
      const a = ri(2, 9);
      if (Math.random() < .6) return inp(L(`Quants centímetres són <b>${a} metres</b>?`, `¿Cuántos centímetros son <b>${a} metros</b>?`), a * 100, { unit: 'cm', ex: L(`1 metre = 100 cm, per tant ${a} × 100 = ${a * 100} cm.`, `1 metro = 100 cm, por lo tanto ${a} × 100 = ${a * 100} cm.`) });
      return inp(L(`Quants metres són <b>${a * 100} centímetres</b>?`, `¿Cuántos metros son <b>${a * 100} centímetros</b>?`), a, { unit: 'm', ex: L(`100 cm = 1 metre, per tant ${a * 100} ÷ 100 = ${a} metres.`, `100 cm = 1 metro, por lo tanto ${a * 100} ÷ 100 = ${a} metros.`) });
    }
    if (L_ === 4 || Math.random() < .5) {
      if (Math.random() < .3) { const a = ri(1, 5), b = ri(5, 95); return inp(L(`Quants centímetres són <b>${a} m i ${b} cm</b>?`, `¿Cuántos centímetros son <b>${a} m y ${b} cm</b>?`), a * 100 + b, { unit: 'cm', ex: L(`${a} m = ${a * 100} cm, i ${a * 100} + ${b} = ${a * 100 + b} cm.`, `${a} m = ${a * 100} cm, y ${a * 100} + ${b} = ${a * 100 + b} cm.`) }); }
      const [A, B, f, An, Bn, As] = pick(K), a = ri(2, 9);
      return inp(L(`Quants ${Bn[0]} són <b>${a} ${An[0]}</b>?`, `¿Cuántos ${Bn[1]} son <b>${a} ${An[1]}</b>?`), a * f, { unit: B, ex: L(`1 ${As[0]} = ${fmt(f)} ${B}, per tant ${a} × ${fmt(f)} = ${fmt(a * f)} ${B}.`, `1 ${As[1]} = ${fmt(f)} ${B}, por lo tanto ${a} × ${fmt(f)} = ${fmt(a * f)} ${B}.`) });
    }
    const vals = new Set(); while (vals.size < 4) vals.add(ri(5, 30) * 100);
    const show = v => v % 1000 === 0 ? `${v / 1000} kg` : (v > 1000 && Math.random() < .5) ? `${Math.floor(v / 1000)} kg ${L('i', 'y')} ${v % 1000} g` : `${fmt(v)} g`;
    const arr = [...vals], lbl = arr.map(show), mx = Math.max(...arr);
    return mc(L('Què pesa <b>més</b>?', '¿Qué pesa <b>más</b>?'), lbl[arr.indexOf(mx)], lbl.filter((_, i) => arr[i] !== mx), { ex: L(`Passa-ho tot a grams (1 kg = 1.000 g): ${arr.map(v => fmt(v) + ' g').join(', ')}. El més gran és ${fmt(mx)} g.`, `Pásalo todo a gramos (1 kg = 1.000 g): ${arr.map(v => fmt(v) + ' g').join(', ')}. El mayor es ${fmt(mx)} g.`) });
  },
  'me.shape': () => shapeEx(SHP),
  'me.perim': L_ => {
    if (L_ >= 5 && Math.random() < .4) { const s = ri(3, 12); return inp(L(`Un quadrat fa <b>${4 * s} cm</b> de perímetre. Quant fa cada costat?`, `Un cuadrado mide <b>${4 * s} cm</b> de perímetro. ¿Cuánto mide cada lado?`), s, { unit: 'cm', vis: rectSVG(1, 1, '?', '?'), ex: L(`Un quadrat té 4 costats iguals: ${4 * s} ÷ 4 = ${s} cm.`, `Un cuadrado tiene 4 lados iguales: ${4 * s} ÷ 4 = ${s} cm.`) }); }
    let w = ri(3, 12), h = ri(2, 9); if (w === h) w++;
    return inp(L("Quin és el <b>perímetre</b> d'aquest rectangle?", '¿Cuál es el <b>perímetro</b> de este rectángulo?'), 2 * (w + h), { unit: 'cm', vis: rectSVG(w, h, `${w} cm`, `${h} cm`), ex: L(`El perímetre és la vora: sumem els 4 costats. ${w} + ${h} + ${w} + ${h} = ${2 * (w + h)} cm.`, `El perímetro es el borde: sumamos los 4 lados. ${w} + ${h} + ${w} + ${h} = ${2 * (w + h)} cm.`) });
  },
  'me.money': L_ => {
    const cents = L_ >= 5;
    if (Math.random() < .5) {
      const pool = cents ? [500, 200, 100, 50, 20, 10] : [2000, 1000, 500, 200, 100], k = ri(3, 5);
      const cs = [...Array(k)].map(() => pick(pool)).sort((a, b) => b - a), tot = cs.reduce((a, b) => a + b, 0);
      if (!cents) return inp(L('Quants euros hi ha en total?', '¿Cuántos euros hay en total?'), tot / 100, { unit: '€', vis: moneyVis(cs), ex: `${cs.map(c => c / 100).join(' + ')} = ${tot / 100} €.` });
      return mc(L('Quants diners hi ha en total?', '¿Cuánto dinero hay en total?'), eur(tot), [tot + 10, tot - 10, tot + 100, tot + 50].filter(x => x > 0).map(eur), { vis: moneyVis(cs), ex: L(`Suma primer els euros i després els cèntims (100 c = 1 €): ${eur(tot)}.`, `Suma primero los euros y después los céntimos (100 c = 1 €): ${eur(tot)}.`) });
    }
    const item = pick(ITEMS());
    if (!cents) { const pay = pick([10, 20, 50]), p = ri(2, pay - 1); return inp(L(`Compres ${item} que costa <b>${p} €</b> i pagues amb un bitllet de <b>${pay} €</b>. Quant et tornen?`, `Compras ${item} que cuesta <b>${p} €</b> y pagas con un billete de <b>${pay} €</b>. ¿Cuánto te devuelven?`), pay - p, { unit: '€', vis: moneyVis([pay * 100]), ex: L(`${pay} − ${p} = ${pay - p} €. Comprova-ho: ${p} + ${pay - p} = ${pay}.`, `${pay} − ${p} = ${pay - p} €. Compruébalo: ${p} + ${pay - p} = ${pay}.`) }); }
    const pay = pick([500, 1000]); let p; do p = ri(11, pay / 10 - 1) * 10; while (p % 100 === 0);
    const c = pay - p;
    return mc(L(`Compres ${item} que costa <b>${eur(p)}</b> i pagues amb un bitllet de <b>${eur(pay)}</b>. Quant et tornen?`, `Compras ${item} que cuesta <b>${eur(p)}</b> y pagas con un billete de <b>${eur(pay)}</b>. ¿Cuánto te devuelven?`), eur(c), [c + 10, c - 10, c + 100, c - 100].filter(x => x > 0).map(eur), { vis: moneyVis([pay]), ex: L(`Compta des de ${eur(p)} fins a ${eur(pay)}: et tornen ${eur(c)}.`, `Cuenta desde ${eur(p)} hasta ${eur(pay)}: te devuelven ${eur(c)}.`) });
  },
  'p.add': probEx('add'), 'p.mul': probEx('mul'), 'p.div': probEx('div'), 'p.two': probEx('two'), 'p.big': probEx('big')
};

function clockEx(mode) {
  const Q = L('Quina hora marca el rellotge?', '¿Qué hora marca el reloj?');
  if (mode === 'dur') {
    const h = ri(9, 19), m = pick([0, 15, 30, 45]), d = pick([15, 20, 30, 40, 45, 60, 90]), tot = h * 60 + m + d, eh = Math.floor(tot / 60), em = tot % 60;
    return mc(L(`L'activitat comença a les <b>${dig(h, m)}</b> i dura <b>${durTxt(d)}</b>. A quina hora acaba?`, `La actividad empieza a las <b>${dig(h, m)}</b> y dura <b>${durTxt(d)}</b>. ¿A qué hora acaba?`), dig(eh, em), [dig(eh + 1, em), dig(h, (m + d) % 60), dig(eh, (em + 15) % 60), dig(eh - 1 < h ? eh + 1 : eh - 1, em)], { ex: `${dig(h, m)} + ${durTxt(d)} = ${dig(eh, em)}.` });
  }
  const h = ri(1, 12), m = mode === 'o' ? 0 : mode === 'h' ? pick([0, 30]) : mode === 'q' ? pick([0, 15, 30, 45]) : mode === 'five' ? ri(0, 11) * 5 : pick([15, 30, 45]);
  const nx = h % 12 + 1, pv = h === 1 ? 12 : h - 1;
  if (mode === 'name') {
    const ex = L(`«${quartName(h, m)}» vol dir que ja ha passat ${QN[m / 15]} d'hora cap a ${lesH(nx)}: són les ${dig(h, m)}.`, `«${cap(quartName(h, m))}» son las ${dig(h, m)}.`);
    if (Math.random() < .5) return mc(Q, quartName(h, m), [quartName(nx, m), quartName(h, m === 45 ? 15 : m + 15), quartName(pv, m)], { vis: clockSVG(h, m), list: true, ex });
    return mc(L(`Quina hora és «<b>${quartName(h, m)}</b>»?`, `¿Qué hora es «<b>${quartName(h, m)}</b>»?`), dig(h, m), [dig(nx, m), dig(h, (m + 30) % 60), dig(pv, m)], { ex });
  }
  const dis = [dig(nx, m), dig(h, (m + 30) % 60), dig(pv, m)];
  if (m) dis.unshift(dig(m / 5, (h % 12) * 5));
  return mc(Q, dig(h, m), dis, { vis: clockSVG(h, m), ex: L(`L'agulla petita marca les hores (${m ? 'ha passat el ' + h : 'és al ' + h}) i la gran, vermella, els minuts (${m}): són les ${dig(h, m)}.`, `La aguja pequeña marca las horas (${m ? 'ha pasado el ' + h : 'está en el ' + h}) y la grande, roja, los minutos (${m}): son las ${dig(h, m)}.`) });
}
function shapeEx(list) {
  const [id, s] = pick(list), col = pick(COLS), v = Math.random(), nm = shn(id);
  const desc = s ? L(`té ${s} costats i ${s} vèrtexs`, `tiene ${s} lados y ${s} vértices`) : L('és rodó i no té costats rectes ni vèrtexs', 'es redondo y no tiene lados rectos ni vértices');
  if (v < .45 || s === 0) return mc(L('Com es diu aquesta figura?', '¿Cómo se llama esta figura?'), nm, shuffle(list.filter(x => x[0] !== id && !(id === 'quadrat' && x[0] === 'rectangle')).map(x => shn(x[0]))), { vis: shapeSVG(id, s, col), ex: L(`És un ${nm}: ${desc}.`, `Es un ${nm}: ${desc}.`) });
  if (v < .75) return inp(L(`Quants <b>costats</b> té un <b>${nm}</b>?`, `¿Cuántos <b>lados</b> tiene un <b>${nm}</b>?`), s, { vis: shapeSVG(id, s, col), ex: `Un ${nm} ${desc}.` });
  return inp(L('Quants <b>vèrtexs</b> (punxes) té aquesta figura?', '¿Cuántos <b>vértices</b> (puntas) tiene esta figura?'), s, { vis: shapeSVG(id, s, col), ex: L(`És un ${nm}: ${desc}.`, `Es un ${nm}: ${desc}.`) });
}
