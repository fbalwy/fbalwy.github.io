# Faisal Albalwy / Taibah University affiliation model

**Work package:** BRD-005 v1  
**Decision date:** 18 August 2026 (Asia/Riyadh)  
**Status:** Binding project model for Gate G0 review  
**Website context:** English-only personal academic website for Faisal Albalwy; not an official Taibah University portal  
**Owned output:** `docs/brand/COBRANDING_MODEL.md`

## 1. Purpose and authority

This document defines how Faisal Albalwy's personal identity and Taibah University affiliation must relate across the website and its directly generated representations. It does not create a joint brand, approve a university sub-identity, or grant institutional, trademark, copyright, or legal clearance.

`docs/brand/IDENTITY_DECISION_LOG.md` is the binding BRD-004 dependency. Its corrections and conservative fallbacks control wherever the current `WEBSITE_VISUAL_IDENTITY_SPEC.md` differs. Evidence authority remains: written guide rule, supplied vector master, consistent official templates, raster exports, then project interpretation.

In scope is the hierarchy, affiliation treatment, permitted contexts, failure behavior, copy semantics, approval language, prohibited constructions, and downstream contract. Out of scope are changes to prior documents, tokens, assets, derivatives, design, content production, implementation, deployment, DNS, analytics, and all P9 work.

### 1.1 Approval and exception terminology

| Term | Exact meaning in this project | It must never be used to mean |
|---|---|---|
| **Owner-authorized** | Faisal Albalwy has authorized the complete supplied English horizontal lockup as a subordinate affiliation mark on his personal site. | Taibah University approval, endorsement, license, or legal clearance. |
| **Gate G0 accepted** or **project-approved** | The BRD-009 audit has accepted a treatment or candidate asset against project evidence, accessibility, and fallback rules. | Institutional permission or transfer of rights. |
| **Institutionally cleared** | Separate written evidence from the Corporate Identity Unit, applicable university authority, or rights holder expressly covers the use in question. | An owner decision, a supplied filename, an asset's presence, or Gate G0 acceptance. |
| **Official supplied master** | The source was delivered in the identity package and is identified by the evidence record as a protected production master. | Permission to publish it directly or proof that this personal site is official. |
| **Project derivative** | A traceable candidate created from an authorized master in BRD-007 and visually verified later. | An official university-supplied SVG or a new logo. |
| **Affiliation mark** | The complete university lockup used to identify a factual institutional relationship. | The site's nameplate, publisher mark, sponsor mark, seal, certification, or personal logo. |
| **Permitted** | Allowed by this owner-authorized project model, subject to Gate G0 and any stated external exception. | Institutionally cleared unless that clearance is separately cited. |
| **Text-only fallback** | Visible `Taibah University` affiliation text plus a verified external university link, without a logo image. | A failure, unofficial redrawing, or weakened affiliation. It is the universal safe treatment. |

Open institutional exceptions from BRD-004 remain open even after this model or Gate G0 is accepted. The project must use the exact terms above in specifications, manifests, review records, issue reports, and approval notes.

## 2. Binding identity architecture

### 2.1 Model

The project uses a **personal-primary, affiliation-secondary, visually separated** architecture:

1. **Primary identity — person:** `Faisal Albalwy` is the site nameplate, document subject, principal heading, metadata subject, and first identity in visual, reading, and accessible order.
2. **Personal evidence — work:** the academic descriptor, research, publications, teaching, leadership, biography, contact pathway, and CV explain Faisal's work. They must not speak for the university.
3. **Text affiliation — relationship:** a factual English affiliation line names Taibah University as an institution connected to Faisal. This layer is required wherever context could otherwise be ambiguous.
4. **Graphic affiliation — optional mark:** the complete English horizontal color lockup may reinforce the text affiliation only in a permitted light-surface affiliation region. It is never necessary for comprehension and may always be omitted.
5. **Context notice — ownership:** a concise statement makes clear that the site is personal and not an official university website.

This is not equal co-branding. The two identities may coexist, but they must not be fused, balanced as peers, or arranged to imply a university unit, official portal, sponsorship, certification, or joint publisher.

### 2.2 Required dominance and separation

