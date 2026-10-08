{ const c = TECH.find(x => x.id === 'creadors'); delete c.soon;
  c.units[0].s[0].steps = [
    { k: 'stage', ph: 'repte', q: 'Fes que l\'Axo arribi a l\'estrella i ho celebri.|Haz que Axo llegue a la estrella y lo celebre.', proj: stgProj({ bg: 'mar', vars: [['punts', 0]], sprites: [{ ch: 'axo', x: -150, y: -20, code: '@start\nsayt "Hola, soc l\'Axo!|¡Hola, soy Axo!" 1\nrepeat 20 {\n  move 15\n  nextcos\n  wait 0.1\n}\nif (touch Estrella) {\n  cos 3\n  vch punts 1\n}' }, { ch: 'estrella', x: 160, y: -20 }, { ch: 'peix', x: 60, y: 100, code: '@start\nforever {\n  move 4\n  bounce\n}' }, { ch: 'medusa', x: -60, y: 90 }] }),
      goals: [{ g: 'touch', a: 'Axo', b: 'Estrella', t: "L'Axo toca l'estrella|Axo toca la estrella" }, { g: 'say', who: 'Axo', t: "L'Axo saluda|Axo saluda" }], bonus: [{ g: 'var', n: 'punts', v: 1, t: 'Suma un punt|Suma un punto' }], dur: 6, add: true, bgs: true, vars: true },
    { k: 'feel', ph: 'tanca' }
  ];
}
