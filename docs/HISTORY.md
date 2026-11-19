# Project history and decisions

A condensed log of the build so far (Oct–Nov 2026), so work can continue in a fresh session without the original chat. Current state and rules: [CLAUDE.md](../CLAUDE.md).

**Where the full record lives (not in this public repo):**
- Full Claude chat transcript (~95 MB) and Claude's memory notes: `D:\Clear Veil\Claude Backup\clear-veil-website-session\` on the owner's PC (copy kept off-machine too).
- Private IDs (Meta ad account, campaign/ad set IDs, Vercel team/project IDs, pixel/dataset details): `PRIVATE-NOTES.md` in that same backup folder.
- Original brief and copy from the old Framer site: `_handoff/handoff/BRIEF.md` and `copy.md` (git-ignored, local).
- Case study source PDFs: `D:\Clear Veil\Case Studies`.

## 1. Rebuild (early Oct 2026)
- Goal: rebuild clearveilmarketing.com (Framer "Landin" template) with a better flow, keep the feel (dark, glossy, layered), owner fully owns the code and can push updates fast.
- Astro + Vercel; all copy in `src/content/site.ts`.
- Design iterations the owner asked for: liquid-glass everything; clear (not grey or white) glass buttons; **no arrows on buttons**; smaller supporting text everywhere (shared tokens); floating glass capsule header; real client logos in the marquee and on reviews; message / call / text glass icons under "Book a call" (message → contact form, call/text (269) 615-4507), centered "Or reach us directly" label.
- About page: certified partners logo strip, Community section with the white South Haven Chamber badge, "The difference" comparison table; photo removed at owner's request.
- Homepage About teaser with building images. Recent Work → case study pages with a "More work" list; desktop Work page as a two-column gallery.
- Dedicated `/contact` page with a small phone→laptop signal animation (no "trusted by" there).
- Case studies written from the PDFs (numbers only from the PDFs): McKenna Brothers Paving, Visionworld ($12k in 15 min, $75k+ total), Alert Index, Girlyman, Safeplace NY (6x Instagram, 8x SMS), Voren Bio (View site → vorenbio.com), Only Curse, Revival Clothing, The Green Door. Apex Aminos has no write-up yet (noindex).
- Hero reel: owner's original clips with audio (versioned file names), desktop volume slider, sound button only for clips with audio.
- No sideways scrolling on phones, ever.

## 2. Going live (Oct 5–7)
- GitHub repo made **public** (owner's choice); Vercel team project; push to main auto-deploys.
- Contact form live via Resend (domain verified with Wix DNS records); leads go to the owner's work inbox; "How did you hear about us? / Referral" field added. Spam timer fixed to use device-measured elapsed time (real visitors with fast clocks were being dropped).
- Domain moved to Vercel (Wix DNS: apex A record with a blank host since Wix rejects `@`; www CNAME).
- SEO pass: search-first titles, rich descriptions, JSON-LD, sitemap with lastmod, old Framer URLs redirected. Lighthouse SEO 100 / Accessibility 100.

## 3. Ads and tracking (Oct 6–9)
- `/apparel` landing page for clothing-brand ads (noindex, minimal nav), with an interactive Shopify-style sales dashboard, apparel logos, the t-shirt reel. Hero pill shortened to a CTA.
- Meta Pixel linked from the Clear Veil ad account and set as a Vercel env var; Conversions API for leads (shared event_id dedup), tested with a test event code (now disabled). Cal.com Meta app fires Schedule on bookings.
- Click tracking: every tel:/sms: link → Contact, every Cal.com link → custom BookCallClick (plus GTM dataLayer events).
- Meta campaign created as a draft in the Clear Veil ad account only: campaign "LEADS", ad set "BROAD: CIELO" ($20/day, website Lead), two ads (CTA "Contact us"; owner changed it from "Get in touch", which isn't supported in all placements). Owner re-picked location in Ads Manager because the API re-adds a retired location setting.

## 4. Contractors landing pages (Oct 9)
- `/contractors`: ads-first page for contractors and service businesses, with the owner's house-framing reel, contractor logos, McKenna stats, an interactive Google search → Google Ads dashboard demo (calls and leads climbing), "We worked on job sites before we ran ads" story (owner helped build homes before marketing), clickable service cards, McKenna case study feature, process, founder reviews, contact.
- Sub-pages linked only from `/contractors`: `/contractors/ads`, `/contractors/social` (content-calendar demo with clean glass placeholder tiles, blank glass profile instead of photos), `/contractors/websites` (before/after phone demo: slow typical site vs a clean light service-company homepage that scrolls itself and ends with an incoming call).
- Revisions: hero pill "Now booking contractors"; McKenna case study moved above "Why us" (shortened, no photo); website-design card added; ads card made full width with a checklist (was disproportionate on desktop); footer now has separate "Call" and "Text" links (site-wide).
- McKenna stats: owner disliked "4 mo"; a derived "1 in 3 clicks became a lead" was tried and then **removed so nothing could mislead**. Only case-study numbers are shown: 3,470 calls and quote requests, 10k+ clicks, 451k+ impressions.
- Full pixel pass on every page; browser Lead now carries `lead_source` like the CAPI copy. A real BookCallClick + Contact test was sent once from the live site to register the custom event in Events Manager.

## 5. City SEO pages (Oct 9)
- 15 West Michigan city pages at `/marketing-agency/<city>-mi`: the homepage tailored per city (owner: "literally copy the homepage but tailor each to the city for SEO").
- Rules from the owner: separate from contractors; full menu so visitors can browse the main site; **found only through search, never linked from the main site** (city pages link to each other only); default logo marquee; no client-by-city mentions; home base not named ("West Michigan").
- Revision: the pages must not sound local-only. Wording now says we're local but take businesses nationwide and worldwide ("Local to global" fact, "reach customers outside Michigan" FAQ).
- Recommended next steps for ranking (owner to do): Search Console sitemap resubmit + request indexing, Bing Webmaster import, Google Business Profile with the 15 cities as service areas and reviews, chamber/directory links, consistent name and phone everywhere.

## 6. Instagram content (Oct 12)
- A copy-and-paste prompt for another Claude chat that produces Instagram posts in the website's design system, plus white SVG logo files: `brand-kit/`.

## 7. Machine compromised (Nov 19)
- Owner's PC was compromised; Windows reinstall. Before the wipe: verified GitHub matches local (no unexpected commits), live Vercel deployment = latest commit, Vercel env vars unchanged since setup, DNS still points at Vercel. Added this file, CLAUDE.md, `tools/qa`, committed `brand-kit/`, backed up the transcript and memory.
- **Owner security to-do after reinstall:** rotate the Resend API key and Meta CAPI token (update both in Vercel, redeploy); sign out all sessions and check 2FA / recovery options / connected apps on GitHub, Vercel, Meta Business, Google Workspace, Wix, Cal.com and Resend; revoke unknown GitHub tokens and SSH keys; re-check Wix DNS records.

## Reconnecting tools in a new Claude session
- Open the project folder in Claude Code (desktop app, Code tab).
- Connectors used: Vercel (team scope), Meta Ads (only the Clear Veil ad account), GitHub via the `gh` CLI / git credentials. Re-authorize after the reinstall.
- Install: Node.js LTS and Git for Windows; then `npm install` in the project and in `tools/qa`. ffmpeg (for video encodes) was used via the `ffmpeg-static` npm package in a scratch folder; reinstall when needed.
