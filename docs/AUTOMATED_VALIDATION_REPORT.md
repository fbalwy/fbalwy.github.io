# Automated validation report — QA-001 v1

**Result:** PASS — no automated blocker remains for the frozen P1–P7 static candidate. This report records verification only; it does not approve G4/G5, promotion, deployment, DNS, publication, or P9.

## Candidate frozen for validation

| Field | Exact value |
| --- | --- |
| Build class | `static-noindex-candidate` |
| Build mode / origin | `ci` / `https://ci.invalid` |
| Candidate promotable / indexable | `false` / `false` |
| Source date epoch / commit | `0` / `uncommitted` |
| Node / npm | `v24.19.0` / `11.19.0` |
| `package-lock.json` SHA-256 | `2ffe29eb5ede049e7325ff00e6a36c5309d068de0c6a3cf5d9e90d59d7cf69c9` |
| Release-manifest SHA-256 | `1a947c9990ce21a323a90d4bb5c7e36086537c2f57b8bd4afa39ae5690faded3` |
| `dist/og.png` | 32,565 B; SHA-256 `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6` |
| Artifact count / total `dist` size | 17 / 148 KiB |

The exact fingerprint is `.build/release-manifests/release-manifest.json`; it enumerates every emitted artifact, byte count, MIME type, cache class, expected status, and SHA-256. Its policy is `no-trailing-slash` and `provider-neutral-host-selection-blocked`.

## Reproducible automated run

Date: 19 August 2026. The isolated exact runtime was Node `v24.19.0` at `/tmp/tec002-node24.LavP6C/node-v24.19.0-darwin-arm64/bin/node` and npm `11.19.0` at `/tmp/tec002-node24.LavP6C/npm-11.19.0/node_modules/npm/bin/npm-cli.js`.

An initial `npm ci --ignore-scripts` added 285 packages, reported 0 vulnerabilities, and left the lockfile hash unchanged. The following pinned command then passed as a single full run:

```text
PATH=/tmp/tec002-node24.LavP6C/node-v24.19.0-darwin-arm64/bin:$PATH \
ASTRO_TELEMETRY_DISABLED=1 \
node /tmp/tec002-node24.LavP6C/npm-11.19.0/node_modules/npm/bin/npm-cli.js run verify
```

| Check | Result |
| --- | --- |
| Scope safety and governed-input protection | PASS — 11 governed fingerprints; ignore protections active |
| Formatting | PASS — `prettier --check . --ignore-unknown` |
| Static lint | PASS — 52 source files |
| Astro validation | PASS — 42 files; 0 errors, 0 warnings, 0 hints |
| TypeScript | PASS — `tsc --noEmit` |
| Unit and integration tests | PASS — 53 tests; 0 failures |
| Dependency audit | PASS — 0 high-or-greater vulnerabilities |
| License metadata | PASS — 269 installed packages examined |
| Content schemas / Ajv | PASS — 22 schema checks, 0 failed; 2 Ajv checks |
| Token bindings / OG generation and check | PASS — deterministic 1200×630 PNG |
| Public staging boundary | PASS — only `og.png` and `robots.txt` staged; held CV/font/logo excluded |
| Static build and output scan | PASS — 8 HTML pages; 17 emitted artifacts |
| Budget | PASS — CSS 4,840 B Brotli; JS 2,354 B Brotli |
| Release boundary | PASS — no provider package, account, deploy workflow, or root provider config |
| Analytics / privacy | PASS — analytics disabled; 72 source/build/release files, 383 dependency identities, and 21 generated/public resources scanned |
| Contact privacy | PASS — one exact approved email target; zero collection or retention mechanisms |
| Reproducibility | PASS — two clean CI builds produced matching hashes for all 17 artifacts |

## Output and boundary inventory

The emitted candidate contains exactly:

```text
404.html
_astro/PublicationsContent.astro_astro_type_script_index_0_lang.Dbe5MwRQ.js
_astro/contracts.Cdi9Q9wW.css
_astro/leadership-service.QlVp5GWP.css
_astro/publications.BZ5sgV__.css
_astro/research.DglL1LrI.css
_astro/teaching.TOXHhOaM.css
about/index.html
contact/index.html
index.html
leadership-service/index.html
og.png
publications/index.html
research/index.html
robots.txt
sitemap.xml
teaching/index.html
```

There is no emitted CV/PDF, no public asset copy outside the approved OG and robots staging set, no deployment configuration, and no provider selection. Local HTTP validation returned `200 image/png` for `/og.png` (32,565 B) and `404` for `/cv/faisal-albalwy-cv.pdf`.

## Browser validation

A fresh local preview of the frozen CI build was exercised in Chrome at `http://127.0.0.1:4321`. Requested temporary viewport overrides were 1440×900, 768×900, 390×844, and 320×700. Each had one `h1`, no horizontal overflow, and the noindex policy. The browser reports scaled CSS viewport widths of 1152, 614, 312, and 256 respectively; this is browser zoom/device scale observation, not a change to the requested overrides.

| Scenario | Evidence | Result |
| --- | --- | --- |
| Home and primary navigation | One `h1`; Research link navigated to `/research`; canonical `https://ci.invalid/`; noindex; no JSON-LD | PASS |
| Guarded routes | `/`, `/research`, `/publications`, `/teaching`, `/leadership-service`, and `/about`: one `h1`, `data-operational-state="evidence-gap"`, no record-pattern leak, no JSON-LD, no overflow | PASS |
| Responsive menu | At 390×844: false/“Open menu” → true/“Close menu”; Escape returned focus to `SUMMARY:Menu`, closed it, and restored its label | PASS |
| Contact | One `h1`; no form or inputs; exact action `mailto:fbalwy@taibahu.edu.sa?subject=Academic%20website%20inquiry`; noindex, no JSON-LD, no overflow | PASS |
| Malformed route input | `/publications?bad=private#unknown` remained guarded/noindex with one `h1`, no record-pattern leak, and no JSON-LD | PASS |
| Direct 404 | `/404.html`: one `h1`, noindex, canonical `https://ci.invalid/404.html`, no overflow | PASS |
| Direct CV absence | `/cv/faisal-albalwy-cv.pdf` rendered the noindex “Page not found” response; direct HTTP was 404; no PDF content type | PASS |
| Social metadata | Home exposed `og:title`, `og:image=https://ci.invalid/og.png`, and `twitter:card=summary_large_image`; generated OG resource was 200 | PASS |
| Console | Error/warning log query returned an empty list | PASS |

The local preview server was stopped after the checks and the temporary viewport override was reset. Browser screenshots and resource-timing export are not exposed by this connected session; DOM, head, interaction, console, deterministic artifact, and local HTTP evidence above cover the rendered checks without claiming unavailable evidence.

## Findings, reruns, and downstream handoff

No QA-001 blocker was found in the final run. Before freezing, scoped fixes had already addressed the structured-data typed boundary and publication-author integrity; the final full run includes those fixes and completed cleanly. No assertion was weakened and no governed source was edited by this package.

Residual limits are intentional release controls, not failures: all governed record-driven routes are fail-closed, the site is noindex, current JSON-LD is zero, the CV remains internal-only and absent from `dist`, and no host/provider is selected. QA-002 and later may consume this report, the frozen release manifest, and the reproducibility result after their own authorized gates; they were not started here.
