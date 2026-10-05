// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Every page is pre-built as static HTML (fast, cheap). The only server code is
// src/pages/api/contact.ts, which opts out with `export const prerender = false`
// and becomes a Vercel serverless function.
export default defineConfig({
  site: 'https://www.clearveilmarketing.com',
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // Old Framer URLs → new pages, so existing links and Google results keep working.
  redirects: {
    '/terms-conditions': '/terms',
    '/privacy-policy': '/privacy',
    '/contact': '/#contact',
  },
  build: { format: 'file' },
});
