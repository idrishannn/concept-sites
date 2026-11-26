// Sumakara (fictional Anatolian charcoal grill & meze house): all copy and data for the page.

export const brand = {
  name: "Sumakara",
  line: "Anatolian charcoal grill & meze",
  address: ["47 Coalyard Lane", "Halvern Square"],
  phone: "+1 (555) 010-0187",
  phoneHref: "tel:+15550100187",
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Kahvaltı", href: "#kahvalti" },
  { label: "Mangal nights", href: "#mangal-nights" },
  { label: "Visit", href: "#visit" },
];

// Opening hours. Day index follows JS Date.getDay(): 0 = Sunday.
// Each service is [open, close] in "HH:MM"; kitchen closes 30 min before close.
export const hours = [
  { day: 1, label: "Monday", services: [], note: "Closed — the mangal rests" },
  { day: 2, label: "Tuesday", services: [["17:00", "22:30"]] },
  { day: 3, label: "Wednesday", services: [["17:00", "22:30"]] },
  { day: 4, label: "Thursday", services: [["17:00", "22:30"]] },
  { day: 5, label: "Friday", services: [["17:00", "23:30"]] },
  { day: 6, label: "Saturday", services: [["10:00", "15:00", "Kahvaltı"], ["17:00", "23:30"]] },
  { day: 0, label: "Sunday", services: [["10:00", "15:00", "Kahvaltı"]], note: "Kahvaltı only" },
];

export const specials = [
  {
    name: "Lamb shoulder, six hours",
    text: "Slow over oak embers since lunch. Sumac onions, flatbread to tear, a jug of yogurt-garlic sauce.",
    price: "38",
    note: "Serves 2 · until it runs out",
  },
  {
    name: "Whole sea bream, köz style",
    text: "Grilled in a wire basket, brushed with lemon and parsley oil. Shepherd salad on the side.",
    price: "31",
    note: "Gluten-free",
  },
  {
    name: "Charred quince & kaymak",
    text: "Quince roasted in the ashes, cinnamon syrup, clotted cream and crushed pistachio.",
    price: "12",
    note: "Vegetarian",
  },
];

export const dietary = [
  { id: "veg", label: "Vegetarian", short: "V" },
  { id: "vegan", label: "Vegan", short: "VG" },
  { id: "gf", label: "Gluten-free", short: "GF" },
  { id: "spicy", label: "Spicy", short: "Hot" },
];

export const signature = [
  { id: "adana", name: "Adana kebab", text: "Hand-minced lamb on a flat skewer, chili, sumac onions", price: "26" },
  { id: "ezme", name: "Ezme & lavaş", text: "Our sharpest meze and bread straight from the coals", price: "11" },
  { id: "kunefe", name: "Künefe", text: "Shredded pastry, melted cheese, syrup, made to order", price: "13" },
];

