// Content for Tillwick (fictional neighbourhood estate agents, Port Merrow Eastside).
// Every listing, price, sale, person and review on this page is invented.

export const brand = {
  name: "Tillwick",
  tagline: "Neighbourhood estate agents",
  district: "Eastside, Port Merrow",
  phone: "+1 (555) 010-0163",
  phoneHref: "tel:+15550100163",
  address: ["12 Tannery Yard", "Kilnworth, Port Merrow"],
  hours: [
    ["Mon–Fri", "9:00–18:30"],
    ["Saturday", "10:00–16:00 (viewings until 17:00)"],
    ["Sunday", "Viewings by appointment"],
  ],
};

export const proof = [
  { value: "41", label: "homes sold in 2026" },
  { value: "19", label: "days on the market, on average" },
  { value: "102%", label: "of asking price, on average" },
];

// code = the district code used on the map and the street plates
export const hoods = [
  {
    id: "kilnworth",
    code: "E1",
    name: "Kilnworth",
    median: 585000,
    pricePerSqft: 430,
    typical: "Two-up two-down brick rowhouses from the 1890s, most with a long back yard.",
    ferry: "14 min walk to Quillby pier",
    schools: "Kiln Street Primary is the one everyone asks about; the catchment stops at Potter's Lane.",
    best: "Glazier's Row: wide pavement, street trees and the Thursday market at the end.",
    watch: "Houses on Kiln Street's north side back onto the bus depot. Visit at 6am before you offer.",
    blurb: "The old pottery quarter. Small houses, big yards, and a high street that still has a butcher.",
  },
  {
    id: "saltmeadow",
    code: "E2",
    name: "Saltmeadow",
    median: 640000,
    pricePerSqft: 440,
    typical: "1930s semis with bay windows and side driveways; a few post-war bungalows near the marsh.",
    ferry: "18 min walk, or 6 min on the 41 bus",
    schools: "Two primaries within the park's edge; Saltmeadow Academy for secondary, ten minutes on foot.",
    best: "Marsh Lane: the gardens back straight onto Saltmeadow Park.",
    watch: "Low roads by Reedbed Close sit on the flood map. Ask us for the survey history first.",
    blurb: "Families move here for the park and stay for the gardens. The quietest streets in the Eastside.",
  },
  {
    id: "old-ropewalk",
    code: "E3",
    name: "Old Ropewalk",
    median: 455000,
    pricePerSqft: 480,
    typical: "Apartments in the converted rope stores, plus a handful of narrow worker's cottages.",
    ferry: "9 min walk along the Walk",
    schools: "No primary inside the neighbourhood; most families use Kiln Street or Hemp Lane Primary.",
    best: "Hemp Walk: car-free, 300 metres long, cafés at both ends.",
    watch: "Service charges vary from $90 to $410 a month between buildings. We'll show you the accounts.",
    blurb: "A quarter-mile-long street where rope was once laid out to twist. Now: flats, studios and good coffee.",
  },
  {
    id: "larchmere-heights",
    code: "E4",
    name: "Larchmere Heights",
    median: 790000,
    pricePerSqft: 425,
    typical: "Tall Victorian townhouses on the hill, four floors with front steps and river views.",
    ferry: "22 min walk downhill (a steep 28 back up)",
    schools: "Larchmere Primary is small and oversubscribed; Saltmeadow Academy is the nearest secondary.",
    best: "Larch Steps: the stepped street keeps cars out, and every top floor sees the river.",
    watch: "Parking. Residents' permits only, and the waiting list for a second permit is about a year.",
    blurb: "The hill. Bigger houses, better views and a lot of stairs. Prices here move first in spring.",
  },
  {
    id: "quillby-docks",
    code: "E5",
    name: "Quillby Docks",
    median: 520000,
    pricePerSqft: 505,
    typical: "Warehouse lofts and new-build flats around the old basin; very few houses.",
    ferry: "Ferry pier on the doorstep: 11 minutes to the city centre",
    schools: "The new Basin Primary opened in 2025; ask us how its first year went.",
    best: "Chandler Wharf: original crane rails, south light over the basin.",
    watch: "Some new-build blocks still have cladding paperwork open. We check the certificate before you offer.",
    blurb: "Lofts, the ferry and the river. The Eastside's fastest-changing corner and the best for commuters.",
  },
];

