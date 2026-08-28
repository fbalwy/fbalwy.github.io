---
title: Leadership & Service
route: /leadership-service
content_status: editorial-draft-fail-closed
public_release: blocked
language: en
evidence_registry: docs/EVIDENCE_REGISTRY.md-v2
editorial_review: CNT-009-required
---

# Leadership & Service

> **Internal authoring status — do not publish as-is.** None of the 39 claims assigned to CNT-007 has a `publish` disposition. The markers, claim and source IDs, evidence rails, candidate patterns, ledgers, and implementation notes below are internal controls. They must not appear in public HTML, metadata, structured data, downloads, client bundles, source maps, or error messages.

## Page purpose

### Visitor-facing purpose copy

This page provides a structured view of approved leadership and service records as supporting context for research and responsible application. It keeps formal appointments, committee service, peer review, community engagement, professional development, and memberships distinct, with related routes for research, publications, and professional inquiries.

This purpose copy describes the route, not Faisal Albalwy's record. It may remain only if enough factual modules are individually approved to answer the Leadership & Service visitor task. At the current registry state, the route is not release-ready.

> **Editorial evidence rail — internal only**
>
> Structural basis: frozen `/leadership-service` purpose and module order in `docs/INFORMATION_ARCHITECTURE.md`, R5.
>
> Factual dependencies: `CLM-ADM-000001`–`CLM-ADM-000015`, `CLM-COM-000001`–`CLM-COM-000003`, `CLM-REV-000001`–`CLM-REV-000008`, `CLM-DEV-000001`–`CLM-DEV-000011`, and `CLM-MEM-000001`–`CLM-MEM-000002`.
>
> Public disposition now: retain the purpose as internal candidate copy; do not release this route until approved records make it substantive.

## Current leadership

### Public module disposition

**Omit the complete module and its in-page link.** The registry contains three formal leadership-role candidates, but it does not expose an approved role name, organisation, scope, effective interval, end date, or independently fresh current-status record. A renewal decision is not evidence that a role continues on the release date.

Do not use `current`, `active`, `ongoing`, `present`, an open-ended date, or a leadership title until every atomic field has its own approved evidence and currentness has passed the 90-day and before-release checks.

### Reusable approved-record pattern

#### [VERIFY: exact formal role; accountable issuer record; evidence steward] [OMIT IF UNRESOLVED]

- **Organisation:** [VERIFY: exact accountable organisation]
- **Scope:** [VERIFY: exact scope stated by the appointment record; do not infer seniority, authority, chairing, team responsibility, representation, or outcome]
- **Period:** [VERIFY: exact start/effective date and currentness; preserve source precision] [AS OF: day month year]
- **Status:** [VERIFY: current official record or dated institutional confirmation]

Use the `#technology-leadership` fragment only when at least one record is approved. A selected role remains supporting context and must not lead the site's professional positioning.

> **Editorial evidence rail — internal only**
>
> Candidates: `CLM-ADM-000001`, `CLM-ADM-000002`, and `CLM-ADM-000003`.
>
> Sources: `SRC-ADM-005`, `SRC-ADM-006`, and `SRC-ADM-007`. `SRC-ADM-023` is a protected image of the same underlying decision lineage as `SRC-ADM-007`; it adds no independent evidence and contains restricted material.
>
> Registry state: all three are `collecting/hold`. Historical use requires `P1`; current wording additionally requires freshness. No exact visitor wording is approved.

## Selected prior leadership and committee service

### Prior leadership

No prior leadership record is release-ready. Historical wording may be drafted only after the exact role, organisation, scope, effective start/end fields, date precision, and English wording are approved. A missing endpoint must remain unknown and must not imply uninterrupted service or a transition between roles.

### University and departmental service

The registry contains six positive committee-service candidates and six rejected positive-service candidates. None is public. The positive candidates remain held because exact role, committee, organisation, date, translation, and editorial approval are unresolved. The rejected candidates must remain suppressed: each source expressly does not identify the subject and cannot support a positive service claim.

### Reusable approved committee-record pattern

