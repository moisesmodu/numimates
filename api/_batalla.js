import { sql } from './_lib.js';
// Batalles: estat compartit entre l'app (api/battle.js), el panell docent (api/profe.js) i els convidats (api/juga.js).
// Tipus: duel (1 contra 1, 48 h) · party (grup d'alumnes, fins a 10) · classe (la crea el docent per al seu grup:
// la projecta, no hi juga i la fa començar ell) · oberta (com la de classe, però per a convidats: hi entra qualsevol
// amb el codi i un nom, sense compte, des de /juga) · comp (competició del grup amb data final: cadascú juga quan vol,
// amb uns quants intents, i compta el millor). Medalles: el docent en dona a mà, amb un comentari.
export const MAX = { duel: 2, party: 10, repte: 10, classe: 45, comp: 60, oberta: 60 };
export const HOURS = { duel: 48, party: 3, repte: 48, classe: 3, comp: 24 * 60, oberta: 3 };
// batalles en directe que porta el docent: sala, compte enrere, rànquing projectat i final
export const LIVE_KINDS = ['classe', 'oberta'];
export const PARTY_MS = 6 * 60 * 1000;
const PARTY_MS_10 = PARTY_MS;
export const BWORDS = ['ZEUS', 'HERA', 'ATENA', 'APOL', 'HERMES', 'ARES', 'NIKE', 'IRIS', 'EOS', 'GEA', 'URA', 'TITA', 'FENIX', 'PEGAS', 'ARGO', 'HIDRA'];
export const MEDALS = ['esforc', 'ajuda', 'idees', 'millora', 'repte', 'atencio', 'calcul', 'constancia'];
let READY = null;
// les batalles del docent (classe, comp) no tenen amfitrió: a producció la columna host era NOT NULL i no es podien crear
// Els canvis d'estructura només s'apliquen si falta alguna cosa (un ALTER bloqueja la taula: no a cada arrencada)
const batOk = async () => { const c = new Map((await sql`SELECT table_name || '.' || column_name AS c, is_nullable FROM information_schema.columns WHERE table_schema = 'mates' AND table_name IN ('batalles', 'batalla_jug', 'medalles')`).map(r => [r.c, r.is_nullable]));
  return c.get('batalles.host') === 'YES' && c.has('batalles.tries') && c.has('batalla_jug.best_ms') && c.has('medalles.code'); };
