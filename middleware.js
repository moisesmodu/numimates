// Tres apps amb un sol index.html: a pro. i ment. la portada es serveix amb el seu nom, descripció, color i imatge,
// perquè en compartir l'enllaç (WhatsApp, xarxes) no surti «Numi Mates». Si alguna cosa falla, es serveix l'original.
const APPS = {
  'pro.numimates.com': { name: 'Numi Pro', title: "Numi Pro · Matemàtiques d'ESO", theme: '#14111F', manifest: 'manifest-pro.webmanifest', apple: 'img/brand/apple-touch-icon-pro.png',
    desc: "Numi Pro: les matemàtiques d'ESO (1r a 4t) amb preparació d'exàmens, fitxes de cada tema i un assistent que ajuda sense fer els deures. En català i castellà.",
    og: "Les mates d'ESO, pas a pas: exàmens, fitxes i assistent.", img: 'https://numimates.com/img/og/pro-ca.jpg' },
  'ment.numimates.com': { name: 'Numi Ment', title: 'Numi Ment · Entrena la ment cada dia', theme: '#177E6E', manifest: 'manifest-ment.webmanifest', apple: 'img/brand/apple-touch-icon-ment.png',
    desc: "Numi Ment: deu minuts al dia de jocs de memòria, atenció, càlcul i lògica per a adults i gent gran, i un test per conèixer l'edat de la teva ment.",
    og: "Deu minuts al dia per mantenir la ment activa. Quina edat té la teva ment?", img: 'https://numimates.com/img/og/ment-ca.jpg' }
};
const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export default async function middleware(request) {
  try {
    const url = new URL(request.url), a = APPS[url.hostname];
    if (!a) return;
    const r = await fetch(new URL('/index.html', url));
    if (!r.ok) return;
    let h = await r.text();
    const set = (re, v) => { h = h.replace(re, v); };
    set(/<title>[^<]*<\/title>/, `<title>${attr(a.title)}</title>`);
    set(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(a.desc)}">`);
    set(/<meta name="theme-color" content="[^"]*">/, `<meta name="theme-color" content="${a.theme}">`);
    set(/<meta name="apple-mobile-web-app-title" content="[^"]*">/, `<meta name="apple-mobile-web-app-title" content="${attr(a.name)}">`);
    set(/<link rel="apple-touch-icon" href="[^"]*">/, `<link rel="apple-touch-icon" href="${a.apple}">`);
    set(/<link rel="manifest" href="[^"]*">/, `<link rel="manifest" href="${a.manifest}">`);
    set(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(a.name)}">`);
    set(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(a.og)}">`);
    set(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${a.img}">`);
    const hd = new Headers(r.headers); hd.delete('content-length'); hd.delete('content-encoding'); hd.delete('transfer-encoding'); hd.delete('etag'); hd.set('content-type', 'text/html; charset=utf-8');
    return new Response(h, { status: 200, headers: hd });
  } catch (e) { return; }
}
export const config = { matcher: '/' };
