import { sql, body, ok, blocked, fail, note, tooMany } from './_lib.js';
import { randomBytes, createHash } from 'crypto';
import { batTables, batState, convTables, MAX } from './_batalla.js';
// Batalles obertes per a convidats (/juga): el docent crea la batalla al panell i la projecta; qualsevol hi entra amb el
// codi i un nom, sense compte. Cada dispositiu rep una clau secreta (només se'n desa el resum) que li serveix per
// continuar si recarrega la pàgina. Mateixes regles que la batalla de classe: 10 preguntes iguals per a tothom, guanya
// qui n'encerta més i, si hi ha empat, qui ha trigat menys; el docent decideix quan comença.
const CHARS = ['numi', 'guida', 'vuit', 'tuga', 'flama', 'estel', 'cavaller'];
const sha = t => createHash('sha256').update(String(t)).digest('hex');
const cleanB = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 14);
// el nom el veu tota la classe a la pissarra: lletres, números, espais i poca cosa més, sense res d'HTML
const cleanName = n => String(n || '').normalize('NFC').replace(/[^\p{L}\p{N} .'-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 18);

export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  await batTables(); await convTables();
  const b = body(req), bcode = cleanB(b.bcode), act = b.action;
  if (!bcode) return ok(res, { error: 'no-existeix' }, 404);

  if (act === 'join') {
    // els codis que no existeixen compten com a intent fallit (si no, es podrien anar provant fins a trobar-ne un d'obert)
    if (await blocked(req, 'batalla', 60)) return tooMany(res);
    if (await blocked(req, 'juga', 120, 15)) return tooMany(res);   // una escola surt amb una sola IP: límit generós
    const bt = (await sql`SELECT code, kind FROM mates.batalles WHERE code = ${bcode}`)[0];
    if (!bt || bt.kind !== 'oberta') { await fail(req, 'batalla'); return ok(res, { error: 'no-existeix' }, 404); }
    const st0 = await batState(bcode, null);
    if (st0.over || st0.expired) return ok(res, { error: 'caducada' }, 410);
    if (st0.status !== 'lobby') return ok(res, { error: 'començada' }, 409);
    if (st0.players.length >= MAX.oberta) return ok(res, { error: 'plena' }, 409);
    let name = cleanName(b.name);
    if (name.length < 2) return ok(res, { error: 'nom' }, 400);
    // si el nom ja hi és, s'hi afegeix un número (a la pissarra s'han de poder distingir)
    const taken = new Set(st0.players.map(p => p.name.toLowerCase()));
    if (taken.has(name.toLowerCase())) { let i = 2; while (taken.has(`${name} ${i}`.toLowerCase())) i++; name = `${name.slice(0, 15)} ${i}`; }
    const comp = CHARS.includes(b.companion) ? b.companion : CHARS[Math.floor(Math.random() * CHARS.length)];
    const tok = randomBytes(24).toString('base64url');
    const r = await sql`INSERT INTO mates.batalla_conv (code, tok, name, companion) VALUES (${bcode}, ${sha(tok)}, ${name}, ${comp}) RETURNING id`;
    await note(req, 'juga');
    // neteja: els convidats no es guarden més de 30 dies
    if (Math.random() < 0.05) await sql`DELETE FROM mates.batalla_conv WHERE joined_at < now() - interval '30 days'`;
    return ok(res, { tok, name, state: await batState(bcode, null, r[0].id) });
  }

  // la resta d'accions, amb la clau del convidat
  const tok = typeof b.tok === 'string' && b.tok.length <= 64 ? b.tok : '';
  const g = tok ? (await sql`SELECT id, done, correct, ms, finished FROM mates.batalla_conv WHERE tok = ${sha(tok)} AND code = ${bcode}`)[0] : null;
  if (!g) return ok(res, { error: 'fora' }, 403);
  const st0 = await batState(bcode, null, g.id);
  if (!st0) return ok(res, { error: 'no-existeix' }, 404);

  if (act === 'state') return ok(res, st0);
  if (act === 'progress') {
    if (st0.status !== 'live' || st0.over) return ok(res, { error: 'no-començada' }, 409);
    const done = Math.max(0, Math.min(st0.nq || 10, b.done | 0)), correct = Math.max(0, Math.min(done, b.correct | 0)), ms = Math.max(0, Math.min(3600e3, b.ms | 0)), fin = !!b.finished;
    // només endavant: no es pot desfer una resposta ni tornar a jugar
    await sql`UPDATE mates.batalla_conv SET done = ${done}, correct = ${correct}, ms = ${ms}, finished = finished OR ${fin}, finished_at = CASE WHEN ${fin} AND NOT finished THEN now() ELSE finished_at END
      WHERE id = ${g.id} AND NOT finished AND ${done} >= done AND ${correct} >= correct AND ${ms} >= ms`;
    return ok(res, await batState(bcode, null, g.id));
  }
  return ok(res, { error: 'acció' }, 400);
}
