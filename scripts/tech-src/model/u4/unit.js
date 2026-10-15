/* Tech 3D · Nivell 1 · unitat 4 «Construir» (m4-1 … m4-4)
   Contingut propi de Numi (format: scripts/TECH-3D.md). Fil narratiu: el Taller de Bit i la Nuvi, la impressora 3D, fan les
   peces de la maqueta del «Barri del Futur» que la Mireia, l'arquitecta del barri, prepara per a l'exposició del centre cívic:
   el pont i els mobles (m4-1, alinear i recolzar), la tanca, el porxo i els fanals (m4-2, duplicar amb un pas), la papallona,
   la cara del robot-guia i el bus elèctric (m4-3, simetria amb l'eina Mirall) i la casa del futur (m4-4, projecte).
   Eines de l'editor (tech-model.js): Alinea (una peça: al centre de la placa, a terra o a sobre de la de sota; diverses: vores i
   centre en x, y i z, respecte de la caixa de tota la selecció), Duplica (la còpia surt al costat, a 5 mm; si no es mou, cada
   Duplica repeteix el mateix salt), Agrupa i Mirall (reflecteix la selecció al voltant del seu propi centre, en x o en y).
   Models: peces { id, t, s: [x, y, z] (mm), p: CENTRE, r: graus, c: color, g: grup }, placa de 200 × 200 mm centrada a l'origen. */
