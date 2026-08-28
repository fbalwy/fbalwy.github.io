type Course = {
  governance: Record<string, unknown>;
  versioning: Record<string, unknown>;
};
type TeachingAggregate = { courses: Course[]; teaching_occurrences: unknown[] };

export function promotedTeachingFixture(
  source: TeachingAggregate,
): TeachingAggregate {
  const clone = structuredClone(source);
  clone.courses.forEach((course) => {
    course.governance = {
      ...course.governance,
      verification_status: "verified",
      conflict_state: "none",
      public_disposition: "publish",
      render_eligibility: "public",
    };
    course.versioning = { ...course.versioning, correction_state: "none" };
  });
  return clone;
}
