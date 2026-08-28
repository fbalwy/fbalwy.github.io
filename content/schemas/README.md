# Structured-content schema contract

**Work package:** DAT-001 v1  
**Schema release:** 1.0.0  
**Dialect:** JSON Schema Draft 2020-12  
**Public-release state:** none; these schemas do not approve or publish records

## Inventory

| File | Contract |
|---|---|
| `common.schema.json` | Stable IDs; claims and sources; provenance; lifecycle/disposition; privacy, rights, and consent; translation; freshness; correction/version history; periods, dates, external actions, and the shared record envelope. |
| `publication.schema.json` | Canonical publication record, ordered authors, typed dates, DOI-less thesis allowance, future issue state, nullable pages/article number, version/notice links, and stable fragments. |
| `publication-dataset-v1.schema.json` | Exact, non-mutating compatibility contract for `content/data/publications.json` v1. |
| `theme.schema.json` | Established/emerging themes and separately governed theme-publication editorial relationships. |
| `project-system.schema.json` | Project, grant, framework, prototype, study, dataset, and research-system records with bounded role, status, maturity, funding, confidentiality, outputs, and relationships. |
| `teaching.schema.json` | Canonical course title and separate historical teaching occurrence. Schedule, student, room, time, section, delivery-mode, and timetable URL fields are not in the closed occurrence schema. |
| `career.schema.json` | Education, appointment, and career timeline records with typed/open periods and independently controlled current status. |
| `service.schema.json` | Technology leadership, committee, peer-review, community, talk, professional-development, and membership records; issuer metrics are explicitly source-specific and non-additive. |
| `metric.schema.json` | Volatile source-specific metric snapshots with observed time and non-additive aggregation policy. |
| `profile-link.schema.json` | Canonical HTTPS profile/external links with identity match, access state, observation time, and same-tab semantics. |
| `availability.schema.json` | Stable route/module availability plus empty, partial, unavailable, loading, error, no-results, recovery, HTTP, indexing, and fragment-removal behavior. |
| `site-content.schema.json` | Aggregate collection and domain routing contract. |
| `publication-adapter-v1.json` | Field-by-field mapping from the existing publication dataset to canonical publication records; it changes no source data. |
| `validation-matrix.json` | Deterministic check inventory and fixture expectations. |
| `validate.mjs` | Dependency-free schema/fixture/collection validator. |

All schemas use stable `$id` values below `https://fbalwy.sa/schemas/v1/`. A breaking change requires a new major path and `schema_version`; an additive optional field requires a minor release. IDs and released fragments are immutable and never recycled.

## Fail-closed release contract

Every canonical domain record is wrapped by `common.schema.json#/$defs/recordEnvelope`. The envelope requires claim IDs; typed sources and lineage; source roles; verification and review dates; a freshness policy; owner and reviewer roles; privacy, evidence privacy, rights, consent, translation, correction, supersession, history, public wording/location, and an omission reason when held, suppressed, or withdrawn.

Allowed lifecycle/disposition pairs are closed. In particular:

- `verified/eligible` remains `render_eligibility=internal_only`.
- Only `verified/publish` may set `render_eligibility=public`.
- `publish` additionally requires a named owner ID, all five approvals, rights and consent of `granted` or `not_applicable`, non-empty exact public wording, and at least one registered public location.
- `conflict_open/suppress`, rejected records, unavailable or unusable sources, restricted/denied/unknown safety axes, stale/withdrawn records, and pending/rejected translations remain internally valid but cannot render.
- Unknown or invalid controlled values fail validation rather than falling through as text.
- Internal source IDs, paths, hashes, reviewer notes, and protected source-language values have no public-presentation field. Public output must be built only from `public_presentation` plus explicitly allowed domain fields after `render_eligibility=public`.

The validator deliberately treats a schema pass as necessary but not sufficient. It also enforces collection invariants JSON Schema cannot express reliably across arrays.

## Publication dataset compatibility

`content/data/publications.json` is compatible with `publication-dataset-v1.schema.json` without modification. It is a source-stage catalogue, not a canonical publish-ready aggregate. `publication-adapter-v1.json` maps it into the canonical publication shape:

