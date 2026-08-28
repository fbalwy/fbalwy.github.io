# Faisal Albalwy academic website — web brand specification

**Work package:** BRD-006 v1  
**Specification date:** 18 August 2026 (Asia/Riyadh)  
**Status:** Implementation-ready candidate for BRD-007/008/009 and Gate G0  
**Machine-readable companion:** `content/brand/tokens.json`  
**Website context:** English-only personal academic website; not an official Taibah University portal

## 1. Scope, authority, and labels

This specification translates the reconciled identity evidence and `docs/brand/COBRANDING_MODEL.md` into accessible web rules and initial semantic tokens. It does not create assets, a design board, page designs, content, implementation, deployment, DNS, analytics, or P9 work.

The binding conflict order is: written identity-guide rule; official supplied vector master; consistent official templates; raster exports; project interpretation. `docs/brand/IDENTITY_DECISION_LOG.md` controls the current specification errata, and `docs/brand/COBRANDING_MODEL.md` controls personal-versus-affiliation use.

Every token family and rule uses one evidence label:

| Label | Meaning here |
|---|---|
| **Direct** | A cited guide/source/license fact, including the eight printed base swatches. |
| **Derived** | A web or accessibility rule required to preserve Direct evidence. |
| **Proposed** | An explicit project semantic choice, test value, or fallback; it is not an institutional primitive. |
| **Unresolved** | No supported institutional value or permission exists. The recorded fallback controls. |

`Owner-authorized`, `Gate G0 accepted`, and `institutionally cleared` retain their exact, separate meanings from BRD-005. A project token or Gate G0 decision must never be called an official university rule unless Direct evidence supports it.

## 2. Color foundation and contrast method

### 2.1 Direct official base swatches

These eight values are the complete numeric official palette printed at guide p. 26 / PDF 26. They are immutable bases, not semantic roles.

| Stable token | Name | HEX | Guide role |
|---|---|---:|---|
| `official.color.teal` | Teal Green | `#0A8E6E` | Primary |
| `official.color.royal` | Royal Blue | `#4056E3` | Primary |
| `official.color.sky` | Bright Sky Blue | `#00AEDA` | Primary |
| `official.color.pink` | Pastel Pink | `#FFD1DC` | Secondary |
| `official.color.yellow` | Lemon Yellow | `#E5C603` | Secondary |
| `official.color.turquoise` | Turquoise | `#40E0D0` | Secondary |
| `official.color.navy` | Deep Navy Blue | `#111144` | Secondary |
| `official.color.gray` | Very Light Gray | `#F2F2F2` | Secondary |

White `#FFFFFF`, black `#000000`, and error red `#A3212A` are **Proposed project utility colors**, not additions to the official palette. White supports the guide's demonstrated light and inverse treatments; black is print/system utility only; error red provides a conventional, accessible error signal and must always be paired with text/icon semantics.

The guide visibly shows lighter/darker steps but provides no values. No sampled color, opacity blend, darkened teal, or derived shade may be described as official. The project uses solid, explicit sRGB values for every contrast-critical role.

### 2.2 Reproducible WCAG contrast

Ratios use the WCAG relative-luminance formula on the listed sRGB HEX values: linearize each channel with `c / 12.92` when `c <= 0.04045`, otherwise `((c + 0.055) / 1.055) ^ 2.4`; calculate `L = 0.2126R + 0.7152G + 0.0722B`; then `(Llighter + 0.05) / (Ldarker + 0.05)`. Values below are recorded to four decimals and reproduced exactly in `tokens.json`.

