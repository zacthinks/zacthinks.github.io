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
    Informal evening Tai Chi sessions open to all! Plans can change, so this page is the best place to check the current status. Sessions are an hour unless otherwise specified.
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

<script src="{{ '/assets/js/tai-chi.js' | relative_url }}" defer></script>
