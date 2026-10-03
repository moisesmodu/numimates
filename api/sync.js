import { sql, body, cleanCode, summary, ok, cleanState, blocked, fail, tooMany, alumneOk, consentOk, consentCols } from './_lib.js';
import { addPunts } from './_lliga.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), code = cleanCode(b.code), state = b.state;
  if (!code || !state || typeof state !== 'object' || Array.isArray(state)) return ok(res, { error: 'dades' }, 400);
  if (JSON.stringify(state).length > 300000) return ok(res, { error: 'massa gran' }, 413);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  await consentCols();
  const cur = await sql`SELECT xp, state, active, pass_hash, consent, grup_id, pla, survey FROM mates.alumnes WHERE code = ${code}`;
  if (!cur.length) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
  // un alumne donat de baja no compta com a intent fallit (la seva app encara pot estar oberta a l'aula)
  if (!cur[0].active) return ok(res, { error: 'baixa' }, 410);
  if (!(await alumneOk(req, res, code, cur[0].pass_hash))) return;
  // menor sense el sí de la família: el progrés no es desa al núvol (es queda al dispositiu)
  if (!consentOk(cur[0])) return ok(res, { error: 'permis' }, 403);
  cleanState(state);
  // Regla de conflicte: l'XP només creix. Si arriba un estat amb menys XP, retornem el del servidor.
  if (!b.reset && (state.xp | 0) < cur[0].xp) return ok(res, { ok: false, state: { ...cur[0].state, xp: cur[0].xp } });
  state.code = code;
  state.unlockAll = !!(cur[0].state && cur[0].state.unlockAll);
  // les apps addicionals les decideix l'administrador al panell: mana el servidor
  if (cur[0].state && Array.isArray(cur[0].state.apps)) state.apps = cur[0].state.apps; else delete state.apps;
  const s = summary(state);
  // primera pujada després del permís: l'enquesta inicial completa (abans només hi havia l'edat)
  const sv = b.survey && typeof b.survey === 'object' && !Array.isArray(b.survey) && JSON.stringify(b.survey).length <= 2000 && !(cur[0].survey && cur[0].survey.curs) ? b.survey : null;
  if (sv) await sql`UPDATE mates.alumnes SET survey = ${JSON.stringify({ ...sv, variant: (cur[0].survey || {}).variant || state.variant })} WHERE code = ${code}`;
  await sql`UPDATE mates.alumnes SET state = ${JSON.stringify(state)}, name = ${String(state.name || '').slice(0, 30) || 'Alumne'}, course = ${s.course},
    xp = ${s.xp}, streak = ${s.streak}, best = ${s.best}, last_day = ${s.last_day}, lessons = ${s.lessons}, answers = ${s.answers}, correct = ${s.correct}, updated_at = now()
    WHERE code = ${code}`;
  // Lliga Numi: l'XP guanyada des de l'última sincronització compta com a punts (amb topalls)
  if (!b.reset) { try { await addPunts(code, s.xp - (cur[0].xp | 0), state); } catch (e) { console.error('lliga', e.message); } }
  return ok(res, { ok: true });
}