- `Faisal Albalwy` must be identifiable before the university name or mark in visual order, DOM order, page title, social metadata, print title, and screen-reader reading order.
- The personal nameplate must remain the header's identity anchor and homepage hero focal identity.
- Text affiliation must be introduced as a relationship, not as a second site title. Use a label or sentence such as `Institutional affiliation: Taibah University`.
- The graphic mark, when used, must occupy its own affiliation region after the personal identity has been established. It must not share a baseline, bounding box, rule, capsule, badge, or apparent lockup with Faisal's name or descriptor.
- The mark must remain subordinate under ordinary viewing and a blur/squint hierarchy check: a visitor must perceive Faisal and the personal academic purpose before the institution.
- The mark must have the dedicated empty area required by the guide. BRD-006 may define a project safety token and BRD-008 must validate it; neither may describe that value as an official university formula.
- University colors may align the site visually but do not change the site's ownership, speaking voice, structured-data publisher, or hierarchy.
- If any context cannot preserve hierarchy, separation, surface, clear space, or legibility, it must use the text-only fallback.

### 2.3 Required English and variant policy

- The website and affiliation treatment are English only.
- The only graphic configuration in scope is the **complete English horizontal color lockup** sourced from the protected PDF master and later prepared as one traceable BRD-007 project derivative.
- Bilingual, Arabic, vertical, white, detached-symbol, reconstructed, and CMYK variants are excluded from this model. Their presence in the package does not create a permitted context.
- The complete color lockup may appear only on white or very light gray. No English full-color-symbol/white-wordmark deep-navy source is supplied; none may be synthesized.
- The protected PDF must never be served directly. No logo image may be released before the candidate derivative passes BRD-007 controls and Gate G0.

## 3. Affiliation treatments

### 3.1 Universal text treatment

The text-only treatment is valid on every surface, viewport, output mode, and failure state. It consists of:

- a visible relationship label or sentence naming `Taibah University`;
- a verified external link to the university, either on the university name or immediately adjacent;
- no university symbol, improvised monogram, or logo-derived container; and
- the site-ownership notice where a visitor could otherwise infer university publication or endorsement.

The relationship line must not invent a title, department, college, employment status, endorsement, or partnership. `STR-002` must finalize the descriptor and current-role wording from verified evidence while preserving this hierarchy.

### 3.2 Optional graphic treatment

The only permitted graphic treatment is one intact English horizontal color lockup in a dedicated white or very-light-gray affiliation region. It is subject to all of the following:

- maximum one university lockup occurrence per rendered webpage;
- default location is the global footer's separate light affiliation region;
- on the About page only, the mark may instead appear in one dedicated affiliation panel when the footer remains text-only; the two locations are mutually exclusive;
- visible text must identify the relationship as an affiliation;
- the university mark must not be the first, largest, or most visually salient identity;
- the mark must preserve natural proportions, complete elements, guide clear space, guide colors, and left alignment for English;
- it must not overlap a border, pattern, photo, external-link glyph, name, title, or other graphic;
- the candidate derivative and context must have passed BRD-007, BRD-008, and BRD-009 checks; and
- any failure activates the text-only treatment without loss of information or navigation.

Logo use is optional even after Gate G0. Text affiliation is required for meaning; the logo is redundant reinforcement.

### 3.3 Site-ownership and endorsement-risk copy

Use the following semantic content unless `STR-002` makes a narrower factual edit that preserves every proposition:

**Affiliation label**

> Institutional affiliation: Taibah University

**Persistent or About/footer context notice**

> This is Faisal Albalwy's personal academic website. Taibah University is shown as his institutional affiliation; this is not an official Taibah University website.

**External link label**

> Taibah University website (external)

Do not use `endorsed by`, `approved by`, `in partnership with`, `in collaboration with`, `powered by`, `on behalf of`, `official site`, `official faculty site`, or comparable language unless separately verified evidence supports that exact relationship. Do not use the guide's institutional promises, campaign lines, values, or `we/our` voice as Faisal's claims.

## 4. Surface-by-surface application matrix

