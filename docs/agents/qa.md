# Step 3 · QA (runs ~19:45 Istanbul, daily)

## Monday–Saturday
1. Read `PLAYBOOK.md` fully, then `src/concepts.js` and every `docs/*/STATUS.md`.
2. Find the concept with step 2 checked and step 3 not. If an earlier step is missing, do it first
   (`research.md`, `build.md`). If nothing needs QA, stop.
3. `npm run status -- qa working <slug> "Reviewing <brand>"`, commit `agent(qa): start <slug>`, push.
4. Run `npm run qa -- <slug>` and open every screenshot (320, 375, 768, 1440). Review like a
   demanding client and a picky designer:
   - Does it look like a real, premium site for this sector? Is the primary action obvious?
   - Is it clearly different from ALL previous concepts? Compare its fingerprint with every
     fingerprint in `docs/*/brief.md` and `docs/external/*.md`, and its screenshots with the
     closest ones (`npm run qa -- <other-slug>`). If the *skeleton* feels the
     same (same heading pattern, same grids, same closing sequence), restructure the sections,
     not just the colors.
   - Spacing, alignment, line lengths, orphaned words in headings, awkward wraps on mobile
   - Copy: specific, believable, no repetition, no typos
   - Hard rules: fictional brand note and badge present; no real brands/people/claims; people in
     photos never presented as staff or reviewers; every external asset listed in `ASSETS.md`
     with a free license and credited in the footer
   - The page looks complete even if the photos/videos in `PHOTOS.md` haven't been added yet
   - Media mode (PLAYBOOK §2): matches the brief; no flat clip-art standing in for photos; videos
     have a poster, a pause control and respect reduced motion; mode C has no stray imagery
5. Fix what you find. Re-run QA until there are no problems. `public/og/<slug>.png` is regenerated.
6. In `STATUS.md`: check step 3 with a summary; fill "Notes for Idrishan" (what's good, what you
   weren't sure about, photos to download if any); write the Upwork portfolio text (max 600
   characters including a `Live demo:` line using SITE_URL from `src/site.js` + `/<slug>/`).
   Verify the length with a script.
7. `npm run status -- qa done <slug> "<one-line summary>"`.
8. `npm run build`, commit `concept(<slug>): qa`, push to `main`.
9. Finish with a short summary: brand, sector, live URL, and anything Idrishan should check.

## Sunday (weekly review, no new concept)
1. `npm run status -- qa working weekly "Weekly review"`, commit and push.
2. Run `npm run qa` for the homepage (`/`) and every concept made this week; fix regressions.
3. Check every hard rule and every license across all concepts.
4. Write `docs/weekly/YYYY-MM-DD.md`: concepts made, issues fixed, photos still missing, ideas
   to improve the playbook (don't change PLAYBOOK.md yourself; propose changes for Idrishan).
5. `npm run status -- qa done weekly "<summary>"`, build, commit `weekly review YYYY-MM-DD`, push.
6. Finish with a short summary.
