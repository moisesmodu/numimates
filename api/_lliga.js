import { createHash } from 'crypto';
import { sql, consentCols } from './_lib.js';
// Lliga Numi: els punts són l'XP que es guanya a l'app, comptats al servidor quan es sincronitza (la diferència
// entre l'XP que hi havia i el nou). Perquè sigui just: com a molt 400 punts per sincronització i 1.500 al dia.
// Lligues: Numi Mates per cicles (1r–2n, 3r–4t, 5è–6è), Numi Pro (ESO), Numi Ment (adults) i Numi Tech.
// Ningú surt amb el seu nom: cada compte té un àlies automàtic (animal + número) que no permet saber qui és.
export const CAP = { sync: 400, dia: 1500 };
export const LLIGUES = ['mates-12', 'mates-34', 'mates-56', 'pro', 'ment', 'tech'];
export function lligaOf(st) {
  st = st || {}; if (st.variant === 'ment') return 'ment'; if (st.variant === 'tech') return 'tech';
  const c = +(st.maxCourse ?? st.course ?? 0) || 0;
  if (st.variant === 'pro' || c >= 6) return 'pro';
  return c <= 1 ? 'mates-12' : c <= 3 ? 'mates-34' : 'mates-56';
}
const pad = n => String(n).padStart(2, '0');
// dates a l'hora de Catalunya
const local = (d = new Date()) => new Date(d.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
export const dayId = (d = local()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const monthId = (d = local()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
export function weekId(d = local()) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())), day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear(), w = Math.ceil(((t - Date.UTC(y, 0, 1)) / 864e5 + 1) / 7);
  return `${y}-W${pad(w)}`;
}
export const prevMonthId = () => { const d = local(); d.setDate(1); d.setMonth(d.getMonth() - 1); return monthId(d); };
// àlies: [índex de l'animal, número]; el client el mostra en la seva llengua
export const aliasOf = code => { const h = createHash('sha256').update('numi-lliga:' + (process.env.SESSION_SECRET || '') + code).digest(); return [h.readUInt16BE(0) % 40, 10 + h.readUInt16BE(2) % 990]; };

let READY = null;
export const tables = () => READY || (READY = sql`CREATE TABLE IF NOT EXISTS mates.lliga (code text NOT NULL, periode text NOT NULL, lliga text NOT NULL, punts int NOT NULL DEFAULT 0, updated_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (code, periode))`
  .then(() => sql`CREATE INDEX IF NOT EXISTS lliga_top ON mates.lliga (periode, lliga, punts DESC)`)
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.lliga_premis (periode text NOT NULL, lliga text NOT NULL, pos int NOT NULL, code text NOT NULL, punts int NOT NULL, premium boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (periode, lliga, pos))`)
  .catch(e => { READY = null; throw e; }));

// suma punts (des de sync.js). delta = XP nova − XP que hi havia al servidor
export async function addPunts(code, delta, st) {
  if (!(delta > 0) || !code) return;
  await tables();
  const D = 'D' + dayId(), lg = lligaOf(st);
  const cur = (await sql`SELECT punts FROM mates.lliga WHERE code = ${code} AND periode = ${D}`)[0];
  const add = Math.min(Math.round(delta), CAP.sync, Math.max(0, CAP.dia - (cur ? cur.punts : 0)));
  if (add <= 0) return;
  for (const p of [D, 'W' + weekId(), 'M' + monthId()])
    await sql`INSERT INTO mates.lliga (code, periode, lliga, punts) VALUES (${code}, ${p}, ${lg}, ${add})
      ON CONFLICT (code, periode) DO UPDATE SET punts = mates.lliga.punts + ${add}, lliga = ${lg}, updated_at = now()`;
  // els comptadors de dies només serveixen per al topall diari
  if (Math.random() < .02) await sql`DELETE FROM mates.lliga WHERE periode LIKE 'D%' AND updated_at < now() - interval '3 days'`;
}

// premis del mes que ha acabat: els 3 primers de cada lliga (amb un mínim de punts). Es calcula una sola vegada.
// Premi: medalla a l'app i, si el compte és del pla gratuït (no d'escola ni de pagament), un mes de Premium.
export async function premisMes() {
  await tables(); await consentCols();
  const pm = prevMonthId(), P = 'M' + pm;
  if ((await sql`SELECT 1 FROM mates.lliga_premis WHERE periode = ${pm} LIMIT 1`).length) return;
  for (const lg of LLIGUES) {
    const top = await sql`SELECT l.code, l.punts FROM mates.lliga l JOIN mates.alumnes a USING (code)
      WHERE l.periode = ${P} AND l.lliga = ${lg} AND a.active AND COALESCE(a.state->>'lliga', 'true') <> 'false' AND l.punts >= 300
        AND a.created_at < now() - interval '14 days' AND (a.consent IS NULL OR a.consent = 'ok')   -- comptes nous o pendents de permís: sense premi
      ORDER BY l.punts DESC, l.updated_at ASC LIMIT 3`;
    for (let i = 0; i < top.length; i++) {
      const ins = await sql`INSERT INTO mates.lliga_premis (periode, lliga, pos, code, punts) VALUES (${pm}, ${lg}, ${i + 1}, ${top[i].code}, ${top[i].punts}) ON CONFLICT DO NOTHING RETURNING code`;
      if (!ins.length) continue;
      const r = await sql`UPDATE mates.alumnes SET pla = 'premium', pla_fins = (current_date + 30)
        WHERE code = ${top[i].code} AND grup_id IS NULL AND stripe_sub IS NULL AND (pla IS NULL OR pla = 'free' OR (pla = 'premium' AND pla_fins IS NOT NULL AND pla_fins < current_date)) RETURNING code`;
      if (r.length) await sql`UPDATE mates.lliga_premis SET premium = true WHERE periode = ${pm} AND lliga = ${lg} AND pos = ${i + 1}`;
    }
  }
}
