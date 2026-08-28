# Design Tokens

**Work package:** DES-002 v1  
**Status:** Complete proposed UI alias and component-token specification  
**Prepared:** 19 August 2026  
**Concept:** Evidence in the Margins  
**Normative source:** `content/brand/tokens.json`; this document does not replace or modify it

## 1. Scope and decision

This specification translates the approved brand registry and `Evidence in the Margins` direction into deterministic UI aliases for later wireframes, component definitions, and implementation. It creates no university identity primitives. Every color, font, typographic size/weight/line height, spacing step, radius, shadow, border width, target size, chart encoding, motion value, print value, and forced-color value resolves directly to the immutable brand baseline.

The component layer is **Proposed project UI**, not official Taibah University identity. It remains English-only, Faisal-first, research-first, text-affiliated, no-logo, no-image-complete, email-only at launch, and analytics-free by default. This is a specification, not CSS, code, a wireframe, a prototype, or an asset.

## 2. Immutable brand baseline

### 2.1 Integrity record

| Check | Immutable result |
|---|---:|
| Source | `content/brand/tokens.json` |
| SHA-256 | `b19a05775236ea4d649612e425a9f4b9b06faf2f1d3289c589774f955914f0ab` |
| Schema version | `1.0` |
| Families | 16 |
| Tokens | 221 |
| Family alias/dependency entries | 103 |
| String alias edges | 86 |
| Contrast dependency vectors | 17 |
| Direction / language | `ltr` / `en` |

The baseline metadata says `candidate-pending-gate-g0`; the file remains immutable even though G0 was subsequently approved in project governance. DES-002 neither edits that historical metadata nor silently promotes its classifications.

### 2.2 Family reproduction and counts

| Baseline family | Classification | Tokens | Alias/dependency entries |
|---|---|---:|---:|
| `official.color` | Direct | 8 | 0 |
| `project.utility-color` | Proposed | 3 | 0 |
| `derived.contrast` | Derived | 17 | 17 |
| `semantic.color` | Proposed | 54 | 54 |
| `typography` | Proposed | 23 | 4 |
| `spacing` | Proposed | 10 | 0 |
| `layout` | Proposed | 15 | 4 |
| `shape-and-component` | Proposed | 17 | 2 |
| `brand.affiliation` | Proposed | 17 | 3 |
| `icon` | Proposed | 4 | 1 |
| `chart` | Proposed | 20 | 11 |
| `motion` | Proposed | 7 | 0 |
| `forced-colors` | Derived | 5 | 0 |
| `print` | Proposed | 6 | 2 |
| `governance` | Derived | 7 | 0 |
| `unresolved` | Unresolved | 8 | 5 |
| **Total** | Direct 8; Derived 29; Proposed 176; Unresolved 8 | **221** | **103** |

The exact 221 paths are reproduced in Appendix A. The checksum binds the paths to their exact values, units, types, sources, classifications, constraints, and aliases in the canonical JSON; those fields are not copied into a second mutable baseline.

### 2.3 Baseline alias result

- All 81 active string aliases resolve to an existing baseline token and reproduce the target's explicit value.
- All 17 contrast entries resolve as two-token dependency vectors and reproduce the recorded ratios to four decimals.
- Five baseline `unresolved` aliases intentionally carry `null` while naming a conservative fallback: two inactive logo measurements, Tosh licensing, the unsupported deep-navy logo variant, and institutional personal-site clearance. They are historical unresolved records, not active value aliases.
- DES-002 adds no reference to any `unresolved.*` path, no logo/image path, and no chain that depends on Tosh or institutional clearance.

## 3. Registry notation and derivation rules

Each registry row is machine-auditable:

- **Path** is globally unique and begins `ui.`.
- **Type** is the consumer-facing token type.
- **Value / alias** uses `→ source.path` for a direct immutable-baseline reference; a literal is permitted only for a new project layout, behavior, state, ordering, or layer value.
- **Unit** is inherited from the source alias or explicitly stated for a Proposed literal.
- **Class** is `Proposed alias` or `Proposed value`; both are project classifications, never institutional primitives.
- **Rationale** states the content, task, or accessibility pressure.
- **Consumers** names the expected component or mode.

Resolution is one-way: `ui.*` → baseline token. No baseline token points back to `ui.*`; no new alias points to another new alias. A consumer that cannot resolve a `ui.*` path must use its listed baseline target directly. If that also fails, it uses the behavior in Section 9 rather than inventing a raw value.

## 4. Proposed UI token registry

### 4.1 `ui.surface` — 20 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.surface.page` | color | → `color.surface.page` | hex-srgb | Proposed alias | Default calm canvas | Page, reading section |
| `ui.surface.section` | color | → `color.surface.page` | hex-srgb | Proposed alias | Avoid panel wall | Sections |
| `ui.surface.muted` | color | → `color.surface.muted` | hex-srgb | Proposed alias | Bounded secondary context | Filters, loading, table header |
| `ui.surface.inverse` | color | → `color.surface.inverse` | hex-srgb | Proposed alias | One bounded inverse region | Footer |
| `ui.surface.affiliation` | color | → `color.surface.affiliation` | hex-srgb | Proposed alias | Preserve text affiliation | Affiliation block |
| `ui.surface.text.primary` | color | → `color.text.primary` | hex-srgb | Proposed alias | Primary readable text | All light surfaces |
| `ui.surface.text.inverse` | color | → `color.text.inverse` | hex-srgb | Proposed alias | Legal inverse contrast | Footer |
| `ui.surface.link.default` | color | → `color.text.link` | hex-srgb | Proposed alias | Recognizable action | Text links |
| `ui.surface.link.hover` | color | → `color.text.link-hover` | hex-srgb | Proposed alias | Redundant hover state | Text links |
| `ui.surface.link.active` | color | → `color.text.link-active` | hex-srgb | Proposed alias | Redundant active state | Text links |
| `ui.surface.rule.default` | color | → `color.border.decorative` | hex-srgb | Proposed alias | Quiet record separation | Lists, sections |
| `ui.surface.rule.strong` | color | → `color.border.strong` | hex-srgb | Proposed alias | Structural emphasis | Evidence, timeline |
| `ui.surface.rule.control` | color | → `color.border.control` | hex-srgb | Proposed alias | Operable boundary | Inputs, buttons |
| `ui.surface.selection.background` | color | → `color.selection.background` | hex-srgb | Proposed alias | Visible selection | Selected options/text |
| `ui.surface.selection.foreground` | color | → `color.selection.foreground` | hex-srgb | Proposed alias | Legal selected contrast | Selected options/text |
| `ui.surface.focus.on-light` | color | → `color.focus.light` | hex-srgb | Proposed alias | Visible light-surface focus | All controls |
| `ui.surface.focus.on-dark` | color | → `color.focus.dark` | hex-srgb | Proposed alias | Visible inverse focus | Footer controls |
| `ui.surface.focus.action-inner` | color | → `color.focus.action-inner` | hex-srgb | Proposed alias | Separate focus from royal action | Primary action |
| `ui.surface.focus.action-outer` | color | → `color.focus.action-outer` | hex-srgb | Proposed alias | Preserve two-tone focus boundary | Primary action |
| `ui.surface.evidence-accent` | color | → `official.color.royal` | hex-srgb | Proposed alias | Sparse evidence signal | Labels, fragment cue |

