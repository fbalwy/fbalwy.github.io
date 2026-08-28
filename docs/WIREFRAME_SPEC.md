# Responsive wireframe specification

**Work package:** DES-003 v1  
**Prepared:** 19 August 2026 (Asia/Riyadh)  
**Status:** Complete wireframe contract pending downstream DES-004/005; not final visitor copy, visual design, or application implementation  
**Browser artifact:** `design-concepts/wireframes/index.html`  
**Identity boundary:** Faisal-first, text-only/no-logo, no-image-complete personal academic website  

## 1. Purpose and authority

This specification translates the frozen information architecture, approved `Evidence in the Margins` direction, design tokens, content-density evidence, and operational copy patterns into a mobile-first wireframe system. It does not approve any held fact, publication record, email, affiliation, profile, course, role, CV, image, or final sentence.

The HTML board is a self-contained internal design artifact. It contains only structural labels, governed route/action/state labels, and clearly synthetic density examples. It does not render the 27 eligible-only publication records, any source/claim identifier, editorial marker, protected path, private contact value, remote asset, or final content promotion. CNT-009 remains the authority for visitor-copy and fact approval; DAT-002 remains the canonical public-data handoff.

Binding precedence is:

1. frozen route, module, navigation, task, and state rules in `docs/INFORMATION_ARCHITECTURE.md`;
2. content/release/privacy rules in `docs/CONTENT_GOVERNANCE.md` and current content packs;
3. no-logo/text-only identity rules in the brand specifications;
4. `Evidence in the Margins` and the approved token contracts;
5. this wireframe's layout annotations.

No wireframe may create a route, fact, page-local data copy, publication detail page, project detail page, contact channel, form, profile destination, brand asset, or release permission.

## 2. Concept and design-system extraction

The required frontend application builder workflow produced and reviewed a temporary grayscale structural concept before authoring the HTML. It is a design reference only and is not included in the project or website. The concept established the following implementation inventory:

| Dimension | Wireframe decision |
|---|---|
| Point of view | `Evidence in the Margins`: dominant reading plane plus subordinate evidence/annotation rail. |
| Background | True white page with very-light-gray wireframe headers and dark navy rules/text. No cream or gradient. |
| Type | System sans-serif only in the artifact; hierarchy, not font personality, is being evaluated. |
| Geometry | Square/open composition, thin rules, strong focus outline, almost no radius, no shadow. |
| Container model | Open pages, lists, timelines, status regions, and one additive rail. No default card grid or giant wrapper. |
| Assets | None. No portrait, logo, icon set, illustration, pattern, SVG, generated site asset, or image reserve. |
| Board controls | One labelled selector and one skip link; specimen controls remain distinct from simulated site controls. |
| Motion | Selector visibility change only; immediate under reduced motion. No content animation. |
| Responsive signature | Evidence rail sits beside content only when it fits and moves directly after the claim under pressure. |
| Visible-copy lock | Frozen route/action/state labels plus synthetic text explicitly labelled as structural/density material. No invented hero eyebrow, metric, claim, or CTA. |

The generated concept invented sample research prose and covered only a subset of routes. Those were rejected as source material. The implementation retains only its structural board composition and replaces the prose with explicit synthetic test text while adding the complete frozen coverage.

## 3. Artifact organization and counts

The board contains **31 top-level specimens**:

| Family | Count | IDs |
|---|---:|---|
| Global shell/viewports | 6 | `WF-G-01`–`WF-G-06` |
| Canonical route/utility variants | 11 | `WF-R1-01`, `WF-R2-01`, `WF-R3-01/02`, `WF-R4-01`, `WF-R5-01`, `WF-R6-01`, `WF-R7-01/02`, `WF-R8-01/02` |
| Operational/data states | 10 | `WF-S-01`–`WF-S-10` |
| Modes/failures | 4 | `WF-M-01`–`WF-M-04` |

The selector groups specimens by global, Home, Research, Publications, Teaching, Leadership & Service, About, Contact, CV, operational states, and modes. JavaScript is used only to hide/show board specimens. Before the script runs, or when it is absent, all 31 specimens are visible in document order.

The simulated page fragments inside specimens are structural test targets, not launch content IDs. Top-level specimen IDs are the traceability contract and are listed once in Section 12.

