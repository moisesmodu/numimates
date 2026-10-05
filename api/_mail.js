// Correus transaccionals de Numi Mates amb Resend (des de hola@numimates.com)
export const MAIL_OK = () => !!process.env.RESEND_API_KEY;
export async function sendMail({ to, subject, html, text, reply_to }) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    // sense User-Agent, el Cloudflare de davant de Resend pot tornar un 403 (error 1010)
    headers: { authorization: 'Bearer ' + process.env.RESEND_API_KEY, 'content-type': 'application/json', 'user-agent': 'numimates/1.0' },
    body: JSON.stringify({ from: 'Numi Mates <hola@numimates.com>', reply_to: reply_to || 'hola@numimates.com', to: [to], subject, html, text })
  });
  if (!r.ok) throw new Error('resend ' + r.status);
  return r.json();
}
