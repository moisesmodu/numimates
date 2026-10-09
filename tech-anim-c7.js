/* Numi Tech · Tech 3D · Nivell 2 · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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

/* ── unitat 2 ── */
/* Tech 3D · Nivell 2 · unitat 2 «Transformacions» · animacions de teoria (TANI). Dibuixos propis de Numi.
   p21*: moure (el vector, a qui afecta un mou, moviments que se sumen) · p22*: girar (els tres eixos i el sentit, girar al
   voltant de l'origen) · p23*: l'ordre (de dins cap a fora, dos ordres i dos llocs) · p24*: el molí (peces i fitxa tècnica).
   Vistes de dalt amb +y amunt: un gir positiu (sentit contrari a les agulles del rellotge) és un rotate negatiu de l'SVG. */
Object.assign(TANI, (() => {
  const MONO = 'font-family:ui-monospace,Menlo,Consolas,monospace';
  const W = (ca, es) => L(ca, es);
  // vista de dalt: origen (ox, oy), s px per mm, +y amunt
  const TOP = (ox, oy, s) => (x, y) => [ox + x * s, oy - y * s];
  const grid = (x0, y0, w, h, step, col = '#DCE4FA') => { let g = ''; for (let x = x0; x <= x0 + w + .1; x += step) g += `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + h}" stroke="${col}"/>`; for (let y = y0; y <= y0 + h + .1; y += step) g += `<line x1="${x0}" y1="${y}" x2="${x0 + w}" y2="${y}" stroke="${col}"/>`; return g; };
  const ax2 = (ox, oy, lx, ly, nx = 'x', ny = 'y', cx = '#E8453C', cy = '#2FB36D') => `<line x1="${ox}" y1="${oy}" x2="${ox + lx}" y2="${oy}" stroke="${cx}" stroke-width="2.4" stroke-linecap="round"/><text x="${ox + lx + 4}" y="${oy + 5}" class="tat s" style="fill:${cx}">${nx}</text><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - ly}" stroke="${cy}" stroke-width="2.4" stroke-linecap="round"/><text x="${ox - 4}" y="${oy - ly - 5}" text-anchor="middle" class="tat s" style="fill:${cy}">${ny}</text>`;
  const odot = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/>`;
  const chip = (x, y, w, txt, t, c = '#14204A', cls = 'ta-in') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="${w}" height="24" rx="12" fill="${c}"/><text x="${x + w / 2}" y="${y + 16.5}" text-anchor="middle" class="tat s w" style="${MONO}">${txt}</text></g>`;
  const arrow = (x1, y1, x2, y2, c, w = 3) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 9, p1 = [x2 - h * Math.cos(a - .45), y2 - h * Math.sin(a - .45)], p2 = [x2 - h * Math.cos(a + .45), y2 - h * Math.sin(a + .45)];
    return `<line x1="${x1}" y1="${y1}" x2="${(x2 - 6 * Math.cos(a)).toFixed(1)}" y2="${(y2 - 6 * Math.sin(a)).toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}" fill="${c}"/>`; };
  // animació SMIL en bucle de 5,5 s (la mateixa durada que les classes .ta)
  const anim = (type, values, keyTimes) => `<animateTransform attributeName="transform" type="${type}" values="${values}" keyTimes="${keyTimes}" dur="5.5s" repeatCount="indefinite"/>`;
  const kw = k => ({ mou: W('mou', 'mueve'), gira: 'gira', cub: W('cub', 'cubo'), cil: W('cilindre', 'cilindro'), esf: 'esfera', con: W('con', 'cono'), escala: 'escala' })[k];
  const panel = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>`;
  return {
    /* ---------- p2-1 · Moure ---------- */
    // mou(30, 20, 0) és una fletxa: cada punt de la peça es desplaça igual (vista de dalt)
    p21vec() {
      const P = TOP(70, 160, 3.2), [ox, oy] = P(0, 0), [tx, ty] = P(30, 20), sq = 10 * 3.2;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${panel(10, 10, 210, 180)}${grid(22, 22, 186, 160, 16)}${ax2(ox, oy, 132, 128)}
        <rect x="${ox}" y="${oy - sq}" width="${sq}" height="${sq}" fill="none" stroke="#9AA6CC" stroke-width="2" stroke-dasharray="4 3"/>
        <g ${tA(.6, 'ta-fade')}><line x1="${ox + sq / 2}" y1="${oy - sq / 2}" x2="${tx + sq / 2}" y2="${oy - sq / 2}" stroke="#E8453C" stroke-width="2.4" stroke-dasharray="5 4"/><text x="${(ox + tx) / 2 + sq / 2}" y="${oy - sq / 2 + 16}" text-anchor="middle" class="tat s" style="fill:#C2362D">x = 30</text></g>
        <g ${tA(1.2, 'ta-fade')}><line x1="${tx + sq / 2}" y1="${oy - sq / 2}" x2="${tx + sq / 2}" y2="${ty - sq / 2}" stroke="#2FB36D" stroke-width="2.4" stroke-dasharray="5 4"/><text x="${tx + sq / 2 + 8}" y="${(oy + ty) / 2 - sq / 2 + 4}" class="tat s" style="fill:#1F8A52">y = 20</text></g>
        <g ${tA(1.8, 'ta-fade')}>${arrow(ox + sq / 2, oy - sq / 2, tx + sq / 2, ty - sq / 2, '#3D7BF4')}</g>
        <g>${anim('translate', `0 0;0 0;${tx - ox} ${ty - oy};${tx - ox} ${ty - oy};0 0`, '0;.4;.62;.95;1')}<rect x="${ox}" y="${oy - sq}" width="${sq}" height="${sq}" rx="3" fill="#EC5FA8" opacity=".92"/></g>
        ${odot(ox, oy)}
        ${chip(228, 30, 84, `${kw('mou')}(30, 20, 0)`, .3, '#3D7BF4')}
        <g ${tA(2.6, 'ta-in')}><text x="270" y="88" text-anchor="middle" class="tat s">${W('la peça no', 'la pieza no')}</text><text x="270" y="106" text-anchor="middle" class="tat s">${W('gira ni creix:', 'gira ni crece:')}</text><text x="270" y="124" text-anchor="middle" class="tat s">${W('només es', 'solo se')}</text><text x="270" y="142" text-anchor="middle" class="tat b">${W('desplaça', 'desplaza')}</text></g>`);
    },
    // a qui afecta un mou: la instrucció de la mateixa línia o el bloc { } que el segueix
    p21scope() {
      const ln = (y, txt, col = '#E8EEFF') => `<text x="30" y="${y}" class="tat s" style="${MONO};fill:${col};font-size:13px">${txt}</text>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="14" width="196" height="172" rx="14" fill="#14204A"/>
        ${ln(42, `<tspan style="fill:#9DB8FF">${kw('mou')}(0, 0, 20)</tspan> ${kw('cub')}(10)`)}${ln(70, `${kw('cub')}(10)`)}${ln(104, `<tspan style="fill:#9DB8FF">${kw('mou')}(30, 0, 0)</tspan> {`)}${ln(126, `  ${kw('cub')}(10)`)}${ln(148, '  esfera(10)')}${ln(170, '}')}
        <g ${tA(.4, 'ta-in')}><rect x="126" y="27" width="64" height="22" rx="7" fill="none" stroke="#FFC531" stroke-width="2.4"/><path d="M212 38 H226" stroke="#FFC531" stroke-width="2.4"/><rect x="226" y="26" width="84" height="24" rx="12" fill="#FFC531"/><text x="268" y="42.5" text-anchor="middle" class="tat s">${W('es mou', 'se mueve')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="226" y="58" width="84" height="24" rx="12" fill="#fff" stroke="#9AA6CC" stroke-width="2"/><text x="268" y="74.5" text-anchor="middle" class="tat s" style="fill:#56628A">${W('no es mou', 'no se mueve')}</text><path d="M86 66 H226" stroke="#9AA6CC" stroke-width="2" stroke-dasharray="4 4"/></g>
        <g ${tA(2.4, 'ta-in')}><path d="M24 112 h-4 v52 h4" fill="none" stroke="#FFC531" stroke-width="2.6"/><rect x="40" y="112" width="96" height="44" rx="8" fill="none" stroke="#FFC531" stroke-width="2.4"/><path d="M136 134 H226" stroke="#FFC531" stroke-width="2.4"/><rect x="226" y="114" width="84" height="40" rx="14" fill="#FFC531"/><text x="268" y="130" text-anchor="middle" class="tat s">${W('es mou tot', 'se mueve todo')}</text><text x="268" y="147" text-anchor="middle" class="tat s">${W('el bloc', 'el bloque')}</text></g>`);
    },
    // dos mou seguits se sumen (vista de dalt): primer 20 en x, després 30 en y → mou(20, 30, 0)
    p21chain() {
      const P = TOP(60, 168, 4), [ox, oy] = P(0, 0), [ax, ay] = P(20, 0), [bx, by] = P(20, 30);
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>${panel(10, 10, 170, 180)}${grid(20, 24, 152, 160, 20)}${ax2(ox, oy, 108, 140)}${odot(ox, oy)}
        <g ${tA(.3, 'ta-fade')}>${arrow(ox, oy, ax, ay, '#E8453C', 4)}</g><g ${tA(1.3, 'ta-fade')}>${arrow(ax, ay, bx, by, '#2FB36D', 4)}</g>
        <g ${tA(2.4, 'ta-fade')}><line x1="${ox}" y1="${oy}" x2="${bx}" y2="${by}" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="6 5"/><circle cx="${bx}" cy="${by}" r="7" fill="#3D7BF4"/></g>
        ${chip(190, 30, 120, `${kw('mou')}(20, 0, 0)`, .3, '#E8453C')}${chip(190, 64, 120, `${kw('mou')}(0, 30, 0)`, 1.3, '#2FB36D')}
        <g ${tA(2.4, 'ta-in')}><text x="250" y="116" text-anchor="middle" class="tat b">=</text></g>${chip(190, 128, 120, `${kw('mou')}(20, 30, 0)`, 2.6, '#3D7BF4')}
        <g ${tA(3.4, 'ta-in')}><text x="250" y="178" text-anchor="middle" class="tat s">${W('es sumen x amb x i y amb y', 'se suman x con x e y con y')}</text></g>`);
    },
    /* ---------- p2-2 · Girar ---------- */
    // els tres girs: positiu = contrari a les agulles del rellotge, mirant des de la punta de l'eix
    p22axes() {
      const pn = (cx, lab, ca, cb, na, nb, axc, axn) => `${panel(cx - 49, 16, 98, 150)}<line x1="${cx - 36}" y1="96" x2="${cx + 38}" y2="96" stroke="${ca}" stroke-width="2"/><text x="${cx + 40}" y="100" class="tat s" style="fill:${ca};font-size:11px">${na}</text><line x1="${cx}" y1="134" x2="${cx}" y2="56" stroke="${cb}" stroke-width="2"/><text x="${cx}" y="52" text-anchor="middle" class="tat s" style="fill:${cb};font-size:11px">${nb}</text>
        <circle cx="${cx}" cy="96" r="8" fill="#fff" stroke="${axc}" stroke-width="2.6"/><circle cx="${cx}" cy="96" r="2.6" fill="${axc}"/>
        <g>${anim('rotate', `0 ${cx} 96;0 ${cx} 96;-90 ${cx} 96;-90 ${cx} 96;0 ${cx} 96`, '0;.25;.55;.92;1')}<rect x="${cx + 8}" y="91" width="32" height="10" rx="3" fill="#EC5FA8"/></g>
        <path d="M${cx + 26} ${96 - 30} A30 30 0 0 0 ${cx - 30} ${96 - 26}" fill="none" stroke="#14204A" stroke-width="2" stroke-dasharray="4 3"/><polygon points="${cx - 30},${96 - 26} ${cx - 22},${96 - 34} ${cx - 34},${96 - 36}" fill="#14204A"/>
        <text x="${cx}" y="34" text-anchor="middle" class="tat s" style="${MONO};font-size:12px">${lab}</text><text x="${cx}" y="156" text-anchor="middle" class="tat s" style="fill:${axc};font-size:11.5px">${W('eix', 'eje')} ${axn} ${W('cap a tu', 'hacia ti')}</text>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${pn(58, 'gira(0, 0, 90)', '#E8453C', '#2FB36D', 'x', 'y', '#3D7BF4', 'z')}${pn(160, 'gira(90, 0, 0)', '#2FB36D', '#3D7BF4', 'y', 'z', '#E8453C', 'x')}${pn(262, 'gira(0, 90, 0)', '#3D7BF4', '#E8453C', 'z', 'x', '#2FB36D', 'y')}
        <g ${tA(1.5, 'ta-in')}><text x="160" y="186" text-anchor="middle" class="tat s">${W('angle positiu: contrari a les agulles del rellotge', 'ángulo positivo: contrario a las agujas del reloj')}</text></g>`);
    },
    // gira fa girar al voltant de l'ORIGEN (la peça fa un arc), no del seu centre com al Nivell 1 (vista de dalt)
    p22orbit() {
      const half = (x0, title, sub, cx, cy, col) => `${panel(x0, 12, 146, 176)}<line x1="${x0 + 12}" y1="120" x2="${x0 + 134}" y2="120" stroke="#E8453C" stroke-width="1.6" opacity=".5"/><line x1="${x0 + 40}" y1="180" x2="${x0 + 40}" y2="40" stroke="#2FB36D" stroke-width="1.6" opacity=".5"/>
        <rect x="${x0 + 64}" y="112" width="44" height="16" rx="3" fill="none" stroke="#9AA6CC" stroke-width="2" stroke-dasharray="4 3"/>
        <g>${anim('rotate', `0 ${cx} ${cy};0 ${cx} ${cy};-90 ${cx} ${cy};-90 ${cx} ${cy};0 ${cx} ${cy}`, '0;.3;.62;.94;1')}<rect x="${x0 + 64}" y="112" width="44" height="16" rx="3" fill="${col}"/></g>
        <circle cx="${cx}" cy="${cy}" r="5" fill="#FFC531" stroke="#14204A" stroke-width="2"/>
        <text x="${x0 + 73}" y="32" text-anchor="middle" class="tat s" style="${MONO};font-size:12px">${title}</text><text x="${x0 + 73}" y="176" text-anchor="middle" class="tat s" style="font-size:12px">${sub}</text>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${half(8, 'gira(0, 0, 90)', W("al voltant de l'origen", 'alrededor del origen'), 48, 120, '#EC5FA8')}
        <path d="M ${8 + 108} 120 A 68 68 0 0 0 48 ${120 - 68}" fill="none" stroke="#EC5FA8" stroke-width="2.4" stroke-dasharray="5 5" ${tA(1.6, 'ta-fade')}/>
        ${half(166, W('Nivell 1', 'Nivel 1'), W('sobre el seu centre', 'sobre su centro'), 166 + 86, 120, '#9AA6CC')}
        <g ${tA(2.6)}><rect x="108" y="44" width="42" height="22" rx="11" fill="#1FA463"/><text x="129" y="59.5" text-anchor="middle" class="tat s w">${W('ara', 'ahora')}</text></g>`);
    },
    /* ---------- p2-3 · L'ordre importa ---------- */
    // de dins cap a fora: primer s'aplica la transformació més a prop de la forma
    p23inout() {
      const box = (x, w, txt, c, t) => `<g ${tA(t)}><rect x="${x}" y="70" width="${w}" height="34" rx="10" fill="${c}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="92" text-anchor="middle" class="tat s w" style="${MONO};font-size:12.5px">${txt}</text></g>`;
      const num = (x, n, t) => `<g ${tA(t)}><circle cx="${x}" cy="48" r="13" fill="#FFC531" stroke="#14204A" stroke-width="2"/><text x="${x}" y="53" text-anchor="middle" class="tat b">${n}</text></g>`;
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${box(14, 104, 'gira(0, 0, 90)', '#8B5CF6', .1)}${box(124, 104, `${kw('mou')}(30, 0, 0)`, '#3D7BF4', .1)}${box(234, 72, `${kw('cub')}(10)`, '#D63F8C', .1)}
        ${num(270, 1, .6)}${num(176, 2, 1.4)}${num(66, 3, 2.2)}
        <g ${tA(2.8, 'ta-fade')}>${arrow(290, 124, 30, 124, '#14204A', 3)}</g>
        <g ${tA(3.1, 'ta-in')}><text x="160" y="150" text-anchor="middle" class="tat b">${W('es llegeix de dins cap a fora', 'se lee de dentro hacia fuera')}</text></g>
        <g ${tA(3.7, 'ta-in')}><text x="160" y="176" text-anchor="middle" class="tat s">${W('1 fes el cub · 2 mou-lo · 3 gira-ho tot', '1 haz el cubo · 2 muévelo · 3 gíralo todo')}</text></g>`);
    },
    // dos ordres, dos llocs (vista de dalt): moure i després girar fa un arc; girar i després moure no
    p23paths() {
      const pane = (x0, a, b, outer, inner, col) => { const ox = x0 + 34, oy = 150, s = 2.5;
        return `${panel(x0, 12, 146, 176)}<line x1="${x0 + 10}" y1="${oy}" x2="${x0 + 136}" y2="${oy}" stroke="#E8453C" stroke-width="1.6" opacity=".5"/><line x1="${ox}" y1="182" x2="${ox}" y2="50" stroke="#2FB36D" stroke-width="1.6" opacity=".5"/>
          <text x="${x0 + 73}" y="30" text-anchor="middle" class="tat s" style="${MONO};font-size:11.5px">${a}</text><text x="${x0 + 73}" y="45" text-anchor="middle" class="tat s" style="${MONO};font-size:11.5px">${b}</text>
          <g>${outer(ox, oy, s)}<g>${inner(ox, oy, s)}<rect x="${ox}" y="${oy - 10 * s}" width="${10 * s}" height="${10 * s}" rx="3" fill="${col}"/></g></g>${odot(ox, oy)}`; };
      const rot = (ox, oy, kt) => anim('rotate', `0 ${ox} ${oy};0 ${ox} ${oy};-90 ${ox} ${oy};-90 ${ox} ${oy};0 ${ox} ${oy}`, kt);
      const mv = (s, kt) => anim('translate', `0 0;0 0;${30 * s} 0;${30 * s} 0;0 0`, kt);
      const early = '0;.12;.38;.94;1', late = '0;.46;.72;.94;1';
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        ${pane(8, `gira(0, 0, 90)`, `${kw('mou')}(30, 0, 0) ${kw('cub')}`, (ox, oy) => rot(ox, oy, late), (ox, oy, s) => mv(s, early), '#3D7BF4')}
        ${pane(166, `${kw('mou')}(30, 0, 0)`, `gira(0, 0, 90) ${kw('cub')}`, (ox, oy, s) => mv(s, late), (ox, oy) => rot(ox, oy, early), '#F08A24')}
        <g ${tA(3.6, 'ta-in')}><rect x="106" y="160" width="108" height="26" rx="13" fill="#14204A"/><text x="160" y="177.5" text-anchor="middle" class="tat s w">${W('llocs diferents!', '¡sitios distintos!')}</text></g>`);
    },
    /* ---------- p2-4 · Projecte: el molí ---------- */
    // el molí desmuntat: cada peça i la transformació que necessita (vista de cara), i el muntatge
    p24parts() {
      const fly = (dx, dy) => anim('translate', `${dx} ${dy};${dx} ${dy};0 0;0 0;${dx} ${dy}`, '0;.35;.6;.94;1');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="176" width="170" height="8" rx="3" fill="#C9D4F2"/>
        <polygon points="74,176 124,176 116,92 82,92" fill="#C98A4B"/><polygon points="99,176 124,176 116,92 99,92" fill="#A86A33"/><rect x="92" y="150" width="14" height="26" rx="6" fill="#6B4423"/>
        <g>${fly(0, -26)}<polygon points="78,94 120,94 99,64" fill="#D63F8C"/><polygon points="99,94 120,94 99,64" fill="#B02F72"/></g>
        <g>${fly(40, 0)}<rect x="94" y="100" width="10" height="10" rx="3" fill="#9AA6CC"/></g>
        <g>${fly(70, -10)}<g transform="rotate(45 99 105)"><rect x="49" y="100" width="100" height="10" rx="2" fill="#F3F3EE" stroke="#9AA6CC" stroke-width="1.6"/></g><g transform="rotate(-45 99 105)"><rect x="49" y="100" width="100" height="10" rx="2" fill="#F3F3EE" stroke="#9AA6CC" stroke-width="1.6"/></g><circle cx="99" cy="105" r="6" fill="#9AA6CC"/></g>
        ${[['con', 34, '#C98A4B', .3], [`${kw('mou')} · con`, 66, '#D63F8C', .9], [`gira(90, 0, 0) · ${kw('cil')}`, 98, '#9AA6CC', 1.5], ['gira(0, ±45, 0)', 130, '#5B6BA6', 2.1]].map(([t, y, c, d], i) => `<g ${tA(d, 'ta-in')}><rect x="192" y="${y - 16}" width="118" height="26" rx="13" fill="${c}"/><text x="251" y="${y + 1}" text-anchor="middle" class="tat s w" style="${MONO};font-size:11px">${t}</text></g>`).join('')}
        <g ${tA(3.5, 'ta-in')}><text x="251" y="176" text-anchor="middle" class="tat s">${W('torre · teulada · eix · aspes', 'torre · tejado · eje · aspas')}</text></g>`);
    },
    // la fitxa tècnica del molí de la cooperativa
    p24spec() {
      const R = [[W('Torre', 'Torre'), `${kw('con')}(40, 70, 28)`], [W('Teulada', 'Tejado'), `${kw('con')}(34, 22)`], [W('Eix', 'Eje'), `${kw('cil')}(8, 12)`], [W('Aspes', 'Aspas'), `2 × ${kw('cub')}(80, 3, 8)`], [W('Caixa màxima', 'Caja máxima'), '100 × 100 × 120']];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="14" y="12" width="292" height="176" rx="16" fill="#fff" filter="url(#bwSh)"/>
        <rect x="14" y="12" width="292" height="34" rx="16" fill="#14204A"/><rect x="14" y="30" width="292" height="16" fill="#14204A"/><text x="30" y="35" class="tat s w">${W('Fitxa tècnica · El Molí Vell', 'Ficha técnica · El Molino Viejo')}</text>
        ${R.map(([a, b], i) => `<g ${tA(.3 + i * .6, 'ta-in')}><text x="30" y="${74 + i * 26}" class="tat s">${a}</text><text x="292" y="${74 + i * 26}" text-anchor="end" class="tat s" style="${MONO};fill:#5B3FD6;font-size:12.5px">${b}</text><line x1="30" y1="${82 + i * 26}" x2="292" y2="${82 + i * 26}" stroke="#E9EEFB"/></g>`).join('')}`);
    }
  };
})());

