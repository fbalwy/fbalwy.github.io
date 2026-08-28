# Analytics and Measurement Decision

**Work package:** INT-005 v1  
**Decision date:** 2026-08-19  
**Status:** Binding no-analytics decision for the current static artifact  
**Decision owner:** Site owner  
**Machine-readable control:** `config/analytics-policy.json`

## Decision

The site uses **no analytics or tracking**. The conforming configuration is the absence of measurement code, vendors, identifiers, storage, and collection endpoints. No analytics package, tag manager, telemetry SDK, tracking pixel, beacon, cookie, local or session storage, IndexedDB, fingerprinting, service worker, tracking-query mutation, or third-party runtime resource is authorized.

This is an affirmative privacy and maintenance decision, not an unfinished vendor selection. The site is a small, static academic website whose launch tasks can be tested directly. Numerical traffic, conversion, download, engagement, or attribution claims are neither required nor supportable from the current artifact. Adding a tracker would create a new data-processing system, dependency and security surface without an evidenced launch necessity.

No cookie or analytics-preference interface is shown because the site performs no such processing and stores no preference. The approved transparency sentence may remain visible: “This site does not use third-party analytics, tracking, or contact forms.” It does not promise anything about a visitor's email provider, network operator, browser, eventual hosting provider, or external destinations the visitor chooses to follow.

## Enforced current state

| Surface | Binding state | Evidence and enforcement |
| --- | --- | --- |
| Application/runtime | No collection, storage, worker, beacon, telemetry, tracking-query mutation, or runtime fetch channel | `scripts/check-no-analytics.mjs` audits browser-capability signatures throughout `src`; negative integration fixtures prove rejection |
| Build and release tooling | No measurement injection, reporting directive, or remote runtime resource | The same audit covers `scripts`, `astro.config.mjs`, and `config`; the release CSP requires `connect-src 'none'`, `worker-src 'none'`, and `form-action 'none'` |
| Dependencies | Zero runtime dependencies and no known analytics, telemetry, session-replay, tag-manager, or error-monitoring dependency | Package and lockfile identities are parsed deterministically; `npm audit` and the existing license audit remain separate supply-chain checks |
| Public assets | No remote runtime asset or service-worker artifact | The dedicated audit inventories public/generated files, rejects remote resource-bearing markup/CSS and service-worker filenames, and tolerates ordinary outbound anchors because they do not load until a visitor activates them |
| Generated output | No vendor signature, collection API, tracking parameter, reporting endpoint, or third-party runtime resource | The audit scans `dist`, staged public controls, and generated release records after a build; the existing public scan independently checks route/resource and leakage boundaries |
| Network posture | No application endpoint and no third-party runtime origin | `runtimeOrigins` is an exact empty list; the local release-policy translation blocks connections and workers. External DOI, profile, institution, and email destinations are deliberate visitor actions, not background measurement requests |

The machine-readable policy fails closed. Every collection capability must exist in the controlled vocabulary and equal `false`; the runtime-origin allowlist must be empty; the exception checklist and QA/gate handoffs must be exact; and neither the current policy nor its exception record may authorize implementation.

## Verification inventory

INT-005 audits these surfaces:

1. application source, client scripts, layouts, routes, components, and styles;
2. build, validation, staging, manifest, reproducibility, and release-adapter tooling;
3. root package metadata, lockfile package identities, and the absence of runtime dependencies;
4. provider-neutral release headers and the generated, explicitly non-deployable adapter translation;
5. public assets and staged public controls;
6. every text-bearing generated HTML, JavaScript, CSS, JSON, XML, SVG, manifest, and text resource;
7. service-worker filenames and remote resource-bearing attributes or CSS URLs; and
8. negative fixtures for browser beacons, telemetry dependencies, remote pixels, tracking query parameters, and incomplete or silently enabled policy changes.

The audit deliberately distinguishes a background resource from a normal outbound link. A canonical DOI, ORCID, institutional, or email link is not analytics merely because its destination is external. It becomes a separate external service only after a visitor chooses it; link destinations remain subject to content governance and QA link review.

