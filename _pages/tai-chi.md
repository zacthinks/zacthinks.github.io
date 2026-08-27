---
permalink: /tai-chi/
title: "Tai Chi"
author_profile: true
---

<style>
  .tai-chi-board {
    --tc-border: rgba(0, 0, 0, 0.12);
    --tc-muted: #666;
    --tc-surface: #f7f7f8;
    --tc-on-bg: #eaf7ef;
    --tc-on-fg: #176b3a;
    --tc-cancelled-bg: #fff0f0;
    --tc-cancelled-fg: #9b2c2c;
    --tc-tentative-bg: #fff8e6;
    --tc-tentative-fg: #765500;
    --tc-neutral-bg: #f0f2f4;
    --tc-neutral-fg: #4b5563;
    max-width: 760px;
  }

  .tai-chi-board * {
    box-sizing: border-box;
  }

  .tai-chi-intro {
    margin: 0 0 1.25rem;
    color: var(--tc-muted);
    line-height: 1.55;
  }

  .tai-chi-card {
    border: 1px solid var(--tc-border);
    border-radius: 16px;
    padding: 1.35rem;
    margin-bottom: 1.5rem;
    background: var(--tc-surface);
  }

  .tai-chi-card[data-tone="on"] {
    background: var(--tc-on-bg);
    color: var(--tc-on-fg);
  }

  .tai-chi-card[data-tone="cancelled"] {
    background: var(--tc-cancelled-bg);
    color: var(--tc-cancelled-fg);
  }

  .tai-chi-card[data-tone="tentative"] {
    background: var(--tc-tentative-bg);
    color: var(--tc-tentative-fg);
  }

  .tai-chi-card[data-tone="neutral"],
  .tai-chi-card[data-tone="loading"],
  .tai-chi-card[data-tone="error"] {
    background: var(--tc-neutral-bg);
    color: var(--tc-neutral-fg);
  }

  .tai-chi-kicker {
    margin: 0 0 0.35rem;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.78;
  }

  .tai-chi-status-line {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin: 0;
    font-size: clamp(1.65rem, 5vw, 2.35rem);
    font-weight: 750;
    line-height: 1.15;
  }

  .tai-chi-dot {
    width: 0.72em;
    height: 0.72em;
    border-radius: 999px;
    background: currentColor;
    flex: 0 0 auto;
  }

  .tai-chi-details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem 1rem;
    margin-top: 1rem;
    font-size: 1rem;
    color: inherit;
  }

  .tai-chi-detail {
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
  }

  .tai-chi-detail-label {
    font-weight: 700;
  }

  .tai-chi-note {
    margin: 0.9rem 0 0;
    line-height: 1.5;
  }

  .tai-chi-updated {
    margin: 1rem 0 0;
    font-size: 0.83rem;
    opacity: 0.72;
  }

  .tai-chi-section-title {
    margin: 0 0 0.75rem;
    font-size: 1.15rem;
  }

  .tai-chi-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.35rem;
    border-top: 1px solid var(--tc-border);
  }

  .tai-chi-row {
    display: grid;
    grid-template-columns: minmax(8.5rem, 1fr) minmax(7rem, 0.9fr) minmax(0, 1.6fr);
    gap: 0.8rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--tc-border);
    align-items: start;
  }

  .tai-chi-row-date {
    font-weight: 700;
  }

  .tai-chi-row-status {
    font-weight: 650;
  }

  .tai-chi-row-extra {
    color: var(--tc-muted);
    min-width: 0;
  }

  .tai-chi-empty {
    margin: 0 0 1.35rem;
    color: var(--tc-muted);
  }

  .tai-chi-footnote {
    color: var(--tc-muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .tai-chi-retry {
    display: inline-block;
    margin-top: 0.9rem;
    padding: 0.55rem 0.85rem;
    border: 1px solid currentColor;
    border-radius: 8px;
    color: inherit;
    background: transparent;
    cursor: pointer;
    font: inherit;
    font-weight: 650;
  }

  @media (max-width: 620px) {
    .tai-chi-card {
      padding: 1.1rem;
      border-radius: 13px;
    }

    .tai-chi-row {
      grid-template-columns: 1fr auto;
      gap: 0.25rem 0.75rem;
    }

    .tai-chi-row-extra {
      grid-column: 1 / -1;
    }
  }
</style>

<div class="tai-chi-board" id="tai-chi-board">
  <p class="tai-chi-intro">
    Informal evening Tai Chi sessions for the university community. Plans can change, so this page is the best place to check the current status.
  </p>

  <section
    class="tai-chi-card"
    id="tai-chi-today"
    data-tone="loading"
    aria-live="polite"
    aria-busy="true"
  >
    <p class="tai-chi-kicker">Today</p>
    <p class="tai-chi-status-line">
      <span class="tai-chi-dot" aria-hidden="true"></span>
      <span>Checking today's status…</span>
    </p>
  </section>

  <section aria-labelledby="tai-chi-upcoming-heading">
    <h2 class="tai-chi-section-title" id="tai-chi-upcoming-heading">Upcoming</h2>
    <div id="tai-chi-upcoming" aria-live="polite">
      <p class="tai-chi-empty">Loading posted plans…</p>
    </div>
  </section>

  <p class="tai-chi-footnote">
    If a date has not been posted, it is not a commitment that a session will happen. Please check again later for updates.
  </p>
</div>

<script>
(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // ONE-TIME CONFIGURATION
  // ---------------------------------------------------------------------------
  const CONFIG = {
    // From a Google Sheets URL like:
    // https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_SHEET_ID/edit
    SHEET_ID: "1cTln1JH91k6hwfNt3v5w8UbHFTAAkDb9K1z8_4qUm48",

    // Name of the tab that contains the schedule.
    SHEET_NAME: "Schedule",

    // Used to decide what "today" means on the public page.
    TIME_ZONE: "America/New_York",

    // Number of future rows to display.
    UPCOMING_LIMIT: 5
  };

  const todayEl = document.getElementById("tai-chi-today");
  const upcomingEl = document.getElementById("tai-chi-upcoming");

  const STATUS = {
    on: {
      tone: "on",
      todayLabel: "On today",
      shortLabel: "On"
    },
    cancelled: {
      tone: "cancelled",
      todayLabel: "Canceled today",
      shortLabel: "Canceled"
    },
    tentative: {
      tone: "tentative",
      todayLabel: "Tentative",
      shortLabel: "Tentative"
    },
    neutral: {
      tone: "neutral",
      todayLabel: "Not confirmed yet",
      shortLabel: "Not confirmed"
    }
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalizeHeader(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_");
  }

  function normalizeStatus(value) {
    const s = String(value || "").trim().toLowerCase();

    if (["on", "confirmed", "yes", "happening"].includes(s)) return "on";
    if (["cancelled", "canceled", "off", "no"].includes(s)) return "cancelled";
    if (["tentative", "maybe", "tbd"].includes(s)) return "tentative";
    if (["not posted", "not confirmed", "unconfirmed", "unknown", ""].includes(s)) return "neutral";

    return "neutral";
  }

  function dateKeyInTimeZone(date) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: CONFIG.TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date);

    const values = {};
    parts.forEach(part => {
      if (part.type !== "literal") values[part.type] = part.value;
    });

    return `${values.year}-${values.month}-${values.day}`;
  }

  function cellDateKey(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      const y = value.getFullYear();
      const m = String(value.getMonth() + 1).padStart(2, "0");
      const d = String(value.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }

    const text = String(value || "").trim();
    const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return iso ? `${iso[1]}-${iso[2]}-${iso[3]}` : null;
  }

  function prettyDate(dateKey, includeYear) {
    const [year, month, day] = dateKey.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));

    return new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      weekday: "short",
      month: "short",
      day: "numeric",
      ...(includeYear ? { year: "numeric" } : {})
    }).format(date);
  }

  function displayCell(cell) {
    if (!cell) return "";
    if (cell.v instanceof Date) return cell.v;
    if (cell.f != null && cell.f !== "") return cell.f;
    if (cell.v == null) return "";
    return cell.v;
  }

  function tableToRows(table) {
    const headers = (table.cols || []).map(col => normalizeHeader(col.label));

    return (table.rows || []).map(row => {
      const object = {};
      headers.forEach((header, index) => {
        if (!header) return;
        object[header] = displayCell(row.c ? row.c[index] : null);
      });

      object.dateKey = cellDateKey(object.date);
      object.statusKey = normalizeStatus(object.status);
      return object;
    }).filter(row => row.dateKey);
  }

  function renderToday(row) {
    if (!row) {
      todayEl.dataset.tone = "neutral";
      todayEl.setAttribute("aria-busy", "false");
      todayEl.innerHTML = `
        <p class="tai-chi-kicker">Today · ${escapeHtml(prettyDate(dateKeyInTimeZone(new Date()), false))}</p>
        <p class="tai-chi-status-line">
          <span class="tai-chi-dot" aria-hidden="true"></span>
          <span>${STATUS.neutral.todayLabel}</span>
        </p>
        <p class="tai-chi-note">No plan has been posted for today yet.</p>
      `;
      return;
    }

    const state = STATUS[row.statusKey] || STATUS.neutral;
    const showPlaceAndTime = row.statusKey !== "cancelled";
    const details = [];

    if (showPlaceAndTime && row.time) {
      details.push(`<span class="tai-chi-detail"><span class="tai-chi-detail-label">Time:</span> ${escapeHtml(row.time)}</span>`);
    }
    if (showPlaceAndTime && row.location) {
      details.push(`<span class="tai-chi-detail"><span class="tai-chi-detail-label">Location:</span> ${escapeHtml(row.location)}</span>`);
    }

    todayEl.dataset.tone = state.tone;
    todayEl.setAttribute("aria-busy", "false");
    todayEl.innerHTML = `
      <p class="tai-chi-kicker">Today · ${escapeHtml(prettyDate(row.dateKey, false))}</p>
      <p class="tai-chi-status-line">
        <span class="tai-chi-dot" aria-hidden="true"></span>
        <span>${escapeHtml(state.todayLabel)}</span>
      </p>
      ${details.length ? `<div class="tai-chi-details">${details.join("")}</div>` : ""}
      ${row.note ? `<p class="tai-chi-note">${escapeHtml(row.note)}</p>` : ""}
      ${row.updated ? `<p class="tai-chi-updated">Updated: ${escapeHtml(row.updated)}</p>` : ""}
    `;
  }

  function renderUpcoming(rows, todayKey) {
    const futureRows = rows
      .filter(row => row.dateKey > todayKey)
      .sort((a, b) => a.dateKey.localeCompare(b.dateKey))
      .slice(0, CONFIG.UPCOMING_LIMIT);

    if (!futureRows.length) {
      upcomingEl.innerHTML = `<p class="tai-chi-empty">No future plans or changes have been posted.</p>`;
      return;
    }

    const currentYear = Number(todayKey.slice(0, 4));
    const items = futureRows.map(row => {
      const state = STATUS[row.statusKey] || STATUS.neutral;
      const rowYear = Number(row.dateKey.slice(0, 4));
      const extra = [];

      if (row.statusKey !== "cancelled" && row.time) extra.push(row.time);
      if (row.statusKey !== "cancelled" && row.location) extra.push(row.location);
      if (row.note) extra.push(row.note);

      return `
        <li class="tai-chi-row">
          <span class="tai-chi-row-date">${escapeHtml(prettyDate(row.dateKey, rowYear !== currentYear))}</span>
          <span class="tai-chi-row-status">${escapeHtml(state.shortLabel)}</span>
          <span class="tai-chi-row-extra">${extra.length ? escapeHtml(extra.join(" · ")) : "—"}</span>
        </li>
      `;
    }).join("");

    upcomingEl.innerHTML = `<ul class="tai-chi-list">${items}</ul>`;
  }

  function renderError(message) {
    todayEl.dataset.tone = "error";
    todayEl.setAttribute("aria-busy", "false");
    todayEl.innerHTML = `
      <p class="tai-chi-kicker">Today</p>
      <p class="tai-chi-status-line">
        <span class="tai-chi-dot" aria-hidden="true"></span>
        <span>Schedule unavailable</span>
      </p>
      <p class="tai-chi-note">${escapeHtml(message)}</p>
      <button class="tai-chi-retry" type="button" id="tai-chi-retry">Try again</button>
    `;
    upcomingEl.innerHTML = `<p class="tai-chi-empty">Upcoming plans could not be loaded.</p>`;

    const retry = document.getElementById("tai-chi-retry");
    if (retry) retry.addEventListener("click", loadAndRender);
  }

  function loadGoogleSheet() {
    return new Promise((resolve, reject) => {
      if (!CONFIG.SHEET_ID || CONFIG.SHEET_ID.includes("PASTE_GOOGLE_SHEET_ID_HERE")) {
        reject(new Error("The page has not been connected to its Google Sheet yet."));
        return;
      }

      const callbackName = `__taiChiSheet_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const script = document.createElement("script");
      const timeout = window.setTimeout(() => {
        cleanup();
        reject(new Error("The public schedule did not respond. Please try again shortly."));
      }, 10000);

      function cleanup() {
        window.clearTimeout(timeout);
        try { delete window[callbackName]; } catch (_) { window[callbackName] = undefined; }
        if (script.parentNode) script.parentNode.removeChild(script);
      }

      window[callbackName] = response => {
        if (!response || response.status === "error" || !response.table) {
          cleanup();
          reject(new Error("The public schedule could not be read. Check the Sheet sharing settings."));
          return;
        }

        const table = response.table;
        cleanup();
        resolve(table);
      };

      const params = new URLSearchParams({
        sheet: CONFIG.SHEET_NAME,
        headers: "1",
        tqx: `responseHandler:${callbackName}`,
        _: String(Date.now())
      });

      script.src = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(CONFIG.SHEET_ID)}/gviz/tq?${params.toString()}`;
      script.async = true;
      script.onerror = () => {
        cleanup();
        reject(new Error("The public schedule could not be reached. Please try again shortly."));
      };

      document.head.appendChild(script);
    });
  }

  async function loadAndRender() {
    todayEl.dataset.tone = "loading";
    todayEl.setAttribute("aria-busy", "true");
    todayEl.innerHTML = `
      <p class="tai-chi-kicker">Today</p>
      <p class="tai-chi-status-line">
        <span class="tai-chi-dot" aria-hidden="true"></span>
        <span>Checking today's status…</span>
      </p>
    `;
    upcomingEl.innerHTML = `<p class="tai-chi-empty">Loading posted plans…</p>`;

    try {
      const table = await loadGoogleSheet();
      const rows = tableToRows(table);
      const todayKey = dateKeyInTimeZone(new Date());
      const todayRow = rows.find(row => row.dateKey === todayKey);

      renderToday(todayRow);
      renderUpcoming(rows, todayKey);
    } catch (error) {
      renderError(error && error.message ? error.message : "Please try again shortly.");
    }
  }

  loadAndRender();
})();
</script>