| Foreground / background | Ratio | Binding use |
|---|---:|---|
| Navy / white | 17.6844:1 | All text and UI boundaries |
| Navy / very light gray | 15.7968:1 | All text and UI boundaries |
| Royal / white | 5.7403:1 | Normal text, links, controls, and boundaries |
| Royal / very light gray | 5.1276:1 | Normal text, links, controls, and boundaries |
| White / royal | 5.7403:1 | Normal text and controls |
| White / navy | 17.6844:1 | All text and controls |
| Teal / white | 4.1118:1 | Large text or non-text graphics only; not normal text |
| Teal / very light gray | 3.6729:1 | Large text or non-text graphics only; not normal text |
| Sky / white | 2.6033:1 | Fails normal text and 3:1 non-text; decorative fill only with a qualifying boundary |
| Sky / navy | 6.7932:1 | Normal text or graphic accent on navy |
| Pink / navy | 12.9733:1 | Normal text or graphic accent on navy |
| Yellow / navy | 10.4511:1 | Normal text or warning surface pair |
| Turquoise / navy | 10.7716:1 | Normal text or graphic accent on navy |
| Project error red / white | 7.4779:1 | Normal error text, icons, and boundaries |
| Project error red / very light gray | 6.6797:1 | Normal error text, icons, and boundaries |
| Royal / navy | 3.0807:1 | Non-text boundary only; do not use for normal text |
| Teal / navy | 4.3009:1 | Large text/non-text only; do not use for normal text |

WCAG 2.2 AA minimums are 4.5:1 for normal text and 3:1 for large text and required non-text boundaries. Passing a numeric pair does not make it an official pairing or sufficient by itself: hover, focus, active, selected, error, disabled, chart adjacency, forced-colors, and image-overlap states must be tested separately. Color is never the only state or data signal.

## 3. Semantic color and state system

### 3.1 Core roles

| Semantic role | Value / alias | Classification | Rule |
|---|---|---|---|
| Page and affiliation surface | White / `project.color.white` | **Proposed** | Default reading and complete color-lockup surface. |
| Muted surface | `official.color.gray` | **Proposed alias** | Quiet section separation; not a disabled-opacity effect. |
| Inverse surface | `official.color.navy` | **Proposed alias** | Footer/navigation bands; affiliation logo requires a separate light region or text-only fallback. |
| Primary text | `official.color.navy` | **Proposed alias** | Default on white, gray, and yellow. |
| Inverse text | White | **Proposed** | Default on navy and royal. |
| Link/action | `official.color.royal` | **Proposed alias** | Underlined links and primary actions on light surfaces. |
| Supporting accent | `official.color.teal` | **Proposed alias** | Non-text boundary, large display text, or labelled data; never normal text on light surfaces. |
| Decorative accents | Sky, pink, yellow, turquoise | **Proposed aliases** | Sparse, nonessential use subject to the measured pair; never color-only meaning. |
| Error | `project.color.error` = `#A3212A` | **Proposed project utility** | Error text/border/icon with explicit `Error` wording; not an official university color. |

### 3.2 Links, buttons, selection, and controls

- **Text links:** royal on white/gray, always underlined. Hover changes to navy and increases underline thickness. Active retains navy and a pressed/weight cue. Visited may remain royal; visited differentiation is not required for understanding.
- **Primary button:** royal background with white text. Hover/active use navy with white text plus a shape/pressed cue. Never use white text on teal.
- **Secondary button:** white with royal text and a two-pixel royal border. Hover uses gray while retaining royal text/border. Active uses a navy border/text or pressed cue.
- **Selected/current:** royal background with white text, or navy text with a royal two-pixel indicator; also use `aria-current`, `aria-selected`, a checkmark, label, or typography cue.
- **Focus:** a three-pixel royal outline with three-pixel offset on light surfaces; bright sky on navy; a two-tone white inner/navy outer treatment on royal where needed. Focus must remain visible without hover and cannot rely on a shadow.
- **Inputs:** white surface, navy text, royal two-pixel boundary, persistent visible label, and text-based help. Placeholder text is never the sole label and uses navy without opacity.
- **Disabled:** gray surface, navy text, royal boundary, no opacity, no hover/press response, native/ARIA disabled semantics, and an unavailable cue in text where ambiguity remains. Although disabled controls are contrast-exempt, these pairs remain readable.
- **Target size:** interactive targets are at least `2.75rem` square by default and never below the WCAG 2.2 AA `1.5rem` exception-aware minimum. Spacing prevents adjacent-target interference.
- **Text selection:** white on royal. Link, hover, focus, current, and selected states are never distinguished by hue alone.

