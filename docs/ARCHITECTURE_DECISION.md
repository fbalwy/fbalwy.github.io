# Production architecture decision

**Work package:** TEC-001 v1  
**Decision date:** 19 August 2026 (Asia/Riyadh)  
**Status:** Accepted for TEC-002/003 implementation; no application or environment has been initialized  
**Scope:** English-only, static-first Faisal Albalwy academic website  
**Decision owners:** technical owner; content, privacy/rights, accessibility, identity, and QA reviewers retain their governed approval roles

## 1. Decision summary

Build the website as a multi-route static site with **Astro 7**, **TypeScript 6**, and **Node.js 24 LTS**. Use `.astro` components, semantic HTML, token-driven authored CSS, and no client UI framework. Ship no JavaScript on the base routes. Ship one small, page-scoped vanilla TypeScript module on `/publications` for query-driven search, filtering, result count, and citation-copy enhancement. The complete publishable catalogue must already be present in the HTML and remain readable when JavaScript is absent or fails.

The build has no runtime server, CMS, database, API, authentication, contact endpoint, cookie, analytics package, tag manager, remote script, social embed, font CDN, or service worker. Contact is either one governed institutional `mailto:` action with a fixed, non-sensitive subject or an explicit unavailable state. The site is Faisal-first and text-only: Taibah University is a subordinate, descriptive, same-tab link; no university logo image, portrait, protected media, invented SVG, or generated brand asset is part of this decision.

Only records that simultaneously pass the canonical schemas and carry `verification_status=verified`, `public_disposition=publish`, and `render_eligibility=public` enter the render model. `eligible` remains internal. Protected evidence, provenance internals, authoring markers, private manifests, and non-public records must not be copied into the build graph or `dist/`.

The output is a provider-neutral `dist/` artifact. **Sites remains the default hosting candidate from the master plan, but not a dependency of the application.** TEC-003 must prove that the selected host can apply the required headers, exact 404 behavior, canonical-path normalization, preview `noindex`, immutable asset caching, atomic promotion, and rollback. If Sites cannot meet every mandatory capability, TEC-003 must select another approved static host for the same artifact and record the host adapter without changing this application architecture. TEC-001 performs no account, deployment, domain, DNS, publication, Gate G2, or P9 action.

## 2. Context and binding constraints

The site has seven visitor-facing HTML routes and one conditional public PDF route:

| ID | Canonical path | Architecture treatment |
|---|---|---|
| R1 | `/` | Static HTML; no client JavaScript. |
| R2 | `/research` | Static HTML; no speculative project-detail routes. |
| R3 | `/publications` | Static full catalogue plus the sole default client enhancement. |
| R4 | `/teaching` | Static HTML; schedule, student, room, section, time, and delivery-mode data are structurally excluded. |
| R5 | `/leadership-service` | Static HTML; governed current/historical labels only. |
| R6 | `/about` | Static HTML; CV action appears only when the governed PDF is approved and present. |
| R7 | `/contact` | Static HTML; institutional email action or unavailable fallback, never a form. |
| R8 | `/cv/faisal-albalwy-cv.pdf` | Stable optional file, absent and unlinked until DAT-004 plus required reviews approve the exact derivative. |

`/404.html` is the host error document, not a navigation route. Query states on `/publications` are alternate views of R3, not pages. Stable publication/project fragments are anchors, not detail routes. Canonical HTML paths have no trailing slash; TEC-003 may implement only the unambiguous, one-hop normalizations approved by the information architecture.

Current source evidence reinforces a fail-closed architecture:

- `content/data/publications.json` contains 27 source-stage publication lineages, 26 normalized DOIs and one DOI-less doctoral thesis. All are `verified/eligible`; none is `publish`. The current public projection is therefore empty.
- `content/schemas/` supplies twelve Draft 2020-12 schemas, fixtures, an adapter contract, a validation matrix, and a dependency-free collection validator. Schema validity is necessary but not release permission.
- The asset manifest exposes no public media. The future English CV is held; protected evidence never becomes a public download.
- The brand asset manifest contains only an Alexandria Latin variable WOFF2 and OFL copy as candidate/unreleased files. Until their governed status permits build use, the site uses the defined system fallback and makes no font request.
- The approved visual system is content-led, no-image, no-logo, no-card-wall, responsive, printable, and complete without JavaScript, fonts, or imagery.

## 3. Decision drivers and alternatives

Scores use `5` for strongest fit and `1` for weakest fit for this specific governed site. They are comparative architecture judgments, not general framework rankings.

| Approach | Validation and determinism | Progressive enhancement / low JS | Catalogue and SEO | Portability / rollback | Maintenance / dependency risk | Performance | No server / no tracking | Decision |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| **Astro 7 static output, `.astro`, vanilla TS** | 5 | 5 | 5 | 5 | 4 | 5 | 5 | **Selected.** Static is the default output model; components and scoped script bundling are sufficient without React. |
| Eleventy 3 with Nunjucks/WebC | 4 | 5 | 5 | 5 | 4 | 5 | 5 | Viable runner-up. Its flexible data cascade and template-language choices add local conventions and custom TypeScript/schema integration work that Astro can make more explicit. |
| Plain HTML templates + Vite multi-page build | 4 | 5 | 4 | 5 | 4 | 5 | 5 | Smallest conceptual runtime, but route generation, layouts, metadata, content loading, CSS extraction, asset handling, and build checks would become project-owned framework code. |
| Next.js static export + React | 4 | 2 | 5 | 4 | 2 | 3 | 4 | Rejected. It can export static files, but React and framework payload/conventions solve server and application needs this site explicitly does not have. Static export also excludes runtime-only features, so its extra surface brings little benefit. |

