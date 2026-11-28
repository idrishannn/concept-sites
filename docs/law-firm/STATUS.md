# Plainstand (law firm)
slug: law-firm
- [x] 1 Research  (2026-11-28 09:50) – brief written: worker-side employment law practice (3 people, fictional Calder Falls); case-caption hero ("You v. the company that wronged you") on pleading paper, situation finder in clients' own words with plain-words glossary sidenotes, plain fee table with costs disclosed, docket-style case timeline, 5-field case review form; media mode C (type & color only); Bodoni Moda + Public Sans, ink/bond white/redline/carbon blue + legal-pad yellow
- [x] 2 Build  (2026-11-28 15:00) – single page built: case-caption hero on pleading paper (line numbers, ")" column, case review box), hanging § headings in a 3-column manuscript grid with 5 Tufte-style glossary sidenotes (inline toggles below 1100px), situation finder (7 sentences → legal-pad panel, View Transition), fee table + costs note + worked example, docket timeline with scroll-drawn rule, signature-block people with monogram seals, file-memo case notes, exclusive FAQ, 5-field case review form on a legal pad with demo success state; no library, one small script; `npm run qa` clean (0 problems, 0 axe) at 320/375/768/1440
- [x] 3 QA  (2026-11-28 19:55) – reviewed 320/375/768/1440 plus 1024 viewport, the situation finder → form preselect and the form's success state (no console errors); `npm run qa` clean (0 problems, 0 axe); fixed file number "25-012" breaking across lines at 320px, "8 pm" splitting in the hero card and office block, the hero eyebrow's "·" orphaning at line end on phones, and trimmed select padding so more of the chosen sentence shows; fingerprint differs from every earlier concept (case-caption hero, hanging § headings, manuscript grid); OG image regenerated
## Notes for Idrishan
- Brand "Plainstand": only a video-game item uses the word; no law firm or legal product. Rejected "Fennick & Orme" (real lawyers named Orme).
- No photos (mode C), so nothing to download for this one.
- QA: strongest parts are the case-caption hero, the situation finder (click a sentence → legal-pad panel → "Tell us about this" preselects it in the form) and the fee table + worked example. Worth trying the finder and the form on your phone.
- QA, unsure: between 768 and 1240px the header has no § links (wordmark + phone + button only). It's a single page, so I left it; say if you want a compact "Contents" menu there.
- QA, unsure: on narrow phones the closed "Closest to what happened" dropdown still cuts long sentences (native select; the phone's picker shows the full text). Kept the 16px font so iOS doesn't zoom on focus.
- Content follows lawyer-advertising norms on purpose (no "best"/"expert", no awards or bar badges, contingency costs disclosed, no-relationship note beside the form, case notes without dollar figures) — a good talking point for law-firm clients.
## Portfolio text (Upwork, max 600 characters)
Plainstand – website concept for a small employment law practice that only represents employees. Type-led design, no stock photos: the hero reads like a court case caption ("You v. the company that wronged you"). Visitors pick their situation in their own words and see the legal term, what to gather and the fee. Plain fee table with a worked example, docket-style case timeline, glossary sidenotes and a 5-field case review form. Astro, fast and accessible (axe clean).
Live demo: https://concept-sites-drab.vercel.app/law-firm/
## Issues / follow-ups
- Build: header § links show from 1240px up; below that the header is wordmark + phone + "Free case review" (single page, so no menu). QA may want to judge whether a compact § menu is worth adding on tablets.
- Build: legal-pad ruled lines don't align with text baselines (decorative); kept faint on purpose.
- ABA GPSolo "Ethics: advertising through your website" refused automated reading; the r/web_design search returned no threads. Research used the other sources listed in the brief.

### 2026-11-28 · revision after Idrishan's review (still draft, not approved)
- Hero: removed pleading-paper line numbers, the ")" column and the EMPLOYEE/EMPLOYER labels; "You v. the company" now set large on a dark ink block with the case review card beside it.
- Bodoni only for large type (hero, section titles, wordmark); all small display text moved to Public Sans for readability.
- Removed the left gutter column and the double red margin rule (also fixes the red lines on phones); section titles now sit large above each section.
- Case notes section is a second dark ink block for rhythm.
- Waiting: Idrishan wants to talk before deciding on the gallery.