#### [TRANSLATION TO VERIFY: source-language committee name; exact English candidate] [OMIT IF UNRESOLVED]

- **Role:** [VERIFY: member, chair, coordinator, or other exact role; issuer decision]
- **Unit and scope:** [VERIFY: exact accountable unit and committee scope]
- **Period:** [VERIFY: printed effective interval only; never use a filename or filesystem date]

Use the `#university-service` fragment only when at least one approved record remains. Group by supported category or chronology; do not infer a sequence from source numbering, folder order, or decision issue order.

> **Editorial evidence rail — internal only**
>
> Positive candidates: `CLM-ADM-000004`–`CLM-ADM-000009`, all `collecting/hold`.
>
> Rejected exclusions: `CLM-ADM-000010`–`CLM-ADM-000015`, all `rejected/suppress`. They are six specific non-inclusions, not evidence that no other service occurred.
>
> Duplicate-source control: `SRC-ADM-011`/`SRC-ADM-019`, `SRC-ADM-013`/`SRC-ADM-020`, `SRC-ADM-014`/`SRC-ADM-021`, and `SRC-ADM-016`/`SRC-ADM-022` are byte-identical pairs. Each pair has zero additional convergence weight.

## Peer-review and scholarly service

### Public module disposition

**Omit all review records and the in-page link.** Six issuer-specific review or appointment candidates remain `collecting/hold`. Two cumulative values remain in an active, overlapping conflict and are `conflict_open/suppress`.

Do not publish a review count, combine journal and conference service, infer reviewed-manuscript subject matter, or describe the activity as recurring or current. The two cumulative certificates are from one issuer lineage and overlap; they must never be added, averaged, compared as growth, or converted into a public total.

### Reusable approved review-record pattern

#### [VERIFY: exact reviewer/service role and issuer; issuer record] [OMIT IF UNRESOLVED]

- **Activity type:** [VERIFY: conference review, journal review, appointment, or another exact source-backed type]
- **Period:** [VERIFY: issuer-stated period and source precision]
- **Scope:** [VERIFY: public-safe scope only; exclude manuscript titles, authors, decisions, confidential content, and unsupported totals]

Use the `#peer-review` fragment only when at least one source-specific record reaches `publish`. A later approved cumulative value may supersede an earlier same-lineage value only after issuer, recipient, period, and issue-date reconciliation; it is never additive.

> **Editorial evidence rail — internal only**
>
> Source-specific candidates: `CLM-REV-000001`–`CLM-REV-000006`, all `collecting/hold`.
>
> Non-additive conflict: `CLM-REV-000007` and `CLM-REV-000008`, both `conflict_open/suppress` and mutually linked.
>
> Source files remain Restricted. No certificate image, count, manuscript information, signature, identifier, or source metadata is a public destination.

## Community engagement

### Public module disposition

**Omit all activity records and the in-page link.** The three community-activity candidates remain `collecting/hold`. Their safe registry values do not establish an approved activity name, contribution, period, organiser wording, public outcome, reach, audience, partnership, representation, or current status.

One activity has two certificate issues in the same lineage. The reissue is not independent corroboration and must not become a second activity.

### Reusable approved activity-record pattern

#### [TRANSLATION TO VERIFY: source-language activity title; exact English candidate] [OMIT IF UNRESOLVED]

- **Contribution:** [VERIFY: exact participation or contribution type; issuer record]
- **Organiser:** [VERIFY: accountable organiser; name only when necessary and publicly safe]
- **Period:** [VERIFY: source-stated activity period and precision]

Use the `#community-engagement` fragment only with approved records. Do not turn attendance, certificate receipt, or membership into leadership, volunteering impact, an institutional partnership, or endorsement.

> **Editorial evidence rail — internal only**
>
> Candidates: `CLM-COM-000001`, `CLM-COM-000002`, and `CLM-COM-000003`, all `collecting/hold`.
>
> `CLM-COM-000001` cites `SRC-COM-001` and reissue `SRC-COM-002` in one lineage. `CLM-COM-000002` and `CLM-COM-000003` cite `SRC-COM-009` and `SRC-COM-010` respectively.
>
> Certificates remain Restricted. QR codes, identifiers, private or location details that create risk, signatures, and protected originals are excluded absolutely.

