# QA-007 local release-candidate report

**Decision:** **PASS — one complete, reproducible, local/CI noindex release candidate is ready for QA-008 review.** This decision is not publication, deployment, indexing, production, institutional approval, or G5 authorization.

**Reviewed:** 19 August 2026 (Asia/Riyadh)  
**Required toolchain:** Node 24.19.0; npm 11.19.0  
**Input candidate:** `c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8` (17 artifacts)  
**Final CI manifest:** `6f2712522d6690db1868afa1dc43df65ed1e88afe00bd74a8de66fdd1a62a031` (20 artifacts)  
**State:** `indexable:false`, `promotable:false`, no provider/host/deploy configuration

## 1. Evidence and promotion decision

QA-007 consumed the completed QA reports without changing their source evidence:

| Input | SHA-256 | Handoff |
| --- | --- | --- |
| `docs/AUTOMATED_VALIDATION_REPORT.md` | `2fdb7b7aa1da479b2464c7366c09793d74de8dc6bc01038aa93a5e00fdb9de38` | QA-001 PASS |
| `docs/PROVENANCE_AUDIT.md` | `bc777bcf5807dd9b164b0517064a13282c0668408a0c37ce3a433cdd3d62f1c1` | QA-002 PASS; controlled holds excluded |
| `docs/CROSS_BROWSER_REPORT.md` | `d303eef5442d324286f27099b642a0e5b453d08788b43bf1126772b9ffe4adc3` | responsive/cross-browser PASS |
| `docs/ACCESSIBILITY_REPORT.md` | `4dfb75716e13a80f6c237c4607cce3cc1ff61904aadc0421934e1bbd0f94e073` | WCAG 2.2 A/AA PASS |
| `docs/PERFORMANCE_TECHNICAL_SEO_REPORT.md` | `957969683b5098bff3e914c9e69f8947f8e42f002b3695c738e264a103e97b76` | static performance/SEO PASS |
| `docs/SECURITY_PRIVACY_REPORT.md` | `56296a9e1eddd00f378dd7e535015992a6c8823257b5fb2b4c08cd0ece399d43` | security/privacy PASS |
| `docs/IDENTITY_COMPLIANCE_RELEASE_REPORT.md` | `c46e898b1bd279ea815d279df0f1c971dfc5687994703693c3a93cf0a0e372a5` | identity PASS; no institutional/legal claim |

`content/release/qa-007-promotion.json` is a deterministic append-only decision (`c997cbfaf1a78207fa1441fbbf575259be2ce0458e6f059adf9ce26fa4fdf555`). Its runtime adapter validates all six named source fingerprints, the complete ordered inventory, lifecycle approvals, empty held collections, CV metadata and exact CV bytes before returning a promoted in-memory copy. The source aggregate remains `eligible`/`internal_only` and was not rewritten.

| Promoted package | Exact public inventory | Exclusions retained |
| --- | --- | --- |
| Publications | 27 canonical lineages: 26 DOI and one Manchester thesis | one held JNMES candidate and three linked versions do not enter the count |
| Editorial selections | latest 5 and featured 4 in their approved order | no citation, quality, rank or impact implication |
| Research | 3 themes and 7 exact publication bindings | zero projects/systems |
| Teaching | 19 privacy-safe course titles | zero occurrences, sections, schedules or student data |
| Career | 2 records | no unsupported current-role inference |
| Service | 10 records: 3 leadership, 5 peer-review, 2 community | no summed total and no hidden committee records |
| Actions | 3 approved profiles, one institutional email action, exact CV | no private email, phone, form or alternate route |

The featured IDs are `doi-10-3390-systems14040385`, `doi-10-1016-j-aej-2025-06-011`, `doi-10-3389-fcomp-2024-1387354`, and `doi-10-2196-27816`. The latest IDs are `doi-10-1016-j-eswa-2026-132969`, `doi-10-3390-systems14040385`, `doi-10-32604-cmc-2025-075098`, `doi-10-1016-j-aej-2025-06-011`, and `doi-10-18280-isi-300510`.

## 2. Public staging and artifact inventories

The staging allowlist contains exactly three files. Candidate fonts, logos, brand media, source HTML and all other `public/` material remain excluded.

| Staged path | Bytes | SHA-256 |
| --- | ---: | --- |
| `cv/faisal-albalwy-cv.pdf` | 226,604 | `cdceb414a94fa921a12ff975c907793d8523db692597f70ea7c04b69f5074c8f` |
| `og.png` | 32,565 | `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6` |
| `robots.txt` | 26 | `331ea9090db0c9f6f597bd9840fd5b171830f6e0b3ba1cb24dfa91f0c95aedc1` |