/* ── unitat 3 ── */
/* Tech 3D · Nivell 2 · unitat 3 «Operacions booleanes» · animacions de teoria (TANI). Dibuixos propis de Numi.
   Claus amb el prefix p3: p3bool, p3overlap, p3resta, p3through, p3inter, p3ombra, p3dau, p3tree. */
Object.assign(TANI, (() => {
  const PC = '#7C5CFF', PCD = '#5B3FD6', PCL = '#B9A7FF', EI = '#FF8A3D', OK = '#1FA463', KO = '#E8453C', MUT = '#6B7390';
  const card = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>`;
  const txt = (x, y, s, cls = 'tat s', st = '') => `<text x="${x}" y="${y}" text-anchor="middle" class="${cls}"${st ? ` style="${st}"` : ''}>${s}</text>`;
  const mono = 'font-family:ui-monospace,Menlo,Consolas,monospace;';
  const badge = (x, y, ok) => `<g><circle cx="${x}" cy="${y}" r="11" fill="${ok ? OK : KO}"/><path d="${ok ? `M${x - 5} ${y}l3.5 3.5 6.5 -7` : `M${x - 4} ${y - 4}l8 8M${x + 4} ${y - 4}l-8 8`}" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  // projecció isomètrica: (x, y, z) en mm → punt de la pantalla
  const iso = (ox, oy, k = 1) => (x, y, z) => [ox + (x - y) * 0.866 * k, oy + (x + y) * 0.5 * k - z * k];
  const poly = (pts, fill, extra = '') => `<polygon points="${pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ')}" fill="${fill}" ${extra}/>`;
  const isoBox = (P, W, D, H, c = [PCL, PC, PCD], z0 = 0) => poly([P(0, 0, z0 + H), P(W, 0, z0 + H), P(W, D, z0 + H), P(0, D, z0 + H)], c[0]) + poly([P(W, 0, z0), P(W, D, z0), P(W, D, z0 + H), P(W, 0, z0 + H)], c[2]) + poly([P(0, D, z0), P(W, D, z0), P(W, D, z0 + H), P(0, D, z0 + H)], c[1]);
  // un cilindre vertical en isomètrica (centre de la base cx, cy; radi r; de z0 a z1)
  const isoCyl = (P, cx, cy, r, z0, z1, fill, top, k = 1, extra = '') => { const [ax, ay] = P(cx, cy, z1), [, by] = P(cx, cy, z0), rx = r * 1.2247 * k, ry = r * 0.7071 * k;
    return `<g ${extra}><path d="M${(ax - rx).toFixed(1)} ${ay.toFixed(1)}V${by.toFixed(1)}A${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 0 ${(ax + rx).toFixed(1)} ${by.toFixed(1)}V${ay.toFixed(1)}Z" fill="${fill}"/><ellipse cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${top}"/></g>`; };
  return {
    // les tres operacions booleanes amb un quadrat (A) i un cercle (B)
    p3bool() {
      const sq = x => `x="${x + 12}" y="40" width="50" height="50"`, ci = x => `cx="${x + 58}" cy="86" r="28"`;
      const AB = (x, col = '#fff') => `<text x="${x + 25}" y="60" text-anchor="middle" class="tat s" style="fill:${col}">A</text><text x="${x + 72}" y="110" text-anchor="middle" class="tat s" style="fill:${col}">B</text>`;
      const panel = (x, t, title, sym, body) => `<g ${tA(t, 'ta-in')}>${card(x, 10, 96, 180)}${body}${txt(x + 48, 156, title, 'tat b')}${txt(x + 48, 177, sym, 'tat s', `fill:${MUT}`)}</g>`;
      return tSvg(200, `<defs><mask id="p3bmD"><rect x="112" y="40" width="96" height="100" fill="#fff"/><circle ${ci(112)} fill="#000"/></mask><clipPath id="p3bcI"><circle ${ci(216)}/></clipPath></defs>
        ${panel(8, .2, L('uneix', 'une'), 'A ∪ B', `<g ${tA(.9)}><rect ${sq(8)} rx="3" fill="${PC}"/><circle ${ci(8)} fill="${PC}"/>${AB(8)}</g>`)}
        ${panel(112, .5, L('resta', 'resta'), 'A − B', `<g ${tA(1.6)}><rect ${sq(112)} rx="3" fill="${PC}" mask="url(#p3bmD)"/><circle ${ci(112)} fill="none" stroke="${EI}" stroke-width="2.4" stroke-dasharray="5 4"/>${AB(112, PCD)}</g>`)}
        ${panel(216, .8, L('interseca', 'interseca'), 'A ∩ B', `<g ${tA(2.3)}><rect ${sq(216)} rx="3" fill="none" stroke="${PCL}" stroke-width="2" stroke-dasharray="4 3"/><circle ${ci(216)} fill="none" stroke="${PCL}" stroke-width="2" stroke-dasharray="4 3"/><rect ${sq(216)} fill="${OK}" clip-path="url(#p3bcI)"/>${AB(216, MUT)}</g>`)}`);
    },
    // perquè surti una sola peça, les formes s'han d'encavalcar (vista de costat)
    p3overlap() {
      const col = (x, t, dy, ok, l1, l2) => { const cx = x + 50, top = 104, r = 17, cy = top - r + dy;
        return `<g ${tA(t, 'ta-in')}>${card(x, 10, 100, 180)}<rect x="${x + 14}" y="150" width="72" height="5" rx="2" fill="#C9D2EA"/><rect x="${cx - 12}" y="${top}" width="24" height="46" rx="3" fill="${PC}"/>
          <clipPath id="p3oc${x}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath><circle cx="${cx}" cy="${cy}" r="${r}" fill="#EC5FA8"/>${dy > 0 ? `<rect x="${cx - 12}" y="${top}" width="24" height="46" fill="${PCD}" clip-path="url(#p3oc${x})"/>` : ''}
          ${dy < 0 ? `<path d="M${cx + 20} ${top}v${dy}" stroke="${KO}" stroke-width="2" stroke-dasharray="3 3"/>` : ''}<g ${tA(t + .7)}>${badge(x + 84, 28, ok)}</g>${txt(cx, 172, l1, 'tat s')}${txt(cx, 186, l2, 'tat s', `fill:${ok ? OK : KO};font-size:12px`)}</g>`; };
      return tSvg(200, col(6, .2, -12, false, L('Un buit', 'Un hueco'), L('2 peces', '2 piezas')) + col(110, .9, 0, false, L('Un sol punt', 'Un solo punto'), L('es trenca', 'se rompe')) + col(214, 1.6, 6, true, L("S'encavalquen", 'Se solapan'), L('1 peça forta', '1 pieza fuerte')));
    },
    // resta: la peça (la primera) menys l'eina = el resultat amb el forat
    p3resta() {
      const P1 = iso(56, 62), P2 = iso(162, 62), P3 = iso(268, 62);
      const hole = (P) => { const [hx, hy] = P(22, 22, 10), rx = 12 * 1.2247, ry = 12 * 0.7071; return `<clipPath id="p3rh"><ellipse cx="${hx}" cy="${hy}" rx="${rx}" ry="${ry}"/></clipPath><ellipse cx="${hx}" cy="${hy}" rx="${rx}" ry="${ry}" fill="#2A1F6B"/><ellipse cx="${hx}" cy="${hy + 10}" rx="${rx}" ry="${ry}" fill="#E9ECF8" clip-path="url(#p3rh)"/>`; };
      return tSvg(190, `<g ${tA(.2, 'ta-in')}>${isoBox(P1, 44, 44, 10)}${txt(56, 150, L('la peça', 'la pieza'), 'tat s', 'font-weight:900')}${txt(56, 168, L('(la primera)', '(la primera)'), 'tat s', `fill:${MUT}`)}</g>
        <g ${tA(1, 'ta-pop')}>${txt(109, 110, '−', 'tat b', 'font-size:28px')}</g>
        <g ${tA(1.2, 'ta-in')}>${isoBox(P2, 44, 44, 10, ['#DCD4FF', '#C9BEFF', '#B5A7F2'])}${isoCyl(P2, 22, 22, 12, -6, 22, 'rgba(255,138,61,.75)', 'rgba(255,186,140,.9)')}${txt(162, 150, L("l'eina", 'herramienta'), 'tat s', 'font-weight:900')}${txt(162, 168, L('(la segona)', '(la segunda)'), 'tat s', `fill:${MUT}`)}</g>
        <g ${tA(2, 'ta-pop')}>${txt(215, 110, '=', 'tat b', 'font-size:28px')}</g>
        <g ${tA(2.3, 'ta-in')}>${isoBox(P3, 44, 44, 10)}${hole(P3)}${txt(268, 150, L('resultat', 'resultado'), 'tat s', 'font-weight:900')}${txt(268, 168, L('amb un forat', 'con un agujero'), 'tat s', `fill:${OK}`)}</g>`);
    },
    // l'eina ha de sobresortir 1 mm per cada costat (tall de costat d'una placa de 6 mm)
    p3through() {
      const half = (x, t, ok) => { const px = x + 14, pw = 120, ty = ok ? 89 : 96, th = ok ? 50 : 36, cx = x + 74;
        return `<g ${tA(t, 'ta-in')}>${card(x, 10, 148, 180)}<rect x="${px}" y="96" width="${pw}" height="36" rx="3" fill="${PC}"/><rect x="${cx - 16}" y="${ty}" width="32" height="${th}" fill="rgba(255,138,61,.78)" stroke="${EI}" stroke-width="1.5"/>
          ${ok ? `<g ${tA(t + .8)}>${txt(cx - 30, 92, '+1', 'tat s', `fill:${OK}`)}${txt(cx - 30, 148, '+1', 'tat s', `fill:${OK}`)}</g>` : `<g ${tA(t + .8)}><path d="M${cx - 18} 96l4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3" fill="none" stroke="${KO}" stroke-width="2"/><path d="M${cx - 18} 132l4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3" fill="none" stroke="${KO}" stroke-width="2"/></g>`}
          <g ${tA(t + 1.2)}>${badge(x + 128, 78, ok)}</g>${txt(cx, 36, ok ? L('Travessa net', 'Atraviesa limpio') : L('Cares coincidents', 'Caras coincidentes'), 'tat s', 'font-size:12.5px')}
          ${txt(cx, 60, ok ? L('de z = −1 a z = 7', 'de z = −1 a z = 7') : L('de z = 0 a z = 6', 'de z = 0 a z = 6'), 'tat s', `fill:${MUT};font-size:12px`)}
          ${txt(cx, 172, ok ? `${L('cilindre', 'cilindro')}(d, 8)` : `${L('cilindre', 'cilindro')}(d, 6)`, 'tat s', mono + 'font-size:12.5px')}</g>`; };
      return tSvg(200, half(8, .2, false) + half(164, 1.4, true));
    },
    // interseca: la part comuna (dues esferes → una lent; cub i esfera → cub arrodonit)
    p3inter() {
      return tSvg(200, `<defs><clipPath id="p3ia"><circle cx="66" cy="88" r="40"/></clipPath><clipPath id="p3ib"><circle cx="234" cy="88" r="39"/></clipPath></defs>
        <g ${tA(.2, 'ta-in')}>${card(8, 10, 148, 180)}<circle cx="66" cy="88" r="40" fill="none" stroke="${PCL}" stroke-width="2.2" stroke-dasharray="5 4"/><circle cx="98" cy="88" r="40" fill="none" stroke="#F4B183" stroke-width="2.2" stroke-dasharray="5 4"/></g>
        <g ${tA(1.1)}><circle cx="98" cy="88" r="40" fill="${OK}" clip-path="url(#p3ia)"/></g>
        <g ${tA(1.4, 'ta-in')}>${txt(82, 156, L('Dues esferes', 'Dos esferas'), 'tat b')}${txt(82, 176, L('→ una lent', '→ una lente'), 'tat s', `fill:${OK}`)}</g>
        <g ${tA(1.8, 'ta-in')}>${card(164, 10, 148, 180)}<rect x="202" y="56" width="64" height="64" rx="2" fill="none" stroke="${PCL}" stroke-width="2.2" stroke-dasharray="5 4"/><circle cx="234" cy="88" r="39" fill="none" stroke="#F4B183" stroke-width="2.2" stroke-dasharray="5 4"/></g>
        <g ${tA(2.6)}><rect x="202" y="56" width="64" height="64" fill="${OK}" clip-path="url(#p3ib)"/></g>
        <g ${tA(2.9, 'ta-in')}>${txt(238, 156, L('Cub ∩ esfera', 'Cubo ∩ esfera'), 'tat b')}${txt(238, 176, L('→ dau arrodonit', '→ dado redondeado'), 'tat s', `fill:${OK}`)}</g>`);
    },
    // dues ombres (de davant i de dalt) que es creuen: la part comuna és un cilindre
    p3ombra() {
      const P = iso(266, 92, 1.15);
      return tSvg(196, `<g ${tA(.2, 'ta-in')}>${card(6, 14, 92, 150)}<rect x="22" y="44" width="60" height="60" rx="3" fill="#8D96B5"/>${txt(52, 132, L('de davant', 'de frente'), 'tat b')}${txt(52, 152, L('un quadrat', 'un cuadrado'), 'tat s', `fill:${MUT}`)}</g>
        <g ${tA(.8, 'ta-pop')}>${txt(110, 84, '∩', 'tat b', 'font-size:26px')}</g>
        <g ${tA(1, 'ta-in')}>${card(122, 14, 92, 150)}<circle cx="168" cy="74" r="30" fill="#8D96B5"/>${txt(168, 132, L('de dalt', 'desde arriba'), 'tat b')}${txt(168, 152, L('un cercle', 'un círculo'), 'tat s', `fill:${MUT}`)}</g>
        <g ${tA(1.6, 'ta-pop')}>${txt(226, 84, '=', 'tat b', 'font-size:26px')}</g>
        <g ${tA(2, 'ta-pop')}>${isoCyl(P, 0, 0, 22, 0, 46, PC, PCL, 1.15)}</g>
        <g ${tA(2.4, 'ta-in')}>${txt(272, 152, L('un cilindre', 'un cilindro'), 'tat b')}</g>
        <g ${tA(3, 'ta-in')}>${txt(160, 186, L("l'objecte que fa les dues ombres", 'el objeto que hace las dos sombras'), 'tat s', `fill:${MUT}`)}</g>`);
    },
    // el desenvolupament del dau i les cares oposades que sumen 7
    p3dau() {
      const S = 36, X0 = 12, Y0 = 16, PIP = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]] };
      const COL = { 1: '#7C5CFF', 6: '#7C5CFF', 2: '#EC5FA8', 5: '#EC5FA8', 3: '#FF8A3D', 4: '#FF8A3D' };
      const face = (c, r, n, t) => { const x = X0 + c * (S + 2), y = Y0 + r * (S + 2), cx = x + S / 2, cy = y + S / 2;
        return `<g ${tA(t)}><rect x="${x}" y="${y}" width="${S}" height="${S}" rx="7" fill="${COL[n]}"/>${PIP[n].map(([a, b]) => `<circle cx="${cx + a * 10}" cy="${cy + b * 10}" r="3.6" fill="#fff"/>`).join('')}</g>`; };
      const pair = (y, a, b, la, lb, t) => `<g ${tA(t, 'ta-in')}>${card(140, y, 172, 60)}<text x="154" y="${y + 19}" class="tat b" style="fill:${COL[a]}">${a} + ${b} = 7</text>
        <text x="154" y="${y + 37}" class="tat s" style="font-size:12px">${a} · ${la}</text><text x="154" y="${y + 53}" class="tat s" style="font-size:12px">${b} · ${lb}</text></g>`;
      return tSvg(214, face(1, 0, 5, .2) + face(0, 1, 4, .35) + face(1, 1, 1, .5) + face(2, 1, 3, .65) + face(1, 2, 2, .8) + face(1, 3, 6, .95)
        + pair(8, 1, 6, L('dalt · z = 10', 'arriba · z = 10'), L('sota · z = −10', 'abajo · z = −10'), 1.4)
        + pair(76, 2, 5, L('davant · y = −10', 'delante · y = −10'), L('darrere · y = 10', 'detrás · y = 10'), 2)
        + pair(144, 3, 4, L('dreta · x = 10', 'derecha · x = 10'), L('esquerra · x = −10', 'izquierda · x = −10'), 2.6));
    },
    // l'arbre CSG del dau: l'operació final a dalt i, a sota, de què està fet cada tros
    p3tree() {
      const node = (cx, cy, s, fill, t, w) => { const W = w || s.length * 6.9 + 16; return `<g ${tA(t)}><rect x="${(cx - W / 2).toFixed(1)}" y="${cy - 13}" width="${W.toFixed(1)}" height="26" rx="9" fill="${fill}" filter="url(#bwSh)"/><text x="${cx}" y="${cy + 4.5}" text-anchor="middle" class="tat s w" style="${mono}font-size:11.5px">${s}</text></g>`; };
      const edge = (x1, y1, x2, y2, t) => `<path d="M${x1} ${y1}L${x2} ${y2}" pathLength="1" fill="none" stroke="#B4BEDC" stroke-width="2.4" ${tA(t, 'ta-draw')}/>`;
      return tSvg(214, edge(160, 34, 160, 58, .5) + edge(150, 82, 116, 108, 1.1) + edge(172, 82, 250, 108, 1.1) + edge(108, 132, 70, 164, 1.8) + edge(130, 132, 200, 164, 1.8)
        + node(160, 22, `${L('mou', 'mueve')}(0, 0, 10)`, '#3D7BF4', .2) + node(160, 70, L('resta', 'resta'), '#1FA463', .8)
        + node(116, 120, 'interseca', '#14A3B8', 1.4) + node(250, 120, `21 × esfera(4)`, EI, 1.4)
        + node(70, 176, `${L('cub', 'cubo')}(20, ${L('centrat', 'centrado')})`, PC, 2.1) + node(200, 176, 'esfera(28)', PC, 2.1)
        + `<g ${tA(2.6, 'ta-in')}>${txt(40, 124, L('la peça', 'la pieza'), 'tat s', `fill:${MUT};font-size:12px`)}${txt(250, 148, L('les eines (els punts)', 'herramientas (puntos)'), 'tat s', `fill:${MUT};font-size:12px`)}</g>`
        + `<g ${tA(3, 'ta-in')}>${txt(160, 206, L('de baix a dalt: el cos i després els forats', 'de abajo arriba: el cuerpo y luego los agujeros'), 'tat s', `fill:${MUT};font-size:11.5px`)}</g>`);
    }
  };
})());

