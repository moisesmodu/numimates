import { C, shadowEl } from '../base.mjs';
// Suma en cadena: una filera de dòmino dempeus; les primeres fitxes ja cauen
const f = n => +n.toFixed(1);
const IV = '#FBF6EA', IV2 = '#E4D8BF', IV3 = '#CDBF9F';
export default () => {
  const H = 350, T = 46, W = 170, KX = .44, KY = .25, s = 128, N = 7, xs = 465;
  const base = x => 716 - (x - 600) * .045;
  // angles: les 3 darreres dretes; cadascuna recolzada a la següent
  const th = Array(N).fill(0);
  const contact = (i) => { // θ_i perquè la cantonada superior dreta toqui la cara esquerra de la i+1
    const t2 = th[i + 1], xp2 = s, Q = [xp2 - T * Math.cos(t2), T * Math.sin(t2)], d = [Math.sin(t2), Math.cos(t2)];
    let lo = 0, hi = Math.PI / 2;
    for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2, c = [H * Math.sin(m), H * Math.cos(m)], cr = (c[0] - Q[0]) * d[1] - (c[1] - Q[1]) * d[0]; if (cr < 0) lo = m; else hi = m; }
    return (lo + hi) / 2;
  };
  for (let i = 3; i >= 0; i--) th[i] = contact(i);
  const pipsOf = [[6, 2], [3, 5], [1, 4], [5, 5], [2, 6], [4, 1], [3, 3]];
  const P = { 1: [[.5, .5]], 2: [[.27, .27], [.73, .73]], 3: [[.25, .25], [.5, .5], [.75, .75]], 4: [[.27, .27], [.73, .27], [.27, .73], [.73, .73]], 5: [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]], 6: [[.27, .22], [.73, .22], [.27, .5], [.73, .5], [.27, .78], [.73, .78]] };
  const V = [KX, KY, -1]; // cap a l'espectador
  let shadows = '', body = '';
  for (let i = 0; i < N; i++) {
    const xp = xs + i * s + T, b = base(xp), t = th[i], cs = Math.cos(t), sn = Math.sin(t);
    // punt 3D local (dx des del pivot, h, z) -> pantalla
    const pr = (dx, h, z) => { const x = xp + dx * cs + h * sn, y = -dx * sn + h * cs; return [f(x + z * KX), f(b - y - z * KY)]; };
    const poly = pts => 'M' + pts.map(p => p.join(' ')).join(' L') + 'Z';
    const faces = [
      { n: [0, 0, -1], pts: [[-T, 0, 0], [0, 0, 0], [0, H, 0], [-T, H, 0]], fill: IV2, two: true },
      { n: [cs, -sn, 0], pts: [[0, 0, 0], [0, 0, W], [0, H, W], [0, H, 0]], fill: IV, pips: true },
      { n: [sn, cs, 0], pts: [[-T, H, 0], [0, H, 0], [0, H, W], [-T, H, W]], fill: '#FFFDF7', top: true },
      { n: [-cs, sn, 0], pts: [[-T, 0, 0], [-T, H, 0], [-T, H, W], [-T, 0, W]], fill: C.ink },
    ];
    // ombra projectada (llum de dalt a la dreta → cap a l'esquerra i avall)
    const top = pr(-T / 2, H, W / 2), foot = pr(-T / 2, 0, W / 2);
    const len = (top[1] < foot[1] ? foot[1] - top[1] : 0) * .7 + 20;
    shadows += `<path d="M${pr(0, 0, W).join(' ')} L${pr(-T, 0, 0).join(' ')} L${f(foot[0] - len * .9 - 20)} ${f(foot[1] + len * .22 + 10)} L${f(foot[0] - len * .9 + 50)} ${f(foot[1] + len * .22 - 40)}Z" fill="${C.ink2}" opacity=".42" filter="url(#cadB)"/>`;
    let g = '';
    for (const fc of faces) {
      const vis = fc.n[0] * V[0] + fc.n[1] * V[1] + fc.n[2] * V[2];
      if (vis <= 0.001) continue;
      g += `<path d="${poly(fc.pts.map(p => pr(...p)))}" fill="${fc.fill}"/>`;
      const k = -T * .48; // capa fosca del darrere (dòmino bicolor)
      if (fc.two) g += `<path d="${poly([[-T, 0, 0], [k, 0, 0], [k, H, 0], [-T, H, 0]].map(p => pr(...p)))}" fill="${C.ink}"/><path d="${poly([[k, 0, 0], [k + 3, 0, 0], [k + 3, H, 0], [k, H, 0]].map(p => pr(...p)))}" fill="${C.gold2}" opacity=".8"/>`;
      if (fc.top) g += `<path d="${poly([[-T, H, 0], [k, H, 0], [k, H, W], [-T, H, W]].map(p => pr(...p)))}" fill="#2B5A51"/>`;
      if (fc.pips) {
        // cara (u = profunditat, v = alçada) → pantalla
        const o = pr(0, 0, 0), m = `matrix(${f(KX * 1000) / 1000} ${f(-KY * 1000) / 1000} ${f(sn * 1000) / 1000} ${f(-cs * 1000) / 1000} ${o[0]} ${o[1]})`;
        const [a, c] = pipsOf[i];
        const half = (n, v0) => P[n].map(([pu, pv]) => `<circle cx="${f(pu * W)}" cy="${f(v0 + pv * H / 2)}" r="15" fill="${C.ink}"/>`).join('');
        g += `<g transform="${m}"><rect x="10" y="${H / 2 - 3}" width="${W - 20}" height="6" rx="3" fill="${IV3}"/><circle cx="${W / 2}" cy="${H / 2}" r="7" fill="${C.gold2}"/>${half(c, 0)}${half(a, H / 2)}
          <rect x="0" y="0" width="${W}" height="${H}" fill="none"/></g>`;
        // vora lluminosa
        g += `<path d="M${pr(0, H, 0).join(' ')} L${pr(0, H, W).join(' ')}" stroke="#fff" stroke-width="3" opacity=".7"/>`;
      }
    }
    body += `<g>${g}</g>`;
  }
  return `<filter id="cadB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  ${shadowEl(1000, base(1000) - 20, 430, 30, .35)}
  ${shadows}${body}`;
};