## Talks and workshops

### Public module disposition

**Omit the complete module.** CNT-007 has no atomic claim that establishes Faisal as a speaker, trainer, workshop leader, organiser, or panellist. The eleven `CLM-DEV-*` candidates are opaque training or credential records and cannot be promoted into talks or workshops.

Attendance, completion, or certificate receipt is professional development, not evidence of presenting, leading, organising, or representing an institution.

### Reusable approved talk/workshop pattern

#### [VERIFY: exact event title; organiser record] [OMIT IF UNRESOLVED]

- **Role:** [VERIFY: speaker, trainer, panellist, facilitator, organiser, or attendee; do not interchange]
- **Organiser:** [VERIFY: exact accountable organiser]
- **Date:** [VERIFY: event date and source precision]
- **Topic or contribution:** [VERIFY: exact public title or bounded contribution]

Do not infer audience size, reach, recurrence, invitation status, recognition, availability, partnership, or endorsement. Use `#talks-and-development` only when the retained talks, workshops, or development content is substantive.

## Professional development

### Public module disposition

**Omit all eleven records.** Every training or credential candidate is `insufficient/hold` and depends only on an owner-CV assertion. The registry exposes no approved issuer, title, activity type, completion date, expiry, credential status, or English wording.

Do not publish a certificate archive, badge wall, logo collection, attendance total, or generic claim of certification. An approved historical attendance/completion record must remain labelled as development and must not imply leadership, expertise, current credential status, or institutional endorsement.

### Reusable approved development-record pattern

#### [TRANSLATION TO VERIFY: source credential or event title; exact English candidate] [OMIT IF UNRESOLVED]

- **Activity type:** [VERIFY: attendance, completion, qualification, or credential; issuer record]
- **Issuer:** [VERIFY: exact issuer]
- **Date or status:** [VERIFY: source date; expiry or current status when applicable] [AS OF: day month year]

> **Editorial evidence rail — internal only**
>
> Candidates: `CLM-DEV-000001`–`CLM-DEV-000011`.
>
> Source: `SRC-CV-EN-001`, page 5, `LIN-CV-OWNER`, `SC-CV`.
>
> Registry state: all eleven are `insufficient/hold`; `P1` issuer evidence is absent, and current credentials also require status/expiry freshness.

## Memberships

### Public module disposition

**Omit both records.** The registry exposes two opaque owner-CV membership candidates, both `insufficient/hold`. It does not establish an approved organisation name, membership class, start/end interval, status, currentness, member authority, or English wording.

Membership is not an appointment, leadership role, committee role, professional credential, recognition, partnership, or endorsement. Display it only as membership after the member authority and a before-release freshness check approve the exact status.

### Reusable approved membership-record pattern

#### [VERIFY: exact membership class and organisation; member authority] [OMIT IF UNRESOLVED]

- **Status:** [VERIFY: current or historical status and source precision] [AS OF: day month year]
- **Period:** [VERIFY: exact supported interval; omit if unresolved]

> **Editorial evidence rail — internal only**
>
> Candidates: `CLM-MEM-000001` and `CLM-MEM-000002`.
>
> Source: `SRC-CV-EN-001`, page 5, `LIN-CV-OWNER`, `SC-CV`.
>
> Registry state: both are `insufficient/hold`; `P1+F` member-authority evidence is absent.

## Related routes and contact

Leadership and service can be read alongside the research and publication record.

- [Explore research](/research)
- [View publications](/publications)

For a relevant partnership, speaking, reviewing, or professional inquiry, use the Contact route and include the topic, audience or context, proposed date when relevant, and intended contribution.

[Contact](/contact)

These route-level links and inquiry instructions are structural copy. They do not imply availability, acceptance of invitations, a partnership, institutional representation, funding, response time, recurring service, or endorsement. Do not expose an email address here until the contact claim is independently approved.

