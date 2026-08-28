import assert from "node:assert/strict";
import test from "node:test";
import { execFileSync } from "node:child_process";
import { readdir } from "node:fs/promises";

test("governed schema validation still passes", () => {
  const output = execFileSync(
    process.execPath,
    ["content/schemas/validate.mjs"],
    { encoding: "utf8" },
  );
  assert.match(output, /PASS/);
});

test("public staging contains only the approved OG card and conservative robots control", async () => {
  execFileSync(process.execPath, ["scripts/stage-public.mjs"], {
    encoding: "utf8",
  });
  execFileSync(process.execPath, ["scripts/stage-release-robots.mjs"], {
    encoding: "utf8",
  });
  assert.deepEqual((await readdir(".build/public")).sort(), [
    "og.png",
    "robots.txt",
  ]);
});