### 4.2 `ui.type` — 18 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.type.family` | fontFamily | → `font.family.sans` | css-font-family-list | Proposed alias | Licensed Alexandria/system stack | All text |
| `ui.type.display.size` | dimension | → `font.size.h1` | css-length-expression | Proposed alias | Dominant single page title | Nameplate, H1 |
| `ui.type.display.weight` | fontWeight | → `font.weight.display` | integer | Proposed alias | Faisal-first identity | Nameplate, H1 |
| `ui.type.display.line-height` | number | → `font.line-height.heading` | unitless | Proposed alias | Multiline title integrity | H1 |
| `ui.type.section.size` | dimension | → `font.size.h2` | css-length-expression | Proposed alias | Major module distinction | H2 |
| `ui.type.section.weight` | fontWeight | → `font.weight.heading` | integer | Proposed alias | Stable hierarchy | H2 |
| `ui.type.section.line-height` | number | → `font.line-height.heading` | unitless | Proposed alias | Wrapped heading clarity | H2 |
| `ui.type.item.size` | dimension | → `font.size.h3` | css-length-expression | Proposed alias | Evidence-object title | H3, record title |
| `ui.type.item.weight` | fontWeight | → `font.weight.heading` | integer | Proposed alias | Scan hierarchy | H3, record title |
| `ui.type.item.line-height` | number | → `font.line-height.heading` | unitless | Proposed alias | Long-title wrapping | Records |
| `ui.type.lead.size` | dimension | → `font.size.lead` | rem | Proposed alias | One concise page purpose | Page lead |
| `ui.type.body.size` | dimension | → `font.size.body` | rem | Proposed alias | Baseline readability | Prose, controls |
| `ui.type.body.weight` | fontWeight | → `font.weight.body` | integer | Proposed alias | Normal reading | Prose |
| `ui.type.body.line-height` | number | → `font.line-height.body` | unitless | Proposed alias | Academic reading density | Prose, citations |
| `ui.type.meta.size` | dimension | → `font.size.sm` | rem | Proposed alias | Readable compact metadata | Author, venue, date |
| `ui.type.meta.weight` | fontWeight | → `font.weight.body` | integer | Proposed alias | Avoid over-bold catalogues | Metadata |
| `ui.type.label.weight` | fontWeight | → `font.weight.label` | integer | Proposed alias | Control/source distinction | Labels, actions |
| `ui.type.prose.measure` | dimension | → `font.measure.prose` | ch | Proposed alias | Prevent overlong lines | Bio, research, teaching |

### 4.3 `ui.layout` — 20 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.layout.canvas.max` | dimension | → `layout.content-max` | rem | Proposed alias | Bound scholarly canvas | Global container |
| `ui.layout.prose.max` | dimension | → `layout.prose-max` | ch | Proposed alias | Preserve reading measure | Prose blocks |
| `ui.layout.gutter` | dimension | → `layout.gutter` | css-length-expression | Proposed alias | Fluid safe edge | All routes |
| `ui.layout.section.gap` | dimension | → `layout.section-space` | css-length-expression | Proposed alias | Module hierarchy | Page sections |
| `ui.layout.grid.compact` | number | → `layout.columns.compact` | integer | Proposed alias | Mobile-first structure | Base grid |
| `ui.layout.grid.medium` | number | → `layout.columns.medium` | integer | Proposed alias | Selective split | Intermediate grid |
| `ui.layout.grid.wide` | number | → `layout.columns.wide` | integer | Proposed alias | Claim/evidence plane | Wide grid |
| `ui.layout.condition.inline-candidate` | dimension | → `breakpoint.compact` | rem | Proposed alias | First content-fit test | Small component query |
| `ui.layout.condition.split-candidate` | dimension | → `breakpoint.medium` | rem | Proposed alias | Evidence split candidate | Container/media query |
| `ui.layout.condition.wide-candidate` | dimension | → `breakpoint.wide` | rem | Proposed alias | Wide scholarly candidate | Global media query |
| `ui.layout.condition.max-candidate` | dimension | → `breakpoint.max` | rem | Proposed alias | Stop canvas growth | Global media query |
| `ui.layout.plane.base.columns` | number | 1 | grid-column-count | Proposed value | One plane under pressure | Compact routes |
| `ui.layout.plane.reading.span` | number | 8 | grid-column-span | Proposed value | Dominant claim plane | Wide content |
| `ui.layout.plane.evidence.span` | number | 3 | grid-column-span | Proposed value | Subordinate proof rail | Wide content |
| `ui.layout.plane.separation.span` | number | 1 | grid-column-span | Proposed value | Prevent competing columns | Wide content |
| `ui.layout.column.gap` | dimension | → `space.6` | rem | Proposed alias | Separate related planes | Grid |
| `ui.layout.stack.gap` | dimension | → `space.5` | rem | Proposed alias | Compact semantic grouping | Base layout |
| `ui.layout.cluster.gap` | dimension | → `space.3` | rem | Proposed alias | Related labels/actions | Action clusters |
| `ui.layout.reflow.test-min` | dimension | 20 | rem | Proposed value | Explicit 320px test floor | QA, wireframes |
| `ui.layout.zoom.test-text` | number | 2 | scale-ratio | Proposed value | Explicit 200% text test | QA, wireframes |

The 400% browser-zoom test is a validation condition rather than a layout activation token: it must exercise the same single-plane contract as `ui.layout.reflow.test-min`.

### 4.4 `ui.shell` — 12 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.shell.header.background` | color | → `color.surface.page` | hex-srgb | Proposed alias | Keep identity personal/light | Header |
| `ui.shell.header.foreground` | color | → `color.text.primary` | hex-srgb | Proposed alias | Readable name/navigation | Header |
| `ui.shell.header.border` | color | → `color.border.decorative` | hex-srgb | Proposed alias | Quiet shell boundary | Header |
| `ui.shell.header.padding-block` | dimension | → `space.4` | rem | Proposed alias | Zoom-safe breathing room | Header |
| `ui.shell.header.gap` | dimension | → `space.5` | rem | Proposed alias | Separate name and navigation | Header |
| `ui.shell.menu.background` | color | → `color.surface.page` | hex-srgb | Proposed alias | No new overlay color | Mobile menu |
| `ui.shell.menu.gap` | dimension | → `space.2` | rem | Proposed alias | Distinct full-size targets | Mobile menu |
| `ui.shell.menu.padding` | dimension | → `space.4` | rem | Proposed alias | Edge safety | Mobile menu |
| `ui.shell.footer.background` | color | → `color.surface.inverse` | hex-srgb | Proposed alias | One bounded inverse region | Footer |
| `ui.shell.footer.foreground` | color | → `color.text.inverse` | hex-srgb | Proposed alias | Legal inverse content | Footer |
| `ui.shell.footer.group-gap` | dimension | → `space.7` | rem | Proposed alias | Preserve five group order | Footer |
| `ui.shell.affiliation.background` | color | → `color.surface.affiliation` | hex-srgb | Proposed alias | Separate subordinate text block | Footer affiliation |

