# CNT-008 v1 — global site-interface copy pack

**Language:** English only  
**Content owner:** CNT-008  
**Status:** complete internal copy contract; CNT-009 approval required  
**Prepared:** 19 August 2026 (Asia/Riyadh)

> **Publication boundary:** This file is the canonical editorial inventory for shared interface labels, messages, metadata candidates, and resilience states. It contains internal conditions and placeholders that must be resolved from governed configuration/data before rendering. Internal IDs, instructions, bracketed fields, and unavailable alternatives are not public copy merely because they appear here.

All shared copy preserves a Faisal-first, research-first, text-only/no-logo, English-only personal academic website. Interface wording never turns Taibah University into site owner/publisher, creates a contact form, exposes a held email/CV/profile, or introduces analytics.

## 1. Global identity and landmark labels

| Surface | Exact visible or accessible copy | Behavior |
|---|---|---|
| Homepage/nameplate link | **Faisal Albalwy** | Links `/`; sole header identity anchor; `aria-current="page"` only on Home |
| Site type | **Personal academic website** | Role-neutral fallback; never `Official website` |
| Main landmark skip link | **Skip to main content** | First focusable control; targets the main heading/content |
| Primary navigation accessible name | **Primary navigation** | Wraps the five primary links |
| Utility navigation accessible name | **Actions** | Wraps Contact and CV state/action |
| Footer accessible name | **Site footer** | Contains groups in Section 6 order |
| Main content target | **Main content** | Programmatic landmark name only when needed to disambiguate |

Do not abbreviate the nameplate to initials, add an honorific/degree, replace it with a logo, or prefix the university name. There is no visible `Home` navigation item; the nameplate is the homepage link.

## 2. Primary navigation and utilities

### Desktop and expanded-menu order

1. **Research** → `/research`
2. **Publications** → `/publications`
3. **Teaching** → `/teaching`
4. **Leadership & Service** → `/leadership-service`
5. **About** → `/about`
6. Utility: **Contact** → `/contact`
7. Utility: current **CV unavailable** non-link, or future **Download CV (PDF, [verified size])** → `/cv/faisal-albalwy-cv.pdf`

The five primary labels never change order or shorten at narrow widths. `Contact` and CV remain distinct utilities; neither becomes a sixth/seventh primary item. There is no header university logo, Home item, site search, language selector, theme switcher, login, portal, social row, or icon-only action.

### Current-page context

Use `aria-current="page"` on exactly one current HTML destination:

| Route | Current element | Optional assistive clarification |
|---|---|---|
| `/` | **Faisal Albalwy** nameplate | **Current page: Home** |
| `/research` | **Research** | **Current page: Research** |
| `/publications` and its query/fragment states | **Publications** | **Current page: Publications** |
| `/teaching` | **Teaching** | **Current page: Teaching** |
| `/leadership-service` | **Leadership & Service** | **Current page: Leadership & Service** |
| `/about` | **About** | **Current page: About** |
| `/contact` | **Contact** utility | **Current page: Contact** |

The optional clarification is visually hidden when the visible current treatment is already clear. Current state also uses a persistent underline/rule or typographic treatment; color alone is insufficient. The CV is a file action and is never marked current.

## 3. Mobile menu

| State/function | Exact copy | Accessibility/interaction note |
|---|---|---|
| Collapsed visible control | **Menu** | Programmatic `expanded=false`; accessible name **Open menu** when additional clarity is needed |
| Expanded visible control | **Menu** | Programmatic `expanded=true`; accessible name **Close menu** |
| Primary link group | **Explore** | Optional visible group label; do not announce as another destination |
| Utility group | **Actions** | Contains Contact and CV action/state after the five primary links |
| Close action if separately rendered | **Close menu** | Text label; never an icon-only `X` |

Opening moves no focus automatically. Normal Tab order proceeds from the toggle to Research. Escape closes the menu and returns/retains focus on the toggle. Selecting an internal destination closes the menu after navigation. If the menu is modal, background content is not focusable. No announcement is needed beyond the correctly exposed expanded state; if an implementation requires a polite message, use **Menu opened** and **Menu closed**.

