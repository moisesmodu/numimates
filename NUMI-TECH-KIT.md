# Numi Tech · Kit de robòtica (proposta de compra)

El curs **Tech Robòtica** (10-12 anys, 5è-6è de primària) està fet per a un robot concret: el **DFRobot Maqueen Lite V5** amb una **BBC micro:bit V2**.
El simulador de l'app reprodueix aquest robot (mides, sensors, motors, LED i botons). El botó **«MakeCode»** de l'app obre el programa a MakeCode, amb els blocs i l'extensió del Maqueen (`Maqueen_V5`) ja posats.
Per això cal comprar **exactament aquest model**: altres versions o altres robots no funcionarien igual amb les sessions.

## Què compreu

**Un kit per grup de 3-4 alumnes** (és el que preveuen les 32 guies), més un de recanvi per aula.

| Peça | Quantitat per kit | Preu orientatiu (oct. 2026) | Notes |
|---|---|---|---|
| DFRobot **Maqueen Lite V5** (ref. MBT0046) | 1 | 35-45 € | Porta el robot, el mapa de seguir línies i el sensor d'ultrasons. **No porta la micro:bit.** |
| **BBC micro:bit V2** | 1 | 17-20 € | És la versió que es ven ara. El curs no fa servir el micròfon ni l'altaveu; si l'escola ja té micro:bit V1, consulteu-ho abans de comprar-ne de noves. |
| Piles **AA** | 3 (+3 de recanvi) | 3-5 € (alcalines) o 10-15 € (recarregables) | Vegeu «Piles», més avall. |
| Cable **USB** de dades (micro-USB) | 1 | 2-4 € | Ha de passar dades, no només càrrega. |

**Total aproximat: 70-80 € per kit.**

| Alumnes a l'aula | Grups de 3-4 | Kits (amb 1 de recanvi) | Cost aproximat |
|---|---|---|---|
| 12 | 4 | 5 | 350-400 € |
| **25** | **7** | **8** | **unes 600 €** |

Amb 8 kits i 12-15 minuts de robot real per sessió, cada grup pot fer uns 3 intents (provar, mesurar i ajustar). Cada grup necessita una pista a terra d'uns **130 × 90 cm**.

### Piles

