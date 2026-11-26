# Brief: Sumakara (restaurant / café)

slug: `restaurant` · researched 2026-11-26 by the research agent

## Brand (fictional)
- **Name:** Sumakara — coined from *sumak* (sumac) + *kara* (black, as in charcoal). Searched in
  quotes ("Sumakara", and with restaurant/grill/meze): no business, product or template uses it.
  Rejected on the way: "Narhane" (too close to the real NYC restaurant *Nar*), "Közhane" (many real
  Turkish grills named *Köz*/*Közle*), "Ember & Sumac" (dozens of real "Ember & …" restaurants),
  "Defne & Kor" (real *Defne* restaurants in Berlin/Istanbul). Note for build: a real Turkish
  restaurant called *Sumak* exists in Miami Beach — never shorten the brand to "Sumak".
- **What it is:** a neighborhood Anatolian charcoal grill and meze house. Small plates to share,
  skewers off the mangal, a weekend Turkish breakfast (*kahvaltı*), and a long table for
  private "mangal nights".
- **Positioning:** "Everything touches the fire." Warm, generous, a little loud. For couples and
  groups of friends who want to share a table, not a fine-dining ritual.
- **Location (fictional):** 47 Coalyard Lane, Halvern Square. Phone `+1 (555) 010-0187`.
  Email `hello@sumakara.example` is NOT allowed (contains "example") — build should show the phone
  and a "Send us a message" form instead, no email address.
- **Hours (fictional):** Tue–Thu 17:00–22:30 · Fri 17:00–23:30 · Sat 10:00–15:00 (kahvaltı) and
  17:00–23:30 · Sun 10:00–15:00 (kahvaltı only) · Mon closed.

## What the research says (sources)
1. **Diners come for the menu, hours and booking — fast.** Owner.com's survey of 1,300 US guests:
   72% visit a restaurant's website before dining in, 80% mainly to see the menu, 75% want a
   browsable menu, 61% rank menu photos among the most important features, 74% look for social
   proof. (Owner.com, "6 ways guests judge your restaurant's website"; Toast "32% of diners check
   restaurant websites" for the same direction.)
2. **The classic failures:** PDF menus (unreadable on a phone, invisible to Google), slow mobile
   pages (53% leave after 3 s), hours/address/phone hard to find or out of date, booking/ordering
   buried or pushed to another domain, no reviews. (Owner.com "11 most common restaurant website
   mistakes", 2026; Tripleseat "Top 6 mistakes"; PL8TED "don't upload a PDF menu".)
3. **Private dining is a separate lead.** Tripleseat: show the event space and give events their own
   inquiry form — groups book differently from couples.
4. **Dietary info is an accessibility issue.** Ctrl.blog ("Restaurant websites lack information for
   special dietary needs"): diners need to know *before* they come whether they can eat there;
   a short dietary notice plus clear tags matters. meandu / BOIA articles: tag menus, don't rely on
   color alone, keep the menu as real text.
5. **What freelancers get hired for** (Upwork/Fiverr restaurant listings): HTML menu, reservation
   integration (OpenTable/Resy-style widget), online ordering/pickup, events/catering inquiry,
   gift cards, Google-friendly local SEO, mobile-first.
6. **Character beats templates.** Are.na editorial (Toph Tucker & Jasmine Lee, "Why restaurant
   websites are good"): the memorable independent sites feel handmade and carry the place's
   personality; signs of ongoing care (today's specials, seasonal menus) make a site feel alive.
   Framer's 2026 examples roundup: big expressive type or dish photography as the main element,
   with "Book a table" one click away on every screen.
7. **2026 craft:** CSS scroll-driven animations (`animation-timeline: view()/scroll()`) became
   Baseline in October 2026 (Chrome/Edge 115, Firefox 159, Safari 26; web.dev "New to the web
   platform in October"). Scroll-*triggered* animations (`timeline-trigger`) are Chrome-only — use
   only with an IntersectionObserver-free graceful fallback (content simply visible).

## Inspiration log (source → idea → how we changed / combined it)
| Source | Idea | Our version |
|---|---|---|
| Owner.com survey | Menu is the #1 reason to visit; photos matter | Menu is section 2, real HTML, with a "Start here" trio of signature dishes illustrated in custom SVG (photos optional later) |
| Owner.com mistakes | Persistent primary CTA in header | Sticky header "Reserve" + mobile bottom bar (Reserve / Call / Directions) — different layout from dental's two-button bar: three icons + label |
| Tripleseat | Separate private-event lead | "Mangal nights" section for 8–24 guests with its own short inquiry form (demo) |
| Ctrl.blog + accessibility articles | Dietary info up front | Menu filter chips (Vegetarian, Vegan, Gluten-free, Spicy) with text tags + icons, never color alone, and a one-line dietary promise |
| Are.na editorial | Handmade feel, signs of life | A "Tonight from the coals" chalk-style specials strip and a live "Open now · kitchen closes 22:00" status computed from the hours |
| Framer roundup (Nuff, The Den) | Bold type as the hero / moody atmosphere | Huge variable-width wordmark headline that *stretches* (Anybody `wdth` axis) as you scroll — but on a bright pomegranate field, not a dark moody page |
| Paper adisyon (Turkish restaurant check slips) — our own idea | Order-slip texture | Reservation summary styled as a perforated adisyon slip |
| Iznik tile geometry (traditional, public domain motif) | Pattern language | Our own simplified 8-point star tile drawn in SVG, used as a section divider and footer band — not a copy of any specific tile |

No template used: the Astro restaurant themes found (Tasteful, Lime, Taverno, Restaurant Warm)
either had unclear licenses on the theme page or a look too generic. Build from scratch.

## Design direction
Must differ from the last three: Tessaly Dental (sand + spruce + peach, Bricolage + Figtree, soft
arches), Lumora Bio (light minimal), Mara Lind (dark portfolio), and the gallery (cream + green,
Fraunces + Geist).

- **Palette (tokens on `.c-sumakara`):**
  - `--pom` pomegranate red `#B4232A` (hero field, primary buttons)
  - `--sumac` deep sumac ink `#2B1215` (text, dark sections)
  - `--ayran` milky off-white `#FBF8F3` (page background)
  - `--saffron` `#F0A830` (highlights, focus ring on dark, "open now" dot)
  - `--iznik` tile blue `#1D4F91` (small accents: tags, links, tile pattern)
  - `--ash` warm grey `#6B5E5A` (muted text) — check AA on ayran.
  Contrast to verify in build: ayran on pom, sumac on saffron, iznik on ayran.
- **Fonts (max 2, both in npm as `@fontsource-variable/*`, v5.3.0 checked):**
  - **Anybody** (display; variable width 50–150 + weight) — loud, poster-like, the `wdth` axis is
    the signature motion.
  - **Instrument Sans** (body/UI; variable width + weight) — clean, slightly condensed, legible menus.
- **Shapes:** skewer-line dividers (a thin line with small round "pieces"), custom 8-point star
  tile pattern, perforated ticket edges, round price "coins". Square-ish 6px radius — no soft arches.
- **Motion (CSS first, all off under `prefers-reduced-motion`):**
  - Hero wordmark: scroll-driven `font-variation-settings: "wdth"` from 150 → 75 as the hero leaves.
  - Ember flicker: tiny SVG embers drifting up behind the hero (CSS keyframes, 6–8 elements).
  - Menu filter: chips animate items in/out with View Transitions (`document.startViewTransition`)
    where supported; plain toggle otherwise.
  - Section reveals with `animation-timeline: view()` inside `@supports`, content visible by default.
- **JS:** small inline scripts only — menu filter, open-now status, reservation widget, mobile menu.
  No libraries needed.

## Page structure (single page, `/restaurant/`)
1. **Sticky header:** wordmark, nav (Menu · Kahvaltı · Mangal nights · Visit), open-now pill, "Reserve".
   Mobile: menu button + bottom bar (Reserve / Call / Directions).
2. **Hero:** pomegranate field, giant "SUMAKARA" stretching wordmark, line "Anatolian charcoal grill
   & meze. Everything touches the fire." CTAs: Reserve a table · See the menu. Under it: today's
   hours + "Walk-ins welcome at the bar".
3. **Tonight from the coals:** 3 chalk-style specials (e.g. "Lamb shoulder, 6 hours, sumac onions").
4. **Menu (HTML):** tabs Meze · From the mangal · Pide & bread · Sweets · Drinks; filter chips;
   each item: name (Turkish + English), one-line description, price, dietary tags. Note:
   "Allergies? Tell us when you book — the kitchen can adapt most plates." Plus "Pickup orders: call
   us" (no fake ordering platform).
5. **Weekend kahvaltı:** Sat–Sun breakfast spread for 2–6, price per person, what's on the table.
6. **The fire / story:** short story of the oak-charcoal mangal, 3 facts (e.g. "oak charcoal, never gas").
   Team as initials avatars only (head chef + host, fictional names).
7. **Mangal nights (private dining):** long table for 8–24, set menus at 3 price points, inquiry form (demo).
8. **Guests say:** 3 fictional quotes (first name + initial), no star ratings from real platforms.
9. **Reserve:** party size (1–8, "9+ → Mangal nights"), date (next 14 days, Mon disabled), time
   slots, name → adisyon-style summary. Demo only, sends nothing.
10. **Visit:** address, hours table with today highlighted, stylized SVG street map, transit/parking,
    accessibility note (step-free entrance, accessible restroom).
11. **FAQ:** dietary needs, kids, groups, dress code, deposits/cancellation, halal sourcing.
12. **Footer:** tile band, hours, phone, fictional-brand note, photo credits if photos are added.

## Primary action
**Reserve a table** (secondary: Call; tertiary: Mangal nights inquiry).

## Photos
Optional; the page must look complete with SVG/CSS placeholders. See `PHOTOS.md`.

## Layout fingerprint (v2, redesign 2026-11-26)
- hero: full-viewport photo with scroll-driven zoom, rising embers, giant width-axis wordmark at the bottom
- nav: transparent over the hero, turns solid after it; floating "Reserve" pill after the hero
- sections: numbered chapters (01–06) with big chapter numerals, no eyebrow + lead-right pattern
- grid: split-screen with sticky photo (fire), sticky menu index + filters, horizontal snap rails
- background: coal and ayran alternating with full-bleed iznik blue and photo bands
- signature: scroll-zoom hero + marquee ticker; adisyon-style live booking receipt
- palette: pomegranate red, coal, saffron, Iznik blue
- type: Anybody (width axis animated) + Instrument Sans
