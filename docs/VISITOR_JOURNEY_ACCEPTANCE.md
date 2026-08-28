# QA-008 visitor-journey acceptance

**Decision:** **PASS — provisional local release readiness.** All eight critical visitor tasks completed against the exact frozen noindex candidate without a dead end, misleading claim, inaccessible essential action, private/held leakage, or release-blocking defect. This is expert scenario-based acceptance, not participant research, production analytics, publication approval, deployment approval, institutional approval, or Gate G5 approval.

**Reviewed:** 19 August 2026 (Asia/Riyadh)  
**Frozen CI manifest:** `6f2712522d6690db1868afa1dc43df65ed1e88afe00bd74a8de66fdd1a62a031`  
**Artifact inventory:** 20 files; `static-noindex-candidate`; `indexable:false`; `promotable:false`  
**QA-007 report:** `1644bff194731cb974fb0f9103cb526990564422f3e60aa52ecf54b1066ebe74`  
**CV:** `cdceb414a94fa921a12ff975c907793d8523db692597f70ea7c04b69f5074c8f`, 226,604 bytes, five pages  
**OG:** `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6`, 1200×630  
**Canonical content:** `d09d0afc23cdc98e4e82ed1eee962cf503a07db320d7c65fa8022edad7ebb7db`

## 1. Method and environment

This audit used the approved project brief, T1–T8/A1–A7 information architecture, editorial/content decisions, wireframe/prototype decisions, all independent QA reports, and the QA-007 release-candidate ledger. It made no claim of interviews, observed participants, screen-reader users, traffic, conversion, field performance, or production-host behavior.

| Surface | Evidence |
| --- | --- |
| Candidate | the existing CI `dist` represented by the frozen 20-artifact manifest; manifest hash checked before and after testing |
| Browser | connected Google Chrome 151.0.7922.140 through the available Browser surface |
| Viewports | 1440×1000 desktop; 640×900 200%-reflow proxy; 320×800 400%-reflow proxy |
| Interaction | semantic links/controls, keyboard Enter/Escape/Tab behavior, query/filter/history, fragments, PDF viewer, failure/recovery paths |
| Supplemental evidence | generated HTML, CSS/source contracts, existing focused regression tests, QA-004 accessibility/mode evidence, QA-007 full verification |
| Frozen verification | QA-007: 57/57 tests, 22/22 schemas plus two Ajv checks, Astro 43 files with zero diagnostics, two reproducible 20-artifact CI builds |

The rendered Home snapshot contained meaningful banner, navigation, main and footer content; no framework error overlay appeared. Browser warnings/errors were zero after the complete journey sequence. Desktop publication evidence and 320-pixel Home/menu screenshots were inspected for hierarchy, focus visibility, wrapping and clipping; they were not added to the repository.

## 2. Audience scenario coverage

| Expert scenario | Tasks exercised | Observed completion | Result |
| --- | --- | --- | --- |
| Academic researcher/collaborator | identify the three research themes; inspect seven mapped outputs; reach a canonical publication; search a specified record; inspect DOI/publisher evidence; reach collaboration guidance | Research stated its scope and limitations; the mapped link reached the exact visible record; title search returned one deduplicated result; the DOI reached the exact MDPI article; Contact presented a research/collaboration inquiry category | PASS |
| Prospective/current student | inspect teaching scope; distinguish course evidence from schedules, supervision availability, admission/funding promises; reach appropriate inquiry guidance | 19 unique course titles appeared once; sections, rooms, times, enrolment, students and course codes were absent; no availability/funding promise appeared; Teaching linked to bounded Contact guidance | PASS |
| Institutional/industry visitor | verify role, historical leadership/service, affiliation and personal-site boundary; inspect CV and collaboration path | About, Leadership & Service and shared identity exposed the approved facts; service remained 3/5/2 and source-specific; the exact five-page CV opened; Contact distinguished professional inquiry from institutional commitment | PASS |
| General visitor | identify Faisal; navigate every core section; distinguish Contact from Download CV; recover from no results, malformed state and 404 | Faisal-first identity and text affiliation persisted on every route/state; utilities remained distinct; all recovery paths returned to complete content or Home | PASS |

