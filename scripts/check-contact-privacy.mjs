import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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

async function joinedFiles(directory) {
  const files = (await filesAt(directory)).filter(
    (file) => !/\.(?:pdf|png)$/i.test(file),
  );
  return (await Promise.all(files.map((file) => readFile(file, "utf8")))).join(
    "\n",
  );
}

const source = await joinedFiles(path.join(root, "src"));
const dist = await joinedFiles(path.join(root, "dist"));
const contactHtml = await readFile(
  path.join(root, "dist/contact/index.html"),
  "utf8",
);
const decodedContact = contactHtml
  .replaceAll("&amp;", "&")
  .replaceAll("&#39;", "'");

assert.match(decodedContact, new RegExp(approvedMailto.replaceAll("?", "\\?")));
assert.match(decodedContact, new RegExp(approvedAddress));
assert.match(decodedContact, /does not collect, transmit, store, or retain/i);
assert.match(decodedContact, /outside this site's boundary/i);
assert.match(decodedContact, /does not request or record contact consent/i);
assert.match(decodedContact, /cannot confirm[\s\S]*sent, delivered, or read/i);
assert.match(decodedContact, /If email does not open/i);
assert.match(decodedContact, /data-contact-offline/);
assert.doesNotMatch(
  decodedContact,
  /<form\b|<input\b|<textarea\b|<select\b|<button\b/i,
);
assert.doesNotMatch(decodedContact, /(?:cc|bcc|body)=/i);
assert.doesNotMatch(decodedContact, /href=["'](?:tel|sms):/i);

for (const corpus of [source, dist]) {
  assert.doesNotMatch(corpus, /<form\b/i);
  assert.doesNotMatch(
    corpus,
    /localStorage|sessionStorage|document\.cookie|indexedDB|sendBeacon|XMLHttpRequest|fetch\(|serviceWorker/i,
  );
  assert.doesNotMatch(
    corpus,
    /google-analytics|googletagmanager|analytics\.js|plausible|segment|mixpanel|hotjar|sentry|tracking pixel/i,
  );
  assert.doesNotMatch(corpus, /mailto:[^"'`\s]+(?:cc|bcc|body)=/i);
  const addresses = new Set(
    [...corpus.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
      ([value]) => value.toLowerCase(),
    ),
  );
  assert.deepEqual([...addresses], [approvedAddress]);
}

const mailtoTargets = new Set(
  [...dist.matchAll(/mailto:[^"'<>\s]+/gi)].map(([value]) =>
    value.replaceAll("&amp;", "&"),
  ),
);
assert.deepEqual([...mailtoTargets], [approvedMailto]);

console.log(
  "Contact privacy scan passed: one approved email-only target, zero site-side collection or retention.",
);
