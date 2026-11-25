// Quality check for one concept page.
// Usage: npm run qa -- <slug>         (e.g. npm run qa -- dental-clinic)
//        npm run qa -- /              (the gallery homepage)
//
// What it does:
// 1. Builds the site and serves it with `astro preview`.
// 2. Opens the page in Chrome at 320, 375, 768 and 1440px wide.
// 3. Saves full-page screenshots to qa-output/<slug>/ (not committed).
// 4. Checks: console errors, failed requests, horizontal overflow,
//    leftover placeholder text, missing alt text, axe accessibility (WCAG A/AA).
// 5. Renders public/og/<slug>.png (1200x630) from the top of the page.
// 6. Prints a JSON report and exits 1 if there are blocking problems.

import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { spawn, execSync } from "node:child_process";
import { mkdirSync, existsSync, writeFileSync } from "node:fs";

const arg = process.argv[2] || "/";
const slug = arg === "/" ? "home" : arg.replace(/^\/|\/$/g, "");
const path = arg === "/" ? "/" : `/${slug}/`;
const PORT = 4329;
const BASE = `http://localhost:${PORT}`;
const outDir = `qa-output/${slug}`;
mkdirSync(outDir, { recursive: true });
mkdirSync("public/og", { recursive: true });

const CHROME = ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].find((p) =>
  existsSync(p),
);

console.log("Building…");
execSync("npx astro build", { stdio: "inherit" });

const server = spawn("npx", ["astro", "preview", "--port", String(PORT)], { stdio: "pipe" });
await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error("preview server did not start")), 30000);
  server.stdout.on("data", (d) => {
    if (String(d).includes(String(PORT))) {
      clearTimeout(t);
      resolve();
    }
  });
});

const report = { page: path, problems: [], warnings: [], screenshots: [], axe: [] };
const browser = await chromium.launch(CHROME ? { executablePath: CHROME } : {});

try {
  for (const width of [320, 375, 768, 1440]) {
    const ctx = await browser.newContext({
      viewport: { width, height: width < 800 ? 800 : 900 },
      deviceScaleFactor: 1,
      isMobile: width < 800,
      hasTouch: width < 800,
    });
    const page = await ctx.newPage();
    const consoleErrors = [];
    const failed = [];
    page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
    page.on("pageerror", (e) => consoleErrors.push(String(e)));
    page.on("requestfailed", (r) => failed.push(r.url()));

    const res = await page.goto(BASE + path, { waitUntil: "networkidle" });
    if (!res || res.status() >= 400) report.problems.push(`${width}px: page returned ${res?.status()}`);
    await page.waitForTimeout(800);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (overflow > 1) report.problems.push(`${width}px: horizontal overflow of ${overflow}px`);
    if (consoleErrors.length) report.problems.push(`${width}px: console errors: ${consoleErrors.join(" | ")}`);
    if (failed.length) report.problems.push(`${width}px: failed requests: ${failed.join(", ")}`);

    const file = `${outDir}/${width}.png`;
    await page.screenshot({ path: file, fullPage: true });
    report.screenshots.push(file);

    if (width === 1440) {
      const text = await page.evaluate(() => document.body.innerText);
      const placeholders = text.match(/lorem ipsum|TODO|TBD|example\.com|\[.*?link.*?\]|placeholder/gi);
      if (placeholders) report.problems.push(`placeholder text found: ${[...new Set(placeholders)].join(", ")}`);

      const noAlt = await page.$$eval("img:not([alt])", (els) => els.length);
      if (noAlt) report.problems.push(`${noAlt} image(s) without alt attribute`);

      const meta = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        h1: document.querySelectorAll("h1").length,
      }));
      if (!meta.title) report.problems.push("missing <title>");
      if (!meta.description) report.problems.push("missing meta description");
      if (meta.h1 !== 1) report.warnings.push(`page has ${meta.h1} <h1> elements (expected 1)`);

      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      for (const v of axe.violations) {
        const where = v.nodes
          .slice(0, 6)
          .map((n) => n.target.join(" ") + (n.any[0]?.data?.contrastRatio ? ` [${n.any[0].data.contrastRatio}:1]` : ""))
          .join("; ");
        const entry = `${v.impact}: ${v.id} (${v.nodes.length}) ${v.help} → ${where}`;
        report.axe.push(entry);
        if (v.impact === "serious" || v.impact === "critical") report.problems.push(`axe ${entry}`);
        else report.warnings.push(`axe ${entry}`);
      }
    }
    await ctx.close();
  }

  // OG image from the top of the page at 1200x630
  const og = await browser.newContext({ viewport: { width: 1200, height: 630 } });
  const ogPage = await og.newPage();
  await ogPage.goto(BASE + path, { waitUntil: "networkidle" });
  await ogPage.addStyleTag({ content: ".concept-badge,.skip-link{display:none!important}" });
  await ogPage.waitForTimeout(1200);
  await ogPage.screenshot({ path: `public/og/${slug === "home" ? "default" : slug}.png` });
  await og.close();
} finally {
  await browser.close();
  server.kill();
}

writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.problems.length ? 1 : 0);
