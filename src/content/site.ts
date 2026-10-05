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
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  status: 'Now booking new clients',
  headline: ['Marketing', 'built for you.'],
  lede:
    'We run your ads, build your website and make the creative that ties them together. You work directly with the people doing the work, and you always know what your money is doing.',
  primary: { label: 'Book a 15-minute call', href: site.bookingUrl },
  secondary: { label: 'Send us a message', href: '/#contact' },
  // The 9:16 reel. Clip 1 loads with the page; 2 and 3 load only when needed.
  clips: [
    { src: '/media/clip-1.mp4', poster: '/media/clip-1.jpg' },
    { src: '/media/clip-2.mp4', poster: '/media/clip-2.jpg' },
    { src: '/media/clip-3.mp4', poster: '/media/clip-3.jpg' },
  ],
};

/**
 * Client logos for the marquee. Drop a file into /public/logos/ and set `logo`.
 * White or light logos on transparent backgrounds look best (they're shown
 * greyed and brighten on hover). Until a file exists, the name is shown.
 */
export const clients: { name: string; logo?: string }[] = [
  { name: 'Apex Aminos' },
  { name: 'Revival Clothing' },
  { name: 'Safeplace NY' },
  { name: 'Visionworld' },
  { name: 'Church On The Move USA' },
  { name: 'Girlyman' },
];

export const stats = [
  { value: '$5M+', label: 'Ad spend managed' },
  { value: '4.2x', label: 'Average return on ad spend' },
  { value: '25+', label: 'Client reviews' }, // TODO(owner): confirm label
];

export const services = {
  eyebrow: 'Services',
  title: 'What we do',
  intro:
    'Most clients come to us for ads or a website. Most stay because we handle everything around them too.',
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

/** Work pills. TODO(owner): add real results (e.g. "3.1x ROAS in 90 days"). */
export const work = [
  {
    client: 'Girlyman',
    what: 'Entire marketing operation from launch',
    services: ['Amazon', 'Meta', 'Google'],
    result: '',
  },
  {
    client: 'Apex Aminos',
    what: 'New website built from scratch in two weeks',
    services: ['Design', 'Build'],
    result: '',
  },
  {
    client: 'Safeplace NY',
    what: 'A side project turned into a real business over a year',
    services: ['Paid ads', 'Creative'],
    result: '',
  },
  {
    client: 'Revival Clothing',
    what: 'Ongoing marketing and advertising support',
    services: ['Paid ads', 'Strategy'],
    result: '',
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
  images: [
    { src: '/media/about.jpg', alt: 'Clear Veil founder explaining a campaign in front of the Clear Veil website' },
    { src: '/media/about-2.jpg', alt: 'Clear Veil founder recording a video in the studio' },
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
  sub: 'Tell us what you\'re working on. We reply within one business day, or grab 15 minutes on the calendar and skip the back and forth.',
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