### 4.5 `ui.evidence` — 10 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.evidence.rail.rule-color` | color | → `color.border.strong` | hex-srgb | Proposed alias | Visible claim/proof relationship | Evidence rail |
| `ui.evidence.rail.rule-width` | dimension | → `border.width.standard` | rem | Proposed alias | Restraint, not a panel | Evidence rail |
| `ui.evidence.rail.padding-inline` | dimension | → `space.5` | rem | Proposed alias | Separate evidence from rule | Evidence rail |
| `ui.evidence.rail.item-gap` | dimension | → `space.3` | rem | Proposed alias | Compact factual rhythm | Evidence rail |
| `ui.evidence.inline.gap` | dimension | → `space.3` | rem | Proposed alias | Preserve adjacency after collapse | Inline evidence |
| `ui.evidence.label.size` | dimension | → `font.size.sm` | rem | Proposed alias | Labels remain readable | Source/status labels |
| `ui.evidence.label.weight` | fontWeight | → `font.weight.label` | integer | Proposed alias | Distinguish label from value | Source/status labels |
| `ui.evidence.fragment.scroll-margin` | dimension | → `space.9` | rem | Proposed alias | Keep anchored record visible | Project/publication target |
| `ui.evidence.fragment.focus-color` | color | → `color.focus.light` | hex-srgb | Proposed alias | Non-color-only target cue | Fragment target |
| `ui.evidence.unavailable.accent` | color | → `color.status.error.accent` | hex-srgb | Proposed alias | Honest unavailable evidence | Source/CV/external failure |

### 4.6 `ui.content` — 16 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.content.record.rule-color` | color | → `color.border.decorative` | hex-srgb | Proposed alias | Separate without cards | Publication/project rows |
| `ui.content.record.rule-width` | dimension | → `border.width.standard` | rem | Proposed alias | Quiet catalogue rhythm | Records |
| `ui.content.record.padding-block` | dimension | → `space.5` | rem | Proposed alias | Long metadata breathing room | Records |
| `ui.content.record.gap` | dimension | → `space.2` | rem | Proposed alias | Bind title and evidence | Records |
| `ui.content.list.gap` | dimension | → `space.4` | rem | Proposed alias | Scannable grouped evidence | Lists |
| `ui.content.card.background` | color | → `color.surface.page` | hex-srgb | Proposed alias | Selected story containment | Feature card |
| `ui.content.card.border-color` | color | → `color.border.strong` | hex-srgb | Proposed alias | Card without elevation | Feature card |
| `ui.content.card.border-width` | dimension | → `border.width.standard` | rem | Proposed alias | Restrained boundary | Feature card |
| `ui.content.card.radius` | dimension | → `radius.sm` | rem | Proposed alias | Avoid generic rounded tiles | Feature card |
| `ui.content.card.shadow` | shadow | → `elevation.none` | css-box-shadow | Proposed alias | Prevent dashboard aesthetic | Feature card |
| `ui.content.card.padding` | dimension | → `space.5` | rem | Proposed alias | Story readability | Feature card |
| `ui.content.card.max-adjacent` | number | 3 | item-count | Proposed value | DES-001 selection cap | Home stories |
| `ui.content.timeline.rule-color` | color | → `color.border.strong` | hex-srgb | Proposed alias | Chronology support | Timeline |
| `ui.content.timeline.rule-width` | dimension | → `border.width.standard` | rem | Proposed alias | Rule remains subordinate | Timeline |
| `ui.content.timeline.gap` | dimension | → `space.5` | rem | Proposed alias | Long role/date wrapping | Timeline |
| `ui.content.callout.padding` | dimension | → `space.5` | rem | Proposed alias | Bounded recovery/context | Callout |

Lists are the default scholarly record form. Tables use the same record/rule tokens but only for genuine column comparison; timelines use the timeline tokens only when verified dates create a chronology. Callouts obtain colors from `ui.feedback.*`. Figures obtain visual encodings from `ui.graphic.*`.

### 4.7 `ui.catalogue` — 14 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.catalogue.filter.background` | color | → `color.surface.muted` | hex-srgb | Proposed alias | Bind controls as one task | Publication filters |
| `ui.catalogue.filter.padding` | dimension | → `space.4` | rem | Proposed alias | Control spacing | Filter group |
| `ui.catalogue.filter.gap` | dimension | → `space.4` | rem | Proposed alias | Labels and fields remain distinct | Filter group |
| `ui.catalogue.filter.columns.base` | number | 1 | grid-column-count | Proposed value | Mobile-first stack | Filter group |
| `ui.catalogue.filter.columns.medium` | number | 2 | grid-column-count | Proposed value | Fit long labels safely | Filter group |
| `ui.catalogue.filter.columns.wide` | number | 4 | grid-column-count | Proposed value | Four frozen query keys | Filter group |
| `ui.catalogue.input.target` | dimension | → `component.target.default` | rem | Proposed alias | Touch/zoom operability | Search/select/reset |
| `ui.catalogue.input.border` | dimension | → `component.input.border-width` | rem | Proposed alias | Recognizable control | Search/select |
| `ui.catalogue.input.radius` | dimension | → `radius.sm` | rem | Proposed alias | Controlled softness | Search/select |
| `ui.catalogue.results.gap` | dimension | → `space.4` | rem | Proposed alias | Separate summary/catalogue | Results |
| `ui.catalogue.query.order` | string | q,year,type,theme | ordered-key-list | Proposed value | Stable shareable state | URL/filter controller |
| `ui.catalogue.record.gap` | dimension | → `space.2` | rem | Proposed alias | Dense complete citation | Publication row |
| `ui.catalogue.record.padding-block` | dimension | → `space.5` | rem | Proposed alias | Long citation separation | Publication row |
| `ui.catalogue.no-results.accent` | color | → `color.status.empty.foreground` | hex-srgb | Proposed alias | Honest zero state | No-results panel |

The four-column token is a maximum, not a command. A container query may activate two or four columns only when real labels, values, validation, and 2.75rem targets fit. Search, filter, and results remain one task sequence; there is no token for pagination, multi-select, or sort.

