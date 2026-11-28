// Plainstand (fictional): all copy for /law-firm/. People, cases and fees are invented.

export const brand = {
  name: "Plainstand",
  tagline: "Employment lawyers for employees",
  city: "Calder Falls",
  address: "Suite 4, 210 Mercer Row, Calder Falls",
  phone: "+1 (555) 010-0177",
  phoneShort: "(555) 010-0177",
  tel: "+15550100177",
  hours: "Mon–Fri 8:30 am – 6 pm",
  evenings: "Evening callbacks Tue & Thu until 8\u00a0pm",
};

export const nav = [
  { id: "what-happened", n: 1, label: "What happened" },
  { id: "fees", n: 2, label: "Fees" },
  { id: "how-it-runs", n: 3, label: "How it runs" },
  { id: "people", n: 4, label: "People" },
  { id: "case-notes", n: 5, label: "Case notes" },
  { id: "questions", n: 6, label: "Questions" },
];

// Shared by every contingency situation, so the panel stays consistent.
const contingency =
  "Contingency: 33⅓% of what we recover, 40% if it goes to trial. Nothing up front, and no fee if there's no recovery.";

export const situations = [
  {
    id: "fired",
    quote: "I was fired after I complained.",
    term: "Retaliation",
    plain:
      "Punishing someone for a complaint the law protects, like reporting unsafe conditions, missing pay or harassment.",
    first: "The timeline. What you reported, to whom and when, and how fast things changed after.",
    gather: [
      "Any email, text or chat where you raised the problem",
      "Your last two performance reviews",
      "The termination letter, or your notes from that meeting",
      "Names of anyone who saw what happened",
    ],
    charge: contingency,
  },
  {
    id: "wages",
    quote: "They don't pay me for overtime.",
    term: "Wage and hour claim",
    plain:
      "A claim for pay you already earned: overtime, missed breaks, a final paycheck, tips or work done off the clock.",
    first: "How your hours are recorded against how many you really work, and whether your title truly makes you exempt.",
    gather: [
      "Pay stubs, as far back as you have them",
      "Your own record of hours (a phone calendar counts)",
      "Your offer letter or job description",
      "Messages asking you to keep working after clocking out",
    ],
    charge: contingency,
  },
  {
    id: "harassed",
    quote: "I'm being harassed at work.",
    term: "Hostile work environment",
    plain:
      "Harassment tied to who you are (sex, race, religion, age, disability and more) that is severe or frequent enough to change the job.",
    first: "Whether you reported it, what the company did next, and whether it's still going on.",
    gather: [
      "A date and one line for each incident",
      "Screenshots of messages or posts",
      "The company's harassment policy or handbook",
      "Anything you sent to HR, and what they replied",
    ],
    charge: contingency,
  },
  {
    id: "treated-worse",
    quote: "I'm treated worse because of who I am.",
    term: "Discrimination",
    plain:
      "Being treated differently in pay, promotion, schedule or firing because of race, sex, age, disability, religion, pregnancy or another protected trait.",
    first: "How people in similar roles were treated, and what reasons the company gave you.",
    gather: [
      "Promotions or postings you were passed over for",
      "Differences in pay or schedule you know about",
      "Remarks about your age, race, gender or health",
      "Performance reviews from before and after",
    ],
    charge: contingency,
  },
  {
    id: "contractor",
    quote: "They call me a contractor, but I work like an employee.",
    term: "Misclassification",
    plain:
      "Being labelled an independent contractor while the company controls your work like an employer, so you miss overtime, benefits and tax contributions.",
    first: "Who sets your hours, supplies your tools and tells you how the work must be done.",
    gather: [
      "Your contract or onboarding papers",
      "1099 forms or the invoices you send",
      "Schedules, rules or training the company required",
      "Messages telling you how to do the job",
    ],
    charge: contingency,
  },
  {
    id: "severance",
    quote: "I've been offered a severance agreement.",
    term: "Release of claims",
    plain:
      "The part of a severance agreement where you give up the right to sue in return for the payment. Once signed, it's usually final.",
    first: "What you'd be giving up, the deadline to sign, and whether the offer matches what your claims could be worth.",
    gather: [
      "The agreement and any cover letter",
      "Your offer letter and any bonus or commission plan",
      "The date you were told, and the signing deadline",
      "A few lines on why you think you were let go",
    ],
    charge:
      "Flat $450 to review it, with a written note of what it means. If you want to push back, coaching is $280 an hour, or contingency if there's a claim behind it.",
  },
  {
    id: "noncompete",
    quote: "A non-compete is stopping me from taking a job.",
    term: "Restrictive covenant",
    plain:
      "A contract clause that limits where you can work, which clients you can contact or what you can share after you leave.",
    first: "What the clause actually says, whether you got anything for signing it, and how much the new job overlaps.",
    gather: [
      "The signed agreement (and the version shown to you at hiring)",
      "The new offer or job description",
      "Any letter from your old employer's lawyers",
      "A list of the clients you worked with",
    ],
    charge: "Flat $450 to read the clause and tell you where you stand. Negotiation coaching is $280 an hour.",
  },
];

export const fees = [
  {
    what: "Case review",
    detail: "20 minutes, by phone, video or at the office",
    how: "Free",
    upfront: "Nothing",
    costs: "None",
  },
  {
    what: "Severance agreement review",
    detail: "We read it and send a written note of what it means",
    how: "Flat fee, $450",
    upfront: "$450, when you send the agreement",
    costs: "None",
  },
  {
    what: "Wage, retaliation, discrimination, harassment and misclassification cases",
    detail: "We run the case from demand letter to settlement or trial",
    how: "Contingency: 33⅓% of what we recover; 40% if the case goes to trial",
    upfront: "Nothing",
    costs: "We advance them; repaid from a recovery",
    contingency: true,
  },
  {
    what: "Negotiation coaching",
    detail: "You negotiate with your employer; we prepare you for each round",
    how: "$280 an hour, billed in 15-minute steps",
    upfront: "One hour, refunded if unused",
    costs: "None",
  },
];

