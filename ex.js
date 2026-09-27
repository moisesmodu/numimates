/* ===== Generador d'exercicis (4t de primària) ===== */
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
const colOp = (a, b, op) => `<div class="colop"><div>${fmt(a)}</div><div><span class="cop">${op}</span>${fmt(b)}</div><div class="ln"></div><div class="cq">?</div></div>`;
const emGrid = (em, n, cols) => `<div class="emgrid" style="grid-template-columns:repeat(${cols},auto)">${Array(n).fill(`<span>${em}</span>`).join('')}</div>`;
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
  for (let i = 1; i <= 12; i++) {
    const a = i * 30 * Math.PI / 180;
    s += `<text x="${f(100 + 61 * Math.sin(a))}" y="${f(100 - 61 * Math.cos(a) + 7)}" text-anchor="middle" font-size="20" font-weight="800" fill="${INK}" font-family="Nunito,sans-serif">${i}</text>`;
  }
  s += `<line x1="100" y1="100" x2="${f(100 + 42 * Math.sin(ha))}" y2="${f(100 - 42 * Math.cos(ha))}" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>`;
  s += `<line x1="100" y1="100" x2="${f(100 + 70 * Math.sin(ma))}" y2="${f(100 - 70 * Math.cos(ma))}" stroke="#FF5A5F" stroke-width="5" stroke-linecap="round"/>`;
  return s + '<circle cx="100" cy="100" r="7" fill="#602B7A"/></svg>';
}
function shapeSVG(name, sides, col) {
  let body;
  if (name === 'cercle') body = `<circle cx="80" cy="60" r="48"/>`;
  else if (name === 'rectangle') body = `<rect x="15" y="22" width="130" height="76" rx="3"/>`;
  else if (name === 'quadrat') body = `<rect x="32" y="12" width="96" height="96" rx="3"/>`;
  else {
    const pts = [];
    const off = Math.PI / 2 + (sides % 2 ? 0 : Math.PI / sides);
    for (let i = 0; i < sides; i++) { const a = off + i * 2 * Math.PI / sides; pts.push(`${(80 + 52 * Math.cos(a)).toFixed(1)},${(62 + 52 * Math.sin(a)).toFixed(1)}`); }
    body = `<polygon points="${pts.join(' ')}"/>`;
  }
  return `<svg viewBox="0 0 160 120" class="vsvg wide"><g fill="${col}" stroke="${INK}" stroke-width="3" stroke-linejoin="round">${body}</g></svg>`;
}
function rectSVG(w, h, lw, lh) {
  const sc = Math.min(160 / w, 90 / h), W = w * sc, H = h * sc, x = (230 - W) / 2 - 15, y = (130 - H) / 2;
  return `<svg viewBox="0 0 230 140" class="vsvg wide"><rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#E8F5FE" stroke="#36A9E1" stroke-width="4"/>
  <text x="${x + W / 2}" y="${y + H + 22}" text-anchor="middle" font-size="17" font-weight="800" fill="${INK}" font-family="Nunito,sans-serif">${lw}</text>
  <text x="${x + W + 8}" y="${y + H / 2 + 6}" font-size="17" font-weight="800" fill="${INK}" font-family="Nunito,sans-serif">${lh}</text></svg>`;
}
const moneyVis = cs => `<div class="money">${cs.map(c => c >= 500 ? `<div class="bill b${c / 100}">${c / 100} €</div>` : `<div class="coin c${c}">${c >= 100 ? c / 100 + ' €' : c + ' c'}</div>`).join('')}</div>`;

/* --- Números en català --- */
const U0 = ['zero', 'u', 'dos', 'tres', 'quatre', 'cinc', 'sis', 'set', 'vuit', 'nou', 'deu', 'onze', 'dotze', 'tretze', 'catorze', 'quinze', 'setze', 'disset', 'divuit', 'dinou'];
const T0 = ['', '', 'vint', 'trenta', 'quaranta', 'cinquanta', 'seixanta', 'setanta', 'vuitanta', 'noranta'];
function ca99(n, un) {
  if (n < 20) return n === 1 && un ? 'un' : U0[n];
  const t = Math.floor(n / 10), u = n % 10;
  if (!u) return T0[t];
  const uw = u === 1 && un ? 'un' : U0[u];
  return t === 2 ? 'vint-i-' + uw : T0[t] + '-' + uw;
}
function ca999(n, un) {
  const c = Math.floor(n / 100), r = n % 100;
  let s = c === 1 ? 'cent' : c > 1 ? U0[c] + '-cents' : '';
  if (r) s += (s ? ' ' : '') + ca99(r, un);
  return s;
}
function numToCa(n) {
  if (n === 0) return 'zero';
  const th = Math.floor(n / 1000), r = n % 1000;
  let s = th === 1 ? 'mil' : th > 1 ? ca999(th, true) + ' mil' : '';
  if (r) s += (s ? ' ' : '') + ca999(r, false);
  return s;
}