### 4.8 `ui.interaction` — 31 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.interaction.target.default` | dimension | → `component.target.default` | rem | Proposed alias | Preferred operable target | All controls |
| `ui.interaction.target.minimum` | dimension | → `component.target.aa-minimum` | rem | Proposed alias | Exception-aware AA floor | Inline targets |
| `ui.interaction.focus.width` | dimension | → `component.focus.width` | rem | Proposed alias | Visible keyboard focus | All controls |
| `ui.interaction.focus.offset` | dimension | → `component.focus.offset` | rem | Proposed alias | Separate ring from edge | All controls |
| `ui.interaction.link.underline` | dimension | → `component.link.underline-default` | rem | Proposed alias | Non-color link cue | Text links |
| `ui.interaction.link.underline-hover` | dimension | → `component.link.underline-hover` | rem | Proposed alias | Redundant hover cue | Text links |
| `ui.interaction.press-offset` | dimension | → `component.press-offset` | rem | Proposed alias | Bounded active feedback | Buttons |
| `ui.interaction.radius` | dimension | → `radius.sm` | rem | Proposed alias | Consistent controls | Button/input/menu |
| `ui.interaction.primary.background` | color | → `color.action.primary.background` | hex-srgb | Proposed alias | Dominant route action | Primary button |
| `ui.interaction.primary.foreground` | color | → `color.action.primary.foreground` | hex-srgb | Proposed alias | Legal primary contrast | Primary button |
| `ui.interaction.primary.hover-background` | color | → `color.action.primary.hover-background` | hex-srgb | Proposed alias | Visible hover/active | Primary button |
| `ui.interaction.primary.hover-foreground` | color | → `color.action.primary.hover-foreground` | hex-srgb | Proposed alias | Preserve hover contrast | Primary button |
| `ui.interaction.primary.active-background` | color | → `color.action.primary.active-background` | hex-srgb | Proposed alias | Explicit pressed state | Primary button |
| `ui.interaction.primary.active-foreground` | color | → `color.action.primary.active-foreground` | hex-srgb | Proposed alias | Preserve active contrast | Primary button |
| `ui.interaction.secondary.background` | color | → `color.action.secondary.background` | hex-srgb | Proposed alias | Lower-priority action | Secondary button |
| `ui.interaction.secondary.foreground` | color | → `color.action.secondary.foreground` | hex-srgb | Proposed alias | Legal secondary text | Secondary button |
| `ui.interaction.secondary.border` | color | → `color.action.secondary.border` | hex-srgb | Proposed alias | Explicit boundary | Secondary button |
| `ui.interaction.secondary.hover-background` | color | → `color.action.secondary.hover-background` | hex-srgb | Proposed alias | Visible hover surface | Secondary button |
| `ui.interaction.secondary.hover-foreground` | color | → `color.action.secondary.hover-foreground` | hex-srgb | Proposed alias | Preserve hover text | Secondary button |
| `ui.interaction.secondary.active-background` | color | → `color.action.secondary.active-background` | hex-srgb | Proposed alias | Explicit pressed surface | Secondary button |
| `ui.interaction.secondary.active-foreground` | color | → `color.action.secondary.active-foreground` | hex-srgb | Proposed alias | Preserve pressed contrast | Secondary button |
| `ui.interaction.secondary.active-border` | color | → `color.action.secondary.active-border` | hex-srgb | Proposed alias | Redundant pressed boundary | Secondary button |
| `ui.interaction.selected.background` | color | → `color.action.selected.background` | hex-srgb | Proposed alias | Explicit selected control | Filter/menu option |
| `ui.interaction.selected.foreground` | color | → `color.action.selected.foreground` | hex-srgb | Proposed alias | Legal selected contrast | Filter/menu option |
| `ui.interaction.disabled.background` | color | → `color.action.disabled.background` | hex-srgb | Proposed alias | Visible unavailable state | Disabled control |
| `ui.interaction.disabled.foreground` | color | → `color.action.disabled.foreground` | hex-srgb | Proposed alias | Readable reason/status | Disabled control |
| `ui.interaction.disabled.border` | color | → `color.action.disabled.border` | hex-srgb | Proposed alias | Keep disabled boundary visible | Disabled control |
| `ui.interaction.input.background` | color | → `color.surface.page` | hex-srgb | Proposed alias | Readable field surface | Search/form control |
| `ui.interaction.input.foreground` | color | → `color.text.primary` | hex-srgb | Proposed alias | Readable entered value | Search/form control |
| `ui.interaction.input.border` | color | → `color.border.control` | hex-srgb | Proposed alias | Recognizable field boundary | Search/form control |
| `ui.interaction.input.error-border` | color | → `color.status.error.accent` | hex-srgb | Proposed alias | Redundant invalid boundary | Search/form control |

Disabled appearance never replaces the native/programmatic disabled state and explanatory text. External and download actions use the same tokens as links/buttons plus visible `(external)`, `PDF`, size, revision, or unavailable text; no icon is required. Contact uses a link/button contract only—there is no form at launch.

### 4.9 `ui.feedback` — 18 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.feedback.info.background` | color | → `color.status.info.background` | hex-srgb | Proposed alias | Neutral explanation | Information callout |
| `ui.feedback.info.foreground` | color | → `color.status.info.foreground` | hex-srgb | Proposed alias | Readable information | Information callout |
| `ui.feedback.info.accent` | color | → `color.status.info.accent` | hex-srgb | Proposed alias | Redundant state accent | Information callout |
| `ui.feedback.success.background` | color | → `color.status.success.background` | hex-srgb | Proposed alias | Confirm completed action | Success callout |
| `ui.feedback.success.foreground` | color | → `color.status.success.foreground` | hex-srgb | Proposed alias | Avoid teal body text | Success callout |
| `ui.feedback.success.accent` | color | → `color.status.success.accent` | hex-srgb | Proposed alias | Approved teal accent only | Success callout |
| `ui.feedback.warning.background` | color | → `color.status.warning.background` | hex-srgb | Proposed alias | High-visibility caveat | Warning callout |
| `ui.feedback.warning.foreground` | color | → `color.status.warning.foreground` | hex-srgb | Proposed alias | Legal warning contrast | Warning callout |
| `ui.feedback.warning.accent` | color | → `color.status.warning.accent` | hex-srgb | Proposed alias | Preserve non-color boundary | Warning callout |
| `ui.feedback.error.background` | color | → `color.status.error.background` | hex-srgb | Proposed alias | Calm recovery surface | Error/unavailable |
| `ui.feedback.error.foreground` | color | → `color.status.error.foreground` | hex-srgb | Proposed alias | Legal error contrast | Error/unavailable |
| `ui.feedback.error.accent` | color | → `color.status.error.accent` | hex-srgb | Proposed alias | Explicit affected boundary | Error/unavailable |
| `ui.feedback.loading.background` | color | → `color.status.loading.background` | hex-srgb | Proposed alias | Stable reserved region | Loading |
| `ui.feedback.loading.foreground` | color | → `color.status.loading.foreground` | hex-srgb | Proposed alias | Textual progress | Loading |
| `ui.feedback.loading.accent` | color | → `color.status.loading.accent` | hex-srgb | Proposed alias | Optional nonessential cue | Loading |
| `ui.feedback.empty.background` | color | → `color.status.empty.background` | hex-srgb | Proposed alias | Honest absence | Empty/no-results |
| `ui.feedback.empty.foreground` | color | → `color.status.empty.foreground` | hex-srgb | Proposed alias | Readable absence | Empty/no-results |
| `ui.feedback.panel.padding` | dimension | → `space.5` | rem | Proposed alias | Recovery action clarity | All status panels |

### 4.10 `ui.graphic` — 10 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.graphic.marker.size` | dimension | → `icon.size.compact` | rem | Proposed alias | Small CSS-only data mark | Evidence, figure |
| `ui.graphic.marker.border` | color | → `chart.fill.required-outline` | hex-srgb | Proposed alias | Non-text contrast | Filled markers |
| `ui.graphic.series.1.marker` | string | → `chart.series.1.marker` | identifier | Proposed alias | Shape redundancy | Figure |
| `ui.graphic.series.2.marker` | string | → `chart.series.2.marker` | identifier | Proposed alias | Shape redundancy | Figure |
| `ui.graphic.series.3.marker` | string | → `chart.series.3.marker` | identifier | Proposed alias | Shape redundancy | Figure |
| `ui.graphic.series.4.marker` | string | → `chart.series.4.marker` | identifier | Proposed alias | Shape redundancy | Figure |
| `ui.graphic.series.1.dash` | string | → `chart.series.1.dash` | svg-stroke-dasharray | Proposed alias | Line redundancy | Figure |
| `ui.graphic.series.2.dash` | string | → `chart.series.2.dash` | svg-stroke-dasharray | Proposed alias | Line redundancy | Figure |
| `ui.graphic.series.3.dash` | string | → `chart.series.3.dash` | svg-stroke-dasharray | Proposed alias | Line redundancy | Figure |
| `ui.graphic.series.4.dash` | string | → `chart.series.4.dash` | svg-stroke-dasharray | Proposed alias | Line redundancy | Figure |

