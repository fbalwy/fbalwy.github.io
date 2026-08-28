import { lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";

export const REQUIRED_EXCEPTION_CONTROLS = Object.freeze([
  "explicit-owner-approval",
  "purpose-and-necessity",
  "data-field-inventory-and-minimization",
  "lawful-and-privacy-basis",
  "retention-access-and-deletion",
  "processor-and-region-review",
  "consent-decision",
  "dnt-and-gpc-handling",
  "visitor-disclosure",
  "security-review",
  "qa-006-reaudit",
  "g4-and-g5-reopening-as-applicable",
]);

const EXPECTED_COLLECTION_KEYS = Object.freeze([
  "analytics",
  "beacons",
  "cookies",
  "fingerprinting",
  "indexedDb",
  "localStorage",
  "serviceWorkers",
  "sessionStorage",
  "telemetry",
  "thirdPartyRuntime",
  "trackingPixels",
  "trackingQueryMutation",
]);

const AUDITED_SOURCE_ROOTS = Object.freeze([
  "src",
  "scripts",
  "public",
  "config",
]);
const AUDITED_ROOT_FILES = Object.freeze([
  "astro.config.mjs",
  "package.json",
  "package-lock.json",
]);
const SELF_AUDIT_EXCLUSIONS = new Set([
  "config/analytics-policy.json",
  "scripts/check-contact-privacy.mjs",
  "scripts/check-no-analytics.mjs",
  "scripts/lib/no-analytics.mjs",
  "scripts/scan-public.mjs",
  // Owner-authorized build-time import of public scholarly metadata. This
  // script is never emitted to the browser and handles no visitor data.
  "scripts/sync-orcid-publications.mjs",
]);
const TEXT_EXTENSIONS = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".json",
  ".mjs",
  ".svg",
  ".ts",
  ".txt",
  ".webmanifest",
  ".xml",
]);

