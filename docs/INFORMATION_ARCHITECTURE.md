# Faisal Albalwy academic website — information architecture

**Work package:** STR-003 v1  
**Phase:** P2 — Strategy and Governance  
**Status:** Frozen launch information architecture; not final copy, design, or implementation  
**Prepared:** 19 August 2026 (Asia/Riyadh)  
**Language:** English only  
**Identity baseline:** Gate G0 approved; Faisal-first, text-only/no-logo affiliation  

## 1. Scope and decision boundary

This document freezes the launch sitemap, labels, route inventory, navigation model, page purposes and module order, wayfinding, URL/state behavior, task paths, canonical content ownership, deferrals, and IA change control.

It does not approve factual claims, sources, privacy classifications, page prose, visual layouts, components, schemas, code, hosting origin, deployment, DNS, analytics, contact forms, Gate G1, or P9. STR-004 owns source authority, inclusion/exclusion, privacy, and freshness rules. If a required module has no approved evidence after Phase 3, the fail-closed behavior in this architecture applies; STR-003 does not invent content to fill it.

### 1.1 Frozen product structure

- The site is an English-only personal academic website with research as the organising priority.
- `Faisal Albalwy` is the sole site nameplate and homepage link.
- The primary navigation has exactly five launch destinations: `Research`, `Publications`, `Teaching`, `Leadership & Service`, and `About`.
- `Contact` and `Download CV` are visually distinct priority utilities, not sixth and seventh primary content categories.
- Taibah University appears only as subordinate text affiliation with a clearly external, same-tab official link. There is no university logo image or identity route.
- The launch has seven HTML pages and one public English CV PDF. There are no project or publication detail pages at launch.
- Publication and project deep links use stable fragments on their parent page; speculative or evidence-thin records do not create routes.

## 2. Canonical launch sitemap

```text
Faisal Albalwy
/
├── research
├── publications
├── teaching
├── leadership-service
├── about
├── contact
└── cv
    └── faisal-albalwy-cv.pdf
```

### 2.1 Route inventory

| ID | Exact label | Canonical path | Resource type | Navigation role | Indexing intent |
|---|---|---|---|---|---|
| R1 | Home | `/` | HTML | Nameplate destination; not a visible primary item | Index after factual/content approval |
| R2 | Research | `/research` | HTML | Primary navigation, position 1 | Index after factual/content approval |
| R3 | Publications | `/publications` | HTML | Primary navigation, position 2 | Index the unfiltered canonical page after catalogue approval |
| R4 | Teaching | `/teaching` | HTML | Primary navigation, position 3 | Index after factual/content approval |
| R5 | Leadership & Service | `/leadership-service` | HTML | Primary navigation, position 4 | Index after factual/content approval |
| R6 | About | `/about` | HTML | Primary navigation, position 5 | Index after factual/content approval |
| R7 | Contact | `/contact` | HTML | Priority utility | Index after institutional email and page facts are verified |
| R8 | Download CV | `/cv/faisal-albalwy-cv.pdf` | Searchable PDF | Priority download utility; not an HTML page | Index only after DAT-004 privacy/accessibility approval |

The following are states, not canonical content routes: 404, application/server error, offline/unavailable, empty section, no publication results, failed external link, unavailable email, unavailable CV, font failure, and image failure.

### 2.2 Route decisions

| Decision | Frozen outcome | Reason |
|---|---|---|
| Home in primary navigation | Omitted | The nameplate is the persistent homepage link and keeps the primary set bounded |
| Research and Publications | Separate routes | Research explains agenda and context; Publications supports finding, verifying, and citing records |
| Projects and systems | Modules and stable fragments within Research | No launch record is assumed to have enough durable, approved material for a separate destination |
| Publication records | Catalogue entries and stable fragments within Publications | Canonical records can be found and cited without thin duplicate pages |
| Teaching | Top-level | It serves a distinct verified audience task and should not be buried in About |
| Leadership & Service | Top-level | It is a substantial supporting dimension and has a different visitor task from biography |
| About and CV | Separate | About is readable HTML context; CV is one formal downloadable artifact |
| Contact | Short HTML utility page | Inquiry context and fallback behavior need a stable destination even though email is the only contact channel |
| Site-wide search | Deferred | Launch search need is specific to the publication catalogue; a global index is not justified |
| Pagination | Deferred | Expected launch catalogue can remain one progressively enhanced, filterable page; no empty page routes are needed |

## 3. Global navigation and wayfinding

### 3.1 Desktop header

Reading and focus order is:

1. Skip link: `Skip to main content`.
2. Nameplate link: `Faisal Albalwy` → `/`.
3. Primary navigation in this exact order: `Research`, `Publications`, `Teaching`, `Leadership & Service`, `About`.
4. Utility action: `Contact` → `/contact`.
5. Utility action: `Download CV` → `/cv/faisal-albalwy-cv.pdf`, with `PDF` and verified file size exposed in or immediately beside the accessible label.

The header may include concise text affiliation only when it remains subordinate and uncluttered. The university link may instead remain in the footer. No header logo, Home item, social icon row, search box, language selector, theme switcher, login, or portal link is part of launch IA.

### 3.2 Mobile header and menu

- The collapsed control label is `Menu`; its expanded/collapsed state is programmatic and visible.
- `Faisal Albalwy` remains outside the disclosure and always links to `/`.
- The expanded menu preserves the desktop order. It presents the five primary items first, then a clearly labelled `Actions` group containing `Contact` and `Download CV`.
- Menu expansion is not counted as a purposeful navigation choice in Section 9 because it does not change destination.
- Opening the menu moves no focus automatically. Focus proceeds from the toggle into the first menu item when the visitor tabs; closing returns focus to the toggle.
- Escape closes the menu. Selecting an internal destination closes it after navigation. Background content is not focusable while a modal-style menu is open.
- The mobile architecture does not abbreviate `Leadership & Service`, replace the name with initials, or use an icon-only CV/contact action.

### 3.3 Current and active states

- Apply `aria-current="page"` to the one navigation or utility link whose canonical HTML path matches the current route.
- `/research`, `/publications`, `/teaching`, `/leadership-service`, and `/about` mark their primary item current.
- `/contact` marks the Contact utility current.
- Home has no current primary item; the nameplate carries `aria-current="page"` on `/`.
- The CV is a file action, not a navigable page state. Do not mark Download CV current after the browser opens or downloads the PDF.
- Color is never the only current-state cue. Use programmatic state plus a visible text/shape/typographic treatment.
- Query parameters and fragments do not change which primary item is current.

### 3.4 Footer groups

