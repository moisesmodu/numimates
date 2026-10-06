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
  .catch(e => { READY = null; throw e; }));

// el que veu l'alumne: les tasques obertes del seu grup (també les vençudes fa poc, perquè les pugui acabar tard)
export async function tasquesAlumne(grupId) {
  await tasTables();
  return sql`SELECT id, titol, kind, unit, n, inici::text AS inici, fins::text AS fins, docent_nom FROM mates.tasques
    WHERE grup_id = ${grupId} AND NOT tancada AND inici <= CURRENT_DATE AND fins >= CURRENT_DATE - 14 ORDER BY fins, id LIMIT 8`;
}
