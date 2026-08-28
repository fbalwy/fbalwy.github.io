# Component inventory and interaction contract

**Work package:** DES-004 v1  
**Prepared:** 19 August 2026 (Asia/Riyadh)  
**Status:** Complete paper specification; input to DES-005 and BLD, not code or final styling  
**Accepted design source:** `docs/WIREFRAME_SPEC.md` and `design-concepts/wireframes/index.html`  
**Boundaries:** English, Faisal-first, research-first, text-only affiliation, no logo/image dependency, no public data assumption

## 1. Decision and authority

This document defines the reusable components, composition rules, view-model boundaries, deterministic interactions, responsive behavior, accessibility behavior, and failure contracts needed to implement the accepted 31-specimen wireframe system. It does not create a prototype, application component, visual asset, token, route, copy decision, data record, or release state.

The accepted DES-003 wireframes are the design concept for this paper-only package. The frontend application builder workflow is therefore applied to component architecture and fidelity traceability; generating a new image concept or rendered implementation would duplicate the accepted design and exceed DES-004 scope.

Precedence is:

1. privacy, rights, consent, security, and `render_eligibility=public` release controls;
2. the frozen route/navigation/query/fragment rules in `docs/INFORMATION_ARCHITECTURE.md`;
3. content governance and the DAT-001 schemas;
4. Faisal-first, text-only/no-logo brand rules;
5. the 203 `ui.*` aliases in `docs/DESIGN_TOKENS.md`;
6. the DES-003 wireframe hierarchy and this component contract.

DAT-002 is running separately. Components MUST consume only a minimized, readonly public view model produced after schema and lifecycle validation. They MUST NOT import source-stage datasets, content authoring files, evidence registries, or a private canonical superset. `verified + publish + public` is the sole render predicate; `eligible/internal_only` renders nothing, including counts, labels, links, fragments, metadata, or empty geometry.

## 2. Counts and registry notation

| Family | Component IDs | Components | Named variants | Named states |
|---|---|---:|---:|---:|
| Shell and global navigation | `CMP-001`–`CMP-009` | 9 | 22 | 25 |
| Page composition and actions | `CMP-010`–`CMP-020` | 11 | 26 | 34 |
| Record primitives | `CMP-021`–`CMP-023` | 3 | 12 | 6 |
| Publications | `CMP-024`–`CMP-032` | 9 | 25 | 32 |
| Domain-specific content | `CMP-033`–`CMP-039` | 7 | 22 | 26 |
| Shared status and mode utilities | `CMP-040`–`CMP-042` | 3 | 13 | 13 |
| **Total** |  | **42** | **120** | **136** |

“Variant” is a supported semantic/compositional presentation, not a CSS class. “State” is a programmatic availability or interaction state. The 136 state entries count each component's declared state slot, including the governed-enum set on `CMP-022`; repeated names are counted per component because their contracts and tests differ. Twelve cross-component state machines in Section 8 govern transitions.

Registry shorthand:

- **Routes:** `R1` Home, `R2` Research, `R3` Publications, `R4` Teaching, `R5` Leadership & Service, `R6` About, `R7` Contact, `R8` CV utility, `G` global/state surfaces.
- **Data:** `VM` means a minimized readonly public view model; schema names refer to DAT-001 contracts, not permission to render canonical/internal fields.
- **Modes:** `NS` no script, `RM` reduced motion, `FC` forced colors, `PR` print, `FF` font failure, `NI` no image, `OF` offline-after-load.
- **Acceptance IDs:** `AC-###` are stable paper test cases. Implementations SHOULD locate components by role/name first; a production `data-testid` is not required and must not expose internal IDs.

## 3. Universal component contract

Every component below inherits all rules in this section; a registry row records only its specific contract.

| ID | Universal rule |
|---|---|
| U-01 Semantics | Use the native HTML element before ARIA. Each document has one `main` and one `h1`; heading levels follow composition, never appearance. Lists, `article`, `section`, `time`, `cite`, `nav`, links, buttons, inputs, and selects retain their native roles. |
| U-02 Inputs | Props are small, readonly, typed public VMs. No component accepts raw HTML, Markdown HTML, arbitrary URL, arbitrary class, raw color, token override, icon name, SVG, image path, event-handler string, or unvalidated attribute spread. |
| U-03 Public boundary | A record is accepted only after the public projection has enforced `verified/publish/public`, required approvals, rights/consent, freshness, and registered public location. Internal IDs, claim/source IDs, paths, hashes, review notes, private values, and held/suppressed/withdrawn/stale/conflicted fields never reach props. |
| U-04 Actions | Internal paths come from the closed route registry. External actions come from a validated `ExternalActionVM`/`ProfileLinkVM`, use HTTPS except the separately governed institutional `mailto`, open in the same tab, and have visible external/file meaning. |
| U-05 Focus | DOM order is focus order. Focus is never removed, trapped, clipped, or moved on ordinary filtering/typing. Programmatic focus occurs only for named navigation/recovery events in Section 8 and uses temporary `tabindex=-1` on a heading/record target where needed. |
| U-06 Announcements | Static content is not live. Only committed, user-caused state changes use a live region. Routine result counts are polite; blocking action failure may be assertive only when the user initiated the action. Never announce hidden internal diagnostics. |
| U-07 Reflow | Mobile-first single plane is authoritative. Visual layout may split only when content fits; DOM order never changes. Essential text wraps without ellipsis. No fixed block height, device sniffing, carousel, masonry, hover-only disclosure, or page-level horizontal scroll. |
| U-08 Resilience | Core reading/navigation works without JavaScript, images, remote fonts, storage, cookies, network APIs, or animation. RM is immediate; FC uses system colors and retains borders/underlines/focus; PR linearizes content and omits interactive-only controls; FF uses the approved system stack; NI creates no reserve. |
| U-09 Omission | Optional modules with zero public records return no DOM: heading, in-page link, fragment, actions, live region, and reserved space disappear atomically. A required route with insufficient substance is a release blocker or preview-only unavailable state, never a thin page. |
| U-10 Density | Test full untruncated labels and values. Secondary detail may use native `details` only when the title/citation, status, primary evidence, and recovery remain visible. No component responds to pressure by shrinking below approved type/target aliases. |
| U-11 Security/privacy | No form submission, endpoint, `innerHTML`, user-input reflection, telemetry, logging, persistence, third-party request, private fallback, copied protected file, tracking query, or inferred value. Invalid input fails to the safe base state. |
| U-12 Visual tokens | Styling references only exact `ui.*` paths from the 203-token registry. Immutable baseline paths may be used only as the documented terminal alias when a consumer cannot resolve the `ui.*` path. No local literal style value is authorized here. |

## 4. Component registry: identity, semantics, data, and coverage

