# Compact context-architecture entry — 11 November 2026

This change adds a short ContextNexus/Context Bridge M4 entry linking to the main portfolio's `#engineering-contextnexus` case. It does not add a second full case study. The existing IT/IAM, PowerShell, KRITIS, work-evidence and career content remains in place; the original three engineering teasers remain.

New entry text is available in German, English, French, Ukrainian and Polish. M4 remains a development-branch implementation with production acceptance pending. The existing three technical cases keep their explicit German/English fallback. README language/experience/contact statements are aligned with the newer website: five languages and 14 years of total experience across retail and IT.

Baseline: [87d604f](https://github.com/KKEEY92/CV_IT_KKEEY/commit/87d604f5b26b51ee6ceb61df31c22c8cf9d086d3). No private source links, context content or transport identifiers are added.

## Validation

Local macOS ARM64, Playwright 1.62.1, headless Chrome 157.0.8103.39:

- 60 layout/content combinations: five languages × 390/768/1440 px × two themes × two accent palettes.
- Local links/resources, keyboard menu/Escape, compact deep-link target, static and no-WebGL fallback, screenshots and automated WCAG 2.2 AA checks of the touched engineering section.
- Existing runtime JavaScript, data, assets and visual tokens match the baseline. Core CSS differs only by a scoped `min-inline-size: 0` rule on system-grid children.
- That rule fixes a pre-existing French mobile intrinsic-size overflow, reproduced on the unchanged baseline at 390 px (document width rounded to 391 px). It does not mask overflow or change the renderer.

The QA script uses an existing Playwright/Axe installation via `PLAYWRIGHT_MODULE` and `AXE_MODULE`, or ordinary module resolution. `BROWSER_CHANNEL=chrome` selects installed Chrome and `QA_OUT` controls local artifact output. No runtime dependencies are added. Example with a separately installed QA environment:

```sh
PLAYWRIGHT_MODULE=/path/to/qa/node_modules/playwright \
AXE_MODULE=/path/to/qa/node_modules/@axe-core/playwright/dist/index.mjs \
BROWSER_CHANNEL=chrome node scripts/test-architecture.mjs
```

Physical Safari/iPhone and screen-reader acceptance remain separate. There was no real form submission or provider/backend call. The automatic test blocks external requests.

## Coordinated release

Keep this pull request in draft until the main portfolio's new case and anchor are approved and published. The cross-link intentionally targets that corresponding main-portfolio change; it does not assert that the new case is already live.

No main merge or production deployment is included. Release requires separate explicit approval and the physical Safari/iPhone gate. Before merge, rollback is closing the draft. After a separately approved release, revert the actual accepted commit through review; preserve unrelated history and work.