## 4. Wayfinding, fragments, and breadcrumbs

- The seven launch HTML routes have no breadcrumbs because each is Home or one level below it.
- The CV has no breadcrumb.
- 404, global error, offline, empty, and unavailable states do not invent a hierarchy.
- Do not add a generic `Back` link. Browser Back remains available; recovery actions name a destination.
- Stable publication fragments use `#publication-<stable-id>` but display the canonical title, never the ID.
- In-page links use their visible section headings and receive predictable focus after activation.

Approved recovery labels:

- **Return to homepage**
- **Explore research**
- **View publications**
- **Contact**
- **Try again**
- **Clear filters**

## 5. Shared route and action labels

| Intent | Exact label | Destination/condition |
|---|---|---|
| Research gateway | **Explore research** | `/research` |
| Research-to-publications | **View related publications** | `/publications` or approved catalogue fragment/query only |
| Publications-to-research | **View related research** | `/research` |
| General catalogue | **View publications** | `/publications` |
| Teaching route | **Teaching** | `/teaching`; use body CTA only when route is release-ready |
| Leadership/service route | **Leadership & Service** | `/leadership-service`; body CTA only when route is release-ready |
| About route | **About** | `/about` |
| Contact route | **Contact** | `/contact` |
| Verified email | **Email Faisal Albalwy** | One approved institutional `mailto`; otherwise absent |
| CV available | **Download CV (PDF, [verified size])** | One approved English PDF; adjacent **Updated [month year]** |
| CV unavailable | **CV unavailable** | Non-link with explanatory text |
| DOI | **Open DOI (external)** | Canonical DOI destination, same tab |
| Publisher | **View publisher page (external)** | Verified distinct destination, same tab |
| Institutional record | **View institutional record (external)** | DOI-less authoritative record, same tab |
| Lawful full text | **View lawful full text (external)** | Only with governed lawful destination |
| Code/data | **View code (external)** / **View data (external)** | Only with governed destinations |
| University | **Taibah University website (external)** | Verified official HTTPS destination, same tab |

Avoid `Click here`, `Learn more`, `Read more`, `Discover`, `Get in touch`, `Let’s connect`, `Download now`, bare URLs, or an icon as the sole label.

## 6. Footer copy and conditional groups

Footer groups render in this exact order. Remove a conditional group entirely when it has no approved item; never leave an empty heading.

### 6.1 Site identity

**Faisal Albalwy**  
**Personal academic website**

**© [current configured year] Faisal Albalwy**  
**Site last updated [day month year]**

The year and update date come from one governed site configuration at build/release time. The update date describes the site release, not the freshness of every factual claim.

### 6.2 Explore

- **Research**
- **Publications**
- **Teaching**
- **Leadership & Service**
- **About**

### 6.3 Actions

- **Contact**
- Conditional verified action: **Email Faisal Albalwy**
- Current state: **CV unavailable**
- Future approved action: **Download CV (PDF, [verified size])** with **Updated [month year]**

Email is a subordinate footer action, not a third global utility. In the current evidence state omit it; show no address or private alternative. Show either CV available or unavailable, never both.

### 6.4 Academic profiles — conditional

Render only approved destinations, each on its own line:

- **View on Google Scholar (external)**
- **View ORCID record (external)**
- **View on Scopus (external)**
- **View on Web of Science (external)**
- **View on ResearchGate (external)**
- **View Taibah University faculty profile (external)**

Current treatment: omit the complete group. `CLM-PLINK-000001` is only `eligible`; the other registered profile links remain held, and the faculty-profile destination needs its own governed link record. No profile metric or count appears.

### 6.5 Institutional affiliation — held candidate

**Institutional affiliation: Taibah University**

**Taibah University website (external)**

**This is Faisal Albalwy’s personal academic website. Taibah University is shown as his institutional affiliation; this is not an official Taibah University website.**

Render this group only after `CLM-AFF-000001` and `CLM-AFF-000003` pass factual/freshness/wording review. Until then, retain the personal-site description under Site identity and omit the university proposition/link.

