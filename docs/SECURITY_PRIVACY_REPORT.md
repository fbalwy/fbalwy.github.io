# Security and privacy release report

## Decision

**PASS — no confirmed security or privacy release blocker remains in the static candidate.**

QA-006 audited the exact current candidate manifest `c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8`. The audit found no reportable vulnerability after source-to-sink validation and counterevidence review. It did not promote content or the CV, configure a host, deploy, publish, or alter DNS.

The work continued Codex Security Standard scan `fe58625a-3e93-415b-bd17-c3ac4afca9fb`. Its preflight was already ready when QA-006 began, with a documented degraded single-review path: the four-slot session could not supply the recommended independent baseline and investigator pool. Coverage therefore combines one parent-led semantic review with deterministic scanners, tests, artifact inspection, and real-Browser runtime evidence; it does not claim independent-worker corroboration.

## Scope and threat model

### Audited scope

- Application routes, layouts, components, client scripts, guards, URL handling, styles, and operational states.
- Content schemas, canonical aggregates, lifecycle/privacy projection, populated non-emitted fixtures, and the CV publication guard.
- Build, staging, generation, scanning, dependency, reproducibility, manifest, adapter, rollback, and release-boundary tooling.
- Root configuration, package metadata and lockfile, staged public resources, `dist`, ignored release artifacts, OG PNG, and candidate CV PDF.
- Contact/mailto, no-analytics policy, consent/retention boundaries, external links, referrer behavior, Browser requests, and host/deployment conditions.

The authoritative scan inventory contains 338 files. Security review used the current unversioned directory snapshot only; it did not inspect history or access external sites.

### Protected assets and objectives

Protected assets are unpublished governed records and evidence documents, the internal-only CV, private contact/data, local paths and build identity, release integrity, and visitor privacy. The security objectives are to emit only explicitly public projections; prevent injection, unintended navigation, secret/path/document leakage, and tracking; preserve deterministic/tamper-evident output; and keep hosting, logging, indexing, and publication fail-closed until separately approved.

### Attackers and trust boundaries

Plausible attackers are an unauthenticated visitor controlling path/query/fragment input, a visitor activating an external or email link, a malicious or malformed governed record reaching a build boundary, a dependency or build-environment compromise, and a future misconfigured host/CDN. Trust boundaries are: governed source → validation/projection → generated HTML; URL/query/fragment → bounded client enhancement; repository/build environment → staged allowlist → `dist`; `dist` → future host headers/logging; and deliberate visitor navigation → external institution, scholarly source, or mail provider.

The site has no authentication, API, database, server state, upload, form handler, or site-side personal-data collection. Certificate-platform database encryption, retention jobs, data-subject deletion workflows, and KSA database-residency controls are therefore inapplicable. Relevant data-protection principles—minimization, explicit public projection, purpose limitation, no secondary analytics, and accurate external-mail/host-log boundaries—were applied.

## Security surface matrix

