import { sql, body, cleanCode, summary, ok, cleanState, blocked, fail, tooMany } from './_lib.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), code = cleanCode(b.code), state = b.state;
  if (!code || !state || typeof state !== 'object' || Array.isArray(state)) return ok(res, { error: 'dades' }, 400);
  if (JSON.stringify(state).length > 300000) return ok(res, { error: 'massa gran' }, 413);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const cur = await sql`SELECT xp, state FROM mates.alumnes WHERE code = ${code} AND active`;
  if (!cur.length) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
  cleanState(state);
  // Regla de conflicte: l'XP només creix. Si arriba un estat amb menys XP, retornem el del servidor.
  if (!b.reset && (state.xp | 0) < cur[0].xp) return ok(res, { ok: false, state: cur[0].state });
  state.code = code;
  state.unlockAll = !!(cur[0].state && cur[0].state.unlockAll);
  const s = summary(state);
  await sql`UPDATE mates.alumnes SET state = ${JSON.stringify(state)}, name = ${String(state.name || '').slice(0, 30) || 'Alumne'}, course = ${s.course},
    xp = ${s.xp}, streak = ${s.streak}, best = ${s.best}, last_day = ${s.last_day}, lessons = ${s.lessons}, answers = ${s.answers}, correct = ${s.correct}, updated_at = now()
    WHERE code = ${code}`;
  return ok(res, { ok: true });
}
