type FixtureRecord = {
  record_id: string;
  governance: {
    verification_status: "verified";
    public_disposition: "publish";
    render_eligibility: "public";
  };
  data: Record<string, string | number>;
};

const governance = {
  verification_status: "verified" as const,
  public_disposition: "publish" as const,
  render_eligibility: "public" as const,
};

export const populatedHomeFixture: {
  themes: readonly FixtureRecord[];
  publications: readonly FixtureRecord[];
  courses: readonly FixtureRecord[];
  career: readonly FixtureRecord[];
  service: readonly FixtureRecord[];
  profiles: readonly FixtureRecord[];
} = {
  themes: [
    "theme-privacy-preserving-health-data-sharing",
    "theme-blockchain-security-and-interoperability",
    "theme-machine-learning-for-cyber-threat-detection",
  ].map((record_id) => ({ record_id, governance, data: { name: record_id } })),
  publications: [
    "doi-10-3390-systems14040385",
    "doi-10-1016-j-aej-2025-06-011",
    "doi-10-3389-fcomp-2024-1387354",
    "doi-10-2196-27816",
  ].map((record_id) => ({ record_id, governance, data: { title: record_id } })),
  courses: [{ record_id: "course-001", governance, data: { name: "Course" } }],
  career: [{ record_id: "career-001", governance, data: { name: "Career" } }],
  service: [
    { record_id: "service-001", governance, data: { name: "Service" } },
  ],
  profiles: [
    { record_id: "profile-001", governance, data: { name: "Profile" } },
  ],
};