Astro is selected because it gives file-based static routes, build-time components, TypeScript-aware local scripts, asset bundling, metadata composition, and portable HTML without requiring a client framework. It supports the master plan's TypeScript intent while deliberately declining the default React suggestion: the only interactive state is a bounded catalogue filter that the platform DOM APIs can implement accessibly in less code.

Eleventy remains the documented fallback if an Astro 7 proof in TEC-002 reveals an unresolvable accessibility, CSP, determinism, or host incompatibility. A switch requires an ADR revision; it is not an implementation-level substitution.

## 4. Stack and version policy

### 4.1 Approved majors

| Layer | Approved major | Role and constraint |
|---|---|---|
| Node.js | `24.x` LTS | Build and test runtime only; never a production request runtime. |
| npm | `11.x` | Package manager supplied with the pinned Node toolchain. `package-lock.json` is mandatory. |
| Astro | `7.x` | `output: "static"`; no server adapter, React integration, content CMS adapter, view-transition router, or experimental runtime feature. |
| TypeScript | `6.x` | Strict ESM source; no implicit `any`; browser enhancement target fixed by TEC-002 rather than TypeScript's floating default. |
| Ajv | `8.x` | Independent Draft 2020-12 validation in addition to the governed dependency-free collection validator. |
| `ajv-formats` | `3.x` | Only formats explicitly required by the schemas; format validation cannot promote a record. |
| Playwright | `1.x` | Later local/CI browser and interaction testing only. No browser automation ships. |
| axe-core | `4.x` | Later automated accessibility checks only; manual QA remains mandatory. |

Astro 7 currently uses Vite 8 transitively; Vite must not be added as a direct dependency unless TEC-002 documents a concrete need. Use Node's built-in `node:test` for pure unit tests before adding a test runner. Do not add React, Preact, Vue, Svelte, Tailwind, a component kit, a search library, a form library, an icon package, a client router, a state library, a telemetry SDK, or an image service by default.

### 4.2 Exact pin and upgrade rules

TEC-002 must select a reviewed patch inside each approved major and record exact numeric versions in `package.json` (no `^`, `~`, `*`, tag, Git URL, or unbounded workspace reference). Commit the npm lockfile and use `npm ci`; CI fails if the lockfile changes during install. Pin the Node patch in the repository toolchain declaration and CI image by immutable version or digest.

- Patch upgrades require a fresh lockfile, dependency/license/advisory review, clean validation, two identical production builds, and the applicable automated smoke, accessibility, and budget checks.
- Minor upgrades are manual change requests with changelog review and full regression.
- Major upgrades, framework changes, client-framework additions, server adapters, or new runtime services require a successor ADR and governance review.
- No automated dependency update may merge itself. Lockfile-only changes receive the same review as manifest changes.
- Production dependencies are build-time only. Remove unused packages; a duplicate-tree and license inventory is part of the release evidence.
- If a supported major develops an unpatched critical vulnerability, stop the release. Upgrade within the approved major or revise this decision; never waive the finding silently.

Node's official schedule identifies 24 as LTS at this decision date and advises production use of Active or Maintenance LTS releases. Astro 7 is the current stable major: the project released 7.0 on 22 June 2026 and 7.1 on 16 July 2026. TypeScript 6 is the current transition release. These time-sensitive facts must be rechecked by TEC-002 before pinning a patch.

## 5. Repository and module architecture

TEC-002 may initialize the following shape. This ADR creates none of it:

```text
/
├── content/
│   ├── data/                    # governed source-stage inputs; never imported by UI components
│   ├── pages/                   # governed authoring inputs; never copied verbatim to dist
│   ├── schemas/                 # DAT-owned schemas, fixtures, adapter, and validator
│   └── generated/public/        # future DAT-002 canonical public projection only
├── docs/                        # decisions/specifications; never copied to dist
├── public/
│   ├── brand/fonts/             # governed asset source; never Astro's direct publicDir
│   ├── brand/licenses/          # governed license source; never copied wholesale
│   └── cv/                      # sole future governed PDF source; conditional allowlist
├── .build/public/               # ignored allowlisted staging dir used as Astro publicDir
├── scripts/
│   ├── validate-content.mjs     # orchestration, not a second governance implementation
│   ├── build-public-model.mjs   # reads canonical aggregate, emits memory/staging projection
│   ├── scan-public.mjs          # allowlist, marker, metadata, source-map and secret scan
│   └── verify-reproducible.mjs  # sorted checksums / double-build comparison
├── src/
│   ├── pages/                   # the seven routes plus 404; no dynamic detail routes
│   ├── layouts/                 # document shell, metadata slots, print order
│   ├── components/
│   │   ├── shell/               # skip link, header, nav, footer, affiliation text
│   │   ├── content/             # prose, evidence row, timeline, action, citation
│   │   ├── catalogue/           # publication list/record/filter markup
│   │   └── states/              # empty, unavailable, no-results, error/recovery
│   ├── lib/
│   │   ├── content/             # typed loader and public projection guards
│   │   ├── routes/              # closed route registry and fragment rules
│   │   ├── seo/                 # canonical/meta/sitemap public values
│   │   └── security/            # safe URL/mailto and public-value helpers
│   ├── client/
│   │   └── publication-catalogue.ts
│   └── styles/                  # token bindings, reset/base, layout, components, modes
├── tests/
│   ├── unit/                    # pure adapters, query parsing, URL/mailto, route registry
│   ├── integration/             # render projection, metadata, leak and asset checks
│   ├── e2e/                     # navigation, filter, failure and no-script journeys
│   ├── accessibility/           # automated plus manual protocol inputs
│   └── fixtures/                # synthetic, non-private boundary cases
└── dist/                        # generated deployable artifact; ignored and never hand-edited
```