The footer remains text-only on light or dark surfaces. No logo request, image fallback, logo gap, symbol, lockup, pattern, icon, photograph, or university-template content exists.

### 6.6 Optional no-analytics note

Do not show a cookie banner, consent dialog, or analytics-preference link under the approved launch scope. If INT-005 decides that a visible transparency note serves a visitor need and verifies the built request inventory, use:

**This site does not use third-party analytics, tracking, or contact forms.**

Do not surface this sentence before implementation verification, and do not call it a privacy policy.

## 7. External, download, and unavailable cues

- External links open in the same tab by default and include `(external)` in visible or accessible copy.
- Do not append `(opens in a new tab)` because launch does not use that behavior.
- A functional external-link glyph may supplement the label but is never the only cue and is hidden from assistive technology when redundant.
- Downloads state file type and verified size in or next to the action; the update date is adjacent.
- An unavailable action is plain status text, not a disabled anchor with a hidden destination.
- Never put one destination into adjacent redundant links or make an entire dense record a link.
- Failed external links retain local verified content and remove/replace only the unsafe action.

### CV states

Available:

- **Download CV (PDF, [verified size])**
- **Updated [month year]**

Unavailable:

- **CV unavailable**
- **The public English CV is being reviewed and is not available for download. Use About for accessible HTML context.**

Direct requests to an unavailable CV return the standard 404 state. Never redirect to About or publish an older/private substitute.

### Institutional email states

Available:

- **Email Faisal Albalwy**
- Visible verified institutional address

Unavailable:

- **Institutional email unavailable**
- **The institutional email link is being verified and is not available. Please return later.**

Remove every visible/hidden address and `mailto` in the unavailable state.

## 8. Publication controls and result copy

These strings match `content/pages/publications.md`; that page and the canonical data own the task-specific content.

### Controls

| Function | Exact copy |
|---|---|
| Search label | **Search publications** |
| Search hint | **Search by title, author, venue, or DOI.** |
| Year label/default | **Year** / **All years** |
| Type label/default | **Publication type** / **All publication types** |
| Theme label/default | **Research theme** / **All research themes**; omit until relationships are approved |
| Clear action | **Clear filters** |

### Results

- Unfiltered: **[total] publications**
- Filtered plural: **[shown] of [total] publications**
- Filtered singular: **1 of [total] publications**
- None: **0 of [total] publications**
- Search token: **Search: “[sanitised query]”**
- Active filter token: **[Filter label]: [approved display value]**
- Remove token: **Remove [filter label] filter: [display value]**

Announce result updates in a polite status region after a committed change. Do not move focus on each keystroke. Query text is plain text, never inserted as HTML, logged, or sent to analytics.

### No results

**No publications match these filters.**

Change the search or filters, or clear them to return to the complete catalogue.

Action: **Clear filters**

### Empty canonical catalogue — release blocker

**The publication catalogue is not available.**

No approved canonical records are available for this page. Return to Research while the catalogue is reviewed.

Actions: **Try again**; **View related research**

Do not release Publications as an empty route, show a placeholder, or substitute CV/profile rows. Retain the page purpose and mark the route non-indexable until substantive canonical data is restored.

### Publication data unavailable

**Publications could not be loaded.**

The catalogue data is temporarily unavailable. Try again or use an approved scholarly profile link.

Actions: **Try again**; conditional approved profile link.

### Partial publication data

**Some publication details are unavailable.**

Available verified fields remain visible. Missing optional fields are omitted and can be checked at the linked canonical source.

### Citation copy action

- Control: **Copy citation**
- Success, polite status: **Citation copied.**
- Failure, assertive only when focus/action requires: **The citation could not be copied. Select the citation text and copy it manually.**

## 9. Shared loading, empty, partial, and external-failure copy

Use a state only when it corresponds to the real system condition. Optional empty modules are removed without a message; required routes with no substantive evidence are held from release.

### Loading

Heading/label pattern: **Loading [content]…**

Examples: **Loading publications…**; **Loading contact information…**

