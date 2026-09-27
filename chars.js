/* ===== Personatges de Mates amb Numi (SVG dibuixats a mà) ===== */
const INK = '#2B1A38';

function eyes(x1, x2, y, mood, col = INK) {
  const arc = x => `<path d="M${x - 5.5} ${y + 2} Q${x} ${y - 6} ${x + 5.5} ${y + 2}" stroke="${col}" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
  if (mood === 'happy') return arc(x1) + arc(x2);
  const dot = x => `<g class="eye"><ellipse cx="${x}" cy="${y}" rx="5.2" ry="6" fill="${col}"/><circle cx="${x + 1.8}" cy="${y - 2.2}" r="1.8" fill="#fff"/></g>`;
  let s = dot(x1) + dot(x2);
  if (mood === 'sad') s += `<path d="M${x1 - 6} ${y - 8} L${x1 + 4} ${y - 12}" stroke="${col}" stroke-width="3" stroke-linecap="round"/><path d="M${x2 + 6} ${y - 8} L${x2 - 4} ${y - 12}" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`;
  if (mood === 'think') s += `<path d="M${x2 - 6} ${y - 10} Q${x2} ${y - 15} ${x2 + 6} ${y - 11}" stroke="${col}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  return s;
}
function mouth(x, y, mood, col = INK) {
  if (mood === 'happy') return `<path d="M${x - 9} ${y - 1} Q${x} ${y + 13} ${x + 9} ${y - 1} Z" fill="${col}"/><ellipse cx="${x}" cy="${y + 4.2}" rx="4" ry="2.2" fill="#FF7A8A"/>`;
  if (mood === 'sad') return `<path d="M${x - 6} ${y + 5} Q${x} ${y - 1} ${x + 6} ${y + 5}" stroke="${col}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
  if (mood === 'think') return `<ellipse cx="${x + 2}" cy="${y + 3}" rx="3.2" ry="3.8" fill="${col}"/>`;
  return `<path d="M${x - 7} ${y + 1} Q${x} ${y + 8} ${x + 7} ${y + 1}" stroke="${col}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
}
const blush = (x1, x2, y, c = '#FF7AA8', o = .45) => `<ellipse cx="${x1}" cy="${y}" rx="5.5" ry="3.2" fill="${c}" opacity="${o}"/><ellipse cx="${x2}" cy="${y}" rx="5.5" ry="3.2" fill="${c}" opacity="${o}"/>`;
const star = (cx, cy, r, fill) => {
  let d = '';
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r;
    d += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1);
  }
  return `<path d="${d}Z" fill="${fill}"/>`;
};

