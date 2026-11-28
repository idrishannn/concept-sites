# Brief: Plainstand (law firm)

slug: `law-firm` · researched 2026-11-28 by the research agent

## Brand (fictional)
- **Name:** Plainstand. Used as "Plainstand, employment lawyers for employees" (short form
  "Plainstand Law"). Searched in quotes ("Plainstand", and with law / legal / employment): the only
  use is a decorative item in a video game; no law firm, legal product or template uses it.
  Rejected on the way: "Fennick & Orme" (several real lawyers and a barrister are named Orme).
- **What it is:** a three-person, worker-side employment law practice in the fictional city of
  **Calder Falls**. It only represents employees, never companies: wrongful firing, retaliation,
  unpaid wages and overtime, discrimination and harassment, misclassification, severance
  agreements and non-competes.
- **Positioning:** "Employment law, in plain words." The site reads like a calm, clear lawyer
  explaining your options at a kitchen table: what happened, what it's called, what it costs,
  what happens next. The opposite of the gavel-and-skyline firm site: no "aggressive advocates",
  no "best", no "expert".
- **Why this practice area:** the research (ABA, LexBlog) says clients arrive with a *situation*,
  not a legal category, and scan for "do you handle my problem?". Employment law is where that
  gap between everyday words and legal words is widest, which gives the concept a strong idea.
  It's also a very common solo/small-firm practice on Upwork-type jobs.
- **People (fictional, initials monograms only, no photos):**
  - Odile Brennick — founding attorney; firings, retaliation, discrimination. 14 years in practice.
  - Kenji Halloran — attorney; wages, overtime, misclassification, severance & non-competes. 8 years.
  - Bea Marchetti — intake coordinator; "the person who answers when you call".
  Bios list focus, years in practice and a line on why they do this work. **No bar admissions,
  awards, "Super Lawyers"-style badges, or court/regulator names** (PLAYBOOK rule 4).
- **Contact (fictional):** Suite 4, 210 Mercer Row, Calder Falls. Phone `+1 (555) 010-0177`.
  Hours Mon–Fri 8:30–6; evening callbacks Tue & Thu until 8 pm. No email address shown (QA bans
  `example`); use the case review form.
- **Fees (fictional, part of the concept):** free 20-minute case review; severance agreement
  review flat $450; wage, retaliation and discrimination cases on contingency 33⅓% (40% if the
  case goes to trial), with case costs explained in plain words (see page structure §2);
  negotiation coaching $280/hour.
- **Footer:** "Plainstand is a fictional brand. People, cases and fees are invented. This page is a
  design concept, not legal advice, and contacting it creates no attorney–client relationship."

## What the research says (sources)
1. **Clients look for their situation, in their words.** ABA *Law Practice Today*, "What does your
   law firm's website say to prospective clients?" (Margeaux Green, Sept 2026): visitors need to
   see fast whether the firm handles their problem; be specific (name the actual matters, not just
   "criminal law"); describe situations the way clients say them; build FAQs from questions that
   recur in calls and emails. Bios should go past credentials to experience and *why* the lawyer
   does this work. Forms must confirm receipt and explain what happens next. Test the site on a
   phone, keyboard-only and with a screen reader. Ethics review (Model Rules 7.1, 7.2, 1.18, 1.6)
   for statements about experience, fees, results and testimonials.
2. **One primary action, a short first form.** ABA *GPSolo eReport*, "Ask Techie: What website
   features actually convert visitors into paying clients?" (Hao Li, July 2026): the first screen
   says what you do, for whom, and the next step; one primary + one secondary CTA (e.g. schedule a
   consultation / call the office), never ten equal choices; tap-to-call, phone in the header; a
   short first form (name, phone or email, matter type, short description, urgency), the rest of
   intake later; after-hours booking catches people at the moment of intent; practice pages should
   explain problem → risks → process → why early advice matters → next step, not read like a
   treatise; don't bury disclaimers in fine print; avoid layout shift and long forms.
3. **Websites are scanned; bios get read.** LexBlog / Legal Marketing Blog, "What clients actually
   look at before contacting a lawyer" (John Hinson, June 15, 2026): prospects decide in seconds
   whether you handle their issue, are nearby, are reachable and seem trustworthy. Attorney bios get
   more attention than firms expect: who will I speak to, are they approachable. Prospects compare
   several firms side by side, and read content matching their situation. Contact friction (finding
   the phone, an easy form, knowing what happens next) decides the contact.
