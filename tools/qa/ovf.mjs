// Phone sideways-scroll audit at 375px.  node ovf.mjs /path,/other/path
import { connect, BASE } from './browser.mjs';

const paths = (process.argv[2] || '/').split(',');
const browser = await connect();
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
for (const path of paths) {
  await page.goto(BASE + path, { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-in')));
  await new Promise((r) => setTimeout(r, 700));
  const res = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (!r.width || (r.right <= vw + 1 && r.left >= -1)) continue;
      // ignore elements inside an ancestor that clips horizontally and itself fits
      let p = el.parentElement;
      let clipped = false;
      while (p && p !== document.body) {
        const o = getComputedStyle(p).overflowX;
        if (o === 'hidden' || o === 'clip') {
          const pr = p.getBoundingClientRect();
          if (pr.right <= vw + 1 && pr.left >= -1) { clipped = true; break; }
        }
        p = p.parentElement;
      }
      if (!clipped) offenders.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} [${Math.round(r.left)}→${Math.round(r.right)}]`);
    }
    return { vw, scrollWidth: document.documentElement.scrollWidth, offenders: offenders.slice(0, 8) };
  });
  console.log(path, JSON.stringify(res));
}
await page.close();
browser.disconnect();