## Measurement without analytics

No KPI, baseline, conversion rate, traffic forecast, or operational result is created by this decision. The project may use repeatable pre-release task completion, accessibility, performance, provenance, link, build, and privacy checks as acceptance evidence.

After an authorized launch, qualitative signals may be considered outside the static artifact: an owner may notice the context of incoming institutional-email inquiries, receive a broken-link or stale-content report, or record maintenance friction. Those observations do not authorize tracking, do not establish visitor totals, and must not be converted into fabricated numerical claims.

Privacy-preserving server logs are also outside the current artifact and P1–P8 scope. No hosting provider is selected, no host logging feature is configured, and this decision does not authorize one. If a future authorized host exposes operational logs, a separate owner-approved record must govern necessity, fields, query-string treatment, IP/user-agent minimization, access, region/processor, retention, deletion, security, disclosure, and use. “Server-side” is not an automatic privacy exception.

## Future exception change control

No agent, developer, host, plugin, performance tool, or release step may add analytics by convenience. A future exception remains prohibited until one versioned decision contains all of the following and is approved by the site owner before implementation:

1. a specific purpose and evidence that the decision cannot be met adequately by task testing or qualitative signals;
2. the exact events, fields, identifiers, URLs/query fields, timestamps, network metadata, and derived values proposed, with data minimization for each;
3. the applicable lawful and privacy basis, including whether any special or cross-context data is involved;
4. retention periods, access roles, deletion method, subject/request handling, backups, and audit ownership;
5. processor, subprocessor, contract, hosting region, transfer, residency, breach, and exit/deletion review;
6. an explicit consent decision rather than an assumed banner, and accessible behavior when consent is absent, refused, or withdrawn;
7. documented handling of Do Not Track and Global Privacy Control signals, without storing a preference unless separately justified;
8. accurate visitor disclosure covering purpose, fields, recipients, retention, controls, and contact route;
9. security and supply-chain review of scripts, integrity, CSP, endpoints, secrets, abuse resistance, failure behavior, dependency provenance, and updates;
10. a QA-006 privacy/security re-audit, with QA-005 performance/resource and QA-007 full-regression handoffs;
11. reopening G4 and G5 wherever the change affects their accepted boundaries; and
12. a new machine-readable policy version. Editing `disabled` to `enabled` or adding an origin/package alone is invalid and must fail verification.

The owner approval is necessary but not sufficient: all controls above must pass. Until then, `implementationAuthorized` remains `false`, all collection flags remain `false`, and `runtimeOrigins` remains empty.

## Limitations and residual boundary

- Static source and generated-output scans can prove the repository artifact and local preview inventory; they cannot prove that a future host, CDN, reverse proxy, browser extension, network operator, email provider, or external destination adds no logging or processing.
- The provider-neutral headers are locally generated conformance evidence, not deployed headers. QA-006 must compare actual response headers and requests if a release candidate is later hosted.
- Signature scans are deterministic but cannot recognize every future vendor name. Structural prohibitions—zero runtime dependencies, no background remote resources, no connection/worker channel, empty origin allowlist, and negative API tests—provide the vendor-independent boundary.
- Ordinary access logs may exist at a future host even when application analytics remains absent. That risk stays unresolved until a host is authorized and separately reviewed; it does not weaken or silently expand this artifact's decision.
- Browser resource inspection is representative of the generated local pages, not evidence about an unselected production provider.

## QA handoff

- **QA-005:** confirm the final request inventory, bundle/resource budgets, no third-party runtime, and absence of measurement-induced performance work.
- **QA-006:** independently audit dependencies, client capabilities, storage/cookies, CSP and actual response headers, public files, network requests, host-log settings if any, and the complete future-exception record.
- **QA-007:** rerun the full deterministic audit after all fixes and confirm that no merge, adapter, metadata, asset, or promotion step introduces tracking.

INT-005 does not authorize QA execution, analytics installation, a provider account, host logging, promotion, staging, deployment, DNS, production publication, or P9 work.
