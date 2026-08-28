# Content Governance Standard

**Work package:** STR-004 v1

**Status:** Binding Phase 2 governance design; no claims approved

**Prepared:** 2026-08-19

**Scope owner:** Content governance

**Next registry:** CNT-001 (not created by this work package)

## 1. Purpose and scope

This standard controls every fact, claim, record, document, link, metric, quotation, image, and other medium considered for the public Faisal Albalwy academic website. It defines how later work must collect evidence, reconcile conflicts, protect people and source material, determine freshness, and suppress material that cannot be safely published.

The standard is deterministic and fail-closed:

- Nothing is public merely because it appears in a CV, profile, timetable, certificate, decision, filename, source folder, design template, prior website draft, or planning document.
- A source is authoritative only for fields within that source's defined authority scope.
- Missing, inaccessible, ambiguous, conflicting, stale, or insufficient evidence results in `hold` or `suppress`, never a best guess.
- A fact that may be stated publicly does not make its evidence file safe or licensed for public download.
- Publication requires separate passes for evidence, wording, privacy, rights, consent, freshness, and owner accountability.
- No average, merge, addition, translation, date conversion, or current-status inference is permitted unless a category rule explicitly allows it and the transformation is recorded.

This document does not create a claim inventory, decide any real claim, approve public copy, close G1, or authorize deployment.

## 2. Binding context and source-readiness record

This design was derived from the Phase 1 brief, autonomous execution policy, master build plan, both website structure documents, the teaching, administrative-service, and community-service source directories, recorded profile URLs, and all current brand governance outputs through the independent Phase 1 compliance review.

The available local corpus contained:

- the owner-provided English CV original outside the project root: 5 pages, 400,688 bytes, SHA-256 `70de702155264f3e9fd1bdfe8c1f82985ad48c347a10fe8339241ca2a64f56f0`;
- the owner-provided Arabic CV original outside the project root: 32 pages, 20,781,408 bytes, SHA-256 `f4d3a6921ebc7232b85943578189e3a0a97d867630a5e3869d3a0b99b56e2fce`;
- 10 teaching-schedule PDFs;
- 22 administrative-service PDFs and one administrative-service JPEG;
- 9 community-service PDFs and one community-service PNG;
- current brand governance records, web tokens, the public brand pack, and Phase 1 review outputs.

The two CV PDFs are protected originals in the owner-provided OneDrive location outside the project root. Coordinator validation confirmed both binaries and the English source wording for the current academic-title candidate. This proves source availability, not factual approval or redistribution rights. CNT-001 must register their hashes, provenance, dates, evidence lineages, conflicts, privacy classes, and access restrictions before any CV-derived record can progress beyond `unassessed`; copied planning prose cannot substitute for that registration.

The recorded Google Scholar, Scopus, ORCID, Web of Science, ResearchGate, Taibah University, LinkedIn, and X URLs were considered as candidate profile endpoints. Automated access was uneven: some endpoints were blocked, rate-limited, or dependent on JavaScript, while some exposed crawlable content. This is an access observation, not verification of any profile value. A cached page, search result, crawler excerpt, or availability response is never a substitute for the category-specific evidence rules below.

The source review also found conditions that the controls must handle:

- byte-identical copies of administrative decisions, which form one evidence lineage rather than independent corroboration;
- image-only and encrypted PDFs, which require visual/OCR review and cannot be treated as empty or automatically safe;
- filenames that say a record does not include Faisal, which cannot support a positive claim;
- schedules containing section identifiers, student counts, rooms, meeting times, delivery mode, faculty codes, and service URLs;
- volunteer certificates visibly containing an identity number and QR code;
- certificates from the same issuer with overlapping periods and later cumulative totals;
- dynamic profile counts that can change without notice.

These observations identify risk patterns only. They do not approve any fact represented in those sources.

## 3. Normative language and governing precedence

`MUST`, `MUST NOT`, `REQUIRED`, and `PROHIBITED` are binding. `SHOULD` identifies the default when a documented exception is allowed. `MAY` grants permission only after all applicable required checks pass.

For content governance conflicts, the order is:

1. privacy, law, confidentiality, consent, contractual restrictions, and security constraints;
2. the autonomous execution policy and locked decisions in the master plan and project brief;
3. approved gate artifacts for their own scope, including brand governance for affiliation and identity use;
4. this standard for evidence and publication decisions;
5. later claim, data, content, design, and implementation artifacts;
6. planning documents, templates, drafts, filenames, and discovery material.

This is governance precedence, not factual source precedence. Factual precedence is field-specific and defined in Section 7. A newer lower-authority source does not automatically defeat an older field-authoritative source. A later project document does not retroactively verify a fact.

## 4. Source roles

Each source citation MUST have exactly one role for the specific field being assessed. The same artifact can have different roles for different fields.

| Role | Definition | Evidentiary effect |
|---|---|---|
| `authoritative_primary` | The originator or custodian empowered to establish the exact field, such as an awarding institution for an award date or a publisher for a publication record. | Can satisfy the primary-evidence requirement only within its recorded authority scope. |
| `corroborating` | An independently maintained source that materially agrees with a field but does not originate or control it. | Can meet a required convergence rule; cannot normally establish the fact alone. |
| `discovery_only` | A lead used to locate a stronger record, including search results, imported profiles, snippets, and planning prose. | Counts as zero evidence toward verification. |
| `owner_assertion` | A dated, attributable statement by Faisal, preserved exactly with its scope. | Primary only for preferences, first-person interpretation, availability, or owner-controlled biography; corroborating for externally established facts. |
| `unusable` | A source that is unrelated, does not name or identify the subject sufficiently, is illegible without validation, lacks provenance, is a filename or template, is known to exclude the subject, or cannot support the field. | Counts as zero and MUST NOT be cited publicly. |

