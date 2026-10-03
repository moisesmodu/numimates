import { C, shadowEl } from '../base.mjs';
// Càlcul ràpid: un àbac clàssic de fusta amb boles de colors
const f = n => +n.toFixed(1);
const LW = '#DCA466';
export default () => {
  const X0 = 560, X1 = 1345, Y0 = 150, Y1 = 640, P = 46, R = 34, DX = 26, DY = -18;
  const n = 6, top = Y0 + R, bot = Y1 - R, sp = (bot - top) / n;
  const rows = [[C.red, C.red2], [C.coral, C.coral2], [C.gold, C.gold2], [C.em, C.em2], [C.blue, C.blue2], [C.purple, C.purple2]];
  const left = [3, 7, 1, 5, 8, 2];
  const bw = 54, bh = 48, ix0 = X0 + P + 4, ix1 = X1 - P - 4;
  const bead = (cx, cy, c1, c2) => `<g transform="translate(${f(cx)} ${f(cy)})">
    <ellipse cx="0" cy="0" rx="${bw / 2}" ry="${bh / 2}" fill="${c1}"/>
    <path d="M${-bw / 2} 0 a${bw / 2} ${bh / 2} 0 0 0 ${bw} 0 c -10 8 -40 10 -${bw} 0z" fill="${c2}"/>
    <path d="M${-bw / 2 + 2} -4 a${bw / 2} ${bh / 2} 0 0 0 10 ${bh / 2 - 2} c -6 -8 -8 -16 -10 -${bh / 2 - 6}z" fill="${c2}" opacity=".7"/>
    <rect x="-3.5" y="${-bh / 2}" width="7" height="${bh}" fill="${c2}" opacity=".35"/>
    <ellipse cx="11" cy="-10" rx="9" ry="5" fill="#fff" opacity=".45" transform="rotate(-18 11 -10)"/>
  </g>`;
  let rods = '';
  rows.forEach(([c1, c2], i) => {
    const y = top + sp * (i + .5);
    rods += `${shadowEl((ix0 + ix1) / 2, y + 26, (ix1 - ix0) / 2, 5, .0)}
    <rect x="${X0 + P}" y="${f(y - 4)}" width="${X1 - X0 - 2 * P}" height="8" rx="4" fill="#9AA3A0"/><rect x="${X0 + P}" y="${f(y - 4)}" width="${X1 - X0 - 2 * P}" height="3" rx="1.5" fill="#fff" opacity=".5"/>`;
    for (let k = 0; k < 10; k++) {
      const cx = k < left[i] ? ix0 + bw / 2 + k * bw : ix1 - bw / 2 - (9 - k) * bw;
      rods += bead(cx, y, c1, c2);
    }
  });
  const H = Y1 - Y0;
  return `<filter id="calB" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8"/></filter>
  <!-- ombra projectada -->
  <path d="M${X1 + 40} ${Y1 + 50} L${X0 - 30} ${Y1 + 50} L${X0 - 300} ${Y1 + 110} L${X1 - 250} ${Y1 + 110}Z" fill="${C.ink2}" opacity=".35" filter="url(#calB)"/>
  ${shadowEl((X0 + X1) / 2, Y1 + 58, (X1 - X0) / 2 + 40, 12, .5)}
  <!-- peus -->
  ${[X0 + P / 2, X1 - P / 2].map(x => `<rect x="${x - P / 2}" y="${Y1 - 4}" width="${P}" height="24" fill="${C.wood2}"/><path d="M${x - 78} ${Y1 + 52} q 0 -14 14 -16 L${x - 30} ${Y1 + 16} h60 L${x + 64} ${Y1 + 36} q 14 2 14 16z" fill="${C.wood}"/><path d="M${x - 78} ${Y1 + 50} h156 v6 a4 4 0 0 1 -4 4 h-148 a4 4 0 0 1 -4 -4z" fill="#7E5129"/><path d="M${x - 30} ${Y1 + 16} h60 L${x + 64} ${Y1 + 36} h-44z" fill="#fff" opacity=".2"/><path d="M${x - 30} ${Y1 + 16} L${x - 64} ${Y1 + 36} q -14 2 -14 16 h20z" fill="${C.wood2}" opacity=".5"/>`).join('')}
  <!-- costat i tapa (profunditat) -->
  <path d="M${X1} ${Y0} l${DX} ${DY} v${H} l${-DX} ${-DY}z" fill="${C.wood2}"/>
  <path d="M${X0} ${Y0} l${DX} ${DY} h${X1 - X0} l${-DX} ${-DY}z" fill="#E7B87E"/>
  <!-- travesser posterior vist a través -->
  <rect x="${X0 + P}" y="${Y0 + R}" width="${X1 - X0 - 2 * P}" height="${H - 2 * R}" fill="none"/>
  ${rods}
  <!-- marc frontal -->
  <rect x="${X0}" y="${Y0}" width="${P}" height="${H}" fill="${C.wood}"/>
  <rect x="${X1 - P}" y="${Y0}" width="${P}" height="${H}" fill="${C.wood}"/>
  <rect x="${X0}" y="${Y0}" width="${X1 - X0}" height="${R}" fill="${C.wood}"/>
  <rect x="${X0}" y="${Y1 - R}" width="${X1 - X0}" height="${R}" fill="${C.wood}"/>
  <rect x="${X0}" y="${Y1 - 12}" width="${X1 - X0}" height="12" fill="${C.wood2}" opacity=".5"/>
  <rect x="${X0}" y="${Y0 + R - 8}" width="${X1 - X0}" height="8" fill="${C.wood2}" opacity=".35"/>
  <rect x="${X0}" y="${Y0}" width="${X1 - X0}" height="6" fill="#fff" opacity=".28"/>
  <rect x="${X1 - P}" y="${Y0}" width="6" height="${H}" fill="#fff" opacity=".22"/>
  <rect x="${X0}" y="${Y0}" width="10" height="${H}" fill="${C.wood2}" opacity=".35"/>
  <!-- veta -->
  <path d="M${X0 + 22} ${Y0 + 70} q 6 120 0 260 M${X1 - 24} ${Y0 + 110} q -6 120 0 240 M${X0 + 120} ${Y0 + 16} q 160 -6 300 0 M${X0 + 380} ${Y1 - 18} q 160 6 320 0" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".35"/>
  ${[X0 + P / 2, X1 - P / 2].map(x => `<circle cx="${x}" cy="${Y0 + R / 2}" r="5" fill="${C.wood2}"/><circle cx="${x}" cy="${Y1 - R / 2}" r="5" fill="${C.wood2}"/>`).join('')}`;
};
