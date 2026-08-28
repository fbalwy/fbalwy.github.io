---
title: Publications
route: /publications
language: en
content_owner: CNT-005
content_status: editorial_candidate
public_release: CNT-009-required
canonical_dataset: content/data/publications.json
selection_log: docs/PUBLICATION_SELECTION_LOG.md
prepared: 2026-08-19
---

# Publications

> **Internal publication boundary:** This is the complete CNT-005 editorial pack. Canonical bibliographic fields remain owned by `content/data/publications.json`; this page selects records only by immutable `stable_id`. The dataset marks all 27 canonical records `eligible`, not `publish`, so CNT-009 must approve the final copy and data disposition before release. Internal instructions, IDs, rationale, and state rules below must not appear as visitor prose.

The authored sections follow the CNT-005 package order. In the implemented page, the search controls and results summary specified in Sections 5 and 6 must appear immediately before the first record in the complete catalogue, preserving the frozen STR-003 interaction order. This placement does not change the editorial order or create a second catalogue.

## 1. Page purpose

### Visitor-facing copy

This catalogue provides a single, deduplicated record of Faisal Albalwy’s verified scholarly work and routes to canonical external evidence.

Each record is reconciled against a publisher, DOI-registration, or authoritative institutional-repository source. Duplicate profile entries and linked versions are kept within one work lineage rather than counted as separate publications.

## 2. Concise catalogue introduction

### Visitor-facing copy

Browse the complete catalogue or use search and filters to find a publication by title, author, year, venue, DOI, type, or an approved research theme. Featured and latest groupings are editorial pathways into the same catalogue; they are not quality, impact, citation, or ranking claims.

The unfiltered catalogue at `/publications` is authoritative. Every featured, latest, filtered, or related-publication view resolves to the same canonical record and stable fragment.

## 3. Featured publications {#featured-publications}

### Visitor-facing introduction

Featured publications provide a small, topic-balanced starting point for visitors exploring the research record. “Featured” means selected for relevance to visitor tasks and the research narrative; it does not mean best, most cited, highest ranked, or institutionally endorsed.

### Canonical record bindings — internal

Render the standard publication record for these four IDs in descending canonical date order. Do not duplicate or override any title, author, venue, date, status, DOI, licence, or external URL in page-local content.

1. `doi-10-3390-systems14040385`
2. `doi-10-1016-j-aej-2025-06-011`
3. `doi-10-3389-fcomp-2024-1387354`
4. `doi-10-2196-27816`

The reason for each choice, the evidence boundary, overlap with latest, limitations, reviewer role, selection date, and replacement trigger are recorded in `docs/PUBLICATION_SELECTION_LOG.md`. Home and Research may reuse only these stable IDs plus that rationale; they must not copy canonical bibliographic fields.

## 4. Latest publications

### Visitor-facing introduction

Latest publications are the first five eligible records in the canonical catalogue order reviewed on 19 August 2026. The order uses the authoritative `display_sort_date`, followed by the exact canonical title only if dates tie.

One record is available online with a future issue assignment. It remains in canonical sort position but must not be described simply as “published”: display its exact status and assigned issue date.

### Canonical record bindings — internal

1. `doi-10-1016-j-eswa-2026-132969` — status label: **Available online; issue assigned for 1 December 2026**
2. `doi-10-3390-systems14040385` — status label: **Published**
3. `doi-10-32604-cmc-2025-075098` — status label: **Published**
4. `doi-10-1016-j-aej-2025-06-011` — status label: **Published**
5. `doi-10-18280-isi-300510` — status label: **Published**

“Latest” is a dated selection predicate, not a permanent badge. Recompute it from the full eligible dataset whenever the dataset, status, authoritative display date, or correction/retraction disposition changes.

## 5. Complete canonical catalogue {#publication-catalogue}

### Visitor-facing heading and introduction

### Complete catalogue

The complete catalogue contains every eligible canonical work lineage, newest first. It includes journal articles, a book chapter, a preprint, and a doctoral thesis. A missing DOI does not remove an authoritative repository record, and a linked preprint or duplicate profile row does not create an additional publication.

### Binding manifest — internal

Render all 27 records, in this canonical order, from `content/data/publications.json`. The manifest proves count and order parity; stable IDs are not visible labels.