export const menu = [
  {
    id: "meze",
    label: "Meze",
    intro: "Cold and warm small plates. Order three or four to share before the grill.",
    items: [
      { tr: "Ezme", en: "Hot tomato & pepper relish", text: "Hand-chopped, pomegranate molasses, walnut.", price: "9", tags: ["vegan", "gf", "spicy"] },
      { tr: "Haydari", en: "Thick yogurt, mint, dill", text: "Strained for a day, garlic, Aleppo pepper butter.", price: "9", tags: ["veg", "gf"] },
      { tr: "Közlenmiş patlıcan", en: "Fire-roasted aubergine", text: "Charred whole in the embers, tahini, lemon, parsley.", price: "11", tags: ["vegan", "gf"] },
      { tr: "Muhammara", en: "Red pepper & walnut dip", text: "Roasted peppers, toasted breadcrumbs, cumin.", price: "10", tags: ["vegan", "spicy"] },
      { tr: "Sigara böreği", en: "Crisp cheese rolls", text: "Yufka pastry, white cheese, parsley. Four pieces.", price: "10", tags: ["veg"] },
      { tr: "Ciğer", en: "Grilled lamb liver", text: "Quick over high heat, onions, sumac, flatbread.", price: "12", tags: [] },
    ],
  },
  {
    id: "mangal",
    label: "From the mangal",
    intro: "Every skewer cooks over oak charcoal. Served with grilled pepper, tomato and lavaş.",
    items: [
      { tr: "Adana kebab", en: "Spiced minced lamb", text: "Hand-minced with tail fat and chili, sumac onions.", price: "26", tags: ["spicy"] },
      { tr: "Kuzu şiş", en: "Lamb leg skewers", text: "Marinated overnight in onion juice and thyme.", price: "29", tags: ["gf"] },
      { tr: "Tavuk kanat", en: "Chicken wings", text: "Pepper paste and yogurt marinade, lemon.", price: "21", tags: ["gf", "spicy"] },
      { tr: "Beyti", en: "Wrapped kebab", text: "Lamb kebab rolled in lavaş, tomato butter, yogurt.", price: "28", tags: [] },
      { tr: "Hellim şiş", en: "Halloumi & vegetable skewer", text: "Courgette, peppers, onions, oregano oil.", price: "22", tags: ["veg", "gf"] },
      { tr: "Mantar & patlıcan şiş", en: "Mushroom & aubergine", text: "Pomegranate glaze, walnut tarator.", price: "20", tags: ["vegan", "gf"] },
    ],
  },
  {
    id: "pide",
    label: "Pide & bread",
    intro: "Dough made every morning, baked on the hot stone next to the fire.",
    items: [
      { tr: "Lavaş", en: "Coal-puffed flatbread", text: "Brushed with butter and za'atar. Refills are free.", price: "4", tags: ["veg"] },
      { tr: "Kıymalı pide", en: "Minced lamb pide", text: "Onion, pepper, parsley, egg yolk on request.", price: "18", tags: [] },
      { tr: "Peynirli pide", en: "Three-cheese pide", text: "Kaşar, white cheese, mozzarella, black seed.", price: "16", tags: ["veg"] },
      { tr: "Lahmacun", en: "Thin spiced flatbread", text: "Two per order, lemon and herbs to roll up.", price: "14", tags: ["spicy"] },
    ],
  },
  {
    id: "sweets",
    label: "Sweets",
    intro: "Made in-house. Künefe takes 12 minutes, so order it with your skewers.",
    items: [
      { tr: "Künefe", en: "Cheese pastry in syrup", text: "Kadayıf, unsalted cheese, pistachio. Made to order.", price: "13", tags: ["veg"] },
      { tr: "Fırın sütlaç", en: "Baked rice pudding", text: "Browned on top, cinnamon on the side.", price: "8", tags: ["veg", "gf"] },
      { tr: "Közde ayva", en: "Ember-roasted quince", text: "Cinnamon syrup, kaymak, walnut.", price: "12", tags: ["veg", "gf"] },
      { tr: "İncir & tahin", en: "Figs with tahini", text: "Dried figs, tahini, grape molasses, sesame.", price: "9", tags: ["vegan", "gf"] },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    intro: "Turkish tea is on us after every dinner.",
    items: [
      { tr: "Ayran", en: "Salted yogurt drink", text: "Frothy, made by the jug. The classic with kebab.", price: "5", tags: ["veg", "gf"] },
      { tr: "Şalgam", en: "Fermented turnip juice", text: "Sour, salty, cold. Ask for it spicy.", price: "5", tags: ["vegan", "gf", "spicy"] },
      { tr: "Vişne şerbeti", en: "Sour cherry sherbet", text: "House syrup, soda, crushed ice.", price: "6", tags: ["vegan", "gf"] },
      { tr: "Türk kahvesi", en: "Turkish coffee", text: "Cooked in sand, a lokum on the side.", price: "5", tags: ["vegan", "gf"] },
      { tr: "Rakı", en: "Anise spirit, by the glass", text: "With ice and cold water, the meze's best friend.", price: "11", tags: ["vegan", "gf"] },
    ],
  },
];

export const kahvalti = {
  price: "24",
  min: 2,
  max: 6,
  spread: [
    "White cheese, aged kaşar and tulum",
    "Olives, black and green, marinated in-house",
    "Tomatoes, cucumbers, peppers from the market",
    "Honey with kaymak (clotted cream)",
    "Two jams: sour cherry and rose",
    "Menemen or sucuk eggs in the pan",
    "Simit and coal-puffed bread",
    "Bottomless tea from the samovar",
  ],
};

export const facts = [
  { n: "Oak", label: "charcoal only, never gas", text: "Lit at 16:00 every day so the coals are white and steady by service." },
  { n: "18", label: "skewers on the mangal at once", text: "A 2-meter copper-hooded grill built by a metalworker in Gaziantep tradition." },
  { n: "1", label: "rule in the kitchen", text: "If it can touch the fire, it does: bread, peppers, aubergine, even dessert." },
];

export const team = [
  { initials: "OK", name: "Oya Kalender", role: "Head chef & keeper of the coals", note: "Grew up turning skewers at her uncle's grill stall. Still mixes every Adana by hand." },
  { initials: "BT", name: "Bora Teke", role: "Host & front of house", note: "Knows who wants the window table and who wants to be near the fire." },
];

export const setMenus = [
  {
    name: "Sofra",
    price: "58",
    text: "Six meze, mixed skewers for the table, künefe, tea.",
  },
  {
    name: "Mangal",
    price: "74",
    text: "Eight meze, lamb shoulder and Adana, two sweets, Turkish coffee.",
    featured: true,
  },
  {
    name: "Büyük sofra",
    price: "92",
    text: "The full table: ten meze, whole fish, three skewers, sweets and a rakı pairing.",
  },
];

export const quotes = [
  { quote: "We came for one drink at the bar and stayed for four hours. The ezme alone is worth the trip.", name: "Marco D.", detail: "Friday dinner" },
  { quote: "Booked a mangal night for my dad's 60th. Twenty of us at one long table and Bora remembered every allergy.", name: "Aylin S.", detail: "Private dining, 20 guests" },
  { quote: "Weekend kahvaltı is our new Sunday ritual. Bring an appetite and don't skip the honey and kaymak.", name: "Jess R.", detail: "Sunday kahvaltı" },
];

export const faq = [
  { q: "Can you cook for allergies and dietary needs?", a: "Yes. Every dish is tagged on the menu, and the kitchen can adapt most plates. Tell us when you book, or tell your server. We prepare gluten-free bread on a separate stone." },
  { q: "Is your meat halal?", a: "Our lamb and chicken come from a halal-certified butcher we have worked with for years. We also serve alcohol, so please ask us if that matters for your table." },
  { q: "Are kids welcome?", a: "Very. We have high chairs, a kids' plate of chicken skewer, rice and yogurt, and crayons for the paper tablecloths." },
  { q: "Do you take groups?", a: "Up to 8 guests can book online. For 9 to 24 guests, send a Mangal nights inquiry and we'll plan a set menu together." },
  { q: "Is there a dress code?", a: "No. Come as you are. You will smell a little of charcoal when you leave, and that's part of the deal." },
  { q: "Do you need a deposit? What if I cancel?", a: "No deposit for tables up to 8. Please cancel at least 4 hours ahead so we can give the table away. Mangal nights need a deposit, refundable up to 72 hours before." },
];
