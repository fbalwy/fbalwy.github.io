# DES-005 Design Prototype Review

**Work package:** DES-005 v1  
**Review date:** 2026-08-19  
**Prototype status:** local, non-public, complete  
**Gate recommendation:** **G3 PASS — recommend closure by the authorized coordinator**

## 1. Decision

The Home and Publications prototype satisfies the DES-005 acceptance contract. It demonstrates the approved **Evidence in the Margins** direction with actual G2-approved content density, preserves the G0 identity boundary, implements the DES-003 hierarchy and DES-004 behavior contracts, and has no unresolved design, identity, responsive, accessibility, content-density, or prototype-integrity blocker.

This review recommends G3 PASS. It does not close G3, promote any content or asset, begin implementation, or authorize publication.

## 2. Prototype and non-public boundary

- The prototype is a static, local-only review artifact under `design-concepts/prototype/`.
- Both routes carry `noindex, nofollow, noarchive` metadata and a visible “Local design prototype · Not a public website” boundary.
- No application runtime, package, remote font, image, logo, analytics, tracker, form submission, storage, or external content request is used.
- External DOI and institutional-record links are inert until a reviewer deliberately activates them; bibliographic content remains complete in the base HTML.
- The state lab is explicitly a prototype-review utility, not a production control.

## 3. File inventory and hashes

| File | Purpose | SHA-256 |
| --- | --- | --- |
| `design-concepts/prototype/index.html` | Complete Home composition | `d0a3df3f511f543b2f49b5da6e7c43a1203249e9f91c4854a6a835ad41df8abf` |
| `design-concepts/prototype/publications.html` | Complete Publications composition and base catalogue | `fbcbc6b56bd4b1b28fd808b92a8c39fe17438703aadeca40c38ffabb1850b53c` |
| `design-concepts/prototype/styles.css` | Approved-token responsive and mode styling | `a74ec74dd3f9e2adb8a894790679db7d8085f4b7827a6fd308b92182735daf7f` |
| `design-concepts/prototype/prototype.js` | Local navigation, filtering, state, and recovery behavior | `49cb25b07868cec9cbdaec46ab65fa394aaadd048afe4362b657e444d7bb254d` |

The review document omits its own hash to avoid a self-referential value. Its final hash is reported in the DES-005 completion handoff.

## 4. Design and content reconciliation

### 4.1 System rationale

The polished concept is text-first and evidence-led. A strong navy reading plane carries the primary narrative; compact evidence rails, rules, metadata rows, and status labels supply scholarly context without becoming a competing sidebar. Royal blue marks actions and focus, while the remaining approved colors are used sparingly for semantic emphasis. Generous white space and restrained geometry avoid both a generic portfolio template and an institutional portal aesthetic.

The intentional no-image treatment is complete without a portrait, university logo, illustration, icon library, or generated media. Taibah University is represented as subordinate text affiliation only.

### 4.2 Accepted-wireframe comparison and resolved changes

| Comparison point | Accepted wireframe intent | Final prototype result |
| --- | --- | --- |
| Above-fold identity | Synthetic identity and evidence-led hero structure | Exact approved name, descriptor, affiliation, research gateway, Publications action, and evidence language |
| Home hierarchy | Research-first sequence | Identity → research gateway → three themes → four featured works → teaching → leadership/service → unavailable About/CV → Contact |
| Evidence rail | Additive contextual material | Compact rail remains subordinate at wide widths and collapses inline under content pressure |
| Publications | Representative catalogue shell | Four featured records, five latest records, and the exact complete 27-record catalogue |
| Navigation | Frozen route/action order | Home, Research, Publications, Teaching, Leadership & Service, About, Contact, CV; the prototype routes unavailable sections to governed Home anchors |
| Narrow layout | Single reading flow | No DOM reordering, clipped evidence, horizontal carousel, or horizontal overflow at 320–1440 CSS px |
| Identity assets | Text-first/no-image boundary | No logo, portrait, university media, generated image, remote font, or invented SVG |

Synthetic wireframe copy was replaced only with approved content. Unavailable About and CV actions remain explicitly unavailable rather than inventing copy or promoting the internal CV.