/* ── unitat 5 ── */
/* Tech 3D · Nivell 2 · unitat 5 «Bucles i patrons» · animacions de teoria (TANI). Dibuixos propis de Numi.
   p5copy: quatre línies gairebé iguals es converteixen en un bucle · p5count: el comptador i i la posició i × pas ·
   p5nest: una graella feta fila a fila (bucles niats) · p5orbit: allunyar i girar 360 / n · p5gear: dues rodes que
   encaixen (8 i 16 dents) i giren amb relació 2 : 1. El codi es dibuixa amb lletra de màquina, com a l'editor. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const kt = secs => secs.map(s => +(s / D).toFixed(4)).join(';');
  const an = (attr, vals, secs) => `<animate attributeName="${attr}" values="${vals}" keyTimes="${kt(secs)}" dur="${D}s" repeatCount="indefinite"/>`;
  // visible només entre dos moments del cicle (segons)
  const win = (a, b) => an('opacity', '0;0;1;1;0;0', [0, a, a + .15, b, b + .15, D]);
  const mono = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${o.s || 12.5}" font-weight="${o.w || 700}" fill="${o.c || '#E8EEFF'}" text-anchor="${o.a || 'start'}">${txt}</text>`;
  const C = { ink: '#14204A', pink: '#D63F8C', vio: '#7C5CFF', ora: '#F08A24', grn: '#1FA463', blue: '#2F5BEA', gold: '#FFC531', kw: '#C9B6FF', num: '#FFD27A', line: '#DCE4FA' };
  // un cub isomètric: (x, y) és la cantonada de baix de davant; e, l'aresta en píxels
  const cube = (x, y, e, c = [C.pink, '#B02E72', '#F48BC0']) => { const dx = e * .866, dy = e * .5;
    return `<polygon points="${x},${y} ${x - dx},${y - dy} ${x - dx},${y - dy - e} ${x},${y - e}" fill="${c[0]}"/><polygon points="${x},${y} ${x + dx},${y - dy} ${x + dx},${y - dy - e} ${x},${y - e}" fill="${c[1]}"/><polygon points="${x},${y - e} ${x - dx},${y - dy - e} ${x},${y - 2 * dy - e} ${x + dx},${y - dy - e}" fill="${c[2]}"/>`; };
  const KW = (w1, w2) => `<tspan fill="${C.kw}">${L(w1, w2)}</tspan>`, NU = n => `<tspan fill="${C.num}">${n}</tspan>`;
  // perfil d'una roda dentada (z dents, radi primitiu rp, mòdul m) centrada a (0, 0)
  const gear = (z, rp, m) => { const p = 2 * Math.PI / z, rr = rp - m * 1.1, ra = rp + m, P = [];
    for (let k = 0; k < z; k++) { const a = k * p; [[rr, a - .3 * p], [ra, a - .16 * p], [ra, a + .16 * p], [rr, a + .3 * p]].forEach(([r, t]) => P.push(`${(r * Math.cos(t)).toFixed(1)},${(r * Math.sin(t)).toFixed(1)}`)); }
    return P.join(' '); };
  return {
    // quatre línies que només canvien en un número → un sol bucle
    p5copy() {
      const xs = [0, 25, 50, 75];
      const lines = xs.map((v, k) => `<g ${tA(.2 + k * .35, 'ta-in')}>${mono(20, 44 + k * 22, `${KW('mou', 'mueve')}(<tspan fill="${C.gold}" font-weight="900">${v}</tspan>, ${NU(0)}, ${NU(0)}) ${KW('cub', 'cubo')}(${NU(20)})`)}</g>`).join('');
      const cubes = xs.map((v, k) => `<g ${tA(.35 + k * .35)}>${cube(196 + k * 26, 150 - k * 15, 22)}</g>`).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="8" y="20" width="176" height="170" rx="14" fill="${C.ink}"/>
        <g>${win(0, 2.6)}${lines}<g ${tA(1.7, 'ta-fade')}><rect x="150" y="30" width="26" height="92" rx="9" fill="none" stroke="${C.gold}" stroke-width="2.5" stroke-dasharray="5 4"/><text x="163" y="140" text-anchor="middle" class="tat s" fill="${C.gold}">+25</text></g></g>
        <g opacity="0">${win(2.75, 5.3)}${mono(18, 58, `${KW('repeteix', 'repite')} i ${KW('de', 'de')} ${NU(0)} ${KW('a', 'a')} ${NU(3)} {`)}${mono(30, 84, `${KW('mou', 'mueve')}(<tspan fill="${C.gold}" font-weight="900">i * 25</tspan>, ${NU(0)}, ${NU(0)})`)}${mono(42, 106, `${KW('cub', 'cubo')}(${NU(20)})`)}${mono(18, 130, '}')}
          <rect x="18" y="150" width="156" height="28" rx="14" fill="${C.grn}"/><text x="96" y="169" text-anchor="middle" class="tat w s">${L('4 línies → 1 bucle', '4 líneas → 1 bucle')}</text></g>
        <ellipse cx="236" cy="158" rx="72" ry="14" fill="${C.ink}" opacity=".08"/>${cubes}
        <g ${tA(1.9, 'ta-in')}><rect x="196" y="16" width="112" height="28" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="252" y="35" text-anchor="middle" class="tat s">${L('un patró', 'un patrón')}</text></g>`);
    },
    // el comptador i: cada volta, la posició i × 25
    p5count() {
      const T0 = .3, dt = .9;
      const rows = [0, 1, 2, 3, 4].map(i => { const a = T0 + i * dt;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .12, 5.2, 5.35, D])}<text x="40" y="${62 + i * 24}" text-anchor="middle" class="tat b">${i}</text><text x="104" y="${62 + i * 24}" text-anchor="middle" class="tat s">${i} × 25 = <tspan font-weight="900" fill="${C.pink}">${i * 25}</tspan></text></g>`; }).join('');
      const hi = `<rect x="16" y="44" width="140" height="22" rx="8" fill="${C.gold}" opacity="0"><animate attributeName="y" values="44;68;92;116;140" keyTimes="${kt([0, T0 + dt, T0 + 2 * dt, T0 + 3 * dt, T0 + 4 * dt])}" calcMode="discrete" dur="${D}s" repeatCount="indefinite"/>${an('opacity', '0;0;.5;.5;0;0', [0, T0, T0 + .1, 5.2, 5.35, D])}</rect>`;
      const cubes = [0, 1, 2, 3, 4].map(i => `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, T0 + i * dt + .15, T0 + i * dt + .3, 5.2, 5.35, D])}<rect x="${176 + i * 26}" y="118" width="18" height="18" rx="3" fill="${C.pink}"/><rect x="${176 + i * 26}" y="118" width="18" height="5" rx="2" fill="#F48BC0"/></g>`).join('');
      const ticks = [0, 1, 2, 3, 4].map(i => `<path d="M${176 + i * 26} 142v8" stroke="${C.ink}" stroke-width="2"/><text x="${176 + i * 26}" y="164" text-anchor="middle" font-size="11" font-weight="800" fill="${C.ink}">${i * 25}</text>`).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <rect x="12" y="16" width="148" height="172" rx="14" fill="#fff" stroke="${C.line}" stroke-width="2"/>${hi}
        <text x="40" y="36" text-anchor="middle" class="tat s" fill="${C.vio}">i</text><text x="104" y="36" text-anchor="middle" class="tat s" fill="${C.vio}">${L('posició x', 'posición x')}</text><path d="M20 44h132" stroke="${C.line}" stroke-width="2"/>${rows}
        <path d="M172 142h120" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>${ticks}${cubes}<text x="232" y="184" text-anchor="middle" class="tat s">x (mm)</text>
        <g ${tA(.2, 'ta-in')}><rect x="168" y="30" width="144" height="56" rx="14" fill="${C.ink}"/>${mono(240, 54, `${KW('mou', 'mueve')}(i * 25, …)`, { a: 'middle' })}<text x="240" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="${C.gold}">${L('posició = i × pas', 'posición = i × paso')}</text></g>`);
    },
    // bucles niats: per a cada fila j, totes les columnes i
    p5nest() {
      const X0 = 104, Y0 = 34, S = 34, t = (j, i) => .3 + (j * 4 + i) * .3;
      const cells = [];
      for (let j = 0; j < 3; j++) for (let i = 0; i < 4; i++) { const a = t(j, i), x = X0 + i * S, y = Y0 + (2 - j) * S;
        cells.push(`<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .1, 5.2, 5.35, D])}<rect x="${x + 3}" y="${y + 3}" width="${S - 6}" height="${S - 6}" rx="6" fill="${[C.pink, C.vio, C.ora][j]}"/><text x="${x + S / 2}" y="${y + S / 2 + 5}" text-anchor="middle" class="tat w s">${j * 4 + i + 1}</text></g>`); }
      const rowLab = [0, 1, 2].map(j => `<g opacity=".25">${an('opacity', '.25;.25;1;1;.25;.25', [0, t(j, 0) - .05, t(j, 0) + .05, t(j, 3) + .3, t(j, 3) + .4, D])}<text x="${X0 - 14}" y="${Y0 + (2 - j) * S + S / 2 + 5}" text-anchor="end" class="tat s" fill="${[C.pink, C.vio, C.ora][j]}">j = ${j}</text></g>`).join('');
      const colLab = [0, 1, 2, 3].map(i => `<text x="${X0 + i * S + S / 2}" y="${Y0 + 3 * S + 18}" text-anchor="middle" font-size="12" font-weight="800" fill="${C.ink}">i = ${i}</text>`).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/>
        <rect x="${X0}" y="${Y0}" width="${4 * S}" height="${3 * S}" rx="8" fill="#fff" stroke="${C.line}" stroke-width="2"/>
        ${[1, 2, 3].map(i => `<path d="M${X0 + i * S} ${Y0}v${3 * S}" stroke="${C.line}" stroke-width="1.5"/>`).join('')}${[1, 2].map(j => `<path d="M${X0} ${Y0 + j * S}h${4 * S}" stroke="${C.line}" stroke-width="1.5"/>`).join('')}
        ${cells.join('')}${rowLab}${colLab}
        <text x="${X0 + 2 * S}" y="22" text-anchor="middle" class="tat s">${L('columnes (x) → i', 'columnas (x) → i')}</text>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 3.95, 4.1, 5.2, 5.35, D])}<rect x="252" y="76" width="62" height="50" rx="12" fill="${C.ink}"/><text x="283" y="98" text-anchor="middle" class="tat w s">3 × 4</text><text x="283" y="117" text-anchor="middle" class="tat w b">= 12</text></g>`);
    },
    // patró circular: allunyar (mou) i girar al voltant de l'origen (gira i · 360 / n)
    p5orbit() {
      const cx = 118, cy = 104, R = 62, n = 8, piece = a => `<g transform="rotate(${-a} ${cx} ${cy})"><rect x="${cx + R - 12}" y="${cy - 7}" width="24" height="14" rx="4" fill="${C.pink}" stroke="#fff" stroke-width="2"/></g>`;
      const copies = Array.from({ length: n }, (_, i) => { const a = .9 + i * .42;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .12, 5.2, 5.35, D])}${piece(i * 45)}<text x="${(cx + (R + 26) * Math.cos(-i * 45 * Math.PI / 180)).toFixed(1)}" y="${(cy + (R + 26) * Math.sin(-i * 45 * Math.PI / 180) + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="800" fill="${C.vio}">${i * 45}°</text></g>`; }).join('');
      return tSvg(208, `<rect width="320" height="208" rx="20" fill="#F1F2FB"/>
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.line}" stroke-width="2.5" stroke-dasharray="5 6"/>
        <path d="M${cx - 80} ${cy}h160M${cx} ${cy - 80}v160" stroke="${C.line}" stroke-width="1.5"/>
        <circle cx="${cx}" cy="${cy}" r="5" fill="${C.ink}"/><text x="${cx - 8}" y="${cy + 18}" text-anchor="end" font-size="11" font-weight="800" fill="${C.ink}">(0, 0)</text>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, .2, .35, .9, 1.05, D])}<rect x="${cx - 12}" y="${cy - 7}" width="24" height="14" rx="4" fill="${C.pink}" opacity=".55"/></g>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, .55, .7, 5.2, 5.35, D])}<path d="M${cx} ${cy - 16}h${R}" stroke="${C.ora}" stroke-width="2.5"/><text x="${cx + R / 2}" y="${cy - 22}" text-anchor="middle" font-size="12" font-weight="800" fill="${C.ora}">r</text></g>
        ${copies}
        <g ${tA(.4, 'ta-in')}><rect x="214" y="20" width="98" height="78" rx="14" fill="${C.ink}"/>${mono(263, 44, `${KW('gira', 'gira')}(…)`, { a: 'middle' })}${mono(263, 64, `${KW('mou', 'mueve')}(r, 0, 0)`, { a: 'middle', s: 11.5 })}${mono(263, 84, `${KW('cub', 'cubo')}(…)`, { a: 'middle' })}</g>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 4.2, 4.35, 5.2, 5.35, D])}<rect x="214" y="122" width="98" height="56" rx="14" fill="${C.grn}"/><text x="263" y="146" text-anchor="middle" class="tat w s">360° / 8</text><text x="263" y="166" text-anchor="middle" class="tat w b">= 45°</text></g>`);
    },
    // dues rodes que encaixen: el pinyó (8 dents) fa dues voltes mentre la roda (16 dents) en fa una
    p5gear() {
      const m = 6, z1 = 8, z2 = 16, r1 = m * z1 / 2, r2 = m * z2 / 2, y = 100, x1 = 82, x2 = x1 + r1 + r2, T = 8;
      const wheel = (x, z, r, col, dark, dir, ph) => `<g transform="translate(${x} ${y})"><g><animateTransform attributeName="transform" type="rotate" from="${ph} 0 0" to="${ph + dir * 360 * z1 / z} 0 0" dur="${T}s" repeatCount="indefinite"/>
        <polygon points="${gear(z, r, m)}" fill="${col}" stroke="${dark}" stroke-width="2" stroke-linejoin="round"/><circle r="${r - m * 2.4}" fill="${dark}" opacity=".18"/><circle r="${Math.max(5, r * .18)}" fill="#F1F2FB" stroke="${dark}" stroke-width="2"/><circle cx="${r - m * 2.2}" cy="0" r="4" fill="#fff"/></g></g>`;
      return tSvg(214, `<rect width="320" height="214" rx="20" fill="#F1F2FB"/>
        ${wheel(x1, z1, r1, C.ora, '#B9601A', 1, 0)}${wheel(x2, z2, r2, C.blue, '#1C3C9E', -1, 180 / z2)}
        <g ${tA(.3, 'ta-in')}><rect x="${x1 - 40}" y="160" width="80" height="44" rx="12" fill="#fff" filter="url(#bwSh)"/><text x="${x1}" y="178" text-anchor="middle" class="tat s">${L('pinyó', 'piñón')} · z = 8</text><text x="${x1}" y="196" text-anchor="middle" font-size="12" font-weight="900" fill="${C.ora}">${L('2 voltes', '2 vueltas')}</text></g>
        <g ${tA(.7, 'ta-in')}><rect x="${x2 - 46}" y="168" width="92" height="40" rx="12" fill="#fff" filter="url(#bwSh)"/><text x="${x2}" y="184" text-anchor="middle" class="tat s">${L('roda', 'rueda')} · z = 16</text><text x="${x2}" y="200" text-anchor="middle" font-size="12" font-weight="900" fill="${C.blue}">${L('1 volta', '1 vuelta')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="10" y="10" width="124" height="30" rx="15" fill="${C.ink}"/><text x="72" y="30" text-anchor="middle" class="tat w s">16 / 8 = 2</text></g>`);
    }
  };
})());

/* ── unitat 6 ── */
/* Tech 3D · Nivell 2 · unitat 6 «Mòduls» · animacions de teoria (TANI). Dibuixos propis de Numi.
   p6def: una definició (la recepta) i tres crides que en fan tres còpies, com un segell · p6param: els paràmetres són
   buits que s'omplen a cada crida (torre(20), torre(40), torre(60)) · p6lib: les tres parts d'un programa ben
   organitzat i les fletxes de cada crida a la seva definició · p6plan: el pla d'un projecte gran, amb la tornada enrere. */
