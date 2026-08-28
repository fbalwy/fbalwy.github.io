const modes = new Set(["local", "ci", "preview", "production"]);
const allowed = new Set([
  "SITE_BUILD_MODE",
  "SITE_ORIGIN",
  "SOURCE_DATE_EPOCH",
  "GIT_COMMIT_SHA",
]);
const controlledPrefixes = ["SITE_", "PUBLIC_", "SOURCE_"];

function absent(value) {
  return value === undefined || value === "";
}

export function parseReleaseEnvironment(environment = {}) {
  for (const key of Object.keys(environment)) {
    if (
      controlledPrefixes.some((prefix) => key.startsWith(prefix)) &&
      !allowed.has(key)
    ) {
      throw new Error(`Undeclared or forbidden environment input: ${key}`);
    }
  }
  const mode = environment.SITE_BUILD_MODE ?? "local";
  if (!modes.has(mode))
    throw new Error(
      "SITE_BUILD_MODE must be local, ci, preview, or production.",
    );
  const sentinel =
    mode === "ci" ? "https://ci.invalid" : "https://local.invalid";
  const rawOrigin =
    environment.SITE_ORIGIN ??
    (mode === "local" || mode === "ci" ? sentinel : undefined);
  if (absent(rawOrigin))
    throw new Error(`SITE_ORIGIN is required for ${mode} builds.`);
  let origin;
  try {
    origin = new URL(rawOrigin);
  } catch {
    throw new Error(
      "SITE_ORIGIN must be an absolute URL without credentials, query, or fragment.",
    );
  }
  if (
    origin.username ||
    origin.password ||
    origin.search ||
    origin.hash ||
    origin.pathname !== "/"
  )
    throw new Error(
      "SITE_ORIGIN must be an origin only, without credentials, path, query, or fragment.",
    );
  if (["local", "ci"].includes(mode) && origin.toString() !== `${sentinel}/`)
    throw new Error(`${mode} requires the exact ${sentinel} sentinel.`);
  if (
    ["preview", "production"].includes(mode) &&
    (origin.protocol !== "https:" || origin.hostname.endsWith(".invalid"))
  )
    throw new Error(`${mode} requires an explicit HTTPS non-.invalid origin.`);
  if (
    mode === "production" &&
    !/^[a-z0-9](?:[a-z0-9-]{0,37}[a-z0-9])?\.github\.io$/i.test(origin.hostname)
  )
    throw new Error(
      "Production is currently authorized only for a GitHub Pages user-site origin.",
    );
  const sourceDateEpoch = environment.SOURCE_DATE_EPOCH ?? "0";
  if (!/^(0|[1-9][0-9]*)$/.test(sourceDateEpoch))
    throw new Error("SOURCE_DATE_EPOCH must be a non-negative integer string.");
  const commit = environment.GIT_COMMIT_SHA;
  if (!absent(commit) && !/^[0-9a-f]{7,64}$/i.test(commit))
    throw new Error(
      "GIT_COMMIT_SHA must be a 7–64 character hexadecimal revision.",
    );
  const production = mode === "production";
  return Object.freeze({
    mode,
    origin: origin.origin,
    sourceDateEpoch,
    gitCommitSha: commit ?? "uncommitted",
    indexable: production,
    promotable: production,
  });
}
