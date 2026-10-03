/* ===== ESO (nivells 7-10): àlgebra, funcions, geometria, estadística (CA/ES) ===== */
const sgn = n => n < 0 ? `(${fmt(n)})` : String(n);
const simp = (n, d) => { const g = gcd(Math.abs(n), Math.abs(d)) || 1; if (d < 0) { n = -n; d = -d; } return [n / g, d / g]; };
const fracS = (n, d) => { const [a, b] = simp(n, d); return b === 1 ? fmt(a) : (a < 0 ? '−' : '') + frac(Math.abs(a), b); };
const sq = s => s + '²';
function factor(n) { const f = {}; let d = 2; while (n > 1) { while (n % d === 0) { f[d] = (f[d] || 0) + 1; n /= d; } d++; } return Object.entries(f).map(([p, e]) => e > 1 ? p + sup(e) : p).join('·'); }
const poly = (a, b, c) => { const t = []; if (a) t.push((a === 1 ? '' : a === -1 ? '−' : fmt(a)) + 'x²'); if (b) t.push((t.length ? (b < 0 ? ' − ' : ' + ') : (b < 0 ? '−' : '')) + (Math.abs(b) === 1 ? '' : Math.abs(b)) + 'x'); if (c || !t.length) t.push((t.length ? (c < 0 ? ' − ' : ' + ') : (c < 0 ? '−' : '')) + Math.abs(c)); return t.join(''); };
const lin = (m, n) => poly(0, m, n);
let RTN = 0;
function rtSVG(a, b, c, la, lb, lc, alpha) {
  const sc = Math.min(160 / a, 110 / b), W = a * sc, H = b * sc, x = 64, y = 15; // x=64: «12 cm» del catet vertical no surt per l'esquerra
  const P = `${x},${y + H} ${x + W},${y + H} ${x},${y}`, id = 'rt' + (++RTN), Ax = x + W, Ay = y + H, hl = Math.hypot(W, H), ar = Math.min(26, W * .45, H * .9);
  // α: sector ple al vèrtex (x+W, y+H), entre el catet de baix i la hipotenusa
  const ex = Ax - W / hl * ar, ey = Ay - H / hl * ar;
  return `<svg viewBox="0 0 260 160" class="vsvg wide"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8CEBDA"/><stop offset=".55" stop-color="#3CC4AC"/><stop offset="1" stop-color="#1E9C87"/></linearGradient></defs>
  <polygon points="${P}" fill="url(#${id})" stroke="#11806E" stroke-width="3" stroke-linejoin="round" filter="url(#vsh2)"/><polygon points="${x + 5},${y + H - 5} ${x + W * .62},${y + H - 5} ${x + 5},${y + H * .3}" fill="url(#gShine)" opacity=".35"/>
  ${alpha ? `<path d="M${Ax} ${Ay} L${(Ax - ar).toFixed(1)} ${Ay} A${ar.toFixed(1)} ${ar.toFixed(1)} 0 0 1 ${ex.toFixed(1)} ${ey.toFixed(1)} Z" fill="#E24F86" fill-opacity=".35" stroke="#E24F86" stroke-width="2" stroke-linejoin="round"/>` : ''}
  <path d="M${x} ${y + H - 13}h13v13" fill="none" stroke="#0B4F45" stroke-width="2" stroke-linejoin="round"/>
  ${[[x, y + H], [Ax, Ay], [x, y]].map(([u, v]) => `<circle cx="${u.toFixed(1)}" cy="${v.toFixed(1)}" r="3.2" fill="#fff" stroke="#11806E" stroke-width="2"/>`).join('')}
  <text x="${x + W / 2}" y="${y + H + 21}" text-anchor="middle" font-size="15" ${F} fill="${INK}">${la}</text><text x="${x - 9}" y="${y + H / 2 + 5}" text-anchor="end" font-size="15" ${F} fill="${INK}">${lb}</text><text x="${x + W / 2 + 12}" y="${y + H / 2 - 6}" font-size="15" ${F} fill="#18A28B">${lc}</text>${alpha ? `<text x="${x + W + 7}" y="${y + H - 2}" font-size="16" ${F} fill="#E24F86">α</text>` : ''}</svg>`;
}
const TRIP = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [12, 16, 20]];
const listVis = a => `<div class="seq">${a.map((v, i) => `<span style="animation-delay:${i * 60}ms">${fmtD(v)}</span>`).join('')}</div>`;
const pairTxt = (x, y) => `x = ${fmt(x)}, y = ${fmt(y)}`;

