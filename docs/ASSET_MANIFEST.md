# DAT-003 v1 — Non-brand asset and document manifest

**Status:** private, fail-closed control manifest; no derivative or public media has been created or approved.  
**Prepared:** 2026-08-19 (Asia/Riyadh)  
**Owner:** evidence_steward; privacy, rights, accessibility, and release decisions require their named reviewers.  
**Scope:** every non-brand `SRC-*` record registered in `docs/EVIDENCE_REGISTRY.md` v2, plus the bounded future derivative needs below. This is an internal governance record, never a site data source or public download index.

## 1. Governing boundary and reconciliation

This manifest implements `docs/CONTENT_GOVERNANCE.md`, the frozen public-CV contract in `docs/INFORMATION_ARCHITECTURE.md`, and the evidence registry. Registration, possession, readability, a hash, or a factual claim's later eligibility never authorizes delivery of its evidence document.

- **Registry reconciliation:** 50/50 non-brand source IDs accounted once: 2 CV originals, 10 teaching schedules, 23 administrative records, 10 community records, and 5 supplied live-profile observations. The protected corpus is 45 material files / 102 rendered page-or-image equivalents; live captures are private evidence, not assets.
- **Brand boundary:** `docs/brand/WEB_ASSET_MANIFEST.md` exclusively governs Alexandria WOFF2/OFL and the text-only affiliation/no-logo system. The candidate font and OFL are referenced here only as brand-governed dependencies; they are not rows, media, or redistribution decisions in this manifest.
- **Launch media boundary:** no portrait, research image, certificate gallery, decision scan, course schedule, badge, university-media derivative, logo, Arabic CV, evidence portfolio, or CV archive is authorized. Each remains unavailable or suppressed unless a separately registered, rights-cleared source passes the full gate.
- **Public state now:** 0 public assets; 50 source records retained privately; 1 future English-CV derivative need held; 7 unavailable/suppressed media/document needs. No public filename is active.

## 2. Deterministic row contract

Every inventory row below is one asset/document record. Fields use the controlled profiles in this section so that repeating handling requirements are explicit without reproducing protected values. `checksum` is the immutable SHA-256/snapshot reference; safe aliases deliberately omit filenames, contact data, identity numbers, QR values, URLs with query state, and paths.

| Field | Controlled value / meaning |
|---|---|
| Asset/document ID | `AST-SRC-*` for registry sources; `AST-NEED-*` for a public or unavailable derivative need. Unique and stable. |
| Registered source / relationship | The registry `SRC-*` and its stated lineage; `—` for a need not yet sourced. Originals are never transformed by this package. |
| Custodian / provenance / authority | Stated source-family custodian and the limited factual authority in profile `P-*`; no profile grants publication authority. |
| Privacy / third-party data | Profile class plus flags. `Restricted` means evidence stays access-controlled; `Public_after_review` is not a publication decision. |
| Rights / redistribution / consent | `restricted/no/not-applicable` for protected sources unless a profile states otherwise. A future public artifact needs a scoped affirmative record; owner possession is insufficient. |
| Metadata / accessibility / language | Profile scan/redaction and text-alternative requirements. “Not assessed” is a release blocker, not a pass. |
| Public location / transformation / disposition | `none` for sources; only the held English-CV need reserves a canonical route. A transformation must be newly approved and is not created by this manifest. |
| Review / withdrawal / consumers | freshness trigger and named roles; withdrawal propagates according to Section 6. Consumers are instructions, not authorization. |

### 2.1 Source handling profiles