### 3.3 Status surfaces

| State | Surface / foreground / accent | Required redundant meaning |
|---|---|---|
| Information | White / navy / royal | `Information` label or semantic icon and contextual heading. |
| Success | White / navy / teal | `Success` label or semantic icon plus outcome text; teal is a qualifying non-text accent, not body text. |
| Warning | Yellow / navy / navy | `Warning` label/icon plus consequence and action. Navy/yellow is 10.4511:1. |
| Error | White / error red / error red | `Error` text, semantic icon, programmatic error association, and recovery instruction. Red/white is 7.4779:1. |
| Disabled/unavailable | Gray / navy / royal boundary | Native/ARIA state and explanatory label where needed; no opacity-only treatment. |
| Loading | Gray / navy / royal progress indicator | Visible loading text, appropriate live-region behavior, and nonanimated fallback. Never rely on a spinner alone. |
| Empty | White / navy / optional royal action | Explicit empty-state heading, explanation, and next action where applicable. |

Errors, warnings, and success messages must not disappear automatically before assistive technology can announce them. Status icons are neutral functional icons, not supplied brand icons.

## 4. Typography

### 4.1 Family and licensing

- **Direct:** the guide names TOSH; the package contains Tosh A Regular, Medium, and Bold.
- **Unresolved:** no supplied permission covers Tosh web embedding, conversion, subsetting, or redistribution.
- **Binding fallback:** Tosh remains blocked. Do not copy, convert, serve, commit, preload, or use it in implementation screenshots.
- **Proposed:** use Alexandria Variable from the supplied OFL 1.1 family after BRD-007 creates and validates a Latin WOFF2 subset, retains the license notice, records glyph coverage and tooling, and uses `font-display: swap`.
- **System fallback:** `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` must preserve the layout if Alexandria is unavailable.

The operational weight set is 400 for body, 600 for headings/labels/actions, and 700 for the principal display only. Do not use Thin, ExtraLight, or arbitrary variable weights. The initial scale in the token file uses explicit rem/clamp values, unitless line heights, zero default letter spacing, a `68ch` prose measure, and a `75rem` content maximum. Long publication titles, author lists, DOIs, URLs, navigation, Arabic-origin names rendered in English, and 200%/400% zoom must not clip or force horizontal scrolling.

## 5. Spacing, layout, shape, and elevation

### 5.1 Spacing and layout

- Use the explicit `0.25rem`-based spacing scale in `tokens.json`; do not introduce one-off gaps where an existing token fits.
- Use a mobile-first four-column grid, optional eight-column intermediate grid, and restrained twelve-column wide grid. Breakpoints are project values at 30rem, 48rem, 64rem, and 80rem; content may trigger earlier reflow.
- Page gutter is `clamp(1rem, 4vw, 2rem)`, section spacing is `clamp(3rem, 7vw, 6rem)`, content maximum is `75rem`, and prose maximum is `68ch`.
- Quiet white/gray reading surfaces are primary. Navy bands are limited anchors, not default page backgrounds. Body text, publication lists, filters, forms, and dense metadata stay on solid surfaces.
- No supplied pattern or photograph is required to complete a layout. Removing imagery must not leave an empty column, inaccessible overlay, or unexplained whitespace.

### 5.2 Radius, border, and elevation restraint

- Default radius is `0`; small and medium radii are `0.25rem` and `0.5rem`. Use the `0.75rem` large radius only for a distinct panel, not every card. Pill shapes are reserved for true compact statuses/filters and must not become the site's dominant language.
- Standard border is one pixel; interactive/focus and high-emphasis boundaries use two or three pixels as tokenized. Gray hairlines are decorative only; required control boundaries use royal or navy.
- Default elevation is none. The single proposed low shadow uses navy at 12% alpha and is limited to transient overlays or menus; cards use spacing/borders. Forced-colors replaces shadow-only separation with a system border.

### 5.3 Personal and affiliation regions