Do not announce false progress, percentages, or completion times. Base content should not require a loading state where it can be delivered in HTML.

### Empty optional module

No visitor message. Remove the module heading, in-page link, controls, and reserved space together. Do not show `Coming soon`, an empty card, or a disabled destination.

### Required route not ready — preview/non-indexed only

**This page is not available yet.**

Its content is still being reviewed. Use the available routes below while the evidence is completed.

Actions depend on context: **Explore research**; **View publications**; **Return to homepage**.

This is a release-blocker state, not approved launch content and not a reason to merge routes without IA review.

### Generic partial data

**Some details are unavailable.**

Verified information remains below. Missing fields are omitted rather than estimated.

### External source failure

**The external source is currently unavailable.**

The verified local record remains available. Try the canonical destination again later.

Never redirect to an unverified mirror or remove the local record solely because an optional external action fails.

## 10. Offline, script, image, font, motion, color, and print behavior

### Offline

**You’re offline.**

Content already loaded on this page remains available, but external sources and enhanced actions may not work until the connection returns.

Action where meaningful: **Try again**

Do not create an `/offline` route or claim that an email, download, clipboard action, or external navigation completed.

### Script unavailable

Ordinary navigation, page content, route links, Contact guidance, text affiliation, and canonical publication records remain usable without script. Do not show a global script warning.

For Publications enhancement only, if controls cannot function but base records remain:

**Search and filters are unavailable. All publications remain listed below.**

Remove inert controls or clearly associate the message with them; never hide the catalogue.

### Image unavailable or no image

No visitor message, placeholder, broken-image icon, or reserved gap is needed. All essential meaning is text. Home hero, affiliation, records, navigation, operational states, and social metadata are complete without images.

### Font unavailable

No visitor message is needed. The system-font fallback preserves all content, hierarchy, controls, focus, long titles, DOI strings, and affiliation. Do not hide text while a font loads.

### Reduced motion

No copy change. State changes are immediate or use nonessential reduced transitions; meaning never depends on animation.

### Forced colors

No copy change. Native/system colors preserve links, controls, focus, current state, status, and errors. Text remains the cue; no logo/image/color is required.

### Print

Print header:

- **Faisal Albalwy**
- **[Page title]**

Print footer/context, when configured:

- **Source: [canonical absolute URL]**
- **Printed [day month year]**
- Conditional verified text: **Institutional affiliation: Taibah University**

Use white background, readable dark text, underlined links with useful destinations where appropriate, and no university logo, pattern, photograph, UI-only menu, hidden source ID, or app error trace. The print date is output context, not a claim-freshness date.

## 11. 404, application error, and recovery

### 404

Title/H1: **Page not found**

Body: **The page you requested could not be found. It may have moved, or the address may be incorrect.**

Actions, in order:

1. **Return to homepage**
2. **Explore research**
3. **View publications**
4. **Contact**

Use the correct HTTP 404 status and `noindex`. Do not guess a redirect, use a false breadcrumb, expose the requested private path, or add university ownership language.

### Global application/server error

Title/H1: **This page could not be loaded**

Body: **A site error prevented this page from loading. Try again or use another route.**

Actions:

1. **Try again**
2. **Return to homepage**
3. **View publications**

Use the correct 5xx status and `noindex` when server-generated. Do not show stack traces, error codes that expose internals, source paths, blame, jokes, or restoration promises.

### Action-level retry

- Control: **Try again**
- In-progress accessible label: **Trying again…** only while a real retry is running
- Success: remove the error and announce the restored content by name
- Repeated failure: retain the exact error and safe alternate route; do not loop automatically

### Generic copy action

- Control: **Copy [object]**
- Success: **[Object] copied.**
- Failure: **[Object] could not be copied. Select it and copy it manually.**

Never announce success before the platform confirms it.

## 12. Page titles, descriptions, canonical, and indexing copy

Descriptions are candidates for CNT-009 and INT-001. Activate a route’s indexable metadata only when that route contains substantive approved content. Descriptions state route purpose; they must not be used to promote a held fact.

