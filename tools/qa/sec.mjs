// Screenshot one element.  node sec.mjs <url> <css-selector> <out.png> [width=1440]
import { connect } from './browser.mjs';

const [,, url, sel, out, w = '1440'] = process.argv;
const browser = await connect();
const page = await browser.newPage();
await page.setViewport({ width: +w, height: 1000 });
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
await page.goto(url, { waitUntil: 'networkidle2' });
await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-in')));
await new Promise((r) => setTimeout(r, 800));
await (await page.$(sel)).screenshot({ path: out });
await page.close();
browser.disconnect();