All seven approved audience segments A1–A7 are covered by these scenarios. No journey depended on a logo, image, hidden submenu, private channel, unavailable project page, speculative detail route or browser history.

## 3. Eight ranked task journeys

Severity uses P0 critical, P1 major, P2 moderate and P3 minor. “Choices” counts destination/download/external-evidence actions; menu opening, search, filter, scrolling and same-route fragments do not add a purposeful choice.

| Task | Goal/start | Actions and expected evidence | Observed outcome | Choices / friction | Result |
| --- | --- | --- | --- | --- | --- |
| T1 — understand research agenda | Home; academic/general evaluator | `Explore research` → inspect themes/bindings → one mapped publication record; expected ≤2 choices | three themes and seven bindings rendered; the first mapped link reached the exact 2026 healthcare-data record and its DOI/publisher actions | 2; no material friction | PASS |
| T2 — find and verify a publication | Home or Publications; researcher/editor/evaluator | Publications → search `Zero-Knowledge` → inspect canonical evidence; test filter/history/recovery | one of 27 records matched; canonical DOI and MDPI links were present; the DOI resolved in Browser to the exact article; adding year 2026 produced canonical query order; Back/Forward restored query and filter | 2; citation-copy not applicable because no governed citation string is emitted | PASS |
| T3 — assess collaboration/program fit | Home; collaborator/funder/industry | Research → evidence/guardrails → Contact; expected themes, demonstrated outputs and bounded inquiry | three themes, seven publication proofs and explicit “no deployment/adoption/funding/measured-impact implication” boundary appeared; Contact exposed the research/collaboration context without availability or impact claims | 2; zero promoted projects is transparent and does not prevent thematic-fit assessment | PASS |
| T4 — contact Faisal appropriately | any HTML route | Contact → exact institutional email; expected task contexts, privacy/delivery boundary and no form | Contact was a priority utility and route CTA; exact action was `mailto:fbalwy@taibahu.edu.sa?subject=Academic%20website%20inquiry`; four inquiry contexts, visible address and delivery/privacy recovery appeared; forms = 0 | 2 maximum; no site-side submission | PASS |
| T5 — obtain current English CV | any HTML route | Download CV → exact canonical PDF; expected one approved file plus visible type/size/date | shared utility opened `/cv/faisal-albalwy-cv.pdf` with viewer title `Faisal Albalwy | Academic CV`; About stated PDF, five pages, 226,604 bytes and 19 August 2026; binary/MIME/hash match | 1; none | PASS |
| T6 — evaluate teaching relevance | any HTML route; prospective student/evaluator | Teaching → course evidence; optional Contact; expected privacy-safe scope and availability boundary | first list contained exactly 19 titles; no occurrence/schedule/student/code data; copy disclaimed current availability, ownership, outcomes, admission, funding and supervision places; Contact remained available | 1 to evidence, 2 to inquiry; no approved supervision records are invented | PASS |
| T7 — evaluate leadership/service | any HTML route; funder/partner/editor/evaluator | Leadership & Service → category evidence; optional Contact | exact categories contained 3 technology-leadership, 5 peer-review and 2 community records; figures stayed source-specific/non-additive; raw scans/images = 0; Contact and related research/publication routes remained | 1 to evidence, 2 to inquiry; none | PASS |
| T8 — verify identity/relationship | every route/state | identify Faisal immediately; optionally follow official university link | all seven HTML routes plus 404 showed `Faisal Albalwy`, `Personal academic website`, subordinate `Institutional affiliation: Taibah University`, official university URL and the “not an official” notice; media/logo count = 0 | 0 to identify, 1 external verification; none | PASS |

**O1:** 8/8 priority journeys completed, 100%, with no critical assistance, dead end or launch blocker.  
**O2:** observed maxima for T1–T5 were 2, 2, 2, 2 and 1 purposeful choices. Research, Publications, Contact and Download CV were reachable from their intended primary/utility positions; Contact and CV remained distinct.