Figure series colors, axes, labels, fills, and background use the baseline `chart.*` tokens directly. Generic circles, squares, triangles, diamonds, rules, and brackets may be produced by ordinary layout/CSS geometry; there is no SVG, image, logo, icon-font, protected pattern, or custom motif token.

### 4.11 `ui.layer-motion` — 12 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.layer-motion.layer.base` | number | 0 | z-index | Proposed value | Normal document flow | Page |
| `ui.layer-motion.layer.sticky` | number | 10 | z-index | Proposed value | Keep safe sticky shell above content | Header |
| `ui.layer-motion.layer.menu` | number | 20 | z-index | Proposed value | Keep disclosed navigation coherent | Menu |
| `ui.layer-motion.layer.overlay` | number | 30 | z-index | Proposed value | Bound optional modal layer | Overlay |
| `ui.layer-motion.layer.focus` | number | 40 | z-index | Proposed value | Keep focus above adjacent layers | Focused control |
| `ui.layer-motion.layer.skip-link` | number | 50 | z-index | Proposed value | Keep recovery control foremost | Skip link |
| `ui.layer-motion.motion.fast` | duration | → `motion.duration.fast` | ms | Proposed alias | Hover/focus response | Links, buttons |
| `ui.layer-motion.motion.standard` | duration | → `motion.duration.standard` | ms | Proposed alias | Menu/state response | Menu, status |
| `ui.layer-motion.motion.slow` | duration | → `motion.duration.slow` | ms | Proposed alias | Bounded disclosure only | Details |
| `ui.layer-motion.motion.easing` | cubicBezier | → `motion.easing.standard` | css-easing-function | Proposed alias | Consistent optional motion | Interactive states |
| `ui.layer-motion.motion.distance.max` | dimension | → `motion.distance.max` | rem | Proposed alias | Prevent disruptive movement | Press/disclosure |
| `ui.layer-motion.motion.shadow.overlay` | shadow | → `elevation.overlay-low` | css-box-shadow | Proposed alias | Boundary only when needed | Menu/overlay |

The layer numbers are isolated project stacking slots, not a visual hierarchy and not university primitives. Components must avoid creating new stacking contexts unless required. Motion never carries meaning; parallax, carousel rotation, scroll-jacking, decorative video, and animated counters have no tokens.

### 4.12 `ui.mode-resilience` — 22 tokens

| Path | Type | Value / alias | Unit | Class | Rationale | Consumers |
|---|---|---|---|---|---|---|
| `ui.mode-resilience.print.surface` | color | → `print.surface` | hex-srgb | Proposed alias | Clean print canvas | All printed routes |
| `ui.mode-resilience.print.text` | color | → `print.text` | hex-srgb | Proposed alias | High-contrast output | Printed content |
| `ui.mode-resilience.print.link-decoration` | string | → `print.link.decoration` | css-keyword | Proposed alias | Preserve link identity | Printed links |
| `ui.mode-resilience.print.shadow` | shadow | → `print.shadow` | css-box-shadow | Proposed alias | Remove elevation | Printed components |
| `ui.mode-resilience.print.logo-display` | string | → `print.logo.display` | css-display | Proposed alias | Enforce no-logo output | Print |
| `ui.mode-resilience.print.pattern-display` | string | → `print.pattern.display` | css-display | Proposed alias | Enforce no protected pattern | Print |
| `ui.mode-resilience.forced.surface` | color | → `forced-color.surface` | css-system-color | Proposed alias | User-controlled canvas | Forced colors |
| `ui.mode-resilience.forced.text` | color | → `forced-color.text` | css-system-color | Proposed alias | User-controlled text | Forced colors |
| `ui.mode-resilience.forced.link` | color | → `forced-color.link` | css-system-color | Proposed alias | Recognizable links | Forced colors |
| `ui.mode-resilience.forced.border` | color | → `forced-color.border` | css-system-color | Proposed alias | Preserve boundaries | Forced colors |
| `ui.mode-resilience.forced.focus` | color | → `forced-color.focus` | css-system-color | Proposed alias | Preserve keyboard focus | Forced colors |
| `ui.mode-resilience.reduced.duration` | duration | → `motion.reduced.duration` | ms | Proposed alias | Remove animation | Reduced motion |
| `ui.mode-resilience.reduced.distance` | dimension | → `motion.reduced.distance` | rem | Proposed alias | Remove displacement | Reduced motion |
| `ui.mode-resilience.font.display` | string | → `font.display` | css-keyword | Proposed alias | Show fallback immediately | Font loading |
| `ui.mode-resilience.font.family` | fontFamily | → `font.family.sans` | css-font-family-list | Proposed alias | Preserve hierarchy on failure | Font failure |
| `ui.mode-resilience.contact.mode` | string | → `governance.contact.mode` | identifier | Proposed alias | Preserve email-only launch | Contact |
| `ui.mode-resilience.analytics.enabled` | boolean | → `governance.analytics.third-party.enabled` | boolean | Proposed alias | Preserve no-analytics default | Global behavior |
| `ui.mode-resilience.image.required` | boolean | false | boolean | Proposed value | No-image completeness | Every route/state |
| `ui.mode-resilience.script.core-required` | boolean | false | boolean | Proposed value | Core content without enhancement | Catalogue, navigation |
| `ui.mode-resilience.safe-area.top` | string | safe-area-inset-top | css-env-key | Proposed value | Protect top-edge controls | Shell |
| `ui.mode-resilience.safe-area.inline` | string | safe-area-inset-left/right | css-env-key-pair | Proposed value | Protect logical gutters | Shell, canvas |
| `ui.mode-resilience.safe-area.bottom` | string | safe-area-inset-bottom | css-env-key | Proposed value | Protect footer/menu actions | Shell |

Safe-area values are environmental inputs. Later implementation combines them with `ui.layout.gutter`; it must never replace the minimum readable gutter with a smaller inset. In right-to-left future work, the inline pair would require a separately governed direction review; launch remains English LTR.

## 5. New-token count and classification

| Proposed family | Aliases | Literal values | Total |
|---|---:|---:|---:|
| `ui.surface` | 20 | 0 | 20 |
| `ui.type` | 18 | 0 | 18 |
| `ui.layout` | 14 | 6 | 20 |
| `ui.shell` | 12 | 0 | 12 |
| `ui.evidence` | 10 | 0 | 10 |
| `ui.content` | 15 | 1 | 16 |
| `ui.catalogue` | 10 | 4 | 14 |
| `ui.interaction` | 31 | 0 | 31 |
| `ui.feedback` | 18 | 0 | 18 |
| `ui.graphic` | 10 | 0 | 10 |
| `ui.layer-motion` | 6 | 6 | 12 |
| `ui.mode-resilience` | 17 | 5 | 22 |
| **Total** | **181** | **22** | **203** |

All 203 are classified Proposed. The 181 aliases terminate directly in the 221-token baseline. The 22 literals are limited to grid spans/counts, validation dimensions/ratios, ordered query keys, card-count cap, z-index slots, resilience booleans, and safe-area environment keys. No literal is a color, font, spacing distance used for styling, radius, border width, shadow, motion duration/easing/distance, logo/media path, or protected geometry.