| ID / name | Purpose; non-purpose | Allowed routes and specimens | Semantic root and hierarchy | Required / optional public data source |
|---|---|---|---|---|
| `CMP-001 SiteShell` | Own document landmarks and global order; not route data, metadata, or a visual wrapper. | R1–R7, G; `WF-G-01/02/03/04/06`, `WF-S-01/02/04/09` | document composition: skip → `header` → one `main` → `footer`; no nested `main`. | Required `RouteVM`, current route; optional public affiliation/profile/email/CV states. Closed route registry + public projection. |
| `CMP-002 SkipLink` | Bypass repeated shell or R3 controls; not ordinary navigation. | All HTML routes; `WF-G-01/02/03/04/05`, R3 result variant | First focusable `a`; target is existing `main` or catalogue heading. | Required validated local fragment and governed label from interface copy. |
| `CMP-003 SiteNameplate` | Personal homepage identity/current Home cue; never an affiliation lockup. | R1–R7 and shared states; `WF-G-01/02/03/04/06`, `WF-R1-01` | `a` with accessible name `Faisal Albalwy`; `aria-current=page` only on R1. | Required display name and `/` from closed registry; no role/affiliation prop. |
| `CMP-004 PrimaryNavigation` | Exact five-route navigation/current state; not site search, Home, or utilities. | R1–R7; `WF-G-01/02/04/06` | labelled `nav` containing one list in Research → Publications → Teaching → Leadership & Service → About order. | Required closed route definitions and current `RouteId`. |
| `CMP-005 MobileMenu` | Disclose the exact primary/action order under content pressure; not a new route or icon-only overlay. | R1–R7; `WF-G-03/04` | native `button` (`Menu`, `aria-expanded`, `aria-controls`) plus labelled `nav`; one list then labelled Actions group. | Required route/action VMs; optional available CV/email states. No arbitrary children. |
| `CMP-006 UtilityActionGroup` | Keep Contact and CV distinct from primary nav; not a third navigation taxonomy. | R1–R7; `WF-G-01/02/04/06`, `WF-R1-01` | labelled `nav` or grouped list; Contact precedes CV. | Contact route from registry; `CVActionVM` from public projection. |
| `CMP-007 TextAffiliation` | Subordinate factual affiliation and same-tab official link; never site ownership or co-brand artwork. | Conditional R1/R6/R7/footer/states; `WF-G-06` | `section` or paragraph with visible label; at most one validated external link; follows personal content. | Public affiliation wording/link only after publish/public; optional personal-site notice. |
| `CMP-008 SiteFooter` | Compose ordered global footer groups; not a sitemap dump or institutional masthead. | R1–R7/shared states; `WF-G-06`, inherited by state pages | `footer`; Site identity → Explore → Actions → conditional Profiles → conditional Affiliation. | Required site identity/update VM; route registry; optional public email/CV/profile/affiliation VMs. |
| `CMP-009 FooterGroup` | Reusable labelled footer subgroup; not a generic card. | Global; `WF-G-06` | heading plus list/paragraph; heading level derived from footer composition. | Group enum and typed links/text; Profiles/Affiliation omit when empty. |
| `CMP-010 RouteIntro` | Join H1, one purpose, and bounded route actions; not a promotional hero. | R1–R7; `WF-R1-01`–`WF-R7-02` | `header` within `main`; exactly one `h1`; then purpose and action group. | Required title/purpose; optional allowed actions from route VM/copy pack. |
| `CMP-011 SectionHeading` | Identify major/group/item sections and optional fragment targets; not a badge or decorative label. | All routes/states; all route specimens | `h2`/`h3` selected by composition; target ID only from stable structural/record fragment VM. | Required text and semantic level; optional validated fragment. |
| `CMP-012 PagePurpose` | Concise route/task orientation; not biography, evidence, or final metadata. | R1–R7/states; route specimens | `p`; directly after H1; never a heading substitute. | Required governed route purpose copy. |
| `CMP-013 Action` | Native primary, secondary, or text action; not arbitrary clickable container. | All routes/states | `a` for navigation/download/mail; `button` for local action. Never ambiguous nested actions. | Required label + typed action kind; destination from registry/validated action VM when applicable. |
| `CMP-014 ExternalLink` | Name a governed same-tab external destination; not an icon-only cue or endorsement. | R2/R3/R5/R6/R7/footer/states; `WF-R2-01`, `WF-R3-01`, `WF-S-05/10` | `a`; visible `(external)` or equivalent destination meaning; no forced new tab. | Required safe HTTPS URL/label/availability from `externalAction` or profile schema. |
| `CMP-015 UnavailableAction` | Explain absent CV/email/external action without a false target; not a disabled link. | R1/R6/R7/R8/footer/states; `WF-R1-01`, `WF-R6-01`, `WF-R7-01`, `WF-R8-02` | text/status block; no `href`; heading only when composition warrants. | Required reason/explanation/recovery from availability VM. |
| `CMP-016 InPageNavigation` | Navigate populated long modules; not global navigation or breadcrumb. | Conditional R2/R4/R6; required R5; `WF-R2-01`, `WF-R4-01`, `WF-R5-01`, `WF-R6-01` | labelled `nav` after intro, list of native fragment links. | Required populated section targets in IA order. |
| `CMP-017 ReadingPlane` | Dominant claim/content flow; not a generic panel. | R1/R2/R5/R6 and modes; `WF-G-01`, `WF-R1-01`, `WF-R2-01`, `WF-R5-01`, `WF-R6-01` | neutral `div`/`section` chosen by content; never adds heading. | Typed child composition only. |
| `CMP-018 EvidenceRail` | Adjacent proof/status/source context; not navigation or detached sidebar. | R1/R2/R5/R6; `WF-G-01`, `WF-R1-01`, `WF-R2-01`, `WF-R5-01`, `WF-R6-01`, `WF-M-01` | `aside` only when complementary; otherwise inline `div`; labelled when needed. | Required public evidence labels/values/actions adjacent to owning claim. |
| `CMP-019 ClaimEvidenceBlock` | Bind one material claim to its evidence in DOM order; not a testimonial or metric tile. | R1/R2/R5/R6 and reusable records | `section`/`article`; claim content precedes evidence component. | Required public claim/display fields; optional public evidence metadata/actions. |
| `CMP-020 PageSection` | Conditional module boundary and fragment cleanup; not a blank container. | R1–R7; `WF-S-03` plus route specimens | `section` with `aria-labelledby` only when rendered; one section heading. | Required non-empty public module VM or required-state VM; optional stable fragment. |
| `CMP-021 MetadataRow` | Present typed label/value pairs near their record; not a metric summary. | R2–R6/R8; route/record specimens | `dl` by default; compact `p` only for one pair; `time` for typed dates. | Required label/value pairs from domain schemas; optional source/status/action association. |
| `CMP-022 StatusLabel` | Textual status/current/availability/type cue; never color-only or inferred. | R2–R8/states | text/span within owning record, or `dt/dd`; no live role when static. | Required schema enum plus governed display label; optional date precision. |
| `CMP-023 RecordList` | Semantic repeated-record container; not a card grid. | R2–R6/footer profiles | `ul`/`ol`; each item owns a heading and record body; chronology order stated when meaningful. | Required readonly public record VMs; optional group heading/ordering note. |
| `CMP-024 PublicationRecord` | Render featured, latest, or catalogue record from one canonical VM; not a detail route or quality claim. | R1/R3/R2 related; `WF-R1-01`, `WF-R3-01`, `WF-S-05/08`, `WF-M-01` | `article` or list item; title heading → authors → status/type/date → venue → DOI/actions. | Required public `PublicationVM`; optional lawful fields/actions from publication schema. |
| `CMP-025 AuthorList` | Preserve exact ordered authors and Faisal identity without truncation; not an author-position claim. | R1/R3; `WF-R3-01` | semantic text/list inside record; accessible punctuation; no interactive author chips. | Required ordered public author names; optional public Faisal emphasis boolean only if approved for presentation. |
| `CMP-026 PublicationActionGroup` | DOI/publisher/repository/full-text/code/data/citation actions; not arbitrary URL buttons. | R3; `WF-R3-01`, `WF-S-05/10` | grouped links/buttons after metadata; visible action meanings. | Validated `external_actions`; optional approved citation string. |
| `CMP-027 PublicationFilterForm` | Enhance the complete catalogue with four frozen keys; not a submission endpoint or global search. | R3; `WF-R3-01/02`, `WF-S-06/07/08` | native `form` with local-only submit handling; controls hidden until successful initialization; labelled field grouping. | `FilterOptionsVM` generated from public records; current `PublicationQueryVM`. No network action. |
| `CMP-028 SearchField` | Search public DOM fields locally; not collect/log visitor data. | R3; `WF-R3-01/02`, `WF-S-06/08` | labelled `input type=search`, hint via `aria-describedby`; optional submit button through CMP-013. | Required label/hint; value capped at 200 Unicode code points. |
| `CMP-029 SingleSelectFilter` | One public allowlisted value for year/type/theme; not multi-select or arbitrary taxonomy. | R3; `WF-R3-01/02`, `WF-S-06/08` | persistent `label` + native `select`; one default option. | Required key/label/options; options derived from public catalogue and approved theme relationships. |
| `CMP-030 ResultAnnouncement` | Report complete/filtered/no-result count after committed action; not a metric badge. | R3; `WF-R3-01/02`, `WF-S-06/07` | `p` with `role=status`/polite live region after initialization; initial HTML text is static. | Required visible count/result description; no hidden internal total. |
| `CMP-031 ClearFilters` | Return to complete catalogue and canonical query-free state; not generic reset of site data. | R3; `WF-R3-02`, `WF-S-06` | `button type=button/reset` within form; descriptive name. | No data prop beyond governed label and target catalogue/search IDs. |
| `CMP-032 PublicationCatalogue` | Own canonical ordered complete HTML and enhanced visibility; not pagination, fetch, or virtualized list. | R3; `WF-R3-01/02`, `WF-S-05/06/07/08`, `WF-M-01` | labelled `section` + `ol`; every public record exists in base DOM; no reordered DOM. | Required ordered public `PublicationVM[]`; availability VM; optional filter VM. |
| `CMP-033 CourseGroup` | Group approved course titles without exposing occurrence-sensitive fields; not a course card or timetable. | R4; `WF-R4-01` | `section`/group heading + semantic list. | Required public `CourseVM[]`; optional category. Occurrence schema may prove history but does not expose restricted fields. |
| `CMP-034 TimelineList` | Present verified chronology as a list; not decorative process art. | R5/R6; `WF-R5-01`, `WF-R6-01` | labelled `ol`; order stated; each item uses heading, `time`, metadata/evidence. | Required public `CareerVM[]` or dated service VMs with typed/open periods. |
| `CMP-035 RoleServiceRecord` | Present role/service category, organisation, period/status, and non-additive source context; not a dashboard or total. | R5/R6; `WF-R5-01`, `WF-R6-01` | list item/article; heading then metadata/evidence/actions. | Required public career/service VM; optional source-specific issuer metric only when separately publish/public. |
| `CMP-036 ProfileLinkList` | List verified scholarly/institutional profiles; not social icons or scraped metrics. | R3/R7/footer/data-failure; `WF-S-07`, `WF-G-06` | labelled section/list of CMP-014 links; omit group when empty. | Public `ProfileLinkVM[]` with verified identity/access state. |
| `CMP-037 InquiryGuidance` | Organize four legitimate professional inquiry contexts and privacy expectation; not an intake form or availability promise. | R7 and Teaching/Research handoff; `WF-R7-01/02` | heading + `ul`; email action follows, not nested. | Required governed guidance strings; optional conditional sensitive-data caution. |
| `CMP-038 EmailAction` | Available institutional mailto or exact unavailable state; not form, personal contact, or delivery promise. | R7/footer; `WF-R7-01/02` | available `a`; unavailable CMP-015/status text. | Approved institutional contact VM only; fixed subject built safely; no body/user query/referrer. |
| `CMP-039 CVAction` | Available canonical PDF action or unavailable/withdrawn state; not a CV page or private fallback. | R1/R6/R8/header/footer; `WF-R1-01`, `WF-R6-01`, `WF-R8-01/02` | available `a` with PDF/size/update context; unavailable CMP-015. | Public CV VM with canonical fixed path, verified size/update/accessibility/privacy; otherwise availability VM. |
| `CMP-040 StatusPanel` | Shared truthful callout for no-results, empty, unavailable, partial, loading, error, offline, external failure, 404; not routine content or diagnostics. | G/R3/R7/R8; `WF-S-01`–`WF-S-10`, route unavailable variants | `section`/`aside`; state heading, explanation, affected content, recovery; `role=status/alert` only per state/event. | Required availability VM fields: heading, explanation, affected content, recovery, programmatic status, HTTP/indexing intent. |
| `CMP-041 VisuallyHiddenText` | Add needed accessible context without visible duplication; not conceal essential text. | Global utility; all specimens as needed | `span`; remains in accessibility tree, excluded from layout only by approved utility. | Required governed short string; never factual payload absent visually. |
| `CMP-042 ModeUtility` | Print-only/screen-only semantic visibility; not arbitrary responsive hiding. | All routes/modes; `WF-M-01`–`WF-M-04` | neutral wrapper with explicit mode enum; must not change reading hierarchy. | Required mode enum and content already authorized in the same VM. |