## 4. Route, fact, action and trust evidence

| Control | Observed evidence | Result |
| --- | --- | --- |
| Home | clear identity/research-first entry; three themes; four featured records; separate Research, Publications, Teaching, Service, About, Contact and CV pathways | PASS |
| Research ↔ Publications | 3 themes, 7 exact fragment bindings; all targets visible within 27 unique records | PASS |
| Publications | 27 records, 26 unique DOI actions, 23 publisher actions, one thesis; latest 5 and featured 4; no duplicate or held record | PASS |
| Teaching | 19 titles in the first semantic list; zero occurrences; explicit privacy and availability boundaries | PASS |
| Leadership & Service | exact 3/5/2 categories; historical wording; no total, raw evidence or unrelated people | PASS |
| About | approved descriptor, appointment, PhD/thesis, historical leadership, faculty profile and exact CV context | PASS |
| Contact | one institutional address/action; four inquiry contexts; no form, body, cc/bcc, alternate/private contact, response promise or collection | PASS |
| External actions | 3 profile links, 26 DOI links, official faculty/university actions and email action had exact labels/destinations; sampled DOI reached the exact publisher article | PASS |
| Metadata/social | eight unique titles/descriptions/canonicals; OG title parity; shared `https://ci.invalid/og.png`; `summary_large_image`; JSON-LD on six approved entity routes and absent on Contact/404 | PASS |
| Institutional boundary | Faisal always precedes affiliation; no university logo or ownership/endorsement/clearance wording | PASS |
| Privacy/provenance | no held JNMES record, private path/ID, schedule, student data, private contact, scan, tracker, form or remote runtime request | PASS |

The local record remained useful even when an external source might fail. Browser reached the sampled DOI/article successfully. A command-line automated client received the same correct DOI→MDPI destination but an HTTP 403 from MDPI, demonstrating the value of the existing external-failure copy: “The verified local record remains available. Try the canonical destination again later.” ORCID, Google Scholar, the faculty profile and the university homepage returned HTTP 200 in the same check.

## 5. Failure, degraded and progressive-enhancement acceptance

| State/mode | Observable evidence | Result |
| --- | --- | --- |
| No results | `q=zzzz-no-match` announced `0 of 27 publications`; complete 27-record DOM remained; Clear filters restored all 27 and focused the catalogue heading | PASS |
| Malformed query/fragment | `?bad=private#unknown` removed the unsupported query, exposed the invalid-state copy, restored all 27 and focused the catalogue heading; malformed percent encoding failed safely the same way | PASS |
| History | query plus year filter serialized deterministically; Back removed year and preserved query; Forward restored both and the same one-record result | PASS |
| 404 | one `Page not found` H1 and Return to homepage action; shared primary/footer paths also remained available | PASS |
| External failure | explicit hidden-at-rest recovery state retains verified local record and advises retry; sampled canonical DOI resolves correctly | PASS |
| Offline after load | Publications and Contact contain bounded, status-semantic offline copy; listeners react only to online/offline state; no submission/storage/network API is added | PASS by source/test contract; Browser exposes no network emulation |
| No script | generated Publications HTML contains all 27 server-rendered records; controls start hidden; visible `<noscript>` explains that search/filter are unavailable; native `<details>/<summary>` remains | PASS by generated-HTML/source contract |
| Citation copy | enhancement creates copy only when a governed visible citation exists; current release intentionally emits zero citation strings/buttons | N/A, fail-closed; bibliographic facts and canonical DOI remain visible |

## 6. Accessibility, responsive and mode acceptance

