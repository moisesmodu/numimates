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