| Profile | Media class; custodian; factual-authority scope | Privacy / third-party flags | Rights, consent, metadata, accessibility, language | Default public disposition / review trigger / owner |
|---|---|---|---|---|
| `P-CV` | PDF original; owner-provided; corroboration/owner preferences only (the English and Arabic documents are one lineage) | Restricted; personal/contact, employment, third-party and hidden-content risk | restricted; no redistribution; owner approval plus privacy/rights review required; scan PDF properties, layers, comments, attachments, OCR, thumbnails and links; original accessibility is not a public-download assessment; EN or AR | suppress original; 90 days and any included-claim/source, privacy, rights, metadata, or owner change; evidence_steward + privacy_reviewer |
| `P-TCH` | PDF schedule; institutional custodian; occurrence/title/term only | Restricted; student, section, room, time, count, delivery-mode and source-URL risk | restricted/no/not-applicable; scan hidden content and schedule fields; no public document accessibility assessment because it cannot be delivered; source language as supplied | suppress; each new schedule/catalog and annual review; evidence_steward |
| `P-ADM` | PDF/JPEG formal decision; institutional custodian; operative appointment/committee field only | Restricted; signatures, QR/contact, employee and decision-data risk | restricted/no/not-applicable; scan image/PDF metadata, OCR, hidden layers and embedded data; inaccessible as a public artifact by design; source language as supplied | suppress except minimal later approved fact; annual historical / 90-day active-role trigger; evidence_steward + privacy_reviewer |
| `P-COM` | PDF/PNG certificate/activity record; named issuer; issued activity/review field only | Restricted; identifiers, QR/barcodes, signatures, third-party/review confidentiality risk | restricted/no/not-applicable; scan visual and hidden content; no public accessibility assessment because certificate media is barred; source language as supplied | suppress except minimum later approved fact; issuer correction, consent/rights change, expiry or takedown trigger; evidence_steward + rights_reviewer |
| `P-LIVE` | private response snapshot / external endpoint observation; platform custodian; exactly observed account/link/metric only | Internally retained response; account/identifier, query-token and volatile-value risk | no redistribution of capture; public link requires canonical-URL, identity, safety and freshness review; consent not applicable; metadata/capture privacy scan required; accessible external destination unverified unless separately tested; EN | hold; monthly link check, manual 90-day identity check, 30-day metric cadence, redirect/access/anomaly trigger; technical_link_reviewer |

### 2.2 Derivative-need profiles

| Profile | Required provenance/rights/consent and transformation | Accessibility and metadata gate | Disposition / reviewer / consumer |
|---|---|---|---|
| `N-CV-EN` | Derive only from registered CV evidence after claim-by-claim reconciliation; minimize and remove private contact, third-party detail, identifiers, signatures, QR/barcodes, hidden content, source paths and unapproved claims. Owner authorization, rights and privacy clearance are separate recorded approvals. | Searchable, tagged English PDF; logical heading/order, title, language, document author, links, reading order, contrast, selectable text, size announcement, visual/assistive-technology QA; sanitized filename/metadata only. | **hold**; intended only after DAT-004 at `/cv/faisal-albalwy-cv.pdf`; privacy_reviewer, rights_reviewer, accessibility_reviewer, content_owner; DAT-004, TEC-001/002, BLD-001/003/009, INT-001/003, QA-002/004/006/009. |
| `N-NOIMAGE` | No source exists or is approved. Do not source, generate, crop, screenshot, scan, or infer a replacement. | Text/no-image state carries meaning; no alt text is fabricated. | unavailable/suppress; rights_reviewer + content_owner; DES/BLD/QA consumers must render no-image behavior. |
| `N-NODOC` | Protected evidence must not be copied or turned into a download; no redaction work is authorized here. | No public file or alternative is offered. | suppress; evidence_steward + privacy_reviewer; DAT-004, BLD, INT, QA must prevent routes/build artifacts. |

## 3. Source inventory

All rows inherit their profile's complete privacy, rights, consent, metadata, accessibility, language, review, withdrawal, and consumer controls. `none` means no public filename or route exists. Hashes are registry provenance identifiers, not public values.

### 3.1 Protected CV originals — 2/2

