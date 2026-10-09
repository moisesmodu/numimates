/* Tech 3D · Nivell 2 · unitat 5 «Bucles i patrons» (p5-1 … p5-4)
   Contingut propi de Numi. Fil narratiu: l'estudi d'enginyeria del Taller de Bit rep l'encàrrec del laboratori de ciències
   de l'institut (un penjador i una gradeta), de la biblioteca i l'hort del barri (un rellotge i unes flors) i de la classe
   de Tecnologia (els engranatges d'un autòmat). Conceptes: «repeteix i de 0 a n» (els dos extrems inclosos), el comptador
   dins dels càlculs (posició = i × pas), bucles niats (graelles, files × columnes), «pas», patrons circulars amb
   gira(0, 0, i * 360 / n) mou(r, 0, 0) i l'engranatge paramètric (z dents, mòdul m, d = m · z).
   · Els noms de les variables que fan servir les comprovacions «param» són iguals en català i en castellà (n, nx, ny, z,
     m, d, h, e, dist): així el mateix programa serveix per a les dues llengües.
   · Si el final d'un bucle és un càlcul amb variables, va entre parèntesis: repeteix i de 0 a (n - 1). */
Object.assign(TBADGE, {
  p5fila: { id: 'p5fila', ico: '📏', n: 'Mestre/a de les files|Maestro/a de las filas', d: "Has fet files de peces iguals amb un bucle i has calculat el pas i la llargada.|Has hecho filas de piezas iguales con un bucle y has calculado el paso y la longitud." },
  p5graella: { id: 'p5graella', ico: '🧮', n: 'Constructor/a de graelles|Constructor/a de rejillas', d: 'Has fet graelles amb bucles niats i plaques amb molts forats iguals.|Has hecho rejillas con bucles anidados y placas con muchos agujeros iguales.' },
  p5cercle: { id: 'p5cercle', ico: '🌼', n: 'Dissenyador/a de cercles|Diseñador/a de círculos', d: "Has repartit peces en cercle amb angles de 360 / n graus.|Has repartido piezas en círculo con ángulos de 360 / n grados." },
  p5engranatge: { id: 'p5engranatge', ico: '⚙️', n: "Enginyer/a d'engranatges|Ingeniero/a de engranajes", d: "Projecte acabat: un engranatge paramètric que funciona amb qualsevol nombre de dents.|Proyecto terminado: un engranaje paramétrico que funciona con cualquier número de dientes." }
});

