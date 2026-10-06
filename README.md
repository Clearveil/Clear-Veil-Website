# Clear Veil Marketing — website

The code for [clearveilmarketing.com](https://www.clearveilmarketing.com). Built with
[Astro](https://astro.build), hosted on [Vercel](https://vercel.com), owned by you.

```
You edit a file  →  git push  →  Vercel rebuilds  →  live in ~1 minute
```

---

## Everyday edits

**Almost all text lives in one file: [`src/content/site.ts`](src/content/site.ts).**
Headlines, services, stats, work, reviews, links and the booking URL are all there.
Change the words between the quotes, save, done.

| I want to… | Edit this |
| --- | --- |
| Change any wording, a stat, a link | `src/content/site.ts` |
| Add a client logo to the marquee | Put the file in `public/logos/`, then set `logo: '/logos/name.svg'` on that client in `site.ts` |
| Add a result to a work pill | Fill in `result: '…'` on that item in `site.ts` |
| Swap a hero video | Replace `public/media/clip-N.mp4` and its `.jpg` poster (keep 540×960, ~1 MB) |
| Change colors, fonts, button styles | `src/styles/global.css` (tokens at the top) |
| Change one section's layout | `src/components/<Section>.astro` |
| Edit Terms or Privacy | `src/pages/terms.astro`, `src/pages/privacy.astro` |
| Change the social share image | Replace `public/og.png` (1200×630) |

## Running it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # first time only
npm run dev        # starts the site at http://localhost:4321
```

The dev server also prints a **Network** address (like `http://192.168.1.39:4321`).
Open that on your phone (same Wi-Fi) to test on a real device. Changes appear instantly.

```bash
npm run build      # production build, catches errors before you push
```

## How it's put together

```
src/
  content/site.ts        ← all the words
  styles/global.css      ← design tokens, buttons, cards
  layouts/Base.astro     ← <head>, SEO tags, tracking, nav + footer wrapper
  components/            ← one file per section (Hero, Reel, Services, …)
  pages/                 ← one file per URL
    index.astro          → /
    about.astro          → /about
    work.astro           → /work
    work/[slug].astro    → /work/<client>   (one case study per item in site.ts → work)
    contact.astro        → /contact
    terms.astro          → /terms
    privacy.astro        → /privacy
    404.astro            → any missing page
    api/contact.ts       → the contact form's email sender (serverless)
public/                  ← files served as-is (videos, images, icons, og.png)
```

Every page is pre-built as plain HTML, so the site is fast and almost nothing can
break at runtime. The only server code is `api/contact.ts`.

Old Framer URLs (`/terms-conditions`, `/privacy-policy`) redirect to the new
pages, so existing links keep working. `/contact` is a real page, same URL as before.

## Environment variables (keys and IDs)

Secrets never go in the code. Copy `.env.example` to `.env` for local work, and add
the same keys in **Vercel → Project → Settings → Environment Variables**.

| Variable | What it does |
| --- | --- |
| `RESEND_API_KEY` | Sends contact-form emails ([resend.com](https://resend.com), free tier is plenty) |
| `CONTACT_TO_EMAIL` | Where form messages are delivered (comma-separate for several) |
| `CONTACT_FROM_EMAIL` | Sender, e.g. `Clear Veil Website <website@clearveilmarketing.com>`; the domain must be verified in Resend |
| `PUBLIC_GTM_ID` | Google Tag Manager container ID (`GTM-XXXXXXX`) |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel ID |

Tracking tags only load when their ID is set. A successful form submission fires
Meta `Lead` and a `generate_lead` event into the GTM dataLayer.

Without a Resend key, local dev prints form submissions in the terminal instead of
emailing them, so you can test the form freely.

## Deploying

One-time setup:

1. Create a **private** GitHub repo and push this folder to it.
2. In Vercel: **Add New → Project → import the repo**. It detects Astro automatically.
3. Add the environment variables above, then deploy.
4. In Vercel → **Domains**, add `clearveilmarketing.com` and `www.clearveilmarketing.com`,
   then update DNS where the domain is registered (Vercel shows the exact records).
   Cancel the Framer plan once the new site is live.

After that, every `git push` to `main` deploys automatically. Pushes to other
branches get their own preview URL, so you can review changes before they go live.

## Launch checklist

- [ ] Client logo files in `public/logos/` and wired up in `site.ts`
- [ ] Confirm the "25+ Client reviews" stat label
- [ ] Add real results to the work pills
- [ ] Confirm About copy
- [ ] Resend account, domain verified, keys in Vercel; send a test from the live form
- [ ] GTM and Meta Pixel IDs in Vercel; verify with Tag Assistant / Pixel Helper
- [ ] Have someone review Terms and Privacy (adapted from the old template)
- [ ] Point the domain at Vercel