const signature = (...parts) => parts.join("");
const FORBIDDEN_RUNTIME_SIGNATURES = Object.freeze([
  [signature("navigator", ".send", "Beacon"), /navigator\s*\.\s*sendBeacon\b/i],
  [signature("document", ".cookie"), /document\s*\.\s*cookie\b/i],
  [signature("local", "Storage"), /\blocalStorage\b/i],
  [signature("session", "Storage"), /\bsessionStorage\b/i],
  [signature("indexed", "DB"), /\bindexedDB\b/i],
  [signature("service", "Worker"), /\bserviceWorker\b/i],
  [signature("XMLHttp", "Request"), /\bXMLHttpRequest\b/i],
  [signature("new Web", "Socket"), /\bnew\s+WebSocket\s*\(/i],
  [signature("new Event", "Source"), /\bnew\s+EventSource\s*\(/i],
  [signature("fetch", "("), /\bfetch\s*\(/i],
  [signature("data", "Layer"), /\bdataLayer\b/i],
  [signature("meta set-", "cookie"), /<meta\b[^>]*http-equiv=["']?set-cookie/i],
]);

const FORBIDDEN_VENDOR_SIGNATURES = Object.freeze([
  "google-analytics",
  "googletagmanager",
  "google tag manager",
  "gtag.js",
  "plausible.io",
  "plausible-tracker",
  "umami",
  "matomo",
  "posthog",
  "mixpanel",
  "amplitude",
  "segment.io",
  "segment.com",
  "@segment/analytics",
  "@sentry/browser",
  "sentry.io",
  "newrelic",
  "datadog-rum",
  "fullstory",
  "hotjar",
  "clarity.ms",
  "snowplow",
  "rudderstack",
  "heap-analytics",
  "usefathom",
  "goatcounter",
]);

const TRACKING_QUERY_PATTERN =
  /(?:[?&]|\b)(?:utm_(?:source|medium|campaign|term|content|id)|gclid|dclid|fbclid|msclkid|_ga|mc_cid|mc_eid)=/i;
const REMOTE_RESOURCE_PATTERN =
  /<(?:script|img|iframe|source|video|audio|embed|object)\b[^>]*\b(?:src|srcset|data)\s*=\s*["']\s*(?:https?:)?\/\//i;
const REMOTE_STYLE_RESOURCE_PATTERN =
  /(?:@import\s+(?:url\()?\s*["']?\s*https?:\/\/|url\(\s*["']?\s*https?:\/\/)/i;
const REMOTE_FETCH_LINK_PATTERN =
  /<link\b(?=[^>]*\brel\s*=\s*["'][^"']*(?:stylesheet|preload|modulepreload|prefetch|preconnect|dns-prefetch|icon)[^"']*["'])[^>]*\bhref\s*=\s*["']\s*(?:https?:)?\/\//i;
const SERVICE_WORKER_FILE_PATTERN =
  /(?:^|\/)(?:service-worker|sw)(?:\.[a-z0-9_-]+)*\.js$/i;

function sortedUnique(values) {
  return [...new Set(values)].sort();
}

function assertExactSet(actual, expected, label) {
  if (
    !Array.isArray(actual) ||
    actual.length !== new Set(actual).size ||
    JSON.stringify(sortedUnique(actual)) !==
      JSON.stringify(sortedUnique(expected))
  )
    throw new Error(`${label} must contain the exact governed set.`);
}

export function validateAnalyticsPolicy(policy) {
  if (!policy || typeof policy !== "object")
    throw new Error("Analytics policy must be an object.");
  if (policy.schemaVersion !== "1.0.0" || policy.decision !== "disabled")
    throw new Error(
      "Analytics policy must retain version 1.0.0 and disabled decision.",
    );
  if (policy.implementationAuthorized !== false)
    throw new Error("Analytics implementation is not authorized.");

  assertExactSet(
    Object.keys(policy.collection ?? {}),
    EXPECTED_COLLECTION_KEYS,
    "Analytics collection controls",
  );
  for (const [key, value] of Object.entries(policy.collection))
    if (value !== false)
      throw new Error(`Analytics collection control ${key} must be false.`);
  if (
    !Array.isArray(policy.runtimeOrigins) ||
    policy.runtimeOrigins.length !== 0
  )
    throw new Error("Analytics runtime origin allowlist must remain empty.");
  if (policy.consentInterfaceRequired !== false)
    throw new Error(
      "No consent interface is required while no processing exists.",
    );
  if (
    policy.hostLogs?.partOfStaticArtifact !== false ||
    policy.hostLogs?.authorizedByThisPolicy !== false
  )
    throw new Error(
      "Host logs must remain outside and unauthorized by this artifact.",
    );

  const exception = policy.futureException;
  if (
    exception?.state !== "prohibited-until-approved" ||
    exception?.approvalOwner !== "site-owner" ||
    exception?.implementationAuthorized !== false
  )
    throw new Error(
      "Future analytics exception must remain prohibited and owner-controlled.",
    );
  assertExactSet(
    exception.requiredControls,
    REQUIRED_EXCEPTION_CONTROLS,
    "Future analytics exception controls",
  );
  assertExactSet(
    exception.requiredHandoffs,
    ["QA-005", "QA-006", "QA-007"],
    "Future analytics QA handoffs",
  );
  assertExactSet(
    exception.reopenGatesAsApplicable,
    ["G4", "G5"],
    "Future analytics reopened gates",
  );
  return true;
}

async function filesIn(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const absolute = path.join(directory, entry.name);
    const relative = path.posix.join(prefix, entry.name);
    const stat = await lstat(absolute);
    if (stat.isSymbolicLink())
      throw new Error(`Symlink rejected by no-analytics audit: ${relative}`);
    if (stat.isDirectory()) files.push(...(await filesIn(absolute, relative)));
    else files.push({ absolute, relative });
  }
  return files;
}

function inspectText(text, label, { generated = false } = {}) {
  for (const [name, pattern] of FORBIDDEN_RUNTIME_SIGNATURES)
    if (pattern.test(text))
      throw new Error(`Forbidden runtime capability ${name} in ${label}.`);
  const lowered = text.toLowerCase();
  for (const vendor of FORBIDDEN_VENDOR_SIGNATURES)
    if (lowered.includes(vendor))
      throw new Error(
        `Forbidden analytics/telemetry vendor signature ${vendor} in ${label}.`,
      );
  if (TRACKING_QUERY_PATTERN.test(text))
    throw new Error(`Tracking query mutation or identifier found in ${label}.`);
  if (
    REMOTE_RESOURCE_PATTERN.test(text) ||
    REMOTE_STYLE_RESOURCE_PATTERN.test(text) ||
    REMOTE_FETCH_LINK_PATTERN.test(text)
  )
    throw new Error(`Third-party runtime resource found in ${label}.`);
  if (generated && /\b(?:report-uri|report-to)\b/i.test(text))
    throw new Error(`Telemetry reporting directive found in ${label}.`);
}

export async function auditSourceSurfaces(root) {
  const candidates = [];
  for (const relative of AUDITED_ROOT_FILES)
    candidates.push({ absolute: path.join(root, relative), relative });
  for (const relative of AUDITED_SOURCE_ROOTS) {
    const absolute = path.join(root, relative);
    for (const file of await filesIn(absolute, relative)) candidates.push(file);
  }

  let inspected = 0;
  for (const file of candidates) {
    if (SELF_AUDIT_EXCLUSIONS.has(file.relative)) continue;
    if (!TEXT_EXTENSIONS.has(path.extname(file.relative).toLowerCase()))
      continue;
    inspectText(await readFile(file.absolute, "utf8"), file.relative);
    inspected += 1;
  }
  return inspected;
}

export async function auditDependencies(root) {
  const packageJson = JSON.parse(
    await readFile(path.join(root, "package.json"), "utf8"),
  );
  const lock = JSON.parse(
    await readFile(path.join(root, "package-lock.json"), "utf8"),
  );
  const names = new Set([
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.devDependencies ?? {}),
  ]);
  for (const [location, metadata] of Object.entries(lock.packages ?? {})) {
    if (metadata?.name) names.add(metadata.name);
    const match = location.match(/node_modules\/(.+)$/);
    if (match) names.add(match[1]);
  }
  for (const name of [...names].sort()) {
    const lowered = name.toLowerCase();
    if (FORBIDDEN_VENDOR_SIGNATURES.some((vendor) => lowered.includes(vendor)))
      throw new Error(`Forbidden analytics/telemetry dependency: ${name}.`);
  }
  if (Object.keys(packageJson.dependencies ?? {}).length !== 0)
    throw new Error("Static artifact must retain zero runtime dependencies.");
  return names.size;
}

export async function auditGeneratedDirectory(directory, label = directory) {
  const files = await filesIn(directory);
  let inspected = 0;
  for (const file of files) {
    if (SERVICE_WORKER_FILE_PATTERN.test(file.relative))
      throw new Error(
        `Service worker artifact forbidden in ${label}: ${file.relative}.`,
      );
    if (!TEXT_EXTENSIONS.has(path.extname(file.relative).toLowerCase()))
      continue;
    inspectText(
      await readFile(file.absolute, "utf8"),
      `${label}/${file.relative}`,
      {
        generated: true,
      },
    );
    inspected += 1;
  }
  return { files: files.length, inspected };
}

export async function auditReleasePolicy(root) {
  const release = JSON.parse(
    await readFile(path.join(root, "config/release-policy.json"), "utf8"),
  );
  const headers = release.headers?.security ?? {};
  const csp = headers["Content-Security-Policy"] ?? "";
  for (const directive of [
    "connect-src 'none'",
    "worker-src 'none'",
    "form-action 'none'",
  ])
    if (!csp.includes(directive))
      throw new Error(`Release CSP must retain ${directive}.`);
  if (/\b(?:report-uri|report-to)\b/i.test(csp))
    throw new Error("Release CSP must not configure telemetry reporting.");
  if (
    !String(headers["Permissions-Policy"] ?? "").includes("browsing-topics=()")
  )
    throw new Error("Permissions Policy must disable browsing topics.");
  return true;
}

export async function runNoAnalyticsAudit(root, generatedDirectories = []) {
  const policy = JSON.parse(
    await readFile(path.join(root, "config/analytics-policy.json"), "utf8"),
  );
  validateAnalyticsPolicy(policy);
  await auditReleasePolicy(root);
  const sourceFiles = await auditSourceSurfaces(root);
  const dependencies = await auditDependencies(root);
  const generated = [];
  for (const directory of generatedDirectories)
    generated.push({
      directory,
      ...(await auditGeneratedDirectory(path.join(root, directory), directory)),
    });
  return { sourceFiles, dependencies, generated };
}
