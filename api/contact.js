import { sql, body, ok, blocked, note, tooMany } from './_lib.js';
// Peticions de demostració del web numimates.com (formulari «Demana una demostració»).
// Es guarden a mates.contactes i es veuen al panell /profe.html.
const ORIGINS = ['https://numimates.com', 'https://www.numimates.com', ...(process.env.VERCEL_ENV === 'production' ? [] : ['http://localhost:5180'])];
const clip = (s, n) => String(s || '').trim().slice(0, n);
let ready = false;

export default async function handler(req, res) {
  const o = req.headers.origin || '';
  if (ORIGINS.includes(o) || /^https:\/\/numimates-web[\w-]*\.vercel\.app$/.test(o)) { res.setHeader('Access-Control-Allow-Origin', o); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req);
  const f = { nom: clip(b.nom, 120), centre: clip(b.centre, 160), mail: clip(b.mail, 160).toLowerCase(), cursos: clip(b.cursos, 200), lang: b.lang === 'es' ? 'es' : 'ca' };
  if (!f.nom || !f.centre || !/^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,120}\.[a-z]{2,24}$/.test(f.mail)) return ok(res, { error: 'dades' }, 400);
  if (await blocked(req, 'contacte', 5, 60)) return tooMany(res);
  await note(req, 'contacte');
  if (!ready) {
    await sql`CREATE TABLE IF NOT EXISTS mates.contactes (id serial PRIMARY KEY, nom text, centre text, mail text, cursos text, lang text, created_at timestamptz DEFAULT now())`;
    ready = true;
  }
  // com a molt 3 peticions per correu cada dia
  const n = (await sql`SELECT count(*)::int AS n FROM mates.contactes WHERE mail = ${f.mail} AND created_at > now() - interval '1 day'`)[0].n;
  if (n >= 3) return ok(res, { ok: true });
  await sql`INSERT INTO mates.contactes (nom, centre, mail, cursos, lang) VALUES (${f.nom}, ${f.centre}, ${f.mail}, ${f.cursos}, ${f.lang})`;
  return ok(res, { ok: true });
}