Additional requirements:

- `authoritative_primary` means field-authoritative, not universally authoritative.
- A protected decision, certificate, transcript, or contract can support an extracted fact while remaining non-public.
- An English and Arabic CV maintained by the same owner share one evidence lineage; they are not independent.
- Copies, scans, reissues, mirrors, exports, and files with the same underlying decision or byte hash share one lineage.
- Profiles that import the same Crossref, ORCID, publisher, or institutional feed are not independent for the imported field.
- A source quoting another record is independent only if it also performs its own accountable verification. Republishing is not verification.
- Owner confirmation does not override an official appointment, award, publisher, retraction, or other external record.

## 5. Independence and convergence rules

### 5.1 Evidence-lineage test

Two sources are independent only when all of the following are true:

1. they have different responsible custodians;
2. neither copies, exports, mirrors, or quotes the other for the field;
3. they do not depend on the same upstream feed or underlying decision;
4. they were not generated from the same owner-authored record;
5. each can be traced to its own snapshot, location, and date.

If independence cannot be demonstrated, all related sources count as one lineage.

### 5.2 Deterministic convergence

- One complete, current, unambiguous field-authoritative primary may verify a low-risk historical fact when the category matrix expressly says `P1`.
- `P1+C1` means one field-authoritative primary plus one independent corroborating lineage.
- `P2` means two independent field-authoritative primaries, normally used when two authorities control different necessary parts of the statement.
- `O1` means a dated owner assertion is the field-authoritative primary because the fact is owner-controlled.
- `R` means a separate rights or redistribution record is required.
- `C` means a separate consent record is required.
- `F` means a passing freshness check at the specified cadence is required.
- No number of discovery-only or unusable sources satisfies any threshold.
- Two corroborating sources do not replace a missing primary unless the category matrix explicitly provides a documented exception. This standard provides no such exception for degrees, appointments, project funding, publication identity, or service decisions.
- If a required primary is unavailable, the result is `insufficient` and `hold`, not promotion of a lower source.

### 5.3 Conflict behavior

- A contradiction between sources at the same or higher applicable authority opens `active` conflict and suppresses the affected field.
- A lower-authority contradiction is recorded. The higher source may control only when it is unambiguous, current where required, and clearly applies to the same atomic field and time interval.
- Conflicting numbers are never averaged, added, or silently replaced.
- Conflicting dates are preserved as separate typed dates when they describe different events; otherwise the conflict remains open.
- A source date, file-modification date, download date, and event-effective date are distinct fields.
- Resolution MUST identify the deciding evidence, resolver, rationale, and timestamp. Deleting the losing value is prohibited; it remains in history.

## 6. CNT-001 claim record contract

CNT-001 MUST implement this schema without pre-populating or approving claims. All fields are required unless marked conditionally required.

| Field | Type / controlled value | Rule |
|---|---|---|
| `claim_id` | `CLM-<DOMAIN>-<6 digits>` | Immutable, unique, never reused. This pattern is illustrative, not an actual claim. |
| `claim_version` | positive integer | Increment for every material evidence, value, wording, status, or disposition change. |
| `subject_id` | stable entity reference | Must not embed a name, email, or private identifier. |
| `category` | Section 6.1 vocabulary | Select exactly one. |
| `predicate` | controlled field name | One independently verifiable assertion only. |
| `object_value` | typed value | Preserve source form; do not place multiple claims in one value. |
| `object_normalized` | typed value or null | Allowed only with a recorded transformation method. |
| `public_wording` | string or null | Exact proposed wording. Null until editorial preparation. |
| `temporal_scope` | date/interval/term or null | Required for time-bound claims. |
| `date_basis` | controlled value or null | Examples: `effective`, `award`, `online_first`, `issue`, `observed`, `start`, `end`. |
| `date_precision` | `day`, `month`, `year`, `term`, `unknown` | Must reflect the source; no invented day or month. |
| `language_of_evidence` | BCP 47 code | Records evidence language, not site language. |
| `translation_status` | Section 6.1 vocabulary | Required when public wording differs in language. |
| `source_citations` | non-empty list | Each item uses the citation schema below. |
| `evidence_lineage_ids` | list | Required for independence calculation. |
| `verification_threshold` | `P1`, `P1+C1`, `P2`, `O1`, plus flags | Copied from the category matrix; cannot be weakened per claim. |
| `verification_status` | Section 6.1 vocabulary | Derived only by the transition rules. |
| `conflict_state` | Section 6.1 vocabulary | Must cover all known competing values. |
| `privacy_class` | Section 11 vocabulary | Applies to the public claim value. Evidence can have a stricter class. |
| `evidence_privacy_class` | Section 11 vocabulary | Highest class among evidence items. |
| `rights_status` | Section 6.1 vocabulary | Required for documents, media, logos, code, screenshots, and quotations beyond minimal fair citation. |
| `consent_status` | Section 6.1 vocabulary | Required when an identifiable person is represented beyond an ordinary public bibliographic or official-record citation. |
| `public_disposition` | Section 6.1 vocabulary | Fail-closed output controlling downstream use. |
| `first_verified_at` | ISO 8601 timestamp or null | Set only on first transition to `verified`. |
| `last_verified_at` | ISO 8601 timestamp or null | Must identify the actual verification event. |
| `observed_at` | ISO 8601 timestamp or null | Required for metrics and dynamic profile values. |
| `review_cadence` | controlled duration/event | Copied from Section 13. |
| `next_review_due` | ISO 8601 date/timestamp or null | Computed, never free text. |
| `review_triggers` | list | Includes every applicable event trigger. |
| `record_owner_role` | controlled role | One accountable role; a named assignee is required before `publish`. |
| `reviewer_roles` | list | Evidence, privacy, rights, editorial, and QA roles as applicable. |
| `supersedes_claim_ids` | list | Prior records replaced by this one. |
| `superseded_by_claim_id` | ID or null | Set when replaced. |
| `public_location_ids` | list | Every page, component, download, structured-data node, or feed using the claim. |
| `decision_rationale` | string | Short, evidence-based explanation for the current status. |
| `history` | append-only events | Actor, role, timestamp, previous value, new value, and reason. |

