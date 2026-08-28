import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const hash = (content) => createHash("sha256").update(content).digest("hex");

async function makeRelease(root, id, files) {
  const release = path.join(root, id);
  const entries = [];
  for (const [relative, content] of Object.entries(files)) {
    const target = path.join(release, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content);
    entries.push({ path: relative, sha256: hash(content) });
  }
  const manifest = {
    id,
    artifacts: entries.sort((a, b) => a.path.localeCompare(b.path)),
  };
  await writeFile(
    path.join(release, "release-manifest.json"),
    `${JSON.stringify(manifest)}\n`,
  );
  return { release, manifest };
}

async function verifyRelease(release, manifest) {
  for (const entry of manifest.artifacts) {
    try {
      if (hash(await readFile(path.join(release, entry.path))) !== entry.sha256)
        return false;
    } catch {
      return false;
    }
  }
  return true;
}

export async function simulateImmutableReleaseLifecycle() {
  const root = await mkdtemp(path.join(os.tmpdir(), "tec003-release-"));
  try {
    const first = await makeRelease(root, "release-a", {
      "index.html": "first",
      "withdrawn-document.txt": "document-a",
    });
    const second = await makeRelease(root, "release-b", {
      "index.html": "second",
    });
    const firstManifest = JSON.stringify(first.manifest);
    const promotion = {
      candidate: "release-b",
      production: "release-b",
      previousProduction: "release-a",
    };
    const rollback = { ...promotion, production: promotion.previousProduction };
    const purge = {
      withdrawn: ["withdrawn-document.txt"],
      invalidateHtml: ["index.html"],
    };
    await writeFile(path.join(second.release, "index.html"), "tampered");
    const tamperDetected = !(await verifyRelease(
      second.release,
      second.manifest,
    ));
    await rm(path.join(second.release, "index.html"));
    const missingDetected = !(await verifyRelease(
      second.release,
      second.manifest,
    ));
    return {
      rollbackUsedExistingRelease: rollback.production === "release-a",
      firstReleaseUnchanged:
        firstManifest === JSON.stringify(first.manifest) &&
        (await verifyRelease(first.release, first.manifest)),
      withdrawalPurgeList: purge.withdrawn,
      htmlInvalidation: purge.invalidateHtml,
      tamperDetected,
      missingDetected,
    };
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}