export const hoodName = Object.fromEntries(hoods.map((h) => [h.id, h.name]));

export const types = [
  { id: "rowhouse", label: "rowhouse", factor: 1.0 },
  { id: "semi", label: "semi-detached house", factor: 1.04 },
  { id: "townhouse", label: "townhouse", factor: 1.06 },
  { id: "apartment", label: "apartment", factor: 0.96 },
  { id: "loft", label: "loft", factor: 1.0 },
];

export const sqftByBeds = { 1: 760, 2: 980, 3: 1400, 4: 1900, 5: 2300 };

export const conditions = [
  { id: "work", label: "Needs work", note: "Kitchen, bathroom or roof due for replacing", factor: 0.9 },
  { id: "good", label: "Good order", note: "Lived in, looked after, nothing urgent", factor: 1.0 },
  { id: "done", label: "Recently renovated", note: "Major work done in the last five years", factor: 1.08 },
];

// Hero sentence options
export const bedOptions = [
  { value: "0", label: "home of any size" },
  { value: "1", label: "1-bed or bigger" },
  { value: "2", label: "2-bed or bigger" },
  { value: "3", label: "3-bed or bigger" },
  { value: "4", label: "4-bed or bigger" },
];
export const priceOptions = [
  { value: "0", label: "any price" },
  { value: "450000", label: "$450k" },
  { value: "550000", label: "$550k" },
  { value: "650000", label: "$650k" },
  { value: "800000", label: "$800k" },
  { value: "1000000", label: "$1m" },
];

// size = bento tile shape; tone = façade drawing colours; photo = optional stock photo (see PHOTOS.md)
export const listings = [
  {
    id: "glaziers-row",
    address: "14 Glazier's Row",
    hood: "kilnworth",
    type: "rowhouse",
    beds: 3,
    baths: 2,
    sqft: 1420,
    price: 612000,
    status: "For sale",
    size: "lg",
    tone: "green",
    photo: "listing-1",
    alt: "Brick rowhouse with a green front door on Glazier's Row",
    why: "South-facing yard, the original kiln-brick fireplace, and two minutes to the Thursday market.",
    agent: "Juno",
    facts: [
      ["Built", "1894"],
      ["Outside", "52 ft south-facing yard"],
      ["Heating", "Heat pump, fitted 2024"],
      ["Ferry", "14 min walk"],
    ],
  },
  {
    id: "marsh-lane",
    address: "7 Marsh Lane",
    hood: "saltmeadow",
    type: "semi",
    beds: 3,
    baths: 1,
    sqft: 1560,
    price: 648000,
    status: "For sale",
    size: "tall",
    tone: "blue",
    photo: "listing-2",
    alt: "Red brick 1930s house with a blue front door on Marsh Lane",
    why: "Bay window and a deep garden backing onto the park. Needs a kitchen, and it's priced like it.",
    agent: "Ravi",
    facts: [
      ["Built", "1934"],
      ["Outside", "Garden onto the park, side drive"],
      ["Heating", "Gas boiler, 2017"],
      ["Ferry", "6 min on the 41 bus"],
    ],
  },
  {
    id: "larch-steps",
    address: "22 Larch Steps",
    hood: "larchmere-heights",
    type: "townhouse",
    beds: 4,
    baths: 3,
    sqft: 2180,
    price: 865000,
    status: "For sale",
    size: "wide",
    tone: "stone",
    photo: "listing-3",
    alt: "Tall townhouse with stone front steps on Larch Steps",
    why: "The river from the top-floor bedroom, and a stepped street that keeps the cars away.",
    agent: "Juno",
    facts: [
      ["Built", "1881"],
      ["Outside", "Roof terrace, small front garden"],
      ["Heating", "Gas boiler, 2021"],
      ["Ferry", "22 min walk"],
    ],
  },
  {
    id: "hemp-walk",
    address: "Flat 3, 41 Hemp Walk",
    hood: "old-ropewalk",
    type: "apartment",
    beds: 2,
    baths: 1,
    sqft: 910,
    price: 438000,
    status: "For sale",
    size: "sm",
    tone: "plum",
    photo: "listing-4",
    alt: "Converted rope store with arched windows and balconies on Hemp Walk",
    why: "Arched windows in the old rope store, a balcony over the Walk, and a $120 service charge.",
    agent: "Ravi",
    facts: [
      ["Built", "1868, converted 2009"],
      ["Outside", "Balcony over Hemp Walk"],
      ["Service charge", "$120 / month"],
      ["Ferry", "9 min walk"],
    ],
  },
  {
    id: "chandler-wharf",
    address: "Unit 5B, Chandler Wharf",
    hood: "quillby-docks",
    type: "loft",
    beds: 1,
    baths: 1,
    sqft: 780,
    price: 395000,
    status: "Under offer",
    size: "sm",
    tone: "slate",
    photo: "listing-5",
    alt: "Warehouse façade with tall industrial windows at Chandler Wharf",
    why: "Five-metre ceilings, the original crane rail across the living room, four minutes to the ferry.",
    agent: "Ravi",
    facts: [
      ["Built", "1902, converted 2014"],
      ["Outside", "Shared basin-side deck"],
      ["Service charge", "$260 / month"],
      ["Ferry", "4 min walk"],
    ],
  },
  {
    id: "tallow-street",
    address: "9 Tallow Street",
    hood: "kilnworth",
    type: "rowhouse",
    beds: 2,
    baths: 1,
    sqft: 1050,
    price: 529000,
    status: "For sale",
    size: "wide",
    tone: "brick",
    photo: null,
    alt: "Line drawing of a small brick rowhouse on Tallow Street",
    why: "The cheapest way into Kilnworth this year. The loft is already boarded, so the third bedroom is half done.",
    agent: "Juno",
    facts: [
      ["Built", "1897"],
      ["Outside", "30 ft yard with a shed"],
      ["Heating", "Gas boiler, 2015"],
      ["Ferry", "12 min walk"],
    ],
  },
];