The global footer uses these groups in this order:

1. **Site identity:** `Faisal Albalwy`, concise personal-site description, copyright, and site last-updated date.
2. **Explore:** Research, Publications, Teaching, Leadership & Service, About.
3. **Actions:** Contact, Email Faisal Albalwy using the verified institutional address, Download CV with PDF/size/update context.
4. **Academic profiles:** only verified Google Scholar, ORCID, Scopus, Web of Science, ResearchGate, and Taibah University faculty-profile destinations. Every external destination is named and visibly marked `(external)`; all open in the same tab.
5. **Institutional affiliation:** visible `Institutional affiliation: Taibah University`, the verified `Taibah University website (external)` link, and the personal-site/non-endorsement notice required by STR-002.

`Email Faisal Albalwy` is a subordinate contact method within the footer, not a third global utility. The only priority utilities remain `Contact` and `Download CV`.

LinkedIn, X, other social networks, personal phone/address data, university template contacts, QR codes, logos, analytics preferences, newsletter signup, and a form are not footer items at launch. Render no empty profile group when no scholarly-profile link is approved.

### 3.5 Breadcrumb policy

- No breadcrumb appears on the seven launch HTML pages because they are Home or one level below it; the global nameplate and navigation already expose location.
- The CV PDF has no site breadcrumb. Its entry links provide file context before the visitor leaves HTML.
- 404/error states do not display a false hierarchy.
- If a future approved detail route is added, breadcrumbs become mandatory and start with `Home`; this requires an STR-003 revision.
- Do not insert `Taibah University` as a breadcrumb root, publisher, or site owner.

### 3.6 In-page navigation

In-page links appear after the page introduction and before long content. They use native fragment links, remain keyboard operable, and do not replace the page heading or global navigation.

| Route | In-page navigation rule | Stable structural fragments |
|---|---|---|
| Home | None; the page is a curated gateway | Selected modules may expose internal section IDs for accessibility/testing but not a visible contents menu |
| Research | Required when at least three approved substantive modules remain | `#research-themes`, `#projects-and-systems`, `#emerging-directions`, `#collaboration` when the matching module exists |
| Publications | Use task controls rather than a general contents menu | `#featured-publications`, `#publication-catalogue`; record fragments follow Section 7.3 |
| Teaching | Required when at least three approved substantive modules remain | `#teaching-approach`, `#courses`, `#supervision`, `#student-projects`, `#supervision-inquiries` when present |
| Leadership & Service | Required | `#technology-leadership`, `#university-service`, `#peer-review`, `#community-engagement`, `#talks-and-development` when present |
| About | Required when the final page retains four or more major modules | `#biography`, `#current-roles`, `#career`, `#education`, `#recognition`, `#cv` when present |
| Contact | None; keep the page short | Inquiry-category fragments are not required at launch |

When evidence governance suppresses a module, remove its heading and in-page link together. Never leave an empty destination, disabled contents link, or `Coming soon` section.

### 3.7 Back, return, and focus behavior

- First-level pages do not add a synthetic Back link. Browser Back remains predictable.
- Same-tab external links preserve browser history and are visibly identified as external.
- Publication filter/search state provides `Clear filters`; no-results state also links or focuses back to the search control.
- Fragment navigation moves the viewport to the target and makes the target heading programmatically focusable without permanently inserting it into ordinary tab order.
- After route navigation, focus starts at the document/skip-link sequence; client-side enhancement must move focus to the new main heading only when needed to reproduce normal page navigation semantics.
- Error recovery names the destination: `Return to homepage`, `View publications`, or `Contact` rather than a generic `Back`.

## 4. Route specifications

Module labels below are structural labels aligned with STR-002. CNT-002–008 own final headings and prose. Every factual module is conditional on STR-004/CNT-001 approval unless identified as global interface structure.

### 4.1 R1 — Home (`/`)

| Field | Frozen requirement |
|---|---|
| Purpose | Establish Faisal-first identity, explain the verified research direction, and route each audience to full evidence without reproducing the CV |
| Primary audiences/tasks | A1–A7; T1 research agenda, T2 publication, T3 collaboration fit, T4 contact, T5 CV |
| Entry points | Nameplate, direct/search entry, external profile link where approved, return/recovery links |
| Required module order | 1 Personal identity, verified descriptor, text affiliation; 2 research positioning and priority actions; 3 verified research themes; 4 up to three selected research/project/system stories; 5 three or four latest/selected verified publications; 6 teaching/supervision snapshot; 7 leadership/service snapshot; 8 collaboration/contact invitation; 9 global footer |
| Primary action | `Explore research` → `/research` |
| Secondary actions | `View publications` → `/publications`; `Download CV` → canonical PDF when available; `Contact` → `/contact` near collaboration context |
| Evidence presentation | Selected items reference canonical structured records and link to their parent route/fragment; no independently copied title, date, status, metric, role, or source string |
| Related routes | All five primary pages, Contact, and CV through curated module links; do not create a dashboard of every destination |
| Metadata intent | Identify Faisal first, use only the verified descriptor, summarize research/evidence purpose, never say `official website` or name the university as publisher |
| Density/mobile | Keep identity/research/action content before supporting dimensions; preserve module order on mobile; no carousel; long titles wrap; selected counts are caps, not content quotas |
| Empty/failure | Suppress any unsupported selected module and promote the next approved module; page must still support Research, Publications, Contact, and CV states without placeholder cards or images |

No homepage metric band is part of launch IA. A dated metric may appear only inside a later evidence-governed context after an IA review confirms that it serves a visitor task; it must not become a credibility badge by default.

### 4.2 R2 — Research (`/research`)

| Field | Frozen requirement |
|---|---|
| Purpose | Explain a coherent, evidenced research agenda and connect themes to projects/systems and publications |
| Primary audiences/tasks | A1, A2, A3, A4, A5, A6, A7; T1, T3, and supporting T6 |
| Entry points | Primary navigation, Home research modules, publication theme links, Teaching/About cross-links, direct/search entry |
| Required module order | 1 Page purpose and verified research statement; 2 established research themes; 3 emerging directions, only if explicitly approved and labelled; 4 verified funded projects; 5 selected research systems; 6 collaboration pathways; 7 related publications and route to full catalogue |
| Primary action | `View related publications` → `/publications` with an approved theme query or `#publication-catalogue` |
| Secondary actions | `Contact` → `/contact`; individual project/system fragment links; lawful code/data/external evidence links where approved |
| Evidence presentation | Each theme maps to approved publications/projects; each project/system shows exact type, role, status/maturity, period, outputs, and source/date fields only when governed; established and emerging work never share an ambiguous label |
| Related routes | Publications, Teaching, Leadership & Service, About, Contact |
| Metadata intent | Describe the verified agenda and major approved themes without keyword stuffing, unsupported expertise, deployment, impact, or current-status claims |
| Density/mobile | Use readable theme sections and compact record summaries; no architecture diagram is required; in-page navigation remains before the first long module; record metadata stacks without horizontal scrolling |
| Empty/failure | If no project/system record is approved, omit that module and its fragment; retain the research statement, themes, related publications, and contact path. A missing image/code link never removes the text record |