### 4.3 Route, module, and content counts

- Routes: **2** (`Home`, `Publications`).
- Home primary content sections after the route introduction: **8** (research gateway, research themes, selected publications, teaching, leadership and service, About, Contact, personal-site notice).
- Research themes: **3**.
- Home featured publications: **4**.
- Publications featured records: **4**; latest records: **5**; complete catalogue: **27**.
- Canonical catalogue identity: **27/27** exact record IDs, **27/27** exact titles, ordered author lists, display years, venues, statuses, and actions.
- Lifecycle/status distribution: **24 published**, **1 future-issue online-first**, **1 posted preprint**, **1 awarded thesis**.
- Record destinations: **26 DOI actions**, **1 institutional thesis-record action**.
- Interactive catalogue dimensions: text query plus **year** and **type** single-select filters; no theme filter.
- Density specimens: **0, 1, 27, and 100** records.
- Failure/recovery specimens: no results, partial data, data unavailable, external-link failure, offline-after-load, bad query/fragment, and no script.

## 5. Traceability

### 5.1 DES-003 specimen mapping

| Prototype coverage | Governing specimens |
| --- | --- |
| Wide, tablet, and mobile shell; menu order/focus; footer | `WF-G-01`–`WF-G-06` |
| Complete Home | `WF-R1-01` |
| Complete and actively filtered Publications | `WF-R3-01`, `WF-R3-02` |
| Partial, no-results, unavailable, no-script, offline, and external-failure behavior | `WF-S-05`–`WF-S-10` |
| Print, forced colors, font failure/no image, and reduced motion | `WF-M-01`–`WF-M-04` |
| Unavailable Contact and CV utilities retained on Home | `WF-R7-01`, `WF-R8-02` |

The prototype intentionally does not claim implementation coverage for the Research, Teaching, Leadership & Service, About, available Contact/CV, 404, or server-error route specimens; those remain downstream application work.

### 5.2 DES-004 component mapping

| Prototype area | Implemented component contracts |
| --- | --- |
| Global shell | CMP-001 SiteShell; CMP-002 SkipLink; CMP-003 SiteNameplate; CMP-004 PrimaryNavigation; CMP-005 MobileMenu; CMP-006 UtilityActionGroup; CMP-007 TextAffiliation; CMP-008 SiteFooter; CMP-009 FooterGroup |
| Page structure | CMP-010 RouteIntro; CMP-011 SectionHeading; CMP-012 PagePurpose; CMP-013 Action; CMP-014 ExternalLink; CMP-015 UnavailableAction; CMP-017 ReadingPlane; CMP-018 EvidenceRail; CMP-019 ClaimEvidenceBlock; CMP-020 PageSection |
| Record primitives | CMP-021 MetadataRow; CMP-022 StatusLabel; CMP-023 RecordList; CMP-024 PublicationRecord; CMP-025 AuthorList; CMP-026 PublicationActionGroup |
| Catalogue behavior | CMP-027 PublicationFilterForm; CMP-028 SearchField; CMP-029 SingleSelectFilter; CMP-030 ResultAnnouncement; CMP-031 ClearFilters; CMP-032 PublicationCatalogue |
| Profile and modes | CMP-036 ProfileLinkList; CMP-038 EmailAction; CMP-039 CVAction; CMP-040 StatusPanel; CMP-041 VisuallyHiddenText; CMP-042 ModeUtility |

The compositions preserve the DES-003 Home and Publications DOM order, the reading-plane/evidence-rail relationship, the full no-script catalogue, and deterministic navigation, filter, result, status, and focus transitions.

### 5.3 Token and identity mapping

- Final authored color literals are limited to the governed allowlist used by the prototype: `#111144`, `#4056E3`, `#0A8E6E`, `#00AEDA`, `#F2F2F2`, `#FFFFFF`, `#000000`, and `#A3212A` (case-insensitive). No extra raw color remains.
- System-font completeness follows the controlling DES-005 instruction: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Alexandria is not promoted or loaded; Inter and the former monospace metadata family were removed.
- DOI and metadata surfaces inherit the approved system sans stack.
- No custom shadow remains; the design uses borders, spacing, and surface changes rather than an ungoverned effect.
- Radius, spacing, type scale, focus, target, layout, breakpoint, and motion behavior follow the approved DES-002 roles. No new font, gradient, image treatment, decorative chart, or motion token is introduced.