The final CI manifest contains exactly these 20 artifacts:

| Dist path | Bytes | SHA-256 |
| --- | ---: | --- |
| `_astro/contact.astro_astro_type_script_index_0_lang._6mdOxoL.js` | 181 | `8aea457281c3e9a50bae283881023b7c4d28e009675f797ae4b03a4673d5a20b` |
| `_astro/contracts.omjMR6DK.css` | 12,572 | `8ab1b194ca1fbc1f56727855567e234a49e49e99de751434c482fd5f73635b21` |
| `_astro/leadership-service.QlVp5GWP.css` | 657 | `fa8340d9470fa404d6f466d8213c4cfcf2bab0903360a7557881c1e808a7b63f` |
| `_astro/PreviewLayout.astro_astro_type_script_index_0_lang.BQdSvWD2.js` | 329 | `48c7cdd8e6614978ea3d35b4e0c2342f7b3921a188cf5e63709bb57e4a9ab11e` |
| `_astro/publications.BZ5sgV__.css` | 8,149 | `1cf95fc3e3488f175cb245ac5ded1aec79b67879b027fcfe20a1f923bd67412b` |
| `_astro/PublicationsContent.astro_astro_type_script_index_0_lang.Dp_qe6dg.js` | 7,029 | `81a172479ac9a3797b14a238b6d61c5aad21c2f5b1f717bc4df029ab2a7e319d` |
| `_astro/research.DglL1LrI.css` | 1,067 | `33867afd26693e665cb16265d0af70dec58f3907cfc0c0e1d3b3282d8bab7e64` |
| `_astro/teaching.TOXHhOaM.css` | 987 | `80632a73cace6423c82a17de698462fa5dbd8f0fa5a87d9fbee56b2c95ca60cc` |
| `404.html` | 5,363 | `926d50bc75b17274639f40c25ac7c14933dcd7a1fc791b835bb7c416894e67b3` |
| `about/index.html` | 8,309 | `60d422abb63f917cfd8a76f585c58febba67df3e06dc284dd2b9a0c1ddf014b9` |
| `contact/index.html` | 8,313 | `d586329a8f3ece86af9b08f0ac92221f42e73979a84ca29117526e4a5d486685` |
| `cv/faisal-albalwy-cv.pdf` | 226,604 | `cdceb414a94fa921a12ff975c907793d8523db692597f70ea7c04b69f5074c8f` |
| `index.html` | 10,653 | `dc98af68b59527829548793069a48ec57e1f3697f45d1e71016327698cc4c93d` |
| `leadership-service/index.html` | 10,929 | `2a7099217e6aad430b0c0c1d4ea6179e28add364cd2e79270cc119eb078db0b6` |
| `og.png` | 32,565 | `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6` |
| `publications/index.html` | 69,912 | `5cc5e0680ab35c60c6f0848ca8d6a5ccb2f05390965306fb815ec313203c887c` |
| `research/index.html` | 11,791 | `ed800c6c21331beb827db48aa1e5653d868ae72421bb8680c2eec483ed30e241` |
| `robots.txt` | 26 | `331ea9090db0c9f6f597bd9840fd5b171830f6e0b3ba1cb24dfa91f0c95aedc1` |
| `sitemap.xml` | 109 | `63835cfef3e52851c5fda3c47603a3a40f7da0784eedf8c8b068effb20e07ac2` |
| `teaching/index.html` | 9,784 | `c7ad160ad93bb3cf249c12b1ea5824da792641c52266c35eba3f8430cafa1ac8` |

## 3. Route, module and link result

| Route/resource | Substantive projection | Discovery/interaction result |
| --- | --- | --- |
| `/` | identity, 3 themes, featured 4, teaching/service/About/Contact/CV pathways | one Person/ProfilePage JSON-LD graph; exact OG; noindex |
| `/research` | 3 themes and 7 exact bindings to canonical publication fragments | one bounded CollectionPage graph; all targets exist |
| `/publications` | 27 unique records in canonical order; latest 5; featured 4 | 13 matches for `q=blockchain`; 2024+preprint isolates SSRN; history/query/invalid/no-result/clear/fragment/citation recovery pass |
| `/teaching` | 19 course titles | zero occurrences; one bounded CollectionPage graph |
| `/leadership-service` | 3/5/2 records, source-specific counts kept separate | historical wording; one bounded CollectionPage graph |
| `/about` | verified biography, role, PhD, historical career, thesis/profile/CV context | exact five-page CV action; one ProfilePage graph |
| `/contact` | approved guidance and institutional `mailto` only | no form/storage/transmission endpoint; zero JSON-LD |
| `/404.html` | deterministic recovery | 404 contract; zero JSON-LD |
| `/cv/faisal-albalwy-cv.pdf` | exact reviewed, tagged five-page English CV | HTTP 200, `application/pdf`, 226,604 bytes and exact hash |

