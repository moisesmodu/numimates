/* Tech 3D · Nivell 2 · unitat 1 · animacions de teoria (TANI). Dibuixos propis de Numi.
   m3recipe i m3primm: p1-1 i p1-3 · p12*: p1-2 (on neix cada forma, centrat, diàmetre) · p14*: p1-4 (procés, esbós amb cotes,
   peces soldades, comprovacions). Els textos de codi porten el color amb style (la classe .tat el fixaria a fosc). */
Object.assign(TANI, (() => {
  const MONO = 'font-family:ui-monospace,Menlo,Consolas,monospace';
  const line = (y, txt, t, col = '#E8EEFF') => `<g ${tA(t, 'ta-in')}><text x="22" y="${y}" class="tat s" style="${MONO};fill:${col}">${txt}</text></g>`;
  // isomètric: +x cap a la dreta i amunt, +y cap a l'esquerra i amunt, z amunt (es veuen les cares x mínima, y mínima i la de dalt)
  const ISO = (ox, oy, k) => (x, y, z) => [ox + (x - y) * 0.866 * k, oy - (x + y) * 0.5 * k - z * k];
  const pts = a => a.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ');
  const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(v => Math.round(f >= 0 ? v + (255 - v) * f : v * (1 + f))); return '#' + c.map(v => v.toString(16).padStart(2, '0')).join(''); };
  const box = (I, x0, y0, z0, sx, sy, sz, c, extra = '') => { const x1 = x0 + sx, y1 = y0 + sy, z1 = z0 + sz;
    return `<g ${extra}><polygon points="${pts([I(x0, y0, z0), I(x0, y1, z0), I(x0, y1, z1), I(x0, y0, z1)])}" fill="${shade(c, -.12)}"/><polygon points="${pts([I(x0, y0, z0), I(x1, y0, z0), I(x1, y0, z1), I(x0, y0, z1)])}" fill="${shade(c, -.3)}"/><polygon points="${pts([I(x0, y0, z1), I(x1, y0, z1), I(x1, y1, z1), I(x0, y1, z1)])}" fill="${shade(c, .28)}"/></g>`; };
  const cyl = (I, k, cx, cy, z0, r, h, c, extra = '') => { const [bx, by] = I(cx, cy, z0), [tx, ty] = I(cx, cy, z0 + h), rx = r * k * 1.2247, ry = r * k * .7071;
    return `<g ${extra}><path d="M${(bx - rx).toFixed(1)} ${by.toFixed(1)} A${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 0 ${(bx + rx).toFixed(1)} ${by.toFixed(1)} L${(tx + rx).toFixed(1)} ${ty.toFixed(1)} L${(tx - rx).toFixed(1)} ${ty.toFixed(1)} Z" fill="${shade(c, -.22)}"/><ellipse cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${shade(c, .25)}"/></g>`; };
  const ball = (I, k, x, y, z, r, c, extra = '') => { const [sx, sy] = I(x, y, z), R = r * k * 1.15;
    return `<g ${extra}><circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${R.toFixed(1)}" fill="${c}"/><circle cx="${(sx + R * .2).toFixed(1)}" cy="${(sy + R * .25).toFixed(1)}" r="${(R * .8).toFixed(1)}" fill="${shade(c, -.25)}" opacity=".45"/><circle cx="${(sx - R * .35).toFixed(1)}" cy="${(sy - R * .38).toFixed(1)}" r="${(R * .28).toFixed(1)}" fill="#fff" opacity=".55"/></g>`; };
  // els tres eixos a l'origen (x vermell, y verd, z blau) i el punt de l'origen
  const axes = (I, L = 34, lab = true) => { const o = I(0, 0, 0), ax = [[I(L, 0, 0), '#E8453C', 'x'], [I(0, L, 0), '#2FB36D', 'y'], [I(0, 0, L), '#3D7BF4', 'z']];
    return ax.map(([p, c, n]) => `<line x1="${o[0].toFixed(1)}" y1="${o[1].toFixed(1)}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>${lab ? `<text x="${(p[0] + (n === 'y' ? -9 : n === 'x' ? 5 : 4)).toFixed(1)}" y="${(p[1] + (n === 'z' ? -2 : 4)).toFixed(1)}" class="tat s" style="fill:${c}">${n}</text>` : ''}`).join(''); };
  const dot = (I, t = 0) => { const o = I(0, 0, 0); return `<g ${tA(t)}><circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="5.5" fill="#FFC531" stroke="#14204A" stroke-width="2"/></g>`; };
  const chip = (x, y, w, txt, t, c = '#14204A', cls = 'ta-in') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="${w}" height="24" rx="12" fill="${c}"/><text x="${x + w / 2}" y="${y + 16.5}" text-anchor="middle" class="tat s w" style="${MONO}">${txt}</text></g>`;
  const pill = (x, y, w, txt, t, cls = 'ta-in') => `<g ${tA(t, cls)}><rect x="${x - w / 2}" y="${y}" width="${w}" height="22" rx="11" fill="#fff" filter="url(#bwSh)"/><text x="${x}" y="${y + 15.5}" text-anchor="middle" class="tat s">${txt}</text></g>`;
  return {
    // el programa és la recepta: cada línia fa aparèixer una peça del model
    m3recipe() {
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="10" y="22" width="150" height="156" rx="14" fill="#14204A"/>
        ${line(56, `${L('cub', 'cubo')}(60, 30, 6)`, .2)}${line(92, `${L('mou', 'mueve')}(30, 15, 6)`, 1.4, '#C9B6FF')}${line(112, `  ${L('cilindre', 'cilindro')}(12, 30)`, 1.4)}${line(148, `${L('mou', 'mueve')}(30, 15, 42)`, 2.6, '#C9B6FF')}${line(168, `  ${L('esfera', 'esfera')}(14)`, 2.6)}
        <ellipse cx="240" cy="168" rx="60" ry="10" fill="#14204A" opacity=".12"/>
        <g ${tA(.5)}><polygon points="186,150 246,170 296,150 236,132" fill="#B9A7FF"/><polygon points="186,150 246,170 246,177 186,157" fill="#7C5CFF"/><polygon points="246,170 296,150 296,157 246,177" fill="#5B3FD6"/></g>
        <g ${tA(1.7)}><rect x="234" y="106" width="16" height="45" fill="#2FB36D"/><rect x="242" y="106" width="8" height="45" fill="#23905A"/><ellipse cx="242" cy="106" rx="8" ry="3.5" fill="#7FD6A6"/></g>
        <g ${tA(2.9)}><circle cx="242" cy="93" r="11" fill="#EC5FA8"/><circle cx="238" cy="89" r="3.5" fill="#fff" opacity=".6"/></g>
        <g ${tA(3.6, 'ta-in')}><rect x="174" y="12" width="136" height="28" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="242" y="31" text-anchor="middle" class="tat s">${L('de dalt a baix', 'de arriba abajo')}</text></g>`);
    },
    // PRIMM: predir, executar, investigar, modificar i crear
    m3primm() {
      const st = [[L('Predir', 'Predecir'), '#2F5BEA'], [L('Executar', 'Ejecutar'), '#1FA463'], [L('Investigar', 'Investigar'), '#F08A24'], [L('Modificar', 'Modificar'), '#8B5CF6'], [L('Crear', 'Crear'), '#D63F8C']];
      const pos = [[160, 40], [262, 92], [224, 166], [96, 166], [58, 92]];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><circle cx="160" cy="108" r="64" fill="none" stroke="#DCE4FA" stroke-width="6" stroke-dasharray="4 10"/>
        <text x="160" y="104" text-anchor="middle" class="tat b">${L('Llegir', 'Leer')}</text><text x="160" y="124" text-anchor="middle" class="tat s">${L('com un enginyer', 'como un ingeniero')}</text>
        ${st.map(([t, c], i) => `<g ${tA(.3 + i * .7)}><rect x="${pos[i][0] - 50}" y="${pos[i][1] - 16}" width="100" height="32" rx="16" fill="${c}" filter="url(#bwSh)"/><text x="${pos[i][0]}" y="${pos[i][1] + 5}" text-anchor="middle" class="tat w s">${i + 1} · ${t}</text></g>`).join('')}`);
    },
    /* ---------- p1-2 · Cub, cilindre i esfera ---------- */
    // on neix cada forma: el punt de referència (groc) és a l'origen
    p12ref() {
      const k = 1.55, A = ISO(58, 138, k), B = ISO(160, 138, k), C = ISO(262, 138, k);
      const panel = (x, t) => `<rect x="${x}" y="14" width="96" height="172" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${panel(10)}${panel(112)}${panel(214)}
        <g ${tA(.2)}>${box(A, 0, 0, 0, 22, 22, 22, '#7C5CFF')}</g>${axes(A, 30, false)}${dot(A, .5)}
        <g ${tA(1.2)}>${cyl(B, k, 0, 0, 0, 12, 26, '#2FB36D')}</g>${axes(B, 30, false)}${dot(B, 1.5)}
        <g ${tA(2.2)}>${ball(C, k, 0, 0, 0, 13, '#EC5FA8')}</g>${axes(C, 30, false)}${dot(C, 2.5)}
        <text x="58" y="34" text-anchor="middle" class="tat s" style="${MONO}">${L('cub', 'cubo')}</text><text x="160" y="34" text-anchor="middle" class="tat s" style="${MONO}">${L('cilindre', 'cilindro')}</text><text x="262" y="34" text-anchor="middle" class="tat s" style="${MONO}">esfera</text>
        ${pill(58, 156, 88, L('cantonada', 'esquina'), .8)}${pill(160, 156, 92, L('centre base', 'centro base'), 1.8)}${pill(262, 156, 80, L('centre', 'centro'), 2.8)}`);
    },
    // centrat: el centre a l'origen (mig per sota de la placa) i mou(0, 0, alçada/2) per tornar-la a sobre (vista de costat)
    p12cen() {
      const plate = y => `<rect x="14" y="${y}" width="292" height="10" rx="3" fill="#C9D4F2"/><line x1="14" y1="${y}" x2="306" y2="${y}" stroke="#7C8BC4" stroke-width="2"/>`;
      return tSvg(200, `<defs><pattern id="p12hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#FDE3E1"/><line x1="0" y1="0" x2="0" y2="6" stroke="#E8453C" stroke-width="2"/></pattern></defs>
        <rect width="320" height="200" rx="20" fill="#F1F2FB"/>${plate(132)}
        <line x1="84" y1="40" x2="84" y2="176" stroke="#3D7BF4" stroke-width="1.6" stroke-dasharray="4 4"/><line x1="236" y1="40" x2="236" y2="176" stroke="#3D7BF4" stroke-width="1.6" stroke-dasharray="4 4"/>
        <g ${tA(.2)}><rect x="84" y="80" width="52" height="52" rx="3" fill="#8B6CFF" stroke="#5B3FD6" stroke-width="2"/></g>
        ${chip(40, 16, 92, `${L('cub', 'cubo')}(20)`, .4)}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -26;0 -26;0 0" keyTimes="0;.42;.56;.94;1" dur="5.5s" repeatCount="indefinite"/>
          <rect x="210" y="106" width="52" height="26" fill="#8B6CFF" stroke="#5B3FD6" stroke-width="2"/><rect x="210" y="132" width="52" height="26" fill="url(#p12hat)" stroke="#E8453C" stroke-width="2"/>
          <circle cx="236" cy="132" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/></g>
        ${chip(180, 16, 124, `${L('cub', 'cubo')}(20, ${L('centrat', 'centrado')})`, 1)}
        <circle cx="84" cy="132" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/>
        <g ${tA(1.6, 'ta-fade')}><text x="236" y="186" text-anchor="middle" class="tat s" style="fill:#C2362D">${L('la meitat, sota la placa', 'la mitad, bajo la placa')}</text></g>
        <g ${tA(3.1)}><rect x="170" y="48" width="132" height="24" rx="12" fill="#3D7BF4"/><text x="236" y="64.5" text-anchor="middle" class="tat s w" style="${MONO}">${L('mou', 'mueve')}(0, 0, 10)</text></g>`);
    },
    // diàmetre i radi d'un cercle (vista de dalt)
    p12diam() {
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <g ${tA(.2)}><circle cx="96" cy="104" r="66" fill="#BDEFD3" stroke="#2FB36D" stroke-width="3"/></g>
        <g ${tA(.6)}><circle cx="96" cy="104" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/></g>
        <path d="M30 104 H162" stroke="#14204A" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(1, 'ta-draw')}/>
        <g ${tA(1.6)}><rect x="62" y="74" width="68" height="22" rx="11" fill="#14204A"/><text x="96" y="89.5" text-anchor="middle" class="tat s w">d = 20</text></g>
        <path d="M96 104 L143 151" stroke="#E8453C" stroke-width="3" stroke-linecap="round" pathLength="1" ${tA(2.4, 'ta-draw')}/>
        <g ${tA(2.9)}><rect x="112" y="136" width="62" height="22" rx="11" fill="#E8453C"/><text x="143" y="151.5" text-anchor="middle" class="tat s w">r = 10</text></g>
        ${chip(184, 40, 124, `${L('cilindre', 'cilindro')}(20, 30)`, 3.4, '#14204A')}
        <g ${tA(3.9, 'ta-in')}><text x="246" y="94" text-anchor="middle" class="tat s">${L('el número és el', 'el número es el')}</text><text x="246" y="114" text-anchor="middle" class="tat b">${L('diàmetre', 'diámetro')}</text></g>
        <g ${tA(4.3, 'ta-in')}><rect x="196" y="130" width="100" height="30" rx="15" fill="#fff" filter="url(#bwSh)"/><text x="246" y="150" text-anchor="middle" class="tat s">d = 2 × r</text></g>`);
    },
    /* ---------- p1-4 · Projecte: el monument ---------- */
    // el procés tecnològic: de l'encàrrec a la peça, i tornar enrere per millorar
    p14proc() {
      const S = [[L('Encàrrec', 'Encargo'), '#2F5BEA'], [L('Esbós', 'Boceto'), '#14A3B8'], [L('Programa', 'Programa'), '#8B5CF6'], [L('Comprova', 'Comprueba'), '#F08A24'], [L('Fabrica', 'Fabrica'), '#D63F8C']];
      const P = [[60, 54], [160, 54], [260, 54], [210, 140], [110, 140]];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <path d="M110 54 H110 M210 54 H210" stroke="none"/>
        ${[[96, 54, 124, 54], [196, 54, 224, 54], [258, 76, 232, 116], [172, 140, 148, 140]].map(([a, b, c, d], i) => `<g ${tA(.5 + i * .8, 'ta-fade')}><line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="#9AA6CC" stroke-width="3" stroke-linecap="round"/><circle cx="${c}" cy="${d}" r="4" fill="#9AA6CC"/></g>`).join('')}
        <g ${tA(3.6, 'ta-fade')}><path d="M232 118 C 250 96, 270 96, 262 76" fill="none" stroke="#E8453C" stroke-width="2.6" stroke-dasharray="5 5" class="ta-dash"/><text x="296" y="112" text-anchor="middle" class="tat s" style="fill:#C2362D">${L('millora', 'mejora')}</text></g>
        ${S.map(([t, c], i) => `<g ${tA(.2 + i * .8)}><rect x="${P[i][0] - 46}" y="${P[i][1] - 18}" width="92" height="36" rx="18" fill="${c}" filter="url(#bwSh)"/><text x="${P[i][0]}" y="${P[i][1] + 5}" text-anchor="middle" class="tat w s">${i + 1} · ${t}</text></g>`).join('')}
        <g ${tA(4.2, 'ta-in')}><text x="160" y="186" text-anchor="middle" class="tat s">${L('si una prova falla, es torna a programar', 'si una prueba falla, se vuelve a programar')}</text></g>`);
    },
    // de l'esbós amb cotes al programa: cada peça dibuixada és una línia
    p14sketch() {
      const g = Array.from({ length: 13 }, (_, i) => `<line x1="${14 + i * 12}" y1="14" x2="${14 + i * 12}" y2="186" stroke="#DCE4FA"/>`).join('') + Array.from({ length: 15 }, (_, i) => `<line x1="14" y1="${14 + i * 12}" x2="158" y2="${14 + i * 12}" stroke="#DCE4FA"/>`).join('');
      const cota = (x1, y1, x2, y2, t, tx, ty, d) => `<g ${tA(d, 'ta-fade')}><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#E8453C" stroke-width="1.6"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="#E8453C"/><circle cx="${x2}" cy="${y2}" r="2.2" fill="#E8453C"/><text x="${tx}" y="${ty}" text-anchor="middle" class="tat s" style="fill:#C2362D;font-size:11px">${t}</text></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="14" width="144" height="172" rx="6" fill="#fff"/>${g}
        <g ${tA(.2)}><rect x="36" y="160" width="100" height="16" fill="none" stroke="#14204A" stroke-width="2.4"/></g>${cota(36, 182, 136, 182, '50', 86, 180, .5)}
        <g ${tA(1.3)}><rect x="56" y="148" width="60" height="12" fill="none" stroke="#14204A" stroke-width="2.4"/></g>
        <g ${tA(2.3)}><polygon points="66,148 106,148 94,52 78,52" fill="none" stroke="#14204A" stroke-width="2.4" stroke-linejoin="round"/></g>${cota(124, 148, 124, 52, '60', 140, 104, 2.6)}
        <g ${tA(3.3)}><circle cx="86" cy="42" r="12" fill="none" stroke="#14204A" stroke-width="2.4"/></g>
        <rect x="168" y="14" width="140" height="172" rx="12" fill="#14204A"/>
        ${[[`${L('base', 'base')}`, 40, .4], [`${L('sòcol', 'zócalo')}`, 80, 1.4], [`${L('agulla', 'aguja')}`, 120, 2.4], [`${L('bola', 'bola')}`, 160, 3.4]].map(([t, y, d], i) => `<g ${tA(d, 'ta-in')}><text x="180" y="${y}" class="tat s" style="${MONO};fill:#8FA2DD;font-size:11px">// ${t}</text><text x="180" y="${y + 18}" class="tat s" style="${MONO};fill:#E8EEFF;font-size:12px">${[`${L('cub', 'cubo')}(50, 50, 8)`, `${L('cilindre', 'cilindro')}(30, 6)`, `con(20, 60, 8)`, `esfera(12)`][i]}</text></g>`).join('')}`);
    },
    // dues peces que es toquen en un punt no queden soldades; si comparteixen una mica de volum, sí
    p14fuse() {
      const cone = x => `<polygon points="${x - 26},170 ${x + 26},170 ${x + 7},84 ${x - 7},84" fill="#2FB36D"/><polygon points="${x},170 ${x + 26},170 ${x + 7},84 ${x},84" fill="#23905A"/>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="10" y="12" width="146" height="176" rx="16" fill="#fff"/><rect x="164" y="12" width="146" height="176" rx="16" fill="#fff"/>
        ${cone(83)}${cone(237)}
        <g ${tA(.3)}><circle cx="83" cy="66" r="18" fill="#EC5FA8"/><circle cx="77" cy="60" r="5" fill="#fff" opacity=".6"/></g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 6;0 6;0 0" keyTimes="0;.3;.45;.95;1" dur="5.5s" repeatCount="indefinite"/><circle cx="237" cy="66" r="18" fill="#EC5FA8"/><circle cx="231" cy="60" r="5" fill="#fff" opacity=".6"/></g>
        <g ${tA(1.2)}><circle cx="83" cy="84" r="9" fill="none" stroke="#E8453C" stroke-width="2.4" stroke-dasharray="3 3"/></g>
        <g ${tA(1.6, 'ta-in')}><text x="83" y="36" text-anchor="middle" class="tat s" style="fill:#C2362D">✗ ${L('toca en un punt', 'toca en un punto')}</text></g>
        <g ${tA(2.8, 'ta-in')}><text x="237" y="36" text-anchor="middle" class="tat s" style="fill:#1F8A52">✓ ${L('entra 2 mm', 'entra 2 mm')}</text></g>
        <g ${tA(3.4, 'ta-in')}><text x="237" y="184" text-anchor="middle" class="tat s">${L('una sola peça', 'una sola pieza')}</text></g><g ${tA(2, 'ta-in')}><text x="83" y="184" text-anchor="middle" class="tat s">${L('es pot trencar', 'se puede romper')}</text></g>`);
    },
    // les comprovacions d'un enginyer abans d'imprimir
    p14check() {
      const it = [L('Toca la placa', 'Toca la placa'), L('Una sola peça', 'Una sola pieza'), L('Cap a la caixa', 'Cabe en la caja'), L('Base ampla i estable', 'Base ancha y estable')];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="18" y="16" width="190" height="168" rx="16" fill="#fff" filter="url(#bwSh)"/>
        <text x="36" y="44" class="tat b">${L('Abans d\'imprimir', 'Antes de imprimir')}</text>
        ${it.map((t, i) => `<g ${tA(.4 + i * .9, 'ta-in')}><rect x="34" y="${62 + i * 28}" width="20" height="20" rx="6" fill="#E9EEFB" stroke="#9AA6CC" stroke-width="2"/><text x="64" y="${77 + i * 28}" class="tat s">${t}</text></g><g ${tA(.9 + i * .9)}><path d="M38 ${72 + i * 28} l5 5 l9 -11" fill="none" stroke="#1FA463" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></g>`).join('')}
        <g ${tA(.2)}><rect x="226" y="150" width="76" height="14" rx="2" fill="#B9A7FF"/><rect x="250" y="86" width="28" height="64" fill="#7C5CFF"/><circle cx="264" cy="74" r="13" fill="#EC5FA8"/></g>
        <g ${tA(4.2)}><rect x="216" y="36" width="96" height="140" rx="10" fill="none" stroke="#3D7BF4" stroke-width="2" stroke-dasharray="5 4"/></g>`);
    }
  };
})());
