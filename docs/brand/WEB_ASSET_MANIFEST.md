# BRD-007 v3 — Web asset manifest (accepted conservative fallback; coverage remediation)

**Review date:** 18 August 2026 (Asia/Riyadh)  
**Reviewer:** Codex BRD-007 executor; no institutional release authority  
**BRD-007 status:** **Accepted and complete under the binding text-only fallback; BRD009-01 font-coverage evidence remediated in v3.**  
**Gate:** G0 remains pending the separate BRD-008 and BRD-009 review work, including focused re-audit. It is **not held by the absence of an SVG**. This project-gate acceptance neither requires institutional clearance nor represents it.

## Outcome and scope

V1's logo-conversion validation failed closed: the one permitted derivative did not preserve the protected PDF's visual construction in Chromium, so it was removed. V2 accepted the governing conservative fallback already defined in the brand rules: **no university logo image is published; the complete launch treatment is visible text `Institutional affiliation: Taibah University` plus a verified external university link.** This is the required primary treatment, not a temporary substitute or a weakened affiliation. V3 preserves that history and corrects the Alexandria cmap record after BRD009-01: the prior requested-subset ranges were incorrectly stated as complete retained coverage.

The independently validated Alexandria Latin variable WOFF2 subset and its exact OFL copy remain candidate/unreleased files. Their technical availability does not establish institutional clearance, and project acceptance does not depend on obtaining such clearance or on publishing an affiliation image.

Only the following final BRD-007 files exist:

| Final path | SHA-256 | Size | Status |
|---|---:|---:|---|
| `public/brand/fonts/alexandria-latin-wght.woff2` | `20da87c810ee1119a3be5ea874583b3569feaf1a6696f34820a25a20c26ef8f3` | 67,540 bytes | Candidate/unreleased; technically validated Latin variable subset |
| `public/brand/licenses/OFL-Alexandria-1.1.txt` | `df50e3e7153867b56a0d63ad718f689bbc0cb4aaf6cf19dd0ba38a5196a557af` | exact source copy | Candidate/unreleased license notice |

The requested `public/brand/taibah-university-affiliation-en-horizontal-color.svg` is deliberately **absent**. It is not substituted by an image, a standalone mark, a favicon, a text-to-path reconstruction, or a claim that it was officially supplied. The `public/brand` tree contains only the WOFF2 candidate and the OFL notice listed above.

## Governing evidence and source register

This record follows `AUTONOMOUS_EXECUTION_POLICY.md`, `ACADEMIC_WEBSITE_MASTER_BUILD_PLAN.md`, `WEBSITE_VISUAL_IDENTITY_SPEC.md`, `docs/brand/IDENTITY_SOURCE_REGISTER.md`, `docs/brand/IDENTITY_ASSET_AUDIT.md`, `docs/brand/IDENTITY_DECISION_LOG.md`, `docs/brand/COBRANDING_MODEL.md`, `docs/brand/WEB_BRAND_SPEC.md`, and `content/brand/tokens.json` through BRD-006.

| Registered protected source | SHA-256 | Observed evidence | Rights boundary |
|---|---:|---|---|
| `ملفات الهوية/الشعار/PDF/الشعار بشكل أفقي باللغة الإنجليزية.pdf` | `606a35f0bccffc43492693ea4daa82a542db56c48b7ea2faa6aba4ad3b0f92fb` | One A4, unencrypted PDF 1.4; 841.89 × 595.276 pt; complete English-horizontal colour construction | Package owner authorization is evidence for controlled project review only. It is **not** proof of university/institutional publication, trademark, or web-release clearance. |
| `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-VariableFont_wght.ttf` | `1730226599f9edca98273cdb3ed8afeda28427e7cc535c4521c24c43aafe8953` | Alexandria variable source used only to make the Latin web subset | Use is evidenced by the adjoining OFL; this does not clear university identity assets. |
| `ملفات الهوية/الخطوط/الخط البديل/OFL.txt` | `df50e3e7153867b56a0d63ad718f689bbc0cb4aaf6cf19dd0ba38a5196a557af` | Copyright and SIL Open Font License 1.1 notice | Exact notice retained with the candidate subset; confirm downstream distribution/legal obligations before release. |

No source file was moved, altered, or published. Protected source paths are provenance only and must not be exposed in the site or build output.

## Logo derivative attempt — rejected

### Attempted deterministic construction

