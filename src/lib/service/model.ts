import {
  containsPublicMarker,
  isPublicRenderable,
} from "../security/public.js";
export const SERVICE_MODULE_ORDER = [
  "purpose-and-boundary",
  "technology-leadership",
  "peer-review",
  "community-engagement",
  "source-context",
  "contact",
] as const;
export const SERVICE_RECORDS = [
  [
    "service-deputy-ceo-2023",
    "technology_leadership",
    "In 2023, Taibah University appointed Faisal Albalwy as Deputy CEO for Business Development at Wadi Taibah Company for a one-year term.",
    "2023",
    "2023",
    "year",
  ],
  [
    "service-ceo-2024",
    "technology_leadership",
    "In 2024, Taibah University appointed him as CEO of Wadi Taibah Company for a one-year term.",
    "2024",
    "2024",
    "year",
  ],
  [
    "service-ceo-renewal-2025",
    "technology_leadership",
    "In 2025, a Taibah University decision renewed the CEO appointment for a further one-year term.",
    "2025",
    "2025",
    "year",
  ],
  [
    "service-ieee-reviewer-2026",
    "peer_review",
    "Reviewer for the 2nd IEEE International Conference on Cognitive Computing in Engineering, Communications, Sciences and Biomedical Health Informatics, held 12–14 February 2026.",
    "2026-02-12",
    "2026-02-14",
    "day",
  ],
  [
    "service-mdpi-reviews-2025-2026",
    "peer_review",
    "45 reviews for MDPI journals during 2025–2026, as recorded by the issuer on 14 August 2026.",
    "2025",
    "2026",
    "year",
  ],
  [
    "service-eswa-reviews-2023-2025",
    "peer_review",
    "22 reviews for Expert Systems with Applications between October 2023 and July 2025.",
    "2023-10",
    "2025-07",
    "month",
  ],
  [
    "service-fgcs-reviews-2023-2025",
    "peer_review",
    "28 reviews for Future Generation Computer Systems between November 2023 and June 2025.",
    "2023-11",
    "2025-06",
    "month",
  ],
  [
    "service-jisa-reviews-2025",
    "peer_review",
    "Five reviews for the Journal of Information Security and Applications between April and May 2025.",
    "2025-04",
    "2025-05",
    "month",
  ],
  [
    "service-drug-awareness-2023",
    "community_engagement",
    "Contributed to a Taibah University-supervised activity on awareness of drug harms, 8–13 July 2023.",
    "2023-07-08",
    "2023-07-13",
    "day",
  ],
  [
    "service-blockchain-workshop-2023",
    "community_engagement",
    "Contributed to presenting a Taibah University-supervised workshop on blockchain technology and entrepreneurship, 9–10 August 2023.",
    "2023-08-09",
    "2023-08-10",
    "day",
  ],
] as const;
export const SERVICE_IDS = SERVICE_RECORDS.map(([id]) => id);
type ServiceRecord = {
  record_id: string;
  data?: Record<string, unknown>;
  governance?: Record<string, unknown>;
  public_presentation?: Record<string, unknown>;
  versioning?: Record<string, unknown>;
};
export type ServiceEntry = Readonly<{ id: string; wording: string }>;
export type ServiceModel = Readonly<{
  modules: readonly (typeof SERVICE_MODULE_ORDER)[number][];
  leadership: readonly ServiceEntry[];
  reviews: readonly ServiceEntry[];
  community: readonly ServiceEntry[];
  public: boolean;
}>;
function plain(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const text = value.trim();
  return text && !containsPublicMarker(text) ? text : undefined;
}
function exactOne(
  records: readonly ServiceRecord[],
  id: string,
): ServiceRecord | undefined {
  const matches = records.filter((record) => record.record_id === id);
  return matches.length === 1 ? matches[0] : undefined;
}
function closedPeriod(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const period = value as Record<string, unknown>;
  return (
    typeof period.start === "string" &&
    typeof period.end === "string" &&
    typeof period.precision === "string" &&
    period.open_ended === false
  );
}
function validMetric(value: unknown, category: string): boolean {
  if (category !== "peer_review") return value === null;
  if (value === null) return true;
  if (!value || typeof value !== "object") return false;
  const metric = value as Record<string, unknown>;
  return (
    typeof metric.issuer_id === "string" &&
    metric.metric_name === "review_count" &&
    Number.isInteger(metric.value) &&
    (metric.value as number) > 0 &&
    metric.aggregation_policy === "source_specific_non_additive" &&
    closedPeriod(metric.interval)
  );
}
function project(
  record: ServiceRecord,
  expectedRecord: (typeof SERVICE_RECORDS)[number],
): ServiceEntry | undefined {
  const [id, category, expectedWording, start, end, precision] = expectedRecord;
  const data = record.data ?? {};
  const wording = plain(record.public_presentation?.public_wording);
  const locations = record.public_presentation?.public_location_ids;
  const period = data.period as Record<string, unknown> | undefined;
  const expected = [
    "activity",
    "category",
    "issuer_metric",
    "membership_status",
    "organisation",
    "period",
    "role",
    "status",
  ];
  return record.record_id === id &&
    isPublicRenderable(record) &&
    record.governance?.conflict_state === "none" &&
    record.versioning?.correction_state === "none" &&
    data.category === category &&
    data.status === "historical" &&
    data.membership_status === "not_applicable" &&
    plain(data.activity) === expectedWording &&
    wording === expectedWording &&
    Array.isArray(locations) &&
    locations.length === 1 &&
    locations[0] === "R5" &&
    closedPeriod(data.period) &&
    period?.start === start &&
    period.end === end &&
    period.precision === precision &&
    validMetric(data.issuer_metric, category) &&
    Object.keys(data).sort().join(",") === expected.join(",")
    ? { id: record.record_id, wording }
    : undefined;
}
export function createServiceModel(input: {
  service: readonly ServiceRecord[];
}): ServiceModel {
  const unavailable: ServiceModel = {
    modules: SERVICE_MODULE_ORDER,
    leadership: [],
    reviews: [],
    community: [],
    public: false,
  };
  if (
    input.service.length !== SERVICE_RECORDS.length ||
    input.service.some(
      (record, index) => record.record_id !== SERVICE_IDS[index],
    )
  )
    return unavailable;
  const entries = SERVICE_RECORDS.map((expectedRecord) => {
    const record = exactOne(input.service, expectedRecord[0]);
    return record && project(record, expectedRecord);
  });
  if (entries.some((entry) => !entry)) return unavailable;
  return {
    modules: SERVICE_MODULE_ORDER,
    leadership: entries.slice(0, 3) as ServiceEntry[],
    reviews: entries.slice(3, 8) as ServiceEntry[],
    community: entries.slice(8, 10) as ServiceEntry[],
    public: true,
  };
}