- `Faisal Albalwy` is first in visual order, DOM order, metadata, print, and accessible reading order.
- Header and hero use text-only affiliation; no university logo. CV, Contact, social preview, favicon/avatar, print, cards, and operational states also exclude the logo as defined by BRD-005.
- At most one complete English horizontal color project derivative may appear per page, normally in a separate white/gray footer affiliation region. On About it may instead occupy one light affiliation panel when the footer is text-only.
- A deep-navy footer uses text-only affiliation or a genuinely separate light affiliation region. The color lockup never sits directly on navy or another unsupported surface.
- Visible text `Institutional affiliation: Taibah University` plus a verified external link is the universal fallback and required semantic meaning. The logo is optional reinforcement.

## 6. Logo operational rules

### 6.1 Project clear-space token

Guide p. 19 directly requires clear space but supplies no CSS formula. The initial **Proposed** token `brand.affiliation.clear-space.project-min` is `2rem` on every side of the complete lockup. It is a provisional project safety floor, not an official module and not part of the SVG artwork.

BRD-008 must compare the rendered empty area with guide p. 19 at each tested size. It may increase this value whenever the guide comparison, hierarchy, or legibility is doubtful; it must not reduce it without a new documented comparison accepted by BRD-009. No text, border, pattern, photo, icon, focus ring for another control, or external-link glyph may enter the area.

### 6.2 Project-tested minimum procedure

The guide supplies no usable English pixel minimum. The token file therefore distinguishes a **Proposed candidate floor** from an official or validated minimum:

1. Begin with preferred lockup width `15rem` and candidate floor `12rem`; preserve natural aspect ratio.
2. Render the BRD-007 candidate on white and gray inside the `2rem` safety area at 12rem, 13rem, 14rem, and 15rem widths.
3. Test each at normal viewing, browser 200% zoom, 400% reflow, representative mobile widths, image disabled, high contrast/forced colors, and browser print.
4. Confirm the complete wordmark is immediately legible, no component is clipped or blurred, the mark stays subordinate to Faisal, and the container does not scroll horizontally.
5. The smallest passing width becomes the **project-tested minimum** recorded by BRD-008/009. If 12rem fails, raise the floor; never test smaller. Before that acceptance, the production logo remains unavailable and text-only affiliation controls.
6. At runtime, when the tested width plus clear space cannot fit, remove the image and retain affiliation text/link. Never compress, crop, detach, wrap, or substitute a symbol.

### 6.3 Asset and link constraints

Only BRD-007 may prepare `taibah-university-affiliation-en-horizontal-color.svg` from the protected English PDF. The file must be called a project derivative, preserve the complete construction, use explicit `viewBox` and sRGB-equivalent colors, strip nonessential metadata, and carry private provenance. No white, dark, bilingual, vertical, symbol, favicon, social, pattern, icon, photo, or template derivative is authorized here.

Prefer a visible `Taibah University website (external)` link outside the logo safety area. If the adjacent visible link names the destination, the redundant noninteractive image has empty alternative text. If the image is the sole link, the link accessible name is `Taibah University website (external)`. External links open in the same tab by default; new-tab behavior must be announced and safely implemented.

## 7. No-pattern, photography-free, icon, and chart rules

### 7.1 No-pattern and photography-free default

Supplied patterns, embedded/template photographs, Office/PDF media, certificates, and stationery remain blocked or reference-only. Initial layouts must use typography, whitespace, alignment, solid official-color surfaces, rules, and content hierarchy without copying a supplied motif. Do not trace, redraw, crop, or imitate a protected pattern.

All hero, card, list, profile, project, and call-to-action components require a complete no-image variant. A missing image never produces a placeholder illustration, decorative AI image, blank reserved rectangle, or text overlay on an uncertain background. If a separately cleared photo arrives later, its rights, consent, alt treatment, crop, and metadata controls require their own record.

### 7.2 Neutral functional icons

Do not extract supplied icon sheets or use a logo-derived icon container. If text alone is insufficient, select a separately licensed neutral functional icon set later. Default icon size is `1.25rem`, compact size `1rem`, and containing target `2.75rem`. Use a consistent outline style, `currentColor`, visible text where practical, and accessible names for icon-only controls. Icons never replace status text, headings, or link meaning and never carry the only distinction between categories.