**Project-detail decision:** no `/research/[project-slug]` route launches. Each approved project/system receives an immutable data ID and fragment `#project-<stable-id>` on `/research`. An expanded inline record may show additional evidence without changing canonical route. A future detail route requires the reopening criteria in Section 11.

### 4.3 R3 — Publications (`/publications`)

| Field | Frozen requirement |
|---|---|
| Purpose | Provide the authoritative, findable, deduplicated scholarly catalogue and routes to canonical external evidence |
| Primary audiences/tasks | A1, A2, A5, A6, A7; T2 and evidence support for T1/T3 |
| Entry points | Primary navigation, Home selected/latest records, Research related-publication links, About, scholarly profiles, direct/search entry |
| Required module order | 1 Page purpose and catalogue methodology; 2 selected featured publications; 3 labelled search and filters; 4 results summary and active-filter controls; 5 complete catalogue newest first; 6 scholarly profile/source-coverage context |
| Primary action | Search/filter and open a canonical record destination such as `Open DOI (external)` |
| Secondary actions | `View related research`; lawful `View publisher page`, `View full text`, `View code`, or `View data`; `Copy citation` when validated; scholarly-profile links |
| Evidence presentation | Every record comes from one canonical publication dataset; preserve canonical title/authors/status/year/venue/DOI; show source/observation context for volatile metrics only if approved; featured status carries an internal rationale and no quality claim |
| Related routes | Research through stable theme mapping; Home; About; Contact only where a scholarly inquiry is relevant |
| Metadata intent | Describe the catalogue and its verification method; do not put volatile counts or a list of all themes in metadata |
| Density/mobile | Search precedes catalogue; controls reflow vertically; result count is announced; records use progressive disclosure for secondary metadata but never truncate title/citation; no sideways-scrolling card layout |
| Empty/failure | No results: retain controls and offer `Clear filters`; dataset failure: retain page purpose and approved scholarly-profile links with a specific error; no catalogue: release blocker, not an empty launch page |

**Publication-detail decision:** no `/publications/[publication-slug]` route launches. Every approved record has fragment `#publication-<stable-id>`. The fragment survives title corrections because the ID is immutable. Citation actions do not create routes:

- `Copy citation` copies the approved visible citation; when clipboard access fails, the citation remains selectable and an inline error explains recovery.
- DOI, publisher, lawful full text, code, and data open their verified external destinations in the same tab and are labelled `(external)` where needed for clarity.
- BibTeX and RIS download/export remain deferred until the canonical catalogue and export validation are stable.

### 4.4 R4 — Teaching (`/teaching`)

| Field | Frozen requirement |
|---|---|
| Purpose | Present verified teaching and supervision context without exposing timetable, student, or administrative data |
| Primary audiences/tasks | A3 and A6, with supporting interest from A1; T6 |
| Entry points | Primary navigation, Home teaching snapshot, Research collaboration context, About, direct/search entry |
| Required module order | 1 Teaching approach; 2 verified courses grouped by approved category; 3 approved supervision grouped by level; 4 selected student-project themes; 5 prospective-supervision inquiry guidance only when availability language is approved |
| Primary action | `Contact` → `/contact` for a supervision inquiry when that category is approved |
| Secondary actions | `Explore research`; related publication/theme links where they materially explain teaching |
| Evidence presentation | Course titles reference one canonical course record each; supervision role/title/year/institution and student-name consent are independently governed; no schedules, codes, rooms, sections, student counts, or scans |
| Related routes | Research, About, Contact, selected Publications |
| Metadata intent | Explain verified teaching scope in neutral language without listing every course, claiming availability, or exposing student data |
| Density/mobile | Group courses as simple semantic lists; avoid one card per course; supervision records stack by level; long official titles wrap fully |
| Empty/failure | Omit supervision/student modules lacking approved records. Do not display `Coming soon`, inferred availability, or an empty level. The verified teaching approach and course groups must remain sufficient to justify the route |

### 4.5 R5 — Leadership & Service (`/leadership-service`)

| Field | Frozen requirement |
|---|---|
| Purpose | Present verified leadership and service as a coherent supporting dimension while keeping research and personal ownership clear |
| Primary audiences/tasks | A2, A4, A5, A6, A7; T7 and support for T3 |
| Entry points | Primary navigation, Home snapshot, About career context, Research application context, direct/search entry |
| Required module order | 1 Page purpose and research/application context; 2 technology and executive leadership; 3 university and departmental service; 4 peer review; 5 community engagement; 6 selected talks/workshops; 7 selected professional development/memberships only if current status is approved; 8 contact pathway |
| Primary action | `Contact` → `/contact` for a relevant partnership, speaking, or professional inquiry |
| Secondary actions | `Explore research`; `View publications`; stable in-page category links |
| Evidence presentation | Each entry uses one canonical role/service record with exact category, organisation, role, supported period, source/status, and no duplicate totals; raw decisions/certificates are not public destinations |
| Related routes | Research, Publications, About, Contact |
| Metadata intent | Describe the verified categories without executive-first framing, unsupported impact, review totals, partner claims, or `current` language unless maintained |
| Density/mobile | Use grouped chronological or categorical lists, not a decorative card wall; in-page navigation is required; evidence notes remain adjacent and readable |
| Empty/failure | Suppress empty or unresolved categories and their links. If only a small number of approved records remains, keep the route only if T7 is still substantively answerable; otherwise an STR-003 revision is required before merging content elsewhere |

### 4.6 R6 — About (`/about`)

