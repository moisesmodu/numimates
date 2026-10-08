/* Tech 3D · Nivell 2 · unitat 1 · animacions de teoria (TANI). Dibuixos propis de Numi. */
Object.assign(TANI, (() => {
  const line = (y, txt, t, col = '#E8EEFF') => `<g ${tA(t, 'ta-in')}><text x="22" y="${y}" class="tat s" style="font-family:ui-monospace,Menlo,Consolas,monospace" fill="${col}">${txt}</text></g>`;
  return {
    // el programa és la recepta: cada línia fa aparèixer una peça del model
    m3recipe() {
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><rect x="10" y="22" width="150" height="156" rx="14" fill="#14204A"/>
        ${line(56, `${L('cub', 'cubo')}(60, 30, 6)`, .2)}${line(92, `${L('mou', 'mueve')}(30, 15, 6)`, 1.4, '#C9B6FF')}${line(112, `  ${L('cilindre', 'cilindro')}(12, 30)`, 1.4)}${line(148, `${L('mou', 'mueve')}(30, 15, 42)`, 2.6, '#C9B6FF')}${line(168, `  ${L('esfera', 'esfera')}(14)`, 2.6)}
        <ellipse cx="240" cy="168" rx="60" ry="10" fill="#14204A" opacity=".12"/>
        <g ${tA(.5)}><polygon points="186,150 246,170 296,150 236,132" fill="#B9A7FF"/><polygon points="186,150 246,170 246,177 186,157" fill="#7C5CFF"/><polygon points="246,170 296,150 296,157 246,177" fill="#5B3FD6"/></g>
        <g ${tA(1.7)}><rect x="234" y="106" width="16" height="45" fill="#2FB36D"/><rect x="242" y="106" width="8" height="45" fill="#23905A"/><ellipse cx="242" cy="106" rx="8" ry="3.5" fill="#7FD6A6"/></g>
        <g ${tA(2.9)}><circle cx="242" cy="93" r="11" fill="#EC5FA8"/><circle cx="238" cy="89" r="3.5" fill="#fff" opacity=".6"/></g>
        <g ${tA(3.6, 'ta-in')}><rect x="174" y="12" width="136" height="28" rx="14" fill="#fff" filter="url(#bwSh)"/><text x="242" y="31" text-anchor="middle" class="tat s">${L('de dalt a baix', 'de arriba abajo')}</text></g>`);
    },
    // PRIMM: predir, executar, investigar, modificar i crear
    m3primm() {
      const st = [[L('Predir', 'Predecir'), '#2F5BEA'], [L('Executar', 'Ejecutar'), '#1FA463'], [L('Investigar', 'Investigar'), '#F08A24'], [L('Modificar', 'Modificar'), '#8B5CF6'], [L('Crear', 'Crear'), '#D63F8C']];
      const pos = [[160, 40], [262, 92], [224, 166], [96, 166], [58, 92]];
      return tSvg(200, `<rect width="320" height="200" rx="20" fill="#F1F2FB"/><circle cx="160" cy="108" r="64" fill="none" stroke="#DCE4FA" stroke-width="6" stroke-dasharray="4 10"/>
        <text x="160" y="104" text-anchor="middle" class="tat b">${L('Llegir', 'Leer')}</text><text x="160" y="124" text-anchor="middle" class="tat s">${L('com un enginyer', 'como un ingeniero')}</text>
        ${st.map(([t, c], i) => `<g ${tA(.3 + i * .7)}><rect x="${pos[i][0] - 50}" y="${pos[i][1] - 16}" width="100" height="32" rx="16" fill="${c}" filter="url(#bwSh)"/><text x="${pos[i][0]}" y="${pos[i][1] + 5}" text-anchor="middle" class="tat w s">${i + 1} · ${t}</text></g>`).join('')}`);
    }
  };
})());