### 7.3 Accessible charts

- Chart background is white or gray; titles, axes, direct labels, and explanatory text use navy.
- Primary line series are navy, royal, teal, and project error red; each uses a distinct shape and dash pattern plus direct labels. All four meet at least 3:1 against white for non-text graphics.
- Sky, pink, yellow, and turquoise may be filled accents only with a navy outline/marker and direct label; sky on white by itself fails 3:1.
- A chart may not rely on adjacent hue differences. Use direct labels, marker shapes, dash patterns, ordering, and a data table or equivalent values when material.
- Interactive charts require keyboard operation, visible focus, accessible names/descriptions, announced selection, and a static/reduced-motion equivalent.
- Gradients are nonessential decoration only and cannot encode values, state, or series identity.

## 8. Component behavior and accessibility

### 8.1 Required component states

Every interactive component must document and render default, hover, focus-visible, active/pressed, selected/current where applicable, disabled, loading, success, warning, and error states. Forms also need help, required, invalid, and confirmation states; data views need empty and no-results states. The token aliases in the companion JSON are the initial shared contract.

- Use semantic HTML before ARIA; preserve heading order and landmarks.
- Keyboard access and visible focus are mandatory; hover-only disclosure is prohibited.
- Error text is programmatically associated with its field/control and focus moves only when doing so helps recovery.
- Loading uses meaningful text and appropriate live-region behavior; respect reduced motion and do not announce repeated progress excessively.
- Empty and no-results states explain what happened and provide a valid next step without blame.
- Disabled controls use native `disabled` when appropriate; `aria-disabled` elements must also prevent activation.
- Logos, colors, icons, shadows, and motion never carry the only meaning.
- Content must reflow without loss at 400% zoom; touch/pointer targets, long metadata, focus rings, and error text must not overlap.

## 9. Responsive, motion, forced-colors, and print

### 9.1 Responsive behavior

Use content-driven reflow within the tokenized breakpoints. Reduce columns before reducing type or control size. Patterns are absent, photography is optional, and the affiliation image disappears before it can compromise the personal hierarchy. Navigation must remain labelled and keyboard operable when collapsed. Horizontal scrolling is prohibited except for an explicitly labelled data region with an accessible alternative.

### 9.2 Motion

Motion is supportive and optional: 120ms fast, 180ms standard, and 240ms slow, using `cubic-bezier(0.2, 0, 0, 1)`. Limit positional movement to `0.25rem`; do not use parallax, autoplay, continuous decorative movement, or animated university marks. Under `prefers-reduced-motion: reduce`, transition/animation duration becomes `0ms`, movement becomes `0`, and no information or focus behavior is lost.

### 9.3 Forced colors

In forced-colors mode use system aliases `Canvas`, `CanvasText`, `LinkText`, `ButtonText`, and `Highlight`. Do not opt out with `forced-color-adjust: none` except for a separately justified information-preserving case. Replace shadow-only separation with a visible system border, retain native focus, expose selected/current state with structure or text, and use text-only university affiliation if the color logo loses meaning.

### 9.4 Print

Print uses white background, black or navy text, underlined links with useful URLs where appropriate, no motion, no shadow, no university logo by default, and no pattern/photo/template backgrounds. Preserve Faisal-first title order, text affiliation, external destination, headings, table headers, chart values, and page-break integrity. Do not mimic university stationery or expose source paths/metadata.

## 10. Metadata, privacy, and provenance