If DAT-002 chooses a different governed output path, TEC-002 changes only the loader input, not the trust model. UI components may import types and the already-minimized public projection; they may not import `content/data/publications.json`, private evidence, manifests, registry rows, source notes, or authoring documents directly.

Generated ownership is explicit:

- DAT-002 owns the canonical aggregate/public projection and its provenance outside `dist/`.
- TEC-002 owns application/tool configuration and lockfile.
- TEC-002's staging script owns `.build/public/`; Astro must set that directory—not the governed root `public/`—as `publicDir`. This prevents Astro's default wholesale copy behavior from releasing candidate/unapproved files.
- Astro owns `.astro/` and `dist/`; test tools own `coverage/`, screenshots, reports, and traces. All are reproducible, ignored build products and never editorial sources.
- BLD owns route/component implementation; DES owns component contracts/tokens, not generated CSS.
- TEC-003 owns host adapter files and release manifests, not site content.
- No build step writes back into `content/`, `docs/`, or governed manifests.

## 6. Trust boundaries and data flow

```text
PROTECTED / INTERNAL                         PUBLIC BUILD BOUNDARY

private evidence, registries, manifests
              │
              │ governed DAT review; never a web-build input
              ▼
source-stage datasets ── adapter ── canonical aggregate
                                        │
                         schema + collection + freshness gates
                                        │
             select ONLY verified + publish + public records
                                        │
                      minimized typed public projection
                                        │
                             Astro render components
                                        │
                  dist scan + tests + deterministic checks
                                        │
                                        ▼
                            static artifact manifest
                                        │
                         TEC-003 host capability gate
                                        ▼
                           preview (always noindex)

Production promotion is outside this work and remains behind Gate G5.
```

The public projection is a one-way minimization boundary. It includes only exact approved public wording, approved domain display fields, public actions, stable public IDs/fragments, and public availability states. It excludes source IDs, claim IDs unless separately approved for presentation, evidence lineage, paths, hashes, review notes, internal dates, reviewer identities, private endpoints, translations in review, hidden corrections, authoring markers, and every held/suppressed/withdrawn/stale/conflicted record.

An empty projection is valid data but may be a release blocker according to route availability. At the current state, `/publications` must render the governed generic unavailable/empty explanation, not the 27 eligible records and not an internal count. A production build fails when an availability record marks a required route as blocked. A preview can render the same generic public-safe unavailable state with `noindex`; it never renders internal diagnostics into HTML. Detailed validation diagnostics remain CI artifacts with restricted retention.

### 6.1 Validation and build order

Every CI, preview, and production build runs these stages in order and stops on the first failure:

1. Verify the pinned Node/npm versions; run `npm ci` with the committed lockfile and lifecycle-script policy defined by TEC-002.
2. Scan the repository inputs for forbidden symlinks, unexpected public files, dotfiles, backups, archives, source maps, executable binaries, and case-colliding paths.
3. Run `node content/schemas/validate.mjs` for schema inventory, fixtures, current publication compatibility, collection relationships, lifecycle rules, DOI/order/date invariants, and marker/privacy checks.
4. Validate the DAT-002 canonical aggregate independently with Ajv Draft 2020-12, resolving only repository-local schemas. Network schema resolution is forbidden.
5. Run cross-record collection checks again through the governed validator: unique IDs/DOIs, foreign keys, author order and exactly-one-Faisal, lifecycle/disposition pair, freshness, translation, rights/consent, withdrawal and public-location completeness.
6. Create an in-memory or ignored staging public projection. Select only `verified/publish/public`; reject unknown fields and values. Do not serialize a private superset beside it.
7. Check the closed route registry, required/optional availability, stable fragments, title/description uniqueness, URL safety, same-tab external labels, mailto allowlist, and conditional font/CV asset approvals. Recreate `.build/public/` from an empty directory and copy only exact approved paths whose governed status and recorded SHA-256 pass; generate only approved discovery/host files there.
8. Type-check, lint, and unit-test; then run `astro build` in static/file mode with `.build/public/` as `publicDir`, trailing-slash policy `never`, externalized CSS, and production source maps disabled.
9. Scan `dist/` by file type and decoded text for private paths, source/provenance IDs, hashes, secrets, email addresses outside the approved allowlist, unresolved markers, raw source filenames, query-bearing private URLs, embedded metadata, external origins, forms, trackers, inline event handlers, unapproved assets, maps, and unexpected routes.
10. Parse all HTML/XML/JSON/CSS/JS and validate internal links, fragments, accessible names, headings/landmarks, canonical/robots/sitemap rules, CSP compatibility, bundle/request budgets, and zero third-party requests.
11. Run later browser smoke/accessibility checks against the built artifact, with JavaScript both enabled and disabled.
12. Build again in a clean directory with fixed locale, time zone, toolchain, input revision, and `SOURCE_DATE_EPOCH`; compare a sorted SHA-256 artifact manifest. Any unexplained byte difference fails reproducibility.

No stage may fetch live profile/publication data, mutate governed input, use the wall clock for public wording/order, or infer `publish` from `eligible`. Dates displayed to visitors come from approved content, never build time. External-link reachability is a separate review signal and cannot silently change content.

## 7. Route, component, style, and asset boundaries

### 7.1 Rendering and routes

Each `src/pages/*.astro` module is thin: it asks the typed loader for the route's public view model, selects a governed state, and composes components. It does not contain publication filtering logic, privacy policy, schema rules, or hard-coded fallback claims. The closed route registry is the single source for route IDs, paths, navigation order, titles, canonical generation, sitemap inclusion, and 404 link targets.