## 5. Component variants, states, interaction, and modes

Every entry also inherits U-01–U-12.

| ID | Variants and supported states | Events, focus, keyboard, live region | Responsive, no-script, and mode behavior |
|---|---|---|---|
| `CMP-001` | Variants `route`, `operational`; states `ready`, `route-unavailable`. | Route load follows browser semantics; no shell-created announcement. | Same DOM order at all widths. NS complete. PR begins with Faisal/title and removes navigation controls; FC/RM/FF/NI safe. |
| `CMP-002` | `main`, `results`; `idle`, `focus-visible`. | Enter activates; focus moves to existing target heading/landmark. No announcement. | Visible on focus at every width/mode; PR may omit. NS native. |
| `CMP-003` | `default`, `home-current`; `idle`, `hover`, `focus`, `active`, `current`. | Native link. Current has visible plus programmatic cue. | Full name wraps, never initials. PR retains text identity; FC preserves current/focus. |
| `CMP-004` | `inline`, `wrapped`; `default`, `current`. | Native links; no roving tab index. | Inline only when complete labels/targets fit; otherwise CMP-005. NS keeps an operable navigation path. PR omits. |
| `CMP-005` | `closed`, `open`; `closed`, `opening`, `open`, `closing`, `invalid-fallback`. | Trigger retains focus on open; Tab enters Research; Escape closes/restores trigger; route activation closes via navigation. State is visible and `aria-expanded`; no live region required. | Single column; full labels, primary then Actions. RM immediate. FC boundaries. NS exposes equivalent inline/list navigation without an inert toggle. |
| `CMP-006` | `cv-available`, `cv-unavailable`; `default`, `contact-current`. | Native links; unavailable CV skipped as text. | Wrap/stack before abbreviation. PR omits controls but may retain CV document context. |
| `CMP-007` | `plain`, `linked`; `available`, `omitted`, `link-failed`. | One same-tab link when valid; failure preserves text and uses CMP-040. | Always subordinate; stack/omit image because none exists. PR/FC/FF retain text. |
| `CMP-008` | `standard`, `reduced-groups`, `print`; `complete`, `conditional-groups-omitted`. | Ordinary tab order through present links; no announcements for static omission. | Groups stack in source order; empty Profiles/Affiliation removed. PR linear. FC inverse surface becomes system colors. |
| `CMP-009` | `identity`, `explore`, `actions`, `profiles`, `affiliation`; `populated`, `omitted`. | Native list/link behavior. | Stack; no empty heading. NS complete; PR keeps useful identity/source context only. |
| `CMP-010` | `route`, `action-bearing`; `ready`, `required-unavailable`. | Initial focus is normal document sequence; SPA enhancement may focus H1 only to reproduce navigation. | One column first; actions wrap/stack. PR keeps H1/purpose. |
| `CMP-011` | `section`, `item`, `fragment-target`; `static`, `targeted`, `temporarily-focused`. | Fragment navigation scrolls then focuses heading with temporary `tabindex=-1`; focus cue is visible. | Full wrap. Scroll margin token; sticky shell may not obscure. PR retains hierarchy. |
| `CMP-012` | `lead`, `body`; `ready`, `omitted-with-route`. | No events/live behavior. | Prose measure, no fixed height; FF and 400% remain complete. |
| `CMP-013` | `primary`, `secondary`, `text`; states `idle`, `hover`, `focus-visible`, `active`, `disabled-native`, `unavailable-text`. | Link/button native activation; disabled button only for a genuinely temporary local action, otherwise omit or CMP-015. | Wrap/stack with full label and target. RM removes press motion. PR renders useful destination as text/link. |
| `CMP-014` | `generic`, `doi`, `profile`; states `available`, `unchecked-held`, `failed`. | Native same-tab link; user-caused failure may focus/announce adjacent CMP-040, never redirect. | Long URL/label wraps. PR includes visible destination context. OF preserves local record. |
| `CMP-015` | `cv`, `email`, `external`; states `unavailable`, `withdrawn`, `stale`, `invalid`. | Not focusable unless a real recovery link follows; static state is not auto-announced. | Inline or bounded callout by context; FC/text preserve meaning; no placeholder geometry. |
| `CMP-016` | `standard`, `conditional`; states `populated`, `reconciled-after-omission`. | Native fragment links; target focus follows CMP-011. | May wrap/stack; every missing module removes its link atomically. NS native; PR usually omitted. |
| `CMP-017` | `single`, `split`; `single-plane`, `split-fit`. | No events. DOM remains reading then evidence. | Split only after content-fit test; 320/200%/400% use single plane. PR single. |
| `CMP-018` | `rail`, `inline`; states `present`, `partial`, `omitted`. | Static evidence not live; action failures use CMP-040. | Moves after claim without DOM reorder. FC uses border/system text; PR inline after claim. |
| `CMP-019` | `with-rail`, `inline`; states `complete`, `partial`, `omitted`. | Fragment handling delegates to CMP-011; no live behavior. | Claim always precedes proof. Partial omits unavailable fields, never estimates. |
| `CMP-020` | `required`, `optional`; states `populated`, `empty-omit`, `required-blocked`, `partial`. | Omission causes no announcement during initial render; dynamic authorized removal returns focus only if the removed subtree held focus. | Empty optional returns no DOM at every mode. Required blocked uses CMP-040 and noindex intent. |
| `CMP-021` | `stacked`, `inline-fit`, `print`; states `complete`, `partial`. | No events. Dates use machine-readable values only when source precision supports them. | Stack before collision; long values wrap. PR keeps label/value. |
| `CMP-022` | `info`, `success`, `warning`, `error`, `availability`, `current`; states mirror governed enum. | Static labels not live. Changed status is announced by owning machine, not this primitive. | Text/shape/boundary duplicate color; FC/PR remain legible. |
| `CMP-023` | `plain`, `grouped`, `chronological`; states `populated`, `empty-omit`, `partial`. | Native sequential reading; no list-level live region unless owned by R3 results. | One-column base; no record cards or carousel. PR linear. |
| `CMP-024` | `featured`, `latest`, `catalogue`; states `complete`, `partial`, `withdrawn-omitted`, `fragment-target`. | Links/buttons native; fragment target focus via CMP-011. | Full title/authors/DOI wrap; no truncation. NS all public records. PR citation/source preserved. |
| `CMP-025` | `inline-prose`, `semantic-list`; states `complete`, `long-list`. | No events. | Preserve order at 12+ names; wrap naturally; PR identical meaning. |
| `CMP-026` | `doi`, `publisher-repository`, `lawful-secondary`, `citation-copy`; states `available`, `action-failed`, `clipboard-failed`, `omitted`. | Native links/buttons; copy announces success/failure politely after action and leaves citation selectable. | Wrap/stack. OF failure retains metadata. NS external links work; copy action omitted if script unavailable. |
| `CMP-027` | `enhanced-hidden`, `enhanced-ready`; states `pre-init`, `ready`, `invalid-query`, `failed-init`. | Native submit/change; initialization reveals controls only after success. Focus stays on control. | Base one column, then 2/4 only when fit. NS/failed-init hides inert controls and shows complete catalogue/noscript explanation. PR hides controls but prints criteria if relevant. |
| `CMP-028` | `search`; states `empty`, `entered`, `invalid-too-long`. | Native typing; no per-keystroke focus move/announcement. Submit/commit invokes SM-02. | Full width; long query wraps in active summary, not input geometry. NS hidden with filter form. |
| `CMP-029` | `year`, `type`, `theme`; states `default`, `selected`, `invalid-fallback`. | Native select; one value; change commits as SM-02 defines. | Stack before labels compress. Theme absent until relationships/options are public. NS hidden. |
| `CMP-030` | `complete`, `filtered`, `no-results`; states `static-initial`, `polite-update`, `data-error`. | Announce one concise count after committed user/history change; not on initial parse or every keystroke. | Never a badge/metric band. PR prints count/criteria only if meaningful. |
| `CMP-031` | `clear`; states `hidden-default`, `available-filtered`, `pressed`. | Activation clears all four keys, shows every record, moves focus per SM-02 recovery rule, and announces complete count. | Full target; NS omitted with controls. |
| `CMP-032` | `complete`, `filtered`, `no-results`, `data-unavailable`, `partial`, `no-script`; states `base`, `enhanced`, `zero`, `failed`, `partial`, `fragment-reconciled`. | Filtering toggles `hidden` only; history/fragment behavior in SM-02; no reorder. | 0/1/27/100 fixtures; one compact list. NS exposes all public records. PR full list without controls. |
| `CMP-033` | `group`, `list`; states `populated`, `partial`, `empty-omit`. | No interactive course cards. | 19-title and long-title fixture; one column; PR list. No schedule/student fields in any mode. |
| `CMP-034` | `newest-first`, `oldest-first`; states `complete`, `open-ended`, `partial`. | Order is stated textually; links native. | Visual rule may disappear; list order stays. Long roles stack. PR list. |
| `CMP-035` | `technology-leadership`, `committee`, `peer-review`, `community`, `talk`, `development`, `membership`; states `historical`, `active-verified`, `complete`, `expired`, `unknown-held`. | No totals or hover-only proof. | 20-record/sparse fixtures; repeated list, not dashboard. Source-specific metric label cannot be added across records. |
| `CMP-036` | `scholarly`, `institutional`; states `available`, `empty-omit`, `failed-link`. | Same-tab external links; no duplicate adjacent target. | Wrap/stack; text only, no icons required. OF keeps labels only if useful and valid. |
| `CMP-037` | `research`, `publication`, `teaching`, `speaking-professional`; states `complete`, `bounded`. | Static list; email action separate. | One column; no contact-card grid. PR retains useful guidance. |
| `CMP-038` | `available`, `unavailable`; states `verified`, `absent`, `stale`, `withdrawn`, `invalid`. | Available native mailto with fixed subject; no live announcement before activation. Unavailable not focusable. | Long institutional address wraps/selects. NS works. No form/map/scheduler. |
| `CMP-039` | `available`, `unavailable`, `withdrawn`; states `verified`, `absent`, `stale`, `withdrawn`, `invalid-metadata`. | Available native file link; direct missing path is true 404. Unavailable is text plus About recovery. | PDF/size/date adjacent and wrapping. PR shows context, not a false link. |
| `CMP-040` | `no-results`, `empty`, `partial`, `unavailable`, `loading`, `error`, `offline`, `external-failure`, `not-found-404`, `required-route-blocked`; states correspond exactly. | Static initial states use no live role unless schema says it; user-caused retry/action failure uses appropriate status/alert. Focus destination in Section 8. | Text/border survives all modes. Loading only for truthful async work and never hides complete static content. No media/diagnostics. |
| `CMP-041` | `assistive-context`; states `present`. | Must be announced as part of owning accessible name/description; never independently live. | Remains available at zoom/FC/NS/PR when owning component remains. |
| `CMP-042` | `print-only`, `screen-only`; states `active`, `inactive`. | Never focusable while hidden. | Media-driven only; not a content-pressure hiding mechanism. Core meaning cannot exist in only one mode. |

