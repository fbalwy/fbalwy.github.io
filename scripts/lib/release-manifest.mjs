import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export function mimeFor(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".txt")) return "text/plain; charset=utf-8";
  if (file.endsWith(".pdf")) return "application/pdf";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".woff2")) return "font/woff2";
  return "application/octet-stream";
}

export function cacheClassFor(file) {
  if (file.startsWith("_astro/")) return "fingerprinted-asset";
  if (file === "og.png") return "stable-social-image";
  return "html-or-control";
}

export async function filesIn(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesIn(absolute, relative)));
    else files.push({ absolute, relative });
  }
  return files;
}

export async function artifactEntries(directory, cache) {
  const files = await filesIn(directory);
  return Promise.all(
    files.map(async ({ absolute, relative }) => {
      const content = await readFile(absolute);
      const cacheClass = cacheClassFor(relative);
      return {
        path: relative,
        bytes: content.byteLength,
        mime: mimeFor(relative),
        sha256: createHash("sha256").update(content).digest("hex"),
        cacheClass,
        cacheControl:
          cache[
            cacheClass === "fingerprinted-asset"
              ? "fingerprintedAsset"
              : cacheClass === "stable-download"
                ? "stableDownload"
                : cacheClass === "stable-social-image"
                  ? "stableSocialImage"
                  : "html"
          ],
        expectedStatus: relative === "404.html" ? 404 : 200,
        indexing: "noindex",
      };
    }),
  );
}