4. **2026 craft for law sites.** PaperStreet, "2026 Law Firm Website Design Trends" (Jen Mwangi,
   Jan 2026, updated Sept 2026; a vendor's piece): editorial layouts with strong grids, asymmetry and
   big margins; oversized type as the main visual; restrained palettes with one accent; subtle,
   purposeful motion and scroll reveals; thin rules and dividers; stock photography in decline.
5. **Advertising rules shape the content.** Justia Onward, "6 disclaimers you may need on your legal
   website" (Sal Andropoulos, 2015; old, rules vary by state): say that contacting the firm creates
   no attorney–client relationship and that form messages may not be confidential; some states want
   "Attorney Advertising" labels; results and testimonials must not create unjustified expectations;
   avoid "best"/"better"; don't say "expert"/"specialist" unless certified; name the responsible
   attorney and address; if you advertise contingency fees, disclose whether the client still owes
   costs.
6. **Platform:** web.dev "New to the web platform in October" (Oct 29, 2026): CSS scroll-driven
   animations are now Baseline (Chrome/Edge 115, Firefox 159, Safari 26). WebKit's "Guide to
   scroll-driven animations with just CSS": `animation-timeline: view()` + `animation-range`, put
   `animation-timeline` after the `animation` shorthand, wrap in `@media not
   (prefers-reduced-motion)`. Chrome's scroll-*triggered* animations (`timeline-trigger`) are
   Chrome-only, so we don't rely on them.
7. **Searches with titles only (not read):** Clio's small-firm and solo-attorney website guides,
   Scorpion's "10 common law firm website mistakes", FindLaw's attorney bio advice, NatLawReview
   pieces on essential pages; they repeat the same themes (phone visible, practice-area clarity,
   bios, reviews), so they confirm rather than add.
8. **Not reachable:** the ABA GPSolo "Ethics: advertising through your website" page refused
   automated reading; the r/web_design search returned no threads.

## Inspiration log (source → idea → how we changed / combined it)
| Source | Idea taken | How we changed / combined it |
|---|---|---|
| ABA LPT (Green) | Describe situations in clients' words; FAQs from real calls | A **situation finder**: 7 sentences people actually say ("I was fired after I complained", "They don't pay me for overtime"…). Picking one shows what lawyers call it, what we'd look at first, what to gather now, and how we'd charge. FAQ questions written as callers ask them ("Will my boss find out I called?"). |
| ABA LPT (Green) + GPSolo (Li) | Form confirms and explains next steps; short form | **5-field case review** (name, phone or email, situation, what happened, any date coming up) + preferred callback time. The success state is a 3-step "what happens next" with real timings. |
| GPSolo (Li) | One primary + one secondary CTA; after-hours | Primary "Free case review", secondary "Call (555) 010-0177" only; evening callback slots Tue/Thu as a selectable time. |
| GPSolo (Li) | Practice pages: problem → risks → process → next step | Each situation panel follows that order in 4 short lines, instead of separate long practice-area pages. |
| LexBlog (Hinson) | Bios are read; approachability; know who answers | Bios with "Why I do this" lines and plain focus lists; Bea, the intake coordinator, shown as the first voice you'll hear. |
| PaperStreet trends | Editorial grid, big type, thin rules, restrained palette | Rather than a generic editorial look, the grid borrows from **legal documents themselves**: pleading-paper line numbers and margin rules, a case caption ("You v. …") as the hero, a docket-style timeline, footnote-style sidenotes. Monogram squares instead of their large attorney portraits (PLAYBOOK rule 3). |
| Justia (Andropoulos) | Disclaimers; costs on contingency; no "best/expert" | No-relationship + confidentiality note sits *next to* the form, not in fine print; fee table has a "Costs" row in plain words; copy avoids "best", "expert", "specialist", guarantees; footer names the responsible attorney (fictional). Case notes describe outcomes without dollar amounts + a prior-results note. |
| web.dev / WebKit | Scroll-driven animations are Baseline | Docket timeline rule "draws" as you scroll (`view()`), sidenotes slide in; static fallback under `@supports not` and reduced motion. |
| Typographic tradition (Tufte-style sidenotes) | Notes in the margin beside the text | **Plain-words glossary sidenotes**: every legal term in the copy (retaliation, contingency, statute of limitations, at-will) has a margin note in one sentence. On mobile they become inline toggles. |

## Design direction
- **Mood:** a well-made legal document that happens to be kind. Precise, quiet, readable; the
  confidence comes from typography and clarity, not from gavels, columns or skylines.
- **Media mode: C · Type and color only.** Law is the sector where stock photos (gavels, handshakes,
  courthouse steps) undermine trust and the research says they're in decline; a document-inspired
  typographic design looks more premium. The last two concepts used photography (A), so this also
  varies the gallery.
- **Palette (tokens on `.c-law`):**
  - `--ink` iron-gall ink, blue-black `#141B2D` (text, rules, caption)
  - `--paper` cool bond white `#F6F7F4` (page canvas), `--sheet` `#FFFFFF` (form, table)
  - `--pad` legal-pad yellow `#F4E9A8` (situation result panel and the case review form "pad" only;
    never the page canvas)
  - `--redline` vermilion `#C2361F` (pleading margin rules, § marks, active states; check AA as text,
    darken to `#A82C17` if needed)
  - `--carbon` carbon-copy blue `#2F4BA0` (links, focus rings, sidenote markers)
  - `--rule` `#CDD2D8` (line numbers, table rules); `--muted` `#4A5263` for secondary text
  - Build must verify every text/background pair is AA.
- **Fonts (self-hosted, max 2):**
  - Display: **Bodoni Moda Variable** (`@fontsource-variable/bodoni-moda` 5.3.0, OFL-1.1) — high
    contrast didone, set very large for the caption hero and § headings, italic for "v.".
    Use the optical-size axis (large opsz for display). Never below ~22px.
  - Body/UI: **Public Sans Variable** (`@fontsource-variable/public-sans` 5.3.0, OFL-1.1) — plain,
    civic, very legible; tabular numbers in the fee table and docket.
- **Canvas:** `--paper` with a **pleading-paper margin**: a double vertical `--redline` rule and
  faint line numbers (1–28) in the left gutter of the hero; later sections keep only the double
  rule and the § marks in the margin. Very faint horizontal rules behind the hero caption only.
- **Shapes:** square corners everywhere (documents, not apps), 1px rules, the caption's ")" column,
  § marks. Buttons: rectangular, ink fill; hover slides a redline underline. Monograms: square seals
  with a double border.
- **Motion (CSS first):** hero caption lines type in once (short stagger, `@starting-style`);
  situation panel content swaps with a View Transition (feature-detected; plain swap otherwise);
  docket rule draws with `animation-timeline: view()`; sidenotes fade in from the margin. All of it
  inside `@media not (prefers-reduced-motion)` with a static default.
- **Modern CSS worth using:** CSS grid with named lines for the manuscript grid
  (`[gutter] [text] [notes]`), container queries on the situation panel, `text-wrap: pretty/balance`,
  `:user-invalid` for form errors, `<details name>` exclusive FAQ accordion, `field-sizing: content`
  for the textarea (fallback: fixed rows), `hanging-punctuation` where supported.
- **JS:** small vanilla scripts only (situation finder + "tell us about this" preselect, sidenote
  toggles on mobile, form validation + demo success state). No library. Target < 15 KB.
- **Icons:** none needed; § ¶ † symbols and rules do the work. If any are needed, `lucide-static`
  (ISC), recorded in ASSETS.md.

## Page structure (single page, `/law-firm/`)
1. **Header:** wordmark "Plainstand" (Bodoni) + "Employment lawyers for employees"; text links
   § 1 What happened · § 2 Fees · § 3 How it runs · § 4 People · § 5 Questions; phone as text;
   primary button "Free case review". Mobile: wordmark + phone icon-button + "Case review" button.
2. **Hero (case caption):** H1 set as a caption block on pleading paper:
   "YOU, *the employee*," / ")" column / "*v.*" / "THE COMPANY *that wronged you*." The H1 text
   reads "You v. the company that wronged you." Right of the caption, where a case number would sit:
   "Free 20-minute case review · We call back within one business day · Calls Tue & Thu until 8 pm"
   with the two CTAs. Below: one line: "We only represent employees. Never companies."
3. **§ 1 What happened?** Situation finder: 7 situations as a radio list (left) + result panel on
   `--pad` (right; below on mobile): *What lawyers call it* (with sidenote), *What we'd look at
   first*, *What to gather now* (checklist), *How we'd charge*, *Time matters* ("Some of these claims
   have deadlines measured in months. Asking early costs nothing."; no specific statute periods).
   Button "Tell us about this" → scrolls to the form with the situation preselected.
   Situations: fired after complaining · unpaid overtime/wages · harassed at work · treated worse
   because of who I am · told I'm a contractor but work like an employee · offered a severance
   agreement · a non-compete is stopping me.
4. **§ 2 Fees, plainly:** a real HTML table: what · how we charge · what you pay up front · costs.
   Rows: case review (free), severance review ($450 flat), wage/retaliation/discrimination cases
   (33⅓% contingency, 40% at trial), negotiation coaching ($280/h). A "Costs" note: filing fees and
   records are paid by us as the case runs and repaid from a recovery; if there's no recovery, you
   owe us no fee and no costs (fictional firm policy, written plainly). Glossary sidenote for
   "contingency".
5. **§ 3 How a case runs:** docket-style timeline, 6 numbered entries ("Entry 1 · Day 1 — You tell
   us what happened", "Entry 2 · Week 1 — We read the papers", demand letter, agency charge or
   negotiation, mediation, trial is rare), each with *You do* / *We do* two-line split and an honest
   time range. Rule draws on scroll.
6. **§ 4 The people:** Odile, Kenji (monogram seals, focus list, years, "Why I do this" line,
   direct line) and Bea ("first voice you'll hear; she'll ask five questions, then book you with
   the right lawyer").
7. **§ 5 Case notes (anonymized):** 4 short notes written like file memos ("A warehouse shift lead,
   let go three weeks after reporting a blocked fire exit…" → outcome in words, no dollar figures).
   Prior-results note directly under the heading: "Every case is different. These don't predict
   yours."
8. **§ 6 Questions:** exclusive-accordion FAQ in callers' words: Will my boss find out I called? ·
   Can I afford a lawyer? · I already signed something — is it too late? · Do I need proof? · Can I
   keep working there while this happens? · Do you take cases outside Calder Falls?
9. **Free case review (form on `--pad`):** 5 fields + callback time (morning / afternoon / Tue–Thu
   evening). Beside it, the plain note: "Sending this doesn't make us your lawyers yet, and the form
   isn't a secure channel: give us the outline, not documents." Office address, hours, phone. Demo:
   doesn't send; success state shows "What happens next: 1 · Bea calls you (within one business
   day) 2 · 20 minutes with a lawyer 3 · A written note of your options, free."
10. **Footer:** fictional-brand notice (see above), "Attorney advertising (fictional). Responsible
    attorney: Odile Brennick, Suite 4, 210 Mercer Row, Calder Falls.", fonts credit, "Concept by
    Idrishan Demirdag".

## Primary action
**"Free case review"** → the short form at the end, preselected from the situation finder. It's in
the header on every screen, in the hero, and closes § 1, § 3 and § 6. Secondary: tap-to-call.

## Photos
None (media mode C). No `PHOTOS.md`.

## Layout fingerprint
- hero: case-caption typography ("You, the employee, ) v. ) The company") on pleading paper with
  margin line numbers; no image, no illustration, no search
- nav: thin top bar with §-numbered text links, phone as plain text, rectangular ink button
- sections: hanging marginal headings — red "§ n" + short title in the left gutter beside the text
  column (no eyebrow, no big numerals)
- grid: three-column manuscript grid (gutter | ~66ch text measure | sidenote margin) with Tufte-style
  glossary sidenotes; collapses to one column with inline note toggles
- background: cool bond-white paper with a double red pleading rule; legal-pad yellow only on the
  finder panel and form
- signature: situation finder in clients' own words with plain-words glossary sidenotes; docket-style
  case timeline
- palette: iron-gall blue-black, bond white, redline vermilion, carbon-copy blue (+ legal-pad yellow)
- type: Bodoni Moda (didone display) + Public Sans

### Fingerprint check (vs. every existing concept)
| vs. | similar items | hero / sections / grid differ? |
|---|---|---|
| dental-clinic | none (split hero + arched illustration, eyebrow headings, 12-col card rows, cream, Bricolage + Figtree) | yes / yes / yes |
| restaurant | none (full-viewport photo hero, numbered chapters, split-screen sticky + rails, coal/iznik) | yes / yes / yes |
| real-estate | type, loosely (a serif display + sans) → 1 | yes / yes / yes |
| lumora-bio (external) | background (very light page) and palette (light neutral + accents), arguably → 2 | yes / yes / yes |
| mara-lind (external) | none (video hero, near-black, filter grid) | yes / yes / yes |

Also avoided the "common patterns": no small-caps eyebrow + lead-right, no cream canvas, no
three-card rows, no dark feature band, closing sequence is FAQ → form with office details (no map,
no sticky mobile action bar).