## In-page navigation and release behavior

The route requires in-page navigation when it is released. Render only links whose matching public modules contain approved records, and remove a link and its target together when the last record is suppressed.

| Public label | Frozen fragment | Release condition |
|---|---|---|
| Technology leadership | `#technology-leadership` | At least one approved current or historical leadership record |
| University service | `#university-service` | At least one approved committee-service record |
| Peer review | `#peer-review` | At least one approved source-specific review record; no unresolved total |
| Community engagement | `#community-engagement` | At least one approved community-activity record |
| Talks and development | `#talks-and-development` | At least one approved talk, workshop, or development record; preserve activity-type distinctions |

Memberships may remain a subsection within `#talks-and-development` only when approved and substantive. Do not create an unapproved fragment or a standalone membership route.

## Empty, partial, unavailable, and conflict behavior

- **No approved factual records:** do not release a thin route containing only the purpose and links. Hold the route and request an explicit STR-003 decision if T7 cannot be answered.
- **Partially approved category:** render only the individually approved records. Do not claim completeness, calculate a count, or preserve a heading for suppressed entries.
- **No current-role approval:** omit the current-leadership module. Historical records must not inherit `current` wording or an open-ended interval.
- **Unresolved date or translation:** omit that field; if the remaining record becomes ambiguous, omit the complete record.
- **Review conflict:** suppress both cumulative values and every derived total. Source-specific approved review records may stand independently without a number.
- **Unavailable evidence or external source:** retain no raw decision, certificate, cached copy, search snippet, private path, or unverified replacement.
- **Unavailable Contact route or institutional email:** retain no private alternative and use the governed Contact unavailable state.
- **Long title:** wrap the complete approved role, committee, organisation, event, credential, or membership name. Never ellipsize, abbreviate without source authority, or rely on hover text.
- **Narrow screen and zoom:** use one reading column and stacked label/value records at 320 CSS pixels and 400% zoom; introduce no horizontal card wall or scrolling data table in the public route.
- **Print:** preserve heading order, record labels, periods, source/status notes approved for visitors, and full link text; hide interactive-only navigation without removing meaning.
- **Forced colors, no image, and font failure:** all distinctions remain explicit in headings and labels. No icon, badge, logo, certificate thumbnail, colour, animation, or image carries meaning.

---

## Internal editorial ledger

This ledger provides one disposition for every CNT-007 claim. It is not visitor copy and must remain server-side or in protected authoring material.

### Administrative leadership and service — 15/15