There are no dynamic record pages at launch. A project-detail route can be introduced only if the information architecture and content governance explicitly approve it; the existence of a reusable component is not route permission. Unknown paths produce the static 404. Build/data errors fail the build; they do not publish a fabricated `500` page. A host-level generic 5xx/maintenance response may be configured by TEC-003 without exposing diagnostics.

### 7.2 Component model

Components consume small, readonly view models and render semantic elements before ARIA. The shell supplies skip link, `header`, primary `nav`, one `main`, and `footer`; each page has exactly one descriptive `h1`. Native links, buttons, form controls, lists, `article`, `section`, `time`, `cite`, and `details` are preferred. No component accepts raw HTML. No MDX or unreviewed Markdown HTML is executed. Long titles, names, identifiers, and links wrap rather than truncate by default.

Shared state components cover required-route unavailable, optional empty, catalogue no-results, CV unavailable, institutional-email unavailable, failed external action, and 404. They expose a heading, explanation, affected scope, recovery action where real, and appropriate status semantics without timed dismissal or color-only meaning.

### 7.3 Styles and tokens

Implementation CSS binds the approved semantic tokens from `docs/DESIGN_TOKENS.md`; it does not invent raw colors, type scales, breakpoints, radii, shadows, or spacing. Layer order is `reset`, `tokens`, `base`, `layout`, `components`, `utilities`, `modes`. Utilities are limited and semantic; HTML templates do not become a utility-class design source. Component CSS is extracted to fingerprinted files, not inline, so the production CSP needs neither nonces nor `unsafe-inline`.

CSS includes explicit print, `prefers-reduced-motion`, and `forced-colors` layers. Print preserves Faisal-first identity, source/citation meaning, visible link destinations where useful, and no interactive-only controls. Focus is never removed. Layout is content-driven from 320 CSS pixels upward and remains usable at 200% text zoom and 400% browser zoom without page-level horizontal scrolling.

### 7.4 Font, CV, and other static files