## 6. Token-role matrix

Only the following exact `ui.*` aliases are authorized component inputs. A consumer may use a subset; it may not add a raw value or invent an alias.

| Component family | Required token roles | Explicit exclusions |
|---|---|---|
| Shell/canvas `CMP-001`–`009` | `ui.surface.page`, `ui.surface.text.primary`, `ui.layout.canvas.max`, `ui.layout.gutter`, `ui.shell.header.*`, `ui.shell.menu.*`, `ui.shell.footer.*`, `ui.shell.affiliation.background`, `ui.type.family`, `ui.type.body.*`, `ui.interaction.*`, `ui.layer-motion.layer.menu`, `ui.layer-motion.layer.skip-link` | No `ui.graphic.*`, card, gradient, logo, image, or new elevation. |
| Route typography `CMP-010`–`012` | `ui.type.display.*`, `ui.type.section.*`, `ui.type.item.*`, `ui.type.lead.size`, `ui.type.body.*`, `ui.type.prose.measure`, `ui.layout.prose.max`, `ui.layout.section.gap` | No eyebrow/badge/pill/display size beyond H1. |
| Actions `CMP-013`–`015`, `038`, `039` | `ui.interaction.primary.*`, `ui.interaction.secondary.*`, `ui.interaction.link.*`, `ui.interaction.target.default`, `ui.interaction.focus.*`, `ui.interaction.disabled.*`, `ui.type.label.weight` | Unavailable content is not made a disabled link; no icon token is required. |
| Planes/evidence `CMP-016`–`020` | `ui.layout.plane.*`, `ui.layout.column.gap`, `ui.layout.stack.gap`, `ui.evidence.*`, `ui.surface.rule.*`, `ui.layer-motion.layer.sticky` only after safety test | No detached sidebar navigation, sticky rail, new breakpoint, or permanent focus tab stop. |
| Records `CMP-021`–`026`, `033`–`036` | `ui.content.record.*`, `ui.content.list.gap`, `ui.content.timeline.*`, `ui.type.item.*`, `ui.type.meta.*`, `ui.evidence.label.*`, `ui.evidence.fragment.*` | `ui.content.card.*` only for separately approved Home stories, never publication/course/service rows. No charts/metrics by default. |
| Catalogue `CMP-027`–`032` | `ui.catalogue.*`, `ui.interaction.input.*`, `ui.interaction.selected.*`, `ui.interaction.target.default`, `ui.feedback.empty.*`, `ui.type.label.weight`, `ui.layout.cluster.gap` | No pagination/sort/multi-select token, virtual list, remote search, loading spinner, or local storage. |
| Status `CMP-040` | `ui.feedback.info.*`, `ui.feedback.success.*`, `ui.feedback.warning.*`, `ui.feedback.error.*`, `ui.feedback.loading.*`, `ui.feedback.empty.*`, `ui.feedback.panel.padding`, `ui.content.callout.padding` | No state meaning from accent alone; no automatic dismissal or decorative status icon. |
| Modes/utilities `CMP-041/042`, all consumers | `ui.mode-resilience.print.*`, `ui.mode-resilience.forced.*`, `ui.mode-resilience.reduced.*`, `ui.mode-resilience.font.*`, `ui.mode-resilience.image.required`, `ui.mode-resilience.script.core-required`, `ui.mode-resilience.safe-area.*` | No mode-specific new color/spacing/motion. No protected asset fallback. |

Wildcard notation above refers only to members already enumerated in the 203-row DES-002 registry. Implementation configuration MUST expand and validate exact paths; CSS MUST NOT receive the wildcard strings.