// Worked example for the contingency row (made-up numbers).
export const example = { recovery: 30000, costs: 1200 };

export const docket = [
  {
    when: "Day 1",
    title: "You tell us what happened",
    you: "Call, or send the five-line form below.",
    we: "Bea books 20 minutes with the right lawyer.",
    time: "Same or next business day",
  },
  {
    when: "Week 1",
    title: "We read the papers",
    you: "Send what you have: pay stubs, letters, messages.",
    we: "Write you a plain note: your options, the deadlines, what it could cost.",
    time: "3–7 days",
  },
  {
    when: "Weeks 2–4",
    title: "A demand letter",
    termNote: {
      term: "demand letter",
      n: 4,
      note: "A formal letter telling the employer what happened, what the law says and what you're asking for, before anyone files anything.",
    },
    you: "Read it, and say yes before it goes out.",
    we: "Send it, and handle every reply from the company or its lawyers.",
    time: "2–4 weeks for an answer",
  },
  {
    when: "Months 1–6",
    title: "Agency charge or negotiation",
    you: "Keep working or job-hunting. We call you at every step.",
    we: "File with the government agency where the law requires it, or negotiate directly.",
    time: "1–6 months",
  },
  {
    when: "Months 4–12",
    title: "Mediation",
    termNote: {
      term: "Mediation",
      n: 5,
      note: "A meeting with a neutral go-between who helps both sides reach a settlement. Nobody can be forced to agree.",
    },
    you: "Give it one day, with us beside you.",
    we: "Negotiate through the mediator. Many cases settle here, or before.",
    time: "One day, booked weeks ahead",
  },
  {
    when: "If needed",
    title: "Trial is rare",
    you: "Decide with us. It is always your call.",
    we: "Prepare and try the case. Our fee becomes 40%, as agreed at the start.",
    time: "1–2 years",
  },
];

export const people = [
  {
    initials: "OB",
    name: "Odile Brennick",
    role: "Founding attorney",
    years: "14 years in practice",
    focus: ["Firings and retaliation", "Discrimination", "Harassment"],
    why: "My first job was on a packing line. I watched a good supervisor get walked out for reporting a broken guard. I still think about her.",
    line: "+1 (555) 010-0178",
    tel: "+15550100178",
  },
  {
    initials: "KH",
    name: "Kenji Halloran",
    role: "Attorney",
    years: "8 years in practice",
    focus: ["Unpaid wages and overtime", "Misclassification", "Severance and non-competes"],
    why: "Most wage cases come down to arithmetic the company hoped nobody would do. I like doing it.",
    line: "+1 (555) 010-0179",
    tel: "+15550100179",
  },
];

export const intake = {
  initials: "BM",
  name: "Bea Marchetti",
  role: "Intake coordinator",
  intro:
    "The first voice you'll hear. Bea asks five questions, then books you with the right lawyer, usually in the same week. She doesn't give legal advice; she makes sure you get it.",
  why: "People call on the worst day of their working life. The least I can do is pick up.",
};

export const notes = [
  {
    file: "24-031",
    re: "Retaliation",
    facts: "A warehouse shift lead, let go three weeks after reporting a blocked fire exit in writing.",
    outcome: "Settled at mediation: a neutral reference, a clean record and a payment she chose over going back.",
  },
  {
    file: "24-077",
    re: "Unpaid overtime",
    facts: "Eleven dental office staff paid a flat salary with no overtime, though none of them managed anyone.",
    outcome: "Two years of back overtime for all eleven, paid before a lawsuit was filed.",
  },
  {
    file: "25-012",
    re: "Severance agreement",
    facts: "A marketing director given five days to sign a release that also barred her from the industry for two years.",
    outcome: "Non-compete removed, deadline extended and a larger severance after one round of negotiation.",
  },
  {
    file: "25-048",
    re: "Misclassification",
    facts: "A delivery driver called a contractor, with company-set routes, a uniform and a penalty for declined jobs.",
    outcome: "Treated as an employee from then on, with his unpaid vehicle expenses repaid.",
  },
];

export const faq = [
  {
    q: "Will my boss find out I called?",
    a: "No. What you tell us stays with us, even if you don't hire us. Nobody contacts your employer until you've said yes, in writing.",
  },
  {
    q: "Can I afford a lawyer?",
    a: "The case review is free. Most of our cases are on contingency, so there's nothing to pay up front and no fee if there's no recovery. Severance reviews are a flat $450.",
  },
  {
    q: "I already signed something. Is it too late?",
    a: "Not always. Some rights can't be signed away, and some agreements give you days to change your mind. Send it over and we'll tell you what it really covers.",
  },
  {
    q: "Do I need proof?",
    a: "You need your story and whatever you have. Plenty of cases start with a few texts and a pay stub. Finding the rest is part of our job.",
  },
  {
    q: "Can I keep working there while this happens?",
    a: "Often, yes. Many clients stay in the job while we negotiate. If it becomes unbearable, talk to us before you quit: how you leave can matter.",
  },
  {
    q: "Do you take cases outside Calder Falls?",
    a: "We work with employees across the state by phone and video. If a case goes to trial, we come to you.",
  },
];

export const callbacks = [
  { id: "morning", label: "Morning", hint: "8:30 am – noon" },
  { id: "afternoon", label: "Afternoon", hint: "noon – 6 pm" },
  { id: "evening", label: "Tue or Thu evening", hint: "6 – 8 pm" },
];
