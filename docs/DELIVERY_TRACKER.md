# Delivery tracker — Faisal Albalwy academic website

**Control snapshot:** dashboard revision 64, `2026-08-19T14:00:00+03:00` (AST)  
**Dashboard precedence:** `ACADEMIC_WEBSITE_EXECUTION_DASHBOARD.html` is the interactive execution-state source of truth. This file is the human-readable delivery and control view. If they differ, do not infer completion here: reconcile the dashboard first and then update this tracker in the same coordination action.

## Scope, status, and operating rules

The authorized denominator is **58 steps: P1–P8 only**. At this snapshot: **58 completed, 0 in progress, 0 locked/pending steps, 0 revalidation required**. Completion is evidence-based. G5 remains a separate pending manual gate, and no launch or P9 authority is implied.

| Status | Meaning in this tracker |
|---|---|
| Completed | Dashboard records coordinator-validated completion evidence; still subject to reopening when a prerequisite/control changes. |
| In progress | Issued and actively owned; no completion or deliverable acceptance is implied. |
| Locked/pending | Not currently eligible because a dependency, gate, or required prior output has not passed. |
| Revalidation required | A completed item has been invalidated by an upstream change; none at this snapshot. |

P9 is deliberately **excluded** from the denominator and from execution under the current authorization. Gate G5 is the manual stop: neither QA acceptance nor this tracker authorizes deployment, DNS, production publication, webmaster actions, or P9.

### Gate reconciliation

| Gate | Mode | Prerequisite | Revision-64 state | Control / next action |
|---|---|---|---|---|
| G0 | Pre-authorized | BRD-009 | **Approved** | Brand system accepted as conservative Faisal-first, English-only, text-affiliation/no-logo; 14 controlled exceptions remain. Reopen for any identity source, hierarchy, official URL, logo/media, token, typeface, asset-rights, or no-logo-contract change. |
| G1 | Pre-authorized | STR-002, STR-003, STR-004 | **Approved** | Positioning, frozen IA, source/privacy rules accepted. Reopen for strategy, governance, English-only, contact/no-analytics, sitemap-claim-type, or material IA change. |
| G2 | Pre-authorized | CNT-009 | **Approved** | Marker-free seven-route copy pack accepted: 35 approved claims, 20 suppressions, canonical publications, schedule-backed courses, minimal verified service facts, and zero privacy/marker findings. Reopen on governed fact/source/status/privacy change. |
| G3 | Pre-authorized | DES-005 | **Approved / revalidated** | Owner-rejected basic presentation was replaced by redesign-v2: dark research identity, numbered editorial sections, code-native constellation, deliberate catalogue hierarchy and full-screen mobile navigation. Concept/live fidelity, eight-route Browser review, 390×844 responsive review and full pinned verification pass; no logo/media/gradient or governed-content change. |
| G4 | Pre-authorized | BLD-009 | **Approved** | Integrated preview and complete operational states passed; contact remains email-only, analytics remains off, and no content/CV promotion or production authority is implied. |
| G5 | Manual stop | QA-008 | Pending manual owner decision | QA-008 supplies provisional visitor-journey acceptance and known issues only; stop for explicit production permission. |

## Reconciled work packages

Accountable roles are delivery roles, not invented people. “Evidence/status” is the revision-63 acceptance record for completed work; otherwise it states the required acceptance artifact without treating it as accepted.