## 7. Data and schema binding table

| Public VM | Source contract | Components | Allowed public fields | Fail-closed rule |
|---|---|---|---|---|
| `RouteVM` | closed `src/lib/routes/registry.ts` + public availability | `001`–`006`, `008`–`012`, `016`, `020`, `040` | route ID/path/label, current state, approved heading/purpose/actions | Unknown route/state fails build; optional module omits; required route blocks preview/release. |
| `AvailabilityVM` | `availability.schema.json` | `015`, `020`, `030`–`032`, `038`–`040` | public state, heading, explanation, affected content, recovery label/route, programmatic status, HTTP/indexing intent, fragment-removal flag | Invalid state/recovery or internal diagnostics renders generic safe unavailable state in preview and fails promotable build. |
| `PublicationVM` | `publication.schema.json` after aggregate/public projection | `024`–`032` | public title, ordered authors, type, venue/publisher, DOI, typed dates/status, safe actions, public fragment, visible citation | Any lifecycle/rights/consent/freshness failure removes the entire record and its count/fragment; partial applies only to optional approved fields. |
| `ThemeVM` / relationship | `theme.schema.json` | `016`, `019/020`, `029`, R1/R2 compositions | public name/classification/summary/boundary/query value and verified public relationships | Theme control/link omitted until both theme and relationship are publish/public; no inferred relation. |
| `ProjectSystemVM` | `project-system.schema.json` | `019`–`023`, R1/R2 | public type/title/status/maturity/period/role/problem/approach/outputs and safe relationships/actions | Current DAT boundary may be empty. Never synthesize project/system cards or fragments. |
| `CourseVM` / `TeachingOccurrenceVM` | `teaching.schema.json` | `020`, `023`, `033` | approved title/category and privacy-safe historical term/year only where separately public | Reject schedule, student, room, time, section, delivery mode, timetable URL, availability/funding inference. |
| `CareerVM` | `career.schema.json` | `021`–`023`, `034/035` | public type/title/organisation/unit, typed period/award date, verified status/order | Current/unverified or unknown status cannot be presented as current. Partial date preserves precision. |
| `ServiceVM` | `service.schema.json` | `021`–`023`, `034/035` | public category/role/organisation/activity/period/status; source-specific issuer metric only if public | Never add overlapping/source-specific values or infer totals/currentness. |
| `MetricVM` | `metric.schema.json` | none at launch by default; future governed metadata/evidence only | exact value/unit/platform/definition/scope/observed time | Empty is correct. No component may make a metric badge/dashboard without a revised composition mapping. |
| `ProfileLinkVM` | `profile-link.schema.json` | `014`, `036`, footer/status recovery | verified platform/URL/identifier/label/external/same-tab/access state | Ambiguous, inaccessible, held, or non-public profile is omitted with its group heading if last. |
| `ContactVM` | governed contact claim + public availability + ADR mailto boundary | `006`, `008`, `015`, `037/038` | institutional email, fixed subject, approved public location and state | Missing/stale/withdrawn/invalid produces no address or mailto anywhere; no private substitute. |
| `CVVM` | governed CV record/manifest + availability | `006`, `008`, `015`, `039` | canonical fixed path, file type, verified size/update/accessibility/privacy state | Missing or withdrawn file removes every link/metadata/sitemap reference; direct path is 404. |
| `AffiliationVM` | public brand-affiliation claim + profile link | `007`–`009` | subordinate wording, official same-tab URL, personal-site notice | Text-only. Omit if factual relationship/link is not public; never replace with logo/image. |

Canonical governance envelope fields are validation inputs, not general component props. Loaders may use them to construct a public VM, then MUST discard claim/source IDs, lineage, paths, hashes, approvals, reviewer data, private history, and non-public wording before rendering.

## 8. Deterministic state and interaction machines

### 8.1 Transition table

| Machine | Initial → event | Resulting state | Focus / announcement | URL effect | Recovery, no-script, and invalid fallback |
|---|---|---|---|---|---|
| `SM-01 Mobile navigation` | `closed` → Menu activate | `open` | Focus stays on Menu; `aria-expanded=true`; no live message. | None. | Tab reaches Research first. NS renders an always-available ordered nav and no inert toggle. |
| `SM-01` | `open` → Escape / Menu activate | `closed` | Restore/retain focus on Menu; `aria-expanded=false`. | None. | Unknown state resets closed with primary navigation still available. |
| `SM-01` | `open` → internal route activate | navigation/closed | Native page navigation; next document starts at skip sequence. | Closed canonical route only. | No client-only destination. |
| `SM-02 Publication initialization` | complete HTML, controls `hidden` → module validates DOM/allowlists | `ready`, controls revealed | No focus move/announcement; initial count remains static. | Parse only `q,year,type,theme`. | Any exception keeps controls hidden and all records visible. |
| `SM-02` | `ready` → committed valid search/select/submit | `filtered` or `no-results` | Keep focus on initiating control; polite count once. | Generate keys in `q,year,type,theme` order via history update; canonical remains `/publications`. | `q` trim/case-normalize/cap 200; value must be allowlisted. |
| `SM-02` | any enhanced → unknown key/value or overlong query | `complete + invalid explanation` | Keep focus; polite safe explanation only after user/history event. | Drop invalid/unknown values on next update. | Never reflect raw value to HTML/selectors/logs/links. |
| `SM-02` | filtered/no-results → Clear | `complete` | Focus search field, or catalogue heading when invoked from no-results recovery; polite complete count. | Remove all query keys. | NS already complete and has no Clear control. |
| `SM-02` | ready → `popstate` | state represented by URL | Restore controls/results; focus remains with browser context unless target is invalid/hidden. | No extra history entry. | Invalid history values fall to complete. |
| `SM-02` | any → public record fragment | `fragment-reconciled` | Reveal target by clearing conflicting filters, scroll and temporarily focus record heading. | Preserve valid fragment; remove conflicting query if required. | Missing/withdrawn fragment focuses catalogue heading with governed unavailable explanation; never reveal non-public data. |
| `SM-03 Catalogue availability` | public records present | `complete` or `partial-record` | Static initial content; no live announcement. | Base canonical/query as applicable. | Optional missing fields omit. At least one publish/public record is required for available state. |
| `SM-03` | valid query returns zero | `no-results` | Polite zero count after commit; keep controls. | Query retained, noindex/follow. | Clear returns complete; never say no publications exist. |
| `SM-03` | dataset/core projection unavailable | `data-unavailable` | Error heading; focus only after user retry or route-level recovery. | Canonical route may be 5xx/noindex as integration decides. | Keep page purpose and approved profiles; unresolved core failure blocks release. |
| `SM-03` | zero public catalogue records | `required-route-blocked` | Preview-safe unavailable heading; no private count. | Noindex; no thin catalogue. | No script exposes nothing private; DAT/content/QA resolution required. |
| `SM-04 External action` | `available` → activation fails/returns unusable | `external-failure` | Focus adjacent failure heading on confirmed in-page recovery; announce action failure, not record failure. | Local canonical unchanged; no unverified redirect. | Keep local record and retry-later guidance; OF equivalent. |
| `SM-05 Email` | no valid publish/public contact | `unavailable` | Static text, no live region; no mailto focus target. | Contact route remains; no query. | Remove every email action/address. No form, phone, private email, or obfuscation. |
| `SM-05` | approved contact becomes valid | `available` | Native link; no automatic focus/announcement. | Fixed-subject `mailto`; no body/referrer/user input. | Build validation failure reverts unavailable and blocks T4 release readiness. |
| `SM-05` | available record stale/withdrawn/invalid | `unavailable` | If changed during session, focus/announce affected action only; static build just renders unavailable. | Remove mailto everywhere. | No cached/private substitute. |
| `SM-06 CV` | no approved artifact | `unavailable` | Non-link plus About recovery; no automatic focus. | No PDF link/sitemap; direct path 404. | No old/source/private file. |
| `SM-06` | approved manifest/artifact valid | `available` | Native file link with type/size/update context. | Exact `/cv/faisal-albalwy-cv.pdf`. | Metadata/accessibility/privacy/hash failure returns unavailable. |
| `SM-06` | available → withdrawn | `withdrawn` | Remove links; if user action failed, announce specific unavailability. | Direct path 404 after integration/cache purge. | About remains safe HTML context. |
| `SM-07 Affiliation/profile groups` | public list empty | `omitted` | No announcement; next DOM content advances. | None. | Remove group heading/link/space together. Text-only affiliation is independent of profile list. |
| `SM-07` | one or more validated records | `available` | Native same-tab links; no duplicate adjacent link to same URL. | Validated HTTPS only. | Any failed item omits; last removal omits group. No icons/logo. |
| `SM-08 Recoverable application error` | user action or page surface reports recoverable error | `error` | Error heading names affected scope; focus after failed user action, not on background build error; alert only if interruption requires it. | No diagnostic query/state route. | Retry once per action, then named Home/Publications recovery. Host 5xx remains public-safe. |
| `SM-09 Offline after load` | online/loaded → offline or external request fails offline | `offline` | Announce only when an attempted action is affected; retain loaded reading/focus. | Local route unchanged. | Retry after connection returns; no false success or dedicated offline route. |
| `SM-10 Optional module` | populated → public records become zero before build | `omitted` | Initial render has no announcement. | Remove fragment/action/in-page link. | If a previously public fragment is requested, use governed parent fallback/tombstone rule; never empty shell. |
| `SM-10` | required module/route becomes substantively empty | `required-route-blocked` | Preview state heading; no private reason. | Noindex/appropriate HTTP intent. | Return to IA/content review; do not auto-omit the route. |
| `SM-11 Citation copy` | available citation → button activate/success | `copied` | Keep button focus; polite `Citation copied.` | None. | Copies visible approved string only; no telemetry. |
| `SM-11` | activate → clipboard unavailable/fails | `copy-failed` | Keep focus; polite inline recovery; citation remains selectable. | None. | NS omits button and leaves citation selectable. |
| `SM-12 Loading` | truthful asynchronous enhancement starts after complete base is unavailable for that sub-action | `loading` | Label affected content; polite only when delay is meaningful; no focus move. | None. | Never used for static route/publication base. Timeout/failure becomes named error; RM has no spinner dependency. |

