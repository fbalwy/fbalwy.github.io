type Service = {
  governance: Record<string, unknown>;
  versioning: Record<string, unknown>;
};
type Aggregate = { service: Service[] };
export function promotedServiceFixture(source: Aggregate): Aggregate {
  const clone = structuredClone(source);
  clone.service.forEach((record) => {
    record.governance = {
      ...record.governance,
      verification_status: "verified",
      conflict_state: "none",
      public_disposition: "publish",
      render_eligibility: "public",
    };
    record.versioning = { ...record.versioning, correction_state: "none" };
  });
  return clone;
}
