import { C, shadowEl } from '../base.mjs';
// Reflexos: un tauler de fusta amb dos grans botons d'arcade; el blau encès i brillant
export default () => {
  const x0 = 610, x1 = 1350, ty = 372, fy = 604, by = 690; // tauler: cara de dalt ty..fy, cara frontal fy..by
  const W1 = '#D69A5C', W0 = C.wood, W2 = C.wood2, W3 = '#7E5127';
  const grain = [0, 1, 2, 3, 4].map(i => {
    const y = ty + 40 + i * 44, k = (y - ty) / (fy - ty) * 70;
    return `<path d="M${x0 + 90 - k} ${y} C ${x0 + 260} ${y - 10 + (i % 2) * 14} ${x0 + 460} ${y + 12} ${x1 - 90 + k} ${y - 4}" stroke="${W2}" stroke-width="2.5" fill="none" opacity=".22"/>`;
  }).join('');
  const screw = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="${C.gold2}"/><circle cx="${x + 1.5}" cy="${y - 1.5}" r="7" fill="${C.gold}"/><path d="M${x - 5} ${y + 3} L${x + 5} ${y - 3}" stroke="${C.gold2}" stroke-width="2.5" stroke-linecap="round"/>`;
  const button = (cx, cy, lit, top, mid, side, dark) => `
    ${lit ? `<ellipse cx="${cx}" cy="${cy - 30}" rx="270" ry="190" fill="url(#rglow)"/>` : ''}
    <ellipse cx="${cx - 12}" cy="${cy + 14}" rx="150" ry="70" fill="${C.ink2}" opacity=".35" filter="url(#soft)"/>
    <ellipse cx="${cx}" cy="${cy + 8}" rx="142" ry="66" fill="#1B2320"/>
    <ellipse cx="${cx}" cy="${cy}" rx="142" ry="64" fill="#2C3833"/>
    <ellipse cx="${cx + 6}" cy="${cy - 3}" rx="128" ry="57" fill="#3A4843"/>
    <ellipse cx="${cx}" cy="${cy + 4}" rx="116" ry="52" fill="${lit ? '#BFDCFF' : '#141A18'}"/>
    ${lit ? `<ellipse cx="${cx}" cy="${cy + 4}" rx="124" ry="58" fill="none" stroke="#9CCBFF" stroke-width="10" opacity=".7" filter="url(#soft)"/>` : ''}
    <path d="M${cx - 108} ${cy} V${cy - 50} A108 49 0 0 1 ${cx + 108} ${cy - 50} V${cy} A108 49 0 0 1 ${cx - 108} ${cy}Z" fill="${side}"/>
    <path d="M${cx + 20} ${cy - 50} H${cx + 108} V${cy} A108 49 0 0 1 ${cx + 20} ${cy + 48}Z" fill="${mid}" opacity=".55"/>
    <path d="M${cx - 108} ${cy - 50} V${cy} A108 49 0 0 0 ${cx - 60} ${cy + 41} V${cy - 50}Z" fill="${dark}" opacity=".6"/>
    <ellipse cx="${cx}" cy="${cy - 50}" rx="108" ry="49" fill="${mid}"/>
    <ellipse cx="${cx + 4}" cy="${cy - 54}" rx="96" ry="42" fill="${top}"/>
    ${lit ? `<ellipse cx="${cx + 14}" cy="${cy - 60}" rx="62" ry="26" fill="#DDEBFF" opacity=".85"/><ellipse cx="${cx + 20}" cy="${cy - 63}" rx="30" ry="12" fill="#fff"/>`
      : `<path d="M${cx - 30} ${cy - 86} A 90 38 0 0 1 ${cx + 70} ${cy - 76}" stroke="#fff" stroke-width="9" fill="none" opacity=".35" stroke-linecap="round"/>`}`;
  return `<defs>
    <radialGradient id="rglow"><stop offset="0" stop-color="#7DB4FA" stop-opacity=".75"/><stop offset=".45" stop-color="#7DB4FA" stop-opacity=".32"/><stop offset="1" stop-color="#7DB4FA" stop-opacity="0"/></radialGradient>
    <radialGradient id="rhalo"><stop offset="0" stop-color="#BFDCFF" stop-opacity=".55"/><stop offset=".5" stop-color="#8FC1FF" stop-opacity=".18"/><stop offset="1" stop-color="#8FC1FF" stop-opacity="0"/></radialGradient>
  </defs>
  ${shadowEl(900, by + 4, 440, 30, .6)}
  ${shadowEl(800, by - 6, 380, 22, .5)}
  <!-- tauler: cara de dalt en perspectiva (trapezi) i cara frontal -->
  <path d="M${x0} ${fy} H${x1} V${by - 14} a14 14 0 0 1 -14 14 H${x0 + 14} a14 14 0 0 1 -14 -14Z" fill="${W2}"/>
  <path d="M${x0} ${by - 22} H${x1} V${by - 14} a14 14 0 0 1 -14 14 H${x0 + 14} a14 14 0 0 1 -14 -14Z" fill="${W3}" opacity=".7"/>
  <path d="M${x1 - 260} ${fy} H${x1} V${by - 22} H${x1 - 160}Z" fill="${W0}" opacity=".35"/>
  <path d="M${x0 + 70} ${ty} H${x1 - 70} L${x1} ${fy} H${x0}Z" fill="${W0}" stroke="${W0}" stroke-width="16" stroke-linejoin="round"/>
  <path d="M${x0 + 520} ${ty} H${x1 - 70} L${x1} ${fy} H${x0 + 700}Z" fill="${W1}" opacity=".5"/>
  <path d="M${x0} ${fy} H${x1}" stroke="#E3B27A" stroke-width="7" stroke-linecap="round"/>
  ${grain}
  <path d="M${x0 + 96} ${ty + 22} H${x1 - 96} L${x1 - 42} ${fy - 20} H${x0 + 42}Z" fill="none" stroke="${W2}" stroke-width="3" opacity=".35" stroke-linejoin="round"/>
  ${screw(x0 + 110, ty + 34)}${screw(x1 - 110, ty + 34)}${screw(x0 + 60, fy - 30)}${screw(x1 - 60, fy - 30)}
  <!-- llumets indicadors -->
  <rect x="${(x0 + x1) / 2 - 34}" y="${ty + 26}" width="68" height="16" rx="8" fill="#1B2320"/><circle cx="${(x0 + x1) / 2 + 16}" cy="${ty + 34}" r="5.5" fill="#BFDCFF"/><circle cx="${(x0 + x1) / 2 - 14}" cy="${ty + 34}" r="5.5" fill="#5A2E28"/>
  ${button(830, 500, false, '#A9473D', '#94392F', '#7C2E26', '#5E211B')}
  ${button(1130, 500, true, '#A8D0FF', '#74A9EE', '#4C86D3', '#2F62A8')}
  ${[-48, -24, 0, 24, 48].map(d => { const a = (d - 90) * Math.PI / 180; return `<line x1="${1134 + 150 * Math.cos(a)}" y1="${430 + 95 * Math.sin(a)}" x2="${1134 + 200 * Math.cos(a)}" y2="${430 + 130 * Math.sin(a)}" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".8"/>`; }).join('')}`;
};