- No protected PDF, Office file, source TTF, raster master, or template media may be copied directly into a public directory.
- Every allowed public derivative must be scanned and stripped of nonessential EXIF/XMP/author/tool/timestamp/GPS/package metadata. Absence of queried metadata in a source is not proof that its derivative is safe.
- A private provenance record must retain: stable output name; source relative path; BRD-001 SHA-256; source classification; authorization/rights note; tool and version; conversion/subset/crop settings; sRGB/profile handling; dimensions or `viewBox`; glyph/Unicode range for fonts; metadata-scrub result; visual/source comparison; accessibility checks; reviewer; date; Gate G0 state; and open external exceptions.
- Public tokens and CSS must not disclose local absolute paths, source author identities, hidden document data, QR codes, template contacts, recipient/student data, or license-irrelevant metadata.
- Alexandria output must ship with the OFL notice. Tosh and all supplied pattern/icon/photo/template sources remain excluded.
- Logo accessible naming and text affiliation must not claim `official`, `endorsed`, or `institutionally cleared` without separate evidence.
- No third-party analytics, tracking pixel, form, or external font service is introduced by this specification. The initial contact remains institutional email only.

## 11. Token contract

`content/brand/tokens.json` is the normative machine-readable initial token set. It contains separate families for Direct official bases, Derived contrast/accessibility rules, Proposed project utilities and semantics, and Unresolved values/permissions. Stable identifiers use lowercase dot notation. Every family records `source`, `classification`, `constraints`, and `aliases`; every token has an explicit `value`, `unit`, and `type`. `null` occurs only in the Unresolved family and must never be emitted to CSS.

Consumers must resolve semantic tokens, not use official bases directly, except inside approved brand-specific components. Alias mappings are traceability, while explicit values make output deterministic. Any changed value requires synchronized prose/JSON revision, recomputed contrast, dependency review, and BRD-009 revalidation.

## 12. Downstream handoffs

| Work | Required handoff |
|---|---|
| **BRD-007** | Create only the traceable complete English color SVG candidate and Alexandria Latin WOFF2/OFL output. Apply metadata/provenance controls. Do not create white/dark/bilingual/vertical/symbol/favicon/social/pattern/icon/photo/template derivatives. |
| **BRD-008** | Demonstrate light and deep-navy footer alternatives, text-only fallback, 12-15rem logo test series, 2rem provisional safety area, personal-first hierarchy, full component states, no-pattern/photo-free layouts, charts, forced colors, print, and reduced motion. Record the smallest passing project logo width or raise the floor. |
| **BRD-009 / Gate G0** | Audit every Direct/Derived/Proposed label, prose/JSON parity, contrast reproduction, derivative/license/provenance, co-branding exclusions, state/accessibility examples, and open external exceptions. Project acceptance must not be called institutional clearance. |
| **DES-001/002/004/005** | Use the semantic roles without redefining official swatches, logo rules, font permission, or affiliation hierarchy. Refine component/layout tokens only with traceable project classification and contrast checks. |
| **BLD-001/003/008/009** | Implement token consumption, font fallbacks, global affiliation fallback, all states, responsive/forced-color/print/reduced-motion behavior, and operational-state semantics. Never repair pressure by modifying the lockup. |
| **INT-001/002/003** | Use no university-derived favicon; preserve Faisal-first metadata and Person ownership; keep social preview logo-free; do not declare Taibah University the site publisher. |
| **QA-003/004/005/006/009** | Validate responsive behavior, WCAG 2.2 AA, font loading/performance, metadata/privacy, provenance/licenses, color/state contrast, image-off behavior, and identity hierarchy on every route. |

## 13. Validation result

- The prose and JSON cover all eight official base swatches, exact contrast records, semantic colors, interaction/status states, Alexandria/system fallback typography, spacing/layout, restrained shape/elevation, personal/affiliation separation, clear-space/minimum testing, responsive behavior, no-pattern/photo-free layouts, neutral icons, accessible charts, motion/reduced motion, forced colors, print, and provenance/privacy.
- All normal text and actionable labels use pairs at or above 4.5:1; required non-text boundaries use pairs at or above 3:1. Known failing pairs are explicitly constrained.
- Meaning is never color-only. Text-only university affiliation plus a verified external link remains the universal fallback.
- Tosh, supplied pattern/icon/photo/template assets, unsupported logo variants, and institutionally unsupported claims remain blocked.
- `content/brand/tokens.json` must parse as JSON and pass the parity checks listed in its `validation` object before this work package is accepted.

**BRD-006 result:** accepted when the companion token validation passes. The next dependency-eligible work package is BRD-007.
