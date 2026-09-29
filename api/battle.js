import { sql, body, cleanCode, ok, blocked, fail, tooMany, plaOf } from './_lib.js';
import { randomInt } from 'crypto';
// Batalles de mates. Tothom rep les mateixes preguntes (surten de la llavor `seed`).
// Guanya qui n'encerta més; si hi ha empat, qui ha trigat menys. Els codis secrets dels alumnes
// no surten mai: als altres jugadors només se'ls ensenya el nom de pila.
const WORDS = ['ZEUS', 'HERA', 'ATENA', 'APOL', 'HERMES', 'ARES', 'NIKE', 'IRIS', 'EOS', 'GEA', 'URA', 'TITA', 'FENIX', 'PEGAS', 'ARGO', 'HIDRA'];
const MAX = { duel: 2, party: 10 };
const HOURS = { duel: 48, party: 3 };          // caducitat per entrar
const PARTY_MS = 6 * 60 * 1000;                // una partida de grup es tanca 6 min després de començar
const first = n => String(n || '').trim().split(/\s+/)[0].slice(0, 20) || 'Alumne';
const cleanB = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 14);
const cleanCard = c => (typeof c === 'string' && /^[a-z]{2,12}$/.test(c)) ? c : null;

async function state(bcode, sid) {
  const b = (await sql`SELECT * FROM mates.batalles WHERE code = ${bcode}`)[0];
  if (!b) return null;
  const pl = await sql`SELECT sid, name, companion, card, done, correct, ms, finished FROM mates.batalla_jug WHERE code = ${bcode} ORDER BY joined_at`;
  const now = Date.now(), start = b.start_at ? new Date(b.start_at).getTime() : null;
  const allDone = pl.length >= 2 && pl.every(p => p.finished);
  const over = b.kind === 'duel' ? allDone : (allDone || (start && now > start + PARTY_MS));
  const expired = !over && now > new Date(b.created_at).getTime() + HOURS[b.kind] * 3600e3;
  const rank = [...pl].filter(p => p.finished || over).sort((x, y) => y.correct - x.correct || x.ms - y.ms);
  return {
    code: b.code, kind: b.kind, course: b.course, unit: b.unit, seed: b.seed, status: b.status,
    startIn: start ? start - now : null, over: !!over, expired, host: b.host === sid, max: MAX[b.kind],
    players: pl.map(p => ({ name: p.name, companion: p.companion, card: p.card, done: p.done, correct: p.correct, ms: p.ms, finished: p.finished, me: p.sid === sid, pos: over ? rank.indexOf(p) + 1 : 0, isHost: p.sid === b.host }))
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), sid = cleanCode(b.code), act = b.action;
  if (!sid) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const me = (await sql`SELECT name, pla, pla_fins, grup_id FROM mates.alumnes WHERE code = ${sid} AND active`)[0];
  if (!me) { await fail(req, 'codi'); return ok(res, { error: 'alumne' }, 404); }
  // les batalles són del pla Premium (o de l'escola): el pla gratuït només pot mirar les que ja té
  if (plaOf(me) === 'free' && (act === 'create' || act === 'join')) return ok(res, { error: 'premium' }, 402);
  const name = first(b.name || me.name), comp = String(b.companion || 'numi').slice(0, 12);

  if (act === 'create') {
    const kind = b.kind === 'party' ? 'party' : 'duel';
    const course = Math.max(0, Math.min(9, b.course | 0)), unit = Number.isInteger(b.unit) && b.unit >= 0 && b.unit < 12 ? b.unit : null;
    const recent = await sql`SELECT count(*)::int AS n FROM mates.batalles WHERE host = ${sid} AND created_at > now() - interval '1 hour'`;
    if (recent[0].n >= 15) return ok(res, { error: 'massa' }, 429);
    let bcode;
    for (let t = 0; t < 8; t++) {
      bcode = WORDS[randomInt(WORDS.length)] + '-' + randomInt(1000, 10000);
      const r = await sql`INSERT INTO mates.batalles (code, kind, course, unit, seed, host) VALUES (${bcode}, ${kind}, ${course}, ${unit}, ${randomInt(1, 2 ** 31 - 1)}, ${sid}) ON CONFLICT DO NOTHING RETURNING code`;
      if (r.length) break; bcode = null;
    }
    if (!bcode) return ok(res, { error: 'codi' }, 500);
    await sql`INSERT INTO mates.batalla_jug (code, sid, name, companion, card) VALUES (${bcode}, ${sid}, ${name}, ${comp}, ${kind === 'duel' ? cleanCard(b.card) : null})`;
    return ok(res, await state(bcode, sid));
  }

  if (act === 'mine') {
    const rows = await sql`SELECT j.code FROM mates.batalla_jug j JOIN mates.batalles b USING (code) WHERE j.sid = ${sid} AND b.created_at > now() - interval '14 days' ORDER BY b.created_at DESC LIMIT 8`;
    const list = [];
    for (const r of rows) list.push(await state(r.code, sid));
    return ok(res, { list });
  }

  const bcode = cleanB(b.bcode);
  const st0 = await state(bcode, sid);
  if (!st0) return ok(res, { error: 'no-existeix' }, 404);
  const inside = st0.players.some(p => p.me);

  if (act === 'join') {
    if (!inside) {
      if (st0.expired || st0.over) return ok(res, { error: 'caducada' }, 410);
      if (st0.kind === 'party' && st0.status !== 'lobby') return ok(res, { error: 'començada' }, 409);
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
  if (act === 'progress') {
    const done = Math.max(0, Math.min(10, b.done | 0)), correct = Math.max(0, Math.min(done, b.correct | 0)), ms = Math.max(0, Math.min(3600e3, b.ms | 0)), fin = !!b.finished;
    // Només endavant: no es pot desfer una resposta ni tornar a jugar
    await sql`UPDATE mates.batalla_jug SET done = ${done}, correct = ${correct}, ms = ${ms}, finished = finished OR ${fin}, finished_at = CASE WHEN ${fin} AND NOT finished THEN now() ELSE finished_at END
      WHERE code = ${bcode} AND sid = ${sid} AND NOT finished AND ${done} >= done AND ${correct} >= correct AND ${ms} >= ms`;
    if (st0.kind === 'duel' && st0.status === 'lobby') await sql`UPDATE mates.batalles SET status = 'live' WHERE code = ${bcode}`;
    return ok(res, await state(bcode, sid));
  }
  if (act === 'state') return ok(res, st0);
  return ok(res, { error: 'acció' }, 400);
}
