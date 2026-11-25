// All copy and data for the Tessaly Dental Studio concept.
// Fictional brand, people, address and phone number.

export const brand = {
  name: "Tessaly",
  full: "Tessaly Dental Studio",
  phone: "+1 (555) 010-0142",
  phoneHref: "tel:+15550100142",
  email: "hello@tessaly.dental",
  address: ["214 Alder Street", "Portland, OR 97205"],
};

export const nav = [
  { label: "Treatments", href: "#treatments" },
  { label: "Prices", href: "#prices" },
  { label: "First visit", href: "#first-visit" },
  { label: "Team", href: "#team" },
  { label: "Visit us", href: "#visit" },
];

export const reassurance = [
  "Evening and Saturday appointments",
  "Every price shown before treatment",
  "Calm care and sedation for nervous patients",
];

export const needs = [
  { icon: "bolt", title: "I have tooth pain", text: "Same-day emergency visits to find the cause and ease the pain.", from: "$85", target: "emergency" },
  { icon: "calendar", title: "It's been a while", text: "No lectures. A gentle checkup and clean at your pace.", from: "$95", target: "checkup" },
  { icon: "sparkle", title: "I want a brighter smile", text: "In-studio or take-home whitening with shade matching.", from: "$390", target: "whitening" },
  { icon: "align", title: "I want straighter teeth", text: "Clear aligners planned with a 3D scan, no metal braces.", from: "$3,200", target: "aligners" },
  { icon: "gap", title: "I'm missing a tooth", text: "Implants and bridges that look and feel like your own.", from: "$2,800", target: "implants" },
  { icon: "child", title: "Checkups for my kids", text: "Friendly first visits that make the dentist feel normal.", from: "$70", target: "kids" },
];

export const calm = [
  { title: "You're in control", text: "Raise a hand and we pause. Every time, no questions asked." },
  { title: "Nothing is a surprise", text: "We explain each step before we start, and the price before we treat." },
  { title: "Comfort on request", text: "Noise-cancelling headphones, weighted blankets and your own playlist." },
  { title: "Sedation if you need it", text: "Mild oral sedation for longer visits, discussed with you in advance." },
];

export const prices = [
  { item: "New patient exam, X-rays & clean", price: "$95" },
  { item: "Emergency visit", price: "$85" },
  { item: "Tooth-colored filling", price: "from $140" },
  { item: "Kids' checkup & clean (under 14)", price: "$70" },
  { item: "Teeth whitening (in-studio)", price: "$390" },
  { item: "Root canal (front tooth)", price: "from $690" },
  { item: "Single implant with crown", price: "from $2,800" },
  { item: "Clear aligners, full treatment", price: "from $3,200" },
];

export const membership = {
  name: "Tessaly Care",
  price: "$29",
  per: "per month",
  perks: ["Two checkups and cleans a year", "X-rays included", "15% off all other treatments", "No waiting periods, cancel anytime"],
};

export const steps = [
  { n: "01", title: "Book in a minute", text: "Pick a reason, a day and a time online, or call us. We confirm by text." },
  { n: "02", title: "A slow welcome", text: "Tea, a short tour and ten minutes to talk about what worries you." },
  { n: "03", title: "Exam and 3D scan", text: "A gentle exam and a scan you can see on screen, explained in plain words." },
  { n: "04", title: "Your plan, in writing", text: "Options, timing and exact prices. Take it home and decide when you're ready." },
];

export const team = [
  { initials: "NH", name: "Dr. Nadia Halvorsen", role: "General & cosmetic dentist", note: "Specialist in nervous patients and long, unhurried first visits." },
  { initials: "JO", name: "Dr. James Okafor", role: "Implants & restorative", note: "Plans every implant with 3D imaging before a single step." },
  { initials: "LM", name: "Lucía Marín", role: "Dental hygienist", note: "Known for the gentlest cleans in Portland (her patients' words)." },
  { initials: "SB", name: "Sam Becker", role: "Patient coordinator", note: "Answers the phone, explains prices and finds you a time that works." },
];

export const stories = [
  { quote: "I hadn't been to a dentist in eight years. Nobody made me feel bad about it, and they stopped every time I raised my hand.", name: "Rachel T.", detail: "Checkup and fillings" },
  { quote: "The price on my treatment plan was exactly what I paid. That has never happened to me before.", name: "Marcus D.", detail: "Implant" },
  { quote: "My son asked when we're going back. That's a first for our family.", name: "Aylin S.", detail: "Kids' checkup" },
];

export const bookingReasons = [
  { id: "checkup", label: "Checkup & clean" },
  { id: "emergency", label: "Pain or emergency" },
  { id: "whitening", label: "Whitening" },
  { id: "aligners", label: "Straighter teeth" },
  { id: "implants", label: "Missing tooth" },
  { id: "kids", label: "Child's visit" },
];

export const hours = [
  ["Mon – Thu", "8:00 – 19:00"],
  ["Friday", "8:00 – 16:00"],
  ["Saturday", "9:00 – 14:00"],
  ["Sunday", "Closed"],
];

export const faq = [
  { q: "Do you take my insurance?", a: "We work with most PPO dental plans and file the claim for you. Send us your plan details and we'll confirm your coverage before your visit. No insurance? Tessaly Care covers your preventive visits for $29 a month." },
  { q: "What if I have an emergency?", a: "Call us and we'll see you the same day during opening hours. After hours, our voicemail gives you an on-call number for urgent pain, swelling or trauma." },
  { q: "Can I bring my kids?", a: "Yes. We see children from their first tooth. Book them right after your own visit and we'll keep it short, friendly and fun." },
  { q: "Can I pay over time?", a: "For treatments over $500 we offer interest-free monthly payments over 6 or 12 months. Your plan shows both options." },
  { q: "I'm really anxious. Can I just come and talk first?", a: "Absolutely. Book a free 20-minute meet-and-greet: no chair, no instruments, just a conversation." },
];
