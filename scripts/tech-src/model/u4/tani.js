/* Tech 3D · Nivell 1 · unitat 4 · animacions de teoria (TANI): alinear, recolzar, duplicar, el pas, la simetria i la casa.
   Dibuixos propis de Numi, en bucle de 5,5 s (SVG + CSS .ta + SMIL). La perspectiva isomètrica és la del taller: x cap a baix a
   la dreta, y cap a dalt a la dreta, z amunt. Les vistes de dalt tenen el davant (−y) a baix, com al botó «Dalt» del taller.
   Claus amb el prefix de la sessió: m41ali, m41sobre, m41vores, m42dup, m42pas, m43eix, m43pas, m44fin, m44pla. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x + y) * 0.866 * k, cy + (x - y) * 0.5 * k - z * k];
  const pts = (f, list) => list.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  // caixa isomètrica amb tres tons [dalt, davant, dreta]
  const box = (f, x0, y0, z0, w, d, h, c) => {
    const T = [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]], F = [[x0, y0, z0], [x0 + w, y0, z0], [x0 + w, y0, z0 + h], [x0, y0, z0 + h]], R = [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]];
    return `<polygon points="${pts(f, F)}" fill="${c[1]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, T)}" fill="${c[0]}"/>`; };
  // teulada a dues aigües (dues falques): carena al llarg de y, a x = xc
  const roof = (f, xc, y0, z0, w, d, h, c) => {
    const Lq = [[xc - w / 2, y0, z0], [xc, y0, z0 + h], [xc, y0 + d, z0 + h], [xc - w / 2, y0 + d, z0]], R = [[xc, y0, z0 + h], [xc + w / 2, y0, z0], [xc + w / 2, y0 + d, z0], [xc, y0 + d, z0 + h]], F = [[xc - w / 2, y0, z0], [xc + w / 2, y0, z0], [xc, y0, z0 + h]];
    return `<polygon points="${pts(f, Lq)}" fill="${c[0]}"/><polygon points="${pts(f, R)}" fill="${c[2]}"/><polygon points="${pts(f, F)}" fill="${c[1]}"/>`; };
  const BLAU = ['#9CC0FF', '#3D7BF4', '#2A5BC4'], VERD = ['#9BE3BC', '#2FB36D', '#228A53'], CEL = ['#BDEBFA', '#5BC0EB', '#3C9CC4'], GROC = ['#FFE79A', '#F7C531', '#D9A514'];
  const BLANC = ['#FFFFFF', '#E6E9F2', '#C9CFDD'], VERM = ['#FF9C95', '#E8453C', '#B8322B'], FOSC = ['#4A5BA0', '#1B2B6B', '#121D4D'], FUSTA = ['#D9A57A', '#A0683A', '#7E4F2A'];
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const pill = (x, y, w, t, fill = '#fff', cls = 'tat s') => `<rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${fill}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="${cls}">${t}</text>`;
  // opacitat discreta: visible només entre els instants a i b (fraccions del cicle de 5,5 s)
  const win = (a, b) => `<animate attributeName="opacity" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="0;1;0" keyTimes="0;${a};${b}"/>`;
  // moviment SMIL: llista de posicions [x, y] als instants keyTimes
  const path = (vals, keys) => `<animateTransform attributeName="transform" type="translate" dur="${D}s" repeatCount="indefinite" values="${vals.map(v => v.join(' ')).join(';')}" keyTimes="${keys.join(';')}" calcMode="spline" keySplines="${keys.slice(1).map(() => '.4 0 .2 1').join(';')}"/>`;
  const ok = (x, y, t, col = '#22A06B', ch = '✓') => `<g ${tA(t, 'ta-pop')}><circle cx="${x}" cy="${y}" r="12" fill="${col}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat w b">${ch}</text></g>`;
  // mitja papallona (ales de l'esquerra) amb la vora dreta a x = 0: per a m43pas
  const half = k => `<ellipse cx="${-14 * k}" cy="${-8 * k}" rx="${13 * k}" ry="${8 * k}" fill="#EC5FA8" transform="rotate(25 ${-14 * k} ${-8 * k})"/><ellipse cx="${-10 * k}" cy="${10 * k}" rx="${9 * k}" ry="${6 * k}" fill="#F7C531" transform="rotate(-30 ${-10 * k} ${10 * k})"/><circle cx="${-16 * k}" cy="${-9 * k}" r="${3 * k}" fill="#fff"/>`;
  return {
    /* ---------- m4-1 · alinear: les mateixes peces, a l'esquerra, al centre i a la dreta ---------- */
    m41ali() {
      const L0 = 30, C0 = 160, R0 = 290, rows = [[150, 54, 70, BLAU[1]], [84, 98, 150, GROC[1]], [200, 142, 46, VERD[1]]];
      const keys = [0, .08, .2, .38, .48, .66, .76, .94, 1];
      const blocks = rows.map(([w, y, x0, c]) => { const l = L0, m = C0 - w / 2, r = R0 - w; const v = [x0, x0, l, l, m, m, r, r, x0].map(x => [x, 0]);
        return `<g>${path(v, keys)}<rect x="0" y="${y}" width="${w}" height="30" rx="7" fill="${c}"/><rect x="0" y="${y}" width="${w}" height="8" rx="4" fill="#fff" opacity=".25"/></g>`; }).join('');
      const guide = (x, a, b, col) => `<g opacity="0">${win(a, b)}<line x1="${x}" y1="44" x2="${x}" y2="184" stroke="${col}" stroke-width="3" stroke-dasharray="6 5"/><circle cx="${x}" cy="44" r="5" fill="${col}"/></g>`;
      const lab = (t, a, b, col) => `<g opacity="0">${win(a, b)}${pill(110, 8, 100, t, col, 'tat w s')}</g>`;
      return tSvg(196, `${bg(196)}${guide(L0, .2, .44, '#E5484D')}${guide(C0, .48, .72, '#7C5CFF')}${guide(R0, .76, .98, '#22A06B')}${blocks}
        ${lab(L('Esquerra', 'Izquierda'), .2, .44, '#E5484D')}${lab(L('Centre', 'Centro'), .48, .72, '#7C5CFF')}${lab(L('Dreta', 'Derecha'), .76, .98, '#22A06B')}
        <g opacity="0">${win(.001, .18)}${pill(96, 8, 128, L('peces desordenades', 'piezas desordenadas'), '#fff', 'tat s')}</g>`);
    },
    /* ---------- m4-1 · recolzar: el tauler baixa, a z = 33 flota i a z = 30 queda recolzat ---------- */
    m41sobre() {
      const K = 2.5, G = 172, Z = z => G - z * K, keys = [0, .1, .32, .56, .68, 1];
      const pil = x => `<rect x="${x}" y="${Z(30)}" width="30" height="${30 * K}" rx="3" fill="#9AA3B5" stroke="#7C849A" stroke-width="2"/>`;
      return tSvg(200, `${bg(200)}<line x1="20" y1="${G}" x2="300" y2="${G}" stroke="#9AA3B5" stroke-width="3" stroke-linecap="round"/>
        <rect x="104" y="${G - 4}" width="112" height="4" fill="#5BC0EB"/>${pil(74)}${pil(216)}
        <g ${tA(.2, 'ta-in')}><line x1="56" y1="${G}" x2="56" y2="${Z(30)}" stroke="#E5484D" stroke-width="2"/><path d="M50 ${G}h12M50 ${Z(30)}h12" stroke="#E5484D" stroke-width="2"/><rect x="22" y="${Z(15) - 10}" width="34" height="20" rx="10" fill="#E5484D"/><text x="39" y="${Z(15) + 5}" text-anchor="middle" class="tat w" style="font-size:11px;font-weight:800">30</text></g>
        <g>${path([[0, -64], [0, -64], [0, -7.5], [0, -7.5], [0, 0], [0, 0]], keys)}<rect x="62" y="${Z(36)}" width="196" height="${6 * K}" rx="3" fill="#A0683A" stroke="#7E4F2A" stroke-width="2"/></g>
        <g opacity="0">${win(.34, .57)}<rect x="96" y="${Z(33) - 1}" width="14" height="9" fill="#E5484D" opacity=".35"/><rect x="210" y="${Z(33) - 1}" width="14" height="9" fill="#E5484D" opacity=".35"/>
          ${pill(118, 116, 84, L('flota! z = 33', '¡flota! z = 33'), '#E5484D', 'tat w s')}</g>
        <g opacity="0">${win(.68, .99)}${pill(124, 116, 72, 'z = 30', '#22A06B', 'tat w s')}<circle cx="232" cy="129" r="11" fill="#22A06B"/><text x="232" y="134" text-anchor="middle" class="tat w b">✓</text></g>
        <g ${tA(.3, 'ta-in')}>${pill(52, 10, 216, L('A sobre de la peça de sota', 'Encima de la pieza de debajo'), '#14204A', 'tat w s')}</g>`);
    },
    /* ---------- m4-1 · vores (vista de dalt): la pota va a l'esquerra i després al davant, a la cantonada ---------- */
    m41vores() {
      const K = 3.6, X = x => 160 + x * K, Y = y => 96 - y * K, s = 4 * K, keys = [0, .1, .28, .42, .6, 1];
      const leg = (x, y) => `<rect x="${(X(x) - s / 2).toFixed(1)}" y="${(Y(y) - s / 2).toFixed(1)}" width="${s}" height="${s}" rx="2" fill="#F3F3EE" stroke="#14204A" stroke-width="2"/>`;
      const v = [[-8, -4], [-8, -4], [-23, -4], [-23, -4], [-23, -13], [-23, -13]].map(([x, y]) => [(X(x) - X(-8)).toFixed(1), (Y(y) - Y(-4)).toFixed(1)]);
      return tSvg(200, `${bg(200)}<rect x="${X(-25)}" y="${Y(15)}" width="${50 * K}" height="${30 * K}" rx="4" fill="#BDEFF5" stroke="#14A3B8" stroke-width="3"/>
        <text x="${X(0)}" y="${Y(9)}" text-anchor="middle" class="tat s" fill="#0E7F90">${L('tauler (de dalt)', 'tablero (de arriba)')}</text>
        <g opacity="0">${win(.12, .44)}<line x1="${X(-25)}" y1="${Y(19)}" x2="${X(-25)}" y2="${Y(-19)}" stroke="#E5484D" stroke-width="3" stroke-dasharray="6 5"/></g>
        <g opacity="0">${win(.44, .99)}<line x1="${X(-29)}" y1="${Y(-15)}" x2="${X(29)}" y2="${Y(-15)}" stroke="#22A06B" stroke-width="3" stroke-dasharray="6 5"/></g>
        <g>${path(v, keys)}${leg(-8, -4)}</g>
        <g opacity="0">${win(.12, .44)}${pill(8, 8, 116, L('X · Esquerra', 'X · Izquierda'), '#E5484D', 'tat w s')}</g>
        <g opacity="0">${win(.44, .99)}${pill(8, 8, 116, L('Y · Davant', 'Y · Delante'), '#22A06B', 'tat w s')}</g>
        <g ${tA(3.6, 'ta-pop')}>${leg(23, -13)}</g><g ${tA(3.9, 'ta-pop')}>${leg(-23, 13)}</g><g ${tA(4.2, 'ta-pop')}>${leg(23, 13)}</g>
        ${ok(X(-23) - 22, Y(-13) + 24, 3.4)}
        <g ${tA(4.4, 'ta-in')}><text x="160" y="190" text-anchor="middle" class="tat s" fill="#5A6383">${L('dos tocs: una cantonada', 'dos toques: una esquina')}</text></g>`);
    },
    /* ---------- m4-2 · duplicar: la columna es copia tres vegades, a 5 mm de la de davant ---------- */
    m42dup() {
      const f = iso(124, 112, 1.9), T = [.2, 1.2, 2.2, 3.2], tap = [.18, .36, .54];
      const cols = [0, 1, 2, 3].map(i => `<g ${tA(T[i], 'ta-pop')}>${box(f, -35 + 15 * i, -5, 4, 10, 10, 30, CEL)}</g>`).join('');
      const [gx, gy] = f(-22.5, -5, 4);
      const flash = `<animate attributeName="fill" dur="${D}s" repeatCount="indefinite" calcMode="discrete" values="#7C5CFF;#B9A7FF;#7C5CFF;#B9A7FF;#7C5CFF;#B9A7FF;#7C5CFF" keyTimes="0;${tap[0]};${tap[0] + .04};${tap[1]};${tap[1] + .04};${tap[2]};${tap[2] + .04}"/>`;
      return tSvg(200, `${bg(200)}<g ${tA(.1, 'ta-fade')}>${box(f, -40, -8, 0, 70, 16, 4, BLANC)}</g>${cols}
        <g ${tA(1.5, 'ta-pop')}><line x1="${gx.toFixed(1)}" y1="${(gy + 8).toFixed(1)}" x2="${(gx - 22).toFixed(1)}" y2="${(gy + 26).toFixed(1)}" stroke="#14204A" stroke-width="1.6"/>${pill(gx - 58, gy + 24, 54, '5 mm', '#14204A', 'tat w s')}</g>
        <g><rect x="206" y="16" width="104" height="34" rx="12" filter="url(#bwSh)">${flash}</rect><text x="258" y="38" text-anchor="middle" class="tat w b">⧉ ${L('Duplica', 'Duplica')}</text></g>
        <g opacity="0">${win(.2, .38)}${pill(232, 58, 52, '×1', '#fff')}</g><g opacity="0">${win(.38, .56)}${pill(232, 58, 52, '×2', '#fff')}</g><g opacity="0">${win(.56, .99)}${pill(232, 58, 52, '×3', '#fff')}</g>
        <g ${tA(3.8, 'ta-in')}>${pill(186, 160, 124, L('una fila de 4!', '¡una fila de 4!'), '#2FB36D', 'tat w s')}</g>`);
    },
    /* ---------- m4-2 · el pas: els pals de la tanca, de 20 en 20 mm ---------- */
    m42pas() {
      const K = 3, X = x => 160 + x * K, A = 112, xs = [-40, -20, 0, 20, 40], T = [.3, .9, 1.5, 2.1, 2.7];
      let ticks = ''; for (let m = -50; m <= 50; m += 10) ticks += `<line x1="${X(m)}" y1="${A + 30}" x2="${X(m)}" y2="${A + (m % 20 ? 35 : 38)}" stroke="#8A93B0" stroke-width="1.4"/>`;
      const posts = xs.map((x, i) => `<g ${tA(T[i], 'ta-pop')}><rect x="${X(x) - 9}" y="${A - 9}" width="18" height="18" rx="3" fill="#A0683A" stroke="#7E4F2A" stroke-width="2"/><text x="${X(x)}" y="${A + 54}" text-anchor="middle" class="tat s">${x}</text></g>`).join('');
      const arcs = xs.slice(1).map((x, i) => `<g ${tA(T[i + 1] + .2, 'ta-in')}><path d="M${X(xs[i]) + 4} ${A - 14}Q${(X(xs[i]) + X(x)) / 2} ${A - 44} ${X(x) - 4} ${A - 14}" fill="none" stroke="#7C5CFF" stroke-width="2.5" marker-end="url(#m42ar)"/><text x="${(X(xs[i]) + X(x)) / 2}" y="${A - 36}" text-anchor="middle" class="tat s" fill="#7C5CFF">+20</text></g>`).join('');
      return tSvg(200, `${bg(200)}<defs><marker id="m42ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#7C5CFF"/></marker></defs>
        <line x1="${X(-52)}" y1="${A + 30}" x2="${X(52)}" y2="${A + 30}" stroke="#E5484D" stroke-width="2.5"/><text x="${X(52) + 4}" y="${A + 35}" class="tat s" fill="#E5484D">x</text>${ticks}
        <g ${tA(3.4, 'ta-fade')}><rect x="${X(-45)}" y="${A - 2}" width="${90 * K}" height="4" rx="2" fill="#F5893A"/></g>${posts}${arcs}
        <g ${tA(3.6, 'ta-pop')}>${pill(102, 10, 116, L('pas = 20 mm', 'paso = 20 mm'), '#7C5CFF', 'tat w b')}</g>`);
    },
    /* ---------- m4-3 · l'eix de simetria: la meitat es gira com una pàgina i fa l'altra meitat ---------- */
    m43eix() {
      const C = 160, wing = `<ellipse cx="116" cy="86" rx="44" ry="26" fill="#EC5FA8" transform="rotate(25 116 86)"/><ellipse cx="126" cy="136" rx="30" ry="19" fill="#F7C531" transform="rotate(-30 126 136)"/>
        <circle cx="108" cy="84" r="9" fill="#fff" opacity=".9"/><circle cx="122" cy="138" r="6" fill="#fff" opacity=".9"/><path d="M156 62Q148 40 132 30" stroke="#1B2B6B" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="131" cy="29" r="4" fill="#1B2B6B"/>`;
      return tSvg(200, `${bg(200)}<g ${tA(.1, 'ta-fade')}>${wing}</g>
        <g transform="translate(${C} 0)"><g><animateTransform attributeName="transform" type="scale" dur="${D}s" repeatCount="indefinite" values="1 1;1 1;-1 1;-1 1" keyTimes="0;.22;.5;1" calcMode="spline" keySplines="0 0 1 1;.4 0 .2 1;0 0 1 1"/><g transform="translate(${-C} 0)" opacity=".92">${wing}</g></g></g>
        <ellipse cx="${C}" cy="104" rx="7" ry="44" fill="#1B2B6B"/>
        <line x1="${C}" y1="14" x2="${C}" y2="190" stroke="#7C5CFF" stroke-width="2.5" stroke-dasharray="7 5"/>
        <g ${tA(.3, 'ta-in')}>${pill(170, 10, 140, L('eix de simetria', 'eje de simetría'), '#7C5CFF', 'tat w s')}</g>
        <g ${tA(.6, 'ta-in')}>${pill(36, 164, 84, L('meitat', 'mitad'), '#fff')}</g>
        <g ${tA(3, 'ta-in')}>${pill(200, 164, 84, L('reflex', 'reflejo'), '#EC5FA8', 'tat w s')}</g>`);
    },
    /* ---------- m4-3 · el truc: meitat → Duplica → Mirall → mou-la fins a l'eix ---------- */
    m43pas() {
      const cy = 92, T = [.2, 1.2, 2.2, 3.2], labs = [L('Meitat', 'Mitad'), L('Duplica', 'Duplica'), L('Mirall', 'Espejo'), L('Mou-la', 'Muévela')];
      const card = (i, body) => { const x = 8 + i * 78; return `<g ${tA(T[i], 'ta-in')}><rect x="${x}" y="22" width="72" height="150" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>
        <circle cx="${x + 36}" cy="40" r="11" fill="#14204A"/><text x="${x + 36}" y="45" text-anchor="middle" class="tat w" style="font-size:12px;font-weight:900">${i + 1}</text>${body(x)}
        <text x="${x + 36}" y="160" text-anchor="middle" class="tat s">${labs[i]}</text></g>`; };
      const axis = A => `<line x1="${A}" y1="58" x2="${A}" y2="132" stroke="#7C5CFF" stroke-width="1.6" stroke-dasharray="4 3"/><ellipse cx="${A}" cy="${cy}" rx="2.5" ry="16" fill="#1B2B6B"/>`;
      const at = (A, k = 1) => `<g transform="translate(${A} ${cy})">${half(k)}</g>`;
      const flip = (c, inner) => `<g transform="translate(${2 * c} 0) scale(-1 1)">${inner}</g>`;
      const k = 1.05, w = 27 * k;
      return tSvg(210, `${bg(210)}
        ${card(0, x => { const A = x + 50; return `${at(A, k)}${axis(A)}`; })}
        ${card(1, x => { const A = x + 32; return `${at(A, k)}${axis(A)}<g opacity=".9">${at(A + w + 7, k)}</g>`; })}
        ${card(2, x => { const A = x + 32, c = A + 7 + w / 2; return `${at(A, k)}${axis(A)}<g opacity=".9">${flip(c, at(A + w + 7, k))}</g>`; })}
        ${card(3, x => { const A = x + 36; return `${at(A, k)}${flip(A, at(A, k))}${axis(A)}`; })}
        <g ${tA(3.9, 'ta-pop')}>${pill(90, 178, 140, L('figura sencera!', '¡figura entera!'), '#2FB36D', 'tat w s')}</g>`);
    },
    /* ---------- m4-4 · finestres sense forats: peces fines enganxades a la façana (de davant i tallada) ---------- */
    m44fin() {
      const win2 = (x, t) => `<g ${tA(t, 'ta-pop')}><rect x="${x}" y="98" width="26" height="26" rx="2" fill="#5BC0EB" stroke="#1B2B6B" stroke-width="2.5"/><path d="M${x + 13} 98v26M${x} 111h26" stroke="#1B2B6B" stroke-width="1.6"/></g>`;
      return tSvg(196, `${bg(196)}
        <g ${tA(.1, 'ta-fade')}><rect x="22" y="80" width="140" height="88" fill="#F3F3EE" stroke="#C9CFDD" stroke-width="2"/><path d="M14 82L92 34L170 82Z" fill="#E8453C" stroke="#B8322B" stroke-width="2" stroke-linejoin="round"/>
          <line x1="16" y1="168" x2="168" y2="168" stroke="#2FB36D" stroke-width="5" stroke-linecap="round"/><rect x="80" y="118" width="24" height="50" rx="2" fill="#A0683A"/></g>
        ${win2(36, .8)}${win2(122, 1.4)}
        <g ${tA(2, 'ta-fade')}><line x1="148" y1="111" x2="214" y2="98" stroke="#7C5CFF" stroke-width="2" stroke-dasharray="4 3"/><circle cx="252" cy="104" r="58" fill="#fff" stroke="#7C5CFF" stroke-width="3" filter="url(#bwSh)"/>
          <rect x="226" y="58" width="22" height="92" fill="#F3F3EE" stroke="#C9CFDD" stroke-width="2"/><rect x="218" y="86" width="16" height="36" rx="2" fill="#5BC0EB" stroke="#1B2B6B" stroke-width="2"/>
          <line x1="226" y1="80" x2="226" y2="128" stroke="#E5484D" stroke-width="1.6" stroke-dasharray="3 2"/><text x="262" y="78" class="tat s" fill="#5A6383" style="font-size:11px">${L('paret', 'pared')}</text></g>
        <g ${tA(2.8, 'ta-in')}>${pill(196, 168, 116, L('2 mm: mig a dins', '2 mm: medio dentro'), '#14204A', 'tat w s')}</g>
        <g ${tA(3.4, 'ta-in')}>${pill(14, 8, 150, L('sense forats, de peces', 'sin agujeros, de piezas'), '#fff')}</g>`);
    },
    /* ---------- m4-4 · el pla de treball de la casa: per parts i de baix a dalt ---------- */
    m44pla() {
      const f = iso(112, 118, 1.05), T = [.3, 1.1, 1.9, 2.7, 3.5];
      const n = (x, y, z, k, t) => { const [a, b] = f(x, y, z); return `<g ${tA(t + .15, 'ta-pop')}><circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="10" fill="#14204A" stroke="#fff" stroke-width="2"/><text x="${a.toFixed(1)}" y="${(b + 4.5).toFixed(1)}" text-anchor="middle" class="tat w" style="font-size:12px;font-weight:900">${k}</text></g>`; };
      const tree = (x, y) => { const [a, b] = f(x, y, 4), [c, d] = f(x, y, 26); return `<line x1="${a.toFixed(1)}" y1="${b.toFixed(1)}" x2="${a.toFixed(1)}" y2="${(b - 12).toFixed(1)}" stroke="#A0683A" stroke-width="4"/><path d="M${(c - 9).toFixed(1)} ${(b - 8).toFixed(1)}L${c.toFixed(1)} ${d.toFixed(1)}L${(c + 9).toFixed(1)} ${(b - 8).toFixed(1)}Z" fill="#1E8E52"/>`; };
      return tSvg(200, `${bg(200)}<g ${tA(.05, 'ta-fade')}>${box(f, -55, -52, 0, 110, 84, 4, VERD)}</g>
        <g ${tA(T[0], 'ta-pop')}>${box(f, -25, -15, 4, 50, 30, 30, BLANC)}</g>
        <g ${tA(T[1], 'ta-pop')}>${roof(f, 0, -17, 34, 52, 34, 15, VERM)}</g>
        <g ${tA(T[2], 'ta-pop')}>${box(f, -6, -16, 4, 12, 1, 18, FUSTA)}${box(f, -20, -16, 16, 10, 1, 10, CEL)}${box(f, 10, -16, 16, 10, 1, 10, CEL)}</g>
        <g ${tA(T[3], 'ta-pop')}>${tree(-40, -36)}${tree(-24, -36)}${tree(24, -36)}${tree(40, -36)}</g>
        <g ${tA(T[4], 'ta-pop')}>${box(f, 6, -12, 40, 14, 20, 2, FOSC)}</g>
        ${n(-28, -15, 20, 1, T[0])}${n(0, -17, 52, 2, T[1])}${n(0, -16, 12, 3, T[2])}${n(-40, -36, 34, 4, T[3])}${n(24, -2, 50, 5, T[4])}
        <g ${tA(.2, 'ta-in')}><rect x="214" y="14" width="98" height="150" rx="14" fill="#fff" filter="url(#bwSh)"/>${[L('cos', 'cuerpo'), L('teulada', 'tejado'), L('finestres', 'ventanas'), L('arbres', 'árboles'), L('detalls', 'detalles')].map((t, i) => `<g ${tA(T[i] + .1, 'ta-in')}><circle cx="230" cy="${36 + i * 27}" r="9" fill="#14204A"/><text x="230" y="${40 + i * 27}" text-anchor="middle" class="tat w" style="font-size:11px;font-weight:900">${i + 1}</text><text x="244" y="${41 + i * 27}" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}</g>
        <g ${tA(4, 'ta-pop')}>${pill(214, 168, 98, L('de baix a dalt', 'de abajo arriba'), '#2FB36D', 'tat w s')}</g>`);
    }
  };
})());