## 4. Global shell and responsive behavior

### 4.1 Reading and focus order

The simulated site shell always preserves:

1. `Skip to main content`;
2. `Faisal Albalwy` nameplate/home link;
3. primary navigation: Research, Publications, Teaching, Leadership & Service, About;
4. separate Actions group: Contact, then available CV action or `CV unavailable`;
5. one H1 and route content;
6. route actions/related links;
7. footer groups.

The board's own skip link and selector precede the specimens but are visibly identified as artifact controls. Exactly one simulated current-page element uses `aria-current="page"`; it is also underlined/bold so color is not the only cue.

### 4.2 Viewport rules

| Width | Header/navigation | Content/evidence | Controls and lists |
|---:|---|---|---|
| 1440 | Nameplate, five primary links, and Actions remain in one ordered shell when content fits. | Reading plane and evidence rail may split approximately 7:3. | Publication controls may use three columns; catalogue uses full width. |
| 1024 | Groups may wrap; labels and order remain complete. | Rail may remain beside content only if both retain readable measures. | Controls reduce columns before type/targets shrink. |
| 768 | Header groups stack in source order or use the menu if content pressure requires. | Rail becomes inline immediately after the related content. | Lists remain full-width; in-page navigation may use two columns only when fit. |
| 390 / 375 | Full name plus explicit `Menu`; five routes followed by labelled Actions. | One reading column; evidence follows claim. | Controls and actions stack; long values wrap. |
| 320 | Same as narrow mobile; no abbreviated labels or initials. | One column with the token gutter; no page-level horizontal overflow. | Every target remains at least 2.75rem where applicable; DOI/URLs use `overflow-wrap:anywhere`. |
| 200% / 400% browser zoom | From a 1280px reference, the effective 640px / 320px CSS layout widths collapse at content pressure, not at a device assumption. | DOM order never changes. | No clipped text, hidden evidence, or horizontal card wall. |

Menu behavior for DES-004/BLD-001: opening does not move focus; Tab proceeds from Menu to Research; Escape closes and restores/retains focus on Menu; a selected route closes after navigation. If implemented as modal, background content becomes unfocusable. No icon-only close control is permitted.

### 4.3 Footer

Footer order is Site identity → Explore → Actions → conditional academic profiles → conditional text affiliation. The wireframe shows the first three and an explicit conditional affiliation annotation. Empty conditional groups are removed with headings and space. No logo or logo reserve exists.

## 5. Route module order and responsive notes

### R1 — Home (`WF-R1-01`)

| Order | Module | Wireframe behavior |
|---:|---|---|
| 1 | Faisal-first identity and role-neutral site type | Text-only, no portrait/affiliation assertion. |
| 2 | Research positioning and priority actions | `Explore research` primary; `View publications` secondary. |
| 3 | Verified themes | Conditional; omitted completely in the current hold scenario. |
| 4 | Up to three project/system stories | Conditional; no empty card or image reserve. |
| 5 | Three or four selected/latest publications | Compact list pattern; wireframe uses synthetic records only. |
| 6 | Teaching snapshot | Conditional and omitted when route lacks approved substance. |
| 7 | Leadership/service snapshot | Conditional and omitted when route lacks approved substance. |
| 8 | About/CV context and Contact pathway | About stays readable; CV and email states remain distinct. |
| 9 | Footer | Global order, text-only. |

At every width, research and publications precede supporting dimensions. Home has no in-page contents menu, metric band, carousel, news feed, or image slot.

### R2 — Research (`WF-R2-01`)

Order: purpose/verified statement → established themes → explicitly labelled emerging directions → funded projects → research systems → collaboration → related publications. In-page navigation is present when three or more substantive modules remain and disappears link-by-link with suppressed modules.

On wide screens, a claim can pair with the evidence rail. On narrow screens, the rail moves directly beneath that claim. Project/system records are inline, fragment-addressable list objects; no detail route or required diagram is implied.

### R3 — Publications (`WF-R3-01`, `WF-R3-02`)

Order: page purpose/methodology → featured selection → search and filters → result summary/active filters → complete catalogue → source/profile context. The wireframe intentionally places controls immediately before the complete catalogue and uses a compact list, not publication cards.

