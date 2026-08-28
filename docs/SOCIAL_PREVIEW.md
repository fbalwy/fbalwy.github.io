# Social preview — INT-003 v1

**Status:** Implementation complete; local noindex candidate only  
**Reviewed:** 19 August 2026 (Asia/Riyadh)  
**Output:** `public/og.png`

## Decision

The social preview is a 1200×630 typographic PNG for Faisal Albalwy's personal
academic website. It is deliberately text-only and Faisal-first. The only
institutional treatment is the exact subordinate line `Institutional
affiliation: Taibah University`.

The accepted card contains no university logo or symbol, portrait, pattern,
template media, icon, candidate Alexandria font, Tosh font, remote font or
media, publication title, role, metric, endorsement language, volatile status,
identifier, hidden claim, or production hostname. Removing the earlier role
line was a fail-closed correction: the current canonical career aggregate is
not public, so the card uses only stable identity and site-context copy.

## Visual and accessibility contract

- Background: approved deep navy `#111144`.
- Primary text: approved project white `#FFFFFF`, 17.6844:1 on navy.
- Context text: approved turquoise `#40E0D0`, 10.7716:1 on navy.
- Affiliation text: approved pink `#FFD1DC`, 12.9733:1 on navy.
- Decorative divider: approved royal `#4056E3`, 3.0807:1 on navy and used only
  as a non-text boundary.
- Typeface: the governed system-only stack `ui-sans-serif, system-ui,
  -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; no font file is
  requested, embedded, staged, or promoted.
- Weights: 400, 600, and 700 only.
- Text stays within a 96px horizontal and 80px vertical safe margin.
- The equivalent image description is emitted in both `og:image:alt` and
  `twitter:image:alt`.

Visual inspection passed at 1200×630, 600×315, and 300×158. The name remains
the dominant element, the site context is legible, the affiliation is clearly
subordinate, and no text clips or approaches a platform-safe crop boundary.

## Deterministic source and provenance

The editable source is `assets/social/og-card.html`. The pinned project
Playwright package renders it through the recorded local Chrome channel at CSS
scale 1. The generator permits no image/media element, SVG, canvas,
`@font-face`, URL, remote request, candidate/blocked font, or color outside the
accepted allowlist. It audits exact dimensions, scroll bounds, text safe
margins, and clipping before writing the PNG.

`assets/social/og-card.provenance.json` records the source and output hashes,
byte count, renderer, conversion settings, metadata result, rights boundary,
visual review, accessibility checks, gate state, and open external exceptions.
The checker regenerates the card in a temporary directory and requires a
byte-for-byte match. It accepts only PNG `IHDR`, `IDAT`, and `IEND` chunks, so
ICC, EXIF, timestamps, comments, source paths, and privacy-bearing metadata
fail closed.

Accepted output:

- Dimensions/type: 1200×630, 8-bit RGB, non-interlaced PNG.
- Size: 32,565 bytes against a 153,600-byte budget.
- SHA-256: `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6`.
- Source SHA-256:
  `1088000dd4e93f02439236ea5f5258febf4a8a9b492d52bfd5f660326513643d`.

## Metadata and lifecycle

Every closed INT-001 route receives one exact Open Graph and Twitter-card
field set. Titles and descriptions reuse the approved per-route discovery
contract without rewriting or implying that guarded route content is public.
The shared card is identity/context only, so unavailable routes and the 404
page do not gain a substantive claim.

`og:url` remains identical to the canonical URL. Image URLs use the same
closed HTTPS origin contract: `https://local.invalid/og.png` locally,
`https://ci.invalid/og.png` in CI, and the explicit HTTPS preview origin in
preview mode. Production still fails closed because the release environment
rejects production until a separately authorized origin and release decision
exist. No DNS or provider value is inferred.

The current `noindex, nofollow, noarchive, nosnippet`, disallow-all robots, and
empty sitemap policies remain unchanged. Social metadata coexists with the
INT-002 component; the current non-public build continues to emit zero JSON-LD.

## Staging and resource boundary

The approved `og.png` is the only governed asset copied into public staging.
After robots generation, staging contains exactly `og.png` and `robots.txt`.
The candidate Alexandria font, its license file, logos, CV, protected media,
and every other held source remain excluded. Rendered pages contain no
`img`, `picture`, or `source` element and make no runtime image request; the PNG
is referenced only by metadata. The release manifest identifies it as
`image/png` with the short-revalidation `stable-social-image` cache class.

## Validation evidence

- Exact source/output/provenance, dimension, PNG-chunk, size, palette,
  contrast, safe-margin, privacy, and byte-reproduction checks: pass.
- Eight-route Open Graph/Twitter completeness, uniqueness, route/head parity,
  canonical/sentinel URL policy, and image-alt checks: pass.
- Staging and `dist/` allowlists, zero blocked assets, zero current JSON-LD,
  zero in-page image elements, and zero remote runtime checks: pass.
- Full pinned Node 24.19.0/npm 11.19.0 verification: pass.
- Browser inspection of representative desktop/mobile head and image resource,
  page identity, DOM, console, and network behavior: pass.

## Limitations and QA handoff

The PNG hash is intentionally renderer-sensitive. The accepted provenance
records Playwright 1.62.1 and Chrome 151.0.7922.140; a renderer or system-font
change must fail the recorded hash and trigger a new visual review rather than
silently changing pixels. No live social crawler or production-origin scrape
was attempted because deployment and production publication are out of scope.

- **QA-004:** confirm keyboard/reflow behavior remains unchanged and verify the
  metadata alt is meaningful in accessibility inspection.
- **QA-005:** retest the 153,600-byte image budget, cache behavior, first-load
  resource inventory, and absence of in-page image requests.
- **QA-009:** independently audit every metadata field and the final pixels for
  Faisal-first hierarchy, exact subordinate affiliation, approved palette and
  type, safe crops, and zero logo/portrait/pattern/font/endorsement leakage.

This package does not begin QA, promote content or the CV, deploy, change DNS,
publish production, or begin P9.