| Claim | Registered safe descriptor | Exact citation | Registry state | Public treatment |
|---|---|---|---|---|
| `CLM-ADM-000001` | Administrative role candidate 1 | `SRC-ADM-005` · operative clause · `LIN-ADM-LEAD-001` · `SC-ADM` | `collecting/hold` | Hold; exact title, organisation, scope, interval, and currentness unresolved. |
| `CLM-ADM-000002` | Administrative role candidate 2 | `SRC-ADM-006` · operative clause · `LIN-ADM-LEAD-002` · `SC-ADM` | `collecting/hold` | Hold; historical role fields unresolved. |
| `CLM-ADM-000003` | Administrative role candidate 3 | `SRC-ADM-007` · operative clause · `LIN-ADM-LEAD-003` · `SC-ADM` | `collecting/hold` | Hold; one-lineage protected image adds no independence. |
| `CLM-ADM-000004` | Committee activity candidate 1 | `SRC-ADM-008` · operative clause · `LIN-ADM-COM-004` · `SC-ADM` | `collecting/hold` | Hold; exact role, title, scope, date, and translation unresolved. |
| `CLM-ADM-000005` | Committee activity candidate 2 | `SRC-ADM-009` · operative clause · `LIN-ADM-COM-005` · `SC-ADM` | `collecting/hold` | Hold; no currentness or continuity inference. |
| `CLM-ADM-000006` | Committee activity candidate 3 | `SRC-ADM-010` · operative clause · `LIN-ADM-COM-006` · `SC-ADM` | `collecting/hold` | Hold; exact role and period unresolved. |
| `CLM-ADM-000007` | Committee activity candidate 4 | `SRC-ADM-012` · operative clause · `LIN-ADM-COM-007` · `SC-ADM` | `collecting/hold` | Hold; exact role and period unresolved. |
| `CLM-ADM-000008` | Committee activity candidate 5 | `SRC-ADM-015` · operative clause · `LIN-ADM-COM-008` · `SC-ADM` | `collecting/hold` | Hold; exact role and period unresolved. |
| `CLM-ADM-000009` | Committee activity candidate 6 | `SRC-ADM-016` · operative clause · `LIN-ADM-COM-009` · `SC-ADM` | `collecting/hold` | Hold; duplicate source copy adds zero weight. |
| `CLM-ADM-000010` | Subject absent from named decision 1 | `SRC-ADM-001` · subject list/operative clause · `LIN-ADM-EX-001` · `SC-ADM` | `rejected/suppress` | Suppress permanently as positive-service evidence. |
| `CLM-ADM-000011` | Subject absent from named decision 2 | `SRC-ADM-002` · subject list/operative clause · `LIN-ADM-EX-002` · `SC-ADM` | `rejected/suppress` | Suppress permanently as positive-service evidence. |
| `CLM-ADM-000012` | Subject absent from named decision 3 | `SRC-ADM-003` · subject list/operative clause · `LIN-ADM-EX-003` · `SC-ADM` | `rejected/suppress` | Suppress permanently as positive-service evidence. |
| `CLM-ADM-000013` | Subject absent from named decision 4 | `SRC-ADM-004` · subject list/operative clause · `LIN-ADM-EX-004` · `SC-ADM` | `rejected/suppress` | Suppress permanently as positive-service evidence. |
| `CLM-ADM-000014` | Subject absent from named decision 5 | `SRC-ADM-017` · subject list/operative clause · `LIN-ADM-EX-005` · `SC-ADM` | `rejected/suppress` | Suppress permanently as positive-service evidence. |
| `CLM-ADM-000015` | Subject absent from named decision 6 | `SRC-ADM-018` · subject list/operative clause · `LIN-ADM-EX-006` · `SC-ADM` | `rejected/suppress` | Suppress permanently as positive-service evidence. |

The six rejected records are not a universal statement that service did not occur. They establish only that the named decisions cannot support the proposed positive claims.

### Community engagement — 3/3

| Claim | Registered safe descriptor | Exact citation | Registry state | Public treatment |
|---|---|---|---|---|
| `CLM-COM-000001` | Community activity candidate 1 | `SRC-COM-001` · activity block · `LIN-COM-VOL-001` · `SC-COM`; `SRC-COM-002` · reissue block · `LIN-COM-VOL-001` · `SC-COM` | `collecting/hold` | Hold; one activity lineage, not two records. |
| `CLM-COM-000002` | Community activity candidate 2 | `SRC-COM-009` · activity block · `LIN-COM-VOL-002` · `SC-COM` | `collecting/hold` | Hold; exact activity, contribution, period, and public-safe organiser wording unresolved. |
| `CLM-COM-000003` | Community activity candidate 3 | `SRC-COM-010` · activity block · `LIN-COM-VOL-003` · `SC-COM` | `collecting/hold` | Hold; exact activity, contribution, period, and public-safe organiser wording unresolved. |

### Peer review and scholarly service — 8/8