| Surface | Evidence and validation | Result |
| --- | --- | --- |
| HTML/XSS and DOM construction | Astro escapes bound text/attributes. Client-created filter/citation UI uses `textContent`, `replaceChildren`, and fixed attribute names; no `innerHTML`, `outerHTML`, `document.write`, inline event attribute, `eval`, or Function constructor exists. Generated output scan rejects inline handlers and forms. Encoded script-like query input remained inert in Browser inspection. | Pass |
| Query, fragment, redirect, and URL handling | Publication query keys are closed, single-valued, allowlisted, and bounded to 200 Unicode code points. Invalid filters fail to approved state; fragment reconciliation accepts only exact record IDs. History targets use the current pathname, serialized allowlisted query, and current fragment. Canonical redirect drops query text. No external redirect sink exists. | Pass |
| External URLs and reverse tabnabbing | Public-model projection requires HTTPS, rejects credentials/fragments and tracking parameters, and binds exact action labels. Current output contains only approved Taibah links and the fixed institutional mailto; links do not open new tabs, and external rendered links use `rel="noopener"`. | Pass |
| Mailto/contact privacy | One exact institutional address and neutral subject; no cc, bcc, body, attachment, hidden value, alternate address, telephone, form, endpoint, or delivery claim. Mail handling and retention are truthfully assigned to the visitor’s mail application/providers. | Pass |
| Forms, frames, storage, workers, and connections | Zero forms, iframes, objects, embeds, cookies, Local/Session Storage, IndexedDB, background fetch/XHR/beacon/WebSocket/EventSource, service worker, analytics, telemetry, or remote runtime resource. CSP contract uses `form-action 'none'`, `connect-src 'none'`, `worker-src 'none'`, and `frame-src 'none'`. | Pass |
| Public projection and document leakage | The integrated model requires exact IDs/order, complete evidence/privacy/rights/editorial/QA approvals, conflict/correction clearance, safe locations, complete route models, exact profiles/contact, and the exact reviewed public CV contract. Current records are non-public, profiles unavailable, and CV release remains `internal_only`. | Pass |
| Staging and generated output | Staging deletes and recreates its directory, rejects symlinks/forbidden names, and copies only `og.png`; the generated robots control is added separately. Public scan passes two staged and 17 dist files, rejects archives/maps/provenance paths/markers/unknown origins/routes, and independently checks zero governed record leakage. | Pass |
| Secrets and environment | No environment file, key/certificate credential, API key, token, password, private key, or credential-bearing URL was found. The environment parser accepts only four closed values, rejects unexpected `SITE_`/`PUBLIC_`/`SOURCE_` inputs, credentials, paths, queries, fragments, invalid origins, and production mode. No secret becomes a public runtime variable. | Pass |
| Build/process/filesystem | Process execution uses `execFileSync` with the fixed Node/npm executable and fixed argument arrays, never a shell. File outputs are rooted at repository-controlled paths; temporary rollback simulation uses an OS temporary directory and always removes it. CLI-only path parameters have no remote entry point or privileged runtime use. | Pass |
| Dependencies/lifecycle | Zero runtime dependencies; 269 installed development packages passed license metadata checks. `npm audit --audit-level=low` found zero vulnerabilities. The exact lockfile is hashed in the release manifest, versions are pinned, and `.npmrc` uses `ignore-scripts=true`, `save-exact=true`, and audit/engine enforcement. The three lockfile lifecycle-script packages are build-tool binary/optional platform packages and are disabled by the repository install policy. | Pass |
| Headers/CSP/clickjacking/MIME | Provider-neutral policy specifies restrictive CSP, no framing, no object/base/form/connect/worker channels, nosniff, DENY, permissions restrictions, COOP/CORP, strict referrer, HSTS, noindex, and cache classes. Adapter translation is explicitly non-deployable and no provider configuration exists. | Controlled G5 condition |
| Manifest, rollback, and tamper | Manifest contains relative paths, sizes, MIME, SHA-256, cache class, expected status, and noindex only—no absolute path/time/account/provider identity. Reproducibility compares two fixed-environment builds. Rollback simulation preserves the prior immutable release and detects changed and missing files. | Pass |
| Candidate documents and metadata | The PDF/OG hashes remain stable. OG has only PNG type/dimensions and no private metadata. CV metadata contains the approved title/author/subject and deterministic producer/dates, with no local path, private contact channel, source ID, or hidden attachment; qpdf integrity passes. CV is absent from staging/dist. | Pass |

## Privacy and data-protection matrix

| Topic | Current artifact | Release conclusion |
| --- | --- | --- |
| Personal data | Public identity, institutional affiliation, and one institutional email are the only current person-related values. No student, schedule, attendance, identity-number, private address, health, or inquiry payload is emitted. | Minimized and purpose-limited |
| Collection and storage | Static pages provide no form/API/database. Browser code observes online/offline state and optionally writes a user-invoked visible citation to the clipboard; it does not collect or retain visitor data. | No site-side processing |
| Analytics/secondary use | Machine-readable decision disables every defined collection capability, has zero runtime origins, zero runtime dependencies, and a complete future-exception gate. | No analytics; no consent UI needed while processing remains absent |
| Inquiry handling | The visitor decides whether to activate and send through their email application. The site cannot know or confirm opening, sending, delivery, reading, retention, or reply. | External provider boundary is truthful |
| Host logs | No host is selected and local artifacts do not authorize operational logging. A future host requires separate field, purpose, region/processor, access, retention/deletion, disclosure, and security review. | Controlled prelaunch condition |
| Cross-border/retention/consent | No site-side visitor or inquiry dataset exists, so storage residency, retention/deletion jobs, and direct-collection consent are not currently triggered. External mail/provider processing is outside the static artifact and disclosed. | Inapplicable now; reopen if processing is introduced |
| Protected repository evidence | Administrative, teaching, service, identity, and other source documents remain authoring evidence only. Public staging is allowlisted rather than mirroring `public/` or repository folders. | Not public and not leaked |

## Runtime and output evidence