| Asset ID | SRC / safe alias | Class / profile / checksum | Lineage and relationship | Public disposition / reason |
|---|---|---|---|---|
| AST-SRC-CV-EN-001 | SRC-CV-EN-001 — Owner English CV original, pp. 1–5 | PDF; P-CV; `70de702155264f3e9fd1bdfe8c1f82985ad48c347a10fe8339241ca2a64f56f0` | LIN-CV-OWNER; original | suppress / protected owner evidence; supports only governed extraction and the held English-CV need. |
| AST-SRC-CV-AR-001 | SRC-CV-AR-001 — Owner Arabic CV/portfolio original, pp. 1–32 | PDF; P-CV; `f4d3a6921ebc7232b85943578189e3a0a97d867630a5e3869d3a0b99b56e2fce` | LIN-CV-OWNER; original; same lineage, not independent corroboration | suppress / Arabic corroboration only; no Arabic launch derivative, archive, or portfolio. |

### 3.2 Teaching schedules — 10/10

| Asset ID | SRC / safe alias | Class / profile / checksum | Lineage | Public disposition / reason |
|---|---|---|---|---|
| AST-SRC-TCH-001 | SRC-TCH-001 — schedule occurrence, 1444 term 1 | PDF; P-TCH; `ea426559005293fe56b99c266fa77e1841950057ec179bd153e387cefe6db51f` | LIN-TCH-001 | suppress / timetable is restricted; only later approved course title/term may be extracted. |
| AST-SRC-TCH-002 | SRC-TCH-002 — schedule occurrence, 1444 term 2 | PDF; P-TCH; `1f761137cb2798156e0db0e1acf5835f197d6a6a71c56bbe253cbae2ea8bac06` | LIN-TCH-002 | suppress / same rule. |
| AST-SRC-TCH-003 | SRC-TCH-003 — schedule occurrence, 1444 term 3 | PDF; P-TCH; `0e3d429d5cb52fd10cebcde0b765c3b37355807501ba1532827e1bc81b49015d` | LIN-TCH-003 | suppress / same rule. |
| AST-SRC-TCH-004 | SRC-TCH-004 — schedule occurrence, 1444 summer | PDF; P-TCH; `f2eaff40513f23da9adaab8c75bebe45272457849541a699d5900162c7816321` | LIN-TCH-004 | suppress / same rule. |
| AST-SRC-TCH-005 | SRC-TCH-005 — schedule occurrence, 1445 term 1 | PDF; P-TCH; `1c4d74470e55a571ca2d20b2faa38f37fd13bc75ac4ad13dbddba4f82aa41c31` | LIN-TCH-005 | suppress / same rule. |
| AST-SRC-TCH-006 | SRC-TCH-006 — schedule occurrence, 1445 term 2 | PDF; P-TCH; `0dc28f0ce391211a19cac3d30b36acf1a775f80a139de106870509628308b25b` | LIN-TCH-006 | suppress / same rule. |
| AST-SRC-TCH-007 | SRC-TCH-007 — schedule occurrence, 1446 term 1 | PDF; P-TCH; `0975ba48b992c65b1edb7a099219ef50b8cb3f320da92b03cda1bc20bca9d95c` | LIN-TCH-007 | suppress / same rule. |
| AST-SRC-TCH-008 | SRC-TCH-008 — schedule occurrence, 1446 term 2 | PDF; P-TCH; `98ccf855dc876ea722acf22cc486005d31bac8634f03cea34aa6cae46b1a2cde` | LIN-TCH-008 | suppress / same rule. |
| AST-SRC-TCH-009 | SRC-TCH-009 — schedule occurrence, 1447 term 1 | PDF; P-TCH; `029cf60254830bbbdb3ec83dcc65745373db9fa47dfc81f02ab17ca321794821` | LIN-TCH-009 | suppress / same rule. |
| AST-SRC-TCH-010 | SRC-TCH-010 — schedule occurrence, 1447 term 2 | PDF; P-TCH; `7b8f282371b03cb1d2074332f675a66945688cef215a906382baa86eb14bec2f` | LIN-TCH-010 | suppress / no registered occurrence claim; never infer a tenth occurrence. |