| ID | Phase | Model / effort | Dependencies and gate | Owned deliverable | Accountable role | Current state; evidence/status | Key risk / next action |
|---|---|---|---|---|---|---|---|
| BRD-001 | P1 | Terra / high | — | `docs/brand/IDENTITY_SOURCE_REGISTER.md` | coordinator | **Completed** — 78-page guide + 40 identity files; 41/41 sources covered | Source change → evidence steward opens G0 review. |
| BRD-002 | P1 | Sol / xhigh | BRD-001 | `docs/brand/UNIVERSITY_IDENTITY_EVIDENCE.md` | design owner | **Completed** — all 78 pages mapped and classified | Rule/source conflict → reopen affected G0 control. |
| BRD-003 | P1 | Terra / high | BRD-001 | `docs/brand/IDENTITY_ASSET_AUDIT.md` | privacy/rights reviewer | **Completed** — 40 files reconciled for rights, privacy, access, derivatives | Asset/rights change → hold use and revalidate. |
| BRD-004 | P1 | Sol / xhigh | BRD-002, BRD-003 | `docs/brand/IDENTITY_DECISION_LOG.md` | coordinator | **Completed** — 22 decisions, 14 controlled exceptions, 20 corrections | Preserve exception boundary; route changes through G0. |
| BRD-005 | P1 | Sol / xhigh | BRD-004 | `docs/brand/COBRANDING_MODEL.md` | design owner | **Completed** — Faisal-first hierarchy and text fallback validated | Endorsement ambiguity → preserve personal-site/text-affiliation treatment. |
| BRD-006 | P1 | Sol / xhigh | BRD-004, BRD-005 | `docs/brand/WEB_BRAND_SPEC.md`; `content/brand/tokens.json` | design owner | **Completed** — 16 families, 221 tokens, 8 swatches, 17 ratios | Token/type change → G0-dependent design/build revalidation. |
| BRD-007 | P1 | Terra / high | BRD-003, BRD-006 | `public/brand/`; `docs/brand/WEB_ASSET_MANIFEST.md` | privacy/rights reviewer | **Completed** — manifest v3 corrected cmap evidence; WOFF2/OFL hashes unchanged | Blocked/unlicensed assets → retain no-logo and approved-font boundary. |
| BRD-008 | P1 | Terra / high | BRD-006, BRD-007 | `docs/brand/BRAND_APPLICATION_BOARD.pdf`; editable source | design owner | **Completed** — HTML/PDF v2 validated for token-only/no-logo states | Visual regression → revalidate G0 use rules. |
| BRD-009 | P1 | Sol / xhigh | BRD-002–008 | `docs/brand/BRAND_COMPLIANCE_REVIEW.md` | QA reviewer | **Completed** — v2 closed three v1 blockers; G0 PASS recommended | Maintain independent identity audit at QA-009. |
| STR-001 | P2 | Sol / high | G0 | `docs/PROJECT_BRIEF.md` | coordinator | **Completed** — outcomes, constraints, risks, non-goals and handoffs validated | Scope/launch-operations drift → retain G5/P9 boundary. |
| STR-002 | P2 | Sol / high | STR-001, BRD-005, BRD-006 | `docs/EDITORIAL_DIRECTION.md` | editorial reviewer | **Completed** — positioning, voice, naming and affiliation rules validated | Unsupported/promotional wording → CNT-009 suppresses it. |
| STR-003 | P2 | Sol / high | STR-001, STR-002 | `docs/INFORMATION_ARCHITECTURE.md` | coordinator | **Completed** — seven HTML routes + CV, navigation, states, task paths validated | Structural route change → revise/reopen G1 as required. |
| STR-004 | P2 | Sol / xhigh | STR-001 | `docs/CONTENT_GOVERNANCE.md` | evidence steward | **Completed** — authority, lifecycle, privacy/rights, freshness and reopen rules validated | Claim/privacy policy change → trace impact and reopen G1. |
| STR-005 | P2 | Terra / medium | STR-003, STR-004 | `docs/DELIVERY_TRACKER.md` | coordinator | **Completed** — 58 steps, six gates, outcomes, risks, routes, owners and update protocol reconciled | Maintain dashboard precedence and refresh this snapshot after execution changes. |
| CNT-001 | P3 | Terra / high | STR-004 | `docs/EVIDENCE_REGISTRY.md` | evidence steward | **Completed** — v2 has 179 explicit claims, 50 sources, valid transitions, zero missing refs/leaks | Preserve v1 failure history and use only explicit rows for downstream joins. |
| CNT-002 | P3 | Sol / high | STR-002, CNT-001 | `content/pages/about.md` | content owner | **Completed** — nine-module fail-closed pack; 35 known claims; privacy/source checks pass | CNT-009 must register/resolve primaries or suppress marked copy. |
| CNT-003 | P3 | Sol / xhigh | STR-002, CNT-001 | `content/pages/research.md` | content owner | **Completed** — seven-module fail-closed authoring pack; 6 themes, 6 project fields and 28 publication candidates mapped | CNT-009 must resolve/remove all internal markers before public use. |
| CNT-004 | P3 | Sol / xhigh | CNT-001, STR-004 | `content/data/publications.json`; conflict log | publication curator | **Completed** — 31 candidates → 27 canonical, 1 held, 3 linked; 26 DOIs + thesis | Preserve JNMES hold and version/duplicate lineage. |
| CNT-005 | P3 | Sol / high | CNT-003, CNT-004 | `content/pages/publications.md`; selection log | publication curator | **Completed** — 27-record contract; latest 5, featured 4, metric-free full decision ledger | Recompute on catalogue/status/notice/research-framing change. |
| CNT-006 | P3 | Terra / high | CNT-001, STR-004 | `content/pages/teaching.md` | content owner | **Completed** — 44 occurrences, 19 title candidates, and 12 supervision candidates mapped fail-closed | CNT-009 must approve titles or suppress; no schedule/student data. |
| CNT-007 | P3 | Sol / high | CNT-001, STR-002, STR-004 | `content/pages/leadership-service.md` | content owner | **Completed** — 39 claims; six rejections and review conflict preserved; zero public facts | CNT-009 must resolve authority/dates or suppress modules. |
| CNT-008 | P3 | Sol / high | CNT-002–007 | Home/contact/UI copy | editorial reviewer | **Completed** — 20/20 route, state, privacy, stable-ID, brand and resilience checks | Final public wording remains owned by CNT-009. |
| CNT-009 | P3 | Sol / xhigh | CNT-008 | `docs/CONTENT_REVIEW.md`; approved copy pack | editorial reviewer | **Completed** — G2 PASS; seven routes, 35 approved/20 suppressed claims, 27 publications, 19 courses, and zero marker/privacy findings | Revalidate volatile role/email/publication/service facts before governed freshness deadlines. |
| DAT-001 | P4 | Sol / high | STR-003, CNT-003, CNT-004 | `content/schemas/` | technical owner | **Completed** — 12 schemas; 23 aggregate checks; 14 intended failures; catalogue compatible | Preserve fail-closed render and cross-record validation in build. |
| DAT-002 | P4 | Terra / high | DAT-001, CNT-009 | `content/data/` | technical owner | **Completed** — 71 governed records across 11 collections; 23/23 + Ajv pass; zero public/publish | Preserve deterministic QA-007-only promotion and source catalogue immutability. |
| DAT-003 | P4 | Terra / medium | CNT-001, STR-004, BRD-007 | `docs/ASSET_MANIFEST.md` | privacy/rights reviewer | **Completed** — 50 sources + 8 needs; zero public assets; sole English-CV derivative held | DAT-004 must pass the full privacy/rights/accessibility checklist. |
| DAT-004 | P4 | Terra / high | DAT-003, G2 | public English CV; approved media | privacy/rights reviewer | **Completed** — corrected five-page tagged PDF; 27 publications, 19 courses, 31 links, full visual/privacy/metadata checks | Keep exact derivative internal-only/outside public staging until QA-007 promotion. |
| TEC-001 | P4 | Sol / high | STR-003, DAT-001, BRD-006, BRD-007 | `docs/ARCHITECTURE_DECISION.md` | technical owner | **Completed** — verified Astro 7 static ADR, publish-only projection, allowlisted assets, budgets and rollback | Major/host/runtime change requires ADR revalidation. |
| TEC-002 | P4 | Terra / high | TEC-001 | reproducible project skeleton | technical owner | **Completed** — exact pins, clean install, 5/5 tests, zero advisories, strict route/public boundary, 0 JS baseline, and 9/9 reproducible artifacts | Scope-safety fingerprints and formatter exclusions must remain green. |
| TEC-003 | P4 | Terra / high | TEC-001, TEC-002 | environment/release configuration | technical owner | **Completed** — four-mode policy, strict headers/noindex, immutable manifest and 9/9 local rollback tests; host unselected | Resolve full host capability evidence before G5/P9; never weaken routing/security policy. |
| DES-001 | P5 | Sol / high | STR-002, STR-003; G0, G1 | `docs/VISUAL_DIRECTION.md` | design owner | **Completed** — Evidence in the Margins accepted with no-image/content-density holds | Preserve research-first claim/evidence hierarchy and G0 controls. |
| DES-002 | P5 | Sol / high | DES-001, BRD-006 | `docs/DESIGN_TOKENS.md` | design owner | **Completed** — 203 UI tokens; 181/181 aliases resolve; zero brand invention | Preserve immutable baseline and content-pressure test holds. |
| DES-003 | P5 | Sol / high | STR-003, CNT-008, DES-002 | responsive wireframes | design owner | **Completed** — 31 specimens; all routes/states; viewport/reflow/no-script/mode/link checks passed | Preserve task hierarchy and synthetic-only design evidence in DES-004/005. |
| DES-004 | P5 | Sol / high | DES-003, DAT-001 | `docs/COMPONENT_INVENTORY.md` | design owner | **Completed** — 42 components, 120 variants, 136 states, 12 machines, exact 31-specimen/203-token coverage | Preserve component/data/accessibility contracts in prototype/build. |
| DES-005 | P5 | Sol / xhigh | DES-002–004, BRD-008, BRD-009 | responsive design prototype | design owner | **Completed / revalidated** — redesign-v2 concept family and live implementation replace the owner-rejected basic treatment; concept/live desktop-mobile comparison, eight-route review, mobile-menu correction and full verification pass; evidence in `docs/VISUAL_REDESIGN_REPORT.md` | Preserve the evidence-led editorial hierarchy, approved palette, no-logo/no-media boundary and code-native visual treatment. |
| BLD-001 | P6 | Terra / high | TEC-002, BRD-007; G3 | global application shell | technical owner | **Completed** — exact five-item navigation, actions, complete footer, text affiliation, system font, unit-safe tokens, mobile Escape/focus; 11-test/full-verify/Browser pass | Preserve the guarded shell and token generator across route implementation. |
| BLD-002 | P6 | Terra / high | BLD-001, DAT-002, DAT-004 | `/` | technical owner | **Completed** — real aggregate wired through typed publish guards; current dist remains record-free/unavailable, while an executable non-emitted fixture proves the exact Home module order, 3 themes, 4 featured works, CV fallback and promotion-ready behavior; full verify and post-wiring Browser check pass | Preserve append-only promotion behavior and prevent bibliographic duplication or pre-approval leakage. |
| BLD-003 | P6 | Terra / high | BLD-001, CNT-002, CNT-008, DAT-004 | `/about`, `/contact`, CV route | technical owner | **Completed** — exact guarded About records, mail-only Contact, shared profile gating, and full hash/metadata CV contract passed 31-test verify plus four-width Browser checks; PDF remains absent/404 | QA-007 alone may authorize the exact reviewed CV and governed record promotion. |
| BLD-004 | P6 | Terra / high | BLD-001, DAT-002 | `/research`; optional project template | technical owner | **Completed** — exact three-theme/seven-binding guarded Research model, zero-project rule, full verify and four-width Browser checks pass | Preserve exact bindings and never create a speculative project route. |
| BLD-005 | P6 | Sol / high | BLD-001, DAT-001, DAT-002 | `/publications` | technical owner | **Completed** — exact 27-record fail-closed catalogue, progressive query/history/fragment/citation contracts, derived claims, 31-test verify, dist-leak scan and four-width Browser checks pass | Preserve exact completeness and zero-current-public behavior through QA-007. |
| BLD-006 | P6 | Terra / medium | BLD-001, DAT-002 | `/teaching` | technical owner | **Completed** — exact 19-course guarded model, zero-occurrence/privacy rules, full verify and four-width Browser checks pass | Preserve zero schedule/student/supervision disclosure through QA-007. |
| BLD-007 | P6 | Terra / high | BLD-001, DAT-002 | `/leadership-service` | technical owner | **Completed** — exact ten-record 3/5/2 historical/non-additive model, full verify and four-width Browser checks pass | Preserve historical intervals and prohibit inferred currentness or aggregate metrics. |
| BLD-008 | P6 | Sol / high | BLD-002–007 | integrated preview | technical owner | **Completed** — one fail-closed release decision, cross-route consistency, corrected shell/404/mobile/tokens, 39-test verify and six-width IAB matrix pass | Preserve the integrated decision through operational states and QA. |
| BLD-009 | P6 | Terra / medium | BLD-008 | operational site states | technical owner | **Completed** — sixteen typed states, truthful recoveries, native no-script notice, 40-test full verify and responsive Browser checks pass; G4 PASS | Preserve fail-closed/noindex behavior and complete recoveries through integration and QA. |
| INT-001 | P7 | Terra / high | BLD-008, BRD-007 | discovery layer | technical owner | **Completed** — unique route metadata, safe canonicals, conservative robots, empty deterministic sitemap, no blocked icon/assets, 49-test verify and Browser pass | Preserve noindex/sentinel behavior until a production origin and public promotion are authorized. |
| INT-002 | P7 | Terra / high | INT-001, DAT-002 | valid structured data | technical owner | **Completed** — strict zero-current JSON-LD plus exact non-emitted Person/Profile/Breadcrumb/scholarly fixture; 50-test verify and Browser pass | Preserve integrated lifecycle and current zero-emission until QA-007 promotion. |
| INT-003 | P7 | Sol / high | DES-005, INT-001, BRD-006, BRD-008; G4 | `public/og.png`; social metadata | design owner | **Completed** — deterministic 1200×630 text-only card, exact guarded OG/Twitter metadata, 53-test verify, visual/Browser and 17-hash reproducibility pass | Preserve exact hash, personal/text-affiliation hierarchy and two-file public staging. |
| INT-004 | P7 | Sol / xhigh | STR-004, TEC-003; G4 | safe contact/email-only flow | privacy/rights reviewer | **Completed** — exact single institutional mailto, zero site collection/retention, privacy/delivery/offline controls, 50-test verify and broad Browser pass | Preserve email-only boundary; no form/storage/private alternate or delivery promise. |
| INT-005 | P7 | Sol / high | STR-004; G4 | analytics decision/configuration | privacy/rights reviewer | **Completed** — documented and machine-enforced zero-analytics policy; 49-test full verify, broad source/dependency/output scan and Browser checks pass | Reopen G4/G5 and QA-006 before any future measurement exception. |
| QA-001 | P8 | Terra / high | BLD-009, INT-001–005 | green automated validation report | QA reviewer | **Completed** — clean install, 53 tests, zero diagnostics/vulnerabilities, 17-hash reproducibility and four-width Browser matrix pass; frozen manifest `1a947c…faded3` | Preserve exact fingerprint through independent audit lanes. |
| QA-002 | P8 | Sol / xhigh | QA-001, CNT-001, DAT-002 | page-by-page provenance report | QA reviewer | **Completed** — exact 27/26/1 publications, held/linked/selections, 3/7 research, 19/0 courses, 3/5/2 service, profiles/email/suppressions and zero-dist-leak reconciliation; 56-test verify pass | Controlled holds remain excluded; preserve evidence mappings through QA-007. |
| QA-003 | P8 | Terra / high | QA-001 | cross-browser defect report | QA reviewer | **Completed** — 48 route×viewport checks, interaction/recovery pass, compact target-size defect fixed/retested; 53-test verify and 17-hash reproducibility pass | Firefox/WebKit control gap documented; preserve current manifest `4f6e1f…e0874e1a`. |
| QA-004 | P8 | Sol / xhigh | QA-001 | accessibility report and fixes | QA reviewer | **Completed** — skip focus, disclosure ARIA and CV-state ARIA fixed/retested; axe 0/0, keyboard/reflow and tagged five-page CV checks pass; 56-test verify | PAC/veraPDF/actual screen-reader gaps are explicit; no WCAG 2.2 A/AA blocker. |
| QA-005 | P8 | Terra / high | QA-001 | performance and technical SEO report | QA reviewer | **Completed** — 17-artifact budget/resource/metadata/crawl audit passes on manifest `c896c1…77e0d8`; 56-test verify pass | Field CWV, host headers/CDN and deployed crawlability remain G5/P9 conditions. |
| QA-006 | P8 | Sol / xhigh | QA-001, STR-004 | security/privacy release report | QA reviewer | **Completed** — 338-file/12-surface audit, zero findings/blockers, 56-test verify and finalized Codex Security scan `fe58625a…` | Future host CSP/log behavior remains a controlled G5 condition. |
| QA-009 | P8 | Sol / xhigh | QA-001, BRD-009 | identity-compliance release report | QA reviewer | **Completed** — eight routes, 78 guide, six board, five CV and direct OG checks pass; 14 exceptions controlled; 56-test verify | Project PASS is not institutional/legal/trademark approval. |
| QA-007 | P8 | Sol / high | QA-002–006, QA-009 | release candidate without launch blockers | QA reviewer | **Completed / visually revalidated** — exact append-only promotion unchanged; redesigned seven-route candidate passed 57/57 tests, 44-file Astro check with zero diagnostics, TypeScript, schemas/Ajv, security/privacy/resource/budget scans and 20/20 reproducibility on manifest `81b3df3d…f822872` | Preserve the exact noindex/non-deployable candidate through G5. |
| QA-008 | P8 | Sol / high | QA-007 | visitor-journey record; known-issue list | QA reviewer | **Completed / presentation revalidated** — prior T1–T8 and O1/O2 acceptance preserved; all seven routes plus 404 visually audited at 1280px, Home/Publications/menu at 390×844, catalogue/search guards green, and concept-to-live differences recorded | Provisional local readiness only; stop at pending manual G5. |

