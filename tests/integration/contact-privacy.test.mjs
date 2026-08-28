import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const approvedAddress = "fbalwy@taibahu.edu.sa";
const approvedMailto =
  "mailto:fbalwy@taibahu.edu.sa?subject=Academic%20website%20inquiry";

async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) =>
      entry.isDirectory()
        ? filesAt(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    ),
  );
  return nested.flat();
}

test("contact action is one exact institutional address with a minimal encoded subject", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "int004-contact-"));
  try {
    execFileSync(
      process.execPath,
      [
        "node_modules/typescript/bin/tsc",
        "--target",
        "esnext",
        "--ignoreConfig",
        "--module",
        "nodenext",
        "--moduleResolution",
        "nodenext",
        "--rewriteRelativeImportExtensions",
        "--outDir",
        output,
        "src/lib/security/public.ts",
        "src/lib/content/public-actions.ts",
      ],
      { encoding: "utf8" },
    );
    const security = await import(
      pathToFileURL(path.join(output, "security/public.js")).href
    );
    const actions = await import(
      pathToFileURL(path.join(output, "content/public-actions.js")).href
    );

    assert.equal(security.APPROVED_INSTITUTIONAL_EMAIL, approvedAddress);
    assert.equal(
      actions.approvedContactAction(actions.APPROVED_CONTACT_CONTRACT),
      approvedMailto,
    );
    assert.equal(
      security.safeInstitutionalMailto(approvedAddress),
      approvedMailto,
    );
    for (const rejected of [
      "FBALWY@taibahu.edu.sa",
      "other@taibahu.edu.sa",
      "fbalwy@gmail.com",
      "fbalwy@taibahu.edu.sa?cc=other@example.com",
      "fbalwy@taibahu.edu.sa%0d%0abcc:other@example.com",
      undefined,
    ])
      assert.equal(security.safeInstitutionalMailto(rejected), undefined);

    const parsed = new URL(approvedMailto);
    assert.equal(parsed.protocol, "mailto:");
    assert.equal(parsed.pathname, approvedAddress);
    assert.deepEqual([...parsed.searchParams.keys()], ["subject"]);
    assert.equal(
      parsed.searchParams.get("subject"),
      "Academic website inquiry",
    );
    assert.equal(parsed.searchParams.has("cc"), false);
    assert.equal(parsed.searchParams.has("bcc"), false);
    assert.equal(parsed.searchParams.has("body"), false);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});

test("contact source states the collection, retention, consent, delivery, and recovery boundaries", async () => {
  const contact = await readFile("src/pages/contact.astro", "utf8");
  const home = await readFile("src/components/home/HomeContent.astro", "utf8");
  const shell = await readFile("src/layouts/PreviewLayout.astro", "utf8");
  const states = await readFile("src/lib/states/contracts.ts", "utf8");

  assert.match(contact, /no contact form or submission endpoint/i);
  assert.match(contact, /does\s+not\s+collect, transmit, store, or retain/i);
  assert.match(contact, /outside\s+this site's boundary/i);
  assert.match(contact, /cannot confirm[\s\S]*sent, delivered, or read/i);
  assert.match(contact, /does not request or record contact consent/i);
  assert.match(contact, /If email does not open/i);
  assert.match(contact, /data-contact-offline/);
  assert.match(contact, /no cc, bcc, body,[\s\S]*tracking value/i);
  assert.match(contact, /sensitive or confidential material/i);
  assert.doesNotMatch(contact, /<form\b|<input\b|<textarea\b|<select\b/i);
  assert.match(
    contact,
    /does\s+not\s+promise\s+a\s+response[\s\S]*cannot\s+confirm[\s\S]*reply\s+will\s+be\s+made/i,
  );

  assert.match(home, /href="\/contact"/);
  assert.doesNotMatch(home, /mailto:/i);
  assert.match(shell, /currentSite\.actions\.contactHref/);
  assert.match(
    shell,
    /does not use third-party analytics, tracking, or contact forms/i,
  );
  assert.match(shell, /does not collect or retain inquiries/i);
  assert.match(shell, /Email is handled outside the site/i);
  assert.match(states, /"email-client-unavailable"/);
  assert.match(states, /Use the visible institutional address/);
  assert.match(states, /No private or alternate contact method is provided/);
});

test("contact implementation has no site-side submission, storage, cookie, telemetry, or tracker path", async () => {
  const sourceFiles = await filesAt("src");
  const source = (
    await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))
  ).join("\n");

  assert.doesNotMatch(source, /<form\b/i);
  assert.doesNotMatch(
    source,
    /localStorage|sessionStorage|document\.cookie|indexedDB|sendBeacon|XMLHttpRequest|fetch\(|serviceWorker/i,
  );
  assert.doesNotMatch(
    source,
    /google-analytics|googletagmanager|analytics\.js|plausible|segment|mixpanel|hotjar|sentry|tracking pixel/i,
  );
  assert.doesNotMatch(source, /mailto:[^"'`\s]+(?:cc|bcc|body)=/i);

  const addresses = new Set(
    [...source.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
      ([value]) => value.toLowerCase(),
    ),
  );
  assert.deepEqual([...addresses], [approvedAddress]);
});