`WF-R3-01` proves the complete HTML and extreme record anatomy; `WF-R3-02` proves active search/year/type query density. Theme is annotated but omitted because current relationships are not approved. Search, year, type, and conditional theme are the only keys. No sort, page, multi-select, metric, author-position, venue, or access filter appears.

No-script behavior is separately shown by `WF-S-08`: inert filters are removed or clearly unavailable while the complete catalogue remains. Record order and data come from the future public projection, never from this synthetic board.

### R4 — Teaching (`WF-R4-01`)

Order: teaching approach → approved course groups → approved supervision groups → selected student-project themes → inquiry guidance. The current content holds mean these modules may be absent in a release candidate; the wireframe tests their eventual density without publishing them.

Course titles use semantic lists, not cards. Full long titles wrap. Timetable, student, room, section, code, delivery, count, grade, funding, and availability fields have no placeholder.

### R5 — Leadership & Service (`WF-R5-01`)

Order: purpose/application context → technology/executive leadership → university service → peer review → community engagement → talks/workshops → professional development/memberships if approved → Contact. In-page navigation is required and retains only populated categories.

Records use one categorical/chronological list pattern. Long roles and organisations wrap; evidence remains adjacent. No certificate thumbnails, raw scans, currentness inference, cumulative review total, metric dashboard, or card wall appears.

### R6 — About (`WF-R6-01`)

Order: short biography → extended biography → current verified roles/text affiliation → academic/leadership career → education → selected recognition/affiliations when approved → CV context. The current role-neutral fallback is the only factual content represented.

At narrow widths, timelines become ordinary semantic lists. Biography remains before chronology. CV context remains near the end and links only when the canonical artifact is approved.

### R7 — Contact (`WF-R7-01`, `WF-R7-02`)

Order: page purpose → inquiry guidance → institutional email state/action → optional useful location → approved profiles → text affiliation/context. Location and profiles disappear when unapproved.

`WF-R7-01` is the current safe unavailable state. `WF-R7-02` shows available-state geometry with a deliberately non-routable `.invalid` synthetic address and a non-submitting button. The production component must use one governed mailto only after approval; the board contains no mailto, form, hidden field, submission, storage, CAPTCHA, map, scheduler, or tracking.

### R8 — CV (`WF-R8-01`, `WF-R8-02`)

`WF-R8-01` shows the future adjacent action/size/update-date arrangement. `WF-R8-02` shows the current non-link unavailable status and About recovery. A direct unavailable PDF request uses `WF-S-01`; it never redirects to About or an older/private file.

## 6. Task and journey proof

A purposeful choice activates a destination, download, or external evidence/contact action. Menu disclosure, search/filtering, scrolling, and in-page fragments do not count.

| Task | Audiences | Start | Decision point | Content module | Primary / secondary action | Recovery | Maximum |
|---|---|---|---|---|---|---|---:|
| T1 Understand research and reach evidence | A1–A7 | Any HTML route / Home | Research vs Publications evidence | Home research gateway; Research themes/projects | Research → related publication/project source | Footer Research; Publications → Research | 2 |
| T2 Find and verify a publication | A1, A2, A5, A6 | Any route | Search/filter within catalogue | Complete publication record | Publications → DOI/publisher/repository | Clear filters; local record after source failure | 2 |
| T3 Assess collaboration/program fit | A1, A2, A4 | Home or any route | Established vs emerging; role/status evidence | Research themes/projects/systems | Research → Contact | Publications outputs; Leadership context | 2 |
| T4 Contact Faisal | A1–A7 | Any route | Inquiry category then email state | Contact guidance/email | Contact → approved mailto | Unavailable notice; footer/route Contact | 2 |
| T5 Assess current English CV | A2, A5, A6, A7 | Any route | Available vs unavailable utility | Global action/About CV context | CV utility → canonical PDF | About HTML; explicit unavailable state | 1 |
| T6 Evaluate teaching/supervision | A3, A6 | Any route | Course/supervision evidence vs inquiry boundary | Teaching groups | Teaching evidence; optional Contact | Research; Contact unavailable | 1 to evidence, 2 to inquiry |
| T7 Evaluate leadership/service | A2, A4, A5, A6 | Any route | Category and supported chronology | Leadership grouped lists | Leadership evidence; optional Contact | About, Research, Publications | 1 to evidence, 2 to inquiry |
| T8 Verify identity/relationship | A1–A7 | Every route/state | Personal identity then conditional affiliation | Header/footer/About/Contact | Name visible; optional official external link | Personal-site fallback | 0 to identify, 1 to verify |

