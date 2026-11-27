# Tillwick (Real estate agent)
slug: real-estate
- [x] 1 Research  (2026-11-27 09:55) – brief written: two-agent neighbourhood team for a fictional district (5 neighbourhoods); sentence-style search hero, Buying/Selling switch, bento listings, 3-step value range estimator, street notes with SVG map, sold ledger; Newsreader + Geist, plum-ink/concrete/chartreuse/terracotta
- [x] 2 Build  (2026-11-27 14:58) – single page built: sentence-search hero (live filter + count), Buying/Selling switch with View Transition, bento listings with SVG façades + anchored quick-facts popovers, 3-step value range estimator with comps, street-notes tabs + custom Eastside map, sold ledger with % toggle, review wall, contact + FAQ; qa clean at 320/375/768/1440
- [x] 3 QA  (2026-11-27 19:55) – reviewed 320/375/768/1440 screenshots plus Selling mode, quick-facts popover and the full estimator flow (no console errors); `npm run qa` clean (0 problems, 0 axe); fixed a doubled ~220px gap between "How we work" and the reviews (same canvas, no divider); balanced the hero kicker so "street." no longer orphans at 320px; OG image regenerated
## Notes for Idrishan
- 5 Unsplash photos listed in `PHOTOS.md` for the listing tiles (page works without them).
- Brand "Tillwick": no real agency found under that name. Rejected "Larkfield Homes" and "Halcy Row".
- Listing tiles show SVG façade drawings until the 5 Unsplash photos in `PHOTOS.md` are downloaded; footer adds "Photos: Unsplash" automatically once any exists.
- No JS library: ~one small vanilla script. Estimator is clearly labelled as a demo.
- QA: worth a look yourself: switch the header to **Selling** (the hero re-writes itself as "I want to sell a 3-bed rowhouse in Kilnworth") and run the value estimator to the result; those are the two moments to show a client.
- QA: numbers are consistent across the page (fee 1.75% + tax, ferry times, reviews match ledger sales such as "sold in nine days" = 18 Reedbed Close).
- QA: on mobile the sticky header has two rows (logo + CTA, then the Buying/Selling switch), ~120px. Intentional, but tell me if it feels too tall.
- Photos to download (optional): the 5 Unsplash photos in `PHOTOS.md` → `public/photos/real-estate/listing-1.jpg` … `listing-5.jpg`.
## Portfolio text (Upwork, max 600 characters)
Concept site for Tillwick, a fictional two-agent estate agency, built around how people really search for homes: a sentence-style search (“I'm looking to buy a 3-bed in…”) with a live match count, a Buying/Selling switch that re-voices the whole page, a 3-step home value estimator that shows the sales it's based on, street-by-street neighbourhood guides with a custom map, and a ledger of recent sales with a % over asking toggle. Custom SVG illustrations, responsive and accessible (WCAG AA). Built with Astro.
Live demo: https://concept-sites-drab.vercel.app/real-estate/
## Issues / follow-ups
- Upwork job pages and REW.ca refused automated reading; the r/web_design search returned no threads. Research used the other sources listed in the brief.

### 2026-11-27 · fixes after Idrishan's review
- Buying/Selling switch no longer jumps when scrolled (View Transition removed; text fades in place).
- Desktop hero: right-side card (Just listed / latest sale, follows the switch).
- Reviews trimmed from 12 to 6.
- Phones: one-row header; concept badge moved into the hero's top padding (no longer covers the figures).
- Waiting on: the 5 listing photos (`PHOTOS.md`). The hero card uses `listing-1.jpg` automatically.
