/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit words, links and numbers here.
 *
 *  Almost every piece of text on the site lives in this one file. Change a
 *  value, save, and the dev server updates instantly. Push to GitHub and Vercel
 *  redeploys in about a minute.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Clear Veil Marketing',
  legalName: 'Clear Veil Marketing Inc.',
  url: 'https://www.clearveilmarketing.com',
  title: 'Clear Veil Marketing',
  description:
    'Clear Veil Marketing runs paid ads, builds websites and produces creative for growing businesses. Over $5M in managed ad spend. Book a 15-minute call.',
  location: 'Michigan',
  bookingUrl: 'https://cal.com/clear-veil-marketing-inc/15min',
  // Call + text number: E.164 format for links, and how it's displayed
  phone: '+12696154507',
  phoneDisplay: '(269) 615-4507',
  reviewsUrl: 'https://share.google/QMZkqgB78xrt4Td4w',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/clear.veil/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577358754730' },
  ],
};

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
];

export const hero = {
  status: 'Now booking new clients',
  headline: ['Marketing', 'built for you.'],
  lede:
    'We run your ads, build your website and make the creative. You work directly with the people doing it.',
  primary: { label: 'Book a 15-minute call', href: site.bookingUrl },
  // The 9:16 reel. Clip 1 loads with the page; 2 and 3 load only when needed.
  clips: [
    { src: '/media/clip-1.mp4', poster: '/media/clip-1.jpg' },
    { src: '/media/clip-2.mp4', poster: '/media/clip-2.jpg' },
    { src: '/media/clip-3.mp4', poster: '/media/clip-3.jpg' },
  ],
};

/**
 * Client logos for the marquee (and on matching reviews).
 * Files live in /public/logos/ — white on transparent, WebP or PNG.
 * `w` and `h` are the file's pixel size; they're used to balance wide and
 * square logos so they look the same visual weight.
 * `name` must match a review's `company` for the logo to show on that review.
 */
export const clients: { name: string; logo: string; w: number; h: number }[] = [
  { name: 'Girlyman', logo: '/logos/girlyman.webp', w: 520, h: 128 },
  { name: 'Apex Aminos', logo: '/logos/apex-aminos.webp', w: 218, h: 160 },
  { name: 'Safeplace NY', logo: '/logos/safeplace-ny.webp', w: 236, h: 160 },
  { name: 'Visionworld', logo: '/logos/visionworld.webp', w: 496, h: 160 },
  { name: 'Church On The Move USA', logo: '/logos/church-on-the-move.webp', w: 156, h: 160 },
  { name: 'Revival Clothing', logo: '/logos/revival-clothing.webp', w: 520, h: 141 },
  { name: 'Voren Bio', logo: '/logos/voren-bio.webp', w: 165, h: 160 },
  { name: 'Only Curse', logo: '/logos/only-curse.webp', w: 265, h: 160 },
  { name: 'Alert Index', logo: '/logos/alert.webp', w: 407, h: 160 },
  { name: 'McKenna Brothers Paving', logo: '/logos/mckenna-bros-paving.webp', w: 451, h: 160 },
  { name: 'Sunnyday Sourdough Co.', logo: '/logos/sunnyday-sourdough.webp', w: 188, h: 160 },
  { name: 'Kandy', logo: '/logos/kandy.webp', w: 520, h: 140 },
  { name: 'The Green Door', logo: '/logos/the-green-door.webp', w: 160, h: 160 },
  { name: 'Moreno & Sons Excavation', logo: '/logos/moreno-and-sons.webp', w: 268, h: 160 },
  { name: "Pezzuto's Excavating", logo: '/logos/pezzutos-excavating.webp', w: 337, h: 160 },
  { name: 'Dylan Burrows Concrete', logo: '/logos/dylan-burrows-concrete.webp', w: 236, h: 160 },
  { name: 'Triple JJJ Bar & Grill', logo: '/logos/triple-jjj.webp', w: 273, h: 160 },
  // TODO(owner): real names for these three marks (used as alt text)
  { name: 'Client', logo: '/logos/client-06.webp', w: 279, h: 160 },
  { name: 'Client', logo: '/logos/client-10.webp', w: 162, h: 160 },
  { name: 'Client', logo: '/logos/client-12.webp', w: 175, h: 160 },
];