// Recently sold (fictional). asked/sold in dollars, days = days on market.
export const sold = [
  { address: "31 Glazier's Row", hood: "kilnworth", type: "rowhouse", beds: 3, asked: 595000, sold: 611000, days: 12, month: "Nov 2026" },
  { address: "18 Reedbed Close", hood: "saltmeadow", type: "semi", beds: 3, asked: 625000, sold: 642000, days: 9, month: "Nov 2026" },
  { address: "Flat 7, 12 Twine Yard", hood: "old-ropewalk", type: "apartment", beds: 2, asked: 449000, sold: 449000, days: 27, month: "Oct 2026" },
  { address: "4 Upper Larch Steps", hood: "larchmere-heights", type: "townhouse", beds: 4, asked: 880000, sold: 902000, days: 15, month: "Oct 2026" },
  { address: "Unit 2A, Chandler Wharf", hood: "quillby-docks", type: "loft", beds: 1, asked: 410000, sold: 398000, days: 41, month: "Oct 2026" },
  { address: "63 Kiln Street", hood: "kilnworth", type: "rowhouse", beds: 2, asked: 535000, sold: 556000, days: 8, month: "Sep 2026" },
  { address: "2 Heron Way", hood: "saltmeadow", type: "semi", beds: 4, asked: 715000, sold: 730000, days: 21, month: "Sep 2026" },
  { address: "Flat 1, 5 Hemp Walk", hood: "old-ropewalk", type: "apartment", beds: 1, asked: 365000, sold: 371000, days: 18, month: "Aug 2026" },
  { address: "11 Bellvue Terrace", hood: "larchmere-heights", type: "townhouse", beds: 3, asked: 760000, sold: 781000, days: 14, month: "Aug 2026" },
  { address: "Unit 9C, Sailmaker's Quay", hood: "quillby-docks", type: "loft", beds: 2, asked: 525000, sold: 534000, days: 25, month: "Jul 2026" },
];