Each `source_citations` item MUST contain: `source_id`, `source_role`, `authority_scope`, `custodian`, `independence_basis`, `source_location`, `pinpoint_location`, `original_or_derivative`, `snapshot_id`, `snapshot_hash`, `snapshot_at`, `accessed_at`, `source_date`, `effective_date`, `access_state`, `source_privacy_class`, `redistribution_allowed`, and reviewer notes. Public output MUST NOT expose private source paths, internal IDs, hashes, or reviewer notes.

### 6.1 Controlled vocabularies

`category`: `identity_name`, `degree`, `appointment`, `role`, `publication`, `project_funding`, `teaching`, `supervision_student`, `administrative_service`, `community_service`, `talk_training`, `metric`, `profile_link`, `contact`, `cv_document`, `photo_media`, `partner_sponsor`, `brand_affiliation`.

`verification_status`: `unassessed`, `collecting`, `insufficient`, `verified`, `conflict_open`, `stale`, `superseded`, `retracted`, `rejected`.

`conflict_state`: `none`, `potential`, `active`, `resolved`.

`public_disposition`: `suppress`, `hold`, `eligible`, `publish`, `withdraw`.

`rights_status`: `not_applicable`, `unknown`, `pending`, `granted`, `restricted`, `denied`, `expired`, `withdrawn`.

`consent_status`: `not_applicable`, `unknown`, `pending`, `granted`, `denied`, `expired`, `withdrawn`.

`translation_status`: `not_needed`, `source_official`, `owner_reviewed_literal`, `pending`, `rejected`.

`record_owner_role`: `content_owner`, `evidence_steward`, `publication_curator`, `privacy_reviewer`, `rights_reviewer`, `technical_link_reviewer`, `quality_reviewer`. STR-005 or later authorized planning MUST assign named people; a role label alone cannot authorize publication.

## 7. Field-specific authority and inclusion matrix

The rows below are the only default authority rules. A primary listed in one row has no implied authority in another.