Object.assign(TBADGE, {
  m41_ali: { id: 'm41_ali', ico: '📐', n: 'Alineador/a|Alineador/a', d: "Alinees peces a les vores i al centre, i les recolzes l'una sobre l'altra sense que res floti.|Alineas piezas a los bordes y al centro, y las apoyas una sobre otra sin que nada flote." },
  m42_rep: { id: 'm42_rep', ico: '🔁', n: 'Mestre/a dels patrons|Maestro/a de los patrones', d: 'Dupliques peces i grups i els repeteixes amb un pas exacte: tanques, files i graelles.|Duplicas piezas y grupos y los repites con un paso exacto: vallas, filas y cuadrículas.' },
  m43_mir: { id: 'm43_mir', ico: '🦋', n: 'Mirall màgic|Espejo mágico', d: "Fas la meitat d'una figura i la completes amb el mirall: papallones, cares i vehicles simètrics.|Haces la mitad de una figura y la completas con el espejo: mariposas, caras y vehículos simétricos." },
  m44_casa: { id: 'm44_casa', ico: '🏡', n: 'Arquitecte/a del futur|Arquitecto/a del futuro', d: 'Projecte acabat: la casa del futur, amb parts alineades, peces repetides i una façana simètrica.|Proyecto terminado: la casa del futuro, con partes alineadas, piezas repetidas y una fachada simétrica.' }
});
COURSE_UNITS[4] = (() => {
  const P = (id, t, s, p, c, o = {}) => ({ id, t, s, p, r: o.r || [0, 0, 0], c, ...o });
  // B: la z que es dona és la de la BASE (com a la pestanya Posició) i h és l'alçada real de la peça (girada o no)
  const B = (id, t, s, x, y, z0, c, o = {}) => P(id, t, s, [x, y, z0 + (o.h ?? s[2]) / 2], c, o);
  const sense = (L, ...ids) => L.filter(p => !ids.includes(p.id));
  // ---------- m4-1 · alinear i recolzar ----------
  const RIU = B('riu', 'box', [40, 70, 1], 0, 0, 0, '#5BC0EB');
  const PILARS = [B('p1', 'box', [12, 20, 30], -25, 0, 0, '#9AA3B5'), B('p2', 'box', [12, 20, 30], 25, 0, 0, '#9AA3B5')];
  const TAULER = (x = 0, y = 0, z0 = 30) => B('tauler', 'box', [70, 20, 6], x, y, z0, '#A0683A');
  const PONT = [RIU, ...PILARS, TAULER()], PONT0 = [RIU, ...PILARS, TAULER(-20, -50, 0)], PONT_FLOTA = [RIU, ...PILARS, TAULER(0, 0, 33)];
  const BAR = (id, y) => B(id, 'box', [70, 2, 6], 0, y, 36, '#F7C531');
  const BARANES0 = [...PONT, BAR('b1', -3), BAR('b2', 3)], BARANES1 = [...PONT, BAR('b1', -9), BAR('b2', 9)];
  const TAP = B('tap', 'box', [50, 30, 4], 0, 0, 20, '#14A3B8');
  const pota = (id, x, y) => B(id, 'box', [4, 4, 20], x, y, 0, '#F3F3EE');
  const TAULA0 = [TAP, pota('l1', -8, -4), pota('l2', 8, -4), pota('l3', -8, 4), pota('l4', 8, 4)];
  const TAULA1 = [TAP, pota('l1', -23, -13), pota('l2', 23, -13), pota('l3', -23, 13), pota('l4', 23, 13)];
  const FONT_BASE = B('bassa', 'cyl', [56, 56, 6], 0, 0, 0, '#9AA3B5');
  const font = (c, b, k) => [FONT_BASE, B('col', 'cyl', [12, 12, 22], c[0], c[1], 6, '#F3F3EE'), B('bol', 'cyl', [34, 34, 5], b[0], b[1], 28, '#5BC0EB'), B('bola', 'sph', [10, 10, 10], k[0], k[1], 32, '#3D7BF4')];
  const FONT0 = font([5, -4], [-6, 3], [3, 6]), FONT1 = font([0, 0], [0, 0], [0, 0]);
  const ESC1 = [B('s1', 'box', [40, 30, 8], 0, 0, 0, '#F5893A'), B('s2', 'box', [40, 20, 8], 0, 5, 8, '#F7C531'), B('s3', 'box', [40, 10, 8], 0, 10, 16, '#2FB36D')];
  const ESC0 = [ESC1[0], B('s2', 'box', [40, 20, 8], -60, 30, 0, '#F7C531'), B('s3', 'box', [40, 10, 8], 55, -35, 0, '#2FB36D')];
  const BARRES = [B('a', 'box', [40, 8, 8], -10, 24, 0, '#3D7BF4'), B('b', 'box', [60, 8, 8], 0, 8, 0, '#2FB36D'), B('fora', 'box', [30, 8, 8], -9, -8, 0, '#EC5FA8'), B('d', 'box', [24, 8, 8], -18, -24, 0, '#F7C531')];
  const BANC = [B('a1', 'box', [50, 16, 4], 0, 0, 12, '#A0683A'), B('a2', 'box', [4, 16, 12], -21, 0, 0, '#9AA3B5'), B('a3', 'box', [4, 16, 12], 21, 0, 0, '#9AA3B5'), B('a4', 'box', [50, 3, 12], 0, 6.5, 16, '#A0683A')];
  // ---------- m4-2 · duplicar i repetir ----------
  const GRAO = B('base', 'box', [86, 22, 4], 0, 0, 0, '#F3F3EE');
  const colu = (id, x) => B(id, 'cyl', [15, 15, 40], x, 0, 4, '#5BC0EB');
  const FILA0 = [GRAO, colu('c1', -30)], FILA1 = [GRAO, colu('c1', -30), colu('c2', -10), colu('c3', 10), colu('c4', 30)];
  const TRAV = [B('t1', 'box', [90, 2, 4], 0, 0, 6, '#F5893A'), B('t2', 'box', [90, 2, 4], 0, 0, 16, '#F5893A')];
  const pal = (id, x) => B(id, 'box', [6, 6, 24], x, 0, 0, '#A0683A');
  const TANCA0 = [...TRAV, pal('p1', -40)], TANCA1 = [...TRAV, pal('p1', -40), pal('p2', -20), pal('p3', 0), pal('p4', 20), pal('p5', 40)];
  const VORERA = B('vorera', 'box', [110, 16, 3], 0, 0, 0, '#9AA3B5');
  const fanal = (x, k) => [B('f' + k, 'cyl', [4, 4, 36], x, 0, 3, '#1B2B6B'), B('l' + k, 'sph', [10, 10, 10], x, 0, 37, '#F7C531')];
  const FANALS0 = [VORERA, ...fanal(-40, 1)], FANALS1 = [VORERA, ...fanal(-40, 1), ...fanal(0, 2), ...fanal(40, 3)];
  const BASEP = B('base', 'box', [100, 24, 4], 0, 0, 0, '#F3F3EE'), SOSTRE = B('sostre', 'box', [100, 24, 4], 0, 0, 34, '#2FB36D');
  const colp = (id, x) => B(id, 'cyl', [8, 8, 30], x, 0, 4, '#5BC0EB');
  const PORXO0 = [BASEP, colp('c1', -40), colp('c2', -24), colp('c3', 0), colp('c4', 27), colp('c5', 40), SOSTRE];
  const PORXO1 = [BASEP, colp('c1', -40), colp('c2', -20), colp('c3', 0), colp('c4', 20), colp('c5', 40), SOSTRE];
  const MARC = B('marc', 'box', [86, 46, 3], 0, 0, 0, '#F3F3EE');
  const cel = (id, x, y) => B(id, 'box', [18, 18, 2], x, y, 3, '#1B2B6B');
  const FILAC = (y, k) => [-30, -10, 10, 30].map((x, i) => cel(`c${k}${i + 1}`, x, y));
  const PANELL0 = [MARC, ...FILAC(-10, 1)], PANELL1 = [MARC, ...FILAC(-10, 1), ...FILAC(10, 2)];
  const PAS = [-45, -15, 15, 45].map((x, i) => B('c' + (i + 1), 'cyl', [10, 10, 24], x, 0, 0, '#5BC0EB'));
  const PALS = [-40, -20, 0, 25, 40].map((x, i) => B('p' + (i + 1), 'box', [6, 6, 24], x, 0, 0, '#A0683A'));
  const TORRE = [B('b1', 'box', [40, 30, 10], 0, 0, 0, '#3D7BF4'), B('b2', 'box', [30, 24, 10], 0, 0, 10, '#2FB36D'), B('b3', 'box', [20, 18, 10], 7, 0, 20, '#F7C531'), B('b4', 'box', [12, 12, 10], 0, 0, 30, '#EC5FA8')];
  // ---------- m4-3 · simetria: el mirall (s = −1 meitat esquerra, s = 1 meitat dreta) ----------
  const COS_P = [B('cos', 'cyl', [8, 40, 5], 0, 0, 0, '#1B2B6B'), B('cap', 'cyl', [10, 10, 5], 0, 22, 0, '#1B2B6B')];
  const ALES = s => { const k = s < 0 ? 'e' : 'd';
    return [B('s' + k, 'cyl', [34, 20, 3], 17 * s, 9, 0, '#EC5FA8', { r: [0, 0, 25 * s] }), B('i' + k, 'cyl', [24, 16, 3], 12 * s, -10, 0, '#F7C531', { r: [0, 0, -30 * s] }),
      B('t' + k, 'box', [2, 12, 2], 4 * s, 27, 0, '#1B2B6B', { r: [0, 0, -25 * s] }), B('q' + k, 'cyl', [7, 7, 1], 19 * s, 11, 3, '#F3F3EE')]; };
  const PAPA = [...COS_P, ...ALES(-1), ...ALES(1)], PAPA0 = sense(PAPA, 'id');
  // l'error típic: la meitat esquerra copiada a la dreta sense Mirall (traslladada 34 mm)
  const PAPA_MAL = [...COS_P, ...ALES(-1), ...ALES(-1).map(p => ({ ...p, id: p.id + 'c', p: [p.p[0] + 34, p.p[1], p.p[2]] }))];
  const lent = (id, x) => B(id, 'cyl', [20, 15, 3], x, 0, 0, '#5BC0EB');
  const MUNT = [B('pont', 'box', [10, 3, 3], 0, 2, 0, '#1B2B6B'), B('pe', 'box', [3, 30, 3], -22, 15, 0, '#1B2B6B'), B('pd', 'box', [3, 30, 3], 22, 15, 0, '#1B2B6B')];
  const ULL0 = [lent('v1', -13), lent('v2', 18), ...MUNT], ULL1 = [lent('v1', -13), lent('v2', 13), ...MUNT];
  const CAP = [B('cap', 'box', [50, 12, 40], 0, 0, 0, '#5BC0EB'), B('boca', 'box', [22, 3, 4], 0, -6.5, 8, '#1B2B6B'), B('ant', 'cyl', [3, 3, 8], 0, 0, 40, '#9AA3B5'), B('bola', 'sph', [7, 7, 7], 0, 0, 47, '#E8453C')];
  const CARA = (s, g) => { const k = s < 0 ? 'e' : 'd', o = g ? { g } : {};
    return [B('al' + k, 'wedge', [10, 12, 20], 29 * s, 0, 14, '#F7C531', { r: [0, 0, s < 0 ? 180 : 0], ...o }), B('ul' + k, 'cyl', [14, 14, 3], 11 * s, -6.5, 18, '#F3F3EE', { r: [90, 0, 0], h: 14, ...o }),
      B('ni' + k, 'sph', [5, 5, 5], 11 * s, -8, 22.5, '#1B2B6B', o), B('ce' + k, 'box', [12, 3, 3], 11 * s, -6.5, 33, '#1B2B6B', { r: [0, 15 * s, 0], ...o })]; };
  const ROBOT0 = [...CAP, ...CARA(-1, 'ge')], ROBOT1 = [...CAP, ...CARA(-1, 'ge'), ...CARA(1, 'gd')];
  const BUS = [B('cos', 'box', [64, 26, 20], 0, 0, 6, '#F3F3EE'), B('vidre', 'box', [2, 20, 9], 32, 0, 14, '#1B2B6B'), B('sol', 'box', [44, 20, 2], 0, 0, 26, '#1B2B6B'), B('franja', 'box', [65, 27, 3], 0, 0, 8, '#2FB36D')];
  const COSTAT = (s, g) => { const k = s < 0 ? 'e' : 'd', o = g ? { g } : {};
    return [B('r1' + k, 'cyl', [14, 14, 5], -20, 14 * s, 0, '#2A2F3A', { r: [90, 0, 0], h: 14, ...o }), B('r2' + k, 'cyl', [14, 14, 5], 20, 14 * s, 0, '#2A2F3A', { r: [90, 0, 0], h: 14, ...o }),
      B('w1' + k, 'box', [16, 2, 7], -12, 13 * s, 15, '#5BC0EB', o), B('w2' + k, 'box', [16, 2, 7], 12, 13 * s, 15, '#5BC0EB', o)]; };
  const BUS0 = [...BUS, ...COSTAT(-1, 'ge')], BUS1 = [...BUS, ...COSTAT(-1, 'ge'), ...COSTAT(1, 'gd')];
  const petal = (id, sx, sy) => B(id, 'cyl', [26, 12, 4], 11 * sx, 11 * sy, 0, '#EC5FA8', { r: [0, 0, 45 * sx * sy] });
  const FLOR0 = [B('cen', 'cyl', [14, 14, 6], 0, 0, 0, '#F7C531'), petal('f1', -1, -1)], FLOR1 = [...FLOR0, petal('f2', 1, -1), petal('f3', -1, 1), petal('f4', 1, 1)];
  const FIGS = [P('cor', 'heart', [24, 24, 4], [-48, 0, 2], '#E8453C'), P('l1', 'box', [5, 22, 4], [-22, 0, 2], '#3D7BF4'), P('l2', 'box', [14, 5, 4], [-17.5, -8.5, 2], '#3D7BF4'),
    P('t1', 'box', [20, 5, 4], [14, 8.5, 2], '#2FB36D'), P('t2', 'box', [5, 22, 4], [14, 0, 2], '#2FB36D'), P('est', 'star', [26, 26, 4], [46, 0, 2], '#F7C531', { n: 5 })];
  const EIX = [B('a', 'sph', [12, 12, 12], -15, 0, 0, '#3D7BF4'), B('b', 'sph', [12, 12, 12], 15, 0, 0, '#2FB36D'), B('eix', 'box', [1, 60, 1], 0, 0, 0, '#9AA3B5')];
  // ---------- m4-4 · la casa del futur ----------
  const JARDI = B('jardi', 'box', [110, 84, 4], 0, -10, 0, '#2FB36D');
  const COS_C = (x = 0, y = 0, z0 = 4) => B('casa', 'box', [50, 30, 30], x, y, z0, '#F3F3EE');
  const AIGUA = (s, z0 = 34, g) => B(s < 0 ? 't1' : 't2', 'wedge', [26, 34, 15], 13 * s, 0, z0, '#E8453C', { r: [0, 0, s < 0 ? 180 : 0], ...(g ? { g } : {}) });
  const PORTA = B('porta', 'box', [12, 2, 18], 0, -15, 4, '#A0683A');
  const FIN = (id, x) => B(id, 'box', [10, 2, 10], x, -15, 16, '#5BC0EB');
  const CAMI = B('cami', 'box', [12, 37, 1], 0, -33.5, 4, '#F7C531');
  const arbre = (k, x) => [B('tr' + k, 'cyl', [4, 4, 8], x, -36, 4, '#A0683A', { g: 'ar' + k }), B('co' + k, 'cone', [14, 14, 18], x, -36, 12, '#1E8E52', { g: 'ar' + k })];
  const CASA1 = [JARDI, COS_C()], CASA0 = [JARDI, COS_C(-70, 62, 0)];
  const TEU1 = [...CASA1, AIGUA(1), AIGUA(-1)], TEU0 = [...CASA1, AIGUA(1)];
  const FIN1 = [...TEU1, PORTA, FIN('f1', -15), FIN('f2', 15)], FIN0 = [...TEU1, PORTA, FIN('f1', -15)];
  const ARB1 = [...FIN1, CAMI, ...arbre(1, -40), ...arbre(2, -24), ...arbre(3, 24), ...arbre(4, 40)], ARB0 = [...FIN1, CAMI, ...arbre(1, -40)];
  const FLOTA = [JARDI, COS_C(), AIGUA(1, 42, 'teu'), AIGUA(-1, 42, 'teu')], FLOTA1 = [JARDI, COS_C(), AIGUA(1, 34, 'teu'), AIGUA(-1, 34, 'teu')];
  const fanalC = (k, x) => [B('fp' + k, 'cyl', [3, 3, 20], x, -46, 4, '#1B2B6B'), B('fl' + k, 'sph', [7, 7, 7], x, -46, 23, '#F7C531')];
  const CASA_MEVA = [...ARB1, B('xemeneia', 'box', [8, 8, 12], 0, 6, 44, '#9AA3B5'), ...fanalC(1, -48), ...fanalC(2, 48)];
  const fpis = (id, x, z0) => B(id, 'box', [10, 2, 8], x, -10, z0, '#5BC0EB');
  const PISOS = [B('bloc', 'box', [60, 20, 50], 0, 0, 0, '#F3F3EE'), fpis('w1', -15, 8), fpis('w2', 15, 8), fpis('w3', -15, 22), fpis('trenca', 21, 22), fpis('w5', -15, 36), fpis('w6', 15, 36), B('pb', 'box', [12, 2, 14], 0, -10, 0, '#A0683A')];
  return {
  t: 'Construir|Construir', d: 'Alinear, duplicar i mirall|Alinear, duplicar y espejo', color: '#2FB36D',
  s: [
    /* ---------- Sessió 1 · Alinear ---------- */
    { id: 'm4-1', t: 'Alinear|Alinear', min: 45, badge: 'm41_ali',
      learn: ["Alinear és posar peces en línia: amb la mateixa vora (esquerra, dreta, davant, darrere) o amb el mateix centre.|Alinear es poner piezas en línea: con el mismo borde (izquierdo, derecho, delante, detrás) o con el mismo centro.",
        "L'eina Alinea porta una peça al centre de la placa, a terra o a sobre de la de sota; amb diverses peces, les alinea entre elles.|La herramienta Alinea lleva una pieza al centro de la placa, al suelo o encima de la de debajo; con varias piezas, las alinea entre ellas.",
        "Una peça recolzada comença just on s'acaba la de sota: si el pilar fa 30 mm, la base del tauler és a z = 30.|Una pieza apoyada empieza justo donde acaba la de debajo: si el pilar mide 30 mm, la base del tablero está en z = 30."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Un pilar de <b>30 mm</b> d'alt és a terra. A quina <b>z</b> comença la peça que hi poses a sobre?|Un pilar de <b>30 mm</b> de alto está en el suelo. ¿En qué <b>z</b> empieza la pieza que pones encima?",
          opts: ['z = 30|z = 30', 'z = 15|z = 15', 'z = 0|z = 0'], a: 0,
          ex: "El pilar va de z = 0 a z = 30: la peça de dalt comença just on s'acaba, a z = 30.|El pilar va de z = 0 a z = 30: la pieza de arriba empieza justo donde acaba, en z = 30." },
        { k: 'm3look', ph: 'recorda', q: 'Aquesta barra de <b>40 mm</b> va de x = −10 a x = 30. On és el seu <b>centre</b>?|Esta barra de <b>40 mm</b> va de x = −10 a x = 30. ¿Dónde está su <b>centro</b>?', model: { parts: [B('q', 'box', [40, 10, 10], 10, 0, 0, '#7C5CFF')] }, view: 'top', lock: true,
          opts: ['x = 10|x = 10', 'x = 20|x = 20', 'x = 0|x = 0'], a: 0,
          ex: 'El centre és al mig: (−10 + 30) ÷ 2 = 10. També: −10 + 20 (la meitat de 40) = 10.|El centro está en el medio: (−10 + 30) ÷ 2 = 10. También: −10 + 20 (la mitad de 40) = 10.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'La maqueta del Barri del Futur|La maqueta del Barrio del Futuro',
          t: "La <b>Mireia</b>, l'arquitecta del barri, prepara una <b>maqueta del Barri del Futur</b> per a l'exposició del centre cívic, i ens ha encarregat les peces: un pont, mobles, tanques… i, al final, <b>la casa del futur</b>! En una maqueta tot ha d'encaixar: el pont <b>recolzat</b> als pilars i les potes de la taula a les cantonades. Avui aprendrem a <b>alinear</b>.|<b>Mireia</b>, la arquitecta del barrio, prepara una <b>maqueta del Barrio del Futuro</b> para la exposición del centro cívico, y nos ha encargado las piezas: un puente, muebles, vallas… y, al final, ¡<b>la casa del futuro</b>! En una maqueta todo tiene que encajar: el puente <b>apoyado</b> en los pilares y las patas de la mesa en las esquinas. Hoy aprenderemos a <b>alinear</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Alinear|Alinear', t: 'Peces en línia|Piezas en línea', anim: 'm41ali',
            x: "<b>Alinear</b> és posar diverses peces en línia: totes amb la <b>vora esquerra</b> al mateix lloc, totes amb el <b>centre</b> al mateix lloc o totes amb la <b>vora dreta</b> al mateix lloc. Així la maqueta queda endreçada i les peces encaixen.|<b>Alinear</b> es poner varias piezas en línea: todas con el <b>borde izquierdo</b> en el mismo sitio, todas con el <b>centro</b> en el mismo sitio o todas con el <b>borde derecho</b> en el mismo sitio. Así la maqueta queda ordenada y las piezas encajan.",
            tip: 'Passa el mateix en y (davant i darrere) i en z (a baix i a dalt).|Pasa lo mismo en y (delante y detrás) y en z (abajo y arriba).' },
          { k: 'Recolzar|Apoyar', t: "Comença on s'acaba la de sota|Empieza donde acaba la de debajo", anim: 'm41sobre',
            x: "Per <b>recolzar</b> una peça sobre una altra, la seva base (la z de Posició) ha de ser l'alçada on s'acaba la de sota. Si els pilars fan 30 mm, el tauler del pont comença a <b>z = 30</b>. A z = 33 <b>flotaria</b>; a z = 27, s'enfonsaria.|Para <b>apoyar</b> una pieza sobre otra, su base (la z de Posición) tiene que ser la altura donde acaba la de debajo. Si los pilares miden 30 mm, el tablero del puente empieza en <b>z = 30</b>. En z = 33 <b>flotaría</b>; en z = 27, se hundiría.",
            bad: 'Poso el tauler a ull i queda 1 mm per sobre: sembla que toca.|Pongo el tablero a ojo y queda 1 mm por encima: parece que toca.', good: 'Faig servir Alinea o escric z = 30: queda recolzat exacte.|Uso Alinea o escribo z = 30: queda apoyado exacto.' },
          { k: "L'eina Alinea|La herramienta Alinea", t: 'Amb una sola peça|Con una sola pieza', media: { k: 'model', model: { parts: PONT } },
            x: "Toca una peça i després <b>Alinea</b>. Hi ha tres opcions: <b>Al centre de la placa</b> (x = 0, y = 0), <b>A terra</b> (z = 0) i <b>A sobre de la peça de sota</b>: la puja o la baixa fins que toca la peça que té a sota. Ho calcula sola!|Toca una pieza y después <b>Alinea</b>. Hay tres opciones: <b>Al centro de la placa</b> (x = 0, y = 0), <b>Al suelo</b> (z = 0) y <b>Encima de la pieza de debajo</b>: la sube o la baja hasta que toca la pieza que tiene debajo. ¡Lo calcula sola!",
            tip: "Al mòbil, les eines són a la pestanya Accions; a l'ordinador, a dalt de l'inspector.|En el móvil, las herramientas están en la pestaña Acciones; en el ordenador, arriba del inspector." },
          { k: 'Diverses peces|Varias piezas', t: 'Vores i centre|Bordes y centro', anim: 'm41vores',
            x: "Toca una peça, després <b>Selecciona'n més</b> i toca'n una altra. Ara <b>Alinea</b> les posa en línia: esquerra, centre o dreta (x); davant, centre o darrere (y); a baix, centre o a dalt (z). Amb dos tocs, una pota queda just a la cantonada del tauler.|Toca una pieza, después <b>Selecciona más</b> y toca otra. Ahora <b>Alinea</b> las pone en línea: izquierda, centro o derecha (x); delante, centro o detrás (y); abajo, centro o arriba (z). Con dos toques, una pata queda justo en la esquina del tablero.",
            tip: "Per triar-les totes de cop, toca un lloc buit i després el botó Totes.|Para elegirlas todas de golpe, toca un sitio vacío y después el botón Todas." },
          { k: 'Compte!|¡Cuidado!', t: 'La peça que sobresurt mana|La pieza que sobresale manda', media: { k: 'model', model: { parts: TAULA1 } },
            x: "Amb diverses peces, totes s'alineen amb la vora de <b>tota la selecció</b>. Si una pota és lluny, fora del tauler, és el tauler el que s'hi mou! Per això, primer posa la pota a sota del tauler i després l'alinees.|Con varias piezas, todas se alinean con el borde de <b>toda la selección</b>. Si una pata está lejos, fuera del tablero, ¡es el tablero el que se mueve! Por eso, primero pon la pata debajo del tablero y después la alineas.",
            bad: 'Alineo una pota que és lluny i el tauler se me\'n va.|Alineo una pata que está lejos y el tablero se me va.', good: "Poso la pota a sota del tauler i després l'alineo a la vora.|Pongo la pata debajo del tablero y después la alineo al borde." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📏', title: 'Alinea a la taula|Alinea en la mesa', t: "Per parelles, amb un regle i quatre objectes de mides diferents (una goma, un llapis, una maquineta i una capsa):|Por parejas, con una regla y cuatro objetos de tamaños distintos (una goma, un lápiz, un sacapuntas y una caja):",
          steps: ["Escampeu els objectes. Poseu el regle dret a la taula: és la línia d'alinear.|Esparcid los objetos. Poned la regla recta en la mesa: es la línea de alinear.",
            "Una persona diu «a l'esquerra!» i l'altra posa tots els objectes amb la vora tocant el regle.|Una persona dice «¡a la izquierda!» y la otra pone todos los objetos con el borde tocando la regla.",
            "Ara «al centre!»: el mig de cada objecte ha de quedar sobre la línia. És més difícil a ull?|Ahora «¡al centro!»: el medio de cada objeto tiene que quedar sobre la línea. ¿Es más difícil a ojo?",
            "Feu un pont: dues piles de llibres iguals i el regle a sobre. Està recolzat a tots dos costats?|Haced un puente: dos pilas de libros iguales y la regla encima. ¿Está apoyado en los dos lados?"],
          tip: "Per trobar el centre d'un objecte, mesura'l i divideix entre 2.|Para encontrar el centro de un objeto, mídelo y divide entre 2." },
        { k: 'm3look', ph: 'prova', q: "Tres barres estan <b>alineades a l'esquerra</b>. Toca la que <b>no</b> ho està.|Tres barras están <b>alineadas a la izquierda</b>. Toca la que <b>no</b> lo está.", model: { parts: BARRES }, view: 'top', pick: 'fora',
          no: "Aquesta sí que hi està: la seva vora esquerra és a la mateixa línia que les altres.|Esta sí lo está: su borde izquierdo está en la misma línea que las otras.",
          ex: "Tres barres comencen a x = −30. La rosa comença a x = −24: per alinear-la, Alinea → Esquerra.|Tres barras empiezan en x = −30. La rosa empieza en x = −24: para alinearla, Alinea → Izquierda." },
        { k: 'm3look', ph: 'investiga', q: "Els pilars fan <b>30 mm</b> i el tauler comença a <b>z = 33</b>. Què li passa al pont? Mira'l de davant.|Los pilares miden <b>30 mm</b> y el tablero empieza en <b>z = 33</b>. ¿Qué le pasa al puente? Míralo de frente.", model: { parts: PONT_FLOTA }, view: 'front',
          opts: ['Flota: hi ha 3 mm d\'aire sota el tauler|Flota: hay 3 mm de aire bajo el tablero', 'Està ben recolzat|Está bien apoyado', "S'enfonsa 3 mm dins dels pilars|Se hunde 3 mm dentro de los pilares"], a: 0,
          ex: "Els pilars s'acaben a z = 30. Amb el tauler a z = 33 queden 3 mm d'aire: la Nuvi l'hauria d'imprimir a l'aire! Amb z = 30, quedaria recolzat.|Los pilares acaban en z = 30. Con el tablero en z = 33 quedan 3 mm de aire: ¡Nuvi lo tendría que imprimir en el aire! Con z = 30, quedaría apoyado." },
        { k: 'move', ph: 'pausa', title: 'Peça alineada|Pieza alineada', secs: 30, t: "Fes de peça de la maqueta: toca la paret amb l'espatlla (<b>alineat a l'esquerra</b>), camina fins al mig de la classe (<b>al centre</b>) i ajup-te fins a terra (<b>z = 0</b>). Ara posa una mà just a sobre de l'altra: <b>recolzada</b>!|Haz de pieza de la maqueta: toca la pared con el hombro (<b>alineado a la izquierda</b>), camina hasta el medio de la clase (<b>al centro</b>) y agáchate hasta el suelo (<b>z = 0</b>). Ahora pon una mano justo encima de la otra: ¡<b>apoyada</b>!" },
        { k: 'm3build', ph: 'repte', q: "<b>El pont del riu.</b> Porta el tauler al centre i <b>recolza'l</b> a sobre dels pilars, sense que floti.|<b>El puente del río.</b> Lleva el tablero al centro y <b>apóyalo</b> encima de los pilares, sin que flote.",
          start: { parts: PONT0 }, palette: ['box'], target: { parts: PONT },
          checks: [{ k: 'part', t: 'box', s: [70, 20, 6], at: [0, 0, 33], tol: 0.6, txt: 'El tauler és centrat i comença a z = 30|El tablero está centrado y empieza en z = 30' }, { k: 'match', target: { parts: PONT }, th: 0.95, t: 'El pont és com el fantasma|El puente es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca el tauler i Alinea → Al centre de la placa. Després, Alinea → A sobre de la peça de sota.|Toca el tablero y Alinea → Al centro de la placa. Después, Alinea → Encima de la pieza de debajo.", sol: { parts: PONT },
          done: "El pont aguanta! El tauler comença just on s'acaben els pilars.|¡El puente aguanta! El tablero empieza justo donde acaban los pilares." },
        { k: 'm3build', ph: 'repte', q: "<b>Les baranes.</b> Alinea cada barana groga amb una <b>vora</b> del tauler: una al <b>davant</b> i l'altra al <b>darrere</b>.|<b>Las barandillas.</b> Alinea cada barandilla amarilla con un <b>borde</b> del tablero: una <b>delante</b> y la otra <b>detrás</b>.",
          start: { parts: BARANES0 }, palette: ['box'], target: { parts: BARANES1 },
          checks: [{ k: 'part', t: 'box', s: [70, 2, 6], at: [0, -9, 39], tol: 0.6, txt: 'Una barana a la vora del davant|Una barandilla en el borde de delante' }, { k: 'part', t: 'box', s: [70, 2, 6], at: [0, 9, 39], tol: 0.6, txt: 'Una barana a la vora del darrere|Una barandilla en el borde de detrás' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una barana, Selecciona'n més i toca el tauler. Alinea → Y → Davant. Amb l'altra barana i el tauler, Y → Darrere.|Toca una barandilla, Selecciona más y toca el tablero. Alinea → Y → Delante. Con la otra barandilla y el tablero, Y → Detrás.", sol: { parts: BARANES1 } },
        { k: 'm3build', ph: 'repte', q: "<b>La tauleta de la plaça.</b> Porta cada pota a una <b>cantonada</b> del tauler: alinea-la a dues vores alhora.|<b>La mesita de la plaza.</b> Lleva cada pata a una <b>esquina</b> del tablero: alinéala con dos bordes a la vez.",
          start: { parts: TAULA0 }, palette: ['box'], target: { parts: TAULA1 },
          checks: [{ k: 'part', t: 'box', s: [4, 4, 20], at: [-23, -13, 10], tol: 0.6, txt: "Una pota a la cantonada esquerra del davant|Una pata en la esquina izquierda de delante" }, { k: 'match', target: { parts: TAULA1 }, th: 0.95, t: 'Les 4 potes són a les cantonades|Las 4 patas están en las esquinas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una pota, Selecciona'n més i toca el tauler. Alinea → X Esquerra i Y Davant. Les altres: Dreta i Davant, Esquerra i Darrere, Dreta i Darrere.|Toca una pata, Selecciona más y toca el tablero. Alinea → X Izquierda e Y Delante. Las otras: Derecha y Delante, Izquierda y Detrás, Derecha y Detrás.", sol: { parts: TAULA1 } },
        { k: 'm3fix', ph: 'repte', q: "<b>La font torta.</b> Els pisos de la font de la plaça no estan centrats. <b>Centra'ls tots</b> sobre la bassa.|<b>La fuente torcida.</b> Los pisos de la fuente de la plaza no están centrados. <b>Céntralos todos</b> sobre la balsa.",
          start: { parts: FONT0 }, fix: ['bassa', 'col', 'bol', 'bola'], palette: ['cyl', 'sph'],
          checks: [{ k: 'sym', ax: 'x', th: 0.97, t: "És simètrica d'esquerra a dreta|Es simétrica de izquierda a derecha" }, { k: 'sym', ax: 'y', th: 0.97, t: 'És simètrica de davant a darrere|Es simétrica de delante a detrás' }, { k: 'match', target: { parts: FONT1 }, th: 0.95, t: 'Tots els pisos són centrats|Todos los pisos están centrados' }, { k: 'one' }],
          hint: "Ja estan totes seleccionades: Alinea → X Centre i després Alinea → Y Centre.|Ya están todas seleccionadas: Alinea → X Centro y después Alinea → Y Centro.", sol: { parts: FONT1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>L'escala del mirador.</b> Apila els tres graons i alinea'ls tots a la vora del <b>darrere</b>.|<b>La escalera del mirador.</b> Apila los tres peldaños y alinéalos todos en el borde de <b>detrás</b>.",
          start: { parts: ESC0 }, palette: ['box'], target: { parts: ESC1 },
          checks: [{ k: 'match', target: { parts: ESC1 }, th: 0.95, t: "L'escala és com el fantasma|La escalera es como el fantasma" }, { k: 'size', ax: 'z', v: 24, tol: 0.5, t: 'Alçada total: 24 mm (3 graons)|Altura total: 24 mm (3 peldaños)' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Cada graó: Alinea → Al centre de la placa i Alinea → A sobre de la peça de sota. Al final, Totes → Alinea → Y → Darrere.|Cada peldaño: Alinea → Al centro de la placa y Alinea → Encima de la pieza de debajo. Al final, Todas → Alinea → Y → Detrás.", sol: { parts: ESC1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Un moble per a la maqueta.</b> Una taula, un banc o una prestatgeria amb les potes <b>alineades</b> i el tauler <b>recolzat</b>.|<b>Un mueble para la maqueta.</b> Una mesa, un banco o una estantería con las patas <b>alineadas</b> y el tablero <b>apoyado</b>.",
          name: 'El meu moble|Mi mueble', palette: ['box', 'cyl', 'sph', 'wedge', 'hex', 'pyr'],
          crit: ['Les potes o els suports estan alineats a les vores|Las patas o los soportes están alineados a los bordes', "El tauler està recolzat: ni flota ni s'enfonsa|El tablero está apoyado: ni flota ni se hunde", 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 3, txt: 'Almenys 3 peces|Al menos 3 piezas' }, { k: 'one' }, { k: 'onplate' }], sol: { parts: BANC } },
        { k: 'quiz', ph: 'tanca', q: "Vols una pota a la cantonada <b>dreta del darrere</b> d'un tauler. Quines opcions d'Alinea tries?|Quieres una pata en la esquina <b>derecha de detrás</b> de un tablero. ¿Qué opciones de Alinea eliges?",
          opts: ['X Dreta i Y Darrere|X Derecha e Y Detrás', 'X Esquerra i Y Davant|X Izquierda e Y Delante', 'X Centre i Y Centre|X Centro e Y Centro'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Què fa <b>Alinea → A sobre de la peça de sota</b>?|¿Qué hace <b>Alinea → Encima de la pieza de debajo</b>?',
          opts: ["Puja o baixa la peça fins que toca la de sota|Sube o baja la pieza hasta que toca la de debajo", 'Porta la peça al centre de la placa|Lleva la pieza al centro de la placa', 'Fa la peça més alta|Hace la pieza más alta'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 2 · Duplicar i repetir ---------- */
    { id: 'm4-2', t: 'Duplicar i repetir|Duplicar y repetir', min: 45, badge: 'm42_rep',
      learn: ['Duplica fa una còpia exacta de les peces seleccionades (forma, mida, color i gir) i la posa al costat, a 5 mm.|Duplica hace una copia exacta de las piezas seleccionadas (forma, medida, color y giro) y la pone al lado, a 5 mm.',
        "El pas és la distància de centre a centre entre dues peces repetides: cada posició és l'anterior més el pas.|El paso es la distancia de centro a centro entre dos piezas repetidas: cada posición es la anterior más el paso.",
        'Un patró és una peça o un grup que es repeteix sempre igual i amb el mateix pas: tanques, columnes, rajoles.|Un patrón es una pieza o un grupo que se repite siempre igual y con el mismo paso: vallas, columnas, baldosas.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Vols centrar dues peces l'una sobre l'altra. Quines opcions d'<b>Alinea</b> fas servir?|Quieres centrar dos piezas una sobre otra. ¿Qué opciones de <b>Alinea</b> usas?",
          opts: ['X Centre i Y Centre|X Centro e Y Centro', 'X Esquerra i Y Davant|X Izquierda e Y Delante', 'Z A baix|Z Abajo'], a: 0,
          ex: 'Centrar vol dir que els centres tenen la mateixa x i la mateixa y.|Centrar quiere decir que los centros tienen la misma x y la misma y.' },
        { k: 'm3look', ph: 'recorda', q: 'Mira la torre de davant. Toca la peça que <b>no està centrada</b> amb les altres.|Mira la torre de frente. Toca la pieza que <b>no está centrada</b> con las otras.', model: { parts: TORRE }, view: 'front', pick: 'b3',
          no: "Aquesta està ben centrada. Busca la que sobresurt més per un costat que per l'altre.|Esta está bien centrada. Busca la que sobresale más por un lado que por el otro.",
          ex: 'Les altres tenen el centre a x = 0. La groga és a x = 7: Alinea → X Centre la tornaria al lloc.|Las otras tienen el centro en x = 0. La amarilla está en x = 7: Alinea → X Centro la devolvería a su sitio.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'El parc del barri|El parque del barrio',
          t: "La Mireia ens ha enviat el plànol del <b>parc</b>: necessita una <b>tanca</b> de fusta, un <b>porxo</b> amb columnes i <b>fanals</b> al llarg del passeig. Quantes peces iguals! Fer-les d'una en una seria pesadíssim… La Nuvi diu que els dissenyadors tenen un truc per a les peces que es repeteixen: <b>Duplica</b>!|Mireia nos ha enviado el plano del <b>parque</b>: necesita una <b>valla</b> de madera, un <b>porche</b> con columnas y <b>farolas</b> a lo largo del paseo. ¡Cuántas piezas iguales! Hacerlas de una en una sería pesadísimo… Nuvi dice que los diseñadores tienen un truco para las piezas que se repiten: ¡<b>Duplica</b>!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Duplica|Duplica', t: 'Una còpia exacta|Una copia exacta', anim: 'm42dup',
            x: "Toca una peça i després <b>Duplica</b> (a l'ordinador, també Ctrl + D): surt una <b>còpia exacta</b>, amb la mateixa forma, mida, color i gir, just al costat i amb <b>5 mm</b> d'espai. La còpia queda seleccionada, a punt per moure-la.|Toca una pieza y después <b>Duplica</b> (en el ordenador, también Ctrl + D): sale una <b>copia exacta</b>, con la misma forma, medida, color y giro, justo al lado y con <b>5 mm</b> de espacio. La copia queda seleccionada, lista para moverla.",
            tip: 'És molt més ràpid que afegir una peça nova i tornar-ne a escriure les mides.|Es mucho más rápido que añadir una pieza nueva y volver a escribir sus medidas.' },
          { k: 'Una fila|Una fila', t: 'Duplica, duplica, duplica|Duplica, duplica, duplica', media: { k: 'model', model: { parts: FILA1 } },
            x: "Si tornes a tocar <b>Duplica</b> sense moure la còpia, la següent surt a la <b>mateixa distància</b>. Tres tocs i tens una fila de 4 columnes ben repartides! Columnes de 15 mm i 5 mm d'espai: una cada 20 mm.|Si vuelves a tocar <b>Duplica</b> sin mover la copia, la siguiente sale a la <b>misma distancia</b>. ¡Tres toques y tienes una fila de 4 columnas bien repartidas! Columnas de 15 mm y 5 mm de espacio: una cada 20 mm.",
            tip: "Vols una altra distància? Duplica i escriu la x de cada còpia a Posició.|¿Quieres otra distancia? Duplica y escribe la x de cada copia en Posición." },
          { k: 'El pas|El paso', t: 'De centre a centre|De centro a centro', anim: 'm42pas',
            x: "En una tanca, la distància d'un pal al següent, de centre a centre, és el <b>pas</b>. Si el primer pal és a x = −40 i el pas és <b>20 mm</b>, els altres van a −20, 0, 20 i 40: cada vegada <b>sumes 20</b>.|En una valla, la distancia de un palo al siguiente, de centro a centro, es el <b>paso</b>. Si el primer palo está en x = −40 y el paso es <b>20 mm</b>, los otros van en −20, 0, 20 y 40: cada vez <b>sumas 20</b>.",
            bad: 'Poso els pals a ull: uns queden més junts que altres.|Pongo los palos a ojo: unos quedan más juntos que otros.', good: 'Sumo sempre el mateix pas: −40, −20, 0, 20, 40.|Sumo siempre el mismo paso: −40, −20, 0, 20, 40.' },
          { k: 'Repetir és un patró|Repetir es un patrón', t: 'La mateixa peça amb el mateix pas|La misma pieza con el mismo paso', media: { k: 'model', model: { parts: TANCA1 } },
            x: "Un <b>patró</b> és una cosa que es repeteix sempre igual: els pals d'una tanca, les columnes d'un porxo, les rajoles del terra. Si descobreixes el patró (<b>quina peça</b> i <b>quin pas</b>), en pots fer tantes com vulguis!|Un <b>patrón</b> es algo que se repite siempre igual: los palos de una valla, las columnas de un porche, las baldosas del suelo. Si descubres el patrón (<b>qué pieza</b> y <b>qué paso</b>), ¡puedes hacer tantas como quieras!" },
          { k: 'Un mòdul|Un módulo', t: 'Duplicar diverses peces alhora|Duplicar varias piezas a la vez', media: { k: 'model', model: { parts: FANALS1 } },
            x: "Si selecciones diverses peces (amb <b>Selecciona'n més</b>) i toques <b>Duplica</b>, es copien totes juntes. Un fanal fet d'un pal i una bombeta es duplica d'un sol cop: aquest tros que es repeteix és un <b>mòdul</b>.|Si seleccionas varias piezas (con <b>Selecciona más</b>) y tocas <b>Duplica</b>, se copian todas juntas. Una farola hecha de un palo y una bombilla se duplica de una sola vez: este trozo que se repite es un <b>módulo</b>.",
            tip: 'Si les agrupes (Agrupa), en tocar-ne una se seleccionen totes.|Si las agrupas (Agrupa), al tocar una se seleccionan todas.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: 'El patró de la tanca|El patrón de la valla', t: 'Amb un full, un regle i un llapis:|Con una hoja, una regla y un lápiz:',
          steps: ['Dibuixa una línia de 16 cm: és el terra de la tanca.|Dibuja una línea de 16 cm: es el suelo de la valla.',
            'Marca el primer pal a 1 cm. Amb un pas de 3 cm, marca els altres: 1, 4, 7…|Marca el primer palo a 1 cm. Con un paso de 3 cm, marca los otros: 1, 4, 7…',
            'Quants pals hi caben fins a 16 cm? Escriu la llista de posicions.|¿Cuántos palos caben hasta 16 cm? Escribe la lista de posiciones.',
            'Ara amb un pas de 2 cm: quants pals hi caben? Compara les dues tanques amb el company.|Ahora con un paso de 2 cm: ¿cuántos palos caben? Compara las dos vallas con el compañero.'],
          tip: "Cada posició és l'anterior més el pas: és el mateix que farem a la pestanya Posició.|Cada posición es la anterior más el paso: es lo mismo que haremos en la pestaña Posición." },
        { k: 'm3look', ph: 'prova', q: "Quin és el <b>pas</b> d'aquesta fila de columnes (de centre a centre)?|¿Cuál es el <b>paso</b> de esta fila de columnas (de centro a centro)?", model: { parts: PAS }, view: 'top', lock: true,
          opts: ['30 mm|30 mm', '15 mm|15 mm', '45 mm|45 mm'], a: 0,
          ex: 'Les columnes són a −45, −15, 15 i 45: de l\'una a la següent sempre hi ha 30 mm.|Las columnas están en −45, −15, 15 y 45: de una a la siguiente siempre hay 30 mm.' },
        { k: 'm3look', ph: 'investiga', q: 'En aquesta tanca hi ha un pal <b>fora del patró</b>. Toca\'l.|En esta valla hay un palo <b>fuera del patrón</b>. Tócalo.', model: { parts: PALS }, view: 'top', pick: 'p4',
          no: 'Aquest segueix el patró. Mira les distàncies: totes haurien de ser de 20 mm.|Este sigue el patrón. Mira las distancias: todas tendrían que ser de 20 mm.',
          ex: 'Els pals van de 20 en 20: −40, −20, 0, 20, 40. El quart és a x = 25: s\'ha desplaçat 5 mm.|Los palos van de 20 en 20: −40, −20, 0, 20, 40. El cuarto está en x = 25: se ha desplazado 5 mm.' },
        { k: 'move', ph: 'pausa', title: 'El patró del cos|El patrón del cuerpo', secs: 30, t: "Fes un patró amb el cos: <b>braços amunt</b>, <b>mans a les espatlles</b>, braços amunt, mans a les espatlles… Ara afegeix-hi un <b>salt</b>: amunt, espatlles, salt! Repeteix el patró quatre vegades sense equivocar-te.|Haz un patrón con el cuerpo: <b>brazos arriba</b>, <b>manos a los hombros</b>, brazos arriba, manos a los hombros… Ahora añádele un <b>salto</b>: ¡arriba, hombros, salto! Repite el patrón cuatro veces sin equivocarte." },
        { k: 'm3build', ph: 'repte', q: "<b>Les columnes del porxo.</b> Fes una fila de <b>4 columnes</b>: toca la columna i Duplica tres vegades, sense moure-la.|<b>Las columnas del porche.</b> Haz una fila de <b>4 columnas</b>: toca la columna y Duplica tres veces, sin moverla.",
          start: { parts: FILA0 }, palette: ['cyl'], target: { parts: FILA1 },
          checks: [{ k: 'count', t: 'cyl', min: 4, max: 4, txt: 'Exactament 4 columnes|Exactamente 4 columnas' }, { k: 'match', target: { parts: FILA1 }, th: 0.93, t: 'La fila és com el fantasma|La fila es como el fantasma' }, { k: 'one' }],
          hint: "Toca la columna i toca Duplica tres vegades seguides. Si en surt una de més, esborra-la o desfés.|Toca la columna y toca Duplica tres veces seguidas. Si sale una de más, bórrala o deshaz.", sol: { parts: FILA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>La tanca del parc.</b> Els pals han d'anar <b>cada 20 mm</b>: a x = −40, −20, 0, 20 i 40. Duplica i escriu la x de cada còpia.|<b>La valla del parque.</b> Los palos tienen que ir <b>cada 20 mm</b>: en x = −40, −20, 0, 20 y 40. Duplica y escribe la x de cada copia.",
          start: { parts: TANCA0 }, palette: ['box'], target: { parts: TANCA1 },
          checks: [{ k: 'count', t: 'box', min: 7, max: 7, txt: '5 pals i 2 travessers|5 palos y 2 travesaños' }, { k: 'part', t: 'box', s: [6, 6, 24], at: [0, 0, 12], tol: 0.6, txt: 'Hi ha un pal al mig (x = 0)|Hay un palo en el medio (x = 0)' }, { k: 'match', target: { parts: TANCA1 }, th: 0.95, t: 'Els pals van cada 20 mm|Los palos van cada 20 mm' }, { k: 'one' }],
          hint: "Duplica el pal i, a Posició, escriu x = −20. Duplica la còpia i escriu x = 0. Després x = 20 i x = 40: cada pal suma 20.|Duplica el palo y, en Posición, escribe x = −20. Duplica la copia y escribe x = 0. Después x = 20 y x = 40: cada palo suma 20.", sol: { parts: TANCA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Els fanals.</b> Tria el pal i la bombeta i duplica el fanal sencer: <b>3</b> fanals, a x = −40, 0 i 40.|<b>Las farolas.</b> Elige el palo y la bombilla y duplica la farola entera: <b>3</b> farolas, en x = −40, 0 y 40.",
          start: { parts: FANALS0 }, palette: ['cyl', 'sph'], target: { parts: FANALS1 },
          checks: [{ k: 'count', t: 'sph', min: 3, max: 3, txt: '3 bombetes|3 bombillas' }, { k: 'count', t: 'cyl', min: 3, max: 3, txt: '3 pals|3 palos' }, { k: 'match', target: { parts: FANALS1 }, th: 0.93, t: 'Els fanals són als fantasmes|Las farolas están en los fantasmas' }, { k: 'one' }],
          hint: "Toca el pal, Selecciona'n més i toca la bombeta. Duplica i escriu x = 0 a Posició. Torna a duplicar i escriu x = 40.|Toca el palo, Selecciona más y toca la bombilla. Duplica y escribe x = 0 en Posición. Vuelve a duplicar y escribe x = 40.", sol: { parts: FANALS1 } },
        { k: 'm3fix', ph: 'repte', q: "<b>El porxo desendreçat.</b> Dues columnes s'han mogut i el patró s'ha trencat. Torna-les al pas de <b>20 mm</b>.|<b>El porche desordenado.</b> Dos columnas se han movido y el patrón se ha roto. Devuélvelas al paso de <b>20 mm</b>.",
          start: { parts: PORXO0 }, fix: ['c2'], palette: ['cyl'],
          checks: [{ k: 'match', target: { parts: PORXO1 }, th: 0.97, t: 'Les columnes van cada 20 mm|Las columnas van cada 20 mm' }, { k: 'sym', ax: 'x', th: 0.98, t: "El porxo és igual a l'esquerra i a la dreta|El porche es igual a la izquierda y a la derecha" }, { k: 'one' }],
          hint: "Compta de 20 en 20: −40, −20, 0, 20, 40. La segona columna ha d'anar a x = −20 i la quarta, a x = 20.|Cuenta de 20 en 20: −40, −20, 0, 20, 40. La segunda columna tiene que ir en x = −20 y la cuarta, en x = 20.", sol: { parts: PORXO1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>El panell solar.</b> Ja hi ha una fila de 4 cel·les. Selecciona-les totes quatre, duplica-les i posa la fila nova a <b>y = 10</b>.|<b>El panel solar.</b> Ya hay una fila de 4 celdas. Selecciona las cuatro, duplícalas y pon la fila nueva en <b>y = 10</b>.",
          start: { parts: PANELL0 }, palette: ['box'], target: { parts: PANELL1 },
          checks: [{ k: 'count', t: 'box', min: 9, max: 9, txt: 'El marc i 8 cel·les|El marco y 8 celdas' }, { k: 'match', target: { parts: PANELL1 }, th: 0.95, t: 'El panell és com el fantasma|El panel es como el fantasma' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una cel·la, Selecciona'n més i toca les altres tres. Duplica i, a Posició, escriu x = 0 i y = 10.|Toca una celda, Selecciona más y toca las otras tres. Duplica y, en Posición, escribe x = 0 e y = 10.", sol: { parts: PANELL1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Un patró per al parc.</b> Una tanca, un porxo o una filera d'arbres, amb <b>Duplica</b> i sempre el mateix <b>pas</b>.|<b>Un patrón para el parque.</b> Una valla, un porche o una hilera de árboles, con <b>Duplica</b> y siempre el mismo <b>paso</b>.",
          name: 'El meu patró|Mi patrón', palette: ['box', 'cyl', 'sph', 'cone', 'hex', 'wedge', 'star'],
          crit: ['Hi ha almenys 4 peces iguals que es repeteixen|Hay al menos 4 piezas iguales que se repiten', 'Totes estan a la mateixa distància (el mateix pas)|Todas están a la misma distancia (el mismo paso)', 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 5, txt: 'Almenys 5 peces|Al menos 5 piezas' }, { k: 'one' }, { k: 'onplate' }], sol: { parts: TANCA1 } },
        { k: 'quiz', ph: 'tanca', q: 'Un pal és a <b>x = −30</b> i el pas de la tanca és <b>15 mm</b>. On van els dos pals següents?|Un palo está en <b>x = −30</b> y el paso de la valla es <b>15 mm</b>. ¿Dónde van los dos palos siguientes?',
          opts: ['x = −15 i x = 0|x = −15 y x = 0', 'x = −15 i x = −30|x = −15 y x = −30', 'x = 15 i x = 30|x = 15 y x = 30'], a: 0, ex: '−30 + 15 = −15 i −15 + 15 = 0.|−30 + 15 = −15 y −15 + 15 = 0.' },
        { k: 'quiz', ph: 'tanca', q: 'Què fa <b>Duplica</b> si tens <b>3 peces</b> seleccionades?|¿Qué hace <b>Duplica</b> si tienes <b>3 piezas</b> seleccionadas?',
          opts: ['Copia les 3 peces juntes|Copia las 3 piezas juntas', 'Només copia la primera|Solo copia la primera', 'Esborra les 3 peces|Borra las 3 piezas'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 3 · Simetria: el mirall ---------- */
    { id: 'm4-3', t: 'Simetria: el mirall|Simetría: el espejo', min: 45, badge: 'm43_mir',
      learn: ["Una figura és simètrica si una línia, l'eix de simetria, la parteix en dues meitats iguals, com en un mirall.|Una figura es simétrica si una línea, el eje de simetría, la parte en dos mitades iguales, como en un espejo.",
        'Per fer una figura simètrica, fas una meitat, la dupliques, li apliques el Mirall i la poses a l\'altra banda de l\'eix.|Para hacer una figura simétrica, haces una mitad, la duplicas, le aplicas el Espejo y la pones al otro lado del eje.',
        "Al mirall, una peça a x = −15 passa a x = 15: la mateixa distància a l'eix, però a l'altre costat.|En el espejo, una pieza en x = −15 pasa a x = 15: la misma distancia al eje, pero al otro lado."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'El primer pal d\'una tanca és a <b>x = −20</b> i el pas és de <b>10 mm</b>. On és el <b>tercer</b> pal?|El primer palo de una valla está en <b>x = −20</b> y el paso es de <b>10 mm</b>. ¿Dónde está el <b>tercer</b> palo?',
          opts: ['x = 0|x = 0', 'x = −10|x = −10', 'x = 10|x = 10'], a: 0, ex: '−20, −10, 0: cada pal suma 10.|−20, −10, 0: cada palo suma 10.' },
        { k: 'quiz', ph: 'recorda', q: 'Tens una columna. Quantes vegades has de tocar <b>Duplica</b> per tenir-ne <b>4</b> en fila?|Tienes una columna. ¿Cuántas veces tienes que tocar <b>Duplica</b> para tener <b>4</b> en fila?',
          opts: ['3|3', '4|4', '5|5'], a: 0, ex: 'Ja en tens una: amb 3 còpies més, en tens 4.|Ya tienes una: con 3 copias más, tienes 4.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'fab', title: 'Tot té dues meitats|Todo tiene dos mitades',
          t: "El parc del Barri del Futur tindrà un <b>jardí de papallones</b>, uns <b>robots-guia</b> i un <b>bus elèctric</b>. La Mireia ens ho ha encarregat tot! Fixa't en una papallona: l'ala esquerra és igual que la dreta, però <b>girada com en un mirall</b>. La Nuvi té un truc per estalviar feina: fer només <b>la meitat</b>… i emmirallar-la!|El parque del Barrio del Futuro tendrá un <b>jardín de mariposas</b>, unos <b>robots guía</b> y un <b>autobús eléctrico</b>. ¡Mireia nos lo ha encargado todo! Fíjate en una mariposa: el ala izquierda es igual que la derecha, pero <b>girada como en un espejo</b>. Nuvi tiene un truco para ahorrar trabajo: hacer solo <b>la mitad</b>… ¡y reflejarla!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Simetria|Simetría', t: 'Dues meitats iguals|Dos mitades iguales', anim: 'm43eix',
            x: "Una figura és <b>simètrica</b> quan una línia, l'<b>eix de simetria</b>, la parteix en dues meitats que són com un reflex en un mirall. Una papallona, una cara o la façana d'una casa en són exemples.|Una figura es <b>simétrica</b> cuando una línea, el <b>eje de simetría</b>, la parte en dos mitades que son como un reflejo en un espejo. Una mariposa, una cara o la fachada de una casa son ejemplos.",
            tip: 'Si dobleguessis la figura per l\'eix, les dues meitats quedarien una sobre l\'altra.|Si doblaras la figura por el eje, las dos mitades quedarían una sobre la otra.' },
          { k: "L'eina Mirall|La herramienta Espejo", t: 'Gira la peça com en un mirall|Gira la pieza como en un espejo', media: { k: 'model', model: { parts: [B('a', 'wedge', [30, 20, 18], -22, 0, 0, '#F5893A'), B('b', 'wedge', [30, 20, 18], 22, 0, 0, '#2FB36D', { r: [0, 0, 180] })] }, view: 'front' },
            x: "Selecciona una peça (o diverses) i toca <b>Mirall</b> → <b>Esquerra ↔ dreta (x)</b>: es reflecteix sense moure's de lloc. La falca taronja baixa cap a la dreta; la verda és el seu reflex i baixa cap a l'esquerra. També hi ha <b>Davant ↔ darrere (y)</b>.|Selecciona una pieza (o varias) y toca <b>Espejo</b> → <b>Izquierda ↔ derecha (x)</b>: se refleja sin moverse de sitio. La cuña naranja baja hacia la derecha; la verde es su reflejo y baja hacia la izquierda. También está <b>Delante ↔ detrás (y)</b>.",
            tip: 'Un cub o un cilindre dret no canvien al mirall: ja són simètrics.|Un cubo o un cilindro de pie no cambian en el espejo: ya son simétricos.' },
          { k: 'Meitat + mirall|Mitad + espejo', t: 'El truc dels dissenyadors|El truco de los diseñadores', anim: 'm43pas',
            x: "1) Fes la <b>meitat</b> esquerra. 2) Selecciona-la tota i toca <b>Duplica</b>. 3) Toca <b>Mirall → x</b>: la còpia es gira. 4) Mou la còpia a l'altra banda de l'eix. Has fet la meitat de la feina i tens la figura sencera!|1) Haz la <b>mitad</b> izquierda. 2) Selecciónala entera y toca <b>Duplica</b>. 3) Toca <b>Espejo → x</b>: la copia se gira. 4) Mueve la copia al otro lado del eje. ¡Has hecho la mitad del trabajo y tienes la figura entera!" },
          { k: 'Les coordenades|Las coordenadas', t: 'x passa a −x|x pasa a −x', media: { k: 'model', model: { parts: EIX }, view: 'top' },
            x: "Si l'eix és a <b>x = 0</b>, una peça a <b>x = −15</b> té el reflex a <b>x = 15</b>: la mateixa distància a l'eix, a l'altra banda. La y i la z no canvien. Només canvia el signe de la x!|Si el eje está en <b>x = 0</b>, una pieza en <b>x = −15</b> tiene el reflejo en <b>x = 15</b>: la misma distancia al eje, al otro lado. La y y la z no cambian. ¡Solo cambia el signo de la x!",
            bad: 'El reflex de x = −15 és x = −30.|El reflejo de x = −15 es x = −30.', good: 'El reflex de x = −15 és x = 15: només canvio el signe.|El reflejo de x = −15 es x = 15: solo cambio el signo.' },
          { k: 'Comprova-ho|Compruébalo', t: 'Mira-ho de dalt o de davant|Míralo desde arriba o de frente', media: { k: 'model', model: { parts: PAPA }, view: 'top' },
            x: "Per saber si un model és simètric, mira'l <b>des de dalt</b> o <b>des de davant</b>: les dues meitats han de ser iguals a banda i banda de l'eix. La comprovació «És simètric» es posa en verd quan ho és.|Para saber si un modelo es simétrico, míralo <b>desde arriba</b> o <b>de frente</b>: las dos mitades tienen que ser iguales a ambos lados del eje. La comprobación «Es simétrico» se pone en verde cuando lo es." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '✂️', title: 'La papallona de paper|La mariposa de papel', t: 'Amb un full, un llapis, unes tisores i retoladors:|Con una hoja, un lápiz, unas tijeras y rotuladores:',
          steps: ["Doblega el full per la meitat. El plec és l'<b>eix de simetria</b>.|Dobla la hoja por la mitad. El pliegue es el <b>eje de simetría</b>.",
            "Dibuixa mitja papallona tocant el plec: una ala de dalt, una de baix i mig cos.|Dibuja media mariposa tocando el pliegue: un ala de arriba, una de abajo y medio cuerpo.",
            'Retalla per la línia amb el full doblegat i obre\'l. Les dues meitats són iguals?|Recorta por la línea con la hoja doblada y ábrela. ¿Las dos mitades son iguales?',
            "Pinta-la: el que pintis a una ala, pinta-ho igual a l'altra, a la mateixa distància del plec.|Píntala: lo que pintes en un ala, píntalo igual en la otra, a la misma distancia del pliegue."],
          tip: "Posa un mirall dret sobre el plec: el reflex de mitja papallona és l'altra meitat!|Pon un espejo de pie sobre el pliegue: ¡el reflejo de media mariposa es la otra mitad!" },
        { k: 'm3look', ph: 'prova', q: "Toca la figura que <b>no</b> és simètrica d'esquerra a dreta.|Toca la figura que <b>no</b> es simétrica de izquierda a derecha.", model: { parts: FIGS }, view: 'top', pick: ['l1', 'l2'],
          no: "Aquesta sí que ho és: si la dobleguessis pel mig, les dues meitats coincidirien.|Esta sí lo es: si la doblaras por el medio, las dos mitades coincidirían.",
          ex: "El cor, la T i l'estrella tenen la meitat esquerra igual que la dreta. La L, no: el peu només va cap a un costat.|El corazón, la T y la estrella tienen la mitad izquierda igual que la derecha. La L, no: el pie solo va hacia un lado." },
        { k: 'm3look', ph: 'investiga', q: "Algú ha copiat les ales de l'esquerra a la dreta. Alguna cosa no va bé: què ha passat?|Alguien ha copiado las alas de la izquierda a la derecha. Algo no va bien: ¿qué ha pasado?", model: { parts: PAPA_MAL }, view: 'top',
          opts: ["Ha duplicat les ales però no ha fet servir Mirall: apunten cap al mateix costat|Ha duplicado las alas pero no ha usado el Espejo: apuntan hacia el mismo lado", 'Les ales de la dreta són més petites|Las alas de la derecha son más pequeñas', 'La papallona no toca la placa|La mariposa no toca la placa'], a: 0,
          ex: "Una còpia sense Mirall queda igual, no reflectida: l'antena queda a fora i les ales s'inclinen cap al mateix costat. Amb Mirall → x, la meitat dreta seria el reflex de l'esquerra.|Una copia sin Espejo queda igual, no reflejada: la antena queda fuera y las alas se inclinan hacia el mismo lado. Con Espejo → x, la mitad derecha sería el reflejo de la izquierda." },
        { k: 'move', ph: 'pausa', title: 'Cos simètric|Cuerpo simétrico', secs: 30, t: "Imagina un eix que et passa pel mig, del nas al melic. Aixeca els dos braços igual: <b>simètric</b>! Ara un braç amunt i l'altre al costat: no ho és. Fes tres postures simètriques i tres que no ho siguin.|Imagina un eje que te pasa por el medio, de la nariz al ombligo. Levanta los dos brazos igual: ¡<b>simétrico</b>! Ahora un brazo arriba y el otro al lado: no lo es. Haz tres posturas simétricas y tres que no lo sean." },
        { k: 'm3build', ph: 'repte', q: "<b>L'ala que falta.</b> Duplica l'ala groga, fes-hi <b>Mirall → x</b> i posa-la a <b>x = 12</b>.|<b>El ala que falta.</b> Duplica el ala amarilla, aplícale <b>Espejo → x</b> y ponla en <b>x = 12</b>.",
          start: { parts: PAPA0 }, palette: ['cyl'], view: 'top', target: { parts: PAPA },
          checks: [{ k: 'sym', ax: 'x', th: 0.97, t: 'La papallona és simètrica|La mariposa es simétrica' }, { k: 'count', t: 'cyl', min: 8, max: 8, txt: 'Té 4 ales|Tiene 4 alas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca l'ala groga, Duplica i Mirall → Esquerra ↔ dreta (x). Després, a Posició, x = 12 (la y ja és bona: −10).|Toca el ala amarilla, Duplica y Espejo → Izquierda ↔ derecha (x). Después, en Posición, x = 12 (la y ya es buena: −10).", sol: { parts: PAPA },
          done: "Ara sí que vola! L'ala de la dreta és el reflex exacte de la de l'esquerra.|¡Ahora sí que vuela! El ala de la derecha es el reflejo exacto de la de la izquierda." },
        { k: 'm3fix', ph: 'repte', q: "<b>Les ulleres de la Nuvi.</b> La lent dreta no és al seu lloc. Si l'esquerra és a x = −13, on ha d'anar la dreta? Arregla-la.|<b>Las gafas de Nuvi.</b> La lente derecha no está en su sitio. Si la izquierda está en x = −13, ¿dónde tiene que ir la derecha? Arréglala.",
          start: { parts: ULL0 }, fix: ['v2'], palette: ['cyl'], view: 'top',
          checks: [{ k: 'sym', ax: 'x', th: 0.98, t: 'Les ulleres són simètriques|Las gafas son simétricas' }, { k: 'match', target: { parts: ULL1 }, th: 0.97, t: 'La lent és al lloc del reflex|La lente está en el sitio del reflejo' }, { k: 'one' }],
          hint: "El reflex de x = −13 és x = 13. La lent ja està seleccionada: a Posició, escriu x = 13.|El reflejo de x = −13 es x = 13. La lente ya está seleccionada: en Posición, escribe x = 13.", sol: { parts: ULL1 } },
        { k: 'm3build', ph: 'repte', q: "<b>La cara del robot-guia.</b> Les peces de l'esquerra estan <b>agrupades</b>. Duplica el grup, fes-hi <b>Mirall → x</b> i posa'l a <b>x = 19</b>.|<b>La cara del robot guía.</b> Las piezas de la izquierda están <b>agrupadas</b>. Duplica el grupo, aplícale <b>Espejo → x</b> y ponlo en <b>x = 19</b>.",
          start: { parts: ROBOT0 }, palette: ['box', 'cyl', 'sph', 'wedge'], view: 'front', target: { parts: ROBOT1 },
          checks: [{ k: 'sym', ax: 'x', th: 0.98, t: 'La cara és simètrica|La cara es simétrica' }, { k: 'count', t: 'wedge', min: 2, max: 2, txt: 'Té dues aletes|Tiene dos aletas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca l'aleta groga (se selecciona tot el grup). Duplica, Mirall → Esquerra ↔ dreta (x) i, a Posició, x = 19.|Toca la aleta amarilla (se selecciona todo el grupo). Duplica, Espejo → Izquierda ↔ derecha (x) y, en Posición, x = 19.", sol: { parts: ROBOT1 } },
        { k: 'm3build', ph: 'repte', q: "<b>El bus elèctric.</b> Duplica el costat de les rodes, fes <b>Mirall → y</b> i posa'l a <b>x = 0, y = 14</b>.|<b>El autobús eléctrico.</b> Duplica el lado de las ruedas, haz <b>Espejo → y</b> y ponlo en <b>x = 0, y = 14</b>.",
          start: { parts: BUS0 }, palette: ['cyl', 'box'], target: { parts: BUS1 },
          checks: [{ k: 'sym', ax: 'y', th: 0.98, t: 'Els dos costats del bus són iguals (mirall en y)|Los dos lados del autobús son iguales (espejo en y)' }, { k: 'count', t: 'cyl', min: 4, max: 4, txt: 'Té 4 rodes|Tiene 4 ruedas' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca una roda (se selecciona tot el costat). Duplica, Mirall → Davant ↔ darrere (y) i, a Posició, x = 0 i y = 14.|Toca una rueda (se selecciona todo el lado). Duplica, Espejo → Delante ↔ detrás (y) y, en Posición, x = 0 e y = 14.", sol: { parts: BUS1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>La flor de dos eixos.</b> Copia el pètal amb <b>Mirall → x</b> i, després, els dos pètals amb <b>Mirall → y</b>.|<b>La flor de dos ejes.</b> Copia el pétalo con <b>Espejo → x</b> y, después, los dos pétalos con <b>Espejo → y</b>.",
          start: { parts: FLOR0 }, palette: ['cyl'], view: 'top', target: { parts: FLOR1 },
          checks: [{ k: 'sym', ax: 'x', th: 0.97, t: "Simètrica d'esquerra a dreta|Simétrica de izquierda a derecha" }, { k: 'sym', ax: 'y', th: 0.97, t: 'Simètrica de davant a darrere|Simétrica de delante a detrás' }, { k: 'count', t: 'cyl', min: 5, max: 5, txt: 'El centre i 4 pètals|El centro y 4 pétalos' }, { k: 'one' }],
          hint: "Pètal: Duplica, Mirall → x i Posició x = 11. Després tria els dos pètals, Duplica, Mirall → y i Posició x = 0, y = 11.|Pétalo: Duplica, Espejo → x y Posición x = 11. Después elige los dos pétalos, Duplica, Espejo → y y Posición x = 0, y = 11.", sol: { parts: FLOR1 } },
        { k: 'm3free', ph: 'crea', q: "<b>Una figura simètrica.</b> Un animal, una màscara o un vehicle: fes-ne la meitat i completa-la amb <b>Mirall</b>.|<b>Una figura simétrica.</b> Un animal, una máscara o un vehículo: haz la mitad y complétala con el <b>Espejo</b>.",
          name: 'La meva figura simètrica|Mi figura simétrica', palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'heart', 'star', 'hex'],
          crit: ['Té un eix de simetria: les dues meitats són iguals|Tiene un eje de simetría: las dos mitades son iguales', "Has fet una meitat i l'altra amb Mirall|Has hecho una mitad y la otra con el Espejo", 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'sym', ax: 'x', th: 0.95, t: "És simètrica d'esquerra a dreta|Es simétrica de izquierda a derecha" }, { k: 'count', min: 4, txt: 'Almenys 4 peces|Al menos 4 piezas' }, { k: 'one' }, { k: 'onplate' }], sol: { parts: PAPA } },
        { k: 'quiz', ph: 'tanca', q: "Una peça és a <b>x = −22</b>. Si l'eix de simetria és x = 0, on va el seu reflex?|Una pieza está en <b>x = −22</b>. Si el eje de simetría es x = 0, ¿dónde va su reflejo?",
          opts: ['x = 22|x = 22', 'x = −22|x = −22', 'x = 44|x = 44'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Un cotxe és llarg en x. Quin mirall fas servir per passar les rodes d\'un costat del cotxe a l\'altre?|Un coche es largo en x. ¿Qué espejo usas para pasar las ruedas de un lado del coche al otro?',
          opts: ['Davant ↔ darrere (y)|Delante ↔ detrás (y)', 'Esquerra ↔ dreta (x)|Izquierda ↔ derecha (x)', 'Cap: les rodes no es poden emmirallar|Ninguno: las ruedas no se pueden reflejar'], a: 0,
          ex: "Els costats d'un cotxe llarg en x són a −y i a +y: el mirall en y passa d'un a l'altre.|Los lados de un coche largo en x están en −y y en +y: el espejo en y pasa de uno a otro." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* ---------- Sessió 4 · Projecte: la casa del futur ---------- */
    { id: 'm4-4', t: 'Projecte: la casa del futur|Proyecto: la casa del futuro', min: 45, proj: true, badge: 'm44_casa',
      learn: ['Un projecte gran es fa per parts i de baix a dalt: base, cos de la casa, teulada i, al final, els detalls.|Un proyecto grande se hace por partes y de abajo arriba: base, cuerpo de la casa, tejado y, al final, los detalles.',
        'Les finestres i la porta són peces fines enganxades a la façana: encara sense forats.|Las ventanas y la puerta son piezas finas pegadas a la fachada: todavía sin agujeros.',
        "Alinear, duplicar i emmirallar estalvien feina: una teulada o una finestra ben fetes es copien i es reflecteixen a l'altra banda.|Alinear, duplicar y reflejar ahorran trabajo: un tejado o una ventana bien hechos se copian y se reflejan al otro lado."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Per posar la teulada <b>recolzada</b> a sobre de les parets, quina opció d'Alinea fas servir?|Para poner el tejado <b>apoyado</b> encima de las paredes, ¿qué opción de Alinea usas?",
          opts: ['A sobre de la peça de sota|Encima de la pieza de debajo', 'Al centre de la placa|Al centro de la placa', 'A terra (z = 0)|Al suelo (z = 0)'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Tens una finestra a <b>x = −14</b>. On va la seva bessona perquè la façana sigui <b>simètrica</b>?|Tienes una ventana en <b>x = −14</b>. ¿Dónde va su gemela para que la fachada sea <b>simétrica</b>?',
          opts: ['x = 14|x = 14', 'x = −28|x = −28', 'x = 0|x = 0'], a: 0, ex: 'El reflex de x = −14 és x = 14: només canvia el signe.|El reflejo de x = −14 es x = 14: solo cambia el signo.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'fab', title: 'La casa del futur|La casa del futuro',
          t: "Avui és el gran dia! Falta la peça estrella de la maqueta: <b>la casa del futur</b>. La Mireia la vol amb <b>finestres</b> per aprofitar el sol, una <b>teulada a dues aigües</b> i un <b>jardí</b> amb arbres. I com que és la casa de l'exposició, la façana ha de ser <b>simètrica</b>. Farem servir tot el que hem après: alinear, duplicar i el mirall!|¡Hoy es el gran día! Falta la pieza estrella de la maqueta: <b>la casa del futuro</b>. Mireia la quiere con <b>ventanas</b> para aprovechar el sol, un <b>tejado a dos aguas</b> y un <b>jardín</b> con árboles. Y como es la casa de la exposición, la fachada tiene que ser <b>simétrica</b>. ¡Usaremos todo lo que hemos aprendido: alinear, duplicar y el espejo!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La casa del futur|La casa del futuro', t: 'El model, peça a peça|El modelo, pieza a pieza', media: { k: 'model', model: { parts: ARB1 } },
            x: "Aquesta és la casa que farem: un <b>jardí</b> (la base), el <b>cos</b> de la casa, una <b>teulada</b> de dues falques, una <b>porta</b> al mig, dues <b>finestres</b>, un camí i quatre <b>arbres</b>. Gira-la per veure-la de tots els costats.|Esta es la casa que haremos: un <b>jardín</b> (la base), el <b>cuerpo</b> de la casa, un <b>tejado</b> de dos cuñas, una <b>puerta</b> en el medio, dos <b>ventanas</b>, un camino y cuatro <b>árboles</b>. Gírala para verla desde todos los lados." },
          { k: 'Finestres sense forats|Ventanas sin agujeros', t: 'Peces fines a la façana|Piezas finas en la fachada', anim: 'm44fin',
            x: "Una finestra d'aquesta casa és una <b>caixa fina</b> de 2 mm enganxada a la façana: la meitat queda dins la paret i l'altra meitat sobresurt, així queda ben unida. Els <b>forats</b> de veritat els aprendrem a la unitat següent!|Una ventana de esta casa es una <b>caja fina</b> de 2 mm pegada a la fachada: la mitad queda dentro de la pared y la otra mitad sobresale, así queda bien unida. ¡Los <b>agujeros</b> de verdad los aprenderemos en la unidad siguiente!",
            tip: 'La façana del davant és a y = −15: les finestres hi van amb el centre a y = −15.|La fachada de delante está en y = −15: las ventanas van con el centro en y = −15.' },
          { k: 'Pla de treball|Plan de trabajo', t: 'De baix a dalt i per parts|De abajo arriba y por partes', anim: 'm44pla',
            x: "Com amb el robot, la casa es fa per parts: 1) el <b>cos</b> recolzat al jardí, 2) la <b>teulada</b>, 3) la <b>porta i les finestres</b>, 4) els <b>arbres</b> i, al final, 5) els <b>detalls</b> teus. Comprova cada part abans de passar a la següent.|Como con el robot, la casa se hace por partes: 1) el <b>cuerpo</b> apoyado en el jardín, 2) el <b>tejado</b>, 3) la <b>puerta y las ventanas</b>, 4) los <b>árboles</b> y, al final, 5) los <b>detalles</b> tuyos. Comprueba cada parte antes de pasar a la siguiente." },
          { k: 'Les eines|Las herramientas', t: 'Alinea, Duplica i Mirall|Alinea, Duplica y Espejo', media: { k: 'model', model: { parts: FIN1 } },
            x: "<b>Alinea</b> per centrar la casa i recolzar-la; <b>Duplica</b> per fer arbres o finestres iguals; <b>Mirall</b> per fer la segona aigua de la teulada i passar les finestres a l'altra banda.|<b>Alinea</b> para centrar la casa y apoyarla; <b>Duplica</b> para hacer árboles o ventanas iguales; <b>Espejo</b> para hacer la segunda agua del tejado y pasar las ventanas al otro lado.",
            bad: 'Faig cada finestra des de zero i a ull.|Hago cada ventana desde cero y a ojo.', good: "Faig una finestra ben feta, la duplico i l'emmirallo.|Hago una ventana bien hecha, la duplico y la reflejo." },
          { k: 'Simètrica?|¿Simétrica?', t: "L'eix passa per la porta|El eje pasa por la puerta", media: { k: 'model', model: { parts: FIN1 }, view: 'front' },
            x: "Mira la casa de davant: l'<b>eix de simetria</b> passa pel mig de la porta (x = 0). Si a l'esquerra hi ha una finestra a x = −15, a la dreta n'hi ha d'haver una a <b>x = 15</b>. La teulada també té dues meitats iguals.|Mira la casa de frente: el <b>eje de simetría</b> pasa por el medio de la puerta (x = 0). Si a la izquierda hay una ventana en x = −15, a la derecha tiene que haber una en <b>x = 15</b>. El tejado también tiene dos mitades iguales." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🏠', title: 'El plànol de la façana|El plano de la fachada', t: 'En paper quadriculat (cada quadret, 5 mm), amb un regle i colors:|En papel cuadriculado (cada cuadrito, 5 mm), con una regla y colores:',
          steps: ["Dibuixa l'eix de simetria: una línia vertical al mig del full.|Dibuja el eje de simetría: una línea vertical en el medio de la hoja.",
            "Dibuixa la meitat esquerra de la façana: la paret, mitja teulada, mitja porta i una finestra.|Dibuja la mitad izquierda de la fachada: la pared, medio tejado, media puerta y una ventana.",
            "Passa-la a l'altra banda comptant quadrets: si la finestra és a 3 quadrets de l'eix, l'altra també.|Pásala al otro lado contando cuadritos: si la ventana está a 3 cuadritos del eje, la otra también.",
            "Afegeix-hi un detall teu (plaques solars, una xemeneia, un porxo) i escriu les mides en mm.|Añade un detalle tuyo (placas solares, una chimenea, un porche) y escribe las medidas en mm."],
          tip: "Aquest plànol et servirà de guia per personalitzar la casa al final de la sessió.|Este plano te servirá de guía para personalizar la casa al final de la sesión." },
        { k: 'm3look', ph: 'prova', q: 'La façana d\'aquest bloc de pisos hauria de ser simètrica. Toca la finestra que <b>trenca la simetria</b>.|La fachada de este bloque de pisos tendría que ser simétrica. Toca la ventana que <b>rompe la simetría</b>.', model: { parts: PISOS }, view: 'front', pick: 'trenca',
          no: "Aquesta té la seva bessona a l'altra banda, a la mateixa distància de l'eix.|Esta tiene su gemela al otro lado, a la misma distancia del eje.",
          ex: "Les finestres de l'esquerra són a x = −15. La del mig de la dreta és a x = 21: per ser simètrica, hauria d'anar a x = 15.|Las ventanas de la izquierda están en x = −15. La del medio de la derecha está en x = 21: para ser simétrica, tendría que ir en x = 15." },
        { k: 'm3fix', ph: 'investiga', q: "Ui! La <b>teulada flota</b> 8 mm per sobre de les parets. Recolza-la a sobre de la casa.|¡Uy! El <b>tejado flota</b> 8 mm por encima de las paredes. Apóyalo encima de la casa.",
          start: { parts: FLOTA }, fix: ['t1', 't2'], palette: ['wedge'],
          checks: [{ k: 'part', t: 'wedge', at: [13, 0, 41.5], tol: 0.6, txt: 'La teulada comença a z = 34, on acaben les parets|El tejado empieza en z = 34, donde acaban las paredes' }, { k: 'zmax', v: 49, t: "Fa com a molt 49 mm d'alçada|Mide como mucho 49 mm de alto" }, { k: 'one' }],
          hint: "La teulada és un grup i ja està seleccionada: Alinea → A sobre de la peça de sota.|El tejado es un grupo y ya está seleccionado: Alinea → Encima de la pieza de debajo.", sol: { parts: FLOTA1 } },
        { k: 'move', ph: 'pausa', title: 'La casa amb el cos|La casa con el cuerpo', secs: 30, t: "Per parelles, l'un davant de l'altre: feu una <b>teulada a dues aigües</b> ajuntant les mans a dalt. Ara una <b>finestra</b> amb les mans (un quadrat) i, alhora, el company fa la seva bessona, com en un <b>mirall</b>!|Por parejas, uno delante del otro: haced un <b>tejado a dos aguas</b> juntando las manos arriba. Ahora una <b>ventana</b> con las manos (un cuadrado) y, a la vez, el compañero hace su gemela, ¡como en un <b>espejo</b>!" },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 1: la casa al jardí.</b> Porta el cos de la casa al <b>centre de la placa</b> i recolza'l a sobre del jardí.|<b>Paso 1: la casa en el jardín.</b> Lleva el cuerpo de la casa al <b>centro de la placa</b> y apóyalo encima del jardín.",
          start: { parts: CASA0 }, palette: ['box'], target: { parts: CASA1 },
          checks: [{ k: 'part', t: 'box', s: [50, 30, 30], at: [0, 0, 19], tol: 0.6, txt: 'La casa és centrada i comença a z = 4|La casa está centrada y empieza en z = 4' }, { k: 'one' }, { k: 'onplate' }],
          hint: "Toca la casa blanca. Alinea → Al centre de la placa i, després, Alinea → A sobre de la peça de sota.|Toca la casa blanca. Alinea → Al centro de la placa y, después, Alinea → Encima de la pieza de debajo.", sol: { parts: CASA1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 2: la teulada a dues aigües.</b> Ja hi ha la falca de la dreta. Duplica-la, fes-hi <b>Mirall → x</b> i posa-la a <b>x = −13</b>.|<b>Paso 2: el tejado a dos aguas.</b> Ya está la cuña de la derecha. Duplícala, aplícale <b>Espejo → x</b> y ponla en <b>x = −13</b>.",
          start: { parts: TEU0 }, palette: ['wedge'], view: 'front', target: { parts: TEU1 },
          checks: [{ k: 'count', t: 'wedge', min: 2, max: 2, txt: 'La teulada té dues aigües (2 falques)|El tejado tiene dos aguas (2 cuñas)' }, { k: 'sym', ax: 'x', th: 0.98, t: 'La casa és simètrica|La casa es simétrica' }, { k: 'match', target: { parts: TEU1 }, th: 0.96, t: 'La teulada és com el fantasma|El tejado es como el fantasma' }, { k: 'one' }],
          hint: "Toca la falca vermella, Duplica i Mirall → Esquerra ↔ dreta (x). A Posició: x = −13. La z ja és la bona (34).|Toca la cuña roja, Duplica y Espejo → Izquierda ↔ derecha (x). En Posición: x = −13. La z ya es la buena (34).", sol: { parts: TEU1 } },
        { k: 'm3build', ph: 'repte', q: "<b>Pas 3: les finestres.</b> La porta és al mig i la finestra de l'esquerra ja hi és. Fes la seva bessona emmirallada a <b>x = 15</b>.|<b>Paso 3: las ventanas.</b> La puerta está en el medio y la ventana de la izquierda ya está. Haz su gemela reflejada en <b>x = 15</b>.",
          start: { parts: FIN0 }, palette: ['box'], view: 'front', target: { parts: FIN1 },
          checks: [{ k: 'part', t: 'box', s: [10, 2, 10], at: [15, -15, 21], tol: 0.8, txt: 'Hi ha una finestra a x = 15|Hay una ventana en x = 15' }, { k: 'sym', ax: 'x', th: 0.98, t: 'La façana és simètrica|La fachada es simétrica' }, { k: 'one' }],
          hint: "Toca la finestra blava, Duplica, Mirall → x i, a Posició, x = 15. La y (−15) i la z (16) no canvien.|Toca la ventana azul, Duplica, Espejo → x y, en Posición, x = 15. La y (−15) y la z (16) no cambian.", sol: { parts: FIN1 } },
        { k: 'm3build', ph: 'repte', extra: true, q: "<b>Pas 4: els arbres.</b> Fes dos arbres a l'esquerra, a <b>x = −40</b> i <b>x = −24</b>, i passa'ls a la dreta amb el mirall: <b>x = 24</b> i <b>x = 40</b>.|<b>Paso 4: los árboles.</b> Haz dos árboles a la izquierda, en <b>x = −40</b> y <b>x = −24</b>, y pásalos a la derecha con el espejo: <b>x = 24</b> y <b>x = 40</b>.",
          start: { parts: ARB0 }, palette: ['cyl', 'cone'], target: { parts: ARB1 },
          checks: [{ k: 'count', t: 'cone', min: 4, max: 4, txt: 'Hi ha 4 arbres|Hay 4 árboles' }, { k: 'part', t: 'cone', at: [24, -36, null], tol: 1, txt: 'Un arbre a x = 24|Un árbol en x = 24' }, { k: 'part', t: 'cone', at: [40, -36, null], tol: 1, txt: 'Un arbre a x = 40|Un árbol en x = 40' }, { k: 'sym', ax: 'x', th: 0.98, t: 'Tot és simètric|Todo es simétrico' }],
          hint: "L'arbre és un grup. Duplica'l i posa'l a x = −24. Tria els dos arbres, Duplica, Mirall → x i posa'ls a x = 32 (el centre dels dos).|El árbol es un grupo. Duplícalo y ponlo en x = −24. Elige los dos árboles, Duplica, Espejo → x y ponlos en x = 32 (el centro de los dos).", sol: { parts: ARB1 } },
        { k: 'm3free', ph: 'crea', q: "<b>La teva casa del futur.</b> Afegeix-hi detalls teus (plaques solars, xemeneia, fanals…) i colors. Que continuï sent <b>simètrica</b>!|<b>Tu casa del futuro.</b> Añádele detalles tuyos (placas solares, chimenea, farolas…) y colores. ¡Que siga siendo <b>simétrica</b>!",
          name: 'La meva casa del futur|Mi casa del futuro', start: { parts: ARB1 }, palette: ['box', 'cyl', 'sph', 'cone', 'pyr', 'wedge', 'hex', 'torus', 'star', 'heart'],
          crit: ['Té totes les parts: jardí, casa, teulada, porta i finestres|Tiene todas las partes: jardín, casa, tejado, puerta y ventanas', "La façana és simètrica: l'eix passa per la porta|La fachada es simétrica: el eje pasa por la puerta", 'Hi has afegit almenys 2 detalls teus amb Alinea, Duplica o Mirall|Le has añadido al menos 2 detalles tuyos con Alinea, Duplica o Espejo', 'És una sola peça i toca la placa|Es una sola pieza y toca la placa'],
          checks: [{ k: 'count', min: 18, txt: 'Almenys 2 peces noves teves|Al menos 2 piezas nuevas tuyas' }, { k: 'sym', ax: 'x', th: 0.9, t: "La casa és simètrica d'esquerra a dreta|La casa es simétrica de izquierda a derecha" }, { k: 'colors', min: 3 }, { k: 'one' }, { k: 'onplate' }],
          sol: { parts: CASA_MEVA } },
        { k: 'quiz', ph: 'tanca', q: 'Quin és el millor ordre per construir la casa?|¿Cuál es el mejor orden para construir la casa?',
          opts: ['Cos, teulada, porta i finestres, i detalls|Cuerpo, tejado, puerta y ventanas, y detalles', 'Detalls, teulada i, al final, el cos|Detalles, tejado y, al final, el cuerpo', 'Totes les peces alhora i després moure-les|Todas las piezas a la vez y después moverlas'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: "Per fer la segona aigua de la teulada, què fas amb la primera falca?|Para hacer la segunda agua del tejado, ¿qué haces con la primera cuña?",
          opts: ["La duplico, li aplico el Mirall i la poso a l'altra banda|La duplico, le aplico el Espejo y la pongo al otro lado", 'La duplico i ja està|La duplico y ya está', 'La faig el doble de gran|La hago el doble de grande'], a: 0,
          ex: "Sense el Mirall, la segona falca baixaria cap al mateix costat i la teulada quedaria torta.|Sin el Espejo, la segunda cuña bajaría hacia el mismo lado y el tejado quedaría torcido." },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();