1. `doi-10-1016-j-eswa-2026-132969`
2. `doi-10-3390-systems14040385`
3. `doi-10-32604-cmc-2025-075098`
4. `doi-10-1016-j-aej-2025-06-011`
5. `doi-10-18280-isi-300510`
6. `doi-10-7717-peerj-cs-2914`
7. `doi-10-4236-iim-2025-173004`
8. `doi-10-4236-ait-2025-152002`
9. `doi-10-3390-systems13040231`
10. `doi-10-54364-aaiml-2025-51193`
11. `doi-10-3390-electronics14050922`
12. `doi-10-1007-978-981-97-7603-0-35`
13. `doi-10-3390-app142411966`
14. `doi-10-3390-electronics13193799`
15. `doi-10-1016-j-bspc-2024-106313`
16. `doi-10-1016-j-eswa-2023-123056`
17. `doi-10-3389-fcomp-2024-1387354`
18. `doi-10-2139-ssrn-4765808`
19. `doi-10-1016-j-heliyon-2024-e25958`
20. `doi-10-1016-j-future-2023-09-032`
21. `doi-10-1109-access-2024-3518973`
22. `doi-10-3390-computers12060126`
23. `doi-10-1371-journal-pone-0280038`
24. `doi-10-1038-s41397-022-00285-5`
25. `doi-10-1155-2022-4389729`
26. `manchester-thesis-2022-albalwy-clinical-genomics`
27. `doi-10-2196-27816`

### Catalogue invariants

- Show exactly one record per stable ID and use `#publication-<stable-id>` as its fragment.
- The target has a visible title, sufficient scroll margin, and programmatic focus behavior.
- Preserve canonical title, ordered authors, type, venue, status, dates, DOI, article/page fields, licence, and external destinations without page-local rewrites.
- Omit null fields; do not replace them with `—`, `Unknown`, an inferred value, or a field copied from a linked version.
- Retain all 27 records in the unfiltered, script-independent HTML. Enhancement may narrow the visible result set only after controls initialise successfully.
- Do not paginate, truncate records, hide titles behind disclosure, or add a detail route.
- `CLM-PUB-000002` is not in this manifest. It remains held and suppressed, not a 28th catalogue record.

## 6. Search and filters

### Visitor-facing labels

- Search field label: **Search publications**
- Search hint: **Search by title, author, venue, or DOI.**
- Year filter label: **Year**
- Default year option: **All years**
- Type filter label: **Publication type**
- Default type option: **All publication types**
- Theme filter label: **Research theme**
- Default theme option: **All research themes**
- Reset action: **Clear filters**

The theme control is conditional. Omit the label, control, URL key, and reserved space until CNT-009 and DAT-002 approve stable theme IDs and publication relationships. The current Research pack does not approve any theme as established or current.

### Query contract

Launch accepts only these optional keys on `/publications`:

| Key | Search/filter behavior | Public value contract |
|---|---|---|
| `q` | Case-insensitive match against public title, author, venue, DOI, and later approved keywords; a match in any searched field qualifies | Trim leading/trailing whitespace; URL-encode; omit an empty value |
| `year` | Exact match to one canonical `display_year` | One four-digit year present in the eligible dataset |
| `type` | Exact match to one publication type | `journal-article`, `book-chapter`, `doctoral-thesis`, or `preprint`; DAT-001/002 must map these URL values explicitly to current underscore dataset enums |
| `theme` | Exact match to one approved relationship | One stable lower-case theme ID; unavailable until theme relationships pass CNT-009/DAT-002 |

Different dimensions combine with AND. Within `q`, the searchable fields combine with OR. Omitted keys do not constrain results. Generated key order is `q`, `year`, `type`, `theme`; one value per key; no multi-select.

No `sort`, `page`, metric, author-position, open-access, publisher, or venue query launches. Default order remains the canonical dataset order. Unknown keys and invalid values are ignored in rendering and removed on the next internal state update. Unsanitized query text is never inserted as HTML.

The empty/default URL is `/publications`. Query states are `noindex, follow` and declare `/publications` canonical. Committed filter changes update the shareable URL; browser Back and Forward restore controls, results, and a predictable focus context. No query, search term, filter action, or result is logged or sent to a third party.

### Results summary and active-filter controls

- Unfiltered: **27 publications** — the number is computed from the canonical dataset, not hard-coded into metadata.
- Filtered plural: **[shown] of [total] publications**
- Filtered singular: **1 of [total] publications**
- No results: **0 of [total] publications**
- Active search token: **Search: “[sanitised query]”**
- Active filter token: **[Filter label]: [approved display value]**
- Per-token action accessible name: **Remove [filter label] filter: [display value]**

