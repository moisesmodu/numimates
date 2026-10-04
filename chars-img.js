/* Personatges il·lustrats (img/chars) per a les pàgines que no carreguen pro.js: la presentació i els imprimibles de
   Numi Tech. Fa el mateix que pro.js amb charSVG (mateixes imatges i expressions), així el professor/a veu a la pissarra
   els mateixos personatges que l'alumne/a a l'app. */
(function () {
  if (typeof charSVG !== 'function' || typeof PRO !== 'undefined') return;
  const CH = ['numi', 'guida', 'vuit', 'tuga', 'flama', 'estel', 'cavaller'], ACC = ['llacet', 'gorra', 'ulleres', 'barret', 'corona', 'medalla', 'auriculars', 'coronafoc'];
  const base = charSVG;
  charSVG = (id, mood = 'idle', acc, cls = '', lv = 1) => {
    if (!CH.includes(id)) return base(id, mood, acc, cls, lv);
    const a = acc && [acc.head, acc.eyes, acc.neck].find(k => ACC.includes(k));
    const f = a ? `${id}-${a}` : mood === 'happy' ? `${id}-happy` : mood === 'think' || mood === 'sad' ? `${id}-think` : id;
    return `<svg class="char chimg m-${mood} ${cls}" viewBox="0 0 120 120" aria-hidden="true">${lvlDeco(lv, false)}<g class="cb"><image href="img/chars/${f}.webp" x="4" y="4" width="112" height="112"/></g>${lvlDeco(lv, true)}</svg>`;
  };
})();