## 6. Independent validation

### 6.1 Browser and responsive matrix

The prototype was served locally and inspected in a real Chromium browser. Browser-plugin inspection was used first; exact-width and state validation then used the approved local Playwright fallback because the connected browser's viewport scaling did not provide reliable CSS-pixel captures.

| Target | Home | Publications | Result |
| --- | --- | --- | --- |
| 1440 CSS px | Checked | Checked | PASS — stable desktop hierarchy, no overflow |
| 1024 CSS px | Checked | Checked | PASS — evidence and catalogue density remain legible |
| 768 CSS px | Checked | Checked | PASS — deterministic stacking, no overflow |
| 390 CSS px | Checked | Checked | PASS — mobile menu/filter/list states fit |
| 375 CSS px | Checked | Checked | PASS — no clipped action or long metadata |
| 320 CSS px / 400% reflow proxy | Checked | Checked | PASS — no horizontal overflow |
| 200% text | Checked | Checked | PASS — one h1, reflow preserved, no overflow |

For every exact-width check, `documentElement.clientWidth === documentElement.scrollWidth`. Root coordination independently reproduced clean desktop/mobile Home, 390 px reflow, and exact Publications catalogue behavior.

### 6.2 Modes and resilience

| Mode/state | Evidence | Result |
| --- | --- | --- |
| JavaScript disabled | All 27 records, labels, navigation, and explanatory fallback remain visible | PASS |
| Reduced motion | Media query matches; smooth scrolling becomes auto and transition duration becomes zero | PASS |
| Forced colors | System-color boundaries and control borders remain visible | PASS |
| Print | Prototype chrome, filters, and state tools are suppressed; content prints black on white | PASS |
| System font/no image | No font or image request; layout remains complete | PASS |
| Offline after load | Governed offline status appears; local content remains usable | PASS |
| Bad query/fragment | Query is capped at 200 Unicode code points; invalid `year`, `type`, and `theme` values are discarded; fragment is safe | PASS |
| External failure specimen | Failure notice appears while the local catalogue remains available | PASS |
| Partial/unavailable specimens | Partial warning preserves content; unavailable state hides unavailable controls/list and exposes recovery context | PASS |

### 6.3 Catalogue behavior and density

- `q=blockchain` returns **13** records.
- `q=blockchain&year=2022` returns **3** records and preserves deterministic query ordering.
- The 2024 plus preprint selection isolates the SSRN record.
- A no-match query returns **0**, announces the result, and displays the no-results recovery.
- Clear filters restores **27** records, removes the query string, moves focus to search, and becomes disabled.
- Density controls produce exactly **0**, **1**, **27**, and **100** records; the 27 state removes all synthetic density records and restores the canonical set.
- At 100 records, the 390 px composition remains free of horizontal overflow.
- Canonical record IDs are unique and match the dataset exactly; all 27 titles are present in base HTML.

### 6.4 Accessibility, focus, and contrast

- Both pages have one h1, a working skip link, named landmarks, ordered headings, native labels, logical source order, visible non-color focus, and wrap-safe long titles/authors/DOIs.
- Mobile menu: opening sets `aria-expanded=true`; the next Tab reaches Research; Escape closes the menu, restores focus to the toggle, and restores its “Open menu” label.
- Result counts use a live status; unavailable and clear states expose appropriate disabled semantics.
- Automated WCAG A/AA scans reported **0 violations**: Home **20 passes**, Publications **28 passes**. Automated contrast remained an explicit manual-check item.
- Manual exact-pair contrast ratios: navy/white **17.684:1**; royal/white **5.740:1**; royal/gray **5.128:1**; navy/gray **15.797:1**; sky/navy **6.793:1**; white/royal **5.740:1**. Each tested text/control pair meets the applicable WCAG AA threshold.