/* --- Ajudants --- */
const PL = ['unitats', 'desenes', 'centenes', 'unitats de miler', 'desenes de miler'];
const PLS = ['U', 'D', 'C', 'UM', 'DM'];
const digOf = L => L <= 1 ? 3 : L === 2 ? 4 : 5;
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
const TAB = L => L <= 1 ? [2, 5, 10] : L === 2 ? [3, 4, 6] : L === 3 ? [7, 8, 9] : [2, 3, 4, 5, 6, 7, 8, 9];
function addTip(a, b) {
  if (b < 10) { const f = 10 - a % 10; if (a % 10 && b > f) return `Completa la desena: ${a} + ${f} = ${a + f}, i ${a + f} + ${b - f} = ${a + b}.`; return `${a} + ${b} = ${a + b}.`; }
  const t = b - b % 10, u = b % 10;
  return u ? `Primer les desenes: ${a} + ${t} = ${a + t}. Després les unitats: ${a + t} + ${u} = ${a + b}.` : `Suma les desenes: ${a} + ${t} = ${a + b}.`;
}
function subTip(a, b) {
  if (b < 10) { const u = a % 10; if (u && u < b) return `Baixa fins a la desena: ${a} − ${u} = ${a - u}, i ${a - u} − ${b - u} = ${a - b}.`; return `${a} − ${b} = ${a - b}.`; }
  const t = b - b % 10, u = b % 10;
  return u ? `Primer treu les desenes: ${a} − ${t} = ${a - t}. Després les unitats: ${a - t} − ${u} = ${a - b}.` : `Treu les desenes: ${a} − ${t} = ${a - b}.`;
}
function mulTip(t, b) {
  const p = t * b;
  return ({
    2: `Per 2 és fer el doble: ${b} + ${b} = ${p}.`,
    3: `Suma el ${b} tres vegades: ${b} + ${b} + ${b} = ${p}.`,
    4: `Per 4 és el doble del doble: ${b} → ${2 * b} → ${p}.`,
    5: `Per 5 és la meitat de per 10: ${b} × 10 = ${b * 10}, i la meitat és ${p}.`,
    6: `Per 6 és per 5 i un cop més: ${5 * b} + ${b} = ${p}.`,
    7: `Per 7 és per 5 més per 2: ${5 * b} + ${2 * b} = ${p}.`,
    8: `Per 8 és fer el doble tres vegades: ${b} → ${2 * b} → ${4 * b} → ${p}.`,
    9: `Per 9 és per 10 i treure'n un: ${10 * b} − ${b} = ${p}.`,
    10: `Per 10 només cal afegir un zero: ${b} → ${p}.`
  })[t] || `${t} × ${b} = ${p}.`;
}
const EMS = [['⭐', 'estrelles'], ['🍪', 'galetes'], ['🍎', 'pomes'], ['🌸', 'flors'], ['⚽', 'pilotes'], ['🧁', 'magdalenes']];
const SHARE = [['🍪', 'galetes', 'f'], ['🍬', 'caramels', 'm'], ['🍓', 'maduixes', 'f'], ['🎈', 'globus', 'm'], ['🖍️', 'ceres', 'f'], ['🌰', 'castanyes', 'f']];
const FRIENDS = ['🧒', '👧', '👦', '🧑', '👧'];
const PSETS = [['🔴', '🔵', '🟡', '🟢'], ['🍎', '🍐', '🍇', '🍋'], ['⭐', '🌙', '☀️', '☁️'], ['🐱', '🐶', '🐭', '🐰'], ['🔺', '🟦', '⚪', '🔶']];
const FR = ['🍎', '🍌', '🍓', '🍐', '🍊', '🍇', '🧁', '🍩'];
const DENW = { 2: ['mig', 'mitjos'], 3: ['terç', 'terços'], 4: ['quart', 'quarts'], 5: ['cinquè', 'cinquens'], 6: ['sisè', 'sisens'], 8: ['vuitè', 'vuitens'], 10: ['desè', 'desens'] };
const NUMW = ['', 'un', 'dos', 'tres', 'quatre', 'cinc', 'sis', 'set', 'vuit', 'nou'];
const fracName = (n, d) => n === 1 ? `un ${DENW[d][0]}` : `${NUMW[n]} ${DENW[d][1]}`;
const FOF = { 2: 'la meitat', 3: 'un terç', 4: 'un quart', 5: 'un cinquè', 6: 'un sisè', 8: 'un vuitè', 10: 'un desè' };
const HW = ['', 'una', 'dues', 'tres', 'quatre', 'cinc', 'sis', 'set', 'vuit', 'nou', 'deu', 'onze', 'dotze'];
const deH = h => (h === 1 || h === 11) ? `d'${HW[h]}` : `de ${HW[h]}`;
const lesH = h => h === 1 ? 'la una' : 'les ' + HW[h];
const QN = ['', 'un quart', 'dos quarts', 'tres quarts'];
const quartName = (h, m) => m === 0 ? `${lesH(h)} en punt` : `${QN[m / 15]} ${deH(h % 12 + 1)}`;
const dig = (h, m) => `${h}:${pad(m)}`;
const durTxt = d => d < 60 ? `${d} minuts` : d === 60 ? 'una hora' : 'una hora i mitja';
const SHP = [['triangle', 3], ['quadrat', 4], ['rectangle', 4], ['pentàgon', 5], ['hexàgon', 6], ['octàgon', 8], ['cercle', 0]];
const ITEMS = ['un llibre', 'una pilota', 'una motxilla', 'un joc de taula', 'una samarreta', 'un estoig', 'un trencaclosques'];
const NOMS = [['Pau', 'en'], ['Laia', 'la'], ['Nil', 'en'], ['Júlia', 'la'], ['Arnau', "l'"], ['Aina', "l'"], ['Jan', 'en'], ['Martina', 'la'], ['Pol', 'en'], ['Ona', "l'"], ['Biel', 'en'], ['Carla', 'la']];
function nomP() { const [n, a] = pick(NOMS); const j = a.endsWith("'") ? '' : ' '; return { c: a + j + n, C: cap(a) + j + n }; }

/* --- Problemes --- */
const PROB = {
  add: [
    () => { const a = ri(12, 60), b = ri(5, 35), N = nomP(); return [`${N.C} té ${a} cromos i en guanya ${b} més al pati. Quants cromos té ara?`, a + b, `${a} + ${b} = ${a + b} cromos.`]; },
    () => { const a = ri(25, 60), b = ri(5, a - 8); return [`En un autobús hi ha ${a} persones. A la parada en baixen ${b}. Quantes persones queden a l'autobús?`, a - b, `Baixar vol dir treure: ${a} − ${b} = ${a - b} persones.`]; },
    () => { const c = ri(60, 150), a = ri(15, c - 10), N = nomP(); return [`${N.C} llegeix un llibre de ${c} pàgines. Ja n'ha llegit ${a}. Quantes pàgines li falten?`, c - a, `${c} − ${a} = ${c - a} pàgines.`]; },
    () => { const a = ri(8, 25), b = ri(4, 19); return [`Un llibre costa ${a} € i una llibreta, ${b} €. Quant costen tots dos junts?`, a + b, `${a} + ${b} = ${a + b} €.`, '€']; },
    () => { const a = ri(120, 300), b = ri(40, 99); return [`Al matí, ${a} persones visiten el castell de Gardeny. A la tarda n'hi van ${b} més que al matí. Quantes persones hi van a la tarda?`, a + b, `«${b} més que al matí» vol dir sumar: ${a} + ${b} = ${a + b}.`]; }
  ],
  mul: [
    () => { const a = ri(4, 9), b = ri(5, 10); return [`Al teatre de la Fira de Titelles hi ha ${a} files amb ${b} cadires cada una. Quantes cadires hi ha en total?`, a * b, `${a} files × ${b} cadires = ${a * b} cadires.`]; },
    () => { const a = ri(3, 9), b = pick([6, 8, 10, 12]); return [`Un paquet porta ${b} retoladors. Quants retoladors hi ha en ${a} paquets?`, a * b, `${a} × ${b} = ${a * b} retoladors.`]; },
    () => { const a = ri(3, 9); return [`Una aranya té 8 potes. Quantes potes tenen ${a} aranyes?`, a * 8, `${a} × 8 = ${a * 8} potes.`]; },
    () => { const a = ri(3, 10), b = ri(2, 9), N = nomP(); return [`${N.C} estalvia ${b} € cada setmana. Quants euros tindrà al cap de ${a} setmanes?`, a * b, `${a} × ${b} = ${a * b} €.`, '€']; },
    () => { const a = ri(3, 9); return [`Un tricicle té 3 rodes. Quantes rodes tenen ${a} tricicles?`, a * 3, `${a} × 3 = ${a * 3} rodes.`]; }
  ],
  div: [
    () => { const b = ri(2, 6), q = ri(3, 9), N = nomP(); return [`${N.C} té ${b * q} caramels i els reparteix a parts iguals entre ${b} amics. Quants caramels li toquen a cada amic?`, q, `${b * q} ÷ ${b} = ${q} caramels.`]; },
    () => { const b = pick([3, 4, 5, 6]), q = ri(3, 8); return [`A la classe de programació hi ha ${b * q} alumnes i fan equips de ${b}. Quants equips surten?`, q, `${b * q} ÷ ${b} = ${q} equips.`]; },
    () => { const q = ri(3, 9); return [`Una capsa d'ous en porta 6. Quantes capses necessites per guardar ${6 * q} ous?`, q, `${6 * q} ÷ 6 = ${q} capses.`]; },
    () => { const b = ri(3, 8), q = ri(4, 9); return [`Tenim ${b * q} trossos de coca i cada persona en menja ${b}. Quantes persones en poden menjar?`, q, `${b * q} ÷ ${b} = ${q} persones.`]; },
    () => { const q = ri(4, 12), b = pick([2, 4, 5]); return [`Una corda de ${b * q} metres es talla en trossos de ${b} metres. Quants trossos surten?`, q, `${b * q} ÷ ${b} = ${q} trossos.`]; }
  ],
  two: [
    () => { const a = ri(2, 5), b = pick([6, 8, 10, 12]), c = ri(2, a * b - 2), N = nomP(); return [`${N.C} compra ${a} paquets de ${b} galetes i se'n menja ${c}. Quantes galetes li queden?`, a * b - c, `Primer: ${a} × ${b} = ${a * b} galetes. Després: ${a * b} − ${c} = ${a * b - c}.`]; },
    () => { const a = ri(3, 8), b = ri(2, 5), N = nomP(); return [`Una entrada al museu costa ${a} €. ${N.C} hi va amb ${b} amics. Quant paguen en total?`, a * (b + 1), `Compte! Són ${b} amics més ${N.c}: ${b + 1} persones. ${b + 1} × ${a} = ${a * (b + 1)} €.`, '€']; },
    () => { const b = ri(2, 5), c = ri(2, 6), a = b * c + ri(1, 15), N = nomP(); return [`${N.C} té ${a} €. Compra ${b} llibretes de ${c} € cadascuna. Quants diners li queden?`, a - b * c, `Les llibretes costen ${b} × ${c} = ${b * c} €. Li queden ${a} − ${b * c} = ${a - b * c} €.`, '€']; },
    () => { const c = ri(150, 200), a = ri(40, 70), b = ri(30, 60), N = nomP(); return [`Per pujar a la Seu Vella, ${N.c} puja ${a} graons, descansa i en puja ${b} més. Si n'hi ha ${c} en total, quants graons li falten?`, c - a - b, `Ja n'ha pujat ${a} + ${b} = ${a + b}. Li falten ${c} − ${a + b} = ${c - a - b} graons.`]; },
    () => { const a = ri(8, 12), b = ri(3, 9), N = nomP(); return [`${N.C} té ${a} anys i el seu cosí en té ${b} més. Quants anys sumen entre tots dos?`, 2 * a + b, `El cosí té ${a} + ${b} = ${a + b} anys. Junts: ${a} + ${a + b} = ${2 * a + b} anys.`]; }
  ],
  big: [
    () => { const c = pick([10, 12, 20]), k = ri(15, 40), t = c * k, a = ri(Math.round(t * .3), Math.round(t * .7)); return [`A l'Aplec del Caragol, una colla cuina ${a} caragols al matí i ${t - a} a la tarda. Si els serveixen en plats de ${c}, quants plats omplen?`, k, `Primer: ${a} + ${t - a} = ${t} caragols. Després: ${t} ÷ ${c} = ${k} plats.`]; },
    () => { const a = ri(4, 9), b = ri(12, 25), c = ri(10, a * b - 10); return [`Un pagès de l'Horta de Lleida omple ${a} caixes amb ${b} peres cada una. En ven ${c}. Quantes peres li queden?`, a * b - c, `Primer: ${a} × ${b} = ${a * b} peres. Després: ${a * b} − ${c} = ${a * b - c}.`]; },
    () => { const b = ri(3, 6), q = ri(12, 25), c = ri(2, 9); return [`A la biblioteca hi ha ${b * q} llibres repartits en ${b} prestatges iguals. Si a cada prestatge hi posen ${c} llibres més, quants llibres hi haurà a cada prestatge?`, q + c, `Primer: ${b * q} ÷ ${b} = ${q} llibres per prestatge. Després: ${q} + ${c} = ${q + c}.`]; },
    () => { const a = ri(20, 45), b = ri(5, 15), c = ri(8, 20); return [`Un autobús porta ${a} passatgers. A la primera parada en pugen ${b} i a la segona en baixen ${c}. Quants passatgers hi ha ara?`, a + b - c, `${a} + ${b} = ${a + b}, i ${a + b} − ${c} = ${a + b - c} passatgers.`]; }
  ]
};
const probEx = k => () => { const [q, a, ex, u] = pick(PROB[k])(); return inp(q, a, { ex, unit: u, long: true }); };