- El Maqueen Lite V5 funciona amb **3 piles AA** i necessita **entre 3,5 V i 5 V**.
- **Recomanat: alcalines noves** (3 × 1,5 V = 4,5 V). El robot va a la velocitat que preveuen les sessions.
- Amb **recarregables NiMH** (3 × 1,2 V = 3,6 V) es queda molt a prop del mínim: el robot va més lent i gira menys, i cada kit es comporta diferent. Si les feu servir, carregueu-les la nit abans i **recalibreu els girs** (les sessions de les unitats 1, 2 i 7 ho expliquen) cada vegada que les canvieu.
- Mai barregeu piles noves i velles, ni de tipus diferents.
- Les piles gastades van al **contenidor de piles** (punt verd o contenidor de l'escola), mai a la brossa. Les sessions k1-2 i k8-4 en parlen amb l'alumnat.

### Per a l'aula (una vegada)

- Carregador de piles AA (només si feu servir recarregables).
- Cinta aïllant negra de 2 cm d'amplada, per fer les línies que segueixen els sensors.
- Cinta de pintor.
- Paper blanc gran o cartolines A2.
- Cintes mètriques i un transportador.
- Capses de sabates i llibres, per fer murs i obstacles.
- Llanternes o el mòbil, per a les sessions de llum.

Cada guia de sessió diu, a «Materials», exactament què cal aquell dia.

## Què no compreu

- **Maqueen Plus** (V2 o V3) o **Maqueen Lite antic** (sense «V5»): tenen blocs, mides o sensors diferents.
- Un altre robot (mBot2, LEGO, Sphero…): faria falta refer el simulador i les 32 sessions. L'mBot2, per exemple, costa uns 160 € per robot, i sembla que LEGO SPIKE es deixa de fabricar.

## Com passa el programa al robot

1. A l'app, quan el programa ja funciona al simulador, l'alumne/a prem el botó **«MakeCode»**. S'obre MakeCode dins de Numi Tech, amb el seu programa en blocs i l'extensió del Maqueen ja afegida.
2. Comprova els blocs. **Els blocs del Maqueen surten en anglès** (per exemple, «motor», «pause», «read line sensor»): són els mateixos que al simulador.
3. Connecta la micro:bit amb el cable USB i prem **«Descarrega»**, amb el robot apagat.
4. **La primera vegada**, amb **Chrome o Edge**, MakeCode demana vincular la micro:bit (*pair*): trieu-la a la llista i accepteu. A partir d'aquí, «Descarrega» la programa directament. Amb altres navegadors es descarrega un fitxer `.hex` que s'arrossega a la unitat **MICROBIT**.
5. Cable fora, robot a terra i encès.

**Si l'app no pot obrir MakeCode** (per exemple, perquè la xarxa de l'escola bloqueja la pàgina): «Mostra el codi» → «Copia el codi» i, a [makecode.microbit.org](https://makecode.microbit.org), nou projecte → Extensions → «maqueen» → vista JavaScript → enganxeu-hi el codi → torneu a «Blocs» → «Descarrega». Per a les llums de sota, afegiu també l'extensió **neopixel** (pin P15).

Amb iPad no es pot descarregar per cable: feu servir un ordinador (Windows, Mac, Linux o Chromebook).

### Privadesa

MakeCode és un servei de Microsoft (fet per a la Micro:bit Educational Foundation). Des de Numi Tech **només s'hi envia el programa del robot**: cap nom, cap compte ni cap dada de l'alumnat. No cal registrar-se. Si la xarxa de l'escola filtra webs, demaneu que permeti `makecode.microbit.org`.

## Abans de la primera classe

1. Poseu les piles i enceneu el robot: s'ha d'encendre.
2. Amb un ordinador de l'aula, obriu la sessió 1 de l'app, premeu «MakeCode» i descarregueu el programa a cada micro:bit (així queden totes vinculades). La micro:bit ha de mostrar un ✓. Si surt una ✕, no troba el robot: reviseu l'interruptor, les piles i que la micro:bit estigui ben endollada.
3. Comproveu que la xarxa deixa obrir MakeCode. Si no, prepareu el camí alternatiu («Copia el codi» + makecode.microbit.org).
4. Regla de seguretat que repeteixen les guies: el programa es descarrega amb el robot apagat, i el robot s'encén a terra (o agafat amb les rodes a l'aire), mai a la vora d'una taula.

## I el curs Tech Robot (6-8 anys)?

No necessita cap robot. En Bit és virtual, i les activitats sense pantalla es fan amb el cos, amb fitxes i amb una quadrícula a terra.
Si més endavant voleu un robot físic per a aquestes edats, la idea seria un de botons a terra, com un Blue-Bot, i caldria adaptar algunes activitats.

## Fonts

- [DFRobot · Maqueen Lite V5](https://www.dfrobot.com/product-2937.html) i el seu [wiki](https://wiki.dfrobot.com/mbt0046/) (llista de contingut: robot, mapa i sensor d'ultrasons; 3 piles AA, 3,5-5 V)
- [Kiwi Electronics · Maqueen Lite V5](https://www.kiwi-electronics.com/en/maqueen-lite-v5-microbit-robot-kit-for-stem-20499) (preu europeu)
- [RS España · micro:bit V2](https://es.rs-online.com/web/p/bbc-micro-bit/2336797) (unitat a 19,32 € amb IVA; packs de 10)
- [RobotShop · mBot2, pack de 6](https://www.robotshop.com/es/products/makeblock-mbot2-classroom-pack-6-robots) (per comparar)