/** Find a client's logo by name (used by reviews). */
export const logoFor = (name: string) => clients.find((c) => c.name === name);

export const stats = [
  { value: '$5M+', label: 'Ad spend managed' },
  { value: '4.2x', label: 'Average return on ad spend' },
  { value: '25+', label: 'Client reviews' }, // TODO(owner): confirm label
];

export const services = {
  eyebrow: 'Services',
  title: 'What we do',
  intro:
    'Most clients come for ads or a website. They stay because we handle the rest.',
  items: [
    {
      name: 'Paid ads',
      summary: 'Campaigns planned, launched and managed day to day across Meta, Google and Amazon.',
      body: "Spend goes where it's working, and you get reporting you can read in two minutes. We handle creative, targeting, testing and the weekly adjustments, and we tell you plainly when something isn't working.",
      includes: [
        'Meta and Instagram',
        'Google Search and Shopping',
        'Amazon Ads',
        'Lead generation and e-commerce',
        "Monthly reporting you'll actually read",
      ],
    },
    {
      name: 'Websites',
      summary: 'Fast sites built to turn ad clicks into calls, bookings and sales.',
      body: 'Designed and built from scratch in weeks, with tracking set up properly from day one so your ads and your site talk to each other. Then kept up as you grow.',
      includes: [
        'Design and build',
        'Landing pages for campaigns',
        'Booking and lead forms',
        'Pixel and analytics setup',
        'Ongoing updates',
      ],
    },
    {
      name: 'Creative and social',
      summary: 'Ad creative, brand assets and content that keep you active between campaigns.',
      body: 'The ads only work if the creative does. We produce the images, video and copy your campaigns run on, and keep your social channels moving so the brand looks alive when people check.',
      includes: [
        'Ad creative and video',
        'Graphic design and brand assets',
        'Social media content and posting',
      ],
    },
    {
      name: 'Apps and operations',
      summary: 'Custom tools and the systems behind the marketing, from lead handling to follow-up.',
      body: 'Leads are only worth what happens after they come in. We build the custom apps and fix the operational systems so nothing slips through the cracks between the ad and the sale.',
      includes: ['Custom web and mobile apps', 'CRM and lead routing', 'Operations consulting'],
    },
  ],
};

export const process = {
  eyebrow: 'How we work',
  title: 'Three stages, the same every time.',
  intro: 'So you always know where things stand.',
  steps: [
    {
      name: 'Kickoff',
      body: "We learn your goals, your numbers and what's been tried before, then agree on a plan.",
      tags: ['Consultation', 'Project roadmap'],
    },
    {
      name: 'Execution',
      body: 'We build and launch, keep you in the loop as it happens, and adjust as results come in.',
      tags: ['Integrated setup', 'Real-time collaboration'],
    },
    {
      name: 'Handoff',
      body: 'You get every asset, login and document. Ongoing work continues with the same people.',
      tags: ['Documentation', 'Ongoing support'],
    },
  ],
};