Object.assign(TANI, (() => {
  const D = 5.5;
  const kt = secs => secs.map(s => +(s / D).toFixed(4)).join(';');
  const an = (attr, vals, secs) => `<animate attributeName="${attr}" values="${vals}" keyTimes="${kt(secs)}" dur="${D}s" repeatCount="indefinite"/>`;
  const win = (a, b) => an('opacity', '0;0;1;1;0;0', [0, a, a + .15, b, b + .15, D]);
  const mono = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="${o.s || 12}" font-weight="${o.w || 700}" fill="${o.c || '#E8EEFF'}" text-anchor="${o.a || 'start'}">${txt}</text>`;
  const C = { ink: '#14204A', pink: '#D63F8C', vio: '#7C5CFF', ora: '#F08A24', grn: '#1FA463', blue: '#2F5BEA', gold: '#FFC531', kw: '#C9B6FF', num: '#FFD27A', fn: '#7FE0C3', line: '#DCE4FA' };
  const KW = (a, b) => `<tspan fill="${C.kw}">${L(a, b)}</tspan>`, FN = (a, b) => `<tspan fill="${C.fn}">${L(a, b)}</tspan>`, NU = n => `<tspan fill="${C.num}">${n}</tspan>`;
  // un arbre vist de costat (la base a (x, y))
  const tree = (x, y, s = 1) => `<rect x="${x - 3 * s}" y="${y - 22 * s}" width="${6 * s}" height="${22 * s}" rx="2" fill="#A0683A"/><circle cx="${x}" cy="${y - 30 * s}" r="${14 * s}" fill="${C.grn}"/><circle cx="${x - 5 * s}" cy="${y - 35 * s}" r="${5 * s}" fill="#7FD6A6" opacity=".7"/>`;
  return {
    // definir una vegada (la recepta) i cridar tres vegades (tres arbres a llocs diferents)
    p6def() {
      const calls = [[`${FN('arbre', 'árbol')}()`, 190], [`${KW('mou', 'mueve')}(${NU(30)},…) ${FN('arbre', 'árbol')}()`, 236], [`${KW('mou', 'mueve')}(${NU(60)},…) ${FN('arbre', 'árbol')}()`, 282]];
      const parts = calls.map(([txt, x], k) => { const a = 1.4 + k * 1.1;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .15, 5.2, 5.35, D])}${mono(18, 150 + k * 18, txt, { s: 11.5 })}<path d="M150 ${146 + k * 18} C 170 ${146 + k * 18}, ${x - 20} 120, ${x} 112" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="4 4"/></g>
          <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a + .35, a + .5, 5.2, 5.35, D])}${tree(x, 176)}</g>`; }).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="8" y="14" width="160" height="104" rx="14" fill="${C.ink}"/>
        <g ${tA(.2, 'ta-in')}>${mono(18, 38, `${KW('defineix', 'define')} ${FN('arbre', 'árbol')}() {`)}${mono(30, 60, `${KW('cilindre', 'cilindro')}(${NU(4)}, ${NU(12)})`)}${mono(30, 80, `${KW('mou', 'mueve')}(…) ${KW('esfera', 'esfera')}(${NU(14)})`)}${mono(18, 102, '}')}</g>
        <g ${tA(.6, 'ta-in')}><rect x="182" y="16" width="128" height="40" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="246" y="34" text-anchor="middle" class="tat s">${L('1 definició', '1 definición')}</text><text x="246" y="50" text-anchor="middle" font-size="12" font-weight="800" fill="${C.pink}">${L('= la recepta', '= la receta')}</text></g>
        <rect x="8" y="132" width="160" height="60" rx="12" fill="${C.ink}" opacity=".92"/>
        <path d="M178 176h136" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>${parts}
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 4.3, 4.45, 5.2, 5.35, D])}<rect x="196" y="62" width="104" height="26" rx="13" fill="${C.grn}"/><text x="248" y="80" text-anchor="middle" class="tat w s">${L('3 crides', '3 llamadas')}</text></g>`);
    },
    // un paràmetre és un buit que s'omple a cada crida
    p6param() {
      const vals = [20, 40, 60], cols = [C.ora, C.pink, C.vio];
      const towers = vals.map((v, k) => { const a = .9 + k * 1.2, x = 196 + k * 44, h = v * 1.6;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a + .4, a + .55, 5.2, 5.35, D])}<rect x="${x - 10}" y="${178 - h}" width="20" height="${h}" rx="3" fill="${cols[k]}"/><polygon points="${x - 15},${178 - h} ${x + 15},${178 - h} ${x},${160 - h}" fill="${C.ink}"/><text x="${x}" y="194" text-anchor="middle" font-size="11.5" font-weight="800" fill="${C.ink}">${v}</text></g>`; }).join('');
      const slot = vals.map((v, k) => { const a = .9 + k * 1.2;
        return `<g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, a, a + .12, a + 1.05, a + 1.2, D])}<text x="118" y="45" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="13" font-weight="900" fill="${C.gold}">${v}</text>${mono(18, 160, `${KW('torre', 'torre')}(<tspan fill="${C.gold}">${v}</tspan>)`, { s: 13 })}</g>`; }).join('');
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="8" y="14" width="168" height="110" rx="14" fill="${C.ink}"/>
        ${mono(18, 38, `${KW('defineix', 'define')} torre(`)}<rect x="94" y="26" width="48" height="24" rx="7" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="4 3"/>${mono(146, 38, ') {')}
        <g>${win(0, .85)}<text x="118" y="43" text-anchor="middle" font-size="10.5" font-weight="800" fill="${C.gold}">${L('alçada', 'altura')}</text></g>
        ${mono(30, 66, `${KW('cilindre', 'cilindro')}(${NU(14)}, <tspan fill="${C.gold}">${L('alçada', 'altura')}</tspan>)`, { s: 11.5 })}${mono(30, 88, `${KW('mou', 'mueve')}(0, 0, <tspan fill="${C.gold}">${L('alçada', 'altura')}</tspan>) ${KW('con', 'cono')}…`, { s: 11.5 })}${mono(18, 110, '}')}
        <rect x="8" y="138" width="168" height="34" rx="12" fill="${C.ink}" opacity=".92"/>${slot}
        <path d="M184 178h130" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>${towers}
        <g ${tA(.3, 'ta-in')}><rect x="188" y="10" width="124" height="28" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="250" y="29" text-anchor="middle" class="tat s">${L('1 mòdul, 3 mides', '1 módulo, 3 medidas')}</text></g>`);
    },
    // les tres parts d'un programa ben organitzat
    p6lib() {
      const sec = (y, h, col, title, lines, t) => `<g ${tA(t, 'ta-in')}><rect x="10" y="${y}" width="196" height="${h}" rx="12" fill="${C.ink}"/><rect x="10" y="${y}" width="8" height="${h}" rx="4" fill="${col}"/>
        <text x="200" y="${y + 16}" text-anchor="end" font-size="10.5" font-weight="900" fill="${col}">${title}</text>${lines.map((l, k) => mono(26, y + 18 + k * 16, l, { s: 11 })).join('')}</g>`;
      return tSvg(214, `<rect width="320" height="214" rx="20" fill="#F1F2FB"/>
        ${sec(10, 34, C.gold, L('1 · PARÀMETRES', '1 · PARÁMETROS'), [`n = ${NU(3)}`], .2)}
        ${sec(52, 88, C.vio, L('2 · MÒDULS', '2 · MÓDULOS'), [`<tspan fill="#8A93B8">// ${L('fanal(alçada): …', 'farola(altura): …')}</tspan>`, `${KW('defineix', 'define')} ${FN('fanal', 'farola')}(…) {…}`, `<tspan fill="#8A93B8">// ${L('banc(llargada): …', 'banco(largo): …')}</tspan>`, `${KW('defineix', 'define')} ${FN('banc', 'banco')}(…) {…}`], .9)}
        ${sec(148, 56, C.grn, L("3 · L'ESCENA", '3 · LA ESCENA'), [`${FN('fanal', 'farola')}(${NU(30)})`, `${KW('mou', 'mueve')}(…) ${FN('banc', 'banco')}(${NU(36)})`], 1.6)}
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 2.4, 2.55, 5.2, 5.35, D])}<path d="M120 162 C 160 162, 170 92, 150 88" fill="none" stroke="${C.gold}" stroke-width="2.2" stroke-dasharray="4 4"/></g>
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 2.9, 3.05, 5.2, 5.35, D])}<path d="M196 178 C 230 178, 236 124, 196 120" fill="none" stroke="${C.gold}" stroke-width="2.2" stroke-dasharray="4 4"/></g>
        <g ${tA(3.4, 'ta-in')}><rect x="214" y="40" width="98" height="116" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="263" y="64" text-anchor="middle" class="tat s">${L('Comentaris', 'Comentarios')}</text><text x="263" y="84" text-anchor="middle" font-size="12" font-weight="800" fill="${C.vio}">// ${L('què fa', 'qué hace')}</text><text x="263" y="108" text-anchor="middle" class="tat s">${L('Noms clars', 'Nombres claros')}</text><text x="263" y="128" text-anchor="middle" font-size="12" font-weight="800" fill="${C.vio}">${L('banc ✓  m1 ✗', 'banco ✓  m1 ✗')}</text><text x="263" y="146" text-anchor="middle" font-size="11" font-weight="800" fill="${C.ink}">${L('origen: centre', 'origen: centro')}</text></g>`);
    },
    // el pla d'un projecte gran: esbós → mòduls → provar → escena → imprimir (i tornar enrere si cal)
    p6plan() {
      const st = [['✏️', L('Esbós', 'Boceto'), C.ora], ['🧩', L('Mòduls', 'Módulos'), C.vio], ['🧪', L('Prova', 'Prueba'), C.blue], ['🏙️', L('Escena', 'Escena'), C.grn], ['🖨️', L('Imprimeix', 'Imprime'), C.pink]];
      const pos = [[52, 58], [160, 58], [268, 58], [214, 146], [106, 146]];
      return tSvg(208, `<rect width="320" height="208" rx="20" fill="#F1F2FB"/>
        <path d="M52 58H268L214 146H106" fill="none" stroke="${C.line}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        ${st.map(([ic, t, c], k) => `<g ${tA(.2 + k * .6)}><circle cx="${pos[k][0]}" cy="${pos[k][1]}" r="30" fill="#fff" stroke="${c}" stroke-width="4" filter="url(#bwSh)"/><text x="${pos[k][0]}" y="${pos[k][1] + 2}" text-anchor="middle" font-size="22">${ic}</text><text x="${pos[k][0]}" y="${pos[k][1] + 46}" text-anchor="middle" class="tat s">${k + 1} · ${t}</text></g>`).join('')}
        <g opacity="0">${an('opacity', '0;0;1;1;0;0', [0, 3.4, 3.55, 5.2, 5.35, D])}<path d="M234 82 C 224 104, 200 104, 186 84" fill="none" stroke="${C.red || '#EF5A5A'}" stroke-width="2.5" stroke-dasharray="5 4"/><polygon points="183,80 192,86 182,89" fill="#EF5A5A"/><text x="212" y="116" text-anchor="middle" font-size="11" font-weight="800" fill="#EF5A5A">${L('falla? torna-hi', '¿falla? vuelve')}</text></g>`);
    }
  };
})());

