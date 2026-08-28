export type PromotionRecord = Readonly<{
  record_id: string;
  data?: Record<string, unknown>;
  governance?: Record<string, unknown>;
  public_presentation?: Record<string, unknown>;
  translation?: Record<string, unknown>;
  versioning?: Record<string, unknown>;
}>;

export const QA007_PROMOTION: Readonly<Record<string, unknown>>;
export const QA007_PROMOTED_CONTENT: Readonly<{
  publications: readonly PromotionRecord[];
  themes: readonly PromotionRecord[];
  theme_publication_relationships: readonly PromotionRecord[];
  projects_and_systems: readonly unknown[];
  courses: readonly PromotionRecord[];
  teaching_occurrences: readonly unknown[];
  career: readonly PromotionRecord[];
  service: readonly PromotionRecord[];
  metrics: readonly unknown[];
  profile_links: readonly PromotionRecord[];
}>;
