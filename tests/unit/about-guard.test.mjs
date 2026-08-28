import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

test("About keeps canonical career, service, and profiles unavailable until public promotion", async () => {
  const aggregate = JSON.parse(
    await readFile("content/data/site-content.json", "utf8"),
  );
  const publicRecord = (record) =>
    record.governance?.public_disposition === "publish" &&
    record.governance?.render_eligibility === "public";
  assert.equal(aggregate.career.filter(publicRecord).length, 0);
  assert.equal(aggregate.service.filter(publicRecord).length, 0);
  assert.equal(aggregate.profile_links.filter(publicRecord).length, 0);
  const about = await readFile("src/pages/about.astro", "utf8");
  assert.match(about, /UnavailableState/);
  assert.doesNotMatch(about, /assets\/cv|faisal-albalwy-cv\.pdf/);
  const promoted = {
    governance: { public_disposition: "publish", render_eligibility: "public" },
  };
  assert.equal(publicRecord(promoted), true);
});

test("typed populated About fixture proves all nine modules can unlock outside emitted output", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "bld003-about-"));
  try {
    execFileSync(process.execPath, [
      "node_modules/typescript/bin/tsc",
      "--ignoreConfig",
      "--target",
      "esnext",
      "--module",
      "nodenext",
      "--moduleResolution",
      "nodenext",
      "--outDir",
      output,
      "src/lib/about/model.ts",
      "src/lib/security/public.ts",
    ]);
    const { createAboutModel, ABOUT_MODULE_ORDER } = await import(
      pathToFileURL(path.join(output, "about/model.js")).href
    );
    const aggregate = JSON.parse(
      await readFile("content/data/site-content.json", "utf8"),
    );
    const promote = (record) => ({
      ...record,
      governance: {
        ...record.governance,
        verification_status: "verified",
        public_disposition: "publish",
        render_eligibility: "public",
      },
      public_presentation: {
        ...record.public_presentation,
        public_wording:
          record.public_presentation?.public_wording ??
          record.data?.activity ??
          record.data?.title ??
          "Approved wording",
      },
    });
    const career = [
      "career-assistant-professor-taibah",
      "career-phd-manchester",
    ].map((id) =>
      promote(aggregate.career.find((record) => record.record_id === id)),
    );
    const service = [
      "service-deputy-ceo-2023",
      "service-ceo-2024",
      "service-ceo-renewal-2025",
    ].map((id) =>
      promote(aggregate.service.find((record) => record.record_id === id)),
    );
    const profile = promote(
      aggregate.profile_links.find(
        (record) => record.record_id === "profile-taibah",
      ),
    );
    profile.public_presentation = {
      ...profile.public_presentation,
      public_location_ids: ["R7"],
      public_wording: profile.data.label,
    };
    const model = createAboutModel({
      career,
      service,
      profiles: [profile],
    });
    assert.deepEqual(model.modules, ABOUT_MODULE_ORDER);
    assert.equal(model.modules.length, 9);
    assert.equal(model.public, true);
    assert.equal(model.career.length, 2);
    assert.equal(model.service.length, 3);
    assert.equal(
      model.profile.label,
      "View Taibah University faculty profile (external)",
    );
    assert.equal(
      model.profile.href,
      "https://www.taibahu.edu.sa/en/employees/120",
    );
    assert.equal(
      model.appointment,
      "Assistant Professor, Department of Cybersecurity, Taibah University.",
    );
    assert.equal(
      model.phd,
      "PhD, The University of Manchester — awarded 14 April 2022.",
    );
    assert.deepEqual(
      model.leadership,
      service.map((item) => item.data.activity),
    );
    assert.equal(
      createAboutModel({
        career: [...career, career[0]],
        service,
        profiles: [profile],
      }).public,
      false,
    );
    assert.equal(
      createAboutModel({
        career,
        service: [...service, service[0]],
        profiles: [profile],
      }).public,
      false,
    );
    assert.equal(
      createAboutModel({ career, service, profiles: [profile, profile] })
        .public,
      false,
    );
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