| Claim | Registered safe descriptor | Exact citation | Registry state | Public treatment |
|---|---|---|---|---|
| `CLM-REV-000001` | Review/service candidate 1 | `SRC-COM-003` · appointment block · `LIN-COM-REV-CONF-001` · `SC-COM` | `collecting/hold` | Hold; source-specific role only, no aggregate. |
| `CLM-REV-000002` | Review/service candidate 2 | `SRC-COM-004` · certificate activity block · `LIN-COM-REV-001` · `SC-COM` | `collecting/hold` | Hold; issuer-specific activity only. |
| `CLM-REV-000003` | Review/service candidate 3 | `SRC-COM-005` · certificate activity block · `LIN-COM-REV-002` · `SC-COM` | `collecting/hold` | Hold; issuer-specific activity only. |
| `CLM-REV-000004` | Review/service candidate 4 | `SRC-COM-006` · certificate activity block · `LIN-COM-REV-003` · `SC-COM` | `collecting/hold` | Hold; issuer-specific activity only. |
| `CLM-REV-000005` | Review/service candidate 5 | `SRC-COM-007` · certificate activity block · `LIN-COM-REV-004` · `SC-COM` | `collecting/hold` | Hold; supersession review required; no aggregate. |
| `CLM-REV-000006` | Review/service candidate 6 | `SRC-COM-008` · certificate activity block · `LIN-COM-REV-005` · `SC-COM` | `collecting/hold` | Hold; supersession review required; no aggregate. |
| `CLM-REV-000007` | Earlier cumulative value | `SRC-COM-007` · cumulative field · `LIN-COM-REV-004` · `SC-COM` | `conflict_open/suppress` | Suppress; overlaps `CLM-REV-000008`; never add. |
| `CLM-REV-000008` | Later cumulative value | `SRC-COM-008` · cumulative field · `LIN-COM-REV-004` · `SC-COM` | `conflict_open/suppress` | Suppress; overlaps `CLM-REV-000007`; never add or infer growth. |

### Professional development — 11/11