The protected English-horizontal colour PDF was rendered and inspected at 300 dpi. Its observed artwork bounds were approximately `x=183.6`, `y=232.8`, `width=474.72`, `height=129.6` in PDF point coordinates. A complete-vector Poppler conversion was then given a controlled viewBox of `171.6 220.8 498.72 153.6`: 12 pt tolerance on every artwork edge. This is a conversion crop only; it does not replace the required external project clear space of `2rem` in `WEB_BRAND_SPEC.md` / `content/brand/tokens.json`.

The conversion contained no raster image, text, font, script, external/local URI, editor metadata, comment, or source-page white rectangle. XML syntax validation passed. No standalone mark was extracted, and the source aspect ratio and full English-horizontal construction were retained. The source is a PDF; no official standalone SVG or official sRGB web palette was supplied, so no such claim is made.

| Attempt | Command/tool setting | Raw size | gzip -9 size | Result |
|---|---|---:|---:|---|
| Vector conversion | `pdftocairo -svg` (Poppler 26.01.0) followed by the controlled viewBox crop above | 2,338,594 bytes | 400,022 bytes | Failed browser fidelity: emblem fills rendered as dense internal line/wire artifacts rather than the smooth source-PDF appearance. |
| Deterministic optimization | `svgo 4.0.2 --multipass` on the failed conversion | 1,041,242 bytes | 55,150 bytes | Same browser fidelity failure. It retained 575 paths, 328 clipPaths, and 21,462 gradient stops; it is not a safe web candidate despite a 55.5% raw reduction. |
| Alternate vector importer | `pstoedit 4.3 -f 'svg:-standalone -border 5'` | 517 bytes | n/a | Blank output; rejected. No Inkscape, `pdf2svg`, or MuPDF converter was installed for a further faithful-vector route. |

### Required visual comparison

The source PDF was rendered locally at 300 dpi, cropped to the same controlled bounds, and shown beside each SVG in Chromium via loopback-only HTTP. Both the raw conversion and SVGO result were examined at CSS widths 12, 13, 14, and 15 rem (16 px root), on `#FFFFFF` and `#F2F2F2`, at normal CSS-pixel capture and high-DPI/device-pixel capture (200% raster inspection). At every size/background, wordmark, aspect, edges, and crop were complete, but the emblem's rendering materially differed from the PDF reference. Therefore the visual-comparison requirement fails.

This failure is not waived by the smaller compressed size. Keeping either SVG in `public/` would misrepresent a protected identity asset and violate the BRD-001/BRD-003 evidence boundary. A later revision requires an authorized official web vector or a converter/rendering route that passes the same comparison without rasterization or construction changes.

**Binding launch treatment:** render the visible text `Institutional affiliation: Taibah University` and provide one verified external university link (on the university name or immediately adjacent, with a clear external-navigation label). The treatment remains text-first and must not imply that the personal site is official, endorsed, or university-owned. It does not need an image, and must remain usable when image loading fails because no image is relied on.

## Alexandria candidate — validated, still unreleased

### Build and coverage

The candidate was generated from the registered variable TTF with FontTools `pyftsubset 4.51`, WOFF2 flavour, `--layout-features='*'`, preserved name IDs `0,1,2,3,4,5,6,8,9,11,12,13,14,25,256–265`, English name language `0x0409`, `--notdef-glyph --notdef-outline --recommended-glyphs`, and recalculated bounds/average width/max context/canonical order.

**Requested subset selection is not actual coverage.** The build request passed `U+0020-007E,U+00A0-00FF,U+0100-017F,U+0180-024F,U+1E00-1EFF,U+2000-206F,U+2070-209F,U+20AC,U+2113,U+2122,U+2190-21FF,U+2212,U+2215,U+2219,U+2260,U+2264,U+2265,U+25CF,U+2713` to `--unicodes`. FontTools retains only glyphs available in the source; it does not create the unavailable code points. The actual output cmap has **606 mappings in exactly 58 contiguous ranges**:

`U+0020-007E,U+00A0-017E,U+018F,U+0192,U+01A0-01A1,U+01AF-01B0,U+01C4-01CC,U+01E6-01E7,U+01EA-01EB,U+01FA-021B,U+022A-022D,U+0230-0233,U+0237,U+1E08-1E09,U+1E0C-1E0F,U+1E14-1E17,U+1E1C-1E1D,U+1E20-1E21,U+1E24-1E25,U+1E2A-1E2B,U+1E2E-1E2F,U+1E36-1E37,U+1E3A-1E3B,U+1E42-1E49,U+1E4C-1E53,U+1E5A-1E5B,U+1E5E-1E69,U+1E6C-1E6F,U+1E78-1E7B,U+1E80-1E85,U+1E8E-1E8F,U+1E92-1E93,U+1E97,U+1E9E,U+1EA0-1EF9,U+2007-200B,U+2010,U+2012-2015,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2032-2033,U+2039-203A,U+2044,U+2070,U+2074-2079,U+2080-2089,U+20AC,U+2113,U+2122,U+2190-2199,U+2212,U+2215,U+2219,U+2260,U+2264-2265`.

