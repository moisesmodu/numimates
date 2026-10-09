/* Tech 3D · Nivell 1 · unitat 5 «Forats» · animacions de teoria (TANI)
   Dibuixos propis de Numi: perspectiva isomètrica i talls de costat (seccions), SVG + CSS (.ta) + SMIL, en bucle de 5,5 s.
   Claus: m5forat, m5tipus, m5clauer, m5relleu, m5paret, m5tapa, m5mirall, m5tinta. */
Object.assign(TANI, (() => {
  const D = 5.5;
  // perspectiva isomètrica: (x, y, z) en mm → punt del dibuix
  const iso = (cx, cy, k) => (x, y, z) => [cx + (x - y) * 0.866 * k, cy + (x + y) * 0.5 * k - z * k];
  const pts = (f, list) => list.map(p => f(...p).map(v => v.toFixed(1)).join(',')).join(' ');
  // caixa: tres cares visibles (dalt, cara x màx. i cara y màx.) amb tres tons
  const box = (f, x0, y0, z0, w, d, h, c) => `<polygon points="${pts(f, [[x0 + w, y0, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0 + w, y0, z0 + h]])}" fill="${c[1]}"/><polygon points="${pts(f, [[x0, y0 + d, z0], [x0 + w, y0 + d, z0], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]])}" fill="${c[2]}"/><polygon points="${pts(f, [[x0, y0, z0 + h], [x0 + w, y0, z0 + h], [x0 + w, y0 + d, z0 + h], [x0, y0 + d, z0 + h]])}" fill="${c[0]}"/>`;
  // cilindre vertical (centre x, y; base z0, alçada h, radi r)
  const cyl = (f, x, y, z0, h, r, k, c, extra = '') => { const [X, Yb] = f(x, y, z0), Yt = f(x, y, z0 + h)[1], rx = 1.2247 * r * k, ry = 0.7071 * r * k;
    return `<path d="M${(X - rx).toFixed(1)} ${Yt.toFixed(1)}V${Yb.toFixed(1)}A${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 0 ${(X + rx).toFixed(1)} ${Yb.toFixed(1)}V${Yt.toFixed(1)}Z" fill="${c[1]}" ${extra}/><ellipse cx="${X.toFixed(1)}" cy="${Yt.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${c[0]}" ${extra}/>`; };
  // un forat vist des de dalt: el·lipse fosca amb la paret del fons il·luminada
  const pit = (f, x, y, z, r, k, deep = '#2B2160', wall = '#5B3FD6') => { const [X, Y] = f(x, y, z), rx = 1.2247 * r * k, ry = 0.7071 * r * k;
    return `<ellipse cx="${X.toFixed(1)}" cy="${Y.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${deep}"/><path d="M${(X - rx).toFixed(1)} ${Y.toFixed(1)}A${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 1 ${(X + rx).toFixed(1)} ${Y.toFixed(1)}A${rx.toFixed(1)} ${(ry * 0.45).toFixed(1)} 0 0 0 ${(X - rx).toFixed(1)} ${Y.toFixed(1)}Z" fill="${wall}"/>`; };
  const LILA = ['#B9A7FF', '#7C5CFF', '#5B3FD6'], GROC = ['#FFE58A', '#F7C531', '#D9A514'], TEAL = ['#8EE3EE', '#14A3B8', '#0E7F90'], BLAU = ['#A9C4FF', '#3D7BF4', '#2A5BC4'], ROSA = ['#FFB3D8', '#EC5FA8', '#C8448A'];
  const GRIS = ['#DCE2F0', '#B8C1D6'];
  const bg = h => `<rect width="320" height="${h}" rx="20" fill="#F1F2FB"/>`;
  const defs = id => `<defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#D5DCEC"/><rect width="2.6" height="6" fill="#A9B4CF"/></pattern></defs>`;
  const pill = (x, y, w, txt, t, col = '#fff', tc = '') => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="${y}" width="${w}" height="26" rx="13" fill="${col}" filter="url(#bwSh)"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s ${tc}">${txt}</text></g>`;
  // moviment SMIL en bucle: de (dx, dy) a (0, 0) entre t0 i t1 (segons)
  const slide = (dx, dy, t0, t1) => `<animateTransform attributeName="transform" type="translate" values="${dx} ${dy};${dx} ${dy};0 0;0 0" keyTimes="0;${(t0 / D).toFixed(3)};${(t1 / D).toFixed(3)};1" dur="${D}s" repeatCount="indefinite"/>`;
  const show = (t0, t1 = D - 0.35) => `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${(t0 / D).toFixed(3)};${((t0 + 0.25) / D).toFixed(3)};${(t1 / D).toFixed(3)};${(Math.min(t1 + 0.2, D - 0.05) / D).toFixed(3)};1" dur="${D}s" repeatCount="indefinite"/>`;
  const dim = (x1, y1, x2, y2, col = '#14204A') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="1.6"/><path d="M${x1} ${y1 - 4}v8M${x2} ${y2 - 4}v8" stroke="${col}" stroke-width="1.6"/>`;
  return {
    // sòlid + forat = resultat (un cub amb un forat rodó que el travessa)
    m5forat() {
      const k = 1.25, A = iso(78, 112, k), B = iso(246, 112, k);
      const hole = `<g opacity=".9">${cyl(A, 0, 0, -6, 44, 10, k, ['url(#m5hf)', 'url(#m5hf)'], 'stroke="#7F8AA8" stroke-width="1.4" stroke-dasharray="4 3"')}</g>`;
      return tSvg(200, `${defs('m5hf')}${bg(200)}
        <ellipse cx="78" cy="150" rx="58" ry="14" fill="#14204A" opacity=".1"/><ellipse cx="246" cy="150" rx="58" ry="14" fill="#14204A" opacity=".1"/>
        <g ${tA(0.1, 'ta-fade')}>${box(A, -22, -22, 0, 44, 44, 26, LILA)}</g>
        <g ${tA(0.5, 'ta-fade')}><g>${slide(0, -60, 0.6, 1.8)}${hole}</g></g>
        <g ${tA(2.2, 'ta-pop')}><path d="M150 96h22m-8 -8l8 8l-8 8" stroke="#14204A" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.6, 'ta-pop')}>${box(B, -22, -22, 0, 44, 44, 26, LILA)}${pit(B, 0, 0, 26, 10, k)}</g>
        ${pill(16, 164, 124, L('sòlid + forat', 'sólido + agujero'), 0.3)}${pill(196, 164, 100, L('resultat', 'resultado'), 2.9, '#7C5CFF', 'w')}
        <g ${tA(1.4, 'ta-in')}><rect x="14" y="12" width="98" height="24" rx="12" fill="#fff" filter="url(#bwSh)"/><rect x="24" y="18" width="12" height="12" rx="3" fill="url(#m5hf)" stroke="#7F8AA8" stroke-dasharray="3 2"/><text x="42" y="29" class="tat s">${L('forat', 'agujero')}</text></g>`);
    },
    // tres maneres de fer servir un forat (talls de costat): passant, clot i buit per dins
    m5tipus() {
      const card = (x, t, lab, sub, body) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="30" width="96" height="150" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${body}<text x="${x + 48}" y="150" text-anchor="middle" class="tat s">${lab}</text><text x="${x + 48}" y="168" text-anchor="middle" class="tat s" style="font-size:11.5px;fill:#5A678C">${sub}</text></g>`;
      const sol = '#7C5CFF', hs = 'fill="url(#m5ht)" stroke="#7F8AA8" stroke-width="1.4" stroke-dasharray="4 3" opacity=".85"';
      const c1 = `<rect x="22" y="78" width="72" height="26" rx="3" fill="${sol}"/><rect x="50" y="78" width="16" height="26" fill="#fff"/><g>${slide(0, -40, 0.5, 1.4)}<rect x="50" y="62" width="16" height="58" rx="2" ${hs}/></g>`;
      const c2 = `<rect x="126" y="78" width="72" height="26" rx="3" fill="${sol}"/><rect x="148" y="78" width="28" height="10" fill="#fff"/><g>${slide(0, -40, 1.2, 2.1)}<rect x="148" y="62" width="28" height="26" rx="2" ${hs}/></g>`;
      const c3 = `<rect x="230" y="64" width="72" height="52" rx="3" fill="${sol}"/><rect x="242" y="76" width="48" height="28" fill="#fff"/><g opacity="0">${show(2.4)}<rect x="242" y="76" width="48" height="28" rx="2" ${hs}/></g>`;
      return tSvg(196, `${defs('m5ht')}${bg(196)}<text x="160" y="20" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('Vist per dins, tallat pel mig', 'Visto por dentro, cortado por el medio')}</text>
        ${card(12, 0.2, L('passant', 'pasante'), L('de banda a banda', 'de lado a lado'), c1)}${card(116, 0.9, L('clot', 'hoyo'), L('només una mica', 'solo un poco'), c2)}${card(220, 1.8, L('buit per dins', 'hueco por dentro'), L('no es veu per fora', 'no se ve por fuera'), c3)}`);
    },
    // les parts d'un clauer: gruix, forat de l'anella amb vora i un dibuix gravat
    m5clauer() {
      const ring = `<g opacity="0">${show(2.6)}<circle cx="50" cy="84" r="28" fill="none" stroke="#8C96AE" stroke-width="5.5"/><circle cx="50" cy="84" r="28" fill="none" stroke="#E4E8F2" stroke-width="1.8"/></g>`;
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-fade')}><rect x="40" y="56" width="168" height="96" rx="22" fill="#3D7BF4"/><rect x="40" y="56" width="168" height="96" rx="22" fill="none" stroke="#2A5BC4" stroke-width="3"/></g>
        <g ${tA(0.7, 'ta-pop')}><circle cx="72" cy="104" r="11" fill="#F1F2FB" stroke="#2A5BC4" stroke-width="2"/></g>
        ${ring}
        <g ${tA(1.3, 'ta-in')}><path d="M42 98v12M61 98v12M42 104h19" stroke="#FFD54A" stroke-width="2.2"/></g>
        <g ${tA(1.9, 'ta-pop')}><path d="M120 76h52v14h-19v42h-14v-42h-19z" fill="#163C99"/><path d="M122.5 78.5h47v9h-19v42h-9v-42h-19z" fill="#2B5FD0"/></g>
        <g ${tA(1.9, 'ta-in')}><rect x="222" y="22" width="88" height="160" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="266" y="42" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('de costat', 'de lado')}</text>
          <rect x="234" y="92" width="64" height="20" fill="#3D7BF4"/><rect x="258" y="92" width="18" height="5" fill="#fff"/><path d="M300 92h8M300 112h8M304 92v20" stroke="#14204A" stroke-width="1.6"/>
          <text x="266" y="134" text-anchor="middle" class="tat s">${L('gruix 4 mm', 'grosor 4 mm')}</text><text x="266" y="152" text-anchor="middle" class="tat s">${L('gravat 1 mm', 'grabado 1 mm')}</text><path d="M267 88l0 -10" stroke="#E5484D" stroke-width="2"/><circle cx="267" cy="76" r="3" fill="#E5484D"/></g>
        ${pill(14, 166, 108, L('vora 3 mm', 'borde 3 mm'), 1.4, '#FFD54A')}${pill(128, 166, 84, L('gravat', 'grabado'), 2.2)}
        <g ${tA(0.4, 'ta-in')}><text x="124" y="40" text-anchor="middle" class="tat b">${L('Un clauer fort', 'Un llavero fuerte')}</text></g>`);
    },
    // gravat (forat poc profund) i relleu (peça sòlida a sobre), vist de costat
    m5relleu() {
      const hs = 'fill="url(#m5hr)" stroke="#7F8AA8" stroke-width="1.4" stroke-dasharray="4 3" opacity=".85"';
      const panel = (x, t, title, body, note) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="14" width="146" height="168" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="${x + 73}" y="40" text-anchor="middle" class="tat b">${title}</text>${body}<text x="${x + 73}" y="166" text-anchor="middle" class="tat s" style="fill:#5A678C">${note}</text></g>`;
      const left = `<rect x="22" y="96" width="122" height="34" rx="3" fill="#F7C531"/><rect x="62" y="96" width="42" height="9" fill="#fff"/><g>${slide(0, -34, 0.6, 1.5)}<rect x="62" y="78" width="42" height="27" rx="2" ${hs}/></g>
        <g opacity="0">${show(1.7)}<path d="M112 96v9" stroke="#E5484D" stroke-width="2"/><text x="118" y="104" class="tat s" style="fill:#E5484D;font-size:12px">1 mm</text></g>`;
      const right = `<rect x="174" y="96" width="122" height="34" rx="3" fill="#2FB36D"/><g>${slide(0, -36, 2.2, 3.0)}<rect x="214" y="86" width="42" height="10" rx="2" fill="#F3F3EE" stroke="#9AA3B5" stroke-width="1.4"/></g>
        <g opacity="0">${show(3.2)}<path d="M264 86v10" stroke="#E5484D" stroke-width="2"/><text x="270" y="94" class="tat s" style="fill:#E5484D;font-size:12px">1 mm</text></g>`;
      return tSvg(196, `${defs('m5hr')}${bg(196)}${panel(8, 0.2, L('Gravat', 'Grabado'), left, L('queda enfonsat', 'queda hundido'))}${panel(166, 1.8, L('Relleu', 'Relieve'), right, L('sobresurt', 'sobresale'))}`);
    },
    // el gruix de la paret d'una tassa: (40 − 36) ÷ 2 = 2 mm, i el fons de 2 mm
    m5paret() {
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-fade')}><circle cx="82" cy="100" r="62" fill="#14A3B8"/><circle cx="82" cy="100" r="62" fill="none" stroke="#0E7F90" stroke-width="2"/></g>
        <g ${tA(0.6, 'ta-pop')}><circle cx="82" cy="100" r="55.8" fill="#E9F8FA" stroke="#0E7F90" stroke-width="1.5"/></g>
        <g ${tA(1.0, 'ta-in')}>${dim(20, 100, 144, 100, '#14204A')}<rect x="58" y="74" width="48" height="20" rx="10" fill="#fff"/><text x="82" y="89" text-anchor="middle" class="tat s">Ø 40</text></g>
        <g ${tA(1.6, 'ta-in')}>${dim(26.2, 128, 137.8, 128, '#0E7F90')}<rect x="58" y="134" width="48" height="20" rx="10" fill="#fff"/><text x="82" y="149" text-anchor="middle" class="tat s" style="fill:#0E7F90">Ø 36</text></g>
        <g ${tA(2.3, 'ta-pop')}><circle cx="22" cy="40" r="15" fill="#fff" stroke="#E5484D" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="45" text-anchor="middle" class="tat s" style="fill:#E5484D;font-size:12px">2</text><path d="M27 54l-3 40" stroke="#E5484D" stroke-width="1.6" stroke-dasharray="3 2"/></g>
        <g ${tA(2.6, 'ta-in')}><rect x="166" y="16" width="144" height="128" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="238" y="36" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('tallada pel mig', 'cortada por el medio')}</text>
          <path d="M190 50h9v68h78v-68h9v80h-96z" fill="#14A3B8"/><text x="238" y="92" text-anchor="middle" class="tat s" style="fill:#0E7F90">${L('buit', 'hueco')}</text>
          <path d="M190 58h9" stroke="#E5484D" stroke-width="2"/><text x="182" y="62" text-anchor="end" class="tat s" style="font-size:11px;fill:#E5484D">2</text><path d="M296 118v12" stroke="#E5484D" stroke-width="2"/><text x="300" y="128" class="tat s" style="font-size:11px;fill:#E5484D">2</text><text x="238" y="112" text-anchor="middle" class="tat s" style="font-size:11px;fill:#5A678C">${L('fons de 2 mm', 'fondo de 2 mm')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="160" y="156" width="152" height="32" rx="16" fill="#14A3B8" filter="url(#bwSh)"/><text x="236" y="177" text-anchor="middle" class="tat w s">(40 − 36) ÷ 2 = 2 mm</text></g>`);
    },
    // la tapa: un tap de la mateixa mida no entra; amb 0,5 mm de marge per costat, sí
    m5tapa() {
      const boxS = `<path d="M40 92h12v76h136v-76h12v88h-160z" fill="#F5893A"/>`;
      const lid = (w, col) => `<rect x="${120 - w / 2}" y="44" width="${w}" height="34" rx="2" fill="${col}"/><rect x="34" y="34" width="172" height="12" rx="3" fill="${col}"/>`;
      const bad = `<g opacity="0">${show(0.2, 2.6)}<g>${slide(0, -40, 0.4, 1.4)}<g transform="translate(0 14)">${lid(146, '#FFB561')}</g></g><g opacity="0">${show(1.5, 2.6)}<circle cx="232" cy="64" r="16" fill="#E5484D"/><path d="M225 57l14 14M239 57l-14 14" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><text x="232" y="98" text-anchor="middle" class="tat s" style="fill:#E5484D">${L('no entra', 'no entra')}</text></g></g>`;
      const good = `<g opacity="0">${show(2.8)}<g>${slide(0, -50, 2.9, 3.9)}<g transform="translate(0 50)">${lid(126, '#FFC27A')}</g></g><g opacity="0">${show(4.0)}<circle cx="232" cy="64" r="16" fill="#2FB36D"/><path d="M224 64l6 6l10 -12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M54 110h4M182 110h4" stroke="#E5484D" stroke-width="3"/><text x="244" y="100" text-anchor="middle" class="tat s" style="fill:#2FB36D">0,5 mm</text><text x="244" y="116" text-anchor="middle" class="tat s" style="fill:#2FB36D">${L('per costat', 'por lado')}</text></g></g>`;
      return tSvg(196, `${bg(196)}<text x="20" y="22" class="tat s" style="fill:#5A678C">${L('Capsa i tapa, tallades pel mig', 'Caja y tapa, cortadas por el medio')}</text>${boxS}${bad}${good}`);
    },
    // el segell emmirallat: la F girada del segell surt bé al paper
    m5mirall() {
      const F = (x, y, s, col, flip) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><path d="M-12 -18h24v7h-17v8h13v7h-13v14h-7z" fill="${col}"/></g>`;
      return tSvg(206, `${bg(206)}
        <g ${tA(0.1, 'ta-in')}><rect x="14" y="30" width="110" height="120" rx="16" fill="#3D7BF4" filter="url(#bwSh)"/>${F(69, 92, 2.1, '#F3F3EE', true)}<text x="69" y="172" text-anchor="middle" class="tat s">${L('cara del segell', 'cara del sello')}</text></g>
        <g ${tA(0.8, 'ta-fade')}><line x1="160" y1="20" x2="160" y2="160" stroke="#9AA3B5" stroke-width="2.5" stroke-dasharray="6 5"/><text x="160" y="188" text-anchor="middle" class="tat s" style="fill:#5A678C">${L('mirall', 'espejo')}</text></g>
        <g ${tA(1.0, 'ta-in')}><path d="M138 92h44m-8 -8l8 8l-8 8" stroke="#14204A" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="160" y="80" text-anchor="middle" class="tat s">${L('prem', 'aprieta')}</text></g>
        <g ${tA(2.0, 'ta-pop')}><rect x="196" y="30" width="110" height="120" rx="6" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/>${F(251, 92, 2.1, '#1B2B6B', false)}<text x="251" y="172" text-anchor="middle" class="tat s">${L('paper', 'papel')}</text></g>
        <g ${tA(3.0, 'ta-pop')}><circle cx="296" cy="36" r="14" fill="#2FB36D"/><path d="M289 36l5 5l9 -10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // relleu (el dibuix agafa la tinta) i gravat (la tinta va a la resta i el dibuix queda en blanc)
    m5tinta() {
      const heart = (x, y, s, col) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 6C-6 0 -12 -3 -12 -8C-12 -12 -9 -14 -6 -14C-3 -14 -1 -12 0 -10C1 -12 3 -14 6 -14C9 -14 12 -12 12 -8C12 -3 6 0 0 6Z" fill="${col}"/>`;
      const row = (y, t, title, sec, paper) => `<g ${tA(t, 'ta-in')}><rect x="8" y="${y}" width="304" height="86" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><text x="22" y="${y + 22}" class="tat s">${title}</text>${sec}
          <path d="M178 ${y + 50}h30m-7 -7l7 7l-7 7" stroke="#14204A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${paper}</g>`;
      const s1 = `<rect x="26" y="62" width="130" height="18" rx="2" fill="#3D7BF4"/><rect x="64" y="52" width="54" height="10" rx="2" fill="#3D7BF4"/><g opacity="0">${show(1.0)}<rect x="64" y="49" width="54" height="4" rx="2" fill="#E5489A"/></g>`;
      const p1 = `<rect x="222" y="44" width="76" height="44" rx="4" fill="#FBFBFE" stroke="#DCE4FA"/><g opacity="0">${show(1.6)}${heart(260, 70, 1.3, '#E5489A')}</g>`;
      const s2 = `<rect x="26" y="150" width="130" height="18" rx="2" fill="#3D7BF4"/><rect x="64" y="150" width="54" height="7" fill="#fff"/><g opacity="0">${show(3.0)}<rect x="26" y="146" width="38" height="4" rx="2" fill="#E5489A"/><rect x="118" y="146" width="38" height="4" rx="2" fill="#E5489A"/></g>`;
      const p2 = `<rect x="222" y="134" width="76" height="44" rx="4" fill="#FBFBFE" stroke="#DCE4FA"/><g opacity="0">${show(3.6)}<rect x="226" y="138" width="68" height="36" rx="3" fill="#E5489A"/>${heart(260, 160, 1.3, '#fff')}</g>`;
      return tSvg(204, `${bg(204)}${row(14, 0.2, L('Relleu: el dibuix agafa la tinta', 'Relieve: el dibujo coge la tinta'), s1, p1)}${row(104, 2.2, L('Gravat: el dibuix queda en blanc', 'Grabado: el dibujo queda en blanco'), s2, p2)}`);
    }
  };
})());