| Category / field | Field-authoritative primary | Corroborating or discovery sources | Minimum and public rule |
|---|---|---|---|
| Identity and display name | `O1` for preferred public display; current official institutional directory/profile to bind the person to the affiliation | ORCID and publisher author identities corroborate; social profiles are discovery | `O1+C1`. Publish only the owner-approved English display form. Do not infer or expose a legal/full identity. |
| Degrees and award dates | Awarding institution certificate, transcript, formal verification, or official degree record | CV and ORCID corroborate; profile prose is discovery | `P1`; use `P1+C1` if the record is ambiguous. Study interval and award date are separate claims. Evidence files are protected by default. |
| Institutional appointment | Appointment, renewal, promotion, or termination decision from the responsible institution, or its current HR/faculty record | CV and scholarly profiles corroborate | Historical appointment: `P1`. Current appointment: `P1+F`, with a current official record or dated institutional confirmation. |
| Company or leadership role | Formal appointment/renewal/termination decision or accountable company/institution record | Company website and owner assertion corroborate | `P1`; `P1+C1+F` for a current title. The decision's effective date controls over a filename date. Scope and organization must be exact. |
| Publication identity and metadata | Publisher article page/version of record; DOI registration record when the publisher record is unavailable | Crossref, ORCID, Scopus, Web of Science corroborate; Scholar and ResearchGate are discovery/corroboration only after provenance review | `P1`. Apply Section 8. No profile total establishes a publication record. |
| Project, grant, funding, status | Award notice, executed agreement, grant-system record, or authorized funder/host announcement for its controlled fields | Owner assertion and CV corroborate; proposal is discovery and usually Restricted | `P1`; `P1+C1+F` for current status, amount, partner, or role. Rights/confidentiality review is mandatory. Never treat a proposal as an award. |
| Teaching occurrence | Official teaching assignment or schedule for instructor/course/term | CV and owner assertion corroborate | `P1`. Public output may state only a normalized course title and historical term/year after translation review. Section, student count, faculty code, room, time, delivery mode, and schedule URL/document are suppressed. |
| English course title | Official English course catalog or authorized English course record | Owner-reviewed literal translation may be used only when no official translation exists and the Arabic source is verified | `P1`; otherwise verified Arabic title plus `owner_reviewed_literal`, explicitly recorded as a translation. Never invent course terminology. |
| Supervision or student record | Authorized institutional supervision record for role/status | Owner assertion corroborates availability; student-provided statement can corroborate their own participation | `P1+C+F` if a student is identifiable. Prefer aggregate or role-only wording. Grades, IDs, schedules, contact data, and private progress are prohibited. |
| Administrative service | Signed/issued decision, renewal, completion record, or responsible-unit record | CV corroborates; filenames and unrelated committee decisions are unusable | `P1`. Record committee, role, scope, and effective interval atomically. Current service also requires `F`. |
| Community service and peer review | Issuer certificate, organizer record, or journal/reviewer service that states recipient, activity, and period | CV and owner assertion corroborate | `P1`. Suppress source document unless redistribution rights and privacy checks pass. Overlapping cumulative certificates from one issuer supersede; they are never summed. |
| Talks, workshops, and training | Organizer program, attendance/completion record, or credential issuer record | Owner assertion and CV corroborate | `P1`. Distinguish speaker, attendee, trainer, organizer, and certificate recipient. Current credentials require issuer status/expiry verification. |
| Platform metric | The platform that defines and displays that exact metric | No other platform can corroborate or replace it because definitions differ | `P1+F`. Publish exact value, platform, definition if available, and `observed_at`. No cross-platform total, average, trend, or merge. |
| Profile link and identifier | Canonical platform page or identifier resolver | Owner assertion selects preferred links; planning documents are discovery | `P1+F`. Link must resolve to the intended person without login-dependent assumptions. An inaccessible or ambiguous link is held or omitted. |
| Contact | Current official institutional directory/account plus owner confirmation | Prior CV is discovery | `P1+C1+F`. Only the institutional email may be public. No personal phone, private email, postal address, contact form, or analytics. |
| Public CV document | Owner-approved derivative created from registered originals under DAT-004 | Original CV supports derivation but is not automatically redistributable and does not independently verify external claims | `O1+R+F`, plus every included claim must independently pass its category rule. Original documents remain protected. |
| Photo, testimonial, quotation, media | Creator/licensor rights record and, for identifiable people, their scoped consent | Owner possession is not proof of rights | `R+C+F`. No publication while rights, release scope, attribution, duration, or withdrawal handling is unknown. |
| Partner or sponsor identity | Executed agreement or authorized public announcement for the relationship; partner approval where contractually required | Owner assertion and project materials corroborate | `P1+R+F`; consent/approval where required. Do not imply endorsement, sponsorship, or current partnership beyond exact evidence. |
| Brand affiliation | Current approved Phase 1 brand governance artifacts for presentation; current official institution page for factual affiliation | Owner authorization explains permitted project use but is not institutional approval | G0 controls plus `P1+F` for the factual affiliation. Faisal remains primary; use English text-only affiliation and the verified same-tab official university URL. No university logo, symbol, invented lockup, pattern, icon, photo, or Tosh A. |

## 8. Publication-specific reconciliation

Each scholarly work is a separate record. CNT-004 MUST apply these rules before any work reaches `eligible`:

1. Normalize a DOI by lowercasing, removing resolver prefixes, and preserving the canonical DOI string. Exact DOI equality identifies one work lineage, not two publications.
2. When no DOI exists, compare normalized title, complete author sequence, venue, and version/date. A similarity match is a review candidate, never an automatic merge.
3. Preserve publisher title, author spelling/order, venue, volume, issue, pages/article number, and work type. Do not silently shorten author lists or retitle a work.
4. Store `online_first`, `issue`, `conference`, `preprint`, `accepted`, and `retracted` dates as separately typed events. Do not use online-first year as issue year or count versions as distinct outputs without an explicit version policy.
5. Link preprint, accepted manuscript, conference version, and version of record through a relationship field. The public count policy must identify which version is counted.
6. If a conference work and later journal work materially overlap, do not merge or separate them based on title similarity alone; use publisher/DOI/version evidence.
7. Publisher corrections, expressions of concern, withdrawals, and retractions trigger immediate review. A retracted work cannot be presented without a clear retraction status and approved rationale; default disposition is `withdraw`.
8. Author name variation is reconciled with ORCID, publisher records, and owner identity evidence. Name similarity alone is insufficient.
9. Profile publication totals are platform metrics, not derived bibliography totals. A local total must be computed only from the verified registry with a documented counting rule and generated timestamp.
10. Citation, read, h-index, and review totals remain source-specific snapshots. They are never added across platforms or issuers.

## 9. Date, number, translation, and status rules

- Dates use ISO 8601 internally while preserving the exact source string and calendar. A Hijri/Gregorian conversion requires a documented authoritative conversion basis; otherwise retain the original calendar and precision.
- Unknown day or month stays unknown. Never replace an undated decision with its filesystem date, scan date, email date, or folder label.
- A period, effective date, award date, publication date, expiry date, and observed date are different predicates.
- Numeric values retain unit, denominator, scope, source definition, and observation date. Percentages require numerator and denominator or the source's definition.
- Cumulative certificates from one issuer and overlapping interval form a supersession candidate. The later total does not become verified until the issuer/date/recipient match is checked; the values are never added.
- Aggregation across different journals, platforms, project stages, course sections, or service categories requires a separately approved methodology, de-duplication key, inclusion rule, and generated timestamp. Otherwise no aggregate is allowed.
- English-only public copy does not authorize free translation. Use an official English source first; otherwise preserve the verified source-language value internally and require a literal owner-reviewed translation.
- `current`, `ongoing`, `active`, `latest`, `leading`, `expert`, `award-winning`, and similar status or evaluative language is a separate claim that must meet its own evidence and freshness rule.
- Planned, proposed, submitted, under review, accepted, online-first, published, awarded, contracted, active, complete, expired, and withdrawn are distinct statuses and MUST NOT be interchanged.