| Claim | Registered safe descriptor | Exact citation | Registry state | Public treatment |
|---|---|---|---|---|
| `CLM-DEV-000001` | Training/credential candidate 01 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000002` | Training/credential candidate 02 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000003` | Training/credential candidate 03 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000004` | Training/credential candidate 04 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000005` | Training/credential candidate 05 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000006` | Training/credential candidate 06 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000007` | Training/credential candidate 07 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000008` | Training/credential candidate 08 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000009` | Training/credential candidate 09 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000010` | Training/credential candidate 10 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |
| `CLM-DEV-000011` | Training/credential candidate 11 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; issuer primary, exact type, date, and status absent. |

No `CLM-DEV-*` row may be used in the talks/workshops module without a new or versioned atomic claim that establishes the exact event role.

### Memberships — 2/2

| Claim | Registered safe descriptor | Exact citation | Registry state | Public treatment |
|---|---|---|---|---|
| `CLM-MEM-000001` | Membership candidate 1 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; member authority, organisation, class, interval, and currentness absent. |
| `CLM-MEM-000002` | Membership candidate 2 | `SRC-CV-EN-001` · p. 5 · `LIN-CV-OWNER` · `SC-CV` | `insufficient/hold` | Hold; member authority, organisation, class, interval, and currentness absent. |

## Claim-to-copy map and downstream handoffs

| Content block | Claim dependencies | Current release treatment | Deterministic handoff |
|---|---|---|---|
| Page purpose | Frozen R5 route purpose | Retain as structural candidate; route still blocked without substantive records | `CNT-008`: align route title, navigation, footer, CTA, and metadata; `CNT-009`: confirm it introduces no factual implication |
| Current leadership | `CLM-ADM-000001`–`CLM-ADM-000003` | Omit; no independent currentness | `DAT-001/002`: split title, organisation, scope, start/end/effective date, and currentness; `CNT-009`: approve exact wording; `BLD-007`: conditional render |
| Prior leadership and committee service | `CLM-ADM-000001`–`CLM-ADM-000009` | Omit all held records | `DAT-001/002`: canonical role/service records and source joins; `CNT-009`: selection, translation, and chronology review; `BLD-007`: grouped list |
| Six rejected exclusions | `CLM-ADM-000010`–`CLM-ADM-000015` | Suppress; never positive claims or visitor copy | `DAT-001/002`: retain rejection states; `QA-002/006`: confirm zero output or derivation |
| Peer review | `CLM-REV-000001`–`CLM-REV-000006` | Omit source-specific held records | `DAT-001/002`: issuer/activity/period records; `CNT-009`: exact modest wording; `BLD-007`: no totals |
| Review totals | `CLM-REV-000007`, `CLM-REV-000008` | Suppress both; no derived number | `DAT-001/002`: mutual conflict and supersession candidate; `QA-002`: non-addition assertion; `QA-006`: certificate/source exclusion |
| Community engagement | `CLM-COM-000001`–`CLM-COM-000003` | Omit all held records | `DAT-001/002`: activity/contribution/period/organiser fields; `CNT-009`: privacy and wording; `BLD-007`: conditional module |
| Talks and workshops | No suitable atomic claim | Omit complete module | `CNT-009`: reject any `CLM-DEV-*` role inflation; registry amendment required before authoring |
| Professional development | `CLM-DEV-000001`–`CLM-DEV-000011` | Omit all insufficient records | `DAT-001/002`: exact activity type, issuer, date, status, expiry, and translation; `CNT-009`: selection and claim-strength review |
| Memberships | `CLM-MEM-000001`–`CLM-MEM-000002` | Omit both insufficient records | `DAT-001/002`: organisation/class/interval/currentness; `CNT-009`: freshness and exact wording |
| Research/publication links | Frozen internal routes | Keep route-level links; add no relationship claim | `CNT-008`: label consistency; `BLD-007`: canonical links; `QA-004`: accessible names |
| Contact handoff | Frozen `/contact` route; direct email not copied here | Keep route CTA only | `CNT-008`: inquiry copy and unavailable state; `BLD-007`: route link; `QA-002/006`: no private substitute or promise |

### Verification responsibilities

- **CNT-008:** preserve the exact route label `Leadership & Service`, specific internal CTA labels, Contact-only inquiry handoff, metadata restraint, and consistent empty/unavailable copy.
- **CNT-009:** require zero unresolved markers in public output; approve exact English names, dates, claim strength, selection rationale, and route substance; suppress every non-`publish` record.
- **DAT-001/002:** encode atomic categories and fields, immutable record IDs, exact claim/source joins, lineage and duplicate controls, supported chronology, translation status, freshness, and public disposition. Never place internal source metadata in public records.
- **BLD-007:** implement the frozen order, conditional modules and fragments, semantic grouped lists, adjacent public evidence/status notes, long-title wrapping, one-column narrow-screen behavior, and print meaning. Do not hard-code factual values from this file.
- **QA-002:** join every rendered factual sentence and record to its approved claim and source; verify no invented date, title, role, status, contribution, outcome, total, currentness, or translation.
- **QA-004:** test one H1, ordered headings, link purpose, fragment focus, keyboard order, full wrapping at 320 CSS pixels and 400% zoom, forced colors, font/no-image failure, and print.
- **QA-006:** scan public output, client bundles, metadata, logs, source maps, and assets for IDs, signatures, QR/barcode payloads, certificate/decision numbers, private contact or location data, third-party names, confidential committee/manuscript detail, protected paths, hashes, and source files.

## Coverage, privacy, and release summary

- Claim coverage is complete: 15/15 administrative, 3/3 community, 8/8 reviewing, 11/11 development, and 2/2 membership records are individually dispositioned.
- Disposition totals: 18 `collecting/hold`, 13 `insufficient/hold`, two `conflict_open/suppress`, and six `rejected/suppress` = 39 records. Public factual records: zero.
- The six administrative omissions remain rejected positive-service candidates and are not generalized into a broader negative claim.
- The two overlapping cumulative review values remain source-specific and non-additive; neither value nor a combined total is drafted.
- Current-role, talk/workshop, professional-development, and membership wording is omitted because the required currentness, event role, issuer, status, or member-authority evidence is absent.
- Protected decisions, certificates, scans, signatures, identifiers, QR/barcode payloads, private paths and contact details, third-party/participant lists, confidential details, hidden metadata, and source documents are never public destinations.
- The content order is frozen, but every factual module is conditional. If no approved records emerge, the route remains a release blocker rather than an empty certificate archive.