Object.assign(EX, {
  'int.ops': L_ => {
    const nz = () => { let v; do v = ri(-9, 9); while (!v); return v; };
    if (L_ <= 1) { const a = nz(), b = nz(); return ninp(L('Quant fa?', '¿Cuánto es?'), a * b, { vis: eqv(`${sgn(a)} · ${sgn(b)} = ${BOX}`), ex: L(`Regla dels signes: ${a * b > 0 ? 'signes iguals donen positiu' : 'signes diferents donen negatiu'}. ${sgn(a)} · ${sgn(b)} = ${fmt(a * b)}.`, `Regla de los signos: ${a * b > 0 ? 'signos iguales dan positivo' : 'signos distintos dan negativo'}. ${sgn(a)} · ${sgn(b)} = ${fmt(a * b)}.`) }); }
    if (L_ === 2) { const q = nz(), b = nz(), a = q * b; return ninp(L('Quant fa?', '¿Cuánto es?'), q, { vis: eqv(`${sgn(a)} : ${sgn(b)} = ${BOX}`), ex: L(`Amb la divisió passa el mateix que amb el producte: ${sgn(a)} : ${sgn(b)} = ${fmt(q)}.`, `Con la división pasa lo mismo que con el producto: ${sgn(a)} : ${sgn(b)} = ${fmt(q)}.`) }); }
    if (L_ === 3) { const a = nz(), b = nz(), c = nz(), r = a * b - c; return ninp(L('Quant fa?', '¿Cuánto es?'), r, { vis: eqv(`${sgn(a)} · ${sgn(b)} − ${sgn(c)} = ${BOX}`), ex: L(`Primer el producte: ${fmt(a * b)}. Després restar ${sgn(c)} és ${c < 0 ? 'sumar ' + (-c) : 'restar ' + c}: ${fmt(r)}.`, `Primero el producto: ${fmt(a * b)}. Después restar ${sgn(c)} es ${c < 0 ? 'sumar ' + (-c) : 'restar ' + c}: ${fmt(r)}.`) }); }
    if (L_ === 4) { const a = nz(), b = ri(1, 9), c = ri(1, 12), d = nz(), r = a * (b - c) + d; return ninp(L('Quant fa?', '¿Cuánto es?'), r, { vis: eqv(`${sgn(a)} · (${b} − ${c}) + ${sgn(d)} = ${BOX}`), ex: L(`Primer el parèntesi: ${b} − ${c} = ${fmt(b - c)}. Després ${sgn(a)} · ${sgn(b - c)} = ${fmt(a * (b - c))} i sumem ${sgn(d)}: ${fmt(r)}.`, `Primero el paréntesis: ${b} − ${c} = ${fmt(b - c)}. Después ${sgn(a)} · ${sgn(b - c)} = ${fmt(a * (b - c))} y sumamos ${sgn(d)}: ${fmt(r)}.`) }); }
    const a = ri(2, 5), e = ri(2, 3), inside = Math.random() < .5, r = inside ? (-a) ** e : -(a ** e);
    return ninp(L('Quant fa? Compte amb el parèntesi!', '¿Cuánto es? ¡Cuidado con el paréntesis!'), r, { vis: eqv(`${inside ? `(−${a})` : `−${a}`}${sup(e)} = ${BOX}`), ex: inside ? L(`El signe és dins del parèntesi i també s'eleva: ${fmt(r)}.`, `El signo está dentro del paréntesis y también se eleva: ${fmt(r)}.`) : L(`Sense parèntesi, només s'eleva el ${a}: −(${a}${sup(e)}) = ${fmt(r)}.`, `Sin paréntesis, solo se eleva el ${a}: −(${a}${sup(e)}) = ${fmt(r)}.`) });
  },
  'mult.mcm': L_ => {
    const P = L_ <= 2 ? [4, 6, 8, 9, 10, 12, 14, 15, 18, 20] : [12, 15, 18, 20, 24, 28, 30, 36, 40, 42, 45, 48, 60];
    let a, b; do { a = pick(P); b = pick(P); } while (a === b);
    const m = Math.random() < .5, v = m ? lcm(a, b) : gcd(a, b);
    return inp(m ? L(`Quin és el <b>mínim comú múltiple</b> de ${a} i ${b}?`, `¿Cuál es el <b>mínimo común múltiplo</b> de ${a} y ${b}?`) : L(`Quin és el <b>màxim comú divisor</b> de ${a} i ${b}?`, `¿Cuál es el <b>máximo común divisor</b> de ${a} y ${b}?`), v, { vis: eqv(`${m ? L('m.c.m.', 'm.c.m.') : L('m.c.d.', 'm.c.d.')}(${a}, ${b}) = ${BOX}`), ex: L(`${a} = ${factor(a)} i ${b} = ${factor(b)}. ${m ? 'Factors comuns i no comuns amb el major exponent' : 'Només els factors comuns amb el menor exponent'}: ${v}.`, `${a} = ${factor(a)} y ${b} = ${factor(b)}. ${m ? 'Factores comunes y no comunes con el mayor exponente' : 'Solo los factores comunes con el menor exponente'}: ${v}.`) });
  },
  'fr.ops': L_ => {
    const r = () => { let n, d; do { d = ri(2, 9); n = ri(1, d + 3); } while (n % d === 0 || gcd(n, d) !== 1); return [n, d]; };
    const [a, b] = r(), [c, d] = r();
    let n, m, vis, ex;
    if (L_ <= 1) { n = a * c; m = b * d; vis = `${frac(a, b)} · ${frac(c, d)}`; ex = L(`Multipliquem dalt per dalt i baix per baix: ${n}/${m}, i simplifiquem.`, `Multiplicamos arriba por arriba y abajo por abajo: ${n}/${m}, y simplificamos.`); }
    else if (L_ === 2) { n = a * d; m = b * c; vis = `${frac(a, b)} : ${frac(c, d)}`; ex = L(`Dividir és multiplicar per la inversa: ${a}/${b} · ${d}/${c} = ${n}/${m}, i simplifiquem.`, `Dividir es multiplicar por la inversa: ${a}/${b} · ${d}/${c} = ${n}/${m}, y simplificamos.`); }
    else if (L_ === 3) { const k = ri(2, 9); n = k * c; m = d; vis = `${k} · ${frac(c, d)}`; ex = L(`Un enter és una fracció amb denominador 1: ${k}·${c}/${d} = ${n}/${m}.`, `Un entero es una fracción con denominador 1: ${k}·${c}/${d} = ${n}/${m}.`); }
    else if (L_ === 4) { const [e, f] = r(); n = a * d * f + b * c * e; m = b * d * f; vis = `${frac(a, b)} + ${frac(c, d)} · ${frac(e, f)}`; ex = L(`Primer la multiplicació (${c * e}/${d * f}) i després la suma amb ${a}/${b}.`, `Primero la multiplicación (${c * e}/${d * f}) y después la suma con ${a}/${b}.`); }
    else { const e = ri(2, 3); n = a ** e; m = b ** e; vis = `(${frac(a, b)})${sup(e)}`; ex = L(`S'eleven el numerador i el denominador: ${a}${sup(e)}/${b}${sup(e)} = ${n}/${m}.`, `Se elevan el numerador y el denominador: ${a}${sup(e)}/${b}${sup(e)} = ${n}/${m}.`); }
    const ok = fracS(n, m), dis = [fracS(n + 1, m), fracS(n, m + 1), fracS(m, n), fracS(n * 2, m)].filter(x => x !== ok);
    return mc(L('Quant fa? (resultat simplificat)', '¿Cuánto es? (resultado simplificado)'), ok, dis, { vis: eqv(vis), big: true, ex });
  },
  'pct2': L_ => {
    const P = pick([10, 20, 25, 50, 15, 30, 40]), step = 100 / gcd(P, 100), q = step * ri(Math.max(1, Math.ceil(20 / step)), Math.max(2, Math.floor(400 / step)));
    if (L_ <= 1) return inp(L(`Un preu de <b>${q} €</b> puja un <b>${P}%</b>. Quin és el preu nou?`, `Un precio de <b>${q} €</b> sube un <b>${P}%</b>. ¿Cuál es el precio nuevo?`), q + q * P / 100, { unit: '€', long: true, ex: L(`L'augment és ${q * P / 100} €. O directament: ${q} · ${(1 + P / 100).toFixed(2).replace('.', ',')} = ${q + q * P / 100} €.`, `El aumento es ${q * P / 100} €. O directamente: ${q} · ${(1 + P / 100).toFixed(2).replace('.', ',')} = ${q + q * P / 100} €.`) });
    if (L_ === 2) return inp(L(`Un abric de <b>${q} €</b> està rebaixat un <b>${P}%</b>. Quant costa?`, `Un abrigo de <b>${q} €</b> está rebajado un <b>${P}%</b>. ¿Cuánto cuesta?`), q - q * P / 100, { unit: '€', long: true, ex: L(`Paguem el ${100 - P}%: ${q} · ${((100 - P) / 100).toFixed(2).replace('.', ',')} = ${q - q * P / 100} €.`, `Pagamos el ${100 - P}%: ${q} · ${((100 - P) / 100).toFixed(2).replace('.', ',')} = ${q - q * P / 100} €.`) });
    if (L_ === 3) { const f = q - q * P / 100; return inp(L(`Després d'un descompte del <b>${P}%</b> pagues <b>${fmtD(f)} €</b>. Quant costava abans?`, `Después de un descuento del <b>${P}%</b> pagas <b>${fmtD(f)} €</b>. ¿Cuánto costaba antes?`), q, { unit: '€', long: true, ex: L(`${fmtD(f)} € és el ${100 - P}% del preu: ${fmtD(f)} : ${((100 - P) / 100).toFixed(2).replace('.', ',')} = ${q} €.`, `${fmtD(f)} € es el ${100 - P}% del precio: ${fmtD(f)} : ${((100 - P) / 100).toFixed(2).replace('.', ',')} = ${q} €.`) }); }
    if (L_ === 4) { const c = pick([100, 200, 400, 800]), a = pick([10, 20, 25, 50]), b = pick([10, 20, 25, 50]), r = c * (1 + a / 100) * (1 - b / 100); return dinp(L(`Un producte de <b>${c} €</b> puja un <b>${a}%</b> i després baixa un <b>${b}%</b>. Quant costa al final?`, `Un producto de <b>${c} €</b> sube un <b>${a}%</b> y después baja un <b>${b}%</b>. ¿Cuánto cuesta al final?`), r, { unit: '€', long: true, ex: L(`${c} · ${(1 + a / 100).toFixed(2).replace('.', ',')} · ${(1 - b / 100).toFixed(2).replace('.', ',')} = ${fmtD(r)} €. No és el mateix que fer la diferència de percentatges d'una sola vegada.`, `${c} · ${(1 + a / 100).toFixed(2).replace('.', ',')} · ${(1 - b / 100).toFixed(2).replace('.', ',')} = ${fmtD(r)} €. No es lo mismo que aplicar la diferencia de porcentajes de una sola vez.`) }); }
    const C = pick([500, 1000, 2000, 5000]), r = pick([2, 3, 4, 5]), t = ri(2, 5);
    return inp(L(`Ingresses <b>${fmt(C)} €</b> al banc a un <b>${r}%</b> d'interès simple anual. Quant guanyes en <b>${t} anys</b>?`, `Ingresas <b>${fmt(C)} €</b> en el banco a un <b>${r}%</b> de interés simple anual. ¿Cuánto ganas en <b>${t} años</b>?`), C * r * t / 100, { unit: '€', long: true, ex: L(`Interès = capital · % · anys : 100 = ${C} · ${r} · ${t} : 100 = ${fmt(C * r * t / 100)} €.`, `Interés = capital · % · años : 100 = ${C} · ${r} · ${t} : 100 = ${fmt(C * r * t / 100)} €.`) });
  },
  'pow.rules': L_ => {
    const a = pick([2, 3, 5, 7, 'x']), m = ri(2, 7), n = ri(2, 6);
    const v = L_ <= 1 ? 0 : L_ === 2 ? 1 : L_ === 3 ? 2 : L_ === 4 ? 3 : ri(0, 3);
    if (v === 0) return ninp(L("Quin és l'exponent?", '¿Cuál es el exponente?'), m + n, { vis: eqv(`${a}${sup(m)} · ${a}${sup(n)} = ${a}<sup>${BOX}</sup>`), ex: L(`Mateixa base: sumem els exponents. ${m} + ${n} = ${m + n}.`, `Misma base: sumamos los exponentes. ${m} + ${n} = ${m + n}.`) });
    if (v === 1) { const mm = m + n; return ninp(L("Quin és l'exponent?", '¿Cuál es el exponente?'), mm - n, { vis: eqv(`${a}${sup(mm)} : ${a}${sup(n)} = ${a}<sup>${BOX}</sup>`), ex: L(`Mateixa base: restem els exponents. ${mm} − ${n} = ${mm - n}.`, `Misma base: restamos los exponentes. ${mm} − ${n} = ${mm - n}.`) }); }
    if (v === 2) { const k = ri(2, 4); return ninp(L("Quin és l'exponent?", '¿Cuál es el exponente?'), n * k, { vis: eqv(`(${a}${sup(n)})${sup(k)} = ${a}<sup>${BOX}</sup>`), ex: L(`Potència d'una potència: multipliquem els exponents. ${n} · ${k} = ${n * k}.`, `Potencia de una potencia: multiplicamos los exponentes. ${n} · ${k} = ${n * k}.`) }); }
    const b = pick([2, 3, 4, 5, 10]), e = pick([0, -1, -2]);
    const ok = e === 0 ? '1' : frac(1, b ** -e), dis = e === 0 ? ['0', String(b), frac(1, b)] : [fmt(-(b ** -e)), frac(1, b), String(b ** -e)];
    return mc(L('Quant val?', '¿Cuánto vale?'), ok, dis.filter(x => x !== ok), { vis: eqv(`${b}<sup>${e < 0 ? '−' + (-e) : e}</sup>`), big: true, ex: e === 0 ? L('Qualsevol número (diferent de 0) elevat a 0 val 1.', 'Cualquier número (distinto de 0) elevado a 0 vale 1.') : L(`Un exponent negatiu vol dir «u partit per»: ${b}<sup>−${-e}</sup> = 1/${b ** -e}.`, `Un exponente negativo quiere decir «uno partido por»: ${b}<sup>−${-e}</sup> = 1/${b ** -e}.`) });
  },
  'pow.sci': L_ => {
    const a = ri(11, 99) / 10, e = ri(3, 8), big = a * 10 ** e, s = `${fmtD(a)} · 10${sup(e)}`;
    if (L_ <= 1) return mc(L(`Com s'escriu <b>${fmt(Math.round(big))}</b> en notació científica?`, `¿Cómo se escribe <b>${fmt(Math.round(big))}</b> en notación científica?`), s, [`${fmtD(a)} · 10${sup(e + 1)}`, `${fmtD(a * 10)} · 10${sup(e - 1)}`, `${fmtD(a)} · 10${sup(e - 1)}`], { list: true, ex: L(`Posem la coma darrere la primera xifra i comptem quants llocs l'hem moguda: ${e}.`, `Ponemos la coma detrás de la primera cifra y contamos cuántos lugares la hemos movido: ${e}.`) });
    if (L_ === 2) return inp(L('Escriu el número sencer:', 'Escribe el número entero:'), Math.round(big), { vis: eqv(s), ex: L(`Movem la coma ${e} llocs a la dreta: ${fmt(Math.round(big))}.`, `Movemos la coma ${e} lugares a la derecha: ${fmt(Math.round(big))}.`) });
    if (L_ === 3) { const k = ri(3, 6), d = ri(1, 9), sm = `0,${'0'.repeat(k - 1)}${d}`; return mc(L(`Com s'escriu <b>${sm}</b> en notació científica?`, `¿Cómo se escribe <b>${sm}</b> en notación científica?`), `${d} · 10<sup>−${k}</sup>`, [`${d} · 10${sup(k)}`, `${d} · 10<sup>−${k - 1}</sup>`, `${d} · 10<sup>−${k + 1}</sup>`], { list: true, ex: L(`Per als números petits l'exponent és negatiu: movem la coma ${k} llocs a la dreta.`, `Para los números pequeños el exponente es negativo: movemos la coma ${k} lugares a la derecha.`) }); }
    const b1 = ri(2, 4), b2 = b1 === 4 ? 2 : ri(2, 3), e1 = ri(2, 5), e2 = ri(2, 5), ok = `${b1 * b2} · 10${sup(e1 + e2)}`;   // b1·b2 < 10: el resultat ja és notació científica
    return mc(L('Quant fa?', '¿Cuánto es?'), ok, [`${b1 * b2} · 10${sup(e1 * e2)}`, `${b1 + b2} · 10${sup(e1 + e2)}`, `${b1 * b2} · 10${sup(Math.abs(e1 - e2))}`], { vis: eqv(`(${b1} · 10${sup(e1)}) · (${b2} · 10${sup(e2)})`), list: true, ex: L(`Multipliquem els números (${b1}·${b2} = ${b1 * b2}) i sumem els exponents (${e1}+${e2} = ${e1 + e2}).`, `Multiplicamos los números (${b1}·${b2} = ${b1 * b2}) y sumamos los exponentes (${e1}+${e2} = ${e1 + e2}).`) });
  },
  'root': L_ => {
    if (L_ <= 1) { const a = ri(11, 20); return inp(L('Quant fa?', '¿Cuánto es?'), a, { vis: eqv(`√${a * a} = ${BOX}`), ex: `${a} · ${a} = ${a * a}.` }); }
    if (L_ === 2) { const a = ri(2, 6); return inp(L('Quant fa?', '¿Cuánto es?'), a, { vis: eqv(`∛${a ** 3} = ${BOX}`), ex: L(`L'arrel cúbica busca un número que multiplicat 3 vegades doni ${a ** 3}: ${a}·${a}·${a}.`, `La raíz cúbica busca un número que multiplicado 3 veces dé ${a ** 3}: ${a}·${a}·${a}.`) }); }
    if (L_ === 3) { const a = ri(3, 12); let n; do n = ri(a * a + 1, (a + 1) ** 2 - 1); while (!n); return mc(L(`Entre quins dos números enters hi ha √${n}?`, `¿Entre qué dos números enteros está √${n}?`), L(`entre ${a} i ${a + 1}`, `entre ${a} y ${a + 1}`), [L(`entre ${a - 1} i ${a}`, `entre ${a - 1} y ${a}`), L(`entre ${a + 1} i ${a + 2}`, `entre ${a + 1} y ${a + 2}`), L(`entre ${Math.floor(n / 2)} i ${Math.floor(n / 2) + 1}`, `entre ${Math.floor(n / 2)} y ${Math.floor(n / 2) + 1}`)], { list: true, ex: L(`${a}² = ${a * a} i ${a + 1}² = ${(a + 1) ** 2}. ${n} és entremig.`, `${a}² = ${a * a} y ${a + 1}² = ${(a + 1) ** 2}. ${n} está en medio.`) }); }
    const a = ri(2, 6), b = pick([2, 3, 5, 6, 7]);
    return mc(L('Simplifica:', 'Simplifica:'), `${a}√${b}`, [`${b}√${a}`, `${a * a}√${b}`, `√${a + b}`], { vis: eqv(`√${a * a * b}`), big: true, ex: `√${a * a * b} = √(${a * a}·${b}) = ${a}√${b}.` });
  },
  'alg.expr': L_ => {
    const x = ri(1, 6), a = ri(2, 9), b = ri(1, 9);
    if (L_ <= 1) return inp(L(`Quant val l'expressió si <b>x = ${x}</b>?`, `¿Cuánto vale la expresión si <b>x = ${x}</b>?`), a * x + b, { vis: eqv(lin(a, b)), ex: `${a}·${x} + ${b} = ${a * x + b}.` });
    if (L_ === 2) { const c = ri(1, 5); return ninp(L(`Quant val l'expressió si <b>x = ${x}</b>?`, `¿Cuánto vale la expresión si <b>x = ${x}</b>?`), 2 * x * x - c * x, { vis: eqv(poly(2, -c, 0)), ex: `2·${x}² − ${c}·${x} = ${2 * x * x} − ${c * x} = ${2 * x * x - c * x}.` }); }
    if (L_ === 3) { const p = ri(2, 7), q = ri(1, 5), r = ri(1, 9), s = ri(1, 9); return mc(L('Redueix els termes semblants:', 'Reduce los términos semejantes:'), lin(p - q, r + s), [lin(p + q, r + s), lin(p - q, r - s), lin(p - q + r + s, 0)], { vis: eqv(`${p}x + ${r} − ${q}x + ${s}`), big: true, ex: L(`Les x amb les x (${p} − ${q} = ${p - q}) i els números amb els números (${r} + ${s} = ${r + s}).`, `Las x con las x (${p} − ${q} = ${p - q}) y los números con los números (${r} + ${s} = ${r + s}).`) }); }
    if (L_ === 4) return mc(L('Treu el parèntesi:', 'Quita el paréntesis:'), lin(a, a * b), [lin(a, b), lin(a + b, 0), lin(a, a + b)], { vis: eqv(`${a}(x + ${b})`), big: true, ex: L(`Multipliquem el ${a} per cada terme: ${a}·x + ${a}·${b}.`, `Multiplicamos el ${a} por cada término: ${a}·x + ${a}·${b}.`) });
    const p = ri(1, 6), q = ri(1, 6);
    return mc(L('Desenvolupa:', 'Desarrolla:'), poly(1, p + q, p * q), [poly(1, p * q, p + q), poly(1, 0, p * q), poly(2, p + q, p * q)], { vis: eqv(`(x + ${p})(x + ${q})`), big: true, ex: L(`Cada terme pel de l'altre parèntesi: x² + ${q}x + ${p}x + ${p * q}.`, `Cada término por el del otro paréntesis: x² + ${q}x + ${p}x + ${p * q}.`) });
  },
  'alg.eq1': L_ => {
    const x = ri(L_ >= 3 ? -8 : 1, 12) || 3, a = ri(2, 9), b = ri(1, 15), c = ri(2, 6);
    let vis, ex;
    if (L_ <= 1) { vis = `x + ${b} = ${x + b}`; ex = L(`Passem el ${b} restant a l'altre costat: x = ${x + b} − ${b} = ${x}.`, `Pasamos el ${b} restando al otro lado: x = ${x + b} − ${b} = ${x}.`); }
    else if (L_ === 2) { vis = `${a}x = ${a * x}`; ex = L(`Dividim els dos costats per ${a}: x = ${a * x} : ${a} = ${x}.`, `Dividimos los dos lados entre ${a}: x = ${a * x} : ${a} = ${x}.`); }
    else if (L_ === 3) { vis = `${lin(a, b)} = ${fmt(a * x + b)}`; ex = L(`Primer restem ${b}: ${a}x = ${fmt(a * x)}. Després dividim per ${a}: x = ${fmt(x)}.`, `Primero restamos ${b}: ${a}x = ${fmt(a * x)}. Después dividimos entre ${a}: x = ${fmt(x)}.`); }
    else if (L_ === 4) { vis = `${a}(x + ${b}) = ${fmt(a * (x + b))}`; ex = L(`Dividim per ${a}: x + ${b} = ${fmt(x + b)}. Llavors x = ${fmt(x)}.`, `Dividimos entre ${a}: x + ${b} = ${fmt(x + b)}. Entonces x = ${fmt(x)}.`); }
    else { const cc = a + c, d = cc * x + b - a * x; vis = `${lin(cc, b)} = ${lin(a, d)}`; ex = L(`Les x a un costat: ${cc}x − ${a}x = ${fmt(d)} − ${b} → ${c}x = ${fmt(d - b)} → x = ${fmt(x)}.`, `Las x a un lado: ${cc}x − ${a}x = ${fmt(d)} − ${b} → ${c}x = ${fmt(d - b)} → x = ${fmt(x)}.`); }
    return ninp(L("Resol l'equació. Quant val x?", 'Resuelve la ecuación. ¿Cuánto vale x?'), x, { vis: eqv(vis), ex });
  },
  'alg.eq2': L_ => {
    if (L_ <= 1) { const a = ri(2, 12); return inp(L('Quina és la solució <b>positiva</b>?', '¿Cuál es la solución <b>positiva</b>?'), a, { vis: eqv(`x² = ${a * a}`), ex: L(`x = ±√${a * a} = ±${a}. La positiva és ${a}.`, `x = ±√${a * a} = ±${a}. La positiva es ${a}.`) }); }
    const r1 = ri(-6, 6), r2 = ri(-6, 6), S = r1 + r2, Pp = r1 * r2;
    // les solucions es comparen com a conjunts: «x = 0, x = 5» i «x = 5, x = 0» són la mateixa resposta
    const sol = (a, b) => a === b ? `x = ${fmt(a)}` : `x = ${fmt(Math.min(a, b))}, x = ${fmt(Math.max(a, b))}`, ok = sol(r1, r2);
    const alt = [...new Set([[-r1, -r2], [S, Pp], [Math.min(r1, r2) - 1, Math.max(r1, r2) + 1], [r1 + 1, r2 - 1], [r1 - 2, r2 + 2], [r1 + 3, r2 + 3]].map(([a, b]) => sol(a, b)))].filter(t => t !== ok).slice(0, 3);
    const fac = r => r === 0 ? 'x' : `(x ${r < 0 ? '+ ' + -r : '− ' + r})`, facs = r1 === r2 ? (r1 === 0 ? 'x²' : `${fac(r1)}²`) : r2 === 0 ? fac(r2) + fac(r1) : fac(r1) + fac(r2);
    if (L_ === 2) return mc(L('Quines són les solucions?', '¿Cuáles son las soluciones?'), ok, alt, { vis: eqv(`${facs} = 0`), list: true, ex: L('Un producte val 0 quan algun dels factors val 0.', 'Un producto vale 0 cuando alguno de los factores vale 0.') });
    if (L_ <= 4 || Math.random() < .5) return mc(L(`Quines són les solucions? <span class="hint">Pista: dos números que sumen ${fmt(S)} i multiplicats fan ${fmt(Pp)}</span>`, `¿Cuáles son las soluciones? <span class="hint">Pista: dos números que suman ${fmt(S)} y multiplicados dan ${fmt(Pp)}</span>`), ok, alt, { vis: eqv(`${poly(1, -S, Pp)} = 0`), list: true, ex: L(`Busquem dos números que sumin ${fmt(S)} i multiplicats donin ${fmt(Pp)}: ${fmt(r1)} i ${fmt(r2)}. També es pot fer amb la fórmula.`, `Buscamos dos números que sumen ${fmt(S)} y multiplicados den ${fmt(Pp)}: ${fmt(r1)} y ${fmt(r2)}. También se puede hacer con la fórmula.`) });
    const b = ri(-8, 8), c = ri(-8, 8), D = b * b - 4 * c, n = D > 0 ? 2 : D === 0 ? 1 : 0;
    return mc(L('Quantes solucions té?', '¿Cuántas soluciones tiene?'), String(n), ['0', '1', '2'].filter(x => x !== String(n)), { vis: eqv(`${poly(1, b, c)} = 0`), big: true, ex: L(`Discriminant: b² − 4ac = ${b * b} − ${4 * c} = ${D}. ${D > 0 ? 'Positiu: 2 solucions.' : D === 0 ? 'Zero: 1 solució.' : 'Negatiu: cap solució.'}`, `Discriminante: b² − 4ac = ${b * b} − ${4 * c} = ${D}. ${D > 0 ? 'Positivo: 2 soluciones.' : D === 0 ? 'Cero: 1 solución.' : 'Negativo: ninguna solución.'}`) });
  },
  'alg.sys': L_ => {
    const x = ri(-5, 8), y = ri(-5, 8);
    let a1, b1, a2, b2;
    if (L_ <= 1) { a1 = 1; b1 = 1; a2 = 1; b2 = -1; } else { do { a1 = ri(1, 4); b1 = ri(-3, 3) || 1; a2 = ri(1, 4); b2 = ri(-3, 3) || -1; } while (a1 * b2 - a2 * b1 === 0); }
    const e = (a, b) => `${a === 1 ? '' : a}x ${b < 0 ? '−' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}y`;
    const vis = `<div class="stack">${eqv(`${e(a1, b1)} = ${fmt(a1 * x + b1 * y)}`)}${eqv(`${e(a2, b2)} = ${fmt(a2 * x + b2 * y)}`)}</div>`;
    const ex = L(`Per reducció o substitució s'arriba a ${pairTxt(x, y)}. Comprova-ho a les dues equacions.`, `Por reducción o sustitución se llega a ${pairTxt(x, y)}. Compruébalo en las dos ecuaciones.`);
    if (L_ >= 4) return mc(L('Quina és la solució del sistema?', '¿Cuál es la solución del sistema?'), pairTxt(x, y), [pairTxt(y, x), pairTxt(x + 1, y - 1), pairTxt(-x, y)].filter(t => t !== pairTxt(x, y)), { vis, list: true, ex });
    return ninp(L('Resol el sistema. Quant val <b>x</b>?', 'Resuelve el sistema. ¿Cuánto vale <b>x</b>?'), x, { vis, ex });
  },
  'alg.poly': L_ => {
    const a = ri(1, 5), b = ri(-6, 6), c = ri(-9, 9);
    if (L_ <= 1) { const g = ri(2, 5); return inp(L('Quin és el <b>grau</b> del polinomi?', '¿Cuál es el <b>grado</b> del polinomio?'), g, { vis: eqv(`${a === 1 ? '' : a}x${sup(g)}${b ? ` ${b < 0 ? '−' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}x` : ''}${c ? ` ${c < 0 ? '−' : '+'} ${Math.abs(c)}` : ''}`), ex: L(`El grau és l'exponent més gran de la x: ${g}.`, `El grado es el mayor exponente de la x: ${g}.`) }); }
    if (L_ === 2) { const d = ri(1, 5), e = ri(-6, 6); return mc(L('Suma els polinomis:', 'Suma los polinomios:'), poly(a + d, b + e, c), [poly(a + d, b - e, c), poly(a * d, b + e, c), poly(a + d, b + e, 0), poly(a + d, b + e, c + 1), poly(a + d + 1, b + e, c)], { vis: eqv(`(${poly(a, b, c)}) + (${poly(d, e, 0)})`), list: true, ex: L('Sumem els termes del mateix grau.', 'Sumamos los términos del mismo grado.') }); }
    if (L_ === 3) { const x = ri(-3, 3); return ninp(L(`Quant val P(${fmt(x)})?`, `¿Cuánto vale P(${fmt(x)})?`), a * x * x + b * x + c, { vis: eqv(`P(x) = ${poly(a, b, c)}`), ex: `${a === 1 ? '' : a + '·'}(${fmt(x)})²${b ? ` ${b < 0 ? '−' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b) + '·'}(${fmt(x)})` : ''}${c ? ` ${c < 0 ? '−' : '+'} ${Math.abs(c)}` : ''} = ${fmt(a * x * x + b * x + c)}.` }); }
    if (L_ === 4) { const k = ri(2, 5), b = ri(1, 6) * pick([-1, 1]); return mc(L('Multiplica:', 'Multiplica:'), poly(k * a, k * b, 0), [poly(k * a, b, 0), poly(a, k * b, 0), poly(k * a, k * b, k)], { vis: eqv(`${k}x · (${lin(a, b)})`), list: true, ex: L(`${k}x per cada terme: ${k * a}x² i ${fmt(k * b)}x.`, `${k}x por cada término: ${k * a}x² y ${fmt(k * b)}x.`) }); }
    const p = ri(1, 7), neg = Math.random() < .5;
    return mc(L('Desenvolupa la identitat notable:', 'Desarrolla la identidad notable:'), poly(1, neg ? -2 * p : 2 * p, p * p), [poly(1, 0, p * p), poly(1, neg ? -p : p, p * p), poly(1, neg ? -2 * p : 2 * p, 2 * p)], { vis: eqv(`(x ${neg ? '−' : '+'} ${p})²`), list: true, ex: L(`(a ${neg ? '−' : '+'} b)² = a² ${neg ? '−' : '+'} 2ab + b²: x² ${neg ? '−' : '+'} ${2 * p}x + ${p * p}.`, `(a ${neg ? '−' : '+'} b)² = a² ${neg ? '−' : '+'} 2ab + b²: x² ${neg ? '−' : '+'} ${2 * p}x + ${p * p}.`) });
  },
  'alg.ineq': L_ => {
    const x = ri(-5, 10), a = ri(2, 6), b = ri(1, 9);
    if (L_ <= 1) return ninp(L('Resol: x > ?', 'Resuelve: x > ?'), x, { vis: eqv(`x + ${b} > ${fmt(x + b)}`), ex: L(`Restem ${b} als dos costats: x > ${fmt(x)}.`, `Restamos ${b} a los dos lados: x > ${fmt(x)}.`) });
    if (L_ === 2) return ninp(L('Resol: x < ?', 'Resuelve: x < ?'), x, { vis: eqv(`${a}x < ${fmt(a * x)}`), ex: L(`Dividim per ${a} (positiu, el signe no canvia): x < ${fmt(x)}.`, `Dividimos entre ${a} (positivo, el signo no cambia): x < ${fmt(x)}.`) });
    if (L_ === 3) { const ok = x + ri(1, 4), dis = [x, x - 1, x - ri(2, 5)]; return mc(L(`Quin d'aquests valors compleix la inequació?`, '¿Cuál de estos valores cumple la inecuación?'), fmt(ok), dis.map(fmt), { vis: eqv(`${lin(a, b)} > ${fmt(a * x + b)}`), big: true, ex: L(`La inequació diu x > ${fmt(x)}: només ${fmt(ok)} hi compleix.`, `La inecuación dice x > ${fmt(x)}: solo ${fmt(ok)} la cumple.`) }); }
    if (L_ === 4) return ninp(L('Resol: x ≥ ?', 'Resuelve: x ≥ ?'), x, { vis: eqv(`${lin(a, b)} ≥ ${fmt(a * x + b)}`), ex: L(`${a}x ≥ ${fmt(a * x)} → x ≥ ${fmt(x)}.`, `${a}x ≥ ${fmt(a * x)} → x ≥ ${fmt(x)}.`) });
    return mc(L('Quina és la solució?', '¿Cuál es la solución?'), `x < ${fmt(x)}`, [`x > ${fmt(x)}`, `x < ${fmt(-x)}`, `x > ${fmt(-x)}`].filter(t => t !== `x < ${fmt(x)}`), { vis: eqv(`−${a}x > ${fmt(-a * x)}`), big: true, ex: L(`En dividir per un número negatiu (−${a}), el signe de la desigualtat es gira: x < ${fmt(x)}.`, `Al dividir por un número negativo (−${a}), el signo de la desigualdad se gira: x < ${fmt(x)}.`) });
  },
  'fn.lin': L_ => {
    const m = ri(-4, 5) || 2, n = ri(-6, 6), f = x => m * x + n, eq = `y = ${lin(m, n)}`;
    if (L_ <= 1) { const x = ri(-3, 5); return ninp(L(`Si f(x) = ${lin(m, n)}, quant val f(${fmt(x)})?`, `Si f(x) = ${lin(m, n)}, ¿cuánto vale f(${fmt(x)})?`), f(x), { ex: `${m}·(${fmt(x)}) ${n < 0 ? '−' : '+'} ${Math.abs(n)} = ${fmt(f(x))}.` }); }
    if (L_ === 2) return ninp(L('Quin és el <b>pendent</b> de la recta?', '¿Cuál es la <b>pendiente</b> de la recta?'), m, { vis: eqv(eq), ex: L(`A y = mx + n, el pendent és el número que multiplica la x: ${m}.`, `En y = mx + n, la pendiente es el número que multiplica la x: ${m}.`) });
    if (L_ === 3) { const xs = [0, 1, 2, 3]; return ninp(L('Mira la taula. Quin és el pendent?', 'Mira la tabla. ¿Cuál es la pendiente?'), m, { vis: `<table class="ftab"><tr><th>x</th>${xs.map(x => `<td>${x}</td>`).join('')}</tr><tr><th>y</th>${xs.map(x => `<td>${fmt(f(x))}</td>`).join('')}</tr></table>`, ex: L(`Cada vegada que x augmenta 1, y canvia ${fmt(m)}.`, `Cada vez que x aumenta 1, y cambia ${fmt(m)}.`) }); }
    if (L_ === 4) { const x = ri(-3, 4), P = `(${fmt(x)}, ${fmt(f(x))})`, bad = [[x, f(x) + 1], [f(x), x], [x + 1, f(x)], [x, f(x) - 1], [x - 1, f(x)]].filter(([a, b]) => f(a) !== b).slice(0, 3).map(([a, b]) => `(${fmt(a)}, ${fmt(b)})`); return mc(L(`Quin d'aquests punts és de la recta ${eq}?`, `¿Cuál de estos puntos es de la recta ${eq}?`), P, bad, { big: true, ex: L(`Substituïm x = ${fmt(x)}: y = ${fmt(f(x))}.`, `Sustituimos x = ${fmt(x)}: y = ${fmt(f(x))}.`) }); }
    return mc(L(`Quina recta passa pels punts (0, ${fmt(n)}) i (1, ${fmt(f(1))})?`, `¿Qué recta pasa por los puntos (0, ${fmt(n)}) y (1, ${fmt(f(1))})?`), eq, [`y = ${lin(n || 1, m)}`, `y = ${lin(-m, n)}`, `y = ${lin(m, -n || 1)}`].filter(t => t !== eq), { list: true, ex: L(`El punt amb x = 0 dona l'ordenada a l'origen (${fmt(n)}) i el pendent és ${fmt(f(1))} − ${sgn(n)} = ${fmt(m)}.`, `El punto con x = 0 da la ordenada en el origen (${fmt(n)}) y la pendiente es ${fmt(f(1))} − ${sgn(n)} = ${fmt(m)}.`) });
  },
  'fn.quad': L_ => {
    const h = ri(-4, 4), k = ri(-6, 6), b = -2 * h, c = h * h + k, f = x => x * x + b * x + c, P = `f(x) = ${poly(1, b, c)}`;
    if (L_ <= 1) { const x = ri(-3, 3); return ninp(L(`Quant val f(${fmt(x)})?`, `¿Cuánto vale f(${fmt(x)})?`), f(x), { vis: eqv(P), ex: `(${fmt(x)})² ${b < 0 ? '−' : '+'} ${Math.abs(b)}·(${fmt(x)}) ${c < 0 ? '−' : '+'} ${Math.abs(c)} = ${fmt(f(x))}.` }); }
    if (L_ === 2) return ninp(L('On talla l\'eix <b>y</b> la paràbola?', '¿Dónde corta el eje <b>y</b> la parábola?'), c, { vis: eqv(P), ex: L(`Quan x = 0, y = ${fmt(c)}.`, `Cuando x = 0, y = ${fmt(c)}.`) });
    return ninp(L('Quina és la coordenada <b>x</b> del vèrtex?', '¿Cuál es la coordenada <b>x</b> del vértice?'), h, { vis: eqv(P), ex: L(`x = −b / 2a = ${fmt(-b)} / 2 = ${fmt(h)}.`, `x = −b / 2a = ${fmt(-b)} / 2 = ${fmt(h)}.`) });
  },
  'seq.arith': L_ => {
    const a1 = ri(-5, 10), d = ri(2, 7) * (L_ >= 3 && Math.random() < .3 ? -1 : 1), t = [0, 1, 2, 3].map(i => a1 + i * d);
    if (L_ <= 1) return ninp(L('Quin és el terme següent?', '¿Cuál es el término siguiente?'), a1 + 4 * d, { vis: listVis(t), ex: L(`Cada terme suma ${fmt(d)}: ${fmt(t[3])} + ${sgn(d)} = ${fmt(a1 + 4 * d)}.`, `Cada término suma ${fmt(d)}: ${fmt(t[3])} + ${sgn(d)} = ${fmt(a1 + 4 * d)}.`) });
    if (L_ === 2) return ninp(L('Quina és la <b>diferència</b> de la progressió?', '¿Cuál es la <b>diferencia</b> de la progresión?'), d, { vis: listVis(t), ex: `${fmt(t[1])} − ${sgn(t[0])} = ${fmt(d)}.` });
    if (L_ === 3) { const n = ri(8, 20); return ninp(L(`Quin és el terme número <b>${n}</b>?`, `¿Cuál es el término número <b>${n}</b>?`), a1 + (n - 1) * d, { vis: listVis(t), ex: `aₙ = a₁ + (n − 1)·d = ${fmt(a1)} + ${n - 1}·${sgn(d)} = ${fmt(a1 + (n - 1) * d)}.` }); }
    if (L_ === 4) { const ok = `aₙ = ${lin(d, a1 - d)}`.replace('x', 'n'); return mc(L('Quin és el terme general?', '¿Cuál es el término general?'), ok, [`aₙ = ${lin(d, a1)}`.replace('x', 'n'), `aₙ = ${lin(a1, d)}`.replace('x', 'n'), `aₙ = ${lin(d, a1 + d)}`.replace('x', 'n')].filter(x => x !== ok), { vis: listVis(t), list: true, ex: `aₙ = ${fmt(a1)} + (n − 1)·${sgn(d)} = ${lin(d, a1 - d).replace('x', 'n')}.` }); }
    const g = ri(2, 3), s = ri(1, 4), gt = [0, 1, 2, 3].map(i => s * g ** i);
    return inp(L('Progressió geomètrica: quin és el terme següent?', 'Progresión geométrica: ¿cuál es el término siguiente?'), s * g ** 4, { vis: listVis(gt), ex: L(`Cada terme es multiplica per ${g}: ${gt[3]} · ${g} = ${s * g ** 4}.`, `Cada término se multiplica por ${g}: ${gt[3]} · ${g} = ${s * g ** 4}.`) });
  },
  'geo.pyth': L_ => {
    const [a, b, c] = pick(TRIP);
    if (L_ <= 2) return inp(L('Quant fa la <b>hipotenusa</b>?', '¿Cuánto mide la <b>hipotenusa</b>?'), c, { unit: 'cm', vis: rtSVG(a, b, c, `${a} cm`, `${b} cm`, '?'), ex: `c = √(${a}² + ${b}²) = √(${a * a} + ${b * b}) = √${c * c} = ${c} cm.` });
    if (L_ === 3) return inp(L('Quant fa el <b>catet</b> que falta?', '¿Cuánto mide el <b>cateto</b> que falta?'), b, { unit: 'cm', vis: rtSVG(a, b, c, `${a} cm`, '?', `${c} cm`), ex: `b = √(${c}² − ${a}²) = √(${c * c} − ${a * a}) = √${b * b} = ${b} cm.` });
    if (L_ === 4) { const right = Math.random() < .5, cc = right ? c : c + 1; return mc(L(`Un triangle té costats de <b>${a}, ${b} i ${cc} cm</b>. És rectangle?`, `Un triángulo tiene lados de <b>${a}, ${b} y ${cc} cm</b>. ¿Es rectángulo?`), right ? L('Sí', 'Sí') : 'No', [right ? 'No' : L('Sí', 'Sí')], { big: true, ex: `${a}² + ${b}² = ${a * a + b * b}; ${cc}² = ${cc * cc}. ${right ? L('Coincideixen: és rectangle.', 'Coinciden: es rectángulo.') : L('No coincideixen: no ho és.', 'No coinciden: no lo es.')}` }); }
    return inp(L(`Una escala de <b>${c} m</b> es recolza a una paret amb el peu a <b>${a} m</b> de la paret. A quina altura arriba?`, `Una escalera de <b>${c} m</b> se apoya en una pared con el pie a <b>${a} m</b> de la pared. ¿A qué altura llega?`), b, { unit: 'm', long: true, ex: `√(${c}² − ${a}²) = √${b * b} = ${b} m.` });
  },
  'geo.thales': L_ => {
    const k = pick([2, 3, 4]), a = ri(2, 9), b = ri(2, 9);
    if (L_ <= 1) return inp(L(`Dos triangles són semblants. Un costat fa ${a} cm i el costat corresponent de l'altre fa ${a * k} cm. Quina és la <b>raó de semblança</b>?`, `Dos triángulos son semejantes. Un lado mide ${a} cm y el lado correspondiente del otro mide ${a * k} cm. ¿Cuál es la <b>razón de semejanza</b>?`), k, { long: true, ex: `${a * k} : ${a} = ${k}.` });
    if (L_ === 2) return inp(L(`Triangles semblants amb raó ${k}. Si un costat del petit fa ${b} cm, quant fa el del gran?`, `Triángulos semejantes con razón ${k}. Si un lado del pequeño mide ${b} cm, ¿cuánto mide el del grande?`), b * k, { unit: 'cm', long: true, ex: `${b} · ${k} = ${b * k} cm.` });
    const s = pick([2, 4, 5]), h = ri(2, 6) * s, sh = ri(2, 5), p = pick([1, 2]);   // ombres amb com a molt 2 decimals
    return inp(L(`Una persona <b>${p === 1 ? "d'1" : 'de ' + p} m</b> fa una ombra de <b>${fmtD(p * sh / s)} m</b>. A la mateixa hora, un arbre fa una ombra de <b>${fmtD(h * sh / s)} m</b>. Quant fa l'arbre?`, `Una persona de <b>${p} m</b> proyecta una sombra de <b>${fmtD(p * sh / s)} m</b>. A la misma hora, un árbol proyecta una sombra de <b>${fmtD(h * sh / s)} m</b>. ¿Cuánto mide el árbol?`), h * p / p, { unit: 'm', long: true, ex: L(`Les ombres són proporcionals a les altures (Tales): l'ombra de l'arbre és ${fmtD(h / p)} vegades la de la persona, i l'arbre fa ${h} m.`, `Las sombras son proporcionales a las alturas (Tales): la sombra del árbol es ${fmtD(h / p)} veces la de la persona, y el árbol mide ${h} m.`) });
  },
  'geo.circle': L_ => {
    const r = ri(2, 10);
    if (L_ <= 1) return dinp(L(`Quant fa la <b>longitud</b> d'una circumferència de radi ${r} cm? (π ≈ 3,14)`, `¿Cuánto mide la <b>longitud</b> de una circunferencia de radio ${r} cm? (π ≈ 3,14)`), 2 * 3.14 * r, { unit: 'cm', ex: `L = 2·π·r = 2 · 3,14 · ${r} = ${fmtD(2 * 3.14 * r)} cm.` });
    if (L_ === 2) return dinp(L(`Quina és l'<b>àrea</b> d'un cercle de radi ${r} cm? (π ≈ 3,14)`, `¿Cuál es el <b>área</b> de un círculo de radio ${r} cm? (π ≈ 3,14)`), 3.14 * r * r, { unit: 'cm²', ex: `A = π·r² = 3,14 · ${r * r} = ${fmtD(3.14 * r * r)} cm².` });
    if (L_ === 3) return dinp(L(`Un cercle té <b>${2 * r} cm de diàmetre</b>. Quina és la seva àrea? (π ≈ 3,14)`, `Un círculo tiene <b>${2 * r} cm de diámetro</b>. ¿Cuál es su área? (π ≈ 3,14)`), 3.14 * r * r, { unit: 'cm²', ex: L(`El radi és la meitat: ${r} cm. A = 3,14 · ${r}² = ${fmtD(3.14 * r * r)} cm².`, `El radio es la mitad: ${r} cm. A = 3,14 · ${r}² = ${fmtD(3.14 * r * r)} cm².`) });
    return dinp(L(`Quina és l'àrea d'un <b>semicercle</b> de radi ${r} cm? (π ≈ 3,14)`, `¿Cuál es el área de un <b>semicírculo</b> de radio ${r} cm? (π ≈ 3,14)`), 3.14 * r * r / 2, { unit: 'cm²', ex: `3,14 · ${r}² : 2 = ${fmtD(3.14 * r * r / 2)} cm².` });
  },
  'geo.vol2': L_ => {
    const r = ri(1, 5), h = ri(2, 10);
    if (L_ <= 1) return EX['vol'](4);
    if (L_ === 2) return dinp(L(`Quin és el volum d'un <b>cilindre</b> de radi ${r} cm i altura ${h} cm? (π ≈ 3,14)`, `¿Cuál es el volumen de un <b>cilindro</b> de radio ${r} cm y altura ${h} cm? (π ≈ 3,14)`), 3.14 * r * r * h, { unit: 'cm³', vis: solidSVG('cilindre'), ex: `V = π·r²·h = 3,14 · ${r * r} · ${h} = ${fmtD(3.14 * r * r * h)} cm³.` });
    if (L_ === 3) { const hh = ri(1, 4) * 3; return dinp(L(`Quin és el volum d'un <b>con</b> de radi ${r} cm i altura ${hh} cm? (π ≈ 3,14)`, `¿Cuál es el volumen de un <b>cono</b> de radio ${r} cm y altura ${hh} cm? (π ≈ 3,14)`), 3.14 * r * r * hh / 3, { unit: 'cm³', vis: solidSVG('con'), ex: L(`El con és un terç del cilindre: 3,14 · ${r * r} · ${hh} : 3 = ${fmtD(3.14 * r * r * hh / 3)} cm³.`, `El cono es un tercio del cilindro: 3,14 · ${r * r} · ${hh} : 3 = ${fmtD(3.14 * r * r * hh / 3)} cm³.`) }); }
    if (L_ === 4) { const rr = pick([3, 6]); return dinp(L(`Quin és el volum d'una <b>esfera</b> de radi ${rr} cm? (π ≈ 3,14)`, `¿Cuál es el volumen de una <b>esfera</b> de radio ${rr} cm? (π ≈ 3,14)`), 4 / 3 * 3.14 * rr ** 3, { unit: 'cm³', vis: solidSVG('esfera'), ex: `V = 4/3 · π · r³ = 4/3 · 3,14 · ${rr ** 3} = ${fmtD(4 / 3 * 3.14 * rr ** 3)} cm³.` }); }
    const a = ri(2, 8), b = ri(2, 6), c = ri(2, 5);
    return inp(L(`Quina és l'<b>àrea total</b> d'un prisma rectangular de ${a} × ${b} × ${c} cm?`, `¿Cuál es el <b>área total</b> de un prisma rectangular de ${a} × ${b} × ${c} cm?`), 2 * (a * b + a * c + b * c), { unit: 'cm²', vis: cubesSVG(Math.min(a, 4), Math.min(b, 3), Math.min(c, 3)), ex: `2·(${a}·${b} + ${a}·${c} + ${b}·${c}) = ${2 * (a * b + a * c + b * c)} cm².` });
  },
  'prop2': L_ => {
    if (L_ <= 2 || Math.random() < .5) {
      const a = pick([2, 3, 4, 6]), b = pick([4, 6, 8, 12]), P_ = a * b, divs = []; for (let i = 2; i <= P_; i++) if (P_ % i === 0 && i !== a && i <= 12) divs.push(i);
      const c = pick(divs);
      return inp(L(`<b>${a} pintors</b> pinten una casa en <b>${b} dies</b>. Quants dies trigarien <b>${c} pintors</b>?`, `<b>${a} pintores</b> pintan una casa en <b>${b} días</b>. ¿Cuántos días tardarían <b>${c} pintores</b>?`), P_ / c, { long: true, ex: L(`És proporcionalitat inversa: més pintors, menys dies. ${a} · ${b} = ${P_} dies de feina; ${P_} : ${c} = ${P_ / c}.`, `Es proporcionalidad inversa: más pintores, menos días. ${a} · ${b} = ${P_} días de trabajo; ${P_} : ${c} = ${P_ / c}.`) });
    }
    if (L_ === 3) { const inv = Math.random() < .5; return mc(inv ? L('Velocitat d\'un cotxe i temps que triga a fer un trajecte. Quin tipus de proporcionalitat és?', 'Velocidad de un coche y tiempo que tarda en hacer un trayecto. ¿Qué tipo de proporcionalidad es?') : L('Quilos de pomes i preu que pagues. Quin tipus de proporcionalitat és?', 'Kilos de manzanas y precio que pagas. ¿Qué tipo de proporcionalidad es?'), inv ? L('Inversa', 'Inversa') : L('Directa', 'Directa'), [inv ? L('Directa', 'Directa') : L('Inversa', 'Inversa')], { big: true, ex: inv ? L('Si vas més ràpid, trigues menys: quan una puja, l\'altra baixa.', 'Si vas más rápido, tardas menos: cuando una sube, la otra baja.') : L('Més quilos, més diners: les dues pugen alhora.', 'Más kilos, más dinero: las dos suben a la vez.') }); }
    const a = ri(2, 5), b0 = ri(2, 4), b = b0 >= a ? b0 + 1 : b0, u = ri(10, 40), S = (a + b) * u;   // b ≠ a: «proporció 4 : 4» no té sentit
    return inp(L(`Es reparteixen <b>${S} €</b> entre dues persones en proporció <b>${a} : ${b}</b>. Quant rep la primera?`, `Se reparten <b>${S} €</b> entre dos personas en proporción <b>${a} : ${b}</b>. ¿Cuánto recibe la primera?`), a * u, { unit: '€', long: true, ex: L(`Hi ha ${a + b} parts: ${S} : ${a + b} = ${u} € cada part. La primera en rep ${a}: ${a * u} €.`, `Hay ${a + b} partes: ${S} : ${a + b} = ${u} € cada parte. La primera recibe ${a}: ${a * u} €.`) });
  },
  'stat2': L_ => {
    const n = L_ === 4 ? 6 : 5 + (L_ % 2 ? 0 : 2); let v = [...Array(n)].map(() => ri(1, 10));
    if (L_ <= 1 || L_ === 5) { let s = v.reduce((a, b) => a + b, 0); while (s % n) { v[0]++; s++; } }
    const sorted = [...v].sort((a, b) => a - b), s = v.reduce((a, b) => a + b, 0);
    if (L_ <= 1) return inp(L('Quina és la <b>mitjana</b>?', '¿Cuál es la <b>media</b>?'), s / n, { vis: listVis(v), ex: `${v.join(' + ')} = ${s}; ${s} : ${n} = ${s / n}.` });
    if (L_ === 2 || L_ === 4) { const med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2; return dinp(L('Quina és la <b>mediana</b>?', '¿Cuál es la <b>mediana</b>?'), med, { vis: listVis(v), ex: L(`Ordenem: ${sorted.join(', ')}. ${n % 2 ? 'El del mig' : 'La mitjana dels dos del mig'}: ${fmtD(med)}.`, `Ordenamos: ${sorted.join(', ')}. ${n % 2 ? 'El del medio' : 'La media de los dos del medio'}: ${fmtD(med)}.`) }); }
    if (L_ === 3) { v[1] = v[3] = v[5] = v[0]; const cnt = {}; v.forEach(x => cnt[x] = (cnt[x] || 0) + 1); const mo = +Object.entries(cnt).sort((a, b) => b[1] - a[1])[0][0]; return inp(L('Quina és la <b>moda</b>?', '¿Cuál es la <b>moda</b>?'), mo, { vis: listVis(v), ex: L(`El valor que més es repeteix és ${mo}.`, `El valor que más se repite es ${mo}.`) }); }
    const m = s / n + ri(1, 3), falta = m * (n + 1) - s;
    return inp(L(`Quin valor hauríem d'afegir perquè la mitjana fos <b>${m}</b>?`, `¿Qué valor deberíamos añadir para que la media fuera <b>${m}</b>?`), falta, { vis: listVis(v), ex: L(`Amb ${n + 1} valors i mitjana ${m}, la suma ha de ser ${m * (n + 1)}. Ara suma ${s}: falta ${falta}.`, `Con ${n + 1} valores y media ${m}, la suma debe ser ${m * (n + 1)}. Ahora suma ${s}: falta ${falta}.`) });
  },
  'prob2': L_ => {
    if (L_ <= 1) { const q = pick([[L('dues cares', 'dos caras'), 1], [L('una cara i una creu (en qualsevol ordre)', 'una cara y una cruz (en cualquier orden)'), 2]]); return mc(L(`Llances dues monedes. Quina probabilitat hi ha de treure <b>${q[0]}</b>?`, `Lanzas dos monedas. ¿Qué probabilidad hay de sacar <b>${q[0]}</b>?`), frac(q[1], 4), [1, 2, 3].filter(x => x !== q[1]).map(x => frac(x, 4)), { big: true, ex: L(`Hi ha 4 casos: CC, CX, XC, XX. N'hi ha ${q[1]} de ${q[1] === 1 ? 'favorable' : 'favorables'}.`, `Hay 4 casos: CC, CX, XC, XX. Hay ${q[1]} ${q[1] === 1 ? 'favorable' : 'favorables'}.`) }); }
    if (L_ === 2) { const s = ri(2, 12), c = 6 - Math.abs(7 - s), ks = new Set(); while (ks.size < 3) { const x = ri(1, 6); if (x !== c) ks.add(x); } return mc(L(`Llances dos daus. Quina probabilitat hi ha que la suma sigui <b>${s}</b>?`, `Lanzas dos dados. ¿Qué probabilidad hay de que la suma sea <b>${s}</b>?`), frac(c, 36), [...ks].map(x => frac(x, 36)), { big: true, ex: L(`Hi ha 36 combinacions i ${c} sumen ${s}.`, `Hay 36 combinaciones y ${c} suman ${s}.`) }); }
    if (L_ === 3) { const k = ri(1, 3); return mc(L(`Llances un dau. Quina probabilitat hi ha de <b>no</b> treure un número més petit o igual que ${k}?`, `Lanzas un dado. ¿Qué probabilidad hay de <b>no</b> sacar un número menor o igual que ${k}?`), frac(6 - k, 6), [frac(k, 6), frac(6 - k + 1, 6), frac(1, 6)].filter(x => x !== frac(6 - k, 6)), { big: true, ex: L(`Succés contrari: 1 − ${k}/6 = ${6 - k}/6.`, `Suceso contrario: 1 − ${k}/6 = ${6 - k}/6.`) }); }
    if (L_ === 4) { const r = ri(2, 4), b = ri(2, 4), T = r + b; return mc(L(`En una bossa hi ha ${r} boles vermelles i ${b} de blaves. En treus dues <b>sense tornar-les</b>. Quina probabilitat hi ha que les dues siguin vermelles?`, `En una bolsa hay ${r} bolas rojas y ${b} azules. Sacas dos <b>sin devolverlas</b>. ¿Qué probabilidad hay de que las dos sean rojas?`), fracS(r * (r - 1), T * (T - 1)), [fracS(r * r, T * T), fracS(r, T), fracS(r - 1, T)].filter(x => x !== fracS(r * (r - 1), T * (T - 1))), { big: true, long: true, ex: `${r}/${T} · ${r - 1}/${T - 1} = ${r * (r - 1)}/${T * (T - 1)}` }); }
    const a = ri(2, 5), b = ri(2, 5), c = ri(2, 4);
    return inp(L(`Un restaurant ofereix ${a} primers, ${b} segons i ${c} postres. Quants menús diferents es poden fer?`, `Un restaurante ofrece ${a} primeros, ${b} segundos y ${c} postres. ¿Cuántos menús distintos se pueden hacer?`), a * b * c, { long: true, ex: L(`Principi de multiplicació: ${a} · ${b} · ${c} = ${a * b * c}.`, `Principio de multiplicación: ${a} · ${b} · ${c} = ${a * b * c}.`) });
  },
  'trig': L_ => {
    const [a, b, c] = pick(TRIP.slice(0, 4));
    const vis = rtSVG(a, b, c, `${a}`, `${b}`, `${c}`, true);
    if (L_ <= 3) {
      const t = L_ <= 1 ? 'sin' : L_ === 2 ? 'cos' : 'tan', ok = t === 'sin' ? fracS(b, c) : t === 'cos' ? fracS(a, c) : fracS(b, a);
      const all = [fracS(b, c), fracS(a, c), fracS(b, a), fracS(a, b)].filter(x => x !== ok);
      return mc(L(`Quant val ${t === 'tan' ? 'la' : 'el'} <b>${t === 'sin' ? 'sinus' : t === 'cos' ? 'cosinus' : 'tangent'}</b> de α?`, `¿Cuánto vale ${t === 'tan' ? 'la' : 'el'} <b>${t === 'sin' ? 'seno' : t === 'cos' ? 'coseno' : 'tangente'}</b> de α?`), ok, all, { vis: `<div class="stack">${vis}</div>`, big: true, ex: t === 'sin' ? L('sin α = catet oposat / hipotenusa.', 'sen α = cateto opuesto / hipotenusa.') : t === 'cos' ? L('cos α = catet contigu / hipotenusa.', 'cos α = cateto contiguo / hipotenusa.') : L('tan α = catet oposat / catet contigu.', 'tan α = cateto opuesto / cateto contiguo.') });
    }
    if (L_ === 4) { const q = pick([['sin 30°', frac(1, 2)], ['cos 60°', frac(1, 2)], ['tan 45°', '1'], ['sin 90°', '1'], ['cos 0°', '1'], ['sin 0°', '0']]); return mc(L(`Quant val <b>${q[0]}</b>?`, `¿Cuánto vale <b>${q[0].replace('sin', 'sen')}</b>?`), q[1], ['0', '1', frac(1, 2), '2'].filter(x => x !== q[1]), { big: true, ex: L(`És un valor que convé saber de memòria: ${q[0]} = ${q[1].replace(/<[^>]+>/g, ' ').trim().replace(/\s+/, '/')}.`, `Es un valor que conviene saber de memoria.`) }); }
    const l = pick([4, 6, 8, 10, 12]);
    return inp(L(`Una escala de <b>${l} m</b> forma un angle de <b>30°</b> amb el terra. A quina altura de la paret arriba? (sin 30° = 0,5)`, `Una escalera de <b>${l} m</b> forma un ángulo de <b>30°</b> con el suelo. ¿A qué altura de la pared llega? (sen 30° = 0,5)`), l / 2, { unit: 'm', long: true, ex: L(`altura = ${l} · sin 30° = ${l} · 0,5 = ${l / 2} m.`, `altura = ${l} · sen 30° = ${l} · 0,5 = ${l / 2} m.`) });
  }
});
