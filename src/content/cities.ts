/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CITY PAGES — local SEO versions of the homepage, one per city.
 *    /marketing-agency/<slug>   e.g. /marketing-agency/kalamazoo-mi
 *
 *  Found through Google (they're in the sitemap), never linked from the main
 *  site. Each page links to a few nearby city pages so Google can crawl them.
 *  Everything else on the page is the normal homepage.
 *
 *  The angle: we're here in each city, but we don't only market locally.
 *  We take businesses as far as they want to go: local, nationwide or global.
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
        'Kalamazoo is a college town and a business town at once: Western Michigan University and Kalamazoo College on one side, established shops, restaurants, healthcare and service companies on the other, and plenty of brands here selling far beyond Michigan.',
        'Some of our clients sell to the people down the street; others ship across the country. We run Google and Meta ads for both, build websites that turn visits into calls, bookings and sales, and make the creative that gets you noticed, wherever your customers are.',
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
      title: 'Helping Portage businesses grow, near and far.',
      body: [
        'Portage sits right next to Kalamazoo, with busy shopping along Westnedge Avenue, growing neighborhoods and a business community that ranges from local service companies to brands selling well beyond Michigan.',
        'Whether you want to win the “near me” searches in Portage or reach customers in every state, we set up the Google and Meta ads, build the website, and track every lead and sale back to where it came from.',
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
      title: 'Marketing for Battle Creek businesses going further.',
      body: [
        'Battle Creek, known as Cereal City, has a long history of local companies that became household names across the country, and a close-knit market where word of mouth still matters.',
        'We help today’s Battle Creek businesses grow on both fronts: tightly targeted local campaigns when your customers are nearby, nationwide ads and online sales when they’re not, and websites that turn clicks into calls and orders either way.',
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
        'Grand Rapids is Michigan’s second-largest city and one of its most competitive markets, with healthcare along the Medical Mile, a busy downtown, a well-known craft beer scene and thousands of businesses advertising at once, many of them to customers nationwide.',
        'Whether you’re competing for local searches or selling across the country, wasted ad spend adds up fast. We build tightly targeted Google and Meta campaigns, websites that convert, and reporting that shows what each dollar brought in, and you work directly with the people doing it.',
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
      title: 'Marketing for Wyoming businesses, from 28th Street to nationwide.',
      body: [
        'Wyoming sits right next to Grand Rapids, with busy commercial corridors along 28th Street and Division Avenue and businesses of every size, from neighborhood shops to companies selling well beyond Michigan.',
        'We match the campaign to the goal: ads focused on the neighborhoods you serve when you want more local customers, and nationwide Google and Meta campaigns when you’re ready to grow further, with a website that turns that attention into sales.',
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
      title: 'Getting Kentwood businesses found, locally and nationwide.',
      body: [
        'Kentwood is one of the Grand Rapids area’s busiest suburbs, with shopping and service businesses along 28th Street and 44th Street, plus companies whose customers are spread across the country.',
        'We help Kentwood businesses win the searches that matter, whether that’s “near me” or nationwide, with Google ads, Meta ads that keep you top of mind, and fast, simple websites, all tracked so you can see what’s working.',
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
      title: 'Marketing for Hudsonville businesses ready to grow.',
      body: [
        'Hudsonville sits between Grand Rapids and the lakeshore and keeps growing, with new families moving in and local businesses whose plans are bigger than their zip code.',
        'We help you reach both: local ads that introduce you to new neighbors, and nationwide campaigns for products and services that can sell anywhere, all backed by a website that makes calling, booking or buying simple.',
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
      title: 'Marketing for Holland businesses, from Tulip Time to the whole country.',
      body: [
        'Holland’s mix of locals, Hope College students and lakeshore visitors means local customers change with the calendar, from Tulip Time in spring to busy summers on Lake Michigan, while many Holland businesses sell to customers far beyond town.',
        'We plan campaigns around both: more budget when visitors are in town, steady local ads the rest of the year, and nationwide campaigns for businesses that sell online. Every call, booking and sale is tracked, so you know what’s working.',
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
        'Zeeland is a small city with a global footprint, home to companies like MillerKnoll and Gentex, plus a downtown full of independent shops and the service businesses that keep the area running.',
        'Plenty of great businesses still have a website that undersells them, whether they serve the lakeshore or ship worldwide. We build sites that match the quality of your work, then run Google and Meta ads that bring the right people to them, from down the street or across the world.',
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
        'We’re proud members of the South Haven Area Chamber of Commerce. We plan ads around the summer rush, keep you visible to year-round locals and, for businesses that sell online, reach customers nationwide so the off-season isn’t so quiet.',
      ],
    },
    faq: [
      { q: 'Can you help a seasonal business?', a: 'Yes. We start ads before your busy season so you’re already showing up when visitors start planning, then scale back when it quiets down. If you sell online, nationwide campaigns can keep sales coming in the off-season.' },
    ],
  },
  {
    slug: 'st-joseph-mi',
    name: 'St. Joseph',
    county: 'Berrien County',
    nearby: ['Benton Harbor', 'Stevensville', 'Lincoln Township', 'Bridgman', 'Coloma'],
    neighbors: ['benton-harbor-mi', 'south-haven-mi', 'portage-mi', 'kalamazoo-mi'],
    intro: {
      title: 'Marketing for St. Joseph businesses, on the lakeshore and beyond.',
      body: [
        'St. Joseph’s downtown, Silver Beach and lakefront draw visitors all summer, while year-round residents across Berrien County keep local businesses busy the rest of the year.',
        'We help you reach every one of them: ads that find visitors while they’re planning a trip, local campaigns for the community, and nationwide campaigns for businesses that sell beyond the lakeshore, all leading to a website that turns interest into sales.',
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
      title: 'Helping Benton Harbor businesses grow, at home and worldwide.',
      body: [
        'Benton Harbor, St. Joseph’s twin city, is home to Whirlpool’s global headquarters, proof that a business based here can reach the whole world.',
        'Whether you serve customers on both sides of the river or across the country, we set up the Google and Meta ads, build a website that makes it easy to get in touch or buy, and show you exactly what your marketing brings in.',
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
        'We help Grand Haven businesses make the most of every season: campaigns that scale up when visitors are in town, steady ads that keep regulars coming back, and nationwide reach for businesses that sell online, with a website built to turn every visit into a sale.',
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
      title: 'Marketing that helps Muskegon businesses grow beyond the lakeshore.',
      body: [
        'Muskegon is the lakeshore’s biggest city, with beaches like Pere Marquette drawing summer crowds and a large year-round community that relies on local businesses.',
        'We help Muskegon businesses get found locally and grow well past it, with Google and Meta ads aimed at the customers you want wherever they are, and websites that make the next step obvious, with tracking that shows what every campaign brings in.',
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
      title: 'Marketing for Norton Shores businesses with room to grow.',
      body: [
        'Norton Shores sits between Muskegon and Grand Haven, close to two lakeshore markets, and plenty of businesses here sell to customers much further afield.',
        'We run Google and Meta ads for whatever reach you need, from the towns along the lakeshore to customers across the country, build websites that turn visits into calls and sales, and keep reporting simple so you always know what’s working.',
      ],
    },
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

/** The wording shared by every city page, filled in with the city's name. */
export const cityCopy = (c: City) => ({
  meta: {
    title: `Marketing Agency in ${c.name}, MI | Clear Veil Marketing`,
    description: `Clear Veil helps ${c.name} businesses grow locally, nationwide and beyond with Google and Meta ads, websites and creative. $5M+ in ad spend managed.`,
  },
  hero: {
    status: `Now booking ${c.name} businesses`,
    headline: ['Marketing built', `for ${c.name}.`],
    lede: `We run ads, build websites and make the creative for ${c.name} businesses, whether your customers are down the street, across the country or around the world.`,
  },
  story: {
    eyebrow: c.name,
    title: c.intro.title,
    body: c.intro.body,
    facts: [
      { value: 'Local to global', label: `Campaigns that reach customers in ${c.name}, across the country or worldwide.` },
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
        a: `Yes. We’re a West Michigan team working with businesses in ${c.name} and across ${c.county}, including ${listOf(c.nearby.slice(0, 4))}, as well as clients across the country.`,
      },
      {
        q: `Can you help my ${c.name} business reach customers outside Michigan?`,
        a: 'Yes. We run everything from local campaigns for a single service area to nationwide and international ads for e-commerce brands. Being nearby just means you get a team that’s easy to reach.',
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