- At 320×800, all seven routes plus 404 had one H1, one reading column, zero page overflow, zero clipped essential action/control and no out-of-viewport interactive target.
- At the 640-pixel 200%-reflow proxy, all seven routes had zero overflow and zero clipped essential controls. At 320 pixels, the 400%-reflow proxy for a 1280-pixel reference also passed.
- The 320-pixel Menu opened by keyboard to `aria-expanded=true`/`Close menu`; Escape closed it, restored `false`/`Open menu` and returned focus to Menu. Focus was visibly outlined in the inspected capture.
- T1, T3, T5, T6 and T7 destination actions were activated by keyboard; publication search/filter/history and recovery controls were keyboard-operated.
- QA-004/QA-007 evidence remains applicable to the unchanged artifact: first Tab/skip-link focus, 44-pixel compact targets, 16 zero-violation axe scans, one H1/landmark/English language, and exact CV tag/reading-order review.
- Reduced-motion, forced-colours and print media rules remain in generated source. Reduced motion removes transitions; forced colours retains system text/focus/boundary meaning; print removes repeated navigation and linearizes content. The Browser surface does not expose these emulation switches, so the existing rendered/source/regression evidence is cited rather than misrepresented as a new emulation run.
- All pages are complete without content images or webfonts. No essential meaning depends on hover, animation, colour alone, image loading or client-side rendering.

## 7. Known issues and limitations

No P0/P1/P2 issue or unresolved launch blocker was found.

| ID | Severity | Known issue / limitation | Owner | Disposition |
| --- | --- | --- | --- | --- |
| KI-008-01 | P3 editorial polish | The fourth Contact inquiry item visually concatenates the bold label and following word as `context:topic`. Meaning and accessible context remain clear; it does not block Contact or email activation. | content/UI owner | accept for this frozen candidate; correct only in a later governed copy/presentation revision |
| KI-008-02 | P3 deferred utility | No citation-copy control appears because the approved release contains no governed preformatted citation strings. Complete title/authors/date/venue/DOI remain visible, so finding and verification complete; BibTeX/RIS/citation-format utilities are explicitly deferred. | content/product owner | accepted non-blocking deferral; do not synthesize citation copy |
| KI-008-03 | external dependency | MDPI rejected a command-line automated request with HTTP 403, while Browser reached the exact DOI-resolved article. External publisher access is outside site control and may vary. | external publisher; freshness owner | local canonical record and explicit external-failure recovery retained; recheck required at G5 |
| KI-008-04 | evidence limitation | No physical screen-reader session, PAC/PDF-UA conformance tool, Firefox/WebKit control, OS high-contrast switch, Browser zoom switch, print emulator or offline emulator was available in this run. | G5/QA owner | carry forward the already documented semantic, axe, PDF-structure, source/test and proxy evidence; do not claim unavailable coverage |
| KI-008-05 | G5 condition | No production hostname, host headers/logging/compression/cache/redirect evidence, field performance, email-client delivery result or real crawler/indexing state exists. | project owner/host owner | mandatory unresolved external Gate G5 review; not an application defect |

## 8. Release-readiness conclusion and rollback

QA-008 finds the frozen candidate **provisionally ready for the mandatory Gate G5 decision**. O1 and O2 pass, all four requested visitor perspectives complete, and no essential visitor action is blocked. The candidate remains intentionally local/CI, noindex, non-promotable, non-deployable and unpublished.

No application, content, data, CV, asset, configuration, test or build artifact was changed during QA-008. The full pinned verification was therefore not rerun: the work-package rule requires it only if an artifact changes, and the frozen manifest remained exactly `6f2712522d6690db1868afa1dc43df65ed1e88afe00bd74a8de66fdd1a62a031` after acceptance. Focused manifest-to-dist, route/state, Browser, source/test and known-hash checks passed.

Rollback/withdrawal remains the QA-007 boundary: invalidate or withdraw the append-only promotion overlay and rebuild from clean staging, which fails closed before public rendering/CV staging; alternatively restore the prior 17-artifact candidate and verify every manifest hash. The exact mechanics and prior hash are recorded in `docs/RELEASE_CANDIDATE_REPORT.md`.

Stop at G5. QA-008 does not select or configure a host, deploy, change DNS, enable indexing, populate the sitemap, publish, approve production, alter the G5 manual stop, or begin P9.