## 10. Claim lifecycle and deterministic transitions

### 10.1 Initial state

Every new record starts as:

`verification_status=unassessed`, `conflict_state=none`, `rights_status=unknown` where applicable, `consent_status=unknown` where applicable, and `public_disposition=suppress`.

### 10.2 Transition table

| Event / condition | New verification status | New public disposition | Mandatory action |
|---|---|---|---|
| Candidate source registered but threshold not met | `collecting` or `insufficient` | `hold` | Record missing threshold elements; do not draft public wording as fact. |
| All category evidence, identity matching, transformations, and freshness checks pass | `verified` | `eligible` | Set verification dates and rationale; still not public. |
| Competing applicable values cannot be deterministically reconciled | `conflict_open` | `suppress` | Open conflict record and enumerate affected public locations. |
| Privacy, rights, consent, confidentiality, or security check fails or is unknown | Keep evidence status | `suppress` | Record blocking axis; evidence verification never overrides safety. |
| Exact wording approved by authorized editorial owner and every prepublication check passes | `verified` | `publish` | Record approver, wording, release, and every public location. |
| Review due date passes or a trigger cannot be resolved in its service level | `stale` | `withdraw` for current/dynamic claims; otherwise `hold` | Remove from public outputs or replace with a non-claim fallback. |
| Stronger evidence replaces the same atomic fact | old=`superseded`; new assessed independently | old=`withdraw` | Link both IDs; retain history. |
| Publisher/authority retracts or rescinds the fact | `retracted` | `withdraw` | Remove promptly; assess whether a transparent correction is required. |
| Evidence proves candidate false, unrelated, or misattributed | `rejected` | `suppress` | Preserve rationale; do not recycle the ID. |
| Consent or rights expires, is denied, or is withdrawn | Evidence status unchanged | `withdraw` | Remove every dependent public instance immediately and record completion. |
| Conflict resolved with admissible evidence | Recalculate from initial rules | `eligible` only if every axis passes | Preserve all values and resolution history. |

Transitions cannot skip from `unassessed`, `collecting`, or `insufficient` directly to `publish`. An automated process may set `stale`, `withdraw`, `hold`, or `suppress`; only an authorized human role may set `publish`.

### 10.3 Atomicity, corrections, and history

- One claim expresses one subject-predicate-object value for one temporal scope.
- A sentence containing multiple facts must reference multiple claim IDs.
- Splitting a compound candidate creates new IDs and rejects or supersedes the compound record.
- Editing a verified object value creates a new version and re-runs all checks.
- History is append-only. Corrections never erase the prior value, evidence, decision, or publication locations.
- Reusing a withdrawn or rejected ID for a different claim is prohibited.

### 10.4 Deterministic decision procedure

For each candidate, later work MUST execute the following sequence and stop on the first failure:

1. Split the candidate into atomic fields and assign category, predicate, temporal scope, and precision.
2. Confirm subject identity without relying on name similarity alone.
3. Register original evidence, provenance, pinpoint location, snapshot/hash, privacy, and access state.
4. Assign the field-specific source role and group related items into evidence lineages.
5. Apply the Section 7 threshold; if unmet, set `insufficient/hold`.
6. Compare every known applicable source. If unresolved conflict exists, set `conflict_open/suppress`.
7. Validate transformations, dates, units, translations, and status vocabulary.
8. Apply freshness and trigger rules; if overdue, set `stale/withdraw` or `hold`.
9. Classify the claim and evidence separately under Section 11.
10. Resolve confidentiality, rights, consent, attribution, and partner restrictions. Any unknown blocks publication.
11. Draft minimal exact English wording; do not add implications absent from the verified atomic fields.
12. Run the Section 14 checklist and set `eligible` only if all checks pass.
13. Obtain accountable editorial approval of the exact wording and record all public locations before setting `publish`.

## 11. Privacy, confidentiality, consent, and rights

### 11.1 Privacy classes

The strictest applicable class controls. Evidence and extracted claim values are classified separately.

| Class | Definition and examples | Public handling |
|---|---|---|
| `Public` | Minimal fact already intentionally published by its responsible authority, such as verified bibliographic metadata or a canonical public profile identifier. | Still requires evidence, accuracy, freshness, and wording checks. |
| `Public_after_review` | Degrees, roles, service, project details, metrics, institutional contact, partner identity, testimonials, names, photos, and CV derivatives whose risk depends on context. | Publish only after category evidence plus privacy, rights, consent, and minimization reviews. |
| `Internal` | Claim registry, source IDs, hashes, notes, schedules, internal correspondence, reviewer identity, private repository paths, and working snapshots. | Never emit to public pages, metadata, logs, source maps, downloads, or client bundles. |
| `Restricted` | Government/student/employee identifiers, signatures, QR/barcodes, phone numbers, private addresses or emails, student records, certificate identifiers, contracts, confidential partners/data, unpublished proposals, hidden PDF text, document metadata, and protected originals. | Access only by authorized roles. Extract the minimum verified fact; never publish the evidence file by default. |
| `Prohibited` | Passwords, tokens, secrets, authentication material, student grades, health or similarly sensitive personal data, illegally obtained data, and material whose publication is barred by law, contract, or a valid withdrawal. | Do not ingest into public-content systems; quarantine and escalate. No exception within this project. |