Top-five proof: maxima remain **2, 2, 2, 2, and 1**. No top-five path depends on a footer-only destination, hidden submenu destination, image, private channel, unsupported detail route, form, or browser history.

### 6.1 Audience journey coverage

| Audience | Explicit wireframe starts | Decision/evidence path | Recovery |
|---|---|---|---|
| A1 collaborators/research groups | Home, Research, Publications | Research ↔ Publications → Contact | Related route links remain reciprocal. |
| A2 funding/program managers | Home, Research, Leadership, About | Evidence/role context → Contact or CV | Roles never exist only in CV. |
| A3 postgraduate students | Home, Research, Teaching | Teaching boundary → Contact | No availability/funding promise or private substitute. |
| A4 technology/public-sector partners | Home, Research, Leadership | Project maturity/role evidence → Contact | Publications remain evidence route. |
| A5 editors/publishers/conference communities | Publications, Leadership, About | Catalogue/service → Contact or CV | Local record remains on external failure. |
| A6 university peers/evaluators | About, Publications, Teaching, Leadership | About → evidence routes/CV | About is gateway, not sole evidence store. |
| A7 media/event organisers | Home, About, Research, Leadership | Verified context → Contact or CV | Unavailable states remain explicit and non-promissory. |

## 7. Component placeholders and interaction contracts

| Placeholder family | Variants/states shown | DES-004 obligation |
|---|---|---|
| Site header | desktop, tablet wrap, mobile closed/open, current route | Define disclosure behavior, current treatment, focus, target sizes, sticky/non-sticky decision. |
| Footer | identity, Explore, Actions, conditional affiliation | Define omission and narrow/print behavior; no logo/image. |
| Claim/evidence pair | split and inline rail | Claim precedes evidence in DOM; rail is additive, not navigation. |
| Route intro | H1, purpose, primary/secondary actions | One H1, bounded choices, full text wrapping. |
| In-page navigation | Research, Teaching, Leadership, About patterns | Conditional links/targets removed together; fragment focus behavior. |
| Record/list/citation | publication, course, role, timeline | Exact field order, no truncation, no whole-card ambiguous link. |
| Catalogue controls | default and active q/year/type | Persistent labels; native controls; theme conditional; URL/focus semantics. |
| Results/status | total, active, no results, data failure, partial | Correct live-region priority and focus recovery. |
| Contact | unavailable and future approved geometry | Governed mailto/non-link switch; no form or storage. |
| CV | available/unavailable | Exact file metadata adjacency; direct unavailable request to 404. |
| Operational state | 404, 5xx/recoverable, route unavailable, offline, external failure | Named affected content, recovery hierarchy, no diagnostics. |
| Mode | print, forced colors, font/no-image, reduced motion | Preserve semantic hierarchy and meaning in each mode. |

Board controls are intentionally functional: selector changes the visible specimen group and announces the resulting count. Simulated page buttons do not claim to perform production actions. DES-004/BLD must not infer behavior from their inert wireframe state; the table above controls.

## 8. State transitions and recovery

| From | Trigger | To | Focus/announcement | Recovery |
|---|---|---|---|---|
| Catalogue complete | Commit valid controls | Filtered results | Polite result count; no focus move per keystroke | Clear filters → full list; focus to search or result heading by action context |
| Filtered results | Zero matches | `WF-S-06` | Announce `0 of total`; keep controls | Clear filters |
| Catalogue | Data load/build failure | `WF-S-07` | Error heading identifies affected content | Try again; Research or approved profile only |
| Publication record | Missing optional field | `WF-S-05` inline partial state | No invented value; available fields stay | Canonical source action |
| External action | Network/source failure | `WF-S-10` | Local record remains; identify only action failure | Retry later; no mirror |
| Any loaded route | Offline | `WF-S-09` | Explain that local content remains | Retry; no false completion |
| Enhanced catalogue | Script absent/fails | `WF-S-08` | Remove/neutralize filters; no global warning | Complete catalogue remains |
| Optional module | Last public record removed | `WF-S-03` omission | No message; next module advances | None; explicit upstream review if route loses substance |
| Required route | No substantive approved evidence | `WF-S-04` preview-only blocker | Noindex; state heading | Stable approved routes; IA/content review |
| CV action | Artifact absent/withdrawn | `WF-R8-02`; direct path `WF-S-01` | Non-link unavailable state | About HTML context |
| Contact | Email unverified/withdrawn | `WF-R7-01` | Remove every address/mailto; state text | Return later; no substitute |
| Site route | Unknown path | `WF-S-01` | H1 and four ordered recovery links | Home, Research, Publications, Contact |
| Site route | Recoverable page error | `WF-S-02` | Error heading; retry only on action | Home or Publications |