- `stable_id` becomes immutable `record_id`; public fragment becomes `publication-${stable_id}`.
- `evidence_claim_ids`, `sources`, and the generation/check dates seed, but do not complete, canonical claims/provenance/freshness.
- exact `authors` order and every `is_faisal` flag are retained; collection validation requires exactly one true flag.
- `doi` is kept nullable only for the authoritative thesis; all non-null values remain lowercase, resolver-prefix-free, and unique.
- source `dates` become typed canonical date events. `publication` maps to canonical `issue`; all other types retain their meaning. Source URL and exact source precision remain provenance inputs.
- `pages` and `article_number` remain independently nullable; neither is synthesized from the other.
- version relationships are translated to stable record links where a canonical target exists; candidate-only/DOI-only relations remain an adapter hold until resolved.
- source `verified/eligible` remains internal-only. The adapter never promotes it to `publish`.

The existing dataset does not contain the complete envelope: named owner, reviewer set, full source-role/lineage facts per cited field, privacy/rights/consent decisions, translation review, exact public wording/locations, or full append-only history. DAT-002 must populate those fields from governed sources; it must not infer them from the adapter.

## Cross-record validation layer

Run from the repository root:

```text
node content/schemas/validate.mjs
node content/schemas/validate.mjs path/to/canonical-site-content.json
```

The dependency-free validator performs:

1. JSON parsing, Draft 2020-12 declaration, stable and unique `$id`, local `$ref` resolution, and schema inventory checks.
2. Valid-example checks and intended-reason failure for every invalid fixture.
3. Unique record ID and normalized DOI checks across collections.
4. Foreign-key checks for theme/publication, project/theme/publication, occurrence/course, source platform, version/supersession, and fragment relationships.
5. Exact one-Faisal-author rule and preserved author order.
6. Date precision/status checks, including future issue assignment.
7. Lifecycle/disposition/render-eligibility checks and release-field completeness.
8. Restricted-field and unresolved-marker scans over public wording, locations, actions, and source notes.
9. Current publication dataset compatibility, count parity, sort order, DOI URL normalization, DOI-less thesis, source coverage, and linked-version targets.

For independent standards-level validation, use any Draft 2020-12 implementation that resolves relative files from this directory. Example with a separately managed Ajv CLI (not installed or initialized here):

```text
ajv validate --spec=draft2020 --strict=false --validate-formats=false -r content/schemas/common.schema.json -s content/schemas/publication.schema.json -d content/schemas/examples/valid/publication.json
ajv validate --spec=draft2020 --strict=false --validate-formats=false -r content/schemas/common.schema.json -s content/schemas/publication-dataset-v1.schema.json -d content/data/publications.json
```

## Route, state, and accessibility contract

Stable route IDs are `R1`–`R8`; publication/project fragments are immutable ASCII IDs. Availability records distinguish optional empty-module removal from required-route release blockers, unavailable email/CV, catalogue failure, no results, and recoverable external failure. They carry specific headings, explanations, affected content, recovery actions, programmatic status, HTTP intent, and indexing intent.

Structured content may declare semantic density only through the domain implied by the record: reading content, catalogue/list content, or bounded status/signals. It never stores CSS values, token paths, breakpoints, columns, colors, or typography. Descriptive external/download labels and complete public wording remain untruncated strings. Layout, zoom, print, focus, forced-colors, reduced-motion, and progressive enhancement remain component/build obligations; the schemas preserve the text, relationships, states, and actions those modes require.

## DAT-002 and downstream handoff

- **DAT-002:** transform only approved records; apply the adapter without mutation; fill every envelope axis; preserve source precision and IDs; run this validator; never convert `eligible` into `publish`.
- **TEC-001:** select a Draft 2020-12 validator and enforce schema plus collection checks in the build without changing route, query, email-only, no-analytics, or public/private boundaries.
- **DES-004 / BLD:** bind components to domain/state fields, keep claim before evidence, hide optional empty modules and their fragments together, preserve long labels, and treat `render_eligibility=public` as the sole render switch.
- **QA-002:** join every rendered value to a publishable record and claim/source path; verify date/status/DOI/relationship and zero unresolved marker leakage.
- **QA-004:** test descriptive actions, state announcements, fragment focus, long-content reflow, and complete meaning without enhancement.
- **QA-006:** scan public output for protected values, private provenance, identifiers, timetable/student fields, rights/consent failure, and correction/withdrawal propagation.

## Deliberate limitations

- JSON Schema does not prove source authority, independence, truth, freshness at the current clock time, owner identity, human approval, accessibility, link reachability, or rights/consent scope. Those require evidence review and QA.
- Collection uniqueness, foreign keys, sort order, date comparisons, and exactly-one-Faisal are enforced by `validate.mjs`, not by per-item JSON Schema alone.
- The current dataset is compatibility-validated but is not silently rewritten into canonical records in DAT-001.
- No record count, current title, publication title, private value, metric value, deployment claim, CSS/layout value, application code, or release approval is embedded in the canonical schemas.