| Surface | Primary personal treatment | Binding university treatment | Logo permission and failure rule |
|---|---|---|---|
| **Global header — desktop/wide** | `Faisal Albalwy` is the sole nameplate and homepage link; navigation and personal actions follow. | Concise text affiliation may appear on a separate line or region after the name. | **No university logo.** Prevents a dual masthead or official-portal reading. Link the text externally only if the header remains uncluttered; otherwise link it in the footer. |
| **Global header — narrow/mobile** | Name remains first and must not be replaced by initials or a mark. | Short text affiliation may remain, move below the header, or defer to the footer. | **No university logo.** Never crop, detach, stack, or substitute a symbol to save space. |
| **Home hero and page intros** | Faisal, verified role/descriptor, page purpose, and personal calls to action lead. | One supporting text affiliation line only. | **No university logo or university-derived contour.** The institution must not become the hero focal point. |
| **Global footer — white/very-light-gray** | Personal copyright/ownership, navigation, contact, and update context remain clear. | Visible affiliation text and verified external university link. A distinct affiliation region follows the personal/site information. | **Permitted default logo context:** one complete color lockup after Gate G0, subject to hierarchy, spacing, and legibility tests. Text-only remains valid. |
| **Global footer — deep navy or other dark surface** | White personal/site text and links may use the dark footer. | Use text-only affiliation on the dark surface, or place the complete color lockup in a genuinely separate white/very-light-gray affiliation region. | **Never place or synthesize the color lockup directly on deep navy.** If the light region appears attached to the personal nameplate, overwhelms it, or cannot preserve spacing, use text-only. |
| **About biography and current-role block** | Biography, verified role, and career evidence are primary. | State Taibah University in prose or a labelled affiliation field; link once to the verified external university site. | Text-only by default. The About page may use the one permitted light affiliation panel only when the footer has no logo. Never place the mark beside a portrait, signature, or personal heading as a joint identity. |
| **CV page, CV metadata, and downloadable CV** | Faisal's name, CV title, update date, and document ownership are primary. | Verified affiliation in text. | **No university logo under this model.** Do not convert the personal CV into university stationery or copy letterhead/certificate treatments. A separate future official CV rule would require its own authority. |
| **Contact page and email pathway** | Faisal's inquiry categories and institutional email are primary. | Text affiliation and a verified external university link may support context. | **No university logo.** A university-domain email does not make the page an official contact channel. Do not copy university phone/address/QR/social data from templates. |
| **Research, publications, teaching, and leadership/service content** | Faisal's evidence, authorship, roles, and records lead. | Mention affiliation only where factually relevant and verified. | **No repeated logo on cards, records, project blocks, publication rows, course lists, or service entries.** Footer rule applies once. |
| **404, error, empty, loading, and offline states** | Personal site name and recovery action lead. | Omit affiliation or use concise text when useful. | **No additional logo.** Inherited footer candidate may remain only if the full state layout still passes; otherwise text-only. |
| **Social/Open Graph preview image and metadata** | Faisal's full name is first; personal academic subject/title follows. | Official base colors may provide restrained visual alignment; affiliation may appear as subordinate text if useful and verified. | **No university logo, standalone symbol, logo-contour social container, avatar treatment, or template image by default.** Social metadata must not name Taibah University as publisher/owner of the personal site. |
| **Favicon, avatar, app/touch icon, pinned icon** | No improvised Faisal monogram or competing personal logo is created in this phase. | None. | **No university mark or derived symbol.** Default to no custom favicon until a clearly non-university utility is separately approved; never extract the dome/symbol. |
| **Browser print styles and printable webpage views** | Faisal's name and document/page title lead in text. | Text affiliation and plain external URL or link label when useful. | **No university logo by default.** Avoid color-profile, sizing, and official-stationery implications. Do not use supplied letterhead, A4, notebook, presentation, or certificate templates. |
| **Small screens, high zoom, reflow, forced colors, or image failure** | Personal name and content remain intact and first. | Text affiliation remains visible and operable. | Use the full logo only if the exact context passes the BRD-008 project-tested minimum and safety-area checks. Otherwise remove the image, never its text meaning. Do not horizontally scroll, compress, wrap, crop, or detach the lockup. |

## 5. Responsive, accessibility, and failure rules

