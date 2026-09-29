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

  /* ================= 2. Estadística: taules, sectors, dispersió, histogrames, caixes i dues variables ================= */
  const FT = 'font-family="Lexend,sans-serif"';
  const r1 = v => Math.round(v * 10) / 10;
  const tt = (x, y, s, o = {}) => `<text x="${r1(x)}" y="${r1(y)}" ${FT} font-size="${o.fs || 14}" font-weight="${o.fw || 700}" fill="${o.col || INK}"${o.a ? ` text-anchor="${o.a}"` : ''}>${s}</text>`;
  const MUT = '#8A7B99', PRI = '#602B7A', GRID = '#EEE6F4';
  const tlen = s => String(s).replace(/<[^>]+>/g, '').length;
  // Taula en SVG: una fila de capçalera i files de dades; «?» es ressalta
  function tabSVG(head, rows, o = {}) {
    const all = [head, ...rows], cw = head.map((_, j) => Math.max(o.minW || 48, ...all.map(r => tlen(r[j]) * 8.4 + 22)));
    const W = cw.reduce((a, b) => a + b, 0), rh = 30, H = rh * all.length;
    let s = `<svg viewBox="0 0 ${r1(W + 4)} ${H + 4}" class="vsvg wide" style="width:${Math.round(Math.min(330, (W + 4) * 1.15))}px"><rect x="2" y="2" width="${r1(W)}" height="${H}" rx="6" fill="#fff" stroke="#CFC3DB" stroke-width="2"/><rect x="3" y="3" width="${r1(W - 2)}" height="${rh - 1}" rx="5" fill="#F4EEF9"/>`;
    all.forEach((r, i) => {
      let x = 2;
      if (i) s += `<line x1="2" y1="${2 + i * rh}" x2="${r1(W + 2)}" y2="${2 + i * rh}" stroke="#E6DCEF" stroke-width="1.5"/>`;
      r.forEach((c, j) => {
        const m = x + cw[j] / 2;
        if (c === '?') s += `<rect x="${r1(m - 15)}" y="${2 + i * rh + 4}" width="30" height="${rh - 8}" rx="6" fill="#FFE9A8" stroke="#E0A300" stroke-width="1.5"/>`;
        s += tt(m, 2 + i * rh + rh / 2 + 5, c, { a: 'middle', fs: 14.5, fw: i === 0 || (o.bold && i === all.length - 1) ? 800 : 700, col: i === 0 ? PRI : INK });
        x += cw[j];
      });
    });
    let x = 2; for (let j = 0; j < head.length - 1; j++) { x += cw[j]; s += `<line x1="${r1(x)}" y1="2" x2="${r1(x)}" y2="${H + 2}" stroke="#E6DCEF" stroke-width="1.5"/>`; }
    return s + '</svg>';
  }
  // Dades soltes en una graella
  function dataSVG(vals, cols = 5) {
    const w = 50, h = 36, W = cols * w, H = Math.ceil(vals.length / cols) * h;
    let s = `<svg viewBox="0 0 ${W + 4} ${H + 4}" class="vsvg wide" style="width:${Math.round(Math.min(300, (W + 4) * 1.15))}px">`;
    vals.forEach((v, i) => { const x = 2 + (i % cols) * w, y = 2 + Math.floor(i / cols) * h; s += `<rect x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" rx="8" fill="#F4EEF9"/>` + tt(x + w / 2, y + h / 2 + 6, fmtD(v), { a: 'middle', fs: 17, fw: 800, col: PRI }); });
    return s + '</svg>';
  }
  // Gràfic de sectors (amb llegenda opcional)
  function sectSVG(parts, o = {}) {
    const tot = parts.reduce((a, p) => a + p.v, 0), R = 62, cx = 72, cy = 72;
    let a0 = -Math.PI / 2, s = '';
    parts.forEach(p => {
      const a1 = a0 + 2 * Math.PI * p.v / tot, P = a => `${r1(cx + R * Math.cos(a))} ${r1(cy + R * Math.sin(a))}`;
      s += `<path class="sct" d="M${cx} ${cy} L${P(a0)} A${R} ${R} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${P(a1)} Z" fill="${p.col}" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>`;
      a0 = a1;
    });
    if (o.noLegend) return `<svg viewBox="0 0 144 144" class="vsvg">${s}</svg>`;
    const lh = 24, top = cy - parts.length * lh / 2, lab = p => p.lab + (p.txt !== undefined ? ': ' + p.txt : '');
    parts.forEach((p, i) => { const y = top + i * lh; s += `<rect x="152" y="${r1(y + 4)}" width="14" height="14" rx="3" fill="${p.col}"/>` + tt(172, y + 16, lab(p), { fs: 13.5 }); });
    const W = 178 + Math.max(...parts.map(p => tlen(lab(p)))) * 8;
    return `<svg viewBox="0 0 ${r1(W)} 144" class="vsvg wide" style="width:${Math.round(Math.min(340, W * 1.05))}px">${s}</svg>`;
  }
  // Histograma
  function histSVG(ed, fr, o = {}) {
    const k = fr.length, mx = Math.max(...fr), stp = mx > 10 ? 2 : 1, top = Math.ceil((mx + 1) / stp) * stp, x0 = 42, y0 = 168, W = 310, bw = (W - x0 - 14) / k, hh = v => v / top * 140;
    let s = `<svg viewBox="0 0 ${W} 208" class="vsvg wide" style="width:320px">`;
    for (let v = 0; v <= top; v += stp) { const y = y0 - hh(v); s += `<line x1="${x0}" y1="${r1(y)}" x2="${W - 8}" y2="${r1(y)}" stroke="${GRID}" stroke-width="1.5"/>` + tt(x0 - 6, y + 4, v, { a: 'end', fs: 11, col: MUT }); }
    fr.forEach((f, i) => { s += `<rect class="hb" x="${r1(x0 + i * bw)}" y="${r1(y0 - hh(f))}" width="${r1(bw)}" height="${r1(hh(f))}" fill="${COLS[(o.c || 1) % COLS.length]}" stroke="${INK}" stroke-width="1.5"/>`; });
    ed.forEach((e, i) => { s += tt(x0 + i * bw, y0 + 17, fmt(e), { a: 'middle', fs: 12 }); });
    s += `<line x1="${x0}" y1="${y0}" x2="${W - 8}" y2="${y0}" stroke="${INK}" stroke-width="2"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="18" stroke="${INK}" stroke-width="2"/>`;
    if (o.xl) s += tt((x0 + W) / 2, y0 + 35, o.xl, { a: 'middle', fs: 12.5, col: PRI });
    if (o.yl) s += tt(8, 12, o.yl, { fs: 11.5, col: PRI });
    return s + '</svg>';
  }
  // Diagrama de caixa (un o dos grups) sobre un eix
  function boxSVG(rows, lo, hi, st) {
    const x0 = rows.length > 1 ? 40 : 22, W = 320, x1 = W - 18, X = v => x0 + (v - lo) / (hi - lo) * (x1 - x0), rh = 46, H = rows.length * rh + 40, ay = H - 30, le = (hi - lo) / st > 12 ? 2 : 1;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="vsvg wide" style="width:320px">`;
    for (let k = 0, v = lo; v <= hi + 1e-9; k++, v += st) s += `<line x1="${r1(X(v))}" y1="6" x2="${r1(X(v))}" y2="${ay + (k % le ? 3 : 6)}" stroke="${k % le ? '#F4EEF9' : GRID}" stroke-width="1.5"/>` + (k % le ? '' : tt(X(v), H - 12, fmt(v), { a: 'middle', fs: 11.5, col: MUT }));
    rows.forEach((r, i) => {
      const y = 12 + i * rh, m = y + 14, [a, q1, md, q3, b] = r.v.map(X);
      s += `<g class="bx"><line x1="${r1(a)}" y1="${m}" x2="${r1(q1)}" y2="${m}" stroke="${INK}" stroke-width="2"/><line x1="${r1(q3)}" y1="${m}" x2="${r1(b)}" y2="${m}" stroke="${INK}" stroke-width="2"/><line x1="${r1(a)}" y1="${m - 8}" x2="${r1(a)}" y2="${m + 8}" stroke="${INK}" stroke-width="2"/><line x1="${r1(b)}" y1="${m - 8}" x2="${r1(b)}" y2="${m + 8}" stroke="${INK}" stroke-width="2"/><rect x="${r1(q1)}" y="${y}" width="${r1(q3 - q1)}" height="28" fill="${r.col}" stroke="${INK}" stroke-width="2"/><line x1="${r1(md)}" y1="${y}" x2="${r1(md)}" y2="${y + 28}" stroke="${INK}" stroke-width="3.5"/></g>`;
      if (r.lab) s += tt(10, m + 5, r.lab, { fs: 15, fw: 800, col: PRI });
    });
    return s + `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${INK}" stroke-width="2"/></svg>`;
  }
  // Núvol de punts (eixos a l'esquerra i a baix)
  function scatSVG(pts, [xa, xb, xs], [ya, yb, ys], o = {}) {
    const x0 = 46, y0 = 184, W = 320, x1 = W - 14, y1 = 16, X = v => x0 + (v - xa) / (xb - xa) * (x1 - x0), Y = v => y0 - (v - ya) / (yb - ya) * (y0 - y1);
    let s = `<svg viewBox="0 0 ${W} 226" class="vsvg wide" style="width:320px">`;
    for (let v = xa; v <= xb + 1e-9; v += xs) s += `<line x1="${r1(X(v))}" y1="${y1}" x2="${r1(X(v))}" y2="${y0}" stroke="${GRID}" stroke-width="1.2"/>` + tt(X(v), y0 + 16, fmt(v), { a: 'middle', fs: 11, col: MUT });
    for (let v = ya; v <= yb + 1e-9; v += ys) s += `<line x1="${x0}" y1="${r1(Y(v))}" x2="${x1}" y2="${r1(Y(v))}" stroke="${GRID}" stroke-width="1.2"/>` + tt(x0 - 6, Y(v) + 4, fmt(v), { a: 'end', fs: 11, col: MUT });
    s += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${INK}" stroke-width="2"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${INK}" stroke-width="2"/>`;
    if (o.line) {
      const [m, n] = o.line, xsA = [xa, xb, (ya - n) / m, (yb - n) / m].filter(x => x >= xa - 1e-9 && x <= xb + 1e-9 && m * x + n >= ya - 1e-9 && m * x + n <= yb + 1e-9).sort((p, q) => p - q);
      if (xsA.length >= 2) s += `<line class="rl" x1="${r1(X(xsA[0]))}" y1="${r1(Y(m * xsA[0] + n))}" x2="${r1(X(xsA[xsA.length - 1]))}" y2="${r1(Y(m * xsA[xsA.length - 1] + n))}" stroke="#36A9E1" stroke-width="3" stroke-linecap="round"/>`;
    }
    if (o.poly) {
      s += `<polyline class="pl" points="${o.poly.map(([x, y]) => `${r1(X(x))},${r1(Y(y))}`).join(' ')}" fill="none" stroke="#36A9E1" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>`;
      o.poly.forEach(([x, y]) => { s += `<circle cx="${r1(X(x))}" cy="${r1(Y(y))}" r="3.5" fill="#1B6FA3"/>`; });
      // etiqueta de cada tram, desplaçada en perpendicular perquè no tapi la línia
      (o.segLab || []).forEach((lb, i) => { const [a, b] = [o.poly[i], o.poly[i + 1]], dx = X(b[0]) - X(a[0]), dy = Y(b[1]) - Y(a[1]), ln = Math.hypot(dx, dy) || 1; let nx = -dy / ln, ny = dx / ln; if (ny > 0) { nx = -nx; ny = -ny; } const cx0 = (X(a[0]) + X(b[0])) / 2 + nx * 15, cy0 = (Y(a[1]) + Y(b[1])) / 2 + ny * 15; s += `<circle cx="${r1(cx0)}" cy="${r1(cy0)}" r="9" fill="#FFE9A8" stroke="#E0A300" stroke-width="1.5"/>` + tt(cx0, cy0 + 4, lb, { a: 'middle', fs: 11.5, fw: 800 }); });
    }
    pts.forEach(([x, y]) => { s += `<circle class="pt" cx="${r1(X(x))}" cy="${r1(Y(y))}" r="4.5" fill="#E24F86" stroke="#fff" stroke-width="1.5"/>`; });
    if (o.xl) s += tt((x0 + x1) / 2, 221, o.xl, { a: 'middle', fs: 12.5, col: PRI });
    if (o.yl) s += tt(6, 10, o.yl, { fs: 12, col: PRI });
    return s + '</svg>';
  }
  const sum = a => a.reduce((p, q) => p + q, 0);
  const mean = a => sum(a) / a.length;

  // Contextos
  // Variables numèriques: capçalera, dades soltes, «n o menys» i «més de n»
  const pl = (n, a, b) => n === 1 ? a : b;
  const NUMC = [
    { h: ['Germans', 'Hermanos'], v: [0, 1, 2, 3, 4], raw: N => L(`Aquestes són les respostes de ${N} alumnes a la pregunta «Quants germans tens?».`, `Estas son las respuestas de ${N} alumnos a la pregunta «¿Cuántos hermanos tienes?».`),
      le: n => L(`quants alumnes tenen ${n} ${pl(n, 'germà', 'germans')} o menys`, `cuántos alumnos tienen ${n} ${pl(n, 'hermano', 'hermanos')} o menos`), gt: n => L(`Quants alumnes tenen <b>més de ${n}</b> ${pl(n, 'germà', 'germans')}?`, `¿Cuántos alumnos tienen <b>más de ${n}</b> ${pl(n, 'hermano', 'hermanos')}?`) },
    { h: ['Llibres', 'Libros'], v: [0, 1, 2, 3, 4, 5], raw: N => L(`Aquestes són les respostes de ${N} alumnes a la pregunta «Quants llibres has llegit aquest trimestre?».`, `Estas son las respuestas de ${N} alumnos a la pregunta «¿Cuántos libros has leído este trimestre?».`),
      le: n => L(`quants alumnes han llegit ${n} ${pl(n, 'llibre', 'llibres')} o menys`, `cuántos alumnos han leído ${n} ${pl(n, 'libro', 'libros')} o menos`), gt: n => L(`Quants alumnes han llegit <b>més de ${n}</b> ${pl(n, 'llibre', 'llibres')}?`, `¿Cuántos alumnos han leído <b>más de ${n}</b> ${pl(n, 'libro', 'libros')}?`) },
    { h: ['Gols', 'Goles'], v: [0, 1, 2, 3, 4], raw: N => L(`Aquests són els gols que ha marcat un equip de futbol en ${N} partits.`, `Estos son los goles que ha marcado un equipo de fútbol en ${N} partidos.`),
      le: n => L(`en quants partits l'equip ha marcat ${n} ${pl(n, 'gol', 'gols')} o menys`, `en cuántos partidos el equipo ha marcado ${n} ${pl(n, 'gol', 'goles')} o menos`), gt: n => L(`En quants partits l'equip ha marcat <b>més de ${n}</b> ${pl(n, 'gol', 'gols')}?`, `¿En cuántos partidos el equipo ha marcado <b>más de ${n}</b> ${pl(n, 'gol', 'goles')}?`) },
    { h: ['Mascotes', 'Mascotas'], v: [0, 1, 2, 3], raw: N => L(`Aquestes són les respostes de ${N} alumnes a la pregunta «Quantes mascotes tens a casa?».`, `Estas son las respuestas de ${N} alumnos a la pregunta «¿Cuántas mascotas tienes en casa?».`),
      le: n => L(`quants alumnes tenen ${n} ${pl(n, 'mascota', 'mascotes')} o menys`, `cuántos alumnos tienen ${n} ${pl(n, 'mascota', 'mascotas')} o menos`), gt: n => L(`Quants alumnes tenen <b>més de ${n}</b> ${pl(n, 'mascota', 'mascotes')}?`, `¿Cuántos alumnos tienen <b>más de ${n}</b> ${pl(n, 'mascota', 'mascotas')}?`) }];
  // Variables qualitatives: capçalera, «el gràfic mostra…», «s'ha preguntat…»
  const CATC = [
    { ca: ['Esport', "l'esport preferit dels alumnes d'un institut", 'quin és el seu esport preferit'], es: ['Deporte', 'el deporte preferido de los alumnos de un instituto', 'cuál es su deporte preferido'], c: [['futbol', 'fútbol'], ['bàsquet', 'baloncesto'], ['handbol', 'balonmano'], ['natació', 'natación'], ['atletisme', 'atletismo']] },
    { ca: ['Transport', "com vénen a l'institut els alumnes", "com vénen a l'institut"], es: ['Transporte', 'cómo vienen al instituto los alumnos', 'cómo vienen al instituto'], c: [['a peu', 'a pie'], ['bicicleta', 'bicicleta'], ['autobús', 'autobús'], ['cotxe', 'coche']] },
    { ca: ['Fruita', "la fruita preferida dels alumnes d'un institut", 'quina és la seva fruita preferida'], es: ['Fruta', 'la fruta preferida de los alumnos de un instituto', 'cuál es su fruta preferida'], c: [['poma', 'manzana'], ['plàtan', 'plátano'], ['maduixa', 'fresa'], ['taronja', 'naranja'], ['préssec', 'melocotón']] },
    { ca: ['Música', "l'estil de música preferit dels alumnes d'un institut", 'quin és el seu estil de música preferit'], es: ['Música', 'el estilo de música preferido de los alumnos de un instituto', 'cuál es su estilo de música preferido'], c: [['pop', 'pop'], ['rock', 'rock'], ['rap', 'rap'], ['clàssica', 'clásica']] }];
  const cn = (C, i) => L(C.c[i][0], C.c[i][1]);
  // n parts enteres ≥ mn que sumen T (en múltiples de «u»)
  function splitN(T, n, u = 1, mn = 1) { for (let t = 0; t < 500; t++) { const cut = [...new Set([...Array(n - 1)].map(() => ri(1, T / u - 1)))].sort((a, b) => a - b); if (cut.length !== n - 1) continue; const p = [...cut, T / u].map((c, i) => (c - (i ? cut[i - 1] : 0)) * u); if (p.every(v => v >= mn)) return p; } return null; }

  function statFreq(L_) {
    if (L_ <= 1 && Math.random() < .5) {
      const C = pick(NUMC), N = ri(15, 20), v = C.v, data = [...Array(N)].map(() => pick(v)), t = pick(v), f = data.filter(x => x === t).length;
      if (!f) return statFreq(L_);
      return inp(`${C.raw(N)} ${L(`Quina és la <b>freqüència absoluta</b> del valor <b>${t}</b>?`, `¿Cuál es la <b>frecuencia absoluta</b> del valor <b>${t}</b>?`)}`, f, { vis: dataSVG(data), long: true, ex: L(`La freqüència absoluta és quantes vegades surt el valor: el ${t} surt ${f} ${f === 1 ? 'vegada' : 'vegades'}.`, `La frecuencia absoluta es cuántas veces sale el valor: el ${t} sale ${f} ${f === 1 ? 'vez' : 'veces'}.`), chk: { t: 'count', data, v: t } });
    }
    const C = pick(CATC), k = Math.min(C.c.length, ri(3, 5)), idx = shuffle([...Array(C.c.length).keys()]).slice(0, k), N = L_ <= 1 ? ri(18, 32) : pick([20, 25, 40, 50]);
    const f = splitN(N, k), j = ri(0, k - 1), name = cn(C, idx[j]);
    const head = [L(C.ca[0], C.es[0]), L('Freqüència', 'Frecuencia')], tot = [L('Total', 'Total'), String(N)];
    if (L_ <= 1) return inp(L(`S'ha preguntat a ${N} alumnes ${C.ca[2]}. Quina freqüència falta a la taula?`, `Se ha preguntado a ${N} alumnos ${C.es[2]}. ¿Qué frecuencia falta en la tabla?`), f[j], { vis: tabSVG(head, [...idx.map((c, i) => [cn(C, c), i === j ? '?' : String(f[i])]), tot], { bold: true }), long: true, ex: L(`Les freqüències sumen el total: ${N} − (${f.filter((_, i) => i !== j).join(' + ')}) = ${f[j]}.`, `Las frecuencias suman el total: ${N} − (${f.filter((_, i) => i !== j).join(' + ')}) = ${f[j]}.`), chk: { t: 'miss', f, j, N } });
    const vis = tabSVG(head, [...idx.map((c, i) => [cn(C, c), String(f[i])]), tot], { bold: true });
    if (L_ === 2) return dinp(L(`Quina és la <b>freqüència relativa</b> de «${name}»? Escriu-la en forma decimal.`, `¿Cuál es la <b>frecuencia relativa</b> de «${name}»? Escríbela en forma decimal.`), f[j] / N, { vis, ex: L(`Freqüència relativa = freqüència ÷ total = ${f[j]} ÷ ${N} = ${fmtD(f[j] / N)}.`, `Frecuencia relativa = frecuencia ÷ total = ${f[j]} ÷ ${N} = ${fmtD(f[j] / N)}.`), chk: { t: 'rel', f, j, N } });
    if (L_ === 3) return dinp(L(`Quin <b>percentatge</b> d'alumnes ha triat «${name}»?`, `¿Qué <b>porcentaje</b> de alumnos ha elegido «${name}»?`), f[j] / N * 100, { unit: '%', vis, ex: L(`${f[j]} ÷ ${N} = ${fmtD(f[j] / N)}, i per 100: ${pc(f[j] / N * 100)}.`, `${f[j]} ÷ ${N} = ${fmtD(f[j] / N)}, y por 100: ${pc(f[j] / N * 100)}.`), chk: { t: 'pct', f, j, N } });
    // Variables numèriques: freqüència acumulada
    const D = pick(NUMC), vv = D.v, NN = ri(16, 30), ff = splitN(NN, vv.length, 1, 1), hd = [L(...D.h), L('Freqüència', 'Frecuencia')];
    const cum = ff.map((_, i) => sum(ff.slice(0, i + 1))), t = ri(0, vv.length - 2);
    if (L_ === 4) return inp(L(`Quina és la <b>freqüència acumulada</b> del valor <b>${vv[t]}</b>? <span class="hint">(${D.le(vv[t])})</span>`, `¿Cuál es la <b>frecuencia acumulada</b> del valor <b>${vv[t]}</b>? <span class="hint">(${D.le(vv[t])})</span>`), cum[t], { vis: tabSVG(hd, vv.map((x, i) => [String(x), String(ff[i])])), ex: L(`Sumem les freqüències fins al ${vv[t]}: ${ff.slice(0, t + 1).join(' + ')} = ${cum[t]}.`, `Sumamos las frecuencias hasta el ${vv[t]}: ${ff.slice(0, t + 1).join(' + ')} = ${cum[t]}.`), chk: { t: 'cum', v: vv, f: ff, k: t } });
    const hd3 = [...hd, L('F. acumulada', 'F. acumulada')];
    if (Math.random() < .5) return inp(`${L(`La taula recull ${NN} dades.`, `La tabla recoge ${NN} datos.`)} ${D.gt(vv[t])}`, NN - cum[t], { vis: tabSVG(hd3, vv.map((x, i) => [String(x), String(ff[i]), String(cum[i])])), ex: L(`Fins al ${vv[t]} n'hi ha ${cum[t]} (freqüència acumulada). La resta: ${NN} − ${cum[t]} = ${NN - cum[t]}.`, `Hasta el ${vv[t]} hay ${cum[t]} (frecuencia acumulada). El resto: ${NN} − ${cum[t]} = ${NN - cum[t]}.`), chk: { t: 'more', v: vv, f: ff, k: t, N: NN } });
    const m = ri(1, vv.length - 1);
    return inp(L('Quina freqüència absoluta falta a la taula?', '¿Qué frecuencia absoluta falta en la tabla?'), ff[m], { vis: tabSVG(hd3, vv.map((x, i) => [String(x), i === m ? '?' : String(ff[i]), String(cum[i])])), ex: L(`La freqüència acumulada passa de ${cum[m - 1]} a ${cum[m]}: ${cum[m]} − ${cum[m - 1]} = ${ff[m]}.`, `La frecuencia acumulada pasa de ${cum[m - 1]} a ${cum[m]}: ${cum[m]} − ${cum[m - 1]} = ${ff[m]}.`), chk: { t: 'cumMiss', v: vv, f: ff, k: m } });
  }

  function statPie(L_) {
    const C = pick(CATC), k = Math.min(C.c.length, ri(3, L_ >= 5 ? 4 : 5)), idx = shuffle([...Array(C.c.length).keys()]).slice(0, k), cols = shuffle(COLS).slice(0, k);
    let p; do p = splitN(100, k, 5, 10); while (L_ >= 5 && new Set(p).size < k);
    const j = ri(0, k - 1), name = cn(C, idx[j]), parts = idx.map((c, i) => ({ lab: cn(C, c), v: p[i], col: cols[i], txt: pc(p[i]) }));
    const q0 = L(`El gràfic mostra ${C.ca[1]}.`, `El gráfico muestra ${C.es[1]}.`);
    if (L_ <= 1) return inp(`${q0} ${L(`Quin percentatge correspon a «${name}»?`, `¿Qué porcentaje corresponde a «${name}»?`)}`, p[j], { unit: '%', vis: sectSVG(parts.map((x, i) => i === j ? { ...x, txt: '?' } : x)), ex: L(`Tot el cercle és el 100 %: 100 − (${p.filter((_, i) => i !== j).join(' + ')}) = ${p[j]} %.`, `Todo el círculo es el 100 %: 100 − (${p.filter((_, i) => i !== j).join(' + ')}) = ${p[j]} %.`), chk: { t: 'pmiss', p, j } });
    if (L_ === 2) { const N = 20 * ri(2, 15); return inp(`${q0} ${L(`Si han respost <b>${N}</b> alumnes, quants han triat «${name}»?`, `Si han respondido <b>${N}</b> alumnos, ¿cuántos han elegido «${name}»?`)}`, N * p[j] / 100, { vis: sectSVG(parts), long: true, ex: L(`El ${p[j]} % de ${N} = ${N} · ${p[j]} : 100 = ${N * p[j] / 100}.`, `El ${p[j]} % de ${N} = ${N} · ${p[j]} : 100 = ${N * p[j] / 100}.`), chk: { t: 'pcount', p, j, N } }); }
    if (L_ === 3) {
      if (Math.random() < .5) return inp(`${q0} ${L(`Quants graus fa el sector de «${name}»?`, `¿Cuántos grados mide el sector de «${name}»?`)}`, 3.6 * p[j], { unit: '°', vis: sectSVG(parts), ex: L(`El cercle sencer fa 360°. El ${p[j]} % de 360° = 360 · ${p[j]} : 100 = ${fmtD(3.6 * p[j])}°.`, `El círculo entero mide 360°. El ${p[j]} % de 360° = 360 · ${p[j]} : 100 = ${fmtD(3.6 * p[j])}°.`), chk: { t: 'pdeg', p, j } });
      const N = pick([20, 24, 30, 36, 40, 45, 60]), f = splitN(N, k);
      return inp(L(`Volem fer un gràfic de sectors amb aquesta taula. Quants graus farà el sector de «${cn(C, idx[j])}»?`, `Queremos hacer un gráfico de sectores con esta tabla. ¿Cuántos grados medirá el sector de «${cn(C, idx[j])}»?`), 360 * f[j] / N, { unit: '°', vis: tabSVG([L(C.ca[0], C.es[0]), L('Freqüència', 'Frecuencia')], [...idx.map((c, i) => [cn(C, c), String(f[i])]), [L('Total', 'Total'), String(N)]], { bold: true }), long: true, ex: L(`Cada alumne val 360° : ${N} = ${fmtD(360 / N)}°. ${f[j]} · ${fmtD(360 / N)}° = ${360 * f[j] / N}°.`, `Cada alumno vale 360° : ${N} = ${fmtD(360 / N)}°. ${f[j]} · ${fmtD(360 / N)}° = ${360 * f[j] / N}°.`), chk: { t: 'tdeg', f, j, N } });
    }
    if (L_ === 4) {
      const N = pick([20, 30, 36, 40, 60, 72, 90]), f = splitN(N, k, 1, Math.ceil(N / 12));
      if (!f) return statPie(L_);
      const deg = f.map(x => 360 * x / N);
      return inp(L(`El gràfic mostra els graus de cada sector. Si han respost <b>${N}</b> alumnes, quants han triat «${cn(C, idx[j])}»?`, `El gráfico muestra los grados de cada sector. Si han respondido <b>${N}</b> alumnos, ¿cuántos han elegido «${cn(C, idx[j])}»?`), f[j], { vis: sectSVG(idx.map((c, i) => ({ lab: cn(C, c), v: f[i], col: cols[i], txt: fmtD(deg[i]) + '°' }))), long: true, ex: L(`${fmtD(deg[j])}° de 360° és la fracció ${fmtD(deg[j])}/360. ${N} · ${fmtD(deg[j])} : 360 = ${f[j]}.`, `${fmtD(deg[j])}° de 360° es la fracción ${fmtD(deg[j])}/360. ${N} · ${fmtD(deg[j])} : 360 = ${f[j]}.`), chk: { t: 'dcount', deg, j, N } });
    }
    // Quin gràfic correspon a la taula? (els colors són els de la llegenda)
    const ok = sectSVG(parts, { noLegend: true }), wrong = [], seen = new Set([p.join()]);
    for (let t = 0; t < 80 && wrong.length < 3; t++) {
      let q = p.slice();
      if (t % 2 === 0) { const a = ri(0, k - 1), b = ri(0, k - 1); if (Math.abs(p[a] - p[b]) < 10) continue; [q[a], q[b]] = [q[b], q[a]]; }
      else { const a = ri(0, k - 1), b = ri(0, k - 1), d = 15; if (a === b || q[b] - d < 5) continue; q[a] += d; q[b] -= d; }
      if (seen.has(q.join())) continue; seen.add(q.join());
      wrong.push(sectSVG(parts.map((x, i) => ({ ...x, v: q[i] })), { noLegend: true }));
    }
    if (wrong.length < 3) return statPie(4);
    const leg = tabSVG([L(C.ca[0], C.es[0]), '%'], idx.map((c, i) => [cn(C, c), pc(p[i])]));
    const key = `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:6px">${parts.map(x => `<span style="display:inline-flex;align-items:center;gap:5px;font-size:15px;font-weight:700"><i style="width:14px;height:14px;border-radius:3px;background:${x.col};display:inline-block"></i>${x.lab}</span>`).join('')}</div>`;
    return mc(L('Quin gràfic de sectors correspon a la taula? Cada color és una categoria.', '¿Qué gráfico de sectores corresponde a la tabla? Cada color es una categoría.'), ok, wrong, { pics: true, vis: `<div class="stack">${leg}${key}</div>`, ex: L(`El sector de «${parts[0].lab}» ha de ser el ${p[0]} % del cercle, el de «${parts[1].lab}», el ${p[1]} %, i així amb tots. Una meitat del cercle és el 50 % i un quart, el 25 %.`, `El sector de «${parts[0].lab}» debe ser el ${p[0]} % del círculo, el de «${parts[1].lab}», el ${p[1]} %, y así con todos. Medio círculo es el 50 % y un cuarto, el 25 %.`), chk: { t: 'pick', p, cols } });
  }

  const DISPC = [
    { ca: "Temperatures màximes d'una setmana a Lleida (°C)", es: 'Temperaturas máximas de una semana en Lleida (°C)', lo: 8, hi: 36, two: ["Temperatures màximes (°C) de dues setmanes a Lleida, l'A i la B", 'Temperaturas máximas (°C) de dos semanas en Lleida, la A y la B'] },
    { ca: "Punts d'una jugadora de bàsquet en cada partit", es: 'Puntos de una jugadora de baloncesto en cada partido', lo: 2, hi: 30, two: ["Punts de dues jugadores de bàsquet, l'A i la B, en els últims partits", 'Puntos de dos jugadoras de baloncesto, la A y la B, en los últimos partidos'] },
    { ca: "Minuts que triga l'autobús cada dia", es: 'Minutos que tarda el autobús cada día', lo: 10, hi: 40, two: ["Minuts que triguen cada dia dues línies d'autobús, l'A i la B", 'Minutos que tardan cada día dos líneas de autobús, la A y la B'] },
    { ca: "Notes d'un alumne en els exàmens del trimestre", es: 'Notas de un alumno en los exámenes del trimestre', lo: 1, hi: 10, two: ["Notes de dos alumnes, l'A i el B, en els exàmens del trimestre", 'Notas de dos alumnos, A y B, en los exámenes del trimestre'] }];
  const variance = v => { const m = mean(v); return sum(v.map(x => (x - m) ** 2)) / v.length; };
  // n dades enteres entre lo i hi, a una distància ≤ s de la mitjana (entera)
  function aroundMean(C, n, s) {
    s = Math.min(s, Math.floor((C.hi - C.lo) / 2));
    for (let t = 0; t < 500; t++) {
      const m = ri(C.lo + s, C.hi - s), v = [...Array(n)].map(() => ri(m - s, m + s));
      if (sum(v) === m * n && new Set(v).size > 2) return v;
    }
    return null;
  }
  function statDisp(L_) {
    const C = pick(DISPC), lab = L(C.ca, C.es);
    if (L_ <= 1) {
      const n = ri(6, 8), v = [...Array(n)].map(() => ri(C.lo, C.hi)), R = Math.max(...v) - Math.min(...v);
      if (R < 3) return statDisp(L_);
      return inp(`${lab}. ${L('Quin és el <b>rang</b> de les dades?', '¿Cuál es el <b>rango</b> de los datos?')}`, R, { vis: listVis(v), ex: L(`Rang = valor més gran − valor més petit = ${Math.max(...v)} − ${Math.min(...v)} = ${R}.`, `Rango = valor mayor − valor menor = ${Math.max(...v)} − ${Math.min(...v)} = ${R}.`), chk: { t: 'range', v } });
    }
    if (L_ === 2 || L_ === 5) {
      const n = L_ === 2 ? 6 : 5, half = Math.floor((C.hi - C.lo) / 2), two = L(...C.two);
      for (let t = 0; t < 400; t++) {
        const sB = ri(Math.max(3, half - 3), half), m = ri(C.lo + sB, C.hi - sB), sA = ri(1, 2);
        const A = [...Array(n)].map(() => ri(m - sA, m + sA)), Bv = [...Array(n)].map(() => ri(m - sB, m + sB));
        if (sum(A) !== m * n || sum(Bv) !== m * n || new Set(A).size < 2) continue;
        const flip = Math.random() < .5, G1 = flip ? Bv : A, G2 = flip ? A : Bv;
        const row = (g, v) => `<div style="display:flex;align-items:center;gap:8px"><b style="font-size:20px;color:${PRI}">${g}</b>${listVis(v)}</div>`, vis = `<div class="stack">${row('A', G1)}${row('B', G2)}</div>`;
        if (L_ === 2) {
          const rA = Math.max(...G1) - Math.min(...G1), rB = Math.max(...G2) - Math.min(...G2);
          if (Math.abs(rA - rB) < 4) continue;
          const reg = rA < rB ? 'A' : 'B';
          return mc(`${two}. ${L(`Totes dues sèries de dades tenen la mateixa mitjana (${m}). Quina és <b>més regular</b> (té menys dispersió)?`, `Las dos series de datos tienen la misma media (${m}). ¿Cuál es <b>más regular</b> (tiene menos dispersión)?`)}`, reg, [reg === 'A' ? 'B' : 'A'], { fixed: ['A', 'B'], big: true, vis, long: true, ex: L(`Rang de A: ${rA}. Rang de B: ${rB}. Com més petit és el rang, més a prop de la mitjana queden les dades: la sèrie ${reg} és més regular.`, `Rango de A: ${rA}. Rango de B: ${rB}. Cuanto menor es el rango, más cerca de la media quedan los datos: la serie ${reg} es más regular.`), chk: { t: 'reg', A: G1, B: G2 } });
        }
        const s1 = Math.sqrt(variance(G1)), s2 = Math.sqrt(variance(G2));
        if (Math.max(s1, s2) / Math.min(s1, s2) < 1.6) continue;
        const big = s1 > s2 ? 'A' : 'B', same = L('Tenen la mateixa', 'Tienen la misma');
        return mc(`${two}. ${L(`Totes dues sèries tenen mitjana ${m}. Quina té la <b>desviació típica</b> més gran?`, `Las dos series tienen media ${m}. ¿Cuál tiene la <b>desviación típica</b> mayor?`)}`, big, [big === 'A' ? 'B' : 'A', same], { fixed: ['A', 'B', same], vis, long: true, ex: L(`σ(A) ≈ ${fmtDf(s1, 2)} i σ(B) ≈ ${fmtDf(s2, 2)}. Les dades de la sèrie ${big} s'allunyen més de la mitjana.`, `σ(A) ≈ ${fmtDf(s1, 2)} y σ(B) ≈ ${fmtDf(s2, 2)}. Los datos de la serie ${big} se alejan más de la media.`), chk: { t: 'sdcmp', A: G1, B: G2 } });
      }
      return statDisp(1);
    }
    const n = pick([4, 5]), v = aroundMean(C, n, ri(2, 5));
    if (!v) return statDisp(L_);
    const m = mean(v), d = v.map(x => x - m), va = variance(v), sd = Math.sqrt(va);
    const dev = `(${d.map(x => `${sgn(x)}²`).join(' + ')}) : ${n}`;
    if (L_ === 3) return dinp(`${lab}. ${L('Quina és la <b>variància</b>?', '¿Cuál es la <b>varianza</b>?')}`, va, { vis: listVis(v), long: true, ex: L(`Mitjana: ${sum(v)} : ${n} = ${m}. Desviacions: ${d.map(fmt).join(', ')}. Variància = ${dev} = ${fmtD(va)}.`, `Media: ${sum(v)} : ${n} = ${m}. Desviaciones: ${d.map(fmt).join(', ')}. Varianza = ${dev} = ${fmtD(va)}.`), chk: { t: 'var', v } });
    if (Math.abs(sd * 100 - Math.floor(sd * 100) - .5) < .02) return statDisp(L_);
    const ans = Math.round(sd * 100) / 100;
    return dinp(`${lab}. ${L('Quina és la <b>desviació típica</b>? Arrodoneix a les centèsimes.', '¿Cuál es la <b>desviación típica</b>? Redondea a las centésimas.')}`, ans, { vis: listVis(v), long: true, ex: L(`Mitjana: ${m}. Variància = ${dev} = ${fmtD(va)}. Desviació típica = √${fmtD(va)} ≈ ${fmtD(ans)}.`, `Media: ${m}. Varianza = ${dev} = ${fmtD(va)}. Desviación típica = √${fmtD(va)} ≈ ${fmtD(ans)}.`), chk: { t: 'sd', v } });
  }

  const HISTC = [
    { ca: ['Alçada dels alumnes (cm)', 'mesuren', 'alumnes'], es: ['Altura de los alumnos (cm)', 'miden', 'alumnos'], e0: [145, 150], w: 10, k: 4, u: 'cm' },
    { ca: ["Temps per arribar a l'institut (min)", 'triguen', 'alumnes'], es: ['Tiempo para llegar al instituto (min)', 'tardan', 'alumnos'], e0: [0], w: 5, k: 5, u: 'min' },
    { ca: ['Pes de les motxilles (kg)', 'pesen', 'motxilles'], es: ['Peso de las mochilas (kg)', 'pesan', 'mochilas'], e0: [2], w: 2, k: 4, u: 'kg' },
    { ca: ['Hores de son de la nit passada', 'dormen', 'alumnes'], es: ['Horas de sueño de la noche pasada', 'duermen', 'alumnos'], e0: [5], w: 1, k: 5, u: 'h' }];
  const ivl = (a, b) => `[${fmt(a)}, ${fmt(b)})`;
  function statHist(L_) {
    const C = pick(HISTC), e0 = pick(C.e0), ed = [...Array(C.k + 1)].map((_, i) => e0 + i * C.w), fr = [...Array(C.k)].map(() => ri(1, 12));
    const N = sum(fr), vis = histSVG(ed, fr, { xl: L(C.ca[0], C.es[0]), yl: L('Freqüència', 'Frecuencia') }), i = ri(0, C.k - 1);
    const vb = L(C.ca[1], C.es[1]), who = L(C.ca[2], C.es[2]), Q = /motxilles/.test(C.ca[2]) ? L('Quantes', 'Cuántas') : L('Quants', 'Cuántos');
    if (L_ <= 1) return inp(L(`${Q} ${who} ${vb} entre ${fmt(ed[i])} i ${fmt(ed[i + 1])} ${C.u}? <span class="hint">(l'interval ${ivl(ed[i], ed[i + 1])} inclou el ${fmt(ed[i])} però no el ${fmt(ed[i + 1])})</span>`, `¿${Q} ${who} ${vb} entre ${fmt(ed[i])} y ${fmt(ed[i + 1])} ${C.u}? <span class="hint">(el intervalo ${ivl(ed[i], ed[i + 1])} incluye el ${fmt(ed[i])} pero no el ${fmt(ed[i + 1])})</span>`), fr[i], { vis, ex: L(`L'altura de la barra de l'interval ${ivl(ed[i], ed[i + 1])} és ${fr[i]}.`, `La altura de la barra del intervalo ${ivl(ed[i], ed[i + 1])} es ${fr[i]}.`), chk: { t: 'bar', ed, fr, i } });
    if (L_ === 2) { const c = ri(1, C.k - 1), s = sum(fr.slice(0, c)); return inp(L(`${Q} ${who} ${vb} <b>menys de ${fmt(ed[c])} ${C.u}</b>?`, `¿${Q} ${who} ${vb} <b>menos de ${fmt(ed[c])} ${C.u}</b>?`), s, { vis, ex: L(`Sumem les barres de l'esquerra del ${fmt(ed[c])}: ${fr.slice(0, c).join(' + ')} = ${s}.`, `Sumamos las barras a la izquierda del ${fmt(ed[c])}: ${fr.slice(0, c).join(' + ')} = ${s}.`), chk: { t: 'less', ed, fr, c } }); }
    if (L_ === 3) {
      if (Math.random() < .5) return dinp(L(`Quina és la <b>marca de classe</b> de l'interval ${ivl(ed[i], ed[i + 1])}?`, `¿Cuál es la <b>marca de clase</b> del intervalo ${ivl(ed[i], ed[i + 1])}?`), (ed[i] + ed[i + 1]) / 2, { vis, ex: L(`La marca de classe és el punt del mig: (${fmt(ed[i])} + ${fmt(ed[i + 1])}) : 2 = ${fmtD((ed[i] + ed[i + 1]) / 2)}.`, `La marca de clase es el punto medio: (${fmt(ed[i])} + ${fmt(ed[i + 1])}) : 2 = ${fmtD((ed[i] + ed[i + 1]) / 2)}.`), chk: { t: 'mark', ed, i } });
      const mx = Math.max(...fr); if (fr.filter(x => x === mx).length > 1) return statHist(L_);
      const mi = fr.indexOf(mx);
      return mc(L("Quin és l'<b>interval modal</b>?", '¿Cuál es el <b>intervalo modal</b>?'), ivl(ed[mi], ed[mi + 1]), fr.map((_, k) => ivl(ed[k], ed[k + 1])).filter((_, k) => k !== mi), { vis, ex: L(`L'interval modal és el que té la barra més alta (${mx}).`, `El intervalo modal es el que tiene la barra más alta (${mx}).`), chk: { t: 'modal', ed, fr } });
    }
    if (L_ === 4) {
      const cm = ed.slice(0, -1).map((e, k) => e + C.w / 2), S = sum(cm.map((c, k) => c * fr[k])), mn = S / N;
      if (Math.abs(mn * 100 - Math.round(mn * 100)) > 1e-6) return statHist(L_);
      return dinp(L(`Quina és la <b>mitjana</b> aproximada? Fes servir les marques de classe.`, `¿Cuál es la <b>media</b> aproximada? Usa las marcas de clase.`), mn, { vis, long: true, ex: L(`Marques de classe: ${cm.map(fmtD).join(', ')}. Mitjana = (${cm.map((c, k) => `${fmtD(c)}·${fr[k]}`).join(' + ')}) : ${N} = ${fmtD(S)} : ${N} = ${fmtD(mn)}.`, `Marcas de clase: ${cm.map(fmtD).join(', ')}. Media = (${cm.map((c, k) => `${fmtD(c)}·${fr[k]}`).join(' + ')}) : ${N} = ${fmtD(S)} : ${N} = ${fmtD(mn)}.`), chk: { t: 'hmean', ed, fr } });
    }
    const cum = fr.map((_, k) => sum(fr.slice(0, k + 1)));
    // amb N parell, la mediana és entre la dada N/2 i la N/2 + 1: han de quedar dins el mateix interval
    if (N % 2 === 0 && cum.includes(N / 2)) return statHist(L_);
    const mk = cum.findIndex(c => c >= Math.ceil(N / 2));
    return mc(L(`En quin interval hi ha la <b>mediana</b>? <span class="hint">(hi ha ${N} ${who})</span>`, `¿En qué intervalo está la <b>mediana</b>? <span class="hint">(hay ${N} ${who})</span>`), ivl(ed[mk], ed[mk + 1]), fr.map((_, k) => ivl(ed[k], ed[k + 1])).filter((_, k) => k !== mk), { vis, long: true, ex: L(`La mediana deixa la meitat de les dades a cada costat. Freqüències acumulades: ${cum.join(', ')}. La dada del mig (${N % 2 ? `la ${(N + 1) / 2}a` : `entre la ${N / 2}a i la ${N / 2 + 1}a`}) és a ${ivl(ed[mk], ed[mk + 1])}.`, `La mediana deja la mitad de los datos a cada lado. Frecuencias acumuladas: ${cum.join(', ')}. El dato central (${N % 2 ? `el ${(N + 1) / 2}.º` : `entre el ${N / 2}.º y el ${N / 2 + 1}.º`}) está en ${ivl(ed[mk], ed[mk + 1])}.`), chk: { t: 'medInt', ed, fr } });
  }

  // Quartils sense ambigüitat: amb N = 4k + 3 dades, el mètode no importa si les dues dades que envolten cada quartil són iguals
  function qList() {
    const k = pick([1, 2]), N = 4 * k + 3, lo = ri(1, 20);
    for (let t = 0; t < 400; t++) {
      const s = [...Array(N)].map(() => lo + ri(0, 14)).sort((a, b) => a - b);
      s[k + 1] = s[k]; s[3 * k + 1] = s[3 * k + 2];
      s.sort((a, b) => a - b);
      if (s[k] !== s[k + 1] || s[3 * k + 1] !== s[3 * k + 2]) continue;
      if (s[k] === s[2 * k + 1] || s[2 * k + 1] === s[3 * k + 1]) continue;
      return { s, k, q1: s[k], md: s[2 * k + 1], q3: s[3 * k + 1] };
    }
    return null;
  }
  const BOXC = [{ ca: 'Notes de l\'examen de mates', es: 'Notas del examen de mates', lo: 0, hi: 10, st: 1 }, { ca: 'Minuts diaris de lectura', es: 'Minutos diarios de lectura', lo: 0, hi: 60, st: 5 }, { ca: 'Punts per partit d\'un equip', es: 'Puntos por partido de un equipo', lo: 40, hi: 100, st: 5 }];
  function boxData(C, spreadMin = 0) {
    for (let t = 0; t < 400; t++) {
      const g = (C.hi - C.lo) / C.st, v = [...Array(5)].map(() => C.lo + ri(0, g) * C.st).sort((a, b) => a - b);
      if (new Set(v).size === 5 && v[3] - v[1] >= spreadMin) return v;
    }
    return null;
  }
  function statBox(L_) {
    if (L_ <= 2) {
      const d = qList(); if (!d) return statBox(L_);
      const sh = shuffle(d.s), which = Math.random() < .5;
      const ex0 = L(`Ordenem les ${d.s.length} dades: ${d.s.join(', ')}. La mediana és ${d.md} (la del mig). Q1 és la mediana de la meitat de sota (${d.q1}) i Q3, la de la meitat de dalt (${d.q3}).`, `Ordenamos los ${d.s.length} datos: ${d.s.join(', ')}. La mediana es ${d.md} (el del medio). Q1 es la mediana de la mitad de abajo (${d.q1}) y Q3, la de la mitad de arriba (${d.q3}).`);
      if (L_ <= 1) return inp(which ? L('Quin és el <b>primer quartil</b> (Q1)?', '¿Cuál es el <b>primer cuartil</b> (Q1)?') : L('Quin és el <b>tercer quartil</b> (Q3)?', '¿Cuál es el <b>tercer cuartil</b> (Q3)?'), which ? d.q1 : d.q3, { vis: listVis(sh), ex: ex0, chk: { t: which ? 'q1' : 'q3', s: d.s } });
      return inp(L('Quin és el <b>rang interquartílic</b> (Q3 − Q1)?', '¿Cuál es el <b>rango intercuartílico</b> (Q3 − Q1)?'), d.q3 - d.q1, { vis: listVis(sh), ex: ex0 + ` Q3 − Q1 = ${d.q3} − ${d.q1} = ${d.q3 - d.q1}.`, chk: { t: 'iqr', s: d.s } });
    }
    const C = pick(BOXC), lab = L(C.ca, C.es);
    if (L_ <= 4) {
      const v = boxData(C, 2 * C.st); if (!v) return statBox(L_);
      const vis = boxSVG([{ v, col: '#8FD8FF' }], C.lo, C.hi, C.st);
      if (L_ === 3) {
        const q = pick([['md', L('la <b>mediana</b>', 'la <b>mediana</b>'), v[2]], ['q1', L('el <b>primer quartil</b>', 'el <b>primer cuartil</b>'), v[1]], ['q3', L('el <b>tercer quartil</b>', 'el <b>tercer cuartil</b>'), v[3]], ['iqr', L('el <b>rang interquartílic</b>', 'el <b>rango intercuartílico</b>'), v[3] - v[1]], ['rng', L('el <b>rang</b>', 'el <b>rango</b>'), v[4] - v[0]]]);
        return inp(`${lab}. ${L(`Quin és ${q[1]}?`, `¿Cuál es ${q[1]}?`)}`, q[2], { vis, ex: L(`Al diagrama: mínim ${v[0]}, Q1 = ${v[1]}, mediana ${v[2]}, Q3 = ${v[3]} i màxim ${v[4]}. ${q[0] === 'iqr' ? `Q3 − Q1 = ${v[3] - v[1]}.` : q[0] === 'rng' ? `Màxim − mínim = ${v[4] - v[0]}.` : ''}`, `En el diagrama: mínimo ${v[0]}, Q1 = ${v[1]}, mediana ${v[2]}, Q3 = ${v[3]} y máximo ${v[4]}. ${q[0] === 'iqr' ? `Q3 − Q1 = ${v[3] - v[1]}.` : q[0] === 'rng' ? `Máximo − mínimo = ${v[4] - v[0]}.` : ''}`).trim(), chk: { t: 'read', v, q: q[0] } });
      }
      const q = pick([[L(`és inferior a ${v[1]}`, `es inferior a ${v[1]}`), 25], [L(`és inferior a ${v[2]}`, `es inferior a ${v[2]}`), 50], [L(`és inferior a ${v[3]}`, `es inferior a ${v[3]}`), 75], [L(`està entre ${v[1]} i ${v[3]}`, `está entre ${v[1]} y ${v[3]}`), 50], [L(`és superior a ${v[1]}`, `es superior a ${v[1]}`), 75], [L(`és superior a ${v[3]}`, `es superior a ${v[3]}`), 25]]);
      return inp(`${lab}. ${L(`Aproximadament, quin percentatge de les dades ${q[0]}?`, `Aproximadamente, ¿qué porcentaje de los datos ${q[0]}?`)}`, q[1], { unit: '%', vis, ex: L('Els quartils parteixen les dades ordenades en quatre trossos amb el 25 % de les dades cadascun: mínim–Q1, Q1–mediana, mediana–Q3 i Q3–màxim.', 'Los cuartiles parten los datos ordenados en cuatro trozos con el 25 % de los datos cada uno: mínimo–Q1, Q1–mediana, mediana–Q3 y Q3–máximo.'), chk: { t: 'pct', v, q: q[1] } });
    }
    for (let t = 0; t < 200; t++) {
      const A = boxData(C), Bv = boxData(C); if (!A || !Bv) continue;
      const kind = pick(['iqr', 'md', 'rng']), f = v => kind === 'iqr' ? v[3] - v[1] : kind === 'md' ? v[2] : v[4] - v[0];
      if (Math.abs(f(A) - f(Bv)) < 2 * C.st) continue;
      const win = f(A) > f(Bv) ? 'A' : 'B', qq = kind === 'iqr' ? L('té el <b>rang interquartílic</b> més gran', 'tiene el <b>rango intercuartílico</b> mayor') : kind === 'md' ? L('té la <b>mediana</b> més alta', 'tiene la <b>mediana</b> más alta') : L('té el <b>rang</b> més gran', 'tiene el <b>rango</b> mayor');
      return mc(`${lab} ${L('de dos grups', 'de dos grupos')}. ${L(`Quin grup ${qq}?`, `¿Qué grupo ${qq}?`)}`, L(`El grup ${win}`, `El grupo ${win}`), [L(`El grup ${win === 'A' ? 'B' : 'A'}`, `El grupo ${win === 'A' ? 'B' : 'A'}`)], { fixed: [L('El grup A', 'El grupo A'), L('El grup B', 'El grupo B')], vis: boxSVG([{ v: A, col: '#8FD8FF', lab: 'A' }, { v: Bv, col: '#FFC6DC', lab: 'B' }], C.lo, C.hi, C.st), ex: L(`A: mínim ${A[0]}, Q1 ${A[1]}, mediana ${A[2]}, Q3 ${A[3]}, màxim ${A[4]}. B: ${Bv[0]}, ${Bv[1]}, ${Bv[2]}, ${Bv[3]}, ${Bv[4]}.`, `A: mínimo ${A[0]}, Q1 ${A[1]}, mediana ${A[2]}, Q3 ${A[3]}, máximo ${A[4]}. B: ${Bv[0]}, ${Bv[1]}, ${Bv[2]}, ${Bv[3]}, ${Bv[4]}.`), chk: { t: 'cmp', A, B: Bv, kind } });
    }
    return statBox(3);
  }

  // Dues variables: núvol de punts i correlació
  const S2C = [
    { s: 1, ca: ["Hores d'estudi", 'Nota'], es: ['Horas de estudio', 'Nota'], x: [0, 10, 2], y: [0, 10, 2], m: .6, n: 3, px: [0, 10] },
    { s: 1, ca: ['Temperatura (°C)', 'Gelats venuts'], es: ['Temperatura (°C)', 'Helados vendidos'], x: [10, 40, 5], y: [0, 200, 40], m: 5, n: -30, px: [12, 38] },
    { s: 1, ca: ['Alçada (cm)', 'Pes (kg)'], es: ['Altura (cm)', 'Peso (kg)'], x: [140, 190, 10], y: [30, 90, 10], m: .8, n: -70, px: [145, 185] },
    { s: -1, ca: ['Hores de mòbil', 'Hores de son'], es: ['Horas de móvil', 'Horas de sueño'], x: [0, 6, 1], y: [5, 11, 1], m: -.5, n: 10, px: [0, 6] },
    { s: -1, ca: ['Anys del cotxe', "Preu (milers d'€)"], es: ['Años del coche', 'Precio (miles de €)'], x: [0, 12, 2], y: [0, 30, 5], m: -2, n: 26, px: [0, 12] },
    { s: -1, ca: ['Altitud (m)', 'Temperatura (°C)'], es: ['Altitud (m)', 'Temperatura (°C)'], x: [0, 2000, 400], y: [0, 25, 5], m: -.008, n: 22, px: [0, 2000] },
    { s: 0, ca: ['Número de sabata', 'Nota de mates'], es: ['Número de zapato', 'Nota de mates'], x: [34, 46, 2], y: [0, 10, 2], m: 0, n: 5.5, px: [35, 45] },
    { s: 0, ca: ['Mes de naixement', 'Alçada (cm)'], es: ['Mes de nacimiento', 'Altura (cm)'], x: [0, 12, 2], y: [140, 180, 10], m: 0, n: 160, px: [1, 12] }];
  const corr = P => { const n = P.length, mx = mean(P.map(p => p[0])), my = mean(P.map(p => p[1])); let a = 0, b = 0, c = 0; P.forEach(([x, y]) => { a += (x - mx) * (y - my); b += (x - mx) ** 2; c += (y - my) ** 2; }); return a / Math.sqrt(b * c); };
  function cloud(C, cat) {
    const [ya, yb] = C.y, spanY = yb - ya;
    for (let t = 0; t < 600; t++) {
      const noise = cat === 'strong' ? spanY * .05 : cat === 'weak' ? spanY * .2 : spanY * .25, P = [];
      for (let i = 0; i < ri(12, 16); i++) {
        const x = C.px[0] + Math.random() * (C.px[1] - C.px[0]), base = cat === 'none' ? ya + spanY * (.15 + .7 * Math.random()) : C.m * x + C.n, y = base + (Math.random() * 2 - 1) * noise * (cat === 'none' ? 0 : 1.7);
        if (y < ya + spanY * .03 || y > yb - spanY * .03) { P.length = 0; break; }
        P.push([Math.round(x * 100) / 100, Math.round(y * 100) / 100]);
      }
      if (P.length < 12) continue;
      const rs = corr(P), r = Math.abs(rs);
      if (cat !== 'none' && Math.sign(rs) !== C.s) continue;
      if ((cat === 'strong' && r >= .9) || (cat === 'weak' && r >= .4 && r <= .7) || (cat === 'none' && r <= .15)) return P;
    }
    return null;
  }
  function stat2d(L_) {
    const pool = L_ === 2 || L_ >= 4 ? S2C.filter(c => c.s) : S2C, C = pick(pool), cat = C.s ? (L_ <= 1 || L_ >= 4 ? 'strong' : pick(['strong', 'weak'])) : 'none';
    const P = cloud(C, cat); if (!P) return stat2d(L_);
    const r = corr(P), ax = { xl: L(C.ca[0], C.es[0]), yl: L(C.ca[1], C.es[1]) };
    const T = { 1: L('positiva', 'positiva'), '-1': L('negativa', 'negativa'), 0: L('no hi ha correlació (nul·la)', 'no hay correlación (nula)') };
    if (L_ <= 1) return mc(L('Quin tipus de correlació hi ha entre les dues variables?', '¿Qué tipo de correlación hay entre las dos variables?'), T[C.s], [T[1], T[-1], T[0]].filter(x => x !== T[C.s]), { fixed: [T[1], T[-1], T[0]], vis: scatSVG(P, C.x, C.y, ax), ex: C.s > 0 ? L('Quan una variable creix, l\'altra també tendeix a créixer: els punts pugen cap a la dreta. És positiva.', 'Cuando una variable crece, la otra también tiende a crecer: los puntos suben hacia la derecha. Es positiva.') : C.s < 0 ? L('Quan una variable creix, l\'altra tendeix a baixar: els punts baixen cap a la dreta. És negativa.', 'Cuando una variable crece, la otra tiende a bajar: los puntos bajan hacia la derecha. Es negativa.') : L('Els punts estan escampats sense cap direcció: no hi ha relació entre les variables.', 'Los puntos están dispersos sin ninguna dirección: no hay relación entre las variables.'), chk: { t: 'type', P, s: C.s } });
    const lab = (s, st) => `${s > 0 ? L('Positiva', 'Positiva') : L('Negativa', 'Negativa')} ${L('i', 'y')} ${st === 'strong' ? L('forta', 'fuerte') : L('feble', 'débil')}`;
    if (L_ === 2) return mc(L('Com és la correlació entre les dues variables?', '¿Cómo es la correlación entre las dos variables?'), lab(C.s, cat), [lab(1, 'strong'), lab(1, 'weak'), lab(-1, 'strong'), lab(-1, 'weak')].filter(x => x !== lab(C.s, cat)), { fixed: [lab(1, 'strong'), lab(1, 'weak'), lab(-1, 'strong'), lab(-1, 'weak')], vis: scatSVG(P, C.x, C.y, ax), ex: L(`El signe el dona la direcció (${C.s > 0 ? 'pugen' : 'baixen'} cap a la dreta) i la força, com de junts estan els punts al voltant d'una recta: ${cat === 'strong' ? 'molt junts, és forta' : 'força escampats, és feble'}.`, `El signo lo da la dirección (${C.s > 0 ? 'suben' : 'bajan'} hacia la derecha) y la fuerza, lo juntos que están los puntos alrededor de una recta: ${cat === 'strong' ? 'muy juntos, es fuerte' : 'bastante dispersos, es débil'}.`), chk: { t: 'strength', P, s: C.s, cat } });
    if (L_ === 3) {
      const V = { 's1': .94, 'w1': .55, 'n0': .03, 'w-1': -.55, 's-1': -.94 }, key = (cat === 'none' ? 'n' : cat === 'strong' ? 's' : 'w') + C.s, cands = Object.keys(V).filter(k => k !== key);
      return mc(L('Quin d\'aquests valors pot ser el <b>coeficient de correlació</b>?', '¿Cuál de estos valores puede ser el <b>coeficiente de correlación</b>?'), fmtD(V[key]), shuffle(cands).slice(0, 3).map(k => fmtD(V[k])), { vis: scatSVG(P, C.x, C.y, ax), ex: L(`r és a prop d'1 si la correlació és positiva i forta, a prop de −1 si és negativa i forta, i a prop de 0 si no n'hi ha. Aquí r ≈ ${fmtDf(r, 2)}.`, `r está cerca de 1 si la correlación es positiva y fuerte, cerca de −1 si es negativa y fuerte, y cerca de 0 si no la hay. Aquí r ≈ ${fmtDf(r, 2)}.`), chk: { t: 'coef', P } });
    }
    // recta de regressió: la que fa servir la teoria per generar el núvol
    const m = C.m, n = C.n;
    if (L_ === 4) {
      const [xa, xb, xs] = C.x; let x0; do x0 = xa + xs * ri(1, Math.round((xb - xa) / xs) - 1); while (m * x0 + n < C.y[0] || m * x0 + n > C.y[1]);
      const y0 = Math.round((m * x0 + n) * 1000) / 1000;
      return dinp(L(`La recta de regressió és <b>y = ${fmtD(m)}x ${n < 0 ? '−' : '+'} ${fmtD(Math.abs(n))}</b>. Quin valor de «${C.ca[1][0].toLowerCase() + C.ca[1].slice(1)}» es pot preveure per a x = ${fmt(x0)}?`, `La recta de regresión es <b>y = ${fmtD(m)}x ${n < 0 ? '−' : '+'} ${fmtD(Math.abs(n))}</b>. ¿Qué valor de «${C.es[1][0].toLowerCase() + C.es[1].slice(1)}» se puede prever para x = ${fmt(x0)}?`), y0, { vis: scatSVG(P, C.x, C.y, { ...ax, line: [m, n] }), long: true, ex: L(`Substituïm x = ${fmt(x0)}: y = ${fmtD(m)} · ${fmt(x0)} ${n < 0 ? '−' : '+'} ${fmtD(Math.abs(n))} = ${fmtD(y0)}. És una previsió: el valor real pot ser una mica diferent.`, `Sustituimos x = ${fmt(x0)}: y = ${fmtD(m)} · ${fmt(x0)} ${n < 0 ? '−' : '+'} ${fmtD(Math.abs(n))} = ${fmtD(y0)}. Es una previsión: el valor real puede ser algo distinto.`), chk: { t: 'pred', m, n, x0 } });
    }
    const mx = mean(P.map(p => p[0])), my = mean(P.map(p => p[1])), eqS = (a, b) => Math.abs(b) < 1e-9 ? `y = ${fmtD(a)}x` : `y = ${fmtD(a)}x ${b < 0 ? '−' : '+'} ${fmtD(Math.abs(b))}`;
    const rn = v => Math.round(v), dm = -m, dn = rn(my - dm * mx), m3 = 3 * m, n3 = rn(my - m3 * mx), nShift = rn(n + (C.y[1] - C.y[0]) * .35 * (my > (C.y[0] + C.y[1]) / 2 ? -1 : 1));
    const big = C.x[1] > 100, pt = `(${big ? fmt(Math.round(mx)) : fmtDf(mx, 1)}; ${fmtDf(my, 1)})`;
    return mc(L('Quina recta s\'ajusta millor al núvol de punts?', '¿Qué recta se ajusta mejor a la nube de puntos?'), eqS(m, n), [eqS(dm, dn), eqS(m3, n3), eqS(m, nShift)], { list: true, vis: scatSVG(P, C.x, C.y, ax), ex: L(`El pendent ha de tenir el signe de la correlació (${C.s > 0 ? 'positiu' : 'negatiu'}) i la recta ha de passar pel mig dels punts, a prop de ${pt}.`, `La pendiente debe tener el signo de la correlación (${C.s > 0 ? 'positivo' : 'negativo'}) y la recta debe pasar por el medio de los puntos, cerca de ${pt}.`), chk: { t: 'fit', P, cands: [[m, n], [dm, dn], [m3, n3], [m, nShift]] } });
  }

  Object.assign(EX, {
    'stat.freq': L_ => statFreq(L_),
    'stat.pie': L_ => statPie(L_),
    'stat.disp': L_ => statDisp(L_),
    'stat.hist': L_ => statHist(L_),
    'stat.box': L_ => statBox(L_),
    'stat.2d': L_ => stat2d(L_)
  });

  /* ================= 6. Algorismes i programació: llegir programes en Python ================= */
  const PYK = /\b(for|in|range|if|elif|else|while|print|and|or|not|import|True|False)\b/g;
  const escH = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const hlPy = ln => ln.split(/("[^"]*")/).map((p, i) => i % 2 ? `<span style="color:#FFD479">${escH(p)}</span>` : escH(p).replace(PYK, '<span style="color:#FF9EC0">$1</span>')).join('');
  function codeHTML(lines) {
    return `<div style="background:#2B1A38;color:#F4EEF9;border-radius:14px;padding:12px 16px 12px 8px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:${Math.max(...lines.map(l => l.length)) > 30 ? 14 : 16}px;line-height:1.6;text-align:left;white-space:pre;overflow-x:auto;max-width:100%;box-sizing:border-box">${lines.map((l, i) => `<div><span data-n style="color:#8A7B99;display:inline-block;width:1.8em;user-select:none">${i + 1}</span>${hlPy(l)}</div>`).join('')}</div>`;
  }
  const inl = s => `<code style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.95em">${escH(s)}</code>`;
  const QW = () => L('Què escriu aquest programa?', '¿Qué escribe este programa?');
  const I = '    ';
  // Cada generador torna { code, ans, q?, opts? (sortides de text), ex, hint? }
  const PROG = {
    var: L_ => {
      if (L_ <= 1) { const op = pick(['+', '*', '-']), a = ri(4, 12), b = op === '-' ? ri(1, a - 1) : ri(2, 9), r = op === '+' ? a + b : op === '*' ? a * b : a - b;
        return { code: [`a = ${a}`, `b = a ${op} ${b}`, 'print(b)'], ans: r, ex: L(`La variable a val ${a}. Llavors b = ${a} ${op === '*' ? '·' : op === '-' ? '−' : '+'} ${b} = ${r}, i print(b) escriu ${r}. A Python, * vol dir multiplicar.`, `La variable a vale ${a}. Entonces b = ${a} ${op === '*' ? '·' : op === '-' ? '−' : '+'} ${b} = ${r}, y print(b) escribe ${r}. En Python, * quiere decir multiplicar.`) }; }
      if (L_ === 2) { const a = ri(2, 9), k = ri(2, 5), d = ri(1, a * k - 1), r = a * k - d;
        return { code: [`a = ${a}`, `b = a * ${k}`, `a = b - ${d}`, 'print(a)'], ans: r, ex: L(`Línia a línia: a = ${a}; b = ${a} · ${k} = ${a * k}; després a canvia i passa a valer ${a * k} − ${d} = ${r}. Una variable guarda sempre l'últim valor que li donem.`, `Línea a línea: a = ${a}; b = ${a} · ${k} = ${a * k}; después a cambia y pasa a valer ${a * k} − ${d} = ${r}. Una variable guarda siempre el último valor que le damos.`) }; }
      if (L_ === 3) { const x = ri(2, 6), dy = ri(1, 4), y = x + dy, x2 = x * y, y2 = x2 - y;
        return { code: [`x = ${x}`, `y = x + ${dy}`, 'x = x * y', 'y = x - y', 'print(y)'], ans: y2, ex: L(`x = ${x}; y = ${x} + ${dy} = ${y}; x = ${x} · ${y} = ${x2}; y = ${x2} − ${y} = ${y2}. Compte: a la línia 4, x ja val ${x2}.`, `x = ${x}; y = ${x} + ${dy} = ${y}; x = ${x} · ${y} = ${x2}; y = ${x2} − ${y} = ${y2}. Cuidado: en la línea 4, x ya vale ${x2}.`) }; }
      if (L_ === 4) { const n = ri(20, 99), d = ri(3, 9), q = Math.floor(n / d), r = n % d, w = pick(['q', 'r', 'q + r']), ans = w === 'q' ? q : w === 'r' ? r : q + r;
        return { code: [`n = ${n}`, `q = n // ${d}`, `r = n % ${d}`, `print(${w})`], ans, hint: L('// és la divisió entera i % és el residu', '// es la división entera y % es el resto'), ex: L(`${n} : ${d} fa ${q} i en sobren ${r}: q = ${q} i r = ${r}. El programa escriu ${ans}.`, `${n} : ${d} da ${q} y sobran ${r}: q = ${q} y r = ${r}. El programa escribe ${ans}.`) }; }
      const a = ri(2, 9), b = ri(2, 6), f = ri(0, 2), code = [`a = ${a}`, `b = ${b}`, ['c = a + b * 2 ** 2', 'c = (a + b) * 2 ** 2', 'c = a * b - a // 2'][f], 'print(c)'], ans = [a + b * 4, (a + b) * 4, a * b - Math.floor(a / 2)][f];
      return { code, ans, hint: L('** és la potència i // la divisió entera', '** es la potencia y // la división entera'), ex: [L(`Primer la potència (2 ** 2 = 4), després el producte (${b} · 4 = ${4 * b}) i al final la suma: ${a} + ${4 * b} = ${ans}.`, `Primero la potencia (2 ** 2 = 4), después el producto (${b} · 4 = ${4 * b}) y al final la suma: ${a} + ${4 * b} = ${ans}.`), L(`El parèntesi va primer: ${a} + ${b} = ${a + b}; després 2 ** 2 = 4; ${a + b} · 4 = ${ans}.`, `El paréntesis va primero: ${a} + ${b} = ${a + b}; después 2 ** 2 = 4; ${a + b} · 4 = ${ans}.`), L(`${a} · ${b} = ${a * b}; ${a} // 2 = ${Math.floor(a / 2)} (divisió entera); ${a * b} − ${Math.floor(a / 2)} = ${ans}.`, `${a} · ${b} = ${a * b}; ${a} // 2 = ${Math.floor(a / 2)} (división entera); ${a * b} − ${Math.floor(a / 2)} = ${ans}.`)][f] };
    },
    if: L_ => {
      if (L_ <= 1) { const n = ri(1, 12), op = pick(['>', '<', '>=', '<=', '==']), k = ri(3, 9), yes = { '>': n > k, '<': n < k, '>=': n >= k, '<=': n <= k, '==': n === k }[op], s1 = L('gran', 'grande'), s2 = L('petit', 'pequeño');
        return { code: [`n = ${n}`, `if n ${op} ${k}:`, `${I}print("${s1}")`, 'else:', `${I}print("${s2}")`], ans: yes ? s1 : s2, opts: [s1, s2], ex: L(`La condició n ${op} ${k} amb n = ${n} és ${yes ? 'certa' : 'falsa'}, així que s'executa ${yes ? 'la part de l\'if' : 'la part de l\'else'}.`, `La condición n ${op} ${k} con n = ${n} es ${yes ? 'verdadera' : 'falsa'}, así que se ejecuta ${yes ? 'la parte del if' : 'la parte del else'}.`) }; }
      if (L_ === 2) { const x = ri(5, 40), ev = x % 2 === 0, r = ev ? x / 2 : 3 * x + 1;
        return { code: [`x = ${x}`, 'if x % 2 == 0:', `${I}x = x // 2`, 'else:', `${I}x = 3 * x + 1`, 'print(x)'], ans: r, ex: L(`${x} % 2 = ${x % 2}: el nombre és ${ev ? 'parell' : 'senar'}. ${ev ? `x = ${x} // 2 = ${r}` : `x = 3 · ${x} + 1 = ${r}`}.`, `${x} % 2 = ${x % 2}: el número es ${ev ? 'par' : 'impar'}. ${ev ? `x = ${x} // 2 = ${r}` : `x = 3 · ${x} + 1 = ${r}`}.`) }; }
      if (L_ === 3) { const n = ri(2, 10), G = [L('Excel·lent', 'Sobresaliente'), 'Notable', L('Aprovat', 'Aprobado'), L('Suspès', 'Suspenso')], k = n >= 9 ? 0 : n >= 7 ? 1 : n >= 5 ? 2 : 3;
        return { code: [`nota = ${n}`, 'if nota >= 9:', `${I}print("${G[0]}")`, 'elif nota >= 7:', `${I}print("${G[1]}")`, 'elif nota >= 5:', `${I}print("${G[2]}")`, 'else:', `${I}print("${G[3]}")`], ans: G[k], opts: G, ex: L(`Es comproven les condicions de dalt a baix i només s'executa la primera que és certa: amb nota = ${n}, és «${G[k]}».`, `Se comprueban las condiciones de arriba abajo y solo se ejecuta la primera que es verdadera: con nota = ${n}, es «${G[k]}».`) }; }
      if (L_ === 4) { const e = ri(3, 80), a = ri(6, 10), b = ri(3, 6), c = ri(2, 4), r = e >= 12 ? (e < 65 ? a : b) : c, ed = L('edat', 'edad'), pr = L('preu', 'precio');
        return { code: [`${ed} = ${e}`, `if ${ed} >= 12:`, `${I}if ${ed} < 65:`, `${I}${I}${pr} = ${a}`, `${I}else:`, `${I}${I}${pr} = ${b}`, 'else:', `${I}${pr} = ${c}`, `print(${pr})`], ans: r, ex: L(`${ed} = ${e}: ${e >= 12 ? `com que ${e} ≥ 12, entrem al primer if; ${e < 65 ? `${e} < 65, preu = ${a}` : `${e} no és < 65, preu = ${b}`}` : `${e} no és ≥ 12, anem a l'últim else: preu = ${c}`}.`, `${ed} = ${e}: ${e >= 12 ? `como ${e} ≥ 12, entramos en el primer if; ${e < 65 ? `${e} < 65, precio = ${a}` : `${e} no es < 65, precio = ${b}`}` : `${e} no es ≥ 12, vamos al último else: precio = ${c}`}.`) }; }
      const p = ri(10, 60), t1 = ri(20, 40), d = ri(3, 12), t2 = ri(15, 35); let v = p; const f1 = v > t1; if (f1) v -= d; const f2 = v > t2; if (f2) v = Math.floor(v / 2);
      return { code: [`p = ${p}`, `if p > ${t1}:`, `${I}p = p - ${d}`, `if p > ${t2}:`, `${I}p = p // 2`, 'print(p)'], ans: v, ex: L(`Són dos if seguits: primer ${p} > ${t1} és ${f1 ? `cert, p = ${p - d}` : 'fals'}; després ${f1 ? p - d : p} > ${t2} és ${f2 ? `cert, p = ${v}` : 'fals'}. Escriu ${v}.`, `Son dos if seguidos: primero ${p} > ${t1} es ${f1 ? `verdadero, p = ${p - d}` : 'falso'}; después ${f1 ? p - d : p} > ${t2} es ${f2 ? `verdadero, p = ${v}` : 'falso'}. Escribe ${v}.`) };
    },
    loop: L_ => {
      if (L_ <= 1) { const a = ri(0, 3), b = a + ri(2, 7), w = L('hola', 'hola');
        return { code: [`for i in range(${a === 0 ? '' : a + ', '}${b}):`, `${I}print("${w}")`], ans: b - a, m: 'lines', q: L(`Quantes vegades escriu «${w}»?`, `¿Cuántas veces escribe «${w}»?`), ex: L(`range(${a === 0 ? '' : a + ', '}${b}) va de ${a} fins a ${b - 1} (el ${b} no hi entra): ${b - a} voltes.`, `range(${a === 0 ? '' : a + ', '}${b}) va de ${a} hasta ${b - 1} (el ${b} no entra): ${b - a} vueltas.`) }; }
      if (L_ === 2) { const a = ri(1, 4), b = a + ri(3, 6), s = (a + b - 1) * (b - a) / 2;
        return { code: ['s = 0', `for i in range(${a}, ${b}):`, `${I}s = s + i`, 'print(s)'], ans: s, ex: L(`i pren els valors ${[...Array(b - a).keys()].map(k => k + a).join(', ')}, i s els va sumant: ${s}.`, `i toma los valores ${[...Array(b - a).keys()].map(k => k + a).join(', ')}, y s los va sumando: ${s}.`) }; }
      if (L_ === 3) {
        if (Math.random() < .5) { const s0 = ri(1, 5), m = ri(2, 3), k = ri(2, 5), r = s0 * m ** k; return { code: [`x = ${s0}`, `for i in range(${k}):`, `${I}x = x * ${m}`, 'print(x)'], ans: r, ex: L(`El bucle fa ${k} voltes i cada volta multiplica per ${m}: ${s0} · ${m}${sup(k)} = ${r}.`, `El bucle da ${k} vueltas y cada vuelta multiplica por ${m}: ${s0} · ${m}${sup(k)} = ${r}.`) }; }
        const a = ri(0, 5), st = ri(2, 6), b = a + st * ri(3, 6) + ri(0, st - 1), vals = []; for (let i = a; i < b; i += st) vals.push(i);
        return { code: [`for i in range(${a}, ${b}, ${st}):`, `${I}print(i)`], ans: vals[vals.length - 1], m: 'last', q: L("Quin és l'últim número que escriu?", '¿Cuál es el último número que escribe?'), ex: L(`Comença a ${a} i va sumant ${st} mentre no arribi a ${b}: ${vals.join(', ')}.`, `Empieza en ${a} y va sumando ${st} mientras no llegue a ${b}: ${vals.join(', ')}.`) };
      }
      if (L_ === 4) {
        if (Math.random() < .5) { const N = ri(40, 99), T = ri(5, 20), d = ri(4, 9); let n = N, c = 0; while (n > T) { n -= d; c++; } return { code: [`n = ${N}`, `while n > ${T}:`, `${I}n = n - ${d}`, 'print(n)'], ans: n, ex: L(`Es resta ${d} mentre n sigui més gran que ${T}. Després de ${c} voltes, n = ${n}, que ja no és > ${T}.`, `Se resta ${d} mientras n sea mayor que ${T}. Después de ${c} vueltas, n = ${n}, que ya no es > ${T}.`) }; }
        const N = ri(20, 200); let n = N, c = 0; while (n > 1) { n = Math.floor(n / 2); c++; }
        return { code: [`n = ${N}`, 'c = 0', 'while n > 1:', `${I}n = n // 2`, `${I}c = c + 1`, 'print(c)'], ans: c, ex: L(`Cada volta divideix n entre 2 (divisió entera) i compta una volta. Calen ${c} voltes per arribar a 1.`, `Cada vuelta divide n entre 2 (división entera) y cuenta una vuelta. Hacen falta ${c} vueltas para llegar a 1.`) };
      }
      const k = ri(2, 5), N = ri(10, 20), cnt = Math.random() < .5; let r = 0; for (let i = 1; i <= N; i++) if (i % k === 0) r += cnt ? 1 : i;
      return { code: ['s = 0', `for i in range(1, ${N + 1}):`, `${I}if i % ${k} == 0:`, `${I}${I}s = s + ${cnt ? '1' : 'i'}`, 'print(s)'], ans: r, ex: L(`Només compten els i múltiples de ${k} entre 1 i ${N}: ${[...Array(Math.floor(N / k)).keys()].map(j => (j + 1) * k).join(', ')}. ${cnt ? `N'hi ha ${r}.` : `Sumen ${r}.`}`, `Solo cuentan los i múltiplos de ${k} entre 1 y ${N}: ${[...Array(Math.floor(N / k)).keys()].map(j => (j + 1) * k).join(', ')}. ${cnt ? `Hay ${r}.` : `Suman ${r}.`}`) };
    },
    logic: L_ => {
      const TF = ['True', 'False'], tf = b => b ? 'True' : 'False', ce = b => b ? L('cert (True)', 'verdadero (True)') : L('fals (False)', 'falso (False)');
      const a = ri(1, 9), b = ri(1, 9), c = ri(0, 3), x = ri(2, 8), y = ri(2, 8);
      if (L_ <= 1) { const r = a > x && b > y; return { code: [`a = ${a}`, `b = ${b}`, `print(a > ${x} and b > ${y})`], ans: tf(r), opts: TF, ex: L(`a > ${x} és ${ce(a > x)} i b > ${y} és ${ce(b > y)}. «and» només és cert si les dues condicions ho són: ${ce(r)}.`, `a > ${x} es ${ce(a > x)} y b > ${y} es ${ce(b > y)}. «and» solo es verdadero si las dos condiciones lo son: ${ce(r)}.`) }; }
      if (L_ === 2) {
        if (Math.random() < .5) { const r = a > x || b > y; return { code: [`a = ${a}`, `b = ${b}`, `print(a > ${x} or b > ${y})`], ans: tf(r), opts: TF, ex: L(`a > ${x} és ${ce(a > x)} i b > ${y} és ${ce(b > y)}. «or» és cert si almenys una de les dues ho és: ${ce(r)}.`, `a > ${x} es ${ce(a > x)} y b > ${y} es ${ce(b > y)}. «or» es verdadero si al menos una de las dos lo es: ${ce(r)}.`) }; }
        const r = !(a > x); return { code: [`a = ${a}`, `print(not a > ${x})`], ans: tf(r), opts: TF, ex: L(`a > ${x} és ${ce(a > x)}, i «not» ho gira: ${ce(r)}.`, `a > ${x} es ${ce(a > x)}, y «not» lo invierte: ${ce(r)}.`) };
      }
      if (L_ === 3) { const r = (a > x && b < y) || c === 0; return { code: [`a = ${a}`, `b = ${b}`, `c = ${c}`, `print((a > ${x} and b < ${y}) or c == 0)`], ans: tf(r), opts: TF, ex: L(`Parèntesi: a > ${x} (${ce(a > x)}) and b < ${y} (${ce(b < y)}) → ${ce(a > x && b < y)}. c == 0 és ${ce(c === 0)}. Amb «or»: ${ce(r)}.`, `Paréntesis: a > ${x} (${ce(a > x)}) and b < ${y} (${ce(b < y)}) → ${ce(a > x && b < y)}. c == 0 es ${ce(c === 0)}. Con «or»: ${ce(r)}.`) }; }
      if (L_ === 4) { const e = ri(8, 20), s1 = 'ESO', s2 = L('no és ESO', 'no es ESO'), ed = L('edat', 'edad'), r = e >= 12 && e <= 16; return { code: [`${ed} = ${e}`, `if ${ed} >= 12 and ${ed} <= 16:`, `${I}print("${s1}")`, 'else:', `${I}print("${s2}")`], ans: r ? s1 : s2, opts: [s1, s2], ex: L(`${e} ≥ 12 és ${ce(e >= 12)} i ${e} ≤ 16 és ${ce(e <= 16)}: la condició amb «and» és ${ce(r)}.`, `${e} ≥ 12 es ${ce(e >= 12)} y ${e} ≤ 16 es ${ce(e <= 16)}: la condición con «and» es ${ce(r)}.`) }; }
      const p = ri(2, 4), q = pick([3, 5, 7].filter(z => z !== p)), N = ri(15, 30), useAnd = Math.random() < .5; let r = 0; for (let i = 1; i <= N; i++) if (useAnd ? (i % p === 0 && i % q === 0) : (i % p === 0 || i % q === 0)) r++;
      return { code: ['c = 0', `for i in range(1, ${N + 1}):`, `${I}if i % ${p} == 0 ${useAnd ? 'and' : 'or'} i % ${q} == 0:`, `${I}${I}c = c + 1`, 'print(c)'], ans: r, ex: useAnd ? L(`Compta els nombres de l'1 al ${N} que són múltiples de ${p} i també de ${q} (múltiples de ${p * q / gcd(p, q)}): ${r}.`, `Cuenta los números del 1 al ${N} que son múltiplos de ${p} y también de ${q} (múltiplos de ${p * q / gcd(p, q)}): ${r}.`) : L(`Compta els nombres de l'1 al ${N} que són múltiples de ${p} o de ${q} (o de tots dos): ${r}.`, `Cuenta los números del 1 al ${N} que son múltiplos de ${p} o de ${q} (o de los dos): ${r}.`) };
    },
    nest: L_ => {
      if (L_ <= 1) { const a = ri(2, 5), b = ri(2, 6); return { code: [`for i in range(${a}):`, `${I}for j in range(${b}):`, `${I}${I}print("*")`], ans: a * b, m: 'lines', q: L('Quants asteriscs escriu?', '¿Cuántos asteriscos escribe?'), ex: L(`El bucle de fora fa ${a} voltes i, a cada volta, el de dins en fa ${b}: ${a} · ${b} = ${a * b}.`, `El bucle de fuera da ${a} vueltas y, en cada vuelta, el de dentro da ${b}: ${a} · ${b} = ${a * b}.`) }; }
      if (L_ === 2) { const a = ri(1, 3), b = a + ri(2, 4), c = ri(2, 6), n = (b - a) * c; return { code: ['c = 0', `for i in range(${a}, ${b}):`, `${I}for j in range(${c}):`, `${I}${I}c = c + 1`, 'print(c)'], ans: n, ex: L(`range(${a}, ${b}) fa ${b - a} voltes i range(${c}), ${c}: ${b - a} · ${c} = ${n}.`, `range(${a}, ${b}) da ${b - a} vueltas y range(${c}), ${c}: ${b - a} · ${c} = ${n}.`) }; }
      if (L_ === 3) { const n = ri(3, 7), r = n * (n + 1) / 2; return { code: ['c = 0', `for i in range(1, ${n + 1}):`, `${I}for j in range(i):`, `${I}${I}c = c + 1`, 'print(c)'], ans: r, ex: L(`El bucle de dins fa i voltes: ${[...Array(n).keys()].map(k => k + 1).join(' + ')} = ${r}.`, `El bucle de dentro da i vueltas: ${[...Array(n).keys()].map(k => k + 1).join(' + ')} = ${r}.`) }; }
      if (L_ === 4) { const a = ri(2, 3), b = ri(2, 4), sa = a * (a + 1) / 2, sb = b * (b + 1) / 2; return { code: ['s = 0', `for i in range(1, ${a + 1}):`, `${I}for j in range(1, ${b + 1}):`, `${I}${I}s = s + i * j`, 'print(s)'], ans: sa * sb, ex: L(`Suma tots els productes i · j amb i de 1 a ${a} i j de 1 a ${b}: (${[...Array(a).keys()].map(k => k + 1).join(' + ')}) · (${[...Array(b).keys()].map(k => k + 1).join(' + ')}) = ${sa} · ${sb} = ${sa * sb}.`, `Suma todos los productos i · j con i de 1 a ${a} y j de 1 a ${b}: (${[...Array(a).keys()].map(k => k + 1).join(' + ')}) · (${[...Array(b).keys()].map(k => k + 1).join(' + ')}) = ${sa} · ${sb} = ${sa * sb}.`) }; }
      const n = ri(4, 8), sumMode = Math.random() < .5; let r = 0; for (let i = 1; i < n; i++) for (let j = 1; j < n; j++) if (sumMode ? i + j === n : i < j) r++;
      return { code: ['c = 0', `for i in range(1, ${n}):`, `${I}for j in range(1, ${n}):`, `${I}${I}if ${sumMode ? `i + j == ${n}` : 'i < j'}:`, `${I}${I}${I}c = c + 1`, 'print(c)'], ans: r, ex: sumMode ? L(`Compta les parelles (i, j), amb valors de l'1 al ${n - 1}, que sumen ${n}: (1, ${n - 1}), (2, ${n - 2})… n'hi ha ${r}.`, `Cuenta las parejas (i, j), con valores del 1 al ${n - 1}, que suman ${n}: (1, ${n - 1}), (2, ${n - 2})… hay ${r}.`) : L(`Compta les parelles amb i < j entre l'1 i el ${n - 1}: ${[...Array(n - 2).keys()].map(k => n - 2 - k).join(' + ')} = ${r}.`, `Cuenta las parejas con i < j entre el 1 y el ${n - 1}: ${[...Array(n - 2).keys()].map(k => n - 2 - k).join(' + ')} = ${r}.`) };
    }
  };
  // Troba l'error: un programa amb una sola línia equivocada
  function progDebug(L_) {
    const T = [
      () => { const N = ri(6, 15); return { goal: L(`sumar els nombres de l'1 al ${N}`, `sumar los números del 1 al ${N}`), code: ['s = 0', `for i in range(1, ${N}):`, `${I}s = s + i`, 'print(s)'], bad: 2, fix: `for i in range(1, ${N + 1}):`, why: L(`range(1, ${N}) s'atura al ${N - 1}: el ${N} no s'hi suma. Cal range(1, ${N + 1}).`, `range(1, ${N}) se detiene en el ${N - 1}: el ${N} no se suma. Hace falta range(1, ${N + 1}).`), chk: { t: 'sum', N } }; },
      () => { const n = 2 * ri(3, 20); return { goal: L(`dir si ${n} és parell o senar`, `decir si ${n} es par o impar`), code: [`n = ${n}`, 'if n % 2 == 1:', `${I}print("${L('parell', 'par')}")`, 'else:', `${I}print("${L('senar', 'impar')}")`], bad: 2, fix: 'if n % 2 == 0:', why: L('Un nombre és parell quan el residu de dividir-lo entre 2 és 0: la condició ha de ser n % 2 == 0.', 'Un número es par cuando el resto de dividirlo entre 2 es 0: la condición tiene que ser n % 2 == 0.'), chk: { t: 'even', n } }; },
      () => { const n = ri(3, 6); return { goal: L(`fer un compte enrere de ${n} a 1`, `hacer una cuenta atrás de ${n} a 1`), code: [`n = ${n}`, 'while n > 0:', `${I}print(n)`, `${I}n = n + 1`], bad: 4, fix: `${I}n = n - 1`, why: L('Si n augmenta, n > 0 sempre és cert i el bucle no s\'acaba mai. Cal restar: n = n - 1.', 'Si n aumenta, n > 0 siempre es verdadero y el bucle no termina nunca. Hay que restar: n = n - 1.'), chk: { t: 'down', n } }; },
      () => { const t = ri(2, 9); return { goal: L(`escriure la taula del ${t} (${t}, ${2 * t}, ${3 * t}… fins a ${10 * t})`, `escribir la tabla del ${t} (${t}, ${2 * t}, ${3 * t}… hasta ${10 * t})`), code: ['for i in range(1, 11):', `${I}print(${t} + i)`], bad: 2, fix: `${I}print(${t} * i)`, why: L(`La taula del ${t} multiplica: ${t} * i, no ${t} + i.`, `La tabla del ${t} multiplica: ${t} * i, no ${t} + i.`), chk: { t: 'table', k: t } }; },
      () => { const a = ri(3, 9), b = ri(3, 9), c = ri(3, 9); return { goal: L(`calcular la mitjana de tres notes`, `calcular la media de tres notas`), code: [`a = ${a}`, `b = ${b}`, `c = ${c}`, 'm = a + b + c / 3', 'print(m)'], bad: 4, fix: 'm = (a + b + c) / 3', why: L('Sense parèntesi, només es divideix la c entre 3. Cal (a + b + c) / 3.', 'Sin paréntesis, solo se divide la c entre 3. Hace falta (a + b + c) / 3.'), chk: { t: 'mean', a, b, c } }; },
      () => { const n = ri(4, 7); return { goal: L(`calcular ${n}! = ${[...Array(n).keys()].map(k => k + 1).join(' · ')}`, `calcular ${n}! = ${[...Array(n).keys()].map(k => k + 1).join(' · ')}`), code: ['f = 0', `for i in range(1, ${n + 1}):`, `${I}f = f * i`, 'print(f)'], bad: 1, fix: 'f = 1', why: L('Si f comença a 0, qualsevol producte dona 0. Per multiplicar s\'ha de començar per 1.', 'Si f empieza en 0, cualquier producto da 0. Para multiplicar hay que empezar por 1.'), chk: { t: 'fact', n } }; }];
    const d = pick(L_ <= 2 ? [T[0], T[1], T[2], T[3]] : T)();
    // opcions en l'ordre de les línies (com a màxim 4: si n'hi ha 5, se'n treu una de bona a l'atzar)
    let ls = d.code.map((_, i) => i + 1); if (ls.length > 4) { const drop = pick(ls.filter(k => k !== d.bad)); ls = ls.filter(k => k !== drop); }
    const opts = ls.map(k => L(`Línia ${k}`, `Línea ${k}`)), ok = L(`Línia ${d.bad}`, `Línea ${d.bad}`);
    return mc(L(`Aquest programa hauria de ${d.goal}, però falla. Quina línia té l'error?`, `Este programa debería ${d.goal}, pero falla. ¿Qué línea tiene el error?`), ok, opts.filter(o => o !== ok), { fixed: opts, vis: codeHTML(d.code), ex: d.why, chk: { ...d.chk, bad: d.bad, fix: d.fix, code: d.code } });
  }
  // Simular l'atzar (4t d'ESO)
  function progSim(L_) {
    const im = 'import random';
    if (L_ <= 1 || L_ === 4) {
      const E = L_ <= 1 ? pick([
        { t: 'coin', N: pick([1000, 2000, 5000]), cond: 'random.randint(1, 2) == 1', p: 1 / 2, v: L('cares', 'caras'), w: L('treure cara (1 de 2 possibilitats)', 'sacar cara (1 de 2 posibilidades)') },
        { t: 'die6', N: pick([2400, 3000, 6000]), cond: 'random.randint(1, 6) == 6', p: 1 / 6, v: L('sisos', 'seises'), w: L('treure un 6 (1 de 6)', 'sacar un 6 (1 de 6)') },
        { t: 'die4', N: pick([1600, 2000, 4000]), cond: 'random.randint(1, 4) == 1', p: 1 / 4, v: 'c', w: L('treure un 1 en un dau de 4 cares (1 de 4)', 'sacar un 1 en un dado de 4 caras (1 de 4)') },
        { t: 'rnd', N: pick([2000, 5000]), cond: `random.random() < ${pick([0.2, 0.3, 0.4])}`, v: 'c' }]) :
        { t: 'dice2', N: pick([3600, 7200]), cond: 'random.randint(1, 6) + random.randint(1, 6) == 7', p: 1 / 6, v: L('sets', 'sietes'), w: L('treure 7 sumant dos daus (6 de 36 casos)', 'sacar 7 sumando dos dados (6 de 36 casos)') };
      if (E.t === 'rnd') { E.p = +E.cond.split('< ')[1]; E.w = L(`obtenir amb random.random() (un nombre a l'atzar entre 0 i 1) un valor menor que ${fmtD(E.p)}`, `obtener con random.random() (un número al azar entre 0 y 1) un valor menor que ${fmtD(E.p)}`); }
      const pf = { coin: '1/2', die6: '1/6', die4: '1/4', dice2: '6/36 = 1/6' }[E.t] || fmtD(E.p);
      const exp = Math.round(E.N * E.p), near = exp + ri(-3, 3) * Math.max(1, Math.round(E.N / 400)), cands = [E.N, Math.round(exp / 2), Math.round(exp * 2.5), Math.round(E.N / 2) === exp ? Math.round(E.N * .9) : Math.round(E.N / 2), Math.max(1, Math.round(exp / 10))].filter(v => Math.abs(v - exp) > exp * .4 && v !== near);
      return mc(L(`El programa repeteix ${fmt(E.N)} vegades un experiment a l'atzar. Quin d'aquests resultats és més raonable que escrigui?`, `El programa repite ${fmt(E.N)} veces un experimento al azar. ¿Cuál de estos resultados es más razonable que escriba?`), fmt(near), shuffle([...new Set(cands)]).slice(0, 3).map(fmt), { vis: codeHTML(E.t === 'dice2' ? [im, `${E.v} = 0`, `for i in range(${E.N}):`, `${I}d1 = random.randint(1, 6)`, `${I}d2 = random.randint(1, 6)`, `${I}if d1 + d2 == 7:`, `${I}${I}${E.v} = ${E.v} + 1`, `print(${E.v})`] : [im, `${E.v} = 0`, `for i in range(${E.N}):`, `${I}if ${E.cond}:`, `${I}${I}${E.v} = ${E.v} + 1`, `print(${E.v})`]), long: true, ex: L(`La probabilitat de ${E.w} és ${pf}. En ${fmt(E.N)} proves esperem ${fmt(E.N)} · ${pf.split(' = ').pop()} = ${fmt(exp)} vegades, més o menys: el resultat real varia una mica cada cop.`, `La probabilidad de ${E.w} es ${pf}. En ${fmt(E.N)} pruebas esperamos ${fmt(E.N)} · ${pf.split(' = ').pop()} = ${fmt(exp)} veces, más o menos: el resultado real varía un poco cada vez.`), chk: { t: 'count', N: E.N, p: E.p } });
    }
    if (L_ === 2) {
      const E = pick([{ cond: 'random.randint(1, 6) == 6', p: 1 / 6, w: L('treure un 6', 'sacar un 6') }, { cond: 'random.randint(1, 2) == 1', p: 1 / 2, w: L('treure cara', 'sacar cara') }, { cond: 'random.randint(1, 4) == 1', p: 1 / 4, w: L('treure un 1 amb un dau de 4 cares', 'sacar un 1 con un dado de 4 caras') }, { cond: 'random.randint(1, 10) <= 3', p: 3 / 10, w: L('treure 1, 2 o 3 d\'entre 10 números', 'sacar 1, 2 o 3 entre 10 números') }]), N = pick([5000, 10000, 20000]);
      // les opcions errònies són lluny de la probabilitat (≥ 0,1) perquè l'atzar no pugui acostar-hi el resultat
      const ok = fmtDf(E.p, 2), all = [0.06, 0.17, 0.3, 0.5, 0.6, 0.75, 0.83, 0.95].filter(v => Math.abs(v - E.p) >= .1).map(v => fmtDf(v, 2));
      return mc(L('Quin valor s\'acostarà més al que escriu el programa?', '¿Qué valor se acercará más a lo que escribe el programa?'), ok, shuffle(all).slice(0, 3), { vis: codeHTML([im, 'c = 0', `for i in range(${N}):`, `${I}if ${E.cond}:`, `${I}${I}c = c + 1`, `print(c / ${N})`]), ex: L(`El programa calcula la freqüència relativa de ${E.w}. Amb moltes proves, s'acosta a la probabilitat: ${ok}.`, `El programa calcula la frecuencia relativa de ${E.w}. Con muchas pruebas, se acerca a la probabilidad: ${ok}.`), chk: { t: 'rel', p: E.p, N } });
    }
    if (L_ === 3) {
      const ok = L('S\'acosta més a 0,5', 'Se acerca más a 0,5');
      return mc(L('Aquest programa llança una moneda 100 vegades i escriu la freqüència relativa de cares. Si canviem el 100 per 100.000, què passarà?', 'Este programa lanza una moneda 100 veces y escribe la frecuencia relativa de caras. Si cambiamos el 100 por 100.000, ¿qué pasará?'), ok, [L('Serà exactament 0,5', 'Será exactamente 0,5'), L('S\'allunyarà de 0,5', 'Se alejará de 0,5'), L('Serà més gran que 1', 'Será mayor que 1')], { vis: codeHTML([im, 'c = 0', 'for i in range(100):', `${I}if random.randint(1, 2) == 1:`, `${I}${I}c = c + 1`, 'print(c / 100)']), list: true, ex: L('És la llei dels grans nombres: com més proves, més s\'acosta la freqüència relativa a la probabilitat (0,5). Però l\'atzar fa que gairebé mai sigui exacta.', 'Es la ley de los grandes números: cuantas más pruebas, más se acerca la frecuencia relativa a la probabilidad (0,5). Pero el azar hace que casi nunca sea exacta.'), chk: { t: 'lln' } });
    }
    const die = pick([6, 4, 8, 12]), ok = `random.randint(1, ${die})`;
    return mc(L(`Quina instrucció simula llançar un dau de ${die} cares (números de l'1 al ${die})?`, `¿Qué instrucción simula lanzar un dado de ${die} caras (números del 1 al ${die})?`), inl(ok), [inl(`random.randint(0, ${die})`), inl(`random.randint(1, ${die + 1})`), inl(`random.randint(1, ${die}) + 1`)], { list: true, ex: L(`random.randint(a, b) dona un enter a l'atzar entre a i b, tots dos inclosos. Per a un dau de ${die} cares: randint(1, ${die}).`, `random.randint(a, b) da un entero al azar entre a y b, ambos incluidos. Para un dado de ${die} caras: randint(1, ${die}).`), chk: { t: 'die', die } });
  }
  function progEx(kind, L_) {
    if (kind === 'debug') return progDebug(L_);
    if (kind === 'sim') return progSim(L_);
    const k = kind && PROG[kind] ? kind : pick(['var', 'if', 'loop']), d = PROG[k](L_);
    const q = `${d.q || QW()}${d.hint ? ` <span class="hint">${d.hint}</span>` : ''}`, vis = codeHTML(d.code);
    if (d.opts) return mc(q, d.ans, d.opts.filter(o => o !== d.ans), { fixed: d.opts, vis, ex: d.ex, chk: { t: 'run', code: d.code } });
    return (d.ans < 0 ? ninp : inp)(q, d.ans, { vis, ex: d.ex, chk: { t: 'run', code: d.code, m: d.m || 'out' } });
  }
  Object.assign(EX, { 'pc.py': (L_, A) => progEx(A, L_) });

  /* ================= 3-4. Coordenades cartesianes i gràfiques de funcions ================= */
  // Pla cartesià: quadrícula, eixos amb fletxa, números, corbes, segments i punts
  function planeSVG(o) {
    const x0 = o.x0 ?? -6, x1 = o.x1 ?? 6, y0 = o.y0 ?? -6, y1 = o.y1 ?? 6, u = o.u || Math.min(24, 260 / (x1 - x0), 260 / (y1 - y0)), pd = 20;
    const W = (x1 - x0) * u + 2 * pd, H = (y1 - y0) * u + 2 * pd, X = x => pd + (x - x0) * u, Y = y => pd + (y1 - y) * u, st = o.lab || (x1 - x0 > 12 || y1 - y0 > 12 ? 2 : 1);
    let s = `<svg viewBox="0 0 ${r1(W)} ${r1(H)}" class="vsvg wide" style="width:${Math.round(Math.min(o.w || 290, W * 1.1))}px">`;
    for (let x = Math.ceil(x0); x <= x1; x++) s += `<line x1="${r1(X(x))}" y1="${r1(Y(y1))}" x2="${r1(X(x))}" y2="${r1(Y(y0))}" stroke="${GRID}" stroke-width="1"/>`;
    for (let y = Math.ceil(y0); y <= y1; y++) s += `<line x1="${r1(X(x0))}" y1="${r1(Y(y))}" x2="${r1(X(x1))}" y2="${r1(Y(y))}" stroke="${GRID}" stroke-width="1"/>`;
    const hasY = x0 <= 0 && x1 >= 0, hasX = y0 <= 0 && y1 >= 0;
    if (hasX) s += `<line x1="${r1(X(x0) - 4)}" y1="${r1(Y(0))}" x2="${r1(X(x1) + 8)}" y2="${r1(Y(0))}" stroke="${INK}" stroke-width="2"/><path d="M${r1(X(x1) + 14)} ${r1(Y(0))} l-8 -4.5 v9 Z" fill="${INK}"/>` + tt(X(x1) + 6, Y(0) - 8, 'x', { fs: 13, fw: 800, col: PRI });
    if (hasY) s += `<line x1="${r1(X(0))}" y1="${r1(Y(y0) + 4)}" x2="${r1(X(0))}" y2="${r1(Y(y1) - 8)}" stroke="${INK}" stroke-width="2"/><path d="M${r1(X(0))} ${r1(Y(y1) - 14)} l-4.5 8 h9 Z" fill="${INK}"/>` + tt(X(0) + 8, Y(y1) - 6, 'y', { fs: 13, fw: 800, col: PRI });
    if (!o.noNum) {
      for (let x = Math.ceil(x0 / st) * st; x <= x1; x += st) if (x) s += tt(X(x), (hasX ? Y(0) : Y(y0)) + 14, fmt(x), { a: 'middle', fs: 10.5, col: MUT });
      for (let y = Math.ceil(y0 / st) * st; y <= y1; y += st) if (y) s += tt((hasY ? X(0) : X(x0)) - 4, Y(y) + 4, fmt(y), { a: 'end', fs: 10.5, col: MUT });
      if (hasX && hasY) s += tt(X(0) - 4, Y(0) + 14, '0', { a: 'end', fs: 10.5, col: MUT });
    }
    (o.curves || []).forEach(c => {
      let d = '', pen = false; const N = 300;
      for (let i = 0; i <= N; i++) {
        const x = x0 + (x1 - x0) * i / N, y = c.f(x);
        if ((c.br || []).some(b => Math.abs(x - b) < 1e-9) || !Number.isFinite(y) || y < y0 - 1e-9 || y > y1 + 1e-9) { pen = false; continue; }
        d += `${pen ? 'L' : 'M'}${r1(X(x))} ${r1(Y(y))}`; pen = true;
      }
      s += `<path class="cv" d="${d}" fill="none" stroke="${c.col || '#36A9E1'}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
    });
    if (o.poly) s += `<polyline class="pl" points="${o.poly.map(([x, y]) => `${r1(X(x))},${r1(Y(y))}`).join(' ')}" fill="none" stroke="#36A9E1" stroke-width="3" stroke-linejoin="round"/>` + o.poly.map(([x, y]) => `<circle cx="${r1(X(x))}" cy="${r1(Y(y))}" r="3" fill="#1B6FA3"/>`).join('');
    (o.pts || []).forEach(p => { s += `<circle class="cp" cx="${r1(X(p.x))}" cy="${r1(Y(p.y))}" r="5" fill="${p.col || '#E24F86'}" stroke="#fff" stroke-width="1.5"/>`; if (p.lab) s += tt(X(p.x) + (p.x >= x1 - .5 ? -9 : 8), Y(p.y) - 7, p.lab, { fs: 14, fw: 800, col: p.col || '#E24F86', a: p.x >= x1 - .5 ? 'end' : undefined }); });
    return s + '</svg>';
  }
  const cxy = (x, y) => `(${fmt(x)}, ${fmt(y)})`;
  const QUAD = () => [L('1r quadrant', '1.er cuadrante'), L('2n quadrant', '2.º cuadrante'), L('3r quadrant', '3.er cuadrante'), L('4t quadrant', '4.º cuadrante')];
  const quadOf = (a, b) => a > 0 ? (b > 0 ? 0 : 3) : (b > 0 ? 1 : 2);
  const nz5 = () => { let a, b; do { a = ri(-5, 5); b = ri(-5, 5); } while (!a || !b || Math.abs(a) === Math.abs(b)); return [a, b]; };

  function eCart(L_) {
    if (L_ <= 2) {
      let a, b; if (L_ <= 1) { do { a = ri(1, 6); b = ri(1, 6); } while (a === b); } else [a, b] = nz5();
      const lab = pick(['A', 'B', 'P', 'Q']), vis = planeSVG(L_ <= 1 ? { x0: 0, x1: 7, y0: 0, y1: 7, pts: [{ x: a, y: b, lab }] } : { pts: [{ x: a, y: b, lab }] });
      return mc(L(`Quines coordenades té el punt <b>${lab}</b>?`, `¿Qué coordenadas tiene el punto <b>${lab}</b>?`), cxy(a, b), L_ <= 1 ? [cxy(b, a), cxy(a, b + 1), cxy(a + 1, b)] : [cxy(b, a), cxy(-a, b), cxy(a, -b)], { vis, big: true, ex: L(`Primer la x (quant es mou a la dreta o a l'esquerra): ${fmt(a)}. Després la y (quant puja o baixa): ${fmt(b)}. ${lab}${cxy(a, b)}.`, `Primero la x (cuánto se mueve a la derecha o a la izquierda): ${fmt(a)}. Después la y (cuánto sube o baja): ${fmt(b)}. ${lab}${cxy(a, b)}.`), chk: { t: 'read', a, b, lab } });
    }
    if (L_ === 3) {
      const [a, b] = nz5(), P = shuffle([[a, b], [b, a], [-a, b], [a, -b]]), labs = ['A', 'B', 'C', 'D'], k = P.findIndex(p => p[0] === a && p[1] === b);
      return mc(L(`Quin punt té coordenades <b>${cxy(a, b)}</b>?`, `¿Qué punto tiene coordenadas <b>${cxy(a, b)}</b>?`), labs[k], labs.filter((_, i) => i !== k), { fixed: labs, big: true, vis: planeSVG({ pts: P.map((p, i) => ({ x: p[0], y: p[1], lab: labs[i], col: ['#E24F86', '#36A9E1', '#3CC46A', '#FF9A3C'][i] })) }), ex: L(`${cxy(a, b)}: ${Math.abs(a)} ${a > 0 ? 'a la dreta' : "a l'esquerra"} i ${Math.abs(b)} ${b > 0 ? 'amunt' : 'avall'}. És el punt ${labs[k]}.`, `${cxy(a, b)}: ${Math.abs(a)} ${a > 0 ? 'a la derecha' : 'a la izquierda'} y ${Math.abs(b)} ${b > 0 ? 'arriba' : 'abajo'}. Es el punto ${labs[k]}.`), chk: { t: 'which', a, b } });
    }
    if (L_ === 4) {
      let a, b; do { a = ri(-9, 9); b = ri(-9, 9); } while (!a || !b);
      const Q = QUAD(), k = quadOf(a, b);
      return mc(L(`En quin quadrant hi ha el punt <b>${cxy(a, b)}</b>?`, `¿En qué cuadrante está el punto <b>${cxy(a, b)}</b>?`), Q[k], Q.filter((_, i) => i !== k), { fixed: Q, ex: L(`x ${a > 0 ? 'positiva (dreta)' : "negativa (esquerra)"} i y ${b > 0 ? 'positiva (amunt)' : 'negativa (avall)'}. Els quadrants es numeren en sentit contrari a les agulles del rellotge, començant per dalt a la dreta: és el ${Q[k]}.`, `x ${a > 0 ? 'positiva (derecha)' : 'negativa (izquierda)'} e y ${b > 0 ? 'positiva (arriba)' : 'negativa (abajo)'}. Los cuadrantes se numeran en sentido contrario a las agujas del reloj, empezando por arriba a la derecha: es el ${Q[k]}.`), chk: { t: 'quad', a, b } });
    }
    if (Math.random() < .5) {
      const [a, b] = nz5(), ax = pick(['x', 'y', 'o']), ok = ax === 'x' ? [a, -b] : ax === 'y' ? [-a, b] : [-a, -b];
      const cands = [[a, -b], [-a, b], [-a, -b], [b, a]].filter(p => p[0] !== ok[0] || p[1] !== ok[1]);
      const nm = ax === 'x' ? L("l'eix X", 'el eje X') : ax === 'y' ? L("l'eix Y", 'el eje Y') : L("l'origen (0, 0)", 'el origen (0, 0)');
      return mc(L(`Quin és el punt simètric de A${cxy(a, b)} respecte a ${nm}?`, `¿Cuál es el punto simétrico de A${cxy(a, b)} respecto a ${nm}?`), cxy(...ok), cands.map(p => cxy(...p)), { vis: planeSVG({ pts: [{ x: a, y: b, lab: 'A' }] }), big: true, ex: ax === 'x' ? L("Respecte a l'eix X, la x es queda igual i la y canvia de signe.", 'Respecto al eje X, la x se queda igual y la y cambia de signo.') : ax === 'y' ? L("Respecte a l'eix Y, la y es queda igual i la x canvia de signe.", 'Respecto al eje Y, la y se queda igual y la x cambia de signo.') : L("Respecte a l'origen, canvien de signe totes dues coordenades.", 'Respecto al origen, cambian de signo las dos coordenadas.'), chk: { t: 'sym', a, b, ax } });
    }
    let xa, xb, ya, yb; do { xa = ri(-5, 4); xb = ri(xa + 2, 5); ya = ri(-5, 4); yb = ri(ya + 2, 5); } while (xa === ya || xb === yb || xa === yb || ya === xb);
    const A = [xa, ya], Bp = [xb, ya], C = [xb, yb], D = [xa, yb], cand = [[yb, xa], [xb, yb + 1], [xa, ya - 1], [-xa, yb], [xa + 1, yb]].filter(p => !(p[0] === D[0] && p[1] === D[1]) && !(p[0] === C[0] && p[1] === C[1]) && !(p[0] === A[0] && p[1] === A[1]) && !(p[0] === Bp[0] && p[1] === Bp[1]));
    return mc(L('A, B i C són tres vèrtexs d\'un rectangle amb els costats paral·lels als eixos. Quines coordenades té el quart vèrtex, D?', 'A, B y C son tres vértices de un rectángulo con los lados paralelos a los ejes. ¿Qué coordenadas tiene el cuarto vértice, D?'), cxy(...D), shuffle(cand).slice(0, 3).map(p => cxy(...p)), { vis: planeSVG({ pts: [{ x: A[0], y: A[1], lab: 'A' }, { x: Bp[0], y: Bp[1], lab: 'B' }, { x: C[0], y: C[1], lab: 'C' }] }), big: true, ex: L(`D té la mateixa x que A (${fmt(xa)}) i la mateixa y que C (${fmt(yb)}): D${cxy(...D)}.`, `D tiene la misma x que A (${fmt(xa)}) y la misma y que C (${fmt(yb)}): D${cxy(...D)}.`), chk: { t: 'rect', A, B: Bp, C } });
  }

  // Gràfiques de rectes
  const lineEq = (m, n) => `y = ${lin(m, n)}`;
  function fnGraph(L_, A) {
    if (A === 'story') return fnStory(L_);
    if (L_ === 5) {
      const m = pick([-2, -1, 1, 2]), n = ri(-3, 3) || 1, alt = [[-m, n], [m, -n], [n === m ? -m : n, n === m ? -n : m]].filter(([a, b]) => a !== m || b !== n);
      const mk = (a, b) => planeSVG({ x0: -4, x1: 4, y0: -4, y1: 4, u: 22, curves: [{ f: x => a * x + b }] });
      return mc(L(`Quina gràfica correspon a la recta <b>${lineEq(m, n)}</b>?`, `¿Qué gráfica corresponde a la recta <b>${lineEq(m, n)}</b>?`), mk(m, n), alt.map(([a, b]) => mk(a, b)), { pics: true, ex: L(`Talla l'eix y a ${fmt(n)} (ordenada a l'origen) i el pendent és ${fmt(m)}: ${m > 0 ? 'puja' : 'baixa'} ${Math.abs(m)} ${Math.abs(m) === 1 ? 'quadret' : 'quadrets'} per cada quadret cap a la dreta.`, `Corta el eje y en ${fmt(n)} (ordenada en el origen) y la pendiente es ${fmt(m)}: ${m > 0 ? 'sube' : 'baja'} ${Math.abs(m)} ${Math.abs(m) === 1 ? 'cuadradito' : 'cuadraditos'} por cada cuadradito hacia la derecha.`), chk: { t: 'pick', m, n } });
    }
    if (L_ === 4) {
      const [p, q] = pick([[1, 2], [-1, 2], [1, 3], [-1, 3], [2, 3], [-2, 3], [3, 2], [-3, 2]]), n = ri(-3, 3), f = x => p * x / q + n;
      const lat = [-6, -3, 0, 3, 6, -4, -2, 2, 4].filter(x => x % q === 0 && Math.abs(f(x)) <= 6).sort((a, b) => a - b), P1 = lat[0], P2 = lat[lat.length - 1];
      if (lat.length < 2) return fnGraph(L_);
      return mc(L('Quin és el <b>pendent</b> de la recta?', '¿Cuál es la <b>pendiente</b> de la recta?'), fracS(p, q), [fracS(q, p), fracS(-p, q), fmt(p)], { vis: planeSVG({ curves: [{ f }], pts: [{ x: P1, y: f(P1) }, { x: P2, y: f(P2) }] }), big: true, ex: L(`Entre els punts ${cxy(P1, f(P1))} i ${cxy(P2, f(P2))}: la y canvia ${fmt(f(P2) - f(P1))} quan la x avança ${P2 - P1}. Pendent = ${fmt(f(P2) - f(P1))}/${P2 - P1} = ${fracS(p, q)}.`, `Entre los puntos ${cxy(P1, f(P1))} y ${cxy(P2, f(P2))}: la y cambia ${fmt(f(P2) - f(P1))} cuando la x avanza ${P2 - P1}. Pendiente = ${fmt(f(P2) - f(P1))}/${P2 - P1} = ${fracS(p, q)}.`), chk: { t: 'slopeFr', p, q, n } });
    }
    const m = pick([-3, -2, -1, 1, 2, 3]), n = ri(-4, 4), f = x => m * x + n, vis = planeSVG({ curves: [{ f }] });
    const lat = [...Array(13).keys()].map(i => i - 6).filter(x => Math.abs(f(x)) <= 6 && x !== 0);
    if (lat.length < 2) return fnGraph(L_);
    if (L_ <= 1) {
      const x = pick(lat);
      if (Math.random() < .5) return ninp(L(`Mira la gràfica. Quant val <b>y</b> quan <b>x = ${fmt(x)}</b>?`, `Mira la gráfica. ¿Cuánto vale <b>y</b> cuando <b>x = ${fmt(x)}</b>?`), f(x), { vis, ex: L(`Busca x = ${fmt(x)} a l'eix horitzontal, puja o baixa fins a la recta i mira l'altura: y = ${fmt(f(x))}. El punt és ${cxy(x, f(x))}.`, `Busca x = ${fmt(x)} en el eje horizontal, sube o baja hasta la recta y mira la altura: y = ${fmt(f(x))}. El punto es ${cxy(x, f(x))}.`), chk: { t: 'yAt', x } });
      return ninp(L(`Mira la gràfica. Per a quin valor de <b>x</b> la recta arriba a <b>y = ${fmt(f(x))}</b>?`, `Mira la gráfica. ¿Para qué valor de <b>x</b> la recta llega a <b>y = ${fmt(f(x))}</b>?`), x, { vis, ex: L(`Busca y = ${fmt(f(x))} a l'eix vertical, ves en horitzontal fins a la recta i baixa a l'eix x: x = ${fmt(x)}.`, `Busca y = ${fmt(f(x))} en el eje vertical, ve en horizontal hasta la recta y baja al eje x: x = ${fmt(x)}.`), chk: { t: 'xAt', y: f(x) } });
    }
    if (L_ === 2) {
      if (Math.random() < .5) return ninp(L("Quina és l'<b>ordenada a l'origen</b> de la recta (on talla l'eix y)?", '¿Cuál es la <b>ordenada en el origen</b> de la recta (dónde corta el eje y)?'), n, { vis, ex: L(`La recta talla l'eix y al punt (0, ${fmt(n)}): l'ordenada a l'origen és ${fmt(n)}.`, `La recta corta el eje y en el punto (0, ${fmt(n)}): la ordenada en el origen es ${fmt(n)}.`), chk: { t: 'n' } });
      return ninp(L('Quin és el <b>pendent</b> de la recta?', '¿Cuál es la <b>pendiente</b> de la recta?'), m, { vis, ex: L(`Quan la x avança 1, la y ${m > 0 ? 'puja' : 'baixa'} ${Math.abs(m)}: el pendent és ${fmt(m)}${m < 0 ? ' (negatiu perquè baixa)' : ''}.`, `Cuando la x avanza 1, la y ${m > 0 ? 'sube' : 'baja'} ${Math.abs(m)}: la pendiente es ${fmt(m)}${m < 0 ? ' (negativa porque baja)' : ''}.`), chk: { t: 'm' } });
    }
    const cand = [[-m, n], [m, -n], [n, m], [m, n + (n > 0 ? -2 : 2)], [2 * m, n]].filter(([a, b]) => (a !== m || b !== n) && a !== 0).map(([a, b]) => lineEq(a, b));
    return mc(L('Quina és l\'equació de la recta?', '¿Cuál es la ecuación de la recta?'), lineEq(m, n), [...new Set(cand)].slice(0, 3), { vis, list: true, ex: L(`Ordenada a l'origen: ${fmt(n)} (talla l'eix y a ${cxy(0, n)}). Pendent: ${fmt(m)} (per cada pas a la dreta, ${m > 0 ? 'puja' : 'baixa'} ${Math.abs(m)}). Per tant, ${lineEq(m, n)}.`, `Ordenada en el origen: ${fmt(n)} (corta el eje y en ${cxy(0, n)}). Pendiente: ${fmt(m)} (por cada paso a la derecha, ${m > 0 ? 'sube' : 'baja'} ${Math.abs(m)}). Por tanto, ${lineEq(m, n)}.`), chk: { t: 'eq' } });
  }
  // Gràfiques de la vida real: distància a casa en funció del temps
  function fnStory(L_) {
    for (let t = 0; t < 300; t++) {
      const P = per(), dt = [ri(1, 3), ri(1, 3), ri(1, 3), ri(1, 3)].map(v => v * 5), T = [0]; dt.forEach(d => T.push(T[T.length - 1] + d));
      if (T[4] > 60) continue;
      const d1 = ri(2, 6) * 200, D = [0, d1, d1, ri(Math.max(1, d1 / 200 - 3), Math.min(6, d1 / 200 + 3)) * 200, 0];
      if (D[3] === D[2]) continue;
      const shape = ri(0, 1); if (shape) { D[3] = D[2]; D[2] = d1; } // tram 2 parat o tram 3 parat
      const pts = T.map((x, i) => [x, D[i]]), segs = [0, 1, 2, 3].map(i => ({ dt: T[i + 1] - T[i], dd: D[i + 1] - D[i] }));
      if (segs.filter(s => s.dd === 0).length !== 1) continue;
      const speeds = segs.map(s => Math.abs(s.dd) / s.dt);
      if (speeds.some(v => !Number.isInteger(v))) continue;
      const vis = scatSVG([], [0, 60, 10], [0, 1400, 200], { poly: pts, segLab: L_ >= 5 ? ['A', 'B', 'C', 'D'] : null, xl: L('Temps (minuts)', 'Tiempo (minutos)'), yl: L('Distància a casa (m)', 'Distancia a casa (m)') });
      const st = L(`La gràfica mostra a quina distància de casa és ${P.c} mentre fa un passeig amb bicicleta.`, `La gráfica muestra a qué distancia de casa está ${P.c} mientras da un paseo en bicicleta.`);
      if (L_ <= 1) { const i = ri(1, 3); return inp(`${st} ${L(`A quina distància de casa és al minut <b>${T[i]}</b>?`, `¿A qué distancia de casa está en el minuto <b>${T[i]}</b>?`)}`, D[i], { unit: 'm', vis, long: true, ex: L(`Busca el minut ${T[i]} a l'eix horitzontal i mira l'altura de la gràfica: ${fmt(D[i])} m.`, `Busca el minuto ${T[i]} en el eje horizontal y mira la altura de la gráfica: ${fmt(D[i])} m.`), chk: { t: 'dAt', x: T[i] } }); }
      const k = segs.findIndex(s => s.dd === 0);
      if (L_ === 2) return inp(`${st} ${L('Quants minuts ha estat aturat/ada?', '¿Cuántos minutos ha estado parado/a?')}`.replace('aturat/ada', P.g === 'm' ? 'aturat' : 'aturada').replace('parado/a', P.g === 'm' ? 'parado' : 'parada'), segs[k].dt, { unit: 'min', vis, long: true, ex: L(`Quan està aturat la distància no canvia: la gràfica és horitzontal del minut ${T[k]} al ${T[k + 1]}, ${segs[k].dt} minuts.`, `Cuando está parado la distancia no cambia: la gráfica es horizontal del minuto ${T[k]} al ${T[k + 1]}, ${segs[k].dt} minutos.`), chk: { t: 'stop' } });
      if (L_ === 3) return inp(`${st} ${L('A quina velocitat va durant els primers minuts, fins que s\'atura o gira?', '¿A qué velocidad va durante los primeros minutos, hasta que se para o gira?')} <span class="hint">${L('en metres per minut', 'en metros por minuto')}</span>`, speeds[0], { unit: 'm/min', vis, long: true, ex: L(`En el primer tram recorre ${fmt(D[1])} m en ${T[1]} minuts: ${fmt(D[1])} : ${T[1]} = ${speeds[0]} m/min.`, `En el primer tramo recorre ${fmt(D[1])} m en ${T[1]} minutos: ${fmt(D[1])} : ${T[1]} = ${speeds[0]} m/min.`), chk: { t: 'v1' } });
      if (L_ === 4) { const tot = segs.reduce((a, s) => a + Math.abs(s.dd), 0); return inp(`${st} ${L('Quants metres ha recorregut en total?', '¿Cuántos metros ha recorrido en total?')}`, tot, { unit: 'm', vis, long: true, ex: L(`Sumem el que avança en cada tram, tant si s'allunya com si torna: ${segs.map(s => fmt(Math.abs(s.dd))).join(' + ')} = ${fmt(tot)} m.`, `Sumamos lo que avanza en cada tramo, tanto si se aleja como si vuelve: ${segs.map(s => fmt(Math.abs(s.dd))).join(' + ')} = ${fmt(tot)} m.`), chk: { t: 'total' } }); }
      const mx = Math.max(...speeds); if (speeds.filter(v => v === mx).length > 1) continue;
      const labs = ['A', 'B', 'C', 'D'], w = speeds.indexOf(mx);
      return mc(`${st} ${L('En quin tram va més de pressa?', '¿En qué tramo va más deprisa?')}`, labs[w], labs.filter((_, i) => i !== w), { fixed: labs, big: true, vis, long: true, ex: L(`Va més de pressa on la gràfica és més inclinada (pugi o baixi). Velocitats: ${labs.map((l, i) => `${l} ${speeds[i]} m/min`).join(', ')}.`, `Va más deprisa donde la gráfica está más inclinada (suba o baje). Velocidades: ${labs.map((l, i) => `${l} ${speeds[i]} m/min`).join(', ')}.`), chk: { t: 'fast' } });
    }
    return fnGraph(Math.min(3, L_));
  }

  // Proporcionalitat inversa: la hipèrbola
  const KINV = [6, 8, 12, 18, 24, 36];
  const divs = k => [...Array(Math.abs(k)).keys()].map(i => i + 1).filter(d => k % d === 0);
  function fnInv(L_) {
    if (L_ <= 3) {
      const k = pick(KINV), xs = shuffle(divs(k).filter(d => d > 1 && d < k)).slice(0, 4).sort((a, b) => a - b);
      if (xs.length < 3) return fnInv(L_);
      const ys = xs.map(x => k / x), m = ri(0, xs.length - 1);
      if (L_ <= 1) return inp(L('x i y són inversament proporcionals. Quin valor falta a la taula?', 'x e y son inversamente proporcionales. ¿Qué valor falta en la tabla?'), ys[m], { vis: tabSVG(['x', ...xs.map(String)], [['y', ...ys.map((y, i) => i === m ? '?' : String(y))]], { minW: 40 }), ex: L(`En la proporcionalitat inversa, x · y sempre dona el mateix: ${xs[m === 0 ? 1 : 0]} · ${ys[m === 0 ? 1 : 0]} = ${k}. Llavors y = ${k} : ${xs[m]} = ${ys[m]}.`, `En la proporcionalidad inversa, x · y siempre da lo mismo: ${xs[m === 0 ? 1 : 0]} · ${ys[m === 0 ? 1 : 0]} = ${k}. Entonces y = ${k} : ${xs[m]} = ${ys[m]}.`), chk: { t: 'miss', xs, ys, m } });
      if (L_ === 2) {
        if (Math.random() < .5) { const w = pick(xs.filter(x => x < 10)), d = k / w; return inp(L(`${w} aixetes iguals omplen una piscina en ${d} hores. El nombre d'aixetes i les hores són inversament proporcionals. Quina és la <b>constant de proporcionalitat</b> (aixetes · hores)?`, `${w} grifos iguales llenan una piscina en ${d} horas. El número de grifos y las horas son inversamente proporcionales. ¿Cuál es la <b>constante de proporcionalidad</b> (grifos · horas)?`), k, { long: true, ex: L(`k = ${w} · ${d} = ${k}. Vol dir que una sola aixeta trigaria ${k} hores.`, `k = ${w} · ${d} = ${k}. Quiere decir que un solo grifo tardaría ${k} horas.`), chk: { t: 'kctx', w, d } }); }
        return inp(L('x i y són inversament proporcionals. Quina és la <b>constant</b> k = x · y?', 'x e y son inversamente proporcionales. ¿Cuál es la <b>constante</b> k = x · y?'), k, { vis: tabSVG(['x', ...xs.map(String)], [['y', ...ys.map(String)]], { minW: 40 }), ex: L(`${xs.map((x, i) => `${x} · ${ys[i]}`).join(' = ')} = ${k}.`, `${xs.map((x, i) => `${x} · ${ys[i]}`).join(' = ')} = ${k}.`), chk: { t: 'k', xs, ys } });
      }
      return mc(L('Quina expressió correspon a la taula?', '¿Qué expresión corresponde a la tabla?'), `y = ${frac(k, 'x')}`, [`y = ${k}x`, `y = ${frac('x', k)}`, `y = ${k} − x`], { vis: tabSVG(['x', ...xs.map(String)], [['y', ...ys.map(String)]], { minW: 40 }), big: true, ex: L(`x · y = ${k} sempre, així que y = ${k}/x: és una funció de proporcionalitat inversa i la seva gràfica és una hipèrbola.`, `x · y = ${k} siempre, así que y = ${k}/x: es una función de proporcionalidad inversa y su gráfica es una hipérbola.`), chk: { t: 'expr', xs, ys } });
    }
    if (L_ === 4) {
      const k = pick([4, 6, 8, -4, -6, -8]), f = x => k / x, xs = divs(k).flatMap(d => [d, -d]).filter(x => Math.abs(k / x) <= 8 && Math.abs(x) <= 8), x = pick(xs.filter(v => Math.abs(v) > 1 && Math.abs(k / v) > 1) .length ? xs.filter(v => Math.abs(v) > 1 && Math.abs(k / v) > 1) : xs);
      return ninp(L(`La gràfica és la hipèrbola y = ${k < 0 ? '−' : ''}${frac(Math.abs(k), 'x')}. Quant val <b>y</b> quan <b>x = ${fmt(x)}</b>?`, `La gráfica es la hipérbola y = ${k < 0 ? '−' : ''}${frac(Math.abs(k), 'x')}. ¿Cuánto vale <b>y</b> cuando <b>x = ${fmt(x)}</b>?`), f(x), { vis: planeSVG({ x0: -8, x1: 8, y0: -8, y1: 8, curves: [{ f, br: [0] }], pts: xs.filter(v => v > 0 === x > 0).map(v => ({ x: v, y: f(v), col: '#1B6FA3' })) }), ex: L(`y = ${fmt(k)} : ${sgn(x)} = ${fmt(f(x))}. Comprova-ho a la gràfica: el punt ${cxy(x, f(x))} és de la hipèrbola.`, `y = ${fmt(k)} : ${sgn(x)} = ${fmt(f(x))}. Compruébalo en la gráfica: el punto ${cxy(x, f(x))} es de la hipérbola.`), chk: { t: 'hy', k, x } });
    }
    const T = [L('Lineal', 'Lineal'), L('Quadràtica', 'Cuadrática'), L('De proporcionalitat inversa', 'De proporcionalidad inversa')], w = ri(0, 2);
    // els paràmetres es trien una sola vegada (fora de la funció que es dibuixa)
    const s = pick([-2, -1, 1, 2]), c0 = ri(-2, 2), qa = pick([1, -1, .5]), qc = ri(-3, 1), kk = pick([2, 3, 4, -2, -3, -4]);
    const f = w === 0 ? x => s * x + c0 : w === 1 ? x => qa * x * x + qc : x => kk / x;
    return mc(L('Quin tipus de funció representa la gràfica?', '¿Qué tipo de función representa la gráfica?'), T[w], T.filter((_, i) => i !== w), { fixed: T, vis: planeSVG({ curves: [{ f, br: [0] }] }), ex: [L('És una recta: funció lineal (y = mx + n).', 'Es una recta: función lineal (y = mx + n).'), L('És una paràbola: funció quadràtica (y = ax² + bx + c).', 'Es una parábola: función cuadrática (y = ax² + bx + c).'), L('Són dues branques que s\'acosten als eixos sense tocar-los: una hipèrbola, y = k/x.', 'Son dos ramas que se acercan a los ejes sin tocarlos: una hipérbola, y = k/x.')][w], chk: { t: 'kind', w } });
  }

  // Funció exponencial
  const bx = (b, x = 'x') => `${b}<sup>${x}</sup>`;
  function fnExp(L_) {
    if (L_ <= 1) { const a = pick([1, 2, 3, 5]), b = pick([2, 3]), x = ri(0, 4), r = a * b ** x; return inp(L(`Si f(x) = ${a === 1 ? '' : a + ' · '}${bx(b)}, quant val <b>f(${x})</b>?`, `Si f(x) = ${a === 1 ? '' : a + ' · '}${bx(b)}, ¿cuánto vale <b>f(${x})</b>?`), r, { ex: L(`f(${x}) = ${a === 1 ? '' : a + ' · '}${b}${sup(x)} = ${a === 1 ? '' : a + ' · '}${b ** x} = ${r}.${x === 0 ? ' Recorda: qualsevol nombre elevat a 0 val 1.' : ''}`, `f(${x}) = ${a === 1 ? '' : a + ' · '}${b}${sup(x)} = ${a === 1 ? '' : a + ' · '}${b ** x} = ${r}.${x === 0 ? ' Recuerda: cualquier número elevado a 0 vale 1.' : ''}`), chk: { t: 'val', a, b, x } }); }
    if (L_ === 2) {
      const B = pick([['2', 2], ['3', 3], ['5', 5], ['1,5', 1.5], ['0,5', .5], ['0,2', .2], ['0,8', .8], [`(${frac(1, 3)})`, 1 / 3]]), up = B[1] > 1, T = [L('Creixent', 'Creciente'), L('Decreixent', 'Decreciente')];
      return mc(L(`La funció <b>y = ${bx(B[0])}</b> és creixent o decreixent?`, `¿La función <b>y = ${bx(B[0])}</b> es creciente o decreciente?`), T[up ? 0 : 1], [T[up ? 1 : 0]], { fixed: T, big: true, ex: L(`La base és ${B[0].replace(/<[^>]+>/g, '').replace(/\(|\)/g, '')}, ${up ? 'més gran que 1: cada vegada que x augmenta, y es multiplica per un nombre més gran que 1 i creix.' : 'entre 0 i 1: cada vegada que x augmenta, y es multiplica per un nombre més petit que 1 i decreix.'}`, `La base es ${B[0].replace(/<[^>]+>/g, '').replace(/\(|\)/g, '')}, ${up ? 'mayor que 1: cada vez que x aumenta, y se multiplica por un número mayor que 1 y crece.' : 'entre 0 y 1: cada vez que x aumenta, y se multiplica por un número menor que 1 y decrece.'}`), chk: { t: 'mono', b: B[1] } });
    }
    if (L_ === 3) {
      const a = pick([1, 2, 3, 4, 5]), b = pick([2, 3, 4]), xs = [0, 1, 2, 3], ys = xs.map(x => a * b ** x), vis = tabSVG(['x', ...xs.map(String)], [['y', ...ys.map(v => fmt(v))]], { minW: 44 });
      if (Math.random() < .5) return inp(L('Aquesta taula és d\'una funció exponencial. Per quin nombre es multiplica y cada vegada que x augmenta 1?', 'Esta tabla es de una función exponencial. ¿Por qué número se multiplica y cada vez que x aumenta 1?'), b, { vis, ex: L(`${ys[1]} : ${ys[0]} = ${b}, ${ys[2]} : ${ys[1]} = ${b}… La base és ${b}.`, `${ys[1]} : ${ys[0]} = ${b}, ${ys[2]} : ${ys[1]} = ${b}… La base es ${b}.`), chk: { t: 'base', xs, ys } });
      const ok = `y = ${a === 1 ? '' : a + ' · '}${bx(b)}`;
      return mc(L('Quina expressió correspon a la taula?', '¿Qué expresión corresponde a la tabla?'), ok, [`y = ${b === a ? a + 1 : b} · ${bx(a === 1 ? 2 : a)}`, `y = ${a} + ${b}x`, `y = ${a === 1 ? '' : a + ' · '}x${sup(b)}`].filter(o => o !== ok), { vis, list: true, ex: L(`Quan x = 0, y = ${a} (el valor inicial). Cada pas es multiplica per ${b}: y = ${a} · ${b}ˣ.`, `Cuando x = 0, y = ${a} (el valor inicial). Cada paso se multiplica por ${b}: y = ${a} · ${b}ˣ.`), chk: { t: 'expr', xs, ys } });
    }
    if (L_ === 4) {
      const c = ri(0, 2);
      if (c === 0) { const a = pick([100, 200, 250, 300, 500]), t = ri(3, 6), r = a * 2 ** t; return inp(L(`Un cultiu comença amb ${a} bacteris i el nombre es duplica cada hora. Quants bacteris hi haurà al cap de ${t} hores?`, `Un cultivo empieza con ${a} bacterias y el número se duplica cada hora. ¿Cuántas bacterias habrá al cabo de ${t} horas?`), r, { long: true, ex: L(`N = ${a} · 2${sup(t)} = ${a} · ${2 ** t} = ${fmt(r)}.`, `N = ${a} · 2${sup(t)} = ${a} · ${2 ** t} = ${fmt(r)}.`), chk: { t: 'grow', a, b: 2, n: t } }); }
      if (c === 1) { const a = pick([500, 1000, 2500, 5000, 10000]), p = pick([10, 20, 50]), t = ri(2, 3), r = +(a * (1 - p / 100) ** t).toFixed(2); return dinp(L(`Un aparell de ${fmt(a)} € perd un ${p} % del valor cada any. Quant valdrà al cap de ${t} anys?`, `Un aparato de ${fmt(a)} € pierde un ${p} % de su valor cada año. ¿Cuánto valdrá al cabo de ${t} años?`), r, { unit: '€', long: true, ex: L(`Cada any en queda el ${100 - p} %: ${fmt(a)} · ${fmtD(1 - p / 100)}${sup(t)} = ${euro(r)}.`, `Cada año queda el ${100 - p} %: ${fmt(a)} · ${fmtD(1 - p / 100)}${sup(t)} = ${euro(r)}.`), chk: { t: 'grow', a, b: 1 - p / 100, n: t } }); }
      const a = pick([1000, 2000, 5000, 10000]), p = pick([10, 20]), t = ri(2, 3), r = +(a * (1 + p / 100) ** t).toFixed(2);
      return dinp(L(`Un poble té ${fmt(a)} habitants i la població creix un ${p} % cada any. Quants habitants tindrà al cap de ${t} anys?`, `Un pueblo tiene ${fmt(a)} habitantes y la población crece un ${p} % cada año. ¿Cuántos habitantes tendrá al cabo de ${t} años?`), r, { long: true, ex: L(`Cada any es multiplica per ${fmtD(1 + p / 100)}: ${fmt(a)} · ${fmtD(1 + p / 100)}${sup(t)} = ${fmtD(r)}.`, `Cada año se multiplica por ${fmtD(1 + p / 100)}: ${fmt(a)} · ${fmtD(1 + p / 100)}${sup(t)} = ${fmtD(r)}.`), chk: { t: 'grow', a, b: 1 + p / 100, n: t } });
    }
    const G = [[`y = ${bx(2)}`, x => 2 ** x], [`y = (${frac(1, 2)})<sup>x</sup>`, x => .5 ** x], ['y = 2x', x => 2 * x], ['y = x²', x => x * x]], w = ri(0, 1);
    const mk = f => planeSVG({ x0: -3, x1: 3, y0: -2, y1: 8, u: 20, curves: [{ f }] });
    return mc(L(`Quina gràfica correspon a <b>${G[w][0]}</b>?`, `¿Qué gráfica corresponde a <b>${G[w][0]}</b>?`), mk(G[w][1]), G.filter((_, i) => i !== w).map(g => mk(g[1])), { pics: true, ex: w === 0 ? L('y = 2ˣ passa per (0, 1), creix cada vegada més de pressa cap a la dreta i a l\'esquerra s\'acosta a 0 sense arribar-hi.', 'y = 2ˣ pasa por (0, 1), crece cada vez más deprisa hacia la derecha y a la izquierda se acerca a 0 sin llegar.') : L('y = (1/2)ˣ passa per (0, 1) i decreix: cada pas a la dreta la y es fa la meitat.', 'y = (1/2)ˣ pasa por (0, 1) y decrece: cada paso a la derecha la y se hace la mitad.'), chk: { t: 'pickExp', w } });
  }

  // Creix o decreix? Màxims i mínims
  function monoFn() {
    for (let t = 0; t < 300; t++) {
      const xs = [-6, ri(-4, -2), ri(-1, 2), ri(3, 4), 6], up = Math.random() < .5, ys = [];
      let y = ri(-4, 4); ys.push(y);
      for (let i = 1; i < xs.length; i++) { const dir = (i % 2 === 1) === up ? 1 : -1; y += dir * ri(1, 4); ys.push(y); }
      if (ys.some(v => v < -5 || v > 5)) continue;
      const mx = Math.max(...ys), mn = Math.min(...ys);
      if (ys.filter(v => v === mx).length > 1 || ys.filter(v => v === mn).length > 1) continue;
      return { xs, ys, up };
    }
    return null;
  }
  function fnMono(L_) {
    if (L_ >= 5) {
      if (Math.random() < .5) {
        const k = ri(0, 2), T = [L('Creixent', 'Creciente'), L('Decreixent', 'Decreciente')];
        const [s, up] = k === 0 ? (m => [`y = ${lin(m, ri(-5, 5))}`, m > 0])(pick([-3, -2, 2, 3, -1])) : k === 1 ? (b => [`y = ${bx(b[0])}`, b[1] > 1])(pick([['3', 3], ['0,5', .5], ['1,2', 1.2], ['0,9', .9]])) : (m => [`y = ${fmt(m)} − ${Math.abs(m) === 1 ? '' : Math.abs(m)}x`.replace('− x', '− x'), false])(ri(1, 9));
        return mc(L(`La funció <b>${s}</b> és creixent o decreixent?`, `¿La función <b>${s}</b> es creciente o decreciente?`), T[up ? 0 : 1], [T[up ? 1 : 0]], { fixed: T, big: true, ex: k === 1 ? L('Una exponencial creix si la base és més gran que 1 i decreix si és entre 0 i 1.', 'Una exponencial crece si la base es mayor que 1 y decrece si está entre 0 y 1.') : L('Una recta creix si el pendent (el número que multiplica la x) és positiu i decreix si és negatiu.', 'Una recta crece si la pendiente (el número que multiplica la x) es positiva y decrece si es negativa.'), chk: { t: 'formula', up, s } });
      }
      const h = ri(-4, 4), a = pick([1, -1, 2]), k = ri(-5, 5), b = -2 * a * h, c = a * h * h + k;
      return ninp(L(`La paràbola <b>y = ${poly(a, b, c)}</b> té el ${a > 0 ? 'mínim' : 'màxim'} en el vèrtex. Per a quin valor de <b>x</b>?`, `La parábola <b>y = ${poly(a, b, c)}</b> tiene el ${a > 0 ? 'mínimo' : 'máximo'} en el vértice. ¿Para qué valor de <b>x</b>?`), h, { ex: L(`x = −b / 2a = ${fmt(-b)} / ${2 * a} = ${fmt(h)}. ${a > 0 ? 'Com que a > 0, la paràbola s\'obre cap amunt i el vèrtex és un mínim.' : 'Com que a < 0, la paràbola s\'obre cap avall i el vèrtex és un màxim.'}`, `x = −b / 2a = ${fmt(-b)} / ${2 * a} = ${fmt(h)}. ${a > 0 ? 'Como a > 0, la parábola se abre hacia arriba y el vértice es un mínimo.' : 'Como a < 0, la parábola se abre hacia abajo y el vértice es un máximo.'}`), chk: { t: 'vertex', a, b, c } });
    }
    const F = monoFn(); if (!F) return fnMono(L_);
    const { xs, ys } = F, pts = xs.map((x, i) => [x, ys[i]]), vis = planeSVG({ poly: pts });
    if (L_ <= 1) {
      const i = ri(0, 3), T = [L('Creix', 'Crece'), L('Decreix', 'Decrece'), L('És constant', 'Es constante')], w = ys[i + 1] > ys[i] ? 0 : 1;
      return mc(L(`Entre x = ${fmt(xs[i])} i x = ${fmt(xs[i + 1])}, la funció creix o decreix?`, `Entre x = ${fmt(xs[i])} y x = ${fmt(xs[i + 1])}, ¿la función crece o decrece?`), T[w], T.filter((_, k) => k !== w), { fixed: T, vis, ex: L(`D'esquerra a dreta, la gràfica ${w === 0 ? 'puja: creix' : 'baixa: decreix'} (y passa de ${fmt(ys[i])} a ${fmt(ys[i + 1])}).`, `De izquierda a derecha, la gráfica ${w === 0 ? 'sube: crece' : 'baja: decrece'} (y pasa de ${fmt(ys[i])} a ${fmt(ys[i + 1])}).`), chk: { t: 'seg', i } });
    }
    const imx = ys.indexOf(Math.max(...ys)), imn = ys.indexOf(Math.min(...ys));
    if (L_ === 2) return ninp(L('Quin és el <b>valor màxim</b> que pren la funció (la y més alta)?', '¿Cuál es el <b>valor máximo</b> que toma la función (la y más alta)?'), ys[imx], { vis, ex: L(`El punt més alt de la gràfica és ${cxy(xs[imx], ys[imx])}: el màxim val ${fmt(ys[imx])}.`, `El punto más alto de la gráfica es ${cxy(xs[imx], ys[imx])}: el máximo vale ${fmt(ys[imx])}.`), chk: { t: 'max' } });
    if (L_ === 3) return ninp(L('Per a quin valor de <b>x</b> la funció pren el valor <b>mínim</b>?', '¿Para qué valor de <b>x</b> la función toma el valor <b>mínimo</b>?'), xs[imn], { vis, ex: L(`El punt més baix és ${cxy(xs[imn], ys[imn])}: el mínim és a x = ${fmt(xs[imn])}.`, `El punto más bajo es ${cxy(xs[imn], ys[imn])}: el mínimo está en x = ${fmt(xs[imn])}.`), chk: { t: 'argmin' } });
    // interval de creixement (amb la forma baixa-puja-baixa n'hi ha un de sol al mig)
    const inc = []; for (let i = 0; i < 4; i++) if (ys[i + 1] > ys[i]) inc.push(i);
    const want = F.up ? L("En quin d'aquests intervals la funció és <b>decreixent</b>?", '¿En cuál de estos intervalos la función es <b>decreciente</b>?') : L("En quin d'aquests intervals la funció és <b>creixent</b>?", '¿En cuál de estos intervalos la función es <b>creciente</b>?');
    const seg = F.up ? [1, 2] : [1, 2], okI = `(${fmt(xs[seg[0]])}, ${fmt(xs[seg[1]])})`, cand = [`(${fmt(xs[0])}, ${fmt(xs[1])})`, `(${fmt(xs[2])}, ${fmt(xs[3])})`, `(${fmt(xs[0])}, ${fmt(xs[2])})`, `(${fmt(xs[3])}, ${fmt(xs[4])})`].filter(s => s !== okI);
    return mc(want, okI, cand, { vis, ex: L(`Del x = ${fmt(xs[1])} al x = ${fmt(xs[2])} la gràfica ${F.up ? 'baixa' : 'puja'} tota l'estona. Els intervals s'escriuen amb les x, d'esquerra a dreta.`, `Del x = ${fmt(xs[1])} al x = ${fmt(xs[2])} la gráfica ${F.up ? 'baja' : 'sube'} todo el rato. Los intervalos se escriben con las x, de izquierda a derecha.`), chk: { t: 'interval', xs, ys, dec: F.up } });
  }

  Object.assign(EX, {
    'e.cart4': L_ => eCart(L_),
    'fn.graph': (L_, A) => fnGraph(L_, A),
    'fn.inv': L_ => fnInv(L_),
    'fn.exp': L_ => fnExp(L_),
    'fn.mono': L_ => fnMono(L_)
  });

  /* ================= 5. Fraccions, decimals, percentatges i la recta numèrica ================= */
  const fq = (n, d) => fracS(n, d);
  // fraccions amb decimal exacte (denominador amb només 2 i 5)
  const EXD = [2, 4, 5, 8, 10, 20, 25, 50];
  const irr = d => { let n; do n = ri(1, 2 * d - 1); while (gcd(n, d) !== 1 || n === d); return n; };
  function fdpConv(L_) {
    if (L_ <= 1) { const d = pick(EXD), n = irr(d); return dinp(L(`Escriu la fracció en forma <b>decimal</b>:`, `Escribe la fracción en forma <b>decimal</b>:`), n / d, { vis: eqv(`${frac(n, d)} = ${BOX}`), ex: L(`Una fracció és una divisió: ${n} : ${d} = ${fmtD(n / d)}.`, `Una fracción es una división: ${n} : ${d} = ${fmtD(n / d)}.`), chk: { t: 'f2d', n, d } }); }
    if (L_ === 2) {
      const k = ri(0, 3);
      if (k === 0) { const p = ri(1, 99), v = p / 100; return inp(L(`Quin percentatge és <b>${fmtD(v)}</b>?`, `¿Qué porcentaje es <b>${fmtD(v)}</b>?`), p, { unit: '%', ex: L(`Per passar de decimal a percentatge es multiplica per 100: ${fmtD(v)} · 100 = ${p} %.`, `Para pasar de decimal a porcentaje se multiplica por 100: ${fmtD(v)} · 100 = ${p} %.`), chk: { t: 'd2p', v } }); }
      if (k === 1) { const d = pick([2, 4, 5, 10, 20, 25, 50]), n = ri(1, d - 1); return dinp(L(`Quin percentatge és ${frac(n, d)}?`, `¿Qué porcentaje es ${frac(n, d)}?`), n / d * 100, { unit: '%', big: true, ex: L(`${n} : ${d} = ${fmtD(n / d)} i per 100: ${fmtD(n / d * 100)} %.`, `${n} : ${d} = ${fmtD(n / d)} y por 100: ${fmtD(n / d * 100)} %.`), chk: { t: 'f2p', n, d } }); }
      if (k === 2) { const p = ri(1, 150); return dinp(L(`Escriu <b>${pc(p)}</b> en forma decimal.`, `Escribe <b>${pc(p)}</b> en forma decimal.`), p / 100, { ex: L(`${p} % vol dir ${p} de cada 100: ${p} : 100 = ${fmtD(p / 100)}.`, `${p} % quiere decir ${p} de cada 100: ${p} : 100 = ${fmtD(p / 100)}.`), chk: { t: 'p2d', p } }); }
      const d = pick([2, 4, 5, 10, 20, 25]), n = ri(1, d - 1), [a, b] = simp(n, d), p = n / d * 100;
      const dis = [[b, a], [a, b + 1], [a + 1, b], [p, 10], [1, a + b]].filter(([x, y]) => Math.abs(x / y - a / b) > 1e-9);
      return mc(L(`Quina fracció irreductible és el <b>${pc(p)}</b>?`, `¿Qué fracción irreducible es el <b>${pc(p)}</b>?`), fq(a, b), uniqVal(dis).slice(0, 3).map(([x, y]) => fq(x, y)), { big: true, ex: L(`${p} % = ${frac(p, 100)}, i simplificant: ${frac(a, b)}.`, `${p} % = ${frac(p, 100)}, y simplificando: ${frac(a, b)}.`), chk: { t: 'p2f', p } });
    }
    if (L_ === 3) {
      for (let t = 0; t < 300; t++) {
        const base = ri(10, 90) / 100, V = [];
        const make = () => { const k = ri(0, 2); if (k === 0) { const d = pick([4, 5, 8, 10, 20, 25]), n = Math.max(1, Math.round((base + (Math.random() - .5) * .3) * d)), [a, b] = simp(n, d); return b === 1 ? null : [a / b, frac(a, b)]; } if (k === 1) { const v = Math.round((base + (Math.random() - .5) * .3) * 100) / 100; return [v, fmtD(v)]; } const p = Math.round((base + (Math.random() - .5) * .3) * 100); return [p / 100, pc(p)]; };
        while (V.length < 4) { const r = make(); if (r && r[0] > 0 && V.every(([w]) => Math.abs(w - r[0]) > .009)) V.push(r); }
        if (new Set(V.map(x => x[1].includes('%') ? 'p' : x[1].includes('frac') ? 'f' : 'd')).size < 2) continue;
        const map = new Map(V), items = shuffle(V.map(x => x[0])), ans = V.map(x => x[0]).sort((a, b) => a - b);
        return { type: 'order', q: L('Ordena de <b>més petit a més gran</b>:', 'Ordena de <b>menor a mayor</b>:'), items, show: v => map.get(v), ans, ex: L(`Passa-ho tot a decimal per comparar: ${ans.map(v => /frac|%/.test(map.get(v)) ? `${map.get(v)} = ${fmtD(v)}` : map.get(v)).join('; ')}.`, `Pásalo todo a decimal para comparar: ${ans.map(v => /frac|%/.test(map.get(v)) ? `${map.get(v)} = ${fmtD(v)}` : map.get(v)).join('; ')}.`), chk: { t: 'order' } };
      }
    }
    if (L_ === 4) {
      const d = pick([3, 4, 5, 6, 8, 20, 25]), n = irr(d), v = n / d, eq = Math.random() < .25 && Number.isInteger(v * 100), w = eq ? v : Math.round((v + pick([-1, 1]) * ri(1, 8) / 100) * 100) / 100;
      if (w <= 0 || (!eq && Math.abs(w - v) < 1e-9)) return fdpConv(L_);
      const A = frac(n, d), Bd = fmtD(w), same = L('Són iguals', 'Son iguales'), ok = eq ? same : v > w ? A : Bd, vs = Number.isInteger(v * 1000) ? fmtD(v) : fmtDf(v, 3) + '…';
      return mc(L('Quin nombre és <b>més gran</b>?', '¿Qué número es <b>mayor</b>?'), ok, [A, Bd, same].filter(o => o !== ok), { fixed: [A, Bd, same], big: true, ex: L(`${frac(n, d)} = ${n} : ${d} = ${vs}. ${eq ? `És el mateix nombre que ${Bd}.` : `Comparant-lo amb ${Bd}, el més gran és ${v > w ? frac(n, d) : Bd}.`}`, `${frac(n, d)} = ${n} : ${d} = ${vs}. ${eq ? `Es el mismo número que ${Bd}.` : `Comparándolo con ${Bd}, el mayor es ${v > w ? frac(n, d) : Bd}.`}`), chk: { t: 'cmp', n, d, w } });
    }
    if (Math.random() < .5) { const d = pick([3, 6, 7, 9, 11, 12]), n = irr(d), r = Math.round(n / d * 100) / 100; if (Math.abs(n / d * 100 - Math.floor(n / d * 100) - .5) < 1e-6) return fdpConv(L_); return dinp(L(`Escriu ${frac(n, d)} en forma decimal <b>arrodonida a les centèsimes</b>.`, `Escribe ${frac(n, d)} en forma decimal <b>redondeada a las centésimas</b>.`), r, { big: true, ex: L(`${n} : ${d} = ${fmtDf(n / d, 4)}… i arrodonint a les centèsimes: ${fmtDf(r, 2)}.`, `${n} : ${d} = ${fmtDf(n / d, 4)}… y redondeando a las centésimas: ${fmtDf(r, 2)}.`), chk: { t: 'round', n, d } }); }
    const [p, a, b] = pick([[12.5, 1, 8], [37.5, 3, 8], [62.5, 5, 8], [87.5, 7, 8], [2.5, 1, 40], [7.5, 3, 40], [0.5, 1, 200], [150, 3, 2], [125, 5, 4], [175, 7, 4], [120, 6, 5], [0.2, 1, 500]]);
    const dis = uniqVal([[b, a], [a, b * 10], [a * 10, b], [Math.round(p), 100], [a + 1, b]].filter(([x, y]) => Math.abs(x / y - a / b) > 1e-9));
    return mc(L(`Quina fracció irreductible és el <b>${pc(p)}</b>?`, `¿Qué fracción irreducible es el <b>${pc(p)}</b>?`), fq(a, b), dis.slice(0, 3).map(([x, y]) => fq(x, y)), { big: true, ex: L(`${pc(p)} = ${fmtD(p)} : 100 = ${fmtD(p / 100)} = ${frac(a, b)}. Hi ha percentatges més grans que 100 % (més que el total) i més petits que 1 %.`, `${pc(p)} = ${fmtD(p)} : 100 = ${fmtD(p / 100)} = ${frac(a, b)}. Hay porcentajes mayores que 100 % (más que el total) y menores que 1 %.`), chk: { t: 'p2f', p } });
  }
  // treu valors repetits (fraccions equivalents) d'una llista [n, d]
  function uniqVal(list) { const out = []; list.forEach(([x, y]) => { if (y > 0 && x > 0 && out.every(([a, b]) => Math.abs(a / b - x / y) > 1e-9)) out.push([x, y]); }); return out; }

  // Recta numèrica
  function lineSVG(a, b, step, labs, marks) {
    const W = 320, x0 = 22, x1 = W - 22, X = v => x0 + (v - a) / (b - a) * (x1 - x0), y = 56, n = Math.round((b - a) / step), isInt = v => Math.abs(v - Math.round(v)) < 1e-9;
    let s = `<svg viewBox="0 0 ${W} 92" class="vsvg wide" style="width:320px"><line x1="${x0 - 12}" y1="${y}" x2="${x1 + 12}" y2="${y}" stroke="${INK}" stroke-width="2.5"/><path d="M${x1 + 18} ${y} l-8 -4.5 v9 Z" fill="${INK}"/><path d="M${x0 - 18} ${y} l8 -4.5 v9 Z" fill="${INK}"/>`;
    for (let i = 0; i <= n; i++) { const v = a + i * step, big = step < 1 ? isInt(v) : labs.some(w => Math.abs(w - v) < 1e-9); s += `<line x1="${r1(X(v))}" y1="${y - (big ? 9 : 6)}" x2="${r1(X(v))}" y2="${y + (big ? 9 : 6)}" stroke="${INK}" stroke-width="${big ? 2.2 : 1.4}"/>`; }
    labs.forEach(v => { s += tt(X(v), y + 26, fmt(v), { a: 'middle', fs: 13, fw: 800 }); });
    marks.forEach(m => { s += `<path class="mk" d="M${r1(X(m.v))} ${y - 4} l-7 -13 h14 Z" fill="${m.col || '#E24F86'}"/>` + tt(X(m.v), y - 21, m.lab, { a: 'middle', fs: 14, fw: 800, col: m.col || '#E24F86' }); });
    return s + '</svg>';
  }
  function nLine(L_) {
    if (L_ <= 2) {
      const st = L_ <= 1 ? 1 : pick([2, 5, 10]), cnt = 12, a = st * ri(-8, -2), b = a + st * cnt, k = ri(1, cnt - 1), v = a + k * st, labs = [];
      for (let i = 0; i <= cnt; i++) { const w = a + i * st; if (w === 0 || i === 0 || i === cnt || (L_ >= 2 && i % 4 === 0)) labs.push(w); }
      if (labs.includes(v)) return nLine(L_);
      const lb = pick(['A', 'P', 'M']), lw = labs.filter(w => w < v).pop(), j = (v - lw) / st;
      return ninp(L(`Quin nombre marca la lletra <b>${lb}</b>?`, `¿Qué número marca la letra <b>${lb}</b>?`), v, { vis: lineSVG(a, b, st, labs, [{ v, lab: lb }]), ex: L(`Cada marca ${st === 1 ? 'augmenta 1' : `augmenta ${st}`}. Des del ${fmt(lw)} fins a ${lb} hi ha ${j} ${j === 1 ? 'salt' : 'salts'}: ${fmt(lw)} + ${j * st} = ${fmt(v)}.`, `Cada marca ${st === 1 ? 'aumenta 1' : `aumenta ${st}`}. Desde el ${fmt(lw)} hasta ${lb} hay ${j} ${j === 1 ? 'salto' : 'saltos'}: ${fmt(lw)} + ${j * st} = ${fmt(v)}.`), chk: { t: 'int', v } });
    }
    if (L_ === 3) {
      const d = pick([2, 3, 4, 5, 6, 8]), a = pick([0, 0, -1]), b = a + 2, k = ri(1, 2 * d - 1), v = a + k / d;
      if (Number.isInteger(v)) return nLine(L_);
      const [p, q] = simp(Math.round(v * d), d), dis = uniqVal([[Math.abs(p), q + 1], [Math.abs(p) + 1, q], [q, Math.abs(p)], [Math.abs(p) - 1 || Math.abs(p) + 2, q]]).map(([x, y]) => [v < 0 ? -x : x, y]).filter(([x, y]) => Math.abs(x / y - v) > 1e-9);
      return mc(L(`Cada unitat està dividida en <b>${d}</b> parts iguals. Quin nombre marca la lletra <b>A</b>?`, `Cada unidad está dividida en <b>${d}</b> partes iguales. ¿Qué número marca la letra <b>A</b>?`), fq(p, q), dis.slice(0, 3).map(([x, y]) => fq(x, y)), { vis: lineSVG(a, b, 1 / d, [a, a + 1, b], [{ v, lab: 'A' }]), big: true, ex: L(`Cada marca petita val ${frac(1, d)}. A és ${Math.abs(Math.round(v * d))} ${Math.abs(Math.round(v * d)) === 1 ? 'marca' : 'marques'} ${v < 0 ? "a l'esquerra" : 'a la dreta'} del 0: ${fqTxt(Math.round(v * d), d)}${gcd(Math.abs(Math.round(v * d)), d) > 1 ? ` = ${fqTxt(p, q)}` : ''}.`, `Cada marca pequeña vale ${frac(1, d)}. A está ${Math.abs(Math.round(v * d))} ${Math.abs(Math.round(v * d)) === 1 ? 'marca' : 'marcas'} ${v < 0 ? 'a la izquierda' : 'a la derecha'} del 0: ${fqTxt(Math.round(v * d), d)}${gcd(Math.abs(Math.round(v * d)), d) > 1 ? ` = ${fqTxt(p, q)}` : ''}.`), chk: { t: 'frac', v } });
    }
    if (L_ === 4) {
      const d = pick([2, 4, 5, 10]), a = -2, b = 2, k = ri(1, 4 * d - 1), v = a + k / d;
      if (Number.isInteger(v) || v === 0) return nLine(L_);
      const dis = [...new Set([-v, v + 1 / d, v - 1 / d, v + 1, v - 1].filter(w => Math.abs(w - v) > 1e-9 && w > -2.001 && w < 2.001).map(w => Math.round(w * 100) / 100))];
      return mc(L('Quin nombre marca la lletra <b>A</b>?', '¿Qué número marca la letra <b>A</b>?'), fmtD(v), shuffle(dis).slice(0, 3).map(fmtD), { vis: lineSVG(a, b, 1 / d, [-2, -1, 0, 1, 2], [{ v, lab: 'A' }]), big: true, ex: L(`Entre dos enters hi ha ${d} parts: cada marca val ${fmtD(1 / d)}. A = ${fmtD(v)}${v < 0 ? ' (a l\'esquerra del 0, és negatiu)' : ''}.`, `Entre dos enteros hay ${d} partes: cada marca vale ${fmtD(1 / d)}. A = ${fmtD(v)}${v < 0 ? ' (a la izquierda del 0, es negativo)' : ''}.`), chk: { t: 'dec', v } });
    }
    const d = pick([2, 3, 4]), vals = [];
    const target = (() => { let k; do k = ri(-2 * d + 1, 2 * d - 1); while (k % d === 0); return k / d; })();
    [target, -target, target + 1 / d, target - 1 / d].forEach(w => { if (w > -2 && w < 2 && vals.every(u => Math.abs(u - w) > 1e-9)) vals.push(w); });
    while (vals.length < 4) { const w = ri(-2 * d + 1, 2 * d - 1) / d; if (vals.every(u => Math.abs(u - w) > 1e-9)) vals.push(w); }
    const labs = ['A', 'B', 'C', 'D'], ord = shuffle(vals.slice(0, 4)), k = ord.findIndex(w => Math.abs(w - target) < 1e-9), [p, q] = simp(Math.round(target * d), d);
    return mc(L(`Quina lletra marca el nombre <b>${fqTxtH(p, q)}</b>?`, `¿Qué letra marca el número <b>${fqTxtH(p, q)}</b>?`), labs[k], labs.filter((_, i) => i !== k), { fixed: labs, big: true, vis: lineSVG(-2, 2, 1 / d, [-2, -1, 0, 1, 2], ord.map((w, i) => ({ v: w, lab: labs[i], col: ['#E24F86', '#36A9E1', '#3CC46A', '#FF9A3C'][i] }))), ex: L(`${fqTxt(p, q)} = ${fmtDf(p / q, 2)}${Number.isInteger(p / q * 100) ? '' : '…'}: és ${p < 0 ? 'a l\'esquerra del 0' : 'a la dreta del 0'}, a ${Math.abs(Math.round(target * d))} parts de ${frac(1, d)}. És la ${labs[k]}.`, `${fqTxt(p, q)} = ${fmtDf(p / q, 2)}${Number.isInteger(p / q * 100) ? '' : '…'}: está ${p < 0 ? 'a la izquierda del 0' : 'a la derecha del 0'}, a ${Math.abs(Math.round(target * d))} partes de ${frac(1, d)}. Es la ${labs[k]}.`), chk: { t: 'which', v: target } });
  }
  const fqTxt = (p, q) => `${p < 0 ? '−' : ''}${Math.abs(p)}/${q}`;
  const fqTxtH = (p, q) => `${p < 0 ? '−' : ''}${frac(Math.abs(p), q)}`;

  // Fraccions generatrius
  // el període es marca amb una ratlla a sobre (inline-block perquè quedi enganxada a la xifra)
  const ovl = s => `<span style="display:inline-block;line-height:.78;border-top:.09em solid currentColor;padding-top:.06em">${s}</span>`;
  const decTxt = (ip, pre, per) => `${ip},${pre}${ovl(per)}`;
  function fdpGen(L_) {
    if (L_ <= 1) {
      const d = pick([3, 6, 7, 8, 9, 11, 12, 15, 16, 20, 22, 24, 25, 30, 40, 45]), n = irr(d);
      let m = d; while (m % 2 === 0) m /= 2; while (m % 5 === 0) m /= 5;
      const T = [L('Decimal exacte', 'Decimal exacto'), L('Periòdic pur', 'Periódico puro'), L('Periòdic mixt', 'Periódico mixto')], k = m === 1 ? 0 : m === d ? 1 : 2;
      return mc(L(`Quin tipus de nombre decimal és ${frac(n, d)}?`, `¿Qué tipo de número decimal es ${frac(n, d)}?`), T[k], T.filter((_, i) => i !== k), { fixed: T, ex: L(`${d} = ${factor(d)}. ${k === 0 ? 'Només té els factors 2 i 5: decimal exacte' : k === 1 ? 'No té cap factor 2 ni 5: periòdic pur' : 'Té factors 2 o 5 i també altres: periòdic mixt'} (${n} : ${d} = ${k ? fmtDf(n / d, 4) + '…' : fmtD(n / d)}).`, `${d} = ${factor(d)}. ${k === 0 ? 'Solo tiene los factores 2 y 5: decimal exacto' : k === 1 ? 'No tiene ningún factor 2 ni 5: periódico puro' : 'Tiene factores 2 o 5 y también otros: periódico mixto'} (${n} : ${d} = ${k ? fmtDf(n / d, 4) + '…' : fmtD(n / d)}).`), chk: { t: 'type', n, d } });
    }
    let ip, pre, per, num, den, shown;
    const kind = L_ === 2 ? 'ex' : L_ === 3 ? 'pure' : L_ === 4 ? 'mixed' : pick(['ex', 'pure', 'mixed']);
    if (kind === 'ex') { const d = pick([4, 5, 8, 20, 25, 40, 50]), n0 = irr(d); ip = Math.floor(n0 / d); pre = String(Math.round((n0 / d - ip) * 1000) / 1000).split('.')[1]; per = ''; den = 10 ** pre.length; num = Math.round(n0 / d * den); shown = fmtD(n0 / d); }
    else if (kind === 'pure') { ip = ri(0, 2); per = String(pick([ri(1, 8), ri(10, 98)])); if (/^(\d)\1+$/.test(per) || per.endsWith('9')) return fdpGen(L_); pre = ''; den = 10 ** per.length - 1; num = +(ip + per) - ip; shown = decTxt(ip, '', per); }
    else { ip = ri(0, 2); pre = String(ri(1, 9)); per = String(ri(1, 8)); if (per === pre) return fdpGen(L_); den = 90; num = +(ip + pre + per) - +(ip + pre); shown = decTxt(ip, pre, per); }
    const [a, b] = simp(num, den), v = a / b, all = String(+(ip + pre + per)), noP = String(+(ip + pre));
    const cands = kind === 'ex' ? [[num * 10, den], [num, den * 10], [a + 1, b], [b, a]] : kind === 'pure' ? [[+(ip + per), 10 ** per.length], [+(ip + per), 10 ** per.length - 1], [+per, 10 ** per.length], [+(ip + per) + ip, den], [a + 1, b], [a, b + 1]] : [[+all - +noP, 99], [+all - ip, 90], [+all, 90], [+all - +noP, 900], [a + 1, b], [a, b + 1]];
    const dis = uniqVal(cands.map(([x, y]) => simp(x, y))).filter(([x, y]) => Math.abs(x / y - v) > 1e-9);
    const top = noP === '0' ? all : `${all} − ${noP}`;
    const rule = kind === 'ex' ? L(`Un decimal exacte es pot escriure com una fracció decimal: ${shown} = ${frac(num, den)}`, `Un decimal exacto se puede escribir como una fracción decimal: ${shown} = ${frac(num, den)}`) : kind === 'pure' ? L(`Periòdic pur: (nombre sense coma − part entera) dividit per tants 9 com xifres té el període: ${frac(top, den)}`, `Periódico puro: (número sin coma − parte entera) dividido por tantos 9 como cifras tiene el período: ${frac(top, den)}`) : L(`Periòdic mixt: (nombre sense coma − part no periòdica) dividit per tants 9 com xifres té el període i tants 0 com xifres no periòdiques hi ha després de la coma: ${frac(top, den)}`, `Periódico mixto: (número sin coma − parte no periódica) dividido por tantos 9 como cifras tiene el período y tantos 0 como cifras no periódicas hay después de la coma: ${frac(top, den)}`);
    const tail = `${kind === 'ex' || top === String(num) ? '' : ` = ${frac(num, den)}`}${b === den ? '' : ` = ${frac(a, b)}`}`;
    const sq = `<span style="white-space:nowrap">${shown}?</span>`;
    return mc(L(`Quina és la <b>fracció generatriu</b> (irreductible) de ${sq}`, `¿Cuál es la <b>fracción generatriz</b> (irreducible) de ${sq}`), fq(a, b), dis.slice(0, 3).map(([x, y]) => fq(x, y)), { big: true, ex: `${rule}${tail}.`, chk: { t: kind, ip, pre, per } });
  }

  Object.assign(EX, {
    'fdp.conv7': L_ => fdpConv(L_),
    'n.line7': L_ => nLine(L_),
    'fdp.gen': L_ => fdpGen(L_)
  });

  /* ================= 7. Geometria de 1r d'ESO: angles, triangles, quadrilàters i el cercle ================= */
  const HL = '#E24F86', SH = '#36A9E1';
  const pt = (cx, cy, r, deg) => [cx + r * Math.cos(deg * Math.PI / 180), cy - r * Math.sin(deg * Math.PI / 180)];
  const arc = (cx, cy, r, a0, a1, col) => { const [x0, y0] = pt(cx, cy, r, a0), [x1, y1] = pt(cx, cy, r, a1); return `<path d="M${r1(x0)} ${r1(y0)} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 0 ${r1(x1)} ${r1(y1)}" fill="none" stroke="${col}" stroke-width="3"/>`; };
  // Dos angles que sumen 90° o 180°: un rajos des del vèrtex
  function angPairSVG(a, total) {
    const cx = total === 90 ? 70 : 150, cy = 140, R = 110, s = [`<svg viewBox="0 0 300 165" class="vsvg wide" style="width:300px">`];
    const ray = d => { const [x, y] = pt(cx, cy, R, d); return `<line x1="${cx}" y1="${cy}" x2="${r1(x)}" y2="${r1(y)}" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`; };
    s.push(ray(0), ray(total), `<line x1="${cx}" y1="${cy}" x2="${r1(pt(cx, cy, R, a)[0])}" y2="${r1(pt(cx, cy, R, a)[1])}" stroke="${PRI}" stroke-width="3.5" stroke-linecap="round"/>`);
    if (total === 90) s.push(`<path d="M${cx + 16} ${cy} V${cy - 16} H${cx}" fill="none" stroke="${INK}" stroke-width="1.8"/>`);
    s.push(arc(cx, cy, 34, 0, a, SH), arc(cx, cy, 46, a, total, HL));
    const [lx, ly] = pt(cx, cy, 58, a / 2), [qx, qy] = pt(cx, cy, 70, (a + total) / 2);
    s.push(tt(lx + (total === 90 ? 6 : 0), ly + 5, `${a}°`, { a: 'middle', fs: 15, fw: 800, col: '#1B6FA3' }), tt(qx, qy + 5, '?', { a: 'middle', fs: 18, fw: 900, col: HL }));
    return s.join('') + '</svg>';
  }
  // Dues rectes que es tallen: un angle conegut i un de marcat
  function crossSVG(a, which) {
    const cx = 150, cy = 80, R = 120, s = [`<svg viewBox="0 0 300 160" class="vsvg wide" style="width:300px">`];
    const ln = d => { const [x0, y0] = pt(cx, cy, R, d), [x1, y1] = pt(cx, cy, R, d + 180); return `<line x1="${r1(x0)}" y1="${r1(y0)}" x2="${r1(x1)}" y2="${r1(y1)}" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`; };
    s.push(ln(0), ln(a), arc(cx, cy, 30, 0, a, SH));
    const [lx, ly] = pt(cx, cy, 48, a / 2); s.push(tt(lx + 8, ly + 5, `${a}°`, { a: 'middle', fs: 15, fw: 800, col: '#1B6FA3' }));
    const [f, t] = which === 'opp' ? [180, 180 + a] : [a, 180];
    s.push(arc(cx, cy, 40, f, t, HL)); const [qx, qy] = pt(cx, cy, 58, (f + t) / 2); s.push(tt(qx, qy + 6, '?', { a: 'middle', fs: 18, fw: 900, col: HL }));
    return s.join('') + '</svg>';
  }
  const NGON = { 3: ['triangle', 'triángulo'], 4: ['quadrilàter', 'cuadrilátero'], 5: ['pentàgon', 'pentágono'], 6: ['hexàgon', 'hexágono'], 7: ['heptàgon', 'heptágono'], 8: ['octàgon', 'octógono'], 9: ['enneàgon', 'eneágono'], 10: ['decàgon', 'decágono'], 12: ['dodecàgon', 'dodecágono'] };
  const ngon = n => L(...NGON[n]);
  function eAng(L_) {
    if (L_ <= 1) {
      const sup = Math.random() < .5, T = sup ? 180 : 90, a = ri(sup ? 20 : 10, T - (sup ? 20 : 10)), nm = sup ? L('suplementari', 'suplementario') : L('complementari', 'complementario');
      return inp(L(`Quant fa l'angle <b>${nm}</b> d'un angle de ${a}°?`, `¿Cuánto mide el ángulo <b>${nm}</b> de un ángulo de ${a}°?`), T - a, { unit: '°', vis: angPairSVG(a, T), ex: L(`Dos angles ${sup ? 'suplementaris sumen 180° (un angle pla)' : 'complementaris sumen 90° (un angle recte)'}: ${T} − ${a} = ${T - a}°.`, `Dos ángulos ${sup ? 'suplementarios suman 180° (un ángulo llano)' : 'complementarios suman 90° (un ángulo recto)'}: ${T} − ${a} = ${T - a}°.`), chk: { t: 'pair', a, T } });
    }
    if (L_ === 2) {
      const a = ri(25, 155), w = pick(['opp', 'adj']), ans = w === 'opp' ? a : 180 - a;
      if (Math.abs(a - 90) < 6) return eAng(L_);
      return inp(L("Dues rectes es tallen. Quant fa l'angle marcat amb l'interrogant?", 'Dos rectas se cortan. ¿Cuánto mide el ángulo marcado con el interrogante?'), ans, { unit: '°', vis: crossSVG(a, w), ex: w === 'opp' ? L(`Són angles oposats pel vèrtex: són iguals, ${a}°.`, `Son ángulos opuestos por el vértice: son iguales, ${a}°.`) : L(`Són angles consecutius sobre una recta: sumen 180°. 180 − ${a} = ${180 - a}°.`, `Son ángulos consecutivos sobre una recta: suman 180°. 180 − ${a} = ${180 - a}°.`), chk: { t: 'cross', a, w } });
    }
    if (L_ === 3) {
      const sup = Math.random() < .5, T = sup ? 180 : 90;
      if (Math.random() < .5) { const k = pick([2, 3, 4, 5]); if (T % (k + 1)) return eAng(L_); const x = T / (k + 1); return inp(L(`Un angle fa ${k === 2 ? 'el doble' : k === 3 ? 'el triple' : k === 4 ? 'el quàdruple' : 'cinc vegades'} que el seu ${sup ? 'suplementari' : 'complementari'}. Quant fa l'angle <b>petit</b>?`, `Un ángulo mide ${k === 2 ? 'el doble' : k === 3 ? 'el triple' : k === 4 ? 'el cuádruple' : 'cinco veces'} que su ${sup ? 'suplementario' : 'complementario'}. ¿Cuánto mide el ángulo <b>pequeño</b>?`), x, { unit: '°', long: true, ex: L(`Si el petit fa x, el gran fa ${k}x i sumen ${T}°: ${k + 1}x = ${T} → x = ${x}°.`, `Si el pequeño mide x, el grande mide ${k}x y suman ${T}°: ${k + 1}x = ${T} → x = ${x}°.`), chk: { t: 'kx', k, T } }); }
      const d = 2 * ri(3, T === 90 ? 20 : 40), x = (T - d) / 2;
      return inp(L(`Dos angles ${sup ? 'suplementaris' : 'complementaris'} es diferencien en ${d}°. Quant fa el <b>gran</b>?`, `Dos ángulos ${sup ? 'suplementarios' : 'complementarios'} se diferencian en ${d}°. ¿Cuánto mide el <b>grande</b>?`), x + d, { unit: '°', long: true, ex: L(`Si el petit fa x, el gran fa x + ${d}: 2x + ${d} = ${T} → x = ${x}°, i el gran, ${x + d}°.`, `Si el pequeño mide x, el grande mide x + ${d}: 2x + ${d} = ${T} → x = ${x}°, y el grande, ${x + d}°.`), chk: { t: 'diff', d, T } });
    }
    if (L_ === 4) { const n = pick([4, 5, 6, 7, 8, 9, 10, 12]); return inp(L(`Quant sumen els angles interiors d'un <b>${ngon(n)}</b> (${n} costats)?`, `¿Cuánto suman los ángulos interiores de un <b>${ngon(n)}</b> (${n} lados)?`), (n - 2) * 180, { unit: '°', vis: shapeSVG('p' + n, n, pick(COLS)), ex: L(`Des d'un vèrtex es pot dividir en ${n - 2} triangles, i cada triangle suma 180°: (${n} − 2) · 180 = ${(n - 2) * 180}°.`, `Desde un vértice se puede dividir en ${n - 2} triángulos, y cada triángulo suma 180°: (${n} − 2) · 180 = ${(n - 2) * 180}°.`), chk: { t: 'sum', n } }); }
    if (Math.random() < .5) { const n = pick([3, 4, 5, 6, 8, 9, 10, 12]); return inp(L(`Quant fa <b>cada angle</b> interior d'un ${ngon(n)} <b>regular</b>?`, `¿Cuánto mide <b>cada ángulo</b> interior de un ${ngon(n)} <b>regular</b>?`), (n - 2) * 180 / n, { unit: '°', vis: shapeSVG('p' + n, n, pick(COLS)), ex: L(`Tots els angles són iguals: (${n} − 2) · 180 : ${n} = ${(n - 2) * 180} : ${n} = ${(n - 2) * 180 / n}°.`, `Todos los ángulos son iguales: (${n} − 2) · 180 : ${n} = ${(n - 2) * 180} : ${n} = ${(n - 2) * 180 / n}°.`), chk: { t: 'reg', n } }); }
    const n = pick([4, 5]), S = (n - 2) * 180, known = []; let rest = S;
    for (let i = 0; i < n - 1; i++) { const v = ri(60, 140); known.push(v); rest -= v; }
    if (rest < 30 || rest > 170) return eAng(L_);
    return inp(L(`Un ${ngon(n)} té ${n - 1} angles de ${known.slice(0, -1).join('°, ')}° i ${known[known.length - 1]}°. Quant fa l'angle que falta?`, `Un ${ngon(n)} tiene ${n - 1} ángulos de ${known.slice(0, -1).join('°, ')}° y ${known[known.length - 1]}°. ¿Cuánto mide el ángulo que falta?`), rest, { unit: '°', long: true, ex: L(`Els angles d'un ${ngon(n)} sumen ${S}°: ${S} − (${known.join(' + ')}) = ${rest}°.`, `Los ángulos de un ${ngon(n)} suman ${S}°: ${S} − (${known.join(' + ')}) = ${rest}°.`), chk: { t: 'miss', n, known } });
  }

  // Triangles i quadrilàters
  const polySVG7 = (P, o = {}) => {
    const xs = P.map(p => p[0]), ys = P.map(p => p[1]), mx = Math.min(...xs), Mx = Math.max(...xs), my = Math.min(...ys), My = Math.max(...ys);
    const sc = Math.min(220 / (Mx - mx || 1), 120 / (My - my || 1)), X = x => 40 + (x - mx) * sc, Y = y => 20 + (My - y) * sc, W = (Mx - mx) * sc + 80, H = (My - my) * sc + 40;
    let s = `<svg viewBox="0 0 ${r1(W)} ${r1(H)}" class="vsvg wide" style="width:${Math.round(Math.min(280, W))}px"><polygon class="pg" points="${P.map(p => `${r1(X(p[0]))},${r1(Y(p[1]))}`).join(' ')}" fill="#E8F5FE" stroke="${SH}" stroke-width="3.5" stroke-linejoin="round"/>`;
    (o.labs || []).forEach((lb, i) => { if (!lb) return; const a = P[i], b = P[(i + 1) % P.length], mxp = (X(a[0]) + X(b[0])) / 2, myp = (Y(a[1]) + Y(b[1])) / 2, cxp = P.reduce((u, p) => u + X(p[0]), 0) / P.length, cyp = P.reduce((u, p) => u + Y(p[1]), 0) / P.length, dx = mxp - cxp, dy = myp - cyp, dl = Math.hypot(dx, dy) || 1; s += tt(mxp + dx / dl * 16, myp + dy / dl * 16 + 5, lb, { a: 'middle', fs: 14, fw: 800 }); });
    (o.ticks || []).forEach((k, i) => { if (!k) return; const a = P[i], b = P[(i + 1) % P.length], mxp = (X(a[0]) + X(b[0])) / 2, myp = (Y(a[1]) + Y(b[1])) / 2, ang = Math.atan2(Y(b[1]) - Y(a[1]), X(b[0]) - X(a[0])), nx = -Math.sin(ang), ny = Math.cos(ang), tx = Math.cos(ang), ty = Math.sin(ang); for (let j = 0; j < k; j++) { const off = (j - (k - 1) / 2) * 5; s += `<line x1="${r1(mxp + tx * off - nx * 7)}" y1="${r1(myp + ty * off - ny * 7)}" x2="${r1(mxp + tx * off + nx * 7)}" y2="${r1(myp + ty * off + ny * 7)}" stroke="${INK}" stroke-width="2"/>`; } });
    (o.right || []).forEach(i => { const n = P.length, p = P[i], a = P[(i + n - 1) % n], b = P[(i + 1) % n], u = [X(a[0]) - X(p[0]), Y(a[1]) - Y(p[1])], v = [X(b[0]) - X(p[0]), Y(b[1]) - Y(p[1])], lu = Math.hypot(...u), lv = Math.hypot(...v), q = 13; s += `<path d="M${r1(X(p[0]) + u[0] / lu * q)} ${r1(Y(p[1]) + u[1] / lu * q)} L${r1(X(p[0]) + u[0] / lu * q + v[0] / lv * q)} ${r1(Y(p[1]) + u[1] / lu * q + v[1] / lv * q)} L${r1(X(p[0]) + v[0] / lv * q)} ${r1(Y(p[1]) + v[1] / lv * q)}" fill="none" stroke="${INK}" stroke-width="1.8"/>`; });
    return s + '</svg>';
  };
  // triangle a partir dels tres costats (a = base)
  const triPts = (a, b, c) => { const x = (a * a + c * c - b * b) / (2 * a), y = Math.sqrt(Math.max(0, c * c - x * x)); return [[0, 0], [a, 0], [x, y]]; };
  const QD = () => ({ sq: L('Quadrat', 'Cuadrado'), re: L('Rectangle', 'Rectángulo'), rh: L('Rombe', 'Rombo'), rb: L('Romboide', 'Romboide'), tz: L('Trapezi', 'Trapecio'), td: L('Trapezoide', 'Trapezoide') });
  function quadShape(k) {
    const r = (a, b) => ri(a, b);
    if (k === 'sq') { const a = r(3, 5); return { P: [[0, 0], [a, 0], [a, a], [0, a]], ticks: [1, 1, 1, 1], right: [0, 1, 2, 3] }; }
    if (k === 're') { const a = r(5, 8), b = r(2, 4); return { P: [[0, 0], [a, 0], [a, b], [0, b]], ticks: [1, 2, 1, 2], right: [0, 1, 2, 3] }; }
    if (k === 'rh') { const d1 = r(6, 9), d2 = r(3, 5); if (d1 === d2) return quadShape(k); return { P: [[0, d2 / 2], [d1 / 2, 0], [d1, d2 / 2], [d1 / 2, d2]], ticks: [1, 1, 1, 1], right: [] }; }
    if (k === 'rb') { const a = r(5, 7), h = r(2, 3), s = r(2, 3); return { P: [[0, 0], [a, 0], [a + s, h], [s, h]], ticks: [1, 2, 1, 2], right: [] }; }
    if (k === 'tz') { const B = r(7, 9), b = r(3, 5), h = r(2, 4), off = Math.random() < .5 ? 0 : r(1, B - b - 1); return { P: [[0, 0], [B, 0], [off + b, h], [off, h]], ticks: [0, 0, 0, 0], right: off === 0 ? [0, 3] : [], par: true }; }
    // trapezoide: cap parell de costats paral·lels (si en surt algun, se'n genera un altre)
    const P = [[0, 0], [r(6, 8), r(-1, 1) * .5], [r(5, 7), r(3, 4)], [r(1, 2), r(2, 3)]], sd = i => [P[(i + 1) % 4][0] - P[i][0], P[(i + 1) % 4][1] - P[i][1]], par = (u, v) => Math.abs(u[0] * v[1] - u[1] * v[0]) / (Math.hypot(...u) * Math.hypot(...v)) < .08;
    if (par(sd(0), sd(2)) || par(sd(1), sd(3))) return quadShape(k);
    return { P, ticks: [0, 0, 0, 0], right: [] };
  }
  function eClass(L_) {
    if (L_ <= 1) {
      const k = ri(0, 2), T = [L('Equilàter', 'Equilátero'), L('Isòsceles', 'Isósceles'), L('Escalè', 'Escaleno')];
      let a, b, c; for (let t = 0; t < 200; t++) { a = ri(4, 9); b = k === 0 ? a : ri(4, 9); c = k === 0 ? a : k === 1 ? b : ri(4, 9); if (k === 1 && a === b) continue; if (k === 2 && new Set([a, b, c]).size < 3) continue; if (a < b + c && b < a + c && c < a + b) break; }
      const P = triPts(a, b, c), sh = shuffle([0, 1, 2]);
      return mc(L('Segons els costats, quin tipus de triangle és?', 'Según los lados, ¿qué tipo de triángulo es?'), T[k], T.filter((_, i) => i !== k), { fixed: T, vis: polySVG7(P, { labs: [`${a} cm`, `${b} cm`, `${c} cm`] }), ex: [L('Els tres costats són iguals: equilàter.', 'Los tres lados son iguales: equilátero.'), L('Té dos costats iguals: isòsceles.', 'Tiene dos lados iguales: isósceles.'), L('Els tres costats són diferents: escalè.', 'Los tres lados son distintos: escaleno.')][k], chk: { t: 'sides', a, b, c, sh } });
    }
    if (L_ === 2) {
      const k = ri(0, 2), T = [L('Acutangle', 'Acutángulo'), L('Rectangle', 'Rectángulo'), L('Obtusangle', 'Obtusángulo')];
      let A; for (let t = 0; t < 200; t++) { const x = k === 1 ? 90 : k === 2 ? ri(95, 150) : ri(50, 85), y = ri(20, 180 - x - 20), z = 180 - x - y; A = shuffle([x, y, z]); if (k === 0 && Math.max(...A) >= 90) continue; if (A.every(v => v >= 15)) break; }
      return mc(L(`Els angles d'un triangle fan ${A[0]}°, ${A[1]}° i ${A[2]}°. Segons els angles, quin tipus de triangle és?`, `Los ángulos de un triángulo miden ${A[0]}°, ${A[1]}° y ${A[2]}°. Según los ángulos, ¿qué tipo de triángulo es?`), T[k], T.filter((_, i) => i !== k), { fixed: T, ex: [L('Tots tres angles són aguts (menys de 90°): acutangle.', 'Los tres ángulos son agudos (menos de 90°): acutángulo.'), L('Té un angle recte (90°): rectangle.', 'Tiene un ángulo recto (90°): rectángulo.'), L('Té un angle obtús (més de 90°): obtusangle.', 'Tiene un ángulo obtuso (más de 90°): obtusángulo.')][k], chk: { t: 'angles', A } });
    }
    const Q = QD(), keys = Object.keys(Q);
    if (L_ === 3) {
      const k = pick(keys), S = quadShape(k), others = shuffle(keys.filter(x => x !== k)).slice(0, 3);
      return mc(L('Quin quadrilàter és? Les ratlletes marquen els costats iguals i el quadradet, els angles rectes.', '¿Qué cuadrilátero es? Las rayitas marcan los lados iguales y el cuadradito, los ángulos rectos.'), Q[k], others.map(x => Q[x]), { vis: polySVG7(S.P, { ticks: S.ticks, right: S.right }), ex: { sq: L('Quatre costats iguals i quatre angles rectes: quadrat.', 'Cuatro lados iguales y cuatro ángulos rectos: cuadrado.'), re: L('Quatre angles rectes i els costats oposats iguals: rectangle.', 'Cuatro ángulos rectos y los lados opuestos iguales: rectángulo.'), rh: L('Quatre costats iguals però sense angles rectes: rombe.', 'Cuatro lados iguales pero sin ángulos rectos: rombo.'), rb: L('Costats oposats paral·lels i iguals, sense angles rectes ni tots els costats iguals: romboide.', 'Lados opuestos paralelos e iguales, sin ángulos rectos ni todos los lados iguales: romboide.'), tz: L('Només té dos costats paral·lels (les bases): trapezi.', 'Solo tiene dos lados paralelos (las bases): trapecio.'), td: L('No té cap parell de costats paral·lels: trapezoide.', 'No tiene ningún par de lados paralelos: trapezoide.') }[k], chk: { t: 'quad', k, P: S.P } });
    }
    if (L_ === 4) {
      const F = pick([
        ['rh', L('Quin quadrilàter té els quatre costats iguals però cap angle recte?', '¿Qué cuadrilátero tiene los cuatro lados iguales pero ningún ángulo recto?')],
        ['tz', L('Quin quadrilàter té només un parell de costats paral·lels?', '¿Qué cuadrilátero tiene solo un par de lados paralelos?')],
        ['td', L('Quin quadrilàter no té cap parell de costats paral·lels?', '¿Qué cuadrilátero no tiene ningún par de lados paralelos?')],
        ['re', L('Quin quadrilàter té quatre angles rectes però no té els quatre costats iguals?', '¿Qué cuadrilátero tiene cuatro ángulos rectos pero no tiene los cuatro lados iguales?')],
        ['sq', L('Quin quadrilàter té quatre angles rectes i els quatre costats iguals?', '¿Qué cuadrilátero tiene cuatro ángulos rectos y los cuatro lados iguales?')],
        ['rb', L('Quin paral·lelogram no té angles rectes ni els quatre costats iguals?', '¿Qué paralelogramo no tiene ángulos rectos ni los cuatro lados iguales?')]]);
      const others = shuffle(keys.filter(x => x !== F[0])).slice(0, 3);
      return mc(F[1], Q[F[0]], others.map(x => Q[x]), { ex: L('Recorda: quadrat, rectangle, rombe i romboide són paral·lelograms (dos parells de costats paral·lels); el trapezi en té un i el trapezoide, cap.', 'Recuerda: cuadrado, rectángulo, rombo y romboide son paralelogramos (dos pares de lados paralelos); el trapecio tiene uno y el trapezoide, ninguno.'), chk: { t: 'prop', k: F[0] } });
    }
    if (Math.random() < .5) { const a = 2 * ri(10, 70); return inp(L(`Un triangle isòsceles té l'angle desigual de <b>${a}°</b>. Quant fa cadascun dels altres dos angles?`, `Un triángulo isósceles tiene el ángulo desigual de <b>${a}°</b>. ¿Cuánto mide cada uno de los otros dos ángulos?`), (180 - a) / 2, { unit: '°', long: true, ex: L(`Els dos angles iguals sumen 180 − ${a} = ${180 - a}°, i cadascun fa ${180 - a} : 2 = ${(180 - a) / 2}°.`, `Los dos ángulos iguales suman 180 − ${a} = ${180 - a}°, y cada uno mide ${180 - a} : 2 = ${(180 - a) / 2}°.`), chk: { t: 'iso1', a } }); }
    const b = ri(20, 85); return inp(L(`Els dos angles iguals d'un triangle isòsceles fan <b>${b}°</b> cadascun. Quant fa el tercer angle?`, `Los dos ángulos iguales de un triángulo isósceles miden <b>${b}°</b> cada uno. ¿Cuánto mide el tercer ángulo?`), 180 - 2 * b, { unit: '°', long: true, ex: L(`180 − 2 · ${b} = ${180 - 2 * b}°.`, `180 − 2 · ${b} = ${180 - 2 * b}°.`), chk: { t: 'iso2', b } });
  }

  // Elements del cercle
  const CEL = () => ({ radi: L('Radi', 'Radio'), diam: L('Diàmetre', 'Diámetro'), corda: L('Corda', 'Cuerda'), arc: L('Arc', 'Arco'), sect: L('Sector circular', 'Sector circular'), segm: L('Segment circular', 'Segmento circular'), tang: L('Recta tangent', 'Recta tangente'), sec: L('Recta secant', 'Recta secante'), cen: L('Centre', 'Centro') });
  function circSVG(k) {
    const cx = 110, cy = 80, R = 60, s = [`<svg viewBox="0 0 220 160" class="vsvg wide" style="width:240px"><circle class="cc" cx="${cx}" cy="${cy}" r="${R}" fill="#F4EEF9" stroke="${INK}" stroke-width="2.5"/>`];
    const a0 = ri(0, 359), a1 = a0 + ri(70, 140), P = d => pt(cx, cy, R, d).map(r1), line = (p, q, cls) => `<line class="${cls}" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${HL}" stroke-width="4" stroke-linecap="round"/>`;
    if (k === 'radi') s.push(line([cx, cy], P(a0), 'el'));
    if (k === 'diam') s.push(line(P(a0), P(a0 + 180), 'el'));
    if (k === 'corda') s.push(line(P(a0), P(a1), 'el'));
    if (k === 'arc') s.push(`<path class="el" d="M${P(a0).join(' ')} A${R} ${R} 0 0 0 ${P(a1).join(' ')}" fill="none" stroke="${HL}" stroke-width="6" stroke-linecap="round"/>`);
    if (k === 'sect') s.push(`<path class="el" d="M${cx} ${cy} L${P(a0).join(' ')} A${R} ${R} 0 0 0 ${P(a1).join(' ')} Z" fill="${HL}" fill-opacity=".55" stroke="${HL}" stroke-width="2.5"/>`);
    if (k === 'segm') s.push(`<path class="el" d="M${P(a0).join(' ')} A${R} ${R} 0 0 0 ${P(a1).join(' ')} Z" fill="${HL}" fill-opacity=".55" stroke="${HL}" stroke-width="2.5"/>`);
    if (k === 'tang') { const t = P(a0), dx = -Math.sin(a0 * Math.PI / 180), dy = -Math.cos(a0 * Math.PI / 180); s.push(line([r1(t[0] - 70 * dx), r1(t[1] - 70 * dy)], [r1(t[0] + 70 * dx), r1(t[1] + 70 * dy)], 'el')); }
    if (k === 'sec') { const m = R * .45, u = a0 * Math.PI / 180, c0 = [cx + m * Math.cos(u), cy - m * Math.sin(u)], dx = -Math.sin(u), dy = -Math.cos(u), h = Math.sqrt(R * R - m * m) + 28; s.push(line([r1(c0[0] - h * dx), r1(c0[1] - h * dy)], [r1(c0[0] + h * dx), r1(c0[1] + h * dy)], 'el')); }
    s.push(k === 'cen' ? `<circle class="el" cx="${cx}" cy="${cy}" r="6" fill="${HL}"/>` : `<circle cx="${cx}" cy="${cy}" r="3" fill="${INK}"/>`);
    return s.join('') + '</svg>';
  }
  function eCirc(L_) {
    const C = CEL(), keys = Object.keys(C);
    if (L_ <= 1) { const k = pick(keys), others = shuffle(keys.filter(x => x !== k)).slice(0, 3); return mc(L("Com es diu l'element marcat en rosa?", '¿Cómo se llama el elemento marcado en rosa?'), C[k], others.map(x => C[x]), { vis: circSVG(k), ex: { radi: L('El radi va del centre a un punt de la circumferència.', 'El radio va del centro a un punto de la circunferencia.'), diam: L('El diàmetre uneix dos punts de la circumferència passant pel centre: fa dos radis.', 'El diámetro une dos puntos de la circunferencia pasando por el centro: mide dos radios.'), corda: L('Una corda uneix dos punts de la circumferència sense passar pel centre.', 'Una cuerda une dos puntos de la circunferencia sin pasar por el centro.'), arc: L('Un arc és un tros de la circumferència.', 'Un arco es un trozo de la circunferencia.'), sect: L('El sector circular és el tros de cercle entre dos radis i un arc (com un tros de pizza).', 'El sector circular es el trozo de círculo entre dos radios y un arco (como un trozo de pizza).'), segm: L('El segment circular és el tros de cercle entre una corda i un arc.', 'El segmento circular es el trozo de círculo entre una cuerda y un arco.'), tang: L('La recta tangent toca la circumferència en un sol punt.', 'La recta tangente toca la circunferencia en un solo punto.'), sec: L('La recta secant talla la circumferència en dos punts.', 'La recta secante corta la circunferencia en dos puntos.'), cen: L('El centre és el punt que és a la mateixa distància de tots els punts de la circumferència.', 'El centro es el punto que está a la misma distancia de todos los puntos de la circunferencia.') }[k], chk: { t: 'elem', k } }); }
    if (L_ === 2) { const r = ri(3, 25), toR = Math.random() < .5; return inp(toR ? L(`El diàmetre d'una circumferència fa ${2 * r} cm. Quant fa el <b>radi</b>?`, `El diámetro de una circunferencia mide ${2 * r} cm. ¿Cuánto mide el <b>radio</b>?`) : L(`El radi d'una circumferència fa ${r} cm. Quant fa el <b>diàmetre</b>?`, `El radio de una circunferencia mide ${r} cm. ¿Cuánto mide el <b>diámetro</b>?`), toR ? r : 2 * r, { unit: 'cm', ex: L(`El diàmetre fa el doble que el radi: ${toR ? `${2 * r} : 2 = ${r}` : `2 · ${r} = ${2 * r}`} cm. El diàmetre és la corda més llarga.`, `El diámetro mide el doble que el radio: ${toR ? `${2 * r} : 2 = ${r}` : `2 · ${r} = ${2 * r}`} cm. El diámetro es la cuerda más larga.`), chk: { t: 'rd', r, toR } }); }
    if (L_ === 3) { const r = ri(3, 12), k = ri(0, 2), d = k === 0 ? r + ri(1, 6) : k === 1 ? r : ri(1, r - 1), T = [L('Exterior (no la toca)', 'Exterior (no la toca)'), L('Tangent', 'Tangente'), L('Secant', 'Secante')]; return mc(L(`Una circumferència té ${r} cm de radi i una recta passa a ${d} cm del centre. Com és la recta?`, `Una circunferencia tiene ${r} cm de radio y una recta pasa a ${d} cm del centro. ¿Cómo es la recta?`), T[k], T.filter((_, i) => i !== k), { fixed: T, ex: L(`Si la distància al centre és més gran que el radi, la recta és exterior; si és igual, tangent; si és més petita, secant. Aquí ${d} ${d > r ? '>' : d === r ? '=' : '<'} ${r}.`, `Si la distancia al centro es mayor que el radio, la recta es exterior; si es igual, tangente; si es menor, secante. Aquí ${d} ${d > r ? '>' : d === r ? '=' : '<'} ${r}.`), chk: { t: 'pos', r, d } }); }
    const r = ri(2, 12), a = pick([30, 45, 60, 90, 120, 135, 150, 180, 270]);
    if (L_ === 4) return dinp(L(`Quina és la longitud d'un <b>arc</b> de ${a}° en una circumferència de radi ${r} cm? (π ≈ 3,14)`, `¿Cuál es la longitud de un <b>arco</b> de ${a}° en una circunferencia de radio ${r} cm? (π ≈ 3,14)`), 2 * 3.14 * r * a / 360, { unit: 'cm', ex: L(`L = 2 · π · r · ${a}/360 = 2 · 3,14 · ${r} · ${a}/360 = ${fmtD(2 * 3.14 * r * a / 360)} cm.`, `L = 2 · π · r · ${a}/360 = 2 · 3,14 · ${r} · ${a}/360 = ${fmtD(2 * 3.14 * r * a / 360)} cm.`), chk: { t: 'arc', r, a } });
    return dinp(L(`Quina és l'àrea d'un <b>sector circular</b> de ${a}° en un cercle de radi ${r} cm? (π ≈ 3,14)`, `¿Cuál es el área de un <b>sector circular</b> de ${a}° en un círculo de radio ${r} cm? (π ≈ 3,14)`), 3.14 * r * r * a / 360, { unit: 'cm²', ex: L(`A = π · r² · ${a}/360 = 3,14 · ${r * r} · ${a}/360 = ${fmtD(3.14 * r * r * a / 360)} cm².`, `A = π · r² · ${a}/360 = 3,14 · ${r * r} · ${a}/360 = ${fmtD(3.14 * r * r * a / 360)} cm².`), chk: { t: 'sector', r, a } });
  }

  Object.assign(EX, {
    'e.ang': L_ => eAng(L_),
    'e.class': L_ => eClass(L_),
    'e.circ': L_ => eCirc(L_)
  });

  /* ================= 8. Educació financera: IVA, IRPF, compres, divises i interès compost ================= */
  const r2 = v => Math.round(v * 100) / 100;
  const PROD = () => pick([[L('Un mòbil', 'Un móvil'), 21, 100], [L('Una bicicleta', 'Una bicicleta'), 21, 100], [L('Uns auriculars', 'Unos auriculares'), 21, 100], [L('Un sopar al restaurant', 'Una cena en el restaurante'), 10, 10], [L("Una nit d'hotel", 'Una noche de hotel'), 10, 10], [L('Un lot de llibres', 'Un lote de libros'), 4, 25]]);
  const costa = s => /^(Uns|Unos)/.test(s) ? L('costen', 'cuestan') : L('costa', 'cuesta');
  function finTax(L_, A) {
    const kind = A === 'iva' || A === 'irpf' ? A : pick(['iva', 'irpf']);
    if (kind === 'iva') {
      const [nm, r, st] = PROD(), p = st * ri(r === 21 ? 1 : 2, r === 21 ? 9 : 30), iva = p * r / 100, tot = p + iva;
      if (L_ <= 1) return dinp(L(`${nm} ${costa(nm)} ${euro(p)} sense IVA. Amb un IVA del ${r} %, quant ${costa(nm)}?`, `${nm} ${costa(nm)} ${euro(p)} sin IVA. Con un IVA del ${r} %, ¿cuánto ${costa(nm)}?`), tot, { unit: '€', long: true, ex: L(`IVA: ${r} % de ${fmt(p)} = ${fmtD(iva)} €. Total: ${fmt(p)} + ${fmtD(iva)} = ${euro(tot)}. També: ${fmt(p)} · ${fmtD(1 + r / 100)} = ${euro(tot)}.`, `IVA: ${r} % de ${fmt(p)} = ${fmtD(iva)} €. Total: ${fmt(p)} + ${fmtD(iva)} = ${euro(tot)}. También: ${fmt(p)} · ${fmtD(1 + r / 100)} = ${euro(tot)}.`), chk: { t: 'ivaT' } });
      if (L_ === 2) return dinp(L(`${nm} ${costa(nm)} ${euro(p)} sense IVA. Quants euros d'IVA (${r} %) s'hi han de pagar?`, `${nm} ${costa(nm)} ${euro(p)} sin IVA. ¿Cuántos euros de IVA (${r} %) hay que pagar?`), iva, { unit: '€', long: true, ex: L(`${r} % de ${fmt(p)} = ${fmt(p)} · ${r} : 100 = ${fmtD(iva)} €.`, `${r} % de ${fmt(p)} = ${fmt(p)} · ${r} : 100 = ${fmtD(iva)} €.`), chk: { t: 'ivaQ' } });
      if (L_ === 3) return dinp(L(`Pagues ${euro(tot)} per ${nm.toLowerCase().replace(/^un[as]? |^una /, m => m)}, amb l'IVA del ${r} % inclòs. Quin era el preu sense IVA?`, `Pagas ${euro(tot)} por ${nm.toLowerCase()}, con el IVA del ${r} % incluido. ¿Cuál era el precio sin IVA?`), p, { unit: '€', long: true, ex: L(`El preu amb IVA és el ${100 + r} % del preu sense IVA: ${fmtD(tot)} : ${fmtD(1 + r / 100)} = ${euro(p)}. Compte: no es pot restar el ${r} % del total.`, `El precio con IVA es el ${100 + r} % del precio sin IVA: ${fmtD(tot)} : ${fmtD(1 + r / 100)} = ${euro(p)}. Cuidado: no se puede restar el ${r} % del total.`), chk: { t: 'ivaR' } });
      if (L_ === 4) { const q = pick([40, 60, 80, 120, 150, 200]), d = pick([10, 20, 25, 50]), v = r2(q * (1 - d / 100) * 1.21); return dinp(L(`Una jaqueta costa ${euro(q)} sense IVA i té un ${d} % de descompte. Quant pagues si després s'hi afegeix l'IVA del 21 %?`, `Una chaqueta cuesta ${euro(q)} sin IVA y tiene un ${d} % de descuento. ¿Cuánto pagas si después se añade el IVA del 21 %?`), v, { unit: '€', long: true, ex: L(`Amb el descompte: ${fmt(q)} · ${fmtD(1 - d / 100)} = ${fmtD(q * (1 - d / 100))} €. Amb l'IVA: ${fmtD(q * (1 - d / 100))} · 1,21 = ${euro(v)}.`, `Con el descuento: ${fmt(q)} · ${fmtD(1 - d / 100)} = ${fmtD(q * (1 - d / 100))} €. Con el IVA: ${fmtD(q * (1 - d / 100))} · 1,21 = ${euro(v)}.`), chk: { t: 'ivaD', q, d } }); }
      return dinp(L(`El tiquet d'una compra marca ${euro(tot)} amb l'IVA del ${r} % inclòs. Quants euros són d'IVA?`, `El tique de una compra marca ${euro(tot)} con el IVA del ${r} % incluido. ¿Cuántos euros son de IVA?`), iva, { unit: '€', long: true, ex: L(`Preu sense IVA: ${fmtD(tot)} : ${fmtD(1 + r / 100)} = ${euro(p)}. IVA: ${fmtD(tot)} − ${fmt(p)} = ${euro(iva)}.`, `Precio sin IVA: ${fmtD(tot)} : ${fmtD(1 + r / 100)} = ${euro(p)}. IVA: ${fmtD(tot)} − ${fmt(p)} = ${euro(iva)}.`), chk: { t: 'ivaIn' } });
    }
    const g = 100 * ri(12, 35), r = pick([10, 12, 15, 18, 20]), ret = g * r / 100, net = g - ret, P = per();
    const irpf = L("L'IRPF és l'impost sobre la renda: l'empresa en reté una part del sou cada mes i la paga a Hisenda.", 'El IRPF es el impuesto sobre la renta: la empresa retiene una parte del sueldo cada mes y la paga a Hacienda.');
    if (L_ <= 1) return inp(L(`${P.C} cobra ${euro(g)} bruts al mes i li retenen un ${r} % d'IRPF. Quants euros li retenen?`, `${P.C} cobra ${euro(g)} brutos al mes y le retienen un ${r} % de IRPF. ¿Cuántos euros le retienen?`), ret, { unit: '€', long: true, ex: `${irpf} ${r} % de ${fmt(g)} = ${fmt(ret)} €.`, chk: { t: 'ret' } });
    if (L_ === 2) return inp(L(`${P.C} cobra ${euro(g)} bruts al mes i li retenen un ${r} % d'IRPF. Quant cobra net? <span class="hint">(només tenint en compte l'IRPF)</span>`, `${P.C} cobra ${euro(g)} brutos al mes y le retienen un ${r} % de IRPF. ¿Cuánto cobra neto? <span class="hint">(solo teniendo en cuenta el IRPF)</span>`), net, { unit: '€', long: true, ex: L(`Li retenen ${fmt(ret)} €: ${fmt(g)} − ${fmt(ret)} = ${euro(net)}. O bé: ${fmt(g)} · ${fmtD(1 - r / 100)} = ${euro(net)}.`, `Le retienen ${fmt(ret)} €: ${fmt(g)} − ${fmt(ret)} = ${euro(net)}. O bien: ${fmt(g)} · ${fmtD(1 - r / 100)} = ${euro(net)}.`), chk: { t: 'net' } });
    if (L_ === 4) return inp(L(`${P.C} cobra ${euro(net)} nets al mes després d'una retenció de l'IRPF del ${r} %. Quin és el sou brut? <span class="hint">(només hi ha la retenció de l'IRPF)</span>`, `${P.C} cobra ${euro(net)} netos al mes después de una retención del IRPF del ${r} %. ¿Cuál es el sueldo bruto? <span class="hint">(solo está la retención del IRPF)</span>`), g, { unit: '€', long: true, ex: L(`El net és el ${100 - r} % del brut: ${fmt(net)} : ${fmtD(1 - r / 100)} = ${euro(g)}.`, `El neto es el ${100 - r} % del bruto: ${fmt(net)} : ${fmtD(1 - r / 100)} = ${euro(g)}.`), chk: { t: 'gross' } });
    const b = L_ === 3 ? 100 * ri(4, 30) : pick([450, 680, 840, 1250, 1360, 2340]), rr = pick([7, 15]), tot = r2(b * (1 + .21 - rr / 100));
    const who = pick([L('Una dissenyadora', 'Una diseñadora'), L('Un electricista', 'Un electricista'), L('Una traductora', 'Una traductora'), L('Un fotògraf', 'Un fotógrafo')]);
    return dinp(L(`${who} autònom${/^Una/.test(who) ? 'a' : ''} fa una factura de ${euro(b)} (base). Hi suma el 21 % d'IVA i hi resta el ${rr} % de retenció d'IRPF. Quin és el total de la factura?`, `${who} autónom${/^Una/.test(who) ? 'a' : 'o'} hace una factura de ${euro(b)} (base). Suma el 21 % de IVA y resta el ${rr} % de retención de IRPF. ¿Cuál es el total de la factura?`), tot, { unit: '€', long: true, ex: L(`IVA: ${fmtD(b * .21)} €. IRPF: ${fmtD(b * rr / 100)} €. Total: ${fmt(b)} + ${fmtD(b * .21)} − ${fmtD(b * rr / 100)} = ${euro(tot)}.`, `IVA: ${fmtD(b * .21)} €. IRPF: ${fmtD(b * rr / 100)} €. Total: ${fmt(b)} + ${fmtD(b * .21)} − ${fmtD(b * rr / 100)} = ${euro(tot)}.`), chk: { t: 'inv', b, rr } });
  }
  // Quin surt més a compte? Preu unitari, ofertes i divises
  function finShop(L0) {
    // nivells: 1 comparar paquets, 2 ofertes, 3 divises, 4 preu per quilo, 5 preu unitari
    const L_ = [1, 1, 3, 5, 4, 2][Math.max(1, Math.min(5, L0))];
    const IT =pick([[L('iogurts', 'yogures'), L('iogurt', 'yogur')], [L('llapis', 'lápices'), L('llapis', 'lápiz')], [L('sucs', 'zumos'), L('suc', 'zumo')], [L('llaunes', 'latas'), L('llauna', 'lata')]]);
    if (L_ <= 1) {
      for (let t = 0; t < 200; t++) {
        const n1 = pick([2, 3, 4, 6]), n2 = pick([6, 8, 10, 12]), u1 = ri(30, 90), u2 = ri(30, 90);
        if (n1 === n2 || Math.abs(u1 - u2) < 4) continue;
        const p1 = n1 * u1, p2 = n2 * u2, A = L(`El paquet de ${n1}`, `El paquete de ${n1}`), Bq = L(`El paquet de ${n2}`, `El paquete de ${n2}`), eq = L('Surten igual', 'Salen igual');
        return mc(L(`Un paquet de ${n1} ${IT[0]} costa ${euro(p1 / 100)} i un de ${n2} costa ${euro(p2 / 100)}. Quin surt més barat per unitat?`, `Un paquete de ${n1} ${IT[0]} cuesta ${euro(p1 / 100)} y uno de ${n2} cuesta ${euro(p2 / 100)}. ¿Cuál sale más barato por unidad?`), u1 < u2 ? A : Bq, [u1 < u2 ? Bq : A, eq], { fixed: [A, Bq, eq], long: true, ex: L(`Preu per ${IT[1]}: ${fmtD(p1 / 100)} : ${n1} = ${euro(u1 / 100)} i ${fmtD(p2 / 100)} : ${n2} = ${euro(u2 / 100)}.`, `Precio por ${IT[1]}: ${fmtD(p1 / 100)} : ${n1} = ${euro(u1 / 100)} y ${fmtD(p2 / 100)} : ${n2} = ${euro(u2 / 100)}.`), chk: { t: 'cmp', n1, p1, n2, p2 } });
      }
    }
    if (L_ === 2) { const n = pick([4, 6, 8, 10, 12]), u = ri(15, 95), p = n * u; return dinp(L(`Un paquet de ${n} ${IT[0]} costa ${euro(p / 100)}. Quant costa cada ${IT[1]}?`, `Un paquete de ${n} ${IT[0]} cuesta ${euro(p / 100)}. ¿Cuánto cuesta cada ${IT[1]}?`), u / 100, { unit: '€', ex: `${fmtD(p / 100)} : ${n} = ${euro(u / 100)}.`, chk: { t: 'unit', n, p } }); }
    if (L_ === 3) {
      const p = pick([2, 3, 4, 5, 6, 8]), d = pick([20, 25, 30, 40, 45]), c32 = 2 * p, cd = r2(3 * p * (1 - d / 100)), c2a = 2.5 * p;
      const O = [L('3 × 2 (en pagues 2)', '3 × 2 (pagas 2)'), L(`${d} % de descompte en tot`, `${d} % de descuento en todo`), L('La 2a unitat a meitat de preu', 'La 2.ª unidad a mitad de precio')], v = [c32, cd, c2a], k = v.indexOf(Math.min(...v));
      if (v.filter(x => Math.abs(x - v[k]) < 1e-9).length > 1) return finShop(L_);
      return mc(L(`Vols comprar 3 capses de galetes de ${euro(p)} cadascuna. Quina oferta surt més barata?`, `Quieres comprar 3 cajas de galletas de ${euro(p)} cada una. ¿Qué oferta sale más barata?`), O[k], O.filter((_, i) => i !== k), { fixed: O, long: true, ex: L(`3 × 2: ${euro(c32)}. Amb el ${d} %: ${fmt(3 * p)} · ${fmtD(1 - d / 100)} = ${euro(cd)}. La 2a a meitat: ${fmt(p)} + ${fmtD(p / 2)} + ${fmt(p)} = ${euro(c2a)}.`, `3 × 2: ${euro(c32)}. Con el ${d} %: ${fmt(3 * p)} · ${fmtD(1 - d / 100)} = ${euro(cd)}. La 2.ª a mitad: ${fmt(p)} + ${fmtD(p / 2)} + ${fmt(p)} = ${euro(c2a)}.`), chk: { t: 'offer', p, d } });
    }
    if (L_ === 4) { const [g, pr] = pick([[250, 3], [250, 2.5], [500, 4.2], [200, 1.8], [750, 6], [400, 3.6], [125, 2.5]]), perKg = r2(pr * 1000 / g); return dinp(L(`Un paquet de ${g} g de cafè costa ${euro(pr)}. Quin és el preu per quilo?`, `Un paquete de ${g} g de café cuesta ${euro(pr)}. ¿Cuál es el precio por kilo?`), perKg, { unit: '€/kg', ex: L(`1 kg = 1.000 g, que és ${fmtD(1000 / g)} vegades ${g} g: ${fmtD(pr)} · ${fmtD(1000 / g)} = ${euro(perKg)}.`, `1 kg = 1.000 g, que es ${fmtD(1000 / g)} veces ${g} g: ${fmtD(pr)} · ${fmtD(1000 / g)} = ${euro(perKg)}.`), chk: { t: 'kg', g, pr } }); }
    const [cur, sym, rate] = pick([[L('dòlars', 'dólares'), '$', 1.08], [L('dòlars', 'dólares'), '$', 1.1], [L('lliures', 'libras'), '£', .85], [L('francs suïssos', 'francos suizos'), 'CHF', .95]]);
    if (Math.random() < .5) { const e = 10 * ri(2, 50), v = r2(e * rate); return dinp(L(`El canvi és 1 € = ${fmtD(rate)} ${sym}. Quants ${cur} et donen per ${euro(e)}?`, `El cambio es 1 € = ${fmtD(rate)} ${sym}. ¿Cuántos ${cur} te dan por ${euro(e)}?`), v, { unit: sym, ex: `${fmt(e)} · ${fmtD(rate)} = ${fmtD(v)} ${sym}.`, chk: { t: 'fx', e, rate } }); }
    const e = 10 * ri(2, 50), f = r2(e * rate);
    return dinp(L(`El canvi és 1 € = ${fmtD(rate)} ${sym}. Quants euros són ${fmtD(f)} ${sym}?`, `El cambio es 1 € = ${fmtD(rate)} ${sym}. ¿Cuántos euros son ${fmtD(f)} ${sym}?`), e, { unit: '€', ex: `${fmtD(f)} : ${fmtD(rate)} = ${euro(e)}.`, chk: { t: 'fxR', f, rate } });
  }
  // Interès compost
  function finComp(L_) {
    const C = pick([1000, 2000, 5000, 10000]), r = pick([2, 3, 4, 5, 10]), t = ri(2, 4), F = r2(C * (1 + r / 100) ** t);
    const cents = L(' Arrodoneix als cèntims.', ' Redondea a los céntimos.');
    if (L_ <= 1) return dinp(L(`Poses ${euro(C)} al banc a un ${r} % d'<b>interès compost</b> anual. Quants diners tindràs al cap de ${t} anys?${cents}`, `Pones ${euro(C)} en el banco a un ${r} % de <b>interés compuesto</b> anual. ¿Cuánto dinero tendrás al cabo de ${t} años?${cents}`), F, { unit: '€', long: true, ex: L(`Cada any el capital es multiplica per ${fmtD(1 + r / 100)}: ${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)} = ${euro(F)}.`, `Cada año el capital se multiplica por ${fmtD(1 + r / 100)}: ${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)} = ${euro(F)}.`), chk: { t: 'final', C, r, y: t } });
    if (L_ === 2) return dinp(L(`Poses ${euro(C)} a un ${r} % d'interès compost anual durant ${t} anys. Quants euros d'<b>interessos</b> guanyes?${cents}`, `Pones ${euro(C)} a un ${r} % de interés compuesto anual durante ${t} años. ¿Cuántos euros de <b>intereses</b> ganas?${cents}`), r2(F - C), { unit: '€', long: true, ex: L(`Capital final: ${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)} = ${euro(F)}. Interessos: ${fmtD(F)} − ${fmt(C)} = ${euro(r2(F - C))}.`, `Capital final: ${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)} = ${euro(F)}. Intereses: ${fmtD(F)} − ${fmt(C)} = ${euro(r2(F - C))}.`), chk: { t: 'int', C, r, y: t } });
    if (L_ === 3) {
      if (Math.random() < .5) { const S = C * (1 + r * t / 100), d = r2(F - S); return dinp(L(`Poses ${euro(C)} a un ${r} % anual durant ${t} anys. Quants euros més guanyes amb interès <b>compost</b> que amb interès <b>simple</b>?${cents}`, `Pones ${euro(C)} a un ${r} % anual durante ${t} años. ¿Cuántos euros más ganas con interés <b>compuesto</b> que con interés <b>simple</b>?${cents}`), d, { unit: '€', long: true, ex: L(`Simple: ${fmt(C)} · (1 + ${fmtD(r / 100)} · ${t}) = ${euro(S)}. Compost: ${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)} = ${euro(F)}. Diferència: ${euro(d)}. En el compost, els interessos també generen interessos.`, `Simple: ${fmt(C)} · (1 + ${fmtD(r / 100)} · ${t}) = ${euro(S)}. Compuesto: ${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)} = ${euro(F)}. Diferencia: ${euro(d)}. En el compuesto, los intereses también generan intereses.`), chk: { t: 'diff', C, r, y: t } }); }
      const ok = `${fmt(C)} · ${fmtD(1 + r / 100)}${sup(t)}`;
      return mc(L(`Quina expressió dona el capital final de ${euro(C)} al ${r} % d'interès compost durant ${t} anys?`, `¿Qué expresión da el capital final de ${euro(C)} al ${r} % de interés compuesto durante ${t} años?`), ok, [`${fmt(C)} · (1 + ${fmtD(r / 100)} · ${t})`, `${fmt(C)} · ${fmtD(r / 100)}${sup(t)}`, `${fmt(C)} · ${fmtD(1 + r / 100)} · ${t}`], { list: true, ex: L(`Cada any es multiplica per ${fmtD(1 + r / 100)} (el 100 % més el ${r} %), i ho fa ${t} vegades: ${ok}. L'expressió ${fmt(C)} · (1 + ${fmtD(r / 100)} · ${t}) és la de l'interès simple.`, `Cada año se multiplica por ${fmtD(1 + r / 100)} (el 100 % más el ${r} %), y lo hace ${t} veces: ${ok}. La expresión ${fmt(C)} · (1 + ${fmtD(r / 100)} · ${t}) es la del interés simple.`), chk: { t: 'formula', C, r, y: t } });
    }
    if (L_ === 4) {
      const rr = pick([5, 10, 20]), goal = pick([1.2, 1.3, 1.5]), C2 = pick([1000, 2000, 5000]); let n = 0, v = C2; const steps = [];
      while (v <= C2 * goal) { v = v * (1 + rr / 100); n++; steps.push(euro(r2(v))); }
      return inp(L(`Poses ${euro(C2)} a un ${rr} % d'interès compost anual. Quants anys han de passar perquè tinguis <b>més de ${euro(C2 * goal)}</b>?`, `Pones ${euro(C2)} a un ${rr} % de interés compuesto anual. ¿Cuántos años tienen que pasar para que tengas <b>más de ${euro(C2 * goal)}</b>?`), n, { long: true, ex: L(`Any a any: ${steps.join(', ')}. Al cap de ${n} anys ja se supera ${euro(C2 * goal)}.`, `Año a año: ${steps.join(', ')}. Al cabo de ${n} años ya se supera ${euro(C2 * goal)}.`), chk: { t: 'years', C: C2, r: rr, goal } });
    }
    if (Math.random() < .5) { const m = pick([.5, 1, 1.5, 2]), y = r2(((1 + m / 100) ** 12 - 1) * 100); return dinp(L(`Un compte dona un ${fmtD(m)} % d'interès compost <b>cada mes</b>. Quin percentatge guanyes en un any? Arrodoneix a les centèsimes.`, `Una cuenta da un ${fmtD(m)} % de interés compuesto <b>cada mes</b>. ¿Qué porcentaje ganas en un año? Redondea a las centésimas.`), y, { unit: '%', long: true, ex: L(`En 12 mesos es multiplica per ${fmtD(1 + m / 100)}${sup(12)} = ${fmtDf((1 + m / 100) ** 12, 4)}: un ${fmtD(y)} % en un any, més que 12 · ${fmtD(m)} = ${fmtD(12 * m)} %. Aquest percentatge anual equivalent és la TAE.`, `En 12 meses se multiplica por ${fmtD(1 + m / 100)}${sup(12)} = ${fmtDf((1 + m / 100) ** 12, 4)}: un ${fmtD(y)} % en un año, más que 12 · ${fmtD(m)} = ${fmtD(12 * m)} %. Este porcentaje anual equivalente es la TAE.`), chk: { t: 'tae', m } }); }
    const V = pick([12000, 15000, 20000, 25000]), p = pick([10, 15, 20]), n = ri(2, 3), W = r2(V * (1 - p / 100) ** n);
    return dinp(L(`Un cotxe de ${euro(V)} perd un ${p} % del seu valor cada any. Quant valdrà al cap de ${n} anys?${cents}`, `Un coche de ${euro(V)} pierde un ${p} % de su valor cada año. ¿Cuánto valdrá al cabo de ${n} años?${cents}`), W, { unit: '€', long: true, ex: L(`Cada any en queda el ${100 - p} %: ${fmt(V)} · ${fmtD(1 - p / 100)}${sup(n)} = ${euro(W)}. És com l'interès compost, però baixant.`, `Cada año queda el ${100 - p} %: ${fmt(V)} · ${fmtD(1 - p / 100)}${sup(n)} = ${euro(W)}. Es como el interés compuesto, pero bajando.`), chk: { t: 'dep', V, p, n } });
  }

  Object.assign(EX, {
    'fin.tax': (L_, A) => finTax(L_, A),
    'fin.shop': L_ => finShop(L_),
    'fin.comp': L_ => finComp(L_)
  });

  /* ================= 9. 4t d'ESO: vectors i rectes, nombres reals i intervals ================= */
  const TR = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10], [4, 3, 5], [12, 5, 13]];
  const sg = () => pick([-1, 1]);
  const vtx = (x, y) => `(${fmt(x)}, ${fmt(y)})`;
  // fletxa d'un vector en el pla
  const arrowPlane = (A, Bp, o = {}) => {
    let s = planeSVG({ x0: -7, x1: 7, y0: -7, y1: 7, pts: [{ x: A[0], y: A[1], lab: 'A', col: '#1B6FA3' }, { x: Bp[0], y: Bp[1], lab: 'B', col: '#E24F86' }], ...o });
    const u = Math.min(24, 260 / 14), pd = 20, X = x => pd + (x + 7) * u, Y = y => pd + (7 - y) * u, ang = Math.atan2(Y(Bp[1]) - Y(A[1]), X(Bp[0]) - X(A[0])), bx = X(Bp[0]) - 8 * Math.cos(ang), by = Y(Bp[1]) - 8 * Math.sin(ang);
    const head = `<path d="M${r1(X(Bp[0]))} ${r1(Y(Bp[1]))} L${r1(bx - 5 * Math.sin(ang))} ${r1(by + 5 * Math.cos(ang))} L${r1(bx + 5 * Math.sin(ang))} ${r1(by - 5 * Math.cos(ang))} Z" fill="#8A4FB0"/>`;
    return s.replace(/(<circle class="cp")/, `<line class="vec" x1="${r1(X(A[0]))}" y1="${r1(Y(A[1]))}" x2="${r1(bx)}" y2="${r1(by)}" stroke="#8A4FB0" stroke-width="3"/>${head}$1`);
  };
  function eVec(L_) {
    if (L_ <= 1) {
      let A, Bp; do { A = [ri(-6, 6), ri(-6, 6)]; Bp = [ri(-6, 6), ri(-6, 6)]; } while (A[0] === Bp[0] || A[1] === Bp[1] || Math.abs(Bp[0] - A[0]) === Math.abs(Bp[1] - A[1]));
      const v = [Bp[0] - A[0], Bp[1] - A[1]];
      return mc(L('Quines són les coordenades del vector <b>AB</b>?', '¿Cuáles son las coordenadas del vector <b>AB</b>?'), vtx(...v), [vtx(-v[0], -v[1]), vtx(v[1], v[0]), vtx(A[0] + Bp[0], A[1] + Bp[1])], { vis: arrowPlane(A, Bp), big: true, ex: L(`AB = B − A = ${vtx(Bp[0], Bp[1])} − ${vtx(A[0], A[1])} = ${vtx(...v)}: ${Math.abs(v[0])} ${v[0] > 0 ? 'a la dreta' : "a l'esquerra"} i ${Math.abs(v[1])} ${v[1] > 0 ? 'amunt' : 'avall'}.`, `AB = B − A = ${vtx(Bp[0], Bp[1])} − ${vtx(A[0], A[1])} = ${vtx(...v)}: ${Math.abs(v[0])} ${v[0] > 0 ? 'a la derecha' : 'a la izquierda'} y ${Math.abs(v[1])} ${v[1] > 0 ? 'arriba' : 'abajo'}.`), chk: { t: 'comp' } });
    }
    if (L_ <= 3) {
      const [p, q, h] = pick(TR), v = [p * sg(), q * sg()];
      if (L_ === 2) return inp(L(`Quin és el <b>mòdul</b> del vector u = ${vtx(...v)}?`, `¿Cuál es el <b>módulo</b> del vector u = ${vtx(...v)}?`), h, { ex: L(`|u| = √(${sgn(v[0])}² + ${sgn(v[1])}²) = √(${p * p} + ${q * q}) = √${h * h} = ${h}. És la longitud de la fletxa (Pitàgores).`, `|u| = √(${sgn(v[0])}² + ${sgn(v[1])}²) = √(${p * p} + ${q * q}) = √${h * h} = ${h}. Es la longitud de la flecha (Pitágoras).`), chk: { t: 'mod', v } });
      let A; do A = [ri(-8, 8), ri(-8, 8)]; while (Math.abs(A[0] + v[0]) > 9 || Math.abs(A[1] + v[1]) > 9);
      const Bp = [A[0] + v[0], A[1] + v[1]];
      return inp(L(`Quina és la <b>distància</b> entre els punts A${vtx(...A)} i B${vtx(...Bp)}?`, `¿Cuál es la <b>distancia</b> entre los puntos A${vtx(...A)} y B${vtx(...Bp)}?`), h, { ex: L(`AB = ${vtx(...v)}; d = √(${sgn(v[0])}² + ${sgn(v[1])}²) = √${h * h} = ${h}.`, `AB = ${vtx(...v)}; d = √(${sgn(v[0])}² + ${sgn(v[1])}²) = √${h * h} = ${h}.`), chk: { t: 'dist', A, B: Bp } });
    }
    if (L_ === 4) {
      let A, Bp; do { A = [ri(-7, 7), ri(-7, 7)]; Bp = [ri(-7, 7), ri(-7, 7)]; } while ((A[0] + Bp[0]) % 2 || (A[1] + Bp[1]) % 2 || A[0] === Bp[0] || A[1] === Bp[1]);
      const M = [(A[0] + Bp[0]) / 2, (A[1] + Bp[1]) / 2];
      return mc(L(`Quin és el <b>punt mitjà</b> del segment d'extrems A${vtx(...A)} i B${vtx(...Bp)}?`, `¿Cuál es el <b>punto medio</b> del segmento de extremos A${vtx(...A)} y B${vtx(...Bp)}?`), vtx(...M), [vtx(Bp[0] - A[0], Bp[1] - A[1]), vtx(A[0] + Bp[0], A[1] + Bp[1]), vtx(M[0], -M[1]), vtx((Bp[0] - A[0]) / 2, (Bp[1] - A[1]) / 2)], { big: true, ex: L(`M = ((${fmt(A[0])} + ${sgn(Bp[0])}) : 2, (${fmt(A[1])} + ${sgn(Bp[1])}) : 2) = ${vtx(...M)}: la mitjana de les coordenades.`, `M = ((${fmt(A[0])} + ${sgn(Bp[0])}) : 2, (${fmt(A[1])} + ${sgn(Bp[1])}) : 2) = ${vtx(...M)}: la media de las coordenadas.`), chk: { t: 'mid', A, B: Bp } });
    }
    const u = [ri(-5, 5), ri(-5, 5)], w = [ri(-5, 5), ri(-5, 5)], k = pick([2, 3, -2]), op = pick(['sum', 'lin']);
    const r = op === 'sum' ? [u[0] + w[0], u[1] + w[1]] : [k * u[0] - w[0], k * u[1] - w[1]], txt = op === 'sum' ? 'u + v' : `${fmt(k)}u − v`;
    const dis = op === 'sum' ? [[u[0] - w[0], u[1] - w[1]], [u[0] * w[0], u[1] * w[1]], [u[0] + w[1], u[1] + w[0]]] : [[k * u[0] + w[0], k * u[1] + w[1]], [k * (u[0] - w[0]), k * (u[1] - w[1])], [u[0] - w[0], u[1] - w[1]]];
    return mc(L(`Si u = ${vtx(...u)} i v = ${vtx(...w)}, quant val <b>${txt}</b>?`, `Si u = ${vtx(...u)} y v = ${vtx(...w)}, ¿cuánto vale <b>${txt}</b>?`), vtx(...r), dis.map(p => vtx(...p)), { big: true, ex: L(`Es fa coordenada a coordenada: ${op === 'sum' ? `(${fmt(u[0])} + ${sgn(w[0])}, ${fmt(u[1])} + ${sgn(w[1])})` : `(${fmt(k)} · ${sgn(u[0])} − ${sgn(w[0])}, ${fmt(k)} · ${sgn(u[1])} − ${sgn(w[1])})`} = ${vtx(...r)}.`, `Se hace coordenada a coordenada: ${op === 'sum' ? `(${fmt(u[0])} + ${sgn(w[0])}, ${fmt(u[1])} + ${sgn(w[1])})` : `(${fmt(k)} · ${sgn(u[0])} − ${sgn(w[0])}, ${fmt(k)} · ${sgn(u[1])} − ${sgn(w[1])})`} = ${vtx(...r)}.`), chk: { t: 'ops', u, w, k, op } });
  }
  // Equacions de la recta i posició relativa
  const ptSlope = (a, b, m) => `y ${b < 0 ? '+' : '−'} ${Math.abs(b)} = ${m === 1 ? '' : m === -1 ? '−' : fmt(m)}(x ${a < 0 ? '+' : '−'} ${Math.abs(a)})`;
  function eLine(L_) {
    if (L_ <= 1) {
      let A, m, dx; do { A = [ri(-5, 5), ri(-5, 5)]; m = pick([-3, -2, -1, 1, 2, 3]); dx = pick([-2, -1, 1, 2, 3]); } while (Math.abs(A[1] + m * dx) > 9 || Math.abs(A[0] + dx) > 9);
      const Bp = [A[0] + dx, A[1] + m * dx];
      return ninp(L(`Quin és el <b>pendent</b> de la recta que passa per A${vtx(...A)} i B${vtx(...Bp)}?`, `¿Cuál es la <b>pendiente</b> de la recta que pasa por A${vtx(...A)} y B${vtx(...Bp)}?`), m, { ex: L(`m = (y₂ − y₁) : (x₂ − x₁) = (${fmt(Bp[1])} − ${sgn(A[1])}) : (${fmt(Bp[0])} − ${sgn(A[0])}) = ${fmt(Bp[1] - A[1])} : ${sgn(Bp[0] - A[0])} = ${fmt(m)}.`, `m = (y₂ − y₁) : (x₂ − x₁) = (${fmt(Bp[1])} − ${sgn(A[1])}) : (${fmt(Bp[0])} − ${sgn(A[0])}) = ${fmt(Bp[1] - A[1])} : ${sgn(Bp[0] - A[0])} = ${fmt(m)}.`), chk: { t: 'slope', A, B: Bp } });
    }
    if (L_ === 2) {
      let a, b, m; do { a = ri(-5, 5); b = ri(-5, 5); m = pick([-3, -2, 2, 3, 4]); } while (!a || !b || a === b || Math.abs(a) === Math.abs(b) || b === m * a);
      return mc(L(`Quina és l'equació (punt-pendent) de la recta que passa per P${vtx(a, b)} i té pendent ${fmt(m)}?`, `¿Cuál es la ecuación (punto-pendiente) de la recta que pasa por P${vtx(a, b)} y tiene pendiente ${fmt(m)}?`), ptSlope(a, b, m), [ptSlope(-a, -b, m), ptSlope(b, a, m), ptSlope(a, b, -m)], { list: true, ex: L(`Equació punt-pendent: y − y₀ = m(x − x₀). Amb P${vtx(a, b)} i m = ${fmt(m)}: ${ptSlope(a, b, m)}.`, `Ecuación punto-pendiente: y − y₀ = m(x − x₀). Con P${vtx(a, b)} y m = ${fmt(m)}: ${ptSlope(a, b, m)}.`), chk: { t: 'ps', a, b, m } });
    }
    if (L_ === 3) {
      let a, b, c; do { a = ri(-6, 6); b = pick([-4, -3, -2, -1, 1, 2, 3, 4]); c = ri(-9, 9); } while (!a || a % b || gcd(Math.abs(a), Math.abs(b)) !== Math.abs(b) && false);
      const m = -a / b, gen = `${a === 1 ? '' : a === -1 ? '−' : fmt(a)}x ${b < 0 ? '−' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}y ${c < 0 ? '−' : '+'} ${Math.abs(c)} = 0`.replace(' + 0 = 0', ' = 0').replace(' − 0 = 0', ' = 0');
      return ninp(L(`Quin és el <b>pendent</b> de la recta <b>${gen}</b>?`, `¿Cuál es la <b>pendiente</b> de la recta <b>${gen}</b>?`), m, { ex: L(`Si aïlles la y, el número que multiplica la x és el pendent: m = −a/b = ${fmt(-a)}/${sgn(b)} = ${fmt(m)}.`, `Si despejas la y, el número que multiplica la x es la pendiente: m = −a/b = ${fmt(-a)}/${sgn(b)} = ${fmt(m)}.`), chk: { t: 'gen', a, b, c } });
    }
    if (L_ === 4) {
      const T = [L('Paral·leles', 'Paralelas'), L('Perpendiculars', 'Perpendiculares'), L('Secants (no perpendiculars)', 'Secantes (no perpendiculares)'), L('Coincidents', 'Coincidentes')], k = ri(0, 3);
      const m = pick([-3, -2, -1, 1, 2, 3]), n1 = ri(-5, 5); let m2, n2 = n1;
      if (k === 0) { m2 = m; do n2 = ri(-5, 5); while (n2 === n1); }
      else if (k === 1) m2 = -1 / m;
      else if (k === 2) { do m2 = pick([-3, -2, -1, 1, 2, 3, 4]); while (m2 === m || m2 * m === -1); n2 = ri(-5, 5); }
      else { m2 = m; n2 = n1; }
      const e1 = `y = ${lin(m, n1)}`, e2 = k === 1 ? `y = ${m2 < 0 ? '−' : ''}${frac(1, Math.abs(m))}x${n2 ? (n2 < 0 ? ` − ${-n2}` : ` + ${n2}`) : ''}`.replace(`${frac(1, 1)}x`, 'x') : k === 3 ? (() => { const f = pick([2, 3]); return `${f * m === 1 ? '' : f * m === -1 ? '−' : fmt(f * m)}x − ${f === 1 ? '' : f}y ${f * n1 < 0 ? '−' : '+'} ${Math.abs(f * n1)} = 0`.replace(' + 0 = 0', ' = 0'); })() : `y = ${lin(m2, n2)}`;
      return mc(L(`Com són les rectes <b>${e1}</b> i <b>${e2}</b>?`, `¿Cómo son las rectas <b>${e1}</b> y <b>${e2}</b>?`), T[k], T.filter((_, i) => i !== k), { fixed: T, list: true, ex: [L(`Tenen el mateix pendent (${fmt(m)}) i diferent ordenada a l'origen: paral·leles.`, `Tienen la misma pendiente (${fmt(m)}) y distinta ordenada en el origen: paralelas.`), L(`El producte dels pendents és ${fmt(m)} · (−1/${fmt(m)}) = −1: perpendiculars.`, `El producto de las pendientes es ${fmt(m)} · (−1/${fmt(m)}) = −1: perpendiculares.`), L(`Tenen pendents diferents (${fmt(m)} i ${fmt(m2)}) i el seu producte no és −1: secants.`, `Tienen pendientes distintas (${fmt(m)} y ${fmt(m2)}) y su producto no es −1: secantes.`), L(`Si aïlles la y de la segona, surt ${e1}: és la mateixa recta.`, `Si despejas la y de la segunda, sale ${e1}: es la misma recta.`)][k], chk: { t: 'pos', k } });
    }
    const m = pick([-3, -2, -1, 1, 2, 3, 4]), n = ri(-5, 5), ok = vtx(1, m);
    return mc(L(`Quin d'aquests vectors és un <b>vector director</b> de la recta y = ${lin(m, n)}?`, `¿Cuál de estos vectores es un <b>vector director</b> de la recta y = ${lin(m, n)}?`), ok, [[m, 1], [1, n === m ? m + 1 : n], [-m, 1], [m, -1], [2, m + 1]].filter(([x, y]) => y - m * x !== 0).map(p => vtx(...p)).filter((v, i, A) => v !== ok && A.indexOf(v) === i).slice(0, 3), { big: true, ex: L(`Si x avança 1, la y avança el pendent (${fmt(m)}): el vector ${ok} té la direcció de la recta.`, `Si x avanza 1, la y avanza la pendiente (${fmt(m)}): el vector ${ok} tiene la dirección de la recta.`), chk: { t: 'dir', m } });
  }

  // Nombres reals
  const SETS = () => [L('Naturals (ℕ)', 'Naturales (ℕ)'), L('Enters (ℤ)', 'Enteros (ℤ)'), L('Racionals (ℚ)', 'Racionales (ℚ)'), L('Reals, irracional (ℝ)', 'Reales, irracional (ℝ)')];
  const REALS = () => [
    [String(ri(2, 30)), 0], [`${ri(2, 9) ** 2}`.replace(/^/, '√'), 0], [`−${ri(2, 30)}`, 1], [`−√${ri(2, 9) ** 2}`, 1],
    [(d => frac(irr(d) % d || 1, d))(pick([3, 5, 7])), 2], [`${ri(0, 3)},${ri(1, 9)}${ri(1, 9)}`, 2], [`−${(d => frac(irr(d) % d || 1, d))(pick([3, 5, 7]))}`, 2], [pick(['0,1010010001…', '2,121121112…', '0,123456789101112…']), 3],
    [`√${pick([2, 3, 5, 6, 7, 8, 10, 11])}`, 3], ['π', 3], [`${ri(2, 5)} + √2`, 3]];
  function numReal(L_) {
    if (L_ <= 1) {
      const S = SETS(), [s, k] = pick(REALS());
      const why = [L('És un nombre natural (es fa servir per comptar).', 'Es un número natural (se usa para contar).'), L('És un enter negatiu: és a ℤ però no a ℕ.', 'Es un entero negativo: está en ℤ pero no en ℕ.'), L('Es pot escriure com a fracció (decimal exacte o periòdic): és racional.', 'Se puede escribir como fracción (decimal exacto o periódico): es racional.'), L('Té infinites xifres decimals sense període: és irracional (real no racional).', 'Tiene infinitas cifras decimales sin período: es irracional (real no racional).')][k];
      return mc(L(`Quin és el conjunt més petit al qual pertany <b>${s}</b>?`, `¿Cuál es el conjunto más pequeño al que pertenece <b>${s}</b>?`), S[k], S.filter((_, i) => i !== k), { fixed: S, list: true, ex: (s.startsWith('√') || s.startsWith('−√')) && k < 2 ? L(`${s} = ${s.startsWith('−') ? '−' : ''}${Math.sqrt(+s.replace(/[−√]/g, ''))}. ${why}`, `${s} = ${s.startsWith('−') ? '−' : ''}${Math.sqrt(+s.replace(/[−√]/g, ''))}. ${why}`) : s.includes('…') ? L('Les xifres segueixen un patró però no es repeteixen en un període fix: no és racional. ', 'Las cifras siguen un patrón pero no se repiten en un período fijo: no es racional. ') + why : why, chk: { t: 'set', s, k } });
    }
    if (L_ === 2) {
      const irr = pick([`√${pick([2, 3, 5, 6, 7, 10, 12])}`, 'π', `${ri(1, 4)}√2`]), rat = shuffle([`√${pick([4, 9, 16, 25, 36, 49])}`, frac(ri(1, 8), pick([3, 7, 9])), `${ri(0, 2)},${ri(1, 9)}${ri(0, 9)}`, `−${ri(2, 9)}`, `√${pick([0.25, 0.04, 0.81]).toString().replace('.', ',')}`]).slice(0, 3);
      return mc(L('Quin d\'aquests nombres és <b>irracional</b>?', '¿Cuál de estos números es <b>irracional</b>?'), irr, rat, { big: true, ex: L(`${irr} té infinites xifres decimals que no es repeteixen: és irracional. Els altres es poden escriure com a fracció (compte: √ d'un quadrat perfecte és exacta).`, `${irr} tiene infinitas cifras decimales que no se repiten: es irracional. Los otros se pueden escribir como fracción (cuidado: √ de un cuadrado perfecto es exacta).`), chk: { t: 'irr', irr } });
    }
    if (L_ === 3 || L_ === 4) {
      const base = L_ === 3 ? ri(1, 3) : ri(1, 2), pool = [], add = (v, s) => { if (pool.every(p => Math.abs(p[0] - v) > (L_ === 3 ? .08 : .005))) pool.push([v, s]); };
      const sq = pick([2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15].filter(n => Math.floor(Math.sqrt(n)) === base || (L_ === 3)));
      add(Math.sqrt(sq), `√${sq}`); if (Math.abs(Math.PI - Math.sqrt(sq)) < 1.5) add(Math.PI, 'π');
      for (let t = 0; t < 40 && pool.length < 4; t++) {
        const k = ri(0, 2), c = pool[0][0] + (Math.random() - .5) * (L_ === 3 ? 1.6 : .12);
        if (c <= 0) continue;
        if (k === 0) { const v = Math.round(c * (L_ === 3 ? 10 : 100)) / (L_ === 3 ? 10 : 100); add(v, fmtD(v)); }
        else if (k === 1) { const d = pick([2, 3, 4, 5, 6, 8]), n = Math.round(c * d); if (n > 0 && gcd(n, d) === 1) add(n / d, frac(n, d)); }
        else { const n = Math.round(c * c); if (n > 0 && !Number.isInteger(Math.sqrt(n))) add(Math.sqrt(n), `√${n}`); }
      }
      if (pool.length < 4) return numReal(L_);
      const map = new Map(pool.slice(0, 4)), items = shuffle(pool.slice(0, 4).map(p => p[0])), ans = [...items].sort((a, b) => a - b);
      return { type: 'order', q: L('Ordena de <b>més petit a més gran</b>:', 'Ordena de <b>menor a mayor</b>:'), items, show: v => map.get(v), ans, ex: L(`Amb decimals: ${ans.map(v => `${map.get(v)} ≈ ${fmtDf(v, 3)}`).join('; ')}.`, `Con decimales: ${ans.map(v => `${map.get(v)} ≈ ${fmtDf(v, 3)}`).join('; ')}.`), chk: { t: 'order' } };
    }
    const n = pick([2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 17, 19, 20]), v = Math.sqrt(n), r = Math.round(v * 100) / 100;
    if (Math.abs(v * 100 - Math.floor(v * 100) - .5) < .01) return numReal(L_);
    if (Math.random() < .5) return dinp(L(`Aproxima <b>√${n}</b> arrodonint a les centèsimes.`, `Aproxima <b>√${n}</b> redondeando a las centésimas.`), r, { ex: L(`√${n} = ${fmtDf(v, 4)}… La xifra de les mil·lèsimes és ${Math.floor(v * 1000) % 10}: ${Math.floor(v * 1000) % 10 >= 5 ? 'pugem' : 'deixem'} les centèsimes. ${fmtDf(r, 2)}.`, `√${n} = ${fmtDf(v, 4)}… La cifra de las milésimas es ${Math.floor(v * 1000) % 10}: ${Math.floor(v * 1000) % 10 >= 5 ? 'subimos' : 'dejamos'} las centésimas. ${fmtDf(r, 2)}.`), chk: { t: 'round', n } });
    const lo = Math.floor(v);
    return mc(L(`Entre quins dos nombres amb una xifra decimal hi ha <b>√${n}</b>?`, `¿Entre qué dos números con una cifra decimal está <b>√${n}</b>?`), L(`entre ${fmtDf(Math.floor(v * 10) / 10, 1)} i ${fmtDf(Math.floor(v * 10) / 10 + .1, 1)}`, `entre ${fmtDf(Math.floor(v * 10) / 10, 1)} y ${fmtDf(Math.floor(v * 10) / 10 + .1, 1)}`), [L(`entre ${fmtDf(Math.floor(v * 10) / 10 - .1, 1)} i ${fmtDf(Math.floor(v * 10) / 10, 1)}`, `entre ${fmtDf(Math.floor(v * 10) / 10 - .1, 1)} y ${fmtDf(Math.floor(v * 10) / 10, 1)}`), L(`entre ${fmtDf(Math.floor(v * 10) / 10 + .1, 1)} i ${fmtDf(Math.floor(v * 10) / 10 + .2, 1)}`, `entre ${fmtDf(Math.floor(v * 10) / 10 + .1, 1)} y ${fmtDf(Math.floor(v * 10) / 10 + .2, 1)}`), L(`entre ${fmtDf(Math.floor(v * 10) / 10 + .2, 1)} i ${fmtDf(Math.floor(v * 10) / 10 + .3, 1)}`, `entre ${fmtDf(Math.floor(v * 10) / 10 + .2, 1)} y ${fmtDf(Math.floor(v * 10) / 10 + .3, 1)}`)], { list: true, ex: L(`${fmtDf(Math.floor(v * 10) / 10, 1)}² = ${fmtDf((Math.floor(v * 10) / 10) ** 2, 2)} i ${fmtDf(Math.floor(v * 10) / 10 + .1, 1)}² = ${fmtDf((Math.floor(v * 10) / 10 + .1) ** 2, 2)}: ${n} és entremig.`, `${fmtDf(Math.floor(v * 10) / 10, 1)}² = ${fmtDf((Math.floor(v * 10) / 10) ** 2, 2)} y ${fmtDf(Math.floor(v * 10) / 10 + .1, 1)}² = ${fmtDf((Math.floor(v * 10) / 10 + .1) ** 2, 2)}: ${n} está en medio.`), chk: { t: 'between', n } });
  }
  // Intervals
  const ivT = (a, b, ca, cb) => `${ca ? '[' : '('}${a === -Infinity ? '−∞' : fmt(a)}, ${b === Infinity ? '+∞' : fmt(b)}${cb ? ']' : ')'}`;
  function ivSVG(a, b, ca, cb) {
    const lo = -8, hi = 8, W = 320, x0 = 22, x1 = W - 22, X = v => x0 + (Math.max(lo - .7, Math.min(hi + .7, v)) - lo) / (hi - lo) * (x1 - x0), y = 40;
    let s = `<svg viewBox="0 0 ${W} 72" class="vsvg wide" style="width:320px"><line x1="${x0 - 12}" y1="${y}" x2="${x1 + 12}" y2="${y}" stroke="${INK}" stroke-width="2"/>`;
    for (let v = lo; v <= hi; v++) s += `<line x1="${r1(X(v))}" y1="${y - 5}" x2="${r1(X(v))}" y2="${y + 5}" stroke="${INK}" stroke-width="1.4"/>` + (v % 2 === 0 ? tt(X(v), y + 22, fmt(v), { a: 'middle', fs: 11.5, col: MUT }) : '');
    s += `<line class="iv" x1="${r1(X(a))}" y1="${y}" x2="${r1(X(b))}" y2="${y}" stroke="${HL}" stroke-width="6" stroke-linecap="round"/>`;
    [[a, ca], [b, cb]].forEach(([v, c]) => { if (Number.isFinite(v)) s += `<circle class="ep" cx="${r1(X(v))}" cy="${y}" r="6.5" fill="${c ? HL : '#fff'}" stroke="${HL}" stroke-width="3"/>`; });
    return s + '</svg>';
  }
  function numInt(L_) {
    let a = ri(-7, 3), b = a + ri(2, 6); const ca = Math.random() < .5, cb = Math.random() < .5;
    const opts4 = (A, Bv) => [ivT(A, Bv, true, true), ivT(A, Bv, false, false), ivT(A, Bv, true, false), ivT(A, Bv, false, true)];
    if (L_ <= 1) {
      const ineq = `${ca ? '≤' : '&lt;'}`, ineq2 = `${cb ? '≤' : '&lt;'}`;
      return mc(L(`Quin interval correspon als nombres x que compleixen <b>${fmt(a)} ${ineq} x ${ineq2} ${fmt(b)}</b>?`, `¿Qué intervalo corresponde a los números x que cumplen <b>${fmt(a)} ${ineq} x ${ineq2} ${fmt(b)}</b>?`), ivT(a, b, ca, cb), opts4(a, b).filter(o => o !== ivT(a, b, ca, cb)), { big: true, ex: L('El claudàtor [ ] vol dir que l\'extrem hi entra (≤) i el parèntesi ( ), que no hi entra (<).', 'El corchete [ ] quiere decir que el extremo entra (≤) y el paréntesis ( ), que no entra (<).'), chk: { t: 'ineq', a, b, ca, cb } });
    }
    if (L_ === 2) return mc(L('Quin interval representa la recta?', '¿Qué intervalo representa la recta?'), ivT(a, b, ca, cb), opts4(a, b).filter(o => o !== ivT(a, b, ca, cb)), { big: true, vis: ivSVG(a, b, ca, cb), ex: L('Punt ple: l\'extrem hi entra, claudàtor [ ]. Punt buit: no hi entra, parèntesi ( ).', 'Punto lleno: el extremo entra, corchete [ ]. Punto vacío: no entra, paréntesis ( ).'), chk: { t: 'draw', a, b, ca, cb } });
    if (L_ === 3) {
      const inside = v => (ca ? v >= a : v > a) && (cb ? v <= b : v < b), cand = [a, b, a - 1, b + 1, a + .5, b - .5, (a + b) / 2].map(v => Math.round(v * 10) / 10);
      const yes = shuffle([...new Set(cand)].filter(inside)), no = shuffle([...new Set(cand)].filter(v => !inside(v)));
      if (!yes.length || no.length < 3) return numInt(L_);
      return mc(L(`Quin d'aquests nombres pertany a l'interval <b>${ivT(a, b, ca, cb)}</b>?`, `¿Cuál de estos números pertenece al intervalo <b>${ivT(a, b, ca, cb)}</b>?`), fmtD(yes[0]), no.slice(0, 3).map(fmtD), { big: true, ex: L(`L'interval va de ${fmt(a)} (${ca ? 'inclòs' : 'no inclòs'}) a ${fmt(b)} (${cb ? 'inclòs' : 'no inclòs'}). Hi pertany ${fmtD(yes[0])}.`, `El intervalo va de ${fmt(a)} (${ca ? 'incluido' : 'no incluido'}) a ${fmt(b)} (${cb ? 'incluido' : 'no incluido'}). Pertenece ${fmtD(yes[0])}.`), chk: { t: 'belong', a, b, ca, cb } });
    }
    if (L_ === 4) {
      const c = ri(-6, 6), up = Math.random() < .5, cl = Math.random() < .5, ok = up ? ivT(c, Infinity, cl, false) : ivT(-Infinity, c, false, cl);
      const alts = [ivT(c, Infinity, !cl, false), ivT(-Infinity, c, false, cl), ivT(c, Infinity, cl, false), ivT(-Infinity, c, false, !cl)].filter(o => o !== ok);
      return mc(L(`Quin interval correspon a <b>x ${up ? (cl ? '≥' : '&gt;') : (cl ? '≤' : '&lt;')} ${fmt(c)}</b>?`, `¿Qué intervalo corresponde a <b>x ${up ? (cl ? '≥' : '&gt;') : (cl ? '≤' : '&lt;')} ${fmt(c)}</b>?`), ok, alts.slice(0, 3), { big: true, vis: ivSVG(up ? c : -Infinity, up ? Infinity : c, up ? cl : false, up ? false : cl), ex: L('Una semirecta arriba fins a l\'infinit (∞), que sempre porta parèntesi perquè no és cap nombre.', 'Una semirrecta llega hasta el infinito (∞), que siempre lleva paréntesis porque no es ningún número.'), chk: { t: 'ray', c, up, cl } });
    }
    const c1 = ri(-6, 1), d1 = c1 + ri(3, 6), c2 = ri(c1 + 1, d1 - 1), d2 = d1 + ri(1, 4), k1 = Math.random() < .5, k2 = Math.random() < .5, k3 = Math.random() < .5, k4 = Math.random() < .5;
    const I1 = ivT(c1, d1, k1, k2), I2 = ivT(c2, d2, k3, k4), ok = ivT(c2, d1, k3, k2);
    const alts = [...new Set([ivT(c1, d2, k1, k4), ivT(c2, d1, !k3, k2), ivT(c2, d1, k3, !k2), ivT(c1, c2, k1, k3)])].filter(o => o !== ok);
    return mc(L(`Quina és la <b>intersecció</b> ${I1} ∩ ${I2}?`, `¿Cuál es la <b>intersección</b> ${I1} ∩ ${I2}?`), ok, alts.slice(0, 3), { big: true, ex: L(`La intersecció són els nombres que són a tots dos intervals: comença a ${fmt(c2)} (el més gran dels inicis) i acaba a ${fmt(d1)} (el més petit dels finals): ${ok}.`, `La intersección son los números que están en los dos intervalos: empieza en ${fmt(c2)} (el mayor de los inicios) y acaba en ${fmt(d1)} (el menor de los finales): ${ok}.`), chk: { t: 'cap', I1: [c1, d1, k1, k2], I2: [c2, d2, k3, k4] } });
  }

  Object.assign(EX, {
    'e.vec': L_ => eVec(L_),
    'e.line': L_ => eLine(L_),
    'num.real': L_ => numReal(L_),
    'num.int': L_ => numInt(L_)
  });
})();
