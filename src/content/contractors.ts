/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONTRACTORS & SERVICE BUSINESSES — ad landing pages (not in menu, sitemap or Google)
 *    /contractors          main page (ads first, social second)
 *    /contractors/ads      sub-page: Google + Meta lead generation
 *    /contractors/social   sub-page: social media content management
 *    /contractors/websites sub-page: website design for contractors
 *  Edit the words here. Numbers come from the McKenna case study in site.ts.
 *  TODO(owner): review all new copy, especially the "built homes" story.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const reel = {
  clips: [{ src: '/media/contractors-reel-v1.mp4', poster: '/media/contractors-reel.jpg', audio: false }],
  ghosts: ['/media/contractors-reel-2.jpg', '/media/contractors-reel-4.jpg'],
};

// Client names as in site.ts → clients
const logos = [
  'McKenna Brothers Paving',
  'Moreno & Sons Excavation',
  "Pezzuto's Excavating",
  'Dylan Burrows Concrete',
  'The Green Door',
  'Triple JJJ Bar & Grill',
];

const mckennaStats = [
  { value: '3,470', label: 'Calls and quote requests for McKenna Brothers' },
  { value: '451k+', label: 'Ad impressions for McKenna Brothers' },
  { value: '10k+', label: 'Clicks from people ready to hire' },
  { value: '$5M+', label: 'Ad spend managed across all clients' },
];

