# Step 2 · Build (runs ~14:45 Istanbul, Mon–Sat)

1. Read `PLAYBOOK.md`, `src/concepts.js`, and every `docs/*/STATUS.md`.
2. Find the concept whose step 1 is checked and step 2 is not. If step 1 is missing for today,
   do step 1 first (`docs/agents/research.md`). If nothing needs building, stop.
3. Read its `docs/<slug>/brief.md`. Look at `src/pages/dental-clinic/` and
   `src/concepts/dental-clinic/` as the reference for structure (content.js + Icon + styles.css with
   tokens on a wrapper class + page), but give this concept its own visual identity.
4. Install the fonts it needs from `@fontsource-variable/*` (check `npm view` first).
5. Build `src/pages/<slug>/index.astro` and `src/concepts/<slug>/` following the brief and the
   design standard in the playbook. All copy realistic and specific, no placeholders.
6. Run `npm run qa -- <slug>`. Look at the screenshots in `qa-output/<slug>/` (open the PNGs)
   and fix anything that looks broken or unpolished. Repeat until the report has no problems.
7. Update `STATUS.md`: check step 2 with a one-line summary.
8. `npm run build`, commit `concept(<slug>): build`, push to `main`.