Announce the updated result summary through a polite status region after a committed change. Do not move focus on every keystroke. `Clear filters` resets every control, removes the query string, restores all 27 records, announces the result, and returns focus to the search field or results heading according to the action context.

### Progressive-enhancement and accessibility requirements

- Base HTML contains the complete catalogue in canonical order; labels and native controls precede the first record in final DOM order.
- If scripts are absent, blocked, or fail to initialise, show all 27 records and usable canonical external links. Do not leave inert filters that appear functional.
- Every control has a persistent visible label. Do not use placeholder text as its label.
- Controls follow a logical keyboard and reading order, reflow vertically, and retain visible focus at 200%/400% zoom and 320 CSS pixels.
- A result update never relies on colour, animation, an icon, or visual position alone.
- Long query text wraps or is safely clipped within the input; active tokens wrap without horizontal page scrolling.

## 7. Record anatomy and external actions

### Required visible field order

1. Exact canonical title as the record heading and fragment target.
2. Exact ordered author list.
3. Status/date line using the record’s typed status and supported date precision.
4. Publication type and exact venue or awarding repository.
5. Volume, issue, page range, or article number only where the corresponding canonical field is non-null.
6. DOI as selectable text where present.
7. Exact licence/open-access context only when the canonical record supports it.
8. External actions.

Do not shorten titles or author lists, change publisher capitalization, convert article numbers into pages, derive a date from a DOI suffix, or use an accepted/online-first/conference date as an issue date. Long titles, author lists, venues, and DOI strings wrap at safe character boundaries without ellipsis or horizontal page scrolling.

### Status labels

| Canonical status | Visitor label | Boundary |
|---|---|---|
| `published` | **Published** | Use only for records carrying this exact status |
| `online_first_with_future_issue_assignment` | **Available online; issue assigned for [supported date]** | Do not simplify to `Published` or `Forthcoming`; keep the future issue date explicit |
| `posted_preprint` | **Preprint posted** | Do not present as a journal or conference publication |
| `awarded` with `doctoral_thesis` | **Doctoral thesis awarded** | Use the institutional repository action; do not invent a DOI |

### External actions

- Primary when DOI exists: **Open DOI (external)**
- Primary for the DOI-less thesis: **View institutional record (external)**
- Supporting when distinct and verified: **View publisher page (external)**
- Conditional only when the canonical data contains a lawful destination: **View lawful full text (external)**, **View code (external)**, or **View data (external)**
- Conditional after a validated visible citation exists: **Copy citation**

External destinations open in the same tab and have a visible or accessible external cue. Do not make the whole record a link, use an icon-only action, place adjacent actions on the same URL, link an unverified mirror, or infer lawful full-text availability from an open-access flag alone.

If `Copy citation` is later enabled, it copies the approved visible citation. Clipboard failure leaves that citation selectable and announces: **The citation could not be copied. Select the citation text and copy it manually.** BibTeX/RIS generation and downloads remain deferred.

## 8. Operational and editorial states

### No search results

**No publications match these filters.**

Change the search or filters, or clear them to return to the complete catalogue.

Action: **Clear filters**

Keep every control visible, announce zero results, and place recovery focus on the search field or results heading. Do not imply that no publications exist.

### Empty canonical catalogue — release blocker

**The publication catalogue is not available.**

No approved canonical records are available for this page. Return to Research while the catalogue is reviewed.

Actions: **Try again**; **View related research**

Do not release `/publications` as an empty route, show `Coming soon`, or substitute CV/profile rows. The route remains non-indexable until substantive canonical data is restored.

### Catalogue data unavailable

**Publications could not be loaded.**

The catalogue data is temporarily unavailable. Try again or use an approved scholarly profile link.

Actions: **Try again**; conditional **View on Google Scholar (external)** after `CLM-PLINK-000001` passes CNT-009.

Preserve the page purpose and source note. Do not expose an error trace, source path, stale embedded copy, or unapproved profile destination.

### Partial record data

**Some publication details are unavailable.**

Available verified fields remain visible. Missing optional fields are omitted and can be checked at the linked canonical source.

Do not infer a date, page range, article number, DOI, licence, or access status. A missing DOI is not an error when an authoritative repository record is canonical.

### External source unavailable

**The external source is currently unavailable.**

