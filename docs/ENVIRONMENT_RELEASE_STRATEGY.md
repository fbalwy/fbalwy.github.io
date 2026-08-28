# Environment and release strategy — TEC-003 v1

## Status and authority

This is a provider-neutral, offline release-control design. It governs the reproducible application skeleton only. It neither authorizes nor performs a hosting account action, preview, deployment, domain or DNS change, publication, or P9 action. Its production path is deliberately blocked until INT-001 and the applicable release gates approve an explicit governed production origin.

The machine-readable policy is `config/release-policy.json`. The closed parser in `src/lib/release/environment.mjs` is the only application-facing source of release environment values. Generated adapter and manifest files live under ignored `.build/` paths and are local validation artefacts, not provider configuration.

## Closed environment contract

Only these inputs are accepted:

| Variable | Required | Rule |
| --- | --- | --- |
| `SITE_BUILD_MODE` | No | `local`, `ci`, `preview`, or `production`; defaults to `local`. |
| `SITE_ORIGIN` | Mode dependent | Origin only: HTTPS where required, no credentials, path, query, or fragment. |
| `SOURCE_DATE_EPOCH` | No | Non-negative integer string; defaults to `0`. |
| `GIT_COMMIT_SHA` | No | 7–64 hexadecimal revision; defaults to `uncommitted`. |

Any other `SITE_`, `PUBLIC_`, or `SOURCE_` key fails the build. No value is made public as an application runtime environment value. In particular, paths, branch names, usernames, CI URLs, build-host details, credentials, and secrets are neither accepted as release inputs nor serialized into the output.

| Mode | Required origin | Indexing | Promotion state |
| --- | --- | --- | --- |
| local | exactly `https://local.invalid` | `noindex` | never promotable |
| ci | exactly `https://ci.invalid` | `noindex` | never promotable |
| preview | explicit HTTPS, not `.invalid` | `noindex` | never promotable |
| production | explicit HTTPS, not `.invalid` | `noindex` | parser rejects this mode pending INT-001 and gates |

The static `robots.txt` is intentionally conservative in every current mode: `User-agent: *` with `Disallow: /`. A future gate-approved indexing decision must be a separately governed revision, not an environment override.

## Response policy

The deterministic adapter translation carries these response requirements:

- CSP: `default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self'; style-src-attr 'none'; img-src 'self'; font-src 'self'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'self'; upgrade-insecure-requests`. It has no `unsafe-inline`, `unsafe-eval`, wildcard, `data:`, `blob:`, remote, analytics, form, API, or reporting expansion.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, restrictive `Permissions-Policy`, `Cross-Origin-Opener-Policy: same-origin`, and `Cross-Origin-Resource-Policy: same-origin`.
- `Strict-Transport-Security: max-age=31536000`; it deliberately omits `includeSubDomains` and `preload`.
- HTML, 404, and `robots.txt` use `Cache-Control: max-age=0, must-revalidate`. Fingerprinted assets use one-year immutable caching. A stable downloadable filename, when it exists, must use short revalidation caching.
- Unknown paths return the true `404.html` response and never fall back to the homepage. Canonical trailing-slash normalization is a 308 redirect to the non-slash path, dropping rather than copying its query string. This prevents query leakage and redirect loops.

Static validation proves the policy representation and artifact classification; there is no live HTTP probe because no host action is in scope.

## Reproducible artifact manifest

After a successful static build, `scripts/generate-release-manifest.mjs` writes `.build/release-manifests/release-manifest.json`. Each entry contains only a relative name, byte count, MIME type, SHA-256, cache class, expected status, and indexing state. Top-level data identifies build mode/origin/toolchain and the lockfile digest. The format intentionally has no absolute path, wall-clock timestamp, account, provider, branch, or build-host field.

The existing reproducibility check uses the CI sentinel and compares two clean output inventories. The release manifest generator is deterministic for the same artifact tree and policy.