| Field | Frozen requirement |
|---|---|
| Purpose | Explain the verified person, formation, roles, and career context behind the research record without reproducing the full CV |
| Primary audiences/tasks | A2, A5, A6, A7 and context for A1/A3/A4; T5 and T8 |
| Entry points | Primary navigation, Home identity, other route bylines/context, CV entry context, direct/search entry |
| Required module order | 1 Short biography; 2 extended biography; 3 current verified roles and text affiliation; 4 academic/leadership career; 5 education; 6 selected recognition/professional affiliations only when approved; 7 CV download context |
| Primary action | `Download CV (PDF, [verified size])` → canonical PDF when available |
| Secondary actions | `Explore research`; `View publications`; `Contact`; official university/scholarly-profile links where relevant |
| Evidence presentation | Biography and timelines resolve to canonical person, education, role, and organisation records; the same field is not separately typed into Home, About, footer, metadata, and CV context |
| Related routes | Research, Publications, Teaching, Leadership & Service, Contact, CV |
| Metadata intent | Use the approved name and descriptor; summarize biography purpose without unsupported current roles, honours, metrics, or official-site wording |
| Density/mobile | Short biography precedes extended narrative; timelines become semantic lists on narrow screens; avoid parallel duplicated biographies; CV context stays near the end and remains reachable from the global utility |
| Empty/failure | Omit unresolved timeline/recognition items. If the CV is unavailable, show the exact unavailable state and retain the accessible HTML profile; do not link an old/private substitute |

### 4.7 R7 — Contact (`/contact`)

| Field | Frozen requirement |
|---|---|
| Purpose | Provide a concise, legitimate professional inquiry pathway using institutional email only |
| Primary audiences/tasks | A1–A7; T4 and recovery for T3/T6/T7 |
| Entry points | Header/mobile utility, footer Actions, route-specific collaboration/supervision/speaking CTAs, Home, direct/search entry |
| Required module order | 1 Page purpose; 2 approved inquiry categories; 3 verified institutional email action; 4 verified location if useful; 5 approved scholarly/institutional profile links; 6 text affiliation/personal-site context as needed |
| Primary action | `Email Faisal Albalwy` using the verified institutional address |
| Secondary actions | Route visitors back to Research, Teaching, or Leadership & Service based on inquiry context; verified external profile links |
| Evidence presentation | Email, inquiry categories, location, and affiliation come from canonical governed fields; no availability, response-time, admissions, funding, partnership, or institutional-representation promise |
| Related routes | Research, Teaching, Leadership & Service, About |
| Metadata intent | Describe professional inquiry categories without exposing email in description text, inviting spam, or promising availability/response |
| Density/mobile | Keep page short; email target remains large, labelled, and selectable; no form fields, map embed, calendar, accordion, or duplicated contact card grid |
| Empty/failure | If institutional email is unverified/unavailable, keep `/contact` and show a specific unavailable notice; remove all mailto actions and private substitutes. This is a T4 release blocker until corrected |

No contact form, form endpoint, CAPTCHA, consent checkbox, retention copy, scheduling widget, personal phone, home address, direct message channel, or analytics event is part of launch IA.

### 4.8 R8 — Download CV (`/cv/faisal-albalwy-cv.pdf`)

| Field | Frozen requirement |
|---|---|
| Purpose | Deliver one current, searchable, accessible, privacy-reviewed English CV from a stable URL |
| Primary audiences/tasks | A2, A5, A6, A7; T5 |
| Entry points | Global desktop/mobile utility, About CV module, footer Actions; optional relevant evaluator context |
| Required artifact structure | Approved public identity and contact; readable headings/bookmarks/tags as supported; reconciled academic, research, teaching, leadership/service, and publication summary content; update date; no raw evidence appendix |
| Primary action | Browser open/download from the canonical PDF path |
| Secondary actions | None inside IA; the PDF may contain approved, accessible external scholarly links and site URL after verification |
| Evidence presentation | DAT-004 creates the PDF from approved content and manifest; visible/hidden content and metadata must match the approved public version; no competing CV file |
| Related routes | About provides the accessible HTML context; other HTML pages provide evidence-specific summaries rather than asking the PDF to serve as the site |
| Metadata intent | PDF title and document metadata identify Faisal and `Curriculum vitae` without private data, local paths, authoring history, or official-university wording |
| Density/mobile | PDF must be searchable and usable at zoom; HTML pages remain the responsive accessible alternative for browsing profile content |
| Empty/failure | Before approval, do not publish the file. Render the global utility as a non-link status `CV unavailable` with explanation in context and direct visitors to About; a direct request returns the normal 404 state. Missing CV is a T5 release blocker, never a reason to publish an older/private file |

The CV URL is the only public CV route. There is no `/cv` HTML page and no Arabic CV, evidence portfolio, multiple version, or archive route at launch.

## 5. Operational, empty, and failure states

### 5.1 State matrix

| State | Where it appears | Required behavior and recovery | HTTP/indexing intent |
|---|---|---|---|
| 404 not found | Unknown or removed path, direct request for unavailable CV | Faisal-first site shell, concise not-found heading, `Return to homepage`, Research, Publications, and Contact links; no guessed redirect or university identity | HTTP 404; noindex; no canonical to Home |
| Application/server error | Route data or server cannot complete safely | Preserve accessible shell if available, state affected content, offer `Try again` and stable route alternatives; do not expose stack/source paths | Correct 5xx where server-generated; noindex |
| Offline/network unavailable | External evidence or enhanced data cannot load | Keep already delivered local content/navigation; explain which external/enhanced content is unavailable; no dedicated `/offline` launch route | Preserve underlying route status where possible; do not index a state variant |
| Publication no results | Valid query yields zero matching records | Keep search/filter controls, announce result count, `Clear filters`, focus recovery; do not imply no publications exist | `/publications` query state; noindex, follow; canonical `/publications` |
| Publication data unavailable | Catalogue data fails | Keep page purpose and approved profile links, identify failure, offer retry; treat unresolved catalogue failure as release blocker | Canonical route may return 5xx when core data is unavailable; noindex while failed |
| Empty optional module | No approved records for a conditional module | Remove module heading, in-page link, and reserved space together; no `Coming soon` | No new URL/state |
| Required route lacks substantive evidence | Research, Publications, Teaching, Leadership & Service, or About cannot answer its task | Hold release and revise content/IA explicitly; do not launch a thin empty page | Do not index until resolved |
| Institutional email unavailable | `/contact`, header/footer/email actions | Keep Contact route with specific unavailable notice, remove mailto, use no private substitute; T4 release blocker | Page may remain noindex until corrected |
| CV unavailable | Header/mobile/footer/About and direct PDF path | Replace action with non-link `CV unavailable` plus context; About remains available; direct path is 404; no old/private substitute; T5 release blocker | No PDF/index entry until approved |
| External source/link fails | Any governed external link | Keep local record, show source unavailable, validate destination; never silently redirect to an unverified mirror | External condition; local canonical unchanged |
| Font failure | Every route | System font preserves hierarchy, content, controls, long metadata, and focus; no state route or user action needed | Canonical unchanged |
| Image failure/no image | Every route | All essential meaning remains text; no broken logo, placeholder, empty image reserve, or replacement artwork | Canonical unchanged |
| Forced colors/reduced motion/print | Every route | Preserve hierarchy, current state, text affiliation, external/download labels, data meaning, and recovery actions | Canonical unchanged |

