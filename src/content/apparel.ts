/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  APPAREL LANDING PAGE — /apparel  (for ads; not in the menu, sitemap or Google)
 *  Edit the words here. Numbers come from the case studies in site.ts.
 *  TODO(owner): review the new copy (headline, channel pitches, playbook).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const apparel = {
  meta: {
    title: 'Ads for Clothing Brands | Clear Veil Marketing',
    description:
      'Meta, Google and Pinterest ads for streetwear, fashion and outdoor brands. Release planning, SMS growth and ads that scale your best sellers.',
  },

  hero: {
    badge: 'New',
    status: 'Now booking growing brands',
    headline: ['Marketing built', 'for your next drop.'],
    lede:
      'We run Meta, Google and Pinterest ads for clothing brands, build every release around your best sellers, and grow the list that sells out the next one.',
    clips: [{ src: '/media/apparel-reel-v1.mp4', poster: '/media/apparel-reel.jpg', audio: true }],
    ghosts: ['/media/apparel-reel-4.jpg', '/media/apparel-reel-8.jpg'],
  },

  // Client names as in site.ts → clients (or a logo path for unnamed marks)
  // TODO(owner): name for the crown logo (/logos/client-12.webp)
  logos: ['Visionworld', 'Safeplace NY', 'Alert Index', 'Only Curse', 'Kandy', '/logos/client-12.webp', 'Revival Clothing'],

  stats: [
    { value: '$75k+', label: 'In sales on one product for Visionworld' },
    { value: '$12k', label: 'In 15 minutes on a re-release' },
    { value: '4x', label: 'Average ROAS on Alert Index releases' },
    { value: '8x', label: 'SMS list growth for Safeplace NY' },
  ],

  channels: {
    eyebrow: 'Channels',
    title: 'Three platforms, one plan for every release.',
    intro: 'Each channel does a different job. We run them together so your budget follows what’s actually selling.',
    items: [
      {
        platform: 'Meta' as const,
        name: 'Meta ads',
        pitch: 'Where most drops are won. We warm up your audience before launch, convert on release day, and retarget everyone who looked but didn’t buy.',
        includes: ['Drop teasers', 'Launch campaigns', 'Catalog ads', 'Retargeting', 'SMS sign-ups'],
      },
      {
        platform: 'Google Ads' as const,
        name: 'Google ads',
        pitch: 'Catch shoppers already searching for your products and your brand name, with your catalog showing up in Shopping results.',
        includes: ['Shopping', 'Performance Max', 'Branded search', 'Product feed setup'],
      },
      {
        platform: 'Pinterest' as const,
        name: 'Pinterest ads',
        pitch: 'Reach people while they plan outfits and seasonal buys. A strong fit for fashion and outdoor brands with a visual catalog.',
        includes: ['Seasonal campaigns', 'Lookbook pins', 'Shopping pins', 'Discovery audiences'],
      },
    ],
  },

  playbook: {
    eyebrow: 'The release playbook',
    title: 'How we run a drop.',
    intro: 'The same process behind the results above.',
    steps: [
      {
        name: 'Plan',
        body: 'We study what’s selling, pick the products to push, and set the budget and release calendar with you.',
        tags: ['Product analysis', 'Release calendar'],
      },
      {
        name: 'Build hype',
        body: 'Teasers and early-access offers grow your SMS and email list before launch, so the drop starts strong.',
        tags: ['Teasers', 'SMS + email sign-ups'],
      },
      {
        name: 'Launch & scale',
        body: 'On release day, spend follows what’s converting. Winners get scaled, and best sellers come back as re-releases.',
        tags: ['Live optimization', 'Re-releases'],
      },
    ],
  },

  work: ['visionworld', 'alert-index', 'safeplace-ny', 'only-curse', 'revival-clothing'],
  reviews: ['Safeplace NY', 'Visionworld', 'Revival Clothing'],

  contact: {
    title: 'Ready for your next drop?',
    sub: 'Tell us about your brand and what you’re releasing next. We reply within one business day.',
    source: 'Apparel landing page',
  },
};
