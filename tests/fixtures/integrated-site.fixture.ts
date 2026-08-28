type MutableRecord = {
  record_id: string;
  data: Record<string, unknown>;
  governance: Record<string, unknown>;
  public_presentation: Record<string, unknown>;
  translation: Record<string, unknown>;
  versioning: Record<string, unknown>;
};

type Aggregate = Record<string, unknown> & {
  publications: MutableRecord[];
  themes: MutableRecord[];
  theme_publication_relationships: MutableRecord[];
  courses: MutableRecord[];
  career: MutableRecord[];
  service: MutableRecord[];
  profile_links: MutableRecord[];
};

const governedCollections = [
  "publications",
  "themes",
  "theme_publication_relationships",
  "courses",
  "career",
  "service",
  "profile_links",
] as const;

export function promotedIntegratedFixture(source: Aggregate): Aggregate {
  const clone = structuredClone(source);
  for (const collection of governedCollections) {
    for (const record of clone[collection]) {
      record.governance = {
        ...record.governance,
        verification_status: "verified",
        conflict_state: "none",
        public_disposition: "publish",
        render_eligibility: "public",
        rights_status: "granted",
        consent_status: "not_applicable",
        record_owner_id: "qa-007-authorized-owner",
        approvals: {
          evidence: true,
          privacy: true,
          rights: true,
          editorial: true,
          qa: true,
        },
      };
      record.translation = {
        ...record.translation,
        status:
          record.translation.status === "pending"
            ? "reviewed"
            : record.translation.status,
      };
      record.versioning = {
        ...record.versioning,
        correction_state: "none",
      };
      if (
        typeof record.public_presentation.public_wording !== "string" ||
        !record.public_presentation.public_wording.trim()
      ) {
        record.public_presentation = {
          ...record.public_presentation,
          public_wording: "Approved theme-publication relationship",
          public_location_ids:
            collection === "theme_publication_relationships"
              ? ["R2"]
              : record.public_presentation.public_location_ids,
        };
      }
    }
  }
  return clone;
}