/* ── unitat 7 ── */
/* Tech 3D · Nivell 2 · unitat 7 «Enginyeria i fabricació» · animacions de teoria (TANI). Dibuixos propis de Numi.
   Claus amb el prefix de la sessió (p71…, p72…, p73…, p74…). Les animacions pròpies (keyframes p7…) tenen com a estat de
   repòs la imatge final: amb «reduir moviment» es veu el muntatge acabat. */
Object.assign(TANI, (() => {
  const BG = '<rect width="320" height="200" rx="20" fill="#F1F2FB"/>';
  const chip = (x, y, w, txt, col = '#14204A', t = 0) => `<g ${tA(t, 'ta-in')}><rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="#fff" filter="url(#bwSh)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="tat s" fill="${col}">${txt}</text></g>`;
  return {
    // eix i forat, pestanya i ranura: la peça de dalt baixa i encaixa a la de baix
    p71fit() {
      return tSvg(200, `<style>.p71dn{animation:p71dn 4.6s ease-in-out infinite}@keyframes p71dn{0%,14%{transform:translateY(-36px)}46%,84%{transform:none}100%{transform:translateY(-36px)}}</style>${BG}
        <text x="82" y="30" text-anchor="middle" class="tat b">${L('Eix i forat', 'Eje y agujero')}</text><text x="240" y="30" text-anchor="middle" class="tat b">${L('Pestanya i ranura', 'Pestaña y ranura')}</text>
        <ellipse cx="82" cy="172" rx="66" ry="7" fill="#14204A" opacity=".1"/><ellipse cx="240" cy="172" rx="66" ry="7" fill="#14204A" opacity=".1"/>
        <rect x="22" y="110" width="46" height="58" rx="5" fill="#7C5CFF"/><rect x="96" y="110" width="46" height="58" rx="5" fill="#7C5CFF"/><rect x="22" y="110" width="120" height="8" rx="4" fill="#9C84FF" opacity=".7"/>
        <rect x="68" y="110" width="28" height="58" fill="#E4DCFF"/>
        <g class="p71dn"><rect x="71" y="52" width="22" height="84" rx="4" fill="#2FB36D"/><rect x="71" y="52" width="8" height="84" rx="3" fill="#6FD69B"/></g>
        <rect x="180" y="118" width="120" height="50" rx="5" fill="#7C5CFF"/><rect x="226" y="118" width="28" height="30" fill="#E4DCFF"/>
        <g class="p71dn"><rect x="180" y="68" width="120" height="14" rx="4" fill="#FF8A3D"/><rect x="229" y="82" width="22" height="30" rx="3" fill="#FF8A3D"/><rect x="229" y="82" width="7" height="30" fill="#FFB47F"/></g>
        ${chip(40, 92, 56, L('eix', 'eje'), '#1F8A4C', 1.2)}${chip(120, 92, 66, L('forat', 'agujero'), '#5B3FD6', 1.6)}
        ${chip(198, 104, 70, L('pestanya', 'pestaña'), '#C25E14', 1.2)}${chip(282, 104, 62, L('ranura', 'ranura'), '#5B3FD6', 1.6)}
        <g ${tA(2.6, 'ta-in')}><text x="160" y="192" text-anchor="middle" class="tat s">${L('Les dues peces es dissenyen juntes', 'Las dos piezas se diseñan juntas')}</text></g>`);
    },
    // per què el forat surt més petit: el fil s'aixafa, s'encongeix i el cercle és un polígon
    p72why() {
      const poly = (cx, cy, r, n) => Array.from({ length: n }, (_, k) => { const a = (k + .5) * 2 * Math.PI / n; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
      return tSvg(200, `${BG}
        <text x="84" y="26" text-anchor="middle" class="tat s">${L('vist de dalt', 'visto desde arriba')}</text><text x="236" y="26" text-anchor="middle" class="tat s">${L('el fil, de costat', 'el hilo, de lado')}</text>
        <rect x="20" y="40" width="128" height="128" rx="14" fill="#7C5CFF"/>
        <circle cx="84" cy="104" r="40" fill="#5B3FD6" opacity=".55"/>
        <g ${tA(.6, 'ta-fade')}><polygon points="${poly(84, 104, 33, 10)}" fill="#E4DCFF"/></g>
        <g ${tA(.2, 'ta-fade')}><circle cx="84" cy="104" r="38" fill="none" stroke="#E8453C" stroke-width="2.5" stroke-dasharray="6 5"/></g>
        ${chip(84, 186, 150, L('disseny ⟶ imprès: més petit', 'diseño ⟶ impreso: más pequeño'), '#C0332B', 1.4)}
        <g ${tA(1, 'ta-pop')}><path d="M214 44h44l-10 26h-24z" fill="#9AA3B5"/><rect x="230" y="70" width="12" height="10" fill="#6B7487"/></g>
        <g ${tA(1.8, 'ta-pop')}><ellipse cx="236" cy="92" rx="22" ry="8" fill="#FF8A3D"/></g>
        <g ${tA(2.1, 'ta-pop')}><ellipse cx="236" cy="109" rx="22" ry="8" fill="#F57C2A"/></g>
        <g ${tA(2.4, 'ta-pop')}><ellipse cx="236" cy="126" rx="22" ry="8" fill="#E86E1E"/></g>
        <g ${tA(2.8, 'ta-in')}><path d="M212 92h-14M260 92h14" stroke="#14204A" stroke-width="2.4" stroke-linecap="round"/><path d="M200 88l-4 4 4 4M272 88l4 4-4 4" fill="none" stroke="#14204A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(3.2, 'ta-in')}><text x="236" y="152" text-anchor="middle" class="tat s">${L("s'aixafa i s'eixampla", 'se aplasta y se ensancha')}</text><text x="236" y="170" text-anchor="middle" class="tat s">${L("i s'encongeix en refredar-se", 'y encoge al enfriarse')}</text></g>`);
    },
    // la tolerància: l'espai a cada costat de l'eix (dibuix exagerat)
    p72tol() {
      return tSvg(200, `${BG}
        <circle cx="102" cy="102" r="70" fill="#7C5CFF"/><circle cx="102" cy="102" r="56" fill="#E4DCFF"/>
        <g ${tA(.4, 'ta-pop')}><circle cx="102" cy="102" r="44" fill="#2FB36D"/><circle cx="90" cy="88" r="12" fill="#fff" opacity=".35"/></g>
        <g ${tA(1.2, 'ta-in')}><path d="M60 102h84" stroke="#fff" stroke-width="2.4"/><path d="M66 97l-6 5 6 5M138 97l6 5-6 5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="102" y="96" text-anchor="middle" class="tat b w">d</text></g>
        <g ${tA(2, 'ta-pop')}><path d="M46 102h12M146 102h12" stroke="#E8453C" stroke-width="4" stroke-linecap="round"/><text x="52" y="128" text-anchor="middle" class="tat s" fill="#C0332B">tol</text><text x="152" y="128" text-anchor="middle" class="tat s" fill="#C0332B">tol</text></g>
        <g ${tA(2.8, 'ta-in')}><rect x="188" y="52" width="122" height="62" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="249" y="76" text-anchor="middle" class="tat s">${L('forat', 'agujero')} =</text><text x="249" y="100" text-anchor="middle" class="tat b" fill="#5B3FD6">d + 2 × tol</text></g>
        <g ${tA(3.6, 'ta-in')}><text x="249" y="138" text-anchor="middle" class="tat s">8 + 2 × 0,3</text><text x="249" y="158" text-anchor="middle" class="tat b">= 8,6 mm</text></g>
        <g ${tA(4, 'ta-fade')}><text x="102" y="192" text-anchor="middle" class="tat s" fill="#6B7487">${L('(dibuix exagerat)', '(dibujo exagerado)')}</text></g>`);
    },
    // tres ajustos: a pressió, lliscant i lliure (la de la dreta gira)
    p72fits() {
      const pair = (cx, r, t) => `<g ${tA(t, 'ta-pop')}><circle cx="${cx}" cy="86" r="40" fill="#7C5CFF"/><circle cx="${cx}" cy="86" r="31" fill="#E4DCFF"/><circle cx="${cx}" cy="86" r="${r}" fill="#2FB36D"/></g>`;
      return tSvg(200, `<style>.p72rot{transform-box:fill-box;transform-origin:50% 50%;animation:p72rot 3s linear infinite}@keyframes p72rot{to{transform:rotate(360deg)}}.p72sl{animation:p72sl 1.4s ease-in-out infinite}@keyframes p72sl{50%{transform:translateY(5px)}}</style>${BG}
        ${pair(58, 30.4, .2)}${pair(160, 27.5, .7)}${pair(262, 23.5, 1.2)}
        <g ${tA(.5, 'ta-in')}><rect x="48" y="78" width="20" height="16" rx="3" fill="#fff"/><path d="M52 78v-5a6 6 0 0 1 12 0v5" fill="none" stroke="#fff" stroke-width="3"/></g>
        <g class="p72sl"><path d="M160 70v32M152 78l8-8 8 8M152 94l8 8 8-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g class="p72rot"><circle cx="262" cy="86" r="23.5" fill="none"/><path d="M262 66v40" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="262" cy="86" r="5" fill="#fff"/></g>
        <g ${tA(1.8, 'ta-in')}><text x="58" y="148" text-anchor="middle" class="tat s">${L('a pressió', 'a presión')}</text><text x="58" y="168" text-anchor="middle" class="tat b" fill="#5B3FD6">~0,1 mm</text></g>
        <g ${tA(2.2, 'ta-in')}><text x="160" y="148" text-anchor="middle" class="tat s">${L('llisca', 'desliza')}</text><text x="160" y="168" text-anchor="middle" class="tat b" fill="#5B3FD6">0,2–0,3 mm</text></g>
        <g ${tA(2.6, 'ta-in')}><text x="262" y="148" text-anchor="middle" class="tat s">${L('gira lliure', 'gira libre')}</text><text x="262" y="168" text-anchor="middle" class="tat b" fill="#5B3FD6">~0,4 mm</text></g>
        <g ${tA(3.2, 'ta-fade')}><text x="160" y="192" text-anchor="middle" class="tat s" fill="#6B7487">${L('tolerància a cada costat · valors orientatius', 'tolerancia a cada lado · valores orientativos')}</text></g>`);
    },
    // capa a capa: vertical, a 45° (cada capa es recolza) i a 70° (les capes cauen)
    p73layers() {
      const lay = (x, y, t, col, rot = 0) => `<g ${tA(t, 'ta-pop')}><rect x="${x}" y="${y}" width="40" height="11" rx="5.5" fill="${col}" ${rot ? `transform="rotate(${rot} ${x} ${y + 5})"` : ''}/></g>`;
      let a = '', b = '', c = '';
      for (let k = 0; k < 7; k++) { const y = 150 - k * 13; a += lay(30, y, .2 + k * .3, '#7C5CFF'); b += lay(122 + k * 11, y, .2 + k * .3, '#2FB36D'); }
      for (let k = 0; k < 5; k++) { const y = 150 - k * 13; c += lay(214 + k * 22, y, .2 + k * .3, k < 3 ? '#FF8A3D' : '#E8453C', k < 3 ? 0 : 18 + (k - 3) * 10); }
      return tSvg(200, `${BG}<rect x="16" y="161" width="292" height="8" rx="4" fill="#C9D3EE"/>
        ${a}${b}${c}
        <g ${tA(2.6, 'ta-in')}><text x="50" y="40" text-anchor="middle" class="tat b">0°</text><text x="50" y="186" text-anchor="middle" class="tat s" fill="#1F8A4C">✓ ${L('recolzada', 'apoyada')}</text></g>
        <g ${tA(2.9, 'ta-in')}><text x="178" y="40" text-anchor="middle" class="tat b">45°</text><text x="166" y="186" text-anchor="middle" class="tat s" fill="#1F8A4C">✓ ${L('es recolza', 'se apoya')}</text></g>
        <g ${tA(3.2, 'ta-in')}><text x="282" y="40" text-anchor="middle" class="tat b">70°</text><text x="266" y="186" text-anchor="middle" class="tat s" fill="#C0332B">✗ ${L('cau', 'cae')}</text></g>
        <g ${tA(3.6, 'ta-pop')}><path d="M296 96q8 14 2 30" fill="none" stroke="#E8453C" stroke-width="3" stroke-dasharray="4 4"/></g>`);
    },
    // la regla dels 45°: la paleta gira; en verd s'imprimeix sola, en vermell necessita suport
    p73rule() {
      const R = 120, cx = 36, cy = 172, pt = a => [cx + R * Math.sin(a * Math.PI / 180), cy - R * Math.cos(a * Math.PI / 180)].map(v => v.toFixed(1)).join(' ');
      return tSvg(200, `<style>.p73arm{transform-box:view-box;transform-origin:${cx}px ${cy}px;animation:p73arm 5s ease-in-out infinite}@keyframes p73arm{0%,10%{transform:rotate(5deg)}45%,55%{transform:rotate(40deg)}85%,100%{transform:rotate(78deg)}}</style>${BG}
        <path d="M${cx} ${cy}L${pt(0)}A${R} ${R} 0 0 1 ${pt(45)}Z" fill="#2FB36D" opacity=".22"/><path d="M${cx} ${cy}L${pt(45)}A${R} ${R} 0 0 1 ${pt(90)}Z" fill="#E8453C" opacity=".18"/>
        <path d="M${cx} ${cy}L${pt(45)}" stroke="#14204A" stroke-width="2" stroke-dasharray="5 5"/>
        <g class="p73arm"><path d="M${cx} ${cy}V${cy - R + 6}" stroke="#14204A" stroke-width="7" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="8" fill="#14204A"/></g>
        <text x="${cx + 8}" y="${cy - R - 6}" class="tat s">0°</text><text x="${(+pt(45).split(' ')[0] + 6).toFixed(0)}" y="${(+pt(45).split(' ')[1] - 4).toFixed(0)}" class="tat b">45°</text><text x="${cx + R - 30}" y="${cy - 6}" class="tat s">90°</text>
        <g ${tA(1, 'ta-pop')}><path d="M232 150V108M232 108L208 70M232 108L256 70" stroke="#2FB36D" stroke-width="12" stroke-linecap="round" fill="none"/><text x="276" y="96" class="tat b" fill="#1F8A4C">✓</text></g>
        <g ${tA(2, 'ta-pop')}><path d="M232 52V34M206 34H258" stroke="#E8453C" stroke-width="10" stroke-linecap="round" fill="none" transform="translate(0 0)"/><text x="276" y="42" class="tat b" fill="#C0332B">✗</text></g>
        <g ${tA(2.8, 'ta-in')}><text x="232" y="180" text-anchor="middle" class="tat s">${L('Y sí, T no', 'Y sí, T no')}</text></g>`);
    },
    // la frontissa desmuntable: la peça B baixa sobre el passador d'A i després gira (vista de dalt)
    p74hinge() {
      return tSvg(200, `<style>.p74dn{animation:p74dn 5.2s ease-in-out infinite}@keyframes p74dn{0%,10%{transform:translateY(-26px)}35%,100%{transform:none}}.p74op{transform-box:view-box;transform-origin:252px 118px;animation:p74op 5.2s ease-in-out infinite}@keyframes p74op{0%,40%{transform:none}65%,85%{transform:rotate(-120deg)}100%{transform:none}}</style>${BG}
        <text x="90" y="24" text-anchor="middle" class="tat s">${L('de costat', 'de lado')}</text><text x="252" y="24" text-anchor="middle" class="tat s">${L('des de dalt', 'desde arriba')}</text>
        <ellipse cx="90" cy="176" rx="80" ry="6" fill="#14204A" opacity=".1"/>
        <rect x="22" y="112" width="66" height="60" rx="4" fill="#7C5CFF"/><rect x="88" y="112" width="30" height="60" rx="5" fill="#9C84FF"/><rect x="96" y="88" width="14" height="24" rx="3" fill="#5B3FD6"/>
        <text x="55" y="148" text-anchor="middle" class="tat b w">A</text>
        <g class="p74dn"><rect x="118" y="52" width="58" height="58" rx="4" fill="#FF8A3D"/><rect x="88" y="52" width="30" height="58" rx="5" fill="#FFA766"/><rect x="94" y="82" width="18" height="28" fill="#F1F2FB" opacity=".9"/><text x="147" y="86" text-anchor="middle" class="tat b w">B</text></g>
        <g ${tA(1.6, 'ta-in')}><path d="M128 100h22" stroke="#14204A" stroke-width="2"/><text x="152" y="104" class="tat s">${L('passador', 'pasador')}</text></g>
        <rect x="200" y="113" width="52" height="10" rx="3" fill="#7C5CFF"/>
        <g class="p74op"><rect x="252" y="113" width="52" height="10" rx="3" fill="#FF8A3D"/></g>
        <circle cx="252" cy="118" r="15" fill="#FFA766" stroke="#fff" stroke-width="2"/><circle cx="252" cy="118" r="6" fill="#5B3FD6"/>
        <g ${tA(3.4, 'ta-in')}><text x="252" y="170" text-anchor="middle" class="tat s">${L('B gira al voltant', 'B gira alrededor')}</text><text x="252" y="188" text-anchor="middle" class="tat s">${L('del passador', 'del pasador')}</text></g>`);
    }
  };
})());