## Outcome-to-owner control map

| Outcome | Downstream owner/check |
|---|---|
| O1 Priority journeys | STR-003, DES-003, QA-008: all eight journeys, no critical assistance/dead end/blocker. |
| O2 Research-first findability | STR-003, CNT-008, DES-003, QA-008: top five tasks in two purposeful choices; utilities distinct. |
| O3 Evidence coverage | STR-004, CNT-001, CNT-009, QA-002: every public claim has approved provenance/status. |
| O4 Publication integrity | CNT-004, DAT-001/002, QA-002: valid reconciliation, no duplicate canonical record, verified links. |
| O5 Accessibility | DES-004/005, QA-004: WCAG 2.2 AA, keyboard, zoom/reflow, states and failures. |
| O6 Responsive resilience | BLD-008/009, QA-003: no overflow, clipped essential content, inaccessible control or broken state. |
| O7 Performance | TEC-001, BLD-008, QA-005: proposed LCP/CLS/TBT/transfer/JS/third-party budgets. |
| O8 Privacy and security | STR-004, DAT-003/004, INT-004/005, QA-006: no restricted data, secrets, trackers or unapproved media. |
| O9 Brand integrity | DES-005, BLD-001/009, INT-001/003, QA-009: Faisal-first text-only affiliation and zero prohibited assets/claims. |
| O10 CV readiness | DAT-004, BLD-003, QA-002/004/006: one accessible, minimized, current English CV. |
| O11 Freshness ownership | STR-004/005, DAT-001/002, QA-002: source, role, last-verified field and trigger for volatile claims/links. |
| O12 English-only consistency | STR-002, CNT-009, QA-002/004: approved English across content, metadata, states and CV. |

