import { sql, body, cleanCode, ok, blocked, fail, tooMany, plaOf, alumneOk } from './_lib.js';
import { randomInt } from 'crypto';
import { batTables, batState } from './_batalla.js';
// Batalles de mates. Tothom rep les mateixes preguntes (surten de la llavor `seed`).
// Guanya qui n'encerta més; si hi ha empat, qui ha trigat menys. Els codis secrets dels alumnes
// no surten mai: als altres jugadors només se'ls ensenya el nom de pila.
const WORDS = ['ZEUS', 'HERA', 'ATENA', 'APOL', 'HERMES', 'ARES', 'NIKE', 'IRIS', 'EOS', 'GEA', 'URA', 'TITA', 'FENIX', 'PEGAS', 'ARGO', 'HIDRA'];
// Numi Ment: el duel o repte és d'un dels seus jocs (joc) amb una dificultat fixa (lv) per a tothom
const JOCS_MENT = ['ate', 'int', 'cal', 'com', 'ref', 'rel', 'sim', 'ser', 'sin'];
// el nom el tria l'app: sense caràcters d'HTML, per si algun lloc el pinta sense escapar
const first = n => String(n || '').replace(/[<>&"'`\\]/g, '').trim().split(/\s+/)[0].slice(0, 20) || 'Alumne';
const cleanB = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 14);
const cleanCard = c => (typeof c === 'string' && /^[a-z]{2,12}$/.test(c)) ? c : null;

const state = batState;

export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  await batTables();
  const b = body(req), sid = cleanCode(b.code), act = b.action;
  if (!sid) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const me = (await sql`SELECT a.name, a.pla, a.pla_fins, a.grup_id, a.pass_hash, g.opts FROM mates.alumnes a LEFT JOIN mates.grups g ON g.id = a.grup_id AND g.actiu WHERE a.code = ${sid} AND a.active`)[0];
  if (!me) { await fail(req, 'codi'); return ok(res, { error: 'alumne' }, 404); }
  if (!(await alumneOk(req, res, sid, me.pass_hash))) return;
  // les batalles són del pla Premium (o de l'escola): el pla gratuït només pot mirar les que ja té
  if (plaOf(me) === 'free' && (act === 'create' || act === 'join')) return ok(res, { error: 'premium' }, 402);
  // «mode escola»: si el docent ha apagat les batalles del grup, tampoc es poden fer saltant-se l'app
  if (me.opts && me.opts.batalles === false && (act === 'create' || act === 'join')) return ok(res, { error: 'escola-off' }, 403);
  const name = first(b.name || me.name), comp = /^[a-z]{2,12}$/.test(b.companion) ? b.companion : 'numi';

  if (act === 'create') {
    const joc = JOCS_MENT.includes(b.joc) ? b.joc : null, lv = joc ? Math.max(1, Math.min(10, b.lv | 0 || 5)) : null;
    const kind = b.kind === 'party' && !joc ? 'party' : b.kind === 'repte' && joc ? 'repte' : 'duel';
    const course = Math.max(0, Math.min(9, b.course | 0)), unit = Number.isInteger(b.unit) && b.unit >= 0 && b.unit < 12 ? b.unit : null;
    const recent = await sql`SELECT count(*)::int AS n FROM mates.batalles WHERE host = ${sid} AND created_at > now() - interval '1 hour'`;
    if (recent[0].n >= 15) return ok(res, { error: 'massa' }, 429);
    let bcode;
    for (let t = 0; t < 8; t++) {
      bcode = WORDS[randomInt(WORDS.length)] + '-' + randomInt(1000, 10000);
      const r = await sql`INSERT INTO mates.batalles (code, kind, course, unit, seed, host, joc, lv) VALUES (${bcode}, ${kind}, ${course}, ${unit}, ${randomInt(1, 2 ** 31 - 1)}, ${sid}, ${joc}, ${lv}) ON CONFLICT DO NOTHING RETURNING code`;
      if (r.length) break; bcode = null;
    }
    if (!bcode) return ok(res, { error: 'codi' }, 500);
    await sql`INSERT INTO mates.batalla_jug (code, sid, name, companion, card) VALUES (${bcode}, ${sid}, ${name}, ${comp}, ${kind === 'duel' ? cleanCard(b.card) : null})`;
    return ok(res, await state(bcode, sid));
  }

  // batalles i competicions que el docent ha obert per al grup de l'alumne
  if (act === 'classe') {
    if (!me.grup_id) return ok(res, { list: [] });
    const rows = await sql`SELECT code FROM mates.batalles WHERE grup_id = ${me.grup_id} AND ((kind = 'classe' AND created_at > now() - interval '3 hours') OR (kind = 'comp' AND ends_at > now() - interval '3 days')) ORDER BY created_at DESC LIMIT 10`;
    const list = [];
    for (const r of rows) { const st = await state(r.code, sid); if (st && !(st.kind === 'classe' && st.over && !st.players.some(p => p.me))) list.push(st); }
    return ok(res, { list });
  }

  if (act === 'mine') {
    // Numi Ment només veu els seus reptes (amb joc) i Numi Mates/Pro, les batalles de mates
    const rows = await sql`SELECT j.code FROM mates.batalla_jug j JOIN mates.batalles b USING (code) WHERE j.sid = ${sid} AND b.created_at > now() - interval '14 days' AND ((b.joc IS NOT NULL) = ${!!b.ment}) AND b.kind IN ('duel', 'party', 'repte') ORDER BY b.created_at DESC LIMIT 8`;
    const list = [];
    for (const r of rows) list.push(await state(r.code, sid));
    return ok(res, { list });
  }

  // els codis de batalla que no existeixen compten com a intent fallit (si no, es podrien anar provant fins a trobar-ne una d'oberta)
  if (await blocked(req, 'batalla', 60)) return tooMany(res);
  const bcode = cleanB(b.bcode);
  const st0 = bcode ? await state(bcode, sid) : null;
  if (!st0) { await fail(req, 'batalla'); return ok(res, { error: 'no-existeix' }, 404); }
  const inside = st0.players.some(p => p.me);

  if (act === 'join') {
    if (!inside) {
      if (st0.expired || st0.over) return ok(res, { error: 'caducada' }, 410);
      if ((st0.kind === 'classe' || st0.kind === 'comp') && st0.grup !== me.grup_id) return ok(res, { error: 'altra-classe' }, 403);
      if ((st0.kind === 'party' || st0.kind === 'classe') && st0.status !== 'lobby') return ok(res, { error: 'començada' }, 409);
      if (!!st0.joc !== !!b.ment) return ok(res, { error: 'altra-app' }, 409);
      if (st0.players.length >= st0.max) return ok(res, { error: 'plena' }, 409);
      await sql`INSERT INTO mates.batalla_jug (code, sid, name, companion, card) VALUES (${bcode}, ${sid}, ${name}, ${comp}, ${st0.kind === 'duel' ? cleanCard(b.card) : null}) ON CONFLICT DO NOTHING`;
    } else if (st0.kind === 'duel' && b.card !== undefined) {
      await sql`UPDATE mates.batalla_jug SET card = ${cleanCard(b.card)} WHERE code = ${bcode} AND sid = ${sid} AND done = 0`;
    }
    return ok(res, await state(bcode, sid));
  }
  if (!inside) return ok(res, { error: 'fora' }, 403);

  if (act === 'start') {
    if (st0.kind !== 'party' || !st0.host) return ok(res, { error: 'amfitrió' }, 403);
    if (st0.players.length < 2) return ok(res, { error: 'sols' }, 409);
    await sql`UPDATE mates.batalles SET status = 'live', start_at = now() + interval '5 seconds' WHERE code = ${bcode} AND status = 'lobby'`;
    return ok(res, await state(bcode, sid));
  }
  // competició: tornar-hi (es guarda el millor intent i es comença de nou amb preguntes noves)
  if (act === 'retry') {
    const meP = st0.players.find(p => p.me);
    if (st0.kind !== 'comp' || st0.over || !meP.finished || !(st0.triesLeft > 0)) return ok(res, { error: 'intents' }, 409);
    await sql`UPDATE mates.batalla_jug SET best_c = CASE WHEN best_c IS NULL OR correct > best_c OR (correct = best_c AND ms < best_ms) THEN correct ELSE best_c END,
      best_ms = CASE WHEN best_c IS NULL OR correct > best_c OR (correct = best_c AND ms < best_ms) THEN ms ELSE best_ms END,
      done = 0, correct = 0, ms = 0, finished = false, finished_at = NULL, tries = tries + 1 WHERE code = ${bcode} AND sid = ${sid} AND finished`;
    return ok(res, await state(bcode, sid));
  }
  if (act === 'progress') {
    if (st0.kind === 'comp' && st0.over) return ok(res, { error: 'caducada' }, 410);
    if (st0.kind === 'classe' && st0.status !== 'live') return ok(res, { error: 'no-començada' }, 409);
    const lim = st0.joc ? 300 : 10, done = Math.max(0, Math.min(lim, b.done | 0)), correct = Math.max(0, Math.min(done, b.correct | 0)), ms = Math.max(0, Math.min(3600e3, b.ms | 0)), fin = !!b.finished;
    // Només endavant: no es pot desfer una resposta ni tornar a jugar
    await sql`UPDATE mates.batalla_jug SET done = ${done}, correct = ${correct}, ms = ${ms}, finished = finished OR ${fin}, finished_at = CASE WHEN ${fin} AND NOT finished THEN now() ELSE finished_at END
      WHERE code = ${bcode} AND sid = ${sid} AND NOT finished AND ${done} >= done AND ${correct} >= correct AND ${ms} >= ms`;
    if ((st0.kind === 'duel' || st0.kind === 'repte') && st0.status === 'lobby') await sql`UPDATE mates.batalles SET status = 'live' WHERE code = ${bcode}`;
    return ok(res, await state(bcode, sid));
  }
  if (act === 'state') return ok(res, st0);
  return ok(res, { error: 'acció' }, 400);
}