export const batTables = () => READY || (READY = batOk().then(ok => ok || sql`ALTER TABLE mates.batalles ALTER COLUMN host DROP NOT NULL`
  .then(() => sql`ALTER TABLE mates.batalles ADD COLUMN IF NOT EXISTS joc text, ADD COLUMN IF NOT EXISTS lv int, ADD COLUMN IF NOT EXISTS grup_id int, ADD COLUMN IF NOT EXISTS docent_id int, ADD COLUMN IF NOT EXISTS titol text, ADD COLUMN IF NOT EXISTS ends_at timestamptz, ADD COLUMN IF NOT EXISTS tries int`)
  .then(() => sql`ALTER TABLE mates.batalla_jug ADD COLUMN IF NOT EXISTS tries int NOT NULL DEFAULT 0, ADD COLUMN IF NOT EXISTS best_c int, ADD COLUMN IF NOT EXISTS best_ms int`)
  .then(() => sql`CREATE INDEX IF NOT EXISTS batalles_grup ON mates.batalles (grup_id, kind, created_at DESC)`)
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.medalles (id serial PRIMARY KEY, code text NOT NULL, kind text NOT NULL, comment text, docent_id int, docent_nom text, seen boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now())`)
  .then(() => sql`CREATE INDEX IF NOT EXISTS medalles_code ON mates.medalles (code, created_at DESC)`))
  .catch(e => { READY = null; throw e; }));

// Convidats de les batalles obertes: no tenen compte. Cada dispositiu rep una clau secreta en entrar i només se'n desa
// el resum (sha-256). Van en una taula a part perquè no comptin a informes ni estadístiques d'alumnes; s'esborren als 30 dies.
// Les batalles del docent (classe, oberta, comp) tenen el nombre de preguntes que tria (batalles.nq) i poden barrejar
// l'ordre per a cada jugador (batalles.mix); les dels alumnes (duel, party) en tenen sempre 10, en el mateix ordre.
let CONV = null;
export const convTables = () => CONV || (CONV = sql`CREATE TABLE IF NOT EXISTS mates.batalla_conv (id serial PRIMARY KEY, code text NOT NULL, tok text NOT NULL UNIQUE, name text NOT NULL,
    companion text, done int NOT NULL DEFAULT 0, correct int NOT NULL DEFAULT 0, ms int NOT NULL DEFAULT 0, finished boolean NOT NULL DEFAULT false, finished_at timestamptz, joined_at timestamptz NOT NULL DEFAULT now())`
  .then(() => sql`CREATE INDEX IF NOT EXISTS batalla_conv_code ON mates.batalla_conv (code, joined_at)`)
  // les columnes només s'afegeixen si falten (un ALTER bloqueja la taula: no a cada arrencada)
  .then(() => sql`SELECT count(*)::int AS n FROM information_schema.columns WHERE table_schema = 'mates' AND table_name = 'batalles' AND column_name IN ('nq', 'mix')`)
  .then(r => r[0].n >= 2 || sql`ALTER TABLE mates.batalles ADD COLUMN IF NOT EXISTS nq int, ADD COLUMN IF NOT EXISTS mix boolean`).catch(e => { CONV = null; throw e; }));
export const NQ = [5, 10, 15, 20, 25, 30];
const TEACHER_KINDS = ['classe', 'oberta', 'comp'];
const nqOf = b => TEACHER_KINDS.includes(b.kind) && NQ.includes(b.nq) ? b.nq : 10;
// llavor de l'ordre de les preguntes d'un jugador: les mateixes preguntes per a tothom, però cadascú les rep barrejades
const h32 = s => { let h = 0x811c9dc5; for (const c of String(s)) h = Math.imul(h ^ c.charCodeAt(0), 0x01000193); return h >>> 0; };

// millor resultat d'un jugador de competició: l'intent en curs (si l'ha acabat) o el millor dels anteriors
const bestOf = p => {
  const cur = p.finished ? [p.correct, p.ms] : null, prev = p.best_c != null ? [p.best_c, p.best_ms] : null;
  if (!cur) return prev; if (!prev) return cur;
  return cur[0] > prev[0] || (cur[0] === prev[0] && cur[1] < prev[1]) ? cur : prev;
};

// estat d'una batalla vist per un alumne (sid), per un convidat (gid = id a batalla_conv) o pel docent (sid i gid nuls:
// sense secrets, i amb una clau estable per jugador i l'id dels convidats, per animar el rànquing i poder-los treure)
export async function batState(bcode, sid, gid = null) {
  const b = (await sql`SELECT * FROM mates.batalles WHERE code = ${bcode}`)[0];
  if (!b) return null;
  let pl = await sql`SELECT sid, name, companion, card, done, correct, ms, finished, tries, best_c, best_ms, joined_at FROM mates.batalla_jug WHERE code = ${bcode} ORDER BY joined_at`;
  if (b.kind === 'oberta') {
    await convTables();
    const gs = await sql`SELECT id, name, companion, done, correct, ms, finished, joined_at FROM mates.batalla_conv WHERE code = ${bcode} ORDER BY joined_at`;
    pl = [...pl, ...gs.map(g => ({ ...g, sid: 'g:' + g.id, card: null, tries: 0, best_c: null, best_ms: null, guest: g.id }))]
      .sort((x, y) => new Date(x.joined_at) - new Date(y.joined_at));
  }
  const staff = !sid && gid == null;
  if (gid != null) sid = 'g:' + gid;
  const now = Date.now(), start = b.start_at ? new Date(b.start_at).getTime() : null, created = new Date(b.created_at).getTime();
  const comp = b.kind === 'comp', ends = comp && b.ends_at ? new Date(b.ends_at).getTime() : null, live = LIVE_KINDS.includes(b.kind);
  // temps màxim d'una batalla en directe: 6 minuts per cada 10 preguntes
  const nq = nqOf(b), PARTY_MS = PARTY_MS_10 * nq / 10;
  const allDone = pl.length >= (live ? 1 : 2) && pl.every(p => p.finished);
  const over = comp ? now > ends
    : b.kind === 'duel' ? allDone
    : b.kind === 'repte' ? (now > created + HOURS.repte * 3600e3 || (allDone && pl.length >= MAX.repte))
    : live ? (start ? (allDone || now > start + PARTY_MS) : false)
    : (allDone || (start && now > start + PARTY_MS));
  const limit = comp ? ends : created + HOURS[b.kind] * 3600e3;
  const expired = !over && now > limit, hoursLeft = Math.max(0, Math.round((limit - now) / 3600e3));
  const score = p => comp ? bestOf(p) : (p.finished || over ? [p.correct, p.ms] : null);
  const rank = pl.filter(p => score(p)).sort((x, y) => score(y)[0] - score(x)[0] || score(x)[1] - score(y)[1]);
  const meP = sid ? pl.find(p => p.sid === sid) : null;
  return {
    code: b.code, kind: b.kind, course: b.course, unit: b.unit, status: b.status, nq, joc: b.joc || null, lv: b.lv || null, hoursLeft,
    // a la competició, cada intent té preguntes noves (la llavor canvia amb l'intent)
    seed: comp && meP ? b.seed + (meP.tries | 0) * 7919 : b.seed, mix: !!b.mix,
    // ordre propi de les preguntes (només quan el docent ho ha triat): la llavor depèn del jugador i de l'intent
    oseed: b.mix && meP ? ((h32(meP.sid) ^ (b.seed + (comp ? (meP.tries | 0) * 7919 : 0))) >>> 0) || 1 : null,
    title: b.titol || null, grup: b.grup_id || null, endsAt: b.ends_at || null, tries: b.tries || null,
    triesLeft: comp && meP ? Math.max(0, (b.tries || 1) - (meP.tries | 0) - 1) : null,
    startIn: start ? start - now : null, over: !!over, expired, host: !!sid && b.host === sid, byTeacher: !!b.docent_id, max: MAX[b.kind],
    // temps que queda abans que la batalla en directe es tanqui sola
    msLeft: live && start ? Math.max(0, start + PARTY_MS - now) : null,
    players: pl.map(p => { const s = score(p); return { name: p.name, companion: p.companion, card: p.card, done: p.done, correct: p.correct, ms: p.ms, finished: p.finished, me: !!sid && p.sid === sid,
      best: s ? { correct: s[0], ms: s[1] } : null, tries: comp ? (p.tries | 0) + (p.finished ? 1 : 0) : undefined,
      pos: (over || comp) && s ? rank.indexOf(p) + 1 : 0, isHost: p.sid === b.host,
      ...(p.guest ? { guest: true } : {}),
      ...(staff ? { k: p.guest ? 'g' + p.guest : 's' + new Date(p.joined_at).getTime() + p.name, ...(p.guest ? { gid: p.guest } : {}) } : {}) }; })
  };
}
