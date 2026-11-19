// Meta Pixel pass. On each page: clicks every call / text / Cal.com link and checks the pixel
// event, then submits the contact form against a stubbed /api/contact (no email is sent) and
// checks Lead fires with lead_source and the same eventID the server receives.
//   node pass.mjs /,/about,/contractors        (dev server; set BASE_URL to test elsewhere)
// In Git Bash prefix with MSYS_NO_PATHCONV=1 so the paths aren't rewritten.
import { connect, BASE } from './browser.mjs';

const pages = (process.argv[2] || '/,/about,/work,/contact,/apparel,/contractors,/contractors/ads,/contractors/social,/contractors/websites,/marketing-agency/kalamazoo-mi').split(',');
const browser = await connect();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

// Record fbq calls instead of sending them
await page.evaluateOnNewDocument(() => {
  window.__fb = [];
  const spy = (...a) => window.__fb.push(JSON.parse(JSON.stringify(a.slice(0, 4))));
  Object.defineProperty(window, 'fbq', { configurable: true, get: () => spy, set: () => {} });
});

// Don't open Cal.com; answer the contact API ourselves
await page.setRequestInterception(true);
let lastBody = null;
page.on('request', (r) => {
  if (/cal\.com/.test(r.url())) return r.abort();
  if (r.url().endsWith('/api/contact') && r.method() === 'POST') {
    lastBody = JSON.parse(r.postData());
    return r.respond({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  }
  r.continue();
});

const SEL = 'a[href^="tel:"],a[href^="sms:"],a[href*="cal.com"]';
let problems = 0;
for (const path of pages) {
  await page.goto(BASE + path, { waitUntil: 'networkidle2' });
  await page.evaluate((SEL) => document.querySelectorAll(SEL).forEach((a) => a.addEventListener('click', (e) => e.preventDefault())), SEL);
  const n = await page.$$eval(SEL, (as) => as.length);
  const tally = {};
  for (let i = 0; i < n; i++) {
    const r = await page.evaluate((i, SEL) => {
      window.__fb = [];
      const a = document.querySelectorAll(SEL)[i];
      a.click();
      const h = a.getAttribute('href');
      return { kind: h.startsWith('tel:') ? 'call' : h.startsWith('sms:') ? 'text' : 'book', fired: window.__fb };
    }, i, SEL);
    const ev = r.fired.map((f) => f[1]).join('+') || 'NOTHING';
    const ok = (r.kind === 'book' && ev === 'BookCallClick') || (r.kind !== 'book' && ev === 'Contact' && r.fired[0][2].method === r.kind);
    if (!ok) problems++;
    const key = `${r.kind}→${ev}${ok ? '' : ' ✗'}`;
    tally[key] = (tally[key] || 0) + 1;
  }

  let lead = '—';
  if (await page.$('input[name=email]')) {
    await page.type('input[name=name]', 'Pixel Test');
    await page.type('input[name=email]', 'test@example.com');
    await page.type('textarea[name=message]', 'Tracking check, please ignore.');
    await new Promise((r) => setTimeout(r, 2700)); // the spam timer needs > 2.5 s
    lastBody = null;
    await page.evaluate(() => { window.__fb = []; });
    await page.$eval('input[name=email]', (el) => el.form.requestSubmit());
    await new Promise((r) => setTimeout(r, 1200));
    const L = (await page.evaluate(() => window.__fb)).find((f) => f[1] === 'Lead');
    const okLead = L && L[3]?.eventID && lastBody?.eventId === L[3].eventID;
    if (!okLead) problems++;
    lead = L ? `Lead ${JSON.stringify(L[2])} eventID matches server: ${okLead ? 'yes' : 'NO'} | source=${lastBody?.source ?? '(none)'}` : 'NO LEAD ✗';
  }
  console.log(`${path}\n  links ${JSON.stringify(tally)}\n  form  ${lead}`);
}
console.log(problems ? `\n${problems} PROBLEM(S)` : '\nAll checks passed');
await page.close();
browser.disconnect();