| Resource | Exact title | Meta description | Canonical/indexing boundary |
|---|---|---|---|
| Home `/` | **Faisal Albalwy \| Personal academic website** | **Explore research, canonical publications, teaching, leadership and service, biography, and contact pathways on Faisal Albalwy’s personal academic website.** | Canonical `/`; index only after Home and required destinations pass content review |
| Research `/research` | **Research \| Faisal Albalwy** | **Explore approved research themes, projects, systems, and related publications through an evidence-led research record from Faisal Albalwy.** | Canonical `/research`; currently hold/noindex because substantive claims remain unresolved |
| Publications `/publications` | **Publications \| Faisal Albalwy** | **Search and browse Faisal Albalwy’s deduplicated publication catalogue, with canonical DOI, publisher, and repository links for verification.** | Canonical unfiltered `/publications`; query states noindex/follow; CNT-009 still required |
| Teaching `/teaching` | **Teaching \| Faisal Albalwy** | **Review approved teaching and supervision context, with privacy-safe course information and links to related research and publications.** | Canonical `/teaching`; currently hold/noindex until substantive approved records remain |
| Leadership & Service `/leadership-service` | **Leadership & Service \| Faisal Albalwy** | **Review approved leadership and service records across professional, university, scholarly, and community contexts without unsupported totals.** | Canonical `/leadership-service`; currently hold/noindex until substantive approved records remain |
| About `/about` | **About \| Faisal Albalwy** | **Read verified biographical, education, appointment, leadership, affiliation, and CV context for Faisal Albalwy without reproducing the full CV.** | Canonical `/about`; index only after retained facts and route substance pass CNT-009 |
| Contact `/contact` | **Contact \| Faisal Albalwy** | **Prepare a focused professional inquiry for Faisal Albalwy and use the verified institutional email pathway when it is available.** | Canonical `/contact`; hold/noindex while institutional email is unavailable |
| CV PDF | **Curriculum vitae \| Faisal Albalwy** | **Curriculum vitae for Faisal Albalwy.** | `/cv/faisal-albalwy-cv.pdf`; no file/metadata/indexing until DAT-004 and QA approval |
| 404 | **Page not found \| Faisal Albalwy** | **The requested page could not be found. Use the homepage, Research, Publications, or Contact to continue.** | HTTP 404; noindex; no canonical to Home |
| Global error | **Site error \| Faisal Albalwy** | **A site error prevented this page from loading. Try again or return to the homepage.** | Correct 5xx when applicable; noindex |

Do not include a publication count, citation metric, current role, department, theme list, funding/availability statement, university-as-publisher claim, `official website`, keyword stuffing, or tracking query in metadata.

### Social metadata

- Use the same approved title/description and fragment-free canonical URL.
- Faisal is the first named subject and Person/ProfilePage owner.
- Default social preview is typography-led and logo-free; no university logo, symbol, portrait placeholder, pattern, template, or invented monogram.
- Do not name Taibah University as site owner or publisher. Include affiliation text only after the claim is current and approved, and keep it subordinate.
- No hashtags, emoji, clickbait, metric, availability claim, or publication/theme list.

### CV document metadata — conditional

- Title: **Curriculum vitae — Faisal Albalwy**
- Author: **Faisal Albalwy**
- Subject: **Curriculum vitae**
- Language: **English**
- Updated: governed document date, visible in the PDF and adjacent HTML action

No source path, protected-original filename, internal ID/hash, authoring history, template field, hidden content, private contact, or university-as-document-owner value.

## 13. Cross-route suppression and release decisions

