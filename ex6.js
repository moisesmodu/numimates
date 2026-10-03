/* ===== Primària: el que faltava del currículum (Decret 175/2022) · CA/ES =====
   La recta numèrica, el calendari i les 24 hores, el sistema mètric decimal (i els KB, MB i GB), triangles i
   quadrilàters, rectes paral·leles i perpendiculars, polígons regulars i eixos de simetria, fraccions-decimals-
   percentatges, la mediana, programació (si… llavors, I/O/NO, programes alhora, bucles dins de bucles, trobar
   l'error), coordenades cartesianes i diners (el millor preu, l'IVA i els interessos).
   Tot va dins d'una funció, com layout.js: els noms auxiliars no poden xocar amb els d'altres fitxers. Només s'afegeixen habilitats a EX. */
(() => {
  const LET = ['A', 'B', 'C', 'D'], eq = (a, b) => Math.abs(a - b) < 1e-9, pctS = v => fmtD(v) + ' %';
  const SI = () => L('Sí', 'Sí'), NO = () => L('No', 'No');
  // degradats compartits (chars.js DEFS) per als colors habituals; «gem» = punt rodó amb vora blanca, ombra i reflex
  const GR6 = { '#36A9E1': 'gBlue', '#3CC46A': 'gGreen', '#FF9A3C': 'gOrange', '#FF6FA3': 'gPink', '#8A4FB0': 'gPurple', '#22B5A0': 'gTeal', '#FF5A5F': 'gRed', '#FFC93C': 'gYellow' };
  const gf = c => GR6[c] ? `url(#${GR6[c]}) ${c}` : c;
  const gem = (x, y, r, c, cls = '') => `<circle${cls ? ` class="${cls}"` : ''} cx="${x}" cy="${y}" r="${r}" fill="${gf(c)}" stroke="#fff" stroke-width="2.4" filter="url(#vsh)"/><ellipse cx="${(x - r * .33).toFixed(1)}" cy="${(y - r * .38).toFixed(1)}" rx="${(r * .38).toFixed(1)}" ry="${(r * .24).toFixed(1)}" transform="rotate(-35 ${(x - r * .33).toFixed(1)} ${(y - r * .38).toFixed(1)})" fill="#fff" opacity=".6"/>`;
  // fins a k distractors que no valguin el mateix que el correcte ni entre ells (1/2 i 2/4 compten com el mateix)
  function dis3(cands, v, k = 3, val = x => x) { const out = []; for (const c of shuffle(cands)) if (out.length < k && !eq(val(c), v) && out.every(o => !eq(val(o), val(c)))) out.push(c); return out; }
  // en català s'apostrofa davant de «u» i «onze»: l'1, l'11, de l'1,5…
  const vow = v => LANG !== 'es' && v >= 0 && /^[uo]/.test(numCa(Math.floor(v)));
  const elN = v => vow(v) ? "l'" : 'el ', delN = v => vow(v) ? "de l'" : 'del ', alN = v => vow(v) ? "a l'" : 'al ';

  /* ---------- 1. La recta numèrica ---------- */
  // n intervals iguals; mk = {marca: rètol}; o.ar = fletxa, o.pts = {marca: lletra}, o.bare = recta buida (només marques amb rètol)
  // la recta va directament sobre la pissarra: línies i rètols en INK (el tema fosc els aclareix); punts i agulla amb volum
  function lineSVG(n, mk, o = {}) {
    const X = i => +(24 + 292 * i / n).toFixed(1), Y = 58;
    let s = `<svg viewBox="0 0 340 104" class="vsvg wide" style="width:min(340px,88vw)"><rect x="14" y="${Y - 7}" width="312" height="14" rx="7" fill="#8A4FB0" opacity=".1"/><line x1="9" y1="${Y}" x2="331" y2="${Y}" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/><polyline points="324,${Y - 8} 332,${Y} 324,${Y + 8}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="16,${Y - 8} 8,${Y} 16,${Y + 8}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    for (let i = 0; i <= n; i++) { const b = mk[i] !== undefined; if (o.bare && !b) continue; s += `<line x1="${X(i)}" y1="${Y - (b ? 12 : 7)}" x2="${X(i)}" y2="${Y + (b ? 12 : 7)}" stroke="${INK}" stroke-width="${b ? 3.2 : 2.2}" stroke-linecap="round"/>`; }
    for (const i in mk) s += `<text x="${X(+i)}" y="${Y + 35}" text-anchor="middle" font-size="${String(mk[i]).length > 5 ? 14 : 17}" ${F} fill="${INK}">${mk[i]}</text>`;
    for (const i in o.pts || {}) s += `${gem(X(+i), Y, 8, o.pc || '#36A9E1')}${o.pts[i] ? `<text x="${X(+i)}" y="${Y - 18}" text-anchor="middle" font-size="18" ${F} fill="${INK}">${o.pts[i]}</text>` : ''}`;
    // agulla vermella amb l'interrogant a dins
    if (o.ar !== undefined) { const x = X(o.ar); s += `<path d="M${x} ${Y - 4} L${x - 7.5} ${Y - 20} A11 11 0 1 1 ${x + 7.5} ${Y - 20} Z" fill="url(#gRed)" stroke="#B0262C" stroke-width="1.6" stroke-linejoin="round" filter="url(#vsh)"/><ellipse cx="${x - 4.5}" cy="${Y - 33}" rx="3.6" ry="2.2" transform="rotate(-35 ${x - 4.5} ${Y - 33})" fill="#fff" opacity=".55"/><text x="${x}" y="${Y - 22.5}" text-anchor="middle" font-size="15" ${F} fill="#fff">?</text>`; }
    return s + '</svg>';
  }
  // c = {a: inici, s: pas, n: intervals, lab: cada quantes marques hi ha rètol}
  const marks = (c, f) => { const mk = {}; for (let i = 0; i <= c.n; i += c.lab) mk[i] = f(c.a + i * c.s); mk[c.n] = f(c.a + c.n * c.s); return mk; };
  const freeOf = (c, mk) => [...Array(c.n).keys()].filter(i => mk[i] === undefined);
  function lineEx(c, mk, k, f, val = x => x) {
    const j = Object.keys(mk).map(Number).sort((x, y) => Math.abs(x - k) - Math.abs(y - k) || x - y)[0], d = Math.abs(k - j), r = c.a + j * c.s, v = c.a + k * c.s;
    return L(`D'una marca a la següent hi ha ${f(c.s)}. Des ${delN(val(r))}${f(r)} ${k > j ? 'avança' : 'retrocedeix'} ${d} ${d === 1 ? 'marca' : 'marques'}: arribes ${alN(val(v))}${f(v)}.`, `De una marca a la siguiente hay ${f(c.s)}. Desde el ${f(r)} ${k > j ? 'avanza' : 'retrocede'} ${d} ${d === 1 ? 'marca' : 'marcas'}: llegas al ${f(v)}.`);
  }
  // 4 lletres a 4 marques; es pregunta per la marca t (fq = com es diu el número a la pregunta, [ca, es])
  function lineLet(n, mk, ts, t, fq, why) {
    const lt = shuffle(LET), pts = {}; ts.forEach((k, i) => pts[k] = lt[i]);
    return mc(L(`On és ${fq[0]}? Tria la lletra.`, `¿Dónde está ${fq[1]}? Elige la letra.`), pts[t], [], { fixed: LET.slice(), big: true, vis: lineSVG(n, mk, { pts }), ex: why + L(` És la lletra ${pts[t]}.`, ` Es la letra ${pts[t]}.`) });
  }
  // recta «buida»: només els extrems; la fletxa és en una desena part i els distractors en queden lluny
  function lineBare(a, R, f, val = x => x) {
    const k = pick([1, 2, 3, 4, 6, 7, 8, 9]), v = a + k * R / 10, mid = a + R / 2;
    const dis = shuffle([...Array(11).keys()].filter(j => Math.abs(j - k) >= 2)).slice(0, 3).map(j => f(a + j * R / 10));
    return mc(L('Aquesta recta només té marcats els extrems. <b>Aproximadament</b>, quin número marca la fletxa?', 'Esta recta solo tiene marcados los extremos. <b>Aproximadamente</b>, ¿qué número marca la flecha?'), f(v), dis, { vis: lineSVG(10, { 0: f(a), 10: f(a + R) }, { ar: k, bare: true }), ex: L(`La meitat de la recta és ${f(mid)}. La fletxa és ${k > 5 ? 'passada' : 'abans de'} la meitat, a prop ${delN(val(v))}${f(v)}.`, `La mitad de la recta es ${f(mid)}. La flecha está ${k > 5 ? 'pasada' : 'antes de'} la mitad, cerca del ${f(v)}.`) });
  }
  function lineNat(L_, M) {
    const B = M / 10; let c, lets = false;
    if (M <= 20) {
      c = L_ <= 1 ? { a: 0, s: 1, n: 10, lab: 5 } : L_ === 2 ? pick([{ a: pick([0, 10]), s: 1, n: 10, lab: 10 }, { a: 0, s: 1, n: 20, lab: 5 }]) : L_ === 3 ? { a: 0, s: 1, n: 20, lab: 10 } : L_ === 4 ? { a: 0, s: 2, n: 10, lab: 5 } : pick([{ a: 0, s: 1, n: 20, lab: 10 }, { a: 0, s: 2, n: 10, lab: 5 }]);
      lets = L_ >= 3 && Math.random() < (L_ >= 5 ? .6 : .35);
    } else {
      const win = () => ({ a: B * ri(0, 8), s: B / 10, n: 10, lab: pick([5, 10]) });
      c = L_ <= 1 ? { a: 0, s: B, n: 10, lab: 5 } : L_ === 2 ? win() : L_ === 3 ? pick([{ a: 0, s: M / 20, n: 20, lab: 10 }, { a: B * ri(0, 8), s: B / 10, n: 20, lab: 10 }]) : M >= 1000 && Math.random() < .5 ? { a: M / 100 * ri(1, 98), s: M / 1000, n: 10, lab: pick([5, 10]) } : win();
      lets = L_ >= 4 && Math.random() < .4;
      if (L_ >= 5 && Math.random() < .4) return lineBare(0, M, fmt);
    }
    const mk = marks(c, fmt), free = freeOf(c, mk);
    if (lets) { const ts = shuffle(free).slice(0, 4), t = pick(ts), v = c.a + t * c.s; return lineLet(c.n, mk, ts, t, [`${elN(v)}<b>${fmt(v)}</b>`, `el <b>${fmt(v)}</b>`], lineEx(c, mk, t, fmt)); }
    const k = pick(free);
    return inp(L('Quin número marca la fletxa?', '¿Qué número marca la flecha?'), c.a + k * c.s, { vis: lineSVG(c.n, mk, { ar: k }), ex: lineEx(c, mk, k, fmt) });
  }
  function lineDec(L_) {
    const f = x => fmtD(x / 100), val = x => x / 100; let c, lets = false;   // tot en centèsimes
    if (L_ <= 1) c = { a: 100 * ri(0, 8), s: 10, n: 10, lab: 5 };
    else if (L_ === 2) c = { a: 100 * ri(0, 7), s: 10, n: 20, lab: 10 };
    else if (L_ === 3) c = { a: 100 * ri(0, 8) + 10 * ri(0, 9), s: 1, n: 10, lab: 5 };
    else if (L_ === 4) { c = pick([{ a: 100 * ri(0, 7), s: 10, n: 20, lab: 10 }, { a: 100 * ri(0, 8) + 10 * ri(0, 9), s: 1, n: 10, lab: 5 }]); lets = true; }
    else { if (Math.random() < .3) return lineBare(0, 100, f, val); c = pick([{ a: 0, s: 50, n: 10, lab: 2 }, { a: 0, s: 25, n: 12, lab: 4 }, { a: 0, s: 20, n: 10, lab: 5 }]); lets = Math.random() < .4; }
    const mk = marks(c, f), free = freeOf(c, mk);
    if (lets) { const ts = shuffle(free).slice(0, 4), t = pick(ts), v = c.a + t * c.s; return lineLet(c.n, mk, ts, t, [`${elN(v / 100)}<b>${f(v)}</b>`, `el <b>${f(v)}</b>`], lineEx(c, mk, t, f, val)); }
    const k = pick(free);
    return dinp(L('Quin nombre decimal marca la fletxa?', '¿Qué número decimal marca la flecha?'), (c.a + k * c.s) / 100, { vis: lineSVG(c.n, mk, { ar: k }), ex: lineEx(c, mk, k, f, val) });
  }
  function lineFrac(L_) {
    const mkU = (d, u) => { const mk = { 0: '0', [d]: '1' }; if (u > 1) mk[2 * d] = '2'; return mk; };
    if (L_ <= 1 || L_ === 3) {
      const d = pick(L_ <= 1 ? [2, 3, 4, 5, 6, 8, 10] : [2, 3, 4, 5, 6]), u = L_ <= 1 ? 1 : 2, k = u === 1 ? ri(1, d - 1) : ri(d + 1, 2 * d - 1);
      const dis = dis3([[d - k, d], [k + 1, d], [k - 1, d], [k, d + 1], [d, k], [k - d, d], [k, 2 * d], [k + 2, d]].filter(([p]) => p > 0), k / d, 3, ([p, q]) => p / q);
      return mc(L('Quina fracció marca la fletxa?', '¿Qué fracción marca la flecha?'), frac(k, d), dis.map(([p, q]) => frac(p, q)), { big: true, vis: lineSVG(d * u, mkU(d, u), { ar: k }), ex: L(`De 0 a 1 hi ha ${d} parts iguals: cada marca és 1/${d}. La fletxa és a ${k} ${k === 1 ? 'marca' : 'marques'} del 0: ${k}/${d}.`, `De 0 a 1 hay ${d} partes iguales: cada marca es 1/${d}. La flecha está a ${k} ${k === 1 ? 'marca' : 'marcas'} del 0: ${k}/${d}.`) + (k > d ? L(' És més gran que 1!', ' ¡Es mayor que 1!') : '') });
    }
    let d, u, t, fq, why;
    if (L_ === 2) { d = pick([3, 4, 5, 6, 8, 10]); u = d <= 4 ? 2 : 1; do t = ri(1, u * d - 1); while (t === d); fq = [`<b>${frac(t, d)}</b>`, `<b>${frac(t, d)}</b>`]; why = L(`Cada marca és 1/${d}: compta ${t} ${t === 1 ? 'marca' : 'marques'} des del 0.`, `Cada marca es 1/${d}: cuenta ${t} ${t === 1 ? 'marca' : 'marcas'} desde el 0.`); }
    else if (L_ === 4) { d = pick([4, 6, 8, 10]); u = d <= 4 ? 2 : 1; t = pick([...Array(u * d).keys()].filter(i => i && i !== d && gcd(i, d) > 1)); const g = gcd(t, d); fq = [`<b>${frac(t / g, d / g)}</b>`, `<b>${frac(t / g, d / g)}</b>`]; why = L(`Cada marca és 1/${d}, i ${t / g}/${d / g} = ${t}/${d} (fraccions equivalents): compta ${t} ${t === 1 ? 'marca' : 'marques'} des del 0.`, `Cada marca es 1/${d}, y ${t / g}/${d / g} = ${t}/${d} (fracciones equivalentes): cuenta ${t} ${t === 1 ? 'marca' : 'marcas'} desde el 0.`); }
    else { d = pick([4, 5, 10]); u = 2; do t = ri(1, 2 * d - 1); while (t % d === 0); fq = [`${elN(t / d)}<b>${fmtD(t / d)}</b>`, `el <b>${fmtD(t / d)}</b>`]; why = L(`De 0 a 1 hi ha ${d} parts: cada marca és ${fmtD(1 / d)}. ${fmtD(t / d)} = ${t}/${d}: compta ${t} ${t === 1 ? 'marca' : 'marques'} des del 0.`, `De 0 a 1 hay ${d} partes: cada marca es ${fmtD(1 / d)}. ${fmtD(t / d)} = ${t}/${d}: cuenta ${t} ${t === 1 ? 'marca' : 'marcas'} desde el 0.`); }
    const mk = mkU(d, u), free = [...Array(u * d).keys()].filter(i => mk[i] === undefined), ts = [t, ...shuffle(free.filter(i => i !== t)).slice(0, 3)];
    return lineLet(u * d, mk, ts, t, fq, why);
  }
  function lineInt(L_) {
    if (L_ >= 5) {
      let p, d, e, right; do { p = ri(-8, 8); d = ri(2, 9); right = Math.random() < .5; e = right ? p + d : p - d; } while (e < -10 || e > 10 || p === 0);
      return ninp(L(`El punt verd és el <b>${fmt(p)}</b>. Si fas <b>${d} salts</b> d'una unitat cap a ${right ? 'la dreta' : "l'esquerra"}, a quin número arribes?`, `El punto verde es el <b>${fmt(p)}</b>. Si das <b>${d} saltos</b> de una unidad hacia la ${right ? 'derecha' : 'izquierda'}, ¿a qué número llegas?`), e, { vis: lineSVG(20, marks({ a: -10, s: 1, n: 20, lab: 5 }, fmt), { pts: { [p + 10]: '' }, pc: '#3CC46A' }), ex: L(`Cap a la dreta els números creixen i cap a l'esquerra decreixen: ${fmt(p)} ${right ? '+' : '−'} ${d} = ${fmt(e)}.`, `Hacia la derecha los números crecen y hacia la izquierda decrecen: ${fmt(p)} ${right ? '+' : '−'} ${d} = ${fmt(e)}.`) });
    }
    const c = L_ <= 1 ? { a: -10, s: 1, n: 20, lab: 5 } : L_ === 2 ? pick([{ a: -20, s: 2, n: 10, lab: 5 }, { a: -10, s: 1, n: 10, lab: 5 }]) : L_ === 3 ? { a: -5, s: 1, n: 10, lab: 5 } : pick([{ a: -50, s: 5, n: 20, lab: 10 }, { a: -100, s: 10, n: 20, lab: 10 }]);
    const mk = marks(c, fmt), free = freeOf(c, mk), neg = free.filter(i => c.a + i * c.s < 0);
    if (L_ === 3) {
      const t = pick(neg), v = c.a + t * c.s, op = free.find(i => c.a + i * c.s === -v), ts = [t, op, ...shuffle(free.filter(i => i !== t && i !== op)).slice(0, 2)];
      return lineLet(c.n, mk, ts, t, [`el <b>${fmt(v)}</b>`, `el <b>${fmt(v)}</b>`], L(`Els negatius són a l'esquerra del 0: el ${fmt(v)} és ${-v} ${v === -1 ? 'marca' : 'marques'} a l'esquerra del 0 (el ${-v} és a la dreta).`, `Los negativos están a la izquierda del 0: el ${fmt(v)} está ${-v} ${v === -1 ? 'marca' : 'marcas'} a la izquierda del 0 (el ${-v} está a la derecha).`));
    }
    const k = Math.random() < .75 ? pick(neg) : pick(free);
    return ninp(L('Quin número marca la fletxa?', '¿Qué número marca la flecha?'), c.a + k * c.s, { vis: lineSVG(c.n, mk, { ar: k }), ex: lineEx(c, mk, k, fmt) });
  }

  /* ---------- 2. El calendari i les hores ---------- */
  const DSEM = [['dilluns', 'lunes'], ['dimarts', 'martes'], ['dimecres', 'miércoles'], ['dijous', 'jueves'], ['divendres', 'viernes'], ['dissabte', 'sábado'], ['diumenge', 'domingo']];
  const DAB = [['dl', 'L'], ['dt', 'M'], ['dc', 'X'], ['dj', 'J'], ['dv', 'V'], ['ds', 'S'], ['dg', 'D']];
  const MES = [['gener', 'enero'], ['febrer', 'febrero'], ['març', 'marzo'], ['abril', 'abril'], ['maig', 'mayo'], ['juny', 'junio'], ['juliol', 'julio'], ['agost', 'agosto'], ['setembre', 'septiembre'], ['octubre', 'octubre'], ['novembre', 'noviembre'], ['desembre', 'diciembre']];
  const DM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const m7 = i => ((i % 7) + 7) % 7, m12 = i => ((i % 12) + 12) % 12;
  const dia = i => tx(DSEM[m7(i)]), mes = i => tx(MES[m12(i)]), dias = i => dia(i) + (m7(i) >= 5 ? 's' : '');
  const deMes = m => LANG !== 'es' && /^[aeiou]/.test(mes(m)) ? "d'" : 'de ', alMes = m => LANG !== 'es' && /^[aeiou]/.test(mes(m)) ? "a l'" : 'al ';
  const dataS = (d, m) => `${d} ${deMes(m)}${mes(m)}`;
  const doy = (d, m) => DM.slice(0, m).reduce((a, b) => a + b, 0) + d;
  const fromDoy = n => { n = ((n - 1) % 365 + 365) % 365 + 1; let m = 0; while (n > DM[m]) n -= DM[m++]; return [n, m]; };
  const setm = q => q === 1 ? L('setmana', 'semana') : L('setmanes', 'semanas'), dd = r => r === 1 ? L('dia', 'día') : L('dies', 'días');
  const pas = k => k === 1 ? L('en passa 1', 'pasa 1') : L(`en passen ${k}`, `pasan ${k}`), qued = k => k === 1 ? L('en queda 1', 'queda 1') : L(`en queden ${k}`, `quedan ${k}`);
  const ORDN = () => L(['primer', 'segon', 'tercer', 'quart'], ['primer', 'segundo', 'tercer', 'cuarto']);
  const weekList = () => DSEM.map(tx).join(', ');
  // full del calendari: mes m que comença en dia de la setmana w0 (0 = dilluns); hi = dies encerclats
  function calSVG(m, w0, hi = []) {
    // full de calendari de paret: anelles, capçalera vermella amb volum, cap de setmana ombrejat i ratlles entre setmanes.
    // Tot va sobre el paper blanc: tintes fixes que el tema fosc no canvia (#2B1A39, #8A7B9A)
    const nd = DM[m], rows = Math.ceil((w0 + nd) / 7), cw = 40, ch = 30, W = cw * 7 + 16, T = 10, H = 72 + rows * ch + T + 6, B = H - 8;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="vsvg wide" style="width:min(300px,86vw)"><rect x="4" y="${T + 2}" width="${W - 8}" height="${B - T - 2}" rx="14" fill="url(#gPaper)" stroke="#E3D8EE" stroke-width="2" filter="url(#vsh)"/><path d="M4 ${T + 34}V${T + 16}a14 14 0 0 1 14-14h${W - 36}a14 14 0 0 1 14 14v18z" fill="url(#gRed)"/><rect x="16" y="${T + 6}" width="${W - 32}" height="6" rx="3" fill="#fff" opacity=".22"/><text x="${W / 2}" y="${T + 25}" text-anchor="middle" font-size="17" ${F} fill="#fff">${cap(mes(m))}</text>`;
    [W * .22, W * .78].forEach(x => { s += `<circle cx="${x}" cy="${T + 9}" r="4.2" fill="#8E2328"/><rect x="${x - 3}" y="2" width="6" height="${T + 8}" rx="3" fill="#A796BC" stroke="#5E4A75" stroke-width="1.2"/><rect x="${x - 1.4}" y="4" width="1.6" height="${T + 2}" rx=".8" fill="#fff" opacity=".6"/>`; });
    s += `<rect x="${8 + cw * 5 + 2}" y="${T + 40}" width="${cw * 2 - 4}" height="${rows * ch + 22}" rx="8" fill="#FFEFEF"/>`;
    for (let r = 1; r < rows; r++) s += `<line x1="14" y1="${T + 64 + r * ch}" x2="${W - 14}" y2="${T + 64 + r * ch}" stroke="#EEE6F5" stroke-width="1.3"/>`;
    for (let i = 0; i < 7; i++) s += `<text x="${8 + cw * i + cw / 2}" y="${T + 55}" text-anchor="middle" font-size="13" ${F} fill="${i >= 5 ? '#E0343B' : '#8A7B9A'}">${tx(DAB[i])}</text>`;
    for (let d = 1; d <= nd; d++) { const p = w0 + d - 1, c = p % 7, x = 8 + cw * c + cw / 2, y = T + 64 + Math.floor(p / 7) * ch + 19; if (hi.includes(d)) s += `<circle cx="${x}" cy="${y - 5}" r="13.5" fill="#FFE7A8" stroke="#F5B400" stroke-width="2.2"/>`; s += `<text class="cd" x="${x}" y="${y}" text-anchor="middle" font-size="15" ${F} fill="${c >= 5 ? '#E0343B' : '#2B1A39'}">${d}</text>`; }
    return s + '</svg>';
  }
  const dayMc = (q, i, o = {}) => mc(q, dia(i), shuffle([dia(i - 1), dia(i + 1), dia(i + 2), dia(i - 2), dia(i + 3)]), { list: true, ...o });
  const CTX = [['Una classe', 'Una clase'], ['Un partit', 'Un partido'], ['Una pel·lícula', 'Una película'], ['El pati', 'El recreo'], ['Un concert', 'Un concierto'], ['Una excursió', 'Una excursión']];
  const hm = t => `${Math.floor(t / 60)}:${pad(t % 60)}`;

  /* ---------- 3. Sistema mètric decimal, temps i dades digitals ---------- */
  const LAD = { len: ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], cap: ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'] };
  const conv = (from, to, ans, why) => (Number.isInteger(ans) ? inp : dinp)(L('Completa:', 'Completa:'), ans, { vis: eqv(`${from} = ${BOX} ${to}`), unit: to, ex: why });
  const convWhy = (u1, u2, k, mul, a, b) => L(`1 ${u1} = ${fmt(k)} ${u2}. ${mul ? 'Multipliquem' : 'Dividim'} per ${fmt(k)}: ${a} ${mul ? '×' : '÷'} ${fmt(k)} = ${b}.`, `1 ${u1} = ${fmt(k)} ${u2}. ${mul ? 'Multiplicamos' : 'Dividimos'} por ${fmt(k)}: ${a} ${mul ? '×' : '÷'} ${fmt(k)} = ${b}.`);
  // objectes per estimar: [ca, es, quantitat, unitat]; totes les altres unitats donen una mesura impossible
  const EST = {
    len: [['una porta', 'una puerta', '2', 'm'], ['un llapis nou', 'un lápiz nuevo', '15', 'cm'], ["l'amplada d'una ungla", 'el ancho de una uña', '1', 'cm'], ["el gruix d'una moneda", 'el grosor de una moneda', '2', 'mm'], ['el camí de Lleida a Barcelona', 'el camino de Lleida a Barcelona', '160', 'km'], ['una pista de bàsquet', 'una pista de baloncesto', '28', 'm'], ['una girafa', 'una jirafa', '5', 'm']],
    mass: [['una poma', 'una manzana', '150', 'g'], ['un elefant', 'un elefante', '5', 't'], ['un nen de 8 anys', 'un niño de 8 años', '25', 'kg'], ['una bicicleta', 'una bicicleta', '12', 'kg'], ['una formiga', 'una hormiga', '3', 'mg'], ['un paquet de galetes', 'un paquete de galletas', '200', 'g'], ['un camió carregat', 'un camión cargado', '20', 't']],
    cap: [["un got d'aigua", 'un vaso de agua', '250', 'ml'], ['una banyera', 'una bañera', '200', 'l'], ['una cullera', 'una cuchara', '5', 'ml'], ['una llauna de refresc', 'una lata de refresco', '33', 'cl'], ["el dipòsit d'un cotxe", 'el depósito de un coche', '50', 'l'], ["una ampolla d'aigua gran", 'una botella de agua grande', '1,5', 'l']],
    area: [['la teva habitació', 'tu habitación', '12', 'm²'], ['un segell', 'un sello', '6', 'cm²'], ['Catalunya', 'Cataluña', '32.000', 'km²'], ['una pista de tennis', 'una pista de tenis', '260', 'm²'], ["un full d'una llibreta", 'una hoja de una libreta', '6', 'dm²']]
  };
  const EU = { len: ['km', 'm', 'cm', 'mm'], mass: ['t', 'kg', 'g', 'mg'], cap: ['kl', 'l', 'cl', 'ml'], area: ['km²', 'm²', 'dm²', 'cm²'] };
  function estimate(kind) {
    const [ca, es, n, u] = pick(EST[kind]), it = L(ca, es);
    const q = { len: L(`Quant pot mesurar ${it}?`, `¿Cuánto puede medir ${it}?`), mass: L(`Quant pot pesar ${it}?`, `¿Cuánto puede pesar ${it}?`), cap: L(`Quant hi pot cabre, en ${it}?`, `¿Cuánto puede caber en ${it}?`), area: L(`Quina superfície pot tenir ${it}?`, `¿Qué superficie puede tener ${it}?`) }[kind];
    return mc(q, `${n} ${u}`, EU[kind].filter(x => x !== u).map(x => `${n} ${x}`), { ex: L(`La mesura raonable és ${n} ${u}. Imagina-t'ho: les altres serien massa grans o massa petites.`, `La medida razonable es ${n} ${u}. Imagínatelo: las otras serían demasiado grandes o demasiado pequeñas.`) });
  }
  // quina mesura és la més gran (o la més petita)? tot es passa a la unitat petita
  function compare(kind) {
    const S = { len: [['m', 1000], ['dm', 100], ['cm', 10], ['mm', 1], 800, 3000, 10, 'mm'], cap: [['l', 1000], ['dl', 100], ['cl', 10], ['ml', 1], 800, 3000, 10, 'ml'], mass: [['kg', 1000], ['g', 1], 500, 3000, 50, 'g'], area: [['m²', 10000], ['dm²', 100], ['cm²', 1], 5000, 30000, 100, 'cm²'] }[kind];
    const us = S.slice(0, -4), [lo, hi, st, base] = S.slice(-4), vals = new Set(); while (vals.size < 4) vals.add(ri(lo / st, hi / st) * st);
    const arr = [...vals], big = Math.random() < .6, tgt = big ? Math.max(...arr) : Math.min(...arr), lab = arr.map(v => { const [u, f] = pick(us); return `${fmtD(v / f)} ${u}`; });
    const q = { len: big ? L('Quina longitud és la <b>més llarga</b>?', '¿Qué longitud es la <b>más larga</b>?') : L('Quina longitud és la <b>més curta</b>?', '¿Qué longitud es la <b>más corta</b>?'), cap: big ? L('Quina capacitat és la <b>més gran</b>?', '¿Qué capacidad es la <b>mayor</b>?') : L('Quina capacitat és la <b>més petita</b>?', '¿Qué capacidad es la <b>menor</b>?'), mass: big ? L('Quin pes és el <b>més gran</b>?', '¿Qué peso es el <b>mayor</b>?') : L('Quin pes és el <b>més petit</b>?', '¿Qué peso es el <b>menor</b>?'), area: big ? L('Quina superfície és la <b>més gran</b>?', '¿Qué superficie es la <b>mayor</b>?') : L('Quina superfície és la <b>més petita</b>?', '¿Qué superficie es la <b>menor</b>?') }[kind];
    return mc(q, lab[arr.indexOf(tgt)], lab.filter((_, i) => arr[i] !== tgt), { ex: L(`Passa-ho tot a ${base}: ${arr.map(v => fmt(v) + ' ' + base).join(', ')}.`, `Pásalo todo a ${base}: ${arr.map(v => fmt(v) + ' ' + base).join(', ')}.`) });
  }
  // escala de 7 graons (km … mm, kl … ml): cada graó val 10 vegades el de sota
  function ladder(kind, L_) {
    const u = LAD[kind];
    if (L_ <= 1) { const i = ri(3, 5), v = ri(2, 9); return conv(`${v} ${u[i]}`, u[i + 1], v * 10, convWhy(u[i], u[i + 1], 10, true, v, v * 10)); }
    if (L_ === 2) { const i = ri(0, 4), j = i + ri(2, Math.min(3, 6 - i)), v = ri(2, 9), k = 10 ** (j - i); return conv(`${v} ${u[i]}`, u[j], v * k, convWhy(u[i], u[j], k, true, v, fmt(v * k))); }
    if (L_ === 3) {
      if (Math.random() < .35) {
        if (kind === 'len') { const a = ri(1, 9), b = ri(5, 95); return conv(`${a} m ${b} cm`, 'cm', a * 100 + b, L(`${a} m = ${a * 100} cm, i ${a * 100} + ${b} = ${a * 100 + b} cm.`, `${a} m = ${a * 100} cm, y ${a * 100} + ${b} = ${a * 100 + b} cm.`)); }
        const a = ri(1, 4), b = ri(1, 19) * 50; return conv(`${a} l ${b} ml`, 'ml', a * 1000 + b, L(`${a} l = ${fmt(a * 1000)} ml, i ${fmt(a * 1000)} + ${b} = ${fmt(a * 1000 + b)} ml.`, `${a} l = ${fmt(a * 1000)} ml, y ${fmt(a * 1000)} + ${b} = ${fmt(a * 1000 + b)} ml.`));
      }
      const i = ri(0, 5), j = i + ri(1, Math.min(3, 6 - i)), v = ri(2, 9), k = 10 ** (j - i);
      return conv(`${fmt(v * k)} ${u[j]}`, u[i], v, convWhy(u[i], u[j], k, false, fmt(v * k), v));
    }
    const i = ri(0, 5), j = i + ri(1, Math.min(3, 6 - i)), k = 10 ** (j - i);
    if (Math.random() < .5) { let v; do v = ri(11, 99); while (v % 10 === 0); return conv(`${fmtD(v / 10)} ${u[i]}`, u[j], v * k / 10, convWhy(u[i], u[j], k, true, fmtD(v / 10), fmt(v * k / 10))); }
    let w; do w = ri(11, 999); while (w % k === 0); return conv(`${fmt(w)} ${u[j]}`, u[i], w / k, convWhy(u[i], u[j], k, false, fmt(w), fmtD(w / k)));
  }

  /* ---------- 4. Figures: triangles, quadrilàters, rectes i polígons ---------- */
  const rad = g => g * Math.PI / 180, f1 = x => x.toFixed(1);
  const rotP = (P, g) => P.map(([x, y]) => [x * Math.cos(rad(g)) - y * Math.sin(rad(g)), x * Math.sin(rad(g)) + y * Math.cos(rad(g))]);
  // encaixa punts (y cap amunt) en una caixa W×H de l'SVG (y cap avall); retorna els punts i la funció que ho fa
  function fitP(P, W = 260, H = 170, m = 34) {
    const xs = P.map(p => p[0]), ys = P.map(p => p[1]), x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const k = Math.min((W - 2 * m) / ((x1 - x0) || 1), (H - 2 * m) / ((y1 - y0) || 1)), ox = (W - (x1 - x0) * k) / 2, oy = (H - (y1 - y0) * k) / 2;
    const map = ([x, y]) => [ox + (x - x0) * k, oy + (y1 - y) * k];
    return { Q: P.map(map), map };
  }
  const uv = (a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
  // recta que passa per p amb direcció d, retallada dins la caixa
  function clipL(p, d, W, H, m = 12) {
    let t0 = -1e9, t1 = 1e9;
    [[d[0], p[0], W], [d[1], p[1], H]].forEach(([dd, pp, S]) => { if (Math.abs(dd) < 1e-9) return; let a = (m - pp) / dd, b = (S - m - pp) / dd; if (a > b) [a, b] = [b, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, b); });
    return [[p[0] + d[0] * t0, p[1] + d[1] * t0], [p[0] + d[0] * t1, p[1] + d[1] * t1]];
  }
  // polígon amb marques: o.right = vèrtexs amb angle recte, o.ticks = ratlletes de costats iguals, o.sides/o.angles = rètols, o.line = eix
  function figSVG(Q, o = {}) {
    const W = o.W || 260, H = o.H || 170, n = Q.length, C = [Q.reduce((a, p) => a + p[0], 0) / n, Q.reduce((a, p) => a + p[1], 0) / n];
    // figura amb volum: farciment (degradat cel per defecte) amb ombra, reflex de dalt, contorn gruixut i vèrtexs marcats
    const ps = Q.map(p => p.map(f1).join(',')).join(' '), fl = o.fill || '#E8F5FE', sk = o.stroke || '#36A9E1';
    let s = `<svg viewBox="0 0 ${W} ${H}" class="vsvg wide"${W < 260 ? ' style="height:104px"' : ''}><polygon points="${ps}" fill="${fl === '#E8F5FE' ? 'url(#gSky)' : fl}" filter="url(#vsh)"/><polygon points="${ps}" fill="url(#gShine)" opacity=".7"/><polygon points="${ps}" fill="none" stroke="${sk}" stroke-width="3.5" stroke-linejoin="round"/>`;
    (o.right || []).forEach(i => { const V = Q[i], a = uv(V, Q[(i + n - 1) % n]), b = uv(V, Q[(i + 1) % n]), k = 11; s += `<path d="M${f1(V[0] + a[0] * k)} ${f1(V[1] + a[1] * k)}L${f1(V[0] + (a[0] + b[0]) * k)} ${f1(V[1] + (a[1] + b[1]) * k)}L${f1(V[0] + b[0] * k)} ${f1(V[1] + b[1] * k)}" fill="#fff" fill-opacity=".6" stroke="#2B1A39" stroke-width="2" stroke-linejoin="round"/>`; });
    // ratlletes de costats iguals: tinta fosca fixa amb un halo blanc, així es veuen damunt del contorn en tots dos temes
    (o.ticks || []).forEach((t, i) => { const A = Q[i], B = Q[(i + 1) % n], d = uv(A, B), m = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]; for (let j = 0; j < t; j++) { const w = (j - (t - 1) / 2) * 5.5, c = `x1="${f1(m[0] + d[0] * w + d[1] * 7)}" y1="${f1(m[1] + d[1] * w - d[0] * 7)}" x2="${f1(m[0] + d[0] * w - d[1] * 7)}" y2="${f1(m[1] + d[1] * w + d[0] * 7)}" stroke-linecap="round"`; s += `<line ${c} stroke="#fff" stroke-width="5"/><line ${c} stroke="#2B1A39" stroke-width="2.4"/>`; } });
    Q.forEach(V => { s += `<circle cx="${f1(V[0])}" cy="${f1(V[1])}" r="3.4" fill="#fff" stroke="${sk}" stroke-width="2.2"/>`; });
    (o.sides || []).forEach((t, i) => { if (t == null) return; const A = Q[i], B = Q[(i + 1) % n], m = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2], e = uv(A, B); let d = [-e[1], e[0]]; if ((m[0] - C[0]) * d[0] + (m[1] - C[1]) * d[1] < 0) d = [-d[0], -d[1]]; const r = 12 + 18 * Math.abs(d[0]); s += `<text x="${f1(m[0] + d[0] * r)}" y="${f1(m[1] + d[1] * r + 5)}" text-anchor="middle" font-size="14" ${F} fill="${INK}">${t}</text>`; });
    (o.angles || []).forEach((t, i) => { if (t == null) return; const V = Q[i], a = uv(V, Q[(i + n - 1) % n]), b = uv(V, Q[(i + 1) % n]), bi = uv([0, 0], [a[0] + b[0], a[1] + b[1]]), g = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1]))), r = Math.min(46, 13 / Math.sin(g / 2)) + 8; s += `<text x="${f1(V[0] + bi[0] * r)}" y="${f1(V[1] + bi[1] * r + 5)}" text-anchor="middle" font-size="14" ${F} fill="#C4661A">${t}</text>`; });
    if (o.line) s += `<line class="ax" x1="${f1(o.line[0][0])}" y1="${f1(o.line[0][1])}" x2="${f1(o.line[1][0])}" y2="${f1(o.line[1][1])}" stroke="#E0343B" stroke-width="3.4" stroke-dasharray="9 7" stroke-linecap="round"/>`;
    return s + '</svg>';
  }
  const TS = { eq: ['equilàter', 'equilátero'], is: ['isòsceles', 'isósceles'], es: ['escalè', 'escaleno'] }, TA = { ac: ['acutangle', 'acutángulo'], re: ['rectangle', 'rectángulo'], ob: ['obtusangle', 'obtusángulo'] };
  const TSW = { eq: ['té els tres costats iguals', 'tiene los tres lados iguales'], is: ['té dos costats iguals', 'tiene dos lados iguales'], es: ['té els tres costats diferents', 'tiene los tres lados diferentes'] };
  const TAW = { ac: ['té els tres angles aguts (menys de 90°)', 'tiene los tres ángulos agudos (menos de 90°)'], re: ['té un angle recte (90°)', 'tiene un ángulo recto (90°)'], ob: ['té un angle obtús (més de 90°)', 'tiene un ángulo obtuso (más de 90°)'] };
  // triangle a partir de dos angles (vèrtexs 0 i 1 a la base)
  const triPts = (A, B) => { const b = Math.sin(rad(B)) / Math.sin(rad(180 - A - B)); return [[0, 0], [1, 0], [b * Math.cos(rad(A)), b * Math.sin(rad(A))]]; };
  function triAngles(t) {
    for (;;) {
      if (t === 're') { const x = ri(30, 60); return shuffle([90, x, 90 - x]); }
      if (t === 'ob') { const o = ri(100, 125), x = ri(25, 155 - o); return shuffle([o, x, 180 - o - x]); }
      const x = ri(45, 80), y = ri(45, 80), z = 180 - x - y; if (z >= 40 && z <= 85) return shuffle([x, y, z]);
    }
  }
  function triSides(t) {
    if (t === 'eq') { const s = ri(3, 9); return [s, s, s]; }
    if (t === 'is') for (;;) { const e = ri(4, 9), b = ri(2, 2 * e - 2); if (Math.abs(b - e) >= 2) return shuffle([e, e, b]); }
    for (;;) { const x = shuffle([3, 4, 5, 6, 7, 8, 9, 10]).slice(0, 3).sort((p, q) => p - q); if (x[0] + x[1] > x[2] + 1) return shuffle(x); }
  }
  const COMBO = [['ac', 'eq', [60, 60, 60]], ['re', 'is', [90, 45, 45]], ['ac', 'is', [70, 70, 40]], ['ac', 'is', [50, 50, 80]], ['ob', 'is', [30, 30, 120]], ['ob', 'is', [35, 35, 110]], ['re', 'es', [90, 30, 60]], ['re', 'es', [90, 35, 55]], ['ac', 'es', [50, 60, 70]], ['ac', 'es', [45, 65, 70]], ['ob', 'es', [110, 40, 30]], ['ob', 'es', [100, 30, 50]]];
  const comboName = (a, s) => `${tx(TA[a])} ${LANG === 'es' ? (s === 'is' ? 'e' : 'y') : 'i'} ${tx(TS[s])}`;
  const QUAD = { quadrat: ['quadrat', 'cuadrado'], rectangle: ['rectangle', 'rectángulo'], rombe: ['rombe', 'rombo'], romboide: ['romboide', 'romboide'], trapezi: ['trapezi', 'trapecio'], trapezoide: ['trapezoide', 'trapezoide'] };
  const QPAR = { quadrat: 2, rectangle: 2, rombe: 2, romboide: 2, trapezi: 1, trapezoide: 0 };
  const QDESC = { quadrat: ['té 4 costats iguals i 4 angles rectes', 'tiene 4 lados iguales y 4 ángulos rectos'], rectangle: ['té 4 angles rectes i els costats iguals dos a dos', 'tiene 4 ángulos rectos y los lados iguales dos a dos'], rombe: ['té 4 costats iguals, però no té cap angle recte', 'tiene 4 lados iguales, pero no tiene ningún ángulo recto'], romboide: ['té els costats iguals i paral·lels dos a dos, però no té cap angle recte', 'tiene los lados iguales y paralelos dos a dos, pero no tiene ningún ángulo recto'], trapezi: ['només té dos costats paral·lels', 'solo tiene dos lados paralelos'], trapezoide: ['no té cap parell de costats paral·lels', 'no tiene ningún par de lados paralelos'] };
  const QPROP = { quadrat: ['Quin quadrilàter té els <b>4 costats iguals</b> i els <b>4 angles rectes</b>?', '¿Qué cuadrilátero tiene los <b>4 lados iguales</b> y los <b>4 ángulos rectos</b>?'], rectangle: ['Quin quadrilàter té <b>4 angles rectes</b> però <b>no</b> té tots els costats iguals?', '¿Qué cuadrilátero tiene <b>4 ángulos rectos</b> pero <b>no</b> tiene todos los lados iguales?'], rombe: ['Quin quadrilàter té els <b>4 costats iguals</b> però <b>cap angle recte</b>?', '¿Qué cuadrilátero tiene los <b>4 lados iguales</b> pero <b>ningún ángulo recto</b>?'], romboide: ['Quin quadrilàter té els costats <b>paral·lels dos a dos</b>, però no té tots els costats iguals ni cap angle recte?', '¿Qué cuadrilátero tiene los lados <b>paralelos dos a dos</b>, pero no tiene todos los lados iguales ni ningún ángulo recto?'], trapezi: ['Quin quadrilàter té <b>només dos</b> costats paral·lels?', '¿Qué cuadrilátero tiene <b>solo dos</b> lados paralelos?'], trapezoide: ['Quin quadrilàter <b>no té cap</b> parell de costats paral·lels?', '¿Qué cuadrilátero <b>no tiene ningún</b> par de lados paralelos?'] };
  const cross = (a, b, c) => (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
  const dirG = (a, b) => (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI + 360) % 180;
  const angDiff = (g, h) => { const d = Math.abs(g - h) % 180; return Math.min(d, 180 - d); };
  function quadShape(k, L_) {
    let P, right = [], ticks = [0, 0, 0, 0];
    const phi = rad(ri(55, 70));
    if (k === 'quadrat') { P = [[0, 0], [1, 0], [1, 1], [0, 1]]; right = [0, 1, 2, 3]; ticks = [1, 1, 1, 1]; }
    else if (k === 'rectangle') { const r = ri(16, 21) / 10; P = [[0, 0], [r, 0], [r, 1], [0, 1]]; right = [0, 1, 2, 3]; ticks = [1, 2, 1, 2]; }
    else if (k === 'rombe') { P = [[0, 0], [1, 0], [1 + Math.cos(phi), Math.sin(phi)], [Math.cos(phi), Math.sin(phi)]]; ticks = [1, 1, 1, 1]; }
    else if (k === 'romboide') { const r = ri(16, 20) / 10; P = [[0, 0], [r, 0], [r + Math.cos(phi), Math.sin(phi)], [Math.cos(phi), Math.sin(phi)]]; ticks = [1, 2, 1, 2]; }
    else if (k === 'trapezi') { const b = 2.2, h = ri(9, 12) / 10, t = ri(9, 13) / 10, x1 = Math.random() < .3 ? 0 : ri(2, Math.floor((b - t - .15) * 10)) / 10; P = [[0, 0], [b, 0], [x1 + t, h], [x1, h]]; if (x1 === 0) right = [0, 3]; }
    else for (;;) {
      P = [[0, 0], [ri(18, 23) / 10, ri(-2, 2) / 10], [ri(14, 20) / 10, ri(10, 14) / 10], [ri(-3, 4) / 10, ri(8, 12) / 10]];
      const cv = [0, 1, 2, 3].map(i => cross(P[i], P[(i + 1) % 4], P[(i + 2) % 4])), ang = [0, 1, 2, 3].map(i => dirG(P[i], P[(i + 1) % 4]));
      if ((cv.every(x => x > 0.05) || cv.every(x => x < -0.05)) && angDiff(ang[0], ang[2]) > 12 && angDiff(ang[1], ang[3]) > 12) break;
    }
    if (Math.random() < .5) P = P.map(([x, y]) => [-x, y]);
    const g = L_ <= 2 ? 0 : L_ === 3 ? ri(-15, 15) : ['quadrat', 'rectangle', 'rombe', 'romboide'].includes(k) ? ri(0, 359) : ri(-25, 25);
    return { P: rotP(P, g), right, ticks };
  }
  const quadSVG = (k, L_, W = 260, H = 170) => { const s = quadShape(k, L_); return figSVG(fitP(s.P, W, H, W < 260 ? 18 : 30).Q, { right: s.right, ticks: s.ticks, W, H }); };
  // dues rectes: 'par' paral·leles, 'perp' perpendiculars, 'obl' oblíqües (es tallen sense fer angle recte)
  function pairSVG(kind, th, o = {}) {
    const W = o.W || 260, H = o.H || 170, c = [W / 2 + ri(-12, 12), H / 2 + ri(-8, 8)], d1 = [Math.cos(rad(th)), Math.sin(rad(th))];
    const ph = kind === 'par' ? 0 : kind === 'perp' ? 90 : pick([ri(30, 60), ri(120, 150)]), d2 = [Math.cos(rad(th + ph)), Math.sin(rad(th + ph))], nr = [-d1[1], d1[0]], off = ri(20, 28) * H / 170;
    const p1 = kind === 'par' ? [c[0] + nr[0] * off, c[1] + nr[1] * off] : c, p2 = kind === 'par' ? [c[0] - nr[0] * off, c[1] - nr[1] * off] : c;
    // rectes com a tubs de color: vora fosca, cos de color i un fil de llum
    const tube = ([A, B], col, dk) => { const u = uv(A, B), nn = [-u[1] * 1.3, u[0] * 1.3], a = [A[0] + u[0] * 3 + nn[0], A[1] + u[1] * 3 + nn[1]], b = [B[0] - u[0] * 3 + nn[0], B[1] - u[1] * 3 + nn[1]], xy = (P, Q) => `x1="${f1(P[0])}" y1="${f1(P[1])}" x2="${f1(Q[0])}" y2="${f1(Q[1])}"`; return `<line ${xy(A, B)} stroke="${dk}" stroke-width="7.5" stroke-linecap="round"/><line class="ln" ${xy(A, B)} stroke="${col}" stroke-width="5" stroke-linecap="round"/><line ${xy(a, b)} stroke="#fff" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/>`; };
    let s = `<svg viewBox="0 0 ${W} ${H}" class="vsvg wide"${W < 260 ? ' style="height:104px"' : ''}>` + tube(clipL(p1, d1, W, H), '#36A9E1', '#1E86BE') + tube(clipL(p2, d2, W, H), '#FF6FA3', '#D94A84');
    if (kind === 'perp' && o.mark) { const k = 13; s += `<polyline points="${f1(c[0] + d1[0] * k)},${f1(c[1] + d1[1] * k)} ${f1(c[0] + (d1[0] + d2[0]) * k)},${f1(c[1] + (d1[1] + d2[1]) * k)} ${f1(c[0] + d2[0] * k)},${f1(c[1] + d2[1] * k)}" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>`; }
    return s + '</svg>';
  }
  const REL = { par: ['Paral·leles', 'Paralelas'], perp: ['Perpendiculars', 'Perpendiculares'], obl: ['Oblíqües', 'Oblicuas'] };
  const RELW = { par: ["no es tallen mai: sempre són a la mateixa distància, com les vies del tren", 'no se cortan nunca: siempre están a la misma distancia, como las vías del tren'], perp: ['es tallen i formen quatre angles rectes (90°), com una creu', 'se cortan y forman cuatro ángulos rectos (90°), como una cruz'], obl: ["es tallen, però sense fer angles rectes", 'se cortan, pero sin formar ángulos rectos'] };
  const CARR = [['carrer del Sol', 'calle del Sol'], ['carrer de la Lluna', 'calle de la Luna'], ['carrer de les Roses', 'calle de las Rosas'], ['carrer dels Pins', 'calle de los Pinos'], ['carrer Nou', 'calle Nueva'], ['carrer del Mar', 'calle del Mar']];
  // plànol amb 4 carrers: el de referència, un de paral·lel, un de perpendicular i un d'oblic
  function streetsQ() {
    const th = ri(-20, 20), nm = shuffle(CARR).slice(0, 4).map(tx), cols = ['#36A9E1', '#FF6FA3', '#3CC46A', '#FF9A3C'], W = 260, H = 250, dir = g => [Math.cos(rad(g)), Math.sin(rad(g))];
    const L4 = [[[130, 45], dir(th)], [[130, 118], dir(th)], [[70, 82], dir(th + 90)], [[190, 82], dir(th + pick([ri(35, 55), ri(125, 145)]))]].map(([p, d]) => clipL(p, d, W, 158));
    // plànol de barri: paper amb vora i ombra, carrers amb vorera blanca i línia discontínua al mig; llegenda a sota
    let s = `<svg viewBox="0 0 ${W} ${H}" class="vsvg wide" style="width:min(300px,86vw)"><rect x="4" y="4" width="${W - 8}" height="158" rx="12" fill="#EEF7E6" stroke="#D4E8C4" stroke-width="2" filter="url(#vsh)"/>`;
    L4.forEach(([A, B]) => { s += `<line x1="${f1(A[0])}" y1="${f1(A[1])}" x2="${f1(B[0])}" y2="${f1(B[1])}" stroke="#fff" stroke-width="14" stroke-linecap="round"/>`; });
    L4.forEach(([A, B], i) => { const xy = `x1="${f1(A[0])}" y1="${f1(A[1])}" x2="${f1(B[0])}" y2="${f1(B[1])}"`; s += `<g class="st"><line class="ln" ${xy} stroke="${cols[i]}" stroke-width="9" stroke-linecap="round"/><line ${xy} stroke="#fff" stroke-width="1.4" stroke-dasharray="5 6" stroke-opacity=".9"/><line x1="18" y1="${180 + i * 20}" x2="42" y2="${180 + i * 20}" stroke="${cols[i]}" stroke-width="8" stroke-linecap="round"/><text x="52" y="${185 + i * 20}" font-size="14" ${F} fill="${INK}">${nm[i]}</text></g>`; });
    const want = pick(['par', 'perp']), ans = nm[want === 'par' ? 1 : 2];
    return mc(L(`Quin carrer és <b>${want === 'par' ? 'paral·lel' : 'perpendicular'}</b> al ${nm[0]}?`, `¿Qué calle es <b>${want === 'par' ? 'paralela' : 'perpendicular'}</b> a la ${nm[0]}?`), ans, nm.slice(1).filter(x => x !== ans), { list: true, vis: s + '</svg>', ex: L(`El ${ans} ${tx(RELW[want])} amb el ${nm[0]}.`, `La ${ans} ${tx(RELW[want])} con la ${nm[0]}.`) });
  }
  const PN = { 3: ['triangle', 'triángulo'], 4: ['quadrilàter', 'cuadrilátero'], 5: ['pentàgon', 'pentágono'], 6: ['hexàgon', 'hexágono'], 7: ['heptàgon', 'heptágono'], 8: ['octàgon', 'octágono'], 9: ['enneàgon', 'eneágono'], 10: ['decàgon', 'decágono'] };
  const st0 = n => 90 + (n % 2 ? 0 : 180 / n), regP = n => [...Array(n)].map((_, i) => [Math.cos(rad(st0(n) + 360 * i / n)), Math.sin(rad(st0(n) + 360 * i / n))]);
  // figures per als eixos de simetria: punts, marques, nombre d'eixos, eixos i no-eixos (punt i angle)
  function symFig(maxN = 8) {
    const t = pick(['reg', 'reg', 'rect', 'rombe', 'iso', 'romboide', 'trap', 'esc']);
    if (t === 'reg') { const n = ri(3, maxN), o = st0(n); return { t, n, P: regP(n), ticks: Array(n).fill(1), ax: n, yes: [...Array(n)].map((_, k) => [[0, 0], o + k * 180 / n]), no: [...Array(n)].map((_, k) => [[0, 0], o + 90 / n + k * 180 / n]) }; }
    if (t === 'rect') return { t, P: [[-0.9, -0.5], [0.9, -0.5], [0.9, 0.5], [-0.9, 0.5]], right: [0, 1, 2, 3], ticks: [1, 2, 1, 2], ax: 2, yes: [[[0, 0], 0], [[0, 0], 90]], no: [[[0, 0], Math.atan2(1, 1.8) * 180 / Math.PI], [[0, 0], 180 - Math.atan2(1, 1.8) * 180 / Math.PI]] };
    if (t === 'rombe') return { t, P: [[0, -0.7], [1.1, 0], [0, 0.7], [-1.1, 0]], ticks: [1, 1, 1, 1], ax: 2, yes: [[[0, 0], 0], [[0, 0], 90]], no: [[[0, 0], Math.atan2(0.7, -1.1) * 180 / Math.PI], [[0, 0], Math.atan2(0.7, 1.1) * 180 / Math.PI]] };
    if (t === 'iso') return { t, P: [[-0.7, 0], [0.7, 0], [0, 1.5]], ticks: [0, 1, 1], ax: 1, yes: [[[0, 0.5], 90]], no: [[[-0.7, 0], Math.atan2(0.75, 1.05) * 180 / Math.PI]] };
    if (t === 'romboide') return { t, P: [[0, 0], [1.8, 0], [2.3, 0.9], [0.5, 0.9]], ticks: [1, 2, 1, 2], ax: 0, yes: [], no: [[[1.15, 0.45], 0], [[1.15, 0.45], 90]] };
    if (t === 'trap') return { t, P: [[0, 0], [2.2, 0], [1.6, 1], [0.6, 1]], ticks: [0, 1, 0, 1], ax: 1, yes: [[[1.1, 0.5], 90]], no: [[[1.1, 0.5], 0]] };
    return { t, P: [[0, 0], [2, 0], [0.5, 1.3]], ticks: [0, 0, 0], ax: 0, yes: [], no: [[[1, 0], 90]] };
  }
  const SYMW = { reg: ['Un polígon regular té tants eixos de simetria com costats', 'Un polígono regular tiene tantos ejes de simetría como lados'], rect: ['El rectangle en té 2: la línia horitzontal i la vertical del mig (les diagonals no!)', 'El rectángulo tiene 2: la línea horizontal y la vertical del centro (¡las diagonales no!)'], rombe: ['El rombe en té 2: les seves dues diagonals', 'El rombo tiene 2: sus dos diagonales'], iso: ['El triangle isòsceles en té 1: la línia que baixa del vèrtex de dalt fins al mig de la base', 'El triángulo isósceles tiene 1: la línea que baja del vértice de arriba hasta el centro de la base'], romboide: ['El romboide no en té cap: si el dobleguem, les parts no coincideixen mai', 'El romboide no tiene ninguno: si lo doblamos, las partes no coinciden nunca'], trap: ["Aquest trapezi (isòsceles) en té 1: la línia vertical del mig", 'Este trapecio (isósceles) tiene 1: la línea vertical del centro'], esc: ["El triangle escalè no en té cap: té els tres costats diferents", 'El triángulo escaleno no tiene ninguno: tiene los tres lados diferentes'] };

  /* ---------- 5. Fraccions, decimals i percentatges ---------- */
  const FDP = [[1, 2], [1, 4], [3, 4], [1, 10], [3, 10], [7, 10], [1, 5], [2, 5], [3, 5], [4, 5], [9, 10], [1, 20], [3, 20], [1, 25], [1, 50], [1, 8], [3, 8]];
  const fdpSet = L_ => FDP.slice(0, L_ <= 1 ? 6 : L_ === 2 ? 11 : L_ === 3 ? 15 : 17);
  const fdpS = (p, q, k) => k === 'f' ? frac(p, q) : k === 'd' ? fmtD(p / q) : pctS(p / q * 100);
  const dec3 = x => Math.abs(x * 1000 - Math.round(x * 1000)) < 1e-6;
  const fdpWhy = (p, q) => L(`${p}/${q} = ${p} ÷ ${q} = ${fmtD(p / q)}, i per passar-ho a percentatge multipliquem per 100: ${pctS(p / q * 100)}.`, `${p}/${q} = ${p} ÷ ${q} = ${fmtD(p / q)}, y para pasarlo a porcentaje multiplicamos por 100: ${pctS(p / q * 100)}.`);
  function gridSVG100(k) {
    // plafó de 100: safata lila amb vora i un petit passadís al mig (cada quadrant té 5 × 5, ajuda a comptar)
    const at = j => 8 + j * 16 + (j >= 5 ? 3 : 0);
    let s = '<svg viewBox="0 0 178 178" class="vsvg"><rect x="2" y="2" width="174" height="174" rx="11" fill="#F1EAF7" stroke="#DCCFE8" stroke-width="1.5"/>';
    for (let i = 0; i < 100; i++) s += `<rect x="${at(i % 10)}" y="${at(Math.floor(i / 10))}" width="15" height="15" rx="3" fill="${i < k ? 'url(#gOrange)' : '#fff'}" stroke="${i < k ? '#E07A20' : '#D9CCE6'}" stroke-width="1"/>`;
    return s + '</svg>';
  }

  /* ---------- 6. La mediana ---------- */
  const MCTX = [['Punts de cada partit', 'Puntos de cada partido'], ["Minuts que triguen a arribar a l'escola", 'Minutos que tardan en llegar a la escuela'], ['Llibres llegits aquest mes', 'Libros leídos este mes'], ['Gols de cada jornada', 'Goles de cada jornada']];
  const median = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
  const medWhy = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n % 2 ? L(`Primer ordenem: ${s.join(', ')}. El valor del mig és el ${fmtD(median(a))}.`, `Primero ordenamos: ${s.join(', ')}. El valor del centro es el ${fmtD(median(a))}.`) : L(`Primer ordenem: ${s.join(', ')}. Hi ha dos valors al mig (${s[n / 2 - 1]} i ${s[n / 2]}): la mediana és la seva mitjana, (${s[n / 2 - 1]} + ${s[n / 2]}) ÷ 2 = ${fmtD(median(a))}.`, `Primero ordenamos: ${s.join(', ')}. Hay dos valores en el centro (${s[n / 2 - 1]} y ${s[n / 2]}): la mediana es su media, (${s[n / 2 - 1]} + ${s[n / 2]}) ÷ 2 = ${fmtD(median(a))}.`); };

  /* ---------- 7. Programació per blocs ---------- */
  const bk = (t, cls = '', st = '') => `<div class="blk${cls ? ' ' + cls : ''}"${st ? ` style="${st}"` : ''}>${t}</div>`;
  const evB = () => bk(`🚩 ${L('quan comenci', 'al empezar')}`, 'ev'), inn = t => bk(t, 'in');
  const repB = (k, body, nest) => bk(`${L('repeteix', 'repite')} ${k} ${L('vegades', 'veces')}${body}`, 'loop', nest ? 'margin:6px 0 0 18px' : '');
  const siB = (c, a, b, nest) => bk(`${L('si', 'si')} ${c} ${L('llavors', 'entonces')}${a}${b ? `<div style="margin-top:6px">${L('si no', 'si no')}</div>${b}` : ''}`, 'loop', `background:#22B5A0;box-shadow:0 3px 0 #12806F${nest ? ';margin:6px 0 0 18px' : ''}`);
  const prog = (...b) => `<div class="code">${b.join('')}</div>`, say = t => `${L('digues', 'di')} ${t}`;
  const FC = [['vermelles', 'rojas', '🔴', '🟥'], ['blaves', 'azules', '🔵', '🟦'], ['verdes', 'verdes', '🟢', '🟩'], ['grogues', 'amarillas', '🟡', '🟨']], FSH = [['rodones', 'redondas'], ['quadrades', 'cuadradas']];
  const numbered = cmds => `<div class="cmds">${cmds.map((c, i) => `<span style="display:grid;justify-items:center;gap:3px"><span class="cmd" style="animation-delay:${i * 90}ms">${ARW[c]}</span><small style="font-weight:800;color:#8A7B99">${i + 1}</small></span>`).join('')}</div>`;
  const posOf = (st, cmds) => { const p = [st.slice()]; cmds.forEach(c => { const [r, q] = p[p.length - 1]; p.push([r + MOV[c][0], q + MOV[c][1]]); }); return p; };
  // graella amb el camí pintat (no fem servir la classe «trail»: l'app ja la fa servir per al camí entre unitats)
  const pathGrid = (st, w) => gridHTML(5, { [st.join(',')]: '🤖', [w.end.join(',')]: '🏁' }, false, w.seen).replace(/class="cgc trail" style="/g, 'class="cgc" style="background:#BFE3F7;');
  const botRow = (em, cmds) => `<div style="display:flex;align-items:center;gap:8px;justify-content:center"><span style="font-size:26px">${em}</span>${cmdHTML(cmds)}</div>`;

  /* ---------- 8. Coordenades cartesianes (primer quadrant) ---------- */
  const CX = x => 40 + x * 30, CY = y => 215 - y * 30, co = ([x, y]) => `(${x}, ${y})`;
  function cartSVG(pts, seg) {
    // full de paper mil·limetrat: tot va sobre el paper, amb tintes fixes que el tema fosc no canvia
    const PI = '#2B1A39';
    let s = `<svg viewBox="0 0 318 250" class="vsvg wide" style="width:min(318px,88vw)"><rect x="4" y="3" width="310" height="238" rx="14" fill="url(#gPaper)" stroke="#E3D8EE" stroke-width="2" filter="url(#vsh)"/>`;
    for (let i = 1; i <= 8; i++) s += `<line x1="${CX(i)}" y1="${CY(0)}" x2="${CX(i)}" y2="${CY(6)}" stroke="#CFE2F4" stroke-width="1.4"/>`;
    for (let j = 1; j <= 6; j++) s += `<line x1="${CX(0)}" y1="${CY(j)}" x2="${CX(8)}" y2="${CY(j)}" stroke="#CFE2F4" stroke-width="1.4"/>`;
    s += `<path d="M${CX(0)} ${CY(0)}H${CX(8) + 16}M${CX(8) + 9} ${CY(0) - 6}l7 6-7 6M${CX(0)} ${CY(0)}V${CY(6) - 16}M${CX(0) - 6} ${CY(6) - 9}l6 -7 6 7" fill="none" stroke="${PI}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`;
    for (let i = 0; i <= 8; i++) s += `<line x1="${CX(i)}" y1="${CY(0) - 4}" x2="${CX(i)}" y2="${CY(0) + 4}" stroke="${PI}" stroke-width="2" stroke-linecap="round"/><text x="${CX(i)}" y="${CY(0) + 21}" text-anchor="middle" font-size="14" ${F} fill="#6E5F80">${i}</text>`;
    for (let j = 1; j <= 6; j++) s += `<line x1="${CX(0) - 4}" y1="${CY(j)}" x2="${CX(0) + 4}" y2="${CY(j)}" stroke="${PI}" stroke-width="2" stroke-linecap="round"/><text x="${CX(0) - 14}" y="${CY(j) + 5}" text-anchor="middle" font-size="14" ${F} fill="#6E5F80">${j}</text>`;
    s += `<text x="${CX(8) + 18}" y="${CY(0) + 21}" font-size="15" ${F} fill="${PI}">x</text><text x="${CX(0) + 10}" y="${CY(6) - 8}" font-size="15" ${F} fill="${PI}">y</text>`;
    if (seg) s += `<polyline points="${seg.map(([x, y]) => `${CX(x)},${CY(y)}`).join(' ')}" fill="none" stroke="#8A4FB0" stroke-width="3" stroke-dasharray="7 5" stroke-linecap="round" stroke-linejoin="round"/>`;
    pts.forEach(([x, y, t, c]) => { s += `${gem(CX(x), CY(y), 8, c, 'pt')}<text x="${CX(x) + 11}" y="${CY(y) - 10}" font-size="17" ${F} fill="${PI}" stroke="#fff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">${t}</text>`; });
    return s + '</svg>';
  }
  const rndPt = (used, xs = [0, 8], ys = [0, 6]) => { let p; do p = [ri(...xs), ri(...ys)]; while (used.some(u => u[0] === p[0] && u[1] === p[1])); used.push(p); return p; };

  /* ---------- 9. Diners ---------- */
  const PROD = [['iogurts', 'iogurt', 'yogures', 'yogur'], ['llapis', 'llapis', 'lápices', 'lápiz'], ['ous', 'ou', 'huevos', 'huevo'], ['magdalenes', 'magdalena', 'magdalenas', 'magdalena'], ['llibretes', 'llibreta', 'libretas', 'libreta'], ['sucs', 'suc', 'zumos', 'zumo']];
  const PKG = [['formatge', 'queso'], ['pernil', 'jamón'], ['cireres', 'cerezas'], ['olives', 'aceitunas'], ['bolets', 'setas']];

  Object.assign(EX, {
    /* La recta numèrica: 'n.line:20' … 'n.line:100000' (naturals), 'n.line:dec', 'n.line:frac', 'n.line:int' */
    'n.line': (L_, A) => A === 'dec' ? lineDec(L_) : A === 'frac' ? lineFrac(L_) : A === 'int' ? lineInt(L_) : lineNat(L_, +A || 100),

    /* El calendari: 'me.cal:week' (dies), 'me.cal:year' (mesos), 'me.cal:month' (el full del calendari), 'me.cal:date' (dates) */
    'me.cal': (L_, A) => {
      const kind = A || 'date';
      if (kind === 'week') {
        const i = ri(0, 6), exO = L(`L'ordre dels dies és: ${weekList()}.`, `El orden de los días es: ${weekList()}.`);
        if (L_ <= 1) return dayMc(L(`Quin dia va <b>després</b> de <b>${dia(i)}</b>?`, `¿Qué día va <b>después</b> del <b>${dia(i)}</b>?`), i + 1, { ex: exO + L(` Després de ${dia(i)} ve ${dia(i + 1)}.`, ` Después del ${dia(i)} viene el ${dia(i + 1)}.`) });
        if (L_ === 2) {
          if (Math.random() < .5) return dayMc(L('Quin dia de la setmana falta?', '¿Qué día de la semana falta?'), i, { vis: `<div class="seq">${DSEM.map((d, j) => j === i ? BOX : `<span style="font-size:17px">${tx(d)}</span>`).join('')}</div>`, ex: exO });
          return dayMc(L(`Quin dia va <b>abans</b> de <b>${dia(i)}</b>?`, `¿Qué día va <b>antes</b> del <b>${dia(i)}</b>?`), i - 1, { ex: exO + L(` Abans de ${dia(i)} hi ha ${dia(i - 1)}.`, ` Antes del ${dia(i)} está el ${dia(i - 1)}.`) });
        }
        if (L_ <= 4) {
          const t = pick(L_ === 3 ? [1, -1] : [2, -2]), W_ = { 1: ['serà <b>demà</b>', 'será <b>mañana</b>'], '-1': ['va ser <b>ahir</b>', 'fue <b>ayer</b>'], 2: ['serà <b>demà passat</b>', 'será <b>pasado mañana</b>'], '-2': ["va ser <b>abans-d'ahir</b>", 'fue <b>anteayer</b>'] }[t];
          return dayMc(L(`Avui és <b>${dia(i)}</b>. Quin dia ${W_[0]}?`, `Hoy es <b>${dia(i)}</b>. ¿Qué día ${W_[1]}?`), i + t, { ex: exO + L(` ${t > 0 ? 'Avancem' : 'Tornem enrere'} ${Math.abs(t)} ${Math.abs(t) === 1 ? 'dia' : 'dies'} des de ${dia(i)}: ${dia(i + t)}.`, ` ${t > 0 ? 'Avanzamos' : 'Retrocedemos'} ${Math.abs(t)} ${Math.abs(t) === 1 ? 'día' : 'días'} desde el ${dia(i)}: ${dia(i + t)}.`) });
        }
        const v = ri(0, 2);
        if (v === 0) return inp(L('Quants dies té una setmana?', '¿Cuántos días tiene una semana?'), 7, { ex: exO + L(' Són 7 dies.', ' Son 7 días.') });
        if (v === 1) { let j; do j = ri(0, 6); while (j === i); const n = m7(j - i); return inp(L(`Avui és <b>${dia(i)}</b>. Quants dies falten per al <b>${dia(j)}</b>?`, `Hoy es <b>${dia(i)}</b>. ¿Cuántos días faltan para el <b>${dia(j)}</b>?`), n, { ex: L(`Compta: ${[...Array(n)].map((_, k) => dia(i + k + 1)).join(', ')}. Són ${n} ${dd(n)}.`, `Cuenta: ${[...Array(n)].map((_, k) => dia(i + k + 1)).join(', ')}. Son ${n} ${dd(n)}.`) }); }
        const y = L(' i ', ' y ');
        return mc(L('Quins dies són el <b>cap de setmana</b>?', '¿Qué días son el <b>fin de semana</b>?'), dia(5) + y + dia(6), [dia(4) + y + dia(5), dia(6) + y + dia(0), dia(3) + y + dia(4)], { ex: L(`El cap de setmana és ${dia(5)} i ${dia(6)}.`, `El fin de semana es sábado y domingo.`) });
      }
      if (kind === 'year') {
        const m = ri(0, 11), exO = L(`L'ordre dels mesos és: ${MES.map(tx).join(', ')}.`, `El orden de los meses es: ${MES.map(tx).join(', ')}.`), mD = (i, o = {}) => mc(o.q, mes(i), shuffle([mes(i - 1), mes(i + 1), mes(i + 2), mes(i - 2), mes(i + 4)]), { list: true, ex: exO + (o.ex || ''), vis: o.vis });
        if (L_ <= 1) return mD(m + 1, { q: L(`Quin mes va <b>després</b> de <b>${mes(m)}</b>?`, `¿Qué mes va <b>después</b> de <b>${mes(m)}</b>?`) });
        if (L_ === 2) { const k = ri(1, 2); return mD(m + k, { q: L('Quin mes falta?', '¿Qué mes falta?'), vis: `<div class="seq">${[0, 1, 2, 3].map(j => j === k ? BOX : `<span style="font-size:18px">${mes(m + j)}</span>`).join('')}</div>` }); }
        if (L_ === 3) {
          const v = ri(0, 2);
          if (v === 0) return mD(m - 1, { q: L(`Quin mes va <b>abans</b> de <b>${mes(m)}</b>?`, `¿Qué mes va <b>antes</b> de <b>${mes(m)}</b>?`) });
          if (v === 1) return inp(L('Quants mesos té un any?', '¿Cuántos meses tiene un año?'), 12, { ex: exO + L(' Són 12 mesos.', ' Son 12 meses.') });
          const first = Math.random() < .5; return mD(first ? 0 : 11, { q: first ? L("Quin és el <b>primer</b> mes de l'any?", '¿Cuál es el <b>primer</b> mes del año?') : L("Quin és l'<b>últim</b> mes de l'any?", '¿Cuál es el <b>último</b> mes del año?') });
        }
        if (L_ === 4) { const k = ri(2, 5); return mD(m + k, { q: L(`Som ${alMes(m)}<b>${mes(m)}</b>. Quin mes serà d'aquí a <b>${k} mesos</b>?`, `Estamos en <b>${mes(m)}</b>. ¿Qué mes será dentro de <b>${k} meses</b>?`), ex: L(` Compta ${k} mesos endavant: ${[...Array(k)].map((_, j) => mes(m + j + 1)).join(', ')}.`, ` Cuenta ${k} meses hacia delante: ${[...Array(k)].map((_, j) => mes(m + j + 1)).join(', ')}.`) }); }
        const EV = [['En quin mes és <b>Nadal</b>?', '¿En qué mes es <b>Navidad</b>?', 11, 'Nadal és el 25 de desembre.|La Navidad es el 25 de diciembre.'], ['En quin mes és <b>Sant Jordi</b>, el dia dels llibres i les roses?', '¿En qué mes es <b>Sant Jordi</b>, el día de los libros y las rosas?', 3, "Sant Jordi és el 23 d'abril.|Sant Jordi es el 23 de abril."], ['En quin mes és la <b>revetlla de Sant Joan</b>?', '¿En qué mes es la <b>verbena de San Juan</b>?', 5, 'La revetlla és la nit del 23 de juny.|La verbena es la noche del 23 de junio.'], ["En quin mes comença el <b>curs</b> a l'escola?", '¿En qué mes empieza el <b>curso</b> en la escuela?', 8, 'A Catalunya el curs comença al setembre.|En Cataluña el curso empieza en septiembre.'], ["En quin mes comença l'<b>estiu</b>?", '¿En qué mes empieza el <b>verano</b>?', 5, "L'estiu comença cap al 21 de juny.|El verano empieza hacia el 21 de junio."], ['En quin mes comença la <b>primavera</b>?', '¿En qué mes empieza la <b>primavera</b>?', 2, 'La primavera comença cap al 20 de març.|La primavera empieza hacia el 20 de marzo.'], ['En quin mes comença la <b>tardor</b>?', '¿En qué mes empieza el <b>otoño</b>?', 8, 'La tardor comença cap al 22 de setembre.|El otoño empieza hacia el 22 de septiembre.'], ["En quin mes comença l'<b>hivern</b>?", '¿En qué mes empieza el <b>invierno</b>?', 11, "L'hivern comença cap al 21 de desembre.|El invierno empieza hacia el 21 de diciembre."]];
        const [ca, es, k, w] = pick(EV);
        return mc(L(ca, es), mes(k), shuffle([mes(k - 1), mes(k + 1), mes(k + 3), mes(k + 6)]), { list: true, ex: tx(w) });
      }
      if (kind === 'month') {
        const m = pick([0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), w0 = ri(0, 6), nd = DM[m], wOf = d => m7(w0 + d - 1);
        if (L_ <= 1) { const d = ri(1, nd); return dayMc(L(`Mira el calendari. Quin dia de la setmana és ${elN(d)}<b>${dataS(d, m)}</b>?`, `Mira el calendario. ¿Qué día de la semana es el <b>${dataS(d, m)}</b>?`), wOf(d), { vis: calSVG(m, w0, [d]), ex: L(`Busca el ${d} al calendari i mira a quina columna és: ${dia(wOf(d))}.`, `Busca el ${d} en el calendario y mira en qué columna está: ${dia(wOf(d))}.`) }); }
        if (L_ === 2) { const w = ri(0, 6), ds = [...Array(nd)].map((_, i) => i + 1).filter(d => wOf(d) === w); return inp(L(`Quants <b>${dias(w)}</b> té aquest mes?`, `¿Cuántos <b>${dias(w)}</b> tiene este mes?`), ds.length, { vis: calSVG(m, w0), ex: L(`Mira la columna ${tx(DAB[w])}: els dies ${ds.join(', ')}. En són ${ds.length}.`, `Mira la columna ${tx(DAB[w])}: los días ${ds.join(', ')}. Son ${ds.length}.`) }); }
        if (L_ === 3) { const d = ri(1, nd - 3), e = ri(d + 2, Math.min(nd, d + 20)); return inp(L(`Avui és dia <b>${d}</b>. Quants dies falten per al dia <b>${e}</b>?`, `Hoy es día <b>${d}</b>. ¿Cuántos días faltan para el día <b>${e}</b>?`), e - d, { vis: calSVG(m, w0, [d, e]), ex: L(`Del ${d} al ${e}: ${e} − ${d} = ${e - d} dies.`, `Del ${d} al ${e}: ${e} − ${d} = ${e - d} días.`) }); }
        if (L_ === 4 && Math.random() < .5) { const k = ri(1, 2), d = ri(1, nd - 7 * k); return inp(L(`Quin dia del mes serà <b>${k === 1 ? 'una setmana' : 'dues setmanes'}</b> després ${delN(d)}${d}?`, `¿Qué día del mes será <b>${k === 1 ? 'una semana' : 'dos semanas'}</b> después del ${d}?`), d + 7 * k, { vis: calSVG(m, w0), ex: L(`Una setmana són 7 dies: ${d} + ${7 * k} = ${d + 7 * k}. Mira-ho al calendari: és a la mateixa columna!`, `Una semana son 7 días: ${d} + ${7 * k} = ${d + 7 * k}. Míralo en el calendario: ¡está en la misma columna!`) }); }
        if (L_ >= 5 && Math.random() < .5) return inp(L(`Quants dies té el mes ${deMes(m)}<b>${mes(m)}</b>?`, `¿Cuántos días tiene el mes de <b>${mes(m)}</b>?`), nd, { ex: L('Trenta dies té el novembre, amb l\'abril, juny i setembre; vint-i-vuit en té un i els altres, trenta-un.', 'Treinta días trae noviembre, con abril, junio y septiembre; veintiocho trae uno, y los demás, treinta y uno.') });
        const w = ri(0, 6), k = ri(0, 2), f = m7(w - w0) + 1, ans = f + 7 * k;
        return inp(L(`Quin dia del mes és el <b>${ORDN()[k]} ${dia(w)}</b>?`, `¿Qué día del mes es el <b>${ORDN()[k]} ${dia(w)}</b>?`), ans, { vis: calSVG(m, w0), ex: L(`El primer ${dia(w)} és el ${f}; cada setmana en sumem 7: ${[...Array(k + 1)].map((_, j) => f + 7 * j).join(', ')}.`, `El primer ${dia(w)} es el ${f}; cada semana sumamos 7: ${[...Array(k + 1)].map((_, j) => f + 7 * j).join(', ')}.`) });
      }
      // kind === 'date': dates de març a desembre (sense el febrer: així no depèn dels anys de traspàs)
      if (L_ <= 1) { const k = ri(2, 6); if (Math.random() < .5) return inp(L(`Quants dies són <b>${k} setmanes</b>?`, `¿Cuántos días son <b>${k} semanas</b>?`), 7 * k, { ex: L(`Cada setmana té 7 dies: ${k} × 7 = ${7 * k}.`, `Cada semana tiene 7 días: ${k} × 7 = ${7 * k}.`) }); return inp(L(`Quantes setmanes són <b>${7 * k} dies</b>?`, `¿Cuántas semanas son <b>${7 * k} días</b>?`), k, { ex: L(`Cada setmana té 7 dies: ${7 * k} ÷ 7 = ${k}.`, `Cada semana tiene 7 días: ${7 * k} ÷ 7 = ${k}.`) }); }
      const m = ri(2, 9), d = ri(1, DM[m]);
      if (L_ === 2) {
        const n = ri(3, 12), N = doy(d, m) + n, [d2, m2] = fromDoy(N);
        const dis = [fromDoy(N + 1), fromDoy(N - 1), m2 !== m && d2 <= DM[m] ? [d2, m] : fromDoy(N + 2), fromDoy(N + 7)].map(([x, y]) => dataS(x, y));
        return mc(L(`Avui és ${elN(d)}<b>${dataS(d, m)}</b>. Quina data serà d'aquí a <b>${n} dies</b>?`, `Hoy es <b>${dataS(d, m)}</b>. ¿Qué fecha será dentro de <b>${n} días</b>?`), dataS(d2, m2), dis, { ex: m2 !== m && d === DM[m] ? L(`Avui és l'últim dia ${deMes(m)}${mes(m)}, així que els ${n} dies són tots del mes següent. Serà ${elN(d2)}${dataS(d2, m2)}.`, `Hoy es el último día de ${mes(m)}, así que los ${n} días son todos del mes siguiente. Será el ${dataS(d2, m2)}.`)
          : m2 !== m ? L(`${cap(mes(m))} té ${DM[m]} dies: fins al ${DM[m]} ${pas(DM[m] - d)} i ${qued(n - DM[m] + d)} per al mes següent. Serà ${elN(d2)}${dataS(d2, m2)}.`, `${cap(mes(m))} tiene ${DM[m]} días: hasta el ${DM[m]} ${pas(DM[m] - d)} y ${qued(n - DM[m] + d)} para el mes siguiente. Será el ${dataS(d2, m2)}.`) : L(`${d} + ${n} = ${d2}: serà ${elN(d2)}${dataS(d2, m2)}.`, `${d} + ${n} = ${d2}: será el ${dataS(d2, m2)}.`) });
      }
      if (L_ === 3) {
        let n, d2, m2; do { n = ri(5, 40); [d2, m2] = fromDoy(doy(d, m) + n); } while (m2 > m + 1);
        return inp(L(`Quants dies passen ${delN(d)}${dataS(d, m)} ${alN(d2)}${dataS(d2, m2)}?`, `¿Cuántos días pasan del ${dataS(d, m)} al ${dataS(d2, m2)}?`), n, { ex: m2 === m ? L(`${d2} − ${d} = ${n} dies.`, `${d2} − ${d} = ${n} días.`) : d === DM[m] ? L(`El ${d} és l'últim dia ${deMes(m)}${mes(m)}: tots els dies que passen són ${deMes(m2)}${mes(m2)}, fins ${alN(d2)}${d2}. En passen ${n}.`, `El ${d} es el último día de ${mes(m)}: todos los días que pasan son de ${mes(m2)}, hasta el ${d2}. Pasan ${n}.`)
          : L(`${cap(mes(m))} té ${DM[m]} dies: fins al ${DM[m]} ${pas(DM[m] - d)}. Després, ${d2} ${dd(d2)} més ${deMes(m2)}${mes(m2)}: ${DM[m] - d} + ${d2} = ${n}.`, `${cap(mes(m))} tiene ${DM[m]} días: hasta el ${DM[m]} ${pas(DM[m] - d)}. Después, ${d2} ${dd(d2)} más de ${mes(m2)}: ${DM[m] - d} + ${d2} = ${n}.`) });
      }
      const w = ri(0, 6);
      if (L_ === 4) {
        const dA = ri(1, DM[m] - 10), k = ri(3, Math.min(24, DM[m] - dA)), dB = dA + k, q = Math.floor(k / 7), r = k % 7;
        return dayMc(L(`Si ${elN(dA)}${dataS(dA, m)} és <b>${dia(w)}</b>, quin dia de la setmana és ${elN(dB)}<b>${dataS(dB, m)}</b>?`, `Si el ${dataS(dA, m)} es <b>${dia(w)}</b>, ¿qué día de la semana es el <b>${dataS(dB, m)}</b>?`), w + k, { ex: r ? L(`Passen ${k} dies: ${q ? `${q} ${setm(q)} (que tornen a ser ${dia(w)}) i ` : ''}${r} ${dd(r)} més. ${cap(dia(w))} + ${r} → ${dia(w + k)}.`, `Pasan ${k} días: ${q ? `${q} ${setm(q)} (que vuelven a ser ${dia(w)}) y ` : ''}${r} ${dd(r)} más. ${cap(dia(w))} + ${r} → ${dia(w + k)}.`) : L(`Passen ${k} dies, que són ${q} ${setm(q)} justes: torna a ser ${dia(w)}.`, `Pasan ${k} días, que son ${q} ${setm(q)} justas: vuelve a ser ${dia(w)}.`) });
      }
      if (Math.random() < .5) { const r = DM[m] % 7; return dayMc(L(`Si l'1 ${deMes(m)}${mes(m)} és <b>${dia(w)}</b>, quin dia de la setmana és l'<b>1 ${deMes(m + 1)}${mes(m + 1)}</b>?`, `Si el 1 de ${mes(m)} es <b>${dia(w)}</b>, ¿qué día de la semana es el <b>1 de ${mes(m + 1)}</b>?`), w + DM[m], { ex: L(`${cap(mes(m))} té ${DM[m]} dies = 4 setmanes i ${r} ${dd(r)}. ${cap(dia(w))} + ${r} → ${dia(w + DM[m])}.`, `${cap(mes(m))} tiene ${DM[m]} días = 4 semanas y ${r} ${dd(r)}. ${cap(dia(w))} + ${r} → ${dia(w + DM[m])}.`) }); }
      const q = ri(2, 9), r = ri(1, 6), N = 7 * q + r, wd = (a, b) => `${a} ${setm(a)} ${L('i', 'y')} ${b} ${dd(b)}`;
      const cand = [[q, r < 6 ? r + 1 : r - 1], [q + 1, r], [q - 1, r], [Math.floor(N / 10), N % 10]].filter(([a, b]) => a >= 1 && b >= 1 && b <= 6 && !(a === q && b === r));
      return mc(L(`Quantes setmanes i dies són <b>${N} dies</b>?`, `¿Cuántas semanas y días son <b>${N} días</b>?`), wd(q, r), cand.map(([a, b]) => wd(a, b)), { list: true, ex: L(`Cada setmana són 7 dies: ${N} = ${q} × 7 + ${r}. Són ${wd(q, r)}.`, `Cada semana son 7 días: ${N} = ${q} × 7 + ${r}. Son ${wd(q, r)}.`) });
    },
    /* Les 24 hores i les durades */
    'me.time': L_ => {
      if (L_ <= 1) {
        const pm = Math.random() < .7, h = pm ? ri(1, 6) : ri(10, 11), m = pick([0, 0, 30]), H = h + 12;
        return mc(L(`És ${pm ? 'de <b>tarda</b>' : 'de <b>nit</b>'}. Quina hora marcaria un rellotge digital de 24 hores?`, `Es ${pm ? 'por la <b>tarde</b>' : 'por la <b>noche</b>'}. ¿Qué hora marcaría un reloj digital de 24 horas?`), `${H}:${pad(m)}`, shuffle([h, H - 2, H + 1, H - 1, H + 2].filter(x => x < 24)).map(x => `${x}:${pad(m)}`), { vis: clockSVG(h, m), ex: L(`A la tarda i a la nit sumem 12 a l'hora del rellotge de busques: ${h} + 12 = ${H}. Són les ${H}:${pad(m)}.`, `Por la tarde y por la noche sumamos 12 a la hora del reloj de agujas: ${h} + 12 = ${H}. Son las ${H}:${pad(m)}.`) });
      }
      if (L_ === 2) {
        const H = ri(13, 23), m = pick([0, 15, 30, 45]), h = H - 12, w = x => ((x - 1) % 12 + 12) % 12 + 1;
        const hs = shuffle([...new Set([H - 10, h - 1, h + 1, h + 2, h - 2].map(w))].filter(x => x !== h)).slice(0, 3);
        return mc(L(`Un rellotge digital marca <b>${H}:${pad(m)}</b>. Quin rellotge de busques marca la mateixa hora?`, `Un reloj digital marca <b>${H}:${pad(m)}</b>. ¿Qué reloj de agujas marca la misma hora?`), clockSVG(h, m), hs.map(x => clockSVG(x, m)), { pics: true, ex: L(`Després de les 12, restem 12: ${H} − 12 = ${h}. L'agulla petita marca ${h === 1 ? 'la una' : 'les ' + h} i la gran, els minuts (${m}).`, `Después de las 12, restamos 12: ${H} − 12 = ${h}. La aguja pequeña marca ${h === 1 ? 'la una' : 'las ' + h} y la grande, los minutos (${m}).`) });
      }
      const c = pick(CTX);
      if (L_ === 3) { const h = ri(8, 19), a = ri(0, 8) * 5, b = ri(a / 5 + 2, 11) * 5; return inp(L(`${c[0]} comença a les <b>${h}:${pad(a)}</b> i acaba a les <b>${h}:${pad(b)}</b>. Quants minuts dura?`, `${c[1]} empieza a las <b>${h}:${pad(a)}</b> y acaba a las <b>${h}:${pad(b)}</b>. ¿Cuántos minutos dura?`), b - a, { unit: 'min', ex: L(`És la mateixa hora: només cal restar els minuts. ${b} − ${a} = ${b - a} minuts.`, `Es la misma hora: solo hay que restar los minutos. ${b} − ${a} = ${b - a} minutos.`) }); }
      if (L_ === 4) {
        const h = ri(8, 19), a = ri(5, 11) * 5, d = ri((65 - a) / 5, (115 - a) / 5) * 5, e = h * 60 + a + d;
        return inp(L(`${c[0]} comença a les <b>${h}:${pad(a)}</b> i acaba a les <b>${hm(e)}</b>. Quants minuts dura?`, `${c[1]} empieza a las <b>${h}:${pad(a)}</b> y acaba a las <b>${hm(e)}</b>. ¿Cuántos minutos dura?`), d, { unit: 'min', ex: L(`De les ${h}:${pad(a)} a les ${h + 1}:00 hi ha ${60 - a} minuts, i de les ${h + 1}:00 a les ${hm(e)}, ${e % 60} més: ${60 - a} + ${e % 60} = ${d} minuts.`, `De las ${h}:${pad(a)} a las ${h + 1}:00 hay ${60 - a} minutos, y de las ${h + 1}:00 a las ${hm(e)}, ${e % 60} más: ${60 - a} + ${e % 60} = ${d} minutos.`) });
      }
      const s0 = ri(8, 19) * 60 + ri(0, 11) * 5, hd = ri(1, 2), dm = ri(1, 11) * 5, e = s0 + hd * 60 + dm;
      return mc(L(`${c[0]} comença a les <b>${hm(s0)}</b> i dura <b>${hd} h ${dm} min</b>. A quina hora acaba?`, `${c[1]} empieza a las <b>${hm(s0)}</b> y dura <b>${hd} h ${dm} min</b>. ¿A qué hora acaba?`), hm(e), shuffle([e + 10, e - 10, e + 60, e - 60, e + 5]).map(hm), { ex: L(`${hm(s0)} + ${hd} h = ${hm(s0 + hd * 60)}. I ${dm} minuts més: ${hm(e)}.`, `${hm(s0)} + ${hd} h = ${hm(s0 + hd * 60)}. Y ${dm} minutos más: ${hm(e)}.`) });
    },

    /* Mesures i unitats: 'me.smd:len', ':mass', ':cap', ':area', ':vol', ':info', ':time' */
    'me.smd': (L_, A) => {
      const kind = A || 'len';
      if ((kind === 'len' || kind === 'cap') && L_ <= 4) return ladder(kind, L_);
      if (['len', 'cap', 'mass', 'area'].includes(kind) && L_ >= 5) return Math.random() < .5 ? estimate(kind) : compare(kind);
      if (kind === 'mass') {
        if (L_ <= 1) { const v = ri(2, 9); return conv(`${v} kg`, 'g', v * 1000, convWhy('kg', 'g', 1000, true, v, fmt(v * 1000))); }
        if (L_ === 2) {
          if (Math.random() < .4) { const [ca, es, g] = pick([['mig quilo', 'medio kilo', 500], ['un quart de quilo', 'un cuarto de kilo', 250], ['tres quarts de quilo', 'tres cuartos de kilo', 750]]); return inp(L(`Quants grams són <b>${ca}</b>?`, `¿Cuántos gramos son <b>${es}</b>?`), g, { unit: 'g', ex: L(`1 kg = 1.000 g: ${ca} són ${g} g.`, `1 kg = 1.000 g: ${es} son ${g} g.`) }); }
          const v = ri(2, 9); return conv(`${fmt(v * 1000)} g`, 'kg', v, convWhy('kg', 'g', 1000, false, fmt(v * 1000), v));
        }
        if (L_ === 3) { const t = ri(0, 2), v = ri(2, 9); if (t === 0) return conv(`${v} t`, 'kg', v * 1000, convWhy('t', 'kg', 1000, true, v, fmt(v * 1000))); if (t === 1) return conv(`${v} g`, 'mg', v * 1000, convWhy('g', 'mg', 1000, true, v, fmt(v * 1000))); const b = ri(1, 19) * 50; return conv(`${v} kg ${b} g`, 'g', v * 1000 + b, L(`${v} kg = ${fmt(v * 1000)} g, i ${fmt(v * 1000)} + ${b} = ${fmt(v * 1000 + b)} g.`, `${v} kg = ${fmt(v * 1000)} g, y ${fmt(v * 1000)} + ${b} = ${fmt(v * 1000 + b)} g.`)); }
        const [u1, u2] = pick([['kg', 'g'], ['t', 'kg']]);
        if (Math.random() < .5) { let v; do v = ri(11, 99); while (v % 10 === 0); return conv(`${fmtD(v / 10)} ${u1}`, u2, v * 100, convWhy(u1, u2, 1000, true, fmtD(v / 10), fmt(v * 100))); }
        let w; do w = ri(5, 99) * 10; while (w % 1000 === 0); return conv(`${fmt(w)} ${u2}`, u1, w / 1000, convWhy(u1, u2, 1000, false, fmt(w), fmtD(w / 1000)));
      }
      if (kind === 'area') {
        if (L_ <= 1) { const [a, b] = pick([['m²', 'dm²'], ['dm²', 'cm²']]), v = ri(2, 9); return conv(`${v} ${a}`, b, v * 100, convWhy(a, b, 100, true, v, v * 100)); }
        if (L_ === 2) { const v = ri(2, 9); if (Math.random() < .5) return conv(`${v} m²`, 'cm²', v * 10000, convWhy('m²', 'cm²', 10000, true, v, fmt(v * 10000))); return conv(`${v * 100} cm²`, 'dm²', v, convWhy('dm²', 'cm²', 100, false, v * 100, v)); }
        if (L_ === 3) {
          const v = ri(1, 9), t = ri(0, 2);
          if (t === 0) return conv(`${v} ha`, 'm²', v * 10000, L(`1 hectàrea (ha) = 10.000 m², com un quadrat de 100 m de costat. ${v} × 10.000 = ${fmt(v * 10000)} m².`, `1 hectárea (ha) = 10.000 m², como un cuadrado de 100 m de lado. ${v} × 10.000 = ${fmt(v * 10000)} m².`));
          if (t === 1) return conv(`${fmt(v * 10000)} m²`, 'ha', v, L(`1 ha = 10.000 m²: ${fmt(v * 10000)} ÷ 10.000 = ${v} ha.`, `1 ha = 10.000 m²: ${fmt(v * 10000)} ÷ 10.000 = ${v} ha.`));
          const a = ri(1, 4) * 100, b = ri(1, 3) * 100; return inp(L(`Un camp fa <b>${a} m</b> de llarg i <b>${b} m</b> d'ample. Quantes hectàrees fa?`, `Un campo mide <b>${a} m</b> de largo y <b>${b} m</b> de ancho. ¿Cuántas hectáreas mide?`), a * b / 10000, { unit: 'ha', long: true, ex: L(`Àrea: ${a} × ${b} = ${fmt(a * b)} m². I 10.000 m² = 1 ha: ${fmt(a * b)} ÷ 10.000 = ${a * b / 10000} ha.`, `Área: ${a} × ${b} = ${fmt(a * b)} m². Y 10.000 m² = 1 ha: ${fmt(a * b)} ÷ 10.000 = ${a * b / 10000} ha.`) });
        }
        const t = ri(0, 2);
        if (t === 0) { let v; do v = ri(11, 99); while (v % 10 === 0); return conv(`${fmtD(v / 10)} m²`, 'dm²', v * 10, convWhy('m²', 'dm²', 100, true, fmtD(v / 10), v * 10)); }
        if (t === 1) { let w; do w = ri(101, 999); while (w % 100 === 0); return conv(`${w} dm²`, 'm²', w / 100, convWhy('m²', 'dm²', 100, false, w, fmtD(w / 100))); }
        const h = pick([0.5, 1.5, 2.5, 0.2]); return conv(`${fmtD(h)} ha`, 'm²', h * 10000, L(`1 ha = 10.000 m²: ${fmtD(h)} × 10.000 = ${fmt(h * 10000)} m².`, `1 ha = 10.000 m²: ${fmtD(h)} × 10.000 = ${fmt(h * 10000)} m².`));
      }
      if (kind === 'vol') {
        const v = ri(2, 9), lit = L('1 dm³ = 1 litre: un cub d\'1 dm de costat s\'omple amb 1 litre d\'aigua.', '1 dm³ = 1 litro: un cubo de 1 dm de lado se llena con 1 litro de agua.');
        if (L_ <= 1) return Math.random() < .5 ? conv(`${v} dm³`, 'l', v, lit) : conv(`${v} l`, 'dm³', v, lit);
        if (L_ === 2) { const t = ri(0, 2); if (t === 0) return conv(`${v} m³`, 'dm³', v * 1000, convWhy('m³', 'dm³', 1000, true, v, fmt(v * 1000))); if (t === 1) return conv(`${v} m³`, 'l', v * 1000, L(`1 m³ = 1.000 dm³ = 1.000 litres: ${v} × 1.000 = ${fmt(v * 1000)} l.`, `1 m³ = 1.000 dm³ = 1.000 litros: ${v} × 1.000 = ${fmt(v * 1000)} l.`)); return conv(`${v} dm³`, 'cm³', v * 1000, convWhy('dm³', 'cm³', 1000, true, v, fmt(v * 1000))); }
        if (L_ === 3) { const t = ri(0, 2), c = ri(1, 19) * 50; if (t === 0) return conv(`${c} cm³`, 'ml', c, L('1 cm³ = 1 ml: el número no canvia.', '1 cm³ = 1 ml: el número no cambia.')); if (t === 1) return conv(`${v} l`, 'cm³', v * 1000, L(`1 l = 1 dm³ = 1.000 cm³: ${v} × 1.000 = ${fmt(v * 1000)} cm³.`, `1 l = 1 dm³ = 1.000 cm³: ${v} × 1.000 = ${fmt(v * 1000)} cm³.`)); return conv(`${fmt(v * 1000)} cm³`, 'l', v, L(`1.000 cm³ = 1 dm³ = 1 l: ${fmt(v * 1000)} ÷ 1.000 = ${v} l.`, `1.000 cm³ = 1 dm³ = 1 l: ${fmt(v * 1000)} ÷ 1.000 = ${v} l.`)); }
        if (L_ === 4) { const t = ri(0, 2); if (t === 0) { const x = pick([1.5, 2.5, 0.5, 3.5]); return conv(`${fmtD(x)} m³`, 'l', x * 1000, L(`1 m³ = 1.000 l: ${fmtD(x)} × 1.000 = ${fmt(x * 1000)} l.`, `1 m³ = 1.000 l: ${fmtD(x)} × 1.000 = ${fmt(x * 1000)} l.`)); } if (t === 1) { let c; do c = ri(11, 99) * 100; while (c % 1000 === 0); return conv(`${fmt(c)} cm³`, 'l', c / 1000, L(`1.000 cm³ = 1 l: ${fmt(c)} ÷ 1.000 = ${fmtD(c / 1000)} l.`, `1.000 cm³ = 1 l: ${fmt(c)} ÷ 1.000 = ${fmtD(c / 1000)} l.`)); } const x = pick([0.25, 0.5, 0.75, 1.5]); return conv(`${fmtD(x)} l`, 'cm³', x * 1000, L(`1 l = 1.000 cm³: ${fmtD(x)} × 1.000 = ${fmt(x * 1000)} cm³.`, `1 l = 1.000 cm³: ${fmtD(x)} × 1.000 = ${fmt(x * 1000)} cm³.`)); }
        if (Math.random() < .5) { const [a, b, c] = [ri(1, 5) * 10, ri(1, 4) * 10, ri(1, 4) * 10]; return inp(L(`Una capsa fa <b>${a} cm × ${b} cm × ${c} cm</b>. Quants litres hi caben?`, `Una caja mide <b>${a} cm × ${b} cm × ${c} cm</b>. ¿Cuántos litros caben?`), a * b * c / 1000, { unit: 'l', long: true, ex: L(`Volum: ${a} × ${b} × ${c} = ${fmt(a * b * c)} cm³. I 1.000 cm³ = 1 l: ${fmt(a * b * c)} ÷ 1.000 = ${a * b * c / 1000} l.`, `Volumen: ${a} × ${b} × ${c} = ${fmt(a * b * c)} cm³. Y 1.000 cm³ = 1 l: ${fmt(a * b * c)} ÷ 1.000 = ${a * b * c / 1000} l.`) }); }
        const [a, b, c] = [ri(3, 8), ri(2, 5), ri(2, 5)]; return inp(L(`Un aquari fa <b>${a} dm × ${b} dm × ${c} dm</b>. Quants litres d'aigua hi caben?`, `Un acuario mide <b>${a} dm × ${b} dm × ${c} dm</b>. ¿Cuántos litros de agua caben?`), a * b * c, { unit: 'l', long: true, ex: L(`Volum: ${a} × ${b} × ${c} = ${a * b * c} dm³, i 1 dm³ = 1 l: ${a * b * c} litres.`, `Volumen: ${a} × ${b} × ${c} = ${a * b * c} dm³, y 1 dm³ = 1 l: ${a * b * c} litros.`) });
      }
      if (kind === 'time') {
        if (L_ <= 1) { const v = ri(2, 5); return Math.random() < .5 ? conv(`${v} h`, 'min', v * 60, convWhy('h', 'min', 60, true, v, v * 60)) : conv(`${v} min`, 's', v * 60, convWhy('min', 's', 60, true, v, v * 60)); }
        if (L_ === 2) {
          const t = ri(0, 2);
          if (t === 0) { const [ca, es, n] = pick([["mitja hora", 'media hora', 30], ["un quart d'hora", 'un cuarto de hora', 15], ["tres quarts d'hora", 'tres cuartos de hora', 45]]); return inp(L(`Quants minuts són <b>${ca}</b>?`, `¿Cuántos minutos son <b>${es}</b>?`), n, { unit: 'min', ex: L(`1 hora = 60 minuts: ${ca} són ${n} minuts.`, `1 hora = 60 minutos: ${es} son ${n} minutos.`) }); }
          const a = ri(1, 3), b = ri(1, 11) * 5;
          if (t === 1) return conv(`${a} h ${b} min`, 'min', a * 60 + b, L(`${a} h = ${a * 60} min, i ${a * 60} + ${b} = ${a * 60 + b} min.`, `${a} h = ${a * 60} min, y ${a * 60} + ${b} = ${a * 60 + b} min.`));
          return conv(`${a} min ${b} s`, 's', a * 60 + b, L(`${a} min = ${a * 60} s, i ${a * 60} + ${b} = ${a * 60 + b} s.`, `${a} min = ${a * 60} s, y ${a * 60} + ${b} = ${a * 60 + b} s.`));
        }
        if (L_ === 3) { const v = ri(2, 5), t = ri(0, 2); if (t === 0) return conv(`${v * 60} min`, 'h', v, convWhy('h', 'min', 60, false, v * 60, v)); if (t === 1) return conv(`${v * 60} s`, 'min', v, convWhy('min', 's', 60, false, v * 60, v)); return conv(`${v} ${L('dies', 'días')}`, 'h', v * 24, L(`Un dia té 24 hores: ${v} × 24 = ${v * 24} h.`, `Un día tiene 24 horas: ${v} × 24 = ${v * 24} h.`)); }
        const hmS = t => `${Math.floor(t / 60)} h ${t % 60} min`;
        if (L_ === 4) { const a = ri(1, 3), b = ri(1, 11) * 5, T = a * 60 + b, tr = Math.floor(T / 100) * 60 + T % 100; return mc(L(`Quantes hores i minuts són <b>${T} minuts</b>?`, `¿Cuántas horas y minutos son <b>${T} minutos</b>?`), hmS(T), [tr !== T && T % 100 < 60 ? hmS(tr) : hmS(T + 60), hmS(T + 20), hmS(T - 20), hmS(T - 60 > 0 ? T - 60 : T + 120)], { list: true, ex: L(`Cada hora són 60 minuts, no 100! ${T} = ${a} × 60 + ${b}: ${hmS(T)}.`, `¡Cada hora son 60 minutos, no 100! ${T} = ${a} × 60 + ${b}: ${hmS(T)}.`) }); }
        if (Math.random() < .5) { const a = ri(1, 2), b = ri(0, 11) * 5, T = a * 3600 + b * 60; return conv(b ? `${a} h ${b} min` : `${a} h`, 's', T, L(`1 h = 60 min = 3.600 s. ${a} h = ${fmt(a * 3600)} s${b ? `, i ${b} min = ${b * 60} s: ${fmt(a * 3600)} + ${b * 60} = ${fmt(T)} s` : ''}.`, `1 h = 60 min = 3.600 s. ${a} h = ${fmt(a * 3600)} s${b ? `, y ${b} min = ${b * 60} s: ${fmt(a * 3600)} + ${b * 60} = ${fmt(T)} s` : ''}.`)); }
        const s1 = ri(60, 239), s2 = ri(30, 179), T = s1 + s2, ms = t => `${Math.floor(t / 60)} min ${t % 60} s`;
        return mc(L(`Un vídeo dura <b>${ms(s1)}</b> i un altre, <b>${ms(s2)}</b>. Quant duren junts?`, `Un vídeo dura <b>${ms(s1)}</b> y otro, <b>${ms(s2)}</b>. ¿Cuánto duran juntos?`), ms(T), [ms(T + 60), ms(T - 60), ms(T + 10), `${Math.floor(s1 / 60) + Math.floor(s2 / 60)} min ${s1 % 60 + s2 % 60} s`].filter(x => !/ [6-9]\d s|\d{3} s/.test(x)), { list: true, ex: L(`Suma els minuts i els segons per separat. Si passes de 60 segons, fan 1 minut més: ${ms(T)}.`, `Suma los minutos y los segundos por separado. Si pasas de 60 segundos, hacen 1 minuto más: ${ms(T)}.`) });
      }
      // kind === 'info': KB, MB i GB (cada unitat és unes 1.000 vegades l'anterior; exactament, 1.024)
      const U = ['bytes', 'KB', 'MB', 'GB', 'TB'];
      if (L_ <= 2) {
        const top = ri(L_ <= 1 ? 2 : 1, 4), c = `${ri(1, 9)} ${U[top]}`, lows = new Set(); while (lows.size < 3) lows.add(`${L_ <= 1 ? ri(1, 9) : ri(1, 999)} ${U[ri(Math.max(0, top - 2), top - 1)]}`);
        return mc(L('Quina mida és la <b>més gran</b>?', '¿Qué tamaño es el <b>mayor</b>?'), c, [...lows], { ex: L(`L'ordre és bytes < KB < MB < GB < TB, i cada unitat és unes 1.000 vegades l'anterior: ${c} és la més gran.`, `El orden es bytes < KB < MB < GB < TB, y cada unidad es unas 1.000 veces la anterior: ${c} es la mayor.`) });
      }
      if (L_ === 3) {
        const [ca, es, u, dis] = pick([['una pel·lícula en alta definició', 'una película en alta definición', 'GB', ['bytes', 'KB', 'TB']], ['una foto feta amb el mòbil', 'una foto hecha con el móvil', 'MB', ['bytes', 'GB', 'TB']], ['una cançó', 'una canción', 'MB', ['bytes', 'GB', 'TB']], ['un missatge de text curt', 'un mensaje de texto corto', 'bytes', ['MB', 'GB', 'TB']]]);
        return mc(L(`Quina unitat és la més adequada per a la mida d'<b>${ca}</b>?`, `¿Qué unidad es la más adecuada para el tamaño de <b>${es}</b>?`), u, dis, { ex: L(`${cap(ca)} ocupa uns quants ${u}.`, `${cap(es)} ocupa unos cuantos ${u}.`) });
      }
      const k = pick([2, 3, 4, 5, 8]);
      if (L_ === 4) { const [a, b] = pick([['GB', 'MB'], ['MB', 'KB'], ['TB', 'GB']]); return mc(L(`Aproximadament, quants ${b} són <b>${k} ${a}</b>?`, `Aproximadamente, ¿cuántos ${b} son <b>${k} ${a}</b>?`), `${fmt(k * 1000)} ${b}`, [k, k * 10, k * 100, k * 10000].map(x => `${fmt(x)} ${b}`), { ex: L(`1 ${a} són unes 1.000 ${b}: ${k} × 1.000 = ${fmt(k * 1000)} ${b}.`, `1 ${a} son unos 1.000 ${b}: ${k} × 1.000 = ${fmt(k * 1000)} ${b}.`) }); }
      const s = pick([2, 4, 5]), g = pick([1, 2, 4]), n = g * 1000 / s, uns = x => L(`unes ${fmt(x)}`, `unas ${fmt(x)}`);
      return mc(L(`Una foto ocupa uns <b>${s} MB</b>. Aproximadament, quantes fotos caben en una memòria de <b>${g} GB</b>?`, `Una foto ocupa unos <b>${s} MB</b>. Aproximadamente, ¿cuántas fotos caben en una memoria de <b>${g} GB</b>?`), uns(n), [uns(n / 10), uns(n * 10), uns(g * s)], { ex: L(`${g} GB són unes ${fmt(g * 1000)} MB, i ${fmt(g * 1000)} ÷ ${s} = ${fmt(n)} fotos.`, `${g} GB son unos ${fmt(g * 1000)} MB, y ${fmt(g * 1000)} ÷ ${s} = ${fmt(n)} fotos.`) });
    },

    /* Triangles: 'geo.tri:s' (costats), 'geo.tri:a' (angles), 'geo.tri' (tots dos) */
    'geo.tri': (L_, A) => {
      const by = A === 's' || A === 'a' ? A : L_ >= 4 && Math.random() < .45 ? 'both' : pick(['s', 'a']);
      const rot = P => { const g = L_ <= 2 ? 0 : ri(-30, 30); return rotP(Math.random() < .5 ? P.map(([x, y]) => [-x, y]) : P, g); };
      if (by === 's') {
        const t = pick(['eq', 'is', 'es', 'is', 'es']), S = triSides(t), [c, a, b] = S, ex = L(`Aquest triangle ${tx(TSW[t])}: és ${tx(TS[t])}.`, `Este triángulo ${tx(TSW[t])}: es ${tx(TS[t])}.`), fixed = ['eq', 'is', 'es'].map(k => tx(TS[k]));
        if (L_ >= 3 && Math.random() < .3) return mc(L(`Un triangle té els costats de <b>${a} cm, ${b} cm i ${c} cm</b>. Com és segons els costats?`, `Un triángulo tiene los lados de <b>${a} cm, ${b} cm y ${c} cm</b>. ¿Cómo es según los lados?`), tx(TS[t]), [], { fixed, list: true, ex });
        const x = (b * b - a * a + c * c) / (2 * c);
        return mc(L('Com és aquest triangle segons els seus <b>costats</b>?', '¿Cómo es este triángulo según sus <b>lados</b>?'), tx(TS[t]), [], { fixed, list: true, vis: figSVG(fitP(rot([[0, 0], [c, 0], [x, Math.sqrt(b * b - x * x)]]), 260, 170, 30).Q, { sides: [c, a, b].map(v => v + ' cm') }), ex });
      }
      if (by === 'a') {
        const t = pick(['ac', 're', 'ob']), An = triAngles(t), fixed = ['ac', 're', 'ob'].map(k => tx(TA[k])), ex = L(`Aquest triangle ${tx(TAW[t])}: és ${tx(TA[t])}.`, `Este triángulo ${tx(TAW[t])}: es ${tx(TA[t])}.`);
        if (L_ >= 3 && Math.random() < .3) {
          if (L_ >= 5) { const [x, y] = An; return mc(L(`Un triangle té dos angles de <b>${x}°</b> i <b>${y}°</b>. Com és segons els angles?`, `Un triángulo tiene dos ángulos de <b>${x}°</b> y <b>${y}°</b>. ¿Cómo es según los ángulos?`), tx(TA[t]), [], { fixed, list: true, ex: L(`El tercer angle fa 180° − ${x}° − ${y}° = ${180 - x - y}°. `, `El tercer ángulo mide 180° − ${x}° − ${y}° = ${180 - x - y}°. `) + ex }); }
          return mc(L(`Els angles d'un triangle fan <b>${An[0]}°, ${An[1]}° i ${An[2]}°</b>. Com és?`, `Los ángulos de un triángulo miden <b>${An[0]}°, ${An[1]}° y ${An[2]}°</b>. ¿Cómo es?`), tx(TA[t]), [], { fixed, list: true, ex });
        }
        return mc(L('Com és aquest triangle segons els seus <b>angles</b>?', '¿Cómo es este triángulo según sus <b>ángulos</b>?'), tx(TA[t]), [], { fixed, list: true, vis: figSVG(fitP(rot(triPts(An[0], An[1]))).Q, { angles: An.map(g => g + '°'), right: An.map((g, i) => g === 90 ? i : -1).filter(i => i >= 0) }), ex });
      }
      const [ta, ts, a0] = pick(COMBO), An = shuffle(a0), ticks = [An[2], An[0], An[1]].map((g, i, arr) => arr.filter(h => h === g).length > 1 ? 1 : 0);
      const others = shuffle(COMBO.filter(c => c[0] !== ta || c[1] !== ts).map(c => comboName(c[0], c[1]))).filter((x, i, a) => a.indexOf(x) === i);
      return mc(L('Com és aquest triangle? Mira els angles i les ratlletes dels costats iguals.', '¿Cómo es este triángulo? Mira los ángulos y las rayitas de los lados iguales.'), comboName(ta, ts), others, { list: true, vis: figSVG(fitP(rot(triPts(An[0], An[1]))).Q, { angles: An.map(g => g + '°'), right: An.map((g, i) => g === 90 ? i : -1).filter(i => i >= 0), ticks }), ex: L(`Segons els angles, ${tx(TAW[ta])}: és ${tx(TA[ta])}. Segons els costats, ${tx(TSW[ts])}: és ${tx(TS[ts])}.`, `Según los ángulos, ${tx(TAW[ta])}: es ${tx(TA[ta])}. Según los lados, ${tx(TSW[ts])}: es ${tx(TS[ts])}.`) });
    },
    /* Quadrilàters: quadrat, rectangle, rombe, romboide, trapezi i trapezoide */
    'geo.quad': L_ => {
      const K = Object.keys(QUAD), t = L_ <= 1 ? 'name' : pick(L_ === 2 ? ['name', 'name', 'par'] : L_ === 3 ? ['name', 'par', 'prop'] : ['name', 'par', 'prop', 'pics']);
      const nm = k => tx(QUAD[k]), desc = k => L(`El ${nm(k)} ${tx(QDESC[k])}.`, `El ${nm(k)} ${tx(QDESC[k])}.`);
      if (t === 'pics') { const odd = pick(['trapezi', 'trapezoide']), par = shuffle(['quadrat', 'rectangle', 'rombe', 'romboide']).slice(0, 3); return mc(L("Quin d'aquests quadrilàters <b>no</b> és un paral·lelogram?", '¿Cuál de estos cuadriláteros <b>no</b> es un paralelogramo?'), quadSVG(odd, L_, 200, 130), par.map(k => quadSVG(k, L_, 200, 130)), { pics: true, ex: L(`Un paral·lelogram té els costats paral·lels dos a dos. ${desc(odd)}`, `Un paralelogramo tiene los lados paralelos dos a dos. ${desc(odd)}`) }); }
      const k = pick(K);
      if (t === 'prop') return mc(tx(QPROP[k]), nm(k), K.filter(x => x !== k).map(nm), { list: true, ex: desc(k) });
      const vis = quadSVG(k, L_);
      if (t === 'par') { const n = QPAR[k]; return inp(L('Quants parells de costats <b>paral·lels</b> té aquest quadrilàter?', '¿Cuántos pares de lados <b>paralelos</b> tiene este cuadrilátero?'), n, { vis, ex: L(`És un ${nm(k)}: ${tx(QDESC[k])}. ${n ? `Té ${n} ${n === 1 ? 'parell' : 'parells'} de costats paral·lels.` : 'No en té cap.'}`, `Es un ${nm(k)}: ${tx(QDESC[k])}. ${n ? `Tiene ${n} ${n === 1 ? 'par' : 'pares'} de lados paralelos.` : 'No tiene ninguno.'}`) }); }
      return mc(L('Com es diu aquest quadrilàter?', '¿Cómo se llama este cuadrilátero?'), nm(k), shuffle(K.filter(x => x !== k && !(k === 'quadrat' && (x === 'rectangle' || x === 'rombe')))).map(nm), { list: true, vis, ex: L(`És un ${nm(k)}: ${tx(QDESC[k])}.`, `Es un ${nm(k)}: ${tx(QDESC[k])}.`) });
    },
    /* Rectes paral·leles, perpendiculars i oblíqües */
    'geo.lines': L_ => {
      if (L_ >= 4 && Math.random() < .5) return streetsQ();
      if (L_ >= 3 && Math.random() < .45) {
        const want = pick(['par', 'perp']), others = shuffle([...['par', 'perp'].filter(k => k !== want), 'obl', 'obl']).slice(0, 3), o = { W: 200, H: 130 };
        return mc(L(`Quin dibuix té dues rectes <b>${want === 'par' ? 'paral·leles' : 'perpendiculars'}</b>?`, `¿Qué dibujo tiene dos rectas <b>${want === 'par' ? 'paralelas' : 'perpendiculares'}</b>?`), pairSVG(want, ri(0, 179), o), others.map(k => pairSVG(k, ri(0, 179), o)), { pics: true, ex: L(`Dues rectes ${tx(REL[want]).toLowerCase()} ${tx(RELW[want])}.`, `Dos rectas ${tx(REL[want]).toLowerCase()} ${tx(RELW[want])}.`) });
      }
      const k = pick(['par', 'perp', 'obl']), th = L_ <= 2 ? pick([0, 90, ri(0, 179)]) : ri(0, 179);
      return mc(L('Com són aquestes dues rectes?', '¿Cómo son estas dos rectas?'), tx(REL[k]), [], { fixed: ['par', 'perp', 'obl'].map(x => tx(REL[x])), vis: pairSVG(k, th, { mark: L_ <= 2 }), ex: L(`Són ${tx(REL[k]).toLowerCase()}: ${tx(RELW[k])}.`, `Son ${tx(REL[k]).toLowerCase()}: ${tx(RELW[k])}.`) });
    },
    /* Polígons regulars i eixos de simetria */
    'geo.poly': L_ => {
      if (L_ <= 1) {
        const n = ri(3, 10), vis = figSVG(fitP(regP(n)).Q, { fill: '#FFF1DE', stroke: '#FF9A3C' });
        if (Math.random() < .3) return inp(L(`Quants costats té un <b>${tx(PN[n])}</b>?`, `¿Cuántos lados tiene un <b>${tx(PN[n])}</b>?`), n, { ex: L(`Un ${tx(PN[n])} té ${n} costats i ${n} vèrtexs.`, `Un ${tx(PN[n])} tiene ${n} lados y ${n} vértices.`) });
        return mc(L('Com es diu aquest polígon?', '¿Cómo se llama este polígono?'), tx(PN[n]), shuffle(Object.keys(PN).filter(x => +x !== n)).map(x => tx(PN[x])), { list: true, vis, ex: L(`Té ${n} costats: és un ${tx(PN[n])}.`, `Tiene ${n} lados: es un ${tx(PN[n])}.`) });
      }
      if (L_ === 2) {
        const t = pick(['reg', 'reg', 'rect', 'rombe', 'irr']); let vis, ex;
        if (t === 'reg') { const n = ri(3, 8); vis = figSVG(fitP(regP(n)).Q, { ticks: Array(n).fill(1) }); ex = L('Té tots els costats iguals i tots els angles iguals: és regular.', 'Tiene todos los lados iguales y todos los ángulos iguales: es regular.'); }
        else if (t === 'rect') { vis = figSVG(fitP([[0, 0], [1.7, 0], [1.7, 1], [0, 1]]).Q, { right: [0, 1, 2, 3], ticks: [1, 2, 1, 2] }); ex = L('Té tots els angles iguals, però no tots els costats: no és regular.', 'Tiene todos los ángulos iguales, pero no todos los lados: no es regular.'); }
        else if (t === 'rombe') { vis = figSVG(fitP([[0, -0.65], [1.1, 0], [0, 0.65], [-1.1, 0]]).Q, { ticks: [1, 1, 1, 1] }); ex = L('Té tots els costats iguals, però no tots els angles: no és regular.', 'Tiene todos los lados iguales, pero no todos los ángulos: no es regular.'); }
        else { const n = ri(5, 6); vis = figSVG(fitP(regP(n).map(([x, y], i) => { const r = [1, 0.6, 1.15, 0.75, 1.1, 0.7][i]; return [x * r, y * r]; })).Q); ex = L('Els costats i els angles no són iguals: no és regular.', 'Los lados y los ángulos no son iguales: no es regular.'); }
        return mc(L('Aquest polígon és <b>regular</b>?', '¿Este polígono es <b>regular</b>?'), t === 'reg' ? SI() : NO(), [], { fixed: [SI(), NO()], vis, ex });
      }
      const f = symFig(L_ >= 4 ? 6 : 8), fp = fitP(f.P), why = tx(SYMW[f.t]) + (f.t === 'reg' ? L(`: aquest en té ${f.n}.`, `: este tiene ${f.n}.`) : '.');
      if (L_ === 3 || !f.yes.length && !f.no.length) return inp(L('Quants <b>eixos de simetria</b> té aquesta figura?', '¿Cuántos <b>ejes de simetría</b> tiene esta figura?'), f.ax, { vis: figSVG(fp.Q, { ticks: f.ticks, right: f.right }), ex: why });
      const yes = f.yes.length && Math.random() < .5, [p, g] = pick(yes ? f.yes : f.no), a = fp.map(p), b = fp.map([p[0] + Math.cos(rad(g)), p[1] + Math.sin(rad(g))]);
      return mc(L('La línia vermella és un <b>eix de simetria</b> de la figura?', '¿La línea roja es un <b>eje de simetría</b> de la figura?'), yes ? SI() : NO(), [], { fixed: [SI(), NO()], vis: figSVG(fp.Q, { ticks: f.ticks, right: f.right, line: clipL(a, uv(a, b), 260, 170, 6) }), ex: (yes ? L('Si dobleguem la figura per aquesta línia, les dues meitats coincideixen. ', 'Si doblamos la figura por esta línea, las dos mitades coinciden. ') : L('Si dobleguem la figura per aquesta línia, les dues parts no coincideixen. ', 'Si doblamos la figura por esta línea, las dos partes no coinciden. ')) + why });
    },

    /* Fraccions, decimals i percentatges: ½ = 0,5 = 50 % */
    'fdp.conv': L_ => {
      const [p, q] = pick(fdpSet(L_)), v = p / q, r = Math.random();
      if (L_ <= 2 && r < .3) { const k = ri(3, 97); return L_ <= 1 ? inp(L('Quin <b>percentatge</b> de la quadrícula està pintat?', '¿Qué <b>porcentaje</b> de la cuadrícula está pintado?'), k, { unit: '%', vis: gridSVG100(k), ex: L(`Hi ha 100 quadrets i n'hi ha ${k} de pintats: el ${k} %.`, `Hay 100 cuadraditos y hay ${k} pintados: el ${k} %.`) }) : dinp(L('Quina part de la quadrícula està pintada? Escriu-ho com a <b>nombre decimal</b>.', '¿Qué parte de la cuadrícula está pintada? Escríbelo como <b>número decimal</b>.'), k / 100, { vis: gridSVG100(k), ex: L(`${k} de 100 quadrets: ${k}/100 = ${fmtD(k / 100)}.`, `${k} de 100 cuadraditos: ${k}/100 = ${fmtD(k / 100)}.`) }); }
      if (L_ >= 3 && r < .25) {
        const kk = ri(2, 5), eqs = [frac(p, q), fmtD(v), pctS(v * 100), frac(p * kk, q * kk)], tg = ri(0, 2), shown = eqs[tg];
        const bad = pick([[pctS(p), p / 100], [frac(p + 1, q + 1), (p + 1) / (q + 1)], ...(dec3(v * 10) ? [[fmtD(v * 10), v * 10]] : []), ...(q < 10 ? [[fmtD(q / 10), q / 10], [fmtD(p / 10 + q / 100), p / 10 + q / 100], [fmtD(p + q / 10), p + q / 10]] : [])].filter(c => !eq(c[1], v)))[0];
        return mc(L(`Quin d'aquests <b>NO</b> és igual a ${shown}?`, `¿Cuál de estos <b>NO</b> es igual a ${shown}?`), bad, eqs.filter((_, i) => i !== tg), { big: true, ex: L(`${frac(p, q)} = ${fmtD(v)} = ${pctS(v * 100)} = ${frac(p * kk, q * kk)}. En canvi, ${bad} és un altre nombre.`, `${frac(p, q)} = ${fmtD(v)} = ${pctS(v * 100)} = ${frac(p * kk, q * kk)}. En cambio, ${bad} es otro número.`) });
      }
      const pairs = L_ <= 1 ? [['f', 'p'], ['f', 'd']] : L_ === 2 ? [['f', 'p'], ['d', 'p'], ['p', 'd'], ['f', 'd']] : [['f', 'p'], ['d', 'p'], ['p', 'd'], ['f', 'd'], ['p', 'f'], ['d', 'f']];
      const [a, b] = pick(pairs), vis = eqv(`${fdpS(p, q, a)} = ${BOX}`), ex = fdpWhy(p, q);
      if (b === 'p') { const P_ = +(v * 100).toFixed(3); return (Number.isInteger(P_) ? inp : dinp)(L('Escriu-ho com a <b>percentatge</b>:', 'Escríbelo como <b>porcentaje</b>:'), P_, { vis, unit: '%', ex }); }
      if (b === 'd') {
        if (L_ >= 2) return dinp(L('Escriu-ho com a <b>nombre decimal</b>:', 'Escríbelo como <b>número decimal</b>:'), v, { vis, ex });
        const dis = dis3([v * 10, v / 10, q < 10 ? p + q / 10 : v + 0.1, q < 10 ? p / 10 + q / 100 : v / 100, 1 - v, v + 0.05].filter(x => x > 0 && dec3(x)), v);
        return mc(L('Quin <b>nombre decimal</b> és?', '¿Qué <b>número decimal</b> es?'), fmtD(v), dis.map(fmtD), { vis, big: true, ex });
      }
      const pc = Math.round(v * 100), dis = dis3([[q, p], [p, q + 1], [p + 1, q], [1, pc], [pc, 10], [q - p, q], [p, 2 * q], [p, 10]].filter(([x, y]) => x > 0 && y > 0 && !(x === y)), v, 3, ([x, y]) => x / y);
      return mc(L('Escriu-ho com a <b>fracció</b>:', 'Escríbelo como <b>fracción</b>:'), frac(p, q), dis.map(([x, y]) => frac(x, y)), { vis, big: true, ex });
    },
    'fdp.order': L_ => {
      const set = fdpSet(Math.max(2, L_)), K3 = ['f', 'd', 'p'];
      if (L_ === 3 || (L_ >= 4 && Math.random() < .3)) {
        const [a, b] = shuffle(set).slice(0, 2), same = Math.random() < .3, [p1, q1] = a, [p2, q2] = same ? a : b, k1 = pick(K3), k2 = pick(K3.filter(k => !same || k !== k1));
        const v1 = p1 / q1, v2 = p2 / q2, sym = eq(v1, v2) ? '=' : v1 < v2 ? '<' : '>';
        return mc(L('Quin signe hi va?', '¿Qué signo va?'), sym, [], { fixed: ['<', '=', '>'], big: true, vis: `<div class="cmp"><span>${fdpS(p1, q1, k1)}</span>${BOX}<span>${fdpS(p2, q2, k2)}</span></div>`, ex: L(`Passa-ho tot a decimal: ${fmtD(v1)} ${sym} ${fmtD(v2)}.`, `Pásalo todo a decimal: ${fmtD(v1)} ${sym} ${fmtD(v2)}.`) });
      }
      const n = L_ <= 2 ? 3 : 4, labs = shuffle(set).slice(0, n).map(([p, q]) => [p / q, fdpS(p, q, pick(K3))]), srt = labs.slice().sort((x, y) => x[0] - y[0]);
      const dl = x => x[1] === fmtD(x[0]) ? x[1] : `${x[1]} = ${fmtD(x[0])}`, why = L(`Passa-ho tot a decimal: ${srt.map(dl).join(' · ')}.`, `Pásalo todo a decimal: ${srt.map(dl).join(' · ')}.`);
      if (L_ <= 2 || Math.random() < .4) { const big = L_ <= 1 || Math.random() < .5, t = big ? srt[n - 1] : srt[0]; return mc(big ? L('Quin nombre és el <b>més gran</b>?', '¿Qué número es el <b>mayor</b>?') : L('Quin nombre és el <b>més petit</b>?', '¿Qué número es el <b>menor</b>?'), t[1], labs.filter(x => x !== t).map(x => x[1]), { big: true, ex: why }); }
      return { type: 'order', q: L('Ordena de <b>més petit a més gran</b>:', 'Ordena de <b>menor a mayor</b>:'), items: shuffle(labs.map(x => x[0])), show: v => (labs.find(x => eq(x[0], v)) || [0, fmtD(v)])[1], ans: srt.map(x => x[0]), ex: why };
    },

    /* La mediana */
    'stat.med': L_ => {
      if (L_ >= 5 && Math.random() < .4) {
        const base = [...Array(5)].map(() => ri(2, 9)), big = ri(40, 90), all = [...base, big], mean = a => a.reduce((x, y) => x + y, 0) / a.length;
        const fix = [L('La mitjana', 'La media'), L('La mediana', 'La mediana'), L('Canvien igual', 'Cambian igual')];
        return mc(L(`Aquestes són les dades: <b>${base.join(', ')}</b>. Si hi afegim un <b>${big}</b>, què canvia més?`, `Estos son los datos: <b>${base.join(', ')}</b>. Si añadimos un <b>${big}</b>, ¿qué cambia más?`), fix[0], [], { fixed: fix, ex: L(`La mitjana passa de ${fmtDf(mean(base), 1)} a ${fmtDf(mean(all), 1)}; la mediana, de ${fmtD(median(base))} a ${fmtD(median(all))}. Un valor molt gran estira la mitjana, però la mediana gairebé no es mou.`, `La media pasa de ${fmtDf(mean(base), 1)} a ${fmtDf(mean(all), 1)}; la mediana, de ${fmtD(median(base))} a ${fmtD(median(all))}. Un valor muy grande estira la media, pero la mediana casi no se mueve.`) });
      }
      if (L_ === 3) { const lab = DAB.slice(0, 5).map(tx), v = lab.map(() => ri(1, 10)); return inp(L('Quina és la <b>mediana</b> dels valors del gràfic?', '¿Cuál es la <b>mediana</b> de los valores del gráfico?'), median(v), { vis: barsSVG(lab, v, L('Llibres llegits cada dia', 'Libros leídos cada día')), ex: medWhy(v) }); }
      const n = L_ <= 1 ? 5 : L_ === 2 ? 7 : pick([4, 6]), v = [...Array(n)].map(() => ri(1, 20)), m = median(v), c = pick(MCTX);
      return (Number.isInteger(m) ? inp : dinp)(L(`${c[0]}: quina és la <b>mediana</b>?`, `${c[1]}: ¿cuál es la <b>mediana</b>?`), m, { vis: listVis(v), ex: medWhy(v) });
    },

    /* Condicionals: si… llavors… si no */
    'pc.if': L_ => {
      const W2 = pick([['gran', 'petit', 'grande', 'pequeño'], ['hola', 'adéu', 'hola', 'adiós'], ['sí', 'no', 'sí', 'no']]), A = `«${L(W2[0], W2[2])}»`, B = `«${L(W2[1], W2[3])}»`;
      if (L_ <= 1) {
        const n = ri(1, 15), gt = Math.random() < .5; let t; do t = ri(3, 12); while (t === n);
        const ok = gt ? n > t : n < t;
        return mc(L('Què dirà el programa?', '¿Qué dirá el programa?'), ok ? A : B, [], { fixed: [A, B], big: true, vis: prog(evB(), bk(`n = ${n}`), siB(`n ${gt ? '>' : '&lt;'} ${t}`, inn(say(A)), inn(say(B)))), ex: L(`n val ${n}, i «${n} ${gt ? '>' : '&lt;'} ${t}» és ${ok ? 'cert' : 'fals'}. Per això fa la part de «${ok ? 'llavors' : 'si no'}»: diu ${ok ? A : B}.`, `n vale ${n}, y «${n} ${gt ? '>' : '&lt;'} ${t}» es ${ok ? 'verdad' : 'falso'}. Por eso hace la parte de «${ok ? 'entonces' : 'si no'}»: dice ${ok ? A : B}.`) });
      }
      if (L_ === 2) {
        const n = ri(1, 20), a = ri(2, 9); let b; do b = ri(2, 9); while (b === a);
        const ev = n % 2 === 0, r = ev ? n + a : n + b;
        return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), r, { vis: prog(evB(), bk(`n = ${n}`), siB(L('n és parell', 'n es par'), inn(`n = n + ${a}`), inn(`n = n + ${b}`)), bk(say('n'))), ex: L(`${n} ${ev ? 'és parell' : 'és senar'}, així que fa n = n + ${ev ? a : b}: ${n} + ${ev ? a : b} = ${r}.`, `${n} ${ev ? 'es par' : 'es impar'}, así que hace n = n + ${ev ? a : b}: ${n} + ${ev ? a : b} = ${r}.`) });
      }
      if (L_ === 3) {
        let s, k, t, a, b, n, tr, br;
        do { s = ri(0, 6); k = ri(3, 5); t = ri(6, 12); a = ri(2, 5); b = ri(1, 4); n = s; tr = [s]; br = new Set(); for (let i = 0; i < k; i++) { br.add(n < t); n = n < t ? n + a : n - b; tr.push(n); } } while (br.size < 2 || tr.some(x => x < 0));
        return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), n, { vis: prog(evB(), bk(`n = ${s}`), repB(k, siB(`n &lt; ${t}`, inn(`n = n + ${a}`), inn(`n = n − ${b}`), true)), bk(say('n'))), ex: L(`Cada volta mira si n &lt; ${t}: n passa per ${tr.join(' → ')}. Al final diu ${n}.`, `Cada vuelta mira si n &lt; ${t}: n pasa por ${tr.join(' → ')}. Al final dice ${n}.`) });
      }
      if (L_ === 4) {
        const t = ri(5, 12), gt = Math.random() < .5, good = gt ? ri(t + 1, t + 8) : ri(1, t - 1), bad = [t, ...shuffle([...Array(24)].map((_, i) => i + 1).filter(x => (gt ? x < t : x > t) && Math.abs(x - t) <= 6)).slice(0, 2)];
        return mc(L(`Quin valor ha de tenir <b>n</b> perquè el programa digui ${A}?`, `¿Qué valor tiene que tener <b>n</b> para que el programa diga ${A}?`), String(good), bad.map(String), { big: true, vis: prog(evB(), bk('n = ?'), siB(`n ${gt ? '>' : '&lt;'} ${t}`, inn(say(A)), inn(say(B)))), ex: L(`Només diu ${A} si n ${gt ? '>' : '&lt;'} ${t}. De les opcions, només ${good} ho compleix (compte: ${t} no és ${gt ? 'més gran' : 'més petit'} que ${t}!).`, `Solo dice ${A} si n ${gt ? '>' : '&lt;'} ${t}. De las opciones, solo ${good} lo cumple (¡cuidado: ${t} no es ${gt ? 'mayor' : 'menor'} que ${t}!).`) });
      }
      const t = ri(4, 12), nums = [...Array(ri(5, 7))].map(() => ri(1, 20)), c = nums.filter(x => x > t);
      return inp(L(`El programa mira els números de la llista d'un en un. Quantes vegades dirà ${A}?`, `El programa mira los números de la lista de uno en uno. ¿Cuántas veces dirá ${A}?`), c.length, { vis: `<div class="stack">${listVis(nums)}${prog(bk(L('per a cada número de la llista', 'para cada número de la lista'), 'ev'), siB(`${L('número', 'número')} > ${t}`, inn(say(A)), null, true))}</div>`, ex: c.length ? L(`Els números més grans que ${t} són ${c.join(', ')}: dirà ${A} ${c.length} ${c.length === 1 ? 'vegada' : 'vegades'}.`, `Los números mayores que ${t} son ${c.join(', ')}: dirá ${A} ${c.length} ${c.length === 1 ? 'vez' : 'veces'}.`) : L(`Cap número és més gran que ${t}: no ho dirà mai.`, `Ningún número es mayor que ${t}: no lo dirá nunca.`) });
    },
    /* Operadors lògics: I, O, NO */
    'pc.logic': L_ => {
      const CERT = L('Certa', 'Verdadera'), FALS = L('Falsa', 'Falsa'), Y = L('I', 'Y');
      if (L_ <= 2 || (L_ >= 5 && Math.random() < .5)) {
        const cols = shuffle([0, 1, 2, 3]).slice(0, 3), op = L_ <= 1 ? 'and' : L_ === 2 ? pick(['or', 'not']) : 'notand';
        let items, ci, si, n; do { items = [...Array(ri(8, 10))].map(() => [pick(cols), ri(0, 1)]); ci = pick(cols); si = ri(0, 1); n = items.filter(([c, s]) => op === 'and' ? c === ci && s === si : op === 'or' ? c === ci || s === si : op === 'not' ? c !== ci : c !== ci && s === si).length; } while (n === 0 || n === items.length);
        const cn = tx(FC[ci]), sn = tx(FSH[si]);
        const q = { and: L(`Quantes figures són <b>${cn} ${Y} ${sn}</b>?`, `¿Cuántas figuras son <b>${cn} ${Y} ${sn}</b>?`), or: L(`Quantes figures són <b>${cn} O ${sn}</b>?`, `¿Cuántas figuras son <b>${cn} O ${sn}</b>?`), not: L(`Quantes figures <b>NO</b> són ${cn}?`, `¿Cuántas figuras <b>NO</b> son ${cn}?`), notand: L(`Quantes figures són ${sn} <b>${Y} NO</b> són ${cn}?`, `¿Cuántas figuras son ${sn} <b>${Y} NO</b> son ${cn}?`) }[op];
        const ex = { and: L(`«I» vol dir que ha de complir les dues coses alhora: ${n}.`, `«Y» quiere decir que tiene que cumplir las dos cosas a la vez: ${n}.`), or: L(`«O» vol dir que n'hi ha prou que en compleixi una (o les dues): ${n}.`, `«O» quiere decir que basta con que cumpla una (o las dos): ${n}.`), not: L(`«NO» gira la condició: comptem les que no són ${cn}: ${n}.`, `«NO» da la vuelta a la condición: contamos las que no son ${cn}: ${n}.`), notand: L(`Han de ser ${sn} i, a més, no ser ${cn}: ${n}.`, `Tienen que ser ${sn} y, además, no ser ${cn}: ${n}.`) }[op];
        return inp(q, n, { vis: `<div class="seq em">${items.map(([c, s]) => `<span>${FC[c][2 + s]}</span>`).join('')}</div>`, ex });
      }
      if (L_ === 3) {
        const n = ri(1, 12), a = ri(1, 9), b = ri(a + 2, 14), op = pick(['and', 'or', 'not']);
        const [c, val] = op === 'and' ? [`n > ${a} ${Y} n &lt; ${b}`, n > a && n < b] : op === 'or' ? [`n &lt; ${a} O n > ${b}`, n < a || n > b] : [`NO (n > ${a})`, !(n > a)];
        return mc(L(`Si <b>n = ${n}</b>, la condició <b>${c}</b> és…`, `Si <b>n = ${n}</b>, la condición <b>${c}</b> es…`), val ? CERT : FALS, [], { fixed: [CERT, FALS], ex: op === 'and' ? L(`Amb «I» s'han de complir les dues: ${n} > ${a} és ${n > a ? 'cert' : 'fals'} i ${n} &lt; ${b} és ${n < b ? 'cert' : 'fals'}.`, `Con «Y» se tienen que cumplir las dos: ${n} > ${a} es ${n > a ? 'verdad' : 'falso'} y ${n} &lt; ${b} es ${n < b ? 'verdad' : 'falso'}.`) : op === 'or' ? L(`Amb «O» n'hi ha prou amb una: ${n} &lt; ${a} és ${n < a ? 'cert' : 'fals'} i ${n} > ${b} és ${n > b ? 'cert' : 'fals'}.`, `Con «O» basta con una: ${n} &lt; ${a} es ${n < a ? 'verdad' : 'falso'} y ${n} > ${b} es ${n > b ? 'verdad' : 'falso'}.`) : L(`${n} > ${a} és ${n > a ? 'cert' : 'fals'}, i «NO» ho gira: ${val ? 'certa' : 'falsa'}.`, `${n} > ${a} es ${n > a ? 'verdad' : 'falso'}, y «NO» le da la vuelta: ${val ? 'verdadera' : 'falsa'}.`) });
      }
      if (L_ === 4) {
        const t = ri(8, 25), P_ = [[L('és parell', 'es par'), x => x % 2 === 0], [L('és senar', 'es impar'), x => x % 2 === 1], [L(`és més gran que ${t}`, `es mayor que ${t}`), x => x > t], [L(`és més petit que ${t}`, `es menor que ${t}`), x => x < t], [L('acaba en 5', 'acaba en 5'), x => x % 10 === 5], [L('acaba en 0', 'acaba en 0'), x => x % 10 === 0]];
        for (;;) {
          const [i, j] = shuffle([0, 1, 2, 3, 4, 5]).slice(0, 2); if (['0,1', '2,3', '1,5', '0,4', '4,5'].includes([i, j].sort().join())) continue;
          const and = Math.random() < .6, ok = x => and ? P_[i][1](x) && P_[j][1](x) : P_[i][1](x) || P_[j][1](x), nums = shuffle([...Array(40)].map((_, k) => k + 1)), good = nums.filter(ok), bad = nums.filter(x => !ok(x));
          if (!good.length || bad.length < 3) continue;
          const g = pick(good);
          return mc(L(`Quin número compleix la condició <b>${P_[i][0]} ${and ? Y : 'O'} ${P_[j][0]}</b>?`, `¿Qué número cumple la condición <b>${P_[i][0]} ${and ? Y : 'O'} ${P_[j][0]}</b>?`), String(g), bad.slice(0, 3).map(String), { big: true, ex: and ? L(`Ha de complir les dues coses: ${g} ${P_[i][0]} i ${P_[j][0]}.`, `Tiene que cumplir las dos cosas: ${g} ${P_[i][0]} y ${P_[j][0]}.`) : L(`N'hi ha prou que en compleixi una: ${g} ${P_[i][1](g) ? P_[i][0] : P_[j][0]}. Els altres no en compleixen cap.`, `Basta con que cumpla una: ${g} ${P_[i][1](g) ? P_[i][0] : P_[j][0]}. Los otros no cumplen ninguna.`) });
        }
      }
      const n = ri(1, 20), a = ri(3, 8), b = ri(a + 3, 16), and = Math.random() < .5, c = and ? `n > ${a} ${Y} n &lt; ${b}` : `n &lt; ${a} O n > ${b}`, ok = and ? n > a && n < b : n < a || n > b;
      const D = and ? [L('«dins»', '«dentro»'), L('«fora»', '«fuera»')] : [L('«fora»', '«fuera»'), L('«dins»', '«dentro»')];
      return mc(L('Què dirà el programa?', '¿Qué dirá el programa?'), ok ? D[0] : D[1], [], { fixed: D, big: true, vis: prog(evB(), bk(`n = ${n}`), siB(c, inn(say(D[0])), inn(say(D[1])))), ex: L(`Amb n = ${n}, la condició «${c}» és ${ok ? 'certa' : 'falsa'}: diu ${ok ? D[0] : D[1]}.`, `Con n = ${n}, la condición «${c}» es ${ok ? 'verdadera' : 'falsa'}: dice ${ok ? D[0] : D[1]}.`) });
    },
    /* Programes que funcionen alhora (processos paral·lels) */
    'pc.par': L_ => {
      const [A, B] = shuffle(['🐱', '🐶', '🐰', '🐸']).slice(0, 2), two = (a, b) => `<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">${[a, b].map(([em, c]) => `<div style="display:grid;justify-items:center;gap:4px"><span style="font-size:30px">${em}</span>${c}</div>`).join('')}</div>`;
      const code = (...b) => `<div class="code" style="min-width:0">${b.join('')}</div>`, step = L('avança 1 pas', 'avanza 1 paso');
      if (L_ <= 2) {
        const a = ri(3, 8); let b; do b = ri(3, 9); while (b === a);
        if (L_ === 2 && Math.random() < .5) return inp(L(`El ${B} espera el missatge «ja!» del ${A} per començar. Cada pas dura 1 segon. Quants segons passen fins que <b>tots dos</b> han acabat?`, `El ${B} espera el mensaje «¡ya!» del ${A} para empezar. Cada paso dura 1 segundo. ¿Cuántos segundos pasan hasta que <b>los dos</b> han terminado?`), a + b, { unit: 's', long: true, vis: two([A, code(evB(), repB(a, inn(step)), bk(L('envia «ja!»', 'envía «¡ya!»')))], [B, code(bk(L('quan rebi «ja!»', 'al recibir «¡ya!»'), 'ev'), repB(b, inn(step)))]), ex: L(`Primer treballa el ${A} (${a} s) i després el ${B} (${b} s): ${a} + ${b} = ${a + b} segons.`, `Primero trabaja el ${A} (${a} s) y después el ${B} (${b} s): ${a} + ${b} = ${a + b} segundos.`) });
        return inp(L(`Quan es clica 🚩, el ${A} i el ${B} fan el seu programa <b>alhora</b>. Cada pas dura 1 segon. Quants segons passen fins que <b>tots dos</b> han acabat?`, `Al hacer clic en 🚩, el ${A} y el ${B} hacen su programa <b>a la vez</b>. Cada paso dura 1 segundo. ¿Cuántos segundos pasan hasta que <b>los dos</b> han terminado?`), Math.max(a, b), { unit: 's', long: true, vis: two([A, code(evB(), repB(a, inn(step)))], [B, code(evB(), repB(b, inn(step)))]), ex: L(`Treballen alhora: s'acaba quan acaba el que en fa més, ${Math.max(a, b)} segons (no ${a} + ${b}).`, `Trabajan a la vez: se acaba cuando acaba el que hace más, ${Math.max(a, b)} segundos (no ${a} + ${b}).`) });
      }
      if (L_ === 3) {
        const a = ri(2, 6), b = ri(2, 6), t = ri(3, 6), wait = inn(L('espera 1 segon', 'espera 1 segundo'));
        return inp(L(`Els punts comencen a 0. Quan es clica 🚩, el ${A} i el ${B} sumen punts <b>alhora</b> a la mateixa variable. Quants punts hi haurà al final?`, `Los puntos empiezan en 0. Al hacer clic en 🚩, el ${A} y el ${B} suman puntos <b>a la vez</b> a la misma variable. ¿Cuántos puntos habrá al final?`), (a + b) * t, { long: true, vis: two([A, code(evB(), repB(t, inn(L(`punts = punts + ${a}`, `puntos = puntos + ${a}`)) + wait))], [B, code(evB(), repB(t, inn(L(`punts = punts + ${b}`, `puntos = puntos + ${b}`)) + wait))]), ex: L(`Cada segon, el ${A} en suma ${a} i el ${B}, ${b}: ${a + b} per segon. En ${t} segons: ${a + b} × ${t} = ${(a + b) * t}.`, `Cada segundo, el ${A} suma ${a} y el ${B}, ${b}: ${a + b} por segundo. En ${t} segundos: ${a + b} × ${t} = ${(a + b) * t}.`) });
      }
      const yn = L_ >= 5 && Math.random() < .5;
      for (let g = 0; g < 2000; g++) {
        const len = ri(4, 6), sa = [ri(0, 4), ri(0, 4)], sb = [ri(0, 4), ri(0, 4)]; if (sa[0] === sb[0] && sa[1] === sb[1]) continue;
        const wa = walk(5, sa, len), wb = walk(5, sb, len); if (!wa || !wb) continue;
        const pa = posOf(sa, wa.cmds), pb = posOf(sb, wb.cmds), same = i => pa[i][0] === pb[i][0] && pa[i][1] === pb[i][1];
        if ([...Array(len)].some((_, i) => pa[i + 1].join() === pb[i].join() && pb[i + 1].join() === pa[i].join())) continue;
        const meet = [...Array(len)].map((_, i) => i + 1).filter(same);
        if (meet.length > 1 || (!yn && meet.length !== 1)) continue;
        const vis = `<div class="stack">${gridHTML(5, { [sa.join(',')]: '🤖', [sb.join(',')]: '👾' })}${botRow('🤖', wa.cmds)}${botRow('👾', wb.cmds)}</div>`;
        if (yn) return mc(L('Els dos robots fan cada ordre <b>alhora</b>, un pas cada segon. Es trobaran en alguna casella al mateix temps?', 'Los dos robots hacen cada orden <b>a la vez</b>, un paso cada segundo. ¿Se encontrarán en alguna casilla al mismo tiempo?'), meet.length ? SI() : NO(), [], { fixed: [SI(), NO()], vis, ex: meet.length ? L(`Sí: després del pas ${meet[0]} tots dos són a la mateixa casella.`, `Sí: después del paso ${meet[0]} los dos están en la misma casilla.`) : L('No: fes-los avançar pas a pas i mai no coincideixen a la mateixa casella al mateix temps.', 'No: hazlos avanzar paso a paso y nunca coinciden en la misma casilla al mismo tiempo.') });
        return inp(L('Els dos robots fan cada ordre <b>alhora</b>, un pas cada segon. Després de quants passos es troben a la mateixa casella?', 'Los dos robots hacen cada orden <b>a la vez</b>, un paso cada segundo. ¿Después de cuántos pasos se encuentran en la misma casilla?'), meet[0], { vis, ex: L(`Mou els dos robots alhora, pas a pas: després del pas ${meet[0]} són a la mateixa casella.`, `Mueve los dos robots a la vez, paso a paso: después del paso ${meet[0]} están en la misma casilla.`) });
      }
      return EX['pc.par'](3);
    },
    /* Bucles dins de bucles */
    'pc.nest': L_ => {
      const k1 = ri(2, 4), k2 = ri(2, 5), fin = bk(say('n'));
      if (L_ <= 1) return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), k1 * k2, { vis: prog(evB(), bk('n = 0'), repB(k1, repB(k2, inn('n = n + 1'), true)), fin), ex: L(`El bucle de dins fa ${k2} voltes cada vegada que el de fora en fa una, i el de fora en fa ${k1}: ${k1} × ${k2} = ${k1 * k2}.`, `El bucle de dentro da ${k2} vueltas cada vez que el de fuera da una, y el de fuera da ${k1}: ${k1} × ${k2} = ${k1 * k2}.`) });
      const s = ri(1, 9), a = ri(2, 5);
      if (L_ === 2) return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), s + k1 * k2 * a, { vis: prog(evB(), bk(`n = ${s}`), repB(k1, repB(k2, inn(`n = n + ${a}`), true)), fin), ex: L(`«n = n + ${a}» es fa ${k1} × ${k2} = ${k1 * k2} vegades: ${s} + ${k1 * k2} × ${a} = ${s + k1 * k2 * a}.`, `«n = n + ${a}» se hace ${k1} × ${k2} = ${k1 * k2} veces: ${s} + ${k1 * k2} × ${a} = ${s + k1 * k2 * a}.`) });
      if (L_ === 3) { const b = ri(1, 9); return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), s + k1 * (b + k2 * a), { vis: prog(evB(), bk(`n = ${s}`), repB(k1, inn(`n = n + ${b}`) + repB(k2, inn(`n = n + ${a}`), true)), fin), ex: L(`A cada volta de fora sumem ${b} i després ${k2} × ${a} = ${k2 * a}: en total ${b + k2 * a} per volta. ${s} + ${k1} × ${b + k2 * a} = ${s + k1 * (b + k2 * a)}.`, `En cada vuelta de fuera sumamos ${b} y después ${k2} × ${a} = ${k2 * a}: en total ${b + k2 * a} por vuelta. ${s} + ${k1} × ${b + k2 * a} = ${s + k1 * (b + k2 * a)}.`) }); }
      if (L_ === 4) { const h = L('«hola»', '«hola»'); return inp(L(`Quantes vegades dirà ${h}?`, `¿Cuántas veces dirá ${h}?`), k1 * (1 + k2), { vis: prog(evB(), repB(k1, inn(say(h)) + repB(k2, inn(say(h)), true))), ex: L(`A cada volta de fora el diu 1 vegada i ${k2} més dins el bucle petit: ${1 + k2}. Com que en fa ${k1}: ${k1} × ${1 + k2} = ${k1 * (1 + k2)}.`, `En cada vuelta de fuera lo dice 1 vez y ${k2} más dentro del bucle pequeño: ${1 + k2}. Como da ${k1}: ${k1} × ${1 + k2} = ${k1 * (1 + k2)}.`) }); }
      const s2 = ri(0, 3), j1 = ri(2, 3), j2 = ri(2, 3), c = ri(1, 3), tr = [s2]; let n = s2; for (let i = 0; i < j1; i++) { n += j2 * c; n *= 2; tr.push(n); }
      return inp(L('Què dirà el programa al final?', '¿Qué dirá el programa al final?'), n, { vis: prog(evB(), bk(`n = ${s2}`), repB(j1, repB(j2, inn(`n = n + ${c}`), true) + inn('n = n × 2')), fin), ex: L(`A cada volta de fora: suma ${j2} × ${c} = ${j2 * c} i després multiplica per 2. n passa per ${tr.join(' → ')}.`, `En cada vuelta de fuera: suma ${j2} × ${c} = ${j2 * c} y después multiplica por 2. n pasa por ${tr.join(' → ')}.`) });
    },
    /* Troba l'error del programa */
    'pc.debug': L_ => {
      if (L_ >= 4 && Math.random() < .6) {
        const [N, ca, es] = pick([[3, 'triangle equilàter', 'triángulo equilátero'], [4, 'quadrat', 'cuadrado'], [5, 'pentàgon regular', 'pentágono regular'], [6, 'hexàgon regular', 'hexágono regular'], [8, 'octàgon regular', 'octágono regular']]), nm = L(ca, es), fw = inn(L('avança 60 passos', 'avanza 60 pasos'));
        const why = L(`Un ${nm} té ${N} costats: cal repetir ${N} vegades «avança i gira». En total el robot fa una volta sencera (360°), i 360° ÷ ${N} = ${360 / N}° a cada gir.`, `Un ${nm} tiene ${N} lados: hay que repetir ${N} veces «avanza y gira». En total el robot da una vuelta entera (360°), y 360° ÷ ${N} = ${360 / N}° en cada giro.`);
        if (Math.random() < .5) { let w; do w = ri(3, 8); while (w === N); return inp(L(`Aquest programa havia de dibuixar un <b>${nm}</b>, però el bucle es repeteix <b>${w}</b> vegades i no surt bé. Quantes vegades s'ha de repetir?`, `Este programa tenía que dibujar un <b>${nm}</b>, pero el bucle se repite <b>${w}</b> veces y no sale bien. ¿Cuántas veces se tiene que repetir?`), N, { long: true, vis: `<div class="stack">${shapeSVG('x', N, pick(COLS))}${prog(evB(), repB(w, fw + inn(`${L('gira', 'gira')} ${360 / N} ${L('graus', 'grados')}`)))}</div>`, ex: why }); }
        return inp(L(`Per dibuixar un <b>${nm}</b>, quants graus ha de girar el robot a cada volta?`, `Para dibujar un <b>${nm}</b>, ¿cuántos grados tiene que girar el robot en cada vuelta?`), 360 / N, { unit: '°', long: true, vis: `<div class="stack">${shapeSVG('x', N, pick(COLS))}${prog(evB(), repB(N, fw + inn(`${L('gira', 'gira')} ? ${L('graus', 'grados')}`)))}</div>`, ex: why });
      }
      const len = Math.min(3 + L_, 7);
      for (;;) {
        const st = [ri(0, 4), ri(0, 4)], w = walk(5, st, len); if (!w) continue;
        const j = ri(0, len - 1), wrong = pick(Object.keys(MOV).filter(k => k !== w.cmds[j])), bad = w.cmds.slice(); bad[j] = wrong;
        const idx = [j, ...shuffle([...Array(len).keys()].filter(i => i !== j)).slice(0, 3)].sort((x, y) => x - y), lab = i => L('Ordre ', 'Orden ') + (i + 1);
        return mc(L('El robot havia de seguir el camí blau fins a 🏁, però <b>una ordre està malament</b>. Quina?', 'El robot tenía que seguir el camino azul hasta 🏁, pero <b>una orden está mal</b>. ¿Cuál?'), lab(j), [], { fixed: idx.map(lab), vis: `<div class="stack">${pathGrid(st, w)}${numbered(bad)}</div>`, ex: L(`Segueix el camí amb el dit: l'ordre ${j + 1} hauria de ser ${ARW[w.cmds[j]]} i no ${ARW[wrong]}. Trobar i arreglar errors és part de programar!`, `Sigue el camino con el dedo: la orden ${j + 1} tendría que ser ${ARW[w.cmds[j]]} y no ${ARW[wrong]}. ¡Encontrar y arreglar errores es parte de programar!`) });
      }
    },

    /* Coordenades cartesianes (primer quadrant) */
    'e.cart': L_ => {
      const cs = shuffle(COLS), used = [], howR = L('Primer la x (quant avancem cap a la dreta) i després la y (quant pugem).', 'Primero la x (cuánto avanzamos hacia la derecha) y después la y (cuánto subimos).');
      if (L_ <= 1 || L_ === 3) {
        const n = ri(3, 4), pts = [...Array(n)].map((_, i) => [...rndPt(used), LET[i], cs[i]]), t = pick(pts), [x, y] = t;
        if (L_ === 3) { const ax = Math.random() < .5 ? 'x' : 'y'; return inp(L(`Quina és la coordenada <b>${ax}</b> del punt ${t[2]}?`, `¿Cuál es la coordenada <b>${ax}</b> del punto ${t[2]}?`), ax === 'x' ? x : y, { vis: cartSVG(pts), ex: L(`El punt ${t[2]} és a ${co(t)}: ${ax === 'x' ? `la x (horitzontal) és ${x}` : `la y (vertical) és ${y}`}.`, `El punto ${t[2]} está en ${co(t)}: ${ax === 'x' ? `la x (horizontal) es ${x}` : `la y (vertical) es ${y}`}.`) }); }
        const dis = [[y, x], [x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].filter(([a, b]) => a >= 0 && b >= 0 && !(a === x && b === y)).map(co);
        return mc(L(`Quines coordenades té el punt <b>${t[2]}</b>?`, `¿Qué coordenadas tiene el punto <b>${t[2]}</b>?`), co(t), dis, { big: true, vis: cartSVG(pts), ex: L(`${howR} El punt ${t[2]} és a ${co(t)}.`, `${howR} El punto ${t[2]} está en ${co(t)}.`) });
      }
      if (L_ === 2) {
        let x, y; do { x = ri(0, 6); y = ri(0, 6); } while (x === y); used.push([x, y], [y, x]);
        const ps = shuffle([[x, y], [y, x], rndPt(used), rndPt(used)]).map((p, i) => [...p, LET[i], cs[i]]), t = ps.find(p => p[0] === x && p[1] === y);
        return mc(L(`Quin punt és a <b>${co([x, y])}</b>?`, `¿Qué punto está en <b>${co([x, y])}</b>?`), t[2], [], { fixed: LET.slice(), big: true, vis: cartSVG(ps), ex: L(`${howR} A ${co([x, y])} hi ha el punt ${t[2]}. Compte: ${co([y, x])} és un altre punt!`, `${howR} En ${co([x, y])} está el punto ${t[2]}. ¡Cuidado: ${co([y, x])} es otro punto!`) });
      }
      if (L_ === 4) {
        const hz = Math.random() < .5, a = hz ? [ri(0, 3), ri(0, 6)] : [ri(0, 8), ri(0, 2)], d = hz ? ri(2, 8 - a[0]) : ri(2, 6 - a[1]), b = hz ? [a[0] + d, a[1]] : [a[0], a[1] + d];
        return inp(L('Quantes unitats hi ha del punt A al punt B?', '¿Cuántas unidades hay del punto A al punto B?'), d, { vis: cartSVG([[...a, 'A', cs[0]], [...b, 'B', cs[1]]]), ex: L(`A és a ${co(a)} i B a ${co(b)}: només canvia la ${hz ? 'x' : 'y'}, de ${hz ? a[0] : a[1]} a ${hz ? b[0] : b[1]}. Hi ha ${d} unitats.`, `A está en ${co(a)} y B en ${co(b)}: solo cambia la ${hz ? 'x' : 'y'}, de ${hz ? a[0] : a[1]} a ${hz ? b[0] : b[1]}. Hay ${d} unidades.`) });
      }
      const x1 = ri(0, 5), x2 = ri(x1 + 2, 8), y1 = ri(0, 3), y2 = ri(y1 + 2, 6), [A, B, C] = Math.random() < .5 ? [[x1, y1], [x2, y1], [x2, y2]] : [[x2, y2], [x1, y2], [x1, y1]], D = [A[0], C[1]];
      return mc(L('Quines coordenades ha de tenir el punt <b>D</b> perquè <b>ABCD</b> sigui un rectangle?', '¿Qué coordenadas tiene que tener el punto <b>D</b> para que <b>ABCD</b> sea un rectángulo?'), co(D), [[D[1], D[0]], C, A, [D[0] + 1, D[1]], [D[0], D[1] - 1]].filter(p => !(p[0] === D[0] && p[1] === D[1])).map(co), { big: true, vis: cartSVG([[...A, 'A', cs[0]], [...B, 'B', cs[1]], [...C, 'C', cs[2]]], [A, B, C]), ex: L(`D ha de tenir la x d'A (${A[0]}) i la y de C (${C[1]}): ${co(D)}.`, `D tiene que tener la x de A (${A[0]}) y la y de C (${C[1]}): ${co(D)}.`) });
    },

    /* Educació financera: el millor preu, l'IVA i els interessos */
    'fin.best': L_ => {
      const P_ = pick(PROD), pl = L(P_[0], P_[2]), sg = L(P_[1], P_[3]);
      if (L_ <= 1) { const n = pick([2, 3, 4, 5, 6, 8, 10]), u = ri(6, 30) * 5; return dinp(L(`Un paquet de <b>${n} ${pl}</b> costa <b>${eur(n * u)}</b>. Quant costa <b>cada ${sg}</b>?`, `Un paquete de <b>${n} ${pl}</b> cuesta <b>${eur(n * u)}</b>. ¿Cuánto cuesta <b>cada ${sg}</b>?`), u / 100, { unit: '€', long: true, ex: L(`Repartim el preu entre ${n}: ${eur(n * u)} ÷ ${n} = ${eur(u)}. És el preu unitari.`, `Repartimos el precio entre ${n}: ${eur(n * u)} ÷ ${n} = ${eur(u)}. Es el precio unitario.`) }); }
      if (L_ <= 3) {
        const k = L_ === 2 ? 3 : 4, ns = shuffle([2, 3, 4, 5, 6, 8, 10, 12]).slice(0, k); let us; do us = ns.map(() => ri(8, 30) * 5); while (new Set(us).size < k);
        const lab = ns.map((n, i) => L(`${n} ${pl} per ${eur(n * us[i])}`, `${n} ${pl} por ${eur(n * us[i])}`)), b = us.indexOf(Math.min(...us));
        return mc(L(`En quin paquet surt més barat <b>cada ${sg}</b>?`, `¿En qué paquete sale más barato <b>cada ${sg}</b>?`), lab[b], lab.filter((_, i) => i !== b), { list: true, ex: L(`Calcula quant costa cada ${sg}: ${ns.map((n, i) => `${eur(n * us[i])} ÷ ${n} = ${eur(us[i])}`).join('; ')}. El més barat és ${eur(us[b])}.`, `Calcula cuánto cuesta cada ${sg}: ${ns.map((n, i) => `${eur(n * us[i])} ÷ ${n} = ${eur(us[i])}`).join('; ')}. El más barato es ${eur(us[b])}.`) });
      }
      if (L_ === 4) { const [ca, es] = pick(PKG), w = pick([100, 200, 250, 500]), K = ri(4, 30); return inp(L(`<b>${w} g</b> de ${ca} costen <b>${eur(K * w / 10)}</b>. Quant costa <b>1 kg</b>?`, `<b>${w} g</b> de ${es} cuestan <b>${eur(K * w / 10)}</b>. ¿Cuánto cuesta <b>1 kg</b>?`), K, { unit: '€', long: true, ex: L(`1 kg = 1.000 g, que són ${1000 / w} vegades ${w} g: ${eur(K * w / 10)} × ${1000 / w} = ${K} €. Comparar el preu del quilo ajuda a saber què surt més bé.`, `1 kg = 1.000 g, que son ${1000 / w} veces ${w} g: ${eur(K * w / 10)} × ${1000 / w} = ${K} €. Comparar el precio del kilo ayuda a saber qué sale mejor.`) }); }
      const p = ri(5, 15) * 20, d = pick([20, 25, 40, 50]), A = 2 * p, B = 3 * p * (100 - d) / 100, fix = [L("L'oferta A", 'La oferta A'), L("L'oferta B", 'La oferta B'), L('Costen igual', 'Cuestan igual')];
      return mc(L(`Una ampolla de suc costa <b>${eur(p)}</b> i en vols <b>3</b>. Oferta A: <b>3 × 2</b> (te n'emportes 3 i en pagues 2). Oferta B: <b>${d} % de descompte</b> a cada ampolla. Quina surt més bé?`, `Una botella de zumo cuesta <b>${eur(p)}</b> y quieres <b>3</b>. Oferta A: <b>3 × 2</b> (te llevas 3 y pagas 2). Oferta B: <b>${d} % de descuento</b> en cada botella. ¿Cuál sale mejor?`), A < B ? fix[0] : fix[1], [], { fixed: fix, long: true, ex: L(`Oferta A: 2 × ${eur(p)} = ${eur(A)}. Oferta B: 3 × ${eur(p)} = ${eur(3 * p)}, menys el ${d} %: ${eur(B)}. Surt més bé la ${A < B ? 'A' : 'B'}.`, `Oferta A: 2 × ${eur(p)} = ${eur(A)}. Oferta B: 3 × ${eur(p)} = ${eur(3 * p)}, menos el ${d} %: ${eur(B)}. Sale mejor la ${A < B ? 'A' : 'B'}.`) });
    },
    'fin.iva': L_ => {
      const IV = L("L'IVA és un impost: un tant per cent que s'afegeix al preu i que va a parar a l'Estat.", 'El IVA es un impuesto: un tanto por ciento que se añade al precio y que va al Estado.');
      if (L_ <= 2) { const B = ri(1, 9) * 100, I = B * 21 / 100; return L_ <= 1 ? inp(L(`Un producte costa <b>${fmt(B)} €</b> sense IVA. Quants euros d'<b>IVA (21 %)</b> s'hi afegeixen?`, `Un producto cuesta <b>${fmt(B)} €</b> sin IVA. ¿Cuántos euros de <b>IVA (21 %)</b> se añaden?`), I, { unit: '€', long: true, ex: `${IV} ${L(`El 21 % de ${fmt(B)} = ${fmt(B)} × 21 ÷ 100 = ${I} €.`, `El 21 % de ${fmt(B)} = ${fmt(B)} × 21 ÷ 100 = ${I} €.`)}` }) : inp(L(`Una bicicleta costa <b>${fmt(B)} €</b> sense IVA. L'IVA és del <b>21 %</b>. Quant costa amb l'IVA?`, `Una bicicleta cuesta <b>${fmt(B)} €</b> sin IVA. El IVA es del <b>21 %</b>. ¿Cuánto cuesta con el IVA?`), B + I, { unit: '€', long: true, ex: L(`IVA: ${fmt(B)} × 21 ÷ 100 = ${I} €. Total: ${fmt(B)} + ${I} = ${fmt(B + I)} €.`, `IVA: ${fmt(B)} × 21 ÷ 100 = ${I} €. Total: ${fmt(B)} + ${I} = ${fmt(B + I)} €.`) }); }
      if (L_ === 3) { const [r, B, ca, es] = pick([[10, ri(2, 30) * 10, 'un menú de restaurant', 'un menú de restaurante'], [10, ri(2, 30) * 10, 'un bitllet de tren', 'un billete de tren'], [4, ri(1, 20) * 25, 'uns llibres', 'unos libros'], [4, ri(1, 12) * 25, 'la compra de pa i llet', 'la compra de pan y leche']]), I = B * r / 100; return inp(L(`${cap(ca)} costa <b>${fmt(B)} €</b> sense IVA, i té un IVA del <b>${r} %</b>. Quant es paga en total?`, `${cap(es)} cuesta <b>${fmt(B)} €</b> sin IVA, y tiene un IVA del <b>${r} %</b>. ¿Cuánto se paga en total?`), B + I, { unit: '€', long: true, ex: L(`No tot porta el mateix IVA: els aliments bàsics i els llibres porten el 4 %, els restaurants i el transport el 10 %. IVA: ${fmt(B)} × ${r} ÷ 100 = ${I} €. Total: ${fmt(B + I)} €.`, `No todo lleva el mismo IVA: los alimentos básicos y los libros llevan el 4 %, los restaurantes y el transporte el 10 %. IVA: ${fmt(B)} × ${r} ÷ 100 = ${I} €. Total: ${fmt(B + I)} €.`) }); }
      if (L_ === 4) { const [r, B] = pick([[21, ri(1, 9) * 100], [10, ri(2, 30) * 10]]), T = B * (100 + r) / 100; return inp(L(`Amb l'IVA del <b>${r} %</b> inclòs, un producte costa <b>${fmt(T)} €</b>. Quant costava <b>sense IVA</b>?`, `Con el IVA del <b>${r} %</b> incluido, un producto cuesta <b>${fmt(T)} €</b>. ¿Cuánto costaba <b>sin IVA</b>?`), B, { unit: '€', long: true, ex: L(`Amb IVA és el ${100 + r} % del preu, és a dir, el preu × ${fmtD(1 + r / 100)}. Per desfer-ho dividim: ${fmt(T)} ÷ ${fmtD(1 + r / 100)} = ${fmt(B)} €.`, `Con IVA es el ${100 + r} % del precio, es decir, el precio × ${fmtD(1 + r / 100)}. Para deshacerlo dividimos: ${fmt(T)} ÷ ${fmtD(1 + r / 100)} = ${fmt(B)} €.`) }); }
      if (Math.random() < .35) { const B = ri(1, 19) * 10, T = B * 1.21; return dinp(L(`Una samarreta costa <b>${B} €</b> sense IVA. Amb l'IVA del <b>21 %</b>, quant costa?`, `Una camiseta cuesta <b>${B} €</b> sin IVA. Con el IVA del <b>21 %</b>, ¿cuánto cuesta?`), T, { unit: '€', long: true, ex: L(`IVA: ${B} × 21 ÷ 100 = ${fmtD(B * .21)} €. Total: ${B} + ${fmtD(B * .21)} = ${fmtD(T)} €.`, `IVA: ${B} × 21 ÷ 100 = ${fmtD(B * .21)} €. Total: ${B} + ${fmtD(B * .21)} = ${fmtD(T)} €.`) }); }
      const b1 = ri(1, 7) * 50; let b2; do b2 = ri(1, 7) * 50; while ((b1 + b2) % 100); const S = b1 + b2, T = S * 1.21;
      return inp(L(`Compres una jaqueta de <b>${b1} €</b> i unes botes de <b>${b2} €</b> (preus sense IVA). Amb l'IVA del <b>21 %</b>, quant pagues en total?`, `Compras una chaqueta de <b>${b1} €</b> y unas botas de <b>${b2} €</b> (precios sin IVA). Con el IVA del <b>21 %</b>, ¿cuánto pagas en total?`), T, { unit: '€', long: true, ex: L(`Sense IVA: ${b1} + ${b2} = ${S} €. IVA: ${S} × 21 ÷ 100 = ${S * 21 / 100} €. Total: ${S} + ${S * 21 / 100} = ${T} €.`, `Sin IVA: ${b1} + ${b2} = ${S} €. IVA: ${S} × 21 ÷ 100 = ${S * 21 / 100} €. Total: ${S} + ${S * 21 / 100} = ${T} €.`) });
    },
    'fin.int': L_ => {
      const r = ri(1, 5), C = L_ <= 1 ? 100 : ri(2, 10) * 100, t = ri(2, 5), I = C * r / 100, base = L(`Guardes <b>${fmt(C)} €</b> al banc i et donen un <b>${r} %</b> d'interès cada any.`, `Guardas <b>${fmt(C)} €</b> en el banco y te dan un <b>${r} %</b> de interés cada año.`), w1 = L(`El ${r} % de ${fmt(C)} = ${fmt(C)} × ${r} ÷ 100 = ${I} € cada any.`, `El ${r} % de ${fmt(C)} = ${fmt(C)} × ${r} ÷ 100 = ${I} € cada año.`);
      if (L_ <= 2) return inp(base + L(' Quants euros d\'interès cobraràs el primer any?', ' ¿Cuántos euros de interés cobrarás el primer año?'), I, { unit: '€', long: true, ex: w1 });
      if (L_ === 3) return inp(base + L(` Amb interès simple, quants euros d'interès cobraràs en <b>${t} anys</b>?`, ` Con interés simple, ¿cuántos euros de interés cobrarás en <b>${t} años</b>?`), I * t, { unit: '€', long: true, ex: w1 + L(` Amb interès simple és igual cada any: ${I} × ${t} = ${I * t} €.`, ` Con interés simple es igual cada año: ${I} × ${t} = ${I * t} €.`) });
      if (L_ === 4) return inp(base + L(` Amb interès simple, quants diners tindràs en total al cap de <b>${t} anys</b>?`, ` Con interés simple, ¿cuánto dinero tendrás en total al cabo de <b>${t} años</b>?`), C + I * t, { unit: '€', long: true, ex: w1 + L(` En ${t} anys: ${I} × ${t} = ${I * t} €. Total: ${fmt(C)} + ${I * t} = ${fmt(C + I * t)} €.`, ` En ${t} años: ${I} × ${t} = ${I * t} €. Total: ${fmt(C)} + ${I * t} = ${fmt(C + I * t)} €.`) });
      if (Math.random() < .5) return inp(L(`Demanes un préstec de <b>${fmt(C)} €</b> i, al cap d'un any, has de tornar-lo amb un <b>${r} %</b> d'interès. Quant tornaràs en total?`, `Pides un préstamo de <b>${fmt(C)} €</b> y, al cabo de un año, tienes que devolverlo con un <b>${r} %</b> de interés. ¿Cuánto devolverás en total?`), C + I, { unit: '€', long: true, ex: L(`Quan demanes diners, l'interès el pagues tu: ${w1} Tornaràs ${fmt(C)} + ${I} = ${fmt(C + I)} €.`, `Cuando pides dinero, el interés lo pagas tú: ${w1} Devolverás ${fmt(C)} + ${I} = ${fmt(C + I)} €.`) });
      return inp(L(`Guardes <b>${fmt(C)} €</b> al banc durant un any i et donen <b>${I} €</b> d'interès. Quin tant per cent d'interès et donen?`, `Guardas <b>${fmt(C)} €</b> en el banco durante un año y te dan <b>${I} €</b> de interés. ¿Qué tanto por ciento de interés te dan?`), r, { unit: '%', long: true, ex: L(`L'1 % de ${fmt(C)} és ${C / 100} €. ${I} ÷ ${C / 100} = ${r}: és el ${r} %.`, `El 1 % de ${fmt(C)} es ${C / 100} €. ${I} ÷ ${C / 100} = ${r}: es el ${r} %.`) });
    }
  });
})();
