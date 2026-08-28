# Structured data — INT-002 v1

## Current decision

JSON-LD is generated only from the complete integrated public release decision.
The current aggregate is `eligible` and internal-only, so every current route
emits no JSON-LD. Contact, 404, unavailable states, the held CV, and query or
fragment variants never emit an entity.

The only supported vocabulary is `Person`, `ProfilePage`, `BreadcrumbList`,
`CollectionPage`, `ItemList`, `ListItem`, `DefinedTerm`, `ScholarlyArticle`,
`Thesis`, `Course`, `Thing`, and DOI `PropertyValue`. The Person is
Faisal-first. Taibah University is not declared a publisher, site owner, or
endorser. The system omits email, CV, metrics, roles, dates, claims, source
lineage, internal identifiers, and any field not carried by a validated public
view model.

## Future public projection

After the one integrated promotion decision passes, Home may define the Person
and ProfilePage. Research, Publications, Teaching, Leadership & Service, and
About may emit bounded collection/profile graphs and two-item breadcrumb lists.
Publication entities use stable public fragments, the approved title/authors,
and a DOI identifier where present. The generator deliberately omits all
publication dates: this prevents a future-issue assignment from being stated as
a publication date. It neither creates publication detail routes nor duplicates
held lineage.

## Validation and handoff

The generator validates completeness, exact public collection sizes, text/URL
safety, DOI shape, uniqueness, and route scope before it returns a document. An
independent local allowlist validator parses the emitted JSON and rejects any
unsupported type or property; an offline full schema.org validator is not
bundled, so external rich-result tooling remains a later QA check rather than a
build dependency. The artifact scanner rejects any JSON-LD in the current
noindex output.

INT-003 must not add social claims or an asset through this layer. QA-002 must
reconcile public entities to approved records; QA-005 checks rendered
canonical/structured data; QA-006 checks privacy, provenance, and withdrawal
removal. A correction or withdrawal requires removal from JSON-LD, sitemap,
build artifacts, and caches under content governance.