/* ===== Habilitats ===== */
const EX = {
  /* ---- Unitat 1: Els grans números ---- */
  'n.place': L => {
    const k = digOf(L), n = rndN(k, true), s = String(n), pos = ri(0, k - 1), d = +s[k - 1 - pos];
    const legend = PLS.slice(0, k).reverse().join(' · ');
    if (d === 0 || Math.random() < .5) {
      const others = shuffle(s.split('').map(Number).filter(x => x !== d));
      return mc(`Quina xifra hi ha a les <b>${PL[pos]}</b>?`, d, others.concat([(d + 3) % 10, (d + 7) % 10]), { vis: bigNum(fmt(n)), big: true, ex: `De dreta a esquerra: ${PLS.slice(0, k).join(', ')}. A les ${PL[pos]} hi ha la xifra ${d}.` });
    }
    const v = d * 10 ** pos, dis = [];
    for (let p = 0; p <= k; p++) if (p !== pos) dis.push(fmt(d * 10 ** p));
    return mc(`Quant val la xifra <b>${d}</b> en aquest número?`, fmt(v), shuffle(dis), { vis: bigNum(fmt(n)), ex: `La xifra ${d} és a les ${PL[pos]}, així que val ${fmt(v)}. (${legend})` });
  },
  'n.decomp': L => {
    const k = digOf(L); let n = rndN(k);
    if (L >= 3 && Math.random() < .5) { const s = String(n).split(''); s[ri(1, k - 1)] = '0'; n = +s.join(''); }
    const s = String(n), parts = [], partsL = [];
    for (let i = 0; i < k; i++) { const d = +s[i], p = k - 1 - i; if (d) { parts.push(fmt(d * 10 ** p)); partsL.push(`${d} ${PLS[p]}`); } }
    const useL = L >= 2 && Math.random() < .5, txt = (useL ? partsL : parts).join(' + ');
    const leg = useL ? `<div class="legend">${PLS.slice(0, k).map((x, i) => `${x} = ${PL[i]}`).reverse().join(' · ')}</div>` : '';
    return inp('Quin número és?', n, { vis: `<div class="stack">${eqv(txt)}${leg}</div>`, ex: `${txt} = ${fmt(n)}` });
  },
  'n.words': L => {
    const k = digOf(L), n = rndN(k);
    if (L >= 3 && Math.random() < .4)
      return mc('Com es llegeix aquest número?', numToCa(n), variants(n).map(numToCa), { vis: bigNum(fmt(n)), list: true, ex: `${fmt(n)} es llegeix «${numToCa(n)}».` });
    return inp('Escriu amb xifres:', n, { vis: `<div class="words">${numToCa(n)}</div>`, ex: `«${numToCa(n)}» = ${fmt(n)}` });
  },
  'n.next': L => {
    const k = digOf(L), after = Math.random() < .5, z = ri(1, k - 1);
    let base = ri(10 ** (k - z - 1), 10 ** (k - z) - 1);
    if (after && base % 10 === 9) base--;
    if (base < 1) base = 1;
    const n = after ? base * 10 ** z + (10 ** z - 1) : base * 10 ** z, ans = after ? n + 1 : n - 1;
    return inp(`Quin número va just <b>${after ? 'després' : 'abans'}</b> de ${fmt(n)}?`, ans, { vis: eqv(after ? `${fmt(n)} + 1 = ${BOX}` : `${fmt(n)} − 1 = ${BOX}`), ex: `${fmt(n)} ${after ? '+' : '−'} 1 = ${fmt(ans)}. Compte amb els ${after ? '9' : '0'} del final: canvien diverses xifres alhora!` });
  },
  'n.compare': L => {
    const k = L <= 3 ? digOf(L) : 5, a = rndN(k); let b;
    const r = Math.random();
    if (r < .12) b = a;
    else if (L >= 4 && r < .25) b = rndN(k - 1);
    else { const s = String(a).split(''), p = ri(1, k - 1); let nd; do nd = ri(0, 9); while (nd === +s[p]); s[p] = nd; b = +s.join(''); }
    const sym = a < b ? '<' : a > b ? '>' : '=';
    let ex;
    if (a === b) ex = 'Són iguals: totes les xifres coincideixen.';
    else if (String(a).length !== String(b).length) ex = `${fmt(Math.max(a, b))} té més xifres, per tant és més gran.`;
    else {
      const sa = String(a), sb = String(b); let i = 0; while (sa[i] === sb[i]) i++;
      ex = `Mirem d'esquerra a dreta. A les ${PL[k - 1 - i]}: ${sa[i]} ${+sa[i] > +sb[i] ? 'és més gran que' : 'és més petit que'} ${sb[i]}. Per tant, ${fmt(a)} ${sym} ${fmt(b)}.`;
    }
    return mc('Quin signe hi va?', sym, [], { fixed: ['<', '=', '>'], vis: `<div class="cmp"><span>${fmt(a)}</span>${BOX}<span>${fmt(b)}</span></div>`, big: true, ex });
  },
  'n.order': L => {
    const k = L <= 3 ? 4 : 5, desc = L >= 5 && Math.random() < .5, first = ri(1, 9), set = new Set();
    while (set.size < 4) set.add(+(String(first) + String(ri(0, 10 ** (k - 1) - 1)).padStart(k - 1, '0')));
    const vals = [...set], ans = vals.slice().sort((x, y) => desc ? y - x : x - y);
    return { type: 'order', q: `Toca els números de <b>${desc ? 'més gran a més petit' : 'més petit a més gran'}</b>:`, items: shuffle(vals), ans, ex: ans.map(fmt).join(desc ? ' > ' : ' < ') };
  },
  'n.round': L => {
    const k = L <= 4 ? 4 : 5, to = pick(L <= 4 ? [10, 100] : [10, 100, 1000]); let n = rndN(k);
    if (n % to === 0) n += ri(1, to - 1);
    const down = Math.floor(n / to) * to, up = down + to, r = Math.round(n / to) * to, other = r === down ? up : down;
    const nm = { 10: 'desena', 100: 'centena', 1000: 'unitat de miler' }[to], half = n - down === to / 2;
    const far = r === up ? up + to : Math.max(0, down - to);
    return mc(`Arrodoneix a la <b>${nm}</b> més propera:`, fmt(r), [fmt(other), fmt(far), fmt(Math.round(n / (to * 10)) * to * 10), fmt(n - n % Math.max(1, to / 10))], {
      vis: bigNum(fmt(n)),
      ex: half ? `${fmt(n)} és just al mig entre ${fmt(down)} i ${fmt(up)}. Quan és al mig, arrodonim cap amunt: ${fmt(r)}.` : `${fmt(n)} és entre ${fmt(down)} i ${fmt(up)}, però està més a prop de ${fmt(r)}.`
    });
  },

  /* ---- Unitat 2: Sumes i restes ---- */
  'a.add': L => {
    let a, b;
    if (L <= 1) { if (Math.random() < .5) { a = ri(12, 88); b = ri(3, 9); } else { a = ri(1, 6) * 10 + ri(0, 5); b = ri(1, 3) * 10 + ri(0, 4); } }
    else if (L === 2) { a = ri(25, 79); b = ri(12, 49); }
    else if (L <= 4) { a = ri(125, 689); b = ri(108, 299); }
    else { a = ri(1200, 6800); b = Math.random() < .5 ? ri(150, 950) : ri(1100, 2900); }
    const s = a + b;
    if (a < 100) return inp('Quant fa?', s, { vis: eqv(`${a} + ${b} = ${BOX}`), ex: addTip(a, b) });
    return inp('Fes la suma:', s, { vis: colOp(a, b, '+'), ex: `Comença per les unitats. Si passes de 9, te'n portes una a la columna del costat. ${fmt(a)} + ${fmt(b)} = ${fmt(s)}.` });
  },
  'a.sub': L => {
    let a, b;
    if (L <= 1) { a = ri(15, 89); b = ri(2, 9); }
    else if (L === 2) { a = ri(40, 99); b = ri(11, a - 10); }
    else if (L <= 4) { a = ri(300, 950); b = ri(105, a - 50); }
    else { a = ri(2000, 9500); b = Math.random() < .5 ? ri(120, 990) : ri(1050, a - 100); }
    const d = a - b;
    if (a < 100) return inp('Quant fa?', d, { vis: eqv(`${a} − ${b} = ${BOX}`), ex: subTip(a, b) });
    return inp('Fes la resta:', d, { vis: colOp(a, b, '−'), ex: `Resta columna per columna des de les unitats. Si la xifra de dalt és més petita, demana'n una a la columna del costat. Comprova-ho: ${fmt(d)} + ${fmt(b)} = ${fmt(a)}.` });
  },
  'a.missing': L => {
    const big = L >= 5, a = ri(big ? 120 : 12, big ? 680 : 68), b = ri(big ? 110 : 8, big ? 290 : 39), c = a + b;
    const forms = [
      [`${BOX} + ${b} = ${c}`, a, `Fes l'operació contrària: ${c} − ${b} = ${a}.`],
      [`${a} + ${BOX} = ${c}`, b, `Quant falta de ${a} a ${c}? ${c} − ${a} = ${b}.`],
      [`${c} − ${BOX} = ${a}`, b, `Quant he de treure de ${c} per arribar a ${a}? ${c} − ${a} = ${b}.`],
      [`${BOX} − ${b} = ${a}`, c, `Fes l'operació contrària: ${a} + ${b} = ${c}.`]
    ];
    const [s, ans, ex] = pick(forms);
    return inp("Quin número s'amaga a la capsa?", ans, { vis: eqv(s), ex });
  },
  'a.estimate': L => {
    const add = Math.random() < .5, h1 = add ? ri(2, 6) : ri(4, 9), h2 = ri(1, 3), j = () => pick([-4, -3, -2, -1, 1, 2, 3, 4]);
    const a = h1 * 100 + j(), b = h2 * 100 + j(), ap = add ? (h1 + h2) * 100 : (h1 - h2) * 100, op = add ? '+' : '−';
    return mc("Sense fer el càlcul exacte, quin resultat s'hi <b>acosta més</b>?", ap, [ap - 100, ap + 100, ap + 200].filter(x => x > 0), { vis: eqv(`${a} ${op} ${b}`), ex: `${a} és gairebé ${h1 * 100} i ${b} és gairebé ${h2 * 100}: ${h1 * 100} ${op} ${h2 * 100} = ${ap}.` });
  },

  /* ---- Unitat 3: Multiplicar ---- */
  'm.table': L => {
    const t = pick(TAB(L)), b = ri(2, 10), p = t * b, sw = Math.random() < .5, x = sw ? b : t, y = sw ? t : b;
    if (Math.random() < .35) return mc('Quant fa?', p, shuffle([p + t, p - t, x + y, p + pick([1, -1, 2, 10])]).filter(v => v > 0), { vis: eqv(`${x} × ${y}`), ex: mulTip(t, b) });
    return inp('Quant fa?', p, { vis: eqv(`${x} × ${y} = ${BOX}`), ex: mulTip(t, b) });
  },
  'm.array': L => {
    const [em, nm] = pick(EMS), r = ri(2, L <= 1 ? 4 : 5), c = ri(2, L <= 1 ? 5 : 7);
    if (Math.random() < .5) return inp(`Quantes ${nm} hi ha? Pista: compta les files i les columnes.`, r * c, { vis: emGrid(em, r * c, c), ex: `Hi ha ${r} files de ${c}: ${r} × ${c} = ${r * c}.` });
    return mc(`Quina multiplicació diu quantes ${nm} hi ha?`, `${r} × ${c}`, [`${r} + ${c}`, `${r} × ${c + 1}`, `${r + 1} × ${c}`, `${r} × ${c + 2}`], { vis: emGrid(em, r * c, c), ex: `Hi ha ${r} files de ${c} ${nm}: ${r} × ${c} = ${r * c}.` });
  },
  'm.by10': L => {
    const m = pick(L >= 5 ? [10, 100, 1000] : [10, 100]), a = ri(2, L >= 5 ? 99 : 60), zeros = { 10: 'un zero', 100: 'dos zeros', 1000: 'tres zeros' }[m];
    if (L >= 5 && Math.random() < .35) return inp('Quin número falta?', m, { vis: eqv(`${a} × ${BOX} = ${fmt(a * m)}`), ex: `${a} → ${fmt(a * m)}: hi hem afegit ${zeros}, per tant és × ${fmt(m)}.` });
    return inp('Quant fa?', a * m, { vis: eqv(`${a} × ${fmt(m)} = ${BOX}`), ex: `Multiplicar per ${fmt(m)} és afegir ${zeros}: ${a} → ${fmt(a * m)}.` });
  },
  'm.missing': L => {
    const t = pick(TAB(L)), b = ri(2, 10), p = t * b;
    return inp('Quin número falta?', b, { vis: eqv(Math.random() < .5 ? `${t} × ${BOX} = ${p}` : `${BOX} × ${t} = ${p}`), ex: `Busca a la taula del ${t}: ${t} × ${b} = ${p}.` });
  },
  'm.big': L => {
    let a, b;
    if (L <= 4 || Math.random() < .4) { a = ri(12, 49); b = ri(2, 6); } else { a = ri(102, 399); b = ri(2, 5); }
    const p = a * b, s = String(a), parts = [];
    for (let i = 0; i < s.length; i++) { const v = +s[i] * 10 ** (s.length - 1 - i); if (v) parts.push(v); }
    return inp('Fes la multiplicació:', p, { vis: colOp(a, b, '×'), ex: `Descompon: ${parts.map(v => `${v} × ${b}`).join(' + ')} = ${parts.map(v => fmt(v * b)).join(' + ')} = ${fmt(p)}.` });
  },

  /* ---- Unitat 4: Dividir ---- */
  'd.share': L => {
    const [em, nm, g] = pick(SHARE), b = ri(2, L <= 1 ? 4 : 5), q = ri(2, L <= 1 ? 5 : 6), n = b * q, Q = g === 'f' ? 'Quantes' : 'Quants';
    return inp(`Reparteix ${n} ${nm} entre ${b} amics a parts iguals. ${Q} ${nm} li toquen a cada amic?`, q, {
      vis: `<div class="stack"><div class="friends">${FRIENDS.slice(0, b).join('')}</div>${emGrid(em, n, Math.min(n, 6))}</div>`,
      ex: `${n} ÷ ${b} = ${q}, perquè ${b} × ${q} = ${n}. Cada amic en rep ${q}.`
    });
  },
  'd.table': L => {
    const t = pick(L <= 2 ? [2, 3, 4, 5, 10] : L === 3 ? [6, 7, 8, 9] : [2, 3, 4, 5, 6, 7, 8, 9]), q = ri(2, 10), p = t * q;
    return inp('Quant fa?', q, { vis: eqv(`${p} ÷ ${t} = ${BOX}`), ex: `Pensa en la taula del ${t}: ${t} × ${q} = ${p}. Per tant, ${p} ÷ ${t} = ${q}.` });
  },
  'd.rel': L => {
    const t = pick(L <= 2 ? [2, 3, 4, 5] : [6, 7, 8, 9]), q = ri(3, 10), p = t * q, f = Math.random() < .5, dv = f ? t : q, ans = f ? q : t;
    return mc(`Si <b>${t} × ${q} = ${p}</b>, quant fa <b>${p} ÷ ${dv}</b>?`, ans, [p, dv === ans ? ans + 2 : dv, ans + 1, ans - 1, p - dv].filter(x => x > 0), { ex: `La divisió és l'operació contrària de la multiplicació: ${p} ÷ ${dv} = ${ans}.` });
  },
  'd.rem': L => {
    const b = ri(2, L >= 5 ? 9 : 6), q = ri(2, 9), r = ri(1, b - 1), a = b * q + r;
    if (Math.random() < .5) return inp(`Fas grups de ${b} amb ${a} boles. Quantes boles <b>sobren</b>?`, r, { vis: eqv(`${a} ÷ ${b} = ${q} i en sobren ${BOX}`), ex: `${b} × ${q} = ${b * q}, i de ${b * q} a ${a} en sobren ${r}. El que sobra sempre és més petit que ${b}.` });
    return inp(`Tens ${a} ous i els poses en capses de ${b}. Quantes capses <b>plenes</b> omples?`, q, { ex: `${b} × ${q} = ${b * q}. Amb ${a} ous omples ${q} capses i en sobren ${r}, que no arriben a omplir-ne cap més.` });
  },
  'd.big': L => {
    const b = ri(2, L >= 5 ? 6 : 4), q = ri(11, L >= 5 ? 49 : 29), a = b * q, qT = q - q % 10, qU = q % 10;
    return inp('Fes la divisió:', q, { vis: eqv(`${a} ÷ ${b} = ${BOX}`), ex: qU ? `Descompon: ${a} = ${qT * b} + ${qU * b}. ${qT * b} ÷ ${b} = ${qT} i ${qU * b} ÷ ${b} = ${qU}. Total: ${qT} + ${qU} = ${q}.` : `${a} ÷ ${b} = ${q}, perquè ${q} × ${b} = ${a}.` });
  },

  /* ---- Unitat 5: Lògica ---- */
  'l.series': L => {
    let arr, rule;
    const lin = (s, d) => { arr = [0, 1, 2, 3, 4].map(i => s + i * d); rule = d > 0 ? `Cada vegada sumem ${d}.` : `Cada vegada restem ${-d}.`; };
    if (L <= 1) lin(ri(1, 20), pick([2, 5, 10]));
    else if (L === 2) { const d = pick([3, 4, -2, -5, -10]); lin(d < 0 ? ri(45, 90) : ri(1, 30), d); }
    else {
      const kind = pick(L === 3 ? ['lin', 'x2', 'big'] : L === 4 ? ['grow', 'alt', 'lin', 'x2'] : ['grow', 'alt', 'x2', 'x3', 'big']);
      if (kind === 'lin') { const d = pick([6, 7, 8, 9, -3, -4, -6]); lin(d < 0 ? ri(50, 90) : ri(1, 20), d); }
      if (kind === 'big') { const d = pick([25, 50, 100, 11, -9, -11]); lin(d < 0 ? ri(80, 150) : ri(1, 60), d); }
      if (kind === 'x2') { const s = ri(1, 6); arr = [0, 1, 2, 3, 4].map(i => s * 2 ** i); rule = "Cada número és el doble de l'anterior."; }
      if (kind === 'x3') { const s = ri(1, 3); arr = [0, 1, 2, 3, 4].map(i => s * 3 ** i); rule = "Cada número és el triple de l'anterior."; }
      if (kind === 'grow') { const s = ri(1, 10), d0 = ri(1, 3); arr = [s]; for (let i = 1; i < 5; i++) arr.push(arr[i - 1] + d0 + i - 1); rule = `Cada vegada sumem un més: +${d0}, +${d0 + 1}, +${d0 + 2}…`; }
      if (kind === 'alt') { const a = ri(3, 6), b = ri(1, a - 1), s = ri(5, 20); arr = [s]; for (let i = 1; i < 6; i++) arr.push(arr[i - 1] + (i % 2 ? a : -b)); rule = `Alternem: +${a}, −${b}, +${a}, −${b}…`; }
    }
    const miss = L >= 3 ? ri(1, arr.length - 1) : arr.length - 1;
    return inp('Quin número falta a la sèrie?', arr[miss], { vis: `<div class="seq">${arr.map((v, i) => i === miss ? BOX : `<span>${fmt(v)}</span>`).join('')}</div>`, ex: rule });
  },
  'l.pattern': L => {
    const set = shuffle(pick(PSETS)), pat = pick(L <= 1 ? ['AB', 'ABC', 'AAB'] : ['ABB', 'AABB', 'ABC', 'ABCB', 'AAB', 'ABAC']);
    const map = { A: set[0], B: set[1], C: set[2] }, unit = pat.split('').map(c => map[c]);
    const total = unit.length * 2 + ri(1, unit.length), seq = [...Array(total)].map((_, i) => unit[i % unit.length]), ans = unit[total % unit.length];
    return mc('Quin ve ara?', ans, set.filter(x => x !== ans), { vis: `<div class="seq em">${seq.map(s => `<span>${s}</span>`).join('')}${BOX}</div>`, big: true, ex: `El tros que es repeteix és: ${unit.join(' ')}.` });
  },
  'l.odd': L => {
    const P = L <= 2 ? pick(['par', 'sen', 'm5']) : pick(['par', 'sen', 'm5', 'm10', 'm3']);
    const test = { par: n => n % 2 === 0, sen: n => n % 2 === 1, m5: n => n % 5 === 0, m10: n => n % 10 === 0, m3: n => n % 3 === 0 }[P];
    const nm = { par: 'parells', sen: 'senars', m5: 'múltiples de 5', m10: 'múltiples de 10', m3: 'múltiples de 3' }[P];
    const rule = { par: 'Els parells acaben en 0, 2, 4, 6 o 8.', sen: 'Els senars acaben en 1, 3, 5, 7 o 9.', m5: 'Els múltiples de 5 acaben en 0 o en 5.', m10: 'Els múltiples de 10 acaben en 0.', m3: 'Un número és múltiple de 3 si la suma de les seves xifres és 3, 6, 9, 12…' }[P];
    const max = L <= 2 ? 99 : 999, yes = new Set(); let no;
    while (yes.size < 3) { const v = ri(10, max); if (test(v)) yes.add(v); }
    do no = ri(10, max); while (test(no));
    return mc(`Tres d'aquests números són <b>${nm}</b>. Quin <b>no</b> ho és?`, fmt(no), [...yes].map(fmt), { big: true, ex: `${rule} El número ${fmt(no)} no compleix la regla.` });
  },
  'l.balance': L => {
    const [x, y] = shuffle(FR);
    const row = (l, r) => `<div class="bal"><span>${l}</span><span class="be">=</span><b>${r}</b></div>`, wrap = r => `<div class="bals">${r.join('')}</div>`;
    const v = L <= 3 ? pick([1, 2]) : L === 4 ? pick([2, 3]) : pick([3, 4, 5]);
    if (v === 1) { const k = ri(2, 4), a = ri(2, 9); return inp(`Quant val ${x}?`, a, { vis: wrap([row(Array(k).fill(x).join(' + '), k * a)]), ex: `${k} vegades ${x} fan ${k * a}. Per tant, ${x} = ${k * a} ÷ ${k} = ${a}.` }); }
    if (v === 2) { const a = ri(3, 15), c = ri(2, 12); return inp(`Quant val ${x}?`, a, { vis: wrap([row(`${x} + ${c}`, a + c)]), ex: `Treu ${c} als dos costats: ${a + c} − ${c} = ${a}.` }); }
    if (v === 3) { const a = ri(2, 9), b = ri(2, 9); return inp(`Quant val ${y}?`, b, { vis: wrap([row(`${x} + ${x}`, 2 * a), row(`${x} + ${y}`, a + b)]), ex: `Si ${x} + ${x} = ${2 * a}, llavors ${x} = ${a}. I si ${x} + ${y} = ${a + b}, llavors ${y} = ${a + b} − ${a} = ${b}.` }); }
    if (v === 4) { const a = ri(2, 9), b = ri(2, 6); return inp(`Quant val ${x}?`, a, { vis: wrap([row(`${x} + ${y}`, a + b), row(`${y} + ${y} + ${y}`, 3 * b)]), ex: `${y} = ${3 * b} ÷ 3 = ${b}. Llavors ${x} = ${a + b} − ${b} = ${a}.` }); }
    const a = ri(2, 8), b = ri(1, 6);
    return inp(`Quant val ${x}?`, a, { vis: wrap([row(`${x} + ${x} + ${y}`, 2 * a + b), row(y, b)]), ex: `Treu ${y}: ${2 * a + b} − ${b} = ${2 * a}. Dos ${x} fan ${2 * a}, així que ${x} = ${a}.` });
  },
  'l.riddle': L => {
    const ds = n => String(n).split('').reduce((a, b) => a + +b, 0);
    for (let tries = 0; tries < 60; tries++) {
      const lo = ri(1, 7) * 10, hi = lo + (L >= 5 ? 30 : 20), t = ri(lo + 1, hi - 1), clues = [];
      [3, 4, 5, 6, 7, 9].forEach(k => { if (t % k === 0) clues.push([`Soc <b>múltiple de ${k}</b>.`, n => n % k === 0]); });
      if (L >= 5 || Math.random() < .5) { const s = ds(t); clues.push([`Les meves xifres sumen <b>${s}</b>.`, n => ds(n) === s]); }
      if (t - lo > 4) { const g = ri(lo + 2, t - 1); clues.push([`Soc <b>més gran que ${g}</b>.`, n => n > g]); }
      if (hi - t > 4) { const g = ri(t + 1, hi - 2); clues.push([`Soc <b>més petit que ${g}</b>.`, n => n < g]); }
      const order = [[t % 2 ? 'Soc <b>senar</b>.' : 'Soc <b>parell</b>.', n => n % 2 === t % 2], ...shuffle(clues), [`Acabo en <b>${t % 10}</b>.`, n => n % 10 === t % 10]];
      let cands = []; for (let n = lo + 1; n < hi; n++) cands.push(n);
      const used = [];
      for (const c of order) { const nc = cands.filter(c[1]); if (nc.length < cands.length) { used.push(c); cands = nc; } if (cands.length === 1) break; }
      if (cands.length === 1 && used.length >= 2 && used.length <= (L >= 5 ? 4 : 3))
        return inp('Endevina quin número soc!', t, { vis: `<div class="riddle"><div>🔎 Soc un número entre <b>${lo}</b> i <b>${hi}</b>.</div>${used.map(c => `<div>${c[0]}</div>`).join('')}</div>`, ex: `Només el ${t} compleix totes les pistes.` });
    }
    return EX['l.series'](L);
  },

  /* ---- Unitat 6: Fraccions ---- */
  'f.pie': L => {
    const d = pick(L <= 1 ? [2, 4] : L <= 4 ? [2, 3, 4, 5, 6, 8] : [3, 4, 5, 6, 8, 10]), n = ri(1, d - 1), col = pick(COLS);
    const vis = (Math.random() < .5 || d > 8) ? barSVG(n, d, col) : pieSVG(n, d, col);
    const dis = [[d - n, d], [n, d - n], [d, n], [n, d + 1]].filter(([a, b]) => a > 0 && b > 0 && !(a === n && b === d));
    return mc('Quina fracció està <b>pintada</b>?', frac(n, d), dis.map(([a, b]) => frac(a, b)), { vis, big: true, ex: `Hi ha ${d} parts iguals i n'hi ha ${n} de pintades: ${n}/${d} (${fracName(n, d)}).` });
  },
  'f.read': L => {
    const dens = [2, 3, 4, 5, 6, 8, 10], d = pick(dens), n = ri(1, d - 1);
    const expl = `El número de dalt (${n}) diu quantes parts agafem; el de baix (${d}), en quantes parts iguals ho dividim. Es llegeix «${fracName(n, d)}».`;
    if (Math.random() < .5) {
      const dis = [];
      const od = pick(dens.filter(x => x !== d && x > n));
      [[n, od], [d - n, d], [n + 1 < d ? n + 1 : n - 1, d], [1, d]].forEach(([a, b]) => { if (a > 0 && b && a < b && !(a === n && b === d)) dis.push(fracName(a, b)); });
      return mc('Com es llegeix aquesta fracció?', fracName(n, d), dis, { vis: `<div class="bignum">${frac(n, d)}</div>`, list: true, ex: expl });
    }
    const od = pick(dens.filter(x => x !== d && x > n));
    return mc(`Quina fracció és «<b>${fracName(n, d)}</b>»?`, frac(n, d), [frac(d, n), od ? frac(n, od) : frac(n, d + 1), frac(d - n === n ? n + 1 : d - n, d)], { big: true, ex: expl });
  },
  'f.of': L => {
    let n = 1; const d = pick(L <= 3 ? [2, 3, 4, 5, 10] : [2, 3, 4, 5, 6, 8, 10]);
    if (L >= 4 && d > 2 && Math.random() < .5) n = ri(2, d - 1);
    const k = ri(2, L <= 3 ? 10 : 12), q = d * k, ans = n * k, txt = n === 1 ? FOF[d] : frac(n, d);
    const vis = q <= 30 ? emGrid('🍬', q, d) : '';
    return inp(`Quant és ${txt} de ${q}?`, ans, { vis, ex: n === 1 ? `Dividim en ${d} parts iguals: ${q} ÷ ${d} = ${k}.` : `Primer una part: ${q} ÷ ${d} = ${k}. Després n'agafem ${n}: ${k} × ${n} = ${ans}.` });
  },
  'f.cmp': L => {
    if (L <= 4 || Math.random() < .5) {
      const d = pick([3, 4, 5, 6, 8, 10]), a = ri(1, d - 1), b = ri(1, d - 1), sym = a < b ? '<' : a > b ? '>' : '=';
      return mc('Quin signe hi va?', sym, [], { fixed: ['<', '=', '>'], vis: `<div class="cmp">${frac(a, d)}${BOX}${frac(b, d)}</div>`, big: true, ex: a === b ? 'Són iguals!' : `Les parts són de la mateixa mida (totes són ${DENW[d][1]}). ${cap(NUMW[Math.max(a, b)])} trossos són més que ${NUMW[Math.min(a, b)]}.` });
    }
    const [x, y] = shuffle([2, 3, 4, 5, 6, 8, 10]).slice(0, 2), mn = Math.min(x, y), mx = Math.max(x, y), col = pick(COLS);
    return mc('Quina fracció és <b>més gran</b>?', frac(1, mn), [frac(1, mx)], { vis: `<div class="pies">${pieSVG(1, x, col)}${pieSVG(1, y, col)}</div>`, big: true, ex: `Com més parts fem, més petita és cada part. Per això 1/${mn} és més gran que 1/${mx}.` });
  },

  /* ---- Unitat 7: Mesures i formes ---- */
  'me.clock': L => {
    const mode = L <= 1 ? 'o' : L === 2 ? 'q' : L === 3 ? pick(['q', 'five']) : L === 4 ? pick(['five', 'name']) : pick(['name', 'dur', 'dur']);
    if (mode === 'dur') {
      const h = ri(9, 19), m = pick([0, 15, 30, 45]), d = pick([15, 20, 30, 40, 45, 60, 90]), tot = h * 60 + m + d, eh = Math.floor(tot / 60), em = tot % 60;
      return mc(`L'activitat comença a les <b>${dig(h, m)}</b> i dura <b>${durTxt(d)}</b>. A quina hora acaba?`, dig(eh, em), [dig(eh + 1, em), dig(h, (m + d) % 60), dig(eh, (em + 15) % 60), dig(eh - 1 < h ? eh + 1 : eh - 1, em)], { ex: `${dig(h, m)} + ${durTxt(d)} = ${dig(eh, em)}.` });
    }
    const h = ri(1, 12), m = mode === 'o' ? 0 : mode === 'q' ? pick([0, 15, 30, 45]) : mode === 'five' ? ri(0, 11) * 5 : pick([15, 30, 45]);
    const nx = h % 12 + 1, pv = h === 1 ? 12 : h - 1;
    if (mode === 'name') {
      const ex = `«${quartName(h, m)}» vol dir que ja ha passat ${QN[m / 15]} d'hora cap a ${lesH(nx)}: són les ${dig(h, m)}.`;
      if (Math.random() < .5) return mc('Quina hora marca el rellotge?', quartName(h, m), [quartName(nx, m), quartName(h, m === 45 ? 15 : m + 15), quartName(pv, m)], { vis: clockSVG(h, m), list: true, ex });
      return mc(`Quina hora és «<b>${quartName(h, m)}</b>»?`, dig(h, m), [dig(nx, m), dig(h, (m + 30) % 60), dig(pv, m)], { ex });
    }
    const dis = [dig(nx, m), dig(h, (m + 30) % 60), dig(pv, m)];
    if (m) dis.unshift(dig(m / 5, (h % 12) * 5));
    return mc('Quina hora marca el rellotge?', dig(h, m), dis, { vis: clockSVG(h, m), ex: `L'agulla petita marca les hores (${m ? 'ha passat el ' + h : 'és al ' + h}) i la gran, vermella, els minuts (${m}): són les ${dig(h, m)}.` });
  },
  'me.units': L => {
    const K = [['kg', 'g', 1000, 'quilos', 'grams', 'quilo'], ['km', 'm', 1000, 'quilòmetres', 'metres', 'quilòmetre'], ['l', 'ml', 1000, 'litres', 'mil·lilitres', 'litre'], ['m', 'cm', 100, 'metres', 'centímetres', 'metre']];
    if (L <= 3) {
      const a = ri(2, 9);
      if (Math.random() < .6) return inp(`Quants centímetres són <b>${a} metres</b>?`, a * 100, { unit: 'cm', ex: `1 metre = 100 cm, per tant ${a} × 100 = ${a * 100} cm.` });
      return inp(`Quants metres són <b>${a * 100} centímetres</b>?`, a, { unit: 'm', ex: `100 cm = 1 metre, per tant ${a * 100} ÷ 100 = ${a} metres.` });
    }
    if (L === 4 || Math.random() < .5) {
      if (Math.random() < .3) { const a = ri(1, 5), b = ri(5, 95); return inp(`Quants centímetres són <b>${a} m i ${b} cm</b>?`, a * 100 + b, { unit: 'cm', ex: `${a} m = ${a * 100} cm, i ${a * 100} + ${b} = ${a * 100 + b} cm.` }); }
      const [A, B, f, An, Bn, As] = pick(K), a = ri(2, 9);
      return inp(`Quants ${Bn} són <b>${a} ${An}</b>?`, a * f, { unit: B, ex: `1 ${As} = ${fmt(f)} ${B}, per tant ${a} × ${fmt(f)} = ${fmt(a * f)} ${B}.` });
    }
    const vals = new Set(); while (vals.size < 4) vals.add(ri(5, 30) * 100);
    const show = v => v % 1000 === 0 ? `${v / 1000} kg` : (v > 1000 && Math.random() < .5) ? `${Math.floor(v / 1000)} kg i ${v % 1000} g` : `${fmt(v)} g`;
    const arr = [...vals], lbl = arr.map(show), mx = Math.max(...arr);
    return mc('Què pesa <b>més</b>?', lbl[arr.indexOf(mx)], lbl.filter((_, i) => arr[i] !== mx), { ex: `Passa-ho tot a grams (1 kg = 1.000 g): ${arr.map(v => fmt(v) + ' g').join(', ')}. El més gran és ${fmt(mx)} g.` });
  },
  'me.shape': L => {
    const [nm, s] = pick(SHP), col = pick(COLS), v = Math.random();
    const desc = s ? `té ${s} costats i ${s} vèrtexs` : 'és rodó i no té costats rectes ni vèrtexs';
    if (v < .45 || s === 0) return mc('Com es diu aquesta figura?', nm, shuffle(SHP.map(x => x[0]).filter(x => x !== nm && !(nm === 'quadrat' && x === 'rectangle'))), { vis: shapeSVG(nm, s, col), ex: `És un ${nm}: ${desc}.` });
    if (v < .75) return inp(`Quants <b>costats</b> té un <b>${nm}</b>?`, s, { vis: shapeSVG(nm, s, col), ex: `Un ${nm} ${desc}.` });
    return inp('Quants <b>vèrtexs</b> (punxes) té aquesta figura?', s, { vis: shapeSVG(nm, s, col), ex: `És un ${nm}: ${desc}.` });
  },
  'me.perim': L => {
    if (L >= 5 && Math.random() < .4) { const s = ri(3, 12); return inp(`Un quadrat fa <b>${4 * s} cm</b> de perímetre. Quant fa cada costat?`, s, { unit: 'cm', vis: rectSVG(1, 1, '?', '?'), ex: `Un quadrat té 4 costats iguals: ${4 * s} ÷ 4 = ${s} cm.` }); }
    let w = ri(3, 12), h = ri(2, 9); if (w === h) w++;
    return inp("Quin és el <b>perímetre</b> d'aquest rectangle?", 2 * (w + h), { unit: 'cm', vis: rectSVG(w, h, `${w} cm`, `${h} cm`), ex: `El perímetre és la vora: sumem els 4 costats. ${w} + ${h} + ${w} + ${h} = ${2 * (w + h)} cm.` });
  },
  'me.money': L => {
    const cents = L >= 5;
    if (Math.random() < .5) {
      const pool = cents ? [500, 200, 100, 50, 20, 10] : [2000, 1000, 500, 200, 100], k = ri(3, 5);
      const cs = [...Array(k)].map(() => pick(pool)).sort((a, b) => b - a), tot = cs.reduce((a, b) => a + b, 0);
      if (!cents) return inp('Quants euros hi ha en total?', tot / 100, { unit: '€', vis: moneyVis(cs), ex: `${cs.map(c => c / 100).join(' + ')} = ${tot / 100} €.` });
      return mc('Quants diners hi ha en total?', eur(tot), [tot + 10, tot - 10, tot + 100, tot + 50].filter(x => x > 0).map(eur), { vis: moneyVis(cs), ex: `Suma primer els euros i després els cèntims (100 c = 1 €): ${eur(tot)}.` });
    }
    const item = pick(ITEMS);
    if (!cents) { const pay = pick([10, 20, 50]), p = ri(2, pay - 1); return inp(`Compres ${item} que costa <b>${p} €</b> i pagues amb un bitllet de <b>${pay} €</b>. Quant et tornen?`, pay - p, { unit: '€', vis: moneyVis([pay * 100]), ex: `${pay} − ${p} = ${pay - p} €. Comprova-ho: ${p} + ${pay - p} = ${pay}.` }); }
    const pay = pick([500, 1000]); let p; do p = ri(11, pay / 10 - 1) * 10; while (p % 100 === 0);
    const c = pay - p;
    return mc(`Compres ${item} que costa <b>${eur(p)}</b> i pagues amb un bitllet de <b>${eur(pay)}</b>. Quant et tornen?`, eur(c), [c + 10, c - 10, c + 100, c - 100].filter(x => x > 0).map(eur), { vis: moneyVis([pay]), ex: `Compta des de ${eur(p)} fins a ${eur(pay)}: et tornen ${eur(c)}.` });
  },

  /* ---- Unitat 8: Problemes ---- */
  'p.add': probEx('add'), 'p.mul': probEx('mul'), 'p.div': probEx('div'), 'p.two': probEx('two'), 'p.big': probEx('big')
};