/**
 * Work / case studies. Each item powers a homepage pill, a card on /work and
 * its own page at /work/<slug>. Order here = order on the site (strongest first).
 * Source: owner's 2025 case study PDFs, condensed for easy reading.
 *
 * Fields (all optional except slug/client/what/services):
 *   result    — short headline shown on the pill, e.g. "3,470 leads in 4 months"
 *   instagram — handle without @, shown in the snapshot card
 *   site      — the client's live website, shown as a "View site" button
 *   cover     — an image path in /public, shown at the top of the case study
 *   results   — big numbers for the results band: [{ value: '4x', label: 'Average ROAS' }]
 *   story     — sections: [{ heading, body: ['paragraph'], points: ['bullet'] }]
 * Empty fields are simply left off the page.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  what: string;
  services: string[];
  result?: string;
  instagram?: string;
  site?: string;
  cover?: string;
  results?: { value: string; label: string }[];
  story?: { heading: string; body?: string[]; points?: string[] }[];
};

export const work: CaseStudy[] = [
  {
    slug: 'mckenna-brothers-paving',
    client: 'McKenna Brothers Paving',
    what: 'A peak-season lead engine for Alaska’s largest locally owned paver',
    services: ['Google Ads', 'Website', 'SEO'],
    result: '3,470 leads in 4 months',
    results: [
      { value: '3,470', label: 'Calls and quote requests' },
      { value: '10k+', label: 'Clicks' },
      { value: '451k+', label: 'Impressions' },
      { value: '4 mo', label: 'During peak season' },
    ],
    story: [
      {
        heading: 'The brief',
        body: [
          'McKenna Brothers is the largest locally owned paving company in Alaska, known for its bright blue trucks and its residential, commercial and government work.',
          'Summer is make-or-break for paving in Alaska. During peak season they weren’t showing up when people searched for a paving company, so leads went to competitors every day.',
        ],
        points: ['Outdated website', 'Weak search rankings', 'No Google Ads running'],
      },
      {
        heading: 'What we did',
        points: [
          'Rebuilt the website around one goal: get visitors to call or request a quote',
          'Rewrote titles, descriptions and service pages for searches like “asphalt paving near me” and “driveway paving in Alaska”',
          'Launched Google Search campaigns on high-intent keywords across their service areas',
          'Tracked every call and quote request, then tuned bids and targeting week by week',
        ],
      },
      {
        heading: 'The result',
        body: [
          'In four months of peak season, the campaigns brought in 3,470 calls and quote requests from more than 10,000 clicks. McKenna Brothers took back local market share and now has a lead system they can measure.',
        ],
      },
    ],
  },
  {
    slug: 'visionworld',
    client: 'Visionworld',
    what: 'From a failed release to $75k+ in sales on a single product',
    services: ['Meta ads', 'SMS', 'Strategy'],
    instagram: 'visionworldus',
    result: '$12k in 15 minutes',
    results: [
      { value: '$75k+', label: 'In sales on one product' },
      { value: '$12k', label: 'In 15 minutes on the re-release' },
      { value: '4x', label: 'Average ROAS' },
      { value: '4x', label: 'SMS list growth' },
    ],
    story: [
      {
        heading: 'The brief',
        body: [
          'Visionworld is an urban streetwear label known for oversized outerwear and bold graphic layering.',
          'Before us, they had worked with several agencies that overpromised and underdelivered while the invoices added up. We came in right after a release failed under another agency’s watch.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Audited the ad account and shut off campaigns spending without results',
          'Realigned marketing goals directly with the CEO',
          'Rebuilt the ads around one proven best seller',
          'Set weekly meetings and a shared content and ad schedule',
          'Added SMS list targeting in the middle of the funnel',
        ],
      },
      {
        heading: 'The result',
        body: [
          'The first rollout did $12,000+ in sales at a 4x average ROAS, and the SMS list doubled in two weeks.',
          'When we brought that product back, the re-release did $12,000 in 15 minutes. It has now brought in more than $75,000 in sales on its own.',
          'Along the way, the SMS list has grown more than 4x and Instagram is up 10,000+ followers. We’re on pace for over $250k in revenue in our first year together.',
        ],
      },
    ],
  },
  {
    slug: 'alert-index',
    client: 'Alert Index',
    what: 'Fixed broken tracking and turned zero conversions into a 4x ROAS',
    services: ['Meta ads', 'Tracking', 'SMS'],
    instagram: 'alertindex',
    result: '4x average ROAS',
    results: [
      { value: '4x', label: 'Average ROAS across all ads' },
      { value: 'Record', label: 'SMS sign-ups' },
    ],
    story: [
      {
        heading: 'The brief',
        body: [
          'Alert Index is a streetwear label with a retro-modern, workwear-inspired look.',
          'During a recent release, their ad account recorded zero conversions, and their previous team was spreading the budget thin across too many creatives.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Found the real problem: the pixel wasn’t tracking conversions, so the ad spend produced no usable data',
          'Fixed the tracking and rebuilt the ad account to our standards',
          'Set clear budgets across the full funnel, from first look to purchase',
          'Planned a hybrid release: a proven best seller relaunched next to a new, complementary item to lift order value',
        ],
      },
      {
        heading: 'The result',
        body: [
          'The first release turned things around: a 4x average ROAS across all ads, record SMS sign-ups, and clean conversion data flowing back into the pixel, so every future release gets smarter.',
        ],
      },
    ],
  },
  {
    slug: 'girlyman',
    client: 'Girlyman',
    what: 'The entire launch and marketing operation, from day one',
    services: ['Amazon', 'Meta', 'Website', 'Launch'],
    instagram: 'girlymanproducts',
    result: '3M+ views in year one',
    results: [
      { value: '3M+', label: 'Views across Amazon and Meta' },
      { value: '1,000s', label: 'Repeat buyers' },
      { value: 'Year 1', label: 'Revenue goals hit' },
    ],
    story: [
      {
        heading: 'The brief',
        body: [
          'Girlyman is a natural skincare brand for sensitive skin: no toxins, no artificial fragrance, no fillers, inspired by real experience with chronic illness.',
          'They came to us with a vision and needed the whole launch built, ready for both Amazon and their own online store.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Set up Amazon FBA: inventory, fulfillment and brand registry',
          'Designed and built their website, optimized for search',
          'Ran a three-month Amazon ads testing phase to find profitable keywords',
          'Connected Shopify and Amazon so inventory and orders sync automatically',
          'Launched Meta awareness campaigns across Facebook and Instagram',
          'Added Subscribe & Save plus SMS and email capture to keep buyers coming back',
        ],
      },
      {
        heading: 'The result',
        body: [
          'In year one, Girlyman reached more than 3 million views across Amazon and Meta, hit its revenue goals and built a base of thousands of repeat buyers, on a foundation made to scale.',
        ],
      },
    ],
  },
  {
    slug: 'safeplace-ny',
    client: 'Safeplace NY',
    what: 'A side project turned into a real business',
    services: ['Meta ads', 'Marketing management'],
    instagram: 'safeplaceny',
    result: '6x Instagram, 8x SMS',
    results: [
      { value: '6x', label: 'Instagram following' },
      { value: '8x', label: 'SMS list growth' },
    ],
    story: [
      {
        heading: 'The brief',
        body: [
          'Safeplace NY is a New York streetwear label that mixes nature-inspired design with tactical function.',
          'The owner had been running the ads on their own and learning as they went. As the business grew, they needed the workload off their plate and more revenue from every release.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Planned collections and campaigns together, with a set content and ad schedule',
          'Took over the full marketing workload so the owner could focus on design and operations',
          'Used sales data to find the products and details customers loved, and built releases around them',
          'Ran every rollout across the full funnel, from first look to checkout',
        ],
      },
      {
        heading: 'The result',
        body: [
          'Instagram following has grown 6x, the SMS list has grown 8x, and monthly revenue has scaled with higher order values and ROAS on every release.',
        ],
      },
    ],
  },
  {
    // TODO(owner): add results (conversion rate, email revenue, list growth) + site link when ready
    slug: 'voren-bio',
    client: 'Voren Bio',
    what: 'A high-performing, fully compliant peptide website with automated email',
    services: ['Website', 'Email flows', 'Automation'],
    site: 'https://vorenbio.com',
    story: [
      {
        heading: 'The brief',
        body: [
          'Voren Bio sells peptides, a category where a website has to do two jobs at once: convert visitors and stay fully compliant.',
          'They needed a site built to perform from day one, plus the email systems to keep customers coming back without manual work.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Designed and built a high-performing peptide website',
          'Kept every page fully compliant for the category',
          'Set up email flows to welcome, convert and bring back customers',
          'Automated the follow-up so it runs without manual work',
        ],
      },
      {
        heading: 'The result',
        body: [
          'Voren Bio launched with a fast, compliant site and automated email flows working from the start, set up for success as they grow.',
        ],
      },
    ],
  },
  {
    slug: 'only-curse',
    client: 'Only Curse',
    what: 'Rebuilt the funnel to restart momentum after the organic wave',
    services: ['Meta ads', 'Strategy'],
    instagram: 'onlycurse',
    story: [
      {
        heading: 'The brief',
        body: [
          'Curse is a dark, cinematic streetwear label with over 100K Instagram followers.',
          'Early growth came from a big organic wave. When it cooled, revenue was hard to sustain. The product, branding and creative were all strong. The ads weren’t.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Audited campaign structure, creative, audience overlap and budget',
          'Reviewed sell-through by product to see which items actually drove profit',
          'Rebuilt the funnel to reach new audiences, re-engage warm ones and retarget buyers',
          'Added lead flows to grow SMS and email lists',
        ],
      },
      {
        heading: 'The result',
        body: [
          'After our first release together, follower loss reversed and the brand reached a bigger, more engaged audience, with a clear lift in impressions, engagement and purchases.',
          'Next up: ongoing inventory analysis and always-on optimization for sell-through.',
        ],
      },
    ],
  },
  {
    slug: 'revival-clothing',
    client: 'Revival Clothing',
    what: 'Structure and better content behind every release',
    services: ['Meta ads', 'Strategy', 'Content'],
    instagram: 'revivalclothing303',
    story: [
      {
        heading: 'The brief',
        body: [
          'Revival is a streetwear brand built on bold graphics and street culture.',
          'They were running ads and releases without structure or clear data, which meant wasted spend and limited results.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Joined mid-release to stabilize it: refined targeting and moved budget to what was working',
          'Rebuilt their marketing with a set budget plan for every release',
          'Elevated content with IRL photo shoots, sharper product photography and creative built for Meta',
        ],
      },
      {
        heading: 'The result',
        body: [
          'Revival’s funnel is now structured and ready to scale. Content quality is up, reach keeps growing, and the budget works with purpose instead of guesswork.',
        ],
      },
    ],
  },
  {
    slug: 'the-green-door',
    client: 'The Green Door',
    what: 'A website that matches the in-store experience',
    services: ['Website'],
    story: [
      {
        heading: 'The brief',
        body: [
          'The Green Door is a family-owned cannabis dispensary in Michigan, known for a warm, welcoming store.',
          'Their website didn’t match it: it was dated, hard to use on phones, and buried their rewards and discounts.',
        ],
      },
      {
        heading: 'What we did',
        points: [
          'Redesigned the site to reflect the brand’s welcoming, professional feel',
          'Made it work smoothly on phones, tablets and desktop',
          'Put rewards, discounts and store details front and center with clear calls to action',
        ],
      },
      {
        heading: 'The result',
        body: [
          'The new site gives The Green Door a professional online presence that matches the store, sends customers to rewards and locations, and is ready for future marketing and online ordering.',
        ],
      },
    ],
  },
  {
    // TODO(owner): no case study yet — write this one together
    slug: 'apex-aminos',
    client: 'Apex Aminos',
    what: 'New website built from scratch in two weeks',
    services: ['Design', 'Build'],
  },
];

export const about = {
  eyebrow: 'About',
  title: 'Small on purpose. You talk to the people doing the work.',
  paragraphs: [
    'Clear Veil was started to avoid the things that make agencies frustrating: slow replies, layers of account managers, and reports nobody can read. When you work with us, you work with the founders.',
    "We've managed over $5 million in ad spend for clients across e-commerce, services and nonprofits, from the first campaign through to the systems that keep leads from slipping through the cracks.",
    'Based in Michigan, working with clients across the country.',
  ],
  // Founder stills — used on the About page
  images: [
    { src: '/media/about.jpg', alt: 'Clear Veil founder explaining a campaign in front of the Clear Veil website' },
    { src: '/media/about-2.jpg', alt: 'Clear Veil founder recording a video in the studio' },
  ],
  // Architecture photos — used in the homepage About section
  homeImages: [
    { src: '/media/about-building-1.jpg', alt: 'Black and white corner of a concrete office tower against an overcast sky', w: 900, h: 1196 },
    { src: '/media/about-building-2.jpg', alt: 'Black and white glass office building rising into a grey sky', w: 900, h: 1413 },
  ],
  // Small glass fact cards on the homepage (drawn from the paragraphs above)
  highlights: [
    { value: 'Founder-led', label: 'You work directly with the founders. No layers of account managers.' },
    { value: '$5M+', label: 'Ad spend managed across e-commerce, services and nonprofits.' },
    { value: 'Michigan', label: 'Based here, working with clients across the country.' },
  ],
};

/** About page: certifications + platform partners. Logos: src/content/partners.ts */
// TODO(owner): confirm wording
export const partnersSection = {
  eyebrow: 'Certified partners',
  title: 'Certified and partnered with the platforms you run on.',
  sub: 'We hold certifications and partner access across Meta, Google, Shopify, Wix and more, so your campaigns, store and tracking are set up the way each platform intends.',
};

