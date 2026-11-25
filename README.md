# Concept Sites

A gallery of concept websites by Idrishan Demirdag, built with Astro and Tailwind CSS.
Every brand in this repo is fictional and created for demonstration.

- Gallery homepage: lists approved concepts (`status: "ready"` in `src/concepts.js`)
- Each concept: `/<slug>/`

## Run locally

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build
npm run qa -- dental-clinic   # screenshots + checks + OG image
```

## Approving a concept

Open `src/concepts.js`, change the concept's `status` from `"draft"` to `"ready"`, commit and push.
It then appears on the gallery homepage.

## How concepts are made

See `PLAYBOOK.md` (rules and workflow) and `SECTORS.md` (queue).
