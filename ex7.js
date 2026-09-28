/* ===== ESO (nivells 7-10) · currículum ampliat (Decret 175/2022), bilingüe CA/ES =====
   Problemes amb equacions, estadística i gràfics, gràfiques de funcions, coordenades cartesianes,
   fraccions i decimals, programació, geometria i educació financera.
   Tot va dins d'una funció perquè els noms interns no xoquin amb els dels altres fitxers:
   només s'afegeixen habilitats noves a EX. Els camps «chk» no es mostren: serveixen per al verificador. */
(() => {
  const NB = ' ';
  const pc = v => fmtD(v) + NB + '%';
  const euro = v => (Number.isInteger(v) ? fmt(v) : fmtDf(v, 2)) + NB + '€';
  const cx = (k, v = 'x') => k === 1 ? v : k === -1 ? '−' + v : fmt(k) + v;
  const pm = n => n < 0 ? ` − ${fmt(-n)}` : ` + ${fmt(n)}`;
  const cf = (k, e) => k === 1 ? e : fmt(k) + e;
  const sysH = (a, b) => `<span style="display:inline-block;text-align:left;line-height:1.45">${a}<br>${b}</span>`;
  const T2 = (ca, es) => L(ca, es);
  const B = s => `<b>${s}</b>`;
  const gen = f => { for (let t = 0; t < 500; t++) { const v = f(); if (v) return v; } throw new Error('ex7: plantilla sense solució'); };
  const solv = (k, r, x, v = 'x') => k === 1 ? `${v} = ${fmt(r)}` : `${fmt(k)}${v} = ${fmt(r)} → ${v} = ${fmt(x)}`;

  /* --- Avaluador d'expressions propi (la CSP no permet eval): «2(x + 3) − x²», fraccions en HTML, x i y --- */
  function evalE(src, x, y = 0) {
    const s = String(src).replace(/<span class="frac"><span>([^<]*)<\/span><span>([^<]*)<\/span><\/span>/g, '(($1)/($2))').replace(/<[^>]+>/g, '').replace(/\s+/g, '').replace(/(\d)\.(?=\d{3})/g, '$1');
    let i = 0;
    const expr = () => { let v = term(); while (i < s.length && '+−-'.includes(s[i])) { const o = s[i++], t = term(); v = o === '+' ? v + t : v - t; } return v; };
    const term = () => { let v = fac(); for (;;) { const c = s[i]; if (c === '·' || c === '*') { i++; v *= fac(); } else if (c === ':' || c === '/') { i++; v /= fac(); } else if (c && /[\dxy(]/.test(c)) v *= fac(); else return v; } };
    const fac = () => { let g = 1; while (s[i] === '−' || s[i] === '-') { i++; g = -g; } let v = atom(); while (s[i] === '²' || s[i] === '³') v = v ** (s[i++] === '²' ? 2 : 3); return g * v; };
    const atom = () => { const c = s[i]; if (c === '(') { i++; const v = expr(); i++; return v; } if (c === 'x') { i++; return x; } if (c === 'y') { i++; return y; } const m = s.slice(i).match(/^\d+(,\d+)?/); if (!m) return NaN; i += m[0].length; return parseFloat(m[0].replace(',', '.')); };
    const v = expr(); return i === s.length ? v : NaN;
  }
  const plainE = t => String(t).replace(/<span class="frac"><span>([^<]*)<\/span><span>([^<]*)<\/span><\/span>/g, '(($1)/($2))').replace(/<[^>]+>/g, '');
  const holds = (eq, x, y) => String(eq).split(/<br\s*\/?>/).every(p => { const [a, b] = plainE(p).split('='); return Math.abs(evalE(a, x, y) - evalE(b, x, y)) < 1e-9; });

  /* --- Persones: nom, gènere i articles («la Laia», «d'en Pau», «de l'Arnau») --- */
  const NOM7 = [['Pau', 'm'], ['Laia', 'f'], ['Nil', 'm'], ['Júlia', 'f'], ['Arnau', 'm'], ['Aina', 'f'], ['Jan', 'm'], ['Martina', 'f'], ['Pol', 'm'], ['Ona', 'f'], ['Biel', 'm'], ['Carla', 'f'], ['Iris', 'f'], ['Marc', 'm'], ['Èlia', 'f'], ['Oriol', 'm']];
  function per(...not) {
    let p; do p = pick(NOM7); while (not.some(q => q && q.n === p[0]));
    const [n, g] = p, v = /^[AEIOUÀÈÉÍÒÓÚ]/.test(n), art = v ? "l'" : g === 'm' ? 'en ' : 'la ';
    if (LANG === 'es') return { n, g, c: n, C: n, de: 'de ' + n, a: 'a ' + n, el: g === 'm' ? 'él' : 'ella' };
    return { n, g, c: art + n, C: cap(art) + n, de: v ? "de l'" + n : g === 'm' ? "d'en " + n : 'de la ' + n, a: 'a ' + art + n, el: g === 'm' ? 'ell' : 'ella' };
  }
  const both = (...g) => g.every(x => x === 'f') ? L('totes dues', 'las dos') : L('tots dos', 'los dos');
  const three = (...g) => g.every(x => x === 'f') ? L('totes tres', 'las tres') : L('tots tres', 'los tres');

  /* ================= 1. De l'enunciat a l'equació (alg.word) =================
     Cada plantilla torna: st (enunciat), xd (què és la x), qs (pregunta per resoldre), eq (equació bona),
     dis (equacions errònies), ans, un (unitat), why (com es tradueix) i sol (com es resol). d = dificultat 1-3. */
  const W = { tr: [], age: [], price: [], coin: [], perim: [], sys: [], quad: [] };
  const add = (k, d, f) => W[k].push({ d, f });

  // --- Traducció al llenguatge algebraic (d1: expressions; d2-d3: equacions) ---
  const EXPR = [
    a => [L(`el doble d'un nombre més ${a}`, `el doble de un número más ${a}`), `2x + ${a}`, [`2(x + ${a})`, `x² + ${a}`, `x + ${2 * a}`], L(`Primer es fa el doble (2x) i després se li suma ${a}.`, `Primero se hace el doble (2x) y después se le suma ${a}.`)],
    a => [L(`el doble de la suma d'un nombre i ${a}`, `el doble de la suma de un número y ${a}`), `2(x + ${a})`, [`2x + ${a}`, `x + ${2 * a}`, `(x + ${a})²`], L(`Primer es fa la suma (x + ${a}) i després es multiplica tot per 2: cal el parèntesi.`, `Primero se hace la suma (x + ${a}) y después se multiplica todo por 2: hace falta el paréntesis.`)],
    a => [L(`la meitat d'un nombre menys ${a}`, `la mitad de un número menos ${a}`), `${frac('x', 2)} − ${a}`, [`${frac(`x − ${a}`, 2)}`, `2x − ${a}`, `x − ${frac(a, 2)}`], L(`Primer es fa la meitat del nombre (x/2) i després se li resta ${a}.`, `Primero se hace la mitad del número (x/2) y después se le resta ${a}.`)],
    a => [L(`el triple d'un nombre menys ${a}`, `el triple de un número menos ${a}`), `3x − ${a}`, [`3(x − ${a})`, `${a} − 3x`, `x³ − ${a}`], L(`El triple és 3x (no x³, que és el cub) i després se li resta ${a}.`, `El triple es 3x (no x³, que es el cubo) y después se le resta ${a}.`)],
    a => [L(`${a} menys el doble d'un nombre`, `${a} menos el doble de un número`), `${a} − 2x`, [`2x − ${a}`, `2(${a} − x)`, `${a} − x²`], L(`Comencem pel ${a} i li restem el doble del nombre, 2x. En una resta, l'ordre importa.`, `Empezamos por el ${a} y le restamos el doble del número, 2x. En una resta, el orden importa.`)],
    a => [L(`el quadrat d'un nombre més ${a}`, `el cuadrado de un número más ${a}`), `x² + ${a}`, [`(x + ${a})²`, `2x + ${a}`, `x + ${a}²`], L(`El quadrat del nombre és x² (x · x, no 2x) i després se li suma ${a}.`, `El cuadrado del número es x² (x · x, no 2x) y después se le suma ${a}.`)],
    () => [L('un nombre més el nombre següent', 'un número más el número siguiente'), 'x + (x + 1)', ['x + 1', 'x(x + 1)', '2x'], L('El nombre següent a x és x + 1, i els sumem.', 'El número siguiente a x es x + 1, y los sumamos.')],
    () => [L("el producte d'un nombre pel nombre anterior", 'el producto de un número por el número anterior'), 'x(x − 1)', ['x − 1', 'x + (x − 1)', 'x² − 1'], L('El nombre anterior a x és x − 1, i «producte» vol dir multiplicar.', 'El número anterior a x es x − 1, y «producto» quiere decir multiplicar.')],
    a => [L(`la tercera part d'un nombre més ${a}`, `la tercera parte de un número más ${a}`), `${frac('x', 3)} + ${a}`, [`${frac(`x + ${a}`, 3)}`, `3x + ${a}`, `x + ${frac(a, 3)}`], L(`La tercera part del nombre és x/3 i després se li suma ${a}.`, `La tercera parte del número es x/3 y después se le suma ${a}.`)]
  ];
  add('tr', 1, () => {
    const a = ri(2, 9), [ph, ok, dis, why] = pick(EXPR)(a);
    return { expr: true, ph, eq: ok, dis, why: L(`«${ph}» s'escriu ${ok}. ${why}`, `«${ph}» se escribe ${ok}. ${why}`), chk: { t: 'expr' } };
  });
  add('tr', 2, () => { const x = ri(2, 15), a = ri(2, 12), b = 2 * x + a;
    return { st: L(`Si al doble d'un nombre li sumes ${a}, obtens ${b}.`, `Si al doble de un número le sumas ${a}, obtienes ${b}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'), eq: `2x + ${a} = ${b}`, dis: [`2(x + ${a}) = ${b}`, `x + ${2 * a} = ${b}`, `2x = ${a + b}`], ans: x,
      why: L(`El doble del nombre és 2x i li sumem ${a}: 2x + ${a} = ${b}.`, `El doble del número es 2x y le sumamos ${a}: 2x + ${a} = ${b}.`), sol: `2x = ${b} − ${a} = ${b - a} → x = ${x}.`, chk: { t: 'tr2', x, a, b } }; });
  add('tr', 2, () => { const x = ri(3, 15), a = ri(2, 12), b = 3 * x - a;
    return { st: L(`El triple d'un nombre menys ${a} és igual a ${b}.`, `El triple de un número menos ${a} es igual a ${b}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'), eq: `3x − ${a} = ${b}`, dis: [`3(x − ${a}) = ${b}`, `${a} − 3x = ${b}`, `3x = ${b} − ${a}`], ans: x,
      why: L(`El triple és 3x i li restem ${a}: 3x − ${a} = ${b}.`, `El triple es 3x y le restamos ${a}: 3x − ${a} = ${b}.`), sol: `3x = ${b} + ${a} = ${b + a} → x = ${x}.`, chk: { t: 'tr3', x, a, b } }; });
  add('tr', 2, () => { const x = 2 * ri(2, 12), a = ri(2, 9), b = x / 2 + a;
    return { st: L(`Si a la meitat d'un nombre li sumes ${a}, obtens ${b}.`, `Si a la mitad de un número le sumas ${a}, obtienes ${b}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'), eq: `${frac('x', 2)} + ${a} = ${b}`, dis: [`${frac(`x + ${a}`, 2)} = ${b}`, `2x + ${a} = ${b}`, `x + ${a} = ${frac(b, 2)}`], ans: x,
      why: L(`La meitat del nombre és x/2 i li sumem ${a}.`, `La mitad del número es x/2 y le sumamos ${a}.`), sol: L(`x/2 = ${b} − ${a} = ${b - a} → x = ${b - a} · 2 = ${x}.`, `x/2 = ${b} − ${a} = ${b - a} → x = ${b - a} · 2 = ${x}.`), chk: { t: 'tr4', x, a, b } }; });
  add('tr', 2, () => { const x = ri(5, 40), b = 2 * x + 1;
    return { st: L(`La suma de dos nombres consecutius és ${b}.`, `La suma de dos números consecutivos es ${b}.`), xd: L('el nombre més petit', 'el número más pequeño'), qs: L('Quin és el nombre més petit?', '¿Cuál es el número más pequeño?'), eq: `x + (x + 1) = ${b}`, dis: [`x + x = ${b}`, `x(x + 1) = ${b}`, `x + 1 = ${b}`], ans: x,
      why: L('Si el primer és x, el següent és x + 1.', 'Si el primero es x, el siguiente es x + 1.'), sol: `2x + 1 = ${b} → 2x = ${b - 1} → x = ${x}.`, chk: { t: 'tr5', x, b } }; });
  add('tr', 3, () => { const x = ri(3, 20), k = ri(2, 5), a = ri(1, 8), b = k * (x - a);
    if (b <= 0) return null;
    return { st: L(`Si a un nombre li restes ${a} i multipliques el resultat per ${k}, obtens ${b}.`, `Si a un número le restas ${a} y multiplicas el resultado por ${k}, obtienes ${b}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'), eq: `${k}(x − ${a}) = ${b}`, dis: [`${k}x − ${a} = ${b}`, `x − ${k * a} = ${b}`, `${k}(x + ${a}) = ${b}`], ans: x,
      why: L(`Primer restes (x − ${a}) i després multipliques tot el parèntesi per ${k}.`, `Primero restas (x − ${a}) y después multiplicas todo el paréntesis por ${k}.`), sol: `x − ${a} = ${b} : ${k} = ${b / k} → x = ${x}.`, chk: { t: 'tr6', x, k, a, b } }; });
  add('tr', 3, () => { const x = ri(4, 30), c = ri(1, 12), a = x - c;
    if (a < 1) return null;
    return { st: L(`El doble d'un nombre menys ${a} és igual al mateix nombre més ${c}.`, `El doble de un número menos ${a} es igual al mismo número más ${c}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'), eq: `2x − ${a} = x + ${c}`, dis: [`2(x − ${a}) = x + ${c}`, `2x − ${a} = ${c}`, `x − ${a} = 2x + ${c}`], ans: x,
      why: L(`A l'esquerra, el doble menys ${a}: 2x − ${a}. A la dreta, el nombre més ${c}: x + ${c}.`, `A la izquierda, el doble menos ${a}: 2x − ${a}. A la derecha, el número más ${c}: x + ${c}.`), sol: `2x − x = ${c} + ${a} → x = ${x}.`, chk: { t: 'tr7', x, a, c } }; });
  add('tr', 3, () => { const x = ri(4, 30), b = 3 * x + 3;
    return { st: L(`La suma de tres nombres consecutius és ${b}.`, `La suma de tres números consecutivos es ${b}.`), xd: L('el més petit dels tres', 'el más pequeño de los tres'), qs: L('Quin és el nombre més petit?', '¿Cuál es el número más pequeño?'), eq: `x + (x + 1) + (x + 2) = ${b}`, dis: [`x + x + x = ${b}`, `x + 1 + 2 = ${b}`, `x(x + 1)(x + 2) = ${b}`], ans: x,
      why: L('Tres consecutius: x, x + 1 i x + 2.', 'Tres consecutivos: x, x + 1 y x + 2.'), sol: `3x + 3 = ${b} → 3x = ${b - 3} → x = ${x}.`, chk: { t: 'tr8', x, b } }; });
  add('tr', 3, () => { const x = 2 * ri(3, 20), b = x + x / 2;
    return { st: L(`Si a un nombre li sumes la seva meitat, obtens ${b}.`, `Si a un número le sumas su mitad, obtienes ${b}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'), eq: `x + ${frac('x', 2)} = ${b}`, dis: [`x + 2x = ${b}`, `${frac('x', 2)} = ${b}`, `x + ${frac(1, 2)} = ${b}`], ans: x,
      why: L('El nombre és x i la seva meitat, x/2.', 'El número es x y su mitad, x/2.'), sol: L(`Multipliquem per 2: 2x + x = ${2 * b} → 3x = ${2 * b} → x = ${x}.`, `Multiplicamos por 2: 2x + x = ${2 * b} → 3x = ${2 * b} → x = ${x}.`), chk: { t: 'tr9', x, b } }; });

  // --- Edats ---
  const KW = { 2: ["el doble d'", 'el doble de'], 3: ["el triple d'", 'el triple de'], 4: ["el quàdruple d'", 'el cuádruple de'] };
  add('age', 1, () => {
    const P = per(), k = ri(2, 4), x = ri(6, 16), mom = Math.random() < .5, S = x + k * x;
    if (k * x < 26 || k * x > 56) return null;
    const pa = mom ? L('mare', 'madre') : L('pare', 'padre'), g2 = mom ? 'f' : 'm';
    return { st: L(`${cap(mom ? 'la' : 'el')} ${pa} ${P.de} té ${KW[k][0]}anys que ${P.el}. Entre ${both(P.g, g2)} sumen ${S} anys.`, `${mom ? 'La' : 'El'} ${pa} ${P.de} tiene ${KW[k][1]} años que ${P.el}. Entre ${both(P.g, g2)} suman ${S} años.`),
      xd: L(`l'edat ${P.de}`, `la edad ${P.de}`), qs: L(`Quants anys té ${P.c}?`, `¿Cuántos años tiene ${P.c}?`), eq: `x + ${k}x = ${S}`, dis: [`${k}x = ${S}`, `x + (x + ${k}) = ${S}`, `x + ${k} = ${S}`], ans: x,
      why: L(`Si ${P.c} té x anys, ${mom ? 'la' : 'el'} ${pa} en té ${k}x. Entre ${both(P.g, mom ? 'f' : 'm')}: x + ${k}x = ${S}.`, `Si ${P.c} tiene x años, ${mom ? 'la' : 'el'} ${pa} tiene ${k}x. Entre ${both(P.g, mom ? 'f' : 'm')}: x + ${k}x = ${S}.`), sol: `${k + 1}x = ${S} → x = ${S} : ${k + 1} = ${x}.`, chk: { t: 'age1', x, k, S } };
  });
  add('age', 1, () => {
    const P = per(), Q = per(P), d = ri(2, 8), x = ri(4, 15), S = 2 * x + d;
    const sib = Q.g === 'm' ? L('el seu germà', 'su hermano') : L('la seva germana', 'su hermana');
    return { st: L(`${P.C} té ${d} anys més que ${sib} ${Q.n}. Entre ${both(P.g, Q.g)} sumen ${S} anys.`, `${P.C} tiene ${d} años más que ${sib} ${Q.n}. Entre ${both(P.g, Q.g)} suman ${S} años.`),
      xd: L(`l'edat ${Q.de}`, `la edad ${Q.de}`), qs: L(`Quants anys té ${Q.c}?`, `¿Cuántos años tiene ${Q.c}?`), eq: `x + (x + ${d}) = ${S}`, dis: [`x + ${d} = ${S}`, `x + ${d}x = ${S}`, `2x = ${S + d}`], ans: x,
      why: L(`Si ${Q.c} té x anys, ${P.c} en té x + ${d}.`, `Si ${Q.c} tiene x años, ${P.c} tiene x + ${d}.`), sol: `2x + ${d} = ${S} → 2x = ${S - d} → x = ${x}.`, chk: { t: 'age2', x, d, S } };
  });
  add('age', 2, () => {
    const P = per(), Q = per(P), R = per(P, Q), d = ri(1, 6), x = ri(3, 10), S = 5 * x + d;
    return { st: L(`${P.C} té el doble d'anys que ${Q.c}, i ${R.c} té ${d} ${d === 1 ? 'any' : 'anys'} més que ${P.c}. Entre ${three(P.g, Q.g, R.g)} sumen ${S} anys.`, `${P.C} tiene el doble de años que ${Q.c}, y ${R.c} tiene ${d} ${d === 1 ? 'año' : 'años'} más que ${P.c}. Entre ${three(P.g, Q.g, R.g)} suman ${S} años.`),
      xd: L(`l'edat ${Q.de}`, `la edad ${Q.de}`), qs: L(`Quants anys té ${Q.c}?`, `¿Cuántos años tiene ${Q.c}?`), eq: `x + 2x + (2x + ${d}) = ${S}`, dis: [`x + 2x + ${d} = ${S}`, `x + 2x + (x + ${d}) = ${S}`, `2x + (2x + ${d}) = ${S}`], ans: x,
      why: L(`${Q.C}: x. ${P.C}: 2x. ${R.C}: 2x + ${d}.`, `${Q.C}: x. ${P.C}: 2x. ${R.C}: 2x + ${d}.`), sol: `5x + ${d} = ${S} → 5x = ${S - d} → x = ${x}.`, chk: { t: 'age3', x, d, S } };
  });
  add('age', 2, () => {
    const c = ri(2, 14), k = ri(2, 3), x = ri(1, 12), F = k * (c + x) - x, dad = Math.random() < .5, son = Math.random() < .5;
    if (F < 26 || F > 58 || F - c < 20) return null;
    const pa = dad ? L('el pare', 'el padre') : L('la mare', 'la madre'), fi = son ? L('el seu fill', 'su hijo') : L('la seva filla', 'su hija'), dfi = son ? L('del fill', 'del hijo') : L('de la filla', 'de la hija');
    return { st: L(`${dad ? 'Un pare' : 'Una mare'} té ${F} anys i ${fi}, ${c}. D'aquí a uns anys, ${pa} tindrà ${KW[k][0]}edat ${dfi}.`.replace("d'edat", "de l'edat"), `${dad ? 'Un padre' : 'Una madre'} tiene ${F} años y ${fi}, ${c}. Dentro de unos años, ${pa} tendrá ${KW[k][1]} la edad ${dfi}.`),
      xd: L("el nombre d'anys que han de passar", 'el número de años que tienen que pasar'), qs: L("D'aquí a quants anys passarà?", '¿Dentro de cuántos años pasará?'), eq: `${F} + x = ${k}(${c} + x)`, dis: [`${F} + x = ${k * c} + x`, `${F} = ${k}(${c} + x)`, `${F} + x = ${k}(${c} − x)`], ans: x,
      why: L(`D'aquí a x anys, ${pa} en tindrà ${F} + x i ${son ? 'el fill' : 'la filla'}, ${c} + x.`, `Dentro de x años, ${pa} tendrá ${F} + x y ${son ? 'el hijo' : 'la hija'}, ${c} + x.`), sol: `${F} + x = ${k * c} + ${k}x → ${solv(k - 1, F - k * c, x)}.`, chk: { t: 'age4', x, k, c, F } };
  });
  add('age', 3, () => {
    const f = ri(8, 18), k = ri(2, 4), x = ri(1, f - 3), M = k * (f - x) + x, dad = Math.random() < .5, son = Math.random() < .5;
    if (M < 28 || M > 60 || M - f < 20) return null;
    const pa = dad ? L('el pare', 'el padre') : L('la mare', 'la madre'), fi = son ? L('el seu fill', 'su hijo') : L('la seva filla', 'su hija'), dfi = son ? L('del fill', 'del hijo') : L('de la filla', 'de la hija');
    return { st: L(`${dad ? 'Un pare' : 'Una mare'} té ${M} anys i ${fi}, ${f}. Fa uns anys, ${pa} tenia ${KW[k][0]}edat ${dfi}.`.replace("d'edat", "de l'edat"), `${dad ? 'Un padre' : 'Una madre'} tiene ${M} años y ${fi}, ${f}. Hace unos años, ${pa} tenía ${KW[k][1]} la edad ${dfi}.`),
      xd: L("el nombre d'anys que fa d'això", 'el número de años que hace de eso'), qs: L("Quants anys fa d'això?", '¿Cuántos años hace de eso?'), eq: `${M} − x = ${k}(${f} − x)`, dis: [`${M} − x = ${k}(${f} + x)`, `${M} + x = ${k}(${f} − x)`, `${M} − x = ${k * f} − x`], ans: x,
      why: L(`Fa x anys, ${pa} tenia ${M} − x anys i ${son ? 'el fill' : 'la filla'}, ${f} − x.`, `Hace x años, ${pa} tenía ${M} − x años y ${son ? 'el hijo' : 'la hija'}, ${f} − x.`), sol: `${M} − x = ${k * f} − ${k}x → ${k}x − x = ${k * f} − ${M} → ${solv(k - 1, k * f - M, x)}.`, chk: { t: 'age5', x, k, f, M } };
  });
  add('age', 3, () => {
    const x = ri(2, 10), n = ri(1, 10), g = 2 * x + n, S = x + g;
    return { st: L(`Les edats de dos germans sumen ${S} anys. D'aquí a ${n} ${n === 1 ? 'any' : 'anys'}, el gran tindrà el doble d'anys que el petit.`, `Las edades de dos hermanos suman ${S} años. Dentro de ${n} ${n === 1 ? 'año' : 'años'}, el mayor tendrá el doble de años que el pequeño.`),
      xd: L("l'edat del germà petit", 'la edad del hermano pequeño'), qs: L('Quants anys té el germà petit?', '¿Cuántos años tiene el hermano pequeño?'), eq: `${S} − x + ${n} = 2(x + ${n})`, dis: [`${S} − x = 2x`, `${S} + x + ${n} = 2(x + ${n})`, `${S} − x + ${n} = 2x + ${n}`], ans: x,
      why: L(`Si el petit té x anys, el gran en té ${S} − x. D'aquí a ${n}: ${S} − x + ${n} i x + ${n}.`, `Si el pequeño tiene x años, el mayor tiene ${S} − x. Dentro de ${n}: ${S} − x + ${n} y x + ${n}.`), sol: `${S + n} − x = 2x + ${2 * n} → ${S - n} = 3x → x = ${x}.`, chk: { t: 'age6', x, n, S } };
  });

  // --- Preus ---
  const ITM = [['llibretes', 'una llibreta', 'cuadernos', 'un cuaderno'], ['entrades', 'una entrada', 'entradas', 'una entrada'], ['samarretes', 'una samarreta', 'camisetas', 'una camiseta'], ['gelats', 'un gelat', 'helados', 'un helado'], ['llibres', 'un llibre', 'libros', 'un libro']];
  const XTR = [['un bolígraf', 'un bolígrafo'], ['una bossa', 'una bolsa'], ['un estoig', 'un estuche']];
  add('price', 1, () => {
    const P = per(), it = pick(ITM), xt = pick(XTR), k = ri(2, 6), x = ri(2, 12), b = ri(1, 6), T = k * x + b;
    return { st: L(`${P.C} compra ${k} ${it[0]} iguals i ${xt[0]} de ${b} €. En total paga ${T} €.`, `${P.C} compra ${k} ${it[2]} iguales y ${xt[1]} de ${b} €. En total paga ${T} €.`),
      xd: L(`el preu d'${it[1]}`, `el precio de ${it[3]}`), qs: L(`Quant costa ${it[1]}?`, `¿Cuánto cuesta ${it[3]}?`), eq: `${k}x + ${b} = ${T}`, dis: [`${k}(x + ${b}) = ${T}`, `${k}x = ${T} + ${b}`, `x + ${b} = ${T}`], ans: x, un: '€',
      why: L(`${k} ${it[0]} costen ${k}x, i hi sumem ${b} €.`, `${k} ${it[2]} cuestan ${k}x, y sumamos ${b} €.`), sol: `${k}x = ${T} − ${b} = ${T - b} → x = ${T - b} : ${k} = ${x} €.`, chk: { t: 'pr1', x, k, b, T } };
  });
  add('price', 2, () => {
    const pr = pick([
      [L('Una samarreta', 'Una camiseta'), L('un parell de mitjons', 'un par de calcetines'), L('samarretes', 'camisetas'), L('parells de mitjons', 'pares de calcetines'), L("el preu d'un parell de mitjons", 'el precio de un par de calcetines'), L('Quant costa un parell de mitjons?', '¿Cuánto cuesta un par de calcetines?')],
      [L('Un llibre', 'Un libro'), L('una llibreta', 'un cuaderno'), L('llibres', 'libros'), L('llibretes', 'cuadernos'), L("el preu d'una llibreta", 'el precio de un cuaderno'), L('Quant costa una llibreta?', '¿Cuánto cuesta un cuaderno?')],
      [L("Una entrada d'adult", 'Una entrada de adulto'), L('una entrada infantil', 'una entrada infantil'), L("entrades d'adult", 'entradas de adulto'), L('entrades infantils', 'entradas infantiles'), L("el preu d'una entrada infantil", 'el precio de una entrada infantil'), L('Quant costa una entrada infantil?', '¿Cuánto cuesta una entrada infantil?')]]);
    const x = ri(3, 15), d = ri(2, 10), a = ri(2, 4), b = ri(2, 5), T = a * (x + d) + b * x;
    return { st: L(`${pr[0]} costa ${d} € més que ${pr[1]}. Per ${a} ${pr[2]} i ${b} ${pr[3]} es paguen ${T} €.`, `${pr[0]} cuesta ${d} € más que ${pr[1]}. Por ${a} ${pr[2]} y ${b} ${pr[3]} se pagan ${T} €.`),
      xd: pr[4], qs: pr[5], eq: `${a}(x + ${d}) + ${b}x = ${T}`, dis: [`${a}x + ${d} + ${b}x = ${T}`, `${a}(x + ${d}) = ${T}`, `${a + b}x = ${T}`], ans: x, un: '€',
      why: L(`Si l'article barat costa x, l'altre costa x + ${d}.`, `Si el artículo barato cuesta x, el otro cuesta x + ${d}.`), sol: `${a}x + ${a * d} + ${b}x = ${T} → ${a + b}x = ${T - a * d} → x = ${x} €.`, chk: { t: 'pr2', x, d, a, b, T } };
  });
  add('price', 2, () => {
    const a = ri(1, 5), b = ri(1, 5), x = ri(1, 5), T = 2 * a * x + b * x;
    if (a === b) return null;
    return { st: L(`Un entrepà costa el doble que un suc. Per ${a} ${a === 1 ? 'entrepà' : 'entrepans'} i ${b} ${b === 1 ? 'suc' : 'sucs'} es paguen ${T} €.`, `Un bocadillo cuesta el doble que un zumo. Por ${a} ${a === 1 ? 'bocadillo' : 'bocadillos'} y ${b} ${b === 1 ? 'zumo' : 'zumos'} se pagan ${T} €.`),
      xd: L("el preu d'un suc", 'el precio de un zumo'), qs: L('Quant costa un suc?', '¿Cuánto cuesta un zumo?'), eq: `${cf(a, '')}${a === 1 ? '' : ' · '}2x + ${cx(b)} = ${T}`, dis: [`${cx(a)} + ${cf(b, '')}${b === 1 ? '' : ' · '}2x = ${T}`, `2(${a} + ${b})x = ${T}`, `${cx(a)} + ${cx(b)} = ${T}`], ans: x, un: '€',
      why: L('Si el suc costa x, l\'entrepà costa 2x.', 'Si el zumo cuesta x, el bocadillo cuesta 2x.'), sol: `${cx(2 * a)} + ${cx(b)} = ${T} → ${2 * a + b}x = ${T} → x = ${x} €.`, chk: { t: 'pr3', x, a, b, T } };
  });
  add('price', 2, () => {
    const P = per(), Q = per(P), R = per(P, Q), x = ri(5, 25), d = ri(2, 9), T = 4 * x + d;
    return { st: L(`${P.C}, ${Q.c} i ${R.c} paguen un sopar de ${T} €. ${Q.C} paga el doble que ${P.c}, i ${R.c}, ${d} € més que ${P.c}.`, `${P.C}, ${Q.c} y ${R.c} pagan una cena de ${T} €. ${Q.C} paga el doble que ${P.c}, y ${R.c}, ${d} € más que ${P.c}.`),
      xd: L(`el que paga ${P.c}`, `lo que paga ${P.c}`), qs: L(`Quant paga ${P.c}?`, `¿Cuánto paga ${P.c}?`), eq: `x + 2x + (x + ${d}) = ${T}`, dis: [`x + 2x + ${d} = ${T}`, `x + 2(x + ${d}) = ${T}`, `2x + (x + ${d}) = ${T}`], ans: x, un: '€',
      why: L(`${P.C}: x. ${Q.C}: 2x. ${R.C}: x + ${d}.`, `${P.C}: x. ${Q.C}: 2x. ${R.C}: x + ${d}.`), sol: `4x + ${d} = ${T} → 4x = ${T - d} → x = ${x} €.`, chk: { t: 'pr4', x, d, T } };
  });
  add('price', 3, () => {
    const x = ri(2, 8), a = ri(3, 6), b = a + ri(1, 3), m = (b - a) * x;
    if (m < 2) return null;
    const r = ri(1, m - 1), f = m - r;
    return { st: L(`Amb els diners que porto, si compro ${a} pastissos em sobren ${r} €, però si en vull comprar ${b} em falten ${f} €.`, `Con el dinero que llevo, si compro ${a} pasteles me sobran ${r} €, pero si quiero comprar ${b} me faltan ${f} €.`),
      xd: L("el preu d'un pastís", 'el precio de un pastel'), qs: L('Quant costa cada pastís?', '¿Cuánto cuesta cada pastel?'), eq: `${a}x + ${r} = ${b}x − ${f}`, dis: [`${a}x − ${r} = ${b}x + ${f}`, `${a}x + ${r} = ${b}x + ${f}`, `${a + b}x = ${r + f}`], ans: x, un: '€',
      why: L(`Els diners que porto es poden escriure de dues maneres: ${a}x + ${r} i ${b}x − ${f}.`, `El dinero que llevo se puede escribir de dos maneras: ${a}x + ${r} y ${b}x − ${f}.`), sol: `${b}x − ${a}x = ${r} + ${f} → ${solv(b - a, r + f, x)} €.`, chk: { t: 'pr5', x, a, b, r, f } };
  });

  // --- Monedes, entrades i punts (una incògnita) ---
  const DEN = [
    { a: 2, b: 1, c: false, w: 'm', ca: ['2 €', '1 €'], es: ['2 €', '1 €'] }, { a: 20, b: 10, c: false, w: 'b', ca: ['20 €', '10 €'], es: ['20 €', '10 €'] },
    { a: 10, b: 5, c: false, w: 'b', ca: ['10 €', '5 €'], es: ['10 €', '5 €'] }, { a: 50, b: 20, c: true, w: 'm', ca: ['50 cèntims', '20 cèntims'], es: ['50 céntimos', '20 céntimos'] },
    { a: 50, b: 10, c: true, w: 'm', ca: ['50 cèntims', '10 cèntims'], es: ['50 céntimos', '10 céntimos'] }, { a: 20, b: 5, c: true, w: 'm', ca: ['20 cèntims', '5 cèntims'], es: ['20 céntimos', '5 céntimos'] }];
  const deCa = s => /^1 /.test(s) ? "d'" + s : 'de ' + s;
  add('coin', 1, () => {
    const D = pick(DEN), n = ri(8, 20), x = ri(1, n - 1), askA = Math.random() < .5, T = D.a * x + D.b * (n - x);
    if (2 * x === n) return null;
    const mo = D.w === 'm', tot = D.c ? euro(T / 100) : euro(T), wd = mo ? L('monedes', 'monedas') : L('bitllets', 'billetes');
    const nm = i => L(`${mo ? 'monedes' : 'bitllets'} ${deCa(D.ca[i])}`, `${mo ? 'monedas' : 'billetes'} de ${D.es[i]}`);
    return { st: L(`En una guardiola hi ha ${n} ${wd}, ${mo ? 'unes' : 'uns'} ${deCa(D.ca[0])} i ${mo ? 'les altres' : 'els altres'} ${deCa(D.ca[1])}. En total hi ha ${tot}.`, `En una hucha hay ${n} ${wd}, ${mo ? 'unas' : 'unos'} de ${D.es[0]} y ${mo ? 'las otras' : 'los otros'} de ${D.es[1]}. En total hay ${tot}.`),
      xd: L(`el nombre de ${nm(0)}`, `el número de ${nm(0)}`) + (D.c ? L(' (i treballes en cèntims)', ' (y trabajas en céntimos)') : ''), qs: mo ? L(`Quantes ${nm(askA ? 0 : 1)} hi ha?`, `¿Cuántas ${nm(askA ? 0 : 1)} hay?`) : L(`Quants ${nm(askA ? 0 : 1)} hi ha?`, `¿Cuántos ${nm(askA ? 0 : 1)} hay?`),
      eq: `${cx(D.a)} + ${cf(D.b, `(${n} − x)`)} = ${T}`, dis: [`${cx(D.a)} + ${cx(D.b)} = ${T}`, `${cx(D.b)} + ${cf(D.a, `(${n} − x)`)} = ${T}`, `${cx(D.a)} + ${D.b * n} = ${T}`], ans: askA ? x : n - x,
      why: L(`Si n'hi ha x ${deCa(D.ca[0])}, ${mo ? 'les altres' : 'els altres'} són ${n} − x.${D.c ? ` Passem a cèntims: ${tot} = ${T} cèntims.` : ''}`, `Si hay x de ${D.es[0]}, ${mo ? 'las otras' : 'los otros'} son ${n} − x.${D.c ? ` Pasamos a céntimos: ${tot} = ${T} céntimos.` : ''}`),
      sol: `${cx(D.a)} + ${D.b * n} − ${cx(D.b)} = ${T} → ${solv(D.a - D.b, T - D.b * n, x)}. ` + L(`N'hi ha ${x} ${deCa(D.ca[0])} i ${n - x} ${deCa(D.ca[1])}.`, `Hay ${x} de ${D.es[0]} y ${n - x} de ${D.es[1]}.`), chk: { t: 'coin1', x, n, a: D.a, b: D.b, T, askA } };
  });
  add('coin', 2, () => {
    const a = ri(7, 12), b = ri(4, a - 1), n = ri(5, 14), x = ri(1, n - 1), T = a * x + b * (n - x), askA = Math.random() < .5;
    if (2 * x === n) return null;
    return { st: L(`Un grup de ${n} persones va al cinema. L'entrada d'adult costa ${a} € i la infantil, ${b} €. En total han pagat ${T} €.`, `Un grupo de ${n} personas va al cine. La entrada de adulto cuesta ${a} € y la infantil, ${b} €. En total han pagado ${T} €.`),
      xd: L("el nombre d'adults", 'el número de adultos'), qs: askA ? L('Quants adults hi ha al grup?', '¿Cuántos adultos hay en el grupo?') : L('Quants nens i nenes hi ha al grup?', '¿Cuántos niños y niñas hay en el grupo?'),
      eq: `${cx(a)} + ${b}(${n} − x) = ${T}`, dis: [`${cx(a)} + ${cx(b)} = ${T}`, `${cx(b)} + ${a}(${n} − x) = ${T}`, `${cx(a)} + ${b * n} = ${T}`], ans: askA ? x : n - x,
      why: L(`Si hi ha x adults, hi ha ${n} − x nens i nenes.`, `Si hay x adultos, hay ${n} − x niños y niñas.`), sol: `${cx(a)} + ${b * n} − ${cx(b)} = ${T} → ${solv(a - b, T - b * n, x)}. ` + L(`Hi ha ${x} adults i ${n - x} nens i nenes.`, `Hay ${x} adultos y ${n - x} niños y niñas.`), chk: { t: 'coin2', x, n, a, b, T, askA } };
  });
  add('coin', 3, () => {
    const P = per(), n = pick([10, 20, 25, 30]), a = ri(2, 5), b = ri(1, 2), x = ri(Math.ceil(n / 2), n - 1), T = a * x - b * (n - x);
    if (T < 1) return null;
    return { st: L(`Una prova té ${n} preguntes. Cada encert suma ${a} punts i cada error en resta ${b}. ${P.C} ha contestat totes les preguntes i ha tret ${T} punts.`, `Una prueba tiene ${n} preguntas. Cada acierto suma ${a} puntos y cada error resta ${b}. ${P.C} ha contestado todas las preguntas y ha sacado ${T} puntos.`),
      xd: L("el nombre d'encerts", 'el número de aciertos'), qs: L(`Quantes preguntes ha encertat ${P.c}?`, `¿Cuántas preguntas ha acertado ${P.c}?`), eq: `${cx(a)} − ${cf(b, `(${n} − x)`)} = ${T}`, dis: [`${cx(a)} − ${cx(b)} = ${T}`, `${cx(a)} + ${cf(b, `(${n} − x)`)} = ${T}`, `${cx(a)} − ${b} = ${T}`], ans: x,
      why: L(`Si encerta x preguntes, en falla ${n} − x.`, `Si acierta x preguntas, falla ${n} − x.`), sol: `${cx(a)} − ${b * n} + ${cx(b)} = ${T} → ${solv(a + b, T + b * n, x)}.`, chk: { t: 'coin3', x, n, a, b, T } };
  });

  // --- Perímetres i angles ---
  add('perim', 1, () => {
    const x = ri(2, 20), d = ri(1, 10), P = 4 * x + 2 * d;
    return { st: L(`Un rectangle fa ${d} cm més de llarg que d'ample, i el seu perímetre fa ${P} cm.`, `Un rectángulo mide ${d} cm más de largo que de ancho, y su perímetro mide ${P} cm.`),
      xd: L("l'amplada del rectangle", 'la anchura del rectángulo'), qs: L("Quina és l'amplada del rectangle?", '¿Cuál es la anchura del rectángulo?'), eq: `2x + 2(x + ${d}) = ${P}`, dis: [`x + (x + ${d}) = ${P}`, `2x + (x + ${d}) = ${P}`, `4x + ${d} = ${P}`], ans: x, un: 'cm',
      why: L(`L'ample és x i el llarg, x + ${d}. El perímetre suma els quatre costats: 2x + 2(x + ${d}).`, `El ancho es x y el largo, x + ${d}. El perímetro suma los cuatro lados: 2x + 2(x + ${d}).`), sol: `4x + ${2 * d} = ${P} → 4x = ${P - 2 * d} → x = ${x} cm.`, chk: { t: 'pe1', x, d, P } };
  });
  add('perim', 1, () => {
    const x = ri(2, 15), k = ri(2, 3), P = (2 + 2 * k) * x;
    return { st: L(`El llarg d'un rectangle és ${KW[k][0]}ample, i el perímetre fa ${P} cm.`.replace("d'ample", "de l'ample"), `El largo de un rectángulo es ${KW[k][1]}l ancho, y el perímetro mide ${P} cm.`),
      xd: L("l'amplada del rectangle", 'la anchura del rectángulo'), qs: L("Quina és l'amplada del rectangle?", '¿Cuál es la anchura del rectángulo?'), eq: `2x + 2 · ${k}x = ${P}`, dis: [`x + ${k}x = ${P}`, `2x + ${k}x = ${P}`, `2(x + ${k}) = ${P}`], ans: x, un: 'cm',
      why: L(`L'ample és x i el llarg, ${k}x. El perímetre: 2x + 2 · ${k}x.`, `El ancho es x y el largo, ${k}x. El perímetro: 2x + 2 · ${k}x.`), sol: `${2 + 2 * k}x = ${P} → x = ${x} cm.`, chk: { t: 'pe2', x, k, P } };
  });
  add('perim', 2, () => {
    const x = ri(2, 20), d = ri(1, 9), P = 3 * x + 2 * d;
    return { st: L(`Un triangle isòsceles té els dos costats iguals ${d} cm més llargs que la base. El perímetre fa ${P} cm.`, `Un triángulo isósceles tiene los dos lados iguales ${d} cm más largos que la base. El perímetro mide ${P} cm.`),
      xd: L('la longitud de la base', 'la longitud de la base'), qs: L('Quant fa la base?', '¿Cuánto mide la base?'), eq: `x + 2(x + ${d}) = ${P}`, dis: [`2x + (x + ${d}) = ${P}`, `x + (x + ${d}) = ${P}`, `3x + ${d} = ${P}`], ans: x, un: 'cm',
      why: L(`La base és x i cada costat igual fa x + ${d}.`, `La base es x y cada lado igual mide x + ${d}.`), sol: `3x + ${2 * d} = ${P} → 3x = ${P - 2 * d} → x = ${x} cm.`, chk: { t: 'pe3', x, d, P } };
  });
  add('perim', 2, () => {
    const d = ri(1, 9), x = 3 * d;
    return { st: L(`Un quadrat i un triangle equilàter tenen el mateix perímetre. Cada costat del triangle fa ${d} cm més que el costat del quadrat.`, `Un cuadrado y un triángulo equilátero tienen el mismo perímetro. Cada lado del triángulo mide ${d} cm más que el lado del cuadrado.`),
      xd: L('el costat del quadrat', 'el lado del cuadrado'), qs: L('Quant fa el costat del quadrat?', '¿Cuánto mide el lado del cuadrado?'), eq: `4x = 3(x + ${d})`, dis: [`4x = 3x + ${d}`, `4(x + ${d}) = 3x`, `4x + 3x = ${d}`], ans: x, un: 'cm',
      why: L(`Perímetre del quadrat: 4x. Perímetre del triangle: 3(x + ${d}).`, `Perímetro del cuadrado: 4x. Perímetro del triángulo: 3(x + ${d}).`), sol: `4x = 3x + ${3 * d} → x = ${x} cm.`, chk: { t: 'pe4', x, d } };
  });
  add('perim', 3, () => {
    const x = ri(15, 40), d = 180 - 4 * x;
    return { st: L(`En un triangle, un angle fa el doble que el més petit, i el tercer fa ${d}° més que el més petit.`, `En un triángulo, un ángulo mide el doble que el más pequeño, y el tercero mide ${d}° más que el más pequeño.`),
      xd: L("l'angle més petit", 'el ángulo más pequeño'), qs: L("Quant fa l'angle més petit?", '¿Cuánto mide el ángulo más pequeño?'), eq: `x + 2x + (x + ${d}) = 180`, dis: [`x + 2x + ${d} = 180`, `x + 2x + (x + ${d}) = 360`, `2x + (x + ${d}) = 180`], ans: x, un: '°',
      why: L(`Els tres angles d'un triangle sumen 180°: x, 2x i x + ${d}.`, `Los tres ángulos de un triángulo suman 180°: x, 2x y x + ${d}.`), sol: `4x + ${d} = 180 → 4x = ${180 - d} → x = ${x}°.`, chk: { t: 'pe5', x, d } };
  });
  add('perim', 3, () => {
    const d = ri(1, 6), x = 5 * d;
    return { st: L(`Un pentàgon regular i un quadrat tenen el mateix perímetre. El costat del pentàgon fa ${d} cm menys que el del quadrat.`, `Un pentágono regular y un cuadrado tienen el mismo perímetro. El lado del pentágono mide ${d} cm menos que el del cuadrado.`),
      xd: L('el costat del quadrat', 'el lado del cuadrado'), qs: L('Quant fa el costat del quadrat?', '¿Cuánto mide el lado del cuadrado?'), eq: `5(x − ${d}) = 4x`, dis: [`5x − ${d} = 4x`, `5x = 4(x − ${d})`, `5(x + ${d}) = 4x`], ans: x, un: 'cm',
      why: L(`El quadrat té perímetre 4x i el pentàgon, 5(x − ${d}).`, `El cuadrado tiene perímetro 4x y el pentágono, 5(x − ${d}).`), sol: `5x − ${5 * d} = 4x → x = ${x} cm.`, chk: { t: 'pe6', x, d } };
  });

  // --- Sistemes (dues incògnites) ---
  add('sys', 1, () => {
    const farm = Math.random() < .5, x = ri(2, 20), y = ri(2, 20), H = x + y;
    if (x === y) return null;
    if (farm) { const Lg = 2 * x + 4 * y;
      return { st: L(`En una granja hi ha gallines i conills. En total es compten ${H} caps i ${Lg} potes.`, `En una granja hay gallinas y conejos. En total se cuentan ${H} cabezas y ${Lg} patas.`), xd: L('<b>x</b> és el nombre de gallines i <b>y</b>, el de conills', '<b>x</b> es el número de gallinas e <b>y</b>, el de conejos'),
        qs: L('Quants conills hi ha?', '¿Cuántos conejos hay?'), eq: sysH(`x + y = ${H}`, `2x + 4y = ${Lg}`), dis: [sysH(`x + y = ${Lg}`, `2x + 4y = ${H}`), sysH(`x + y = ${H}`, `4x + 2y = ${Lg}`), sysH(`x + y = ${H}`, `x + 4y = ${Lg}`)], ans: y,
        why: L(`Cada animal té un cap: x + y = ${H}. Les gallines tenen 2 potes i els conills 4: 2x + 4y = ${Lg}.`, `Cada animal tiene una cabeza: x + y = ${H}. Las gallinas tienen 2 patas y los conejos 4: 2x + 4y = ${Lg}.`),
        sol: L(`Substituïm x = ${H} − y: 2(${H} − y) + 4y = ${Lg} → 2y = ${Lg - 2 * H} → y = ${y} conills (i ${x} gallines).`, `Sustituimos x = ${H} − y: 2(${H} − y) + 4y = ${Lg} → 2y = ${Lg - 2 * H} → y = ${y} conejos (y ${x} gallinas).`), sys: true, chk: { t: 'sy1', x, y, e: [[1, 1, H], [2, 4, Lg]] } }; }
    const R = 4 * x + 2 * y;
    return { st: L(`En un aparcament hi ha cotxes i motos. En total hi ha ${H} vehicles i ${R} rodes.`, `En un aparcamiento hay coches y motos. En total hay ${H} vehículos y ${R} ruedas.`), xd: L('<b>x</b> és el nombre de cotxes i <b>y</b>, el de motos', '<b>x</b> es el número de coches e <b>y</b>, el de motos'),
      qs: L('Quants cotxes hi ha?', '¿Cuántos coches hay?'), eq: sysH(`x + y = ${H}`, `4x + 2y = ${R}`), dis: [sysH(`x + y = ${R}`, `4x + 2y = ${H}`), sysH(`x + y = ${H}`, `2x + 4y = ${R}`), sysH(`x + y = ${H}`, `4x + y = ${R}`)], ans: x,
      why: L(`Vehicles: x + y = ${H}. Rodes: cada cotxe en té 4 i cada moto 2, 4x + 2y = ${R}.`, `Vehículos: x + y = ${H}. Ruedas: cada coche tiene 4 y cada moto 2, 4x + 2y = ${R}.`),
      sol: L(`Substituïm y = ${H} − x: 4x + 2(${H} − x) = ${R} → 2x = ${R - 2 * H} → x = ${x} cotxes (i ${y} motos).`, `Sustituimos y = ${H} − x: 4x + 2(${H} − x) = ${R} → 2x = ${R - 2 * H} → x = ${x} coches (y ${y} motos).`), sys: true, chk: { t: 'sy2', x, y, e: [[1, 1, H], [4, 2, R]] } };
  });
  add('sys', 1, () => {
    const y = ri(1, 30), D = ri(1, 20), x = y + D, S = x + y, big = Math.random() < .5;
    return { st: L(`Dos nombres sumen ${S} i la seva diferència és ${D}.`, `Dos números suman ${S} y su diferencia es ${D}.`), xd: L('<b>x</b> és el nombre gran i <b>y</b>, el petit', '<b>x</b> es el número grande e <b>y</b>, el pequeño'),
      qs: big ? L('Quin és el nombre gran?', '¿Cuál es el número grande?') : L('Quin és el nombre petit?', '¿Cuál es el número pequeño?'), eq: sysH(`x + y = ${S}`, `x − y = ${D}`), dis: [sysH(`x + y = ${D}`, `x − y = ${S}`), sysH(`x + y = ${S}`, `y − x = ${D}`), sysH(`x · y = ${S}`, `x − y = ${D}`)], ans: big ? x : y,
      why: L(`Suma: x + y = ${S}. Diferència (el gran menys el petit): x − y = ${D}.`, `Suma: x + y = ${S}. Diferencia (el grande menos el pequeño): x − y = ${D}.`),
      sol: L(`Sumem les dues equacions: 2x = ${S + D} → x = ${x}; y = ${S} − ${x} = ${y}.`, `Sumamos las dos ecuaciones: 2x = ${S + D} → x = ${x}; y = ${S} − ${x} = ${y}.`), sys: true, chk: { t: 'sy3', x, y, e: [[1, 1, S], [1, -1, D]] } };
  });
  add('sys', 2, () => {
    const ctx = ri(0, 2), n = ri(6, 16), x = ri(1, n - 1), y = n - x, askX = Math.random() < .5;
    if (x === y) return null;
    let a, b, st, xd, qs;
    if (ctx === 0) { a = ri(7, 12); b = ri(4, a - 1); const T = a * x + b * y;
      st = L(`Un grup de ${n} persones va al teatre. L'entrada d'adult costa ${a} € i la infantil, ${b} €. En total han pagat ${T} €.`, `Un grupo de ${n} personas va al teatro. La entrada de adulto cuesta ${a} € y la infantil, ${b} €. En total han pagado ${T} €.`);
      xd = L('<b>x</b> és el nombre d\'adults i <b>y</b>, el d\'infants', '<b>x</b> es el número de adultos e <b>y</b>, el de niños'); qs = askX ? L('Quants adults hi ha?', '¿Cuántos adultos hay?') : L('Quants infants hi ha?', '¿Cuántos niños hay?'); }
    else if (ctx === 1) { a = 2; b = 1; const T = 2 * x + y;
      st = L(`En una bossa hi ha ${n} monedes, unes de 2 € i les altres d'1 €. En total hi ha ${T} €.`, `En una bolsa hay ${n} monedas, unas de 2 € y las otras de 1 €. En total hay ${T} €.`);
      xd = L('<b>x</b> són les monedes de 2 € i <b>y</b>, les d\'1 €', '<b>x</b> son las monedas de 2 € e <b>y</b>, las de 1 €'); qs = askX ? L('Quantes monedes de 2 € hi ha?', '¿Cuántas monedas de 2 € hay?') : L("Quantes monedes d'1 € hi ha?", '¿Cuántas monedas de 1 € hay?'); }
    else { a = 20; b = 10; const T = 20 * x + 10 * y;
      st = L(`Una caixa té ${n} bitllets, uns de 20 € i els altres de 10 €. En total hi ha ${fmt(T)} €.`, `Una caja tiene ${n} billetes, unos de 20 € y los otros de 10 €. En total hay ${fmt(T)} €.`);
      xd = L('<b>x</b> són els bitllets de 20 € i <b>y</b>, els de 10 €', '<b>x</b> son los billetes de 20 € e <b>y</b>, los de 10 €'); qs = askX ? L('Quants bitllets de 20 € hi ha?', '¿Cuántos billetes de 20 € hay?') : L('Quants bitllets de 10 € hi ha?', '¿Cuántos billetes de 10 € hay?'); }
    const T = a * x + b * y, e2 = `${cx(a)} + ${cx(b, 'y')} = ${fmt(T)}`;
    return { st, xd, qs, eq: sysH(`x + y = ${n}`, e2), dis: [sysH(`x + y = ${fmt(T)}`, `${cx(a)} + ${cx(b, 'y')} = ${n}`), sysH(`x + y = ${n}`, `${cx(b)} + ${cx(a, 'y')} = ${fmt(T)}`), sysH(`x + y = ${n}`, `${cx(a)} − ${cx(b, 'y')} = ${fmt(T)}`)], ans: askX ? x : y,
      why: L(`Quantitat total: x + y = ${n}. Diners: ${e2}.`, `Cantidad total: x + y = ${n}. Dinero: ${e2}.`),
      sol: L(`Substituïm y = ${n} − x: ${cx(a)} + ${cf(b, `(${n} − x)`)} = ${fmt(T)} → ${solv(a - b, T - b * n, x)}, y = ${y}.`, `Sustituimos y = ${n} − x: ${cx(a)} + ${cf(b, `(${n} − x)`)} = ${fmt(T)} → ${solv(a - b, T - b * n, x)}, y = ${y}.`), sys: true, chk: { t: 'sy4', x, y, e: [[1, 1, n], [a, b, T]] } };
  });
  add('sys', 3, () => {
    const P = per(), n = pick([10, 20, 25, 30]), a = ri(2, 5), b = ri(1, 2), x = ri(Math.ceil(n / 2), n - 1), y = n - x, T = a * x - b * y, askX = Math.random() < .5;
    if (T < 1) return null;
    return { st: L(`Una prova té ${n} preguntes. Cada encert suma ${a} punts i cada error en resta ${b}. ${P.C} ha contestat totes les preguntes i ha tret ${T} punts.`, `Una prueba tiene ${n} preguntas. Cada acierto suma ${a} puntos y cada error resta ${b}. ${P.C} ha contestado todas las preguntas y ha sacado ${T} puntos.`),
      xd: L('<b>x</b> són els encerts i <b>y</b>, els errors', '<b>x</b> son los aciertos e <b>y</b>, los errores'), qs: askX ? L('Quantes preguntes ha encertat?', '¿Cuántas preguntas ha acertado?') : L('Quantes preguntes ha fallat?', '¿Cuántas preguntas ha fallado?'),
      eq: sysH(`x + y = ${n}`, `${cx(a)} − ${cx(b, 'y')} = ${T}`), dis: [sysH(`x + y = ${n}`, `${cx(a)} + ${cx(b, 'y')} = ${T}`), sysH(`x − y = ${n}`, `${cx(a)} − ${cx(b, 'y')} = ${T}`), sysH(`x + y = ${T}`, `${cx(a)} − ${cx(b, 'y')} = ${n}`)], ans: askX ? x : y,
      why: L(`Preguntes: x + y = ${n}. Punts: ${cx(a)} − ${cx(b, 'y')} = ${T}.`, `Preguntas: x + y = ${n}. Puntos: ${cx(a)} − ${cx(b, 'y')} = ${T}.`),
      sol: L(`Substituïm y = ${n} − x: ${cx(a)} − ${cf(b, `(${n} − x)`)} = ${T} → ${solv(a + b, T + b * n, x)}, y = ${y}.`, `Sustituimos y = ${n} − x: ${cx(a)} − ${cf(b, `(${n} − x)`)} = ${T} → ${solv(a + b, T + b * n, x)}, y = ${y}.`), sys: true, chk: { t: 'sy5', x, y, e: [[1, 1, n], [a, -b, T]] } };
  });
  add('sys', 3, () => {
    const a = ri(2, 8), b = ri(2, 12), y = 2 * a + b, x = 4 * a + 3 * b, askY = Math.random() < .5;
    if (x - y < 18 || x > 70) return null;
    return { st: L(`Fa ${a} anys, l'edat d'una mare era el triple de la de la seva filla. D'aquí a ${b} anys, serà el doble.`, `Hace ${a} años, la edad de una madre era el triple de la de su hija. Dentro de ${b} años, será el doble.`),
      xd: L("<b>x</b> és l'edat actual de la mare i <b>y</b>, la de la filla", '<b>x</b> es la edad actual de la madre e <b>y</b>, la de la hija'), qs: askY ? L('Quants anys té ara la filla?', '¿Cuántos años tiene ahora la hija?') : L('Quants anys té ara la mare?', '¿Cuántos años tiene ahora la madre?'),
      eq: sysH(`x − ${a} = 3(y − ${a})`, `x + ${b} = 2(y + ${b})`), dis: [sysH(`x − ${a} = 3y`, `x + ${b} = 2y`), sysH(`x + ${a} = 3(y + ${a})`, `x − ${b} = 2(y − ${b})`), sysH(`x = 3y`, `x = 2y`)], ans: askY ? y : x,
      why: L(`Fa ${a} anys tenien x − ${a} i y − ${a}; d'aquí a ${b} anys tindran x + ${b} i y + ${b}.`, `Hace ${a} años tenían x − ${a} e y − ${a}; dentro de ${b} años tendrán x + ${b} e y + ${b}.`),
      sol: L(`De la primera, x = 3y − ${2 * a}. A la segona: 3y − ${2 * a} + ${b} = 2y + ${2 * b} → y = ${y}, x = ${x}.`, `De la primera, x = 3y − ${2 * a}. En la segunda: 3y − ${2 * a} + ${b} = 2y + ${2 * b} → y = ${y}, x = ${x}.`), sys: true, chk: { t: 'sy6', x, y, a, b } };
  });

  // --- Segon grau ---
  add('quad', 1, () => {
    const x = ri(3, 15), P = x * (x + 1);
    return { st: L(`Un nombre positiu multiplicat pel nombre següent dona ${P}.`, `Un número positivo multiplicado por el número siguiente da ${P}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'),
      eq: `x(x + 1) = ${P}`, dis: [`x + (x + 1) = ${P}`, `x² + 1 = ${P}`, `2x + 1 = ${P}`], ans: x,
      why: L('El nombre següent és x + 1 i els multipliquem.', 'El número siguiente es x + 1 y los multiplicamos.'), sol: L(`x² + x − ${P} = 0 → x = ${x} (l'altra solució, −${x + 1}, és negativa).`, `x² + x − ${P} = 0 → x = ${x} (la otra solución, −${x + 1}, es negativa).`), chk: { t: 'q1', x, P } };
  });
  add('quad', 1, () => {
    const x = ri(3, 15), a = ri(2, 30), b = x * x - a;
    if (b < 1) return null;
    return { st: L(`Si al quadrat d'un nombre positiu li restes ${a}, obtens ${b}.`, `Si al cuadrado de un número positivo le restas ${a}, obtienes ${b}.`), xd: L('el nombre', 'el número'), qs: L('Quin és el nombre?', '¿Cuál es el número?'),
      eq: `x² − ${a} = ${b}`, dis: [`(x − ${a})² = ${b}`, `2x − ${a} = ${b}`, `x² = ${b} − ${a}`], ans: x,
      why: L(`El quadrat del nombre és x² i li restem ${a}.`, `El cuadrado del número es x² y le restamos ${a}.`), sol: `x² = ${b} + ${a} = ${x * x} → x = √${x * x} = ${x}.`, chk: { t: 'q2', x, a, b } };
  });
  add('quad', 2, () => {
    const x = ri(2, 12), d = ri(1, 8), A = x * (x + d);
    return { st: L(`Un rectangle fa ${d} cm més de llarg que d'ample i la seva àrea és de ${A} cm².`, `Un rectángulo mide ${d} cm más de largo que de ancho y su área es de ${A} cm².`), xd: L("l'amplada", 'la anchura'), qs: L("Quina és l'amplada del rectangle?", '¿Cuál es la anchura del rectángulo?'),
      eq: `x(x + ${d}) = ${A}`, dis: [`2x + 2(x + ${d}) = ${A}`, `x + (x + ${d}) = ${A}`, `x² + ${d} = ${A}`], ans: x, un: 'cm',
      why: L(`Àrea = ample · llarg = x(x + ${d}).`, `Área = ancho · largo = x(x + ${d}).`), sol: L(`x² + ${d}x − ${A} = 0 → x = ${x} cm (la solució negativa no serveix per a una longitud).`, `x² + ${d}x − ${A} = 0 → x = ${x} cm (la solución negativa no sirve para una longitud).`), chk: { t: 'q3', x, d, A } };
  });
  add('quad', 2, () => {
    const x = ri(2, 15), S = x * x + (x + 1) ** 2;
    return { st: L(`La suma dels quadrats de dos nombres positius consecutius és ${S}.`, `La suma de los cuadrados de dos números positivos consecutivos es ${S}.`), xd: L('el nombre més petit', 'el número más pequeño'), qs: L('Quin és el nombre més petit?', '¿Cuál es el número más pequeño?'),
      eq: `x² + (x + 1)² = ${S}`, dis: [`(x + x + 1)² = ${S}`, `x² + (x + 1) = ${S}`, `2x² + 1 = ${S}`], ans: x,
      why: L('Els nombres són x i x + 1, i sumem els seus quadrats.', 'Los números son x y x + 1, y sumamos sus cuadrados.'), sol: `2x² + 2x + 1 = ${S} → x² + x − ${(S - 1) / 2} = 0 → x = ${x}.`, chk: { t: 'q4', x, S } };
  });
  add('quad', 2, () => {
    const x = 2 * ri(1, 10), P = x * (x + 2);
    return { st: L(`El producte de dos nombres parells positius consecutius és ${P}.`, `El producto de dos números pares positivos consecutivos es ${P}.`), xd: L('el més petit dels dos', 'el más pequeño de los dos'), qs: L('Quin és el nombre més petit?', '¿Cuál es el número más pequeño?'),
      eq: `x(x + 2) = ${P}`, dis: [`x(x + 1) = ${P}`, `x + (x + 2) = ${P}`, `2x(x + 2) = ${P}`], ans: x,
      why: L('Dos parells consecutius es diferencien en 2: x i x + 2.', 'Dos pares consecutivos se diferencian en 2: x y x + 2.'), sol: `x² + 2x − ${P} = 0 → x = ${x}.`, chk: { t: 'q5', x, P } };
  });
  add('quad', 3, () => {
    const x = ri(2, 14), d = ri(1, 8), A2 = x * (x + d);
    if (A2 % 2) return null;
    const A = A2 / 2;
    return { st: L(`La base d'un triangle fa ${d} cm més que l'altura i l'àrea és de ${A} cm².`, `La base de un triángulo mide ${d} cm más que la altura y el área es de ${A} cm².`), xd: L("l'altura", 'la altura'), qs: L("Quant fa l'altura del triangle?", '¿Cuánto mide la altura del triángulo?'),
      eq: `${frac(`x(x + ${d})`, 2)} = ${A}`, dis: [`x(x + ${d}) = ${A}`, `${frac(`x + (x + ${d})`, 2)} = ${A}`, `${frac(`x²`, 2)} + ${d} = ${A}`], ans: x, un: 'cm',
      why: L(`Àrea del triangle = base · altura : 2 = x(x + ${d}) : 2.`, `Área del triángulo = base · altura : 2 = x(x + ${d}) : 2.`), sol: `x² + ${d}x = ${A2} → x² + ${d}x − ${A2} = 0 → x = ${x} cm.`, chk: { t: 'q6', x, d, A } };
  });
  add('quad', 3, () => {
    const x = ri(2, 14), w = ri(1, 3), A = (x + 2 * w) ** 2;
    return { st: L(`Un jardí quadrat està envoltat per un camí de ${w} m d'amplada. Entre el jardí i el camí ocupen ${A} m².`, `Un jardín cuadrado está rodeado por un camino de ${w} m de anchura. Entre el jardín y el camino ocupan ${A} m².`), xd: L('el costat del jardí', 'el lado del jardín'), qs: L('Quant fa el costat del jardí?', '¿Cuánto mide el lado del jardín?'),
      eq: `(x + ${2 * w})² = ${A}`, dis: [`(x + ${w})² = ${A}`, `x² + ${2 * w} = ${A}`, `x² + ${4 * w} = ${A}`], ans: x, un: 'm',
      why: L(`El camí afegeix ${w} m a cada banda: el quadrat gran fa x + ${2 * w} de costat.`, `El camino añade ${w} m a cada lado: el cuadrado grande mide x + ${2 * w} de lado.`), sol: `x + ${2 * w} = √${A} = ${x + 2 * w} → x = ${x} m.`, chk: { t: 'q7', x, w, A } };
  });

  // Tria el tipus de pregunta segons el nivell: plantejar (tria l'equació) o resoldre (escriu la solució)
  function wordEx(kind, L_) {
    const kinds = kind ? [kind] : ['age', 'price', 'coin', 'perim'];
    const k = pick(kinds), bank = W[k];
    let mode, dd;
    if (L_ <= 1) { mode = 'plant'; dd = [1]; }
    else if (L_ === 2) { mode = Math.random() < .6 ? 'plant' : 'solve'; dd = mode === 'plant' ? [2, 1] : [1]; }
    else if (L_ === 3) { mode = 'solve'; dd = [1, 2]; }
    else if (L_ === 4) { mode = Math.random() < .3 ? 'plant' : 'solve'; dd = mode === 'plant' ? [3, 2] : [2, 3]; }
    else { mode = Math.random() < .25 ? 'plant' : 'solve'; dd = [3, 2]; }
    let pool = bank.filter(t => dd.includes(t.d));
    if (mode === 'solve') pool = pool.filter(t => t.d > 1 || k !== 'tr');
    if (!pool.length) pool = bank.filter(t => !(k === 'tr' && t.d === 1));
    const tp = pick(pool);
    // l'equació bona s'ha de complir amb la solució i cap de les errònies (si no, dues opcions «funcionarien»)
    let o;
    for (let t = 0; t < 80; t++) { o = gen(tp.f); if (o.expr || (holds(o.eq, o.chk.x, o.chk.y) && o.dis.every(d => !holds(d, o.chk.x, o.chk.y)) && new Set(o.dis).size === o.dis.length)) break; }
    if (o.expr) return mc(L(`Com s'escriu en llenguatge algebraic?<br><b>«${o.ph}»</b> <span class="hint">x és el nombre</span>`, `¿Cómo se escribe en lenguaje algebraico?<br><b>«${o.ph}»</b> <span class="hint">x es el número</span>`), o.eq, o.dis, { list: true, ex: o.why, chk: o.chk });
    if (mode === 'plant') {
      const q = o.sys ? L(`${o.st}<br>Si ${o.xd}, quin sistema descriu el problema?`, `${o.st}<br>Si ${o.xd}, ¿qué sistema describe el problema?`) : L(`${o.st}<br>Si <b>x</b> és ${o.xd}, quina equació descriu el problema?`, `${o.st}<br>Si <b>x</b> es ${o.xd}, ¿qué ecuación describe el problema?`);
      return mc(q, o.eq, o.dis, { list: true, long: true, ex: o.why, chk: { ...o.chk, mode, sys: !!o.sys, ans: o.ans } });
    }
    return inp(`${o.st} ${B(o.qs)}`, o.ans, { unit: o.un, long: true, ex: `${o.why} ${o.sol}`, chk: { ...o.chk, mode, sys: !!o.sys } });
  }

  /* ================= 1b. Problemes de m.c.m. i m.c.d. (mult.prob) ================= */
  const MCM = [
    (a, b) => [L(`Dos autobusos surten de l'estació a les 8 del matí. Un torna a sortir cada ${a} minuts i l'altre, cada ${b} minuts. D'aquí a quants minuts tornaran a sortir junts?`, `Dos autobuses salen de la estación a las 8 de la mañana. Uno vuelve a salir cada ${a} minutos y el otro, cada ${b} minutos. ¿Dentro de cuántos minutos volverán a salir juntos?`), 'min', 'bus'],
    (a, b) => { const P = per(), Q = per(P); return [L(`${P.C} va a la piscina cada ${a} dies i ${Q.c}, cada ${b} dies. Avui hi han coincidit. D'aquí a quants dies hi tornaran a coincidir?`, `${P.C} va a la piscina cada ${a} días y ${Q.c}, cada ${b} días. Hoy han coincidido. ¿Dentro de cuántos días volverán a coincidir?`), '', 'pool']; },
    (a, b) => [L(`Dos fars s'encenen alhora. Un fa llum cada ${a} segons i l'altre, cada ${b} segons. Al cap de quants segons tornaran a fer llum alhora?`, `Dos faros se encienden a la vez. Uno da luz cada ${a} segundos y el otro, cada ${b} segundos. ¿Al cabo de cuántos segundos volverán a dar luz a la vez?`), 's', 'far'],
    (a, b) => [L(`Quin és el nombre més petit de caramels que es pot repartir en bosses de ${a} o bé en bosses de ${b} sense que en sobri cap?`, `¿Cuál es el número más pequeño de caramelos que se puede repartir en bolsas de ${a} o bien en bolsas de ${b} sin que sobre ninguno?`), '', 'bag']];
  const MCD = [
    (a, b) => [L(`Tenim dues cordes de ${a} m i ${b} m i les volem tallar en trossos iguals, tan llargs com sigui possible, sense que en sobri res. Quant ha de fer cada tros?`, `Tenemos dos cuerdas de ${a} m y ${b} m y las queremos cortar en trozos iguales, lo más largos posible, sin que sobre nada. ¿Cuánto tiene que medir cada trozo?`), 'm', 'rope'],
    (a, b) => [L(`Volem repartir ${a} pomes i ${b} peres en lots iguals (tots amb les mateixes pomes i les mateixes peres) i fer tants lots com sigui possible. Quants lots farem?`, `Queremos repartir ${a} manzanas y ${b} peras en lotes iguales (todos con las mismas manzanas y las mismas peras) y hacer tantos lotes como sea posible. ¿Cuántos lotes haremos?`), '', 'lots'],
    (a, b) => [L(`Un terra fa ${a} dm per ${b} dm i el volem cobrir amb rajoles quadrades iguals, tan grans com es pugui i sense tallar-ne cap. Quant ha de fer el costat de cada rajola?`, `Un suelo mide ${a} dm por ${b} dm y lo queremos cubrir con baldosas cuadradas iguales, lo más grandes posible y sin cortar ninguna. ¿Cuánto tiene que medir el lado de cada baldosa?`), 'dm', 'tile'],
    (a, b) => [L(`En una colla castellera hi ha ${a} nois i ${b} noies. Volen fer grups iguals, tots amb els mateixos nois i les mateixes noies, i tants grups com sigui possible. Quants grups faran?`, `En una colla castellera hay ${a} chicos y ${b} chicas. Quieren hacer grupos iguales, todos con los mismos chicos y las mismas chicas, y tantos grupos como sea posible. ¿Cuántos grupos harán?`), '', 'grp']];
  function mcPair(L_, wantM) {
    const S = L_ <= 3 ? [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20] : [12, 15, 16, 18, 20, 24, 25, 28, 30, 32, 36, 40, 42, 45, 48, 60];
    for (let t = 0; t < 300; t++) { const a = pick(S), b = pick(S), g = gcd(a, b); if (a < b && g > 1 && g < a && (!wantM || lcm(a, b) <= (L_ <= 3 ? 120 : 360))) return [a, b]; }
    return [12, 18];
  }
  function multProb(L_) {
    const isM = Math.random() < .5, [a, b] = mcPair(L_, isM), [q, u, t] = pick(isM ? MCM : MCD)(a, b), m = lcm(a, b), g = gcd(a, b);
    const fx = L(`${a} = ${factor(a)} i ${b} = ${factor(b)}.`, `${a} = ${factor(a)} y ${b} = ${factor(b)}.`);
    const why = isM ? L('Busquem quan tornen a coincidir: és un múltiple comú, i el primer és el m.c.m.', 'Buscamos cuándo vuelven a coincidir: es un múltiplo común, y el primero es el m.c.m.') : L('Busquem el tros (o el grup) més gran que cap exactament a tots dos: és el m.c.d.', 'Buscamos el trozo (o el grupo) más grande que cabe exactamente en los dos: es el m.c.d.');
    if (L_ <= 3 && Math.random() < .35) return mc(`${q}<br>${B(L('Què has de calcular per resoldre-ho?', '¿Qué tienes que calcular para resolverlo?'))}`, isM ? L('el m.c.m.', 'el m.c.m.') : L('el m.c.d.', 'el m.c.d.'), [isM ? L('el m.c.d.', 'el m.c.d.') : L('el m.c.m.', 'el m.c.m.')], { fixed: [L('el m.c.m.', 'el m.c.m.'), L('el m.c.d.', 'el m.c.d.')], long: true, ex: why, chk: { t: 'which', isM, a, b, kind: t } });
    if (L_ >= 5) {
      if (t === 'rope') return inp(q.replace(/Quant ha de fer cada tros\?|¿Cuánto tiene que medir cada trozo\?/, L('Quants trossos en sortiran en total?', '¿Cuántos trozos saldrán en total?')), a / g + b / g, { long: true, ex: `${why} ${fx} m.c.d. = ${g} m. ${L('Trossos', 'Trozos')}: ${a} : ${g} + ${b} : ${g} = ${a / g + b / g}.`, chk: { t: 'rope2', a, b } });
      if (t === 'tile') return inp(q.replace(/Quant ha de fer el costat de cada rajola\?|¿Cuánto tiene que medir el lado de cada baldosa\?/, L('Quantes rajoles caldran?', '¿Cuántas baldosas harán falta?')), (a / g) * (b / g), { long: true, ex: `${why} ${fx} m.c.d. = ${g} dm. ${L('Rajoles', 'Baldosas')}: ${a / g} · ${b / g} = ${(a / g) * (b / g)}.`, chk: { t: 'tile2', a, b } });
      if (t === 'lots') return inp(q.replace(/Quants lots farem\?|¿Cuántos lotes haremos\?/, L('Quantes pomes hi haurà a cada lot?', '¿Cuántas manzanas habrá en cada lote?')), a / g, { long: true, ex: `${why} ${fx} m.c.d. = ${g} ${L('lots', 'lotes')}. ${L('Pomes per lot', 'Manzanas por lote')}: ${a} : ${g} = ${a / g}.`, chk: { t: 'lots2', a, b } });
      if (t === 'bus') return inp(q.replace(/D'aquí a quants minuts tornaran a sortir junts\?|¿Dentro de cuántos minutos volverán a salir juntos\?/, L('Quantes vegades haurà sortit el primer autobús després de les 8 fins que tornin a coincidir (comptant aquesta última sortida)?', '¿Cuántas veces habrá salido el primer autobús después de las 8 hasta que vuelvan a coincidir (contando esta última salida)?')), m / a, { long: true, ex: `${why} ${fx} m.c.m. = ${m} min. ${m} : ${a} = ${m / a}.`, chk: { t: 'bus2', a, b } });
    }
    return inp(q, isM ? m : g, { unit: u || undefined, long: true, ex: `${why} ${fx} ${isM ? `m.c.m. = ${m}` : `m.c.d. = ${g}`}.`, chk: { t: isM ? 'mcm' : 'mcd', a, b } });
  }

  Object.assign(EX, {
    'alg.word': (L_, A) => wordEx(A && W[A] ? A : null, L_),
    'mult.prob': L_ => multProb(L_)
  });
})();
