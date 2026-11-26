# Brief: Tessaly Dental Studio (dental clinic)

slug: `dental-clinic` · researched 2026-11-25 (manual test run)

## Brand (fictional)
- **Name:** Tessaly Dental Studio. Checked: no exact-match dental practice found. ("Brightwell" was
  rejected: a Framer dental template and another demo already use it.)
- **Positioning:** a modern neighborhood practice for adults and families, built around nervous
  patients and upfront prices.
- **Location (fictional):** 214 Alder Street, Portland. Phone +1 (555) 010-0142.

## What the research says patients need
Sources skimmed: dental website guides and "best dental websites 2026" roundups
(WhitehatSEO, UENI, Delmain, Magier, MySocialPractice, WebFX, HubSpot).
1. A visitor must answer three questions in seconds: *Can I trust them? Do they treat my problem?
   How easily can I book?*
2. Most traffic is mobile (60–70%+): sticky call/book actions on mobile, fast load.
3. The most common failure: elegant sites that hide prices and availability. **Show prices.**
4. Navigate by the patient's problem ("I have tooth pain"), not clinical service names.
5. "Digital anesthetic": calm visuals and reassuring copy for anxious patients.
6. Explain the first visit step by step to remove uncertainty.

## Inspiration (ideas only, not copied)
- Problem-first navigation tiles (seen across several top practices) → our "What brings you in?"
- Transparent price lists for self-pay patients → our price table plus a membership plan
- Calm, spa-like visual language used by premium studios → our warm sand + spruce palette
- Online booking flows → our 3-step booking widget (demo only, no data sent)

## Design direction
- **Palette (tokens on `.c-dental`):** warm sand background, spruce green-blue ink,
  peach accent for actions, soft sage surfaces. Deliberately *not* the clichéd clinical blue/white,
  and different from the gallery's cream + green and Lumora's light minimal look.
- **Type:** Bricolage Grotesque (display, friendly but confident) + Figtree (body, highly legible).
- **Shapes:** soft arches (echoing a smile/tooth) in SVG, rounded cards, generous spacing.
- **Motion:** gentle floating hero shapes, scroll-driven reveals (CSS `animation-timeline: view()`
  with fallback), micro-interactions on tiles and buttons. All off with reduced motion.

## Page structure (single page)
1. Sticky header: logo, nav, click-to-call, "Book a visit". Mobile: menu + bottom action bar (Call / Book).
2. Hero: "Dentistry that feels like a deep breath." + Book / See prices + 3 reassurance points.
3. What brings you in? (6 problem tiles with "from" price)
4. For nervous patients: 4 calm-care promises.
5. Prices: clear list + "Tessaly Care" membership for uninsured patients ($29/month).
6. Your first visit: 4 steps.
7. Team: 4 fictional clinicians, initials avatars.
8. Patient stories: 3 fictional testimonials (first name + initial).
9. Book a visit: 3-step widget (reason → day → time → summary). Demo: shows confirmation, sends nothing.
10. Visit us: hours, address, stylized SVG map, parking/transit notes.
11. FAQ (insurance, emergencies, kids, payment plans).
12. Footer with fictional-brand note.

## Primary action
**Book a visit** (secondary: call).

## Layout fingerprint
- hero: split, big headline left + arched SVG illustration right
- nav: sticky translucent bar, phone + pill CTA
- sections: small-caps eyebrow, big heading left, lead paragraph right
- grid: 12-col centered wrap; 3- and 4-card rows
- background: warm cream/sand
- signature: problem-first treatment tiles with "from" prices; 3-step booking chips
- palette: sand, spruce green-blue, peach
- type: Bricolage Grotesque + Figtree