Loading is not a top-level specimen because static base content must not require it. DES-004 may define the shared labelled `Loading [content]…` state only for a real asynchronous enhancement; false progress and spinners without text are prohibited.

## 9. Content-density and long-content cases

| Case | Specimen evidence | Pass condition |
|---|---|---|
| Home nameplate/descriptor | `WF-R1-01`, `WF-M-03` | Full name and role-neutral structure survive 320px and font failure with no image reserve. |
| Full nav/utilities | `WF-G-01`–`WF-G-04` | Exact order/labels; menu before abbreviation. |
| Extreme publication | `WF-R3-01` | Long title, 12 authors, long venue, ~100-character synthetic DOI, status and actions wrap fully. |
| Filter extremes | `WF-R3-02`, `WF-S-06` | Long query, active filters, 0/1/100 synthetic counts; no sort/page/multi-select. |
| Dense Research | `WF-R2-01` | Established/emerging/project/system distinctions and evidence rail stay ordered. |
| Dense Teaching | `WF-R4-01` | Long course title and grouped list stack without cards or restricted fields. |
| Dense Leadership | `WF-R5-01` | Long role, categories, chronology and evidence remain scannable; no totals/dashboard. |
| Long About | `WF-R6-01` | Biography before timeline; long role/award structures stack. |
| Contact without form | `WF-R7-01/02` | Four guidance categories; long synthetic address; unavailable state; no submission. |
| Operational states | `WF-S-01`–`WF-S-10` | Heading, affected content, recovery and announcements remain textual. |
| Repeated external labels | `WF-R3-01`, `WF-S-10` | Visible destination meaning; no icon-only cue. |
| Print and constrained modes | `WF-M-01`–`WF-M-04` | Claim/evidence linearization, system colors/fonts, zero image dependency, zero motion. |

The board does not place all 100 synthetic records or a 900-word biography in the DOM. It represents their extreme anatomy and defines those full-volume fixtures for DES-005/BLD/QA. This controlled limitation avoids turning an internal structural board into a fake content dataset.

## 10. Accessibility annotations

- The board and each simulated page structure use headings, landmarks/labelled navigation, lists, labels, status semantics, and buttons/links according to their role.
- A skip link is first in both board and shell patterns; it becomes visible on focus.
- Visible focus is a three-pixel royal outline with offset and is demonstrated by `WF-G-05` and `WF-M-02`.
- Current page uses `aria-current` plus underline/weight. Unavailable CV/email states are text, not disabled or destination-bearing links.
- All interactive text remains descriptive; no icon appears. External/download meaning is written.
- Search/year/type controls have persistent labels and search help is programmatically associated.
- Status updates use polite announcements only after committed changes; errors are not auto-dismissed.
- Long English words, names, titles, author lists, URLs, DOI strings, state copy, and actions use wrapping. No ellipsis or hover-only text is allowed.
- Reading/DOM order is stable at 1440, 1024, 768, 390, 375, 320, and the 640/320 CSS-width reflow equivalents for 200%/400% browser zoom from a 1280px reference.
- `prefers-reduced-motion` removes timing; forced colors use system colors and preserve borders/focus/underlines; print removes navigation/filter controls while retaining document meaning.
- No script: all specimens remain in the document and the simulated publication catalogue remains complete. No image/font: no user-facing state or blank reserve is required.

Manual screen-reader targets for later QA are VoiceOver/Safari on macOS/iOS and NVDA with Firefox/Chrome on Windows. Automated results cannot replace manual focus, announcement, reflow, and print review.

## 11. Required route/state coverage ledger

Each frozen route or required state appears **exactly once** below. Reusable specimens may be cross-referenced but do not create a second coverage claim.

