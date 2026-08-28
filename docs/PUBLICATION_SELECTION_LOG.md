# CNT-005 v1 — publication selection log

**Selection date:** 19 August 2026 (Asia/Riyadh)  
**Reviewer role:** `publication_curator` (`CNT-005`)  
**Status:** deterministic latest and featured decisions complete; public release still requires CNT-009  
**Canonical owner:** `content/data/publications.json`  
**Conflict authority:** `docs/PUBLICATION_CONFLICT_LOG.md`

This log records editorial selection predicates only. It does not rewrite canonical metadata, change a record’s evidence disposition, approve a research theme, or convert `eligible` to `publish`.

## 1. Frozen input fingerprints

| Input | SHA-256 at selection | Use |
|---|---|---|
| `content/data/publications.json` | `82403376f334b224335d1a15077a62dcaeb4a23cef233b1d1a883b7710c19a85` | Canonical records, stable IDs, dates/statuses, evidence fields, links, and version relationships |
| `docs/PUBLICATION_CONFLICT_LOG.md` | `6e91bdc7b3f013f653da92afa6549df00ca64fcfe1e005e801a817f03c2c17f6` | Candidate reconciliation, held/linked dispositions, conflict limits, and correction/retraction review |
| `content/pages/research.md` | `f1905fbf4f3700e508a99a996c75180ad4f6f4ae7b067aeddd2569c91d9f2b39` | Research-theme approval boundary and related-publication handoff |
| `docs/EVIDENCE_REGISTRY.md` v2 | `136cb6a2ce5a1ed3871bff04fefc341e2afff7a5fd539665292375888191af80` | Claim/profile status and evidence-source boundary |
| `docs/EDITORIAL_DIRECTION.md` | `6820c89089937a5c359f6b3b6b531e3e2ac63064ab4fd57e88a27c4b4b8793fb` | Voice, status, CTA, metric, and featured-language controls |
| `docs/INFORMATION_ARCHITECTURE.md` | `8e32daa99ac46acc7ec12720784b9624169d542461fcd4f03ed540bfff8c57ae` | Route, fragment, query, catalogue, and progressive-enhancement contract |
| `docs/PROJECT_BRIEF.md` | `a80aff9d1786e03be187ce967963193fa8707eaefcabf2b00bcc3c40c7657854` | Research-first tasks, catalogue integrity, privacy, accessibility, and scope |

Any changed fingerprint requires a selection-impact review. A changed canonical JSON fingerprint always reruns the latest algorithm and verifies every featured ID; it does not automatically replace featured records.

## 2. Candidate population and parity

| Population | Count | Selection treatment |
|---|---:|---|
| Canonical records | 27 | All are `verified/eligible`; all enter both selection audits |
| Unique normalized DOIs | 26 | DOI presence is not a selection score |
| DOI-less institutional record | 1 | Eligible on the same editorial footing; institutional source controls |
| Published journal articles | 24 | Exact `published` status retained |
| Online-first with future issue assignment | 1 | Eligible and sortable; exact future-state label required |
| Posted preprints | 1 | Eligible; exact preprint status required |
| Awarded doctoral theses | 1 | Eligible; exact type/status required |
| Held registered candidate | 1 | `CLM-PUB-000002`; excluded from both selection pools |
| Linked/not-counted registered candidates | 3 | Preserved in their canonical lineages; never separate selection candidates |

Parity equations:

- All supplied/current candidates: `27 canonical + 1 held + 3 linked = 31`.
- Registered candidates: `24 canonical + 1 held + 3 linked = 28`.
- Current-profile discoveries: `3 canonical`.
- Catalogue and selection candidate parity: `27 JSON records = 27 eligible candidates = 27 decision rows`.

## 3. Prohibited selection inputs

Neither selection uses citation counts, h-index, i10-index, journal rank, indexing, publisher or venue reputation, author position, surname prominence, open-access status, licence, citation-profile ordering, press attention, claimed impact, or promotional language.