All eight HTML documents have exactly one `h1`, the exact noindex directive, route-correct canonical/OG/Twitter metadata, same-origin fingerprinted executable scripts and zero inline executable scripts. JSON-LD appears once on the six approved entity routes and nowhere on Contact/404. `robots.txt` disallows all crawling and `sitemap.xml` remains the exact empty noindex sitemap. External actions are limited to governed DOI/publisher/institutional/profile URLs; no remote runtime resource is loaded.

## 4. Regression and browser evidence

The final pinned `npm run verify` passed end-to-end:

- scope safety: 11 governed fingerprints;
- schemas: 22/22, plus 14 expected-invalid fixtures and two independent Ajv checks;
- Astro: 43 files, zero errors/warnings/hints; TypeScript: PASS;
- tests: 57/57; dependencies: zero vulnerabilities; license metadata: 269 packages;
- staging scan: 3 files; dist scan/budget: 20 files, CSS 4,858 B Brotli, JS 2,644 B Brotli;
- analytics scan: 73 source/build/release files, 383 dependency identities and 25 generated/public resources; no analytics;
- contact privacy: one approved site action, zero site-side collection or retention;
- two clean CI builds: all 20 artifact hashes identical.

Real-browser validation used Chrome 151.0.7922.140 at 1440×1000, 768×900 and 390×844. All substantive routes, 404 and the CV were exercised. Every tested HTML route had zero horizontal overflow, zero console warnings/errors, correct one-heading/noindex/JSON-LD state, and externally loaded same-origin JavaScript. Mobile Menu reflected `aria-expanded=false/true`, changed its accessible label, and retained navigation parity. The first keyboard Tab reached the skip link and Enter moved focus to `#main-content`. Search, combined filters, no-results/clear, malformed URI fragment, canonical fragment recovery and URL history were exercised against the rendered catalogue.

axe-core 4.13.0, executed with Playwright 1.62.1 and installed Chrome, reported **zero WCAG 2.0/2.1/2.2 A/AA violations** across 8 pages at desktop and mobile: 16 complete scans. Visual inspection found clean Home and Publications hierarchy/reflow at desktop and mobile with no clipping. The exact 1200×630 OG remained the accepted text-only card.

## 5. Resolved findings and retained controls

| Finding | Resolution and retest |
| --- | --- |
| Release source records were intentionally internal-only | fail-closed overlay validates source fingerprints and creates only an in-memory public copy; dedicated promotion regression test passes |
| Reviewed CV was not staged | exact-hash PDF is the sole new stable download; Home/About/shell actions and MIME/hash tests pass |
| Declared CSP prohibited the earlier inline enhancement scripts | asset inlining is disabled and every executable script is a same-origin fingerprinted `.js`; scan and Browser pass; `unsafe-inline`/`unsafe-eval` were not added |
| Malformed percent-encoded fragments could throw during enhancement | decoding now fails to the approved invalid state and complete catalogue; Browser retest passes |
| Contact scanner read PDF binary strings as HTML links | textual-resource scan is now type-bounded; HTML retains one exact approved action while CV integrity is checked by its binary contract |

No held/private marker, JNMES title/DOI, teaching occurrence, private source path/ID, unsupported current-role assertion, combined review total, font, logo, portrait, form, analytics, storage or remote runtime resource was found in the staged or dist projection.

## 6. Rollback, withdrawal and handoff

Rollback is deterministic: withdraw or invalidate `content/release/qa-007-promotion.json`, rebuild from clean staging, and the runtime promotion validator fails closed before public projection or CV staging. Artifact rollback may also restore the prior 17-artifact manifest `c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8`; manifest/hash verification detects partial or tampered restoration. A source fingerprint, approval, inventory, CV byte/hash or release-control mismatch is a hard build failure.

Remaining conditions are intentionally non-launch: no production hostname/host adapter/account exists; host headers/logging/caching need G5 review; indexing and sitemap population remain blocked; current Browser evidence is Chrome plus automated standards checks rather than a production-host field test. QA-008 may independently audit this exact candidate and manifest. Only a later authorized G5/production package may choose a host, enable production origin/indexing or deploy. QA-007 does none of those actions.