Institutional email is the only permitted public contact channel. A personal email, telephone number, postal/private address, direct-message route, contact form, analytics identifier, tracking pixel, or hidden collection endpoint is outside the approved model.

### 11.2 Required redaction and extraction behavior

- IDs, signatures, QR codes, barcodes, certificate numbers, account identifiers, private contact data, student counts/details, rooms, meeting times, and source-system URLs are suppressed unless an explicit higher obligation requires them; this project defines no such obligation.
- OCR text, PDF hidden text, attachments, comments, layers, EXIF, document properties, filenames, thumbnails, and revision history must be scanned before any derivative or download is eligible.
- Redaction must remove data from the underlying file, not merely cover it visually.
- Public copy uses extracted verified facts rather than scans whenever the scan contains restricted material.
- Private local paths, repository paths, snapshot hashes, query tokens, and internal source identifiers must never appear in HTML, JSON, PDF metadata, link targets, structured data, or error messages.

### 11.3 Consent and rights matrix

| Material | Required record | Fail-closed rule |
|---|---|---|
| Identifiable student, collaborator, testimonial author, or person in a photo/video/audio item | Scoped consent covering medium, exact purpose, channels, duration, attribution, and withdrawal method | `unknown`, `pending`, `expired`, denied, or withdrawn means suppress/withdraw. Ordinary bibliographic citation of a coauthor from a publisher record is not a testimonial or likeness use. |
| Photo, illustration, video, audio, screenshot, icon, graphic, logo, or code | Creator/owner, license or written permission, scope, attribution, modification allowance, term, and source | Possession, web availability, or inclusion in a template is not a license. |
| Certificate, decision, CV, schedule, or other document download | Redistribution authority, privacy clearance, accessible derivative, metadata clearance, and named approver | Authority to rely on a fact is not authority to republish the document. Default is no download. |
| Partner or sponsor name/logo | Contract/public-announcement basis, wording scope, brand permission, and expiry/review trigger | Do not imply sponsorship, endorsement, or continuing relationship. Logos remain suppressed unless specifically cleared and G0 is reopened where required. |
| Quotation or testimonial | Exact text, speaker/source, permission or valid limited-use basis, context, attribution, and withdrawal route | Paraphrase does not cure missing consent when the endorsement or person remains identifiable. |

Consent and rights are revocable operational dependencies. Their withdrawal does not change historical evidence accuracy, but it immediately changes public disposition to `withdraw`.

## 12. Documents, links, profiles, and unavailable sources

- A public document is a separate governed asset with its own stable ID, version, hash, provenance, privacy class, rights record, accessibility review, metadata report, and replacement/withdrawal route.
- Public downloads must be derived, minimized copies. Original CVs, schedules, certificates, decisions, contracts, and proposals remain protected unless a recorded exception passes every check.
- A public link must use the canonical HTTPS destination, resolve to the intended entity, declare whether it is external, and be checked for redirects, login walls, account ambiguity, unsafe parameters, and tracking.
- The official university affiliation link remains the verified `https://www.taibahu.edu.sa/` destination in the same tab under the locked brand contract.
- A profile value observed through a crawler or unauthenticated view is a timestamped lead until the platform identity and field are reconciled.
- A blocked, JavaScript-only, rate-limited, login-only, missing, or redirected source stays registered with its access state. It cannot be treated as current and cannot be replaced with a search snippet.
- Link failure triggers `hold` for a new profile link and review/withdrawal for a published link. The system must not redirect visitors to an unverified replacement account.
- No public URL may contain private query values, access tokens, internal paths, or personal tracking parameters.

## 13. Freshness, ownership, and triggers

The table states maximum intervals. A review may occur sooner. `Before release` means within the release review, not merely during initial collection.

| Category | Maximum scheduled review | Additional trigger | Stale behavior | Accountable role |
|---|---|---|---|---|
| Display name and identity binding | Annual and before release | Owner request, institutional profile change, ambiguity report | Hold affected wording | `content_owner` |
| Degree / historical award | Event-driven after verification | Issuer correction, new official record | Hold and reconcile | `evidence_steward` |
| Current appointment or role | Every 90 days and before release | Appointment, renewal, end, title/organization change | Withdraw `current` wording | `evidence_steward` |
| Historical appointment or service | Annual | Corrected decision or newly found end date | Hold affected interval | `evidence_steward` |
| Publication record | On ingestion; DOI/publisher check every 90 days | Correction, version change, expression of concern, withdrawal, retraction | Withdraw or visibly correct as governed | `publication_curator` |
| Project/funding/partner status | Every 90 days and before release | Award amendment, status, amount, role, confidentiality, partner, or end-date change | Withdraw current/status/amount wording | `evidence_steward` |
| Teaching history and course title | At each new schedule/catalog and annually | Catalog/title/translation correction | Hold affected course | `evidence_steward` |
| Supervision/availability | Every 30 days and before release | Student status, consent, capacity, or institutional record change | Withdraw current availability/name | `content_owner` |
| Active administrative/community service | Every 90 days | Renewal, replacement, completion, issuer correction | Withdraw active wording | `evidence_steward` |
| Talk/training/credential | Event-driven when historical; every 90 days if presented as current | Issuer expiry, revocation, role correction | Withdraw current credential wording | `evidence_steward` |
| Platform metric | Snapshot no older than 30 days; refresh within 7 days before a formal release | Platform definition/account change or anomaly | Withdraw number; retain source link if separately valid | `technical_link_reviewer` |
| Profile link | Automated monthly check plus manual 90-day identity review and before release | Redirect, handle change, access failure, compromise report | Hold/withdraw link | `technical_link_reviewer` |
| Institutional email | Every 90 days and before release | Account/role change, bounce, owner request | Withdraw address | `content_owner` |
| CV derivative | Every 90 days and on any included-claim/source change | Privacy, rights, accessibility, metadata, or owner change | Withdraw download | `privacy_reviewer` |
| Media, consent, and rights | Annual and before release | New use, edit, license expiry, consent withdrawal, takedown | Immediate withdrawal | `rights_reviewer` |
| Brand affiliation presentation | Annual and on any G0 source/control change | Institutional clearance, affiliation, official URL, asset, token, or wording change | Reopen G0; hold changed use | `quality_reviewer` |

