/* Tech 3D · Nivell 2 · unitat 8 «Producte final» (p8-1 … p8-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). Fil narratiu: l'estudi d'enginyeria del Taller de Bit tanca el curs
   amb la Fira de producte del barri. Al tauler hi ha encàrrecs de clients de veritat (la biblioteca, la consergeria, el casal
   de gent gran i la mestra Sílvia, de P5); cada alumne/a en tria un (o en porta un de casa o del barri) i en fa el producte,
   de l'encàrrec a la presentació. Exemple de tota la unitat: el comptador de pals i anelles de la mestra Sílvia (n pals, el
   pal k fa base + k × gruix + 2 mm; anelles de da mm amb un forat de dp + 2 × tol; 4 mm d'aire entre anelles; base de n × dist).
   p8-1 el repte i les especificacions (encàrrec, requisits mesurables, restriccions; prototip ràpid a l'editor → el seu codi
   → codi paramètric) · p8-2 el prototip paramètric (especificacions, mòduls i muntatge; el .scad i l'STL) · p8-3 proves amb
   diversos paràmetres (param), els números escrits a mà, el rang i max(), revisió per parelles (rúbrica en paper i pas
   «review») i la v3 · p8-4 la fitxa tècnica, del codi a la impressora (STL → Tinkercad o laminat), la presentació, la
   família de productes (un mòdul amb paràmetre) i el diploma (pas «diploma»).
   El producte propi passa d'una sessió a l'altra: el pas m3free de cada sessió comença amb l'últim projecte desat des de
   p8-* (el programa; o, si és el prototip ràpid de l'editor, el seu codi, el mateix que dona el botó «Codi», m3PartsProg).
   Si no n'hi ha cap, comença amb una plantilla (p8-1) o amb el comptador de mostra (p8-2 … p8-4).
   · Les variables de les comprovacions tenen el mateix nom en les dues llengües (n, dp, da, tol, base, dist, placa); el
     gruix de les anelles és gruix/grosor i les comprovacions el porten bilingüe ('…gruix…|…grosor…'). Els programes són
     «ca|es» (B): els noms dels mòduls, gruix i els comentaris canvien; les paraules del llenguatge les tradueix l'app.
   · Si el final d'un bucle és una variable, va entre parèntesis: repeteix i de 1 a (n). El radi d'«arrodonit» no pot
     passar de la meitat del gruix: per això cap comprovació fa variar «base» (4 mm, radi 2). */