### 5.2 Status-copy architecture

State components reserve fields for: state heading, concise explanation, affected content, primary recovery action, secondary safe route, and programmatic status. CNT-008 supplies final copy using STR-002. Empty/error states never introduce new evidence, private contact data, marketing language, or unapproved assets.

## 6. Metadata, search, and discovery intent

- Every HTML route has one unique English title, description, canonical URL, H1, and page purpose after content approval.
- Title patterns follow STR-002: Home starts with `Faisal Albalwy`; internal pages use `[Page purpose] | Faisal Albalwy`. Exact descriptions are CNT-008 work.
- Canonical metadata uses the unfiltered, fragment-free route defined in Section 2 and never includes tracking/query state.
- Faisal is the Person/ProfilePage subject. Taibah University may appear as verified affiliation, never site owner or publisher.
- Social metadata remains Faisal-first and logo-free. No university mark, unsupported metric, volatile availability statement, or `official website` claim.
- HTML page metadata must not duplicate long lists of themes, publication titles, courses, roles, or keywords.
- Publication records expose approved academic/citation metadata within the catalogue where INT-001 determines it is valid; no individual detail route is implied.
- XML sitemap, robots file, canonical headers, and structured data are technical discovery artifacts owned by INT-001/002, not visitor-facing routes.
- 404, 5xx, unavailable placeholders, invalid query variants, search/filter states, and preview-only pages are non-indexable.
- The public CV may be indexable only after DAT-004/QA approval and must use its own sanitized metadata. TEC-001/INT-001 decides the supported PDF canonical-header mechanism.

## 7. URL, fragment, query, and redirect rules

### 7.1 Canonical path rules

- Public paths use lowercase ASCII and hyphens between words.
- Canonical HTML paths have no trailing slash except root `/`.
- The CV filename is exactly lowercase `faisal-albalwy-cv.pdf` under `/cv/`.
- Do not expose `.html`, framework file names, locale prefixes, dates, categories, query IDs, or technology names in canonical paths.
- No `/en`, `/ar`, Arabic-script slug, bilingual duplicate, hosting-provider subpath, or locale switch exists at launch.
- The production origin is intentionally unspecified. TEC-001 must confirm that the chosen platform can enforce this path/trailing-slash policy before implementation; no domain or DNS decision is made here.
- Internal links use canonical paths. A fragment/query may be added only under the contracts below.

### 7.2 Trailing slash and normalization

Preferred policy: one permanent redirect from a non-canonical trailing-slash HTML variant to the no-trailing-slash canonical path. Root remains `/`; the PDF path is never given a trailing slash. TEC-001 must confirm exact status codes/platform behavior, preserve query/fragment where safe, and avoid redirect chains.

Uppercase and mixed-case path requests should normalize to the lowercase canonical only when the mapping is unambiguous. Unknown misspellings return 404 rather than being guessed.

### 7.3 Fragment identifiers

- Structural fragments are the exact IDs in Section 3.6.
- Content-record fragments are `#publication-<stable-id>` and `#project-<stable-id>`.
- `<stable-id>` is a lowercase ASCII, immutable, schema-controlled identifier. It is not generated from a mutable title at runtime.
- Fragment targets include a visible heading/record label, sufficient scroll margin, and programmatic focus behavior.
- Fragments do not create separate canonical URLs or metadata records and are not placed in XML sitemap entries.
- When a record is withdrawn for governance reasons, do not expose its content. Maintain an internal tombstone/redirect mapping only if a public fragment was previously released; otherwise the fragment falls back to the parent-page heading with a specific unavailable state where appropriate.

### 7.4 Publication query-state contract

Launch supports these exact optional query keys on `/publications`:

| Key | Meaning | Value rule |
|---|---|---|
| `q` | Search title, author, venue, DOI, or approved keyword | Trimmed user text; URL-encoded; empty value omitted |
| `year` | Filter by one publication year | Four-digit year present in the approved dataset |
| `type` | Filter by one approved publication type | Lowercase schema enum such as `journal-article`, `conference-paper`, `review`, or `preprint` |
| `theme` | Filter by one approved research theme | Stable lowercase theme ID, not display label |

Rules:

- Generated query order is `q`, `year`, `type`, `theme`. This produces stable shareable URLs without making them canonical content pages.
- One value per key is supported at launch. Multi-select filters require an IA revision because their URL/accessibility behavior is not frozen here.
- Default sort is newest approved publication year/status first, then canonical title as deterministic tie-breaker. No `sort` key launches.
- Pagination does not launch, so there is no `page` key.
- Unknown keys and invalid values are ignored in rendering and removed on the next internal state update; never reflect unsanitized text into markup.
- Empty/default state uses `/publications` with no query.
- Query variants are `noindex, follow` and declare `/publications` as canonical. Browser Back/Forward restores controls, results, and focus context.
- Search is over public catalogue fields only. Do not use it to collect, log, or infer visitor identity; STR-004/TEC-001 govern any additional privacy control.

### 7.5 Redirect candidates

The following are implementation candidates, not evidence that legacy URLs exist. TEC-001/INT-001 must enable only mappings that are unambiguous and useful:

| Candidate source | Target | Condition |
|---|---|---|
| `/home`, `/index.html` | `/` | Safe canonical aliases |
| Trailing-slash variants of R2–R7 | Matching no-trailing-slash route | Platform supports one-hop permanent normalization |
| `/leadership-and-service` | `/leadership-service` | Use if an earlier public/inbound form exists |
| `/cv`, `/cv/`, `/faisal-albalwy-cv.pdf` | `/cv/faisal-albalwy-cv.pdf` | Only after the approved PDF exists; do not redirect to an unavailable/private file |
| A previously public project detail path | `/research#project-<stable-id>` | Only with a verified historical path and active approved record |
| A previously public publication detail path | `/publications#publication-<stable-id>` | Only with a verified historical path and active approved record |

Do not redirect unknown routes wholesale to Home. Removed/private/invalid content returns the correct 404 or unavailable state.

## 8. Canonical content ownership and reuse

Repeated facts must resolve to one governed field or record. Pages select and reference records; they do not maintain copies.