## RAID and controlled exceptions

### Risks (R-01–R-12)

| Risk | Owner/check |
|---|---|
| R-01 Claims stale/conflicting | Evidence steward; CNT-001 → CNT-009/QA-002 reconcile or suppress. |
| R-02 Publication duplicates/dates | Publication curator; CNT-004 conflict log, DAT schema, QA-002. |
| R-03 Institutional ownership/endorsement inference | Design owner and QA reviewer; G0 text-only, personal-site treatment, QA-009. |
| R-04 CV/evidence privacy leakage | Privacy/rights reviewer; DAT-003/004 and QA-006 metadata/redaction audit. |
| R-05 Consent/rights gap | Privacy/rights reviewer; hold/suppress without authority, consent and provenance. |
| R-06 Research-first dilution | Coordinator/design owner; STR-003 task matrix, DES-003 scope test. |
| R-07 Long-content/mobile/search degradation | Technical owner/QA reviewer; progressive enhancement, QA-003/004/005. |
| R-08 No volatile-claim/link owner | Coordinator; STR-005 role matrix, DAT fields, QA-002 completeness. |
| R-09 No-analytics pressure | Privacy/rights reviewer; retain no-analytics default and qualitative post-launch signals only. |
| R-10 Missing media becomes fabricated/unlicensed media | Design owner; no-image layouts and approved asset manifest only. |
| R-11 Institutional/profile/DOI/CV link failure | Technical owner/QA reviewer; link checks and visible governed recovery states. |
| R-12 Drift into operations | Coordinator/project owner; stop at G5; no deployment, DNS, webmaster or P9. |