Object.assign(TBADGE, {
  p84_producte: { id: 'p84_producte', ico: '🏆', n: 'Enginyer/a de producte|Ingeniero/a de producto', d: "Has portat un producte propi de l'encàrrec a la fira: especificacions, prototip paramètric amb mòduls, proves amb diversos valors i fitxa tècnica.|Has llevado un producto propio del encargo a la feria: especificaciones, prototipo paramétrico con módulos, pruebas con varios valores y ficha técnica." }
});
COURSE_UNITS[8] = (() => {
  const J = (...l) => l.join('\n');
  // castellà: els noms que canvien (mòduls i gruix) i els comentaris; les paraules del llenguatge les tradueix l'app
  const ES = { pal: 'palo', anella: 'anilla', gruix: 'grosor', comptador: 'contador' };
  const CM = {
    '1. Especificacions (la fitxa de la mestra Sílvia)': '1. Especificaciones (la ficha de la maestra Sílvia)',
    "l'anella i 4 mm d'aire": 'la anilla y 4 mm de aire',
    '2. Mòduls': '2. Módulos',
    'un pal on caben k anelles': 'un palo donde caben k anillas',
    '3. Muntatge per imprimir': '3. Montaje para imprimir',
    'una anella de prova, al costat de la base': 'una anilla de prueba, al lado de la base',
    "l'anella: encara sense el forat": 'la anilla: todavía sin el agujero',
    "4. Muntat, per veure'l: al pal i, i anelles": '4. Montado, para verlo: en el palo i, i anillas',
    "paret de l'anella d'almenys 4 mm": 'pared de la anilla de al menos 4 mm',
    "v3: la base i els pals es calculen amb n i dist; l'anella creix amb el pal": 'v3: la base y los palos se calculan con n y dist; la anilla crece con el palo',
    'la mestra vol pals de 12 mm': 'la maestra quiere palos de 12 mm',
    'una anella posada al primer pal, per veure-ho': 'una anilla puesta en el primer palo, para verlo',
    '1. Les especificacions': '1. Las especificaciones',
    '2. El codi del prototip (botó «Codi»)': '2. El código del prototipo (botón «Código»)',
    '2. El prototip, ara paramètric': '2. El prototipo, ahora paramétrico',
    'la fitxa: n pals i anelles de da mm': 'la ficha: n palos y anillas de da mm',
    "entre pals: l'anella i 10 mm d'aire": 'entre palos: la anilla y 10 mm de aire',
    "entre pals: l'anella i 4 mm d'aire": 'entre palos: la anilla y 4 mm de aire',
    'la base: n trams de dist mm': 'la base: n tramos de dist mm',
    'dues anelles posades, per veure-ho': 'dos anillas puestas, para verlo',
    '2. Les peces: la base i els tres primers pals': '2. Las piezas: la base y los tres primeros palos',
    'el comptador sencer, com a mòdul: n és el nombre de pals': 'el contador entero, como módulo: n es el número de palos',
    "la família, per a l'estand": 'la familia, para el estand',
    "el rètol de l'estand": 'el letrero del estand',
    'el forat per penjar-lo': 'el agujero para colgarlo',
    'el nom, a sobre de la placa': 'el nombre, encima de la placa',
    'la medalla de la fira': 'la medalla de la feria',
    'el forat per a la cinta': 'el agujero para la cinta',
    'les boletes del voltant': 'las bolitas de alrededor'
  };
  const esLine = l => { const i = l.indexOf('//'), code = (i >= 0 ? l.slice(0, i) : l).replace(/\b(pal|anella|gruix|comptador)\b/g, w => ES[w]).replace('text("COMPTA"', 'text("CUENTA"');
    if (i < 0) return code; const c = l.slice(i + 2).trim(); return code + '// ' + (CM[c] || c); };
  const B = (...l) => { const ca = J(...l); return ca + '|' + ca.split('\n').map(esLine).join('\n'); };
  const sw = (lines, from, to) => lines.map(x => x === from ? to : x);

  /* ---------- l'exemple: el comptador de la mestra Sílvia ---------- */
  const HEAD = ['// 1. Especificacions (la fitxa de la mestra Sílvia)', 'n = 5', 'dp = 10', 'tol = 0.4', 'da = 30', 'gruix = 6', 'base = 4', "// l'anella i 4 mm d'aire", 'dist = da + 4'];
  const PAL = ['// 2. Mòduls', 'defineix pal(k) {', '  // un pal on caben k anelles', '  cilindre(dp, base + k * gruix + 2)', '}'];
  const ANE = ['defineix anella() {', '  resta {', '    cilindre(da, gruix)', '    mou(0, 0, -1) cilindre(dp + 2 * tol, gruix + 2)', '  }', '}'];
  const BASE = ['// 3. Muntatge per imprimir', 'arrodonit(n * dist, 40, base, 2)'];
  const LOOP = ['repeteix i de 1 a (n) {', '  mou(i * dist - dist / 2, 20, 0) pal(i)', '}'];
  const TEST = ['// una anella de prova, al costat de la base', 'mou(dist / 2, -25, 0) anella()'];
  const FULL = [...HEAD, ...PAL, ...ANE, ...BASE, ...LOOP, ...TEST];
  const VFULL = B(...FULL);
  const MAXL = ["// paret de l'anella d'almenys 4 mm", 'da = max(30, dp + 2 * tol + 8)'];
  const FULLM = FULL.flatMap(x => x === 'da = 30' ? MAXL : [x]);
  const T3SOL = B(...FULLM);
  const VFIN = B(FULLM[0], "// v3: la base i els pals es calculen amb n i dist; l'anella creix amb el pal", ...FULLM.slice(1));

  /* ---------- p8-1 · el prototip ràpid (editor), el seu codi i el codi paramètric ---------- */
  const PB = { id: 'base', t: 'rbox', s: [102, 40, 4], p: [0, 0, 2], cr: 2, c: '#7C5CFF' };
  const PP = (id, x, h) => ({ id, t: 'cyl', s: [10, 10, h], p: [x, 0, h / 2], c: '#F7C531' });
  const PROTO0 = { parts: [PB] }, PROTO = { parts: [PB, PP('p1', -34, 12), PP('p2', 0, 18), PP('p3', 34, 24)] };
  const PCODE = B('// 1. Les especificacions', 'dp = 10', 'gruix = 6', 'base = 4', '// 2. El codi del prototip (botó «Codi»)', 'mou(0, 0, 2) arrodonit(102, 40, 4, 2, centrat)',
    'mou(-34, 0, 6) cilindre(10, 12, centrat)', 'mou(0, 0, 9) cilindre(10, 18, centrat)', 'mou(34, 0, 12) cilindre(10, 24, centrat)');
  const PPAR = B('// 1. Les especificacions', 'dp = 10', 'gruix = 6', 'base = 4', '// 2. El prototip, ara paramètric', 'mou(0, 0, 2) arrodonit(102, 40, 4, 2, centrat)',
    'mou(-34, 0, 0) cilindre(dp, base + gruix + 2)', 'cilindre(dp, base + 2 * gruix + 2)', 'mou(34, 0, 0) cilindre(dp, base + 3 * gruix + 2)');
  const PEG = (k, x) => ({ k: 'part', t: 'cyl', hole: false, s: ['dp', 'dp', k === 1 ? 'base + gruix + 2|base + grosor + 2' : `base + ${k} * gruix + 2|base + ${k} * grosor + 2`], at: [x, 0, null], base: 0, tol: 0.05,
    txt: `Pal de ${k} anell${k === 1 ? 'a' : 'es'}: dp × (base + ${k === 1 ? '' : k + ' × '}gruix + 2), a x = ${String(x).replace('-', '−')}|Palo de ${k} anilla${k === 1 ? '' : 's'}: dp × (base + ${k === 1 ? '' : k + ' × '}grosor + 2), en x = ${String(x).replace('-', '−')}` });
  const BASE0 = B('// la fitxa: n pals i anelles de da mm', 'n = 5', 'da = 30', "// entre pals: l'anella i 10 mm d'aire", 'dist = da + 10', '// la base: n trams de dist mm', 'arrodonit(200, 40, 4, 2)');
  const BASE1 = B('// la fitxa: n pals i anelles de da mm', 'n = 5', 'da = 30', "// entre pals: l'anella i 4 mm d'aire", 'dist = da + 4', '// la base: n trams de dist mm', 'arrodonit(n * dist, 40, 4, 2)');
  const SPOTL = ['n = 5', 'da = 30', 'dist = da - 4', 'arrodonit(n * dist, 40, 4, 2)', 'repeteix i de 1 a (n) {', '  mou(i * dist - dist / 2, 20, 0) cilindre(10, 4 + i * 6 + 2)', '}',
    '// dues anelles posades, per veure-ho', 'mou(dist / 2, 20, 4) tub(da, 6, 9.6)', 'mou(1.5 * dist, 20, 4) tub(da, 6, 9.6)'];
  const SPOT1 = B(...sw(SPOTL, 'dist = da - 4', 'dist = da - 4!')), SPOT1T = B(...sw(SPOTL, 'dist = da - 4', 'dist = da + 4'));
  const V1 = B('// 1. Especificacions (la fitxa de la mestra Sílvia)', 'n = 5', 'dp = 10', 'da = 30', 'gruix = 6', 'base = 4', "// l'anella i 4 mm d'aire", 'dist = da + 4',
    '// 2. Les peces: la base i els tres primers pals', 'arrodonit(n * dist, 40, base, 2)', 'mou(dist / 2, 20, 0) cilindre(dp, base + gruix + 2)',
    'mou(1.5 * dist, 20, 0) cilindre(dp, base + 2 * gruix + 2)', 'mou(2.5 * dist, 20, 0) cilindre(dp, base + 3 * gruix + 2)');
  // la plantilla de la v1 (si no hi ha cap prototip ràpid desat)
  const TPL = J('// El meu producte: ____ (per a ____)', '// 1. Especificacions: les mides de la teva fitxa', 'llarg = 80', 'ample = 40', 'alt = 20', '// 2. Les peces: fes servir les variables', 'cub(llarg, ample, alt)') + '|' +
    J('// Mi producto: ____ (para ____)', '// 1. Especificaciones: las medidas de tu ficha', 'largo = 80', 'ancho = 40', 'alto = 20', '// 2. Las piezas: usa las variables', 'cubo(largo, ancho, alto)');

  /* ---------- p8-2 · mòduls, bucle i anella ---------- */
  const MODX = h => [...HEAD, '// 2. Mòduls', 'defineix pal(k) {', '  // un pal on caben k anelles', `  cilindre(dp, ${h})`, '}', ...BASE, 'mou(dist / 2, 20, 0) pal(1)', 'mou(1.5 * dist, 20, 0) pal(2)'];
  const MOD0 = B(...MODX('20')), MOD1 = B(...MODX('base + k * gruix + 2'));
  const LOOP1 = B(...HEAD, ...PAL, ...BASE, ...LOOP);
  const RING0 = B(...HEAD, ...PAL, 'defineix anella() {', "  // l'anella: encara sense el forat", '  cilindre(da, gruix)', '}', ...BASE, ...LOOP, ...TEST);
  const STACKL = ["// 4. Muntat, per veure'l: al pal i, i anelles", 'repeteix i de 1 a (n) {', '  repeteix j de 1 a (i) {', '    mou(i * dist - dist / 2, 20, base + (j - 1) * gruix) anella()', '  }', '}'];
  const STACK = B(...FULL, ...STACKL);
  const PREDL = j => ['defineix pal(k) {', '  cilindre(8, 4 + k * 6)', '}', 'cub(120, 30, 4)', 'repeteix i de 1 a 4 {', `  ${j}`, '}'];
  const PRED = B(...PREDL('mou(i * 30 - 15, 15, 0) pal(i)')), PRED_DEC = B(...PREDL('mou(i * 30 - 15, 15, 0) pal(5 - i)')), PRED_EQ = B(...PREDL('mou(i * 30 - 15, 15, 0) pal(1)')), PRED_LEFT = B(...PREDL('mou(i * 10, 15, 0) pal(i)'));
  const SPOT2 = B(...HEAD, ...PAL, ...BASE, 'repeteix i de 0 a (n)! {', '  mou(i * dist - dist / 2, 20, 0) pal(i)', '}');

  /* ---------- p8-3 · proves amb diversos paràmetres ---------- */
  const T1S = B(...sw(FULL, 'arrodonit(n * dist, 40, base, 2)', 'arrodonit(170, 40, base, 2)'));
  const T2S = B(...sw(FULL, '  mou(i * dist - dist / 2, 20, 0) pal(i)', '  mou(i * 34 - 17, 20, 0) pal(i)'));
  const HARD3 = B(...sw(sw(FULL, 'arrodonit(n * dist, 40, base, 2)', 'arrodonit(170, 40, base, 2)'), 'n = 5', 'n = 3'));
  const SPOTL3 = ['// la mestra vol pals de 12 mm', 'n = 5', 'dp = 12', 'tol = 0.4', 'da = 30', 'gruix = 6', 'base = 4', 'dist = da + 4', ...PAL, 'defineix anella() {', '  resta {', '    cilindre(da, gruix)', 'HOLE', '  }', '}',
    ...BASE, ...LOOP, '// una anella posada al primer pal, per veure-ho', 'mou(dist / 2, 20, base) anella()'];
  const SPOT3 = B(...sw(SPOTL3, 'HOLE', '    mou(0, 0, -1) cilindre(10.8, gruix + 2)!')), SPOT3T = B(...sw(SPOTL3, 'HOLE', '    mou(0, 0, -1) cilindre(dp + 2 * tol, gruix + 2)'));

  /* ---------- p8-4 · la fira ---------- */
  const VFIN4 = B(...sw(FULLM, 'n = 5', 'n = 4')), EQ4 = B(...sw(sw(FULLM, 'n = 5', 'n = 4'), '  mou(i * dist - dist / 2, 20, 0) pal(i)', '  mou(i * dist - dist / 2, 20, 0) pal(2)'));
  const FAML = tail => ['// el comptador sencer, com a mòdul: n és el nombre de pals', 'dp = 10', 'gruix = 6', 'base = 4', 'da = 30', 'dist = da + 4', 'defineix pal(k) {', '  cilindre(dp, base + k * gruix + 2)', '}',
    'defineix comptador(n) {', '  arrodonit(n * dist, 40, base, 2)', '  repeteix i de 1 a (n) {', '    mou(i * dist - dist / 2, 20, 0) pal(i)', '  }', '}', "// la família, per a l'estand", ...tail];
  const FAM0 = B(...FAML(['comptador(5)'])), FAM = B(...FAML(['comptador(3)', 'mou(0, 60, 0) comptador(4)', 'mou(0, 120, 0) comptador(5)']));
  const SIGN0 = B("// el rètol de l'estand", 'placa = 3', 'arrodonit(100, 30, placa, 1)', 'mou(18, 9, 0) text("COMPTA", 12, 2)');
  const SIGN = B("// el rètol de l'estand", 'placa = 3', 'resta {', '  arrodonit(100, 30, placa, 1)', '  // el forat per penjar-lo', '  mou(8, 15, -1) cilindre(6, placa + 2)', '}', '// el nom, a sobre de la placa', 'mou(18, 9, placa) text("COMPTA", 12, 2)');
  const MEDL = b => ['// la medalla de la fira', 'n = 8', 'resta {', '  cilindre(50, 4)', '  // el forat per a la cinta', '  mou(0, 19, -1) cilindre(5, 6)', '}', '// les boletes del voltant', ...b];
  const MED0 = B(...MEDL(['mou(12, 0, 4) esfera(6)'])), MED = B(...MEDL(['repeteix i de 1 a (n) {', '  gira(0, 0, i * 360 / n) mou(12, 0, 4) esfera(6)', '}']));

  /* ---------- el projecte propi: continua amb l'últim desat ---------- */
  const ts = () => { try { return typeof TS_ === 'function' ? TS_() : null; } catch (e) { return null; } };
  const esL = () => typeof LANG !== 'undefined' && LANG === 'es';
  const lastOf = sids => { const t = ts(); if (!t || !Array.isArray(t.port)) return null; for (let i = t.port.length - 1; i >= 0; i--) { const p = t.port[i]; if (!p || p.kind !== 'model' || !sids.includes(p.sid)) continue;
    if (typeof p.prog === 'string' && p.prog.trim()) return p; if (p.model && Array.isArray(p.model.parts) && p.model.parts.some(q => q && q.s)) return p; } return null; };
  // el prototip ràpid de l'editor, escrit amb codi (com el botó «Codi»)
  const sketch = parts => { try { return typeof m3PartsProg === 'function' ? (esL() ? '// 1. Especificaciones: escribe aquí las variables de tu ficha\n// 2. El código de tu prototipo rápido (botón «Código»)\n' : "// 1. Especificacions: escriu aquí les variables de la teva fitxa\n// 2. El codi del teu prototip ràpid (botó «Codi»)\n") + m3PartsProg(parts) : null; } catch (e) { return null; } };
  const mine = (sids, def) => { const l = lastOf(sids), c = !l ? null : typeof l.prog === 'string' ? l.prog : sketch(l.model.parts); return c ? c.replace(/\|/g, '/') : def; };

  const PLACA = { k: 'fit', box: [180, 180, 150], t: 'Cap a la placa de la Nuvi (180 × 180 × 150 mm)|Cabe en la placa de Nuvi (180 × 180 × 150 mm)' };
  const BLF = ['var', 'cub', 'cil', 'tub', 'arrod', 'text', 'mou', 'gira', 'uneix', 'resta', 'rep', 'def', 'call', 'color', 'rem'];
  const PALF = ['box', 'rbox', 'cyl', 'tube', 'hsph', 'cone', 'wedge', 'text', 'hbox', 'hcyl'];
  const RINGAT = ['dist / 2', -25, null];
  const LASTPEG = { k: 'part', t: 'cyl', hole: false, s: ['dp', 'dp', 'base + n * gruix + 2|base + n * grosor + 2'], at: ['n * dist - dist / 2', 20, null], base: 0, tol: 0.05, txt: "L'últim pal, de n anelles, al mig de l'últim tram|El último palo, de n anillas, en el centro del último tramo" };
  const BASEX = { k: 'size', ax: 'x', v: 'n * dist', tol: 0.1, t: 'La base fa n × dist de llarg|La base mide n × dist de largo' };

  return {
  t: 'Producte final|Producto final', d: 'Del problema al prototip|Del problema al prototipo', color: '#7C5CFF',
  s: [
    /* =================================== Sessió 1 · El repte i les especificacions =================================== */
    { id: 'p8-1', t: 'El repte i les especificacions|El reto y las especificaciones', min: 44,
      learn: ["Un producte comença amb un encàrrec: per a qui és, quin problema resol i on es farà servir.|Un producto empieza con un encargo: para quién es, qué problema resuelve y dónde se usará.",
        "Els requisits es diuen amb números (mides, quantitats, marges) i les restriccions marquen els límits: la placa, els suports, el temps i el plàstic.|Los requisitos se dicen con números (medidas, cantidades, márgenes) y las restricciones marcan los límites: la placa, los soportes, el tiempo y el plástico.",
        "Cada número de la fitxa es converteix en una variable del programa i cada requisit, en una comprovació del taller.|Cada número de la ficha se convierte en una variable del programa y cada requisito, en una comprobación del taller."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Per què el forat d\'una anella que ha de lliscar per un pal de d mm fa <code>d + 2 × tol</code>?|¿Por qué el agujero de una anilla que tiene que deslizar por un palo de d mm mide <code>d + 2 × tol</code>?',
          opts: ['Perquè la impressora fa els forats una mica més petits i cal deixar marge a cada costat|Porque la impresora hace los agujeros un poco más pequeños y hay que dejar margen a cada lado', 'Perquè el forat ha de ser el doble de gran que el pal|Porque el agujero tiene que ser el doble de grande que el palo', "Perquè ho demana el fitxer STL|Porque lo pide el archivo STL"], a: 0,
          ex: "És la tolerància de la unitat 7: tol a l'esquerra i tol a la dreta.|Es la tolerancia de la unidad 7: tol a la izquierda y tol a la derecha." },
        { k: 'quiz', ph: 'recorda', q: 'Què fa <code>defineix pal(k) { … }</code> si no el crides mai?|¿Qué hace <code>define palo(k) { … }</code> si no lo llamas nunca?',
          opts: ['Res: definir un mòdul no construeix cap peça|Nada: definir un módulo no construye ninguna pieza', 'Fa un pal|Hace un palo', 'Dona un error|Da un error'], a: 0,
          ex: "Un mòdul és una recepta: només fa peces quan el crides, per exemple amb pal(3).|Un módulo es una receta: solo hace piezas cuando lo llamas, por ejemplo con palo(3)." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'estudi', title: 'La Fira de producte|La Feria de producto',
          t: "L'estudi tanca el curs amb la <b>Fira de producte</b> del barri! Al tauler hi ha <b>encàrrecs de clients de veritat</b>: la biblioteca, la consergeria, el casal de gent gran i la mestra Sílvia, de P5. Cadascú en triarà un i en serà l'enginyer/a, de les <b>especificacions</b> a la presentació. L'estudi farà de mostra el de la Sílvia: un <b>comptador de pals i anelles</b>.|¡El estudio cierra el curso con la <b>Feria de producto</b> del barrio! En el tablón hay <b>encargos de clientes de verdad</b>: la biblioteca, la conserjería, el centro de mayores y la maestra Sílvia, de P5. Cada uno elegirá uno y será su ingeniero/a, de las <b>especificaciones</b> a la presentación. El estudio hará de muestra el de Sílvia: un <b>contador de palos y anillas</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El projecte final|El proyecto final', t: 'Quatre sessions, un producte teu|Cuatro sesiones, un producto tuyo', anim: 'p81road',
            x: "Quatre parades: <b>1)</b> les <b>especificacions</b>; <b>2)</b> el <b>prototip paramètric</b>; <b>3)</b> les <b>proves</b> i la revisió d'un company/a; <b>4)</b> la <b>presentació</b> a la fira. Cada sessió desaràs una versió i la següent la continuarà.|Cuatro paradas: <b>1)</b> las <b>especificaciones</b>; <b>2)</b> el <b>prototipo paramétrico</b>; <b>3)</b> las <b>pruebas</b> y la revisión de un compañero/a; <b>4)</b> la <b>presentación</b> en la feria. Cada sesión guardarás una versión y la siguiente la continuará.",
            tip: "Millor senzill i que funcioni amb qualsevol valor que gegant i a mig fer.|Mejor sencillo y que funcione con cualquier valor que gigante y a medio hacer." },
          { k: "L'encàrrec|El encargo", t: 'El tauler de la fira|El tablón de la feria', anim: 'p81board',
            x: "Un encàrrec diu <b>per a qui</b> és, <b>quin problema</b> resol i <b>on</b> es farà servir. El de la mestra Sílvia: «Els infants de P5 aprenen a comptar fins a 5. Vull un comptador amb pals i anelles per a la taula de mates.» Tria'n un del tauler o porta'n un de casa o del barri.|Un encargo dice <b>para quién</b> es, <b>qué problema</b> resuelve y <b>dónde</b> se usará. El de la maestra Sílvia: «Los niños de P5 aprenden a contar hasta 5. Quiero un contador con palos y anillas para la mesa de mates.» Elige uno del tablón o trae uno de casa o del barrio." },
          { k: 'Requisits mesurables|Requisitos medibles', t: 'Amb números, es poden comprovar|Con números, se pueden comprobar', anim: 'p81meas',
            x: "«Que sigui fàcil d'agafar» no es pot comprovar; «anelles de <b>30 mm</b>», sí. Els requisits de la Sílvia: <b>5 pals</b> (d'1 a 5 anelles), anelles de <b>30 mm</b> que <b>llisquin soles</b> pels pals de <b>10 mm</b> i <b>4 mm d'aire</b> entre anella i anella.|«Que sea fácil de coger» no se puede comprobar; «anillas de <b>30 mm</b>», sí. Los requisitos de Sílvia: <b>5 palos</b> (de 1 a 5 anillas), anillas de <b>30 mm</b> que <b>deslicen solas</b> por los palos de <b>10 mm</b> y <b>4 mm de aire</b> entre anilla y anilla.",
            bad: "«Que sigui petit i maco.»|«Que sea pequeño y bonito.»", good: "«Com a molt 180 mm de llarg.»|«Como mucho 180 mm de largo.»" },
          { k: 'Restriccions|Restricciones', t: 'La placa, els suports, el temps i el plàstic|La placa, los soportes, el tiempo y el plástico', anim: 'p81limits',
            x: "Les restriccions són els límits de la fabricació: ha de <b>cabre a la placa</b> (180 × 180 mm), s'ha de poder imprimir <b>sense suports</b> i amb parets d'almenys <b>1,2 mm</b>. El <b>temps</b> i el <b>plàstic</b> creixen amb l'alçada (més capes de 0,2 mm) i el volum: el programa de laminat et dirà els valors exactes.|Las restricciones son los límites de la fabricación: tiene que <b>caber en la placa</b> (180 × 180 mm), se tiene que poder imprimir <b>sin soportes</b> y con paredes de al menos <b>1,2 mm</b>. El <b>tiempo</b> y el <b>plástico</b> crecen con la altura (más capas de 0,2 mm) y el volumen: el programa de laminado te dirá los valores exactos.",
            tip: "Un model de 36 mm d'alt, amb capes de 0,2 mm, té 180 capes.|Un modelo de 36 mm de alto, con capas de 0,2 mm, tiene 180 capas." },
          { k: 'De la fitxa al codi|De la ficha al código', t: 'Cada número, una variable|Cada número, una variable', media: { k: 'model', prog: V1 },
            x: "Cada número de la fitxa és una <b>variable</b> a dalt del programa (<code>n = 5</code>, <code>dist = da + 4</code>…) i cada requisit, una <b>comprovació</b>: «Cap a la placa», «Funciona amb n = 3 i 5». Si el client canvia d'idea, canvies un número.|Cada número de la ficha es una <b>variable</b> arriba del programa (<code>n = 5</code>, <code>dist = da + 4</code>…) y cada requisito, una <b>comprobación</b>: «Cabe en la placa», «Funciona con n = 3 y 5». Si el cliente cambia de idea, cambias un número." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📋', title: "La fitxa d'especificacions|La ficha de especificaciones", t: 'Amb la fitxa (o un full) i un llapis, sense pantalla:|Con la ficha (o una hoja) y un lápiz, sin pantalla:',
          steps: ["Tria un encàrrec del tauler (o un de casa o del barri) i escriu-lo en una frase: per a qui, quin problema i on.|Elige un encargo del tablón (o uno de casa o del barrio) y escríbelo en una frase: para quién, qué problema y dónde.",
            "Escriu tres requisits amb números (mides, quantitats, el marge de les peces que encaixen) i dues restriccions (la placa, sense suports, el temps o el plàstic).|Escribe tres requisitos con números (medidas, cantidades, el margen de las piezas que encajan) y dos restricciones (la placa, sin soportes, el tiempo o el plástico).",
            "Dibuixa l'esbós de davant i de dalt i escriu-hi les cotes en mm.|Dibuja el boceto de delante y de arriba y escribe las cotas en mm.",
            "Al costat de cada cota, escriu el nom de la variable que tindrà al programa: llarg, n, d, tol…|Al lado de cada cota, escribe el nombre de la variable que tendrá en el programa: largo, n, d, tol…"],
          tip: "Llegeix els requisits al company/a: si els pot comprovar amb un regle, estan ben escrits.|Lee los requisitos al compañero/a: si los puede comprobar con una regla, están bien escritos." },
        { k: 'quiz', ph: 'prova', q: "Quin d'aquests requisits es pot <b>comprovar</b> amb un regle o amb el taller?|¿Cuál de estos requisitos se puede <b>comprobar</b> con una regla o con el taller?",
          opts: ['Les anelles fan 30 mm de diàmetre|Las anillas miden 30 mm de diámetro', 'Ha de ser bonic i alegre|Tiene que ser bonito y alegre', 'Que agradi als infants|Que guste a los niños'], a: 0,
          ex: "Els altres també importen, però per comprovar-los cal traduir-los a números: «fàcil d'agafar» pot ser «anelles de 30 mm».|Los otros también importan, pero para comprobarlos hay que traducirlos a números: «fácil de coger» puede ser «anillas de 30 mm»." },
        { k: 'm3spot', ph: 'investiga', q: "La fitxa diu: <b>anelles de 30 mm i 4 mm d'aire</b> entre anella i anella. Aquí les anelles xoquen. Toca la instrucció que no compleix la fitxa.|La ficha dice: <b>anillas de 30 mm y 4 mm de aire</b> entre anilla y anilla. Aquí las anillas chocan. Toca la instrucción que no cumple la ficha.",
          prog: SPOT1, target: SPOT1T,
          ex: "Amb dist = da − 4, els pals queden a 26 mm i les anelles de 30 s'encavalquen. Ha de ser dist = da + 4: l'anella i 4 mm d'aire.|Con dist = da − 4, los palos quedan a 26 mm y las anillas de 30 se solapan. Tiene que ser dist = da + 4: la anilla y 4 mm de aire." },
        { k: 'move', ph: 'pausa', title: 'Mesura amb el cos|Mide con el cuerpo', secs: 30, t: "Dret/a! Ensenya amb els dits quant fa <b>1 cm</b>… <b>3 cm</b> (una anella)… i amb els braços, <b>18 cm</b> (la placa de la Nuvi). Ara fes amb les mans la mida del teu producte: hi cap?|¡De pie! Enseña con los dedos cuánto mide <b>1 cm</b>… <b>3 cm</b> (una anilla)… y con los brazos, <b>18 cm</b> (la placa de Nuvi). Ahora haz con las manos el tamaño de tu producto: ¿cabe?" },
        { k: 'm3build', ph: 'repte', q: "<b>Prototip ràpid amb l'editor.</b> La base ja hi és. Posa-hi 3 <b>pals</b> (cilindres de 10 mm) a <b>x = −34, 0 i 34</b>, de <b>12, 18 i 24 mm</b> d'alt, que neixin a la placa (z = 0).|<b>Prototipo rápido con el editor.</b> La base ya está. Ponle 3 <b>palos</b> (cilindros de 10 mm) en <b>x = −34, 0 y 34</b>, de <b>12, 18 y 24 mm</b> de alto, que nazcan en la placa (z = 0).",
          start: PROTO0, palette: ['cyl'], target: PROTO,
          checks: [{ k: 'part', t: 'cyl', s: [10, 10, 12], at: [-34, 0, null], base: 0, tol: 0.6, txt: 'Pal de 12 mm a x = −34|Palo de 12 mm en x = −34' }, { k: 'part', t: 'cyl', s: [10, 10, 18], at: [0, 0, null], base: 0, tol: 0.6, txt: 'Pal de 18 mm a x = 0|Palo de 18 mm en x = 0' },
            { k: 'part', t: 'cyl', s: [10, 10, 24], at: [34, 0, null], base: 0, tol: 0.6, txt: 'Pal de 24 mm a x = 34|Palo de 24 mm en x = 34' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca Cilindre; a les cotes, 10, 10 i 12; a Posició, x = −34, y = 0, z = 0. Duplica'l, posa'l a x = 0 i fes-lo de 18 d'alt. Torna a tocar Duplica: el tercer surt sol a x = 34; fes-lo de 24.|Toca Cilindro; en las cotas, 10, 10 y 12; en Posición, x = −34, y = 0, z = 0. Duplícalo, ponlo en x = 0 y hazlo de 18 de alto. Vuelve a tocar Duplica: el tercero sale solo en x = 34; hazlo de 24.",
          done: "Molt bé! Toca el botó «Codi»: el prototip ja és un programa. Al repte següent el farem paramètric.|¡Muy bien! Toca el botón «Código»: el prototipo ya es un programa. En el reto siguiente lo haremos paramétrico.",
          sol: PROTO },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Del prototip al codi paramètric.</b> És el codi del botó «Codi». Fes que el pal de k anelles faci <code>dp</code> de diàmetre i <code>base + k × gruix + 2</code> d'alt (k = 1, 2, 3), i que neixi a la placa.|<b>Del prototipo al código paramétrico.</b> Es el código del botón «Código». Haz que el palo de k anillas mida <code>dp</code> de diámetro y <code>base + k × grosor + 2</code> de alto (k = 1, 2, 3), y que nazca en la placa.",
          start: PCODE, blocks: ['var', 'cil', 'arrod', 'mou'], target: PPAR,
          checks: [PEG(1, -34), PEG(2, 0), PEG(3, 34), { k: 'param', v: 'gruix|grosor', vals: [5, 8], t: 'Funciona amb anelles de 5 i de 8 mm de gruix|Funciona con anillas de 5 y de 8 mm de grosor' },
            { k: 'param', v: 'dp', vals: [8, 12], t: 'I amb pals de 8 i de 12 mm|Y con palos de 8 y de 12 mm' }, { k: 'onplate' }, { k: 'one' }],
          hint: "A cada pal, canvia el 10 per dp i l'alçada per base + 1 * gruix + 2 (després 2 * gruix i 3 * gruix). Treu el «centrat» i posa z = 0 al mou: així el pal neix a la placa encara que canviï d'alçada.|En cada palo, cambia el 10 por dp y la altura por base + 1 * grosor + 2 (después 2 * grosor y 3 * grosor). Quita el «centrado» y pon z = 0 en el mueve: así el palo nace en la placa aunque cambie de altura.",
          sol: PPAR },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Requisit: cap a la placa.</b> La base ha de fer <code>n × dist</code> de llarg i cabre a la Nuvi (com a molt 180 mm). La mestra diu que <b>4 mm</b> d'aire entre anelles ja n'hi ha prou.|<b>Requisito: cabe en la placa.</b> La base tiene que medir <code>n × dist</code> de largo y caber en Nuvi (como mucho 180 mm). La maestra dice que <b>4 mm</b> de aire entre anillas ya es suficiente.",
          start: BASE0, blocks: ['var', 'arrod'], target: BASE1,
          checks: [{ k: 'size', ax: 'x', v: 'n * (da + 4)', tol: 0.1, t: "La base fa n × dist, amb 4 mm d'aire entre anelles|La base mide n × dist, con 4 mm de aire entre anillas" }, PLACA, { k: 'param', v: 'n', vals: [3, 5], t: 'Funciona amb 3 i amb 5 pals|Funciona con 3 y con 5 palos' }, { k: 'param', v: 'da', vals: [26, 30], t: 'I amb anelles de 26 i de 30 mm|Y con anillas de 26 y de 30 mm' }, { k: 'onplate' }],
          hint: "A dist, canvia el 10 per 4 (34 mm per pal). A la base, canvia el 200 per n * dist: amb n = 5 fa 170 mm i hi cap.|En dist, cambia el 10 por 4 (34 mm por palo). En la base, cambia el 200 por n * dist: con n = 5 mide 170 mm y cabe.",
          sol: BASE1 },
        { k: 'm3free', ph: 'crea', lvl: 1, extra: true, q: "<b>⭐ Prototip ràpid (opcional).</b> Amb l'editor, posa les formes grans del teu producte amb les mides de la fitxa. Mira'n el codi (botó «Codi») i desa'l: la v1 començarà amb aquest codi. Si prefereixes el codi, toca «⭐ Salta».|<b>⭐ Prototipo rápido (opcional).</b> Con el editor, pon las formas grandes de tu producto con las medidas de la ficha. Mira su código (botón «Código») y guárdalo: la v1 empezará con este código. Si prefieres el código, toca «⭐ Saltar».",
          name: 'El meu prototip ràpid|Mi prototipo rápido', palette: PALF,
          crit: ['Les formes grans, amb les mides de la teva fitxa|Las formas grandes, con las medidas de tu ficha', 'Toca la placa i cap a la Nuvi|Toca la placa y cabe en Nuvi', "N'has mirat el codi amb el botó «Codi»|Has mirado su código con el botón «Código»"],
          checks: [{ k: 'onplate' }, PLACA], sol: PROTO },
        { k: 'm3free', ph: 'crea', text: true, q: "<b>La v1 del teu producte, amb codi.</b> A dalt, les <b>variables</b> amb les mides de la teva fitxa; a sota, les formes grans fent-les servir. Si has fet el prototip ràpid, ja hi tens el seu codi.|<b>La v1 de tu producto, con código.</b> Arriba, las <b>variables</b> con las medidas de tu ficha; debajo, las formas grandes usándolas. Si has hecho el prototipo rápido, ya tienes su código.",
          name: 'El meu producte (v1)|Mi producto (v1)', get start() { return mine(['p8-1'], TPL); }, blocks: BLF,
          crit: ['Les mides de la fitxa són variables, a dalt del programa|Las medidas de la ficha son variables, arriba del programa', 'Les formes grans fan servir les variables|Las formas grandes usan las variables', 'Toca la placa i cap a la Nuvi (180 × 180 mm)|Toca la placa y cabe en Nuvi (180 × 180 mm)'],
          checks: [{ k: 'uses', b: 'var' }, { k: 'onplate' }, PLACA], sol: V1 },
        { k: 'quiz', ph: 'tanca', q: "La mestra canvia d'idea i en vol un de <b>4 pals</b>. Què canvies al programa?|La maestra cambia de idea y quiere uno de <b>4 palos</b>. ¿Qué cambias en el programa?",
          opts: ["Només n = 4: la base i els pals se n'adapten|Solo n = 4: la base y los palos se adaptan", 'Totes les mides, una a una|Todas las medidas, una a una', 'Res: cal començar de zero|Nada: hay que empezar de cero'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Un model fa 40 mm d'alt. Amb capes de 0,2 mm, quantes capes farà la Nuvi?|Un modelo mide 40 mm de alto. Con capas de 0,2 mm, ¿cuántas capas hará Nuvi?", opts: ['200|200', '40|40', '80|80'], a: 0,
          ex: "Cada mil·límetre són 5 capes: 40 × 5 = 200. Més capes vol dir més temps d'impressió.|Cada milímetro son 5 capas: 40 × 5 = 200. Más capas quiere decir más tiempo de impresión." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================== Sessió 2 · El prototip paramètric =================================== */
    { id: 'p8-2', t: 'El prototip paramètric|El prototipo paramétrico', min: 45,
      learn: ["Un programa de producte té tres parts: les especificacions (variables), els mòduls (les peces) i el muntatge per imprimir.|Un programa de producto tiene tres partes: las especificaciones (variables), los módulos (las piezas) y el montaje para imprimir.",
        "Les mides que depenen d'altres es calculen (dist = da + 4) i un bucle crida el mòdul tantes vegades com diu una variable.|Las medidas que dependen de otras se calculan (dist = da + 4) y un bucle llama al módulo tantas veces como dice una variable.",
        "El .scad obre el programa a OpenSCAD i l'STL va al programa de laminat: tots dos surten del mateix codi.|El .scad abre el programa en OpenSCAD y el STL va al programa de laminado: los dos salen del mismo código."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "La fitxa diu «4 mm d'aire entre anelles de da mm». Quina línia ho escriu millor?|La ficha dice «4 mm de aire entre anillas de da mm». ¿Qué línea lo escribe mejor?",
          opts: ['<code>dist = da + 4</code>|<code>dist = da + 4</code>', '<code>dist = 34</code>|<code>dist = 34</code>', '<code>dist = da</code>|<code>dist = da</code>'], a: 0,
          ex: "Amb da + 4, si les anelles canvien de mida, la distància també canvia.|Con da + 4, si las anillas cambian de tamaño, la distancia también cambia." },
        { k: 'quiz', ph: 'recorda', q: 'Si <code>n = 5</code>, quantes vegades es fa el que hi ha dins de <code>repeteix i de 1 a (n)</code>?|Si <code>n = 5</code>, ¿cuántas veces se hace lo que hay dentro de <code>repite i de 1 a (n)</code>?',
          opts: ['5 (i = 1, 2, 3, 4 i 5)|5 (i = 1, 2, 3, 4 y 5)', '4|4', '6|6'], a: 0, ex: 'Els dos extrems hi són inclosos.|Los dos extremos están incluidos.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: "El prototip que s'adapta|El prototipo que se adapta",
          t: "La mestra Sílvia ha passat per l'estudi: «M'agrada! Però la classe de P4 en voldria un de <b>3 pals</b>, i potser amb anelles més grans…» Si el programa és <b>paramètric</b>, no cal tornar a començar: canvies un número i surt el comptador nou. Avui farem el prototip complet amb <b>variables i mòduls</b> i en traurem el <b>.scad</b> i l'<b>STL</b>. I tu, el mateix amb el teu producte!|La maestra Sílvia ha pasado por el estudio: «¡Me gusta! Pero la clase de P4 querría uno de <b>3 palos</b>, y quizás con anillas más grandes…» Si el programa es <b>paramétrico</b>, no hace falta volver a empezar: cambias un número y sale el contador nuevo. Hoy haremos el prototipo completo con <b>variables y módulos</b> y sacaremos el <b>.scad</b> y el <b>STL</b>. ¡Y tú, lo mismo con tu producto!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: "L'estructura|La estructura", t: 'Especificacions, mòduls i muntatge|Especificaciones, módulos y montaje', anim: 'p82struct',
            x: "Un bon programa de producte es llegeix en tres parts: <b>1) especificacions</b>, les variables de la fitxa; <b>2) mòduls</b>, una recepta per a cada peça (<code>pal(k)</code>, <code>anella()</code>); <b>3) muntatge</b>, on es criden els mòduls i es col·loquen a la placa. Un comentari <code>//</code> diu què és cada part.|Un buen programa de producto se lee en tres partes: <b>1) especificaciones</b>, las variables de la ficha; <b>2) módulos</b>, una receta para cada pieza (<code>palo(k)</code>, <code>anilla()</code>); <b>3) montaje</b>, donde se llama a los módulos y se colocan en la placa. Un comentario <code>//</code> dice qué es cada parte." },
          { k: 'Mides que depenen|Medidas que dependen', t: "Una mida es calcula a partir d'una altra|Una medida se calcula a partir de otra", anim: 'p82deps',
            x: "Algunes mides no s'escriuen: <b>es calculen</b>. <code>dist = da + 4</code> (l'anella i l'aire), la base fa <code>n * dist</code> de llarg i el pal k fa <code>base + k * gruix + 2</code> d'alt. Si canvies <code>da</code>, canvia <code>dist</code> i, amb ella, la base i el lloc de cada pal.|Algunas medidas no se escriben: <b>se calculan</b>. <code>dist = da + 4</code> (la anilla y el aire), la base mide <code>n * dist</code> de largo y el palo k mide <code>base + k * grosor + 2</code> de alto. Si cambias <code>da</code>, cambia <code>dist</code> y, con ella, la base y el sitio de cada palo." },
          { k: 'Mòdul i bucle|Módulo y bucle', t: 'pal(k) dins de repeteix|palo(k) dentro de repite', media: { k: 'model', prog: LOOP1 },
            x: "El mòdul <code>pal(k)</code> fa un pal on caben k anelles. El bucle <code>repeteix i de 1 a (n)</code> el crida amb i = 1, 2, 3… i cada pal va al mig del seu tram: <code>i * dist - dist / 2</code>. Si el final del bucle és una variable, va entre parèntesis.|El módulo <code>palo(k)</code> hace un palo donde caben k anillas. El bucle <code>repite i de 1 a (n)</code> lo llama con i = 1, 2, 3… y cada palo va en el centro de su tramo: <code>i * dist - dist / 2</code>. Si el final del bucle es una variable, va entre paréntesis." },
          { k: 'La peça que encaixa|La pieza que encaja', t: "L'anella, amb tolerància|La anilla, con tolerancia", media: { k: 'model', prog: VFULL },
            x: "L'anella és un <code>resta</code>: un cilindre de <code>da</code> menys el forat de <code>dp + 2 * tol</code>. Amb <code>tol = 0.4</code> llisca sola pel pal (unitat 7). S'imprimeix plana, al costat de la base: per provar l'encaix, n'hi ha prou amb una.|La anilla es un <code>resta</code>: un cilindro de <code>da</code> menos el agujero de <code>dp + 2 * tol</code>. Con <code>tol = 0.4</code> desliza sola por el palo (unidad 7). Se imprime plana, al lado de la base: para probar el encaje, basta con una." },
          { k: 'Exportar|Exportar', t: "El .scad i l'STL|El .scad y el STL", anim: 'p82export',
            x: "El botó <b>.scad</b>, a dalt del codi, descarrega el programa per a <b>OpenSCAD</b>, el programa de disseny amb codi que fan servir enginyers i makers: hi pots continuar treballant. El botó <b>STL</b>, a sota de la vista, descarrega el sòlid en mil·límetres per al programa de laminat i la impressora.|El botón <b>.scad</b>, arriba del código, descarga el programa para <b>OpenSCAD</b>, el programa de diseño con código que usan ingenieros y makers: puedes seguir trabajando en él. El botón <b>STL</b>, debajo de la vista, descarga el sólido en milímetros para el programa de laminado y la impresora." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🗺️', title: 'El pla del programa|El plan del programa', t: "Amb la fitxa d'especificacions i un llapis, sense pantalla:|Con la ficha de especificaciones y un lápiz, sin pantalla:",
          steps: ['Fes tres columnes: Especificacions, Mòduls i Muntatge.|Haz tres columnas: Especificaciones, Módulos y Montaje.',
            "A Especificacions, escriu les variables de la fitxa amb el seu valor. Marca amb una fletxa les que es calculen a partir d'altres (com dist = da + 4).|En Especificaciones, escribe las variables de la ficha con su valor. Marca con una flecha las que se calculan a partir de otras (como dist = da + 4).",
            "A Mòduls, escriu una línia per peça: el nom i, entre parèntesis, el que pot canviar (pal(k), anella()…).|En Módulos, escribe una línea por pieza: el nombre y, entre paréntesis, lo que puede cambiar (palo(k), anilla()…).",
            "A Muntatge, escriu on va cada peça a la placa i si cal un bucle.|En Montaje, escribe dónde va cada pieza en la placa y si hace falta un bucle."],
          tip: "Si dues peces s'han de correspondre (un eix i un forat), fes que facin servir la mateixa variable.|Si dos piezas se tienen que corresponder (un eje y un agujero), haz que usen la misma variable." },
        { k: 'm3predict', ph: 'prova', text: true, tab: 'code', q: 'Llegeix el programa. <b>Quin comptador fa?</b>|Lee el programa. <b>¿Qué contador hace?</b>', prog: PRED,
          opts: [{ prog: PRED }, { prog: PRED_DEC }, { prog: PRED_EQ }, { prog: PRED_LEFT }], a: 0,
          ex: "El bucle crida pal(1), pal(2), pal(3) i pal(4): d'esquerra a dreta, cada pal fa 6 mm més.|El bucle llama a palo(1), palo(2), palo(3) y palo(4): de izquierda a derecha, cada palo mide 6 mm más." },
        { k: 'm3spot', ph: 'investiga', q: "El comptador té <b>un pal de més</b>, baixet i fora de la base. Toca la instrucció que falla.|El contador tiene <b>un palo de más</b>, bajito y fuera de la base. Toca la instrucción que falla.",
          prog: SPOT2, target: LOOP1,
          ex: "El bucle comença a i = 0: pal(0) fa només base + 2 mm i va a x = −dist / 2, fora de la base. Ha de començar a 1: repeteix i de 1 a (n).|El bucle empieza en i = 0: palo(0) mide solo base + 2 mm y va a x = −dist / 2, fuera de la base. Tiene que empezar en 1: repite i de 1 a (n)." },
        { k: 'move', ph: 'pausa', title: 'El bucle humà|El bucle humano', secs: 30, t: "En fileres de cinc! El primer aixeca 1 dit, el segon 2, el tercer 3… com els pals del comptador. Ara el professor/a diu «<b>n = 3</b>»: només els tres primers! I «<b>n = 5</b>»: tots cinc!|¡En filas de cinco! El primero levanta 1 dedo, el segundo 2, el tercero 3… como los palos del contador. Ahora el profesor/a dice «<b>n = 3</b>»: ¡solo los tres primeros! Y «<b>n = 5</b>»: ¡los cinco!" },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>El mòdul del pal.</b> Ara tots els pals fan 20 mm. Fes que <code>pal(k)</code> faci <code>base + k * gruix + 2</code> d'alt: hi han de cabre k anelles, i 2 mm més.|<b>El módulo del palo.</b> Ahora todos los palos miden 20 mm. Haz que <code>palo(k)</code> mida <code>base + k * grosor + 2</code> de alto: tienen que caber k anillas, y 2 mm más.",
          start: MOD0, blocks: ['var', 'cil', 'mou', 'def', 'call'], target: MOD1,
          checks: [{ k: 'part', t: 'cyl', hole: false, s: ['dp', 'dp', 'base + gruix + 2|base + grosor + 2'], at: ['dist / 2', 20, null], base: 0, tol: 0.05, txt: 'pal(1): hi cap 1 anella|palo(1): cabe 1 anilla' },
            { k: 'part', t: 'cyl', hole: false, s: ['dp', 'dp', 'base + 2 * gruix + 2|base + 2 * grosor + 2'], at: ['1.5 * dist', 20, null], base: 0, tol: 0.05, txt: 'pal(2): hi caben 2 anelles|palo(2): caben 2 anillas' },
            { k: 'param', v: 'gruix|grosor', vals: [5, 8], t: 'Funciona amb anelles de 5 i de 8 mm|Funciona con anillas de 5 y de 8 mm' }, { k: 'uses', b: 'def' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Dins de defineix pal(k), canvia el 20 per base + k * gruix + 2. k és el número que hi ha entre parèntesis quan el crides: pal(1), pal(2)…|Dentro de define palo(k), cambia el 20 por base + k * grosor + 2. k es el número que hay entre paréntesis cuando lo llamas: palo(1), palo(2)…",
          sol: MOD1 },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Tots els pals amb un bucle.</b> Canvia les dues crides per un <code>repeteix</code> que faci els <b>n</b> pals, cadascun al mig del seu tram: <code>mou(i * dist - dist / 2, 20, 0)</code>.|<b>Todos los palos con un bucle.</b> Cambia las dos llamadas por un <code>repite</code> que haga los <b>n</b> palos, cada uno en el centro de su tramo: <code>mueve(i * dist - dist / 2, 20, 0)</code>.",
          start: MOD1, blocks: ['var', 'cil', 'mou', 'rep', 'def', 'call'], target: LOOP1,
          checks: [{ k: 'count', t: 'cyl', hole: false, min: 'n', max: 'n', txt: 'n pals: ni un més ni un menys|n palos: ni uno más ni uno menos' }, LASTPEG, BASEX, { k: 'uses', b: 'rep' }, { k: 'param', v: 'n', vals: [3, 5], t: 'Funciona amb 3 i amb 5 pals|Funciona con 3 y con 5 palos' }, { k: 'onplate' }],
          hint: "Esborra les dues línies de pal i toca el fragment «repeteix»: canvia-hi el 0 per 1 i el 3 per (n). A dins, escriu mou(i * dist - dist / 2, 20, 0) pal(i).|Borra las dos líneas de palo y toca el fragmento «repite»: cambia el 0 por 1 y el 3 por (n). Dentro, escribe mueve(i * dist - dist / 2, 20, 0) palo(i).",
          sol: LOOP1 },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>L'anella de prova.</b> Fes-li el <b>forat</b> perquè llisqui pel pal: un <code>resta</code> amb un cilindre de <code>dp + 2 * tol</code> que travessi l'anella, de z = −1 fins a gruix + 1.|<b>La anilla de prueba.</b> Hazle el <b>agujero</b> para que deslice por el palo: un <code>resta</code> con un cilindro de <code>dp + 2 * tol</code> que atraviese la anilla, de z = −1 hasta grosor + 1.",
          start: RING0, blocks: ['var', 'cil', 'mou', 'resta', 'def', 'call'], target: VFULL,
          checks: [{ k: 'part', t: 'cyl', hole: true, s: ['dp + 2 * tol', 'dp + 2 * tol', 'gruix + 2|grosor + 2'], at: RINGAT, base: -1, tol: 0.05, txt: "El forat fa dp + 2 × tol i travessa l'anella|El agujero mide dp + 2 × tol y atraviesa la anilla" },
            { k: 'part', t: 'cyl', hole: false, s: ['da', 'da', 'gruix|grosor'], at: RINGAT, base: 0, tol: 0.05, txt: "L'anella continua fent da × gruix|La anilla sigue midiendo da × grosor" },
            { k: 'param', v: 'tol', vals: [0.3, 0.5], t: 'Funciona amb tol = 0,3 i 0,5|Funciona con tol = 0,3 y 0,5' }, { k: 'param', v: 'dp', vals: [8, 12], t: 'I amb pals de 8 i de 12 mm|Y con palos de 8 y de 12 mm' },
            { k: 'wall', min: 1.2, t: 'Cap paret de menys de 1,2 mm|Ninguna pared de menos de 1,2 mm' }, { k: 'onplate' }],
          hint: "Dins de defineix anella(), escriu resta { en una línia nova a sobre del cilindre. A sota del cilindre, afegeix mou(0, 0, -1) cilindre(dp + 2 * tol, gruix + 2) i, en una altra línia, }.|Dentro de define anilla(), escribe resta { en una línea nueva encima del cilindro. Debajo del cilindro, añade mueve(0, 0, -1) cilindro(dp + 2 * tol, grosor + 2) y, en otra línea, }.",
          sol: VFULL },
        { k: 'm3code', ph: 'repte', text: true, extra: true, q: "<b>⭐ El comptador muntat.</b> Per a la fitxa tècnica, posa les anelles al seu lloc: al pal i, <b>i anelles</b> una sobre l'altra, des de z = base. Fes servir dos bucles, un dins de l'altre.|<b>⭐ El contador montado.</b> Para la ficha técnica, pon las anillas en su sitio: en el palo i, <b>i anillas</b> una encima de otra, desde z = base. Usa dos bucles, uno dentro del otro.",
          start: VFULL, blocks: ['mou', 'rep', 'call', 'rem'], target: STACK,
          checks: [{ k: 'count', t: 'cyl', hole: true, min: 'n * (n + 1) / 2 + 1', max: 'n * (n + 1) / 2 + 1', txt: "1 + 2 + … + n anelles al seu lloc (i la de prova)|1 + 2 + … + n anillas en su sitio (y la de prueba)" },
            { k: 'part', t: 'cyl', hole: false, s: ['da', 'da', 'gruix|grosor'], at: ['n * dist - dist / 2', 20, null], base: 'base + (n - 1) * gruix|base + (n - 1) * grosor', tol: 0.05, txt: "L'última anella del pal n, a dalt de tot|La última anilla del palo n, arriba del todo" },
            { k: 'param', v: 'n', vals: [3, 4], t: 'Funciona amb 3 i amb 4 pals|Funciona con 3 y con 4 palos' }, { k: 'uses', b: 'rep' }],
          hint: "Al final: repeteix i de 1 a (n) { repeteix j de 1 a (i) { mou(i * dist - dist / 2, 20, base + (j - 1) * gruix) anella() } }.|Al final: repite i de 1 a (n) { repite j de 1 a (i) { mueve(i * dist - dist / 2, 20, base + (j - 1) * grosor) anilla() } }.",
          sol: STACK },
        { k: 'm3free', ph: 'crea', text: true, q: "<b>La v2: el teu prototip paramètric.</b> Organitza el programa en tres parts (especificacions, mòduls i muntatge), fes almenys un <b>mòdul</b> i descarrega'n el <b>.scad</b> i l'<b>STL</b>.|<b>La v2: tu prototipo paramétrico.</b> Organiza el programa en tres partes (especificaciones, módulos y montaje), haz al menos un <b>módulo</b> y descarga su <b>.scad</b> y su <b>STL</b>.",
          name: 'El meu producte (v2)|Mi producto (v2)', get start() { return mine(['p8-2', 'p8-1'], V1); }, blocks: BLF,
          crit: ['Tres parts amb un comentari cadascuna: especificacions, mòduls i muntatge|Tres partes con un comentario cada una: especificaciones, módulos y montaje', "Almenys un mòdul, i les mides que depenen d'altres es calculen|Al menos un módulo, y las medidas que dependen de otras se calculan", "Has descarregat el .scad i l'STL|Has descargado el .scad y el STL"],
          checks: [{ k: 'uses', b: 'var' }, { k: 'uses', b: 'def' }, { k: 'uses', b: 'call' }, { k: 'onplate' }, PLACA], sol: VFULL },
        { k: 'quiz', ph: 'tanca', q: "Per què el forat de l'anella es fa amb <code>dp + 2 * tol</code> i no amb un número?|¿Por qué el agujero de la anilla se hace con <code>dp + 2 * tol</code> y no con un número?",
          opts: ['Perquè si canvia el pal o la tolerància, el forat se n\'adapta sol|Porque si cambia el palo o la tolerancia, el agujero se adapta solo', 'Perquè els números no funcionen dins d\'un resta|Porque los números no funcionan dentro de un resta', 'Perquè el programa vagi més de pressa|Porque el programa vaya más deprisa'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Quin fitxer obres amb el programa de laminat per imprimir?|¿Qué archivo abres con el programa de laminado para imprimir?', opts: ["L'STL|El STL", 'El .scad|El .scad', 'Una captura de pantalla|Una captura de pantalla'], a: 0,
          ex: "L'STL és el sòlid fet de triangles, en mil·límetres. El .scad és el programa, per continuar-lo a OpenSCAD.|El STL es el sólido hecho de triángulos, en milímetros. El .scad es el programa, para continuarlo en OpenSCAD." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================== Sessió 3 · Proves i iteració =================================== */
    { id: 'p8-3', t: 'Proves i iteració|Pruebas e iteración', min: 45,
      learn: ["Un disseny paramètric es prova amb diversos valors, sobretot els extrems: el més petit i el més gran que acceptis.|Un diseño paramétrico se prueba con varios valores, sobre todo los extremos: el más pequeño y el más grande que aceptes.",
        "Els números escrits a mà fallen quan canvia un paràmetre; el que depèn d'una variable s'ha de calcular, i cada paràmetre té un rang.|Los números escritos a mano fallan cuando cambia un parámetro; lo que depende de una variable se tiene que calcular, y cada parámetro tiene un rango.",
        "La revisió d'un company/a amb rúbrica i un registre de canvis converteixen les proves en una versió millor.|La revisión de un compañero/a con rúbrica y un registro de cambios convierten las pruebas en una versión mejor."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Què comprova «<b>Funciona amb n = 3, 5</b>»?|¿Qué comprueba «<b>Funciona con n = 3, 5</b>»?',
          opts: ['Que amb n = 3 i amb n = 5 el model continua complint les altres comprovacions|Que con n = 3 y con n = 5 el modelo sigue cumpliendo las otras comprobaciones', 'Que el programa té 3 o 5 línies|Que el programa tiene 3 o 5 líneas', 'Que ara mateix n val 3 o 5|Que ahora mismo n vale 3 o 5'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'La mestra vol anelles de <b>26 mm</b>. Al programa del comptador, què canvies?|La maestra quiere anillas de <b>26 mm</b>. En el programa del contador, ¿qué cambias?',
          opts: ['Només da = 26|Solo da = 26', 'El mòdul del pal|El módulo del palo', 'La posició de cada pal, una a una|La posición de cada palo, una a una'], a: 0,
          ex: "Si dist es calcula amb da i les posicions amb dist, tota la resta s'adapta sola… si no hi ha cap número escrit a mà!|Si dist se calcula con da y las posiciones con dist, todo lo demás se adapta solo… ¡si no hay ningún número escrito a mano!" },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'El banc de proves|El banco de pruebas',
          t: "La Nuvi ha imprès la <b>peça de prova</b>: un pal i una anella. Llisca! Però en Bit ha provat el programa amb altres valors i… amb 3 pals, la base és massa llarga, i amb anelles de 26 mm, els pals no queden al mig. Avui farem el que fan els enginyers abans d'entregar un producte: <b>provar-lo amb diversos paràmetres</b>, demanar una <b>revisió</b> a un company/a i fer la <b>versió 3</b>.|Nuvi ha impreso la <b>pieza de prueba</b>: un palo y una anilla. ¡Desliza! Pero Bit ha probado el programa con otros valores y… con 3 palos, la base es demasiado larga, y con anillas de 26 mm, los palos no quedan en el centro. Hoy haremos lo que hacen los ingenieros antes de entregar un producto: <b>probarlo con varios parámetros</b>, pedir una <b>revisión</b> a un compañero/a y hacer la <b>versión 3</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Provar amb valors|Probar con valores', t: 'Els extrems, primer|Los extremos, primero', anim: 'p83test',
            x: "Un disseny és paramètric de veritat si funciona amb <b>tots</b> els valors que acceptes. Prova'l amb el <b>més petit</b>, el <b>més gran</b> i un del mig (n = 3, 4 i 5). Al taller, la comprovació <b>«Funciona amb…»</b> ho fa sola: canvia el valor i torna a mirar totes les altres comprovacions.|Un diseño es paramétrico de verdad si funciona con <b>todos</b> los valores que aceptas. Pruébalo con el <b>más pequeño</b>, el <b>más grande</b> y uno del medio (n = 3, 4 y 5). En el taller, la comprobación <b>«Funciona con…»</b> lo hace sola: cambia el valor y vuelve a mirar todas las otras comprobaciones." },
          { k: 'Números a mà|Números a mano', t: 'El que falla quan canvia un paràmetre|Lo que falla cuando cambia un parámetro', media: { k: 'model', prog: HARD3 },
            x: "Aquí n = 3, però la base continua fent <b>170 mm</b>: algú hi va escriure el número a mà (amb n = 5 semblava perfecte!). Busca els números que haurien de ser un càlcul: llargades, posicions i forats.|Aquí n = 3, pero la base sigue midiendo <b>170 mm</b>: alguien escribió el número a mano (¡con n = 5 parecía perfecto!). Busca los números que tendrían que ser un cálculo: largos, posiciones y agujeros." },
          { k: 'El rang|El rango', t: 'Fins on funciona?|¿Hasta dónde funciona?', anim: 'p83range',
            x: "Tot paràmetre té un <b>rang</b>: amb dist = 34, la base fa 34 × n, i amb n = 6 (204 mm) ja no cap a la placa. Si el pal es fa molt gruixut, la paret de l'anella s'aprima: <code>max(30, dp + 2 * tol + 8)</code> fa l'anella més gran quan cal. El rang provat va a la fitxa tècnica.|Todo parámetro tiene un <b>rango</b>: con dist = 34, la base mide 34 × n, y con n = 6 (204 mm) ya no cabe en la placa. Si el palo se hace muy grueso, la pared de la anilla se adelgaza: <code>max(30, dp + 2 * tol + 8)</code> hace la anilla más grande cuando hace falta. El rango probado va en la ficha técnica." },
          { k: 'La revisió per parelles|La revisión por parejas', t: 'Rúbrica, dues estrelles i un desig|Rúbrica, dos estrellas y un deseo', anim: 'p83review',
            x: "El revisor/a mira el teu producte a la teva pantalla, <b>sense tocar-lo</b>, i omple la rúbrica: respon a l'encàrrec, és paramètric, es pot imprimir i el codi s'entén. Després, <b>dues estrelles</b> i <b>un desig</b> concret, amb números si pot.|El revisor/a mira tu producto en tu pantalla, <b>sin tocarlo</b>, y rellena la rúbrica: responde al encargo, es paramétrico, se puede imprimir y el código se entiende. Después, <b>dos estrellas</b> y <b>un deseo</b> concreto, con números si puede.",
            bad: "«Està bé.»|«Está bien.»", good: "«Funciona amb n = 3. Desig: fes el forat amb d + 2 * tol.»|«Funciona con n = 3. Deseo: haz el agujero con d + 2 * tol.»" },
          { k: 'Iterar|Iterar', t: 'v2 → proves → v3|v2 → pruebas → v3', anim: 'p83iter',
            x: "Cada prova que falla és una pista. Apunta-ho en un <b>registre de canvis</b>: què has provat, què ha fallat i què has canviat. Al programa, n'hi ha prou amb un comentari a dalt: <code>// v3: base amb n * dist; anella amb max</code>.|Cada prueba que falla es una pista. Apúntalo en un <b>registro de cambios</b>: qué has probado, qué ha fallado y qué has cambiado. En el programa, basta con un comentario arriba: <code>// v3: base con n * dist; anilla con max</code>." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🧪', title: 'La taula de proves|La tabla de pruebas', t: 'Per parelles, amb la fitxa i un llapis (i una calculadora, si cal):|Por parejas, con la ficha y un lápiz (y una calculadora, si hace falta):',
          steps: ['Copieu la taula: n · dist · llarg de la base (n × dist) · cap a la placa?|Copiad la tabla: n · dist · largo de la base (n × dist) · ¿cabe en la placa?',
            "Ompliu-la per al comptador, amb dist = 34 i n = 1, 3, 5 i 6.|Rellenadla para el contador, con dist = 34 y n = 1, 3, 5 y 6.",
            "Feu-ne una per al vostre producte, amb tres valors de la variable principal: el més petit, un del mig i el més gran.|Haced una para vuestro producto, con tres valores de la variable principal: el más pequeño, uno del medio y el más grande.",
            'Encercleu el valor on deixa de funcionar: és el límit del rang.|Rodead el valor donde deja de funcionar: es el límite del rango.'],
          tip: "Si un valor no funciona, no passa res: s'escriu el rang a la fitxa tècnica («de 1 a 5 pals»).|Si un valor no funciona, no pasa nada: se escribe el rango en la ficha técnica («de 1 a 5 palos»)." },
        { k: 'quiz', ph: 'prova', q: 'Amb <code>dist = 34</code>, fins a quants pals cap la base a la placa de 180 mm?|Con <code>dist = 34</code>, ¿hasta cuántos palos cabe la base en la placa de 180 mm?', opts: ['5 (170 mm)|5 (170 mm)', '6 (204 mm)|6 (204 mm)', '10|10'], a: 0,
          ex: '5 × 34 = 170 hi cap; 6 × 34 = 204 ja no. El rang de n és de 1 a 5.|5 × 34 = 170 cabe; 6 × 34 = 204 ya no. El rango de n es de 1 a 5.' },
        { k: 'm3spot', ph: 'investiga', q: "La mestra vol pals de <b>12 mm</b>. La Nuvi ha imprès les anelles i <b>no hi entren</b>. Toca la instrucció amb un número escrit a mà.|La maestra quiere palos de <b>12 mm</b>. Nuvi ha impreso las anillas y <b>no entran</b>. Toca la instrucción con un número escrito a mano.",
          prog: SPOT3, target: SPOT3T,
          ex: "10,8 mm era el forat per a pals de 10 mm (10 + 2 × 0,4). Amb dp + 2 * tol, el forat creix amb el pal: 12,8 mm.|10,8 mm era el agujero para palos de 10 mm (10 + 2 × 0,4). Con dp + 2 * tol, el agujero crece con el palo: 12,8 mm." },
        { k: 'move', ph: 'pausa', title: 'Ets la base|Eres la base', secs: 30, t: "Estira els braços: ets la base del comptador. El professor/a diu «<b>n = 3</b>, <b>n = 4</b>, <b>n = 5</b>…» i a cada número t'estires una mica més. Quan digui «<b>n = 6</b>», ja no caps a la placa: ajup-te ràpid!|Estira los brazos: eres la base del contador. El profesor/a dice «<b>n = 3</b>, <b>n = 4</b>, <b>n = 5</b>…» y en cada número te estiras un poco más. Cuando diga «<b>n = 6</b>», ya no cabes en la placa: ¡agáchate rápido!" },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Prova 1 · El nombre de pals.</b> Amb n = 5 tot sembla bé, però la base té el llarg <b>escrit a mà</b>. Fes que funcioni amb <b>3, 4 i 5</b> pals.|<b>Prueba 1 · El número de palos.</b> Con n = 5 todo parece bien, pero la base tiene el largo <b>escrito a mano</b>. Haz que funcione con <b>3, 4 y 5</b> palos.",
          start: T1S, blocks: ['var', 'arrod', 'mou', 'rep', 'call'], target: VFULL,
          checks: [BASEX, LASTPEG, { k: 'param', v: 'n', vals: [3, 4, 5], t: 'Funciona amb 3, 4 i 5 pals|Funciona con 3, 4 y 5 palos' }, { k: 'param', v: 'da', vals: [26, 30], t: 'I amb anelles de 26 i de 30 mm|Y con anillas de 26 y de 30 mm' }, { k: 'onplate' }],
          hint: 'A la línia de la base, canvia el 170 per n * dist.|En la línea de la base, cambia el 170 por n * dist.', sol: VFULL },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Prova 2 · La mida de les anelles.</b> Amb da = 26 o 34, els pals ja no queden al mig del seu tram: les posicions són <b>números a mà</b>. Fes que funcioni amb anelles de 26, 30 i 34 mm.|<b>Prueba 2 · El tamaño de las anillas.</b> Con da = 26 o 34, los palos ya no quedan en el centro de su tramo: las posiciones son <b>números a mano</b>. Haz que funcione con anillas de 26, 30 y 34 mm.",
          start: T2S, blocks: ['var', 'arrod', 'mou', 'rep', 'call'], target: VFULL,
          checks: [{ k: 'part', t: 'cyl', hole: false, s: ['dp', 'dp', 'base + gruix + 2|base + grosor + 2'], at: ['dist / 2', 20, null], base: 0, tol: 0.05, txt: 'El primer pal, al mig del primer tram|El primer palo, en el centro del primer tramo' }, LASTPEG, BASEX,
            { k: 'param', v: 'da', vals: [26, 30, 34], t: 'Funciona amb anelles de 26, 30 i 34 mm|Funciona con anillas de 26, 30 y 34 mm' }, { k: 'onplate' }],
          hint: 'Al bucle, canvia mou(i * 34 - 17, 20, 0) per mou(i * dist - dist / 2, 20, 0).|En el bucle, cambia mueve(i * 34 - 17, 20, 0) por mueve(i * dist - dist / 2, 20, 0).', sol: VFULL },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Prova 3 · Pals gruixuts.</b> Amb pals de 28 mm, a l'anella de 30 només li queden 0,6 mm de paret! Requisit: paret d'almenys <b>4 mm</b>. Fes que l'anella creixi quan calgui: <code>da = max(30, dp + 2 * tol + 8)</code>.|<b>Prueba 3 · Palos gruesos.</b> ¡Con palos de 28 mm, a la anilla de 30 solo le quedan 0,6 mm de pared! Requisito: pared de al menos <b>4 mm</b>. Haz que la anilla crezca cuando haga falta: <code>da = max(30, dp + 2 * tol + 8)</code>.",
          start: VFULL, blocks: ['var', 'cil', 'mou', 'resta', 'def'], target: T3SOL,
          checks: [{ k: 'part', t: 'cyl', hole: false, s: ['max(30, dp + 2 * tol + 8)', 'max(30, dp + 2 * tol + 8)', 'gruix|grosor'], at: RINGAT, base: 0, tol: 0.05, txt: "L'anella fa 30 mm o el forat + 8 mm, el que sigui més gran|La anilla mide 30 mm o el agujero + 8 mm, lo que sea más grande" },
            { k: 'part', t: 'cyl', hole: true, s: ['dp + 2 * tol', 'dp + 2 * tol', 'gruix + 2|grosor + 2'], at: RINGAT, tol: 0.05, txt: 'El forat continua fent dp + 2 × tol|El agujero sigue midiendo dp + 2 × tol' },
            { k: 'param', v: 'dp', vals: [10, 20, 28], t: 'Funciona amb pals de 10, 20 i 28 mm|Funciona con palos de 10, 20 y 28 mm' }, { k: 'wall', min: 1.2, t: 'Cap paret de menys de 1,2 mm|Ninguna pared de menos de 1,2 mm' }, { k: 'onplate' }],
          hint: "Canvia la línia da = 30 per da = max(30, dp + 2 * tol + 8). max tria el més gran dels dos: 30 mm o el forat més 4 mm de paret a cada costat.|Cambia la línea da = 30 por da = max(30, dp + 2 * tol + 8). max elige el más grande de los dos: 30 mm o el agujero más 4 mm de pared a cada lado.",
          sol: T3SOL },
        { k: 'unplug', ph: 'crea', ico: '🔍', title: 'La revisió per parelles|La revisión por parejas', t: "Al pas següent tindràs el teu producte. Quan funcioni amb diversos valors, deixa'l a la pantalla i, per parelles:|En el paso siguiente tendrás tu producto. Cuando funcione con varios valores, déjalo en la pantalla y, por parejas:",
          steps: ["Seu a l'ordinador del company/a. Llegeix la seva fitxa i mira el producte de tots els costats, sense tocar-lo.|Siéntate en el ordenador del compañero/a. Lee su ficha y mira el producto desde todos los lados, sin tocarlo.",
            "Demana-li que canviï la variable principal (el valor més petit i el més gran): continua funcionant?|Pídele que cambie la variable principal (el valor más pequeño y el más grande): ¿sigue funcionando?",
            'Omple la rúbrica i escriu dues estrelles i un desig amb números.|Rellena la rúbrica y escribe dos estrellas y un deseo con números.',
            'Torna al teu lloc, llegeix la rúbrica i apunta al registre de canvis què milloraràs.|Vuelve a tu sitio, lee la rúbrica y apunta en el registro de cambios qué mejorarás.'],
          tip: "Parla del producte, no de la persona: «la base no canvia amb n», no «ho has fet malament».|Habla del producto, no de la persona: «la base no cambia con n», no «lo has hecho mal»." },
        { k: 'm3free', ph: 'crea', text: true, q: "<b>La v3: provada i millorada.</b> Prova el teu producte amb tres valors de la variable principal, aplica el desig de la revisió i escriu el registre de canvis en un comentari. Després, desa-la.|<b>La v3: probada y mejorada.</b> Prueba tu producto con tres valores de la variable principal, aplica el deseo de la revisión y escribe el registro de cambios en un comentario. Después, guárdala.",
          name: 'El meu producte (v3)|Mi producto (v3)', get start() { return mine(['p8-3', 'p8-2', 'p8-1'], VFULL); }, blocks: BLF,
          crit: ['Funciona amb el valor més petit, un del mig i el més gran de la variable principal|Funciona con el valor más pequeño, uno del medio y el más grande de la variable principal', 'Has aplicat almenys un desig de la revisió|Has aplicado al menos un deseo de la revisión', 'Un comentari a dalt diu què ha canviat a la v3|Un comentario arriba dice qué ha cambiado en la v3'],
          checks: [{ k: 'uses', b: 'var' }, { k: 'uses', b: 'def' }, { k: 'onplate' }, { k: 'wall', min: 1.2, t: 'Cap paret de menys de 1,2 mm|Ninguna pared de menos de 1,2 mm' }, PLACA], sol: VFIN },
        { k: 'review', ph: 'crea', btn: 'Desa la revisió|Guarda la revisión', q: "<b>Què han dit les proves i el teu revisor/a?</b> Apunta-ho: ho necessitaràs per a la fitxa tècnica.|<b>¿Qué han dicho las pruebas y tu revisor/a?</b> Apúntalo: lo necesitarás para la ficha técnica.",
          items: [
            { q: 'Amb quants valors has provat la variable principal?|¿Con cuántos valores has probado la variable principal?', opts: ['Tres o més|Tres o más', 'Dos|Dos', 'Un|Uno'] },
            { q: 'Quina prova ha fallat primer?|¿Qué prueba ha fallado primero?', opts: ['Un número escrit a mà|Un número escrito a mano', 'No cabia a la placa|No cabía en la placa', 'Una paret massa prima|Una pared demasiado fina', 'Un encaix sense tolerància|Un encaje sin tolerancia', 'Cap: totes a la primera|Ninguna: todas a la primera'] },
            { q: 'De què parlava el desig del teu revisor/a?|¿De qué hablaba el deseo de tu revisor/a?', opts: ["De l'encàrrec: el que necessita el client|Del encargo: lo que necesita el cliente", 'Dels paràmetres i les proves|De los parámetros y las pruebas', 'De la impressió: placa, parets o suports|De la impresión: placa, paredes o soportes', 'Del codi: noms i comentaris|Del código: nombres y comentarios'] },
            { q: "L'has aplicat a la v3?|¿Lo has aplicado en la v3?", opts: ['Sí|Sí', 'Una part|Una parte', 'No: he decidit que no calia|No: he decidido que no hacía falta'] }] },
        { k: 'quiz', ph: 'tanca', q: 'Per què es prova un disseny amb el valor <b>més petit</b> i el <b>més gran</b>?|¿Por qué se prueba un diseño con el valor <b>más pequeño</b> y el <b>más grande</b>?',
          opts: ['Perquè és on solen aparèixer els problemes: no cap, paret prima, peces que xoquen|Porque es donde suelen aparecer los problemas: no cabe, pared fina, piezas que chocan', 'Perquè els valors del mig no funcionen mai|Porque los valores del medio no funcionan nunca', 'Perquè el programa ho demana|Porque el programa lo pide'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Què ha de tenir un bon <b>desig</b> en una revisió?|¿Qué tiene que tener un buen <b>deseo</b> en una revisión?',
          opts: ['Una millora concreta, amb números si pot, dita amb amabilitat|Una mejora concreta, con números si puede, dicha con amabilidad', 'Una opinió general: «millora-ho»|Una opinión general: «mejóralo»', 'Una comparació amb el teu producte|Una comparación con tu producto'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================== Sessió 4 · Presentació i diploma =================================== */
    { id: 'p8-4', t: 'Presentació i diploma|Presentación y diploma', min: 45, proj: true, badge: 'p84_producte',
      learn: ["La fitxa tècnica resumeix el producte: per a qui és, les mides, els paràmetres amb el rang provat, com s'imprimeix i per què s'ha decidit cada cosa.|La ficha técnica resume el producto: para quién es, las medidas, los parámetros con el rango probado, cómo se imprime y por qué se ha decidido cada cosa.",
        "Una bona presentació explica el problema, ensenya el producte, en canvia un paràmetre en directe i diu què s'ha millorat amb les proves.|Una buena presentación explica el problema, enseña el producto, cambia un parámetro en directo y dice qué se ha mejorado con las pruebas.",
        "Ja saps fer tot el camí d'un producte: encàrrec, especificacions, prototip paramètric, proves, fabricació i presentació.|Ya sabes hacer todo el camino de un producto: encargo, especificaciones, prototipo paramétrico, pruebas, fabricación y presentación."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Què és el <b>rang</b> d\'un paràmetre?|¿Qué es el <b>rango</b> de un parámetro?',
          opts: ["Els valors amb què l'has provat i funciona (per exemple, n de 1 a 5)|Los valores con los que lo has probado y funciona (por ejemplo, n de 1 a 5)", 'El valor que té ara|El valor que tiene ahora', 'El nom de la variable|El nombre de la variable'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', mood: 'dance', title: "S'obre la Fira de producte!|¡Se abre la Feria de producto!",
          t: "Estands, clients i famílies: avui s'obre la <b>Fira de producte</b>! La mestra Sílvia ha vingut a veure el seu comptador, i la biblioteca, la consergeria i el casal també busquen els seus. Cada enginyer/a presentarà el seu producte amb la <b>fitxa tècnica</b> i en canviarà un paràmetre en directe. I, al final, en Bit té una sorpresa: el <b>diploma</b> del Nivell 2!|Estands, clientes y familias: ¡hoy se abre la <b>Feria de producto</b>! La maestra Sílvia ha venido a ver su contador, y la biblioteca, la conserjería y el centro de mayores también buscan los suyos. Cada ingeniero/a presentará su producto con la <b>ficha técnica</b> y cambiará un parámetro en directo. Y, al final, Bit tiene una sorpresa: ¡el <b>diploma</b> del Nivel 2!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El viatge|El viaje', t: 'Vuit unitats, un enginyer/a|Ocho unidades, un ingeniero/a', anim: 'p84road',
            x: "Vas començar escrivint la recepta d'un cub. Després van venir les <b>transformacions</b>, les <b>booleanes</b>, les <b>variables</b>, els <b>bucles</b>, els <b>mòduls</b> i l'<b>enginyeria</b>: encaixos, toleràncies i voladissos. Ara tot això és dins d'un producte teu, per a un client de veritat.|Empezaste escribiendo la receta de un cubo. Después llegaron las <b>transformaciones</b>, las <b>booleanas</b>, las <b>variables</b>, los <b>bucles</b>, los <b>módulos</b> y la <b>ingeniería</b>: encajes, tolerancias y voladizos. Ahora todo eso está dentro de un producto tuyo, para un cliente de verdad." },
          { k: 'La fitxa tècnica|La ficha técnica', t: 'El que el client ha de saber|Lo que el cliente tiene que saber', media: { k: 'model', prog: VFIN },
            x: "Hi ha el <b>nom</b> i <b>per a qui</b> és, les <b>mides</b> totals (el regle de la vista), els <b>paràmetres</b> amb el <b>rang provat</b> (n de 1 a 5), com s'<b>imprimeix</b> i les <b>decisions</b>: per què 4 mm d'aire, per què tol = 0,4…|Están el <b>nombre</b> y <b>para quién</b> es, las <b>medidas</b> totales (la regla de la vista), los <b>parámetros</b> con el <b>rango probado</b> (n de 1 a 5), cómo se <b>imprime</b> y las <b>decisiones</b>: por qué 4 mm de aire, por qué tol = 0,4…" },
          { k: 'Del codi a la peça|Del código a la pieza', t: 'STL, laminat i impressora|STL, laminado e impresora', anim: 'p84print',
            x: "Descarrega l'<b>STL</b> i obre'l a <b>Tinkercad</b> («Importa») o en un programa de <b>laminat</b> com Ultimaker Cura o PrusaSlicer. Capes de <b>0,2 mm</b>, farciment del 15-20 %, la cara plana més gran a la placa i <b>sense suports</b>. Imprimeix primer una <b>peça de prova</b> de l'encaix i, si cal, ajusta <code>tol</code>.|Descarga el <b>STL</b> y ábrelo en <b>Tinkercad</b> («Importar») o en un programa de <b>laminado</b> como Ultimaker Cura o PrusaSlicer. Capas de <b>0,2 mm</b>, relleno del 15-20 %, la cara plana más grande en la placa y <b>sin soportes</b>. Imprime primero una <b>pieza de prueba</b> del encaje y, si hace falta, ajusta <code>tol</code>.",
            tip: "A Tinkercad, amb menys de 14 anys, entreu des de la classe del professor/a.|En Tinkercad, con menos de 14 años, entrad desde la clase del profesor/a." },
          { k: 'Presentar|Presentar', t: 'Cinc parts, dos minuts|Cinco partes, dos minutos', anim: 'p84pitch',
            x: "<b>1)</b> El <b>client</b> i el problema. <b>2)</b> El <b>producte</b>: la millor vista i les mides. <b>3)</b> La <b>demostració paramètrica</b>: canvia un valor en directe. <b>4)</b> Les <b>proves</b> i què has millorat. <b>5)</b> Una <b>pregunta</b> al públic.|<b>1)</b> El <b>cliente</b> y el problema. <b>2)</b> El <b>producto</b>: la mejor vista y las medidas. <b>3)</b> La <b>demostración paramétrica</b>: cambia un valor en directo. <b>4)</b> Las <b>pruebas</b> y qué has mejorado. <b>5)</b> Una <b>pregunta</b> al público.",
            bad: 'Llegir el codi línia a línia.|Leer el código línea a línea.', good: 'Canviar n = 3 → 5 i que el públic ho vegi.|Cambiar n = 3 → 5 y que el público lo vea.' }
        ] },
        { k: 'seq', ph: 'mans', q: 'Prepara la presentació. <b>Ordena les parts</b>, de la primera a l\'última.|Prepara la presentación. <b>Ordena las partes</b>, de la primera a la última.',
          items: ['Presento el client i el problema que resol|Presento el cliente y el problema que resuelve', 'Ensenyo el producte de la millor vista i en dic les mides|Enseño el producto desde la mejor vista y digo sus medidas', "Canvio un paràmetre en directe: el producte s'adapta|Cambio un parámetro en directo: el producto se adapta", 'Explico les proves i què he millorat amb la revisió|Explico las pruebas y qué he mejorado con la revisión', 'Pregunto al públic què hi canviaria|Pregunto al público qué le cambiaría'],
          ex: "Primer, que el públic entengui per a qui és i quin problema resol; al final, què has après provant-lo i què en pensen.|Primero, que el público entienda para quién es y qué problema resuelve; al final, qué has aprendido probándolo y qué opinan." },
        { k: 'quiz', ph: 'prova', q: '<b>Repàs del curs.</b> Quin programa fa un forat de 6 mm que travessa una placa de 3 mm?|<b>Repaso del curso.</b> ¿Qué programa hace un agujero de 6 mm que atraviesa una placa de 3 mm?',
          opts: ['<code>resta { cub(30, 30, 3)  mou(15, 15, -1) cilindre(6, 5) }</code>|<code>resta { cubo(30, 30, 3)  mueve(15, 15, -1) cilindro(6, 5) }</code>', '<code>uneix { cub(30, 30, 3)  mou(15, 15, 0) cilindre(6, 3) }</code>|<code>une { cubo(30, 30, 3)  mueve(15, 15, 0) cilindro(6, 3) }</code>', '<code>resta { mou(15, 15, -1) cilindre(6, 5)  cub(30, 30, 3) }</code>|<code>resta { mueve(15, 15, -1) cilindro(6, 5)  cubo(30, 30, 3) }</code>'], a: 0,
          ex: "Dins d'un resta, el primer és el que queda; el cilindre sobresurt 1 mm per dalt i per baix i travessa segur.|Dentro de un resta, el primero es el que queda; el cilindro sobresale 1 mm por arriba y por abajo y atraviesa seguro." },
        { k: 'quiz', ph: 'prova', q: '<b>Repàs.</b> <code>gira(0, 0, 90) mou(20, 0, 0) cub(10)</code> i <code>mou(20, 0, 0) gira(0, 0, 90) cub(10)</code>: fan el mateix?|<b>Repaso.</b> <code>gira(0, 0, 90) mueve(20, 0, 0) cubo(10)</code> y <code>mueve(20, 0, 0) gira(0, 0, 90) cubo(10)</code>: ¿hacen lo mismo?',
          opts: ["No: si gires després de moure, el cub gira al voltant de l'origen i acaba en un altre lloc|No: si giras después de mover, el cubo gira alrededor del origen y acaba en otro sitio", 'Sí, sempre|Sí, siempre', 'Només si el cub és centrat|Solo si el cubo es centrado'], a: 0,
          ex: "L'ordre importa (unitat 2): el primer programa porta el cub a x = 20 i el gira 90° al voltant de l'origen, de manera que acaba a y = 20.|El orden importa (unidad 2): el primer programa lleva el cubo a x = 20 y lo gira 90° alrededor del origen, de manera que acaba en y = 20." },
        { k: 'm3predict', ph: 'investiga', text: true, tab: 'code', q: "<b>Demostració paramètrica.</b> La mestra vol el comptador de <b>4 pals</b>. Amb <code>n = 4</code>, quin model surt?|<b>Demostración paramétrica.</b> La maestra quiere el contador de <b>4 palos</b>. Con <code>n = 4</code>, ¿qué modelo sale?", prog: VFIN4,
          opts: [{ prog: VFIN4 }, { prog: VFIN }, { prog: EQ4 }], a: 0,
          ex: "La base fa 4 × 34 = 136 mm i el bucle fa 4 pals, d'1 a 4 anelles: tot s'adapta sol.|La base mide 4 × 34 = 136 mm y el bucle hace 4 palos, de 1 a 4 anillas: todo se adapta solo." },
        { k: 'move', ph: 'pausa', title: "Assaig d'estand|Ensayo de estand", secs: 30, t: "Posa't dret/a com si fossis al teu estand. Saluda els clients, ensenya el producte amb les dues mans i fes-lo girar a poc a poc. Ara fes veure que canvies un paràmetre: «I amb n = 3…» I fes una reverència!|Ponte de pie como si estuvieras en tu estand. Saluda a los clientes, enseña el producto con las dos manos y hazlo girar poco a poco. Ahora haz como si cambiaras un parámetro: «Y con n = 3…» ¡Y haz una reverencia!" },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>La família del comptador.</b> Tot el comptador ja és un mòdul, <code>comptador(n)</code>. Per a l'estand, fes-ne tres: de <b>3 pals</b> a y = 0, de <b>4</b> a y = 60 i de <b>5</b> a y = 120.|<b>La familia del contador.</b> Todo el contador ya es un módulo, <code>contador(n)</code>. Para el estand, haz tres: de <b>3 palos</b> en y = 0, de <b>4</b> en y = 60 y de <b>5</b> en y = 120.",
          start: FAM0, blocks: ['mou', 'call', 'def', 'rep'], target: FAM,
          checks: [{ k: 'part', t: 'rbox', s: [102, 40, 4], at: [51, 20, null], tol: 0.1, txt: 'El comptador de 3 pals, a y = 0|El contador de 3 palos, en y = 0' }, { k: 'part', t: 'rbox', s: [136, 40, 4], at: [68, 80, null], tol: 0.1, txt: 'El de 4 pals, a y = 60|El de 4 palos, en y = 60' },
            { k: 'part', t: 'rbox', s: [170, 40, 4], at: [85, 140, null], tol: 0.1, txt: 'El de 5 pals, a y = 120|El de 5 palos, en y = 120' }, { k: 'count', t: 'cyl', min: 12, max: 12, txt: '3 + 4 + 5 = 12 pals|3 + 4 + 5 = 12 palos' }, { k: 'uses', b: 'call' }, PLACA],
          hint: "Canvia comptador(5) per comptador(3). A sota, afegeix mou(0, 60, 0) comptador(4) i mou(0, 120, 0) comptador(5).|Cambia contador(5) por contador(3). Debajo, añade mueve(0, 60, 0) contador(4) y mueve(0, 120, 0) contador(5).",
          sol: FAM },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>El rètol de l'estand.</b> El nom ha quedat enterrat dins de la placa. Posa'l <b>a sobre</b> (z = placa) i fes un <b>forat de 6 mm</b> per penjar el rètol, centrat a (8, 15), que travessi la placa.|<b>El letrero del estand.</b> El nombre ha quedado enterrado dentro de la placa. Ponlo <b>encima</b> (z = placa) y haz un <b>agujero de 6 mm</b> para colgar el letrero, centrado en (8, 15), que atraviese la placa.",
          start: SIGN0, blocks: ['var', 'arrod', 'text', 'cil', 'mou', 'resta', 'rem'], target: SIGN,
          checks: [{ k: 'part', t: 'text', base: 'placa', tol: 0.05, txt: 'El nom és a sobre de la placa|El nombre está encima de la placa' }, { k: 'part', t: 'cyl', hole: true, s: [6, 6, 'placa + 2'], at: [8, 15, null], tol: 0.05, txt: 'Forat de 6 mm per penjar-lo, a (8, 15)|Agujero de 6 mm para colgarlo, en (8, 15)' },
            { k: 'param', v: 'placa', vals: [2, 4], t: 'Funciona amb plaques de 2 i de 4 mm|Funciona con placas de 2 y de 4 mm' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Al mou del text, canvia la z (0) per placa. Després, escriu resta { en una línia nova a sobre de l'arrodonit; a sota, mou(8, 15, -1) cilindre(6, placa + 2) i, en una altra línia, }.|En el mueve del texto, cambia la z (0) por placa. Después, escribe resta { en una línea nueva encima del redondeado; debajo, mueve(8, 15, -1) cilindro(6, placa + 2) y, en otra línea, }.",
          sol: SIGN },
        { k: 'm3code', ph: 'repte', text: true, extra: true, q: "<b>⭐ La medalla de la fira.</b> Cada estand en rep una. Posa <b>n</b> boletes al voltant amb un bucle: <code>gira(0, 0, i * 360 / n) mou(12, 0, 4) esfera(6)</code>.|<b>⭐ La medalla de la feria.</b> Cada estand recibe una. Pon <b>n</b> bolitas alrededor con un bucle: <code>gira(0, 0, i * 360 / n) mueve(12, 0, 4) esfera(6)</code>.",
          start: MED0, blocks: ['var', 'cil', 'esf', 'mou', 'gira', 'rep', 'resta'], target: MED,
          checks: [{ k: 'count', t: 'sph', min: 'n', max: 'n', txt: 'n boletes|n bolitas' }, { k: 'part', t: 'sph', s: [6, 6, 6], at: [-12, 0, null], tol: 0.1, txt: "Boletes repartides en cercle (n'hi ha una a l'esquerra)|Bolitas repartidas en círculo (hay una a la izquierda)" }, { k: 'part', t: 'cyl', hole: true, s: [5, 5, 6], at: [0, 19, null], tol: 0.05, txt: 'El forat per a la cinta|El agujero para la cinta' }, { k: 'uses', b: 'rep' },
            { k: 'param', v: 'n', vals: [6, 10], t: 'Funciona amb 6 i amb 10 boletes|Funciona con 6 y con 10 bolitas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Canvia la línia de la boleta per repeteix i de 1 a (n) { gira(0, 0, i * 360 / n) mou(12, 0, 4) esfera(6) }.|Cambia la línea de la bolita por repite i de 1 a (n) { gira(0, 0, i * 360 / n) mueve(12, 0, 4) esfera(6) }.",
          sol: MED },
        { k: 'unplug', ph: 'crea', ico: '🎤', title: "La fitxa tècnica i l'assaig|La ficha técnica y el ensayo", t: 'Amb la fitxa tècnica (o un full) i un company/a, abans de presentar:|Con la ficha técnica (o una hoja) y un compañero/a, antes de presentar:',
          steps: ["Omple la fitxa tècnica: nom, client, mides totals, paràmetres amb el rang provat, com s'imprimeix i dues decisions amb el seu perquè.|Rellena la ficha técnica: nombre, cliente, medidas totales, parámetros con el rango probado, cómo se imprime y dos decisiones con su porqué.",
            'Tria quin paràmetre canviaràs en directe i a quin valor.|Elige qué parámetro cambiarás en directo y a qué valor.',
            'Assaja la presentació en cinc parts amb el company/a: dos minuts com a molt.|Ensaya la presentación en cinco partes con el compañero/a: dos minutos como mucho.',
            'Qui escolta et regala una estrella i et fa una pregunta de client.|Quien escucha te regala una estrella y te hace una pregunta de cliente.'],
          tip: 'Millor curt i clar: la demostració en directe val més que mil paraules.|Mejor corto y claro: la demostración en directo vale más que mil palabras.' },
        { k: 'm3free', ph: 'crea', text: true, q: "<b>La versió final.</b> Últim retoc, descarrega l'<b>STL</b> i el <b>.scad</b> i presenta el producte amb la fitxa tècnica. Després, desa'l.|<b>La versión final.</b> Último retoque, descarga el <b>STL</b> y el <b>.scad</b> y presenta el producto con la ficha técnica. Después, guárdalo.",
          name: 'El meu producte final|Mi producto final', get start() { return mine(['p8-4', 'p8-3', 'p8-2', 'p8-1'], VFIN); }, blocks: BLF,
          crit: ['Està llest per imprimir: toca la placa i cap a la Nuvi|Está listo para imprimir: toca la placa y cabe en Nuvi', "Has descarregat l'STL i el .scad|Has descargado el STL y el .scad", "L'has presentat amb la fitxa tècnica i has canviat un paràmetre en directe|Lo has presentado con la ficha técnica y has cambiado un parámetro en directo"],
          checks: [{ k: 'uses', b: 'var' }, { k: 'onplate' }, PLACA], sol: VFIN },
        { k: 'diploma', ph: 'tanca', t: "ha completat el curs <b>Tech 3D · Nivell 2</b> i ha dissenyat amb codi un producte paramètric per a un client de veritat.|ha completado el curso <b>Tech 3D · Nivel 2</b> y ha diseñado con código un producto paramétrico para un cliente de verdad.",
          skills: [
            'Modelar amb instruccions: formes amb mides i «centrat»|Modelar con instrucciones: formas con medidas y «centrado»',
            "Moure, girar i escalar amb codi, en l'ordre correcte|Mover, girar y escalar con código, en el orden correcto",
            'Unir, restar i intersecar formes|Unir, restar e intersecar formas',
            'Variables, expressions i disseny paramètric|Variables, expresiones y diseño paramétrico',
            'Bucles i patrons en fila, en graella i en cercle|Bucles y patrones en fila, en rejilla y en círculo',
            'Mòduls amb paràmetres i biblioteques de peces|Módulos con parámetros y bibliotecas de piezas',
            "Encaixos, toleràncies i peces que s'imprimeixen sense suports|Encajes, tolerancias y piezas que se imprimen sin soportes",
            'Especificar, prototipar, provar i presentar un producte|Especificar, prototipar, probar y presentar un producto'] },
        { k: 'story', ph: 'tanca', who: 'bit', mood: 'win', t: "Enhorabona, enginyer/a! Vas començar escrivint la recepta d'un cub i ara dissenyes productes que s'adapten a cada client, amb toleràncies i proves. Recorda el camí: <b>escolta, especifica, prototipa, prova i millora</b>. El teu .scad continua a OpenSCAD: la Nuvi i jo t'esperem amb el proper encàrrec!|¡Enhorabuena, ingeniero/a! Empezaste escribiendo la receta de un cubo y ahora diseñas productos que se adaptan a cada cliente, con tolerancias y pruebas. Recuerda el camino: <b>escucha, especifica, prototipa, prueba y mejora</b>. Tu .scad sigue en OpenSCAD: ¡Nuvi y yo te esperamos con el próximo encargo!" },
        { k: 'quiz', ph: 'tanca', q: "Últim repte del curs: a la fira, un client et diu «El voldria per a 7 anelles». Què fas?|Último reto del curso: en la feria, un cliente te dice «Lo querría para 7 anillas». ¿Qué haces?",
          opts: ["Canvio el paràmetre, comprovo si cap a la placa i, si no, li proposo una altra solució|Cambio el parámetro, compruebo si cabe en la placa y, si no, le propongo otra solución", 'Li dic que no es pot|Le digo que no se puede', 'Començo un producte nou de zero|Empiezo un producto nuevo de cero'], a: 0,
          ex: "Un producte paramètric s'adapta, però dins del seu rang: les proves et diuen fins on arriba. Enhorabona!|Un producto paramétrico se adapta, pero dentro de su rango: las pruebas te dicen hasta dónde llega. ¡Enhorabuena!" },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();