The registered source TTF and the output both contain `U+2022` (BULLET), and both lack `U+25CF` (BLACK CIRCLE) and `U+2713` (CHECK MARK). The v2 implication that check and black-circle coverage existed is withdrawn. Unsupported symbols must use the declared system fallback if needed; chart markers must be CSS shapes, not font glyphs. The actual cmap supports the reviewed English academic specimen: English and retained Latin extensions, conventional punctuation, DOI/URL syntax, email/at sign, numerals, dashes/quotes, copyright/registered/trademark/euro, retained directional arrows, bullet, and retained mathematical symbols. It intentionally has no Arabic Unicode mappings because the launch is English only; this Latin subset does not claim Arabic coverage.

Revalidation found structurally valid WOFF2 tables `head`, `hhea`, `maxp`, `OS/2`, `hmtx`, `cmap`, `prep`, `loca`, `glyf`, `name`, `post`, `gasp`, `GDEF`, `GPOS`, `GSUB`, `HVAR`, `STAT`, `avar`, `fvar`, and `gvar`; names remain `Alexandria`, `Regular`, `Alexandria Regular`, and `Alexandria-Regular`. The preserved `wght` variable axis is min 100, default 400, max 900; implementation is constrained to the intended tested weights **400, 600, and 700** only. Same-origin Chromium revalidation loaded the candidate and returned `document.fonts.check` true at 400/600/700 for supported English academic text, accented names, punctuation, DOI/URL syntax, and `U+2022`; no unavailable check or black-circle glyph was tested or claimed. This is a technical rendering check, not an institutional branding approval.

### License and metadata/privacy

`OFL-Alexandria-1.1.txt` is byte-for-byte identical to the registered `OFL.txt` source (SHA-256 `df50e3e7153867b56a0d63ad718f689bbc0cb4aaf6cf19dd0ba38a5196a557af`). The WOFF2 remains 67,540 bytes with SHA-256 `20da87c810ee1119a3be5ea874583b3569feaf1a6696f34820a25a20c26ef8f3`; it includes required technical font names and OpenType metadata but no protected project paths, personal data, source PDF data, authoring history, or raster/image payload. The logo conversion attempt similarly had no public metadata/private path payload, but it remains withheld for visual-fidelity reasons.

## Explicit exclusions and BRD-008 handoff

The following are blocked and were neither created nor copied: every logo image variant (including the English-horizontal SVG), white, dark, bilingual, vertical, Arabic, mark-only, reconstructed/standalone mark, favicon, social image, raster logo, Tosh A or static-font outputs, icons, patterns, photographs, Office/PDF templates, and all derivatives not listed above. This reconciles with BRD-001/BRD-003 and does not relax their unresolved rights, privacy, accessibility, or provenance findings.

**BRD-008 handoff (not work commenced):**

| State to implement/test | Required treatment |
|---|---|
| Primary affiliation | Visible text exactly `Institutional affiliation: Taibah University`, plus one verified external university link. Keep Faisal Albalwy and the personal-site identity primary. |
| Image-unavailable / error / forced-colors / print / narrow viewport | The identical text-and-link treatment remains visible and operable. There is no placeholder, broken image, defective conversion, icon, recoloured mark, or replacement artwork. |
| Image tokens | The `2rem` external clear-space and `12–15rem` image-size tokens are **inactive** for this launch because no university image is used. They must not create empty logo space or be treated as a requirement for text. |
| Accessibility | External-link purpose must be clear, link text must not rely on colour alone, and no redundant adjacent control may target the same university destination. |

BRD-008 must demonstrate these states without adding or retrying an identity asset. BRD-009 may independently review this manifest, the font/OFL, evidence interpretation, and implementation proof. G0 may be closed only by its defined downstream review; a faithful vector and institutional/trademark clearance are not prerequisites for the conservative text-only fallback, and no such clearance is claimed here. No BRD-008 implementation, deployment, DNS, P9, or G0 closure has been performed by BRD-007.