- The primary font is the approved Alexandria Latin WOFF2 with weights 400/600/700 and `font-display: swap`; the exact OFL notice travels with it. It is self-hosted only. The system fallback is `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- The current font/OFL rows are candidate/unreleased. Until the brand manifest changes through its owner workflow, the public allowlist omits both and CSS uses the system stack. Absence, timeout, unsupported glyph, or blocked font must cause no content loss, overlap, or layout shift.
- Root `public/` is a governed asset-source directory, not Astro's direct copy directory. TEC-002 stages only exact status/hash-allowlisted files into the empty ignored `.build/public/` directory. The current candidate font and license therefore do not enter `dist/`. Approved governed filenames stay stable and receive short/revalidated caching; CSS and JavaScript produced by Astro carry content hashes. No unapproved or duplicate asset may be deployed.
- The only allowed CV location is `/cv/faisal-albalwy-cv.pdf`. DAT-004 must provide the approved, searchable, accessible, metadata-minimized English derivative. Before then, the file and all link/metadata/sitemap references are absent; the UI shows an unavailable state without pointing to a private source.
- Because the CV URL is intentionally stable, use `Cache-Control: public, max-age=3600, must-revalidate` plus `ETag`/`Last-Modified` support, not a one-year immutable policy. On withdrawal, the release process removes links and file and purges/invalidate caches before any replacement.
- Launch pages request zero images. There is no logo, portrait, decorative placeholder, favicon derived from a logo, supplied pattern, invented SVG, or remote media. Later OG work is separately governed by INT-003 and does not authorize an in-page asset.
- Generated CSS/JS with content hashes: `public, max-age=31536000, immutable`. HTML, XML, JSON, `robots.txt`, and `404.html`: `public, max-age=0, must-revalidate`. Stable font/license paths, if served directly: at most `max-age=86400, must-revalidate`.

## 8. Publication progressive enhancement

The serverless/static constraint means query parameters cannot select different server-rendered HTML. Therefore `/publications` always contains every **publishable** record in canonical governed order. The initial DOM does not hide records, and the unfiltered heading/count is correct without script.

Enhancement contract:

1. Render a native form with `q`, `year`, `type`, and `theme` controls but keep the enhancement-only controls hidden with the HTML `hidden` attribute until the module initializes successfully. A `<noscript>` explanation says the complete catalogue is shown and browser Find remains available.
2. The module reads only those four keys via `URLSearchParams`, caps `q` at 200 Unicode code points, normalizes whitespace/case for comparison, and matches against text/data attributes already public in the DOM. It makes no fetch, worker, storage, cookie, telemetry, or remote request.
3. Values are compared against build-generated allowlists. Invalid/unknown values result in the complete list and an accessible explanation; they never reach `innerHTML`, selectors, logs, metadata, or outbound links.
4. Filtering toggles `hidden` on existing publication `article` elements, updates a polite result-count region after direct user action, and gives a descriptive no-results state with a clear-reset button. It does not move focus on each keystroke or reorder records.
5. Submit/change updates the query with `history.replaceState` or `pushState` as specified by DES-004; the canonical link remains `/publications`. Clear returns to the unfiltered URL. Back/forward restores controls and results.
6. Stable record fragments remain addressable. If a fragment identifies a publishable record excluded by filters, the module clears conflicting filters or explains and reveals the target before focusing its heading; it never leaves a hidden focus target.
7. Citation copy, if implemented, copies only the visible approved citation string after a button action. Clipboard failure leaves selectable text and announces a concise non-destructive fallback.
8. Initialization failure removes/hides enhancement-only controls and leaves all records visible. No loading spinner is needed because the HTML is complete.

The enhancement target is at most **15 KiB Brotli** and one fingerprinted module request on R3. It is the only default browser JavaScript. A later feature that exceeds the budget or needs a framework, API, worker, persistence, or server requires architecture review.

## 9. Security, privacy, contact, and headers

### 9.1 Runtime security posture

Production consists only of static HTTPS responses. There are no secrets at build output or runtime. Do not use Astro `PUBLIC_*` variables or serialize any environment object into client code. Browser code has no endpoint to call. No form element may submit; no mail API, captcha, local/session storage, IndexedDB, cookies, authentication, analytics, pixels, error telemetry, social embed, remote script, or third-party CDN is allowed.

Only build-time, non-secret configuration keys listed in Section 11 may exist. CI secrets used by the eventual hosting workflow remain in the deployment system, never `astro.config`, source, client bundles, reports, previews, or artifact metadata. Logs redact repository absolute paths and approved email values where not needed.

Dependencies install from the configured registry using the lockfile. TEC-002 must document lifecycle-script handling, package provenance/license review, advisory scanning, and lockfile integrity. Production builds emit no browser or server source maps. Test traces/screenshots stay restricted, have finite retention, and are never copied to `dist/`.

### 9.2 Contact boundary

The public contact value may come only from a canonical `publish/public` profile/contact record with the institutional-email type, current approval, and an exact public location that includes R7. The renderer validates the address at build time and constructs a `mailto:` URL with `URLSearchParams`; no raw user input, page URL, search query, referrer, private address, body template, tracking parameter, or identifier is included.

The default subject is the fixed English text `Academic website inquiry`. Visible guidance asks visitors not to include confidential, student, health, credential, financial, or other sensitive information. The link opens the visitor's configured mail application and makes no delivery/response promise. If the record is absent, stale, withdrawn, or invalid, render `Institutional email is currently unavailable` with no personal email, phone, form, obfuscation script, or guessed substitute.

### 9.3 Required production response headers

TEC-003 must express and test the following host-level policy on HTML and errors; applicable asset exceptions are explicit. The CSP is a response header, not a meta substitute.

```text
Content-Security-Policy:
  default-src 'self';
  base-uri 'none';
  object-src 'none';
  frame-ancestors 'none';
  form-action 'none';
  script-src 'self';
  script-src-attr 'none';
  style-src 'self';
  style-src-attr 'none';
  img-src 'self';
  font-src 'self';
  connect-src 'none';
  media-src 'none';
  frame-src 'none';
  worker-src 'none';
  manifest-src 'self';
  upgrade-insecure-requests

Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Permissions-Policy: camera=(), geolocation=(), microphone=(), payment=(), usb=(), browsing-topics=()
Cross-Origin-Opener-Policy: same-origin
Strict-Transport-Security: max-age=31536000
```

Do not add `unsafe-inline`, `unsafe-eval`, wildcard sources, a reporting endpoint, or a remote origin to make a build pass. Astro's small-script auto-inlining must be disabled for production, or exact generated CSP hashes must be deterministically emitted and tested; external fingerprinted scripts are the preferred policy. `includeSubDomains` and HSTS preload are deferred until TEC-003 has a complete HTTPS/DNS ownership inventory and explicit approval; they are not safe assumptions in TEC-001.

Preview responses additionally require `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet` and a preview `robots.txt` that disallows all. Query/error/unavailable variants must emit no indexable alternate page and canonicalize to their base route where a canonical is permitted. PDFs receive `X-Content-Type-Options`, safe content type/disposition, the referrer policy, and an explicit canonical `Link` header only after INT-001 proves host support and DAT-004 approval.

## 10. Enforceable performance budgets

Budgets are measured against a production build over HTTPS with Brotli where supported; raw sizes are also recorded. Three mobile lab runs use the median with a cold cache and a representative mid-tier device/network profile. User-download PDFs are excluded from initial-page transfer but audited separately.

| Budget | Base routes R1/R2/R4–R7/404 | Catalogue R3 | Enforcement |
|---|---:|---:|---|
| Compressed HTML | `<= 100 KiB` | `<= 180 KiB` at 100 publishable-record fixture | build size check |
| Compressed authored CSS, total | `<= 35 KiB` | `<= 35 KiB` | bundle report |
| Compressed initial JS | **0 bytes / 0 requests** | `<= 15 KiB / 1 request` | bundle and request inventory |
| Font | `<= 75 KiB / <= 1 request` when approved; otherwise 0 | same | manifest/hash/request check |
| In-page images | **0 bytes / 0 requests** | **0 bytes / 0 requests** | request inventory |
| Initial same-origin requests | `<= 3` (HTML, CSS, optional font) | `<= 4` (plus JS) | browser trace |
| Third-party requests | **0** | **0** | host/origin allowlist |
| Total compressed initial transfer | `<= 250 KiB` | `<= 350 KiB` at 100-record fixture | browser trace |
| LCP, mobile lab median | `<= 2.5 s` | `<= 2.5 s` | QA-005 |
| CLS | `<= 0.05` | `<= 0.05` | QA-005 and font-failure run |
| INP proxy / field target | `<= 200 ms` | `<= 200 ms` | interaction trace / later field data only if privacy-safe |
| Total Blocking Time, lab | `<= 200 ms` | `<= 200 ms` | QA-005 |

The catalogue is exercised at the current public count, empty state, one record, long content, and a synthetic 100-record public fixture. A larger governed catalogue triggers measurement; it does not automatically justify pagination, a search service, or client framework. Budget regression fails CI unless this ADR is revised with evidence. Lighthouse scores may be recorded but do not replace the numeric budgets.

## 11. Accessibility and browser test targets

The conformance target is WCAG 2.2 AA. Automated tools are advisory gates with zero critical or serious findings; manual checks decide release readiness.

Required checks on every representative route/state:

- correct language, title, one `h1`, heading order, landmarks, skip link, current-page semantics, descriptive links/actions, lists/tables, citation and date semantics;
- full keyboard operation, logical focus order, visible focus, no keyboard trap, no hover-only content, and no unexpected focus movement;
- 320 CSS-pixel viewport, 200% text zoom, and 400% browser zoom/reflow with no loss, clipping, overlap, or page-level horizontal scrolling;
- default, hover, focus-visible, active, selected/current, disabled/unavailable, empty, no-results, error/recovery, and external-failure states as applicable;
- `prefers-reduced-motion`, forced colors/high contrast, browser print, system-font fallback, blocked font, image-disabled/no-image, slow/offline-after-load, bad fragment, invalid query, and JavaScript-disabled/failed modes;
- long publication titles, full author lists, DOI/URL strings, long navigation/action labels, 0/1/27/100 catalogue records, and the future accessible PDF;
- screen-reader smoke tests with VoiceOver + Safari on macOS/iOS and NVDA + Firefox/Chrome on Windows at the QA freeze.

Browser support is the current and immediately previous stable major of Chrome, Edge, Firefox, and Safari at the QA freeze, plus the current and previous iOS Safari. Because the base is semantic static HTML, older or unsupported browsers must still expose complete reading and navigation even when enhancement is unavailable. TEC-002 fixes an explicit browser compilation target; it must not rely on TypeScript 6's floating default. No CDN polyfill is allowed.

The browser matrix is run later by QA-003/004, not here. Print is tested in Chromium and Safari/Firefox representative engines. Windows forced colors and macOS/iOS reduced-motion/font scaling are manual targets.

## 12. Environment and configuration matrix

Only these non-secret build inputs are allowed; names may be implemented exactly by TEC-002/003:

| Variable | Purpose | Browser exposure |
|---|---|---|
| `SITE_BUILD_MODE` | Closed enum: `local`, `ci`, `preview`, `production`. | Never |
| `SITE_ORIGIN` | Absolute HTTPS origin used by canonical, sitemap, and absolute discovery URLs; `.invalid` local sentinel permitted. | Value appears only where a public URL is intentionally rendered; no environment object is serialized. |
| `SOURCE_DATE_EPOCH` | Reproducible build timestamp derived from the reviewed commit, not wall clock. | Never |
| `GIT_COMMIT_SHA` | Release manifest linkage outside public pages. | Never by default |

No `PUBLIC_*` or arbitrary prefix is permitted. `SITE_ORIGIN` is public by nature when emitted as a canonical URL, but it remains a server/build variable and cannot be read by client JavaScript. Adding any variable requires TEC review and a documented public/private classification.

| Concern | Local | CI | Preview | Production candidate |
|---|---|---|---|---|
| Origin | `https://local.invalid` sentinel | `https://ci.invalid` sentinel | exact HTTPS preview origin | exact owner-approved production origin; absence/mismatch fails |
| Content projection | public-only; internal diagnostics stay terminal/reports | public-only | public-only | public-only |
| Indexing | noindex | noindex | header + robots disallow all | indexable only after INT-001 and release gates; unavailable/query/error excluded |
| Source maps | local dev only, never artifact | restricted test artifacts only | off | off |
| Optimization | dev feedback | production-equivalent | production | production |
| Headers | local emulation/test | policy conformance test | exact preview policy | exact production policy |
| External publication | none | none | private/temporary preview only under current authorization | prohibited until Gate G5 and separate action |