## Promotion, rollback, withdrawal, and tamper handling

`scripts/lib/release-simulation.mjs` performs only a temporary-directory simulation. It creates two immutable release directories, promotes the second by changing a local pointer, rolls back by restoring the first pointer without rebuilding it, then detects both a changed file and a missing file by comparison to its SHA-256 inventory. It also records a stable-download withdrawal purge list and HTML invalidation requirement. The temporary directory is removed at the end of the simulation.

For any future approved host operation, the operational sequence must be:

1. Validate the exact locked build and its manifest in CI.
2. Deploy an immutable candidate only after the named implementation and gate approvals exist.
3. Keep it non-indexable; compare host responses to this policy, including direct unknown-route 404 and slash/query behavior.
4. Promote by switching the host's immutable deployment pointer, retaining the immediately prior known-good immutable release for rollback.
5. On integrity, content, or header failure, stop promotion, roll back without rebuilding, invalidate affected HTML, and withdraw named stable artefacts.

An unavailable rollback target, manifest mismatch, missing artifact, policy header difference, origin mismatch, or any indexing signal is a stop condition. No production origin, indexing change, or public release may be inferred from this document.

## Hosting-capability evidence (research only)

No host is selected by TEC-003. The following primary-source review was made on 2026-08-19 solely to decide whether a conditional recommendation is defensible.

| Candidate | Evidence found | Blocking gap or conflict | TEC-003 result |
| --- | --- | --- | --- |
| Sites | No accessible primary documentation proved every required response, immutable release, rollback, cache, and true-404 capability. | Evidence incomplete. | Unproven; not conforming. |
| Cloudflare Pages | Documents static `_headers`, preview `X-Robots-Tag: noindex`, custom `404.html`, and production rollback. | Its serving documentation states `/about/index.html` redirects to `/about/`, contrary to the approved no-trailing-slash rule. | Not conforming. |
| Netlify | Documents static routing/headers, non-indexable deploy previews, immutable deploy URLs, atomic cache invalidation, and 404 handling. | Its routing documentation says trailing slashes cannot be added or removed with redirects and describes Pretty URLs forwarding `/about` to `/about/`. | Not conforming. |
| Vercel | Documents static output configuration, headers, `trailingSlash: false`, deployment promotion, and rollback without rebuilding. | The reviewed primary documentation does not prove all required static unknown-route 404 and error-response header parity. | Unproven; not selected. |

The local `vercel-static-v1` file is therefore an inspectable translation for policy tests, marked `deployable: false`; it is not a recommendation, configuration, or account action. Before any provider can be chosen, an approved host-capability probe must produce primary evidence for every row of the response policy, including actual 404/header behavior. That probe is out of scope here.

Primary sources consulted:

- [Cloudflare Pages headers](https://developers.cloudflare.com/pages/configuration/headers/), [preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/), [rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/), and [serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Netlify routing overview](https://docs.netlify.com/manage/routing/overview/), [redirect options](https://docs.netlify.com/manage/routing/redirects/redirect-options/), [deploy overview](https://docs.netlify.com/deploy/deploy-overview/), and [caching overview](https://docs.netlify.com/build/caching/caching-overview/)
- [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json), [promotion](https://vercel.com/docs/deployments/promoting-a-deployment), and [production rollback](https://vercel.com/docs/deployments/rollback-production-deployment)

## Scope safety and handoff

`npm run release:boundary` rejects provider configuration, provider deployment tooling, provider SDK/package references, and deploy workflow files. The repository scope-safety verification fingerprints governed inputs and is run as part of `npm run verify`. The formatter ignore policy protects governed content and documentation; validation targets only owned implementation paths.

TEC-003 hands the policy, simulations, deterministic manifest, and explicit capability block to BLD, INT, QA, and the release gate owners. It does not implement final pages, alter governed content or brand sources, select a host, or proceed to P9.