| Content domain | Canonical owner/model | Routes that consume it | Reuse rule |
|---|---|---|---|
| Public name, verified descriptor, pronouns, identity | Person/profile record | All routes, metadata, CV context | One display-name and descriptor source; no page-local variants outside STR-002 rules |
| Text affiliation, official university URL, personal-site notice | Site affiliation configuration | Header/footer, Home, About, Contact, metadata where appropriate | Exact subordinate treatment; same-tab external link; never copied from templates |
| Institutional email and inquiry categories | Contact configuration | Contact, Home CTA, Research/Teaching/Service CTAs, footer | One verified address; route-specific CTAs reference category IDs, not duplicate email strings |
| Scholarly/profile links | External-profile registry | Footer, Publications, About, Contact | One URL, label, verification date, and active state per destination |
| Research themes | Theme records | Research, Home, publication filters, related links | Home selects theme IDs; display names and summaries come from the canonical record |
| Projects and systems | Project records | Research, Home selected stories, Leadership only when relevant | One status/role/period/output source; no detail route at launch |
| Publications | Publication dataset | Publications, Home selected/latest, Research related records, metadata | Home/Research store stable IDs only; canonical citation fields live once |
| Courses and supervision | Teaching records | Teaching, Home snapshot, About/CV summaries | One course title/category; student/consent fields do not leak through selection copies |
| Career, education, leadership, and service | Career/service records | About, Leadership & Service, Home snapshot, CV context | One role/title/date/source record; sections select by ID/category |
| Metrics | Metric snapshot records, if STR-004 approves any | Limited evidence context only | One value/source/observed date; no hard-coded badge copies; no cross-platform merge |
| CV artifact | Public-document manifest | Global utility, About, footer | One canonical file, size, update date, privacy/accessibility status, and checksum |
| Site update/copyright data | Site configuration | Footer and metadata | One current value, not manually repeated on pages |

Home selection lists, featured-publication choices, and related-content mappings contain stable IDs plus editorial rationale, not duplicate factual fields. A content update changes the canonical record and propagates everywhere.

## 9. Visitor-task and audience-path validation

### 9.1 Purposeful-choice definition

A purposeful choice is activation of a destination, download, or external evidence/contact action. Opening a mobile menu, typing into search, selecting a filter, scrolling, or following an in-page fragment on the same route does not count as a destination choice. The count begins on any launch HTML page unless a narrower start is stated.

### 9.2 Eight ranked task paths

| Task | Audiences | Start point | Target and path | Maximum purposeful choices | Recovery | Required evidence |
|---|---|---|---|---:|---|---|
| T1 Understand research agenda and reach evidence | A1–A7 | Any HTML route | Primary `Research` → an approved publication/project external or catalogue destination | 2 | Research in footer; Home research gateway; Publications theme link | Verified statement/themes and mapped project/publication records |
| T2 Find and verify a publication | A1, A2, A5, A6 | Any HTML route | Primary `Publications` → search/filter on-page → DOI/publisher/full-text evidence | 2 | Clear filters; scholarly-profile links; parent catalogue after failed external link | Canonical deduplicated record and working approved source link |
| T3 Assess collaboration or funded-program fit | A1, A2, A4 | Home or any HTML route | `Research` → inspect on-page evidence → `Contact` or email action | 2 | Leadership & Service for role context; Publications for outputs | Verified themes, roles, status, outputs, and inquiry category |
| T4 Contact Faisal | A1–A7 | Any HTML route | Utility `Contact` → verified institutional email | 2 | Footer Contact/email; route-specific Contact CTA | Verified institutional email and approved inquiry categories |
| T5 Download current English CV | A2, A5, A6, A7 | Any HTML route | Utility `Download CV` → canonical PDF | 1 | About CV context; footer Download CV | One approved CV, visible update date/type/size, privacy/accessibility status |
| T6 Evaluate teaching/supervision relevance | A3, A6 | Any HTML route | Primary `Teaching` → on-page course/supervision evidence; optional Contact | 1 to evidence, 2 to inquiry | Research themes; Contact unavailable state | Verified courses, supervision/consent, inquiry availability boundary |
| T7 Evaluate leadership/service evidence | A2, A4, A5, A6 | Any HTML route | Primary `Leadership & Service` → in-page category evidence; optional Contact | 1 to evidence, 2 to inquiry | About career context; Research/Publications cross-links | Verified role/service records, exact dates/totals/status, no raw scans |
| T8 Verify identity and institutional relationship | A1–A7 | Every route/state | Faisal-first header/metadata plus visible footer or contextual text affiliation → official university link if desired | 0 to identify, 1 to verify externally | About and Contact repeat governed context | Canonical name, text affiliation, official URL, personal-site notice |

**Two-choice proof:** T1–T5 require at most 2, 2, 2, 2, and 1 purposeful choices respectively. Search/filter interactions and same-page fragments refine content without adding a new destination. No top-five task depends on a hidden submenu, footer-only route, unavailable image, private contact channel, speculative detail page, or browser history.

### 9.3 Seven audience coverage

| Audience | Primary start routes | Supported tasks | Required cross-route path | Dead-end prevention |
|---|---|---|---|---|
| A1 Academic collaborators/research groups | Home, Research, Publications | T1, T2, T3, T4 | Research ↔ Publications → Contact | Related evidence and Contact remain on both research paths |
| A2 Funding bodies/program managers | Home, Research, Leadership & Service, About | T1, T2, T3, T4, T5, T7 | Research/Leadership → evidence → Contact or CV | Roles/outcomes never exist only in CV; source paths stay visible |
| A3 Prospective postgraduate students | Home, Research, Teaching | T1, T4, T6 | Research ↔ Teaching → Contact | Teaching distinguishes inquiry from availability; no form/private substitute |
| A4 Technology/public-sector partners | Home, Research, Leadership & Service | T1, T3, T4, T7 | Research ↔ Leadership → Contact | Project maturity and role evidence link before inquiry |
| A5 Editors/publishers/conference/review communities | Publications, Leadership & Service, About | T1, T2, T4, T5, T7 | Publications/Service → Contact or CV | Canonical records and profile links remain available on failure |
| A6 University peers/evaluators | About, Publications, Teaching, Leadership & Service | T1, T2, T4, T5, T6, T7, T8 | About → evidence routes/CV → affiliation verification | About is a gateway, not the sole evidence store |
| A7 Media/event organisers | Home, About, Research, Leadership & Service | T1, T4, T5, T8 | About/Research/Service → Contact or CV | Verified descriptor/bio and bounded email route; no unsupported availability |

## 10. Content density and responsive acceptance notes

DES-003 converts these structural requirements into wireframes without changing order or creating routes.