Preview must not contain more data than production. Access controls supplied by a preview platform may be used operationally if separately approved, but the application itself gains no authentication. `noindex` is required even for an access-controlled preview and is not treated as privacy protection.

Canonical handling is centralized. Production fails unless `SITE_ORIGIN` is the approved HTTPS origin with no path/query/fragment. Preview canonicals use the preview origin and carry `noindex`; they must not assert a not-yet-approved production domain. Local/CI sentinels are forbidden in a promotable manifest. All internal paths are root-relative and host-neutral.

Set `TZ=UTC`, a fixed UTF-8 locale, deterministic collation functions, and explicit sort tie-breakers. A public `updated` value comes only from governed content. Do not embed build host, user, absolute path, current time, branch name, CI URL, or tool version banners in public bytes.

## 13. Hosting, preview, deployment abstraction, and rollback

The deployable unit is an immutable directory plus a sorted manifest of path, byte size, MIME type, SHA-256, cache class, and expected indexing status. Host configuration is an adapter that maps the architecture's headers, redirects, 404, cache classes, and preview rules; content/components never import a provider SDK.

TEC-003 must prove the default host candidate supports:

1. static file hosting over HTTPS with custom security headers on success and error responses;
2. exact `/404.html` mapping with HTTP 404, no soft 404;
3. no-trailing-slash canonical paths with at most one approved redirect and no query leakage;
4. preview-specific `X-Robots-Tag` and `robots.txt` without changing site content;
5. atomic, immutable release identifiers and preview-before-promotion;
6. instant rollback by repointing to a prior known-good immutable artifact, not rebuilding old source;
7. cache invalidation/purge for HTML, withdrawn assets, and the stable CV path;
8. downloadable artifact/manifest retention and audit evidence without exposing secrets or private logs.

If any item fails, that host is nonconforming. TEC-003 selects a conforming static host or returns for an ADR amendment; it may not weaken a mandatory control.