### 5.1 Responsive rules

- The personal nameplate may wrap as text but must not collapse to a custom monogram.
- The affiliation mark is never a responsive substitute for the personal name.
- The intact mark may move only between the mutually allowed light affiliation regions; its parts may not reflow, stack, or reorder.
- BRD-008 must record a project-tested minimum rendering for the complete English wordmark at normal viewing, 200% zoom, 400% reflow, and representative mobile widths. That value is a project test result, not an official minimum.
- When available width, clear space, contrast, or hierarchy is uncertain, use text-only affiliation. No breakpoint is allowed to make the university more prominent than Faisal.

### 5.2 Accessible naming and link semantics

- `Faisal Albalwy` is the homepage link's accessible name. A university image must never be used as that link.
- The preferred affiliation link is visible text: `Taibah University website (external)`. Its destination must be a verified official HTTPS university URL.
- External university links open in the same tab by default. If a later interaction rule opens a new tab, the visible or accessible label must announce that behavior and the implementation must apply safe external-link attributes.
- Do not create two adjacent focus targets to the same university destination. When visible text already supplies the affiliation link, render the adjacent redundant logo as non-interactive with empty alternative text.
- If the logo is the sole linked content in its permitted region, its accessible name must be `Taibah University website (external)`; the image alternative must not add `official`, `partner`, `sponsor`, or `approved`.
- If an unlinked logo conveys affiliation without adjacent equivalent text, its alternative text is `Taibah University`. Prefer adjacent visible text so image failure does not remove the relationship.
- An external-link glyph, if used, is separate from the logo artwork and clear-space area, cannot be the only external cue, and must be hidden from assistive technology when its meaning is already in the text.
- Focus outlines, pointer targets, and accessible names belong to the link or component, never inside or by alteration of the logo artwork.
- The external university link and institutional email are separate destinations with distinct accessible names. Do not wrap both in one control.

### 5.3 Fail-closed conditions

Switch immediately to the text-only fallback when any of the following occurs:

- the BRD-007 derivative is absent, unaccepted, corrupted, or fails its source comparison;
- the surface is not white or very light gray;
- the full wordmark is not immediately legible or exceeds the tested context;
- clear space, natural aspect ratio, left alignment, color fidelity, or visual separation cannot be preserved;
- the mark competes with Faisal's name, descriptor, portrait, navigation, action, or page heading;
- CSS, images, forced-color behavior, print output, or responsive layout makes the mark ambiguous or incomplete;
- a new language, institution, partner, sponsor, department, college, or official-unit relationship is introduced without governance; or
- a university or rights authority objects, denies use, or supplies a controlling rule.

The fallback order is: remove the logo image; retain verified text affiliation and external link; retain the personal name and site function. Never repair a failure by recoloring, redrawing, detaching, shortening, or substituting another supplied logo.

## 6. Prohibited co-branding catalogue

### 6.1 Construction and modification

- No single Faisal/Taibah artwork, combined wordmark, endorsed lockup, unit-style lockup, monogram, seal, badge, signature mark, or connecting device.
- No placement of `Faisal Albalwy`, a title, department, college, descriptor, domain, or slogan inside the mark's clear space or apparent bounding box.
- No detached university symbol, dome, line fragment, logo-contour container, wordmark-only crop, stacked mobile version, or recreated university typography.
- No redrawing, tracing, recoloring, tinting, opacity change, gradient, mask, filter, outline, bevel, shadow, glow, animation, skew, rotation, compression, stretching, cropping through, or rearrangement.
- No conversion of the protected PDF except the one traceable BRD-007 complete-color project derivative; no claim that it is an official supplied SVG.

### 6.2 Hierarchy and placement

- No university logo in the global header, masthead, hero focal area, main navigation, primary call to action, portrait treatment, or personal signature area.
- No equal-sized side-by-side marks, `Faisal Albalwy | Taibah University` graphic construction, shared plaque, joined rule, shared pill, or shared background device that reads as one logo.
- No university mark larger, earlier, more repeated, or more salient than the personal identity.
- No repeated logo on content cards, publication records, research projects, teaching items, service records, contact methods, forms, errors, loading states, or decorative backgrounds.
- No random repetition, watermarking, patterning with the mark, or use as a certification/approval stamp.