COURSE_UNITS[5] = (() => {
  /* ---------- programs de la sessió 1 · Repetir en fila ---------- */
  const COPY4 = `cub(20)
mou(25, 0, 0) cub(20)
mou(50, 0, 0) cub(20)
mou(75, 0, 0) cub(20)`;
  const ROW5 = `repeteix i de 0 a 4 {
  mou(i * 25, 0, 0) cub(20)
}`;
  const PEN6 = `cub(120, 16, 4)
repeteix i de 0 a 5 {
  mou(10 + i * 20, 8, 4) cilindre(8, 30)
}`;
  const PRACK = `n = 6
dist = 20
cub(n * dist, 16, 4)
repeteix i de 0 a (n - 1) {
  mou(dist / 2 + i * dist, 8, 4) cilindre(8, 30)
}`;
  const ROW10 = `repeteix i de 0 a 4 {
  mou(i * 20, 0, 0) cub(10)
}`;
  const STAIR = `repeteix i de 0 a 5 {
  mou(i * 12, 0, 0) cub(12, 30, 8 + i * 8)
}`;
  const FENCE = `repeteix i de 0 a 6 {
  mou(i * 15, 0, 0) cub(4, 4, 30)
}
repeteix k de 0 a 1 {
  mou(0, 1, 10 + k * 12) cub(94, 2, 4)
}`;
  /* ---------- sessió 2 · Graelles ---------- */
  const GRID = `repeteix j de 0 a 2 {
  repeteix i de 0 a 3 {
    mou(i * 25, j * 25, 0) cub(20)
  }
}`;
  const GRID15 = `repeteix j de 0 a 2 {
  repeteix i de 0 a 3 {
    mou(i * 20, j * 20, 0) cub(15)
  }
}`;
  const GRAD = `resta {
  cub(90, 70, 20)
  repeteix j de 0 a 2 {
    repeteix i de 0 a 3 {
      mou(15 + i * 20, 15 + j * 20, 3) cilindre(14, 18)
    }
  }
}`;
  const PASDEMO = `repeteix x de 0 a 60 pas 20 {
  mou(x, 0, 0) cilindre(10, 15)
}`;
  const KEYPAD = `cub(74, 96, 6)
repeteix j de 0 a 3 {
  repeteix i de 0 a 2 {
    mou(6 + i * 22, 6 + j * 22, 6) cub(18, 18, 5)
  }
}`;
  const PILES = `nx = 5
ny = 2
resta {
  cub(nx * 19 + 6, ny * 19 + 6, 24)
  repeteix j de 0 a (ny - 1) {
    repeteix i de 0 a (nx - 1) {
      mou(12.5 + i * 19, 12.5 + j * 19, 4) cilindre(15, 22)
    }
  }
}`;
  const PYR = `repeteix j de 0 a 3 {
  repeteix i de 0 a (3 - j) {
    mou(j * 10 + i * 20, 0, j * 20) cub(20)
  }
}`;
  /* ---------- sessió 3 · Patrons circulars ---------- */
  const ORB6 = `n = 6
repeteix i de 0 a (n - 1) {
  gira(0, 0, i * 360 / n) mou(25, 0, 0) cilindre(10, 8)
}`;
  const ORB6L = `repeteix i de 0 a 5 {
  gira(0, 0, i * 60) mou(25, 0, 0) cilindre(10, 8)
}`;
  const CLOCK = `cilindre(80, 4)
repeteix i de 0 a 11 {
  gira(0, 0, i * 30) mou(30, -2, 4) cub(8, 4, 3)
}`;
  const FLOWER = `n = 5
cilindre(14, 6)
repeteix i de 0 a (n - 1) {
  gira(0, 0, i * 360 / n) mou(14, 0, 0) escala(1.6, 1, 1) cilindre(12, 4)
}`;
  const WHEEL = `tub(70, 6, 5)
cilindre(14, 6)
repeteix i de 0 a 7 {
  gira(0, 0, i * 45) mou(0, -2, 0) cub(32, 4, 6)
}`;
  const FLANGE = `resta {
  cilindre(60, 5)
  mou(0, 0, -1) cilindre(14, 7)
  repeteix i de 0 a 5 {
    gira(0, 0, i * 60) mou(21, 0, -1) cilindre(7, 7)
  }
}`;
  /* ---------- sessió 4 · L'engranatge (z dents, mòdul m, d = m · z) ---------- */
  const GEARB = `cilindre(36, 6)
repeteix i de 0 a 11 {
  gira(0, 0, i * 30) mou(15, -2.25, 0) cub(6, 4.5, 6)
}`;
  const GEAR12 = `resta {
  uneix {
    cilindre(36, 6)
    repeteix i de 0 a 11 {
      gira(0, 0, i * 30) mou(15, -2.25, 0) cub(6, 4.5, 6)
    }
  }
  mou(0, 0, -1) cilindre(6, 8)
}`;
  const GBODY = `resta {
  uneix {
    cilindre(d, h)
    repeteix i de 0 a (z - 1) {
      gira(0, 0, i * 360 / z) mou(d / 2 - m, -m * 0.75, 0) cub(2 * m, 1.5 * m, h)
    }
  }
  mou(0, 0, -1) cilindre(e, h + 2)
}`;
  // capçalera amb comentaris en les dues llengües (els comentaris van en una línia a part)
  const GC = [["z: nombre de dents · m: mòdul (la mida de cada dent)", "z: número de dientes · m: módulo (el tamaño de cada diente)"], ["h: gruix · e: diàmetre de l'eix · d: diàmetre primitiu", "h: grosor · e: diámetro del eje · d: diámetro primitivo"]];
  const gh = (z, li) => `// ${GC[0][li]}\n// ${GC[1][li]}\nz = ${z}\nm = 3\nh = 6\ne = 6\nd = m * z`;
  const BI = (ca, es) => ca + '|' + es;
  const GEARP = BI(gh(12, 0) + '\n' + GBODY, gh(12, 1) + '\n' + GBODY);
  const GZ = z => BI(gh(z, 0) + '\n' + GBODY, gh(z, 1) + '\n' + GBODY);
  const GEARP20 = BI(gh(20, 0) + '\n' + GBODY, gh(20, 1) + '\n' + GBODY);
  const GWBODY = `resta {
  uneix {
    cilindre(d, h)
    repeteix i de 0 a (z - 1) {
      gira(0, 0, i * 360 / z) mou(d / 2 - m, -m * 0.75, 0) cub(2 * m, 1.5 * m, h)
    }
  }
  mou(0, 0, -1) cilindre(e, h + 2)
  repeteix k de 0 a 3 {
    gira(0, 0, k * 90 + 45) mou(d / 4 + 2, 0, -1) cilindre(d / 5, h + 2)
  }
}`;
  const GEARW = BI(gh(20, 0) + '\n' + GWBODY, gh(20, 1) + '\n' + GWBODY);
  const GSTART = BI(gh(12, 0) + '\ncilindre(d, h)', gh(12, 1) + '\ncilindre(d, h)');
  const GCRANK = `resta {
  uneix {
    cilindre(d, h)
    repeteix i de 0 a (z - 1) {
      gira(0, 0, i * 360 / z) mou(d / 2 - m, -m * 0.75, 0) cub(2 * m, 1.5 * m, h)
    }
  }
  mou(0, 0, -1) cilindre(e, h + 2)
}
mou(d / 4, 0, h) cilindre(6, 10)`;
  const GEARFREE = BI(gh(16, 0) + '\n' + GCRANK, gh(16, 1) + '\n' + GCRANK);
  const PIN8 = `resta {
  uneix {
    cilindre(24, 6)
    repeteix i de 0 a 7 {
      gira(0, 0, i * 45) mou(9, -2.25, 0) cub(6, 4.5, 6)
    }
  }
  mou(0, 0, -1) cilindre(6, 8)
}`;
  const WH16 = `mou(36, 0, 0) gira(0, 0, 11.25) resta {
  uneix {
    cilindre(48, 6)
    repeteix i de 0 a 15 {
      gira(0, 0, i * 22.5) mou(21, -2.25, 0) cub(6, 4.5, 6)
    }
  }
  mou(0, 0, -1) cilindre(6, 8)
}`;
  const TWO = BI(`// pinyó: 8 dents\n${PIN8}\n// roda: 16 dents, a 36 mm\n${WH16}`, `// piñón: 8 dientes\n${PIN8}\n// rueda: 16 dientes, a 36 mm\n${WH16}`);
  const PIN8C = BI(`// pinyó: 8 dents\n${PIN8}`, `// piñón: 8 dientes\n${PIN8}`);
  const ck = (k, o) => ({ k, ...o });
  return {
  t: 'Bucles i patrons|Bucles y patrones', d: 'Repetir amb codi|Repetir con código', color: '#D63F8C',
  s: [
    /* =================================================================== p5-1 */
    { id: 'p5-1', t: 'Repetir en fila|Repetir en fila', min: 40, badge: 'p5fila',
      learn: ["<code>repeteix i de 0 a 4 { … }</code> fa el bloc 5 vegades, i el comptador i val 0, 1, 2, 3 i 4 (els dos extrems hi compten).|<code>repite i de 0 a 4 { … }</code> hace el bloque 5 veces, y el contador i vale 0, 1, 2, 3 y 4 (los dos extremos cuentan).",
        "Amb <code>mou(i * pas, 0, 0)</code> cada còpia surt un pas més enllà: la posició depèn del comptador.|Con <code>mueve(i * paso, 0, 0)</code> cada copia sale un paso más allá: la posición depende del contador.",
        'Còpies = final − inici + 1, i la llargada d\'una fila és (còpies − 1) × pas + l\'amplada d\'una peça.|Copias = final − inicio + 1, y la longitud de una fila es (copias − 1) × paso + la anchura de una pieza.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Després de <code>mida = 20</code> i <code>mida = mida + 5</code>, quant val <code>mida</code>?|Después de <code>medida = 20</code> y <code>medida = medida + 5</code>, ¿cuánto vale <code>medida</code>?', opts: ['25|25', '20|20', '5|5'], a: 0,
          ex: "La segona línia agafa el valor que tenia (20), hi suma 5 i el torna a guardar a la mateixa variable.|La segunda línea coge el valor que tenía (20), le suma 5 y lo vuelve a guardar en la misma variable." },
        { k: 'm3predict', ph: 'recorda', q: 'Recorda les expressions. <b>Quin model fa?</b>|Recuerda las expresiones. <b>¿Qué modelo hace?</b>', prog: 'a = 10\ncub(a * 3, a, a / 2)',
          opts: [{ prog: 'cub(30, 10, 5)' }, { prog: 'cub(10, 30, 5)' }, { prog: 'cub(30, 10, 20)' }], a: 0,
          ex: 'a * 3 = 30 mm d\'amplada, a = 10 de fondària i a / 2 = 5 d\'alçada: una barra baixa i llarga.|a * 3 = 30 mm de anchura, a = 10 de fondo y a / 2 = 5 de altura: una barra baja y larga.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'estudi', title: 'Moltes peces iguals|Muchas piezas iguales',
          t: "El laboratori de ciències de l'institut ens fa un encàrrec: un <b>penjador per a 6 bates</b> i, més endavant, una gradeta per a tubs d'assaig. Les pinces del penjador són iguals i estan a la mateixa distància… Les podríem escriure una per una, però i si després en volen 10? O 30? Avui farem que el programa <b>repeteixi</b> per nosaltres: els <b>bucles</b>.|El laboratorio de ciencias del instituto nos hace un encargo: un <b>colgador para 6 batas</b> y, más adelante, una gradilla para tubos de ensayo. Las pinzas del colgador son iguales y están a la misma distancia… Podríamos escribirlas una por una, pero ¿y si después quieren 10? ¿O 30? Hoy haremos que el programa <b>repita</b> por nosotros: los <b>bucles</b>." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El problema|El problema', t: 'Copiar i enganxar no escala|Copiar y pegar no escala', anim: 'p5copy',
            x: "En aquestes quatre línies només canvia <b>un número</b>, i sempre de la mateixa manera: 0, 25, 50, 75 (cada vegada 25 més). Quan hi ha un <b>patró</b> així, el pot escriure un <b>bucle</b>: una sola instrucció que el programa repeteix tantes vegades com vulguem.|En estas cuatro líneas solo cambia <b>un número</b>, y siempre de la misma manera: 0, 25, 50, 75 (cada vez 25 más). Cuando hay un <b>patrón</b> así, lo puede escribir un <b>bucle</b>: una sola instrucción que el programa repite tantas veces como queramos.",
            tip: 'Si per fer un canvi n\'has de fer deu d\'iguals, el teu codi demana un bucle.|Si para hacer un cambio tienes que hacer diez iguales, tu código pide un bucle.' },
          { k: 'Bucle|Bucle', t: 'repeteix i de 0 a 4 { … }|repite i de 0 a 4 { … }', media: { k: 'model', prog: ROW5 },
            x: "El que hi ha entre les claus es fa <b>una vegada per a cada valor</b> del comptador <code>i</code>: 0, 1, 2, 3 i 4. Els <b>dos extrems hi compten</b>: de 0 a 4 són 5 voltes, i per això surten 5 cubs.|Lo que hay entre las llaves se hace <b>una vez para cada valor</b> del contador <code>i</code>: 0, 1, 2, 3 y 4. Los <b>dos extremos cuentan</b>: de 0 a 4 son 5 vueltas, y por eso salen 5 cubos.",
            tip: 'Nombre de còpies = final − inici + 1. De 0 a 4: 4 − 0 + 1 = 5.|Número de copias = final − inicio + 1. De 0 a 4: 4 − 0 + 1 = 5.' },
          { k: 'Comptador|Contador', t: 'El comptador dins del càlcul|El contador dentro del cálculo', anim: 'p5count',
            x: "A cada volta, <code>i</code> val un número diferent. Si l'escrivim dins de <code>mou(i * 25, 0, 0)</code>, el càlcul dona 0, 25, 50, 75 i 100: cada cub surt 25 mm més enllà que l'anterior. La posició és <b>i × pas</b>.|En cada vuelta, <code>i</code> vale un número distinto. Si lo escribimos dentro de <code>mueve(i * 25, 0, 0)</code>, el cálculo da 0, 25, 50, 75 y 100: cada cubo sale 25 mm más allá que el anterior. La posición es <b>i × paso</b>." },
          { k: 'Mides|Medidas', t: "El pas, l'espai i la llargada|El paso, el espacio y la longitud", media: { k: 'model', prog: PEN6 },
            x: "El <b>pas</b> és la distància d'un centre al següent: aquí, 20 mm. L'<b>espai</b> entre dues pinces és el pas menys el gruix: 20 − 8 = 12 mm. I compte: 6 pinces deixen només <b>5 espais</b> entre elles, com els pals d'una tanca.|El <b>paso</b> es la distancia de un centro al siguiente: aquí, 20 mm. El <b>espacio</b> entre dos pinzas es el paso menos el grosor: 20 − 8 = 12 mm. Y cuidado: 6 pinzas dejan solo <b>5 espacios</b> entre ellas, como los postes de una valla.",
            tip: "Llargada d'una fila = (còpies − 1) × pas + amplada d'una peça.|Longitud de una fila = (copias − 1) × paso + anchura de una pieza." },
          { k: 'Paràmetres|Parámetros', t: 'Un bucle amb variables|Un bucle con variables', media: { k: 'model', prog: PRACK },
            x: "Amb les variables <code>n</code> (quantes pinces) i <code>dist</code> (el pas), el penjador s'adapta sol: la base fa <code>n * dist</code> i el bucle va de 0 a <code>n − 1</code>. Si el final és un càlcul amb variables, escriu-lo <b>entre parèntesis</b>: <code>repeteix i de 0 a (n - 1)</code>.|Con las variables <code>n</code> (cuántas pinzas) y <code>dist</code> (el paso), el colgador se adapta solo: la base mide <code>n * dist</code> y el bucle va de 0 a <code>n − 1</code>. Si el final es un cálculo con variables, escríbelo <b>entre paréntesis</b>: <code>repite i de 0 a (n - 1)</code>.",
            bad: 'De 0 a n: surten n + 1 pinces (una de més).|De 0 a n: salen n + 1 pinzas (una de más).', good: 'De 0 a (n − 1): surten exactament n pinces.|De 0 a (n − 1): salen exactamente n pinzas.' }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📏', title: 'La tira del bucle|La tira del bucle', t: 'Per parelles, amb una tira de paper, un regle i la fitxa:|Por parejas, con una tira de papel, una regla y la ficha:',
          steps: ["Llegiu el programa de la fitxa: <code>repeteix i de 0 a 5 { mou(i * 15, 0, 0) cub(10) }</code>. Abans de res, aposteu: quants cubs i quants espais hi haurà?|Leed el programa de la ficha: <code>repite i de 0 a 5 { mueve(i * 15, 0, 0) cubo(10) }</code>. Antes de nada, apostad: ¿cuántos cubos y cuántos espacios habrá?",
            'Ompliu la taula: per a cada valor de i, on comença el cub (i × 15) i on acaba (i × 15 + 10).|Rellenad la tabla: para cada valor de i, dónde empieza el cubo (i × 15) y dónde acaba (i × 15 + 10).',
            'Dibuixeu els cubs a la tira amb el regle, en mil·límetres de veritat. Mesureu la llargada total i compareu-la amb el càlcul: 5 × 15 + 10 = 85 mm.|Dibujad los cubos en la tira con la regla, en milímetros de verdad. Medid la longitud total y comparadla con el cálculo: 5 × 15 + 10 = 85 mm.'],
          tip: 'Si la mesura i el càlcul no coincideixen, busqueu a quina fila de la taula us heu equivocat.|Si la medida y el cálculo no coinciden, buscad en qué fila de la tabla os habéis equivocado.' },
        { k: 'm3predict', ph: 'prova', q: 'Llegeix el bucle. <b>Quin model fa?</b>|Lee el bucle. <b>¿Qué modelo hace?</b>', prog: 'repeteix i de 0 a 3 {\n  mou(i * 30, 0, 0) cilindre(10, 20)\n}',
          opts: [{ prog: 'repeteix i de 0 a 3 {\n  mou(i * 30, 0, 0) cilindre(10, 20)\n}' }, { prog: 'repeteix i de 0 a 2 {\n  mou(i * 30, 0, 0) cilindre(10, 20)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(i * 10, 0, 0) cilindre(10, 20)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(0, 0, i * 20) cilindre(10, 20)\n}' }], a: 0,
          ex: 'i val 0, 1, 2 i 3: són 4 cilindres, a x = 0, 30, 60 i 90. Entre un i l\'altre queden 20 mm d\'aire.|i vale 0, 1, 2 y 3: son 4 cilindros, en x = 0, 30, 60 y 90. Entre uno y otro quedan 20 mm de aire.' },
        { k: 'm3predict', ph: 'prova', q: 'Ara el comptador també és dins d\'una <b>mida</b>. Quin model fa?|Ahora el contador también está dentro de una <b>medida</b>. ¿Qué modelo hace?', prog: 'repeteix i de 0 a 3 {\n  mou(i * 15, 0, 0) cub(15, 20, 10 + i * 10)\n}',
          opts: [{ prog: 'repeteix i de 0 a 3 {\n  mou(i * 15, 0, 0) cub(15, 20, 10 + i * 10)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(i * 15, 0, 0) cub(15, 20, 40 - i * 10)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(i * 15, 0, 0) cub(15, 20, 10)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(0, 0, i * 10) cub(15, 20, 10)\n}' }], a: 0,
          ex: "L'alçada és 10 + i × 10: 10, 20, 30 i 40 mm. Cada bloc és més alt que l'anterior i surt 15 mm més a la dreta: una escala que puja.|La altura es 10 + i × 10: 10, 20, 30 y 40 mm. Cada bloque es más alto que el anterior y sale 15 mm más a la derecha: una escalera que sube." },
        { k: 'm3spot', ph: 'investiga', q: "El penjador havia de tenir <b>6 pinces</b>, però en té 7 i una surt fora de la base. Toca la instrucció que falla.|El colgador tenía que tener <b>6 pinzas</b>, pero tiene 7 y una sale fuera de la base. Toca la instrucción que falla.", prog: 'cub(120, 16, 4)\nrepeteix i de 0 a 6! {\n  mou(10 + i * 20, 8, 4) cilindre(8, 30)\n}', target: PEN6,
          ex: 'De 0 a 6 són 7 voltes (6 − 0 + 1). Per tenir 6 pinces, el bucle ha d\'anar de 0 a 5.|De 0 a 6 son 7 vueltas (6 − 0 + 1). Para tener 6 pinzas, el bucle tiene que ir de 0 a 5.' },
        { k: 'm3spot', ph: 'investiga', q: 'Ara el bucle fa 6 voltes, però només es veu <b>una pinça</b>. On és l\'error?|Ahora el bucle da 6 vueltas, pero solo se ve <b>una pinza</b>. ¿Dónde está el error?', prog: 'cub(120, 16, 4)\nrepeteix i de 0 a 5 {\n  mou(10 + 20, 8, 4)! cilindre(8, 30)\n}', target: PEN6,
          ex: 'La x del mou no fa servir i: les 6 pinces surten totes a x = 30, una dins de l\'altra. Ha de ser 10 + i * 20.|La x del mueve no usa i: las 6 pinzas salen todas en x = 30, una dentro de la otra. Tiene que ser 10 + i * 20.' },
        { k: 'move', ph: 'pausa', title: 'El bucle dels salts|El bucle de los saltos', secs: 30,
          t: "Executa amb el cos: <b>repeteix i de 1 a 4 { fes i salts }</b>. Primer 1 salt, després 2, després 3 i després 4. Quants salts has fet en total?|Ejecuta con el cuerpo: <b>repite i de 1 a 4 { haz i saltos }</b>. Primero 1 salto, después 2, después 3 y después 4. ¿Cuántos saltos has hecho en total?" },
        { k: 'm3code', ph: 'repte', text: true, q: 'El teu primer bucle: fes una <b>fila de 5 cubs</b> de 10 mm, amb un pas de 20 mm, com el fantasma.|Tu primer bucle: haz una <b>fila de 5 cubos</b> de 10 mm, con un paso de 20 mm, como el fantasma.', blocks: ['cub', 'mou', 'rep'],
          target: ROW10, checks: [ck('match', { target: ROW10, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 5, max: 5, txt: 'Exactament 5 cubs|Exactamente 5 cubos' }), ck('uses', { b: 'rep' })],
          hint: 'Posa el bloc «repeteix» i, a dins, un «mou» amb el cub. A la x del mou escriu i * 20. De 0 a 4 fa 5 voltes.|Pon el bloque «repite» y, dentro, un «mueve» con el cubo. En la x del mueve escribe i * 20. De 0 a 4 da 5 vueltas.', sol: ROW10 },
        { k: 'm3code', ph: 'repte', text: true, q: "Fes el <b>penjador del laboratori</b>: a sobre de la base, 6 pinces (cilindres de 8 × 30 mm) a x = 10, 30, 50… i y = 8.|Haz el <b>colgador del laboratorio</b>: encima de la base, 6 pinzas (cilindros de 8 × 30 mm) en x = 10, 30, 50… e y = 8.", start: 'cub(120, 16, 4)', blocks: ['cub', 'cil', 'mou', 'rep'],
          target: PEN6, checks: [ck('match', { target: PEN6, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'cyl', min: 6, max: 6, txt: 'Exactament 6 pinces|Exactamente 6 pinzas' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "La primera pinça és a x = 10 i cada una va 20 mm més enllà: x = 10 + i * 20. La z és 4, on acaba la base.|La primera pinza está en x = 10 y cada una va 20 mm más allá: x = 10 + i * 20. La z es 4, donde acaba la base.", sol: PEN6 },
        { k: 'm3code', ph: 'repte', text: true, q: "Fes l'<b>escala</b> del fantasma: 6 esglaons de 12 mm d'ample i 30 de fons; el primer fa 8 mm d'alt i cada un en fa 8 més que l'anterior.|Haz la <b>escalera</b> del fantasma: 6 peldaños de 12 mm de ancho y 30 de fondo; el primero mide 8 mm de alto y cada uno mide 8 más que el anterior.", blocks: ['cub', 'mou', 'rep'],
          target: STAIR, checks: [ck('match', { target: STAIR, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('size', { ax: 'z', v: 48 }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "El comptador va a dos llocs: a la posició (i * 12) i a l'alçada del cub (8 + i * 8).|El contador va a dos sitios: a la posición (i * 12) y a la altura del cubo (8 + i * 8).", sol: STAIR },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Penjador paramètric.</b> El laboratori encara no sap si vol 3, 6 o 9 pinces. Afegeix el bucle perquè el penjador tingui sempre <b>n</b> pinces repartides per la base, i que funcioni amb qualsevol n.|<b>Colgador paramétrico.</b> El laboratorio aún no sabe si quiere 3, 6 o 9 pinzas. Añade el bucle para que el colgador tenga siempre <b>n</b> pinzas repartidas por la base, y que funcione con cualquier n.", start: 'n = 6\ndist = 20\ncub(n * dist, 16, 4)', blocks: ['cub', 'cil', 'mou', 'rep', 'var'], vars: ['n', 'dist'],
          target: PRACK, checks: [ck('count', { t: 'cyl', min: 'n', max: 'n', txt: 'Hi ha exactament n pinces|Hay exactamente n pinzas' }), ck('uses', { b: 'rep' }), ck('one'), ck('size', { ax: 'x', v: 'n * dist' }), ck('param', { v: 'n', vals: [3, 9] })],
          hint: "El bucle va de 0 a (n - 1), amb parèntesis. La primera pinça és a mig pas de la vora: x = dist / 2 + i * dist.|El bucle va de 0 a (n - 1), con paréntesis. La primera pinza está a medio paso del borde: x = dist / 2 + i * dist.", sol: PRACK },
        { k: 'm3code', ph: 'repte', text: true, extra: true, q: "⭐ <b>La tanca de l'hort.</b> Fes 7 pals de 4 × 4 × 30 mm cada 15 mm i, amb un <b>segon bucle</b>, dues travesses de 94 × 2 × 4 mm a z = 10 i z = 22.|⭐ <b>La valla del huerto.</b> Haz 7 postes de 4 × 4 × 30 mm cada 15 mm y, con un <b>segundo bucle</b>, dos travesaños de 94 × 2 × 4 mm en z = 10 y z = 22.", blocks: ['cub', 'mou', 'rep'],
          target: FENCE, checks: [ck('match', { target: FENCE, th: 0.85, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 9, max: 9, txt: '7 pals i 2 travesses|7 postes y 2 travesaños' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "Per què fan 94 mm, les travesses? (7 − 1) × 15 + 4 = 94. El segon bucle va de 0 a 1 i puja 12 mm cada volta: z = 10 + k * 12.|¿Por qué miden 94 mm los travesaños? (7 − 1) × 15 + 4 = 94. El segundo bucle va de 0 a 1 y sube 12 mm cada vuelta: z = 10 + k * 12.", sol: FENCE },
        { k: 'm3free', ph: 'crea', text: true, q: '<b>Dissenya una peça amb una fila.</b> Un penjador de claus, un porta-pinzells, un pont amb pilars, un xilòfon… Fes servir un bucle i que sigui una sola peça.|<b>Diseña una pieza con una fila.</b> Un colgador de llaves, un portapinceles, un puente con pilares, un xilófono… Usa un bucle y que sea una sola pieza.',
          name: 'La meva fila|Mi fila', blocks: ['cub', 'cil', 'esf', 'con', 'mou', 'color', 'rep', 'var'],
          crit: ['Fa servir un bucle «repeteix»|Usa un bucle «repite»', 'Almenys 4 còpies iguals|Al menos 4 copias iguales', 'Una sola peça que toca la placa|Una sola pieza que toca la placa'],
          checks: [ck('uses', { b: 'rep' }), ck('count', { min: 4, txt: 'Almenys 4 peces|Al menos 4 piezas' }), ck('one'), ck('onplate')], sol: 'cub(100, 20, 4)\nrepeteix i de 0 a 4 {\n  mou(10 + i * 20, 10, 4) cilindre(10, 25)\n}' },
        { k: 'quiz', ph: 'tanca', q: 'Quantes vegades es fa el bloc de <code>repeteix i de 0 a 7 { … }</code>?|¿Cuántas veces se hace el bloque de <code>repite i de 0 a 7 { … }</code>?', opts: ['8|8', '7|7', '6|6'], a: 0, ex: '7 − 0 + 1 = 8: el 0 i el 7 hi compten.|7 − 0 + 1 = 8: el 0 y el 7 cuentan.' },
        { k: 'quiz', ph: 'tanca', q: 'Una fila de 4 cubs de 10 mm amb <code>mou(i * 15, 0, 0)</code>. Quant fa de llarg?|Una fila de 4 cubos de 10 mm con <code>mueve(i * 15, 0, 0)</code>. ¿Cuánto mide de largo?', opts: ['55 mm|55 mm', '60 mm|60 mm', '40 mm|40 mm'], a: 0, ex: "(4 − 1) × 15 + 10 = 55 mm: tres passos i l'amplada de l'últim cub.|(4 − 1) × 15 + 10 = 55 mm: tres pasos y la anchura del último cubo." },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================================================== p5-2 */
    { id: 'p5-2', t: 'Graelles|Rejillas', min: 40, badge: 'p5graella',
      learn: ["Un bucle dins d'un altre (bucles niats) fa una graella: per a cada fila, el bucle de dins fa totes les columnes.|Un bucle dentro de otro (bucles anidados) hace una rejilla: para cada fila, el bucle de dentro hace todas las columnas.",
        'Peces de la graella = columnes × files; cada bucle té el seu comptador i <code>mou(i * pas, j * pas, 0)</code> porta cada peça a la seva casella.|Piezas de la rejilla = columnas × filas; cada bucle tiene su contador y <code>mueve(i * paso, j * paso, 0)</code> lleva cada pieza a su casilla.',
        'Amb <code>resta</code> i una graella de cilindres es fan molts forats iguals d\'un sol cop, com en una gradeta o un organitzador.|Con <code>resta</code> y una rejilla de cilindros se hacen muchos agujeros iguales de una vez, como en una gradilla o un organizador.'],
      steps: [
        { k: 'm3predict', ph: 'recorda', q: 'Quin model fa aquest bucle?|¿Qué modelo hace este bucle?', prog: 'repeteix i de 0 a 2 {\n  mou(i * 25, 0, 0) cub(20)\n}',
          opts: [{ prog: 'repeteix i de 0 a 2 {\n  mou(i * 25, 0, 0) cub(20)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(i * 25, 0, 0) cub(20)\n}' }, { prog: 'repeteix i de 0 a 1 {\n  mou(i * 25, 0, 0) cub(20)\n}' }], a: 0,
          ex: 'De 0 a 2 són 3 voltes: 3 cubs a x = 0, 25 i 50.|De 0 a 2 son 3 vueltas: 3 cubos en x = 0, 25 y 50.' },
        { k: 'quiz', ph: 'recorda', q: 'Quina instrucció fa <b>6 cilindres en fila</b>, separats 20 mm?|¿Qué instrucción hace <b>6 cilindros en fila</b>, separados 20 mm?', opts: ['<code>repeteix i de 0 a 5 { mou(i * 20, 0, 0) cilindre(10, 10) }</code>|<code>repite i de 0 a 5 { mueve(i * 20, 0, 0) cilindro(10, 10) }</code>', '<code>repeteix i de 0 a 6 { mou(i * 20, 0, 0) cilindre(10, 10) }</code>|<code>repite i de 0 a 6 { mueve(i * 20, 0, 0) cilindro(10, 10) }</code>', '<code>repeteix i de 0 a 5 { mou(20, 0, 0) cilindre(10, 10) }</code>|<code>repite i de 0 a 5 { mueve(20, 0, 0) cilindro(10, 10) }</code>'], a: 0,
          ex: "De 0 a 5 són 6 voltes, i i * 20 separa cada cilindre 20 mm. La segona en fa 7; la tercera els posa tots al mateix lloc.|De 0 a 5 son 6 vueltas, e i * 20 separa cada cilindro 20 mm. La segunda hace 7; la tercera los pone todos en el mismo sitio." },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'estudi', title: 'La gradeta del laboratori|La gradilla del laboratorio',
          t: "El penjador ha agradat molt! Ara el laboratori vol una <b>gradeta per a 12 tubs d'assaig</b>: 3 files de 4 forats. Podríem copiar el bucle de la fila tres vegades… però i si un dia en volen 10 files? Avui posarem <b>un bucle dins d'un altre</b> per fer graelles.|¡El colgador ha gustado mucho! Ahora el laboratorio quiere una <b>gradilla para 12 tubos de ensayo</b>: 3 filas de 4 agujeros. Podríamos copiar el bucle de la fila tres veces… pero ¿y si un día quieren 10 filas? Hoy pondremos <b>un bucle dentro de otro</b> para hacer rejillas." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Bucles niats|Bucles anidados', t: "Un bucle dins d'un altre|Un bucle dentro de otro", anim: 'p5nest',
            x: "El bucle de fora (<code>j</code>) diu <b>quina fila</b> fem. Per a cada fila, el bucle de dins (<code>i</code>) fa <b>totes les columnes</b>, de la primera a l'última. Quan acaba, el de fora passa a la fila següent. 3 files × 4 columnes = 12 peces.|El bucle de fuera (<code>j</code>) dice <b>qué fila</b> hacemos. Para cada fila, el bucle de dentro (<code>i</code>) hace <b>todas las columnas</b>, de la primera a la última. Cuando acaba, el de fuera pasa a la fila siguiente. 3 filas × 4 columnas = 12 piezas." },
          { k: 'Dos comptadors|Dos contadores', t: 'i per a la x, j per a la y|i para la x, j para la y', media: { k: 'model', prog: GRID },
            x: "Cada bucle necessita el seu <b>nom de comptador</b>: si tots dos es diguessin i, no sabríem quin és quin. Aquí <code>i</code> va a la x (columnes) i <code>j</code> a la y (files): <code>mou(i * 25, j * 25, 0)</code>.|Cada bucle necesita su <b>nombre de contador</b>: si los dos se llamaran i, no sabríamos cuál es cuál. Aquí <code>i</code> va a la x (columnas) y <code>j</code> a la y (filas): <code>mueve(i * 25, j * 25, 0)</code>.",
            tip: 'Peces = (columnes) × (files). Aquí: 4 × 3 = 12.|Piezas = (columnas) × (filas). Aquí: 4 × 3 = 12.' },
          { k: 'Forats|Agujeros', t: 'Una graella de forats|Una rejilla de agujeros', media: { k: 'model', prog: GRAD },
            x: "Dins de <code>resta { }</code>, la primera forma és la placa i <b>totes</b> les altres es resten. Si hi posem els bucles, els 12 cilindres es converteixen en 12 forats. Comencen a z = 3: queda un fons de 3 mm perquè els tubs no caiguin.|Dentro de <code>resta { }</code>, la primera forma es la placa y <b>todas</b> las demás se restan. Si ponemos los bucles, los 12 cilindros se convierten en 12 agujeros. Empiezan en z = 3: queda un fondo de 3 mm para que los tubos no se caigan." },
          { k: 'Pas|Paso', t: 'repeteix x de 0 a 60 pas 20|repite x de 0 a 60 paso 20', media: { k: 'model', prog: PASDEMO },
            x: "Amb <code>pas</code>, el comptador no avança d'1 en 1 sinó del número que diguis: x val 0, 20, 40 i 60. Així el comptador ja és la posició i no cal multiplicar. Les dues maneres fan el mateix: tria la que s'entengui millor.|Con <code>paso</code>, el contador no avanza de 1 en 1 sino del número que digas: x vale 0, 20, 40 y 60. Así el contador ya es la posición y no hace falta multiplicar. Las dos maneras hacen lo mismo: elige la que se entienda mejor.",
            tip: 'Amb pas, escriu sempre les claus { } del bucle.|Con paso, escribe siempre las llaves { } del bucle.' },
          { k: 'Mesures|Medidas', t: 'El marge i la mida de la placa|El margen y el tamaño de la placa', media: { k: 'model', prog: KEYPAD },
            x: "El primer element no va a la vora: deixa un <b>marge</b>. En aquest teclat, les tecles de 18 mm comencen a 6 mm de la vora i tenen un pas de 22. Amplada de la placa = marge + (columnes − 1) × pas + tecla + marge = 6 + 2 × 22 + 18 + 6 = 74 mm.|El primer elemento no va en el borde: deja un <b>margen</b>. En este teclado, las teclas de 18 mm empiezan a 6 mm del borde y tienen un paso de 22. Anchura de la placa = margen + (columnas − 1) × paso + tecla + margen = 6 + 2 × 22 + 18 + 6 = 74 mm." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🔲', title: 'La graella de paper|La rejilla de papel', t: 'Per parelles, amb paper quadriculat i dos colors:|Por parejas, con papel cuadriculado y dos colores:',
          steps: ['Una persona llegeix en veu alta: <b>repeteix fila de 0 a 2 { repeteix col de 0 a 4 { pinta la casella (col × 2, fila × 2) } }</b>.|Una persona lee en voz alta: <b>repite fila de 0 a 2 { repite col de 0 a 4 { pinta la casilla (col × 2, fila × 2) } }</b>.',
            "L'altra pinta les caselles en l'ordre en què surten i hi escriu el número d'ordre (1, 2, 3…).|La otra pinta las casillas en el orden en que salen y escribe el número de orden (1, 2, 3…).",
            'Compteu les caselles pintades i comproveu que surt files × columnes. Canvieu els papers amb un altre programa de la fitxa.|Contad las casillas pintadas y comprobad que sale filas × columnas. Cambiad los papeles con otro programa de la ficha.'],
          tip: "Fixeu-vos en l'ordre: tota la primera fila, després tota la segona… Així treballa un bucle niat.|Fijaos en el orden: toda la primera fila, después toda la segunda… Así trabaja un bucle anidado." },
        { k: 'm3predict', ph: 'prova', q: 'Atenció a les coordenades. <b>Quin model fa?</b>|Atención a las coordenadas. <b>¿Qué modelo hace?</b>', prog: 'repeteix i de 0 a 2 {\n  repeteix j de 0 a 2 {\n    mou(i * 20, 0, j * 20) cub(15)\n  }\n}',
          opts: [{ prog: 'repeteix i de 0 a 2 {\n  repeteix j de 0 a 2 {\n    mou(i * 20, 0, j * 20) cub(15)\n  }\n}' }, { prog: 'repeteix i de 0 a 2 {\n  repeteix j de 0 a 2 {\n    mou(i * 20, j * 20, 0) cub(15)\n  }\n}' }, { prog: 'repeteix i de 0 a 2 {\n  repeteix j de 0 a 2 {\n    mou(0, i * 20, j * 20) cub(15)\n  }\n}' }, { prog: 'repeteix i de 0 a 8 {\n  mou(i * 20, 0, 0) cub(15)\n}' }], a: 0,
          ex: 'El comptador j és a la z: cada «fila» puja 20 mm. És una graella vertical, com una paret de 3 × 3 blocs en el pla xz.|El contador j está en la z: cada «fila» sube 20 mm. Es una rejilla vertical, como una pared de 3 × 3 bloques en el plano xz.' },
        { k: 'quiz', ph: 'prova', q: 'Quantes peces fa?<br><code>repeteix i de 0 a 4 { repeteix j de 0 a 1 { … cub(10) } }</code>|¿Cuántas piezas hace?<br><code>repite i de 0 a 4 { repite j de 0 a 1 { … cubo(10) } }</code>', opts: ['10|10', '7|7', '8|8'], a: 0,
          ex: 'El de fora fa 5 voltes (0 a 4) i, a cada una, el de dins en fa 2 (0 a 1): 5 × 2 = 10.|El de fuera da 5 vueltas (0 a 4) y, en cada una, el de dentro da 2 (0 a 1): 5 × 2 = 10.' },
        { k: 'm3spot', ph: 'investiga', q: 'La gradeta només té <b>una fila</b> de forats en lloc de tres. Toca la instrucció que falla.|La gradilla solo tiene <b>una fila</b> de agujeros en lugar de tres. Toca la instrucción que falla.', prog: 'resta {\n  cub(90, 70, 20)\n  repeteix j de 0 a 2 {\n    repeteix i de 0 a 3 {\n      mou(15 + i * 20, 15, 3)! cilindre(14, 18)\n    }\n  }\n}', target: GRAD,
          ex: 'La y del mou no fa servir j: les tres files de forats queden una a sobre de l\'altra. Ha de ser 15 + j * 20.|La y del mueve no usa j: las tres filas de agujeros quedan una encima de la otra. Tiene que ser 15 + j * 20.' },
        { k: 'm3spot', ph: 'investiga', q: 'Ara surt una <b>fila de més</b> que talla la vora de la placa. On és l\'error?|Ahora sale una <b>fila de más</b> que corta el borde de la placa. ¿Dónde está el error?', prog: 'resta {\n  cub(90, 70, 20)\n  repeteix j de 0 a 3! {\n    repeteix i de 0 a 3 {\n      mou(15 + i * 20, 15 + j * 20, 3) cilindre(14, 18)\n    }\n  }\n}', target: GRAD,
          ex: 'La gradeta té 3 files: j ha d\'anar de 0 a 2. Amb 0 a 3 hi ha una quarta fila a y = 75, que ja és fora dels 70 mm de la placa.|La gradilla tiene 3 filas: j tiene que ir de 0 a 2. Con 0 a 3 hay una cuarta fila en y = 75, que ya está fuera de los 70 mm de la placa.' },
        { k: 'move', ph: 'pausa', title: 'Files i columnes|Filas y columnas', secs: 30,
          t: "Executa el bucle niat: <b>repeteix fila de 1 a 3 { repeteix col de 1 a 4 { pica de mans } salta }</b>. Quantes picades has fet? I quants salts?|Ejecuta el bucle anidado: <b>repite fila de 1 a 3 { repite col de 1 a 4 { da una palmada } salta }</b>. ¿Cuántas palmadas has dado? ¿Y cuántos saltos?" },
        { k: 'm3code', ph: 'repte', text: true, q: 'Aquest programa fa <b>una fila</b> de 4 cubs. Converteix-lo en una <b>graella de 4 × 3</b>, amb el mateix pas de 20 mm en y.|Este programa hace <b>una fila</b> de 4 cubos. Conviértelo en una <b>rejilla de 4 × 3</b>, con el mismo paso de 20 mm en y.', start: 'repeteix i de 0 a 3 {\n  mou(i * 20, 0, 0) cub(15)\n}', blocks: ['cub', 'mou', 'rep'],
          target: GRID15, checks: [ck('match', { target: GRID15, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 12, max: 12, txt: 'Exactament 12 cubs|Exactamente 12 cubos' }), ck('uses', { b: 'rep' })],
          hint: "Posa un altre «repeteix» amb el comptador j que embolcalli el que ja tens, i a la y del mou escriu j * 20.|Pon otro «repite» con el contador j que envuelva lo que ya tienes, y en la y del mueve escribe j * 20.", sol: GRID15 },
        { k: 'm3code', ph: 'repte', text: true, q: "Fes la <b>gradeta</b>: a la placa de 90 × 70 × 20 mm, resta-hi 3 files de 4 forats de 14 mm (cilindres de 14 × 18 a z = 3). El primer forat és a (15, 15) i el pas és de 20 mm.|Haz la <b>gradilla</b>: a la placa de 90 × 70 × 20 mm, réstale 3 filas de 4 agujeros de 14 mm (cilindros de 14 × 18 en z = 3). El primer agujero está en (15, 15) y el paso es de 20 mm.", start: 'resta {\n  cub(90, 70, 20)\n}', blocks: ['cub', 'cil', 'mou', 'rep', 'resta'],
          target: GRAD, checks: [ck('match', { target: GRAD, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'cyl', hole: true, min: 12, max: 12, txt: 'Exactament 12 forats|Exactamente 12 agujeros' }), ck('hole'), ck('one'), ck('uses', { b: 'rep' })],
          hint: "Els bucles van dins de la resta, just després de la placa. El cilindre: mou(15 + i * 20, 15 + j * 20, 3).|Los bucles van dentro de la resta, justo después de la placa. El cilindro: mueve(15 + i * 20, 15 + j * 20, 3).", sol: GRAD },
        { k: 'm3code', ph: 'repte', text: true, q: "Fes el <b>teclat numèric</b> del club de robòtica: 3 columnes × 4 files de tecles de 18 × 18 × 5 mm sobre la base, amb 6 mm de marge i pas de 22. Pots fer servir multiplicacions o <code>pas</code>.|Haz el <b>teclado numérico</b> del club de robótica: 3 columnas × 4 filas de teclas de 18 × 18 × 5 mm sobre la base, con 6 mm de margen y paso de 22. Puedes usar multiplicaciones o <code>paso</code>.", start: 'cub(74, 96, 6)', blocks: ['cub', 'mou', 'rep'],
          target: KEYPAD, checks: [ck('match', { target: KEYPAD, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 13, max: 13, txt: 'La base i 12 tecles|La base y 12 teclas' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "Les tecles van a sobre de la base (z = 6). Posició: (6 + i * 22, 6 + j * 22). O bé: repeteix x de 6 a 50 pas 22.|Las teclas van encima de la base (z = 6). Posición: (6 + i * 22, 6 + j * 22). O bien: repite x de 6 a 50 paso 22.", sol: KEYPAD },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Organitzador de piles AA</b> paramètric: <b>nx</b> columnes i <b>ny</b> files de forats de 15 mm amb un pas de 19. La placa ja s'adapta. Afegeix els forats perquè funcioni amb qualsevol nx i ny.|<b>Organizador de pilas AA</b> paramétrico: <b>nx</b> columnas y <b>ny</b> filas de agujeros de 15 mm con un paso de 19. La placa ya se adapta. Añade los agujeros para que funcione con cualquier nx y ny.", start: 'nx = 5\nny = 2\nresta {\n  cub(nx * 19 + 6, ny * 19 + 6, 24)\n}', blocks: ['cub', 'cil', 'mou', 'rep', 'resta', 'var'], vars: ['nx', 'ny'],
          target: PILES, checks: [ck('count', { t: 'cyl', hole: true, min: 'nx * ny', max: 'nx * ny', txt: 'Un forat per pila: nx × ny|Un agujero por pila: nx × ny' }), ck('hole'), ck('one'), ck('uses', { b: 'rep' }), ck('param', { v: 'nx', vals: [2, 8] }), ck('param', { v: 'ny', vals: [1, 4] })],
          hint: "Els bucles van de 0 a (nx - 1) i de 0 a (ny - 1), entre parèntesis. El primer forat té el centre a 3 + 9,5 = 12,5 mm de la vora: mou(12.5 + i * 19, 12.5 + j * 19, 4).|Los bucles van de 0 a (nx - 1) y de 0 a (ny - 1), entre paréntesis. El primer agujero tiene el centro a 3 + 9,5 = 12,5 mm del borde: mueve(12.5 + i * 19, 12.5 + j * 19, 4).", sol: PILES },
        { k: 'm3code', ph: 'repte', text: true, extra: true, q: "⭐ <b>La paret en piràmide.</b> 4 cubs a baix, 3 a sobre, després 2 i 1, cada fila centrada damunt de l'anterior. Pista: el final del bucle de dins pot dependre del comptador de fora.|⭐ <b>La pared en pirámide.</b> 4 cubos abajo, 3 encima, después 2 y 1, cada fila centrada sobre la anterior. Pista: el final del bucle de dentro puede depender del contador de fuera.", blocks: ['cub', 'mou', 'rep'],
          target: PYR, checks: [ck('match', { target: PYR, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 10, max: 10, txt: '4 + 3 + 2 + 1 = 10 cubs|4 + 3 + 2 + 1 = 10 cubos' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "Fila j: el bucle de dins va de 0 a (3 - j). Cada fila puja 20 mm i es desplaça mig cub: mou(j * 10 + i * 20, 0, j * 20).|Fila j: el bucle de dentro va de 0 a (3 - j). Cada fila sube 20 mm y se desplaza medio cubo: mueve(j * 10 + i * 20, 0, j * 20).", sol: PYR },
        { k: 'm3free', ph: 'crea', text: true, q: '<b>Dissenya un organitzador amb graella.</b> Un porta-llapis, un porta-espècies, una caixa per a botons, un suport per a pinzells… Fes servir dos bucles niats i forats amb <code>resta</code>.|<b>Diseña un organizador con rejilla.</b> Un portalápices, un especiero, una caja para botones, un soporte para pinceles… Usa dos bucles anidados y agujeros con <code>resta</code>.',
          name: 'El meu organitzador|Mi organizador', blocks: ['cub', 'cil', 'mou', 'color', 'rep', 'resta', 'uneix', 'var'],
          crit: ['Té una graella feta amb dos bucles niats|Tiene una rejilla hecha con dos bucles anidados', 'Els forats es fan amb «resta» i no travessen el fons|Los agujeros se hacen con «resta» y no atraviesan el fondo', 'És una sola peça que toca la placa|Es una sola pieza que toca la placa'],
          checks: [ck('uses', { b: 'rep' }), ck('hole'), ck('one'), ck('onplate')], sol: 'resta {\n  cub(70, 48, 40)\n  repeteix j de 0 a 1 {\n    repeteix i de 0 a 2 {\n      mou(13 + i * 22, 13 + j * 22, 4) cilindre(18, 40)\n    }\n  }\n}' },
        { k: 'quiz', ph: 'tanca', q: "El bucle de fora va de 0 a 3 i el de dins, de 0 a 4. Quantes vegades es fa el que hi ha al bucle de dins?|El bucle de fuera va de 0 a 3 y el de dentro, de 0 a 4. ¿Cuántas veces se hace lo que hay en el bucle de dentro?", opts: ['20|20', '9|9', '12|12'], a: 0, ex: '4 voltes del de fora × 5 voltes del de dins = 20.|4 vueltas del de fuera × 5 vueltas del de dentro = 20.' },
        { k: 'quiz', ph: 'tanca', q: 'Per què el bucle de dins fa servir <code>j</code> i no <code>i</code>?|¿Por qué el bucle de dentro usa <code>j</code> y no <code>i</code>?', opts: ['Perquè cada bucle necessita el seu comptador per saber la columna i la fila|Porque cada bucle necesita su contador para saber la columna y la fila', 'Perquè la j és més ràpida|Porque la j es más rápida', 'Perquè la i només serveix per a la x|Porque la i solo sirve para la x'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================================================== p5-3 */
    { id: 'p5-3', t: 'Patrons circulars|Patrones circulares', min: 40, badge: 'p5cercle',
      learn: ["<code>gira(0, 0, i * 360 / n) mou(r, 0, 0)</code> reparteix n còpies en un cercle de radi r: la forma s'allunya del centre i després gira al voltant de l'origen.|<code>gira(0, 0, i * 360 / n) mueve(r, 0, 0)</code> reparte n copias en un círculo de radio r: la forma se aleja del centro y después gira alrededor del origen.",
        "L'angle entre dues còpies és 360 / n graus, i el bucle va de 0 a n − 1 perquè la còpia n quedaria a sobre de la primera.|El ángulo entre dos copias es 360 / n grados, y el bucle va de 0 a n − 1 porque la copia n quedaría encima de la primera.",
        "L'ordre importa: la transformació més a prop de la forma s'aplica primer; si moguéssim després de girar, cada peça giraria sobre si mateixa i no hi hauria cercle.|El orden importa: la transformación más cerca de la forma se aplica primero; si moviéramos después de girar, cada pieza giraría sobre sí misma y no habría círculo."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Què fa <code>gira(0, 0, 90)</code> davant d\'una forma?|¿Qué hace <code>gira(0, 0, 90)</code> delante de una forma?', opts: ["La gira 90° al voltant de l'eix z, que passa per l'origen|La gira 90° alrededor del eje z, que pasa por el origen", 'La gira 90° al voltant del seu propi centre|La gira 90° alrededor de su propio centro', 'La mou 90 mm cap amunt|La mueve 90 mm hacia arriba'], a: 0,
          ex: "Al Nivell 2, gira sempre fa girar al voltant de l'origen (0, 0, 0), com a OpenSCAD.|En el Nivel 2, gira siempre hace girar alrededor del origen (0, 0, 0), como en OpenSCAD." },
        { k: 'm3predict', ph: 'recorda', q: 'On queda el cub?|¿Dónde queda el cubo?', prog: 'gira(0, 0, 90) mou(30, 0, 0) cub(10)',
          opts: [{ prog: 'gira(0, 0, 90) mou(30, 0, 0) cub(10)' }, { prog: 'mou(30, 0, 0) cub(10)' }, { prog: 'gira(0, 0, 180) mou(30, 0, 0) cub(10)' }, { prog: 'mou(30, 0, 0) gira(0, 0, 90) cub(10)' }], a: 0,
          ex: 'Primer el cub es mou 30 mm cap a la dreta (x) i després gira 90° al voltant de l\'origen: acaba a la banda de la y positiva.|Primero el cubo se mueve 30 mm hacia la derecha (x) y después gira 90° alrededor del origen: acaba en el lado de la y positiva.' },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'estudi', title: 'Rellotges i flors|Relojes y flores',
          t: "Dos encàrrecs nous! La biblioteca del barri vol un <b>rellotge de paret</b> amb 12 marques, i l'hort urbà, unes <b>flors</b> per marcar els bancals. Les marques del rellotge no van en fila: van <b>en cercle</b>, totes a la mateixa distància del centre. Avui combinarem el bucle amb <code>gira</code> per fer patrons circulars.|¡Dos encargos nuevos! La biblioteca del barrio quiere un <b>reloj de pared</b> con 12 marcas, y el huerto urbano, unas <b>flores</b> para marcar los bancales. Las marcas del reloj no van en fila: van <b>en círculo</b>, todas a la misma distancia del centro. Hoy combinaremos el bucle con <code>gira</code> para hacer patrones circulares." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'La idea|La idea', t: "Allunyar i girar al voltant de l'origen|Alejar y girar alrededor del origen", anim: 'p5orbit',
            x: "Per posar una peça en un cercle: primer la <b>allunyem</b> del centre amb <code>mou(r, 0, 0)</code> (r és el radi) i després la <b>girem</b> al voltant de l'origen amb <code>gira(0, 0, angle)</code>. Si cada còpia gira un angle més gran, les còpies fan la volta, com les hores d'un rellotge.|Para poner una pieza en un círculo: primero la <b>alejamos</b> del centro con <code>mueve(r, 0, 0)</code> (r es el radio) y después la <b>giramos</b> alrededor del origen con <code>gira(0, 0, ángulo)</code>. Si cada copia gira un ángulo mayor, las copias dan la vuelta, como las horas de un reloj." },
          { k: "L'angle|El ángulo", t: '360 / n graus|360 / n grados', media: { k: 'model', prog: ORB6 },
            x: "Una volta sencera són <b>360°</b>. Si volem n còpies iguals, cada una gira <code>360 / n</code> més que l'anterior: amb 6 còpies, 60°. El bucle va de 0 a <b>n − 1</b>: la còpia número n giraria 360°, que és el mateix que 0°, i quedaria a sobre de la primera.|Una vuelta entera son <b>360°</b>. Si queremos n copias iguales, cada una gira <code>360 / n</code> más que la anterior: con 6 copias, 60°. El bucle va de 0 a <b>n − 1</b>: la copia número n giraría 360°, que es lo mismo que 0°, y quedaría encima de la primera.",
            tip: "Angle de la còpia i = i × 360 / n.|Ángulo de la copia i = i × 360 / n." },
          { k: "L'ordre|El orden", t: 'Primer gira, després mou (escrit així)|Primero gira, después mueve (escrito así)', media: { k: 'model', prog: CLOCK },
            x: "A <code>gira(…) mou(…) cub(…)</code>, la transformació més a prop de la forma s'aplica <b>primer</b>: el cub es mou cap a fora i després tot gira. Si ho escrivim al revés, <code>mou(…) gira(…)</code>, cada cub gira a l'origen i després es mou: totes les marques acaben al mateix lloc.|En <code>gira(…) mueve(…) cubo(…)</code>, la transformación más cerca de la forma se aplica <b>primero</b>: el cubo se mueve hacia fuera y después todo gira. Si lo escribimos al revés, <code>mueve(…) gira(…)</code>, cada cubo gira en el origen y después se mueve: todas las marcas acaban en el mismo sitio.",
            bad: 'mou(30, -2, 4) gira(0, 0, i * 30) cub(8, 4, 3): un munt de marques al mateix lloc|mueve(30, -2, 4) gira(0, 0, i * 30) cubo(8, 4, 3): un montón de marcas en el mismo sitio', good: 'gira(0, 0, i * 30) mou(30, -2, 4) cub(8, 4, 3): 12 marques al voltant|gira(0, 0, i * 30) mueve(30, -2, 4) cubo(8, 4, 3): 12 marcas alrededor' },
          { k: 'Peces que miren al centre|Piezas que miran al centro', t: 'Tota la peça gira amb el patró|Toda la pieza gira con el patrón', media: { k: 'model', prog: FLOWER },
            x: "Com que gira <b>tota</b> la peça, cada pètal queda orientat cap al centre, com els radis d'una roda. Per centrar una peça llarga sobre el radi, la desplacem mitja amplada en y (com el −2 de les marques del rellotge). Aquí, <code>escala(1.6, 1, 1)</code> estira els cilindres per fer pètals.|Como gira <b>toda</b> la pieza, cada pétalo queda orientado hacia el centro, como los radios de una rueda. Para centrar una pieza larga sobre el radio, la desplazamos media anchura en y (como el −2 de las marcas del reloj). Aquí, <code>escala(1.6, 1, 1)</code> estira los cilindros para hacer pétalos." },
          { k: 'Matemàtiques|Matemáticas', t: 'Simetria de rotació|Simetría de rotación', media: { k: 'model', prog: WHEEL },
            x: "Una roda de 8 radis queda igual si la girem 45°, 90°, 135°…: té <b>simetria de rotació d'ordre 8</b>. La trobem a les flors, als flocs de neu, a les rodes, als ventiladors i als engranatges. A l'enginyeria, repartir peces en cercle fa que les forces quedin equilibrades.|Una rueda de 8 radios queda igual si la giramos 45°, 90°, 135°…: tiene <b>simetría de rotación de orden 8</b>. La encontramos en las flores, en los copos de nieve, en las ruedas, en los ventiladores y en los engranajes. En ingeniería, repartir piezas en círculo hace que las fuerzas queden equilibradas." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '🧭', title: 'Cercles amb transportador|Círculos con transportador', t: 'Individualment, amb compàs, transportador i la fitxa:|Individualmente, con compás, transportador y la ficha:',
          steps: ["Dibuixa un cercle de 5 cm de radi i marca'n el centre. Traça el radi de 0° cap a la dreta.|Dibuja un círculo de 5 cm de radio y marca su centro. Traza el radio de 0° hacia la derecha.",
            "Calcula l'angle per a n = 8 (360 / 8 = 45°) i marca els 8 punts amb el transportador: 0°, 45°, 90°… Fes el mateix en un altre cercle per a n = 5 (72°).|Calcula el ángulo para n = 8 (360 / 8 = 45°) y marca los 8 puntos con el transportador: 0°, 45°, 90°… Haz lo mismo en otro círculo para n = 5 (72°).",
            "Completa la taula de la fitxa: per a quins n l'angle és un nombre enter? (pista: els divisors de 360).|Completa la tabla de la ficha: ¿para qué n el ángulo es un número entero? (pista: los divisores de 360)."],
          tip: "Per què els rellotges tenen 12 hores? 360 es pot dividir entre 12, 6, 4, 3 i 2: és molt fàcil de repartir.|¿Por qué los relojes tienen 12 horas? 360 se puede dividir entre 12, 6, 4, 3 y 2: es muy fácil de repartir." },
        { k: 'm3predict', ph: 'prova', q: 'Quin model fa?|¿Qué modelo hace?', prog: 'repeteix i de 0 a 3 {\n  gira(0, 0, i * 90) mou(20, 0, 0) cub(10)\n}',
          opts: [{ prog: 'repeteix i de 0 a 3 {\n  gira(0, 0, i * 90) mou(20, 0, 0) cub(10)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(i * 20, 0, 0) cub(10)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  mou(20, 0, 0) gira(0, 0, i * 90) cub(10)\n}' }, { prog: 'repeteix i de 0 a 2 {\n  gira(0, 0, i * 120) mou(20, 0, 0) cub(10)\n}' }], a: 0,
          ex: "4 cubs, i cada un gira 90° més: 0°, 90°, 180° i 270°. Queden repartits al voltant de l'origen, a 20 mm.|4 cubos, y cada uno gira 90° más: 0°, 90°, 180° y 270°. Quedan repartidos alrededor del origen, a 20 mm." },
        { k: 'm3predict', ph: 'prova', q: 'Quants braços té aquesta estrella?|¿Cuántos brazos tiene esta estrella?', prog: 'repeteix i de 0 a 4 {\n  gira(0, 0, i * 72) mou(4, -3, 0) cub(20, 6, 4)\n}',
          opts: [{ prog: 'repeteix i de 0 a 4 {\n  gira(0, 0, i * 72) mou(4, -3, 0) cub(20, 6, 4)\n}' }, { prog: 'repeteix i de 0 a 3 {\n  gira(0, 0, i * 90) mou(4, -3, 0) cub(20, 6, 4)\n}' }, { prog: 'repeteix i de 0 a 5 {\n  gira(0, 0, i * 60) mou(4, -3, 0) cub(20, 6, 4)\n}' }], a: 0,
          ex: 'De 0 a 4 són 5 braços, i 5 × 72° = 360°: la volta sencera.|De 0 a 4 son 5 brazos, y 5 × 72° = 360°: la vuelta entera.' },
        { k: 'm3spot', ph: 'investiga', q: 'El rellotge té <b>només 6 marques</b> visibles en lloc de 12. Toca la instrucció que falla.|El reloj tiene <b>solo 6 marcas</b> visibles en lugar de 12. Toca la instrucción que falla.', prog: 'cilindre(80, 4)\nrepeteix i de 0 a 11 {\n  gira(0, 0, i * 60)! mou(30, -2, 4) cub(8, 4, 3)\n}', target: CLOCK,
          ex: "Amb 12 marques, l'angle ha de ser 360 / 12 = 30°. Amb 60°, les 12 marques fan dues voltes i queden repetides de dues en dues.|Con 12 marcas, el ángulo tiene que ser 360 / 12 = 30°. Con 60°, las 12 marcas dan dos vueltas y quedan repetidas de dos en dos." },
        { k: 'm3spot', ph: 'investiga', q: "Ara totes les marques surten <b>amuntegades</b> en un sol lloc. Quina instrucció està mal col·locada?|Ahora todas las marcas salen <b>amontonadas</b> en un solo sitio. ¿Qué instrucción está mal colocada?", prog: 'cilindre(80, 4)\nrepeteix i de 0 a 11 {\n  mou(30, -2, 4)! gira(0, 0, i * 30) cub(8, 4, 3)\n}', target: CLOCK,
          ex: "El mou va davant del gira: cada marca gira a l'origen i després es mou al mateix punt. Cal escriure primer gira i després mou: gira(0, 0, i * 30) mou(30, -2, 4) cub(8, 4, 3).|El mueve va delante del gira: cada marca gira en el origen y después se mueve al mismo punto. Hay que escribir primero gira y después mueve: gira(0, 0, i * 30) mueve(30, -2, 4) cubo(8, 4, 3)." },
        { k: 'move', ph: 'pausa', title: 'La rosa dels vents|La rosa de los vientos', secs: 30,
          t: "Dempeus: <b>repeteix 4 vegades { gira 90° }</b>. Mires on miraves? Ara <b>repeteix 3 vegades { gira 120° }</b> i <b>repeteix 8 vegades { gira 45° }</b>. Sempre acabes fent 360°!|De pie: <b>repite 4 veces { gira 90° }</b>. ¿Miras donde mirabas? Ahora <b>repite 3 veces { gira 120° }</b> y <b>repite 8 veces { gira 45° }</b>. ¡Siempre acabas dando 360°!" },
        { k: 'm3code', ph: 'repte', text: true, q: 'Reparteix <b>6 cilindres</b> de 10 × 8 mm en un cercle de <b>25 mm de radi</b>, com el fantasma.|Reparte <b>6 cilindros</b> de 10 × 8 mm en un círculo de <b>25 mm de radio</b>, como el fantasma.', blocks: ['cil', 'mou', 'gira', 'rep'],
          target: ORB6L, checks: [ck('match', { target: ORB6L, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'cyl', min: 6, max: 6, txt: 'Exactament 6 cilindres|Exactamente 6 cilindros' }), ck('uses', { b: 'gira' }), ck('uses', { b: 'rep' })],
          hint: "Dins del bucle: gira(0, 0, i * 60) i, a dins del gira, mou(25, 0, 0) amb el cilindre. 6 × 60° = 360°.|Dentro del bucle: gira(0, 0, i * 60) y, dentro del gira, mueve(25, 0, 0) con el cilindro. 6 × 60° = 360°.", sol: ORB6L },
        { k: 'm3code', ph: 'repte', text: true, q: "Fes el <b>rellotge de la biblioteca</b>: sobre l'esfera de 80 mm, 12 marques de 8 × 4 × 3 mm a 30 mm del centre, mirant cap al centre.|Haz el <b>reloj de la biblioteca</b>: sobre la esfera de 80 mm, 12 marcas de 8 × 4 × 3 mm a 30 mm del centro, mirando hacia el centro.", start: 'cilindre(80, 4)', blocks: ['cil', 'cub', 'mou', 'gira', 'rep'],
          target: CLOCK, checks: [ck('match', { target: CLOCK, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 12, max: 12, txt: 'Exactament 12 marques|Exactamente 12 marcas' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "360 / 12 = 30°. La marca es mou (30, -2, 4): 30 mm cap a fora, −2 per centrar-la (fa 4 d'ample) i 4 per pujar-la sobre l'esfera.|360 / 12 = 30°. La marca se mueve (30, -2, 4): 30 mm hacia fuera, −2 para centrarla (mide 4 de ancho) y 4 para subirla sobre la esfera.", sol: CLOCK },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Flor paramètrica</b> per a l'hort: al voltant del centre, <b>n</b> pètals (cilindres de 12 × 4 mm estirats amb <code>escala(1.6, 1, 1)</code>) a 14 mm. Ha de funcionar amb qualsevol n.|<b>Flor paramétrica</b> para el huerto: alrededor del centro, <b>n</b> pétalos (cilindros de 12 × 4 mm estirados con <code>escala(1.6, 1, 1)</code>) a 14 mm. Tiene que funcionar con cualquier n.", start: 'n = 5\ncilindre(14, 6)', blocks: ['cil', 'mou', 'gira', 'escala', 'rep', 'var'], vars: ['n'],
          target: FLOWER, checks: [ck('count', { t: 'cyl', min: 'n + 1', max: 'n + 1', txt: 'El centre i n pètals|El centro y n pétalos' }), ck('uses', { b: 'gira' }), ck('uses', { b: 'rep' }), ck('one'), ck('param', { v: 'n', vals: [3, 8] })],
          hint: "L'angle depèn de n: gira(0, 0, i * 360 / n). El bucle, de 0 a (n - 1). L'ordre: gira, mou(14, 0, 0), escala i el cilindre.|El ángulo depende de n: gira(0, 0, i * 360 / n). El bucle, de 0 a (n - 1). El orden: gira, mueve(14, 0, 0), escala y el cilindro.", sol: FLOWER },
        { k: 'm3code', ph: 'repte', text: true, q: "Fes la <b>roda amb radis</b>: dins de la llanta i el botó central, 8 radis de 32 × 4 × 6 mm que surten del centre.|Haz la <b>rueda con radios</b>: dentro de la llanta y el botón central, 8 radios de 32 × 4 × 6 mm que salen del centro.", start: 'tub(70, 6, 5)\ncilindre(14, 6)', blocks: ['tub', 'cil', 'cub', 'mou', 'gira', 'rep'],
          target: WHEEL, checks: [ck('match', { target: WHEEL, th: 0.85, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 8, max: 8, txt: 'Exactament 8 radis|Exactamente 8 radios' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "Cada radi comença al centre: mou(0, -2, 0) cub(32, 4, 6) el centra sobre l'eix x. Després, gira(0, 0, i * 45).|Cada radio empieza en el centro: mueve(0, -2, 0) cubo(32, 4, 6) lo centra sobre el eje x. Después, gira(0, 0, i * 45).", sol: WHEEL },
        { k: 'm3code', ph: 'repte', text: true, extra: true, q: "⭐ <b>La brida.</b> Les peces que s'uneixen amb cargols tenen forats en cercle. Resta al disc 6 forats de 7 mm a 21 mm del centre, a més del forat central.|⭐ <b>La brida.</b> Las piezas que se unen con tornillos tienen agujeros en círculo. Resta al disco 6 agujeros de 7 mm a 21 mm del centro, además del agujero central.", start: 'resta {\n  cilindre(60, 5)\n  mou(0, 0, -1) cilindre(14, 7)\n}', blocks: ['cil', 'mou', 'gira', 'rep', 'resta'],
          target: FLANGE, checks: [ck('match', { target: FLANGE, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'cyl', hole: true, min: 7, max: 7, txt: '7 forats (el central i 6 per als cargols)|7 agujeros (el central y 6 para los tornillos)' }), ck('hole'), ck('one'), ck('uses', { b: 'rep' })],
          hint: "El bucle va dins de la resta. Els forats comencen a z = −1 i fan 7 mm perquè travessin: gira(0, 0, i * 60) mou(21, 0, -1) cilindre(7, 7).|El bucle va dentro de la resta. Los agujeros empiezan en z = −1 y miden 7 mm para que atraviesen: gira(0, 0, i * 60) mueve(21, 0, -1) cilindro(7, 7).", sol: FLANGE },
        { k: 'm3free', ph: 'crea', text: true, q: '<b>Dissenya un patró circular.</b> Una flor, una roda, un rellotge, un mandala, una corona, un posavasos… Fes servir un bucle amb <code>gira</code> i tria bé l\'angle.|<b>Diseña un patrón circular.</b> Una flor, una rueda, un reloj, un mandala, una corona, un posavasos… Usa un bucle con <code>gira</code> y elige bien el ángulo.',
          name: 'El meu patró circular|Mi patrón circular', blocks: ['cub', 'cil', 'esf', 'con', 'tub', 'mou', 'gira', 'escala', 'color', 'rep', 'resta', 'var'],
          crit: ['Fa servir un bucle amb «gira»|Usa un bucle con «gira»', "L'angle és 360 / n (les còpies fan la volta sencera)|El ángulo es 360 / n (las copias dan la vuelta entera)", 'Una sola peça que toca la placa|Una sola pieza que toca la placa'],
          checks: [ck('uses', { b: 'rep' }), ck('uses', { b: 'gira' }), ck('count', { min: 5, txt: 'Almenys 5 peces|Al menos 5 piezas' }), ck('one'), ck('onplate')],
          sol: 'cilindre(50, 3)\nrepeteix i de 0 a 7 {\n  gira(0, 0, i * 45) mou(18, 0, 3) cilindre(10, 4)\n}\nrepeteix i de 0 a 7 {\n  gira(0, 0, i * 45 + 22.5) mou(27, 0, 0) cilindre(8, 3)\n}' },
        { k: 'quiz', ph: 'tanca', q: 'Per fer <b>8 còpies</b> en cercle, de quants graus ha de ser cada gir?|Para hacer <b>8 copias</b> en círculo, ¿de cuántos grados tiene que ser cada giro?', opts: ['45°|45°', '8°|8°', '36°|36°'], a: 0, ex: '360 / 8 = 45°.|360 / 8 = 45°.' },
        { k: 'quiz', ph: 'tanca', q: 'Per què el bucle va de 0 a n − 1 i no de 0 a n?|¿Por qué el bucle va de 0 a n − 1 y no de 0 a n?', opts: ['Perquè la còpia n quedaria a 360°, just a sobre de la primera|Porque la copia n quedaría a 360°, justo encima de la primera', 'Perquè el 0 no compta|Porque el 0 no cuenta', "Perquè l'última còpia sempre falla|Porque la última copia siempre falla"], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },
    /* =================================================================== p5-4 */
    { id: 'p5-4', t: "Projecte: l'engranatge|Proyecto: el engranaje", min: 45, proj: true, badge: 'p5engranatge',
      learn: ["Un engranatge és un patró circular: un disc, z dents girades 360 / z graus i un forat per a l'eix fet amb resta.|Un engranaje es un patrón circular: un disco, z dientes giradas 360 / z grados y un agujero para el eje hecho con resta.",
        "Amb variables (z, m, d = m · z) el disseny és paramètric: canvies el nombre de dents i l'engranatge es torna a fer bé, sol.|Con variables (z, m, d = m · z) el diseño es paramétrico: cambias el número de dientes y el engranaje se vuelve a hacer bien, solo.",
        'Dos engranatges encaixen si tenen el mateix mòdul, i la relació de transmissió és el quocient entre els seus nombres de dents.|Dos engranajes encajan si tienen el mismo módulo, y la relación de transmisión es el cociente entre sus números de dientes.'],
      steps: [
        { k: 'm3predict', ph: 'recorda', q: 'Recorda els patrons circulars. Quin model fa?|Recuerda los patrones circulares. ¿Qué modelo hace?', prog: 'cilindre(22, 5)\nrepeteix i de 0 a 5 {\n  gira(0, 0, i * 60) mou(8, -2, 0) cub(8, 4, 5)\n}',
          opts: [{ prog: 'cilindre(22, 5)\nrepeteix i de 0 a 5 {\n  gira(0, 0, i * 60) mou(8, -2, 0) cub(8, 4, 5)\n}' }, { prog: 'cilindre(22, 5)\nrepeteix i de 0 a 7 {\n  gira(0, 0, i * 45) mou(8, -2, 0) cub(8, 4, 5)\n}' }, { prog: 'cilindre(22, 5)\nrepeteix i de 0 a 3 {\n  gira(0, 0, i * 90) mou(8, -2, 0) cub(8, 4, 5)\n}' }], a: 0,
          ex: "De 0 a 5 són 6 dents, cada 60°. Ja és una roda dentada!|De 0 a 5 son 6 dientes, cada 60°. ¡Ya es una rueda dentada!" },
        { k: 'quiz', ph: 'recorda', q: 'Si <code>n = 10</code>, quants graus gira cada còpia amb <code>gira(0, 0, i * 360 / n)</code>?|Si <code>n = 10</code>, ¿cuántos grados gira cada copia con <code>gira(0, 0, i * 360 / n)</code>?', opts: ['36°|36°', '10°|10°', '3,6°|3,6°'], a: 0 },
        { k: 'story', ph: 'missio', who: 'bit', scene: 'estudi', title: "L'autòmat de 2n d'ESO|El autómata de 2.º de ESO",
          t: "La classe de Tecnologia de 2n d'ESO construeix un <b>autòmat</b>: un ninot que mou els braços quan gires una manovella. Per dins hi ha <b>engranatges</b> de 8, 12, 16 i 20 dents que han d'encaixar entre ells. No en farem quatre de diferents: farem <b>un sol programa paramètric</b> que els faci tots. La Nuvi ja escalfa!|La clase de Tecnología de 2.º de ESO construye un <b>autómata</b>: un muñeco que mueve los brazos cuando giras una manivela. Por dentro hay <b>engranajes</b> de 8, 12, 16 y 20 dientes que tienen que encajar entre ellos. No haremos cuatro distintos: haremos <b>un solo programa paramétrico</b> que los haga todos. ¡La Nuvi ya se calienta!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Engranatges|Engranajes', t: 'Rodes que es mouen entre elles|Ruedas que se mueven entre ellas', anim: 'p5gear',
            x: "Un engranatge té tres parts: el <b>disc</b>, les <b>dents</b> (un patró circular!) i el <b>forat de l'eix</b>. Quan dues rodes encaixen, giren en sentits contraris. Si el pinyó té 8 dents i la roda 16, el pinyó fa <b>2 voltes</b> per cada volta de la roda.|Un engranaje tiene tres partes: el <b>disco</b>, los <b>dientes</b> (¡un patrón circular!) y el <b>agujero del eje</b>. Cuando dos ruedas encajan, giran en sentidos contrarios. Si el piñón tiene 8 dientes y la rueda 16, el piñón da <b>2 vueltas</b> por cada vuelta de la rueda." },
          { k: 'Les dents|Los dientes', t: 'Un patró circular de dents|Un patrón circular de dientes', media: { k: 'model', prog: GEARB },
            x: "Cada dent és un <code>cub</code> que es mou cap a fora i gira <code>i * 30</code> (12 dents). La dent comença 3 mm <b>dins</b> del disc perquè hi quedi enganxada, i es desplaça mitja amplada en y (−2,25) perquè quedi <b>centrada</b> sobre el radi.|Cada diente es un <code>cubo</code> que se mueve hacia fuera y gira <code>i * 30</code> (12 dientes). El diente empieza 3 mm <b>dentro</b> del disco para quedar enganchado, y se desplaza media anchura en y (−2,25) para quedar <b>centrado</b> sobre el radio." },
          { k: "L'eix|El eje", t: "El forat de l'eix|El agujero del eje", media: { k: 'model', prog: GEAR12 },
            x: "Amb <code>resta { uneix { … } forat }</code>, al disc amb dents li traiem el cilindre del centre. El forat és <b>més alt</b> que l'engranatge: comença a z = −1 i fa 2 mm més. Si no, quedaria una pell de plàstic i l'eix no hi entraria.|Con <code>resta { une { … } agujero }</code>, al disco con dientes le quitamos el cilindro del centro. El agujero es <b>más alto</b> que el engranaje: empieza en z = −1 y mide 2 mm más. Si no, quedaría una piel de plástico y el eje no entraría." },
          { k: 'Enginyeria|Ingeniería', t: 'z i m: el llenguatge dels engranatges|z y m: el lenguaje de los engranajes', media: { k: 'model', prog: GEARP },
            x: "Els enginyers diuen <b>z</b> al nombre de dents i <b>m</b> al <b>mòdul</b>, la mida de cada dent. El diàmetre és <code>d = m * z</code>. Dues rodes <b>encaixen si tenen el mateix mòdul</b>: per això, si hi posem més dents, la roda es fa més gran i les dents no s'aprimen.|Los ingenieros llaman <b>z</b> al número de dientes y <b>m</b> al <b>módulo</b>, el tamaño de cada diente. El diámetro es <code>d = m * z</code>. Dos ruedas <b>encajan si tienen el mismo módulo</b>: por eso, si le ponemos más dientes, la rueda se hace más grande y los dientes no se adelgazan.",
            tip: "Diàmetre exterior = m × (z + 2), com als engranatges de veritat.|Diámetro exterior = m × (z + 2), como en los engranajes de verdad." },
          { k: 'Fabricació|Fabricación', t: 'Menys plàstic, mateixa força|Menos plástico, misma fuerza', media: { k: 'model', prog: GEARW },
            x: "Les rodes grans gasten molt de plàstic i temps d'impressió. Els <b>forats d'alleugeriment</b>, repartits en cercle, en treuen material sense afeblir les dents ni l'eix. I per imprimir bé: dents de 2 mm d'ample com a mínim i un forat de l'eix una mica més gran que l'eix.|Las ruedas grandes gastan mucho plástico y tiempo de impresión. Los <b>agujeros de aligeramiento</b>, repartidos en círculo, les quitan material sin debilitar los dientes ni el eje. Y para imprimir bien: dientes de 2 mm de ancho como mínimo y un agujero del eje un poco más grande que el eje." }
        ] },
        { k: 'unplug', ph: 'mans', ico: '📐', title: "La fitxa d'especificacions|La ficha de especificaciones", t: "Per parelles, amb la fitxa, la calculadora i el compàs:|Por parejas, con la ficha, la calculadora y el compás:",
          steps: ["Llegiu l'encàrrec: un pinyó de 8 dents i una roda de 16, mòdul 3, gruix 6 mm i eix de 6 mm.|Leed el encargo: un piñón de 8 dientes y una rueda de 16, módulo 3, grosor 6 mm y eje de 6 mm.",
            "Calculeu per a cada roda: d = m × z, el diàmetre exterior m × (z + 2) i la distància entre els dos centres, (d1 + d2) / 2.|Calculad para cada rueda: d = m × z, el diámetro exterior m × (z + 2) y la distancia entre los dos centros, (d1 + d2) / 2.",
            "Dibuixeu les dues circumferències primitives a escala 1:1 amb el compàs, tocant-se. Si el pinyó fa 6 voltes, quantes en fa la roda?|Dibujad las dos circunferencias primitivas a escala 1:1 con el compás, tocándose. Si el piñón da 6 vueltas, ¿cuántas da la rueda?"],
          tip: "Un enginyer calcula abans de modelar: així sap quins números posarà a les variables.|Un ingeniero calcula antes de modelar: así sabe qué números pondrá en las variables." },
        { k: 'm3predict', ph: 'prova', q: "Al programa paramètric hi ha <code>z = 8</code>. <b>Quin engranatge surt?</b>|En el programa paramétrico hay <code>z = 8</code>. <b>¿Qué engranaje sale?</b>", prog: GZ(8),
          opts: [{ prog: GZ(8) }, { prog: GZ(12) }, { prog: GZ(16) }], a: 0,
          ex: "Amb z = 8 i m = 3, d = 24 mm: la roda més petita, amb 8 dents. Com que el mòdul no canvia, les dents són iguals a les de les rodes grans.|Con z = 8 y m = 3, d = 24 mm: la rueda más pequeña, con 8 dientes. Como el módulo no cambia, los dientes son iguales a los de las ruedas grandes." },
        { k: 'm3spot', ph: 'investiga', q: "La Nuvi ha imprès aquest engranatge i <b>les dents han sortit soltes</b>. Toca la instrucció que falla.|La Nuvi ha impreso este engranaje y <b>los dientes han salido sueltos</b>. Toca la instrucción que falla.", prog: 'resta {\n  uneix {\n    cilindre(36, 6)\n    repeteix i de 0 a 11 {\n      gira(0, 0, i * 30) mou(19, -2.25, 0)! cub(6, 4.5, 6)\n    }\n  }\n  mou(0, 0, -1) cilindre(6, 8)\n}', target: GEAR12,
          ex: "El disc fa 36 mm: el seu radi és 18. Les dents comencen a 19, 1 mm fora del disc, i no s'hi enganxen. Han de començar dins del disc, a 15.|El disco mide 36 mm: su radio es 18. Los dientes empiezan en 19, 1 mm fuera del disco, y no se enganchan. Tienen que empezar dentro del disco, en 15." },
        { k: 'm3spot', ph: 'investiga', q: "Ara les dents estan bé, però <b>l'eix no hi entra</b>: el forat no travessa. On és l'error?|Ahora los dientes están bien, pero <b>el eje no entra</b>: el agujero no atraviesa. ¿Dónde está el error?", prog: 'resta {\n  uneix {\n    cilindre(36, 6)\n    repeteix i de 0 a 11 {\n      gira(0, 0, i * 30) mou(15, -2.25, 0) cub(6, 4.5, 6)\n    }\n  }\n  mou(0, 0, -1) cilindre(6, 3)!\n}', target: GEAR12,
          ex: "El forat comença a z = −1 i només fa 3 mm: arriba fins a z = 2 i l'engranatge en fa 6. Ha de fer 8 mm (6 + 2) per travessar-lo del tot.|El agujero empieza en z = −1 y solo mide 3 mm: llega hasta z = 2 y el engranaje mide 6. Tiene que medir 8 mm (6 + 2) para atravesarlo del todo." },
        { k: 'move', ph: 'pausa', title: 'Engranatges humans|Engranajes humanos', secs: 40,
          t: "Per parelles, cara a cara: una persona és el <b>pinyó</b> i l'altra, la <b>roda</b>. La roda fa una volta sencera sobre si mateixa, a poc a poc, mentre el pinyó en fa dues, i en sentit contrari! Després canvieu els papers.|Por parejas, cara a cara: una persona es el <b>piñón</b> y la otra, la <b>rueda</b>. La rueda da una vuelta entera sobre sí misma, despacio, mientras el piñón da dos, ¡y en sentido contrario! Después cambiad los papeles." },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Pas 1: les dents.</b> Al disc de 36 × 6 mm, posa-hi 12 dents de 6 × 4,5 × 6 mm repartides en cercle (comencen a 15 mm del centre).|<b>Paso 1: los dientes.</b> Al disco de 36 × 6 mm, ponle 12 dientes de 6 × 4,5 × 6 mm repartidas en círculo (empiezan a 15 mm del centro).", start: 'cilindre(36, 6)', blocks: ['cil', 'cub', 'mou', 'gira', 'rep'],
          target: GEARB, checks: [ck('match', { target: GEARB, th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 12, max: 12, txt: 'Exactament 12 dents|Exactamente 12 dientes' }), ck('uses', { b: 'rep' }), ck('one')],
          hint: "12 dents → 360 / 12 = 30°. Cada dent: gira(0, 0, i * 30) mou(15, -2.25, 0) cub(6, 4.5, 6).|12 dientes → 360 / 12 = 30°. Cada diente: gira(0, 0, i * 30) mueve(15, -2.25, 0) cubo(6, 4.5, 6).", sol: GEARB },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Pas 2: el forat de l'eix.</b> Uneix el disc i les dents i resta-hi un forat de 6 mm que travessi tot l'engranatge.|<b>Paso 2: el agujero del eje.</b> Une el disco y los dientes y réstale un agujero de 6 mm que atraviese todo el engranaje.", start: GEARB, blocks: ['cil', 'cub', 'mou', 'gira', 'rep', 'uneix', 'resta'],
          target: GEAR12, checks: [ck('match', { target: GEAR12, th: 0.9, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('hole'), ck('one'), ck('uses', { b: 'diff' })],
          hint: "Estructura: resta { uneix { el disc i el bucle } mou(0, 0, -1) cilindre(6, 8) }.|Estructura: resta { une { el disco y el bucle } mueve(0, 0, -1) cilindro(6, 8) }.", sol: GEAR12 },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Pas 3: paramètric.</b> Ja tens les variables. Fes l'engranatge amb elles perquè funcioni amb <b>qualsevol z</b> (8, 12, 20…) i qualsevol mòdul m. Les dents fan 2·m de llarg, 1,5·m d'ample i comencen a d / 2 − m.|<b>Paso 3: paramétrico.</b> Ya tienes las variables. Haz el engranaje con ellas para que funcione con <b>cualquier z</b> (8, 12, 20…) y cualquier módulo m. Los dientes miden 2·m de largo, 1,5·m de ancho y empiezan en d / 2 − m.", start: GSTART, blocks: ['cil', 'cub', 'mou', 'gira', 'rep', 'uneix', 'resta', 'var'], vars: ['z', 'm', 'd', 'h', 'e'],
          target: GEARP, checks: [ck('count', { t: 'box', min: 'z', max: 'z', txt: 'Té z dents|Tiene z dientes' }), ck('hole'), ck('one'), ck('size', { ax: 'x', v: 'd + 2 * m', t: "Diàmetre exterior: m × (z + 2)|Diámetro exterior: m × (z + 2)" }), ck('param', { v: 'z', vals: [8, 20] }), ck('param', { v: 'm', vals: [2, 4] })],
          hint: "Substitueix cada número per la seva variable: gira(0, 0, i * 360 / z) mou(d / 2 - m, -m * 0.75, 0) cub(2 * m, 1.5 * m, h). El bucle, de 0 a (z - 1). El forat: cilindre(e, h + 2).|Sustituye cada número por su variable: gira(0, 0, i * 360 / z) mueve(d / 2 - m, -m * 0.75, 0) cubo(2 * m, 1.5 * m, h). El bucle, de 0 a (z - 1). El agujero: cilindro(e, h + 2).", sol: GEARP },
        { k: 'm3code', ph: 'repte', text: true, q: "<b>Pas 4: més lleuger.</b> La roda de 20 dents gasta massa plàstic. Resta-hi <b>4 forats d'alleugeriment</b> de diàmetre d / 5, repartits en cercle a d / 4 + 2 del centre i girats 45° respecte de les dents.|<b>Paso 4: más ligero.</b> La rueda de 20 dientes gasta demasiado plástico. Réstale <b>4 agujeros de aligeramiento</b> de diámetro d / 5, repartidos en círculo a d / 4 + 2 del centro y girados 45° respecto a los dientes.", start: GEARP20, blocks: ['cil', 'cub', 'mou', 'gira', 'rep', 'uneix', 'resta', 'var'],
          target: GEARW, checks: [ck('count', { t: 'cyl', hole: true, min: 5, max: 5, txt: "L'eix i 4 forats d'alleugeriment|El eje y 4 agujeros de aligeramiento" }), ck('vol', { max: 17, t: 'Pesa menys: com a molt 17 cm³ de plàstic|Pesa menos: como mucho 17 cm³ de plástico' }), ck('one'), ck('uses', { b: 'rep' })],
          hint: "Un segon bucle dins de la resta, després del forat de l'eix: repeteix k de 0 a 3 { gira(0, 0, k * 90 + 45) mou(d / 4 + 2, 0, -1) cilindre(d / 5, h + 2) }.|Un segundo bucle dentro de la resta, después del agujero del eje: repite k de 0 a 3 { gira(0, 0, k * 90 + 45) mueve(d / 4 + 2, 0, -1) cilindro(d / 5, h + 2) }.", sol: GEARW },
        { k: 'm3code', ph: 'repte', text: true, extra: true, q: "⭐ <b>Dues rodes que encaixen.</b> Al costat del pinyó de 8 dents, fes una roda de 16 dents del mateix mòdul (d = 48), amb el centre a x = 36, girada 11,25° perquè les dents encaixin.|⭐ <b>Dos ruedas que encajan.</b> Al lado del piñón de 8 dientes, haz una rueda de 16 dientes del mismo módulo (d = 48), con el centro en x = 36, girada 11,25° para que los dientes encajen.", start: PIN8C, blocks: ['cil', 'cub', 'mou', 'gira', 'rep', 'uneix', 'resta'],
          target: TWO, checks: [ck('match', { target: TWO.split('|')[0], th: 0.88, t: "S'assembla al fantasma|Se parece al fantasma" }), ck('count', { t: 'box', min: 24, max: 24, txt: '8 + 16 = 24 dents|8 + 16 = 24 dientes' }), ck('uses', { b: 'gira' })],
          hint: "Copia el pinyó i canvia els números: disc de 48, bucle de 0 a 15 cada 22,5°, dents a 21 mm. Tot dins de mou(36, 0, 0) gira(0, 0, 11.25). Fixa't que has hagut de copiar molt de codi: a la unitat següent ho resoldrem amb mòduls!|Copia el piñón y cambia los números: disco de 48, bucle de 0 a 15 cada 22,5°, dientes a 21 mm. Todo dentro de mueve(36, 0, 0) gira(0, 0, 11.25). Fíjate en que has tenido que copiar mucho código: ¡en la unidad siguiente lo resolveremos con módulos!", sol: TWO },
        { k: 'm3free', ph: 'crea', text: true, q: "<b>Projecte: el teu engranatge per a l'autòmat.</b> Tria z i m, completa el programa paramètric i afegeix-hi alguna cosa teva: la maneta de la manovella, forats d'alleugeriment, un buit per a un cargol… Comprova que continua funcionant si canvies z.|<b>Proyecto: tu engranaje para el autómata.</b> Elige z y m, completa el programa paramétrico y añádele algo tuyo: el mango de la manivela, agujeros de aligeramiento, un hueco para un tornillo… Comprueba que sigue funcionando si cambias z.",
          name: "El meu engranatge|Mi engranaje", start: GSTART, blocks: ['cil', 'cub', 'esf', 'con', 'tub', 'mou', 'gira', 'escala', 'color', 'rep', 'uneix', 'resta', 'var'], vars: ['z', 'm', 'd', 'h', 'e'],
          crit: ["Fa servir les variables z (dents) i m (mòdul), i d = m * z|Usa las variables z (dientes) y m (módulo), y d = m * z", "Té el forat de l'eix que travessa|Tiene el agujero del eje que atraviesa", 'Funciona amb z = 8 i amb z = 16, i és una sola peça|Funciona con z = 8 y con z = 16, y es una sola pieza', "Hi has afegit un detall propi (maneta, forats, relleu…)|Le has añadido un detalle propio (mango, agujeros, relieve…)"],
          checks: [ck('uses', { b: 'rep' }), ck('hole'), ck('one'), ck('onplate'), ck('param', { v: 'z', vals: [8, 16] })], sol: GEARFREE },
        { k: 'story', ph: 'crea', who: 'bit', scene: 'estudi', title: 'A la impressora!|¡A la impresora!',
          t: "Projecte desat! A «Projectes» pots descarregar l'<b>STL</b> per a la Nuvi i el <b>.scad</b> per obrir-lo amb OpenSCAD. Abans d'imprimir, fes la fitxa tècnica: quantes dents té, quin mòdul, quin diàmetre exterior i amb quina roda encaixa. Un enginyer sempre documenta!|¡Proyecto guardado! En «Proyectos» puedes descargar el <b>STL</b> para la Nuvi y el <b>.scad</b> para abrirlo con OpenSCAD. Antes de imprimir, haz la ficha técnica: cuántos dientes tiene, qué módulo, qué diámetro exterior y con qué rueda encaja. ¡Un ingeniero siempre documenta!" },
        { k: 'quiz', ph: 'tanca', q: 'Un pinyó de 10 dents mou una roda de 30. Si el pinyó fa 3 voltes, quantes en fa la roda?|Un piñón de 10 dientes mueve una rueda de 30. Si el piñón da 3 vueltas, ¿cuántas da la rueda?', opts: ['1|1', '3|3', '9|9'], a: 0, ex: "3 voltes × 10 dents = 30 dents passades: la roda de 30 fa 1 volta. La relació és 30 / 10 = 3.|3 vueltas × 10 dientes = 30 dientes pasados: la rueda de 30 da 1 vuelta. La relación es 30 / 10 = 3." },
        { k: 'quiz', ph: 'tanca', q: "Per què dues rodes han de tenir el mateix mòdul m per encaixar?|¿Por qué dos ruedas tienen que tener el mismo módulo m para encajar?", opts: ['Perquè així les seves dents tenen la mateixa mida|Porque así sus dientes tienen el mismo tamaño', 'Perquè així tenen el mateix nombre de dents|Porque así tienen el mismo número de dientes', 'Perquè així giren al mateix sentit|Porque así giran en el mismo sentido'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] }
  ] };
})();