The verified publication record remains in the catalogue. Try the canonical destination again later.

Keep the local record; suppress only the failed action if repeated validation shows it is unsafe or incorrect. Never redirect to an unverified mirror.

### Future issue assignment

**Available online; issue assigned for [supported future date].**

Keep the record in canonical sort order and show the exact status. Recheck when the issue date passes or the publisher record changes.

### Correction notice

**Correction notice**

This record has a publisher correction. Review the correction alongside the publication.

Action: **View correction notice (external)**

Retain the canonical work lineage and link the notice. Corrected metadata must update the dataset once; the page must not keep an older page-local value.

### Retraction notice

**Retracted publication**

The publisher has retracted this publication. Review the retraction notice for the authoritative context.

Action: **View retraction notice (external)**

Remove the record from featured and latest sets immediately. Its catalogue treatment and public disposition require CNT-009/governance review; never hide the notice, preserve promotional copy, or treat the notice as another publication.

### Withdrawn or ineligible record

Do not render the record or its factual content. If its fragment was previously public, use the governed tombstone behavior at the parent catalogue; otherwise let the fragment resolve to the catalogue heading. Never silently replace it with a similar work.

### No-script state

No state message is required. The visitor receives all 27 canonical records, complete external actions, and the ordinary source note. Search/filter controls are absent or clearly non-interactive rather than misleading.

## 9. Source and freshness note

### Visitor-facing copy

Publication metadata is reconciled against publisher pages, DOI-registration records, and authoritative institutional repositories. Duplicate and version relationships are resolved before a work enters the catalogue.

External destinations and correction/retraction status were last checked on 19 August 2026. Follow a canonical external source for the latest publisher or repository notice.

### Scholarly-profile context — internal

Google Scholar supported discovery and identity corroboration only; it did not control canonical metadata. A visitor link may be added as **View on Google Scholar (external)** only after CNT-009 approves `CLM-PLINK-000001` and its freshness. Omit the four unresolved Scopus, ORCID, Web of Science, and ResearchGate profile candidates. Show no profile metric, merged total, publication count badge, or comparison.

## 10. Related Research route

### Visitor-facing copy

Research provides context for approved themes, projects, and relationships across this publication record.

[View related research](/research)

Do not append a `theme` query, publication fragment, theme name, or relationship claim until the candidate mapping below passes CNT-009 and DAT-002.

### Evidence-bounded relationship candidates — internal

These are title-supported editorial candidates, not established/current themes and not public filter values. The canonical dataset contains no abstracts or keywords, while `content/pages/research.md` holds every theme candidate. CNT-009 must test each cluster against primary abstracts or publisher descriptors and approved `CLM-RTH-*` claims before DAT-002 creates a relationship.

| Candidate | Working label | Stable-ID evidence | Boundary / decision |
|---|---|---|---|
| `REL-CAND-001` | Privacy and consent in health data | `doi-10-1016-j-eswa-2026-132969`; `doi-10-3390-systems14040385`; `doi-10-1016-j-future-2023-09-032`; `doi-10-1038-s41397-022-00285-5`; `manchester-thesis-2022-albalwy-clinical-genomics`; `doi-10-2196-27816` | Candidate based on exact title terms only. Do not call established, current, privacy-preserving in every record, or one continuous project. Thesis/article version relationships remain as canonical data defines them. |
| `REL-CAND-002` | Blockchain security and interoperability | `doi-10-1016-j-aej-2025-06-011`; `doi-10-7717-peerj-cs-2914`; `doi-10-54364-aaiml-2025-51193`; `doi-10-3390-electronics13193799`; `doi-10-1371-journal-pone-0280038` | Candidate based on exact title terms. The 2024 Electronics and 2025 PeerJ works remain distinct lineages; thematic similarity is not duplication or proof of a programme. |
| `REL-CAND-003` | Machine learning for threat and intrusion detection | `doi-10-32604-cmc-2025-075098`; `doi-10-18280-isi-300510`; `doi-10-4236-ait-2025-152002`; `doi-10-3390-systems13040231`; `doi-10-3390-electronics14050922`; `doi-10-3390-app142411966`; `doi-10-3389-fcomp-2024-1387354` | Candidate based on title terms only. Do not infer a common dataset, method, outcome, contribution, role, or current research priority. |
| `REL-NONE-001` | No Research relationship assigned | `doi-10-4236-iim-2025-173004`; `doi-10-1007-978-981-97-7603-0-35`; `doi-10-1016-j-bspc-2024-106313`; `doi-10-1016-j-eswa-2023-123056`; `doi-10-2139-ssrn-4765808`; `doi-10-1016-j-heliyon-2024-e25958`; `doi-10-1109-access-2024-3518973`; `doi-10-3390-computers12060126`; `doi-10-1155-2022-4389729` | Titles alone do not justify binding these records to an opaque held Research theme. Keep them fully discoverable in the catalogue without a theme chip or related-route assertion. |

