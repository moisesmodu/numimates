import { C, shadowEl } from '../base.mjs';
// Símbols i números: fitxes de fusta en un faristol (com les d'un joc de taula) i dues fitxes soltes a la taula
const F1 = '#F1DDB6', F0 = '#E2C695', F2 = '#C9A46A', F3 = '#A9834C';
const FONT = `font-family="Montserrat, 'Avenir Next', 'Helvetica Neue', Arial, sans-serif" font-weight="800"`;

// símbol centrat a (0,0), mida ~ 70
function sym(kind, col) {
  const hi = 'rgba(255,255,255,.55)';
  switch (kind) {
    case 'plus': return `<path d="M-12 -38 h24 v26 h26 v24 h-26 v26 h-24 v-26 h-26 v-24 h26z" fill="${col}"/><path d="M12 -38 v26 M38 -12" stroke="${hi}" stroke-width="3" fill="none"/>`;
    case 'circle': return `<circle r="36" fill="none" stroke="${col}" stroke-width="15"/>`;
    case 'dot': return `<circle r="34" fill="${col}"/><path d="M8 -26 a26 26 0 0 1 18 18" stroke="${hi}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    case 'square': return `<rect x="-32" y="-32" width="64" height="64" rx="6" fill="none" stroke="${col}" stroke-width="15"/>`;
    case 'tri': return `<path d="M0 -40 L40 32 H-40Z" fill="${col}" stroke="${col}" stroke-width="6" stroke-linejoin="round"/><path d="M6 -26 L28 14" stroke="${hi}" stroke-width="4" stroke-linecap="round"/>`;
    default: return `<text x="0" y="30" text-anchor="middle" font-size="92" ${FONT} fill="${col}">${kind}</text>`;
  }
}

// fitxa dreta (cara frontal) amb cantell superior i lateral
function tile(x, y, w, h, kind, col, rot = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${rot})">
    <rect x="${-w / 2 - 12}" y="${-h / 2 - 12}" width="${w}" height="${h}" rx="16" fill="${F3}"/>
    <rect x="${-w / 2 - 6}" y="${-h / 2 - 12}" width="${w}" height="${h}" rx="16" fill="${F2}"/>
    <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="16" fill="${F0}"/>
    <path d="M${w / 2 - 16} ${-h / 2} a16 16 0 0 1 16 16 V${h / 2 - 16} a16 16 0 0 1 -16 16 H${w * 0.05}Z" fill="${F1}" opacity=".75"/>
    <rect x="${-w / 2 + 10}" y="${-h / 2 + 8}" width="${w - 20}" height="8" rx="4" fill="#fff" opacity=".35"/>
    <g transform="translate(0 -14) scale(1.3)">${sym(kind, col)}</g>
  </g>`;
}

// fitxa estirada a la taula (vista en perspectiva)
function flat(x, y, kind, col, rot) {
  return `<g transform="translate(${x} ${y})">
    ${shadowEl(-14, 30, 92, 18, .5)}
    <g transform="scale(1.15 .52) rotate(${rot})">
      <rect x="-66" y="-66" width="132" height="132" rx="16" fill="${F3}" transform="translate(-4 38)"/>
      <rect x="-66" y="-66" width="132" height="132" rx="16" fill="${F2}" transform="translate(0 30)"/>
      <rect x="-66" y="-66" width="132" height="132" rx="16" fill="${F0}"/>
      <path d="M10 -66 h40 a16 16 0 0 1 16 16 v100 a16 16 0 0 1 -16 16 h-30z" fill="${F1}" opacity=".7"/>
      ${sym(kind, col)}
    </g></g>`;
}

export default () => {
  const rx0 = 555, rx1 = 1365, lipTop = 600, lipBot = 680;
  const tiles = [['plus', C.coral], ['4', C.ink], ['circle', C.em2], ['tri', C.gold2], ['7', C.ink]];
  const w = 146, h = 176, step = 158, start = (rx0 + rx1) / 2 - step * 2;
  return `${shadowEl(920, lipBot + 8, 480, 26, .6)}
  ${shadowEl(860, lipTop - 4, 380, 18, .35)}
  <!-- part de darrere del faristol -->
  <path d="M${rx0 + 20} ${lipTop - 40} H${rx1 - 20} L${rx1 - 6} ${lipTop + 4} H${rx0 + 6}Z" fill="${C.wood2}"/>
  ${tiles.map(([k, c], i) => tile(start + i * step, lipTop - h / 2 + 22, w, h, k, c, [-2, 1.5, -1, 2, -1.5][i])).join('')}
  <!-- llavi frontal del faristol -->
  <path d="M${rx0} ${lipTop} H${rx1} L${rx1 + 6} ${lipBot - 14} a14 14 0 0 1 -14 14 H${rx0 + 8} a14 14 0 0 1 -14 -14Z" fill="${C.wood}"/>
  <path d="M${rx1 - 280} ${lipTop} H${rx1} L${rx1 + 6} ${lipBot - 14} a14 14 0 0 1 -14 14 H${rx1 - 200}Z" fill="#D69A5C" opacity=".6"/>
  <path d="M${rx0} ${lipTop} H${rx1}" stroke="#E3B27A" stroke-width="8" stroke-linecap="round"/>
  <path d="M${rx0 + 2} ${lipBot - 12} H${rx1 + 2}" stroke="${C.wood2}" stroke-width="10" opacity=".55"/>
  ${[0, 1, 2].map(i => `<path d="M${rx0 + 60 + i * 230} ${lipTop + 24 + i * 6} C ${rx0 + 120 + i * 230} ${lipTop + 18} ${rx0 + 200 + i * 230} ${lipTop + 34} ${rx0 + 260 + i * 230} ${lipTop + 26}" stroke="${C.wood2}" stroke-width="2.5" fill="none" opacity=".3"/>`).join('')}
  <!-- fitxes soltes -->
  ${flat(450, 722, 'square', C.coral, -14)}
  ${flat(1470, 712, 'dot', C.em2, 12)}`;
};
