/* Tech Creadors · unitat 7 «Atzar i dificultat» · animacions de teoria (TANI)
   Dibuixos propis de Numi: el dau, la moneda i el barret de l'atzar, el número que canvia a cada volta, la fàbrica de
   clons, la vida d'un clon, la velocitat que creix, la corba de la dificultat i el pla del videojoc. SVG + SMIL i les
   classes ta-* (bucle de 5,5 s). */
Object.assign(TANI, (() => {
  const D = 5.5;
  const C = { mov: '#3D7BF4', art: '#E5489A', loop: '#1FA463', cond: '#F2B21B', vr: '#E0533F', snd: '#14A3B8', ink: '#14204A', sky: '#14204A', gold: '#FFC531' };
  // un personatge de l'escenari (STG_ART) dins l'animació; si no hi és (proves sense dibuixos), un cercle
  const nest = (svg, x, y, w, h) => String(svg || '').replace('<svg ', `<svg x="${x}" y="${y}" width="${w}" height="${h}" style="width:${w}px;height:${h}px;overflow:visible" `);
  const spr = (art, x, y, w, h, c = 0) => typeof STG_ART !== 'undefined' && STG_ART[art] ? nest(STG_ART[art].svg(c), x, y, w, h) : `<circle cx="${x + w / 2}" cy="${y + h / 2}" r="${w / 3}" fill="#8B5CF6"/>`;
  // un bloc de l'editor (text blanc) i una pastilla de valor dins el bloc
  const blk = (x, y, w, txt, col = C.mov, cls = 'tat w s') => `<rect x="${x}" y="${y}" width="${w}" height="28" rx="8" fill="${col}"/><rect x="${x + 6}" y="${y + 6}" width="16" height="16" rx="5" fill="#fff" opacity=".3"/><text x="${x + 29}" y="${y + 19}" class="${cls}">${txt}</text>`;
  const pill = (x, y, w, txt, fill = '#fff', cls = 'tat s') => `<rect x="${x}" y="${y}" width="${w}" height="22" rx="11" fill="${fill}"/><text x="${x + w / 2}" y="${y + 16}" text-anchor="middle" class="${cls}">${txt}</text>`;
  // n elements que es van alternant (un cada tros del bucle): l'element i només es veu al seu torn
  const turn = (i, n, dur = D) => `<animate attributeName="opacity" calcMode="discrete" values="${Array.from({ length: n }, (_, k) => k === i ? 1 : 0).join(';')}" keyTimes="${Array.from({ length: n }, (_, k) => (k / n).toFixed(3)).join(';')}" dur="${dur}s" repeatCount="indefinite"/>`;
  // apareix al segon «a» i desapareix al «b» (dins el bucle de 5,5 s)
  const win = (a, b) => `<animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${(a / D).toFixed(3)};${(b / D).toFixed(3)}" dur="${D}s" repeatCount="indefinite"/>`;
  const star = (x, y, r = 14, fill = C.gold) => { const p = Array.from({ length: 10 }, (_, k) => { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * .45 : r; return `${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)}`; }).join(' ');
    return `<polygon points="${p}" fill="${fill}" stroke="#C9780E" stroke-width="2" stroke-linejoin="round"/>`; };
  const PIPS = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
  return {
    // què és l'atzar: el dau, la moneda i el barret (ningú no sap què sortirà)
    g7dau() {
      const faces = [3, 6, 1, 4, 2, 5], n = faces.length;
      const die = faces.map((f, i) => `<g>${turn(i, n)}${PIPS[f].map(([a, b]) => `<circle cx="${a * 15}" cy="${b * 15}" r="6" fill="${C.ink}"/>`).join('')}</g>`).join('');
      const coin = `<g transform="translate(160 92)"><ellipse rx="30" ry="30" fill="#FFC531" stroke="#B57A0E" stroke-width="3"><animate attributeName="rx" values="30;3;30;3;30" dur="1.2s" repeatCount="indefinite"/></ellipse>
        <g><animate attributeName="opacity" calcMode="discrete" values="1;0;1;0" keyTimes="0;.25;.5;.75" dur="1.2s" repeatCount="indefinite"/><circle r="12" fill="none" stroke="#B57A0E" stroke-width="3"/></g>
        <g opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0;1" keyTimes="0;.25;.5;.75" dur="1.2s" repeatCount="indefinite"/><path d="M-10 -10l20 20M10 -10l-20 20" stroke="#B57A0E" stroke-width="3.5" stroke-linecap="round"/></g></g>`;
      const slips = ['?', '?', '?'].map((q, i) => `<g ${tA(.8 + i * 1.3)}><g transform="translate(${236 + i * 14} ${62 - i * 6}) rotate(${-14 + i * 14})"><rect x="-13" y="-17" width="26" height="30" rx="4" fill="#fff" stroke="#9AA6C8" stroke-width="2"/><text x="0" y="4" text-anchor="middle" class="tat b">${q}</text></g></g>`).join('');
      return tSvg(214, `<rect x="6" y="10" width="308" height="160" rx="18" fill="#F3F0FF" stroke="#D9D2FB" stroke-width="2"/>
        <g transform="translate(66 92)"><g><animateTransform attributeName="transform" type="rotate" values="0;-14;10;-6;0;0" keyTimes="0;.06;.12;.16;.2;1" dur=".9s" repeatCount="indefinite"/>
          <rect x="-32" y="-32" width="64" height="64" rx="13" fill="#fff" stroke="${C.ink}" stroke-width="3"/>${die}</g></g>
        ${coin}
        <g transform="translate(250 112)"><path d="M-34 0h68l-8 40h-52z" fill="#3A2E7A" stroke="${C.ink}" stroke-width="2.5"/><ellipse cx="0" cy="0" rx="40" ry="9" fill="#5B4BD8" stroke="${C.ink}" stroke-width="2.5"/><rect x="-34" y="22" width="68" height="7" fill="#EF5A5A"/></g>${slips}
        <text x="66" y="158" text-anchor="middle" class="tat s">${L('dau', 'dado')}</text><text x="160" y="158" text-anchor="middle" class="tat s">${L('moneda', 'moneda')}</text><text x="250" y="166" text-anchor="middle" class="tat s">${L('barret', 'sombrero')}</text>
        <text x="160" y="200" text-anchor="middle" class="tat b" ${tA(3.6, 'ta-fade')}>${L('Ningú no sap què sortirà!', '¡Nadie sabe qué saldrá!')}</text>`);
    },
    // el valor «atzar 1-10»: dins del bucle, cada volta tria un número nou
    g7num() {
      const nums = [3, 8, 1, 6, 10, 4], n = nums.length;
      return tSvg(214, `<rect x="10" y="20" width="186" height="148" rx="14" fill="${C.loop}"/><text x="24" y="44" class="tat w s">${L('per sempre', 'por siempre')}</text>
        <rect x="24" y="54" width="164" height="98" rx="10" fill="#E9F8EF"/>
        <rect x="32" y="62" width="150" height="54" rx="9" fill="${C.vr}"/><rect x="38" y="68" width="16" height="16" rx="5" fill="#fff" opacity=".3"/><text x="61" y="81" class="tat w s">${L('posa número a', 'pon número a')}</text>
        <g class="ta-steam">${pill(46, 88, 122, L('atzar 1-10', 'azar 1-10'), '#fff', 'tat s')}</g>
        ${blk(32, 122, 150, L('digues número', 'di número'), C.art)}
        <path d="M14 160 Q2 94 14 32" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6" class="ta-dash"/>
        <rect x="206" y="22" width="108" height="42" rx="10" fill="#14204A"/><text x="214" y="48" class="tat w s">${L('número', 'número')}</text>
        ${nums.map((v, i) => `<g>${turn(i, n)}<rect x="276" y="30" width="32" height="26" rx="7" fill="${C.vr}"/><text x="292" y="49" text-anchor="middle" class="tat w b">${v}</text>
          <g transform="translate(262 120)"><rect x="-44" y="-30" width="88" height="54" rx="16" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/><path d="M-12 24l-8 18 22-18z" fill="#fff" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/><rect x="-14" y="21" width="20" height="6" fill="#fff"/><text x="0" y="8" text-anchor="middle" class="tat b" style="font-size:26px">${v}!</text></g></g>`).join('')}
        <text x="160" y="200" text-anchor="middle" class="tat b">${L('Un número nou a cada volta', 'Un número nuevo en cada vuelta')}</text>`);
    },
    // compte: l'atzar abans del bucle es tria una sola vegada; dins del bucle, a cada volta
    g7once() {
      const col = (x, outside, vals, ok) => `<g ${tA(outside ? .2 : 2.5, 'ta-in')}><rect x="${x}" y="8" width="150" height="168" rx="14" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#A8E0C0' : '#F4B7B7'}" stroke-width="2"/>
        <text x="${x + 75}" y="30" text-anchor="middle" class="tat s">${outside ? L('abans del bucle', 'antes del bucle') : L('dins del bucle', 'dentro del bucle')}</text>
        ${outside ? `<rect x="${x + 12}" y="40" width="126" height="24" rx="7" fill="${C.vr}"/><text x="${x + 20}" y="57" class="tat w s">${L('número ← atzar', 'número ← azar')}</text>` : ''}
        <rect x="${x + 12}" y="${outside ? 70 : 40}" width="126" height="${outside ? 40 : 70}" rx="9" fill="${C.loop}"/><text x="${x + 20}" y="${outside ? 87 : 57}" class="tat w s">${L('per sempre', 'por siempre')}</text>
        ${outside ? '' : `<rect x="${x + 16}" y="64" width="118" height="20" rx="6" fill="${C.vr}"/><text x="${x + 21}" y="79" class="tat w s" style="font-size:13px">${L('número ← atzar', 'número ← azar')}</text>`}
        <rect x="${x + 20}" y="${outside ? 92 : 88}" width="110" height="${outside ? 14 : 18}" rx="5" fill="${C.art}"/>
        ${vals.map((v, i) => `<g ${tA((outside ? .7 : 3) + i * .4)}><rect x="${x + 11 + i * 33}" y="122" width="28" height="28" rx="8" fill="#fff" stroke="${ok ? C.loop : '#EF5A5A'}" stroke-width="2.5"/><text x="${x + 25 + i * 33}" y="142" text-anchor="middle" class="tat b">${v}</text></g>`).join('')}
        <text x="${x + 75}" y="168" text-anchor="middle" class="tat s" ${tA(outside ? 2.1 : 4.5, 'ta-fade')}>${ok ? L('canvia cada volta', 'cambia cada vuelta') : L('sempre el mateix', 'siempre el mismo')}</text></g>`;
      return tSvg(214, `${col(6, true, [4, 4, 4, 4], false)}${col(164, false, [7, 2, 9, 5], true)}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(4.7, 'ta-fade')}>${L("L'atzar es tria quan s'arriba al bloc", 'El azar se elige al llegar al bloque')}</text>`);
    },
    // la fàbrica de clons: l'original fa còpies que van cadascuna al seu lloc
    g7clon() {
      const to = [[118, 46], [196, 120], [264, 42], [176, 30], [282, 132]];
      const clones = to.map(([x, y], i) => { const t0 = .5 + i * .7, k0 = (t0 / D).toFixed(3), k1 = ((t0 + .5) / D).toFixed(3);
        return `<g opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k0};.96" dur="${D}s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="translate" values="56 112;56 112;${x} ${y};${x} ${y}" keyTimes="0;${k0};${k1};1" dur="${D}s" repeatCount="indefinite"/>${spr('estrella', -22, -22, 44, 44)}</g>`; }).join('');
      return tSvg(214, `<rect x="4" y="4" width="312" height="170" rx="16" fill="${C.sky}"/>${[[30, 20], [150, 160], [300, 90], [90, 150], [240, 16]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff" opacity=".7"/>`).join('')}
        ${clones}<g transform="translate(56 112)">${spr('estrella', -26, -26, 52, 52)}</g>
        <rect x="14" y="146" width="84" height="22" rx="11" fill="#fff"/><text x="56" y="162" text-anchor="middle" class="tat s">${L('original', 'original')}</text>
        <g ${tA(3.4, 'ta-fade')}><rect x="200" y="150" width="104" height="22" rx="11" fill="${C.gold}"/><text x="252" y="166" text-anchor="middle" class="tat s">${L('5 clons', '5 clones')}</text></g>
        <g transform="translate(40 180)">${blk(0, 0, 240, L('crea un clon de mi', 'crea un clon de mí'), C.loop)}</g>`);
    },
    // la vida d'un clon: neix amagat, es col·loca, es mostra, baixa i s'esborra
    g7vida() {
      const lines = [[L('quan començo com a clon', 'al empezar como clon'), C.loop, 0, 1], [L("ves a un lloc a l'atzar", 've a un sitio al azar'), C.mov, 1, 1.8], [L("mostra't", 'muéstrate'), C.art, 1.8, 2.3], [L('baixa fins a baix', 'baja hasta abajo'), C.loop, 2.3, 4.2], [L('esborra aquest clon', 'borra este clon'), C.loop, 4.2, 5.3]];
      const k = t => (t / D).toFixed(3);
      return tSvg(214, `<rect x="6" y="8" width="84" height="196" rx="14" fill="${C.sky}"/>
        <g transform="translate(48 40)" opacity=".55"><circle r="22" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5 4"/><text x="0" y="40" text-anchor="middle" class="tat w s">${L('fàbrica', 'fábrica')}</text></g>
        <g><animateTransform attributeName="transform" type="translate" values="48 40;48 40;30 40;30 40;30 176;30 176" keyTimes="0;${k(1)};${k(1.5)};${k(2.3)};${k(4.2)};1" dur="${D}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k(1.8)};${k(4.4)}" dur="${D}s" repeatCount="indefinite"/>${spr('meteorit', -20, -20, 40, 40)}</g>
        <g transform="translate(30 176)" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k(4.3)};${k(5)}" dur="${D}s" repeatCount="indefinite"/>${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(9 * Math.cos(a)).toFixed(1)} ${(9 * Math.sin(a)).toFixed(1)}L${(20 * Math.cos(a)).toFixed(1)} ${(20 * Math.sin(a)).toFixed(1)}" stroke="${C.gold}" stroke-width="3.5" stroke-linecap="round"/>`; }).join('')}</g>
        ${lines.map(([t, c, a, b], i) => `<g transform="translate(98 ${14 + i * 38})"><rect x="-4" y="-4" width="222" height="36" rx="11" fill="${C.gold}" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${k(a)};${k(b)}" dur="${D}s" repeatCount="indefinite"/></rect>${blk(0, 0, 216, t, c)}</g>`).join('')}`);
    },
    // la velocitat que creix: cada volta, la caiguda és més ràpida
    g7vel() {
      const cols = [[3, 2.6], [5, 1.6], [7, 1.1]];
      return tSvg(214, cols.map(([v, d], i) => { const x = 10 + i * 104;
        return `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${x}" y="8" width="96" height="150" rx="14" fill="${C.sky}"/><path d="M${x + 6} 150h84" stroke="#3A2E7A" stroke-width="6" stroke-linecap="round"/>
          <g><animateTransform attributeName="transform" type="translate" values="${x + 48} 30;${x + 48} 136" dur="${d}s" repeatCount="indefinite"/>${spr('meteorit', -16, -16, 32, 32)}</g>
          <path d="M${x + 86} 40v${18 + v * 7}" stroke="${C.gold}" stroke-width="5" stroke-linecap="round"/><path d="M${x + 80} ${50 + v * 7}l6 8 6 -8" fill="none" stroke="${C.gold}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="${x + 48}" y="178" text-anchor="middle" class="tat s">${L('volta', 'vuelta')} ${i + 1}</text>
          <rect x="${x + 6}" y="186" width="84" height="24" rx="12" fill="${C.vr}"/><text x="${x + 48}" y="203" text-anchor="middle" class="tat w s">${L('velocitat', 'velocidad')} ${v}</text></g>`; }).join(''));
    },
    // ni massa fàcil ni massa difícil: la dificultat puja a poc a poc dins la zona bona
    g7corba() {
      const face = (x, y, mood, col) => `<g transform="translate(${x} ${y})"><circle r="13" fill="${col}"/><circle cx="-4.5" cy="-3" r="2" fill="${C.ink}"/><circle cx="4.5" cy="-3" r="2" fill="${C.ink}"/>${mood === 'ok' ? '<path d="M-6 4q6 6 12 0" stroke="#14204A" stroke-width="2.4" fill="none" stroke-linecap="round"/>' : mood === 'bad' ? '<path d="M-6 7q6 -6 12 0" stroke="#14204A" stroke-width="2.4" fill="none" stroke-linecap="round"/>' : '<path d="M-6 5h12" stroke="#14204A" stroke-width="2.4" stroke-linecap="round"/>'}</g>`;
      return tSvg(214, `<rect x="40" y="10" width="270" height="50" fill="#FDEBEB"/><rect x="40" y="60" width="270" height="62" fill="#E7F7EE"/><rect x="40" y="122" width="270" height="50" fill="#E8F0FF"/>
        <text x="300" y="30" text-anchor="end" class="tat s">${L('massa difícil', 'demasiado difícil')}</text><text x="300" y="114" text-anchor="end" class="tat s">${L('repte just', 'reto justo')}</text><text x="300" y="164" text-anchor="end" class="tat s">${L('massa fàcil', 'demasiado fácil')}</text>
        ${face(58, 26, 'bad', '#F4B7B7')}${face(58, 92, 'ok', '#A8E0C0')}${face(58, 144, 'meh', '#C9D6FB')}
        <path d="M40 10v162h270" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
        <text x="175" y="194" text-anchor="middle" class="tat s">${L('temps', 'tiempo') } →</text><text x="16" y="96" text-anchor="middle" class="tat s" transform="rotate(-90 16 96)">${L('dificultat', 'dificultad')} →</text>
        <path d="M80 150 L130 20" stroke="#EF5A5A" stroke-width="3" stroke-dasharray="6 5" opacity=".6"/><path d="M80 152 L300 146" stroke="#3D7BF4" stroke-width="3" stroke-dasharray="6 5" opacity=".6"/>
        <path id="g7cv" d="M80 150 C 120 120, 150 110, 190 96 S 270 72, 300 66" fill="none" stroke="${C.loop}" stroke-width="5" stroke-linecap="round" pathLength="1" class="ta ta-draw" style="--t:.4s"/>
        <circle r="8" fill="${C.gold}" stroke="${C.ink}" stroke-width="2"><animateMotion dur="${D}s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.1;.75;1" calcMode="linear" path="M80 150 C 120 120, 150 110, 190 96 S 270 72, 300 66"/></circle>`);
    },
    // el pla del videojoc: sis peces, una darrere l'altra
    g7pla() {
      const it = [[L('La nau ← →', 'La nave ← →'), C.mov], [L('Els clons', 'Los clones'), C.loop], [L('Xocs i vides', 'Choques y vidas'), C.vr], [L('Els punts', 'Los puntos'), C.vr], [L('Més velocitat', 'Más velocidad'), '#8B5CF6'], [L('Fi de partida', 'Fin de partida'), C.ink]];
      return tSvg(214, `${it.map(([t, c], i) => tCard(6 + (i % 2) * 158, 8 + Math.floor(i / 2) * 58, 150, 48, i + 1, t, .3 + i * .55, c)).join('')}
        <g ${tA(3.8, 'ta-fade')}><rect x="14" y="186" width="292" height="24" rx="12" fill="${C.gold}"/><text x="160" y="203" text-anchor="middle" class="tat s">${L('Fes una peça, prova-la… i la següent!', 'Haz una pieza, pruébala… ¡y la siguiente!')}</text></g>`);
    }
  };
})());
