// Plainstand: the page's only script. Situation finder, sidenote toggles, demo form.
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function swap(update) {
  if (document.startViewTransition && !reduce()) document.startViewTransition(update);
  else update();
}

export function initLaw() {
  const root = document.querySelector(".c-law");
  if (!root) return;

  // § 1 situation finder
  const finder = root.querySelector("[data-finder]");
  if (finder) {
    const panels = [...finder.querySelectorAll("[data-panel]")];
    finder.addEventListener("change", (e) => {
      const input = e.target;
      if (!(input instanceof HTMLInputElement) || input.name !== "situation-pick") return;
      swap(() => {
        finder.dataset.active = input.value;
        panels.forEach((p) => (p.hidden = p.dataset.panel !== input.value));
      });
    });
  }

  // "Tell us about this" preselects the situation in the form
  const select = root.querySelector("#f-situation");
  root.querySelectorAll("[data-prefill]").forEach((link) =>
    link.addEventListener("click", () => {
      if (select) select.value = link.dataset.prefill;
    }),
  );

  // Glossary sidenotes: toggles on narrow screens
  root.querySelectorAll(".sn-toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const note = document.getElementById(btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      note?.classList.toggle("open", open);
    }),
  );

  // Case review form (demo: nothing is sent)
  const form = root.querySelector("[data-form]");
  const done = root.querySelector("[data-done]");
  if (form && done) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const first = String(new FormData(form).get("name") || "").trim().split(/\s+/)[0];
      done.querySelector("[data-name]").textContent = first ? `, ${first}` : "";
      swap(() => {
        form.hidden = true;
        done.hidden = false;
      });
      done.focus({ preventScroll: true });
      done.scrollIntoView({ block: "center", behavior: reduce() ? "auto" : "smooth" });
    });
    done.querySelector("[data-again]")?.addEventListener("click", () => {
      form.reset();
      done.hidden = true;
      form.hidden = false;
      form.querySelector("input")?.focus();
    });
  }
}