### 3.3 Administrative records — 23/23, including four duplicate pairs

| Asset ID | SRC / safe alias | Class / profile / checksum | Lineage / relationship | Public disposition / reason |
|---|---|---|---|---|
| AST-SRC-ADM-001 | SRC-ADM-001 — committee decision excluding subject | PDF; P-ADM; `db57ef71a6fdbe0fa71abf2f9ff4234f34d57619662933d405184d433095c224` | LIN-ADM-EX-001 | suppress / unusable for a positive claim. |
| AST-SRC-ADM-002 | SRC-ADM-002 — committee decision excluding subject | PDF; P-ADM; `da3f7f2747d64e44c00bc1bf536fab1db114dc8c6df85184bc88545616b82d57` | LIN-ADM-EX-002 | suppress / unusable for a positive claim. |
| AST-SRC-ADM-003 | SRC-ADM-003 — committee decision excluding subject | PDF; P-ADM; `48389b26d1b3c9bbf86e620a6c3ff65430f31f8728e44e5d71441a022c13dfff` | LIN-ADM-EX-003 | suppress / unusable for a positive claim. |
| AST-SRC-ADM-004 | SRC-ADM-004 — committee decision excluding subject | PDF; P-ADM; `87c0786e79dc108ed2fabea19543a4fcd34b3559201967683d1da29c22cf14cf` | LIN-ADM-EX-004 | suppress / unusable for a positive claim. |
| AST-SRC-ADM-005 | SRC-ADM-005 — executive appointment renewal decision | PDF; P-ADM; `005f1a7ff07b2a498e2f8191256d2756bc7d983e1081b3dff7ac0cb7961b01e2` | LIN-ADM-LEAD-001 | suppress / protected; current status needs freshness. |
| AST-SRC-ADM-006 | SRC-ADM-006 — executive appointment decision | PDF; P-ADM; `a476449dc85aade844a6218f4f2d5f79d6de42dd00dee804861fa999d58a01fc` | LIN-ADM-LEAD-002 | suppress / protected historical candidate only. |
| AST-SRC-ADM-007 | SRC-ADM-007 — deputy executive appointment decision | PDF; P-ADM; `e20eb879baf5ec3cc1637ff137d1b936425f87c3971980200ad43119b86fc209` | LIN-ADM-LEAD-003; underlying decision also imaged in 023 | suppress / protected. |
| AST-SRC-ADM-008 | SRC-ADM-008 — committee decision A | PDF; P-ADM; `466a2ecd268556f38f59245d95334883c6c3cb8b0b46ac316f9737ea2a8eb0e4` | LIN-ADM-COM-001 | suppress / protected candidate; no date inference. |
| AST-SRC-ADM-009 | SRC-ADM-009 — committee decision B | PDF; P-ADM; `9cc128e3bde836d9dc20bfa2d72099f081507c1990b824aafd9cdbad916eed64` | LIN-ADM-COM-002 | suppress / protected; independent convergence still required. |
| AST-SRC-ADM-010 | SRC-ADM-010 — committee decision A | PDF; P-ADM; `603d2515c50f87f86d387552409a1e80087ddbd697854b68a79415c2bb804bca` | LIN-ADM-COM-003 | suppress / protected candidate only. |
| AST-SRC-ADM-011 | SRC-ADM-011 — committee decision B | PDF; P-ADM; `7372202fb9eaf44625dc0a234fdda6f653a25f969d59a21b5857895f5ad131ba` | LIN-ADM-COM-004; canonical binary, duplicate 019 | suppress / protected; duplicate carries no extra weight. |
| AST-SRC-ADM-012 | SRC-ADM-012 — committee decision A | PDF; P-ADM; `7ce52b489b7d790df5ac4e86476f8c66549fffff5f6dabf9bae3be4f75e22e47` | LIN-ADM-COM-005 | suppress / protected candidate only. |
| AST-SRC-ADM-013 | SRC-ADM-013 — committee decision B | PDF; P-ADM; `f990f28154d477182c2a5787109091f6480299003dc7041d7c58837b47688483` | LIN-ADM-COM-006; canonical binary, duplicate 020 | suppress / protected; duplicate carries no extra weight. |
| AST-SRC-ADM-014 | SRC-ADM-014 — committee decision A | PDF; P-ADM; `e0b4b8afd39be5d1f21274c9880028c037ecf95b573ddee16e35bad115cdfea2` | LIN-ADM-COM-007; canonical binary, duplicate 021 | suppress / protected; duplicate carries no extra weight. |
| AST-SRC-ADM-015 | SRC-ADM-015 — committee decision B | PDF; P-ADM; `f4e53ad11b7778e6c740a751b1f187b57670cf1d652ba827e6c99a6b9f05ac97` | LIN-ADM-COM-008 | suppress / protected candidate only. |
| AST-SRC-ADM-016 | SRC-ADM-016 — graduation-project/training committee decision | PDF; P-ADM; `58ffa4e640a3277ebbc4eaa1899e301ff43963a50d5e153ac3fdf5b0fe3d2c31` | LIN-ADM-COM-009; canonical binary, duplicate 022 | suppress / protected; duplicate carries no extra weight. |
| AST-SRC-ADM-017 | SRC-ADM-017 — committee decision excluding subject | PDF; P-ADM; `d620ad3cee61541c047978b36fcd9880b1c0dab238436fec777c8d98dea1ffc4` | LIN-ADM-EX-005 | suppress / unusable for a positive claim. |
| AST-SRC-ADM-018 | SRC-ADM-018 — committee decision excluding subject | PDF; P-ADM; `2727127bcfac05d455a875dbc83987b47d425946bedc16afa9d5475b2c65a8bb` | LIN-ADM-EX-006 | suppress / unusable for a positive claim. |
| AST-SRC-ADM-019 | SRC-ADM-019 — byte-identical copy of 011 | PDF; P-ADM; `7372202fb9eaf44625dc0a234fdda6f653a25f969d59a21b5857895f5ad131ba` | LIN-ADM-COM-004; duplicate of 011 | suppress / preserved lineage evidence; zero additional convergence weight. |
| AST-SRC-ADM-020 | SRC-ADM-020 — byte-identical copy of 013 | PDF; P-ADM; `f990f28154d477182c2a5787109091f6480299003dc7041d7c58837b47688483` | LIN-ADM-COM-006; duplicate of 013 | suppress / preserved lineage evidence; zero additional convergence weight. |
| AST-SRC-ADM-021 | SRC-ADM-021 — byte-identical copy of 014 | PDF; P-ADM; `e0b4b8afd39be5d1f21274c9880028c037ecf95b573ddee16e35bad115cdfea2` | LIN-ADM-COM-007; duplicate of 014 | suppress / preserved lineage evidence; zero additional convergence weight. |
| AST-SRC-ADM-022 | SRC-ADM-022 — byte-identical copy of 016 | PDF; P-ADM; `58ffa4e640a3277ebbc4eaa1899e301ff43963a50d5e153ac3fdf5b0fe3d2c31` | LIN-ADM-COM-009; duplicate of 016 | suppress / preserved lineage evidence; zero additional convergence weight. |
| AST-SRC-ADM-023 | SRC-ADM-023 — protected image of deputy appointment decision | JPEG; P-ADM; `b4f9744c537a7453de0c1da01ed78bd5a13c16e2c00a1d727ee8a6aca99f3b84` | LIN-ADM-LEAD-003; same underlying decision as 007 | suppress / signature, QR, and contact risk; not independent evidence. |