/** About page: "The difference" comparison (consolidated from the old site's 8 rows). */
export const comparison = {
  eyebrow: 'The difference',
  title: 'Simple, and transparent at every step.',
  them: 'Other agencies',
  us: 'Clear Veil',
  rows: [
    { topic: 'Contracts', them: 'Long-term contracts', us: 'Month-to-month' },
    { topic: 'Communication', them: 'Monthly meetings, slow replies', us: 'Weekly meetings and prompt team chats' },
    { topic: 'Reporting', them: 'Little to no reporting', us: 'Weekly, monthly and yearly reports, plus a client portal' },
    { topic: 'Billing', them: 'Service fees blended into ad spend', us: 'Service fees kept separate from your ad spend' },
    { topic: 'Focus', them: 'Focused on their profit', us: 'Focused on your business' },
  ],
};

/** About page: community / chamber memberships. Add badges to `badges` as you join more. */
// TODO(owner): confirm wording
export const community = {
  eyebrow: 'Community',
  title: 'Rooted in our community.',
  body: [
    "We're proud members of the South Haven Area Chamber of Commerce, and we're growing our involvement with chambers and business groups across Michigan.",
    "Run a chamber or local business group? We'd love to connect.",
  ],
  badges: [
    { src: '/badges/south-haven-chamber.png', alt: 'Proud Member, South Haven Area Chamber of Commerce', w: 854, h: 317 },
  ],
};

