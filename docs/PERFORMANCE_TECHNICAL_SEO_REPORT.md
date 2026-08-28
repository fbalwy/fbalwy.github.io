# Performance and technical SEO report — QA-005 v1

**Result:** PASS — no performance or technical-SEO release blocker exists in the current static artifact. This is a noindex, provider-neutral CI candidate, not a production performance or crawlability claim.

## Candidate and tools

| Field | Value |
| --- | --- |
| CI manifest SHA-256 | `c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8` |
| Node / npm | `v24.19.0` / `11.19.0` |
| Build class | `static-noindex-candidate` |
| Origin | `https://ci.invalid` |
| Artifact count | 17 |
| OG image | `image/png`, 1200×630, 32,565 B, SHA-256 `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6` |

Tools: deterministic artifact inspection; local Astro preview plus HTTP timing/MIME checks; connected Chrome resource inventory; build budget, public scan, analytics audit, release-boundary scan, and existing metadata/reproducibility checks. Lighthouse is not installed. The connected browser exposes no Performance Timeline, network waterfall, CPU throttling, or field-data API, so no synthetic CWV score is claimed.

## Resource, transfer, and bundle inventory

Transfer below is uncompressed first-view HTML plus linked CSS bytes from the final artifact. Inline progressive-enhancement scripts require no additional request. The shared stylesheet is reused on every route.

| Route | HTML B | CSS resources (B) | First-view requests | Transfer B |
| --- | ---: | --- | ---: | ---: |
| `/` | 5,417 | `contracts` 12,572 | 2 | 17,989 |
| `/research` | 5,552 | `contracts` 12,572; route 1,067 | 3 | 19,191 |
| `/publications` | 5,483 | `contracts` 12,572; route 8,149 | 3 | 26,204 |
| `/teaching` | 5,465 | `contracts` 12,572; route 987 | 3 | 19,024 |
| `/leadership-service` | 5,441 | `contracts` 12,572; route 657 | 3 | 18,670 |
| `/about` | 5,315 | `contracts` 12,572 | 2 | 17,887 |
| `/contact` | 8,259 | `contracts` 12,572 | 2 | 20,831 |
| `/404.html` | 5,199 | `contracts` 12,572 | 2 | 17,771 |

The static bundle totals 4,858 B Brotli CSS and 2,354 B Brotli JavaScript, below the 35 KiB and 15 KiB limits. The emitted Publications enhancement module is 6,956 B raw / 2,354 B Brotli, but current guarded pages do not reference it, so it is not a first-view request. There are no rendered font, image, video, SVG, or external script requests; the only image is metadata-only `og.png` and is not an in-page request.

Connected Chrome inventory confirmed one local stylesheet on `/`, `/about`, `/contact`, and `/404.html`, and two local stylesheets on Research, Publications, Teaching, and Leadership & Service. All inventories had zero fonts, images, scripts, videos, inline SVGs, or other remote runtime resources.

## Lab and Core Web Vitals readiness

Local HTTP response timing is a development-machine transport observation, not a user-facing lab score: HTML endpoints were 0.0007–0.0011 s, `og.png` 0.0140 s, and all expected local MIME/status pairs passed. The static architecture has no server render, client framework, font download, image layout, third-party runtime, analytics, tracker, service worker, form endpoint, or remote script. These properties reduce known LCP/INP/CLS risks; they do not establish field CWV.

There is no production hostname, Search Console property, traffic, RUM, field LCP/INP/CLS, CDN compression measurement, or real-host cache/header observation. Those remain controlled G5/P9 host and post-launch items.

## Metadata and crawlability matrix

All eight emitted HTML documents (`/`, six non-home routes, Contact, and `404.html`) passed deterministic head inspection:

- eight unique titles and descriptions, each paired with an HTTPS `ci.invalid` canonical of the exact no-trailing-slash route;
- exact `noindex, nofollow, noarchive, nosnippet` robots policy;
- title/description parity across Open Graph and Twitter, `og:url` parity with canonical, shared `https://ci.invalid/og.png`, and meaningful image alt;
- zero current JSON-LD; and
- no malformed query/fragment can enter a canonical URL.

`robots.txt` is exactly `User-agent: *` plus `Disallow: /`; `sitemap.xml` is the deterministic empty URL set. Both are intentional for this candidate. The direct CV URL returns 404 and no PDF; `/404.html` is a distinct error artifact. The route registry is closed to seven HTML routes and one conditional CV path. Internal output scans, link/fragment tests, and the release policy require no trailing slash; a future host must use a one-hop 308 normalization that drops query strings.

## Caching, compression, and hosting limits

The release manifest classifies HTML, `404.html`, `robots.txt`, and sitemap as `max-age=0, must-revalidate`; fingerprinted `_astro` assets as one-year immutable; and `og.png` as short-revalidation. Local preview returned `Cache-Control: no-cache`, so it is not evidence of the required host behavior. The provider-neutral adapter encodes the required CSP, headers, true 404, cache classes, rollback simulation, and redirect policy, but no provider is selected or configured.

The local preview correctly returned 200 `image/png` for `/og.png`, 404 for the absent CV, and 200 for the static routes. It cannot prove production compression, cache headers, redirects, HSTS, CDN behavior, or rollback operation.

## Findings and handoff

No application/build/metadata defect was found in this QA-005 audit. A local `dist` observed at intake had been generated in local mode by concurrent work while the CI manifest remained frozen; it was discarded as evidence and rebuilt in explicit CI mode before the final artifact inspection. This was environment hygiene, not a release defect.

The final static artifact keeps intentional constraints: all record-driven routes are fail-closed, robots disallow all crawlers, sitemap is empty, JSON-LD is zero, the CV is absent, and no provider is selected. QA-007 should consume the final manifest above and re-run the full deterministic suite after all accepted QA changes. G5/P9 must separately verify an authorized host's actual headers, compression, redirects, 404 semantics, rollback, canonical hostname, and any field-performance data.