Source quality means only fitness and authority for the exact bibliographic field: publisher version of record, DOI registration, or authoritative institutional repository. Record completeness means the canonical fields needed to identify and route to the work are present; it is not a quality judgement about the scholarship.

## 4. Deterministic latest policy

### Algorithm

1. Start with records whose `public_disposition` is exactly `eligible`.
2. Sort by `display_sort_date` descending.
3. If two values tie, sort by exact canonical `title` ascending.
4. Take the first five records. Five is the fixed CNT-005 latest window; it is small enough for a useful entry point while the complete catalogue remains authoritative.
5. Preserve each exact canonical status. `online_first_with_future_issue_assignment` sorts on its authoritative issue assignment but displays **Available online; issue assigned for [date]**, never an unqualified `Published` label.
6. Recompute on any canonical membership, disposition, `display_sort_date`, title tie-break, status, correction, or retraction change.

The algorithm does not use the current clock to remove a future-assigned record. The publisher-controlled status and date remain authoritative until upstream reconciliation changes them.

### Latest set

| Rank | Stable ID | Criterion evidence | Conflict / limitation | Decision date | Reviewer role | Replacement trigger |
|---:|---|---|---|---|---|---|
| 1 | `doi-10-1016-j-eswa-2026-132969` | Eligible; greatest canonical `display_sort_date` (`2026-12-01`) | Available online with a future issue assignment as of selection; no exact online-first date; must not be labelled simply published | 19 August 2026 | `publication_curator` | Any membership/date/status/title-tie/correction/retraction change; rerun all ranks |
| 2 | `doi-10-3390-systems14040385` | Eligible; second canonical sort position | No selection conflict; featured overlap is separately justified | 19 August 2026 | `publication_curator` | Same deterministic rerun trigger |
| 3 | `doi-10-32604-cmc-2025-075098` | Eligible; third canonical sort position | DOI suffix suggests 2025 but publisher issue record controls 2026; canonical status/date must remain intact | 19 August 2026 | `publication_curator` | Same deterministic rerun trigger |
| 4 | `doi-10-1016-j-aej-2025-06-011` | Eligible; fourth canonical sort position | Month-precision issue date uses a mechanical first-day sort value; do not display that day as a bibliographic claim; featured overlap separately justified | 19 August 2026 | `publication_curator` | Same deterministic rerun trigger |
| 5 | `doi-10-18280-isi-300510` | Eligible; fifth canonical sort position | Publisher volume controls over erroneous DOI-registration volume; selection does not erase that provenance note | 19 August 2026 | `publication_curator` | Same deterministic rerun trigger |

## 5. Featured policy

### Fixed size and criteria

The featured set contains four records. A candidate must satisfy all of these conditions:

1. `public_disposition=eligible` and a complete canonical identity route;
2. direct publisher/DOI or institutional-repository authority for the displayed record;
3. usefulness for a primary visitor task: understand a research line, assess fit, or move from Research to canonical evidence;
4. a title-supported role in a balanced research narrative, without presenting one title as an established theme;
5. no unresolved correction/retraction notice or canonical identity conflict; and
6. a distinct reason to remain after considering overlap with the other featured records.

Recency alone neither selects nor excludes a record. The set is stable across ordinary catalogue additions: replace a featured item only when its disposition/source/notice status fails, its rationale is rejected after primary abstract/publisher review, the approved research narrative materially changes, or a documented visitor-task gap requires a new balance. A replacement reruns all four positions and records the superseded decision; it is never triggered by citation or prestige changes.

### Featured set

