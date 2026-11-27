# Step 2 · Build (runs ~14:45 Istanbul, Mon–Sat)

1. Read `PLAYBOOK.md` fully, then `src/concepts.js` and every `docs/*/STATUS.md`.
2. Find the concept whose step 1 is checked and step 2 is not. If no brief exists for today,
   do step 1 first (`docs/agents/research.md`). If nothing needs building, stop.
3. `npm run status -- build working <slug> "Building <brand>"`, commit `agent(build): start <slug>`, push.
4. Read `docs/<slug>/brief.md` (and `PHOTOS.md` if present). The brief's design direction and
   layout fingerprint decide the visual layout. Other concepts are NOT a visual reference: only
   reuse their *code organisation* (content file + icons + styles with tokens on a wrapper class).
   Do not copy their section-heading pattern, card grids, closing sequence or page background.
5. If the brief names an open-source template, check its license, then use it as a starting
   structure and change the design substantially. Record it in `docs/<slug>/ASSETS.md`.
6. Install the fonts and libraries it needs from npm (check `npm view <pkg> version` and the
   license first). Record any non-trivial library, illustration set or animation in `ASSETS.md`.
7. Build `src/pages/<slug>/index.astro` and `src/concepts/<slug>/` following the brief and the
   design standard. Realistic, specific copy; no placeholders. Follow the brief's media mode
   (PLAYBOOK §2 "Media choice"). For planned photos/videos, render the `<img>`/`<video>` only if
   the file exists; otherwise an abstract, designed placeholder (never clip-art of the subject).
   Videos: poster, muted/playsinline, pause control, no autoplay under reduced motion. Mode C:
   no photos or illustrations at all; carry the design with type, color blocks and layout.
   Credit external assets in the footer next to the fictional-brand note.
8. Run `npm run qa -- <slug>`. Open the screenshots in `qa-output/<slug>/` and fix anything that
   looks broken or unpolished. Repeat until the report has no problems.
9. Update `STATUS.md`: check step 2 with a one-line summary.
10. `npm run status -- build done <slug> "<one-line summary>"`.
11. `npm run build`, commit `concept(<slug>): build`, push to `main`.
