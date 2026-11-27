# Brief: Tillwick (real estate agent)

slug: `real-estate` · researched 2026-11-27 by the research agent

## Brand (fictional)
- **Name:** Tillwick. A coined surname-style name, used as "Tillwick, neighbourhood estate agents".
  Searched in quotes ("Tillwick" with real estate / realty / homes): no agency, product or
  template uses it. Rejected on the way: "Larkfield Homes" (real developments and a real Larkfield
  neighbourhood), "Halcy Row" (too close to the real *Halcyon* property firms). Never shorten the
  brand to "Till" or "Wick".
- **What it is:** a two-agent independent team that only works one fictional city district,
  Port Merrow's **Eastside**: five neighbourhoods of rowhouses, warehouse lofts and 1930s semis.
  Buyers get a guide who knows each street; sellers get a value range they can trust and a plan.
- **Positioning:** "Five neighbourhoods. Known street by street." Local, plain-spoken, numerate.
  The opposite of the glossy luxury-agent site: no skyline hero, no "luxury lifestyle" copy.
- **Fictional neighbourhoods:** Kilnworth, Saltmeadow, Old Ropewalk, Larchmere Heights, Quillby Docks.
- **Team (fictional, initials avatars only, no photos of people):**
  Juno Tillwick (lead agent, sellers), Ravi Mendel (buyers' agent). Two people only.
- **Contact (fictional):** office 12 Tannery Yard, Kilnworth, Port Merrow. Phone `+1 (555) 010-0163`.
  No email address shown (the QA bans `example`); use a contact form instead.
- **Numbers on the page** must be framed as this fictional team's own figures ("homes we sold in
  2026: 41") and never as ratings from a real platform or awards. No MLS/IDX, NAR, Realtor® or
  brokerage logos; no "licensed by…" claims. Footer: "Tillwick is a fictional brand. Listings,
  prices and people are invented."

## What the research says (sources)
1. **People already find listings on the portals; they come to an agent's site to judge the
   agent.** Knapsack Creative ("What home buyers and sellers are actually looking for on a real
   estate website"): visitors check credibility, expertise, authenticity and ease of contact.
   Warns that a heavy MLS feed slows the site and makes it generic; a few well-presented featured
   listings plus a clear story give a reason to choose *this* agent. Contact must be above the
   first scroll; overloaded homepages (pop-ups, widgets, autoplay) lose people.
2. **Trust and responsiveness decide the first impression.** Zillow ("6 ways to build trust with
   your real estate website", citing its 2022 Consumer Housing Trends report): 83% of buyers who
   used an agent called a first impression of trustworthiness very/extremely important, 81% said
   the same of responsiveness. Advice: write for a specific audience and its pain points,
   conversational testimonials gathered after closing, a "who I am / how I work / who I serve"
   intro, consistent labels, no dark patterns.
3. **Hyperlocal beats generic.** Inman (Josh Ries, "7 things agents are doing wrong on their
   websites", July 2026): recycled blog content proves nothing; neighbourhood content about schools,
   commutes, inspections, HOAs shows real local expertise. Listings often convert better as a grid
   than a list or map. Don't gate organic visitors behind forced registration.
4. **Homepage patterns of strong agent sites.** Luxury Presence ("The best real estate websites in
   2026", "Real estate website design: the 2026 guide"; vendor sources, claims unverified):
   first viewport must signal market position in ~2 s; search in the first viewport or nav;
   sales results high in the scroll; past-transactions page with sold prices; neighbourhood guides
   as a content hub; social proof spread across the page, a wall of many reviews rather than three.
5. **Seller valuation is the most valuable lead, and short forms win.** Follow Up Boss ("How to
   generate seller leads using landing pages"; older, vendor tests): cutting a form from 11 to 4
   fields lifted conversion ~120%; a button labelled "What's it worth?" beat "Submit" by ~20%; one
   photo of a local home beat skylines/sliders; call back within 5 minutes.
6. **What clients ask freelancers for** (Upwork/Fiverr real-estate gig and job titles in search
   results; the Upwork job page itself refused automated reading): IDX/MLS listing search, home
   valuation form, lead capture into a CRM, neighbourhood/community pages, featured listings,
   testimonials, mobile-first, "luxury" look, fast/modern stack.
7. **2026 craft:** nerdy.dev "CSS recently in all browsers" (Apr 2026): anchor positioning's core
   feature set is ready, `@scope`, name-only container queries, `shape()`, view-transition classes.
   web.dev Baseline digest (May 2026): `:user-invalid` (form errors only after interaction) widely
   available; `:open` for `<details>`/`<dialog>` and container style queries newly available.
   Scroll-driven animations Baseline since Oct 2026 (noted in the restaurant brief).
8. **Practitioner forums:** the r/web_design search returned only vendor blogs, no reachable
   threads; HTMLBurger/B12 design-tips posts repeat the same advice (search first, clear CTAs,
   fast images). Nothing new taken from them.

## Inspiration log (source → idea → how we changed / combined it)
| Source | Idea | Our version |
|---|---|---|
| Luxury Presence 2026 roundup | Search in the first viewport | The hero **is** the search, written as a sentence: "I'm looking to **buy** a **2-bed** in **Saltmeadow** under **$650k**" — each bold word is a real `<select>`; a live count ("7 homes match") updates as you change it. No photo hero at all. |
| Zillow trust article | Speak to one audience at a time | A **Buying / Selling** switch in the header swaps the hero sentence, headline copy and the order of the next two sections (selling puts the valuation first). Same page, two voices. |
| Knapsack + Inman | Few featured listings, presented well; grid over list | Six fictional listings in a **bento mosaic** (one large, mixed tiles), each with a spec line (beds · baths · sq ft · street) and a "Why we like it" one-liner written by the agent. No fake MLS feed. |
| Inman hyperlocal advice | Neighbourhood content proves expertise | "Street notes" for the 5 neighbourhoods: a tabbed panel with median price, typical home, walk to the ferry, school-run notes, "best street" and "watch out for" — honest, specific copy. |
| Follow Up Boss | 4-field valuation form, "What's it worth?" CTA | **3-step value range estimator**: address street → home type & beds → condition. Shows an *indicative range* from the fictional neighbourhood comps, then offers "Get Juno's written valuation" (name + phone). Clearly labelled as a demo, not a real AVM. |
| Luxury Presence (past-transactions pages) | Show sold results | A **"Recently sold" ledger**: a proper HTML table (address, type, asked, sold, days on market) with a toggle "% over asking". Fictional data, labelled as such. |
| Luxury Presence (wall of reviews) | Many reviews beat three | A dense masonry wall of 10–12 short reviews, first name + initial, neighbourhood and "bought" / "sold" tag, no photos, no star ratings from any platform. |
| Street signs (our own) | — | Section headings set on **enamel street-name plates** (rounded rectangle, double border, small district code like "E3"), which also ties the brand to "street by street". |

## Design direction
- **Mood:** a local, numerate, slightly civic look: street plates, parcel lines, ledgers.
  Confident type, generous white space, data presented as real tables. Not luxury, not cute.
- **Palette (tokens on `.c-estate`):**
  - `--ink` deep plum-ink `#271A33` (text, plates)
  - `--concrete` pale concrete `#E9EAE6` (page canvas), `--paper` `#F7F7F4` (cards/tables)
  - `--highlight` chartreuse `#D4F25A` (selected words in the sentence search, focus rings on dark,
    "match" counts) — never as text on light; text on it is `--ink`
  - `--pin` terracotta `#C2502E` (map pins, "Sold" tags; check AA, darken to `#A8401F` for text)
  - `--line` `#C9CBC4` (parcel lines, table rules)
  - Build should verify every text/background pair is AA.
- **Fonts (self-hosted, max 2):**
  - Display: **Newsreader Variable** (`@fontsource-variable/newsreader` 5.3.0, OFL-1.1), using the
    optical-size axis: big italic for the hero sentence's chosen words, upright for headings.
  - Body/UI/data: **Geist Variable** (`@fontsource-variable/geist` 5.3.0, OFL-1.1), tabular
    numbers (`font-variant-numeric: tabular-nums`) in the ledger and prices.
- **Background:** concrete canvas with a very faint SVG **parcel-map pattern** (irregular plot
  outlines, like a cadastral map) behind the hero and the street-notes section only.
- **Shapes:** street-plate headings (radius 10px, 2px double border); listing tiles square-cornered
  with a thin `--line` rule; chips are fully rounded.
- **Motion:** CSS only. Hero sentence: chosen words swap with a short vertical roll
  (`@starting-style` + transform); the match count ticks. Bento tiles reveal with
  `animation-timeline: view()` (fallback: visible). Buying/Selling switch uses a View Transition
  (`document.startViewTransition`, feature-detected) to cross-fade the hero copy. All motion off
  under `prefers-reduced-motion`.
- **Modern CSS worth using:** anchor positioning for listing-tile "quick facts" tooltips (with a
  plain fallback), `:user-invalid` for form errors, `<details name>` exclusive accordions for FAQ,
  container queries on listing tiles, `text-wrap: balance` on headings.
- **JS:** small vanilla scripts only (sentence search filter + count, audience switch, estimator
  steps, street-notes tabs, ledger toggle). No library needed. Target well under 30 KB.
- **Icons:** `lucide-static` (ISC) if needed (bed, bath, ruler, map-pin, phone); record in ASSETS.md.
- **Map:** custom SVG of the fictional Eastside (river, ferry line, five neighbourhood shapes),
  used in the street notes; hovering/selecting a tab highlights its shape.

## Page structure (single page, `/real-estate/`)
1. **Header:** wordmark "Tillwick" + "Eastside, Port Merrow"; **Buying | Selling** segmented switch;
   phone (desktop); primary button "What's my home worth?".
2. **Hero (search sentence):** H1 in Newsreader — buying: "Find your street in Port Merrow's
   Eastside." Below, the sentence search with 4 selects + "Show 7 homes" button (scrolls to
   listings, filters them). Selling mode: "Sell with the agents who know your street." and the
   sentence becomes "I want to sell a [3-bed] [rowhouse] in [Kilnworth]" → "See my value range".
   Small proof row: "41 homes sold in 2026 · 19 days average on market · 102% of asking (our
   2026 figures)".
3. **Featured homes (bento mosaic):** 6 fictional listings, filtered by the hero sentence;
   "No homes match — tell Ravi what you're after" empty state with a short form.
4. **Value range estimator (3 steps):** seller section; result card with range, the 3 comps used
   from the ledger, and the 2-field "written valuation" request. Demo disclaimer.
5. **Street notes:** 5 neighbourhood tabs + SVG map; per tab: median price, typical homes, commute,
   schools note, "best street", "watch out for".
6. **Recently sold ledger:** table of 10 fictional sales + "% over asking" toggle; on mobile the
   table becomes stacked rows (still a real table semantically).
7. **How we work:** two short columns — "If you're buying" (4 steps) / "If you're selling"
   (4 steps), with the fee in plain words ("1.75% + tax, no sale no fee" — fictional, clearly part
   of the concept). Team: Juno and Ravi, initials avatars, one paragraph each, direct phone.
8. **Review wall:** 10–12 short reviews, masonry, "Bought in Saltmeadow" tags.
9. **Contact + FAQ:** short contact form (name, phone, buying/selling, message) next to an
   exclusive-accordion FAQ (fees, how long a sale takes, viewings at weekends, can you sell while
   buying, do you charge buyers). Office address and hours.
10. **Footer:** fictional-brand notice, photo credits, "Concept by Idrishan Demirdag".

## Primary action
**"What's my home worth?"** → the value range estimator (seller lead; the most valuable lead for an
agent). It's in the header on every screen and closes sections 2, 5 and 6. Buyers' secondary
action is the hero search ("Show N homes").

## Photos
Listing tiles benefit from real photos; see `PHOTOS.md`. Without them, tiles use an SVG
"elevation" drawing (simple façade line drawing in the photo's colours) so the page still looks
finished. No people in any photo.

## Layout fingerprint
- hero: type-led sentence search ("mad-libs" selects with live match count) on parcel-map pattern; no photo, no illustration
- nav: slim bar with Buying/Selling segmented switch that re-voices the page + one primary button
- sections: enamel street-name plate headings with district codes (E1–E5)
- grid: asymmetric bento mosaic for listings + full-width data ledger (real table) + tabbed map panel
- background: pale concrete with faint cadastral parcel-line pattern
- signature: sentence search hero; 3-step value range estimator with comps
- palette: plum-ink, concrete grey, chartreuse highlight, terracotta pin
- type: Newsreader (optical-size serif, italic accents) + Geist (tabular numbers)

### Fingerprint check (vs. every existing concept)
| vs. | similar items | hero / sections / grid differ? |
|---|---|---|
| dental-clinic | none (dental: split hero, cream, eyebrow headings, 12-col card rows) | yes / yes / yes |
| restaurant | none (photo hero, numbered chapters, sticky split + rails, coal/iznik) | yes / yes / yes |
| lumora-bio (external) | arguably palette ("light neutral + one accent") → 1 | yes / yes / yes |
| mara-lind (external) | none (video hero, dark, filter grid) | yes / yes / yes |
Also avoided the "common patterns": no eyebrow + lead-right, no cream, no three-card rows, no dark
feature band, closing sequence is contact form + FAQ side by side (no map + sticky mobile bar).