| Order | Stable ID | Criterion evidence and visitor task | Conflict / limitation | Latest overlap | Decision date | Reviewer role | Replacement trigger |
|---:|---|---|---|---|---|---|---|
| 1 | `doi-10-3390-systems14040385` | Publisher/DOI-verified, complete journal record; exact title supports an entry point into privacy, policy enforcement, cross-institutional health-data sharing, and blockchain evidence | Title-derived relationship only; no abstract/keyword is stored in the dataset, and Research themes remain held | Yes. Overlap is justified because the same record serves current-catalogue discovery and a distinct research-fit task | 19 August 2026 | `publication_curator` | Ineligible/corrected/retracted; primary abstract rejects relationship; CNT-009 rejects balance; approved Research framing changes |
| 2 | `doi-10-1016-j-aej-2025-06-011` | Publisher/DOI-verified and complete; exact title provides evidence for blockchain interoperability and smart-contract work | Month-precision date must remain month precision; relationship is title-supported, not an impact or deployed-system claim | Yes. Overlap is justified by its distinct interoperability evidence rather than recency | 19 August 2026 | `publication_curator` | Same featured replacement rule |
| 3 | `doi-10-3389-fcomp-2024-1387354` | Publisher/DOI-verified survey record; exact title offers a broad visitor entry into machine-learning strategies and intrusion-detection considerations | One duplicate profile row is linked/not counted; title supports a candidate cluster but no current expertise/theme claim | No | 19 August 2026 | `publication_curator` | Same featured replacement rule |
| 4 | `doi-10-2196-27816` | Publisher/DOI-verified version of record; exact title provides a clear evidence route for dynamic consent and clinical genomic data sharing and connects to distinct thesis/article lineages | Linked preprint and duplicate profile row are not additional publications; “proof of concept” is title/status context, not deployment or impact | No | 19 August 2026 | `publication_curator` | Same featured replacement rule |

## 6. Complete 27-record decision matrix

Every eligible canonical record receives a latest and featured disposition below. `L1` means top-five deterministic latest rank. `L0` means outside that fixed window. `F1`–`F4` refer to the four featured rationales in Section 5. `F0-B` means the four-item balance is already served by a selected record; `F0-E` means the evidence is eligible for the catalogue but not strong enough for a Research relationship/featured rationale; `F0-S` means the set remains small and stable without another overlapping item.

Trigger `T-L` reruns the full latest ranking on a canonical membership/date/status/title/correction/retraction change. Trigger `T-F` applies the featured replacement rule in Section 5. Trigger `T-N` reconsiders a non-featured decision only after a documented visitor-task need, stronger primary relationship evidence, or approved research-framing change; metrics/prestige never trigger reconsideration.

