import { C, shadowEl } from '../base.mjs';
// La que sobra: fruitera amb pomes i peres... i una clau de llautó que no hi pinta res
const APPLE = 'M0 -0.72 C 0.25 -0.98 0.95 -0.95 1 -0.2 C 1.04 0.45 0.62 1 0.25 0.98 C 0.1 0.97 0.05 0.92 0 0.92 C -0.05 0.92 -0.1 0.97 -0.25 0.98 C -0.62 1 -1.04 0.45 -1 -0.2 C -0.95 -0.95 -0.25 -0.98 0 -0.72Z';
const PEAR = 'M0 -1.3 C 0.25 -1.3 0.32 -1 0.38 -0.6 C 0.45 -0.2 0.95 0.05 0.95 0.55 C 0.95 1.0 0.5 1.15 0 1.15 C -0.5 1.15 -0.95 1.0 -0.95 0.55 C -0.95 0.05 -0.45 -0.2 -0.38 -0.6 C -0.32 -1 -0.25 -1.3 0 -1.3Z';
const fruit = (shape, x, y, r, rot, dark, lit, leaf = false) => {
  const top = shape === PEAR ? -1.3 : -0.72;
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${r})">
  <path d="${shape}" fill="${dark}"/>
  <path d="${shape}" fill="${lit}" transform="translate(.1 -.06) scale(.88)"/>
  <ellipse cx=".42" cy="${shape === PEAR ? .2 : -.35}" rx=".16" ry=".09" transform="rotate(-40 .42 ${shape === PEAR ? .2 : -.35})" fill="#fff" opacity=".55"/>
  <path d="M0 ${top + .06} C 0 ${top - .12} .04 ${top - .25} .12 ${top - .34}" stroke="#5B3A1E" stroke-width=".07" fill="none" stroke-linecap="round"/>
  ${leaf ? `<path d="M.06 ${top - .16} C .2 ${top - .44} .58 ${top - .46} .72 ${top - .3} C .54 ${top - .1} .26 ${top - .06} .06 ${top - .16}Z" fill="${C.em2}"/><path d="M.06 ${top - .16} C .3 ${top - .26} .5 ${top - .3} .7 ${top - .3}" stroke="${C.ink}" stroke-width=".025" fill="none" opacity=".5"/>` : ''}</g>`;
};
const RED = ['#A63D33', '#D8574A'], RED2 = ['#B4472F', '#E0694B'], GRN = ['#5F8F3A', '#8DBA55'], PR = ['#9AA03C', '#C9CB62'];
export default () => {
  const cx = 960, rimY = 485, rx = 300, ry = 54;
  const body = `M${cx - rx} ${rimY} C ${cx - rx + 10} ${rimY + 140} ${cx - 150} ${rimY + 170} ${cx} ${rimY + 172} C ${cx + 150} ${rimY + 170} ${cx + rx - 10} ${rimY + 140} ${cx + rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx - rx} ${rimY}Z`;
  const bowlBack = `<ellipse cx="${cx}" cy="${rimY}" rx="${rx}" ry="${ry}" fill="#D9CFB8"/><ellipse cx="${cx}" cy="${rimY + 6}" rx="${rx - 14}" ry="${ry - 10}" fill="#CFC3A8"/>`;
  const fruits = [
    fruit(PEAR, cx - 150, rimY - 150, 92, -14, ...PR, true),
    fruit(APPLE, cx + 10, rimY - 120, 86, 6, ...GRN),
    fruit(PEAR, cx + 160, rimY - 160, 96, 16, ...PR, true),
    fruit(APPLE, cx + 225, rimY - 48, 76, 12, ...RED2),
    fruit(APPLE, cx - 230, rimY - 40, 78, -10, ...RED2),
    fruit(APPLE, cx - 95, rimY - 22, 92, -6, ...RED, true),
    fruit(APPLE, cx + 100, rimY - 18, 90, 8, ...RED),
  ].join('');
  // clau de llautó, recolzada sobre la fruita
  const key = `<g transform="translate(${cx - 20} ${rimY - 96}) rotate(-20)">
    ${shadowEl(0, 34, 190, 18, .4)}
    <rect x="-70" y="-14" width="260" height="28" rx="10" fill="${C.gold2}"/><rect x="-70" y="-14" width="260" height="13" rx="6" fill="${C.gold}"/>
    <path d="M140 10 L 140 66 L 160 66 L 160 44 L 174 44 L 174 74 L 194 74 L 194 10Z" fill="${C.gold2}"/><path d="M144 10 L 144 58 L 156 58 L 156 36 L 178 36 L 178 66 L 190 66 L 190 10Z" fill="${C.gold}"/>
    <rect x="-58" y="-22" width="18" height="44" rx="6" fill="${C.gold2}"/><rect x="-54" y="-22" width="8" height="40" rx="4" fill="${C.gold}"/><rect x="-30" y="-19" width="12" height="38" rx="5" fill="${C.gold2}"/>
    ${[0, 90, 180, 270].map(a => { const r = a * Math.PI / 180, x = -126 + 52 * Math.cos(r), y = 52 * Math.sin(r); return `<circle cx="${x}" cy="${y}" r="26" fill="${C.gold2}"/><circle cx="${x + 2}" cy="${y - 2}" r="21" fill="${C.gold}"/>`; }).join('')}
    <circle cx="-126" cy="0" r="58" fill="${C.gold2}"/><circle cx="-123" cy="-3" r="52" fill="${C.gold}"/>
    <circle cx="-126" cy="0" r="27" fill="#6E4F1A"/><circle cx="-126" cy="0" r="27" fill="none" stroke="${C.gold2}" stroke-width="5"/>
    <path d="M-160 -32 A 46 46 0 0 1 -100 -40" stroke="#FFF1C4" stroke-width="8" fill="none" stroke-linecap="round" opacity=".85"/><rect x="-10" y="-10" width="160" height="5" rx="2.5" fill="#FFF1C4" opacity=".75"/></g>`;
  const front = `<clipPath id="bowlclip"><path d="${body}"/></clipPath>
    <path d="${body}" fill="${C.cream}"/>
    <g clip-path="url(#bowlclip)">
      <path d="M${cx - rx - 10} ${rimY} C ${cx - rx + 20} ${rimY + 150} ${cx - 120} ${rimY + 180} ${cx - 60} ${rimY + 190} L ${cx - rx - 10} ${rimY + 200}Z" fill="#DCD2BC"/>
      <path d="M${cx - rx} ${rimY + 52} Q ${cx} ${rimY + 150} ${cx + rx} ${rimY + 52}" stroke="${C.ink}" stroke-width="18" fill="none"/>
      <path d="M${cx - rx} ${rimY + 76} Q ${cx} ${rimY + 174} ${cx + rx} ${rimY + 76}" stroke="${C.gold2}" stroke-width="4" fill="none"/>
      <path d="M${cx + 170} ${rimY + 40} C ${cx + 230} ${rimY + 70} ${cx + 250} ${rimY + 100} ${cx + 240} ${rimY + 120}" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" opacity=".8"/>
    </g>
    <path d="M${cx + rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx - rx} ${rimY}" stroke="#FFFDF7" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M${cx + rx} ${rimY} A ${rx} ${ry} 0 0 1 ${cx - rx} ${rimY}" stroke="#E2D8C2" stroke-width="3" fill="none" transform="translate(0 6)"/>`;
  const foot = `<path d="M${cx - 90} ${rimY + 160} L ${cx - 120} ${rimY + 196} L ${cx + 120} ${rimY + 196} L ${cx + 90} ${rimY + 160}Z" fill="#DCD2BC"/>
    <ellipse cx="${cx}" cy="${rimY + 196}" rx="124" ry="20" fill="#CFC3A8"/><path d="M${cx + 40} ${rimY + 162} L ${cx + 100} ${rimY + 194}" stroke="${C.cream}" stroke-width="16" opacity=".7"/>`;
  return `<path d="M${cx - 260} ${rimY + 210} L ${cx - 620} ${rimY + 280} L ${cx - 140} ${rimY + 290} L ${cx + 160} ${rimY + 220}Z" fill="${C.ink2}" opacity=".3" filter="url(#soft)"/>
  ${shadowEl(cx - 30, rimY + 200, 200, 26, .55)}
  ${foot}${bowlBack}${fruits}${front}${key}
  ${shadowEl(cx + 370, rimY + 268, 90, 14, .5)}${fruit(APPLE, cx + 380, rimY + 196, 70, 18, ...RED2, true)}`;
};
