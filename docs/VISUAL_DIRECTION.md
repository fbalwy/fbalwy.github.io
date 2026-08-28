# Visual Direction

**Work package:** DES-001 v1  
**Status:** Complete visual-direction specification; not a wireframe, prototype, component-token package, or implementation  
**Prepared:** 19 August 2026  
**Applies to:** English launch experience defined by the frozen information architecture  
**Authority:** The accepted brand system, project brief, editorial direction, and information architecture govern this document. If later approved content creates a conflict, preserve accessibility, evidence clarity, Faisal-first ownership, and the frozen route/task model, then return the conflict to the appropriate upstream owner.

## 1. Decision

### Concept name: Evidence in the Margins

The site should look like a working scholarly argument rather than a promotional profile or institutional portal. A clear reading column carries the claim; a quieter evidence margin carries the proof: year, venue, type, status, source, external destination, or related output. On wide canvases the two planes can sit beside one another. Under content pressure, the evidence margin moves directly beneath the claim without losing order or meaning.

This is the visual signature. It does not rely on a portrait, logo, illustration, photograph, protected university pattern, or ornamental asset. It is made from hierarchy, deliberate alignment, readable density, fine rules, numbered or titled anchors, metadata, citations, and verified source labels. The result should feel precise, current, personal, and academically credible while remaining recognizably a website—not a facsimile journal page and not a dashboard.

### Why this serves the visitor tasks

- A visitor assessing research fit sees the research claim and its proof in one scan path, then reaches at most two relevant next actions.
- A visitor looking for a publication can move quickly through year, type, theme, title, authors, venue, DOI, and external actions without opening decorative cards.
- A student can distinguish teaching approach, courses, supervision, and inquiry conditions without schedule data or student-identifying detail.
- A collaborator or reviewer can see role, contribution, dates, outcomes, and evidence without promotional inflation.
- A visitor who needs Faisal's identity, contact route, or CV encounters them as explicit text and actions; Taibah University remains a subordinate text affiliation.

## 2. Benchmark synthesis

The benchmark is used for conventions, not visual imitation. A small live check on 19 August 2026 confirmed three useful patterns:

- [Dan Boneh's Stanford page](https://crypto.stanford.edu/~dabo/) demonstrates that a direct name, concise affiliation/contact context, compact navigation, and evidence-dense research and course links can establish credibility without a promotional hero. This direction retains that directness, but adds a more systematic evidence relationship and responsive hierarchy.
- [Arvind Narayanan's Princeton page](https://www.cs.princeton.edu/~arvindn/) demonstrates that topic-led narrative and highly linked evidence can replace decorative imagery. This direction adopts the principle of research-first explanation, not its wording, visual styling, or page composition.
- [Jure Leskovec's Stanford page](https://cs.stanford.edu/~jure/) demonstrates the value—and the density risk—of presenting a broad scholarly ecosystem and chronological output stream. This direction uses controlled lists, section summaries, and explicit metadata rather than copying a news-feed structure.

The local benchmark synthesis contributes the expected academic primitives: prominent personal identity, research-first entry, publications as a primary destination, evidence links near claims, readable long-form pages, and restrained institutional affiliation. The distinctive expression here is the consistent claim/evidence relationship, not any single benchmark site's layout.

## 3. Visual thesis and hierarchy

Every page follows the same semantic reading order:

1. Faisal-first site identity and global navigation.
2. Page title and one-sentence purpose.
3. Primary page evidence, in the exact module order frozen by the IA.
4. A maximum of the route's permitted high-priority actions.
5. Supporting context, sources, and related routes.
6. Footer identity, text affiliation, contact, and CV action.

The evidence margin is subordinate to the claim, never a second navigation system. Its labels are short and factual. A visible section rule and a compact evidence label can connect the two planes, but a rule never conveys category, status, or selection on its own.

Page titles are the dominant typographic event. Section headings organize the argument. Item titles identify the evidence object. Metadata, source labels, and action qualifiers support scanning. There is one `h1` per document and a logical heading sequence; visual styling never changes the semantic level.

## 4. Composition, grid, density, and whitespace

### Composition

- Start with one column. Add columns only when adjacent content has a genuine semantic relationship and both columns remain readable.
- The page container uses the approved `layout.content-max` of 75rem and `layout.gutter`; prose uses `layout.prose-max` of 68ch.
- Compact layouts use the approved four-column grid. Intermediate layouts may use eight columns. Wide layouts may use twelve.
- On suitable wide pages, the primary reading plane occupies approximately seven to eight grid columns and the evidence margin approximately three, with the remaining column acting as separation or edge space. This is a composition rule, not a new token.
- Publication catalogues and genuinely wide figures may use the full content width. Long prose never does.
- Sections are separated primarily by `layout.section-space`, alignment, and one restrained rule—not alternating decorative panels.

### Density

Use three semantic density modes, selected by content type rather than a user-facing toggle:

- **Reading density:** biographies, teaching approach, research framing, and contact guidance. Use full body leading and the prose measure.
- **Catalogue density:** publications, courses, service records, and project evidence. Use compact metadata blocks, clear item separation, and no truncation of identifying data.
- **Signal density:** hero identity, key metrics, status/callout messages, and primary actions. Keep the number of simultaneous signals low and give them more surrounding space.

Do not solve density by shrinking type below the approved scale, clipping text, hiding metadata behind hover, or increasing the number of cards. Reduce columns, move evidence inline, allow wrapping, and disclose optional detail progressively.

### Whitespace rhythm

Use the approved spacing scale only. The strongest pause occurs between major IA modules through `layout.section-space`. Within a module, separation descends from section heading to group, item, metadata, and action. Repeated scholarly records should have enough vertical separation to remain individually addressable, but not so much that a catalogue becomes a stack of billboards.

## 5. Typography

The type system is Alexandria with the approved system fallback list. Alexandria is a licensed project fallback, not an official university font. Tosh remains prohibited. Font loading uses swap behavior and the experience must remain complete if the web font fails.

| Role | Approved token and behavior | Use |
|---|---|---|
| Page title / identity display | `font.size.h1`, `font.weight.display` 700, `font.line-height.heading` | One page title; the Home nameplate may use this role |
| Section heading | `font.size.h2`, `font.weight.heading` 600, `font.line-height.heading` | Major IA module headings |
| Item heading | `font.size.h3`, weight 600, heading line height | Publication/project/course/service titles |
| Lead | `font.size.lead`, weight 400, body line height | One concise page purpose or research-positioning sentence |
| Body | `font.size.body`, weight 400, `font.line-height.body` 1.6 | Explanations, abstracts, biographies, callouts |
| Metadata / citation support | `font.size.sm`, weight 400 or label weight 600, body line height | Authors, venue, year, type, source, status, DOI qualifier |
| Exceptional auxiliary label | `font.size.xs`, label weight 600, compact line height | Only short, nonessential uppercase-free tags where 0.8125rem remains readable; never for links, evidence needed to identify a record, form help, or errors |
| Navigation, buttons, form labels | body or small size, label weight 600 | Interactive language; never display weight |

The scale remains fluid only where the approved `clamp()` tokens already define it. Do not introduce display type beyond `font.size.h1`, condensed faces, italics as a status code, all-caps paragraphs, or letter spacing that harms Alexandria. Long titles, names, author lists, URLs, and DOIs wrap naturally; no ellipsis may conceal the identity of a scholarly record.

## 6. Color and surface system

### Proportional use

Across a representative page, white and light gray should account for roughly 80–88% of visible surface area; navy text, rules, and inverse regions 8–14%; royal interactive emphasis 3–7%; and all contextual accents together no more than about 3%. These are composition guardrails for review, not additional color tokens. An individual state or figure may vary, but the whole page must remain predominantly light, calm, and evidence-led.

### Accessible pairings

| Purpose | Required pairing | Constraint |
|---|---|---|
| Default content | navy `#111144` on white `#FFFFFF` or gray `#F2F2F2` | Primary reading surfaces |
| Inverse region | white on navy | Header/footer or one bounded emphasis region; not a sequence of dark panels |
| Text link | royal `#4056E3` on white/gray, underlined | Hover/active becomes navy with a thicker underline |
| Primary action | white on royal; hover/active white on navy | Text and boundary remain explicit |
| Secondary action | royal on white with royal border; hover gray surface | Active uses navy text/border |
| Dark-surface focus | sky `#00AEDA` against navy | Focus indication only; sky is not normal text on white |
| Success accent | teal `#0A8E6E` accent with navy text on white | Teal is not normal-size text on white or gray |
| Warning | navy on yellow `#E5C603` | Include warning text/icon/label; color is redundant |
| Error | error red `#A3212A` on white or white on red where specified | Include error heading and recovery instruction |
| Data fills | sky, pink, yellow, or turquoise with navy outline | Never use fill hue alone to identify a series |

Royal against navy, sky against white, and teal against white/gray are not approved normal-text pairings. Pink, yellow, turquoise, and sky are sparse contextual/data accents, not section-brand colors. Gradients are prohibited as information encoding and unnecessary as decoration.

The governing contrast record supplies these minimum reference results: navy/white 17.68:1, navy/gray 15.80:1, royal/white 5.74:1, royal/gray 5.13:1, sky/navy 6.79:1, pink/navy 12.97:1, yellow/navy 10.45:1, turquoise/navy 10.77:1, and error red/white 7.48:1. Teal/white is 4.11:1 and teal/gray 3.67:1, so teal is limited to large text or non-text emphasis in those pairings. Royal/navy is 3.08:1 and is limited to qualifying non-text contrast. Implementations must use the source's unrounded values when making a conformance determination.

## 7. Lines, borders, rules, and graphic vocabulary

The line language should resemble annotation and measured argument:

- Standard one-pixel-equivalent rules separate records or connect a claim to its evidence.
- Strong two-pixel-equivalent boundaries identify controls, selected structure, or high-priority containment.
- The approved three-pixel-equivalent focus outline is reserved for keyboard focus.
- Corners are square by default. Small or medium radii may soften controls and bounded messages; the large radius is reserved for a genuinely distinct panel. Repeated rounded tiles and pills are not part of the direction.
- Elevation is absent by default. The approved low overlay shadow is only for a temporary menu or overlay whose boundary otherwise needs clarification.

Allowed abstract graphics are generic and constructed from ordinary interface geometry: straight rules, brackets, index numbers, simple circles/squares/triangles/diamonds for data markers, solid/dashed/dotted strokes, and alignment shifts that expose hierarchy. They must be functional, low-volume, and reproducible in forced colors and print. Do not trace, crop, reconstruct, or evoke a protected university pattern; do not build an invented monogram or lockup.

### Evidence as the visual signature

Every material claim should be able to pair with one or more of these visible evidence cues:

- a source label;
- a year or date range;
- an output type;
- an authorship/contribution label;
- a venue or publisher;
- a verified status or availability statement;
- a DOI, repository, profile, download, or external destination;
- a stable in-page fragment for direct reference.

Evidence cues sit in a consistent trailing or lower zone, are readable without interaction, and use text in addition to rules or color. Unverified evidence is suppressed or explicitly unavailable according to content governance; the visual system must not make it appear resolved.

## 8. Content-form rules

| Form | Appropriate use | Required treatment | Do not use for |
|---|---|---|---|
| Card | Up to three featured research stories, one bounded callout, or a genuinely discrete related object | Clear heading, evidence line, whole-card semantics only if the interactive target is unambiguous; restrained border, no default shadow | Every section, every publication, navigation, or ordinary prose |
| List | Publications, courses, projects, service, talks, links, search results | Semantic list; repeatable title → core metadata → evidence/actions order; rules may separate items | Data requiring row/column comparison |
| Table | Compact comparative or numeric data where column relationships matter | Caption, headings, row labels, meaningful reading order, explicit overflow label and equivalent alternative if scrolling is unavoidable | Page layout, simple two-field metadata, or narrow-screen publication records |
| Timeline | Career, education, leadership/service chronology with verified dates | Oldest-to-newest or newest-to-oldest stated explicitly; date, role/event, evidence; vertical rule is decorative | Undated accomplishments or a decorative process illustration |
| Citation | A publication's formal identifying record | Preserve title, author order, venue, year, DOI/status; wrap fully; expose copy/export only if later approved | Marketing pull quote or unsupported claim |
| Figure | Material research result or explanatory data | Caption, source, accessible name/description, direct labels, shapes/dashes, and data table/equivalent when material | Decorative filler or generic stock illustration |
| Metric | Verified quantity with scope, period, source, and unit | Number and meaning remain adjacent; qualifier is never hidden; use at most a small set in one signal group | Vanity counters, unverified totals, or bare numbers |
| Callout | Status, caveat, collaboration condition, unavailable content, or a key evidence note | Semantic heading, concise text, suitable status token, text redundancy | Routine section introductions or promotional slogans |

## 9. Global shell

### Header and desktop navigation

The nameplate is the text `Faisal Albalwy` and links Home. The primary navigation follows the exact order: Research, Publications, Teaching, Leadership & Service, About. Contact and Download CV are utilities, not peers that displace the primary order. There is no separate Home item, site search, language selector, theme switcher, login, portal link, or icon-only social row. The current route is indicated with text weight plus a persistent underline or rule and the programmatic current-page state; color alone is insufficient.

At widths where every label fits at 200% zoom without collision, navigation may remain inline. The header may become compact or sticky only if it does not obscure a focused target, heading anchor, browser find result, or skip destination, and only if its content remains operable at 320px and 400% zoom. Otherwise it stays in normal flow.

### Mobile menu

When content pressure prevents an inline header, retain the nameplate and one explicit `Menu` control. The opened menu is a single-column navigation region with the same primary order followed by a labelled `Actions` group containing Contact and Download CV. Opening leaves focus on the toggle; normal Tab order then enters the first menu item. Escape closes the menu and restores/retains focus on the trigger. If the implementation chooses modal behavior, background content is not focusable while open. The state never depends on animation, and the current route remains textual and visible.

### Focus and skip behavior

The first keyboard-reachable control is a visible-on-focus skip link to the main content. A second skip destination for publication results is appropriate on the catalogue page. Focus uses the approved 3px-equivalent outline and 3px-equivalent offset on light surfaces; sky is used on navy. Primary royal actions use the approved two-tone inner/outer focus treatment if a single ring is not distinguishable. Focus is never removed or indicated solely by a color change.

### Footer and affiliation

The footer preserves the frozen group order: (1) site identity—Faisal's name, concise personal-site description, copyright, and site last-updated date; (2) Explore—the five primary routes in navigation order; (3) Actions—Contact, verified institutional email, and Download CV with status/context; (4) Academic profiles—only approved destinations, with the entire group omitted when none are approved; and (5) Institutional affiliation. Affiliation appears as subordinate text: `Institutional affiliation: Taibah University`, an accurate relationship statement, a personal-site/non-endorsement notice, and a same-tab text link to the official [Taibah University website](https://www.taibahu.edu.sa/). It must not resemble a joint lockup, masthead, publisher mark, legal endorsement, or university-owned page. No university logo appears in header, footer, metadata artwork, print, or fallback state.

### External and download actions

Link text names the destination or file, with `(external)` or file type/size/status as adjacent text where useful. An icon may not be the only cue. External links use the same tab, preserve browser history, and do not imply endorsement. Download CV remains a file action with human-readable format and availability information; it is not styled as a primary page identity.

### Breadcrumbs and in-page navigation

No breadcrumb appears on the seven one-level launch pages, the CV PDF, or error states. The Home nameplate and global navigation already expose location. In-page links appear after the introduction and before long content. Research uses them when at least three substantive modules remain; Teaching uses them at the same threshold; Leadership & Service always uses them; About uses them when four or more major modules remain. Publications uses its task controls and catalogue fragments instead of a general contents menu. Home and Contact have no visible contents menu. When a governed module is removed, its in-page link and reserved space are removed with it.

### Purposeful-choice preservation

The visual hierarchy must preserve the IA's path ceilings: research agenda/evidence, publication verification, collaboration fit, and contact each take no more than two purposeful destination choices; the CV takes one; teaching and leadership/service take one choice to evidence and no more than two to inquiry; identity is visible with zero choices and official affiliation verification takes no more than one. Menu disclosure, filtering, search, scrolling, and same-page fragments do not count as destination choices and must not be styled as false destinations.

## 10. Route expression

The order below is binding and mirrors the frozen IA. Visual emphasis may not reorder modules or add choices beyond the task thresholds.

### Home `/`

1. **Identity:** no-image hero with `Faisal Albalwy`, the approved research-first descriptor only after factual verification, subordinate role/affiliation text, and a concise purpose statement.
2. **Research positioning and actions:** one reading-plane claim with no more than two dominant actions—Research and Publications.
3. **Research themes:** restrained indexed list or two-column definition structure where content fits; not a tile wall.
4. **Selected research stories:** up to three bordered feature cards because selection and bounded narrative justify cards.
5. **Selected publications:** three to four catalogue-style rows with complete identifying metadata and a route action.
6. **Teaching:** short reading block plus evidence link.
7. **Leadership & Service:** short reading block plus evidence link.
8. **Collaboration/contact:** a bounded callout with one contact action and clear scope.
9. **Footer:** Faisal-first identity and text affiliation.

### Research `/research`

1. Intro and research position.
2. Established themes.
3. Emerging themes, visually labelled as such and never overstated.
4. Projects, expressed as anchored evidence records using `#project-<stable-id>`.
5. Systems or artifacts.
6. Collaboration conditions.
7. Related publications.

Themes use a reading column; projects use structured lists or a small number of feature cards; evidence labels form the margin. A fragment destination receives enough scroll margin to remain visible beneath any safe sticky header and a temporary focus/target cue that is not color-only.

### Publications `/publications`

1. Intro and catalogue methodology.
2. Featured publications.
3. Filters.
4. Results summary.
5. Publication catalogue.
6. External scholarly profiles.

Filters support only the frozen launch keys: `q`, `year`, `type`, and `theme`, generated in that order with no empty values. Text search spans title, author, venue, DOI, and approved keywords. Controls are visibly labelled, keyboard operable, and stacked by default; they may form a compact multi-column control row only when labels, values, validation, and targets fit. Applied criteria are repeated in text beside `Clear filters`. Results update with a perceivable status message and preserve focus. Default order is newest approved year/status first with canonical title as deterministic tie-breaker. There is no launch pagination, multi-select, or sort control.

Each publication is a list record, not a card. The visual order is title; authors with Faisal's name treatment only if factually and semantically appropriate; venue/type/year/status; DOI or canonical external action; optional short note. Long titles, full author lists, and DOI strings wrap. Records use stable fragments `#publication-<stable-id>`. No-results presents the active criteria, explains that nothing matched, and offers a clear reset; it is not a blank page.

### Teaching `/teaching`

1. Teaching approach.
2. Courses.
3. Supervision/mentoring.
4. Student-research themes.
5. Inquiry guidance.

Use readable narrative followed by course and theme lists. Course records show verified level/role/term only where approved. No schedule, student identity, testimonial, or private detail appears. Inquiry guidance is a bounded callout, not a conversion banner.

### Leadership & Service `/leadership-service`

1. Introduction.
2. Technical leadership.
3. Institutional/professional service.
4. Reviewing/editorial activity.
5. Community contribution.
6. Talks/events.
7. Professional development.
8. Contact route.

Use evidence rows grouped by category, and a timeline only where verified dates form a meaningful chronology. Role, contribution, period, organization, and source remain distinguishable. Metrics require their scope and evidence. The contact route is the only terminal action.

### About `/about`

1. Short biography.
2. Extended biography.
3. Current roles and affiliation.
4. Career timeline.
5. Education.
6. Recognition.
7. CV action.

The short biography occupies the primary plane; the extended biography remains within 68ch. The career timeline uses dates and rules without portraiture. Current affiliation is clearly subordinate and factual. Recognition is a list with source/status rather than badges. The CV action includes format and availability.

### Contact `/contact`

1. Page purpose.
2. Appropriate contact categories.
3. Institutional email action.
4. Location at the approved level of precision.
5. Scholarly/profile destinations.
6. Text affiliation.

The launch treatment is email-only. There is no form, scheduler, analytics-dependent behavior, map embed, or inferred office detail. Each category states what information a correspondent should include without collecting it on the site.

### CV action `/cv/faisal-albalwy-cv.pdf`

The action exposes a production-approved English PDF only when available. Display `PDF`, verified file size, and a current/revision date. The filename and accessible name identify Faisal. If unavailable, replace the download action with the non-link state `CV unavailable`, provide context and a route to About, and make a direct request to the PDF path return the normal 404 state; never serve a stale, placeholder, private, or source CV. There is no invented CV landing route in the launch IA.

## 11. Operational and failure states

| State | Visual expression | Recovery and accessibility |
|---|---|---|
| 404 | Faisal-first shell, plain `Page not found` title, short explanation, strong rule, and visible routes to Home, Research, Publications, and Contact | Correct HTTP 404/noindex semantics in implementation; no guessed redirect, playful image dependency, or false search result |
| General error | Error token, explicit error heading, what failed, whether data may be stale, and retry/back action if meaningful | Never expose technical/private detail; error is announced and not color-only |
| Offline/network unavailable | Keep delivered local identity, navigation, records, and evidence; identify only the external or enhanced content that failed | No separate offline route; preserve the underlying route and a safe retry/destination |
| Empty | Normal page/module heading plus an honest `No items are currently published` message | Preserve context; do not manufacture records or remove the whole route silently |
| Unavailable | Bounded status callout beside the affected CV, source, DOI, or external item | State what is unavailable and offer a safe alternative; disable/remove invalid action semantically |
| Loading | Stable reserved reading area using gray surface, text such as `Loading publications`, and minimal progress cue | No flashing, layout shift, or skeleton that impersonates content; status is programmatically exposed |
| No results | Publications heading/results summary, active criteria, zero-result message, and reset | Preserve entered query until reset; move neither focus nor viewport unexpectedly |
| Publication data unavailable | Preserve page purpose and approved scholarly-profile links; identify the catalogue failure | Provide retry; unresolved catalogue failure blocks release rather than becoming an empty launch catalogue |
| Required route lacks evidence | Preserve no public placeholder or thin page | Hold release and revise content/IA explicitly before indexing or merging the route elsewhere |
| Institutional email unavailable | Keep Contact with a specific notice and remove all email links | No private substitute; this remains a release blocker until corrected |
| Partial external failure | Keep verified local metadata; mark the external action unavailable | Do not blank the full record; distinguish local evidence from live destination status |
| Font failure | Immediate system-fallback rendering with unchanged hierarchy and no clipped controls | Test representative long content; never hide text until Alexandria loads |
| Asset/media failure | No effect on comprehension because no required image, logo, icon, or decorative asset exists | Text labels and CSS/system geometry remain sufficient |

## 12. Responsive behavior

Breakpoints are triggered by content pressure and implemented using only the approved compact (30rem), medium (48rem), wide (64rem), and max (80rem) references where needed. A component changes mode when its real English content no longer fits—not because a named device is detected.

- **Base/compact:** one reading column, evidence placed beneath its claim, filters stacked, timelines linear, full-width controls where appropriate, no horizontal page scroll.
- **Intermediate:** use selective two-column groupings only for related, similarly weighted content; the evidence margin may appear beside short records; navigation remains collapsed until all labels fit.
- **Wide:** use the 12-column claim/evidence composition; catalogues may use a narrow metadata column and a wider record column; do not fill every column merely because space exists.
- **Very wide:** stop growth at 75rem and increase exterior whitespace, not type measure or column count.

At 320 CSS pixels, 200% text zoom, and 400% browser zoom, all content and controls reflow without loss or two-dimensional page scrolling. Targets use the approved 2.75rem default. The 1.5rem AA minimum is exception-aware, not a density target. Related inline links need enough spacing or a larger target wrapper.

Tables collapse to labelled definition-style records when column comparison is not essential. When comparison is essential, place the table in an explicitly labelled one-axis scroll region with a caption, keyboard access where necessary, visible overflow affordance, and a non-scrolling equivalent summary or data alternative. Publication lists never require horizontal scrolling.

## 13. Interaction and motion

Interaction is expressed first through label, underline, boundary, and state; motion is optional reinforcement.

- Use the approved fast 120ms or standard 180ms duration for hover/focus/menu state changes and the approved easing. The slow 240ms duration is reserved for a bounded disclosure where the transition aids orientation.
- Movement never exceeds the approved 0.25rem and must not shift text under the pointer or keyboard focus.
- Reduced motion sets duration and distance to zero; all content and state changes remain understandable.
- Do not use parallax, auto-rotating carousels, decorative video, animated counters, scroll-jacking, reveal-on-scroll dependency, or animation to communicate status or hierarchy.
- Pressed/active treatments may use the approved press offset, boundary, and label state; no spring or bounce.

## 14. Forced colors, print, and resilience

### Forced colors

Map page, text, links, borders, and focus to the approved system-color tokens: Canvas, CanvasText, LinkText, ButtonText, and Highlight. Retain semantic borders and underlines; allow the user agent to adjust colors. Data markers remain distinguishable by direct labels, shape, and dash. The affiliation remains text-only.

### Print

Print begins with Faisal and the document title, uses white surface and black text, removes shadows, underlines links, and exposes useful destination text for DOI/download/external references where practical. Navigation controls, menu controls, filters, loading UI, and decorative geometry are omitted. Content order remains the IA order. No logo, protected pattern, portrait, or simulated university stationery appears.

### Resilience

System font fallback may change line breaks but not hierarchy. Long content wraps rather than overlaps. Disabled CSS, missing optional scripts, unavailable network resources, or blocked external destinations must leave core identity, page purpose, records, citations, email contact, and navigation understandable. Search/filter enhancement may fail back to the complete catalogue; the source HTML/data must not depend on the enhanced control to expose records.

## 15. Component and surface matrix

| Component / surface | Page | Muted | Inverse | Print / forced colors | Direction rule |
|---|---:|---:|---:|---:|---|
| Header / footer | Yes | No | One inverse treatment permitted | Text-first transformation | Faisal first; affiliation subordinate and text-only |
| Reading section | Yes | Optional bounded subsection | No | Linear | 68ch prose; spacing creates hierarchy |
| Evidence margin | Yes | Yes | Only with inverse-safe text | Moves inline | Claim precedes evidence in reading order |
| Publication/project row | Yes | Alternating muted surface only if rules are insufficient | No | Linear list | Full wrap; stable fragment; metadata and actions explicit |
| Feature card | Yes | Yes | At most one special callout | Border retained | Reserved for up to three selected stories or a discrete object |
| Filter/control group | Yes | Yes | No | Hidden in print with applied criteria retained as text | Labels and states always visible |
| Timeline | Yes | Optional | No | Rule simplifies | Dates and content carry meaning, not line position |
| Figure/metric | Yes | Yes | Only if all pairs pass | Direct labels/table | Source and scope required |
| Status/callout | Yes | Token-dependent | Error/information only if approved | Border/text retained | Heading, status word, and recovery cue required |
| Affiliation block | White affiliation surface | No | No | Text-only | No logo, lockup, endorsement, or ownership implication |

## 16. Token-to-role map

DES-001 creates no new tokens. DES-002 must preserve these existing mappings and may add component aliases only when traceable to the approved source tokens.

| Visual role | Existing source token(s) |
|---|---|
| Page / muted / inverse / affiliation surfaces | `color.surface.page`, `color.surface.muted`, `color.surface.inverse`, `color.surface.affiliation` |
| Primary / inverse text | `color.text.primary`, `color.text.inverse` |
| Links and link states | `color.text.link`, `color.text.link-hover`, `color.text.link-active`, `component.link.underline-default`, `component.link.underline-hover` |
| Primary / secondary / selected / disabled actions | Existing `color.action.*` family |
| Control, strong, decorative boundaries | `color.border.control`, `color.border.strong`, `color.border.decorative`; `border.width.standard`, `border.width.strong` |
| Focus | `color.focus.light`, `color.focus.dark`, `color.focus.action-inner`, `color.focus.action-outer`; `component.focus.width`, `component.focus.offset` |
| Status messages | Existing `color.status.info/success/warning/error/loading/empty.*` mappings |
| Typography | `font.family.sans`, weights 400/600/700, `font.size.xs/sm/body/lead/h3/h2/h1`, approved line heights and `font.measure.prose` |
| Layout / spacing | `layout.gutter`, `layout.section-space`, `layout.content-max`, `layout.prose-max`, approved grid/breakpoint tokens, `space.0`–`space.9` |
| Shape / elevation / target | `radius.none/sm/md/lg`, `elevation.none`, `elevation.overlay-low`, `component.target.default`, `component.target.aa-minimum` |
| Motion | Existing `motion.duration.*`, `motion.easing.standard`, `motion.distance.max`, and reduced-motion tokens |
| Figures | Existing `chart.*` colors, markers, dash patterns, labels, and required navy outline |
| Forced colors / print | Existing `forced-color.*` and `print.*` families |

## 17. Allowed and prohibited treatments

### Allowed

- A no-image hero composed from name, verified descriptor, short research position, two actions, alignment, and one rule.
- A publication list whose rhythm comes from titles, authors, venue/year/type, DOI, source state, and restrained separators.
- A wide claim with a narrow adjacent evidence margin that becomes an inline evidence block on compact layouts.
- Sparse generic geometry that clarifies hierarchy or labels a data series.
- A small number of bordered feature cards for selected research stories.
- Text-only affiliation in a deliberately subordinate location and weight.

### Prohibited

- University logo use, a fabricated personal mark, initials monogram, combined lockup, seal, crest, protected pattern, or an approximation of any of them.
- Portrait, stock photo, lab photo, icon set, illustration, decorative SVG, supplied template, or media required for page completeness.
- A generic dashboard aesthetic: card grid, KPI wall, app-shell sidebar, excessive pills/chips, or every module enclosed in a panel.
- Institutional portal styling that makes Taibah University appear to own or publish the site.
- Gradients as information encoding, low-contrast teal/sky body text, color-only status, or hue-only data series.
- Auto-rotation, parallax, decorative video, animated counters, or interaction that hides evidence until hover.
- Truncated scholarly titles/authors/DOIs, horizontally scrolling publication records, or tiny metadata used to simulate compactness.
- Unverified award badges, journal logos, university marks, citation counts, project metrics, or claims used as ornament.

## 18. Content-density test cases for DES-002 and DES-003

Downstream work must demonstrate all cases with representative but clearly non-public test content until approved content exists:

1. Home nameplate plus a three-line research descriptor at 320px, 200% text zoom, 400% zoom, Alexandria failure, and no imagery.
2. All five primary navigation labels plus Contact and Download CV, including the long `Leadership & Service` label, in inline and collapsed modes.
3. A publication title of at least 180 characters; twelve authors; a long venue; year/type/status; a DOI/URL of at least 100 characters; three actions; and Faisal's authorship position without truncation.
4. Publication filtering with a long query, ten year options, six type options, eight themes, two applied criteria, loading, zero results, one result, and at least 100 results. Launch behavior still permits only `q`, `year`, `type`, and `theme`, with no pagination/multi-select/sort.
5. A research page with at least four established themes, two emerging themes, six projects, long contribution text, mixed evidence availability, and direct project-fragment arrival.
6. A Teaching page with six course records, three supervision categories, long course names, absent term data, and an unavailable inquiry state—without schedule or student data.
7. Leadership & Service with at least 20 mixed records across all seven content categories, overlapping date ranges, missing optional end dates, and one evidence hold.
8. About with a 900-word extended biography, a 12-event career timeline, long institution/degree names, recognition with and without a public source, and unavailable CV.
9. Contact with long category descriptions, a long institutional email address, unavailable external profile, and no form.
10. A figure with four series, direct labels, all approved markers/dashes, long caption/source, data alternative, forced colors, grayscale print, and 400% zoom.
11. 404, general error, empty route/module, unavailable resource, loading, no-results, and partial external failure with recovery actions and screen-reader status behavior.
12. A page containing several identical external labels, ensuring accessible names still disambiguate their destinations without visible icon dependence.

Approved content may be shorter or longer. These cases are capacity tests, not permission to invent public facts.

## 19. Accessibility acceptance checks

DES-002 through QA must be able to verify the following as pass/fail statements:

- One logical `h1`; headings do not skip structure; DOM order remains claim before evidence at every layout.
- All normal text uses an approved AA pairing; large-text-only and non-text-only pairings never leak into ordinary metadata or controls.
- Every link is distinguishable without color and has a visible hover, active, and keyboard-focus state.
- Focus order follows reading order; skip links work; no focused element is obscured by a header, menu, or status update.
- All controls have persistent labels, programmatic names, state, errors, and instructions; target size defaults to 2.75rem.
- Search/filter updates announce a concise results count without moving focus unexpectedly; no-results retains recovery.
- Long titles, author lists, venue text, email addresses, URLs, and DOIs wrap at 320px and at zoom without clipping or overlap.
- No horizontal page scroll exists; any essential table overflow is a labelled single-axis region with an alternative.
- Reduced motion removes duration and displacement without removing information or operability.
- Forced colors preserves text, link, boundary, selection, focus, status, and data-series distinctions.
- Print preserves identity, content order, citations, source meaning, and useful link destinations while removing controls and decorative geometry.
- The site remains complete under font failure, image blocking, optional-script failure, external-link failure, and unavailable CV.
- Page title, landmarks, current navigation state, fragment targets, error messages, loading state, and results state are exposed programmatically.
- Touch, keyboard, screen reader, text-spacing overrides, 200% text zoom, and 400% browser zoom are tested on representative content-density cases.

## 20. Content-dependent holds

The direction is complete, but the following visual decisions must wait for approved content/evidence density:

- Exact Home descriptor, research-positioning line, and which projects/publications receive feature treatment.
- Exact number and names of research themes, project/source-label combinations, and whether any project has enough evidence for a figure or metric.
- Final publication field coverage, maximum real title/author/venue/DOI lengths, featured set, filter option counts, and availability of external actions.
- Verified teaching, supervision, leadership, service, talk, development, career, education, recognition, affiliation, location, and profile records.
- Whether any chronological set is complete enough to warrant a timeline rather than a list.
- Whether any quantitative evidence is verified, contextualized, and material enough to warrant a metric or figure.
- Production English CV availability, revision date, file size, and accessibility status.
- Open Graph copy and any future approved non-logo visual asset; the public site cannot wait for that asset and no asset is authorized here.

Until resolved, wireframes and prototypes use length-calibrated placeholders labelled as test content, not invented public claims. No hold blocks the no-image shell, type hierarchy, evidence-margin behavior, route ordering, or accessibility testing.

## 21. Downstream handoff

| Work package | Required inheritance from DES-001 |
|---|---|
| DES-002 | Translate only approved brand tokens into component/layout aliases for the claim/evidence system; encode density, rules, focus, states, and responsive transitions without changing base values or inventing a second palette/type scale. |
| DES-003 | Produce mobile-first wireframes in exact IA order; show claim-before-evidence DOM order, desktop evidence margin to inline collapse, permitted task counts, long-content cases, filters, fragments, timeline, menu, footer, CV, and every operational state. |
| DES-004 | Define components and variants for the shell, evidence row/margin, catalogue record, feature card, filter group, status/callout, timeline, citation, figure/metric, affiliation text, external/download action, and all interaction/failure states. |
| DES-005 | Apply one coherent `Evidence in the Margins` high-fidelity system to Home and representative internal/catalogue pages; validate no-image completeness and real approved density before G3. |
| BLD-001 | Implement the accessible shell, typography/fallback, grid, semantic color mappings, skip/focus/current states, menu behavior, responsive evidence order, forced colors, reduced motion, and print rules. |
| INT-003 | Create social metadata and an OG asset only within its own approved scope; keep Faisal first, omit the university logo/protected pattern/portrait dependency, and ensure the web experience remains complete without it. |
| QA-004 | Audit WCAG 2.2 AA against Section 19 and every operational/content-density case, including zoom, reflow, forced colors, motion, target size, focus, announcements, and fallback modes. |
| QA-005 | Verify font loading/failure, no-image performance, layout stability, catalogue/filter efficiency, print behavior, metadata discoverability, and that any enhancement fails back to readable evidence. |
| QA-009 | Audit every route, state, printed surface, social asset, and fallback for Faisal-first ownership, text-only subordinate affiliation, approved tokens/type, and absence of logo, protected pattern, invented lockup, or institutional-owner implication. |

## 22. DES-001 acceptance record

| Acceptance requirement | Evidence in this document | Result |
|---|---|---|
| One distinctive, implementable concept | Named thesis and claim/evidence composition in Sections 1, 3, 4, and 7 | Pass |
| Derived from accepted brand and frozen IA | Existing token map, exact navigation/route/module order, and task thresholds in Sections 5, 6, 9, 10, and 16 | Pass |
| No media/logo dependency | Text-only identity/affiliation, no-image hero, generic geometry limits, and failure rules | Pass |
| All routes and states covered | Sections 10 and 11 cover seven pages, CV action, and all requested operational states | Pass |
| Exact accessible type/color/hierarchy | Approved sizes/weights/line heights, color hex pairings, contrast-use restrictions, and semantic order in Sections 3, 5, and 6 | Pass |
| Responsive/motion/print/failure is testable | Sections 11–14 and 18–19 provide explicit transformations and pass/fail cases | Pass |
| Real academic density anticipated | Twelve extreme-but-plausible content cases in Section 18 | Pass |
| Benchmark synthesized and cited without copying | Three direct live sources and synthesis boundary in Section 2 | Pass |
| Governance and downstream handoff complete | Component/surface matrix, allowed/prohibited rules, holds, and named handoffs in Sections 15–21 | Pass |
| Scope respected | This is prose direction only: no token creation, wireframe, prototype, code, asset, logo, deployment, DNS, or P9 work | Pass |

**DES-001 decision:** Accepted for downstream design work subject to the content-dependent holds in Section 20. The site remains English-only, research-first, Faisal-first, text-affiliated, no-logo, no-image-complete, email-only at launch, and analytics-free by default.
