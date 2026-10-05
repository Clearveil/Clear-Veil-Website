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
  { label: 'Contact', href: '/#contact' },
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
  { name: 'Älert', logo: '/logos/alert.webp', w: 407, h: 160 },
  { name: 'McKenna Bros. Paving Co.', logo: '/logos/mckenna-bros-paving.webp', w: 451, h: 160 },
  { name: 'Sunnyday Sourdough Co.', logo: '/logos/sunnyday-sourdough.webp', w: 188, h: 160 },
  { name: 'Kandy', logo: '/logos/kandy.webp', w: 520, h: 140 },
  { name: 'The Green Door', logo: '/logos/the-green-door.webp', w: 160, h: 160 },
  { name: 'Moreno & Sons Excavation', logo: '/logos/moreno-and-sons.webp', w: 268, h: 160 },
  { name: "Pezzuto's Excavating", logo: '/logos/pezzutos-excavating.webp', w: 337, h: 160 },
  { name: 'Dylan Burrows Concrete', logo: '/logos/dylan-burrows-concrete.webp', w: 236, h: 160 },
  { name: 'Triple JJJ Bar & Grill', logo: '/logos/triple-jjj.webp', w: 273, h: 160 },
  // TODO(owner): real names for these four marks (used as alt text)
  { name: 'Client', logo: '/logos/client-06.webp', w: 279, h: 160 },
  { name: 'Client', logo: '/logos/client-10.webp', w: 162, h: 160 },
  { name: 'Client', logo: '/logos/client-11.webp', w: 265, h: 160 },
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