| Canonical rank | Stable ID | Latest decision | Featured decision / criterion | Conflict or limitation retained | Selection date | Reviewer role | Trigger |
|---:|---|---|---|---|---|---|---|
| 1 | `doi-10-1016-j-eswa-2026-132969` | Yes — `L1` | No — `F0-S`; featured set avoids making a new/future-assigned record carry both selection roles without a distinct approved Research mapping | Future issue assignment; online-first date absent; title supports a candidate health-data relationship only | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 2 | `doi-10-3390-systems14040385` | Yes — `L1` | Yes — `F1`; privacy/policy/health-data evidence route | Title-derived relationship; no dataset abstract/keywords | 19 August 2026 | `publication_curator` | `T-L`; `T-F` |
| 3 | `doi-10-32604-cmc-2025-075098` | Yes — `L1` | No — `F0-B`; machine-learning/threat-detection entry is served by the selected survey record | DOI suffix/year conflict already resolved upstream; do not reintroduce 2025 | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 4 | `doi-10-1016-j-aej-2025-06-011` | Yes — `L1` | Yes — `F2`; interoperability/smart-contract evidence route | Month precision; no deployment or impact inference | 19 August 2026 | `publication_curator` | `T-L`; `T-F` |
| 5 | `doi-10-18280-isi-300510` | Yes — `L1` | No — `F0-B`; threat-detection breadth already served | DOI-registration volume conflict resolved in favour of publisher | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 6 | `doi-10-7717-peerj-cs-2914` | No — `L0` | No — `F0-B`; interoperability/security breadth already served | Distinct from the related 2024 Electronics lineage despite title-level overlap | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 7 | `doi-10-4236-iim-2025-173004` | No — `L0` | No — `F0-E`; title alone does not bind the supply-chain record to a held Research theme | Exact publisher record remains fully eligible in catalogue | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 8 | `doi-10-4236-ait-2025-152002` | No — `L0` | No — `F0-B`; machine-learning/intrusion-detection breadth already served | Full author/date/page fields come from publisher, not profile | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 9 | `doi-10-3390-systems13040231` | No — `L0` | No — `F0-B`; machine-learning/intrusion-detection breadth already served | Title-derived relationship only | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 10 | `doi-10-54364-aaiml-2025-51193` | No — `L0` | No — `F0-B`; interoperability breadth already served | DOI record currently meets threshold; stable publisher landing page remains a freshness request | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 11 | `doi-10-3390-electronics14050922` | No — `L0` | No — `F0-B`; threat-detection breadth already served | Preserve Albalawi/Albalwy identity distinction and exact long title | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 12 | `doi-10-1007-978-981-97-7603-0-35` | No — `L0` | No — `F0-E`; no Research relationship assigned from title alone | Linked 2023 conference/in-press candidate is one lineage, not another work | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 13 | `doi-10-3390-app142411966` | No — `L0` | No — `F0-B`; intrusion-detection breadth already served | Article number is not pages | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 14 | `doi-10-3390-electronics13193799` | No — `L0` | No — `F0-B`; blockchain/security breadth already served | Related later PeerJ work is a separate authoritative lineage | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 15 | `doi-10-1016-j-bspc-2024-106313` | No — `L0` | No — `F0-E`; applied health-analysis title does not establish a relationship to a held Research theme | Mathematical styling normalized upstream; no role/outcome inference | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 16 | `doi-10-1016-j-eswa-2023-123056` | No — `L0` | No — `F0-E`; applied health-analysis title does not establish a relationship to a held Research theme | Online-first 2023 and issue 2024 remain separate | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 17 | `doi-10-3389-fcomp-2024-1387354` | No — `L0` | Yes — `F3`; broad machine-learning/intrusion-detection visitor entry | Duplicate profile row `CLM-PUB-000019` linked/not counted | 19 August 2026 | `publication_curator` | `T-L`; `T-F` |
| 18 | `doi-10-2139-ssrn-4765808` | No — `L0` | No — `F0-E`; no Research relationship assigned from title alone | Posted preprint; no journal/conference status or later version inferred | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 19 | `doi-10-1016-j-heliyon-2024-e25958` | No — `L0` | No — `F0-E`; applied health-analysis title does not establish a relationship to a held Research theme | Article number is not pages | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 20 | `doi-10-1016-j-future-2023-09-032` | No — `L0` | No — `F0-S`; privacy/health-data narrative is already served by selected records | Online-first 2023 and issue 2024 remain separate; title relationship is candidate only | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 21 | `doi-10-1109-access-2024-3518973` | No — `L0` | No — `F0-E`; spatial-crowdsourcing privacy does not bind to a held Research theme from title alone | Year-only precision; first-day sort key is mechanical, not a public date | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 22 | `doi-10-3390-computers12060126` | No — `L0` | No — `F0-E`; no Research relationship assigned from title alone | Full author sequence retained; no ellipsis inference | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 23 | `doi-10-1371-journal-pone-0280038` | No — `L0` | No — `F0-B`; blockchain/security breadth already served | Article number is not pages | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 24 | `doi-10-1038-s41397-022-00285-5` | No — `L0` | No — `F0-S`; clinical-genomics/consent narrative is already served by selected JMIR record | Publisher initialed author form must remain canonical | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 25 | `doi-10-1155-2022-4389729` | No — `L0` | No — `F0-E`; smart-farming title does not bind to a held Research theme | Continue correction/retraction scan after publisher-stewardship change | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 26 | `manchester-thesis-2022-albalwy-clinical-genomics` | No — `L0` | No — `F0-S`; clinical-genomics/consent narrative is already served while the featured set remains four | DOI-less authoritative thesis; distinct from related articles; exact title case remains dataset-owned | 19 August 2026 | `publication_curator` | `T-L`; `T-N` |
| 27 | `doi-10-2196-27816` | No — `L0` | Yes — `F4`; dynamic-consent/clinical-genomics evidence route | Preprint DOI and `CLM-PUB-000028` duplicate row linked/not counted; no deployment/impact inference | 19 August 2026 | `publication_curator` | `T-L`; `T-F` |