### Assumptions, issues, dependencies

- **Assumptions:** G0 text-only/no-logo baseline holds; sufficient evidence exists for useful research-led pages; institutional email and official university URL remain verified; one privacy-reviewed English CV becomes available; static-first implementation is adequate; email-only/no-analytics remains adequate.
- **Current issue:** all P1–P8 steps remain complete after owner-directed visual redesign and revalidation on manifest `81b3df3d…f822872`; execution is stopped at pending manual G5. The candidate remains noindex, non-promotable, non-deployable and unpublished. The presentation now follows the accepted evidence-led editorial direction; no P0/P1/P2 issue exists. Codex Security previously finalized with zero findings, though access status could not be verified because its advisory connector was unavailable.
- **External controlled exceptions, not missing work packages:** institutional/legal/trademark clearance; DNS approval; operational data; and a future identity-source change. They remain outside P1–P8 completion unless their named external condition is explicitly met in the dashboard.

## Route, module, and state readiness

All content modules remain conditional on the exact QA-007 release overlay. The seven HTML routes and reviewed CV are substantive in the frozen local candidate, but remain noindex, non-promotable, non-deployable and unpublished.

| Asset | Readiness now | Primary downstream chain | Required state/control |
|---|---|---|---|
| R1 Home `/` | Substantive local candidate | CNT-008 → DAT-002/004 → DES-003 → BLD-002 → QA | Research-first entry, priority actions and meaningful no-image/failure behavior. |
| R2 Research `/research` | Substantive local candidate | CNT-003 → DAT-002 → DES-003 → BLD-004 → QA | Three approved themes/seven bindings; optional project detail remains deferred. |
| R3 Publications `/publications` | Substantive 27-record catalogue | CNT-004/005 → DAT-001/002 → BLD-005 → QA | Canonical catalogue; search/filter, no-results and data-failure behavior. |
| R4 Teaching `/teaching` | Substantive 19-course catalogue | CNT-006 → DAT-002 → BLD-006 → QA | Zero occurrences; no schedule, student, room, section or private data. |
| R5 Leadership & Service `/leadership-service` | Substantive 10-record page | CNT-007 → DAT-002 → BLD-007 → QA | Verified historical roles/service only; intervals and scope preserved. |
| R6 About `/about` | Substantive local candidate | CNT-002/008 → DAT-004 → BLD-003 → QA | Governed biography/timeline with reviewed CV action. |
| R7 Contact `/contact` | Substantive email-only route | CNT-008 → INT-004 → BLD-003 → QA | Approved institutional email only; no form/private substitute. |
| R8 CV `/cv/faisal-albalwy-cv.pdf` | Exact reviewed PDF staged locally | DAT-003 → G2 → DAT-004 → BLD-003 → QA | Searchable tagged English PDF; exact hash/MIME; no restricted data/metadata. |

