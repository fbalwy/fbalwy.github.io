# Cross-browser report — QA-003 v1

**Result:** PASS. The one material responsive defect found in the audit was remediated and the complete pinned verification suite passed. This is a QA record only: no promotion, deployment, DNS, publication, G5, or P9 action was taken.

## Candidate and environment

QA-003 began with QA-001's frozen CI manifest `1a947c9990ce21a323a90d4bb5c7e36086537c2f57b8bd4afa39ae5690faded3`. The responsive remediation below necessarily produced a replacement candidate.

| Field | Value |
| --- | --- |
| Final CI release-manifest SHA-256 | `4f6e1f0f097f46c49388a79475c23805eec51a0bfd597b17aba05484e0874e1a` |
| Lockfile SHA-256 | `2ffe29eb5ede049e7325ff00e6a36c5309d068de0c6a3cf5d9e90d59d7cf69c9` |
| OG SHA-256 | `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6` |
| Build class / mode | `static-noindex-candidate` / `ci` |
| Node / npm | `v24.19.0` / `11.19.0` |
| Output | 17 artifacts; CSS 4,858 B Brotli; JS 2,354 B Brotli |

The final manifest remains non-promotable and non-indexable, with `https://ci.invalid` as the CI origin. It contains no CV/PDF and no provider configuration.

| Engine | Version / availability | Coverage |
| --- | --- | --- |
| Chrome (Chromium engine) | Google Chrome `151.0.7922.140`; connected browser session | Executed all interactive checks below |
| Firefox | Firefox `152.0.3` detected locally | Not run: no Firefox control session is exposed |
| WebKit | No locally runnable engine is exposed | Not run |

The connected browser surface exposed only viewport control and page-asset inspection. It did not expose browser zoom/text-scale, forced-colors, print or offline emulation, network timing/request logs, or Firefox/WebKit control. Those gaps are recorded rather than claimed as executed coverage.

## Route × viewport matrix

Chrome exercised all seven HTML routes plus `404.html` at 1440×900, 1024×800, 768×800, 390×844, 375×812, and 320×700: **48 route/viewport checks**. Every check passed: one `h1`, one `header`, one `main`, and one `footer`; `noindex, nofollow, noarchive, nosnippet`; zero current JSON-LD; zero rendered images; no horizontal overflow; and the intended `evidence-gap` guarded state.

The browser reports scaled CSS widths of 1152, 819, 614, 312, 300, and 256 for those requested widths. The 320 request therefore provides a stricter narrow reflow proxy. At 320, the menu, mobile Contact, footer Contact, and Contact mail action each measured a `44px` minimum block size with no overflow. This is the available 200%-text/400%-reflow proxy; it is not a claim that unavailable browser zoom controls were run.

## Interaction, recovery, and fallback evidence

| Area | Observed evidence | Result |
| --- | --- | --- |
| Navigation/current state | Home → Research navigation succeeded; each route has the expected shell/current state | PASS |
| Skip link and keyboard focus | First Tab focused “Skip to main content” with a solid 2.4px outline; keyboard activation resolved `#main-content` | PASS |
| Mobile menu | At 390×844, Open → Close; Escape closed native `details` and returned focus to `SUMMARY:Menu` | PASS |
| History/query/fragment | `/publications?bad=private#unknown` remained guarded and recovered unchanged through back navigation | PASS |
| Contact/external behavior | No form or inputs; exact mailto action; Taibah links are explicit HTTPS with `rel="noopener"` | PASS |
| Unavailable/404 recovery | Guarded record routes retained unavailable state; `404.html` had one `h1` and no overflow | PASS |
| Direct CV / OG | CV path returned noindex “Page not found”, not PDF; `/og.png` rendered as `1200×630` | PASS |
| Font/no-image fallback | Computed font is the approved system stack; all rendered routes have zero `<img>` elements | PASS |
| Console | Chrome error/warning query returned no entries | PASS |
| Print/reduced-motion/forced-colors | Source has `@media print`, `prefers-reduced-motion: reduce`, and `forced-colors: active` | PASS — source contract; no emulation |
| Offline after load | Contact has bounded `data-contact-offline` status and online/offline listener; no submission/storage/network API path | PASS — source contract; no offline emulation |

The native `<details>` menu and `<noscript>` fallback remain in the rendered shell. The menu stays usable as a native disclosure/navigation mechanism when the enhancement script is absent; the script only mirrors state and adds Escape/focus restoration.

## Defect, remediation, and retest

| ID | Severity | Finding | Remediation | Retest |
| --- | --- | --- | --- | --- |
| QA003-01 | Material responsive interaction defect | At compact width, mobile-nav links, footer links, Contact's email action, nameplate, and affiliation link did not consistently meet the approved 2.75rem target. | Added `min-block-size: var(--component-target-default)` and flex alignment to those shell/action selectors; added a source contract test. | Wide and 320px samples measure 44px; 48-check matrix and full verify pass. |

No governed content, brand token, release boundary, or lifecycle decision was changed. The manifest change is limited to the corrected fingerprinted CSS asset and manifest entries; lockfile and OG fingerprints are unchanged.

## Final verification and QA-007 handoff

After remediation, the exact Node 24.19.0/npm 11.19.0 `npm run verify` passed: scope safety (11 governed fingerprints), format, 52-file static lint, Astro (42 files; 0 errors/warnings/hints), TypeScript, 53/53 tests, dependency audit (0 vulnerabilities), schema/Ajv validation, output/staging scans, budget, release boundary, analytics/contact scans, and two-build reproducibility (17 matching artifact hashes).

QA-007 should use final manifest `4f6e1f0f097f46c49388a79475c23805eec51a0bfd597b17aba05484e0874e1a`, not the superseded QA-001 hash. The capability limits above require an authorized multi-engine/zoom-emulation environment for further coverage; they are not current cross-browser blockers in this supported environment.
