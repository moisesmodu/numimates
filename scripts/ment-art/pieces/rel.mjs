import { C, shadowEl } from '../base.mjs';
// El rellotge: rellotge de paret antic (esfera gran + caixa del pèndol) i un rellotge de sorra a la taula
const f = n => +n.toFixed(1);
export default () => {
  const cx = 930, cy = 210, R = 192;
  const P = (r, deg) => [cx + r * Math.sin(deg * Math.PI / 180), cy - r * Math.cos(deg * Math.PI / 180)];
  // ---- caixa del pèndol
  const bt = 350, bb = 520, bw = 108;
  const box = `
    <path d="M${cx - bw - 4} ${bt} L ${cx + bw + 4} ${bt} L ${cx + bw - 6} ${bb} L ${cx - bw + 6} ${bb}Z" fill="${C.wood}"/>
    <path d="M${cx - bw - 4} ${bt} L ${cx - bw + 18} ${bt} L ${cx - bw + 26} ${bb} L ${cx - bw + 6} ${bb}Z" fill="${C.wood2}"/>
    <rect x="${cx - bw - 18}" y="${bb - 6}" width="${2 * bw + 36}" height="22" rx="6" fill="${C.wood2}"/><rect x="${cx - bw - 18}" y="${bb - 6}" width="${2 * bw + 36}" height="8" rx="4" fill="#D9A468"/>
    <path d="M${cx - 30} ${bb + 16} L ${cx + 30} ${bb + 16} L ${cx + 8} ${bb + 32} L ${cx - 8} ${bb + 32}Z" fill="${C.wood2}"/>
    <path d="M${cx - 72} ${bb - 26} L ${cx - 72} ${bt + 60} A 72 72 0 0 1 ${cx + 72} ${bt + 60} L ${cx + 72} ${bb - 26}Z" fill="${C.wood2}"/>
    <path d="M${cx - 62} ${bb - 34} L ${cx - 62} ${bt + 62} A 62 62 0 0 1 ${cx + 62} ${bt + 62} L ${cx + 62} ${bb - 34}Z" fill="#2B3F38"/>
    <clipPath id="pendwin"><path d="M${cx - 62} ${bb - 34} L ${cx - 62} ${bt + 62} A 62 62 0 0 1 ${cx + 62} ${bt + 62} L ${cx + 62} ${bb - 34}Z"/></clipPath>
    <g clip-path="url(#pendwin)">
      <g transform="rotate(9 ${cx} ${bt - 20})"><rect x="${cx - 4}" y="${bt - 20}" width="8" height="${bb - bt - 40}" fill="${C.gold2}"/><circle cx="${cx}" cy="${bb - 76}" r="36" fill="${C.gold2}"/><circle cx="${cx + 4}" cy="${bb - 80}" r="29" fill="${C.gold}"/><ellipse cx="${cx + 14}" cy="${bb - 92}" rx="10" ry="6" fill="#FFF3CF" opacity=".8" transform="rotate(-30 ${cx + 14} ${bb - 92})"/></g>
      <path d="M${cx + 10} ${bt - 10} L ${cx + 70} ${bt - 10} L ${cx - 10} ${bb} L ${cx - 70} ${bb}Z" fill="#fff" opacity=".1"/><path d="M${cx + 82} ${bt + 30} L ${cx + 100} ${bt + 30} L ${cx + 20} ${bb} L ${cx + 2} ${bb}Z" fill="#fff" opacity=".12"/>
    </g>`;
  // ---- cap: marc de fusta, bisell de llautó, esfera
  const ticks = [...Array(60).keys()].map(i => { const big = i % 5 === 0, [x1, y1] = P(big ? 126 : 131, i * 6), [x2, y2] = P(140, i * 6); return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${C.ink}" stroke-width="${big ? 5 : 2}" stroke-linecap="round"/>`; }).join('');
  const roman = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  const nums = roman.map((t, i) => { const [x, y] = P(103, i * 30); return `<text x="${f(x)}" y="${f(y + 10)}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${t.length > 2 ? 25 : 30}" font-weight="700" fill="${C.ink}">${t}</text>`; }).join('');
  const hand = (deg, len, w, tip) => `<g transform="rotate(${deg} ${cx} ${cy})">
    <path d="M${cx - w / 2} ${cy + 26} L ${cx - w / 2} ${cy - len + tip * 2.4} L ${cx} ${cy - len} L ${cx + w / 2} ${cy - len + tip * 2.4} L ${cx + w / 2} ${cy + 26}Z" fill="${C.ink}"/>
    <path d="M${cx} ${cy - len + tip * 2.6} m ${-tip} 0 a ${tip} ${tip} 0 1 0 ${2 * tip} 0 a ${tip} ${tip} 0 1 0 ${-2 * tip} 0Z" fill="${C.ink}"/><circle cx="${cx}" cy="${cy - len + tip * 2.6}" r="${tip * .45}" fill="${C.cream}"/></g>`;
  const head = `
    <circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.wood2}"/>
    <circle cx="${cx + 4}" cy="${cy - 4}" r="${R - 8}" fill="${C.wood}"/>
    <path d="M${f(P(R - 16, 300)[0])} ${f(P(R - 16, 300)[1])} A ${R - 16} ${R - 16} 0 0 1 ${f(P(R - 16, 100)[0])} ${f(P(R - 16, 100)[1])}" stroke="#E4AF70" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>
    <circle cx="${cx}" cy="${cy}" r="${R - 30}" fill="${C.gold2}"/><circle cx="${cx + 2}" cy="${cy - 2}" r="${R - 36}" fill="${C.gold}"/>
    <circle cx="${cx}" cy="${cy}" r="${R - 44}" fill="${C.white}"/>
    <path d="M${cx - R + 44} ${cy} A ${R - 44} ${R - 44} 0 0 0 ${cx} ${cy + R - 44} A ${R - 44} ${R - 44} 0 0 1 ${cx - R + 44} ${cy}Z" fill="#EDE5D3"/>
    <circle cx="${cx}" cy="${cy}" r="140" fill="none" stroke="${C.ink}" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="124" fill="none" stroke="${C.ink}" stroke-width="1.5" opacity=".6"/>
    ${ticks}${nums}
    <circle cx="${cx - 38}" cy="${cy + 42}" r="7" fill="${C.ink}" opacity=".85"/><circle cx="${cx + 38}" cy="${cy + 42}" r="7" fill="${C.ink}" opacity=".85"/><circle cx="${cx - 38}" cy="${cy + 42}" r="3" fill="${C.gold}"/><circle cx="${cx + 38}" cy="${cy + 42}" r="3" fill="${C.gold}"/>
    ${hand(-56, 82, 13, 12)}${hand(46, 124, 9, 9)}
    <line x1="${cx}" y1="${cy + 30}" x2="${cx}" y2="${cy - 130}" stroke="${C.coral2}" stroke-width="2.5" stroke-linecap="round" transform="rotate(168 ${cx} ${cy})"/>
    <circle cx="${cx}" cy="${cy}" r="13" fill="${C.ink}"/><circle cx="${cx}" cy="${cy}" r="6" fill="${C.gold}"/>
    <path d="M${f(P(R - 52, 20)[0])} ${f(P(R - 52, 20)[1])} A ${R - 52} ${R - 52} 0 0 1 ${f(P(R - 52, 78)[0])} ${f(P(R - 52, 78)[1])} L ${f(P(R - 80, 70)[0])} ${f(P(R - 80, 70)[1])} A ${R - 80} ${R - 80} 0 0 0 ${f(P(R - 80, 28)[0])} ${f(P(R - 80, 28)[1])}Z" fill="#fff" opacity=".28"/>`;
  // ---- rellotge de sorra a la taula
  const hx = 1225, hy = 690;
  const hourglass = `${shadowEl(hx - 40, hy + 6, 120, 16, .5)}
    <ellipse cx="${hx}" cy="${hy}" rx="78" ry="16" fill="${C.wood2}"/><rect x="${hx - 78}" y="${hy - 26}" width="156" height="26" fill="${C.wood2}"/><ellipse cx="${hx}" cy="${hy - 26}" rx="78" ry="16" fill="${C.wood}"/>
    <path d="M${hx - 52} ${hy - 30} C ${hx - 52} ${hy - 110} ${hx - 6} ${hy - 110} ${hx - 6} ${hy - 135} C ${hx - 6} ${hy - 160} ${hx - 52} ${hy - 160} ${hx - 52} ${hy - 240} L ${hx + 52} ${hy - 240} C ${hx + 52} ${hy - 160} ${hx + 6} ${hy - 160} ${hx + 6} ${hy - 135} C ${hx + 6} ${hy - 110} ${hx + 52} ${hy - 110} ${hx + 52} ${hy - 30}Z" fill="#DCE8E2" opacity=".75"/>
    <path d="M${hx - 50} ${hy - 30} C ${hx - 48} ${hy - 62} ${hx - 26} ${hy - 76} ${hx} ${hy - 80} C ${hx + 26} ${hy - 76} ${hx + 48} ${hy - 62} ${hx + 50} ${hy - 30}Z" fill="${C.gold}"/>
    <path d="M${hx - 34} ${hy - 182} L ${hx + 34} ${hy - 182} C ${hx + 26} ${hy - 160} ${hx + 6} ${hy - 150} ${hx + 3} ${hy - 135} L ${hx - 3} ${hy - 135} C ${hx - 6} ${hy - 150} ${hx - 26} ${hy - 160} ${hx - 34} ${hy - 182}Z" fill="${C.gold}"/>
    <path d="M${hx - 1.5} ${hy - 135} L ${hx + 1.5} ${hy - 135} L ${hx + 1.5} ${hy - 80} L ${hx - 1.5} ${hy - 80}Z" fill="${C.gold2}"/>
    <path d="M${hx - 50} ${hy - 30} C ${hx - 48} ${hy - 62} ${hx - 26} ${hy - 76} ${hx} ${hy - 80}" stroke="${C.gold2}" stroke-width="10" fill="none" opacity=".5"/>
    <path d="M${hx + 32} ${hy - 225} C ${hx + 34} ${hy - 190} ${hx + 26} ${hy - 172} ${hx + 18} ${hy - 160}" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/><path d="M${hx + 34} ${hy - 100} C ${hx + 38} ${hy - 80} ${hx + 40} ${hy - 60} ${hx + 38} ${hy - 44}" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>
    ${[-66, 66].map(d => `<rect x="${hx + d - 6}" y="${hy - 250}" width="12" height="224" rx="5" fill="${d < 0 ? C.wood2 : C.wood}"/>`).join('')}
    <ellipse cx="${hx}" cy="${hy - 240}" rx="78" ry="16" fill="${C.wood2}"/><rect x="${hx - 78}" y="${hy - 266}" width="156" height="26" fill="${C.wood2}"/><ellipse cx="${hx}" cy="${hy - 266}" rx="78" ry="16" fill="${C.wood}"/><ellipse cx="${hx + 20}" cy="${hy - 270}" rx="40" ry="6" fill="#E2AE6E" opacity=".7"/>`;
  return `${shadowEl(cx - 46, cy + 40, R + 10, R + 6, .28)}${shadowEl(cx - 40, 470, 130, 110, .22)}
  <rect x="${cx - 4}" y="${cy - R - 26}" width="8" height="30" rx="4" fill="${C.gold2}"/><circle cx="${cx}" cy="${cy - R - 26}" r="9" fill="${C.gold2}"/>
  ${box}${head}${hourglass}`;
};
