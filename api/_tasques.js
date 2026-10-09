import { sql } from './_lib.js';
// Tasques (deures) que el docent posa al seu grup des del panell. L'app les rep amb la info de la classe
// (api/classe.js, action 'info') i desa el progrés de cada alumne a l'estat: P.deures[id] = { k, n, d }.
// Tipus: 'unit' = fer les n primeres lliçons del camí d'una unitat (amb 2 estrelles o més) · 'gate' = superar la porta.
let READY = null;
export const tasTables = () => READY || (READY = sql`CREATE TABLE IF NOT EXISTS mates.tasques (
    id serial PRIMARY KEY, grup_id int NOT NULL, docent_id int, docent_nom text, titol text NOT NULL, kind text NOT NULL DEFAULT 'unit',
    unit text NOT NULL, n int NOT NULL DEFAULT 5, ajuda boolean NOT NULL DEFAULT true, inici date NOT NULL DEFAULT CURRENT_DATE, fins date NOT NULL,
    tancada boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now())`
  .then(() => sql`CREATE INDEX IF NOT EXISTS tasques_grup ON mates.tasques (grup_id, tancada, fins DESC)`)
  // tasques de reforç o d'ampliació: només per a uns alumnes del grup (NULL = tot el grup)
  .then(() => sql`ALTER TABLE mates.tasques ADD COLUMN IF NOT EXISTS alumnes text[]`)
  .catch(e => { READY = null; throw e; }));

// el que veu l'alumne: les tasques obertes del seu grup (també les vençudes fa poc, perquè les pugui acabar tard)
export async function tasquesAlumne(grupId, code) {
  await tasTables();
  return sql`SELECT id, titol, kind, unit, n, inici::text AS inici, fins::text AS fins, docent_nom FROM mates.tasques
    WHERE grup_id = ${grupId} AND (alumnes IS NULL OR ${code} = ANY(alumnes)) AND NOT tancada AND inici <= CURRENT_DATE AND fins >= CURRENT_DATE - 14 ORDER BY fins, id LIMIT 8`;
}

/* ---------- Classe en directe: què fa cada alumne ara mateix ----------
   L'app avisa en començar una lliçó, cada pocs segons mentre respon i en acabar (api/classe.js, action 'live').
   Només els alumnes d'un grup; es guarda l'últim estat de cadascun (una fila per alumne). */
let LREADY = null;
export const liveTables = () => LREADY || (LREADY = sql`CREATE TABLE IF NOT EXISTS mates.live (code text PRIMARY KEY, grup_id int NOT NULL, d jsonb NOT NULL, at timestamptz NOT NULL DEFAULT now())`
  .then(() => sql`CREATE INDEX IF NOT EXISTS live_grup ON mates.live (grup_id, at DESC)`)
  .catch(e => { LREADY = null; throw e; }));
const int = (v, mx = 999) => Number.isFinite(+v) ? Math.max(0, Math.min(mx, Math.round(+v))) : 0;
const txt = (v, n) => String(v ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, n);
export function liveClean(d) {
  d = d && typeof d === 'object' ? d : {};
  return { s: ['on', 'ans', 'end', 'out'].includes(d.s) ? d.s : 'on', m: txt(d.m, 12), u: /^c\d{1,2}-\d{1,2}$/.test(String(d.u || '')) ? d.u : null, ut: txt(d.ut, 60), lt: txt(d.lt, 70),
    k: int(d.k), n: int(d.n), ok: int(d.ok), ko: int(d.ko), f: int(d.f, 50), h: int(d.h, 20), q: txt(d.q, 110) };
}
export async function liveSet(code, grupId, d) {
  await liveTables();
  await sql`INSERT INTO mates.live (code, grup_id, d, at) VALUES (${code}, ${grupId}, ${JSON.stringify(liveClean(d))}::jsonb, now())
    ON CONFLICT (code) DO UPDATE SET grup_id = EXCLUDED.grup_id, d = EXCLUDED.d, at = now()`;
}
export async function liveOf(grupId) {
  await liveTables();
  return sql`SELECT code, d, extract(epoch FROM now() - at)::int AS ago FROM mates.live WHERE grup_id = ${grupId} AND at > now() - interval '30 minutes'`;
}

/* ---------- Avaluació per competències: el nivell que el docent posa a cada sentit (proposta de Numi + canvis) ---------- */
let AREADY = null;
export const avalTables = () => AREADY || (AREADY = sql`CREATE TABLE IF NOT EXISTS mates.avals (code text NOT NULL, periode text NOT NULL, k text NOT NULL, v text NOT NULL, docent_id int, at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (code, periode, k))`
  .catch(e => { AREADY = null; throw e; }));
