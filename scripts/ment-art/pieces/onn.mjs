import { C, shadowEl } from '../base.mjs';
// On era?: un moble de fusta amb 3×2 calaixos oberts, objectes petits i un forat buit
const f = n => +n.toFixed(1);
const LW = '#DCA466', LW2 = '#B87A3E', BACK = '#7E5129';
export default () => {
  const X0 = 615, X1 = 1320, Y0 = 165, Y1 = 690, t = 26, dv = 18, DX = 34, DY = -24;
  const cw = (X1 - X0 - 2 * t - 2 * dv) / 3, ch = (Y1 - Y0 - 2 * t - dv - 30) / 2; // 30 = sòcol
  const cells = [];
  for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) cells.push({ x: X0 + t + c * (cw + dv), y: Y0 + t + r * (ch + dv) });
  let defs = '';
  const interior = ({ x, y }, i) => {
    defs += `<clipPath id="onn${i}"><rect x="${f(x)}" y="${f(y)}" width="${f(cw)}" height="${f(ch)}"/></clipPath>`;
    return `<g clip-path="url(#onn${i})">
      <rect x="${f(x)}" y="${f(y)}" width="${f(cw)}" height="${f(ch)}" fill="${BACK}"/>
      <path d="M${f(x)} ${f(y)} L${f(x + DX)} ${f(y + DY)} L${f(x + DX)} ${f(y + ch + DY)} L${f(x)} ${f(y + ch)}Z" fill="${C.wood}"/>
      <path d="M${f(x)} ${f(y + ch)} L${f(x + DX)} ${f(y + ch + DY)} L${f(x + cw + DX)} ${f(y + ch + DY)} L${f(x + cw)} ${f(y + ch)}Z" fill="${LW}"/>
      <path d="M${f(x)} ${f(y)} h${f(cw)} v${f(ch)} h-34 L${f(x + cw - 34)} ${f(y + 70)} L${f(x)} ${f(y + 34)}Z" fill="${C.ink2}" opacity=".2"/>
    </g>`;
  };
  // objectes (sobre el terra del calaix: yb)
  const apple = (cx, yb) => `${shadowEl(cx - 12, yb - 4, 52, 9, .45)}
    <path d="M${cx} ${yb - 104} c 30 -18 70 -6 72 40 c 2 40 -26 66 -48 64 c -12 -1 -16 -6 -24 -6 c -8 0 -12 5 -24 6 c -22 2 -50 -24 -48 -64 c 2 -46 42 -58 72 -40z" fill="${C.red}"/>
    <clipPath id="onnAp"><path d="M${cx} ${yb - 104} c 30 -18 70 -6 72 40 c 2 40 -26 66 -48 64 c -12 -1 -16 -6 -24 -6 c -8 0 -12 5 -24 6 c -22 2 -50 -24 -48 -64 c 2 -46 42 -58 72 -40z"/></clipPath><g clip-path="url(#onnAp)"><ellipse cx="${cx - 70}" cy="${yb - 50}" rx="44" ry="80" fill="${C.red2}"/></g>
    <ellipse cx="${cx + 34}" cy="${yb - 72}" rx="11" ry="17" fill="#fff" opacity=".35" transform="rotate(20 ${cx + 34} ${yb - 72})"/>
    <path d="M${cx} ${yb - 100} q 2 -24 12 -34" stroke="${C.wood2}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M${cx + 8} ${yb - 124} c 14 -20 40 -20 50 -10 c -14 16 -36 20 -50 10z" fill="${C.green}"/><path d="M${cx + 8} ${yb - 124} c 14 -6 30 -10 50 -10" stroke="${C.green2}" stroke-width="2.5" fill="none"/>`;
  const cup = (cx, yb) => `${shadowEl(cx - 12, yb - 4, 74, 9, .45)}
    <ellipse cx="${cx}" cy="${yb - 6}" rx="72" ry="11" fill="${C.cream}"/><ellipse cx="${cx}" cy="${yb - 9}" rx="72" ry="9" fill="${C.white}"/>
    <path d="M${cx + 42} ${yb - 86} c 44 -4 46 52 0 50" stroke="${C.coral2}" stroke-width="14" fill="none"/>
    <path d="M${cx - 50} ${yb - 100} h100 l-8 76 a16 16 0 0 1 -16 14 h-52 a16 16 0 0 1 -16 -14z" fill="${C.coral}"/>
    <path d="M${cx - 50} ${yb - 100} h34 l4 90 h-14 a16 16 0 0 1 -16 -14z" fill="${C.coral2}" opacity=".55"/>
    <ellipse cx="${cx}" cy="${yb - 100}" rx="50" ry="9" fill="${C.coral2}"/><ellipse cx="${cx}" cy="${yb - 98}" rx="42" ry="6" fill="#5A3324"/>
    <path d="M${cx + 30} ${yb - 88} l-4 54" stroke="#fff" stroke-width="7" opacity=".3" stroke-linecap="round"/>`;
  const plant = (cx, yb) => {
    const lv = [[-62, -78, -40], [-30, -112, -14], [6, -128, 6], [40, -104, 30], [64, -70, 52], [-48, -48, -60], [52, -40, 70]];
    const leaves = lv.map(([dx, dy, r], i) => `<path d="M0 0 C 12 -26 12 -54 0 -78 C -12 -54 -12 -26 0 0Z" transform="translate(${cx} ${yb - 72}) rotate(${r}) scale(${1 + (i % 3) * .08})" fill="${i % 2 ? C.em2 : C.green}"/><path d="M0 -4 L0 -70" transform="translate(${cx} ${yb - 72}) rotate(${r}) scale(${1 + (i % 3) * .08})" stroke="${C.ink}" stroke-width="2" opacity=".35"/>`).join('');
    return `${shadowEl(cx - 12, yb - 4, 56, 9, .45)}${leaves}
    <path d="M${cx - 46} ${yb - 76} h92 l-10 70 a8 8 0 0 1 -8 6 h-56 a8 8 0 0 1 -8 -6z" fill="${C.coral}"/>
    <path d="M${cx - 46} ${yb - 76} h30 l4 76 h-16 a8 8 0 0 1 -8 -6z" fill="${C.coral2}" opacity=".5"/>
    <rect x="${cx - 52}" y="${yb - 86}" width="104" height="20" rx="4" fill="${C.coral2}"/><rect x="${cx - 12}" y="${yb - 86}" width="64" height="8" rx="4" fill="#fff" opacity=".18"/>`;
  };
  const books = (x, yb) => {
    const bk = [[0, 34, 150, C.blue, C.blue2], [34, 28, 136, C.em, C.em2], [62, 38, 160, C.gold, C.gold2], [100, 30, 128, C.ink, C.ink2]];
    return `${shadowEl(x + 60, yb - 4, 90, 9, .45)}${bk.map(([dx, w, h, c1, c2]) => `<rect x="${x + dx}" y="${yb - h}" width="${w}" height="${h}" rx="3" fill="${c1}"/><rect x="${x + dx}" y="${yb - h}" width="${w * .3}" height="${h}" fill="${c2}" opacity=".6"/><rect x="${x + dx + 4}" y="${yb - h + 18}" width="${w - 8}" height="6" fill="${C.cream}" opacity=".7"/><rect x="${x + dx + 4}" y="${yb - 30}" width="${w - 8}" height="4" fill="${C.cream}" opacity=".5"/>`).join('')}
    <g transform="rotate(-16 ${x + 160} ${yb})"><rect x="${x + 130}" y="${yb - 140}" width="30" height="140" rx="3" fill="${C.purple}"/><rect x="${x + 130}" y="${yb - 140}" width="9" height="140" fill="${C.purple2}" opacity=".6"/><rect x="${x + 134}" y="${yb - 120}" width="22" height="6" fill="${C.cream}" opacity=".7"/></g>`;
  };
  const vase = (cx, yb) => `${shadowEl(cx - 12, yb - 4, 50, 9, .45)}
    <path d="M${cx - 16} ${yb - 150} h32 v24 c 40 14 52 50 44 86 c -6 28 -26 40 -60 40 c -34 0 -54 -12 -60 -40 c -8 -36 4 -72 44 -86z" fill="${C.em}"/>
    <path d="M${cx - 16} ${yb - 150} h12 v26 c -24 18 -34 50 -26 84 c 4 22 14 34 26 40 c -26 -2 -44 -14 -48 -40 c -8 -36 4 -72 36 -84z" fill="${C.em2}"/>
    <ellipse cx="${cx}" cy="${yb - 150}" rx="18" ry="5" fill="${C.ink}"/>
    <path d="M${cx + 30} ${yb - 96} c 10 10 14 24 12 40" stroke="#fff" stroke-width="8" fill="none" opacity=".35" stroke-linecap="round"/>`;
  const yb = c => c.y + ch - 8;
  const [a, b, d, e, g, h] = cells;
  const sc = (cx, y, str, k = 1.2) => `<g transform="translate(${f(cx)} ${f(y)}) scale(${k}) translate(${f(-cx)} ${f(-y)})">${str}</g>`;
  const content = [
    sc(a.x + cw / 2, yb(a), plant(a.x + cw / 2 + 6, yb(a))),
    '', // buit
    sc(d.x + cw / 2, yb(d), apple(d.x + cw / 2 + 4, yb(d))),
    sc(e.x + cw / 2, yb(e), books(e.x + 22, yb(e)), 1.12),
    sc(g.x + cw / 2, yb(g), cup(g.x + cw / 2 + 2, yb(g))),
    sc(h.x + cw / 2, yb(h), vase(h.x + cw / 2 + 6, yb(h))),
  ];
  // marc frontal (amb forats) com a path amb evenodd
  const holes = cells.map(({ x, y }) => `M${f(x)} ${f(y)} h${f(cw)} v${f(ch)} h${f(-cw)}z`).join(' ');
  const H = Y1 - Y0;
  return `<defs>${''}</defs>
  <filter id="onnB" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"/></filter><path d="M${X1} ${Y1 - 10} L${X0} ${Y1 - 10} L${X0 - 300} ${Y1 + 60} L${X1 - 300} ${Y1 + 60} Z" fill="${C.ink2}" opacity=".38" filter="url(#onnB)"/>
  ${shadowEl((X0 + X1) / 2 - 20, Y1 + 4, (X1 - X0) / 2 + 20, 16, .5)}
  <!-- costat dret i tapa (profunditat) -->
  <path d="M${X1} ${Y0} L${X1 + DX} ${Y0 + DY} L${X1 + DX} ${Y1 + DY} L${X1} ${Y1}Z" fill="${C.wood2}"/>
  <path d="M${X0} ${Y0} L${X0 + DX} ${Y0 + DY} L${X1 + DX} ${Y0 + DY} L${X1} ${Y0}Z" fill="#E7B87E"/>
  ${cells.map(interior).join('')}
  ${content.join('')}
  <path d="M${X0} ${Y0} h${X1 - X0} v${H} h${X0 - X1}z ${holes}" fill="${C.wood}" fill-rule="evenodd"/>
  <rect x="${X0}" y="${Y1 - 30}" width="${X1 - X0}" height="30" fill="${C.wood2}" opacity=".55"/>
  <rect x="${X0 + 14}" y="${Y1 - 18}" width="${X1 - X0 - 28}" height="4" fill="${C.ink2}" opacity=".18"/>
  <!-- llum: vora superior i arestes dels separadors -->
  <rect x="${X0}" y="${Y0}" width="${X1 - X0}" height="6" fill="#fff" opacity=".25"/>
  ${cells.map(({ x, y }) => `<rect x="${f(x + cw)}" y="${f(y)}" width="3" height="${f(ch)}" fill="#fff" opacity=".2"/><rect x="${f(x)}" y="${f(y + ch)}" width="${f(cw)}" height="3" fill="#fff" opacity=".25"/>`).join('')}
  <!-- veta de la fusta -->
  <path d="M${X0 + 8} ${Y0 + 60} q 6 120 0 240 M${X1 - 12} ${Y0 + 90} q -6 140 0 280" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".35"/>
  <defs>${defs}</defs>`;
};
