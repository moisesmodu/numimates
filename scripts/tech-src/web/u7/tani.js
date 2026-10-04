/* Tech Web · unitat 7 «Per al mòbil» · animacions de teoria (TANI)
   Dibuixos propis de Numi: la mateixa web a l'ordinador i al mòbil, l'etiqueta viewport, la finestra que s'encongeix
   i activa el @media, les amplades fixes que surten de la pantalla, el :hover amb i sense transició, els botons per al
   dit, com es llegeix una adreça (el domini de veritat) i què vol dir el candau. SVG + SMIL i les classes ta-*
   (bucle de 5,5 s). */
Object.assign(TANI, (() => {
  const D = 5.5;
  const C = { blue: '#2F6BFF', dark: '#1A3FB0', ink: '#14204A', line: '#DCE4FA', soft: '#E8F1FF', yel: '#FFC531', red: '#EF5A5A', green: '#1FA463', pink: '#E5489A', teal: '#14A3B8', cream: '#FFF4D6' };
  const MONO = 'font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px';
  const CW = 7.83; // amplada d'un caràcter de 13 px en lletra monoespaiada
  // aparatells: la pantalla és el rectangle (x, y, w, h)
  const laptop = (x, y, w, h) => `<rect x="${x - 7}" y="${y - 7}" width="${w + 14}" height="${h + 14}" rx="9" fill="#2A3352"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#fff"/><path d="M${x - 20} ${y + h + 9}h${w + 40}l-9 9h-${w + 22}z" fill="#B9C3DE"/><rect x="${x + w / 2 - 14}" y="${y + h + 9}" width="28" height="3" rx="1.5" fill="#97A3C4"/>`;
  const phone = (x, y, w, h) => `<rect x="${x - 6}" y="${y - 14}" width="${w + 12}" height="${h + 28}" rx="13" fill="#2A3352"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#fff"/><rect x="${x + w / 2 - 9}" y="${y - 9}" width="18" height="4" rx="2" fill="#56607E"/><circle cx="${x + w / 2}" cy="${y + h + 7}" r="3.5" fill="#56607E"/>`;
  // una targeta d'una web en miniatura (foto + dues ratlles de text)
  const card = (x, y, w, h, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${C.cream}" stroke="#F0DFAE" stroke-width="1.2"/><rect x="${x + 4}" y="${y + 4}" width="${w - 8}" height="${h * .45}" rx="3" fill="${col}"/><rect x="${x + 4}" y="${y + h * .62}" width="${(w - 8) * .8}" height="${Math.max(3, h * .1)}" rx="2" fill="#C9B48A"/><rect x="${x + 4}" y="${y + h * .8}" width="${(w - 8) * .55}" height="${Math.max(3, h * .08)}" rx="2" fill="#E2CFA0"/>`;
  const ok = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="13" fill="${C.green}"/><path d="M${x - 6} ${y}l4 4.5l8 -9" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const ko = (x, y, t) => `<g ${tA(t)}><circle cx="${x}" cy="${y}" r="13" fill="${C.red}"/><path d="M${x - 5} ${y - 5}l10 10M${x + 5} ${y - 5}l-10 10" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>`;
  const chip = (x, y, w, txt, t, fill = '#fff', stroke = C.line, col = C.ink) => `<g ${tA(t)}><rect x="${x}" y="${y}" width="${w}" height="26" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" class="tat s" style="${MONO};fill:${col}">${txt}</text></g>`;
  const lock = (x, y, s = 1, col = C.green) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-4.5 -2v-3.5a4.5 4.5 0 0 1 9 0v3.5" stroke="${col}" stroke-width="2.4" fill="none"/><rect x="-7" y="-2.5" width="14" height="11" rx="2.5" fill="${col}"/><circle cy="2.5" r="1.6" fill="#fff"/></g>`;
  const cursor = (extra = '') => `<g ${extra}><path d="M0 0L0 19L5 14.5L9 23L12.5 21.5L8.5 13H15.5Z" fill="#fff" stroke="${C.ink}" stroke-width="1.8" stroke-linejoin="round"/></g>`;
  const anim = (attr, values, keyTimes, mode = 'linear') => `<animate attributeName="${attr}" values="${values}" keyTimes="${keyTimes}" calcMode="${mode}" dur="${D}s" repeatCount="indefinite"/>`;
  return {
    // la mateixa web a l'ordinador (tres targetes en fila) i al mòbil (una sota l'altra)
    w7resp() {
      const cols = [C.yel, C.pink, C.teal];
      const lx = 18, ly = 40, lw = 166, lh = 100, cw = (lw - 16 - 12) / 3;
      const big = cols.map((c, i) => `<g ${tA(.3 + i * .25)}>${card(lx + 8 + i * (cw + 6), ly + 32, cw, 58, c)}</g>`).join('');
      const px = 232, py = 34, pw = 64, ph = 120;
      const small = cols.map((c, i) => `<g ${tA(1.7 + i * .25)}>${card(px + 5, py + 22 + i * 32, pw - 10, 28, c)}</g>`).join('');
      return tSvg(206, `<text x="160" y="20" text-anchor="middle" class="tat b">${L('La mateixa web, dues pantalles', 'La misma web, dos pantallas')}</text>
        ${laptop(lx, ly, lw, lh)}<rect x="${lx + 8}" y="${ly + 8}" width="${lw - 16}" height="16" rx="4" fill="${C.blue}"/><rect x="${lx + 14}" y="${ly + 13}" width="44" height="6" rx="3" fill="#fff" opacity=".85"/>${big}
        <g ${tA(1.2, 'ta-fade')}><path d="M198 92h22" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 5" class="ta-dash"/><path d="M219 85l9 7l-9 7" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${phone(px, py, pw, ph)}<rect x="${px + 5}" y="${py + 6}" width="${pw - 10}" height="12" rx="3" fill="${C.blue}"/>${small}
        <text x="${lx + lw / 2}" y="188" text-anchor="middle" class="tat s">${L('Ordinador: en fila', 'Ordenador: en fila')}</text>
        <text x="312" y="196" text-anchor="end" class="tat s">${L('Mòbil: en columna', 'Móvil: en columna')}</text>`);
    },
    // sense viewport, el mòbil ho fa tot petitíssim; amb viewport, fa servir la seva amplada de veritat
    w7view() {
      const px1 = 52, px2 = 196, py = 40, pw = 76, ph = 122;
      const tiny = `<rect x="${px1 + 4}" y="${py + 6}" width="${pw - 8}" height="6" rx="2" fill="${C.blue}"/>${[0, 1, 2].map(i => card(px1 + 4 + i * 23, py + 16, 20, 18, [C.yel, C.pink, C.teal][i])).join('')}${[0, 1, 2, 3, 4].map(i => `<rect x="${px1 + 4}" y="${py + 40 + i * 5}" width="${pw - 8 - (i % 2) * 14}" height="2" rx="1" fill="#C3CBE0"/>`).join('')}`;
      const big = `<rect x="${px2 + 5}" y="${py + 6}" width="${pw - 10}" height="16" rx="4" fill="${C.blue}"/><rect x="${px2 + 10}" y="${py + 11}" width="36" height="6" rx="3" fill="#fff" opacity=".85"/>${card(px2 + 5, py + 28, pw - 10, 50, C.yel)}${[0, 1, 2].map(i => `<rect x="${px2 + 6}" y="${py + 86 + i * 11}" width="${pw - 12 - (i % 2) * 18}" height="6" rx="3" fill="#9AA6C6"/>`).join('')}`;
      return tSvg(214, `<text x="${px1 + pw / 2}" y="18" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Sense viewport', 'Sin viewport')}</text>
        <text x="${px2 + pw / 2}" y="18" text-anchor="middle" class="tat s" style="fill:#147A47">${L('Amb viewport', 'Con viewport')}</text>
        <g ${tA(.2, 'ta-fade')}>${phone(px1, py, pw, ph)}${tiny}</g>
        <g ${tA(.9)}><circle cx="${px1 + 52}" cy="${py + 98}" r="14" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="M${px1 + 62} ${py + 108}l10 10" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><text x="${px1 + 52}" y="${py + 103}" text-anchor="middle" class="tat s">?</text></g>
        ${ko(px1 + pw + 10, py + 2, 1.3)}
        <g ${tA(1.9, 'ta-in')}>${phone(px2, py, pw, ph)}${big}</g>
        ${ok(px2 + pw + 10, py + 2, 2.6)}
        ${chip(18, 184, 284, '&lt;meta name="viewport" …&gt;', 3.2, '#FFF8E1', C.yel)}`);
    },
    // la finestra s'encongeix: quan passa per sota de 600 px, s'activa el @media i les targetes es posen en columna
    w7media() {
      const X = 30, Y = 46, Ws = [280, 280, 110, 110, 280], KT = '0;.2;.45;.8;1', SW = '0;.362;.871';
      const v = f => Ws.map(f).map(n => +n.toFixed(2)).join(';');
      const deskCards = [0, 1, 2].map(i => `<rect y="${Y + 46}" height="60" rx="6" fill="${[C.yel, C.pink, C.teal][i]}">${anim('x', v(W => X + 10 + i * ((W - 40) / 3 + 10)), KT)}${anim('width', v(W => (W - 40) / 3), KT)}</rect>`).join('');
      const mobCards = [0, 1, 2].map(i => `<rect x="${X + 10}" y="${Y + 46 + i * 28}" height="22" rx="5" fill="${[C.yel, C.pink, C.teal][i]}">${anim('width', v(W => W - 20), KT)}</rect>`).join('');
      return tSvg(236, `<line x1="${X + 170}" y1="${Y - 10}" x2="${X + 170}" y2="${Y + 150}" stroke="${C.red}" stroke-width="2.5" stroke-dasharray="6 5"/>
        <text x="${X + 170}" y="${Y - 16}" text-anchor="middle" class="tat s" style="fill:#C0392B">600 px</text>
        <rect x="${X}" y="${Y}" height="140" rx="10" fill="#fff" stroke="#B9C3DE" stroke-width="2.5">${anim('width', v(W => W), KT)}</rect>
        <rect x="${X}" y="${Y}" height="18" rx="9" fill="${C.soft}">${anim('width', v(W => W), KT)}</rect>
        <rect x="${X + 10}" y="${Y + 26}" height="12" rx="4" fill="${C.blue}">${anim('width', v(W => W - 20), KT)}</rect>
        <g>${deskCards}${anim('opacity', '1;0;1', SW, 'discrete')}</g>
        <g opacity="0">${mobCards}${anim('opacity', '0;1;0', SW, 'discrete')}</g>
        <rect x="18" y="200" width="284" height="28" rx="9" stroke-width="2.5">${anim('fill', '#FFFFFF;#FFF3C4;#FFFFFF', SW, 'discrete')}${anim('stroke', `${C.line};${C.yel};${C.line}`, SW, 'discrete')}</rect>
        <text x="160" y="219" text-anchor="middle" class="tat s" style="${MONO}">@media (max-width: 600px)</text>
        <g opacity="0">${anim('opacity', '0;1;0', SW, 'discrete')}<circle cx="296" cy="200" r="11" fill="${C.green}"/><path d="M291 200l3.5 3.5l6 -7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`);
    },
    // una caixa amb amplada fixa surt del mòbil; amb max-width: 100% s'atura a la vora
    w7flex() {
      const py = 40, pw = 82, ph = 112, p1 = 44, p2 = 196;
      const grow = (x, to, kt) => `<rect x="${x}" y="${py + 30}" height="44" rx="6" width="20">${anim('width', `20;${to};${to}`, kt)}</rect>`;
      return tSvg(214, `${phone(p1, py, pw, ph)}${phone(p2, py, pw, ph)}
        <rect x="${p1 + 6}" y="${py + 8}" width="${pw - 12}" height="12" rx="3" fill="${C.blue}"/><rect x="${p2 + 6}" y="${py + 8}" width="${pw - 12}" height="12" rx="3" fill="${C.blue}"/>
        <g fill="${C.red}" opacity=".9">${grow(p1 + 6, 132, '0;.4;1')}</g>
        <path d="M${p1 + pw + 6} ${py + 52}h${132 - pw}" stroke="#fff" stroke-width="2" stroke-dasharray="4 4" opacity=".9"/>
        <g ${tA(2.3)}><rect x="${p1 + 4}" y="${py + ph - 12}" width="${pw - 8}" height="7" rx="3.5" fill="#E3E8F6"/><rect x="${p1 + 4}" y="${py + ph - 12}" width="30" height="7" rx="3.5" fill="#97A3C4"/></g>
        <g fill="${C.green}">${grow(p2 + 6, pw - 12, '0;.175;1')}</g>
        ${[0, 1].map(i => `<rect x="${p2 + 6}" y="${py + 84 + i * 10}" width="${pw - 12 - i * 22}" height="5" rx="2.5" fill="#C3CBE0"/><rect x="${p1 + 6}" y="${py + 84 + i * 10}" width="${pw - 12 - i * 22}" height="5" rx="2.5" fill="#C3CBE0"/>`).join('')}
        ${ko(p1 + pw / 2, 22, 2.5)}${ok(p2 + pw / 2, 22, 1.4)}
        ${chip(12, 182, 140, 'width: 700px;', .4, '#FDEBEB', C.red, '#C0392B')}
        ${chip(166, 182, 146, 'max-width: 100%;', .4, '#E7F7EE', C.green, '#147A47')}`);
    },
    // :hover sense transició (canvi de cop) i amb transition (canvi suau)
    w7hover() {
      const KT = '0;.1;.3;.7;.9;1', XS = '124 0;124 0;270 0;270 0;124 0;124 0';
      const btn = (y, fillAnim) => `<rect x="150" y="${y}" width="150" height="42" rx="11" fill="${C.blue}">${fillAnim}</rect><text x="225" y="${y + 27}" text-anchor="middle" class="tat w">${L('Festes', 'Fiestas')}</text>`;
      const cur = y => `<g transform="translate(0 ${y})"><g>${`<animateTransform attributeName="transform" type="translate" values="${XS}" keyTimes="${KT}" dur="${D}s" repeatCount="indefinite"/>`}${cursor()}</g></g>`;
      return tSvg(232, `<text x="16" y="30" class="tat s">${L('Sense transició', 'Sin transición')}</text><text x="16" y="48" class="tat s" style="fill:#5A6585">${L('(de cop)', '(de golpe)')}</text>
        ${btn(18, anim('fill', `${C.blue};${C.green};${C.blue}`, '0;.136;.864', 'discrete'))}
        <text x="16" y="112" class="tat s">${L('Amb transition', 'Con transition')}</text><text x="16" y="130" class="tat s" style="fill:#5A6585">${L('(a poc a poc)', '(poco a poco)')}</text>
        ${btn(100, anim('fill', `${C.blue};${C.blue};${C.green};${C.green};${C.blue};${C.blue}`, '0;.136;.191;.864;.919;1'))}
        ${cur(32)}${cur(114)}
        ${chip(18, 168, 284, '.boto:hover { background: green; }', .3)}
        ${chip(42, 198, 236, 'transition: background 0.3s;', 1.2, '#FFF8E1', C.yel)}`);
    },
    // al mòbil toquem amb el dit: botons petits i enganxats → toques el que no vols; grans i separats → encertes
    w7tap() {
      const py = 44, pw = 82, ph = 112, p1 = 44, p2 = 196;
      const tapY = `<animateTransform attributeName="transform" type="translate" values="0 -22;0 -22;0 0;0 0;0 -22" keyTimes="0;.3;.42;.62;1" dur="${D}s" repeatCount="indefinite"/>`;
      const finger = (x, y) => `<g transform="translate(${x} ${y})"><g>${tapY}<path d="M-11 36 Q-12 8 -9 -4 Q0 -14 9 -4 Q12 8 11 36Z" fill="#F4C7A1" stroke="#C98A5E" stroke-width="2"/><ellipse cx="0" cy="-2" rx="6" ry="5" fill="#FBE3D0"/></g></g>`;
      const smallBtns = [0, 1, 2].map(i => `<rect x="${p1 + 14 + i * 19}" y="${py + 54}" width="16" height="11" rx="3" fill="${C.blue}">${i < 2 ? anim('fill', `${C.blue};${C.blue};${C.red};${C.red};${C.blue}`, '0;.4;.42;.7;1', 'discrete') : ''}</rect>`).join('');
      const bigBtns = [0, 1, 2].map(i => `<rect x="${p2 + 7}" y="${py + 18 + i * 30}" width="${pw - 14}" height="22" rx="7" fill="${C.blue}">${i === 1 ? anim('fill', `${C.blue};${C.blue};${C.green};${C.green};${C.blue}`, '0;.4;.42;.7;1', 'discrete') : ''}</rect><rect x="${p2 + 18}" y="${py + 27 + i * 30}" width="30" height="5" rx="2.5" fill="#fff" opacity=".85"/>`).join('');
      return tSvg(214, `${phone(p1, py, pw, ph)}${phone(p2, py, pw, ph)}${smallBtns}${bigBtns}
        ${finger(p1 + 32, py + 62)}${finger(p2 + pw / 2, py + 52)}
        <text x="${p1 + pw / 2}" y="20" text-anchor="middle" class="tat s" style="fill:#C0392B">${L('Petits i enganxats', 'Pequeños y pegados')}</text>
        <text x="${p2 + pw / 2}" y="20" text-anchor="middle" class="tat s" style="fill:#147A47">${L('Grans i separats', 'Grandes y separados')}</text>
        ${ko(p1 + pw + 12, py + 4, 2.4)}${ok(p2 + pw + 12, py + 4, 2.4)}
        <text x="160" y="206" text-anchor="middle" class="tat s">${L('Un dit és més gruixut que un ratolí!', '¡Un dedo es más gordo que un ratón!')}</text>`);
    },
    // com es llegeix una adreça: el domini acaba a la primera barra i l'amo és el final del domini
    w7url() {
      const bar = (y, x0, parts, t) => { let x = x0; const out = parts.map(([s, st]) => { const w = s.length * CW, r = { s, st, x, w }; x += w; return r; });
        return { x1: x, parts: out, svg: `<g ${tA(t, 'ta-in')}><rect x="12" y="${y}" width="296" height="34" rx="17" fill="#fff" stroke="#B9C3DE" stroke-width="2"/>${lock(30, y + 16, 1)}<text x="${x0}" y="${y + 22}" class="tat s" style="${MONO}">${out.map(p => `<tspan style="${p.st || ''}">${p.s}</tspan>`).join('')}</text></g>` }; };
      const a = bar(30, 44, [['fotonuvi.numi', 'fill:#147A47;font-weight:900'], ['/album', 'fill:#5A6585']], .2);
      const b = bar(116, 44, [['fotonuvi.numi.', 'fill:#5A6585'], ['regals.xyz', 'fill:#C0392B;font-weight:900'], ['/album', 'fill:#5A6585']], 1.9);
      const hl = (p, y, col, t) => `<rect x="${p.x - 2}" y="${y + 5}" width="${p.w + 4}" height="24" rx="6" fill="${col}" ${tA(t)}/>`;
      const slashB = b.parts[2].x;
      return tSvg(214, `${hl(a.parts[0], 30, '#DDF5E7', .9)}${hl(b.parts[1], 116, '#FDE2E2', 2.8)}${a.svg}${b.svg}
        <g ${tA(1.2, 'ta-in')}><text x="16" y="88" class="tat s" style="fill:#147A47">✓ ${L("L'amo: fotonuvi.numi", 'El dueño: fotonuvi.numi')}</text></g>
        <g ${tA(2.3)}><path d="M${slashB + 4} 176v-22" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/><path d="M${slashB - 1} 159l5 -7l5 7" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g ${tA(2.3, 'ta-in')}><text x="${slashB - 6}" y="192" text-anchor="end" class="tat s">${L('el domini acaba a la primera /', 'el dominio acaba en la primera /')}</text></g>
        <g ${tA(3.2, 'ta-in')}><text x="16" y="174" class="tat s" style="fill:#C0392B">✗ ${L("L'amo: regals.xyz!", 'El dueño: ¡regals.xyz!')}</text></g>`);
    },
    // el candau: el missatge viatja xifrat i ningú no el pot llegir pel camí (però no diu si la web és bona)
    w7lock() {
      const lane = (y, safe, t) => {
        const env = `<g><animateTransform attributeName="transform" type="translate" values="58 ${y - 10};58 ${y - 10};238 ${y - 10};238 ${y - 10}" keyTimes="0;.15;.6;1" dur="${D}s" repeatCount="indefinite"/>
          <rect x="0" y="0" width="30" height="21" rx="3" fill="#fff" stroke="${C.ink}" stroke-width="2"/><path d="M0 1l15 11l15 -11" fill="none" stroke="${C.ink}" stroke-width="2"/>${safe ? lock(26, 18, .9, C.green) : ''}</g>`;
        const eye = `<g transform="translate(160 ${y - 34})"><ellipse rx="14" ry="8" fill="#fff" stroke="${C.ink}" stroke-width="2"/><circle r="4.5" fill="${C.ink}"/></g>`;
        const read = `<g opacity="0">${anim('opacity', '0;0;1;1;0', '0;.3;.36;.62;1', 'discrete')}<rect x="178" y="${y - 46}" width="66" height="24" rx="8" fill="${safe ? '#E7F7EE' : '#FDEBEB'}" stroke="${safe ? C.green : C.red}" stroke-width="2"/><text x="211" y="${y - 29}" text-anchor="middle" class="tat s" style="${MONO};fill:${safe ? '#147A47' : '#C0392B'}">${safe ? '#q7&amp;k' : '1234'}</text></g>`;
        return `<g ${tA(t, 'ta-fade')}><path d="M50 ${y}H270" stroke="${safe ? C.green : '#B9C3DE'}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${safe ? '0' : '8 6'}" opacity=".55"/>
          <rect x="14" y="${y - 16}" width="36" height="26" rx="4" fill="#2A3352"/><rect x="18" y="${y - 12}" width="28" height="18" rx="2" fill="${C.soft}"/><path d="M10 ${y + 12}h44l-4 4h-36z" fill="#B9C3DE"/>
          <rect x="272" y="${y - 22}" width="34" height="40" rx="5" fill="#56607E"/>${[0, 1, 2].map(k => `<rect x="277" y="${y - 17 + k * 12}" width="24" height="7" rx="2" fill="#97A3C4"/><circle cx="297" cy="${y - 13.5 + k * 12}" r="1.6" fill="${C.green}"/>`).join('')}
          ${eye}${read}${env}</g>`; };
      return tSvg(222, `<text x="14" y="22" class="tat s" style="${MONO};fill:#C0392B">http://</text>
        ${lane(70, false, .1)}
        <text x="14" y="122" class="tat s" style="${MONO};fill:#147A47">https://</text>${lock(92, 117, 1)}
        ${lane(170, true, .1)}
        <g ${tA(3.6, 'ta-in')}><rect x="14" y="192" width="292" height="26" rx="9" fill="#FFF8E1" stroke="${C.yel}" stroke-width="2"/><text x="160" y="210" text-anchor="middle" class="tat s">${L('Camí xifrat ≠ web de confiança', 'Camino cifrado ≠ web de confianza')}</text></g>`);
    }
  };
})());