### 3.4 Community and review records — 10/10

| Asset ID | SRC / safe alias | Class / profile / checksum | Lineage / relationship | Public disposition / reason |
|---|---|---|---|---|
| AST-SRC-COM-001 | SRC-COM-001 — volunteer certificate issue A | PDF; P-COM; `0a2376433c54d877f147e9a530d12766cbdeb15064d4e36571fa073cbfd81a1a` | LIN-COM-VOL-001; original issue, reissue 002 | suppress / certificate remains restricted. |
| AST-SRC-COM-002 | SRC-COM-002 — volunteer certificate issue B/reissue | PDF; P-COM; `e4e75de7bb2893c84d9a637b98fd7f581834e24b05d505a1873207ca765ea34d` | LIN-COM-VOL-001; reissue, not independent | suppress / no second activity or corroboration weight. |
| AST-SRC-COM-003 | SRC-COM-003 — conference-review appreciation certificate | PNG; P-COM; `b3e479ef6c63e480d99dcb1253735145db6bb649faf15898003bf755ea61a166` | LIN-COM-REV-CONF-001 | suppress / no manuscript total or image publication. |
| AST-SRC-COM-004 | SRC-COM-004 — journal-review certificate | PDF; P-COM; `526a2ead2ac9693420ba7548288d43d3c3c07ff191e76068d64f055f2f67d0de` | LIN-COM-REV-001; encrypted/print-readable | suppress / protected source-specific candidate only. |
| AST-SRC-COM-005 | SRC-COM-005 — journal-review certificate | PDF; P-COM; `028ddf0990f0f0c0bd160891439648dbba2c073bc56e145ab0d6b3fc79f0f2df` | LIN-COM-REV-002; encrypted/print-readable | suppress / protected source-specific candidate only. |
| AST-SRC-COM-006 | SRC-COM-006 — journal-review certificate | PDF; P-COM; `42377ac62875d729896a3641af44c0a3130be793f88737a49f2f82c831767f9a` | LIN-COM-REV-003; encrypted/print-readable | suppress / protected source-specific candidate only. |
| AST-SRC-COM-007 | SRC-COM-007 — cumulative review certificate, earlier issue | PDF; P-COM; `16c60ce32a56cf73b6d00a369476e54f78ca82f2c2cbf3c8b773aa3c9c2c26c5` | LIN-COM-REV-004; supersession candidate | suppress / never additive. |
| AST-SRC-COM-008 | SRC-COM-008 — cumulative review certificate, later issue | PDF; P-COM; `749b3546b4928bd78802966e4936808adfe62cabe8d3429b002ae73ddae30830` | LIN-COM-REV-004; potential supersession | suppress / issuer/recipient/period reconciliation outstanding; never additive. |
| AST-SRC-COM-009 | SRC-COM-009 — volunteer activity certificate A | PDF; P-COM; `7225f4d5e69bf3e7c3ec1282977fbd38bc14ebcb94e2d771ca5f378aaed33ba9` | LIN-COM-VOL-002 | suppress / QR and identifier controls apply. |
| AST-SRC-COM-010 | SRC-COM-010 — volunteer activity certificate B | PDF; P-COM; `c6a97a9013a019438aed7efd53b8ece7e7452862dee7a58920cd3fc48f92db0b` | LIN-COM-VOL-003 | suppress / QR and identifier controls apply. |