The release sequence is build → validate → immutable preview → later QA → approval → atomic promotion. Production promotion, custom domain, and DNS remain prohibited in TEC-001/002/003 under the current boundary. Rollback triggers include private-data/asset exposure, unsupported claim, withdrawal, broken contact/CV state, accessibility blocker, CSP/header regression, corrupted routes, severe dependency finding, or performance regression. Roll back to the last approved artifact, purge affected mutable paths, verify headers/content, and preserve a minimal restricted incident record. Never repair production files in place.

## 14. Consequences, risks, and mitigations

### 14.1 Benefits and trade-offs

- Visitors receive durable HTML with strong SEO, accessibility, offline-after-load readability, low transfer, no tracking, and minimal attack surface.
- A closed public projection makes privacy and publication approval testable at the actual render boundary.
- No React runtime reduces bundle, hydration, CSP, state, and dependency complexity.
- Provider-neutral output makes previews and rollback straightforward and avoids application lock-in.
- The trade-off is that query filtering needs JavaScript and cannot return server-filtered HTML. This is acceptable because the full catalogue remains present and usable.
- The full catalogue increases R3 HTML size as records grow. The 100-record fixture and size budget expose the threshold early; architecture review precedes pagination/search-service adoption.
- Strict external CSS/scripts can add one or two requests versus inlining, but yields a simpler CSP and durable immutable caching.
- Build-time governance adds failure modes and slower CI. Those failures are intentional release protection, not reasons to bypass checks.

### 14.2 Risk register

| Risk | Mitigation / stop condition |
|---|---|
| Eligible records accidentally render | UI never reads source-stage datasets; projection requires the three-field publish predicate; integration test injects eligible/held/withdrawn records and expects zero output. |
| Private evidence or markers enter `dist/` | Closed input paths, public allowlist, decoded output scan, route/file inventory, metadata scan, and zero symlink/archive policy. Any hit blocks release. |
| Astro auto-inlines script/style and weakens CSP | Configure external styles and script policy; inspect every HTML file against CSP. Do not add `unsafe-inline` as a workaround. |
| Host cannot apply headers/status/rollback | TEC-003 capability proof before adoption; change host adapter or revise ADR, never silently degrade. |
| Font candidate used before release approval | Manifest-status gate and hash/license allowlist; system fallback is the complete default. |
| Stable CV is stale or withdrawn but cached | Short revalidation, explicit withdrawal purge, absent/unavailable UI, release manifest inventory. |
| Query input creates XSS, leakage, or inaccessible hidden target | URLSearchParams, allowlists/caps, text-only DOM APIs, no `innerHTML`, no outbound reflection, fragment/filter reconciliation, browser tests. |
| Third-party dependency compromise | Minimal direct set, exact pins and lockfile, lifecycle policy, advisory/license/provenance review, no runtime packages, reproducible builds. |
| No analytics obscures real-user performance | Use privacy-safe lab/field observation only if separately approved later; launch decision relies on repeatable synthetic budgets. No tracker is introduced for measurement convenience. |
| Static errors lack application recovery | Fail builds before release, provide correct 404 and public-safe unavailable states, host generic 5xx without diagnostics, retain last known-good artifact. |
| Framework/version churn | Approved majors, patch/minor review policy, fallback documented, major changes require ADR. |

## 15. Acceptance checks for this decision

TEC-002/003 implementation is conforming only when evidence demonstrates all of the following:

- Astro produces only static files for the closed route list; there is no adapter/server/API/function output.
- Exact approved majors and numeric package pins are present; clean `npm ci` and double builds are reproducible.
- Schema fixtures, Ajv validation, governed collection checks, public projection tests, and current source compatibility pass.
- An `eligible` fixture and all hold/suppress/withdraw/stale/conflict/privacy/rights/translation failures produce no public value, record, count, metadata, URL, or asset.
- Every base route is complete with JavaScript disabled; R3 shows the full public catalogue and its module stays within 15 KiB Brotli.
- The route/fragment/query/404/unavailable/contact/CV rules match the information architecture and no extra route exists.
- No form, endpoint, cookie, storage, analytics, tracker, remote script/font/media, logo, portrait, invented SVG, protected file, public source map, or unexpected external request appears.
- The institutional mailto is approved, fixed-subject, query-free and safe, or the unavailable fallback appears without a substitute.
- Required headers pass on HTML and errors; preview is noindex; CSP works without unsafe sources.
- Asset cache classes, conditional font/CV rules, output manifest, withdrawal path, preview promotion, and immutable rollback are tested without deployment.
- Numeric performance budgets pass, and WCAG/browser/failure-mode targets have executable later test cases.
- `dist/` contains no private paths, IDs/markers, hashes, secrets, metadata leakage, unexpected files, or unapproved public value.

## 16. Exact downstream handoffs