If no named assignee exists for the accountable role, a new or changed claim cannot progress beyond `hold`. Automated checks may detect expiry or link failure but cannot establish identity, consent, rights, or factual reconciliation.

## 14. Prepublication checklist

Every public location and every generated derivative MUST pass all applicable checks. `Not applicable` requires a rationale; blank is failure.

1. Claim ID exists, is atomic, and uses a valid controlled category and predicate.
2. Subject identity is established without name-only matching.
3. Every evidence item has provenance, pinpoint location, snapshot/hash, access state, and privacy classification.
4. Field-specific authority and independence are correctly assigned.
5. The Section 7 evidence threshold is met without discovery-only or duplicate lineages.
6. All known conflicting values were compared; `conflict_state` is `none` or documented `resolved`.
7. Date basis, date precision, calendar, units, status, and transformations are explicit.
8. English wording uses an official English source or an approved literal translation record.
9. Freshness is within the maximum interval and no trigger is outstanding.
10. Claim and evidence privacy classes pass minimization and redaction review.
11. No ID, signature, QR/barcode, phone, private address/email, student data, hidden text, metadata leak, source path, token, or secret is exposed.
12. Rights and consent are `granted` or `not_applicable` with a valid rationale; scope covers this exact use.
13. Partner/sponsor and third-party wording does not imply unverified endorsement or relationship.
14. Publication, metric, course, service, role, and project rules applicable to the category pass.
15. External links are canonical, safe, and verified for intended identity; no tracking parameters are introduced.
16. Institutional contact is email-only; there is no form, analytics, or hidden data collection.
17. Brand use matches the current G0 controls: Faisal-first, English-only, text-only affiliation, no logo or forbidden media, and no Tosh A.
18. Exact public wording is traceable to claim IDs and adds no unsupported superlative, implication, causation, total, or current status.
19. Every public page, component, structured-data value, feed, PDF, and download location is registered.
20. Named evidence, privacy, rights, editorial, and QA reviewers have approved their applicable axes.

Any failure produces `hold`, `suppress`, or `withdraw` according to Section 10. A launch deadline, visual completeness, or prior gate acceptance cannot waive the checklist.

## 15. Change control, correction, removal, and evidence retention

### 15.1 Change control

- Any change to evidence, exact value, wording, status, date, source, translation, privacy, rights, consent, freshness, or public location increments `claim_version` and appends an audit event.
- Material changes re-run the complete decision procedure. Cosmetic punctuation may follow an editorial fast path only when a diff proves meaning and identifiers are unchanged.
- Bulk imports and automated updates remain `collecting/hold` until category validation completes.
- Schema, vocabulary, threshold, or cadence changes require versioning of this standard and evaluation of the G1 reopen rule.

### 15.2 Correction and removal

1. Record the report, affected claim and locations, reporter contact if voluntarily provided, timestamp, and risk level.
2. Immediately withdraw material involving privacy, consent, rights, security, retraction, person misidentification, or material factual risk. Do not wait for root-cause completion.
3. Preserve the prior public wording and evidence internally subject to retention policy; do not leave it in public caches or downloads.
4. Reconcile using the normal authority matrix. Owner preference cannot close an external factual conflict by itself.
5. Publish corrected wording only as a new version after all checks pass. Add a public correction note when omission would mislead.
6. Purge or invalidate affected generated pages, PDFs, structured data, feeds, indexes, and caches. Record completion for every location.
7. Notify downstream owners when the claim participates in totals, summaries, timelines, metadata, or downloads.

### 15.3 Retention and public evidence boundary

- Preserve decision history, source metadata, snapshots, hashes, conflict records, approvals, and withdrawal events in access-controlled storage for the period set by later approved retention policy.
- Retention does not authorize indefinite storage of prohibited or unnecessary personal data. Apply minimization and lawful deletion obligations.
- Dynamic web snapshots are internal evidence unless capture and redistribution rights expressly allow publication.
- A public citation should normally point to the responsible authority's canonical public page, not an internal evidence copy.
- If evidence must be deleted for legal, privacy, or contractual reasons, preserve a non-sensitive deletion event and re-evaluate every dependent claim. An unverifiable dependent claim becomes `insufficient/hold` or `withdraw`.

## 16. Worked conflict patterns (not claim decisions)

These are process examples drawn from risk patterns in the corpus. They are not factual approvals.

