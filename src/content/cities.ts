/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CITY PAGES — local SEO versions of the homepage, one per city.
 *    /marketing-agency/<slug>   e.g. /marketing-agency/kalamazoo-mi
 *
 *  Found through Google (they're in the sitemap), never linked from the main
 *  site. Each page links to a few nearby city pages so Google can crawl them.
 *  Everything else on the page is the normal homepage.
 *
 *  Keep each city's intro genuinely different: Google ignores (or penalises)
 *  pages that only swap the city name. Facts here are general, well-known
 *  ones about each place; no client claims.
 *  TODO(owner): read through each city's intro before relying on it.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type City = {
  slug: string;
  name: string;            // as people search it
  county: string;
  nearby: string[];        // towns and townships we mention serving
  neighbors: string[];     // slugs of nearby city pages to link to
  intro: { title: string; body: string[] };
  faq?: { q: string; a: string }[]; // extra city-specific questions
};

export const cities: City[] = [
  {
    slug: 'kalamazoo-mi',
    name: 'Kalamazoo',
    county: 'Kalamazoo County',
    nearby: ['Portage', 'Oshtemo', 'Comstock', 'Parchment', 'Richland', 'Texas Township'],
    neighbors: ['portage-mi', 'battle-creek-mi', 'south-haven-mi', 'grand-rapids-mi'],
    intro: {
      title: 'Marketing for Kalamazoo businesses that want more customers.',
      body: [
        'Kalamazoo is a college town and a business town at once: Western Michigan University and Kalamazoo College on one side, established local shops, restaurants, healthcare and service companies on the other. Reaching both audiences takes more than one channel.',
        'We run Google ads for the people searching for what you sell, Meta ads to stay in front of everyone else in town, and websites that turn those visits into calls, bookings and sales.',
      ],
    },
  },
  {
    slug: 'portage-mi',
    name: 'Portage',
    county: 'Kalamazoo County',
    nearby: ['Kalamazoo', 'Texas Township', 'Pavilion Township', 'Schoolcraft', 'Vicksburg', 'Oshtemo'],
    neighbors: ['kalamazoo-mi', 'battle-creek-mi', 'south-haven-mi', 'st-joseph-mi'],
    intro: {
      title: 'Helping Portage businesses show up first.',
      body: [
        'Portage sits right next to Kalamazoo, with busy shopping along Westnedge Avenue, growing neighborhoods and a long list of local service businesses all competing for the same searches.',
        'When someone nearby searches for what you do, you want to be the first name they see. We set up Google and Meta ads around your actual service area, build websites that make it easy to call or book, and track every lead back to where it came from.',
      ],
    },
  },
  {
    slug: 'battle-creek-mi',
    name: 'Battle Creek',
    county: 'Calhoun County',
    nearby: ['Springfield', 'Pennfield Township', 'Emmett Township', 'Bedford', 'Marshall', 'Augusta'],
    neighbors: ['kalamazoo-mi', 'portage-mi', 'grand-rapids-mi', 'south-haven-mi'],
    intro: {
      title: 'Marketing built for Battle Creek, not a big-city budget.',
      body: [
        'Battle Creek, known as Cereal City, is a close-knit market where word of mouth still matters, but more and more customers find local businesses online first.',
        'We keep campaigns focused on Battle Creek and the towns around it, so your budget goes to people who can actually become customers, not to clicks from across the state. Then we make sure your website turns those clicks into calls and sales.',
      ],
    },
  },
  {
    slug: 'grand-rapids-mi',
    name: 'Grand Rapids',
    county: 'Kent County',
    nearby: ['Wyoming', 'Kentwood', 'Walker', 'Grandville', 'East Grand Rapids', 'Ada', 'Rockford'],
    neighbors: ['wyoming-mi', 'kentwood-mi', 'hudsonville-mi', 'holland-mi', 'grand-haven-mi'],
    intro: {
      title: 'A Grand Rapids marketing agency without the agency runaround.',
      body: [
        'Grand Rapids is Michigan’s second-largest city and one of its most competitive markets, with healthcare along the Medical Mile, a busy downtown, a well-known craft beer scene and thousands of service businesses all advertising at once.',
        'In a market this crowded, wasted ad spend adds up fast. We build tightly targeted Google and Meta campaigns, websites that convert, and reporting that shows exactly what each dollar brought in, and you work directly with the people doing it.',
      ],
    },
  },
  {
    slug: 'wyoming-mi',
    name: 'Wyoming',
    county: 'Kent County',
    nearby: ['Grand Rapids', 'Grandville', 'Kentwood', 'Byron Center', 'Jenison'],
    neighbors: ['grand-rapids-mi', 'kentwood-mi', 'hudsonville-mi', 'holland-mi'],
    intro: {
      title: 'Marketing for Wyoming businesses in a big-city market.',
      body: [
        'Wyoming sits right next to Grand Rapids, with busy commercial corridors along 28th Street and Division Avenue and a lot of local businesses competing with the whole metro for attention.',
        'You don’t need to pay to reach all of West Michigan. We target the neighborhoods and towns you actually serve, so your ads reach people who can walk in, call or book, and your website makes that the easy next step.',
      ],
    },
  },
  {
    slug: 'kentwood-mi',
    name: 'Kentwood',
    county: 'Kent County',
    nearby: ['Grand Rapids', 'Wyoming', 'Gaines Township', 'Cascade Township', 'Caledonia'],
    neighbors: ['grand-rapids-mi', 'wyoming-mi', 'hudsonville-mi', 'battle-creek-mi'],
    intro: {
      title: 'Getting Kentwood businesses found by local customers.',
      body: [
        'Kentwood is one of the Grand Rapids area’s busiest suburbs, with shopping and service businesses along 28th Street and 44th Street and a steady stream of people searching for something nearby.',
        'We help Kentwood businesses win those searches with Google ads, stay top of mind with Meta ads, and turn visitors into customers with fast, simple websites, all tracked so you can see what’s working.',
      ],
    },
  },
  {
    slug: 'hudsonville-mi',
    name: 'Hudsonville',
    county: 'Ottawa County',
    nearby: ['Jenison', 'Georgetown Township', 'Allendale', 'Jamestown', 'Zeeland'],
    neighbors: ['zeeland-mi', 'grand-rapids-mi', 'holland-mi', 'wyoming-mi'],
    intro: {
      title: 'Marketing for Hudsonville’s growing local businesses.',
      body: [
        'Hudsonville sits between Grand Rapids and the lakeshore and keeps growing, which means new families and new customers looking for local businesses they can trust.',
        'We make sure they find you: Google ads for the people already searching, Meta ads to introduce you to everyone who just moved in, and a website that makes calling, booking or buying simple.',
      ],
    },
  },
  {
    slug: 'holland-mi',
    name: 'Holland',
    county: 'Ottawa and Allegan counties',
    nearby: ['Zeeland', 'Holland Township', 'Park Township', 'Saugatuck', 'Douglas', 'Hamilton'],
    neighbors: ['zeeland-mi', 'grand-haven-mi', 'hudsonville-mi', 'south-haven-mi', 'grand-rapids-mi'],
    intro: {
      title: 'Marketing for Holland businesses, from Tulip Time to the off-season.',
      body: [
        'Holland’s mix of locals, Hope College students and lakeshore visitors means your customers change with the calendar, from Tulip Time in spring to busy summers on Lake Michigan.',
        'We plan campaigns around those peaks: more budget when visitors are in town, steady local ads the rest of the year, and a website that works for both. Every call, booking and sale is tracked, so you know what each season brought in.',
      ],
    },
    faq: [
      { q: 'Can you plan around Tulip Time and the summer season?', a: 'Yes. We ramp budgets up ahead of your busy weeks and ease them off afterwards, so you’re not paying peak prices all year.' },
    ],
  },
  {
    slug: 'zeeland-mi',
    name: 'Zeeland',
    county: 'Ottawa County',
    nearby: ['Holland', 'Hudsonville', 'Borculo', 'Drenthe', 'Vriesland', 'Jamestown'],
    neighbors: ['holland-mi', 'hudsonville-mi', 'grand-haven-mi', 'grand-rapids-mi'],
    intro: {
      title: 'Helping Zeeland businesses look as established online as they are.',
      body: [
        'Zeeland is a small city with a big business footprint, home to companies like MillerKnoll and Gentex, plus a downtown full of independent shops and the service businesses that keep the area running.',
        'Plenty of great local businesses still have a website that undersells them. We build sites that match the quality of your work, then run Google and Meta ads that bring the right people to them.',
      ],
    },
  },
  {
    slug: 'south-haven-mi',
    name: 'South Haven',
    county: 'Van Buren County',
    nearby: ['Covert', 'Bangor', 'Casco Township', 'Grand Junction', 'Glenn'],
    neighbors: ['st-joseph-mi', 'holland-mi', 'kalamazoo-mi', 'benton-harbor-mi'],
    intro: {
      title: 'Marketing for South Haven businesses, in season and out.',
      body: [
        'South Haven runs on two calendars: busy summers full of beach-goers and Blueberry Festival crowds, and quieter months when local customers carry the business. Your marketing should follow both.',
        'We’re proud members of the South Haven Area Chamber of Commerce. We plan ads to ramp up before the summer rush and keep you visible to year-round locals, with a website that makes it easy to call, book or stop in.',
      ],
    },
    faq: [
      { q: 'Can you help a seasonal business?', a: 'Yes. We start ads before your busy season so you’re already showing up when visitors start planning, then scale back when it quiets down.' },
    ],
  },
  {
    slug: 'st-joseph-mi',
    name: 'St. Joseph',
    county: 'Berrien County',
    nearby: ['Benton Harbor', 'Stevensville', 'Lincoln Township', 'Bridgman', 'Coloma'],
    neighbors: ['benton-harbor-mi', 'south-haven-mi', 'portage-mi', 'kalamazoo-mi'],
    intro: {
      title: 'Marketing for St. Joseph businesses on the lakeshore.',
      body: [
        'St. Joseph’s downtown, Silver Beach and lakefront draw visitors all summer, while year-round residents across Berrien County keep local businesses busy the rest of the year.',
        'We help you reach both: ads that find visitors while they’re planning a trip, local campaigns that keep you in front of the community, and a website that turns interest into calls, bookings and sales.',
      ],
    },
    faq: [
      { q: 'Can you reach visitors before they arrive?', a: 'Yes. Ads can target people searching for or planning a trip to St. Joseph, as well as locals, with separate budgets for each.' },
    ],
  },
  {
    slug: 'benton-harbor-mi',
    name: 'Benton Harbor',
    county: 'Berrien County',
    nearby: ['St. Joseph', 'Benton Township', 'Coloma', 'Watervliet', 'Sodus'],
    neighbors: ['st-joseph-mi', 'south-haven-mi', 'kalamazoo-mi', 'portage-mi'],
    intro: {
      title: 'Helping Benton Harbor businesses grow online.',
      body: [
        'Benton Harbor, St. Joseph’s twin city and home to Whirlpool’s headquarters, has a growing mix of local businesses that need to be found by customers on both sides of the river.',
        'We set up Google and Meta ads around the area you actually serve, build websites that make it easy to get in touch, and show you exactly how many calls and customers your marketing brings in.',
      ],
    },
  },
  {
    slug: 'grand-haven-mi',
    name: 'Grand Haven',
    county: 'Ottawa County',
    nearby: ['Spring Lake', 'Ferrysburg', 'Grand Haven Township', 'Robinson Township', 'Norton Shores'],
    neighbors: ['norton-shores-mi', 'muskegon-mi', 'holland-mi', 'zeeland-mi'],
    intro: {
      title: 'Marketing for Grand Haven businesses, all year round.',
      body: [
        'Coast Guard City, USA comes alive in summer with the boardwalk, the beaches and the Coast Guard Festival, then settles back into a tight-knit local market for the rest of the year.',
        'We help Grand Haven businesses make the most of both: campaigns that scale up when visitors are in town, steady local ads to keep regulars coming back, and a website built to turn every visit into a call, booking or sale.',
      ],
    },
    faq: [
      { q: 'Can you plan around the summer and the Coast Guard Festival?', a: 'Yes. We build budgets around your busiest weeks so you’re visible when it counts, without overspending in the quiet months.' },
    ],
  },
  {
    slug: 'muskegon-mi',
    name: 'Muskegon',
    county: 'Muskegon County',
    nearby: ['Norton Shores', 'North Muskegon', 'Muskegon Heights', 'Roosevelt Park', 'Whitehall'],
    neighbors: ['norton-shores-mi', 'grand-haven-mi', 'holland-mi', 'grand-rapids-mi'],
    intro: {
      title: 'Marketing that helps Muskegon businesses grow.',
      body: [
        'Muskegon is the lakeshore’s biggest city, with beaches like Pere Marquette drawing summer crowds and a large year-round community that relies on local businesses.',
        'We help Muskegon businesses get found with Google ads, stay visible with Meta ads, and turn visitors into customers with websites that make the next step obvious, with tracking that shows what every campaign brings in.',
      ],
    },
  },
  {
    slug: 'norton-shores-mi',
    name: 'Norton Shores',
    county: 'Muskegon County',
    nearby: ['Muskegon', 'Spring Lake', 'Fruitport', 'Roosevelt Park', 'Grand Haven'],
    neighbors: ['muskegon-mi', 'grand-haven-mi', 'holland-mi', 'zeeland-mi'],
    intro: {
      title: 'Getting Norton Shores businesses in front of local customers.',
      body: [
        'Norton Shores sits between Muskegon and Grand Haven, so local businesses here can reach customers from both, if those customers can find them.',
        'We run Google and Meta ads targeted to the towns you serve along the lakeshore, build websites that turn visits into calls and bookings, and keep reporting simple so you always know where your customers came from.',
      ],
    },
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

/** The wording shared by every city page, filled in with the city's name. */
export const cityCopy = (c: City) => ({
  meta: {
    title: `Marketing Agency in ${c.name}, MI | Clear Veil Marketing`,
    description: `Clear Veil Marketing helps ${c.name} businesses get more customers with Google and Meta ads, websites and creative. Over $5M in ad spend managed.`,
  },
  hero: {
    status: `Now booking ${c.name} businesses`,
    headline: ['Marketing built', `for ${c.name}.`],
    lede: `We run ads, build websites and make the creative for ${c.name} businesses. You work directly with the people doing it.`,
  },
  story: {
    eyebrow: c.name,
    title: c.intro.title,
    body: c.intro.body,
    facts: [
      { value: 'Local focus', label: `Campaigns aimed at ${c.name} and the towns around it, not the whole state.` },
      { value: 'One team', label: 'Ads, website and creative handled together, so nothing falls through the cracks.' },
      { value: 'Direct access', label: 'You work with the founders, not a rotating account manager.' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: `Working with us in ${c.name}.`,
    items: [
      {
        q: `Do you work with businesses in ${c.name}?`,
        a: `Yes. We’re a West Michigan team working with businesses in ${c.name} and across ${c.county}, including ${listOf(c.nearby.slice(0, 4))}.`,
      },
      {
        q: `What can you help a ${c.name} business with?`,
        a: 'Google and Meta ads, websites, and the creative and social content that keeps you visible. Most clients come for ads or a website, then we handle the rest as you grow.',
      },
      ...(c.faq ?? []),
      {
        q: 'How do we get started?',
        a: 'Book a 15-minute call or send us a message. Tell us about your business and goals, and we’ll tell you where we’d start.',
      },
    ],
  },
  source: `City page – ${c.name}`,
});

const listOf = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);
