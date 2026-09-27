/* ===== Temari de primària (1r a 6è) =====
   Cada lliçó: [títol, [habilitats], nivell]. Una habilitat pot portar paràmetre: 'g.add:20'. */
const UCOL = ['#36A9E1', '#3CC46A', '#FF9A3C', '#FF6FA3', '#8A4FB0', '#22B5A0', '#E08E00', '#FF5A5F'];
const U = (title, desc, guide, lessons) => ({ title, desc, guide, lessons: lessons.map(([t, sk, L]) => ({ t, sk, L })) });

const COURSES = [
  { id: 'c1', n: 1, name: '1r', long: '1r de primària', emoji: '🐣', units: [
    U('Números fins al 20', 'Comptar, ordenar i comparar.', 'numi', [
      ['Comptem fins a 10', ['g.count:10'], 1], ['Comptem fins a 20', ['g.count:20', 'g.next:20'], 2], ['Abans i després', ['g.next:20', 'g.cmp:20'], 2],
      ['Desenes i unitats', ['g.blocks:20', 'g.cmp:20'], 2], ['Més gran o més petit', ['g.cmp:20', 'g.next:20', 'g.count:20'], 3]]),
    U('Sumes fins al 20', 'Ajuntar i afegir.', 'numi', [
      ['Sumes fins a 10', ['g.add:10'], 1], ['Més sumes fins a 10', ['g.add:10'], 2], ['Sumes fins al 20', ['g.add:20'], 2],
      ['Fem desena', ['g.add:20'], 3], ['El número amagat', ['g.add:20'], 5]]),
    U('Restes fins al 20', 'Treure i comptar el que queda.', 'guida', [
      ['Treure fins a 10', ['g.sub:10'], 1], ['Restes fins a 10', ['g.sub:10'], 2], ['Restes fins al 20', ['g.sub:20'], 2],
      ['Passem la desena', ['g.sub:20'], 3], ['Dobles i meitats', ['g.double:10', 'g.sub:20'], 2]]),
    U('Números fins al 100', 'Desenes, unitats i números grans.', 'vuit', [
      ['Les desenes', ['g.blocks:100', 'g.seq:tens'], 1], ['Llegir números', ['g.words:100', 'g.blocks:100'], 2], ['Abans i després', ['g.next:100'], 2],
      ['Comparar', ['g.cmp:100'], 3], ['Sumes de desenes', ['g.add:100', 'g.cmp:100'], 1]]),
    U('Formes i patrons', 'Figures, colors i sèries.', 'guida', [
      ['Les formes', ['g.shape:simple'], 1], ['Patrons de colors', ['l.pattern'], 1], ['De 2 en 2', ['g.seq:2'], 1],
      ['Costats i vèrtexs', ['g.shape:simple'], 3], ['Sèries i patrons', ['l.pattern', 'g.seq:tens', 'g.seq:2'], 2]]),
    U('Mesures i diners', 'Hores, centímetres i euros.', 'tuga', [
      ['Les hores en punt', ['g.clock:o'], 1], ['Comptem euros', ['g.coins:10'], 1], ['Mesurem amb el regle', ['g.ruler:10'], 1],
      ['Més euros', ['g.coins:20'], 2], ['Hores i mesures', ['g.clock:o', 'g.ruler:15', 'g.coins:20'], 2]]),
    U('Problemes', 'Llegeix i pensa: sumo o resto?', 'flama', [
      ['Problemes de sumar', ['g.prob:add'], 1], ['Problemes de restar', ['g.prob:less'], 1], ['Sumar o restar?', ['g.prob:add', 'g.prob:less'], 2],
      ['Problemes fins al 20', ['g.prob:add', 'g.prob:less'], 3], ['Petits detectius', ['g.prob:add', 'g.prob:less', 'g.prob:cmp'], 3]])
  ] },
  { id: 'c2', n: 2, name: '2n', long: '2n de primària', emoji: '🐥', units: [
    U('Números fins al 1.000', 'Centenes, desenes i unitats.', 'numi', [
      ['Les centenes', ['g.blocks:1000'], 1], ['Llegir i escriure', ['g.words:1000', 'g.blocks:1000'], 2], ['Valor de posició', ['n.place:3', 'n.decomp:3'], 1],
      ['Comparar', ['g.cmp:1000', 'g.next:1000'], 3], ['Ordenar', ['n.order:3', 'g.cmp:1000'], 3]]),
    U('Sumes i restes', 'Càlcul mental i portar-ne.', 'numi', [
      ['Sumes de cap', ['g.add:100'], 2], ['Restes de cap', ['g.sub:100'], 2], ['Sumes portant-ne', ['g.add:100'], 4],
      ['Restes portant-ne', ['g.sub:100'], 4], ['El número amagat', ['g.add:100', 'g.sub:100'], 5]]),
    U('Comencem a multiplicar', 'Grups iguals i primeres taules.', 'vuit', [
      ['Sumes repetides', ['g.repeat'], 1], ['Files i columnes', ['m.array'], 1], ['Taules del 2 i del 10', ['g.table:2-10'], 1],
      ['Taula del 5', ['g.table:5', 'g.table:2-10'], 2], ['Dobles i meitats', ['g.double:50'], 2]]),
    U('Lògica', 'Sèries, parells i balances.', 'guida', [
      ['Sèries', ['g.seq:5', 'l.pattern'], 2], ['Parells i senars', ['l.odd'], 1], ['Sèries amb salts', ['l.series'], 2],
      ['Balances', ['l.balance'], 1], ['Enigmes', ['l.balance', 'l.series', 'l.odd'], 2]]),
    U('Mesures i formes', 'Rellotge, regle, euros i figures.', 'tuga', [
      ['Hores i mitges', ['g.clock:h'], 1], ['El regle', ['g.ruler:15'], 3], ['Metres i centímetres', ['me.units'], 2],
      ['Euros', ['g.coins:50'], 2], ['Les figures', ['g.shape:all'], 3]]),
    U('Problemes', 'Llegeix, pensa i resol.', 'flama', [
      ['Problemes de sumar', ['p.add'], 1], ['Problemes de restar', ['g.prob:sub', 'p.add'], 3], ['Problemes de multiplicar', ['g.prob:mul'], 1],
      ['Quin càlcul faig?', ['p.add', 'g.prob:mul', 'g.prob:sub'], 3], ['Grans detectius', ['p.add', 'g.prob:mul', 'g.prob:sub'], 4]])
  ] },
  { id: 'c3', n: 3, name: '3r', long: '3r de primària', emoji: '🦊', units: [
    U('Números fins al 9.999', 'Unitats de miler i valor de posició.', 'numi', [
      ['Unitats de miler', ['n.place:4', 'n.decomp:4'], 2], ['Llegir i escriure', ['n.words:4'], 2], ['Comparar i ordenar', ['n.compare:4', 'n.order:4'], 3],
      ['Arrodonir', ['n.round:4'], 4], ['Tot plegat', ['n.place:4', 'n.compare:4', 'n.words:4'], 3]]),
    U('Sumes i restes', 'Portant-ne i càlcul mental.', 'numi', [
      ['Sumes portant-ne', ['a.add'], 3], ['Restes portant-ne', ['a.sub'], 3], ['Càlcul mental', ['a.add', 'a.sub'], 2],
      ['El número amagat', ['a.missing'], 4], ['Estimacions', ['a.estimate', 'a.add'], 4]]),
    U('Les taules', 'De la taula del 2 a la del 10.', 'vuit', [
      ['Taules del 2, 5 i 10', ['m.table', 'm.array'], 1], ['Taules del 3, 4 i 6', ['m.table', 'm.array'], 2], ['Taules del 7, 8 i 9', ['m.table'], 3],
      ['Totes les taules', ['m.table', 'm.missing'], 4], ['Per 10 i per 100', ['m.by10'], 4]]),
    U('Dividir', 'Repartir a parts iguals.', 'vuit', [
      ['Repartir', ['d.share'], 1], ['Divisions fàcils', ['d.table', 'd.rel'], 2], ['Més divisions', ['d.table'], 3],
      ['Què sobra?', ['d.rem'], 4], ['Multiplicar i dividir', ['d.rel', 'm.table'], 3]]),
    U('Fraccions', 'Meitats, terços i quarts.', 'tuga', [
      ['Meitats i quarts', ['f.pie'], 1], ['Terços i més', ['f.pie'], 2], ['Llegir fraccions', ['f.read'], 2],
      ['La meitat de…', ['f.of'], 3], ['Fraccions', ['f.pie', 'f.read', 'f.of'], 3]]),
    U('Mesures', 'Hores, pes, capacitat i diners.', 'tuga', [
      ["Quarts d'hora", ['me.clock'], 2], ['Rellotge de 5 en 5', ['me.clock'], 3], ['Pes i capacitat', ['me.units'], 4],
      ['Diners', ['me.money'], 4], ['Perímetres', ['me.perim', 'me.shape'], 3]]),
    U('Lògica i problemes', 'Pensa com un detectiu.', 'flama', [
      ['Sèries', ['l.series'], 3], ['Balances', ['l.balance'], 3], ['Problemes', ['p.add', 'p.mul'], 2],
      ['Problemes de dividir', ['p.div'], 3], ['Detectius', ['p.add', 'p.mul', 'p.div', 'l.balance'], 3]])
  ] },
  { id: 'c4', n: 4, name: '4t', long: '4t de primària', emoji: '🐙', units: [
    U('Els grans números', 'Llegeix, escriu i compara fins al 99.999.', 'numi', [
      ['Unitats, desenes i centenes', ['n.place', 'n.decomp'], 1], ['Fins al 9.999', ['n.place', 'n.words', 'n.decomp'], 2], ['Fins al 99.999', ['n.place', 'n.words', 'n.next'], 3],
      ['Comparar i ordenar', ['n.compare', 'n.order'], 4], ['Arrodonir', ['n.round', 'n.compare'], 5]]),
    U('Sumes i restes', 'Càlcul mental, portar-ne i el número amagat.', 'numi', [
      ['Sumes de cap', ['a.add'], 1], ['Restes de cap', ['a.sub', 'a.add'], 2], ['Portant-ne', ['a.add', 'a.sub'], 3],
      ['El número amagat', ['a.missing', 'a.estimate'], 4], ['Números grans', ['a.add', 'a.sub', 'a.missing'], 5]]),
    U('Multiplicar', 'Les taules, per 10 i per 100 i multiplicacions grans.', 'vuit', [
      ['Taules del 2, 5 i 10', ['m.table', 'm.array'], 1], ['Taules del 3, 4 i 6', ['m.table', 'm.array'], 2], ['Taules del 7, 8 i 9', ['m.table', 'm.missing'], 3],
      ['Per 10 i per 100', ['m.by10', 'm.missing'], 4], ['Multiplicacions grans', ['m.big', 'm.table'], 5]]),
    U('Dividir', 'Repartir a parts iguals i saber què sobra.', 'vuit', [
      ['Repartir a parts iguals', ['d.share'], 1], ['Divisió i multiplicació', ['d.table', 'd.rel'], 2], ['Divisions de les taules', ['d.table', 'd.rel'], 3],
      ['Què sobra?', ['d.rem'], 4], ['Dividir números grans', ['d.big', 'd.table'], 5]]),
    U('Lògica', 'Sèries, balances i endevinalles de números.', 'guida', [
      ['Sèries i patrons', ['l.series', 'l.pattern'], 1], ['Parells i senars', ['l.odd', 'l.series'], 2], ['Balances misterioses', ['l.balance', 'l.series'], 3],
      ['Endevinalles', ['l.riddle', 'l.balance'], 4], ['Detectius de números', ['l.series', 'l.riddle', 'l.balance'], 5]]),
    U('Fraccions', 'Meitats, terços, quarts… i molt més!', 'tuga', [
      ['Meitats i quarts', ['f.pie'], 1], ['Llegir fraccions', ['f.read', 'f.pie'], 2], ["La fracció d'un número", ['f.of'], 3],
      ['Comparar fraccions', ['f.cmp', 'f.of'], 4], ['Mestres de les fraccions', ['f.pie', 'f.read', 'f.of', 'f.cmp'], 5]]),
    U('Mesures i formes', 'Rellotges, metres, diners i figures.', 'tuga', [
      ['Quina hora és?', ['me.clock'], 1], ['Metres i centímetres', ['me.units', 'me.clock'], 2], ['Formes i perímetres', ['me.shape', 'me.perim'], 3],
      ['Diners i mesures', ['me.money', 'me.units'], 4], ['Quarts i durades', ['me.clock', 'me.perim', 'me.money'], 5]]),
    U('Problemes', 'Llegeix, pensa i resol com un detectiu.', 'flama', [
      ['Sumar i restar', ['p.add'], 1], ['Multiplicar', ['p.mul', 'p.add'], 2], ['Dividir', ['p.div', 'p.mul'], 3],
      ['Dos passos', ['p.two'], 4], ['Grans reptes', ['p.two', 'p.big'], 5]])
  ] },
  { id: 'c5', n: 5, name: '5è', long: '5è de primària', emoji: '🐢', units: [
    U('Els grans números', 'Fins al milió i més enllà.', 'numi', [
      ['Fins al milió', ['n.place:6', 'n.words:6'], 3], ['Llegir milions', ['n.words:7', 'n.place:7'], 3], ['Comparar i ordenar', ['n.compare:6', 'n.order:6'], 4],
      ['Arrodonir', ['n.round:6'], 5], ['Tot plegat', ['n.place:7', 'n.compare:6', 'n.round:6'], 5]]),
    U('Nombres decimals', 'Dècimes, centèsimes i la coma.', 'numi', [
      ['Dècimes i centèsimes', ['dec.read'], 1], ['Comparar decimals', ['dec.cmp'], 2], ['Ordenar decimals', ['dec.order'], 3],
      ['Sumar i restar', ['dec.add'], 3], ['Per 10, 100 i 1.000', ['dec.x10'], 4]]),
    U('Multiplicar i dividir', 'Operacions grans i combinades.', 'vuit', [
      ['Multiplicacions grans', ['m.big'], 5], ['Dividir per una xifra', ['d.big'], 5], ['Dividir per dues xifres', ['div2'], 3],
      ['Operacions combinades', ['ops'], 1], ['Tot plegat', ['m.big', 'div2', 'ops'], 4]]),
    U('Múltiples i divisors', 'Taules, divisors i nombres primers.', 'guida', [
      ['Múltiples', ['mult.mul'], 1], ['Divisors', ['mult.div'], 2], ['Nombres primers', ['mult.prime'], 3],
      ['Criteris de divisibilitat', ['mult.crit'], 3], ['Tot plegat', ['mult.mul', 'mult.div', 'mult.prime', 'mult.crit'], 4]]),
    U('Fraccions', 'Equivalents, sumes i simplificar.', 'tuga', [
      ['Fraccions equivalents', ['fr.eq'], 2], ['Sumar i restar fraccions', ['fr.addS'], 2], ["Fracció d'un número", ['f.of'], 5],
      ['Comparar', ['f.cmp'], 5], ['Simplificar', ['fr.simp'], 2]]),
    U('Geometria', 'Angles, àrees i perímetres.', 'tuga', [
      ['Tipus d\'angles', ['geo.angle'], 1], ['Graus', ['geo.angle'], 3], ['Àrea del rectangle', ['geo.area'], 2],
      ['Àrea del triangle', ['geo.area'], 5], ['Perímetres i àrees', ['geo.area', 'me.perim'], 4]]),
    U('Problemes', 'Diners, decimals i dos passos.', 'flama', [
      ['Problemes amb decimals', ['p.dec'], 2], ['Dos passos', ['p.two'], 4], ['Grans reptes', ['p.big'], 5],
      ['Diners', ['p.dec'], 4], ['Mestres dels problemes', ['p.two', 'p.big', 'p.dec'], 5]])
  ] },
  { id: 'c6', n: 6, name: '6è', long: '6è de primària', emoji: '🐉', units: [
    U('Nombres enters', 'Negatius, temperatures i la recta.', 'numi', [
      ['Temperatures', ['int'], 1], ['Comparar enters', ['int'], 2], ['Puja i baixa', ['int'], 3],
      ['Sumar i restar enters', ['int'], 4], ['Tot plegat', ['int'], 5]]),
    U('Potències i arrels', 'Quadrats, cubs i arrels.', 'vuit', [
      ['Quadrats', ['pow'], 1], ['Cubs', ['pow'], 2], ['Potències de 10', ['pow'], 3],
      ['Arrels quadrades', ['pow'], 4], ['Tot plegat', ['pow', 'ops'], 5]]),
    U('Decimals i operacions', 'Multiplicar, dividir i jerarquia.', 'numi', [
      ['Sumar i restar', ['dec.add'], 4], ['Multiplicar decimals', ['dec.mul'], 1], ['Dividir decimals', ['dec.mul'], 3],
      ['Per 10, 100 i 1.000', ['dec.x10'], 5], ['Jerarquia de les operacions', ['ops'], 4]]),
    U('Fraccions', 'Simplificar i sumar amb diferent denominador.', 'guida', [
      ['Simplificar', ['fr.simp'], 3], ['Sumar amb diferent denominador', ['fr.addD'], 2], ['Sumar i restar', ['fr.addD'], 4],
      ["Fracció d'un número", ['f.of'], 5], ['Tot plegat', ['fr.simp', 'fr.addD', 'fr.eq'], 5]]),
    U('Percentatges i proporcions', 'Descomptes, receptes i escales.', 'flama', [
      ['El 50%, el 25% i el 10%', ['pct'], 1], ['Més percentatges', ['pct'], 3], ['Descomptes', ['pct'], 5],
      ['Proporcionalitat', ['prop'], 2], ['Escales i receptes', ['prop', 'pct'], 4]]),
    U('Estadística', 'Gràfics, moda, mitjana i rang.', 'tuga', [
      ['Llegir gràfics', ['stat'], 1], ['La moda', ['stat'], 2], ['La mitjana', ['stat'], 3],
      ['El rang', ['stat'], 4], ['Tot plegat', ['stat'], 5]]),
    U('Geometria i volum', 'Angles, àrees i cubs.', 'tuga', [
      ['Angles del triangle', ['geo.angle'], 5], ['Àrees', ['geo.area'], 5], ['Comptar cubs', ['vol'], 1],
      ['Volum del prisma', ['vol'], 4], ['Mestres de la geometria', ['vol', 'geo.area', 'geo.angle'], 5]]),
    U('Grans problemes', 'El repte final de primària!', 'flama', [
      ['Problemes amb decimals', ['p.dec'], 5], ['Dos passos', ['p.two'], 5], ['Grans reptes', ['p.big'], 5],
      ['Proporcions', ['prop'], 5], ['Mestres de primària', ['p.dec', 'p.big', 'pct', 'prop'], 5]])
  ] }
];
COURSES.forEach(c => c.units.forEach((u, i) => { u.id = `${c.id}-${i + 1}`; u.color = UCOL[i % UCOL.length]; }));