/** Verbatim from Google. Don't edit the wording. */
export const reviews = [
  {
    quote:
      'I have been working with Clear Veil for the last year, and I cannot explain enough how much this company has done for my business. It took my hobby and turned it into a real thing. I recommend them to ANYONE trying to expand their business!',
    name: 'Cameron Pagano',
    role: 'Founder & Director',
    company: 'Safeplace NY',
  },
  {
    quote:
      'Clear Veil has ran our entire marketing operation since we launched last year. They handle amazon, meta, and google for us without skipping a beat. We had an explosive first year thanks to their strategies.',
    name: 'Jerry',
    role: 'Founder',
    company: 'Girlyman',
  },
  {
    quote:
      'Amazing service, he built my website in a couple weeks from scratch and completely exceeded my expectations. If you want quick responses, attention to detail and overall quality of service go with clear veil!',
    name: 'Jared Wagner',
    role: 'CEO & Co Founder',
    company: 'Apex Aminos',
  },
  {
    quote:
      'I had the opportunity to work directly with one of the founders of the company. They helped me tremendously & worked incredibly quick. They were very personable, always responding, and willing to hop on a call whenever I had questions.',
    name: 'Savana Glisson',
    role: 'Founder',
    company: 'Church On The Move USA',
  },
  {
    quote:
      'Clear Veil Marketing has consistently provided our company with industry-leading marketing and advertising support. Their attention to detail, professional insights, and commitment to quality results has been pivotal in our brands recent development and success. We could not recommend their team more highly.',
    name: 'Chase',
    role: 'CEO',
    company: 'Revival Clothing',
  },
  {
    quote: 'Incredible team over at Clear Veil, passionate about growth and amazing client relations.',
    name: 'Zaid Sayage',
    role: 'Creative Director',
    company: 'Visionworld',
  },
];

export const contact = {
  eyebrow: 'Contact',
  title: "We treat every project like it's our own.",
  sub: "Tell us what you're working on. We reply within one business day.",
  budgets: [
    'Not running ads yet',
    'Under $2,000',
    '$2,000 to $10,000',
    '$10,000 to $50,000',
    '$50,000+',
  ],
  button: 'Send message',
  note: 'Usually answered the same day.',
};

export const footer = {
  tagline:
    'Paid ads, websites and creative for businesses that want to grow without the agency runaround.',
};
