# Accessibility report

## Decision

**PASS — no WCAG 2.2 Level A or AA release blocker remains.**

QA-004 independently audited the seven governed routes, the generated 404 page, current unavailable and recovery states, Contact, the native/enhanced mobile navigation, Publications contracts and the non-emitted populated fixture, social-card semantics, and the internal English CV PDF. Three confirmed application defects were corrected and retested. No content or CV was promoted, and the PDF and social-card bytes did not change.

## Candidate lineage and scope control

- QA-001 input: `1a947c9990ce21a323a90d4bb5c7e36086537c2f57b8bd4afa39ae5690faded3`.
- QA-003 target-size remediation advanced the frozen candidate to `4f6e1f0f097f46c49388a79475c23805eec51a0bfd597b17aba05484e0874e1a`; 17 artifacts remained, and the lockfile and OG hashes were unchanged.
- QA-004 fixes advanced the local manifest to `c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8` before final verification. The post-verification hash is recorded in the final handoff because the verification regenerates the deterministic manifest.
- Stable governed inputs: CV PDF `cdceb414a94fa921a12ff975c907793d8523db692597f70ea7c04b69f5074c8f`; OG PNG `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6`; lockfile `2ffe29eb5ede049e7325ff00e6a36c5309d068de0c6a3cf5d9e90d59d7cf69c9`.

The intermediate fingerprint observed while concurrent QA-003 work was rebuilding was not treated as a candidate. All final QA-004 checks were rerun after the declared QA-003 candidate transition.

## Tools and method

- Node.js 24.19.0 and npm 11.19.0 for the pinned project checks.
- axe-core 4.13.0 in Google Chrome 151.0.7922.140 for automated WCAG 2.0/2.1 A/AA and WCAG 2.2 AA rules.
- The in-app Browser for manual accessibility-tree, keyboard, focus, disclosure, responsive, and visual inspection.
- qpdf 12.4.0, Poppler 26.01.0, and pypdf 6.1.0 for PDF integrity, metadata, font, annotation, tag-tree, and reading-order inspection.
- Independent WCAG contrast calculation from sRGB values, plus source, generated HTML, CSS media-query, test-contract, and public-resource inspection.

Automated and structural route checks covered `/`, `/about`, `/research`, `/publications`, `/teaching`, `/leadership-service`, `/contact`, and `/404.html` at 1440×900 and 320×700. Every case had zero axe violations, zero axe incomplete results after remediation, one `h1`, `lang="en"`, a page title, an exact noindex directive, a main landmark, and no horizontal overflow. The Browser console was clean.

## Criterion and control matrix

| WCAG 2.2 criterion/control | Evidence | Result |
| --- | --- | --- |
| 1.1.1 text alternatives | No page-content images. All routes expose descriptive `og:image:alt`/Twitter alt; the OG image is not used in page content and does not substitute for the visible heading/text. | Pass |
| 1.3.1, 1.3.2 structure and order | One H1, ordered headings, banner/main/contentinfo/navigation landmarks, semantic links/lists/states, logical DOM and PDF tag order. | Pass |
| 1.3.4 orientation | No orientation lock or orientation-dependent content. | Pass |
| 1.4.1 non-colour cues | Links retain underlines; focus has a visible outline; state text and labels carry meaning without colour. | Pass |
| 1.4.3, 1.4.11 contrast | Critical site ratios: navy/white 17.6844:1, royal/white 5.7403:1, white/navy 17.6844:1. PDF body, heading, secondary text, and link ratios are 16.2935:1, 12.0401:1, 7.0063:1, and 7.6293:1. Focus and boundaries remain visible in forced colours. | Pass |
| 1.4.4, 1.4.10 resize/reflow | 200% text at 320 CSS px retained one H1 and no overflow. 320 CSS px covers the 400%-reflow proxy for a 1280 CSS-pixel viewport. | Pass |
| 1.4.12 text spacing | Flexible layout, relative line-height/spacing, wrapping, and no clipping in route and PDF visual review. | Pass |
| 1.4.13 hover/focus content | No hover-only or focus-only information panels. | Pass |
| 2.1.1, 2.1.2 keyboard/trap | Skip link, links, native disclosure, Publications controls, and recovery actions have keyboard contracts; no trap. Escape closes the enhanced menu and restores focus. | Pass after fix |
| 2.2, 2.3 timing/motion | No timed task, autoplay, flash, or meaning-dependent motion. Reduced-motion media mode resolves transitions to 0 seconds. | Pass |
| 2.4 bypass, titles, order, headings, links, focus | Unique page titles; meaningful headings/link names; visible focus; skip-link Enter now focuses `main#main-content`. | Pass after fix |
| 2.5.3, 2.5.7 label/drag | Visible labels occur in accessible names. No drag operation. | Pass |
| 2.5.8 target size | Post-QA-003 retest across all routes at 320 px found a 44 px minimum rendered target height and no focusable target below 24×24 px. | Pass after upstream fix |
| 3.1.1 language | Document and PDF language are English. | Pass |
| 3.2 consistent navigation | Shared primary, mobile, footer, action, and recovery navigation is ordered consistently. | Pass |
| 3.3 labels/status/recovery | Unavailable, empty, offline, error/recovery, and filter-result states provide plain-language headings, explanations, and recovery. Contact offline output uses `role="status"`; Publications result count uses a status contract. | Pass |
| 4.1.2 names, roles, values | Native no-script disclosure has no stale ARIA; enhancement initializes and synchronizes name/state. Unsupported ARIA was removed from the generic CV-unavailable span. | Pass after fix |
| 4.1.3 status messages | Contact offline and Publications result changes expose non-focus-stealing status semantics. | Pass |

