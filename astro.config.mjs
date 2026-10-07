// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { work } from './src/content/site.ts';

// Case studies without a write-up are hidden from Google (noindex), so keep
// them out of the sitemap too. They're added back automatically once written.
const unfinished = work.filter((w) => !w.story?.length).map((w) => `/work/${w.slug}`);
const builtAt = new Date().toISOString();

// Every page is pre-built as static HTML (fast, cheap). The only server code is
// src/pages/api/contact.ts, which opts out with `export const prerender = false`
// and becomes a Vercel serverless function.
export default defineConfig({
  site: 'https://www.clearveilmarketing.com',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !unfinished.some((p) => page.endsWith(p)),
      serialize: (item) => ({ ...item, lastmod: builtAt }),
    }),
  ],
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // Old Framer URLs → new pages, so existing links and Google results keep working.
  redirects: {
    '/terms-conditions': '/terms',
    '/privacy-policy': '/privacy',
  },
  build: { format: 'file' },
});
