// Registry of every concept site.
// - Add one entry per concept when its build starts.
// - status "draft": page is live at its URL but NOT listed on the gallery homepage.
// - status "ready": approved by Idrishan, listed on the gallery homepage.
// - Only Idrishan approves; agents never set status to "ready" on their own.
// - external: true for concepts hosted elsewhere (url instead of slug).

export const concepts = [
  {
    slug: "real-estate",
    brand: "Tillwick",
    sector: "Real estate agent",
    summary: "Neighbourhood estate agents: sentence-style home search, buying/selling switch, value range estimator and street-by-street guides.",
    status: "draft",
    date: "2026-11-27",
  },
  {
    slug: "restaurant",
    brand: "Sumakara",
    sector: "Restaurant / café",
    summary: "Anatolian charcoal grill & meze house: HTML menu with dietary filters, reservations and private dining.",
    status: "ready",
    date: "2026-11-26",
  },
  {
    slug: "dental-clinic",
    brand: "Tessaly Dental Studio",
    sector: "Dental clinic",
    summary: "Calm, trustworthy clinic site with services, team, pricing clarity and online booking CTA.",
    status: "ready",
    date: "2026-11-25",
  },
  {
    external: true,
    url: "https://lumora-bio.vercel.app",
    brand: "Lumora Bio",
    sector: "Biotech startup",
    summary: "Minimal, light landing page for a science company: mission, pipeline, team and contact.",
    status: "ready",
    date: "2026-11-21",
  },
  {
    external: true,
    url: "https://mara-lind.vercel.app",
    brand: "Mara Lind",
    sector: "Video editor portfolio",
    summary: "Dark portfolio with an instant autoplay showreel, filterable work grid and video lightbox.",
    status: "ready",
    date: "2026-11-20",
  },
];

export const listed = concepts
  .filter((c) => c.status === "ready")
  .sort((a, b) => (a.date < b.date ? 1 : -1));
