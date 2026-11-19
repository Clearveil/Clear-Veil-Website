# Clear Veil Marketing website: project guide for Claude

Read this first in every session. It's the working memory of the project: what's built, how it's deployed, how the owner likes to work, and what's still open. Full decision log: [docs/HISTORY.md](docs/HISTORY.md). Private IDs (ad account, campaigns, Vercel IDs) are **not** in this public repo; ask the owner, or see their private notes (docs/HISTORY.md says where).

## What this is
- clearveilmarketing.com: Clear Veil Marketing's site, rebuilt from Framer into **Astro 7** (static pages) on **Vercel**. Owner owns the code.
- GitHub `Clearveil/Clear-Veil-Website` (**public repo**: never commit secrets, private IDs, personal emails). Push to `main` → Vercel auto-deploys production in ~20 s.
- Domain DNS is at **Wix**: apex A `216.150.1.1` (blank host), `www` CNAME `cname.vercel-dns.com`; apex 308 → www.
- Email is Google Workspace. Contact form sends through **Resend** (domain verified, DNS records at Wix).

## Commands
- `npm run dev`: dev server on :4321 (in the Claude desktop app use the `dev` entry in `.claude/launch.json` via preview_start).
- `npx astro build`: production build (use this to type/build check; **don't** use `npx astro check`, it hangs on an install prompt).
- Don't run the build with the shell's working directory inside `.vercel/output` (EBUSY lock).
- After big component/CSS rewrites the dev server can serve **stale scoped CSS**: restart it.
- QA scripts live in [tools/qa](tools/qa/README.md) (screenshots, mobile overflow audit, full Meta Pixel pass).

## Architecture
- Only server code: `src/pages/api/contact.ts` (`prerender = false` → Vercel function). Sends the lead email via Resend and a Meta **Conversions API** Lead (`src/lib/meta-capi.ts`, Graph API v26.0) with the same `event_id` as the browser pixel (dedup). Spam: honeypot field `fax` + elapsed-time field `t` (measured on device with `performance.now()`; server drops `< 2500 ms`).
- `src/layouts/Base.astro`: head/SEO (`title`, `seoTitle`, `description`, `noindex`, `breadcrumbs`, `schema`, `minimal`), JSON-LD (ProfessionalService with `@id` `<site>/#organization`, WebSite on home, BreadcrumbList), Tracking, Nav, Footer, click tracking.
- `minimal` = ad landing pages: no nav links/menu button, no footer columns.
- Content lives in TS files, components take props with defaults (homepage unchanged when reused):
  - `src/content/site.ts`: all main-site copy, clients/logos (`logoFor()`), case studies (`work[]`), reviews, services, process, about, contact.
  - `src/content/apparel.ts`: `/apparel` ad landing page.
  - `src/content/contractors.ts`: `/contractors` + sub-pages `/contractors/ads`, `/contractors/social`, `/contractors/websites`.
  - `src/content/cities.ts`: 15 local-SEO city pages `/marketing-agency/<city>-mi`.
  - `src/content/partners.ts`: Simple Icons paths (Meta, Google, Shopify, Wix, Google Ads, GA4, Pinterest).
- `astro.config.mjs`: sitemap excludes 404, unfinished case studies (no story → also `noindex`) and the `adLanding` list (`/apparel`, `/contractors`, `/contractors/ads|social|websites`). Redirects `/terms-conditions` → `/terms`, `/privacy-policy` → `/privacy`. `build.format: 'file'`, `trailingSlash: 'never'`.
- Media in `public/media` is cached for a year: **version file names** (`clip-1-v2.mp4`, `contractors-reel-v1.mp4`) when replacing. Videos: 540×960 H.264 faststart (ffmpeg); `audio: true` per clip shows the sound control.

## Pages
- Main site: `/`, `/about`, `/work`, `/work/<slug>`, `/contact` (phone→laptop signal easter egg), `/terms`, `/privacy`, `/404`.
- Ad landing pages (noindex, minimal, not in sitemap, not linked from site): `/apparel` (Shopify-style sales dashboard demo), `/contractors` (Google search → Ads dashboard demo `SearchToAds.astro`) with sub-pages `/contractors/ads`, `/contractors/social` (`SocialFeed.astro` content-calendar demo, `BlankProfile.astro`), `/contractors/websites` (`SiteCompare.astro` before/after phone demo). Sub-pages are linked **only** from `/contractors`.
- City pages `/marketing-agency/<slug>` (Kalamazoo, Portage, Battle Creek, Grand Rapids, Wyoming, Kentwood, Hudsonville, Holland, Zeeland, South Haven, St. Joseph, Benton Harbor, Grand Haven, Muskegon, Norton Shores): homepage clone tailored per city, **indexed and in the sitemap**, full nav/footer, but the **main site must never link to them** (only city ↔ city "Also serving" links). Angle: local presence, but we market locally, nationwide and worldwide. No client-by-city claims. Schema: Service (areaServed city + nearby) + FAQPage + BreadcrumbList.

## Tracking (Meta Pixel + CAPI)
- `src/components/Tracking.astro` loads GTM / Meta Pixel only when `PUBLIC_GTM_ID` / `PUBLIC_META_PIXEL_ID` are set (Vercel env, production). GTM/GA4 not set up yet.
- `src/scripts/click-tracking.ts` (one delegated listener, loaded in Base):
  - `tel:` / `sms:` links → Meta `Contact` `{method: call|text, location, page}` + GTM `contact_click`
  - cal.com links → Meta custom `BookCallClick` `{location, page}` + GTM `book_call_click`
  - `location` = nav / footer / section id or first class (e.g. `hero`, `contact`).
- Contact form success → browser `fbq('track','Lead', {lead_source}, {eventID})` + server CAPI Lead with the same id and `lead_source`. Landing pages pass `source` to `<Contact>` (e.g. "Contractors – Ads page", "City page – Holland"); it tags the email subject `[source]` and a "Came from" row.
- Cal.com's own Meta app fires `Schedule` on booking (and `CalcomView`).
- Vercel env (production): `RESEND_API_KEY` (secret), `META_CAPI_TOKEN` (secret), `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `PUBLIC_META_PIXEL_ID`, `OFF_META_TEST_EVENT_CODE` (disabled test code; rename to `META_TEST_EVENT_CODE` + redeploy to test CAPI). Secrets are added by the owner directly in Vercel: **never ask for them in chat**.
- Verify pixel beacons in the in-app browser (Chromium). Headless **Edge** blocks `facebook.com/tr` (tracking prevention), so Edge tests only work with the fbq spy in `tools/qa/pass.mjs`.

## Design system (keep it)
- Dark, glossy, layered **liquid glass**, black and white only. `src/styles/global.css` tokens: `--bg #000`, ink 100/62/52 %, `--fs-card`, `--fs-card-quote`, `--fs-card-meta`, `--measure`.
- `.glass`, `.btn-glass`, `.card`: gradient fill + backdrop blur, gradient rim (`::before`, masked), cursor sheen (`::after`, `--mx/--my`).
- DM Sans Variable; headlines weight 400, tracking -0.045em, gradient-clipped `.h-display`. Eyebrow pills with glowing dot. The "CLEAR VEIL" wordmark (`Wordmark.astro`) is the only mono-style element.
- All buttons are clear glass capsules, **no arrows on buttons** (arrows OK on text links/cards). Floating glass capsule header.
- Photos on landing pages are grayscale. Supporting text stays small (shared tokens).
- No sideways scrolling on phones (audit with `tools/qa/ovf.mjs`).
- Class-name gotcha: don't give a list item the same class as an inner element's style (e.g. `.review`); it broke SocialFeed once. Prefix kinds (`k-<kind>`).

## How the owner works (follow these)
- Marketer with a sharp eye; wants Framer-quality feel, slow eased motion; rejects "too AI / one-dimensional" output. Show changes in the browser preview, don't just describe.
- Learning developer: explain steps plainly, small verified commits, never leave the project broken. Verify (build, screenshots desktop + mobile, overflow audit, pixel pass) before pushing.
- **Don't invent marketing copy, numbers, clients or testimonials.** Use real facts from `site.ts`; flag new copy for review (mark `TODO(owner)`). Removed a derived "1 in 3" stat because it could mislead: only show numbers exactly as in the case studies.
- US English (center, neighborhood).
- Meta ads: work **only** in the Clear Veil ad account (ID in the owner's private notes, not here). Create campaigns **paused/draft**; ask before anything that spends money. The Meta API keeps re-adding a retired location setting; owner re-picks location in Ads Manager before publishing new ad sets.
- Publishing, sending messages, spending money: always confirm first.

## Open items
- Owner to read/confirm: city intros' local facts (`cities.ts`), contractors copy flagged `TODO(owner)` (built-homes story, FAQ budget range $1k–3k/mo, "Live in about two weeks"), websites-page FAQ answers.
- 3 unnamed client logos (`client-06/10/12`), Apex Aminos case study write-up, Voren Bio results, "25+ client reviews" label.
- GTM/GA4 setup; custom conversion for `BookCallClick`; rename the pixel ("Framer Manual Pixel"); cancel Framer.
- Local SEO: Google Business Profile (service areas = the 15 cities), Search Console sitemap resubmit + request indexing, Bing Webmaster import, citations/chamber links. Possible later: IndexNow, local blog posts, footer "Areas we serve" link (owner declined for now).
- Instagram content: prompt + logo SVGs in `brand-kit/`.