/* ===== El camí ===== */
const UNITS = [
  { id: 'u1', title: 'Els grans números', desc: 'Llegeix, escriu i compara números fins al 99.999.', color: '#36A9E1', guide: 'numi', lessons: [
    { t: 'Unitats, desenes i centenes', sk: ['n.place', 'n.decomp'], L: 1 },
    { t: 'Fins al 9.999', sk: ['n.place', 'n.words', 'n.decomp'], L: 2 },
    { t: 'Fins al 99.999', sk: ['n.place', 'n.words', 'n.next'], L: 3 },
    { t: 'Comparar i ordenar', sk: ['n.compare', 'n.order'], L: 4 },
    { t: 'Arrodonir', sk: ['n.round', 'n.compare'], L: 5 }] },
  { id: 'u2', title: 'Sumes i restes', desc: 'Càlcul mental, portar-ne i el número amagat.', color: '#3CC46A', guide: 'numi', lessons: [
    { t: 'Sumes de cap', sk: ['a.add'], L: 1 },
    { t: 'Restes de cap', sk: ['a.sub', 'a.add'], L: 2 },
    { t: 'Portant-ne', sk: ['a.add', 'a.sub'], L: 3 },
    { t: 'El número amagat', sk: ['a.missing', 'a.estimate'], L: 4 },
    { t: 'Números grans', sk: ['a.add', 'a.sub', 'a.missing'], L: 5 }] },
  { id: 'u3', title: 'Multiplicar', desc: 'Les taules, per 10 i per 100 i multiplicacions grans.', color: '#FF9A3C', guide: 'vuit', lessons: [
    { t: 'Taules del 2, 5 i 10', sk: ['m.table', 'm.array'], L: 1 },
    { t: 'Taules del 3, 4 i 6', sk: ['m.table', 'm.array'], L: 2 },
    { t: 'Taules del 7, 8 i 9', sk: ['m.table', 'm.missing'], L: 3 },
    { t: 'Per 10 i per 100', sk: ['m.by10', 'm.missing'], L: 4 },
    { t: 'Multiplicacions grans', sk: ['m.big', 'm.table'], L: 5 }] },
  { id: 'u4', title: 'Dividir', desc: 'Repartir a parts iguals i saber què sobra.', color: '#FF6FA3', guide: 'vuit', lessons: [
    { t: 'Repartir a parts iguals', sk: ['d.share'], L: 1 },
    { t: 'Divisió i multiplicació', sk: ['d.table', 'd.rel'], L: 2 },
    { t: 'Divisions de les taules', sk: ['d.table', 'd.rel'], L: 3 },
    { t: 'Què sobra?', sk: ['d.rem'], L: 4 },
    { t: 'Dividir números grans', sk: ['d.big', 'd.table'], L: 5 }] },
  { id: 'u5', title: 'Lògica', desc: 'Sèries, balances i endevinalles de números.', color: '#8A4FB0', guide: 'guida', lessons: [
    { t: 'Sèries i patrons', sk: ['l.series', 'l.pattern'], L: 1 },
    { t: 'Parells i senars', sk: ['l.odd', 'l.series'], L: 2 },
    { t: 'Balances misterioses', sk: ['l.balance', 'l.series'], L: 3 },
    { t: 'Endevinalles', sk: ['l.riddle', 'l.balance'], L: 4 },
    { t: 'Detectius de números', sk: ['l.series', 'l.riddle', 'l.balance'], L: 5 }] },
  { id: 'u6', title: 'Fraccions', desc: 'Meitats, terços, quarts… i molt més!', color: '#22B5A0', guide: 'tuga', lessons: [
    { t: 'Meitats i quarts', sk: ['f.pie'], L: 1 },
    { t: 'Llegir fraccions', sk: ['f.read', 'f.pie'], L: 2 },
    { t: "La fracció d'un número", sk: ['f.of'], L: 3 },
    { t: 'Comparar fraccions', sk: ['f.cmp', 'f.of'], L: 4 },
    { t: 'Mestres de les fraccions', sk: ['f.pie', 'f.read', 'f.of', 'f.cmp'], L: 5 }] },
  { id: 'u7', title: 'Mesures i formes', desc: 'Rellotges, metres, diners i figures.', color: '#E08E00', guide: 'tuga', lessons: [
    { t: 'Quina hora és?', sk: ['me.clock'], L: 1 },
    { t: 'Metres i centímetres', sk: ['me.units', 'me.clock'], L: 2 },
    { t: 'Formes i perímetres', sk: ['me.shape', 'me.perim'], L: 3 },
    { t: 'Diners i mesures', sk: ['me.money', 'me.units'], L: 4 },
    { t: 'Quarts i durades', sk: ['me.clock', 'me.perim', 'me.money'], L: 5 }] },
  { id: 'u8', title: 'Problemes', desc: 'Llegeix, pensa i resol com un detectiu.', color: '#FF5A5F', guide: 'flama', lessons: [
    { t: 'Sumar i restar', sk: ['p.add'], L: 1 },
    { t: 'Multiplicar', sk: ['p.mul', 'p.add'], L: 2 },
    { t: 'Dividir', sk: ['p.div', 'p.mul'], L: 3 },
    { t: 'Dos passos', sk: ['p.two'], L: 4 },
    { t: 'Grans reptes', sk: ['p.two', 'p.big'], L: 5 }] }
];