## Manual route, state, and mode evidence

- Current zero-public routes remain understandable and operable: the H1 explains that content is being prepared, the body explains the privacy boundary, and a keyboard-operable recovery link is present. The 404 has a unique title, one H1, and recovery navigation.
- Contact exposes only the approved institutional `mailto:` recipient with a neutral subject. The visible address and offline recovery remain available; there is no form, hidden body, cc/bcc, or submission endpoint.
- At 320 px, the menu initially announces `Open menu`/`false`, opens to `Close menu`/`true`, and Escape restores `Open menu`/`false` and focus. With scripting absent, `<details>/<summary>` keeps its native open state without contradictory ARIA.
- The first Tab reaches a visible skip link. Enter sets `#main-content` and places focus on the main landmark.
- Reduced-motion, forced-colours, print, no-image/system-font, no-script, and offline-after-load paths were inspected through rendered behavior where the Browser supported it and through generated CSS/source plus integration contracts otherwise. Print hides the repeated header and prints high-contrast content/footer. No layout depends on webfont or image loading.
- Publications remains unavailable in the emitted candidate. The complete 27-record non-emitted fixture and its query/control tests preserve labelled controls, described-by help, result status, focus recovery, stable order, and optional-detail behavior without public-data promotion.
- The text-only 1200×630 social card has a deterministic accessible description. It is metadata-only; every route retains its own visible H1 and substantive or explicit-unavailable text.

## PDF accessibility evidence

The five-page A4 English CV passed `qpdf --check`. It is tagged (`Marked=true`, `Tagged=yes`, `Suspects=no`), declares `/Lang en`, uses `/Tabs /S`, contains a structure tree, and requests display of the document title. Title, subject, author, creator, producer, and fixed dates are present.

The tag tree contains one Document, one H1, six H2, 27 H3, 61 paragraphs, two lists with ten list items/labels, and 31 Link elements. Heading order and extracted-text order are logical. All 31 URI annotations—email, academic profiles, DOI records, and thesis—map one-to-one to Link structure nodes through object references. Embedded/subset Arial regular, bold, and italic fonts and the Times footer font have Unicode mappings. Rendered inspection of all five pages found no clipping, overlap, hidden text, broken record order, or footer collision.

No PDF bytes were changed. PDF/UA conformance is not claimed: PAC and veraPDF were unavailable, and no actual assistive-technology reading session was run. The PDF’s generated outline contains a few visually concatenated words where source headings wrapped; tag and text reading order remain correct, so this is a known non-blocking navigation-quality issue for future derivative work.

## Findings, fixes, and retest

| Finding | Severity / criterion | Fix | Retest |
| --- | --- | --- | --- |
| Skip activation moved the fragment but left focus on `body`. | Major; 2.4.1 | Made the main landmark programmatically focusable. | Browser keyboard test lands on `MAIN#main-content`; focused contract passes. |
| SSR disclosure asserted `aria-expanded="false"` even when native no-script details was opened. | Moderate; 4.1.2 | Removed SSR state and made enhancement initialize/synchronize state and accessible name. | No-script source/native-state and enhanced open/Escape tests pass. |
| Generic CV-unavailable span used an unsupported `aria-label`. | Minor; 4.1.2 | Removed the prohibited ARIA attribute. | axe incomplete result cleared on every route/viewport; contract passes. |
| Compact target could fall below the WCAG 2.2 target-size floor. | Major; 2.5.8; corrected by QA-003 | QA-003 normalized compact targets. | Final all-route 320 px retest: minimum 44 px height; none below 24×24 px. |

## Limitations and known non-blocking issues

- No physical screen reader or other assistive-technology session was available; Browser accessibility-tree and semantic/tag inspection were used. This report does not claim a screen-reader test.
- PAC and veraPDF/PDF-UA validation were unavailable; structural/tag inspection is evidence, not a PDF/UA conformance declaration.
- Browser-native emulation does not expose every OS high-contrast, print, offline, script-disabled, or zoom control. Those paths were cross-checked with supported Browser behavior, Chrome emulation, generated CSS/source, and focused integration tests; limitations are stated rather than silently substituting another Browser for the required manual checks.

## QA-007 handoff

QA-007 should preserve the main landmark’s `tabindex="-1"`, native no-script disclosure semantics, enhancement state synchronization, the absence of ARIA on generic unavailable spans, 44 px default targets, and the accessibility integration contracts. It should rerun the pinned verification and route/viewport axe matrix on its integrated candidate, retain the PDF/OG/lock hashes above unless an explicitly governed derivative is approved, and carry forward the PDF/AT tooling limitations without representing them as completed tests.
