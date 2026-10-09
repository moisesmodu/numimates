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