Global operational states to carry through BLD-009 and QA: 404, application error, offline/unavailable, publication no results/data unavailable, empty optional module, required-route evidence gap, unavailable institutional email, unavailable CV, failed external link, font failure, image failure/no image, forced colors/reduced motion/print.

## Critical path, parallel lanes, and revalidation

**Critical path:** CNT-001 → CNT-002/003/004/006/007 → CNT-005/008 → CNT-009 → G2 → DAT-001/002/004 and TEC-001/002/003 → DES-001–005 → G3 → BLD-001–009 → G4 → INT-001–005 → QA-001–009 → G5 stop.

**Current execution lane:** none. P1–P8 are complete and the program is stopped at G5. No launch, hosting, DNS, indexing, publication or P9 lane is authorized; shared schemas, routing, configuration, styles and release data remain frozen pending an explicit owner decision.

**Revalidation triggers:** reopening any prerequisite/gate, change to a governed claim/value/source/translation/rights/consent/freshness state, publication correction/retraction, broken governed link, identity source/token/asset/affiliation change, governance/IA/English-only/contact/no-analytics change, or a failing independent QA result. Hold affected output, trace downstream impact, preserve history, and rerun the applicable gate review; do not silently overwrite prior evidence.

## Artifact register and decision pointers

| Control area | Authoritative pointer |
|---|---|
| Execution state, locks, prompt history | `ACADEMIC_WEBSITE_EXECUTION_DASHBOARD.html` revision 63 |
| Scope, models, permanent IDs, deliverables | `ACADEMIC_WEBSITE_MASTER_BUILD_PLAN.md` |
| Autonomous boundary and gates | `AUTONOMOUS_EXECUTION_POLICY.md` |
| Product outcomes, risks, non-goals | `docs/PROJECT_BRIEF.md` |
| Positioning, voice, naming, English-only guardrails | `docs/EDITORIAL_DIRECTION.md` |
| Sitemap, routes, modules, navigation, states | `docs/INFORMATION_ARCHITECTURE.md` |
| Claim authority, lifecycle, privacy/rights, freshness | `docs/CONTENT_GOVERNANCE.md` |
| G0 brand decisions and evidence | `docs/brand/IDENTITY_DECISION_LOG.md`, `COBRANDING_MODEL.md`, `WEB_BRAND_SPEC.md`, `WEB_ASSET_MANIFEST.md`, `BRAND_APPLICATION_BOARD.html/.pdf`, `BRAND_COMPLIANCE_REVIEW.md` |

