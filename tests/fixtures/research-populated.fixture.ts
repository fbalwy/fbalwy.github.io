type MutableRecord = {
  record_id: string;
  data: Record<string, unknown>;
  governance: Record<string, unknown>;
  public_presentation: Record<string, unknown>;
  versioning: Record<string, unknown>;
};

type ResearchInput = {
  themes: MutableRecord[];
  theme_publication_relationships: MutableRecord[];
  publications: MutableRecord[];
  projects_and_systems: unknown[];
};

function approved(record: MutableRecord, location: string): void {
  record.governance = {
    ...record.governance,
    verification_status: "verified",
    conflict_state: "none",
    public_disposition: "publish",
    render_eligibility: "public",
  };
  record.versioning = { ...record.versioning, correction_state: "none" };
  record.public_presentation = {
    ...record.public_presentation,
    public_wording:
      typeof record.public_presentation.public_wording === "string" &&
      record.public_presentation.public_wording.trim()
        ? record.public_presentation.public_wording
        : (record.data.name ??
          record.data.title ??
          "Approved theme-publication relationship"),
    public_location_ids: [location],
  };
}

export function promotedResearchFixture(source: ResearchInput): ResearchInput {
  const clone = structuredClone(source);
  clone.themes.forEach((record) => approved(record, "R2"));
  clone.theme_publication_relationships.forEach((record) =>
    approved(record, "R2"),
  );
  const boundIds = new Set(
    clone.theme_publication_relationships.map(
      (record) => record.data.publication_id as string,
    ),
  );
  clone.publications
    .filter((record) => boundIds.has(record.record_id))
    .forEach((record) => approved(record, "R3"));
  return clone;
}
