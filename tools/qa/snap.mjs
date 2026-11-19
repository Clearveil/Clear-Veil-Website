// Full-page screenshot, sliced for reading.  node snap.mjs <url> <name> [width=1440] [sliceH=1000] [mobile]
import sharp from 'sharp';
import { connect } from './browser.mjs';

const [,, url, name, w = '1440', sliceH = '1000', mobile] = process.argv;
const browser = await connect();
const page = await browser.newPage();
await page.setViewport({ width: +w, height: mobile ? 844 : 900, deviceScaleFactor: 1, isMobile: !!mobile, hasTouch: !!mobile });
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]); // demos show their end state
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.evaluate(async () => {
  document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-in'));
  document.querySelectorAll('img[loading=lazy]').forEach((i) => (i.loading = 'eager'));
  await new Promise((r) => setTimeout(r, 1200));
});
const buf = await page.screenshot({ fullPage: true });
await page.close();
browser.disconnect();

const meta = await sharp(buf).metadata();
let n = 0;
for (let top = 0; top < meta.height; top += +sliceH) {
  const h = Math.min(+sliceH, meta.height - top);
  await sharp(buf).extract({ left: 0, top, width: meta.width, height: h }).toFile(`${name}-${String(n++).padStart(2, '0')}.png`);
}
console.log(name, `${meta.width}x${meta.height}`, n, 'slices');
// Full-page captures can paint backdrop-filter cards grey; check those in a normal viewport screenshot.