| Pattern | Required treatment |
|---|---|
| A degree source shows a study interval while another source shows an award date | Create separate `study_interval` and `award_date` claims. Do not call either source wrong unless they conflict on the same predicate. |
| English and Arabic CVs give different dates for a role | Treat both as one owner-authored lineage, find the appointing authority's record, and suppress the disputed date until resolved. |
| A role decision has no printed date but the filename or filesystem has a date | Date remains `unknown`; the file date is provenance only. Current status is not inferred. |
| Two files are byte-identical or show the same decision | Assign one lineage. The duplicate adds no convergence weight. |
| A committee document explicitly excludes the subject or does not name the subject | Mark unusable for a positive service claim. Absence from one list does not prove non-service elsewhere. |
| One issuer supplies cumulative review certificates for overlapping periods with 41 and later 45 reviews | Treat as a same-lineage supersession candidate; never add to 86. Verify recipient, period, issue date, and issuer before using either. |
| Certificates from several journals state review counts | Preserve source-specific values. Do not publish a grand total without a deduplicated, documented aggregation method and consistent interval. |
| Research platforms display different publication/citation totals | Store separate metric claims with platform and observation time. Never average, merge, or imply equivalence. |
| A timetable identifies course, term, section, student count, room, and time | Only the verified course occurrence/title may progress. Suppress section, count, room, time, mode, faculty code, service URL, and the schedule document. |
| An Arabic course title lacks an official English catalog title | Hold the English title until an official source or owner-reviewed literal translation is recorded. |
| A volunteer certificate displays a valid activity plus identity number and QR code | The extracted minimal activity may be assessed; the certificate remains Restricted and cannot be a public download without irreversible redaction and rights clearance. |
| A profile is blocked, rate-limited, or JavaScript-only during review | Record access failure and continue with other field-authoritative evidence. Do not cite a search snippet or cached metric as current. |
| A preprint and version of record share a title | Link versions and use the publisher/DOI record; do not count both without the approved version-counting rule. |

## 17. Downstream handoffs

| Work package | Binding handoff from this standard |
|---|---|
| CNT-001 | Implement the schema, vocabularies, evidence-lineage model, transitions, statuses, history, and fail-closed defaults. It must not inherit claim approvals from source folders or planning prose. |
| CNT-004 | Reconcile publications by DOI/version/title-author rules, preserve typed dates, check corrections/retractions, and document the counting policy. |
| CNT-009 | Independently verify that every exact public wording and data value joins to a `publish` claim ID and that unresolved, stale, or withdrawn claims are absent. |
| DAT-001 | Encode the controlled values, claim/source/lineage relationships, nullable rules, timestamps, stable IDs, and public/private field separation. Invalid or unknown values must fail validation. |
| DAT-003 | Maintain the document/media manifest with hashes, provenance, privacy, rights, consent, metadata, accessibility, derivative, and withdrawal fields. |
| DAT-004 | Build only a minimized owner-approved CV derivative from registered originals; independently verify every included claim and remove IDs, signatures, private contact, hidden content, metadata, and source paths. |
| INT-004 | Implement institutional-email contact only. No form, phone, personal email, storage, submission endpoint, or implied response guarantee. |
| INT-005 | Preserve the no-analytics/no-tracking contract and verify that external links, assets, errors, and embeds do not introduce collection. |
| QA-002 | Test all rendered and structured public content against claim IDs, exact wording, freshness, links, conflicts, dates, totals, and suppressed fields. |
| QA-006 | Test privacy, metadata, source-map/path leakage, secrets, third-party requests, document redaction, rights/consent state, and removal behavior. |

No downstream package may convert `eligible` into public output unless the exact record has moved to `publish` under Section 10. Gate acceptance is project acceptance, not institutional, legal, publisher, partner, or third-party approval.

## 18. Gate reopen rules

| Gate | Reopen trigger from content governance | Required response |
|---|---|---|
| G0 - identity/brand | Any change to affiliation wording or hierarchy, institutional clearance status, official URL, logo/media use, brand source, token, typeface, asset rights, or the no-logo/text-only contract | Hold the changed use and rerun the affected brand review. Content owner authorization alone cannot substitute for institutional clearance. |
| G1 - strategy/structure | Any change to this authority matrix, convergence threshold, privacy class, controlled vocabulary, lifecycle, freshness cadence, English-only scope, contact/no-analytics model, sitemap claim type, or a conflict with STR-001/STR-002/STR-003 | Version the governance/strategy artifacts, trace downstream impacts, and rerun G1 review. STR-004 does not close G1. |
| G2 - content/data | After closure, any public claim, value, wording, source, status, translation, metric snapshot, publication reconciliation, rights/consent state, or derivative changes; or any retraction, conflict, stale trigger, correction, or removal | Withdraw affected output as required, rerun evidence and data validation, and rerun G2 for the affected scope. A systemic defect expands the scope. |

No gate authorizes deployment, DNS, production publication, or P9. A reopened gate stays open until its designated independent reviewer records closure.

## 19. Completion and non-approval statement

This standard is complete only as a governance contract. It intentionally contains no approved claim rows, no final biography, no endorsed metric, no accepted course translation, no public source document, and no decision that a person, degree, role, publication, project, service item, or profile value is ready for the website.

Later work must remain fail-closed wherever an original source, named owner, authority match, fresh observation, privacy decision, rights grant, consent grant, or conflict resolution is missing. CNT-001 is the first place claim candidates may be registered; registration itself is not verification or publication approval.
