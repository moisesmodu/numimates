import { sql } from './_lib.js';
// Batalles: estat compartit entre l'app (api/battle.js) i el panell docent (api/profe.js).
// Tipus: duel (1 contra 1, 48 h) · party (grup d'alumnes, fins a 10) · classe (la crea el docent per al seu grup:
// la projecta, no hi juga i la fa començar ell) · comp (competició del grup amb data final: cadascú juga quan vol,
// amb uns quants intents, i compta el millor). Medalles: el docent en dona a mà, amb un comentari.
export const MAX = { duel: 2, party: 10, repte: 10, classe: 45, comp: 60 };
export const HOURS = { duel: 48, party: 3, repte: 48, classe: 3, comp: 24 * 60 };
export const PARTY_MS = 6 * 60 * 1000;
export const BWORDS = ['ZEUS', 'HERA', 'ATENA', 'APOL', 'HERMES', 'ARES', 'NIKE', 'IRIS', 'EOS', 'GEA', 'URA', 'TITA', 'FENIX', 'PEGAS', 'ARGO', 'HIDRA'];
export const MEDALS = ['esforc', 'ajuda', 'idees', 'millora', 'repte', 'atencio', 'calcul', 'constancia'];
let READY = null;
export const batTables = () => READY || (READY = sql`ALTER TABLE mates.batalles ADD COLUMN IF NOT EXISTS joc text, ADD COLUMN IF NOT EXISTS lv int, ADD COLUMN IF NOT EXISTS grup_id int, ADD COLUMN IF NOT EXISTS docent_id int, ADD COLUMN IF NOT EXISTS titol text, ADD COLUMN IF NOT EXISTS ends_at timestamptz, ADD COLUMN IF NOT EXISTS tries int`
  .then(() => sql`ALTER TABLE mates.batalla_jug ADD COLUMN IF NOT EXISTS tries int NOT NULL DEFAULT 0, ADD COLUMN IF NOT EXISTS best_c int, ADD COLUMN IF NOT EXISTS best_ms int`)
  .then(() => sql`CREATE INDEX IF NOT EXISTS batalles_grup ON mates.batalles (grup_id, kind, created_at DESC)`)
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.medalles (id serial PRIMARY KEY, code text NOT NULL, kind text NOT NULL, comment text, docent_id int, docent_nom text, seen boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now())`)
  .then(() => sql`CREATE INDEX IF NOT EXISTS medalles_code ON mates.medalles (code, created_at DESC)`)
  .catch(e => { READY = null; throw e; }));

// millor resultat d'un jugador de competició: l'intent en curs (si l'ha acabat) o el millor dels anteriors
const bestOf = p => {
  const cur = p.finished ? [p.correct, p.ms] : null, prev = p.best_c != null ? [p.best_c, p.best_ms] : null;
  if (!cur) return prev; if (!prev) return cur;
  return cur[0] > prev[0] || (cur[0] === prev[0] && cur[1] < prev[1]) ? cur : prev;
};

// estat d'una batalla vist per un alumne (sid) o pel docent (sid = null, full = noms complets i sense secrets)
export async function batState(bcode, sid) {
  const b = (await sql`SELECT * FROM mates.batalles WHERE code = ${bcode}`)[0];
  if (!b) return null;
  const pl = await sql`SELECT sid, name, companion, card, done, correct, ms, finished, tries, best_c, best_ms FROM mates.batalla_jug WHERE code = ${bcode} ORDER BY joined_at`;
  const now = Date.now(), start = b.start_at ? new Date(b.start_at).getTime() : null, created = new Date(b.created_at).getTime();
  const comp = b.kind === 'comp', ends = comp && b.ends_at ? new Date(b.ends_at).getTime() : null;
  const allDone = pl.length >= (b.kind === 'classe' ? 1 : 2) && pl.every(p => p.finished);
  const over = comp ? now > ends
    : b.kind === 'duel' ? allDone
    : b.kind === 'repte' ? (now > created + HOURS.repte * 3600e3 || (allDone && pl.length >= MAX.repte))
    : b.kind === 'classe' ? (start ? (allDone || now > start + PARTY_MS) : false)
    : (allDone || (start && now > start + PARTY_MS));
  const limit = comp ? ends : created + HOURS[b.kind] * 3600e3;
  const expired = !over && now > limit, hoursLeft = Math.max(0, Math.round((limit - now) / 3600e3));
  const score = p => comp ? bestOf(p) : (p.finished || over ? [p.correct, p.ms] : null);
  const rank = pl.filter(p => score(p)).sort((x, y) => score(y)[0] - score(x)[0] || score(x)[1] - score(y)[1]);
  const meP = sid ? pl.find(p => p.sid === sid) : null;
  return {
    code: b.code, kind: b.kind, course: b.course, unit: b.unit, status: b.status, joc: b.joc || null, lv: b.lv || null, hoursLeft,
    // a la competició, cada intent té preguntes noves (la llavor canvia amb l'intent)
    seed: comp && meP ? b.seed + (meP.tries | 0) * 7919 : b.seed,
    title: b.titol || null, grup: b.grup_id || null, endsAt: b.ends_at || null, tries: b.tries || null,
    triesLeft: comp && meP ? Math.max(0, (b.tries || 1) - (meP.tries | 0) - 1) : null,
    startIn: start ? start - now : null, over: !!over, expired, host: !!sid && b.host === sid, byTeacher: !!b.docent_id, max: MAX[b.kind],
    players: pl.map(p => { const s = score(p); return { name: p.name, companion: p.companion, card: p.card, done: p.done, correct: p.correct, ms: p.ms, finished: p.finished, me: !!sid && p.sid === sid,
      best: s ? { correct: s[0], ms: s[1] } : null, tries: comp ? (p.tries | 0) + (p.finished ? 1 : 0) : undefined,
      pos: (over || comp) && s ? rank.indexOf(p) + 1 : 0, isHost: p.sid === b.host }; })
  };
}
