// Tillwick: small vanilla scripts for the sentence search, the Buying/Selling switch,
// the value range estimator, the street-notes tabs, the sold ledger toggle and demo forms.

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");
const fmtK = (n) => (n >= 1e6 ? "$" + (n / 1e6).toFixed(2).replace(/0$/, "") + "m" : "$" + Math.round(n / 1000) + "k");

export function initEstate() {
  const root = $(".c-estate");
  if (!root) return;
  const data = JSON.parse($("#estate-data").textContent);

  sizeWords(root);
  audience(root);
  search(root, data);
  estimator(root, data);
  tabs(root);
  ledger(root);
  demoForms(root);
}

/* Sentence selects: shrink each select to its chosen word (fallback where field-sizing isn't supported). */
function sizeWords(root) {
  if (CSS.supports("field-sizing", "content")) return;
  const probe = document.createElement("span");
  probe.className = "word word-probe";
  probe.setAttribute("aria-hidden", "true");
  root.append(probe);
  const fit = (sel) => {
    probe.textContent = sel.options[sel.selectedIndex]?.text ?? "";
    sel.style.width = Math.ceil(probe.getBoundingClientRect().width + 34) + "px";
  };
  const all = $$(".sentence .word", root);
  const fitAll = () => all.forEach(fit);
  all.forEach((s) => s.addEventListener("change", () => fit(s)));
  document.fonts?.ready.then(fitAll);
  fitAll();
  window.addEventListener("resize", fitAll, { passive: true });
}

function roll(el) {
  if (reduceMotion()) return;
  el.classList.remove("is-rolling");
  void el.offsetWidth;
  el.classList.add("is-rolling");
}

/* Buying / Selling switch: re-voices the page. */
function audience(root) {
  const btns = $$("[data-set-audience]", root);
  const intent = $("[data-intent]", root);
  const set = (mode, { focus = false } = {}) => {
    if (root.dataset.audience === mode) return;
    const apply = () => {
      root.dataset.audience = mode;
      btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setAudience === mode)));
      if (intent) intent.value = "buy";
      $$("[data-side]", root).forEach((r) => (r.checked = r.dataset.side === mode));
      if (focus) $(mode === "sell" ? "#v-beds-s" : "#s-beds", root)?.focus({ preventScroll: true });
    };
    if (document.startViewTransition && !reduceMotion()) document.startViewTransition(apply);
    else apply();
  };
  btns.forEach((b) => b.addEventListener("click", () => set(b.dataset.setAudience)));
  intent?.addEventListener("change", () => intent.value === "sell" && set("sell", { focus: true }));
  root._setAudience = set;
}

/* Hero search sentence: filters the bento and updates the live count. */
function search(root, data) {
  const form = $("#search", root);
  const tiles = $$("[data-listing]", root);
  const empty = $("[data-empty]", root);
  const reset = $("[data-reset]", root);
  const count = $("[data-count]", root);
  const countWord = $("[data-count-word]", root);
  const countLabel = $("[data-count-label]", root);
  const what = $("[data-empty-what]", root);
  const beds = form.elements.beds;
  const hood = form.elements.hood;
  const price = form.elements.price;

  const run = () => {
    const b = Number(beds.value);
    const h = hood.value;
    const p = Number(price.value);
    let n = 0;
    tiles.forEach((t) => {
      const ok =
        Number(t.dataset.beds) >= b && (h === "all" || t.dataset.hood === h) && (p === 0 || Number(t.dataset.price) <= p);
      t.hidden = !ok;
      if (ok) n++;
    });
    const filtered = b !== 0 || h !== "all" || p !== 0;
    count.textContent = String(n);
    countWord.textContent = n === 1 ? "home matches" : "homes match";
    countLabel.textContent = n === 0 ? "Tell us what you're after" : `Show ${n} ${n === 1 ? "home" : "homes"}`;
    empty.hidden = n !== 0;
    reset.hidden = !filtered;
    if (what) {
      const bits = [beds.options[beds.selectedIndex].text, "in " + hood.options[hood.selectedIndex].text];
      if (p) bits.push("up to " + fmtK(p));
      what.value = bits.join(" ");
    }
    roll(count);
  };

  [beds, hood, price].forEach((s) =>
    s.addEventListener("change", () => {
      roll(s);
      run();
    }),
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    $("#homes", root).scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth" });
  });
  reset.addEventListener("click", () => {
    beds.value = "0";
    hood.value = "all";
    price.value = "0";
    run();
  });
  run();
}