| Coverage item | Canonical owner/specimen | Cross-reference / boundary |
|---|---|---|
| R1 Home | `WF-R1-01` | Shell `WF-G-*`; CV/email variants cross-reference their utilities. |
| R2 Research | `WF-R2-01` | In-page nav and rail collapse included. |
| R3 Publications | `WF-R3-01` | Active query is variant `WF-R3-02`; data states `WF-S-05/06/07/08`. |
| R4 Teaching | `WF-R4-01` | Grouped list and inquiry path. |
| R5 Leadership & Service | `WF-R5-01` | Required in-page navigation and evidence adjacency. |
| R6 About | `WF-R6-01` | Timeline/list and CV context. |
| R7 Contact | `WF-R7-01` | Future available variant `WF-R7-02`; current route state remains unavailable. |
| R8 CV utility | `WF-R8-01` | Current unavailable variant `WF-R8-02`; direct failure uses 404. |
| 404 | `WF-S-01` | Includes direct unavailable-CV request. |
| Recoverable application/server error | `WF-S-02` | No diagnostics; 5xx is later host behavior. |
| Empty optional module | `WF-S-03` | Omission, not a visible visitor state. |
| Required route unavailable | `WF-S-04` | Preview/noindex release blocker only. |
| Partial data | `WF-S-05` | Available record fields retained. |
| Publication no results | `WF-S-06` | Controls retained, count announced, clear recovery. |
| Publication data unavailable | `WF-S-07` | Catalogue-specific error. |
| No script | `WF-S-08` | Complete catalogue remains; inert controls removed/neutralized. |
| Offline/network unavailable | `WF-S-09` | Loaded local content retained. |
| External source failure | `WF-S-10` | Local verified record retained. |
| Print | `WF-M-01` | Linear claim/evidence and document context. |
| Forced colors | `WF-M-02` | Text/structure/focus remain redundant. |
| Font failure/no image | `WF-M-03` | System fallback; zero reserved media. |
| Reduced motion | `WF-M-04` | Immediate complete state change. |

## 12. Specimen-to-specification parity ledger

Every top-level HTML specimen ID has exactly one row:

| Specimen | Purpose | Specification authority |
|---|---|---|
| `WF-G-01` | Desktop shell | Sections 4.1–4.2 |
| `WF-G-02` | Tablet shell | Section 4.2 |
| `WF-G-03` | Mobile menu closed | Section 4.2 |
| `WF-G-04` | Mobile menu open/order | Section 4.2 |
| `WF-G-05` | Focus and T1–T5 choice proof | Sections 4.1 and 6 |
| `WF-G-06` | Footer groups | Section 4.3 |
| `WF-R1-01` | Home | Section 5 R1 |
| `WF-R2-01` | Research | Section 5 R2 |
| `WF-R3-01` | Publications complete base | Section 5 R3 |
| `WF-R3-02` | Publications active query | Sections 5 R3 and 8 |
| `WF-R4-01` | Teaching | Section 5 R4 |
| `WF-R5-01` | Leadership & Service | Section 5 R5 |
| `WF-R6-01` | About | Section 5 R6 |
| `WF-R7-01` | Contact unavailable | Section 5 R7 |
| `WF-R7-02` | Contact available geometry | Section 5 R7 |
| `WF-R8-01` | CV available geometry | Section 5 R8 |
| `WF-R8-02` | CV unavailable | Section 5 R8 |
| `WF-S-01` | 404 | Section 8 |
| `WF-S-02` | Recoverable error | Section 8 |
| `WF-S-03` | Optional omission | Section 8 |
| `WF-S-04` | Required-route blocker | Section 8 |
| `WF-S-05` | Partial data | Section 8 |
| `WF-S-06` | No results | Section 8 |
| `WF-S-07` | Publication data unavailable | Section 8 |
| `WF-S-08` | No script | Section 8 |
| `WF-S-09` | Offline | Section 8 |
| `WF-S-10` | External failure | Section 8 |
| `WF-M-01` | Print | Sections 10 and 11 |
| `WF-M-02` | Forced colors/focus | Sections 10 and 11 |
| `WF-M-03` | Font/no-image failure | Sections 10 and 11 |
| `WF-M-04` | Reduced motion | Sections 10 and 11 |