## 6. Responsive and content-pressure contract

The base state is a single reading plane with evidence inline after its claim. Candidate transitions are tested in this order:

1. **Single plane:** always valid; used at 320px, 400% zoom, and whenever content fit fails.
2. **Inline-capable grouping:** after the compact candidate, only small clusters such as related actions may share a row if every label wraps safely and targets remain 2.75rem.
3. **Split claim/evidence plane:** after the medium candidate, activate only when a container can support the 8/1/3 composition without pushing prose beyond 68ch or evidence below its readable width.
4. **Wide scholarly canvas:** after the wide candidate, use the 12-column composition; stop growth at the 75rem canvas even if the viewport exceeds the max candidate.

A **media query** is appropriate for global canvas, print, forced colors, reduced motion, and broad shell mode. A **container query** is appropriate for a filter group, evidence pair, record action group, card group, table wrapper, or footer group whose available width may differ from the viewport. The tokenized breakpoint is only a candidate; content fit is the activation condition. If real approved content fails, remain in the narrower mode or revise the Proposed alias in a versioned DES-002 update. Do not alter IA order, abbreviate labels, shrink type, or create an ad hoc breakpoint in implementation.

At 200% text zoom and 400% browser zoom, the single-plane behavior is authoritative. Long English labels, titles, authors, role names, emails, URLs, and DOIs wrap. No component uses a fixed block size. Only a genuinely comparative table may scroll on the inline axis, inside a labelled region with an accessible alternative; the page and publication records never scroll horizontally.

Sticky/condensed header behavior is optional. It may consume `ui.layer-motion.layer.sticky` only after testing that focus, fragments, browser-find results, skip destinations, 320px reflow, and zoom are unobscured. Otherwise the header remains in normal flow.

## 7. Component-to-token and behavior matrix

| Component | Core tokens | Surfaces / density | State and input contract | Modes and fallback |
|---|---|---|---|---|
| Page/canvas | `ui.surface.*`, `ui.type.*`, `ui.layout.*` | White reading plane, 68ch prose, section rhythm | Skip link precedes shell; DOM follows IA | Single plane at pressure; print/forced modes resolve through `ui.mode-resilience` |
| Header/navigation | `ui.shell.header.*`, `ui.interaction.*`, `ui.layer-motion.layer.*` | Light, no fixed height; full labels | Current state uses text/underline plus programmatic state; focus never clipped | Collapse before abbreviation; sticky only after safety test; normal-flow fallback |
| Menu | `ui.shell.menu.*`, target/focus, `ui.layer-motion.layer.menu`, motion | Single-column target list | Opening keeps focus on trigger; Tab enters list; Escape closes; disabled absent | Zero-duration reduced motion; forced borders; inline navigation fallback if script fails |
| Footer/affiliation | `ui.shell.footer.*`, `ui.shell.affiliation.*` | One inverse region; affiliation white and subordinate | Same-tab named external links; no icon-only action | Linear print; text-only under every failure; no logo |
| Evidence pair | `ui.evidence.*`, `ui.layout.plane.*` | Split only with fit; otherwise inline | Claim precedes evidence in DOM; fragments focus without permanent tab stop | Rule maps to forced border; print evidence follows claim; no script needed |
| List/record/citation | `ui.content.record.*`, list/type/evidence tokens | Catalogue density; no card shell | Full wrapping; link hover/active/focus; unavailable action removed or explained | One column; print preserves citation/source; local metadata survives external failure |
| Feature card | `ui.content.card.*` | Maximum three adjacent; selected stories only | Explicit target, focus boundary, no nested ambiguous target | Stacks under pressure; no shadow in print; content survives CSS failure |
| Timeline | `ui.content.timeline.*`, evidence/type tokens | Verified dated records only | Chronology stated in text; link states standard | Becomes semantic list; rule optional in forced colors/print |
| Table | record/rule/type/layout tokens | Comparison only; caption mandatory | Header/row semantics; keyboard-accessible overflow only when needed | Collapse to labelled records or use labelled one-axis region plus alternative |
| Figure/metric | `ui.graphic.*`, baseline `chart.*`, type/evidence tokens | Direct labels, sources, scope | No hover-only values; markers/dashes/text duplicate color | Data alternative; system colors/shape in forced mode; grayscale-safe print |
| Publication filters/search | `ui.catalogue.filter/input.*`, interaction/focus | One, two, or at most four columns by fit | Persistent labels; q/year/type/theme only; keyboard native; errors adjacent | Complete catalogue remains without script; controls omitted in print, criteria retained |
| Results/catalogue | `ui.catalogue.results/record.*`, feedback tokens | Compact rows, newest-first contract | Results count announced; focus stays; fragments and actions wrap | Loading stable; no-results retains controls/reset; data failure retains profiles |
| Primary/secondary action | `ui.interaction.*`, motion/reduced tokens | At most route-permitted dominant choices | Hover, active, keyboard focus, disabled semantics and text | Same meaning with zero motion, forced colors, print link text |
| Download/external action | Interaction plus type/evidence tokens | Adjacent PDF/size/date or `(external)` | Same tab; missing CV becomes non-link; icon never sole cue | Print destination context; external failure keeps local evidence |
| Contact | Interaction, feedback, shell/type tokens | Email-only; no form fields | Verified `mailto` or explicit unavailable state; large selectable target | No private substitute, script, map, scheduler, or analytics dependency |
| Callout/status | `ui.feedback.*`, callout padding, type tokens | Bounded information/recovery, not routine content | Heading, state word, affected content, recovery, announced status | Text/border survives forced colors/print; no color-only meaning |
| 404/error/empty/loading/no-results | Feedback, shell, interaction, layer/motion | Stable shell and one recovery hierarchy | Correct status semantics; no unexpected focus move; retry/reset named | No media dependency; zero motion; noindex/HTTP behavior remains implementation work |

### Interaction minimums

- Default target is `ui.interaction.target.default` (2.75rem). The 1.5rem AA minimum is exception-aware, not a compact-density target.
- Light focus uses a 3px-equivalent approved outline and offset. Dark focus uses the approved sky/system mapping. Royal actions use the approved inner/outer focus colors where a single ring is insufficient.
- Hover and active cues combine text/boundary/underline changes with color. Disabled, error, loading, selection, current route, and availability always have programmatic and textual cues.
- The auxiliary `font.size.xs` baseline token is intentionally not aliased into the active UI registry; it cannot carry links, errors, evidence needed to identify a record, or form help.

## 8. Density-case mapping

All twelve DES-001 cases are mandatory downstream capacity tests. Test content is labelled and never becomes a public claim.