## 7. Resource and integrity review

### 7.1 Request inventory

Each route loads only the local stylesheet and local script. The empty data-URL favicon prevents an incidental server request. No remote CSS, JavaScript, font, image, API, analytics, tracker, or embedded-resource request occurs.

### 7.2 Screenshot review and fixes

Temporary full-page and targeted screenshots covered Home and Publications at wide and narrow widths, Publications filtering, and no-results behavior. They were inspected for hierarchy, rhythm, density, brand fidelity, content accuracy, responsive behavior, and generic-template drift.

Defects found and corrected before acceptance:

1. A broad form-control inheritance rule accidentally caused Times rendering on the body; the selector was corrected and the computed system sans stack reverified.
2. An incidental favicon 404 was removed with an empty local data favicon; final console review has no warning or error.
3. `Inter` and a monospace DOI/metadata declaration were removed so every surface uses the governed system sans stack.
4. Untokenized canvas, muted, rule, control, focus, disabled, and error colors were replaced with approved semantic colors; a final literal scan contains zero non-allowlisted color.
5. The custom shadow was removed, leaving no ungoverned box shadow, text shadow, or filter.
6. Long-content, mobile-menu focus, clear-filter restoration, URL normalization, no-results recovery, and density-state cleanup were retested after the corrections.

Rejected/intermediate screenshots are not retained.

### 7.3 Prohibited-pattern scan

PASS: no `TODO`, `TBD`, `FIXME`, lorem ipsum, “coming soon,” editorial marker, private datum, hidden internal note, storage API, `innerHTML`, `insertAdjacentHTML`, image, SVG, `@font-face`, external form action, remote dependency, logo, portrait, analytics, or tracker. The search placeholder and explicit anti-analytics explanation are intentional interface copy, not authoring markers.

## 8. Controlled limitations and downstream handoff

- This is a design prototype for Home and Publications only; it is not the application and does not claim production route integration.
- Navigation to Research, Teaching, Leadership & Service, About, and Contact uses governed Home anchors so the two-route artifact remains internally coherent.
- The state/density lab is review-only. Production state derivation belongs to BLD-005/BLD-009.
- External-link failure is a deterministic specimen; the static prototype does not intercept or diagnose a destination after navigation.
- Automated contrast was manually resolved using exact approved pairs; later QA-004 still owns full assistive-technology and multi-browser accessibility certification.
- The approved Alexandria candidate font, official institutional logo, images, and CV are deliberately absent and unpromoted.
- No screenshot or local server is retained. No app, build, integration, metadata, asset, release, deployment, DNS, publication, or P9 action was performed.

Handoff: BLD-001 should implement the shell/tokens from this composition; BLD-002 and BLD-005 should reproduce the Home and Publications behavior against governed data; BLD-009 should implement production failure states; INT-003 may later derive a social preview only after its own gate; QA-003/004/005/006/009 should independently certify browser behavior, accessibility, performance, resilience, and visual fidelity.

## 9. Line-by-line G3 recommendation

| Required G3 condition | Evidence | Recommendation |
| --- | --- | --- |
| No unresolved design blocker | Distinctive, polished Home and Publications compositions; screenshot defects corrected | PASS |
| No unresolved identity blocker | Approved palette only; system-font completeness; text affiliation; zero unapproved logo/media/font/shadow | PASS |
| No unresolved responsive blocker | Home and Publications pass 1440/1024/768/390/375/320, 200% text, and 400% reflow proxy without overflow | PASS |
| No unresolved accessibility blocker | Semantic structure, keyboard/focus restoration, states, modes, exact contrast pairs, and automated A/AA scans pass | PASS |
| No unresolved content-density blocker | Exact 27 canonical records plus deterministic 0/1/27/100 density and long-content behavior pass | PASS |
| No unresolved prototype-integrity blocker | Local/noindex boundary, base-HTML catalogue, deterministic recovery, zero external dependency/marker/private datum, hashes recorded | PASS |

**Final recommendation: G3 PASS.** The authorized coordinator may close G3; DES-005 itself does not perform that gate action.