## 7. Held, linked, and not-counted treatment

| Candidate / relationship | Treatment in CNT-005 | Reopening or replacement trigger |
|---|---|---|
| `CLM-PUB-000002` | Held and suppressed; absent from canonical JSON, catalogue manifest, latest pool, featured pool, result count, and theme candidates | CNT-004 must resolve DOI/pagination/venue identity and add one verified/eligible canonical lineage; then rerun CNT-005 |
| `CLM-PUB-000019` | Duplicate profile row linked to `doi-10-3389-fcomp-2024-1387354`; not counted or selected separately | Only distinct DOI/version-of-record evidence could reopen lineage treatment upstream |
| `CLM-PUB-000020` | Conference/in-press candidate linked to `doi-10-1007-978-981-97-7603-0-35`; not counted or selected separately | Only evidence of a substantively distinct published work could reopen upstream |
| `CLM-PUB-000028` | Duplicate profile row linked to `doi-10-2196-27816`; not counted or selected separately | Only distinct work identity evidence could reopen upstream |
| JMIR preprint DOI `10.2196/preprints.27816` | Linked version of the JMIR version of record; not a second catalogue or selection candidate | Upstream version correction only; never count both by default |
| 2024 Electronics / 2025 PeerJ east-west SDN records | Both remain counted because canonical DOI/title/authors/publisher/date evidence establishes distinct lineages | Merge only if authoritative version evidence overturns the current reconciliation |
| Manchester thesis / JMIR / Pharmacogenomics records | Each remains counted as a distinct authoritative work type/lineage; relationship does not collapse identity | Change only on authoritative version/withdrawal evidence |

## 8. Research relationship decisions

The dataset stores zero abstracts and zero keyword arrays. Exact canonical titles and existing version relationships are therefore the only in-dataset topical evidence. The three working labels below are editorial candidates for primary-abstract or publisher-descriptor review; none is an established/current theme or a launch filter value.

| Decision ID | Candidate stable IDs | Decision | Evidence boundary | Next owner / trigger |
|---|---|---|---|---|
| `REL-CAND-001` | `doi-10-1016-j-eswa-2026-132969`; `doi-10-3390-systems14040385`; `doi-10-1016-j-future-2023-09-032`; `doi-10-1038-s41397-022-00285-5`; `manchester-thesis-2022-albalwy-clinical-genomics`; `doi-10-2196-27816` | Candidate label: **Privacy and consent in health data** | Exact title terms and canonical version relationships only; no single programme/currentness/outcome inference | CNT-009 checks primary abstracts/publisher descriptors and approved `CLM-RTH-*`; DAT-002 assigns stable relationship IDs only after approval |
| `REL-CAND-002` | `doi-10-1016-j-aej-2025-06-011`; `doi-10-7717-peerj-cs-2914`; `doi-10-54364-aaiml-2025-51193`; `doi-10-3390-electronics13193799`; `doi-10-1371-journal-pone-0280038` | Candidate label: **Blockchain security and interoperability** | Exact title terms only; distinct lineages stay distinct; no expertise, impact, or programme inference | Same approval trigger |
| `REL-CAND-003` | `doi-10-32604-cmc-2025-075098`; `doi-10-18280-isi-300510`; `doi-10-4236-ait-2025-152002`; `doi-10-3390-systems13040231`; `doi-10-3390-electronics14050922`; `doi-10-3390-app142411966`; `doi-10-3389-fcomp-2024-1387354` | Candidate label: **Machine learning for threat and intrusion detection** | Exact title terms only; no common method/dataset/result/role/currentness inference | Same approval trigger |
| `REL-NONE-001` | `doi-10-4236-iim-2025-173004`; `doi-10-1007-978-981-97-7603-0-35`; `doi-10-1016-j-bspc-2024-106313`; `doi-10-1016-j-eswa-2023-123056`; `doi-10-2139-ssrn-4765808`; `doi-10-1016-j-heliyon-2024-e25958`; `doi-10-1109-access-2024-3518973`; `doi-10-3390-computers12060126`; `doi-10-1155-2022-4389729` | Explicitly no Research relationship assigned | The title alone is too weak to bind the record to any opaque held research-theme claim | Keep catalogue-only until stronger primary evidence and an approved theme exist |