### 3.5 Supplied live observations — 5/5

| Asset ID | SRC / controlled endpoint alias | Class / profile / snapshot checksum | Public disposition / reason |
|---|---|---|---|
| AST-SRC-LIVE-GS-001 | SRC-LIVE-GS-001 — scholarly-profile observation | private response snapshot; P-LIVE; `d253a68d94ac6b271fc3072a7454aad969dfca3c3598723e2d2e79a91c78810b` | hold / capture never public; exact observed profile-link/metric candidates require separate publication approval. |
| AST-SRC-LIVE-SCOPUS-001 | SRC-LIVE-SCOPUS-001 — profile observation | private response snapshot; P-LIVE; `39ecbc65671dbd2c8367e1a7aea39cab9d4ad237cc0525e895d9c6493db6e00c` | hold / authentication loop; no observed field may be substituted. |
| AST-SRC-LIVE-ORCID-001 | SRC-LIVE-ORCID-001 — profile observation | private response snapshot; P-LIVE; `6af69d3b8c4315b7bde57910218cfdd0d72eedf094629658ccd793ad776e5f7a` | hold / JavaScript shell; identity/value unverified. |
| AST-SRC-LIVE-WOS-001 | SRC-LIVE-WOS-001 — profile observation | private response snapshot; P-LIVE; `bf0c148cd309dd2a56bdcd0c57c602b9363cf6a8b53adc775a9237bfb21e44bb` | hold / JavaScript shell; author value unverified. |
| AST-SRC-LIVE-RG-001 | SRC-LIVE-RG-001 — profile observation | private response snapshot; P-LIVE; `07e822850ae51f6d7c57dca3e4a7e02a542b626090e2497b7dfedbbd76b43390` | hold / access denied; no prior crawl or replacement is valid. |