### 6.3 Variant, surface, and asset use

- No bilingual, Arabic, vertical, white, CMYK, raster-letterhead, template, certificate, icon-sheet, pattern, or embedded-photo asset in the co-branding treatment.
- No color lockup directly on deep navy, royal blue, bright sky blue, teal, black, photography, gradients, translucent panels, patterns, or uncertain surfaces.
- No synthesized English deep-navy variant and no substitution of the conditional white PNG under this model.
- No direct web delivery of protected PDF/Office sources or source-document metadata.
- No use below the project-tested legibility threshold or with an invented official pixel minimum/clear-space formula.

### 6.4 Digital identity and endorsement

- No university-derived favicon, avatar, app icon, touch icon, pinned icon, social-profile image, Open Graph focal mark, or logo-contour social container.
- No site title, breadcrumb root, metadata title, account name, copyright owner, schema publisher, or email sender that presents Taibah University as the owner of the personal site.
- No copying of the guide's institutional website header, navigation, campaign line, QR code, social handle, contact data, legal notice, or portal behavior.
- No `official`, `endorsed`, `approved by Taibah University`, `in partnership with`, `sponsored by`, or equivalent claim without exact separate evidence.
- No implication that university colors, an institutional email address, owner authorization, or Gate G0 acceptance provides institutional clearance.
- No third-party or partner logo introduced beside the university mark without its own verified rights, hierarchy, spacing, and governance decision.

## 7. Preserved exceptions and closure owners

| Exception | Project status | Binding fallback | Authority that can close or change it |
|---|---|---|---|
| Institutional/legal clearance for the affiliation mark on a personal domain | **Open — external** | Owner-authorized subordinate use under Gate G0; on objection or denial remove the image and retain verified text affiliation. Never claim endorsement. | Corporate Identity Unit or applicable university/rights authority, through written clearance or controlling published policy. |
| University identity category for a faculty personal site and general co-branding rules | **Open — external; project model resolved** | Do not assign an institutional category; use this personal-primary affiliation-only model. | Corporate Identity Unit may supply an institutional classification. BRD-005 controls the project until then. |
| Digital clear-space formula and English pixel minimum | **Open — external; deferred project testing** | Project safety token and project-tested minimum; text-only on failure. | BRD-006/008/009 for project values and validation; Corporate Identity Unit for an official formula/minimum. |
| Exact English deep-navy variant | **Open — external** | Light affiliation region or text-only. Never synthesize. | Corporate Identity Unit can provide/authorize an exact asset. |
| Supplied English white PNG | **Externally unproven; excluded by this model** | Do not depend on or use it; color-on-light or text-only covers every surface. | A later owner-authorized revision after institutional evidence and BRD-007/008/009 review. |
| Standalone digital symbol/favicon/avatar permission | **Open — external; prohibited for project** | No university-derived favicon/avatar/container; no custom favicon by default. | Corporate Identity Unit for university-symbol use; any separate personal utility still requires project governance and must not become a personal logo. |
| Complete lockup in social previews | **Externally unproven; excluded by default** | Faisal-first typography and official base colors without the university mark. | Later project revision through BRD-005/006/009 plus any necessary institutional evidence. |

Gate G0 may accept these fallbacks. It cannot convert any open external status into institutional clearance.

The guide identifies the Corporate Identity Unit at `id@taibahu.edu.sa`. Contact information records the external closure owner; it does not authorize BRD-005 to send a request or assume an answer.

## 8. Downstream handoff requirements