## 13. Content holds and controlled limitations

Current holds that the wireframes must not resolve:

- all real research themes, statements, projects, systems, relationships, roles, maturity, outputs, funders, and partners;
- all 27 publication records remain eligible/internal rather than publish; the board therefore uses no real bibliography or real count as a personal claim;
- teaching statements, course titles, supervision records, student projects, and availability;
- all leadership/service records, currentness, dates, organisations, review totals, activities, development, and memberships;
- professional descriptor, biography facts, education, appointments, leadership chronology, recognition, affiliation and institutional profiles;
- institutional email/address and every alternate contact channel;
- English CV artifact, verified size/date, metadata, accessibility and public path;
- Alexandria font/OFL public release state and any future social asset.

Controlled wireframe limitations:

1. The board is not a final prototype and does not attempt high-fidelity token parity, production component APIs, canonical metadata, HTTP status, focus routing after real navigation, or host behavior.
2. The board selector is the only script behavior tested here. Simulated filter, menu, retry, copy, mail and download controls are structural specimens; DES-004/BLD define real behavior.
3. Full 100-record, 900-word, 20-service-record, and accessible PDF fixtures are defined but not duplicated into the board. Their extreme anatomy is represented; volume testing belongs to DES-005/BLD/QA.
4. The local validation emulates forced colors, reduced motion, print, and no-script behavior, but it does not replace later native OS, assistive-technology, or production-font failure QA.
5. No deployment preview, canonical origin, production font, approved email, public CV, live external source, or final application route was exercised.

## 14. Validation protocol and acceptance record

The completed artifact must pass:

- HTML parse and document structure checks;
- unique element IDs and resolvable internal fragment targets;
- exactly 31 top-level `.specimen[id]` entries and 31 parity rows;
- exactly seven frozen HTML route labels in navigation order plus separate Contact/CV Actions;
- no external stylesheet/script/font/media request;
- no `form`, `img`, `picture`, `video`, `audio`, `iframe`, SVG logo, tracking, analytics, mailto, public CV link, or external URL;
- no claim/source IDs, authoring markers, private paths, real email, real DOI, eligible-only record title, university logo/name, or hidden factual payload;
- selector keyboard operation and all-visible no-script base;
- 1440, 1024, 768, 390, 375, and 320 CSS-pixel browser layouts with no unintended page overflow;
- visible focus, current state, labels/names, long DOI/title/author/address wrapping, reduced motion, forced-colors CSS, and print stylesheet;
- desktop/narrow screenshot inspection followed by removal of temporary captures.

### Results

Validation completed on 19 August 2026 against the self-contained local file:

- Chromium parsed the document into one main landmark, labelled navigation/regions, 31 visible top-level specimens, and 72 unique IDs. All 87 internal fragment links resolved; duplicate IDs, broken targets, external resources, media elements, and forms were zero.
- A structural scan found exactly 31 specimen IDs and matching specification entries, including all eight route/utility owners, `WF-S-01`–`WF-S-10`, and `WF-M-01`–`WF-M-04`. It found no external dependency, mailto, form, image/media element, analytics marker, private path, internal claim/source marker, real DOI, or university name/logo string.
- The selector passed all 12 options. Counts were: all 31; global 6; Home 1; Research 1; Publications 6; Teaching 1; Leadership & Service 1; About 1; Contact 2; CV 2; states 10; modes 4. The live status matched each selection.
- Keyboard entry focused the first skip link with a visible outline. Selector operation remained native and labelled. Simulated controls are intentionally inert under the Section 7 contract.
- Real-browser layout checks reached exact `window.innerWidth` values of 1440, 1024, 768, 390, 375, and 320 CSS pixels. Every size kept all 31 base specimens, reported `scrollWidth === innerWidth`, and produced zero out-of-viewport elements. The 640px and 320px effective CSS layouts additionally covered the reflow effect of 200% and 400% browser zoom from a 1280px reference.
- With JavaScript disabled at 320px, all 31 specimens and the complete-catalogue boundary remained visible and horizontal overflow remained false.
- Emulated print reported the print media query active, hid the board header, linearized the specimen grid, and had no horizontal overflow. Emulated forced colors and reduced motion both matched; system text color resolved, root scrolling became immediate, and action transition duration resolved to `0s`.
- Browser console errors and warnings were zero after the final reload. Desktop (1440px) and narrow (320px) captures were inspected for hierarchy, wrapping, selector visibility, and absence of media reserves; temporary screenshots and automation traces were removed after inspection.