## 4. Derivative and media-need inventory — 8/8

| Asset ID | Controlled title / original relationship | Class / profile | Intended public filename or route | Disposition and reason |
|---|---|---|---|---|
| AST-NEED-CV-EN-001 | Minimized English CV PDF; future derivative of reconciled registered evidence, never a copy of either original | document derivative; N-CV-EN | reserved, inactive: `/cv/faisal-albalwy-cv.pdf` | hold / DAT-004 only; no binary exists. |
| AST-NEED-CV-AR-001 | Arabic CV public derivative | document derivative; N-NODOC | none | suppress / Arabic original is corroborating protected evidence; English-only launch has no Arabic CV, archive, or portfolio. |
| AST-NEED-PORTRAIT-001 | Portrait or profile photograph | optional media; N-NOIMAGE | none | unavailable / no real approved source, creator rights, consent, or accessibility record. |
| AST-NEED-RESEARCH-IMAGE-001 | Research/project image, illustration, video, or audio | optional media; N-NOIMAGE | none | unavailable / no approved source; site must remain complete without imagery. |
| AST-NEED-CERTIFICATE-GALLERY-001 | Certificate or credential gallery / badge wall | document/media; N-NODOC | none | suppress / protected certificates, identifiers and rights/consent blockers; no badge substitute. |
| AST-NEED-DECISION-SCAN-001 | Appointment or committee decision scan | document/media; N-NODOC | none | suppress / protected decisions may support facts but cannot be downloads or images. |
| AST-NEED-SCHEDULE-001 | Course schedule or timetable derivative | document/media; N-NODOC | none | suppress / student, room, time, section and related restricted data. |
| AST-NEED-UNIVERSITY-MEDIA-001 | University logo, media, pattern, icon, template, or institutional derivative | brand-related media; N-NOIMAGE | none | suppress / out of scope and separately governed by the brand manifest; no duplication or reclassification here. |

## 5. DAT-004 release checklist for the sole future public PDF

DAT-004 must fail closed unless every item is recorded against `AST-NEED-CV-EN-001`:

1. Reconcile every included statement to a registered, field-authoritative, fresh `publish` claim; resolve conflicts and confirm English wording.
2. Use a new minimized English derivative only; do not copy either source CV or carry forward unverified material.
3. Remove private contact data, personal/government identifiers, signatures, QR/barcodes, third-party and student detail, protected source excerpts, document IDs, hidden text, comments, layers, attachments, thumbnails, revision history, source paths, tracking parameters, and excluded claims.
4. Record owner authorization, copyright/redistribution basis, any required third-party consent, scope, expiry, attribution and withdrawal contact. Any unknown, pending, expired, denied, or withdrawn state blocks release.
5. Set the frozen lowercase filename and canonical route only after approval: `faisal-albalwy-cv.pdf` at `/cv/faisal-albalwy-cv.pdf`; no Arabic variant, archive, alternative route, redirect to a private file, or version collection.
6. Produce a searchable, tagged PDF with declared English language, logical reading and heading order, title/author, descriptive links, selectable text, sufficient contrast, and assistive-technology plus visual QA. Announce verified type, size, and update date adjacent to the action.
7. Scan the output metadata and binary before release; record derivative version, SHA-256, size, source lineage (without public identifiers), creation/review dates, and a sanitized document title/author. No source/private values appear in the file or build output.
8. Obtain content_owner, privacy_reviewer, rights_reviewer, accessibility_reviewer, and quality review; test unavailable, download, narrow/zoom, print, no-image and failure states; then perform the named data/build/integration/QA handoffs. This manifest does not perform G2 closure.

## 6. Lifecycle, withdrawal, and incident controls

**States:** `private_evidence` (all protected records), `hold` (future derivative or external observation), `unavailable` (no approved source), `suppress` (barred source/need), `approved_for_build` (future only after all checks), `published` (future only), and `withdraw` (immediate public removal state). No record is currently approved for build or published.

On a privacy, consent, rights, security, metadata, accessibility, factual, retraction, source-access, or owner-change report: (1) log the affected asset ID, locations, timestamp and risk internally; (2) immediately set the artifact to `withdraw` where material is public; (3) remove/disable the file and all links; (4) purge or invalidate content, structured data, build outputs, download URLs, CDN/cache, search/index entries, previews and generated artifacts; (5) notify all listed downstream owners; (6) retain only a non-sensitive internal event and reassess dependencies before any replacement. A valid withdrawal outranks prior approval; no unverified substitute is permitted.

Re-review triggers are profile-bound: CV every 90 days and on any included-source/claim change; teaching at each schedule/catalog and annually; active roles/services every 90 days; historical records annually; external links monthly plus manual 90-day/before-release review; metrics no older than 30 days; media/rights/consent annually and before release. Any trigger sets the affected public output to hold or withdraw.

## 7. Validation and deterministic handoff

| Check | Result |
|---|---|
| Source-ID coverage and uniqueness | Pass: 50 unique `SRC-*` records mapped once to 50 unique `AST-SRC-*` rows (2 + 10 + 23 + 10 + 5). |
| Protected-family disposition | Pass: all 45 protected source files are `suppress`; none has a filename, route, public derivative, or redistribution permission. |
| Duplicate-lineage parity | Pass: ADM 011/019, 013/020, 014/021, and 016/022 are each preserved as separate rows with the same checksum and zero extra convergence; ADM 007/023 and COM 001/002 are documented same-lineage relationships. |
| Privacy / metadata / accessibility controls | Pass as governance: every profile requires metadata/hidden-content scanning and fail-closed accessibility treatment; no protected value, contact detail, private path, personal identifier, protected binary, or live URL/query state is reproduced. |
| Brand boundary | Pass: no brand candidate is duplicated or reclassified; `docs/brand/WEB_ASSET_MANIFEST.md` remains the sole authority. |
| Public derivative creation | Pass: none created; exactly one future English-CV need is held and seven other needs are unavailable/suppressed. |

**Handoffs:** DAT-004 may act only on `AST-NEED-CV-EN-001` after the checklist. TEC-001/002 define delivery, headers, unavailable behavior and metadata without creating a file. BLD-001/003/009 must render no-image/no-document states and never copy protected sources. INT-001/003 must keep the PDF non-indexable/unlinked until approval and use only sanitized PDF metadata after release. QA-002/004/006/009 must verify claim linkage, public locations, responsive/document accessibility, privacy/metadata/path leakage, rights/consent, and withdrawal/cache propagation. These are controlled future consumers, not permissions to publish.

No deployment, DNS action, G2 closure, public CV/media derivative, or P9 work was performed.
