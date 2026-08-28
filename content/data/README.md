# DAT-002 canonical content data

`site-content.json` is the deterministic, G2-approved, internal-only canonical
aggregate. `publications.json` remains the immutable source-stage catalogue and
is not rewritten by DAT-002.

## Inputs and generation boundary

The aggregate was generated from the approved copy pack, immutable publication
catalogue, publication decision logs, evidence registry, content governance,
and information architecture. It freezes the source observation timestamp at
`2026-08-19T02:20:00+03:00`; it has no wall-clock generation step, network
call, deployment behaviour, or public projection.

| Input | SHA-256 |
| --- | --- |
| `content/approved/APPROVED_COPY_MANIFEST.json` | `d3a27bd307b20b556d89ff71cb699935ddd80ace7394bca5f18ca40fc1df5ad1` |
| `content/data/publications.json` | `82403376f334b224335d1a15077a62dcaeb4a23cef233b1d1a883b7710c19a85` |
| `docs/CONTENT_REVIEW.md` | `19cc392de87ebd5246b8945f64fef9bb4f91d7be12a0441e4a4ccb794703d5ec` |
| `docs/PUBLICATION_CONFLICT_LOG.md` | `6e91bdc7b3f013f653da92afa6549df00ca64fcfe1e005e801a817f03c2c17f6` |
| `docs/PUBLICATION_SELECTION_LOG.md` | `54ec86a4bc12c812f5458af48831d1a55b052deb83dd225caaa77d38e8976ac9` |
| `docs/EVIDENCE_REGISTRY.md` | `136cb6a2ce5a1ed3871bff04fefc341e2afff7a5fd539665292375888191af80` |
| `docs/CONTENT_GOVERNANCE.md` | `38366ee1a42b95dd54cbe0739f5d76ec8367d3d439228bc217db0c834b75797c` |
| `docs/INFORMATION_ARCHITECTURE.md` | `8e32daa99ac46acc7ec12720784b9624169d542461fcd4f03ed540bfff8c57ae` |

## Collection matrix

| Collection | Count | Rule |
| --- | ---: | --- |
| Publications | 27 | Source sort order, 26 normalized DOIs, one Manchester thesis, exactly one Faisal author per record. |
| Themes | 3 | Established approved themes only. |
| Theme-publication relationships | 7 | Exact approved research-copy bindings. |
| Projects and systems | 0 | No approved project/system record. |
| Courses | 19 | Approved title list only. |
| Teaching occurrences | 0 | No occurrence is promoted from protected schedules without a separate privacy-safe, approved mapping. |
| Career | 2 | Approved doctoral and appointment context only. |
| Service | 10 | Three one-year leadership terms, five source-specific review records, and two community lineages; review values are non-additive. |
| Metrics | 0 | No volatile metric snapshot is included. |
| Profile links | 3 | Approved Scholar, ORCID, and Taibah profile links. |
| Availability states | 16 | R1–R8 plus approved empty/unavailable/partial/error/no-results/offline/404/indexing behaviour. |

Record IDs are lowercase ASCII stable IDs and never depend on display order.
Publication fragments are `publication-<record_id>`. Relationships and course
records use stable foreign keys. Optional projects, metrics, and teaching
occurrences are intentionally empty rather than inferred.

## Lifecycle and QA-007 promotion hold

Every canonical record is `verified`/`eligible` with
`render_eligibility=internal_only`; the aggregate contains **0**
`render_eligibility=public` and **0** `public_disposition=publish` records.
Candidate wording and approved locations are retained for internal binding only.
No build mode, route inclusion, G2 decision, or file presence can promote a
record.

QA-007 is append-only. After QA-002, QA-004, QA-006, and QA-009 acceptance,
it may add a new governed record version only when the record's evidence,
privacy, rights, editorial, and QA approvals are all explicitly true; rights
and consent are `granted` or `not_applicable`; required source availability,
freshness, translation, public wording/location, correction state, and privacy
conditions pass. It must never overwrite this source-stage version, infer a
promotion, aggregate reviewer metrics, or change publication lineage.

## Validation

Run from the repository root with the exact pinned toolchain:

```text
node content/schemas/validate.mjs content/data/site-content.json
node --input-type=module < Ajv Draft 2020-12 aggregate check
```

DAT-002 results: dependency-free validation passed 23/23 checks (including
cross-record foreign keys and lifecycle checks); Ajv Draft 2020-12 passed all
12 registered schemas. Privacy/marker checks found no restricted path, hash,
token, timetable, student, phone, private email, protected-file, or unresolved
marker in `public_presentation` data.

Rebuild when an approved-copy pack, source catalogue, source decision, rights
or privacy determination, correction/retraction, profile identity/access,
course-title approval, route/state decision, or QA-007 promotion changes.

## Handoffs

DAT-004 may derive only separately approved assets. DES-004/DES-005 and
BLD-001–009 may bind internal data but must use the public guard. INT-001,
INT-002, INT-004, and INT-005 own indexing, integration, and release decisions.
QA-002, QA-006, and QA-007 own evidence, privacy, and append-only promotion
validation. Maintenance re-runs the same source-hash and collection checks.
Gate G5 and P9 remain outside DAT-002.