| Case | Required tokens / contracts | Pass condition |
|---:|---|---|
| 1. Home nameplate and three-line descriptor | `ui.type.display.*`, body/lead, canvas/gutter, reflow/font resilience | Complete at 320px, 200% text, 400% zoom, and font failure with no image reserve |
| 2. Full navigation labels and utilities | Shell, target/focus, layout conditions, menu/layer/motion | Inline only when fit; collapsed order and full `Leadership & Service` label preserved |
| 3. Extreme publication record | Item/body/meta type, record/evidence/catalogue, link/target | 180-character title, 12 authors, long venue, 100-character DOI, metadata, and three actions wrap without clipping |
| 4. Filter/result extremes | Catalogue tokens, feedback loading/empty/error, focus/target | q/year/type/theme only; long query, option sets, 0/1/100+ results; no pagination/multi-select/sort |
| 5. Dense Research page | Claim/evidence planes, list/card limits, fragment tokens | 4 established, 2 emerging, 6 projects; evidence holds remain explicit; fragment is visible/focusable |
| 6. Dense Teaching page | Type/list/record/callout/feedback tokens | Six long course records and three groups stack without cards, schedules, students, or inferred availability |
| 7. Dense Leadership & Service | List/timeline/evidence/type tokens | 20 mixed records, overlaps/open dates, and one hold remain scannable without metric dashboard |
| 8. Long About page | Prose measure, timeline, section gap, CV feedback/action | 900-word bio, 12 events, long names, mixed recognition sources, and unavailable CV remain ordered |
| 9. Contact without form | Interaction target, type/prose, feedback error, shell | Long categories/email, failed profile, and email unavailable state work without a form |
| 10. Four-series figure | `ui.graphic.*`, baseline `chart.*`, evidence/type/mode tokens | Direct labels, markers/dashes, caption/source, alternative, forced colors, grayscale print, 400% zoom |
| 11. Operational states | `ui.feedback.*`, callout/action/shell, motion/reduced/resilience | 404, error, empty, unavailable, loading, no-results, and partial failure expose recovery and announcements |
| 12. Repeated external labels | Link/focus/target/type/evidence tokens | Visible context and accessible names disambiguate destinations without icons |

## 9. Mode and failure rules

### Forced colors

Use the five `ui.mode-resilience.forced.*` aliases and allow user-agent adjustment. Preserve boundaries, underlines, focus, current state, selected state, and direct data labels. Shape and dash continue to identify figure series. Do not disable forced-color adjustment merely to retain brand color.

### Reduced motion

Replace all duration and movement consumers with `ui.mode-resilience.reduced.duration` and `ui.mode-resilience.reduced.distance`. State changes remain immediate and complete. Motion is never needed to find navigation, understand selection/status, reveal core evidence, or use a menu.

### Print

Use the six `ui.mode-resilience.print.*` aliases. Print starts with Faisal and the document title, linearizes evidence after claims, underlines useful links, retains citations/source context, and removes navigation controls, filter inputs, loading UI, shadows, logo, patterns, and decorative geometry. No university stationery simulation is permitted.

### Font, image, and script failure

- `ui.mode-resilience.font.display` and `ui.mode-resilience.font.family` show system text immediately. No fixed height, truncation, or type-dependent geometry is allowed.
- `ui.mode-resilience.image.required` is `false`: no broken placeholder, reserved portrait region, logo fallback box, or essential icon exists.
- `ui.mode-resilience.script.core-required` is `false`: name, IA-ordered content, records, citations, navigation, email, CV availability, and status explanations exist without enhancement. Publication controls may enhance the complete catalogue but cannot be its only access path.
- If an external source fails, retain approved local metadata, identify only the unavailable action, and never redirect to an unverified mirror.
- If the CV is unavailable, render `CV unavailable` as a non-link with About context; the direct PDF path uses the 404 contract.
- If institutional email is unavailable, keep Contact, remove all email actions, show the governed release-blocking notice, and use no private substitute.

## 10. Alias, brand-parity, and accessibility validation

### 10.1 Alias graph

| Test | Expected | Result |
|---|---:|---:|
| New token paths | 203 unique | Pass |
| New alias edges | 181 | Pass |
| New literal values | 22 | Pass |
| Alias targets in immutable 221-token source | 181/181 | Pass |
| New-to-new aliases | 0 | Pass |
| Circular aliases | 0 | Pass |
| References to `unresolved.*` | 0 | Pass |
| Null new values | 0 | Pass |

### 10.2 Brand parity

| Test | Result |
|---|---|
| Official palette remains exactly the eight official colors plus white, black, and error red project utilities | Pass |
| Raw color literals in the new registry | 0 — Pass |
| New font family/weight/size/line-height/letter-spacing values | 0 — Pass |
| Tosh, logo, SVG, image, icon-font, media, asset, protected-pattern, or gradient path | 0 — Pass |
| New raw spacing, radius, border width, shadow, or motion style values | 0 — Pass |
| Affiliation remains subordinate text on the approved surface | Pass |
| Prose and registry count table agree by family | 203/203 — Pass |

### 10.3 Contrast legality

- Navy on white/gray, royal on white/gray, white on royal/navy, sky on navy, pink/yellow/turquoise on navy, and error red on white/gray retain the baseline's recorded legal roles.
- Teal on white/gray is never ordinary metadata/body text; success uses navy foreground plus teal accent.
- Sky on white and royal on navy are not text roles. Royal-on-navy is not used for ordinary boundaries unless the applicable non-text contrast requirement is independently satisfied.
- Data fills use navy outlines and are distinguished by direct labels, marker shapes, and dash patterns.
- All UI registry color paths alias existing semantic/official/chart/system tokens; no pairing is inferred from a decorative palette position.

### 10.4 Mode, failure, and density parity

| Coverage | Result |
|---|---|
| Mobile-first, inline evidence, split evidence, wide canvas | Complete |
| 320px, 200% text zoom, 400% browser zoom, long English content | Explicit |
| Header, menu, footer, evidence, lists/cards/records/timelines/tables/figures | Complete |
| Filters/search/results and q/year/type/theme contract | Complete |
| Links/buttons/download/external/contact/focus/selection/targets | Complete |
| Info/success/warning/error/loading/empty/no-results/unavailable | Complete |
| Forced colors, reduced motion, print | Complete |
| Font, image, script, external, CV, and email failure | Complete |
| All 12 DES-001 density cases | 12/12 mapped |

## 11. Downstream handoff

- **DES-003:** use the 203-path registry to annotate responsive wireframes; demonstrate every Section 8 case and do not introduce local visual values.
- **DES-004:** define component variants and states against the Section 7 contracts; any missing token requires a versioned DES-002 revision rather than an untracked value.
- **DES-005:** verify visual parity, claim/evidence composition, real approved density, all modes, and the no-image/no-logo system before G3.
- **BLD-001:** translate aliases into implementation variables without changing source values; automate uniqueness, alias resolution, contrast-role, forced-color, reduced-motion, print, and fallback checks.
- **QA-004:** test WCAG 2.2 AA, target size, focus/skip, reading order, announcements, text spacing, 320px/200%/400% reflow, tables, and modes.
- **QA-005:** test font loading/failure, layout stability, no-image performance, catalogue enhancement fallback, print output, and content-pressure transitions.
- **QA-009:** verify all consumers remain Faisal-first, text-affiliated, no-logo, palette/type compliant, and free of protected or invented identity geometry.

Content-dependent breakpoint activation, actual filter option density, feature selection, timeline eligibility, figure/metric use, real catalogue extremes, and CV metadata remain holds from DES-001. They do not authorize new token values; they trigger testing or a versioned revision.

## 12. Acceptance record

