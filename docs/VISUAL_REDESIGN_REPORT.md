# Visual Redesign Report

## Decision

The earlier production candidate was rejected by the site owner on 19 August 2026 because it read as a minimally styled document rather than a distinctive academic website. The replacement direction is an evidence-led editorial system: a dark research identity, numbered scholarly sections, a code-native research constellation, deliberate catalogue typography, and restrained use of Taibah University's approved navy, royal, cyan, turquoise, and neutral palette.

This redesign changes presentation only. The approved English copy, public lifecycle decisions, publication catalogue, research-theme bindings, course list, service records, profile links, contact boundary, CV, privacy controls, and release boundary remain governed by their existing data and validation contracts.

## Accepted concept artifacts

| Surface | Concept file | SHA-256 |
| --- | --- | --- |
| Home, desktop | `design-concepts/redesign-v2/home-desktop-concept.png` | `2846e548d86d823a208701a3edac17466d5d35d672850ee792a4668271c3cc4c` |
| Publications, desktop | `design-concepts/redesign-v2/publications-desktop-concept.png` | `c8037bb0219cb5655c9737006b5102e75ac032fb7feb14c5a6192fc001cadb27` |
| Home, mobile | `design-concepts/redesign-v2/home-mobile-concept.png` | `de745c7749f7877e751f87302574c60110dd354a1f3459f5eacbbd6d51d267cd` |

## Browser review method

- The native in-app Browser was used for visual review and route-level inspection at its native 1280-pixel viewport.
- All seven public routes plus the 404 surface were inspected. Each had one `h1`, zero images, zero forms, and no horizontal overflow.
- Because the in-app Browser did not expose viewport mutation, Playwright CLI was used only as the responsive fallback at a native 390 × 844 viewport.
- Mobile Home, the full-screen navigation state, and Publications were visually inspected. The open menu was corrected after the first review so no underlying page content remains visible.
- The accepted desktop concept and the final full-page Home screenshot were re-opened side by side during the same final QA pass.

## Fidelity comparison

1. **Identity and hierarchy — Pass.** The implementation preserves the oversized two-line name, compact academic role, short research proposition, and asymmetric research-index panel that define the accepted concept.
2. **Colour system — Pass.** The final UI uses the approved navy foundation, royal action surfaces, cyan rules, turquoise emphasis, and quiet white/neutral reading planes without gradients or invented brand colours.
3. **Research visual — Pass with intentional simplification.** The concept's network idea is implemented as an accessible, code-native SVG constellation. It introduces no downloaded image, logo, or remote dependency.
4. **Editorial rhythm — Pass.** Numbered sections, ruled topic cards, publication rows, split teaching/service composition, a strong contact band, and a structured footer replace the prior generic stacked-document rhythm.
5. **Catalogue expression — Pass.** Publications now open with a dark editorial hero and evidence panel, then use featured rows, a latest-work band, a deliberate filter frame, and numbered catalogue records while preserving all 27 canonical work lineages.
6. **Responsive expression — Pass.** The mobile design retains the dominant nameplate, stacked calls to action, research-index panel, readable catalogue hierarchy, and a full-screen keyboard-operable navigation treatment.

## Above-the-fold copy comparison

| Element | Accepted concept | Final implementation |
| --- | --- | --- |
| Name | Faisal Albalwy | Faisal Albalwy |
| Role | Assistant Professor of Cybersecurity | Assistant Professor of Cybersecurity |
| Research proposition | Trustworthy systems across privacy, blockchain interoperability, and AI-enabled threat detection | Same approved proposition, with line wrapping controlled by the live viewport |
| Primary actions | Explore research; View publications; Download CV | Same three actions and order |
| Affiliation | Taibah University · Department of Cybersecurity | Same approved affiliation wording |
| Research index | Three research themes | Same three approved themes, sourced from the governed model |

No concept-only date, metric, bibliographic detail, profile claim, carousel control, or decorative label was copied into the live site.

## Intentional deviations

- Concept-only lock, chain, shield, envelope, social, and download icons were omitted. The live UI uses typography, rules, and one code-native research constellation so it does not depend on unapproved icon or media assets.
- The live Home includes a short `Research and evidence` section before the three theme cards. This preserves the approved evidence explanation and gives the long page a clearer scholarly reading sequence.
- The live footer is more explicit than the visual concept because institutional-affiliation, privacy, inquiry-storage, and external-email boundaries must remain visible.
- The live catalogue uses the exact verified titles, authors, status wording, dates, venues, DOI actions, and 27-record ordering. Any placeholder bibliographic details visible in generated concepts were treated as non-authoritative layout material only.
- System fonts are retained. No remote font or unreleased Alexandria candidate is loaded.
- No logo, portrait, university pattern, gradient, tracking, contact form, or new external runtime dependency was introduced.

## Final evidence artifacts

- `output/playwright/home-desktop-final.png`
- `output/playwright/research-desktop-final.png`
- `output/playwright/home-mobile-redesign.png`
- `output/playwright/home-mobile-menu-final.png`
- `output/playwright/publications-mobile-redesign.png`

The redesign is accepted for final automated validation. Deployment, DNS, indexing, and P9 operations remain outside this decision.
