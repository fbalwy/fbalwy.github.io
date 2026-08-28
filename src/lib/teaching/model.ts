import {
  containsPublicMarker,
  isPublicRenderable,
} from "../security/public.js";

export const TEACHING_MODULE_ORDER = [
  "purpose-and-context",
  "course-catalogue",
  "related-research-and-publications",
  "teaching-inquiry",
] as const;
export const COURSE_TITLES = [
  "Algorithms and Data Structures",
  "Compiler Construction",
  "Computer Programming",
  "Computer Security",
  "Computer Skills",
  "Cryptography",
  "Cybersecurity Design Principles",
  "Cybersecurity Fundamentals",
  "Field Training",
  "Graduation Project I",
  "Graduation Project II",
  "Information Technology Systems Components",
  "Introduction to Computing",
  "Programming I",
  "Research Project",
  "Research Seminar",
  "Selected Topics",
  "Software Engineering",
  "Theory of Computation",
] as const;
export const COURSE_IDS = COURSE_TITLES.map(
  (_, index) => `course-${String(index + 1).padStart(2, "0")}`,
);

type CourseRecord = {
  record_id: string;
  data?: Record<string, unknown>;
  governance?: Record<string, unknown>;
  public_presentation?: Record<string, unknown>;
  versioning?: Record<string, unknown>;
};
export type TeachingModel = Readonly<{
  modules: readonly (typeof TEACHING_MODULE_ORDER)[number][];
  courses: readonly Readonly<{ id: string; title: string }>[];
  public: boolean;
}>;

function plain(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const text = value.trim();
  return text && !containsPublicMarker(text) ? text : undefined;
}
function exactOne(
  records: readonly CourseRecord[],
  id: string,
): CourseRecord | undefined {
  const matches = records.filter((record) => record.record_id === id);
  return matches.length === 1 ? matches[0] : undefined;
}
function courseProjection(record: CourseRecord, title: string) {
  const locations = record.public_presentation?.public_location_ids;
  const keys = Object.keys(record.data ?? {}).sort();
  return isPublicRenderable(record) &&
    record.governance?.conflict_state === "none" &&
    record.versioning?.correction_state === "none" &&
    record.data?.title_authority === "official_english" &&
    plain(record.data?.official_title) === title &&
    plain(record.data?.normalized_english_title) === title &&
    plain(record.public_presentation?.public_wording) === title &&
    Array.isArray(locations) &&
    locations.length === 1 &&
    locations[0] === "R4" &&
    keys.join(",") ===
      "category,normalized_english_title,official_title,title_authority"
    ? { id: record.record_id, title }
    : undefined;
}
export function createTeachingModel(input: {
  courses: readonly CourseRecord[];
  occurrences: readonly unknown[];
}): TeachingModel {
  const unavailable: TeachingModel = {
    modules: TEACHING_MODULE_ORDER,
    courses: [],
    public: false,
  };
  if (
    input.occurrences.length !== 0 ||
    input.courses.length !== COURSE_IDS.length ||
    input.courses.some(
      (course, index) => course.record_id !== COURSE_IDS[index],
    )
  )
    return unavailable;
  const courses = COURSE_IDS.map((id, index) => {
    const record = exactOne(input.courses, id);
    return record && courseProjection(record, COURSE_TITLES[index]);
  });
  return courses.some((course) => !course)
    ? unavailable
    : {
        modules: TEACHING_MODULE_ORDER,
        courses: courses as TeachingModel["courses"],
        public: true,
      };
}