| Work package | Required handoff from TEC-001 |
|---|---|
| **TEC-002** | Initialize only the approved Astro/TypeScript static skeleton; exact-pin approved majors; implement directories, closed routes, token/style layers, validators, scripts, tests, budgets, static-output/CSP-compatible settings, browser target, and reproducibility rules. Do not deploy or promote content. |
| **TEC-003** | Implement the provider-neutral host adapter, preview/production matrices, headers, redirects, 404, caches, noindex, artifact manifest, atomic promotion and rollback tests. Prove Sites capability or select a conforming static host; no account/domain/DNS/production action. |
| **DES-004** | Specify the component variants/states against these semantic, no-script, filter, query, fragment, focus, long-content, forced-color, reduced-motion, print, unavailable, font/no-image, and 320/200%/400% contracts. |
| **DES-005** | Prototype Home and representative internal/catalogue pages using real approved density, Faisal-first text-only affiliation, system-font/no-image completeness, and both enhanced/non-enhanced states before G3. |
| **BLD-001** | Implement semantic shell, token bindings, navigation/current/focus behavior, text affiliation, font fallback, modes, and zero-JS base. |
| **BLD-002** | Build `/` from the public projection only; preserve research-first hierarchy and safe CV/content gaps. |
| **BLD-003** | Build `/about`, `/contact`, and conditional CV delivery; implement approved institutional mailto or exact unavailable states; never copy a source CV. |
| **BLD-004** | Build `/research`; no project route unless separately approved, and no speculative project/system claims. |
| **BLD-005** | Build the full static publication catalogue and bounded vanilla enhancement exactly as Section 8; citations/featured choices cannot create quality claims. |
| **BLD-006** | Build `/teaching` from public canonical records; structural tests must reject schedule/student/room/section/time/delivery-mode data. |
| **BLD-007** | Build `/leadership-service` with governed periods, current-status labels, categories, and no additive/source-specific metric inference. |
| **BLD-008** | Integrate the closed route set; enforce cross-route content, tokens, navigation, actions, budgets, responsive modes, and public-projection consistency. |
| **BLD-009** | Implement true 404, public-safe unavailable/empty/no-results/external-failure/font/no-image states and host-error handoff; never expose diagnostics. |
| **INT-001** | Add unique metadata, canonical URLs, sitemap/robots, and PDF discovery only for public approved routes/assets. Query/error/unavailable/preview states are non-indexable; no logo favicon. |
| **INT-002** | Generate JSON-LD only from the minimized public projection; Faisal is site owner/primary entity, Taibah University only a verified affiliation, never site publisher. |
| **INT-003** | Treat OG metadata/asset as a separately governed optional output. It must be Faisal-first, logo-free, portrait-independent, locally served, scanned, and absent until approved. |
| **INT-004** | Preserve the institutional-email-only decision and fixed safe subject. Document privacy guidance and unavailable behavior; do not add form, storage, captcha, endpoint, phone, personal email, or retention flow. |
| **INT-005** | Record and test the no-analytics/no-tracking decision. No analytics configuration is the conforming default. |
| **QA-001** | Run clean install, validators, types/lint/unit/integration/e2e, build, output scans, header tests, budget checks, and reproducibility comparison. |
| **QA-002** | Join every rendered value, relationship, date, DOI, link, and selection to a canonical publishable record and evidence path; confirm zero eligible-only promotion. |
| **QA-003** | Execute the browser/responsive/interaction matrix, including query/back/forward/fragment states and 320/200%/400%. |
| **QA-004** | Audit WCAG 2.2 AA manually and automatically, including keyboard, screen readers, focus, contrast, forced colors, reduced motion, print, no-script and future PDF. |
| **QA-005** | Measure the numeric transfer/request/CWV/bundle/cache/crawl budgets on representative and 100-record fixtures. |
| **QA-006** | Audit headers, dependency/lockfile integrity, CSP, public files/metadata/source maps, contact, requests, privacy markers, protected assets, withdrawal, and no tracking. |
| **QA-009** | Audit Faisal-first personal ownership, text-only subordinate affiliation, approved colors/type/license, font fallback, and zero logo/protected/invented identity asset. |
| **QA-007/008** | Regress approved fixes, then test visitor journeys against the same immutable candidate. Stop at Gate G5; no launch or P9 follows autonomously. |

## 17. Decision evidence and references

Binding local inputs: `docs/INFORMATION_ARCHITECTURE.md`, `docs/PROJECT_BRIEF.md`, `docs/CONTENT_GOVERNANCE.md`, `docs/ASSET_MANIFEST.md`, `content/schemas/README.md` and its schemas/validator/fixtures, `content/data/publications.json`, `docs/VISUAL_DIRECTION.md`, `docs/DESIGN_TOKENS.md`, `docs/brand/WEB_BRAND_SPEC.md`, `docs/brand/WEB_ASSET_MANIFEST.md`, `AUTONOMOUS_EXECUTION_POLICY.md`, and `ACADEMIC_WEBSITE_MASTER_BUILD_PLAN.md`.

Time-sensitive primary technical references checked on 19 August 2026:

- [Astro 7.0 release](https://astro.build/blog/astro-7/) — current major and Vite 8/build architecture.
- [Astro 7.1 release](https://astro.build/blog/astro-710/) — current stable 7.x release line at the decision date and finer-grained CSP controls.
- [Astro project structure](https://docs.astro.build/en/basics/project-structure/) — `src/pages`, `public`, and build-time asset conventions.
- [Astro client-side scripts](https://docs.astro.build/en/guides/client-side-scripts/) — vanilla TypeScript bundling without a UI framework.
- [Astro configuration reference](https://docs.astro.build/en/reference/configuration-reference/) — static output, path, build, and security configuration surface to be implemented by TEC-002.
- [Node.js release schedule](https://nodejs.org/en/about/previous-releases) — Node 24 LTS status and production LTS policy.
- [TypeScript 6.0 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html) — current major and need to set an explicit browser target rather than accept the floating default.
- [Eleventy stable documentation](https://www.11ty.dev/docs/) — viable v3 static alternative and portable `_site` output.
- [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports) — viable but broader React-based alternative with no runtime server in export mode.

This record selects architecture only. It does not initialize the app, create configuration, modify governed inputs, approve any asset or content, close G2, deploy a preview or production site, connect a domain, change DNS, publish, close Gate G5, or begin P9.