## Update protocol

1. Read the current dashboard state and relevant authoritative artifact before changing an entry.
2. Record a step as completed only after its owned output exists and acceptance evidence is independently validated; otherwise retain in-progress or locked/pending status.
3. Reconcile all 58 P1–P8 IDs exactly once, all six gates, completed/in-progress/locked counts, evidence references, owners, risks, outcomes, routes, and revalidation state.
4. Update the dashboard state/revision/timestamp and its event history as the authoritative execution record; then refresh this tracker snapshot. Never change a dashboard status merely to match this document.
5. Keep P9 excluded. At QA-008, prepare the release-readiness record and known issues, then stop at G5 for the project owner.

## Validation record for this tracker

- **Step reconciliation:** 58/58 unique P1–P8 IDs present once; 0 duplicate IDs; 0 missing IDs.
- **State reconciliation:** 58 completed (all P1–P8); 0 in progress; 0 locked/pending steps; 0 marked revalidation-required. G5 is pending manual and excluded from the step denominator.
- **Gate reconciliation:** 6/6 present; G0/G1/G2/G3/G4 approved; G5 manual pending.
- **Control coverage:** 12/12 project outcomes, 12/12 strategic risks, 7/7 HTML routes, and 1/1 CV artifact mapped to accountable downstream checks.
- **Boundary check:** all nine P9 steps are excluded from the 58-step denominator; no deployment, DNS, or production authority is claimed.
