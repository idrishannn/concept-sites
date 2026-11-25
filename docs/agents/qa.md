# Step 3 · QA (runs ~19:45 Istanbul, daily)

## Monday–Saturday
1. Read `PLAYBOOK.md`, `src/concepts.js`, and every `docs/*/STATUS.md`.
2. Find the concept with step 2 checked and step 3 not. If an earlier step is missing, do it first
   (`research.md`, `build.md`). If nothing needs QA, stop.
3. Run `npm run qa -- <slug>` and open every screenshot (320, 375, 768, 1440). Review like a
   demanding client and a picky designer:
   - Does it look like a real, premium site for this sector? Is the primary action obvious?
   - Spacing, alignment, line lengths, orphaned words in headings, awkward wraps on mobile
   - Copy: specific, believable, no repetition, no typos, fictional-brand note present
   - Hard rules from the playbook (no real brands/people/claims, badge visible)
4. Fix what you find. Re-run QA until there are no problems. `public/og/<slug>.png` is regenerated.
5. In `STATUS.md`: check step 3 with a summary; fill "Notes for Idrishan" (what's good, what you
   weren't sure about); write the Upwork portfolio text (max 600 characters including a
   `Live demo:` line using SITE_URL from `src/site.js` + `/<slug>/`). Verify the length with a script.
6. `npm run build`, commit `concept(<slug>): qa`, push to `main`.
7. Finish with a short summary: brand, sector, live URL, and anything Idrishan should check.

## Sunday (weekly review, no new concept)
1. Run `npm run qa` for the homepage and every concept made this week; fix regressions.
2. Check every hard rule across all concepts.
3. Write `docs/weekly/YYYY-MM-DD.md`: concepts made, issues fixed, ideas to improve the playbook
   (don't change PLAYBOOK.md yourself; propose changes there for Idrishan).
4. Build, commit `weekly review YYYY-MM-DD`, push. Finish with a short summary.
