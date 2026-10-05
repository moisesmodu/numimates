import { sql, body, ok, blocked, note, tooMany } from './_lib.js';
import { MAIL_OK, sendMail } from './_mail.js';
// Peticions de demostració del web numimates.com (formulari «Demana una demostració»).
// Es guarden a mates.contactes, es veuen al panell /profe.html (Sol·licituds) i arriba un avís a hola@numimates.com.
// producte: 'mates' (portada) o 'tech' (pàgina de Numi Tech, només per a centres).
const ORIGINS = ['https://numimates.com', 'https://www.numimates.com', ...(process.env.VERCEL_ENV === 'production' ? [] : ['http://localhost:5180', 'http://localhost:8123'])];
const clip = (s, n) => String(s || '').trim().slice(0, n);
let ready = false;

export default async function handler(req, res) {
  const o = req.headers.origin || '';
  if (ORIGINS.includes(o) || /^https:\/\/numimates-web[\w-]*\.vercel\.app$/.test(o)) { res.setHeader('Access-Control-Allow-Origin', o); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req);
  const f = { nom: clip(b.nom, 120), centre: clip(b.centre, 160), mail: clip(b.mail, 160).toLowerCase(), cursos: clip(b.cursos, 200), lang: b.lang === 'es' ? 'es' : 'ca',
    producte: b.producte === 'tech' ? 'tech' : 'mates', carrec: clip(b.carrec, 80), poblacio: clip(b.poblacio, 120), alumnes: clip(b.alumnes, 40), tel: clip(b.tel, 30), missatge: clip(b.missatge, 1500) };
  if (b.web) return ok(res, { ok: true });   // camp trampa: només l'omplen els robots
  if (!f.nom || !f.centre || !/^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,120}\.[a-z]{2,24}$/.test(f.mail)) return ok(res, { error: 'dades' }, 400);
  if (await blocked(req, 'contacte', 5, 60)) return tooMany(res);
  await note(req, 'contacte');
  if (!ready) {
    await sql`CREATE TABLE IF NOT EXISTS mates.contactes (id serial PRIMARY KEY, nom text, centre text, mail text, cursos text, lang text, created_at timestamptz DEFAULT now())`;
    await sql`ALTER TABLE mates.contactes ADD COLUMN IF NOT EXISTS producte text DEFAULT 'mates', ADD COLUMN IF NOT EXISTS carrec text, ADD COLUMN IF NOT EXISTS poblacio text, ADD COLUMN IF NOT EXISTS alumnes text, ADD COLUMN IF NOT EXISTS tel text, ADD COLUMN IF NOT EXISTS missatge text`;
    ready = true;
  }
  // com a molt 3 peticions per correu cada dia
  const n = (await sql`SELECT count(*)::int AS n FROM mates.contactes WHERE mail = ${f.mail} AND created_at > now() - interval '1 day'`)[0].n;
  if (n >= 3) return ok(res, { ok: true });
  await sql`INSERT INTO mates.contactes (nom, centre, mail, cursos, lang, producte, carrec, poblacio, alumnes, tel, missatge) VALUES (${f.nom}, ${f.centre}, ${f.mail}, ${f.cursos}, ${f.lang}, ${f.producte}, ${f.carrec}, ${f.poblacio}, ${f.alumnes}, ${f.tel}, ${f.missatge})`;
  // avís a l'administrador (si falla el correu, la sol·licitud ja és desada i es veu al panell)
  if (MAIL_OK()) {
    const e = s => String(s || '—').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
    const prod = f.producte === 'tech' ? 'Numi Tech' : 'Numi Mates';
    const rows = [['Nom', f.nom], ['Càrrec', f.carrec], ['Centre', f.centre], ['Població', f.poblacio], ['Alumnes', f.alumnes], ['Cursos', f.cursos], ['Correu', f.mail], ['Telèfon', f.tel], ['Idioma', f.lang.toUpperCase()], ['Missatge', f.missatge]];
    try {
      await sendMail({ to: 'hola@numimates.com', subject: `${prod} · Sol·licitud de ${f.centre}`,
        html: `<p>Nova sol·licitud des de numimates.com (<b>${prod}</b>):</p><table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="color:#667"><b>${k}</b></td><td>${e(v).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table><p>Respon directament a aquest correu per escriure a ${e(f.mail)}, o mira-la al panell: https://app.numimates.com/profe.html</p>`,
        text: rows.map(([k, v]) => `${k}: ${v || '—'}`).join('\n'), reply_to: f.mail });
    } catch (err) { console.error('contact mail', err.message); }
  }
  return ok(res, { ok: true });
}