/* Value range estimator: 3 steps → range + comps → written valuation form. */
function estimator(root, data) {
  const est = $("[data-est]", root);
  const steps = $$("[data-step]", est);
  const dots = $$("[data-step-dot]", est);
  const next = $("[data-est-next]", est);
  const back = $("[data-est-back]", est);
  const street = $("#v-street", est);
  const hoodSel = $("#v-hood", est);
  let step = 1;

  const show = (n, { focus = true } = {}) => {
    step = n;
    steps.forEach((s) => (s.hidden = Number(s.dataset.step) !== n));
    dots.forEach((d) => {
      const k = Number(d.dataset.stepDot);
      d.classList.toggle("is-on", k <= Math.min(n, 3));
      if (k === Math.min(n, 3) && n < 4) d.setAttribute("aria-current", "step");
      else d.removeAttribute("aria-current");
    });
    back.hidden = n === 1;
    next.hidden = n === 4;
    next.innerHTML = (n === 3 ? "See my value range" : "Next") + ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    if (n === 4) {
      compute();
      $(".est-result", est).focus({ preventScroll: true });
    } else if (focus) {
      const first = $(`[data-step="${n}"] input, [data-step="${n}"] select`, est);
      first?.focus({ preventScroll: true });
    }
  };

  const radio = (name) => $(`input[name="${name}"]:checked`, est)?.value;

  const compute = () => {
    const hood = data.hoods.find((h) => h.id === hoodSel.value);
    const type = data.types.find((t) => t.id === radio("type"));
    const beds = Number(radio("beds"));
    const cond = data.conditions.find((c) => c.id === radio("cond"));
    const mid = hood.pricePerSqft * data.sqftByBeds[beds] * type.factor * cond.factor;
    const round = (n) => Math.round(n / 5000) * 5000;
    const low = round(mid * 0.96);
    const high = round(mid * 1.04);
    $("[data-res-where]", est).textContent = `a ${beds}-bed ${type.label} on ${street.value.trim()}, ${hood.name}`;
    $("[data-res-low]", est).textContent = fmtK(low);
    $("[data-res-high]", est).textContent = fmtK(high);
    $("[data-res-mid]", est).textContent = fmt(round(mid));
    // position on a $300k–$1m scale
    const pos = (v) => Math.max(0, Math.min(100, ((v - 300000) / 700000) * 100));
    const bar = $("[data-res-bar]", est);
    bar.style.setProperty("--from", pos(low) + "%");
    bar.style.setProperty("--to", pos(high) + "%");

    // comps: same neighbourhood first, then closest bedroom count elsewhere
    const score = (s) => (s.hood === hood.id ? 0 : 10) + Math.abs(s.beds - beds) + (s.type === type.id ? 0 : 0.5);
    const comps = [...data.sold].sort((a, b) => score(a) - score(b)).slice(0, 3);
    const list = $("[data-comps]", est);
    list.replaceChildren(
      ...comps.map((c) => {
        const li = document.createElement("li");
        const a = document.createElement("span");
        a.className = "comp-addr";
        a.textContent = c.address;
        const m = document.createElement("span");
        m.className = "comp-meta";
        m.textContent = `${c.beds}-bed ${c.typeLabel}, ${c.hoodName} · ${c.month}`;
        const p = document.createElement("span");
        p.className = "comp-price";
        p.textContent = fmt(c.sold);
        li.append(a, m, p);
        return li;
      }),
    );
  };

  next.addEventListener("click", () => {
    if (step === 1) {
      if (street.value.trim().length < 3) {
        street.classList.add("is-invalid");
        street.setAttribute("aria-invalid", "true");
        street.focus();
        return;
      }
      street.classList.remove("is-invalid");
      street.removeAttribute("aria-invalid");
    }
    show(step + 1);
  });
  back.addEventListener("click", () => show(step - 1));
  street.addEventListener("input", () => {
    if (street.value.trim().length >= 3) {
      street.classList.remove("is-invalid");
      street.removeAttribute("aria-invalid");
    }
  });
  street.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      next.click();
    }
  });

  // Hero "sell" sentence pre-fills the estimator
  const sell = $("#sell-sentence", root);
  sell.addEventListener("submit", (e) => {
    e.preventDefault();
    hoodSel.value = sell.elements.hood.value;
    const t = $(`input[name="type"][value="${sell.elements.type.value}"]`, est);
    const b = $(`input[name="beds"][value="${sell.elements.beds.value}"]`, est);
    if (t) t.checked = true;
    if (b) b.checked = true;
    show(1, { focus: false });
    $("#value", root).scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth" });
    setTimeout(() => street.focus({ preventScroll: true }), reduceMotion() ? 0 : 500);
  });
  $$("select", sell).forEach((s) => s.addEventListener("change", () => roll(s)));
}

/* Street notes tabs + map highlight. */
function tabs(root) {
  const tabs = $$("[role=tab]", root);
  const map = $("[data-map]", root);
  const select = (tab, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      $("#" + t.getAttribute("aria-controls"), root).hidden = !on;
    });
    $$(".emap-hood", map).forEach((g) => g.classList.toggle("is-on", g.dataset.hood === tab.dataset.tab));
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", (e) => {
      const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (k) {
        e.preventDefault();
        select(tabs[(i + k + tabs.length) % tabs.length], true);
      } else if (e.key === "Home") {
        e.preventDefault();
        select(tabs[0], true);
      } else if (e.key === "End") {
        e.preventDefault();
        select(tabs[tabs.length - 1], true);
      }
    });
  });
  // clicking a neighbourhood on the map selects its tab
  $$(".emap-hood", map).forEach((g) =>
    g.addEventListener("click", () => select(tabs.find((t) => t.dataset.tab === g.dataset.hood))),
  );
  select(tabs[0]);
}

/* Sold ledger: show / hide the "% over asking" column. */
function ledger(root) {
  const btn = $("[data-pct-toggle]", root);
  const table = $("[data-ledger]", root);
  btn.addEventListener("click", () => {
    const on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", String(on));
    table.classList.toggle("show-pct", on);
  });
}

/* Demo forms: validate after interaction, then confirm nothing was sent. */
function demoForms(root) {
  $$("[data-demo-form]", root).forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!f.checkValidity()) {
        f.classList.add("was-submitted");
        $(":invalid", f)?.focus();
        return;
      }
      const done = $(".form-done", f);
      done.hidden = false;
      $$("input, textarea, button", f).forEach((el) => {
        if (el.type !== "radio") el.disabled = true;
      });
    });
  });
}