| Domain | Current shared treatment | Public reopening condition |
|---|---|---|
| Preferred professional descriptor | Use **Personal academic website** fallback | Every descriptor element reaches `publish` |
| Research themes/projects/systems | No Home labels/cards/queries | Approved canonical IDs, labels, status, summaries, relationships |
| Publications | Four Home featured stable IDs; complete catalogue remains canonical | CNT-009 revalidates eligible records/selections and public wording |
| Teaching snapshot | Omit from Home body; primary nav remains frozen | Teaching route retains substantive approved records |
| Leadership & Service snapshot | Omit from Home body; primary nav remains frozen | Route retains substantive approved records |
| Institutional email | Unavailable; no address/action anywhere | `CLM-CON-000001` passes `P1+C1+F`, privacy, wording, and location approval |
| CV | `CV unavailable`; no public path/link | One DAT-004 English derivative passes all gates |
| Academic profiles | Omit complete footer/Contact group | Each profile-link claim reaches `publish`; render independently |
| Affiliation | Personal-site text fallback; held Taibah block | `CLM-AFF-000001`/`000003` pass freshness and wording; same-tab official link |
| University logo/media | Absent everywhere | Not reopened by CNT-008; current conservative G0 text-only system controls |
| Analytics/forms | Absent; no banner by default | Separate documented need, privacy/security review, owner approval, and affected IA/governance revision |

## 14. Accessibility and resilience acceptance

- One H1 per route/state; ordered headings and landmarks; skip link first.
- Exact primary/menu/footer order; one programmatic current page; no color-only or icon-only meaning.
- Contact/CV available and unavailable states have distinct labels and no hidden destination.
- Labels remain visible; status/live-region messages are concise, polite, and used only for dynamic changes.
- Focus does not jump on each filter keystroke; menu, fragment, retry, error, and clear-filter focus behavior is defined.
- Every long label, title, author list, DOI, URL, date, address candidate, and message wraps at 320 CSS pixels, 200% text, and 400% zoom without page-level horizontal scrolling.
- Base routes, content, publication catalogue, affiliation meaning, and recovery remain usable with no script, no image, font failure, offline limits, reduced motion, forced colors, and print.
- Empty optional modules leave no heading/link/space; required empty routes are release blockers, not `Coming soon` pages.
- No private contact, source path/hash, protected file, student/third-party data, form field, analytics/tracking, logo/media asset, or institutional-ownership claim enters UI/metadata.

## 15. Downstream handoff

- **CNT-009:** audit every title/description, route label, state, held alternative, stable-ID selection, affiliation/profile/email/CV condition, and prohibited phrase; public output must contain zero internal IDs/placeholders/instructions.
- **DES-003:** wireframe desktop/mobile header, full footer conditions, Home omissions, Contact verified/unavailable, publication controls/states, CV variants, 404/error, no-image/font/script/offline/forced-color/print meaning.
- **DAT-002:** provide canonical configuration/data fields for identity, selections, route readiness, email, profiles, affiliation, CV, site dates, metadata, and state predicates; no page-local factual duplication.
- **BLD-001–009:** implement semantic landmarks, navigation/current state, menu/focus, exact actions, conditional groups, progressive enhancement, failure states, wrapping, and no hidden held values.
- **INT-001–005:** implement canonical/indexing/social/document metadata, email-only contact, same-tab external links, logo-free preview, no analytics, and no source/private metadata.
- **QA-002/003/004/005/006/008/009:** verify claim joins, route/task thresholds, responsive interaction, WCAG modes, metadata/crawl states, performance/no-third-party requests, privacy/security, visitor journeys, and personal/institutional hierarchy.

## 16. CNT-008 site-interface acceptance record

| Requirement | Evidence | Result |
|---|---|---|
| Exact navigation/mobile/current labels | Sections 1–3 | Pass |
| Breadcrumb/wayfinding boundary | Section 4 | Pass |
| CTA/external/download cues | Sections 5 and 7 | Pass |
| Footer order and conditional groups | Section 6 | Pass |
| Publication controls/results/copy | Section 8 | Pass |
| Loading/empty/partial/external states | Section 9 | Pass |
| Offline/script/image/font/mode/print behavior | Section 10 | Pass |
| 404/global error/retry/copy recovery | Section 11 | Pass |
| Seven-route + CV/404/error metadata | Section 12 | Pass |
| Evidence-safe suppression decisions | Section 13 | Pass |
| Accessibility/privacy/no-logo/no-analytics checks | Section 14 | Pass |
| Downstream handoffs | Section 15 | Pass |
