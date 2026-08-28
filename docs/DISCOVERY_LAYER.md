# Discovery layer — INT-001 v1

## Decision

The current static artifact has a complete, provider-neutral discovery layer,
but is deliberately non-indexable. Every emitted HTML document has one
approved English title, description, and canonical URL. Canonicals use only the
closed release-origin contract: `https://local.invalid` locally,
`https://ci.invalid` in CI, and an explicit HTTPS preview origin. Production
generation remains rejected until an authorized canonical origin and the
applicable later release decisions exist.

The current `robots.txt` disallows all crawlers and the deterministic
`sitemap.xml` contains no URLs. This avoids representing unavailable route
content, query/fragment states, the 404 document, or the held CV as indexable.
The empty sitemap is intentional rather than a missing build artifact.

## Asset and content boundary

BRD-007 accepts a text-only affiliation treatment and explicitly blocks logo,
favicon, icon, social-image, and candidate-font publication. Therefore this
layer emits no favicon, site-icon, web manifest, Open Graph image, logo,
candidate font, CV, or private-data reference. It adds only text metadata drawn
from the approved route-metadata table. It does not claim that presently
unavailable guarded route records are public.

No analytics, tracker, remote runtime, service worker, provider action, or
deployment setting is introduced.

## Validation and limits

The discovery tests verify metadata uniqueness, canonical path normalization,
robots behavior for local/CI/preview, empty-sitemap determinism, explicit
production failure, and blocked-reference terms. The artifact scanner requires
the exact empty sitemap, a safe canonical and description on every HTML file,
and no favicon or manifest link. The existing public scan also rejects private
paths, record/provenance markers, held record values, forms, trackers, and
unexpected origins.

This package does not decide production indexing or hostname ownership. INT-002
may add only validated scholarly structured data after its own authorization;
INT-003 may add social metadata only after an accepted public asset exists.
QA must re-check final canonical headers, robots, sitemap, metadata uniqueness,
resource requests, and host behavior against the selected provider before any
release decision.