The native OS/screen-reader and production-application checks reserved in Sections 10, 13, and 15 remain downstream QA obligations, not DES-003 failures.

## 15. Exact downstream handoffs

| Work package | Required handoff |
|---|---|
| **DES-004** | Turn the 31 specimens into reusable component/state contracts. Define header/menu, footer, route intro, in-page nav, claim/evidence, lists/records/timeline, filters/results, Contact/CV switches, state callouts, focus, announcements, fragments, responsive and mode variants. Add no untracked token or copy. |
| **DES-005** | Produce high-fidelity Home and representative internal/catalogue prototypes from this hierarchy. Test 1440/1024/768/390/375/320, 200%/400%, all density fixtures, no-image/system-font modes, and no-script/failure states before any G3 decision. |
| **DAT-002** | Supply only canonical public projections, route readiness, selections, relationships, enums, availability and contact/CV predicates. Preserve `publish/public` as the sole render switch and never replace synthetic wireframe values with eligible/internal data. |
| **BLD-001** | Implement the global semantic shell, exact nav/action order, menu/focus/current behavior, tokens, system-font fallback, text-only conditional affiliation, forced colors, reduced motion and print. |
| **BLD-002** | Implement Home's research-first conditional order and omit unsupported modules without cards/gaps. |
| **BLD-003** | Implement About, Contact variants, and conditional CV delivery; no form/private fallback/old PDF. |
| **BLD-004** | Implement Research claim/evidence modules, inline fragments, conditional in-page nav and no speculative detail route. |
| **BLD-005** | Implement the complete publication HTML, q/year/type/conditional-theme enhancement, record anatomy, query/focus/no-result/data/error states and no-script fallback. |
| **BLD-006** | Implement Teaching semantic lists and privacy-safe conditional modules; structurally reject timetable/student fields. |
| **BLD-007** | Implement Leadership grouped chronology, evidence adjacency, conditional fragments/categories, zero totals/dashboard/scans. |
| **BLD-008** | Reconcile all route/module/state variants and viewport transitions against this ledger; no extra route or component family. |
| **BLD-009** | Implement 404, error, empty/omission, unavailable, partial, offline, external failure and recovery semantics without diagnostics or media dependency. |
| **INT-001** | Apply canonical/noindex/sitemap/robots rules to the frozen route/state set; query/error/preview states remain noncanonical/nonindexable. |
| **INT-002** | Build structured data from public canonical records only; wireframe synthetic data never becomes metadata. |
| **INT-003** | Keep social output separately governed, Faisal-first, logo-free and portrait-independent; this board authorizes no asset. |
| **INT-004** | Preserve institutional-email-only Contact, safe fixed-subject mailto after approval, unavailable switch, privacy guidance and zero form/storage/captcha. |
| **INT-005** | Preserve and document zero analytics/tracking; selector behavior in this local artifact is not telemetry permission. |
| **QA-001/002** | Run build/interaction checks and join every rendered value to a publishable claim/source path; verify zero synthetic or eligible-only output. |
| **QA-003** | Run the exact responsive/browser matrix and overflow checks for shell, routes, selector/query, long content and states. |
| **QA-004** | Audit WCAG 2.2 AA semantics, focus, keyboard, announcements, target size, contrast, reflow, screen readers, modes and future PDF. |
| **QA-005** | Measure font/no-image/script fallback, catalogue density, print, requests, layout stability and performance budgets. |
| **QA-006** | Scan public output for internal markers, protected values/assets, private contact, source maps/metadata, forms, tracking, headers and withdrawal behavior. |
| **QA-008** | Execute T1–T8 and A1–A7 against one immutable release candidate using the maxima/recoveries in Section 6; report readiness then stop at Gate G5. |
| **QA-009** | Verify Faisal-first ownership, subordinate text affiliation, approved tokens/type/license and zero logo/protected/invented identity assets across every route/state/mode. |

This package does not begin DES-004/005 or BLD, close G3, initialize or change the application, approve/promote content, deploy, connect a domain, change DNS, publish, close Gate G5, or begin P9.
