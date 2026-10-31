/* ==========================================================================
   Thornton's Roofing — homepage behaviour
   ========================================================================== */

// PLACEHOLDER: replace with real details before launch
// Every contact detail on the page lives here. The same values are also
// hard-coded in index.html (search for "PLACEHOLDER CONTACT") so they show
// without JavaScript; update both.
const CONFIG = {
  PHONE: "01632 960 123", // PLACEHOLDER: Ofcom fictional range
  PHONE_LINK: "tel:+441632960123", // PLACEHOLDER
  MOBILE: "07700 900 123", // PLACEHOLDER: Ofcom fictional range
  MOBILE_LINK: "tel:+447700900123", // PLACEHOLDER
  EMAIL: "info@thorntonsroofing.co.uk", // PLACEHOLDER
  HOURS: {
    WEEKDAY: "Mon–Fri 8:00am–5:30pm", // PLACEHOLDER
    SATURDAY: "Sat 8:00am–12:00pm", // PLACEHOLDER
  },
  // TODO: set to your form service URL (e.g. "https://formspree.io/f/your-form-id").
  // While empty, the form validates but nothing is sent; a notice is logged to the console.
  FORM_ENDPOINT: "",
};

(function () {
  "use strict";

  const doc = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Contact details from CONFIG ---------- */
  const contactText = {
    phone: CONFIG.PHONE,
    mobile: CONFIG.MOBILE,
    email: CONFIG.EMAIL,
    "hours-weekday": CONFIG.HOURS.WEEKDAY,
    "hours-saturday": CONFIG.HOURS.SATURDAY,
  };
  const contactHref = {
    "phone-link": CONFIG.PHONE_LINK,
    "mobile-link": CONFIG.MOBILE_LINK,
    "email-link": "mailto:" + CONFIG.EMAIL,
  };
  document.querySelectorAll("[data-contact]").forEach((el) => {
    const key = el.dataset.contact;
    if (key in contactText) el.textContent = contactText[key];
    if (key in contactHref) el.setAttribute("href", contactHref[key]);
  });

  const setScrollbar = () => doc.style.setProperty("--sbw", window.innerWidth - doc.clientWidth + "px");
  setScrollbar();
  window.addEventListener("resize", setScrollbar);

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Sticky header shadow ---------- */
  const header = document.getElementById("site-header");
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menu = document.getElementById("mobile-menu");
  const toggle = document.querySelector(".menu-toggle");
  const closeBtn = menu.querySelector(".mobile-menu__close");
  let lastFocus = null;

  const focusables = () =>
    Array.from(menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(
      (el) => el.offsetParent !== null
    );

  function openMenu() {
    lastFocus = document.activeElement;
    menu.hidden = false;
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    closeBtn.focus();
    document.addEventListener("keydown", onMenuKey);
  }

  function closeMenu(restoreFocus = true) {
    menu.hidden = true;
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    document.removeEventListener("keydown", onMenuKey);
    if (restoreFocus && lastFocus) lastFocus.focus();
  }

  function onMenuKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key !== "Tab") return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  toggle.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", () => closeMenu());
  menu.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", () => closeMenu(false)));
  window.matchMedia("(min-width: 960px)").addEventListener("change", (mq) => {
    if (mq.matches && !menu.hidden) closeMenu(false);
  });

  /* ---------- In-page links: move focus to the target for keyboard and screen-reader users ---------- */
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href").slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    // On narrow screens the form sits below the contact details, so quote links go straight to the form
    const scrollTarget =
      id === "quote" && !window.matchMedia("(min-width: 960px)").matches ? document.querySelector(".quote__form-wrap") : target;
    scrollTarget.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    if (id !== "top") history.pushState(null, "", "#" + id);
    else history.pushState(null, "", location.pathname + location.search);

    // "Ask about this": preselect the service in the form
    if (link.dataset.service) {
      const select = document.getElementById("f-service");
      select.value = link.dataset.service;
      select.classList.add("is-highlighted");
      setTimeout(() => select.classList.remove("is-highlighted"), 2200);
    }

    const focusTarget = id === "quote" ? document.getElementById("f-name") : target;
    if (!focusTarget.hasAttribute("tabindex") && !/^(INPUT|SELECT|TEXTAREA|A|BUTTON)$/.test(focusTarget.tagName)) {
      focusTarget.setAttribute("tabindex", "-1");
    }
    focusTarget.focus({ preventScroll: true });
  });

  /* ---------- Current section in the nav ---------- */
  const navLinks = Array.from(document.querySelectorAll(".primary-nav a"));
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const visible = new Map();
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => visible.set(en.target.id, en.isIntersecting));
        const current = sections.find((s) => visible.get(s.id));
        navLinks.forEach((a) => {
          if (current && a.getAttribute("href") === "#" + current.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Entrance motion ---------- */
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const groups = [
      [".section-head", false],
      [".service", true],
      [".about__text", false],
      [".about__media", false],
      [".band__panel", false],
      [".step", true],
      [".county", true],
      [".quote__info-inner", false],
      [".quote-form", false],
    ];
    const els = [];
    groups.forEach(([sel, stagger]) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.setAttribute("data-reveal", "");
        if (stagger) el.style.setProperty("--i", String(i % 4));
        els.push(el);
      });
    });
    doc.classList.add("motion");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Quote form ---------- */
  const form = document.getElementById("quote-form");
  const summary = document.getElementById("form-error-summary");
  const status = document.getElementById("form-status");
  const submitBtn = form.querySelector('button[type="submit"]');

  const postcodeRe = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const rules = {
    name: (v) => (v.trim() ? "" : "Please enter your name."),
    phone: (v) => {
      const digits = v.replace(/[^\d]/g, "");
      if (!v.trim()) return "Please enter a phone number so we can call you back.";
      if (digits.length < 10 || digits.length > 13) return "Please enter a full phone number, for example 01632 960 123.";
      return "";
    },
    email: (v) => {
      if (!v.trim()) return "Please enter your email address.";
      if (!emailRe.test(v.trim())) return "Please check your email address, for example name@example.co.uk.";
      return "";
    },
    postcode: (v) => {
      if (!v.trim()) return "Please enter the postcode of the property.";
      if (!postcodeRe.test(v.trim())) return "Please enter a full UK postcode, for example GU1 1AA.";
      return "";
    },
    consent: (_, el) => (el.checked ? "" : "Please tick the box so we can reply to your enquiry."),
  };

  function setError(el, message) {
    const err = document.getElementById(el.id + "-error");
    const wrap = el.closest(".field");
    if (message) {
      el.setAttribute("aria-invalid", "true");
      err.textContent = message;
      err.hidden = false;
      wrap.classList.add("is-invalid");
    } else {
      el.removeAttribute("aria-invalid");
      err.textContent = "";
      err.hidden = true;
      wrap.classList.remove("is-invalid");
    }
  }

  function validateField(el) {
    const rule = rules[el.name];
    if (!rule) return "";
    const message = rule(el.value, el);
    setError(el, message);
    return message;
  }

  // Validate on leaving a field; once a field has shown an error, re-check as the user types
  Object.keys(rules).forEach((name) => {
    const el = form.elements[name];
    const evt = el.type === "checkbox" ? "change" : "blur";
    el.addEventListener(evt, () => {
      if (el.type === "checkbox" || el.value.trim() || el.hasAttribute("aria-invalid")) validateField(el);
    });
    el.addEventListener("input", () => {
      if (el.hasAttribute("aria-invalid")) validateField(el);
    });
  });

  function showStatus(kind, html) {
    status.className = "form-status form-status--" + kind;
    status.innerHTML = html;
    status.hidden = false;
    status.focus();
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.hidden = true;

    const errors = [];
    Object.keys(rules).forEach((name) => {
      const el = form.elements[name];
      const message = validateField(el);
      if (message) errors.push({ id: el.id, message });
    });

    if (errors.length) {
      summary.innerHTML =
        "<strong>Please check " +
        (errors.length === 1 ? "this field" : "these " + errors.length + " fields") +
        ":</strong><ul>" +
        errors.map((er) => '<li><a href="#' + er.id + '" data-field="' + er.id + '">' + er.message + "</a></li>").join("") +
        "</ul>";
      summary.hidden = false;
      summary.focus();
      return;
    }
    summary.hidden = true;

    const data = Object.fromEntries(new FormData(form).entries());

    if (!CONFIG.FORM_ENDPOINT) {
      console.warn(
        "[Thornton's Roofing] Quote form is not connected: set CONFIG.FORM_ENDPOINT in js/main.js. Nothing was sent.",
        data
      );
      // Never tell a visitor their enquiry arrived when nothing was sent
      showStatus(
        "notice",
        "<strong>Online enquiries aren't switched on yet.</strong> Your details haven't been sent. Please call us on " +
          '<a href="' + CONFIG.PHONE_LINK + '">' + CONFIG.PHONE + "</a> or email " +
          '<a href="mailto:' + CONFIG.EMAIL + '">' + CONFIG.EMAIL + "</a>."
      );
      return;
    }

    submitBtn.disabled = true;
    submitBtn.classList.add("is-loading");
    try {
      const res = await fetch(CONFIG.FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      showSuccess();
    } catch (err) {
      console.error("[Thornton's Roofing] Form submission failed:", err);
      showStatus(
        "error",
        "<strong>Sorry, your enquiry didn't send.</strong> Please check your connection and try again, or call us on " +
          '<a href="' + CONFIG.PHONE_LINK + '">' + CONFIG.PHONE + "</a>. Your details are still in the form."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
    }
  });

  function showSuccess() {
    form.reset();
    form.querySelectorAll("[aria-invalid]").forEach((el) => setError(el, ""));
    showStatus(
      "success",
      "<strong>Thank you, we've got your enquiry.</strong> We'll be in touch to talk about your roof and arrange a time to take a look. " +
        'If it\'s urgent, call us on <a href="' + CONFIG.PHONE_LINK + '">' + CONFIG.PHONE + "</a>."
    );
  }

  // Error summary links move focus to the field (not just scroll)
  summary.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-field]");
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    const field = document.getElementById(a.dataset.field);
    field.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
    field.focus({ preventScroll: true });
  });
})();