Coverage check: `6 + 5 + 7 + 9 = 27` unique canonical stable IDs; zero overlap in this provisional partition. An approved data model may later allow multiple relationships, but this log makes no such claim.

## 9. Selection validation

| Check | Evidence | Result |
|---|---|---|
| Strict canonical parse | JSON parses successfully | Pass |
| Canonical count | 27 records; 27 unique anchor-safe stable IDs | Pass |
| Eligible pool | 27/27 records have `public_disposition=eligible` and `verification_status=verified` | Pass |
| DOI/DOI-less handling | 26 unique normalized DOIs; one authoritative DOI-less thesis | Pass |
| Latest determinism | First five canonical ranks selected; no tie at cutoff; future issue record retains exact status | Pass |
| Featured size and uniqueness | Four unique IDs; all exist and are eligible | Pass |
| Latest/featured overlap | Two IDs; each has a distinct visitor-task justification | Pass |
| Full decision coverage | 27 unique decision rows; every record receives latest and featured dispositions | Pass |
| Held suppression | `CLM-PUB-000002` absent from both sets and the catalogue manifest | Pass |
| Linked lineage handling | Three registered linked rows and JMIR preprint remain not counted | Pass |
| Relationship coverage | 27 unique stable IDs across three candidates plus one explicit no-relationship set | Pass |
| Metric/prestige exclusion | No citation, index, ranking, publisher reputation, author position, or impact factor used | Pass |
| Exact metadata ownership | Only stable IDs and editorial predicates are selected; canonical bibliographic fields remain in JSON | Pass |
| Scope | Only the Publications page and this log are created; no input, schema, code, gate, deployment, DNS, or P9 change | Pass |

## 10. Downstream handoff

- **CNT-008:** Home may store only the four featured IDs and/or dated latest IDs plus concise internal rationale. Do not duplicate title/authors/venue/year/status/DOI. Do not place the catalogue count in metadata.
- **CNT-009:** Revalidate public dispositions, links/notices, future issue status, overlap rationale, four featured decisions, five latest decisions, and all relationship/no-relationship decisions. Correct or suppress; do not use metrics to break a tie.
- **DAT-001/DAT-002:** Model featured/latest/relationship predicates separately from canonical records; include selection date, reviewer role, order/rank, rationale, source fingerprint, and triggers. Preserve all null/type/date/version semantics.
- **BLD-005:** Featured presentation is a navigation aid, not a badge hierarchy or quality signal. Use real canonical density and all state/accessibility/no-script requirements in `content/pages/publications.md`.

## 11. Completion boundary

CNT-005 selects and documents editorial entry points into the canonical catalogue. It does not change `content/data/publications.json`, resolve `CLM-PUB-000002`, approve the held Research themes, create schemas or code, close G2, deploy, change DNS, or begin P9.
