# Qcells Playwright Test Suite
Automated UI and API tests for [us.qcells.com](https://us.qcells.com) using Playwright.
## Structure
- `tests/` — test specs (UI + API)
- `pages/` — Page Object Model classes
- `playwright.config.ts` — Playwright settings
## What's tested
**UI:** Homepage, Get Started flow, Residential nav dropdown, all Get Started sub-pages  
**API:** Homepage status checks, Get Started page availability

## Run locally
npm install
npx playwright install
npx playwright test
## CI
Tests run automatically on push via GitHub Actions (`.github/workflows/playwright.yml`).
> Tests target public pages only — nothing touching production data.