const CH = {
  numi: {
    name: 'Numi', price: 0,
    desc: 'Un robot que ho compta tot. És el guia del camí.',
    hello: 'Som-hi! Pas a pas, arribarem molt lluny.',
    a: { hx: 60, hy: 21, ey: 45, eg: 11, ny: 77 },
    draw: m => `
      <line x1="60" y1="22" x2="60" y2="9" stroke="#4A2060" stroke-width="3.5" stroke-linecap="round"/>
      <circle class="glow" cx="60" cy="8" r="5.5" fill="#FFC93C"/>
      <rect x="27" y="80" width="12" height="20" rx="6" fill="#7B3FA0"/><rect x="81" y="80" width="12" height="20" rx="6" fill="#7B3FA0"/>
      <rect x="36" y="74" width="48" height="36" rx="14" fill="#602B7A"/>
      <circle cx="60" cy="92" r="8" fill="#FFC93C"/><path d="M55.5 92h9M60 87.5v9" stroke="#602B7A" stroke-width="2.6" stroke-linecap="round"/>
      <rect x="14" y="38" width="12" height="20" rx="5" fill="#4A2060"/><rect x="94" y="38" width="12" height="20" rx="5" fill="#4A2060"/>
      <rect x="22" y="20" width="76" height="58" rx="20" fill="#8A4FB0"/>
      <rect x="31" y="29" width="58" height="40" rx="13" fill="#2B1A38"/>
      ${blush(40, 80, 55, '#FF7AA8', .55)}
      ${eyes(49, 71, 45, m, '#5FF0D0')}${mouth(60, 56, m, '#5FF0D0')}`
  },
  guida: {
    name: 'Guida', price: 60,
    desc: 'Una guineu molt espavilada. La reina de la lògica.',
    hello: 'Amb una mica de lògica, tot té solució!',
    a: { hx: 60, hy: 27, ey: 50, eg: 14, ny: 84 },
    draw: m => `
      <path d="M84 102 Q116 96 106 66 Q100 86 80 88Z" fill="#FF8A3C"/><path d="M106 66 Q110 78 103 85 Q99 76 106 66Z" fill="#FFF3E6"/>
      <ellipse cx="60" cy="99" rx="24" ry="17" fill="#FF8A3C"/><ellipse cx="60" cy="102" rx="13" ry="12" fill="#FFF3E6"/>
      <path d="M28 44 L34 9 L56 30Z" fill="#FF8A3C"/><path d="M34 36 L37 18 L48 30Z" fill="#7A3A1A" opacity=".75"/>
      <path d="M92 44 L86 9 L64 30Z" fill="#FF8A3C"/><path d="M86 36 L83 18 L72 30Z" fill="#7A3A1A" opacity=".75"/>
      <ellipse cx="60" cy="54" rx="36" ry="29" fill="#FF8A3C"/>
      <path d="M25 57 Q38 85 60 85 Q82 85 95 57 Q78 67 60 61 Q42 67 25 57Z" fill="#FFF3E6"/>
      ${eyes(46, 74, 50, m)}
      <ellipse cx="60" cy="63" rx="5" ry="3.8" fill="${INK}"/>
      ${blush(38, 82, 64)}${mouth(60, 69, m)}`
  },
  vuit: {
    name: 'Vuit', price: 100,
    desc: 'Un pop amb vuit braços per multiplicar més de pressa.',
    hello: 'Vuit braços, vuit vegades més ràpid!',
    a: { hx: 60, hy: 17, ey: 52, eg: 13, ny: 84 },
    draw: m => {
      let t = '';
      for (let i = 0; i < 8; i++) {
        const x = 25 + i * 10, w = i % 2 ? 7 : -7;
        t += `<path class="tent" d="M${x} 70 C${x - w} 84 ${x + w} 96 ${x} 110" stroke="#FF6FA3" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      }
      return `${t}
      <ellipse cx="60" cy="50" rx="38" ry="34" fill="#FF7AA8"/>
      <circle cx="40" cy="31" r="5" fill="#FFA5C6"/><circle cx="79" cy="27" r="4" fill="#FFA5C6"/><circle cx="88" cy="46" r="3" fill="#FFA5C6"/>
      ${eyes(47, 73, 52, m)}${blush(37, 83, 63, '#E0407E', .4)}${mouth(60, 65, m)}`;
    }
  },
  tuga: {
    name: 'Tuga', price: 150,
    desc: 'Una tortuga pacient que ho mesura tot.',
    hello: 'Pas a pas s\'arriba lluny.',
    a: { hx: 60, hy: 16, ey: 40, eg: 10, ny: 66 },
    draw: m => `
      <ellipse cx="30" cy="104" rx="11" ry="7" fill="#8FD18A"/><ellipse cx="90" cy="104" rx="11" ry="7" fill="#8FD18A"/>
      <path d="M14 102 Q16 58 60 56 Q104 58 106 102Z" fill="#3FAE6A"/>
      <path d="M44 74 L60 66 L76 74 L76 90 L60 98 L44 90Z" fill="#58C37E" stroke="#2E8A52" stroke-width="2.5"/>
      <path d="M44 74 L28 70 M76 74 L92 70 M44 90 L26 98 M76 90 L94 98 M60 66 L60 57" stroke="#2E8A52" stroke-width="2.5"/>
      <rect x="10" y="97" width="100" height="10" rx="5" fill="#2E8A52"/>
      <circle cx="60" cy="42" r="26" fill="#A6E3A1"/>
      ${eyes(50, 70, 40, m)}${blush(42, 78, 50)}${mouth(60, 51, m)}`
  },
  flama: {
    name: 'Flama', price: 250,
    desc: 'Un drac petit que s\'encén amb les ratxes.',
    hello: 'Encenem aquesta ratxa!',
    a: { hx: 60, hy: 24, ey: 48, eg: 14, ny: 82 },
    draw: m => `
      <path d="M32 72 Q6 54 10 30 Q22 44 36 50Z" fill="#FFB0A8"/><path d="M88 72 Q114 54 110 30 Q98 44 84 50Z" fill="#FFB0A8"/>
      <ellipse cx="60" cy="97" rx="26" ry="18" fill="#FF5A5F"/><ellipse cx="60" cy="100" rx="15" ry="12" fill="#FFD9A8"/>
      <path d="M40 32 L35 12 L51 27Z" fill="#FFC93C"/><path d="M80 32 L85 12 L69 27Z" fill="#FFC93C"/>
      <ellipse cx="60" cy="53" rx="34" ry="28" fill="#FF5A5F"/>
      <path d="M53 27 L60 17 L67 27Z" fill="#D93F46"/>
      <ellipse cx="60" cy="66" rx="17" ry="10" fill="#FF8286"/>
      <circle cx="54" cy="63" r="1.8" fill="${INK}"/><circle cx="66" cy="63" r="1.8" fill="${INK}"/>
      ${eyes(46, 74, 48, m)}${mouth(60, 69, m)}`
  }
};

const ACC = {
  llacet: {
    slot: 'neck', name: 'Llacet', price: 30,
    draw: a => `<path d="M${a.hx} ${a.ny} L${a.hx - 15} ${a.ny - 8} L${a.hx - 15} ${a.ny + 8}Z" fill="#FF5A5F"/><path d="M${a.hx} ${a.ny} L${a.hx + 15} ${a.ny - 8} L${a.hx + 15} ${a.ny + 8}Z" fill="#FF5A5F"/><circle cx="${a.hx}" cy="${a.ny}" r="4.5" fill="#D63C42"/>`
  },
  gorra: {
    slot: 'head', name: 'Gorra', price: 40,
    draw: a => `<path d="M${a.hx - 27} ${a.hy + 9} Q${a.hx - 26} ${a.hy - 20} ${a.hx} ${a.hy - 21} Q${a.hx + 26} ${a.hy - 20} ${a.hx + 27} ${a.hy + 9}Z" fill="#36A9E1"/><path d="M${a.hx + 6} ${a.hy + 9} Q${a.hx + 40} ${a.hy + 3} ${a.hx + 44} ${a.hy + 11} L${a.hx + 6} ${a.hy + 13}Z" fill="#1E7FB0"/><circle cx="${a.hx}" cy="${a.hy - 20}" r="3.5" fill="#1E7FB0"/><path d="M${a.hx - 10} ${a.hy - 6} h20" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>`
  },
  ulleres: {
    slot: 'eyes', name: 'Ulleres', price: 50,
    draw: a => {
      const r = Math.max(8, a.eg * .75);
      return `<circle cx="${a.hx - a.eg}" cy="${a.ey}" r="${r}" fill="rgba(180,230,255,.28)" stroke="${INK}" stroke-width="3"/><circle cx="${a.hx + a.eg}" cy="${a.ey}" r="${r}" fill="rgba(180,230,255,.28)" stroke="${INK}" stroke-width="3"/><path d="M${a.hx - a.eg + r} ${a.ey - 1} Q${a.hx} ${a.ey - 6} ${a.hx + a.eg - r} ${a.ey - 1}" stroke="${INK}" stroke-width="3" fill="none"/>`;
    }
  },
  barret: {
    slot: 'head', name: 'Barret de mag', price: 120,
    draw: a => `<path d="M${a.hx - 20} ${a.hy + 4} L${a.hx + 8} ${a.hy - 40} L${a.hx + 22} ${a.hy + 4}Z" fill="#3A2A8C"/><ellipse cx="${a.hx}" cy="${a.hy + 5}" rx="31" ry="7" fill="#2A1D6B"/>${star(a.hx + 2, a.hy - 12, 6, '#FFC93C')}${star(a.hx + 9, a.hy - 27, 3.5, '#FFC93C')}`
  },
  corona: {
    slot: 'head', name: 'Corona', price: 200,
    draw: a => `<path d="M${a.hx - 22} ${a.hy + 7} L${a.hx - 25} ${a.hy - 15} L${a.hx - 11} ${a.hy - 4} L${a.hx} ${a.hy - 20} L${a.hx + 11} ${a.hy - 4} L${a.hx + 25} ${a.hy - 15} L${a.hx + 22} ${a.hy + 7}Z" fill="#FFC93C" stroke="#E0A300" stroke-width="2.5" stroke-linejoin="round"/><circle cx="${a.hx}" cy="${a.hy - 2}" r="3.5" fill="#FF5A5F"/><circle cx="${a.hx - 13}" cy="${a.hy + 1}" r="2.6" fill="#36A9E1"/><circle cx="${a.hx + 13}" cy="${a.hy + 1}" r="2.6" fill="#3CC46A"/>`
  }
};

function charSVG(id, mood = 'idle', acc, cls = '') {
  const c = CH[id] || CH.numi;
  let s = `<svg class="char m-${mood} ${cls}" viewBox="0 0 120 120" aria-hidden="true"><g class="cb">${c.draw(mood)}`;
  if (acc) ['neck', 'eyes', 'head'].forEach(sl => { const k = acc[sl]; if (k && ACC[k]) s += ACC[k].draw(c.a); });
  return s + '</g></svg>';
}