### 8.2 Query and history invariants

- Filtering reads text/data attributes already present in the public DOM; it performs no fetch, worker, storage, cookie, analytics, or remote request.
- It toggles `hidden` on existing publication records and never uses `innerHTML`, selector interpolation, DOM reordering, client-only records, or hidden non-public fields.
- `replaceState` is the default while normalizing the current committed control set; `pushState` MAY be used for an explicit form submit that represents a shareable user decision. DES-005/BLD-005 must choose one deterministic policy and test Back/Forward; per-keystroke history entries are prohibited.
- Empty/default query is `/publications`. Query variants are noindex/follow and canonicalize to the fragment-free base route.

## 9. Route composition trees

All compositions are DOM order. Brackets denote conditional public modules; omission uses `CMP-020` atomically.

| Route | Composition |
|---|---|
| R1 Home | `001(002,003,004/005,006) → main[010(011-h1,012,013) → 020 Identity → 020 Research(019/018) → [020 Themes] → [020 Stories(023)] → 020 Publications(023×024) → [020 Teaching] → [020 Service] → 020 About/CV(039) → 020 Contact(013)] → 008(009×groups)` |
| R2 Research | `001 shell → main[010 → 016 when ≥3 modules → 020 Purpose → 020 Established themes(019) → [020 Emerging] → [020 Projects(023,021)] → [020 Systems(023,021)] → 020 Collaboration(013) → 020 Related publications(013/014)] → 008` |
| R3 Publications | `001 shell → main[002-results → 010 → 020 Featured(023×024) → 027(028,029×year/type/[theme]) → 030/[031] → 032(023×024(025,021/022,026)) → [036]] → 008`; base HTML places all publish/public records in `032`. |
| R4 Teaching | `001 shell → main[010 → 016 when ≥3 modules → [020 Approach] → 020 Courses(033) → [020 Supervision(023)] → [020 Student themes(023)] → 020 Related routes(013) → 020 Inquiry(037,013)] → 008` |
| R5 Leadership & Service | `001 shell → main[010 → 016 required → [020 Technology leadership(034/035)] → [020 University service(034/035)] → [020 Peer review(023/035)] → [020 Community(023/035)] → [020 Talks/development/memberships(023/035)] → 020 Contact(013)] → 008` |
| R6 About | `001 shell → main[010 → 016 when ≥4 modules → 020 Short bio → [020 Extended bio] → [020 Current roles(035)] → [020 Career(034/035)] → [020 Education(034)] → [020 Recognition(023)] → 020 CV(039) → 020 Related routes(013)] → 008` |
| R7 Contact | `001 shell → main[010 → 020 Guidance(037) → 020 Email(038) → [020 Location] → [020 Profiles(036)] → [020 Affiliation(007)] → 020 Related route(013)] → 008`; no `form` is permitted. |
| R8 CV utility | No HTML route component tree. Entry surfaces compose `039`; an approved PDF is a governed static artifact. Unavailable/withdrawn direct requests resolve through true 404 `040`, never a substitute HTML CV route. |

Composition prohibitions:

- `CMP-018` cannot precede or exist apart from its `CMP-019` claim.
- `CMP-020` cannot render without content merely to preserve layout.
- `CMP-024`, `033`, and `035` cannot be nested in generic cards; record lists cannot become adjacent card walls.
- `CMP-013` cannot wrap a record that already contains another link/button.
- `CMP-016` cannot contain a target whose `CMP-020` is omitted.
- `CMP-027` cannot wrap a network/submitting form action or replace `CMP-032` base HTML.
- `CMP-007` cannot sit inside the nameplate, H1, primary nav, or an equal-weight joint identity container.
- Route intros permit only the route-approved primary/secondary actions; no action cluster may turn every related route into a CTA.

## 10. Exact 31-specimen composition ledger

| Specimen | Component composition / contract proved |
|---|---|
| `WF-G-01` | `001,002,003,004,006,010,013,017,018/019` — wide shell and claim/evidence split. |
| `WF-G-02` | `001,002,003,004,006,010` — tablet wrapping without order change. |
| `WF-G-03` | `001,002,003,005(closed),010` — narrow shell. |
| `WF-G-04` | `001,002,003,005(open),006,010` — menu order/focus contract. |
| `WF-G-05` | `002,003/004/006,013` — focus and T1–T5 action ceiling. |
| `WF-G-06` | `008(009 identity/explore/actions/[profiles]/[007 affiliation])` — footer ordering/omission. |
| `WF-R1-01` | R1 composition in Section 9: `010,020,019/018,023/024,039,013`. |
| `WF-R2-01` | R2: `010,016,020,019/018,021–023,013/014`. |
| `WF-R3-01` | R3 complete: `010,024–030,032`. |
| `WF-R3-02` | R3 active query: `027–032`, `SM-02`. |
| `WF-R4-01` | R4: `010,016,020,023,033,037,013`. |
| `WF-R5-01` | R5: `010,016,020,023,034/035,018,013`. |
| `WF-R6-01` | R6: `010,016,020,023,034/035,039,018,013`. |
| `WF-R7-01` | R7 unavailable: `010,020,037,038(unavailable),015,013`. |
| `WF-R7-02` | R7 available geometry: `010,020,037,038(available)`; only public contact VM may activate it. |
| `WF-R8-01` | `039(available)` with canonical PDF/size/date adjacency. |
| `WF-R8-02` | `039(unavailable),015,013(About)` and `SM-06`. |
| `WF-S-01` | `001,010,040(not-found-404),013` with named recovery. |
| `WF-S-02` | `001,010,040(error),013`, `SM-08`. |
| `WF-S-03` | `020(optional empty-omit)`, `SM-10`; expected output is no module DOM. |
| `WF-S-04` | `001,010,040(required-route-blocked),013`, noindex preview contract. |
| `WF-S-05` | `032(partial),024(partial),021/022,026`; no invented optional field. |
| `WF-S-06` | `027–032(no-results),040(no-results)`, `SM-02/03`. |
| `WF-S-07` | `010,032(data-unavailable),040(error),036`, `SM-03`. |
| `WF-S-08` | `032(no-script),024,026(external only),042`; filters absent/inert and full catalogue present. |
| `WF-S-09` | `001,040(offline),013(retry)`, `SM-09`. |
| `WF-S-10` | owning record + `040(external-failure),013(retry)`, `SM-04`. |
| `WF-M-01` | `042(print-only/screen-only),001 print shell,024/021/018` linearized. |
| `WF-M-02` | `013/014` focus/current states with FC aliases and text cues. |
| `WF-M-03` | `003,010–012,024/025` using FF/NI rules; zero asset reserve. |
| `WF-M-04` | all interactive owners consume RM aliases; state changes complete immediately. |

Coverage result: 31/31 unique `WF-*` specimens map once; every one of the 42 components maps to at least one specimen or an explicit global/route utility in Sections 4, 9, and 10. No component authorizes a new route.

## 11. Responsive and density matrix