| Downstream work | Required use of this model |
|---|---|
| **BRD-006 — web brand rules/tokens** | Define separate personal-nameplate, affiliation-text, affiliation-region, and optional affiliation-mark semantics; create only project-labelled spacing/size behavior; support text-only and image-failure states; do not create co-brand geometry, Tosh usage, branded patterns, or university-derived icons. |
| **BRD-007 — web assets** | Prepare at most the one complete English horizontal color SVG candidate from the protected PDF, with provenance, metadata scrub, source comparison, sRGB/viewBox, and no public release before Gate G0. Do not create dark, white, vertical, bilingual, detached, favicon, social, pattern, or icon derivatives for this model. |
| **BRD-008 — application board** | Demonstrate name-first hierarchy, header text affiliation, footer color-on-light and text-only alternatives, deep-navy footer with separate light region, About alternative, narrow/zoom/image-failure states, accessible external link, clear space, and non-endorsement notice. Include a failing example only when clearly labelled prohibited. |
| **BRD-009 — identity audit / Gate G0** | Verify one-lockup maximum, English color-on-light only, derivative fidelity, personal-first visual/DOM order, copy semantics, link names, responsive omission, prohibited catalogue, and carried external exceptions. State project acceptance separately from institutional clearance. |
| **STR-002 — editorial direction** | Finalize the verified English role/descriptor and affiliation wording. Preserve `Faisal Albalwy` first, neutral relationship language, the not-official-site meaning, and the prohibited endorsement claims. |
| **Content and structured data** | Treat Faisal as the page/site subject. Verify every role and affiliation fact. Model Taibah University only as an affiliation where schema permits; do not declare it site publisher/owner without evidence. Suppress stale or unresolved relationships. |
| **Design and BLD-001/003/009** | Implement the separated hierarchy and universal text fallback in header, footer, About, Contact, CV, and operational states. Never solve layout pressure by modifying the lockup. Error and small-screen states must retain name, affiliation text when relevant, and usable links. |
| **INT-001/002/003** | Use no university-derived favicon. Keep canonical/page/social titles Faisal-first; keep social previews logo-free by default; do not name the university as publisher. External links and structured affiliation must use verified destinations/facts. |
| **QA-003/004/006/009** | Test visual/DOM hierarchy, mobile/reflow/zoom, accessible names and focus, image-disabled and forced-color behavior, metadata/structured-data ownership, external-link behavior, asset provenance, privacy, licensing, and every prohibited context. |

## 9. Acceptance checklist

BRD-005 is complete only if every answer below is `yes`:

- Is Faisal unambiguously the first and primary identity in visual, semantic, metadata, social, print, and accessible order?
- Is Taibah University always described as a subordinate factual affiliation and never as site owner, publisher, sponsor, or endorser?
- Is the complete English horizontal color lockup the only graphic university configuration, limited to one mutually exclusive light affiliation region after Gate G0?
- Do the header, hero, CV, Contact, content records, print, social preview, favicon/avatar, and unsupported/dark contexts prohibit the logo?
- Does a deep-navy footer use either a separate light affiliation region or text-only affiliation?
- Are bilingual, vertical, white, detached, recolored, redrawn, responsive reconstructions, and composite marks prohibited?
- Are text affiliation plus a verified external link available as the universal fallback for missing assets, small screens, zoom, print, forced colors, unsupported surfaces, and objections?
- Are accessible naming, focus, alternative text, duplicate-link, external-navigation, and image-failure semantics explicit?
- Is neutral affiliation/not-official-site copy provided, with endorsement-risk wording prohibited?
- Are owner authorization, Gate G0 acceptance, and institutional/legal clearance precisely separated?
- Are all BRD-004 co-branding exceptions preserved with fallbacks and closure owners?
- Are BRD-006/007/008/009, STR-002, build, integration, and QA handoffs actionable without defining tokens, creating assets, designing pages, or implementing code here?

## 10. Validation result

- Required surfaces are covered: desktop and mobile headers, hero/intros, light and deep-navy footers, About/bio, CV/download, Contact/email, core content, operational states, social previews/metadata, favicon/avatar/app icons, browser print, narrow screens, zoom/reflow, forced colors, and image failure.
- Required controls are covered: hierarchy, separation, permitted logo location/count, English/color/light-surface restriction, responsive failure behavior, accessible naming and link semantics, endorsement-risk copy, prohibited constructions, precise approval terminology, and exception ownership.
- The universal text-only affiliation plus verified external link preserves meaning when the mark is unavailable or inappropriate.
- No prior document, dashboard, source asset, token, derivative, design, content page, implementation file, deployment, DNS setting, or P9 output was changed.

**BRD-005 result:** accepted as complete. The next dependency-eligible work package is BRD-006.
