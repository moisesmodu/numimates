/* ---------- Sons de Numi (v2) ----------
   Tot es genera amb Web Audio, sense fitxers: una veu de campaneta (sinus + parcials), un pop suau,
   espurnes i una mica de reverberació perquè soni «rodó». Mateixa interfície que abans: SFX.ok(), etc. */
function makeSFX(enabled) {
  let ctx, out, rev;
  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return true; }
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
      out = ctx.createGain(); out.gain.value = .9; out.connect(comp).connect(ctx.destination);
      // reverberació curta i brillant (impuls fet de soroll que s'apaga)
      const len = ctx.sampleRate * 1.3, b = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
      const conv = ctx.createConvolver(); conv.buffer = b; rev = ctx.createGain(); rev.gain.value = .22; rev.connect(conv).connect(out);
      return true;
    } catch (e) { return false; }
  }
  const T = () => ctx.currentTime;
  function env(g, t, a, peak, d) { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + d); }
  function voice(type, f, t, a, peak, d, wet = .6, detune = 0) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); o.detune.value = detune;
    env(g, t, a, peak, d); o.connect(g); g.connect(out); if (wet) { const s = ctx.createGain(); s.gain.value = wet; g.connect(s).connect(rev); }
    o.start(t); o.stop(t + a + d + .05); return o;
  }
  // campaneta: fonamental + parcials inharmònics que s'apaguen abans
  function bell(f, t, v = .16, d = .6) {
    voice('sine', f, t, .004, v, d);
    voice('sine', f * 2.01, t, .003, v * .42, d * .55);
    voice('sine', f * 3.98, t, .002, v * .16, d * .3);
    voice('triangle', f, t, .004, v * .25, d * .4, .3, 4);
  }
  function noise(t, d, f, q, v, type = 'bandpass') {
    const n = ctx.createBuffer(1, ctx.sampleRate * d, ctx.sampleRate), ch = n.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    const s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = n; fl.type = type; fl.frequency.value = f; fl.Q.value = q; env(g, t, .002, v, d);
    s.connect(fl).connect(g).connect(out); s.start(t); s.stop(t + d + .02);
  }
  function sparkle(t, n = 5, base = 2093, v = .05) {
    const sc = [1, 1.125, 1.25, 1.5, 1.667, 2];
    for (let i = 0; i < n; i++) voice('sine', base * sc[(Math.random() * sc.length) | 0] * (Math.random() < .5 ? 1 : 2), t + i * .045 + Math.random() * .02, .002, v, .18, .9);
  }
  const run = fn => () => { if (!enabled()) return; if (!init()) return; try { fn(T()); } catch (e) { } };
  return {
    // tocar un botó: «pop» curt i suau
    tap: run(t => { const o = voice('sine', 880, t, .002, .09, .07, .1); o.frequency.exponentialRampToValueAtTime(520, t + .07); }),
    // encert: dues campanetes que pugen + espurnes
    ok: run(t => { bell(1318.5, t, .15, .45); bell(1975.5, t + .09, .15, .7); sparkle(t + .14, 4, 2637, .035); }),
    // error: dues notes greus i suaus que baixen (no fa por)
    ko: run(t => {
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900; f.connect(out);
      [[311, 0], [233, .13]].forEach(([fr, dt]) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(fr, t + dt); o.frequency.exponentialRampToValueAtTime(fr * .94, t + dt + .22); env(g, t + dt, .01, .2, .24); o.connect(g).connect(f); o.start(t + dt); o.stop(t + dt + .3); });
    }),
    // diamants: «bling» de moneda brillant
    coin: run(t => { bell(1975.5, t, .12, .25); bell(2637, t + .06, .13, .6); noise(t, .08, 7000, 1.2, .025, 'highpass'); sparkle(t + .1, 3, 3136, .03); }),
    // final de lliçó / premi: arpegi de campanetes, acord i pluja d'espurnes
    win: run(t => {
      [523.3, 659.3, 784, 1046.5, 1318.5].forEach((f, i) => bell(f, t + i * .085, .13, .5));
      [523.3, 659.3, 784].forEach(f => { voice('triangle', f, t + .45, .06, .05, 1.1, .8); voice('sine', f * 2, t + .45, .06, .04, 1.2, .8, 5); });
      bell(2093, t + .47, .1, 1.2); sparkle(t + .5, 9, 2093, .04);
    }),
    // compte enrere: cop de fusta
    tick: run(t => { noise(t, .045, 1900, 6, .22); voice('sine', 1200, t, .001, .04, .03, 0); }),
    // salt del company: molla
    boing: run(t => { const o = voice('sine', 190, t, .005, .14, .32, .25); o.frequency.exponentialRampToValueAtTime(620, t + .09); o.frequency.exponentialRampToValueAtTime(330, t + .3);
      const l = ctx.createOscillator(), lg = ctx.createGain(); l.frequency.value = 18; lg.gain.value = 22; l.connect(lg).connect(o.frequency); l.start(t); l.stop(t + .35); })
  };
}