| Pressure / fixture | Required behavior | Components / acceptance |
|---|---|---|
| 1440 | Full shell if labels fit; 12-column candidate; 8/1/3 reading/evidence relationship; catalogue may use full canvas. | `001`–`019`, `027`–`032`; `AC-RSP-1440`. |
| 1024 | Groups wrap before type/targets shrink; split rail only if both measures remain readable. | `004/006/017/018`; `AC-RSP-1024`. |
| 768 | Header groups stack or menu activates; rail becomes inline; filters reduce columns. | `005/017/018/027`; `AC-RSP-768`. |
| 390 / 375 / 320 | Full name + Menu; single reading plane; stacked actions/controls/lists; target alias preserved; no page overflow. | All components; `AC-RSP-390`, `-375`, `-320`. |
| 200% text / 400% zoom | Same authoritative single-plane contract, stable DOM/focus order, no clipped/overlapped essential text. | All; `AC-RSP-Z200`, `AC-RSP-Z400`. |
| Long navigation | Preserve full `Leadership & Service`, Contact, and CV state; collapse before abbreviation. | `003`–`006`; `AC-DEN-NAV`. |
| Publications 0/1/27/100 | 0 public is route blocker; 1/27/100 remain complete ordered HTML; controls enhance without pagination/virtualization. | `024`–`032`, `040`; `AC-DEN-PUB-0/1/27/100`. |
| Extreme publication | 180-char title, 12 authors, long venue, 100-char DOI, full status and three actions wrap. | `024`–`026`; `AC-DEN-PUB-LONG`. |
| Filters | Long 200-code-point query; all public years/types/themes; 0/1/100 results; no sort/page/multi-select. | `027`–`032`; `AC-DEN-FILTER`. |
| Research | Four established, two emerging, six project/system fixture records; evidence stays attached; actual non-public data is never used. | `016`–`023`; `AC-DEN-RESEARCH`. |
| Teaching | Exactly the source-density expectation of 19 unique titles plus a six-long-title/three-group stress fixture; no per-course cards or restricted occurrence fields. | `023/033`; `AC-DEN-TEACH`. |
| Leadership/service | 20 mixed records, overlaps/open dates, sparse/empty categories, source-specific non-additive metric labels. | `023/034/035`; `AC-DEN-SERVICE`. |
| About | 900-word bio, 12-event chronology, long organisation/award names, unavailable CV. | `020/023/034/035/039`; `AC-DEN-ABOUT`. |
| Contact | Four guidance categories, long institutional email, email unavailable and failed-profile variants, no form. | `036`–`038/040`; `AC-DEN-CONTACT`. |
| CV | Long file label with verified type/size/update date and unavailable/withdrawn/direct-404 states. | `039/040`; `AC-DEN-CV`. |

Breakpoints are candidate aliases, never device identities. A container/component remains in its narrower safe mode until its real public content fits. No CSS-driven visual order may diverge from DOM order.

## 12. Accessibility and test acceptance matrix

| Obligation | Automated assertion | Later manual assertion | Components / cases |
|---|---|---|---|
| Landmarks/headings | Exactly one main/H1; labelled nav/sections; ordered headings; no duplicate IDs. | Screen-reader landmark/heading navigation is meaningful. | `001`–`012`; `AC-A11Y-SEM`. |
| Names/descriptions | Every control/link has non-empty unique-enough accessible name; persistent labels/descriptions associated. | VoiceOver/NVDA phrasing is concise and unambiguous. | `002`–`006`, `013/014`, `027`–`031`, `038/039`. |
| Current/expanded/selected/disabled | Exactly one route current; Menu `aria-expanded`; native selected/disabled; unavailable is non-link. | Cues remain understandable without color. | `003`–`006`, `013/015`, `022`, `029`. |
| Keyboard/focus | Tab order equals DOM; Escape menu; fragment/clear/error focus destinations; no traps. | Full T1–T8 keyboard walkthrough and browser Back/Forward. | `SM-01/02/04/08/11`; `AC-A11Y-KBD`. |
| Announcements | Live regions exist only after initialization/event; status text updates once; no duplicate alerts. | NVDA/VoiceOver timing and interruption are appropriate. | `030/040`, Section 8; `AC-A11Y-LIVE`. |
| Target size | Computed targets use `ui.interaction.target.default`; exception scan. | Touch accuracy at 320/375 and zoom. | interactive components; `AC-A11Y-TARGET`. |
| Reflow/wrapping | Overflow scan at 1440/1024/768/390/375/320 and zoom fixtures; no ellipsis on essential fields. | Visual reading/evidence adjacency and no overlap at 200%/400%. | all; `AC-A11Y-REFLOW`. |
| Reduced motion | RM media query resolves zero duration/distance; state still completes. | OS preference behavior has no content delay/loss. | `005`, `013`, `027`–`032`, `040`; `AC-A11Y-RM`. |
| Forced colors | System aliases used; borders/underlines/current/focus survive. | Windows High Contrast review. | all interactive/status; `AC-A11Y-FC`. |
| Print | Controls/navigation/loading excluded; H1, records, evidence, citations, visible destinations and context retained. | Chromium plus Safari/Firefox representative print inspection. | `001/008/024/032/040/042`; `AC-A11Y-PR`. |
| No script | Base routes/navigation complete; R3 full public catalogue; enhancement controls absent/neutralized. | Browse every route with JS disabled/failed. | all, especially `005`, `027`–`032`; `AC-A11Y-NS`. |
| Screen-reader order | DOM-order snapshot shows claim before evidence, intro before in-page nav, controls before results, record fields ordered. | VoiceOver + Safari and NVDA + Firefox/Chrome at QA freeze. | `010`–`032`; `AC-A11Y-SR`. |
| Error/recovery | State heading, affected scope, recovery target, programmatic status, HTTP/index intent validate. | Recovery is understandable and focus is not surprising. | `015/040`, SM-03–10; `AC-A11Y-ERR`. |
| External/download | Labels include destination/external/PDF/size/date meaning; same-tab; safe URLs. | Context is clear without icons and in print. | `014`, `026`, `036`, `039`; `AC-A11Y-EXT`. |
| Font/no image | Request/DOM scan finds no required image; system fallback retains layout; no broken reserve. | Font-blocked/image-disabled visual review. | all; `AC-A11Y-FFNI`. |

Automated checks are necessary but cannot certify screen-reader quality, focus comprehension, forced-color appearance, print reading order, touch comfort, or whether an evidence rail still feels attached to its claim. Those remain manual QA-004/005 obligations.

## 13. Security, privacy, rights, and prohibited patterns

The following fail component acceptance:

1. Any prop accepting raw HTML, unreviewed Markdown HTML, arbitrary URL/class/color/icon/SVG/image, or an unrestricted child slot that bypasses composition.
2. Any render of `eligible/internal_only`, held, suppressed, stale, withdrawn, conflicted, rejected, rights/consent-failing, translation-pending, or unregistered-location content.
3. Any claim/source/lineage ID, private path/hash, reviewer note, protected source wording, student/timetable field, private contact value, form data, diagnostic, or hidden factual payload in HTML/data attributes/JSON/client code.
4. A form submission, API, fetch, worker, cookie, local/session storage, IndexedDB, analytics, tracker, error telemetry, remote font/script/media, social embed, CAPTCHA, map, scheduler, or third-party request.
5. A logo, portrait, image reserve, university-derived favicon/icon, invented SVG, icon library, pattern, gradient, chart, metric badge, promotional hero, institutional masthead, joint lockup, or portal-like navigation.
6. A card wall for publications, courses, service, timeline, navigation, or routine prose; nested cards; entire clickable records with nested actions; carousels; masonry; auto-advance; hover-only evidence.
7. Added routes, breadcrumbs, project/publication detail pages, Home primary-nav item, site search, language/theme/login/portal controls, pagination, sort, multi-select filters, or export formats.
8. Truncated titles/authors/DOIs/URLs/email/action labels, hidden primary evidence, fixed heights, breakpoint-only DOM reordering, page horizontal scroll, or abbreviated `Leadership & Service`.
9. Color-only current/status/series meaning, unavailable links masquerading as disabled, focus removal, surprise focus changes, excessive alerts, timed dismissal, or loading that conceals complete static content.
10. Claims of official ownership, endorsement, currentness, availability, impact, quality, totals, response time, funding, partnership, or CV/contact status not carried by the public VM.

## 14. Component acceptance case index and ownership

