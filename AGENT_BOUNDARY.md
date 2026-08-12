# AGENT_BOUNDARY.md — Affiliate Agent Operational Boundary

## 🚫 Strict Prohibitions

- **NO HTTP requests to Shopee, TikTok, or any external e-commerce platform.**  
  This includes scraping, API calls, automated logins, form submissions, or any network interaction with their domains.

- **NO use of browser automation (Playwright, Selenium, Puppeteer) on Shopee/TikTok.**  
  All research must be done manually by a human operator using a standard browser.

- **NO reading or writing of cookies, localStorage, or session tokens related to Shopee.**  
  The agent may only read local files that have been *manually downloaded and placed* in `affiliate-ops/shopee-exports/`.

- **NO execution of external scripts (.ps1, .py, .js) that interact with Shopee.**  
  All data must come from pre-approved, static sources.

## ✅ Permitted Data Sources

- `affiliate-ops/shopee-exports/*.csv` — manually downloaded export files.
- `affiliate-ops/tiktok-trends/*.txt` — manually copied trend notes.
- `repos/tssaudio/web/scripts/unified-metrics.json`, `repos/onmeevn/data/ga4/*.json`, etc. — internal analytics.

## 📜 Enforcement

This file is checked at the start of every affiliate task. If violated, the agent must halt and report the violation to Robert immediately.

Last updated: 2026-07-10