### 10.1 Global rules

- Preserve semantic and editorial module order at every viewport. A visual rearrangement must not change reading/focus order or make supporting identity precede Faisal/research.
- At 320 CSS pixels and 400% zoom, each route remains one primary reading column with no page-level horizontal scroll. Explicit data regions require an accessible alternative.
- Primary navigation collapses before labels are abbreviated or type becomes unreadable.
- Contact and Download CV remain distinct from primary content on desktop and mobile.
- Long titles, authors, role names, committee/course names, DOIs, URLs, source notes, and dates wrap fully. Do not ellipsize essential evidence.
- Use lists and progressive disclosure for secondary metadata, but keep headings, citation/title, status, primary source/action, and error meaning visible.
- No horizontal carousel, masonry grid, auto-advancing content, hover-only disclosure, card wall for simple records, or image-dependent module is permitted.
- A page with four or more substantive modules uses the in-page-navigation rule in Section 3.6 unless explicitly exempted.
- Every route has one H1, ordered headings, a main landmark, and content before the footer. Skip-link target and fragment targets account for any sticky header.

### 10.2 Route density targets

| Route | Density guardrail for wireframes |
|---|---|
| Home | Curated only: up to three selected research stories and three or four selected/latest publications; snapshots remain shorter than their destination pages |
| Research | Theme explanation precedes project inventory; records may expand in place; do not show every publication inline |
| Publications | Search/filter/results remain one task sequence; compact bibliographic rows are preferred over large visual cards; secondary fields may disclose progressively |
| Teaching | Group course titles in semantic lists; do not give each title a card; supervision groups appear only when populated |
| Leadership & Service | Group by category and chronology; use one consistent record pattern; no metric dashboard |
| About | Short biography precedes extended context; timelines become lists; no full CV transcript |
| Contact | One-screen task orientation where content permits; no multi-column contact-card collection on narrow screens |
| CV entry context | File type, verified size, update date, and unavailable state remain adjacent to the action and wrap without ambiguity |

### 10.3 Responsive acceptance evidence for DES-003

Wireframes must show at minimum:

1. desktop and 320-pixel header/menu order;
2. one long publication title and author/citation record;
3. publication search, active filters, results, no-results, and error state;
4. a long course/role title and grouped list behavior;
5. Research/Leadership/About in-page navigation at narrow width;
6. Contact verified and unavailable-email states;
7. CV available and unavailable states;
8. 404 and general error recovery;
9. text-only affiliation, font failure, no-image, forced-colors, reduced-motion, and print meaning; and
10. focus path from skip link through header, main content, route actions, related links, and footer.

## 11. Deferred routes and features

Nothing below exists as an empty launch route, hidden nav item, disabled link, placeholder card, or `Coming soon` destination.

| Deferred item | Launch reason | Reopening criteria |
|---|---|---|
| `/research/[project-slug]` project/system detail routes | Parent-page fragments satisfy current tasks without thin speculative pages | At least one project has approved durable narrative, role/status, evidence, outputs, maintenance owner, distinct visitor task, and enough content to justify a page; revise STR-003 |
| `/publications/[publication-slug]` detail routes | Catalogue and stable fragments provide discovery/citation; duplicate pages add little | Approved unique value beyond canonical metadata, such as governed related project/code/data/media; maintenance and metadata model approved; revise STR-003 |
| BibTeX/RIS exports | Canonical catalogue must stabilize first | CNT-004/DAT validation passes, format/escaping/accessibility tests exist, and visitor need is documented |
| Catalogue pagination, multi-select filtering, alternate sorting | Expected launch volume does not require URL/state complexity | Usability/performance evidence shows need; query/canonical/focus behavior is designed and STR-003 revised |
| Site-wide search | Seven-page IA is directly navigable; publication search solves the evidenced retrieval task | Content volume or usability evidence shows visitors cannot find cross-route content; privacy/performance owner exists |
| News, Blog, or Insights | No publishing cadence/owner; stale content would weaken trust | Durable editorial purpose, owner, cadence, archive model, evidence policy, and enough approved entries |
| Media, Talks library, Gallery, Testimonials | No cleared collection or standalone visitor task | Rights/consent/provenance approved, meaningful volume, maintenance owner, and task evidence |
| People or Lab | No stable research-group need is established | Stable group, member consent, recruitment/maintenance need, ownership, and approved data model |
| Standalone Awards, Funding, Metrics, Certifications, Memberships, Peer Review, Community Service | These are supporting evidence, not primary destinations | Substantial approved content and visitor/task evidence that cannot be served within About or Leadership & Service |
| Arabic/bilingual routes or language selector | Launch is English only and the approved font subset/identity system is English | Owner scope change, translated/verified content, bilingual IA, typography, metadata, accessibility, governance, and affected gate review |
| Contact form, scheduling, newsletter, comments | Email-only launch avoids collection/retention/security obligations | Verified need plus STR-004 privacy, consent, retention, delivery, anti-spam, accessibility, security, and owner approval |
| Analytics dashboard or public metrics page | No analytics and no vanity-goal requirement | Documented decision need, privacy review, governed data source, audience task, and maintenance owner |
| CMS, database, accounts, authentication, personalisation | Static/repository-managed content is sufficient | TEC-001 evidence of a proportionate requirement plus security/privacy/operations review |
| Logo, identity, brand-assets, or university-portal page | Site uses the G0 text-only personal-affiliation system | Not a normal IA expansion; requires upstream identity authority and G0 revalidation, and must never imply portal ownership |
| Dedicated Privacy or Accessibility statement route | No form/analytics/data collection currently establishes a separate visitor task; requirements can be presented in context | STR-004/legal/accessibility review establishes required content, owner, update duty, and discoverability need; revise IA if a route is added |
| CV archive, Arabic CV, evidence portfolio | One public current English CV prevents privacy/version confusion | Explicit archival user need plus version, privacy, accessibility, retention, and indexing governance |
| Deployment status, operations dashboard, release notes, P9 surfaces | Outside autonomous and launch-content scope | Explicit post-G5 owner authorization and a separately governed operational need |

## 12. IA change control and gate effect

### 12.1 Changes requiring an STR-003 revision

Revise this document before implementation when a change would:

- add, remove, merge, or split a canonical route;
- change a canonical slug, CV path, route type, indexing intent, or redirect contract;
- change the five primary labels/order or the role/placement of Contact and Download CV;
- add Home, a language selector, global search, social destination, or other header/footer group;
- introduce project/publication detail pages, pagination, multi-select filters, or new query keys;
- materially reorder a route's required modules or change its purpose/audience/task ownership;
- make a task exceed its Section 9 maximum, remove a recovery path, or create an audience dead end;
- duplicate canonical content ownership or move a fact into unmanaged page-local copy;
- add a public privacy/accessibility/metrics/news/media/lab/operational route;
- change breadcrumb, fragment, external-link, same-tab, canonical, or trailing-slash policy; or
- introduce bilingual content, a form, analytics, logo/portal architecture, deployment, DNS, or P9 surface.

### 12.2 Changes not requiring an STR-003 revision

No revision is needed for evidence-approved copy edits, corrected facts, a selected-record change within existing caps, source-link correction, visual styling within the same hierarchy, or implementation refactoring that preserves routes, labels, module order, task counts, state behavior, and content ownership. These changes still follow their own editorial/content/design/QA governance.

### 12.3 G1 reopening rule

- Before G1 closes, incorporate any material correction into STR-003 and revalidate this acceptance record.
- After G1 closes, reopen G1 when an IA change affects a canonical route, primary/utility navigation, language, page purpose, task path, audience coverage, core state, content-ownership boundary, or a launch/deferred-scope decision.
- A minor non-structural correction may use targeted STR-003 revalidation without reopening G1 only when STR-004 and editorial assumptions remain intact and no downstream dependency changes.
- A change to the G0 identity hierarchy, logo/text treatment, font/asset boundary, or institutional relationship also reopens the affected G0-dependent validation; STR-003 cannot authorize it.
- Deployment, DNS, Gate G5, and P9 remain outside IA change control and require their separate owner authorization.

## 13. Downstream handoffs

| Work package / phase | Binding handoff |
|---|---|
| **STR-004** | Apply source authority, inclusion/exclusion, privacy, consent, last-verified, and suppression rules to every module/record. Do not change routes or create an empty destination to accommodate unresolved evidence. |
| **STR-005** | Track every route/module/state, task threshold, dependency, risk, owner, evidence need, and deferred reopening criterion. STR-003 does not begin that tracker. |
| **CNT-001–008** | Populate only approved modules, use canonical records/IDs, preserve module order and CTA destinations, create no detail page, and provide complete state/metadata content patterns. Final prose belongs to these packages. |
| **CNT-009** | Verify that the content pack fills the IA without unsupported modules, empty destinations, duplicated facts, label drift, or unresolved placeholders; recommend omission or explicit IA revision where needed. |
| **DAT-001/002** | Define immutable IDs for themes, projects, publications, courses, roles, profiles, and selected-content mappings; implement the canonical ownership table and query enums. |
| **DAT-003/004** | Prepare only approved public assets and the one canonical English CV; supply file size, update date, checksum, privacy/accessibility state, and unavailable behavior. |
| **TEC-001** | Confirm origin-independent routing, no-trailing-slash normalization, PDF delivery/canonical support, query/noindex handling, redirects, progressive enhancement, and static error behavior without changing this IA silently. |
| **DES-003/004/005** | Convert every route/module/state and Section 10 acceptance note into mobile-first wireframes/components. Preserve semantic order, long-content behavior, two-choice paths, text affiliation, and no-image completeness. |
| **BLD-001–009** | Implement exact routes, nav/current/focus behavior, fragments, query state, canonical content reuse, operations states, and redirects approved by TEC-001. Do not add routes/features for convenience. |
| **INT-001/002/003** | Implement unique metadata, canonical URLs, discovery files, structured data, and logo-free social metadata. Keep query/error states non-indexable and Taibah University out of publisher/site-owner fields. |
| **INT-004/005** | Preserve email-only Contact and the documented no-analytics decision. No form or analytics route/state launches by default. |
| **QA-002/003/004/005/006/009** | Audit claim/source mapping, route/nav/task behavior, responsive/accessibility states, URL/canonical/redirects, performance, privacy/security, and G0 identity across all routes and query/failure modes. |
| **QA-008** | Execute the exact Section 9 audience journeys against the frozen release candidate and record completion, friction, recovery, and blockers. Stop at Gate G5. |

## 14. STR-003 validation and acceptance record

### 14.1 Structural validation targets

- Exactly seven canonical HTML routes and one canonical public PDF route.
- Exactly five primary navigation items in the frozen order.
- Exactly two priority utilities: Contact and Download CV.
- No launch project/publication detail, blog/news, bilingual, form, analytics, testimonial, gallery, logo/portal, or P9 route.
- Every HTML route has a purpose, audience/task, entry points, ordered modules, actions, evidence behavior, related routes, metadata intent, mobile/density rule, and empty/failure behavior.
- T1–T5 require no more than two purposeful choices; T1–T8 and A1–A7 have a route, evidence, and recovery path.
- Canonical, fragment, query, redirect, non-indexing, content ownership, and unavailable-state rules are explicit.

### 14.2 Acceptance matrix

| Acceptance requirement | Evidence in this architecture | Result |
|---|---|---|
| One frozen, internally consistent sitemap and route table | Sections 1–2 define eight canonical resources and explicit route decisions | Pass |
| Exact navigation, utility, and footer rules | Section 3 freezes desktop/mobile order, current state, nameplate, skip link, footer groups, profiles, breadcrumbs, in-page navigation, and focus/return behavior | Pass |
| Each launch route has purpose/modules/actions/states | Section 4 provides the complete field set for R1–R8; Section 5 defines cross-route operational states | Pass |
| All tasks and audiences map without dead ends | Section 9 proves T1–T8 and A1–A7 with start, target, choice count, recovery, and evidence | Pass |
| Tasks 1–5 meet the two-choice threshold | Section 9.2 records maxima of 2, 2, 2, 2, and 1 | Pass |
| Accessible, responsive, search-friendly routes/URLs | Sections 3, 5–7, and 10 cover semantic/focus order, states, metadata/indexing, canonical/query/fragment rules, and density/reflow | Pass |
| Deferred features explicit | Section 11 lists route/feature reasons and reopening criteria | Pass |
| Canonical content ownership explicit | Section 8 prevents repeated unmanaged facts and defines selection-by-ID reuse | Pass |
| No unsupported content or final copy | Sections 1 and 4 make modules evidence-conditional and labels structural; STR-004/CNT packages own approval and prose | Pass |
| No dashboard/G1/STR-005/content/design/code/deployment/DNS/P9 action | Scope, change control, and handoffs preserve every boundary | Pass |

**STR-003 result:** the launch information architecture is frozen and ready for STR-004/G1 validation and downstream population. This step does not close G1, begin STR-005, create final content/design/code, select a hosting origin, deploy, change DNS, or begin P9.