export const steps = {
  buy: [
    ["Tell Ravi the street, not just the price", "A 20-minute call about how you live: the commute, the school run, the stairs you can live with."],
    ["See homes before the portals do", "About a third of our sales go to people on our list before the listing goes live."],
    ["Offer with the numbers", "We pull the last sales on that street so your offer is argued, not guessed."],
    ["Get to the keys", "We chase the lawyers, the survey and the chain every week, and tell you what we heard."],
  ],
  sell: [
    ["A written value range in 48 hours", "Juno walks the house, then sends a range with the three sales it's based on."],
    ["A plan for the first 14 days", "Photos, floor plan, the price, and which buyers on our list get the first call."],
    ["Viewings we run ourselves", "Evenings and Saturdays, always one of us, never a key left with a stranger."],
    ["One fee, only on completion", "1.75% + tax of the sale price. No sale, no fee. No photography charge, no lock-in."],
  ],
};

export const team = [
  {
    initials: "JT",
    name: "Juno Tillwick",
    role: "Lead agent · selling",
    phone: "+1 (555) 010-0164",
    phoneHref: "tel:+15550100164",
    bio: "Grew up above a shop on Kiln Street and has sold houses on most of its neighbours. Juno writes every valuation herself and will tell you if now is the wrong time to sell.",
  },
  {
    initials: "RM",
    name: "Ravi Mendel",
    role: "Buyers' agent",
    phone: "+1 (555) 010-0165",
    phoneHref: "tel:+15550100165",
    bio: "Moved to Quillby Docks for the ferry in 2016 and has walked every street in the Eastside since. Ravi keeps the buyer list, and knows which flats have the noisy pipes.",
  },
];

export const reviews = [
  { text: "Juno told us our first asking price was too high and why. We dropped it $15k and had three offers in a week.", who: "Marta S.", tag: "Sold in Kilnworth" },
  { text: "Ravi sent us a house on Marsh Lane the night before it went online. We viewed at 8am.", who: "Dev and Ana P.", tag: "Bought in Saltmeadow" },
  { text: "Straight answers on the service charge, which nobody else would give us.", who: "Tom R.", tag: "Bought in Old Ropewalk" },
  { text: "Every Friday a short email: what the buyer's lawyer said, what's next. Never had to chase once.", who: "Helen W.", tag: "Sold in Larchmere Heights" },
  { text: "We were selling and buying at the same time. They lined the two up to the day.", who: "Ola and Ben K.", tag: "Sold & bought in Saltmeadow" },
  { text: "Honest about the bus depot. We bought two streets over and are glad.", who: "Priya N.", tag: "Bought in Kilnworth" },
  { text: "Ran every viewing themselves, including two on a Sunday because we asked.", who: "Graham L.", tag: "Sold in Quillby Docks" },
  { text: "The value range was within $6k of what we got.", who: "Sofia D.", tag: "Sold in Kilnworth" },
  { text: "First-time buyers, no idea what we were doing. Ravi explained the survey line by line.", who: "Jamie and Lee C.", tag: "Bought in Quillby Docks" },
  { text: "They knew which flats in the building had had the roof leak. That alone was worth it.", who: "Nadia F.", tag: "Bought in Old Ropewalk" },
  { text: "No glossy brochure, just good photos and the right price. Sold in nine days.", who: "Arthur M.", tag: "Sold in Saltmeadow" },
  { text: "Juno walked the stairs with my mum to check she could manage them. Kind and practical.", who: "Rosa T.", tag: "Bought in Larchmere Heights" },
];

export const faq = [
  ["What do you charge?", "Sellers pay 1.75% + tax of the final sale price, only when the sale completes. Photos, floor plan and viewings are included. Buyers pay us nothing."],
  ["How long does a sale take here?", "Our 2026 homes went under offer in 19 days on average. From offer to keys is usually 8–12 weeks, depending on the chain and the lawyers."],
  ["Do you do viewings at weekends?", "Yes. Saturdays until 5pm and Sunday by appointment. One of us is always there; we never hand out keys."],
  ["Can I sell while I'm still looking to buy?", "Most of our sellers do. We can agree a sale subject to you finding a home, and Ravi starts the search the same week."],
  ["Do you only work in the Eastside?", "Only the five neighbourhoods on the map. If you're elsewhere in Port Merrow we'll happily recommend someone who knows your streets the way we know ours."],
];
