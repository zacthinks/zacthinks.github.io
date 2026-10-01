---
permalink: /tai-chi/
title: "Tai Chi"
author_profile: true
---

<style>
  .tai-chi-board {
    --tc-border: var(--global-border-color);
    --tc-muted: var(--global-text-color-light);
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
    line-height: 1.55;
  }

  .tai-chi-card {
    border: 2px solid var(--tc-border);
    border-radius: 16px;
    padding: 1.35rem;
    margin-bottom: 1.5rem;
    background: var(--tc-surface);
  }

  .tai-chi-card[data-tone="on"] {
    background: var(--tc-on-bg);
    color: var(--tc-on-fg);
    border-color: color-mix(in srgb, var(--tc-on-fg) 45%, var(--tc-border));
  }

  .tai-chi-card[data-tone="cancelled"] {
    background: var(--tc-cancelled-bg);
    color: var(--tc-cancelled-fg);
    border-color: color-mix(in srgb, var(--tc-cancelled-fg) 45%, var(--tc-border));
  }

  .tai-chi-card[data-tone="tentative"] {
    background: var(--tc-tentative-bg);
    color: var(--tc-tentative-fg);
    border-color: color-mix(in srgb, var(--tc-tentative-fg) 45%, var(--tc-border));
  }

  .tai-chi-card[data-tone="neutral"],
  .tai-chi-card[data-tone="loading"],
  .tai-chi-card[data-tone="error"] {
    background: var(--tc-neutral-bg);
    color: var(--tc-neutral-fg);
    border-color: var(--global-dark-border-color);
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
    I organize informal evening Tai Chi sessions open to anyone interested in practicing together. Complete beginners are welcome, and no prior experience is expected. Sessions are usually about an hour and are intended to be relaxed, low-pressure opportunities to move and practice together.
  </p>

  <h2>What to expect</h2>
  <p>
    Depending on who shows up, I’m happy either to lead a follow-along practice or to teach more explicitly. A typical session includes warm-ups and stretching, movement drills, and work on forms; what we practice can vary from session to session.
  </p>
  <p>
    No special equipment is required. Wear clothes that let you move comfortably and, if possible, soft, flat shoes. Tai Chi involves fairly precise control of how the foot meets the ground, so stiff or bulky footwear can make some movements unnecessarily difficult.
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

## My Tai Chi Practice

I am primarily trained in Yang-style Tai Chi and am a seventh-generation practitioner. I began practicing as a graduate student, trained with my teacher Yu Luyun in Taiwan, taught for several years at the Cambridge YMCA, and have competed in the United States and Taiwan. [Read more about my Tai Chi background →](/tai-chi/about/)

For people looking for a more structured weekly class, Tai Chi classes continue at the Cambridge YMCA, where I taught for several years before graduating. Some of the students my mother and I taught have since helped carry the classes forward.

<script src="{{ '/assets/js/tai-chi.js' | relative_url }}" defer></script>