| Component family | Required case IDs | Primary implementation owner | Integration / QA owner |
|---|---|---|---|
| `CMP-001`–`009` shell | `AC-001`–`AC-009`, `AC-RSP-*`, `AC-A11Y-SEM/KBD/FC/PR/NS/FFNI` | BLD-001 | BLD-008; INT-001/004/005; QA-003/004/005/006/009 |
| `CMP-010`–`020` page composition | `AC-010`–`AC-020`, route trees, `AC-DEN-RESEARCH/ABOUT` | BLD-001 plus BLD-002/004/006/007 by route | BLD-008; QA-002/003/004/009 |
| `CMP-021`–`023` records | `AC-021`–`AC-023`, long/partial/chronology fixtures | BLD-004/005/006/007 | DAT-002/004; QA-002/003/004/005 |
| `CMP-024`–`032` Publications | `AC-024`–`AC-032`, `AC-DEN-PUB-*`, `AC-DEN-FILTER`, SM-02/03/11 | BLD-005 | DAT-002; INT-001/002; QA-001/003/004/005/006 |
| `CMP-033` Teaching | `AC-033`, `AC-DEN-TEACH` | BLD-006 | DAT-002; QA-002/003/004/006 |
| `CMP-034/035` chronology/service | `AC-034/035`, `AC-DEN-SERVICE/ABOUT` | BLD-007 and BLD-003 for About | DAT-002; QA-002/003/004/006 |
| `CMP-036` profiles | `AC-036`, SM-07, external failure | BLD-001/003/005 | DAT-002; INT-001/002; QA-002/004/006 |
| `CMP-037/038` Contact | `AC-037/038`, `AC-DEN-CONTACT`, SM-05 | BLD-003 | INT-004/005; QA-003/004/006 |
| `CMP-039` CV | `AC-039`, `AC-DEN-CV`, SM-06 | BLD-003 | DAT-004; INT-001; QA-002/004/005/006 |
| `CMP-040` states | `AC-040-*`, SM-03/04/08/09/10/12 | BLD-009 | BLD-008; INT-001; QA-001/003/004/006 |
| `CMP-041/042` utilities/modes | `AC-041/042`, all mode cases | BLD-001/009 | QA-003/004/005/009 |

For every `CMP-###`, `AC-###` includes: semantic-root assertion, required-prop success, missing-required-prop failure, optional-field omission, forbidden-prop/type rejection, public-guard negative fixture, long-content fixture, keyboard/focus behavior if interactive, and applicable NS/RM/FC/PR/FF/NI/OF snapshots. Role/name locators are preferred; internal stable record IDs may be used only in restricted test fixtures and never emitted as test instrumentation.

## 15. Controlled limitations and holds

- DAT-002 outputs were not assumed, read, or edited. Exact public VM field names may be adapted once DAT-002 is accepted, but the semantic, lifecycle, omission, and public-boundary contracts here cannot be weakened.
- The current public projection is not presumed to contain the 27 eligible-only publication records, 19 course titles, research themes/relationships, career/service facts, profile links, institutional email, or affiliation. Counts in density fixtures test capacity and are not public claims.
- Projects/systems and metrics may remain empty. Their component capability does not authorize a module, fragment, chart, metric, or Home story.
- Alexandria remains conditional on the governed asset manifest; the system stack is the complete implementation baseline.
- The CV action remains unavailable until DAT-004 and QA approve the one canonical artifact. Email availability remains governed and fail-closed.
- DES-005 owns polished composition and fidelity testing. BLD owns implementation. Native OS/screen-reader, production-browser, CSP/header, bundle, performance, and public-output scans remain QA/integration work.
- A paper component contract cannot determine real-content breakpoint activation, final field density, mail client behavior, external reachability, host HTTP status, PDF accessibility, or human comprehension. It makes those tests deterministic and blocks unsafe fallbacks.

## 16. Validation and traceability record

DES-004 acceptance requires machine-readable checks over this Markdown and the immutable inputs:

| Check | Expected result | DES-004 result |
|---|---:|---:|
| Unique component IDs in registry | 42/42 | Pass — 42/42; no duplicate or gap |
| Named component variants / state entries | 120 / 136 | Pass — family sums reconcile |
| Cross-component state machines | 12 | Pass — `SM-01`–`SM-12` |
| Wireframe IDs discovered in accepted HTML | 31 unique | Pass — 31 unique |
| Wireframe IDs mapped in Section 10 | 31/31; no extras/duplicates | Pass — exact set equality |
| Frozen routes represented | R1–R8; seven HTML compositions plus CV utility | Pass |
| Component reverse coverage | 42/42 map to a specimen or explicit global/route utility | Pass |
| Referenced `ui.*` paths | Every exact path resolves to DES-002 registry; wildcards appear only as documented family shorthand in Section 6 | Pass — zero unresolved exact path |
| Forbidden raw style literals / external URLs / private markers | 0 in component contracts | Pass — zero hits |
| Raw HTML/arbitrary URL/class/color/icon acceptance | 0 components | Pass — universally prohibited by U-02 |
| New code, data, schema, token, asset, route, prototype, or release action | 0 | Pass |

## 17. Exact downstream handoffs

| Work package | Required handoff |
|---|---|
| **DES-005** | Prototype the R1 composition and representative R3/internal/state surfaces using these component IDs, accepted DES-003 hierarchy, exact tokens, real approved public density only, and all responsive/mode contracts. Record any needed component change as a DES-004 revision; do not invent one in the prototype. |
| **DAT-002** | Deliver minimized public view models or a mapping that supplies the Section 7 fields only after `verified/publish/public`; preserve stable fragments, exact enums, relationships, availability/recovery, and omission. Do not store layout/token/component values. |
| **DAT-004** | Supply the one governed CV VM/artifact state, verified size/date/accessibility/privacy/hash, withdrawal behavior, and no private-source exposure required by `CMP-039`. |
| **BLD-001** | Implement `CMP-001`–`009`, shared typography/actions/modes/utilities, exact token bindings, menu/focus/current behavior, and zero-JS semantic shell. |
| **BLD-002** | Compose R1 exactly from Section 9; preserve research-first priority, selection caps, canonical references, and atomic omission. |
| **BLD-003** | Compose R6/R7 and `CMP-038/039`; build only the approved mailto/CV or exact unavailable states; no form/private file/substitute. |
| **BLD-004** | Compose R2 with `CMP-016`–`023`; preserve established/emerging labels, evidence adjacency, stable fragments, and no speculative detail route. |
| **BLD-005** | Implement `CMP-024`–`032` and SM-02/03/11 as bounded vanilla enhancement within the ADR budget; complete public HTML first, no fetch/storage/innerHTML. |
| **BLD-006** | Compose R4 with semantic course/supervision lists; reject timetable/student/room/time/section/delivery fields structurally. |
| **BLD-007** | Compose R5 with category/chronology/service contracts; preserve source-specific non-additive semantics and omit unsupported categories/fragments. |
| **BLD-008** | Integrate all route trees, reverse coverage, token expansion, content-pressure transitions, task ceilings, current state, public projection, and mode parity. |
| **BLD-009** | Implement `CMP-040` and SM-03/04/08/09/10/12, true 404/public-safe error boundaries, optional omission, no diagnostics/media dependency. |
| **INT-001** | Apply canonical/noindex/HTTP/sitemap/fragment/query/PDF behavior from the machines without turning states into routes. |
| **INT-002** | Generate structured data from the same minimized public VMs; component presence is not evidence or publication permission. |
| **INT-003** | Keep social output separately governed, Faisal-first, logo-free, portrait-independent; no in-page component or asset is authorized here. |
| **INT-004** | Implement the exact institutional-email-only boundary, fixed subject, unavailable state, privacy guidance, and zero form/storage/captcha/endpoint. |
| **INT-005** | Enforce zero analytics/tracking; component events and query/history transitions are never telemetry permission. |
| **QA-001** | Validate registry/component integration, unit/state-machine tests, build/output/route/fragment checks, and no unexpected runtime dependency. |
| **QA-003** | Execute all responsive sizes, 200%/400%, menu/query/history/fragment/back-forward, overflow, long-content, offline, and browser matrices. |
| **QA-004** | Execute Section 12 automated/manual WCAG checks, VoiceOver/NVDA, focus/announcements, FC/RM/PR/NS, and future PDF accessibility. |
| **QA-005** | Exercise 0/1/27/100 and other density fixtures, font/no-image/script failure, print, catalogue JS/HTML/request budgets, and layout stability. |
| **QA-006** | Scan props/public output/assets/requests/metadata for lifecycle leaks, internal markers, private data/paths/hashes, arbitrary URLs, forms, tracking, unsafe HTML, and withdrawal failures. |
| **QA-009** | Verify Faisal-first DOM/visual order, subordinate text-only affiliation, exact aliases, system-font completeness, and zero logo/protected/invented identity element on every route/state/mode. |

This package does not begin DES-005 or BLD, edit DAT-002, close G3, implement a component, initialize/configure the app, approve/promote content, create an asset, deploy, change DNS, publish, or begin P9.