Browser inspection covered `/`, `/about`, `/research`, an encoded script-like Publications query with a malformed private fragment, `/teaching`, `/leadership-service`, `/contact`, and `/404.html`. Every route retained exact noindex and strict-origin referrer metadata, zero forms/frames/remote scripts, no visible source/path/record leak, and a clean console. Current subresources were same-origin CSS only; canonical metadata uses the controlled CI sentinel. The only external actions were approved Taibah navigation and the exact mailto, requiring visitor activation.

The local Astro preview correctly returned 200 for the homepage and a true 404 for an unknown route. It did not emit the provider-neutral security-header set; this is expected because it is a local, non-deployable preview, not evidence of future host behavior.

The generated candidate contains 17 files: eight HTML documents, five fingerprinted CSS/JS resources, robots, an empty sitemap, and the OG PNG. It contains no source map, PDF, font, archive, manifest, environment file, hidden file, symlink, or unexpected MIME type.

## Findings and validation

No candidate survived validation as a reportable vulnerability. Keyword matches were rejected unless an attacker-controlled source reached a sensitive sink with meaningful impact.

### Controlled non-finding: CSP compatibility

Generated pages currently contain small trusted inline module scripts for progressive navigation/contact behavior, while the future header contract declares `script-src 'self'` without an inline allowance. A conforming host would block these enhancements unless the final build externalizes them or supplies deterministic CSP hashes/nonces. This is not an exploitable candidate weakness: the adapter is marked `deployable:false`, no host is selected, production mode is blocked, current pages remain usable without enhancement, and no untrusted script text reaches the inline blocks. It is nevertheless a mandatory G5/QA-007 host-compatibility stop condition and must not be waived by adding `unsafe-inline` or `unsafe-eval`.

### Controlled non-finding: malformed future populated fragment

The emitted candidate has no publication catalogue root, so malformed fragment decoding cannot reach active catalogue logic. In a future complete promotion, an invalid percent-encoded fragment can make that optional enhancement fail closed; the complete server-rendered list remains intact and diagnostics are suppressed. This is self-only low-impact robustness, not a security-boundary failure. QA-007 may harden decoding before promotion, but it is not a present release blocker.

## Verification and immutable evidence

- Manifest: `c896c1108438c7a34dda06355af2a09a6f83fb560a0b63ea8e08bae6ef77e0d8` before the final reproducible verification; the final handoff records any regenerated deterministic hash.
- Lockfile: `2ffe29eb5ede049e7325ff00e6a36c5309d068de0c6a3cf5d9e90d59d7cf69c9`.
- CV PDF: `cdceb414a94fa921a12ff975c907793d8523db692597f70ea7c04b69f5074c8f`.
- OG PNG: `213c69b474cab71d4cd4d00817cb37b2279c50d492872c67ec0878b4b6b3cbe6`.

Focused public, contact, no-analytics, dependency, document, and release-control checks passed. The complete pinned Node 24.19.0/npm 11.19.0 verification result is recorded in the final handoff.

## Limitations and deployment conditions

- Independent baseline/investigator corroboration was unavailable; the Standard scan used the documented degraded parent-review path.
- Static and local-preview evidence cannot prove future CDN/host headers, TLS, cache behavior, 404 header parity, query handling, access logs, region, subprocessors, or deletion controls.
- No external destination was crawled during security review. Outbound links were validated from the governed exact URL contracts and rendered output.
- Dependency audit is time-bound to the exact lockfile and registry advisory state observed during QA-006; QA-007 must rerun it.
- Local scanning can detect known patterns and structural channels, not every future secret/telemetry signature. Closed environment inputs, zero runtime dependencies/origins, allowlisted staging, CSP channels, and generated-output tests provide independent structural controls.

## QA-007 and G5 handoff

QA-007 must preserve the exact public lifecycle guard, allowlisted staging, closed environment parser, zero runtime dependencies and analytics origins, exact mailto, no CV release, source-map prohibition, public leak scans, manifest/reproducibility controls, and current document hashes. It must rerun dependency, public-output, Browser request, encoded query/fragment, and full verification checks after integration.

G5 must select no host until primary evidence and an actual non-production probe demonstrate the complete header policy—including CSP behavior for generated scripts, 404/error responses, MIME, caches, HSTS/TLS, clickjacking controls, clean URLs, and noindex—plus a separately approved host-log/privacy record. Any header mismatch, unexpected request/storage channel, log policy gap, content/CV promotion, or manifest mismatch is a stop condition.