| Requirement | Evidence | Result |
|---|---|---|
| Immutable 16-family/221-token baseline reproduced | Integrity, family table, alias result, Appendix A | Pass |
| Every new token traceable and classified | 203-row registry and count table | Pass |
| Component/layout/state/responsive needs covered | Sections 4, 6, and 7 | Pass |
| Alias graph resolves | 181/181 direct baseline targets; zero cycles/unresolved references | Pass |
| Accessibility explicit | Sections 6–10; legal contrast roles and mode rules | Pass |
| Density cases mapped | Section 8, 12/12 | Pass |
| No brand invention or implementation | Zero forbidden raw style/media values; prose specification only | Pass |
| Scope respected | Only `docs/DESIGN_TOKENS.md`; no JSON, dashboard, code, wireframe, prototype, asset, deployment, DNS, or P9 work | Pass |

## Appendix A — Exact immutable baseline path inventory

### `official.color` — 8

`official.color.gray`, `official.color.navy`, `official.color.pink`, `official.color.royal`, `official.color.sky`, `official.color.teal`, `official.color.turquoise`, `official.color.yellow`

### `project.utility-color` — 3

`project.color.black`, `project.color.error`, `project.color.white`

### `derived.contrast` — 17

`contrast.error-on-gray`, `contrast.error-on-white`, `contrast.navy-on-gray`, `contrast.navy-on-white`, `contrast.pink-on-navy`, `contrast.royal-on-gray`, `contrast.royal-on-navy`, `contrast.royal-on-white`, `contrast.sky-on-navy`, `contrast.sky-on-white`, `contrast.teal-on-gray`, `contrast.teal-on-navy`, `contrast.teal-on-white`, `contrast.turquoise-on-navy`, `contrast.white-on-navy`, `contrast.white-on-royal`, `contrast.yellow-on-navy`

### `semantic.color` — 54

`color.action.disabled.background`, `color.action.disabled.border`, `color.action.disabled.foreground`, `color.action.primary.active-background`, `color.action.primary.active-foreground`, `color.action.primary.background`, `color.action.primary.foreground`, `color.action.primary.hover-background`, `color.action.primary.hover-foreground`, `color.action.secondary.active-background`, `color.action.secondary.active-border`, `color.action.secondary.active-foreground`, `color.action.secondary.background`, `color.action.secondary.border`, `color.action.secondary.foreground`, `color.action.secondary.hover-background`, `color.action.secondary.hover-foreground`, `color.action.selected.background`, `color.action.selected.foreground`, `color.border.control`, `color.border.decorative`, `color.border.strong`, `color.focus.action-inner`, `color.focus.action-outer`, `color.focus.dark`, `color.focus.light`, `color.selection.background`, `color.selection.foreground`, `color.status.empty.background`, `color.status.empty.foreground`, `color.status.error.accent`, `color.status.error.background`, `color.status.error.foreground`, `color.status.info.accent`, `color.status.info.background`, `color.status.info.foreground`, `color.status.loading.accent`, `color.status.loading.background`, `color.status.loading.foreground`, `color.status.success.accent`, `color.status.success.background`, `color.status.success.foreground`, `color.status.warning.accent`, `color.status.warning.background`, `color.status.warning.foreground`, `color.surface.affiliation`, `color.surface.inverse`, `color.surface.muted`, `color.surface.page`, `color.text.inverse`, `color.text.link`, `color.text.link-active`, `color.text.link-hover`, `color.text.primary`

### `typography` — 23

`font.display`, `font.family.sans`, `font.letter-spacing.default`, `font.license.alexandria`, `font.line-height.body`, `font.line-height.compact`, `font.line-height.heading`, `font.measure.prose`, `font.size.body`, `font.size.h1`, `font.size.h2`, `font.size.h3`, `font.size.lead`, `font.size.sm`, `font.size.xs`, `font.source.alexandria-candidate`, `font.weight.400`, `font.weight.600`, `font.weight.700`, `font.weight.body`, `font.weight.display`, `font.weight.heading`, `font.weight.label`

### `spacing` — 10

`space.0`, `space.1`, `space.2`, `space.3`, `space.4`, `space.5`, `space.6`, `space.7`, `space.8`, `space.9`

### `layout` — 15

`breakpoint.compact`, `breakpoint.max`, `breakpoint.medium`, `breakpoint.wide`, `layout.columns.compact`, `layout.columns.medium`, `layout.columns.wide`, `layout.content-max`, `layout.gutter`, `layout.gutter.maximum`, `layout.gutter.minimum`, `layout.prose-max`, `layout.section-space`, `layout.section.maximum`, `layout.section.minimum`

### `shape-and-component` — 17

`border.width.focus`, `border.width.standard`, `border.width.strong`, `component.focus.offset`, `component.focus.width`, `component.input.border-width`, `component.link.underline-default`, `component.link.underline-hover`, `component.press-offset`, `component.target.aa-minimum`, `component.target.default`, `elevation.none`, `elevation.overlay-low`, `radius.lg`, `radius.md`, `radius.none`, `radius.sm`

### `brand.affiliation` — 17

`brand.affiliation.clear-space.project-min`, `brand.affiliation.derivative.filename`, `brand.affiliation.fallback.external-link-label`, `brand.affiliation.fallback.label`, `brand.affiliation.logo.favicon-allowed`, `brand.affiliation.logo.header-allowed`, `brand.affiliation.logo.hero-allowed`, `brand.affiliation.logo.print-default-allowed`, `brand.affiliation.logo.social-allowed`, `brand.affiliation.mark.candidate-floor`, `brand.affiliation.mark.max-per-page`, `brand.affiliation.mark.preferred-inline-size`, `brand.affiliation.mark.test-step`, `brand.affiliation.permitted-backgrounds`, `brand.affiliation.surface.gray`, `brand.affiliation.surface.white`, `brand.affiliation.variant`

### `icon` — 4

`icon.color.default`, `icon.size.compact`, `icon.size.default`, `icon.target.default`

### `chart` — 20

`chart.axis`, `chart.background`, `chart.fill.pink`, `chart.fill.required-outline`, `chart.fill.sky`, `chart.fill.turquoise`, `chart.fill.yellow`, `chart.label`, `chart.series.1.color`, `chart.series.1.dash`, `chart.series.1.marker`, `chart.series.2.color`, `chart.series.2.dash`, `chart.series.2.marker`, `chart.series.3.color`, `chart.series.3.dash`, `chart.series.3.marker`, `chart.series.4.color`, `chart.series.4.dash`, `chart.series.4.marker`

### `motion` — 7

`motion.distance.max`, `motion.duration.fast`, `motion.duration.slow`, `motion.duration.standard`, `motion.easing.standard`, `motion.reduced.distance`, `motion.reduced.duration`

### `forced-colors` — 5

`forced-color.border`, `forced-color.focus`, `forced-color.link`, `forced-color.surface`, `forced-color.text`

### `print` — 6

`print.link.decoration`, `print.logo.display`, `print.pattern.display`, `print.shadow`, `print.surface`, `print.text`

### `governance` — 7

`governance.analytics.third-party.enabled`, `governance.blocked-asset-classes`, `governance.contact.mode`, `governance.private-provenance.required`, `governance.provenance.required-fields`, `governance.public-metadata.strip-nonessential`, `governance.public-source-copy.allowed`

### `unresolved` — 8

`unresolved.asset.icon-web-rights`, `unresolved.asset.pattern-web-rights`, `unresolved.asset.photography-web-rights`, `unresolved.font.tosh-web-license`, `unresolved.institutional.personal-site-clearance`, `unresolved.logo.english-deep-navy-variant`, `unresolved.logo.official-clear-space`, `unresolved.logo.official-minimum-width`