/* ── Main page ─────────────────────────────────────────────────────────── */
export const contractors = {
  meta: {
    title: 'Marketing for Contractors & Service Businesses | Clear Veil',
    description:
      'Google and Meta ads that make your phone ring. Built by people who have worked on job sites. 3,470 calls and quote requests in one season for McKenna Brothers Paving.',
  },
  source: 'Contractors landing page',

  hero: {
    badge: 'New',
    status: 'Now booking contractors',
    headline: ['More calls.', 'More booked jobs.'],
    lede:
      'We run Google and Meta ads for contractors and service businesses, so homeowners in your area find you first and call you, not the next guy.',
    primary: { label: 'Book a free 15-minute call', href: 'https://cal.com/clear-veil-marketing-inc/15min' },
    ...reel,
  },
  logos,
  logoLabel: 'Trusted by contractors and local service businesses',
  stats: mckennaStats,

  demo: {
    eyebrow: 'How it works',
    title: 'From a search to a ringing phone.',
    sub: 'When a homeowner searches for what you do, your business shows up first. Every call and quote request is tracked, so you know exactly what your ad spend brings in.',
  },

  story: {
    eyebrow: 'Why us',
    title: 'We worked on job sites before we ran ads.',
    body: [
      'Before Clear Veil, we helped build homes and worked in them. We know a missed call is a lost job, and you don’t have time to babysit an agency.',
    ],
    facts: [
      { value: 'Calls first', label: 'Every campaign is built around phone calls and quote requests.' },
      { value: 'Month to month', label: 'No long-term contracts. We earn it every month.' },
      { value: 'Plain reports', label: 'Calls, leads and cost per lead. Nothing to decode.' },
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'Ads that fill your schedule. Content that builds trust.',
    intro: 'Most contractors start with ads. Many add social and a better website, so homeowners see real work and can call in one tap.',
    items: [
      {
        href: '/contractors/ads',
        tag: 'Main service',
        name: 'Google & Meta ads',
        body: 'Show up first when homeowners search for your service, and stay in front of them on Facebook and Instagram until they call.',
        points: ['Google Search ads', 'Facebook & Instagram ads', 'Call and lead tracking', 'Weekly optimization'],
        cta: 'See how our ads work',
        featured: true,
      },
      {
        href: '/contractors/social',
        tag: 'Add-on',
        name: 'Social media content',
        body: 'We turn your job sites into steady posts and short videos, so your pages look busy and trustworthy when people check you out.',
        points: ['On-site content', 'Before & after posts', 'Short-form video', 'Posting handled for you'],
        cta: 'See our social service',
      },
      {
        href: '/contractors/websites',
        tag: 'Add-on',
        name: 'Website design',
        body: 'Fast, simple websites built to turn visitors into calls and quote requests, with service pages Google can find.',
        points: ['Click-to-call on every page', 'Quote request forms', 'Service area pages', 'Built for phones'],
        cta: 'See our website service',
      },
    ],
  },

  caseStudy: {
    slug: 'mckenna-brothers-paving',
    eyebrow: 'Case study',
    title: 'McKenna Brothers Paving',
    sub: 'Alaska’s largest locally owned paving company wasn’t showing up when people searched for a paver during peak season. We rebuilt their website for calls, fixed their search rankings and launched Google Search ads.',
    quote: 'In four months of peak season, the campaigns brought in 3,470 calls and quote requests from more than 10,000 clicks.',
  },

  process: {
    eyebrow: 'The process',
    title: 'Live in about two weeks.',
    intro: 'Three steps, the same every time.',
    steps: [
      { name: 'Audit', body: 'We look at your current ads, website and Google listing, and find where calls are being lost.', tags: ['Free audit', 'Service-area plan'] },
      { name: 'Launch', body: 'We build campaigns around your services and service area, and track every call and form fill.', tags: ['Google + Meta', 'Call tracking'] },
      { name: 'Grow', body: 'Weekly adjustments to cut wasted spend, and more budget behind what books jobs.', tags: ['Weekly tuning', 'Plain reports'] },
    ],
  },

  // Google reviews (company names as in site.ts → reviews) that speak to working with the founders
  reviews: ['Church On The Move USA', 'Visionworld', 'Safeplace NY'],

  contact: {
    title: 'Ready for a fuller schedule?',
    sub: 'Tell us your trade and your service area. We’ll reply within one business day with where your next calls should come from.',
  },
};

/* ── Sub-page: Ads ─────────────────────────────────────────────────────── */
export const contractorsAds = {
  meta: {
    title: 'Google & Meta Ads for Contractors | Clear Veil',
    description:
      'Lead generation for contractors and service businesses: Google Search and Facebook & Instagram ads, call tracking and weekly optimization. Month-to-month.',
  },
  source: 'Contractors – Ads page',
  hero: {
    eyebrow: 'Google & Meta ads',
    title: 'Get found first. Get the call.',
    lede: 'Search ads put you at the top when homeowners need you now. Facebook and Instagram ads keep you in front of them until they’re ready. We run both and track every call.',
  },
  stats: mckennaStats,
  channels: {
    eyebrow: 'Two channels',
    title: 'Catch them searching. Stay in front of them after.',
    items: [
      {
        platform: 'Google Ads' as const,
        name: 'Google Search ads',
        pitch: 'Show up at the top when someone searches “driveway paving near me” or “emergency plumber”. These are people ready to hire today.',
        includes: ['High-intent keywords', 'Your service area only', 'Click-to-call ads', 'Negative keywords to cut waste'],
      },
      {
        platform: 'Meta' as const,
        name: 'Facebook & Instagram ads',
        pitch: 'Reach homeowners in your area before they search, with your real job photos and videos, and win them over before your competitors do.',
        includes: ['Local homeowner targeting', 'Job-site photo & video ads', 'Instant quote forms', 'Retargeting site visitors'],
      },
    ],
  },
  included: {
    eyebrow: 'What’s included',
    title: 'Everything it takes to turn clicks into calls.',
    items: [
      { name: 'Call & lead tracking', body: 'Every call, form fill and booked estimate is tracked back to the ad that drove it.' },
      { name: 'Landing pages', body: 'Fast pages built to get the call, with your phone number one tap away.' },
      { name: 'Weekly optimization', body: 'We cut what isn’t booking jobs and move budget to what is, every week.' },
      { name: 'Plain reporting', body: 'Calls, leads, cost per lead and spend. Readable in two minutes on your phone.' },
      { name: 'Seasonal planning', body: 'Budgets that ramp up before your busy season and ease off when you’re booked out.' },
      { name: 'Direct access', body: 'You work with the founders, not a rotating account manager.' },
    ],
  },
  process: contractors.process,
  faq: {
    eyebrow: 'Questions',
    title: 'What contractors ask us.',
    items: [
      { q: 'How much should I spend on ads?', a: 'It depends on your trade and area. Most local service businesses start somewhere between $1,000 and $3,000 a month in ad spend. We’ll give you a specific recommendation on your free call.' },
      { q: 'How fast will the phone start ringing?', a: 'Search ads can bring calls in the first week once they’re live. Facebook and Instagram usually take a few weeks to learn who your best customers are.' },
      { q: 'Do I have to sign a long contract?', a: 'No. We work month to month.' },
      { q: 'Can you target only my service area?', a: 'Yes. Ads run only in the towns, ZIP codes or radius you actually serve.' },
      { q: 'How will I know it’s working?', a: 'You’ll see calls, quote requests and cost per lead in a simple report, broken down by the ad that brought them in.' },
    ],
  },
  contact: {
    title: 'Let’s get your phone ringing.',
    sub: 'Tell us your trade, service area and current ad spend (if any). We’ll come back with a plan within one business day.',
  },
};

/* ── Sub-page: Social ──────────────────────────────────────────────────── */
export const contractorsSocial = {
  meta: {
    title: 'Social Media for Contractors | Clear Veil',
    description:
      'Social media content management for contractors and service businesses: job-site photos and video, before-and-after posts and posting handled for you.',
  },
  source: 'Contractors – Social page',
  hero: {
    eyebrow: 'Social media content',
    title: 'Show your work. Win the trust.',
    lede: 'Homeowners check your Facebook and Instagram before they call. We keep your pages full of real job-site content, so they see a busy, trustworthy company.',
  },
  gallery: ['/media/contractors-reel.jpg', '/media/contractors-reel-2.jpg', '/media/contractors-reel-4.jpg'],
  demo: {
    eyebrow: 'How it looks',
    title: 'A page that stays busy, even when you are.',
    sub: 'We plan the week, post it for you and keep your pages active, so homeowners who check you out see real, recent work and reach out.',
  },
  why: {
    eyebrow: 'Why it matters',
    title: 'Your page is your second business card.',
    body: [
      'Most homeowners look you up before they call. A page full of recent projects, real crews and happy customers answers their questions before they ask.',
      'An empty page, or one that hasn’t posted since last summer, sends them to the next company on the list.',
    ],
    facts: [
      { value: 'Proof', label: 'Real projects show homeowners the quality they’ll get.' },
      { value: 'Trust', label: 'An active page says you’re busy, established and still in business.' },
      { value: 'Better ads', label: 'Your best posts become the ads that make the phone ring.' },
    ],
  },
  included: {
    eyebrow: 'What we handle',
    title: 'You do the work. We make sure people see it.',
    items: [
      { name: 'Content capture', body: 'Simple ways to grab photos and video on site, plus planned shoots when a project calls for it.' },
      { name: 'Before & after posts', body: 'The most convincing content in the trades, edited and posted the right way.' },
      { name: 'Short-form video', body: 'Reels and short videos of your crew and projects, edited for Facebook and Instagram.' },
      { name: 'Posting calendar', body: 'A steady schedule that keeps your pages active, all planned and posted for you.' },
      { name: 'Captions & hashtags', body: 'Written for homeowners in your area, not for other contractors.' },
      { name: 'Ready for ads', body: 'Your top posts get flagged to run as ads when you’re ready to grow faster.' },
    ],
  },
  process: {
    eyebrow: 'The process',
    title: 'Hands-off for you after day one.',
    intro: 'One setup call, then we take it from there.',
    steps: [
      { name: 'Kickoff', body: 'We learn your services, the jobs you want more of and how your pages look today.', tags: ['Page review', 'Content plan'] },
      { name: 'Capture', body: 'You snap photos on site or we schedule a shoot. We sort, edit and pick the best.', tags: ['Job-site content', 'Editing'] },
      { name: 'Post', body: 'Your calendar goes live, and we keep it running and adjust based on what people engage with.', tags: ['Scheduled posting', 'Monthly check-in'] },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Good to know.',
    items: [
      { q: 'Do I need to film everything myself?', a: 'No. A few quick photos or clips from site is plenty. We handle the editing, captions and posting, and can schedule shoots for bigger projects.' },
      { q: 'Which platforms do you post to?', a: 'Facebook and Instagram, where homeowners look up local contractors.' },
      { q: 'Can social and ads work together?', a: 'Yes, and that’s where it works best. Your strongest posts become proven ads.' },
      { q: 'Is there a long contract?', a: 'No. We work month to month.' },
    ],
  },
  contact: {
    title: 'Let’s make your work easy to find.',
    sub: 'Tell us what you do and where. We’ll reply within one business day.',
  },
};

/* ── Sub-page: Websites ────────────────────────────────────────────────── */
// TODO(owner): check the FAQ answers (timeline, ownership, updates) match how you sell websites
export const contractorsWebsites = {
  meta: {
    title: 'Website Design for Contractors | Clear Veil',
    description:
      'Fast, simple websites for contractors and service businesses: click-to-call on every page, quote request forms, service area pages and tracking set up from day one.',
  },
  source: 'Contractors – Websites page',
  hero: {
    eyebrow: 'Website design',
    title: 'A website built to get the call.',
    lede: 'Most contractor websites look fine and do nothing. We build fast, simple sites where your number is one tap away, quotes are easy to request and Google can find your services.',
  },
  demo: {
    eyebrow: 'Before & after',
    title: 'Same company. Very different website.',
    sub: 'Flip between a typical contractor site and one built to get the call. The difference shows up on your phone bill, in a good way.',
  },
  included: {
    eyebrow: 'What’s included',
    title: 'Everything a homeowner needs to pick up the phone.',
    items: [
      { name: 'Click-to-call everywhere', body: 'Your number stays one tap away on every page and every screen size.' },
      { name: 'Quote request forms', body: 'Short forms that ask for the job details you need and land straight in your inbox.' },
      { name: 'Service & area pages', body: 'A page for each service and the towns you cover, written the way homeowners search.' },
      { name: 'Fast on phones', body: 'Most of your visitors are on a phone. Pages load quickly and read easily on a small screen.' },
      { name: 'Tracking from day one', body: 'Calls, form fills and your ad pixels set up properly, so you know where every lead came from.' },
      { name: 'Kept up as you grow', body: 'New service, new photos, new town? Send it over and we handle the updates.' },
    ],
  },
  process: {
    eyebrow: 'The process',
    title: 'Live in weeks, not months.',
    intro: 'Designed and built from scratch, the same three steps every time.',
    steps: [
      { name: 'Plan', body: 'We learn your services, your area and the jobs you want more of, then map out the pages.', tags: ['Service list', 'Page plan'] },
      { name: 'Build', body: 'We design and build the site around calls and quote requests, using your real job photos.', tags: ['Design & build', 'Your photos'] },
      { name: 'Launch', body: 'Tracking goes in, the site goes live, and we keep it updated as your business grows.', tags: ['Call tracking', 'Ongoing updates'] },
    ],
  },
  reviews: ['Apex Aminos'],
  faq: {
    eyebrow: 'Questions',
    title: 'Good to know.',
    items: [
      { q: 'How long does a new website take?', a: 'Most sites are designed, built and live within a few weeks, depending on how many services and pages you need.' },
      { q: 'Can you fix my current website instead?', a: 'Sometimes. We’ll look at it on your free call and tell you honestly whether it’s worth improving or rebuilding.' },
      { q: 'Do I need to write the content?', a: 'No. We write it with you, based on your services, your area and how homeowners search.' },
      { q: 'Will it work with my ads?', a: 'Yes. It’s built with your Google and Meta tracking set up from day one, so your ads and your site work together.' },
    ],
  },
  contact: {
    title: 'Let’s build a site that rings your phone.',
    sub: 'Tell us your trade, your area and your current website (if you have one). We’ll reply within one business day.',
  },
};