No candidate relationship changes `content/pages/research.md` or `content/data/publications.json`. A record may receive more than one approved relationship later only if DAT-002 represents each independently and the interface remains understandable without multi-select filtering.

## 11. Internal release and handoff checklist

### CNT-008

- Use `Publications | Faisal Albalwy` as the title pattern; keep the description about catalogue purpose and verification method, without a volatile count or theme list.
- Reuse exact action, state, query, result-summary, and source-note labels; do not introduce `Read more`, bare URLs, or profile metrics.
- Home may consume the four featured stable IDs and/or the dated latest IDs, but must not copy canonical bibliographic fields.

### CNT-009

- Recheck 27/27 eligible dispositions, all external destinations, correction/retraction status, and the future issue assignment within the required freshness window.
- Confirm the four featured and five latest predicates against `docs/PUBLICATION_SELECTION_LOG.md`; remove any ineligible, corrected/retracted, or unsupported item and rerun deterministically.
- Approve, revise, or reject every `REL-CAND-*`; `REL-NONE-001` remains no relationship unless stronger primary evidence is registered.
- Ensure public output contains no internal stable-ID manifest, rationale, claim IDs, instructions, or unresolved profile/theme candidate.

### DAT-001 / DAT-002

- Keep canonical metadata in one dataset; encode selection and relationship records as stable-ID references with dates, rationale, status, and triggers.
- Validate the underscore dataset type to hyphenated URL enum mapping, status-label mapping, typed dates, null omission, fragment format, query parsing, and full 27-record base HTML.
- Preserve linked/not-counted lineages and the one DOI-less thesis. Do not materialize `CLM-PUB-000002` unless CNT-004 resolves its hold upstream.

### BLD-005

- Implement exact field/action/state density for the longest real title, author list, venue, and DOI; never truncate meaning to fit a card.
- Keep the featured set visually subordinate to evidence, preserve same-tab external cues, and provide all keyboard, reflow, forced-colour, print, no-script, data-failure, and result-announcement behavior.
- No metrics, ranking badges, publisher prestige treatment, downloads, pagination, alternate sorting, tracking, or theme filter before approved relationships exist.

## 12. CNT-005 acceptance record

| Requirement | Evidence | Result |
|---|---|---|
| Complete page editorial and state coverage | Sections 1–10 include purpose, introduction, featured/latest, catalogue, controls, anatomy/actions, required states, freshness, and Research route | Pass |
| Catalogue count parity | Section 5 binds 27 unique stable IDs in canonical order | Pass |
| Latest is deterministic and future-state aware | Section 4 selects the first five by canonical sort; exact online-first/future-issue label retained | Pass |
| Featured is modest and traceable | Section 3 selects four stable IDs; full decision evidence lives in the selection log | Pass |
| Held/linked records are not double-counted | Section 5 excludes `CLM-PUB-000002`; linked-version rules retained | Pass |
| Metadata remains dataset-owned | Page binds stable IDs only and forbids page-local bibliographic rewrites | Pass |
| Search/filter/query behavior is bounded | Section 6 uses only `q`, `year`, `type`, and conditional `theme`; no sort, pagination, multi-select, or tracking | Pass |
| Accessibility and progressive enhancement | Sections 5–8 retain full base HTML, labels, result announcements, keyboard/focus/reflow, and no-script/data-failure recovery | Pass |
| Research relationships are evidence-bounded | Section 10 marks three candidates and one explicit no-relationship set; no source file changed | Pass |
| No metric, impact, or prestige claim | Sections 2–3, 7, 9, and 11 explicitly prohibit those criteria and labels | Pass |
| Downstream handoffs are complete | Section 11 covers CNT-008/CNT-009/DAT-001/002/BLD-005 | Pass |
| Scope is respected | This page and its selection log only; no dashboard, tracker, canonical JSON, conflict log, Research, schema, code, G2, deployment, DNS, or P9 change | Pass |
