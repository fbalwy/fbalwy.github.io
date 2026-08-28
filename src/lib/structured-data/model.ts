import { canonicalFor, metadataFor } from "../discovery/metadata.mjs";

const SCHEMA_CONTEXT = ["https:", "", "schema.org"].join("/");
const PUBLICATION_COUNT = 27;
const PERSON_NAME = "Faisal Albalwy";
const STRUCTURED_ROUTE_PATHS = [
  "/",
  "/research",
  "/publications",
  "/teaching",
  "/leadership-service",
  "/about",
] as const;

type Publication = Readonly<{
  id: string;
  fragment: string;
  title: string;
  authors: readonly string[];
  faisalAuthorIndex: number;
  type: string;
  doi?: string;
}>;
type SiteModel = Readonly<{
  public: boolean;
  actions: Readonly<{
    profiles: readonly Readonly<{ href: string; label: string }>[];
  }>;
  routes: Readonly<{
    home: Readonly<{ public: boolean }>;
    research: Readonly<{
      public: boolean;
      themes: readonly Readonly<{
        title: string;
        summary: string;
        publications: readonly Readonly<{ id: string; title: string }>[];
      }>[];
    }>;
    publications: Readonly<{
      public: boolean;
      records: readonly Publication[];
    }>;
    teaching: Readonly<{
      public: boolean;
      courses: readonly Readonly<{ id: string; title: string }>[];
    }>;
    service: Readonly<{
      public: boolean;
      leadership: readonly Readonly<{ id: string; wording: string }>[];
      reviews: readonly Readonly<{ id: string; wording: string }>[];
      community: readonly Readonly<{ id: string; wording: string }>[];
    }>;
    about: Readonly<{ public: boolean }>;
    contact: Readonly<{ public: boolean }>;
  }>;
}>;

type JsonObject = Readonly<Record<string, unknown>>;
export type StructuredDocument = Readonly<{
  "@context": string;
  "@graph": readonly JsonObject[];
}>;

function safeText(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.trim() === value &&
    value.length > 0 &&
    value.length <= 2_000 &&
    !/[<>]/.test(value)
  );
}

function safeApprovedProfileUrl(value: unknown): value is string {
  try {
    const url = new URL(String(value));
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.hash &&
      [...url.searchParams.keys()].every(
        (key) => !/^(?:utm_.+|fbclid|gclid|mc_.+)$/i.test(key),
      )
    );
  } catch {
    return false;
  }
}

function safeIdentifier(value: unknown): value is string {
  try {
    const url = new URL(String(value));
    return (
      url.protocol === "https:" && !url.username && !url.password && !url.search
    );
  } catch {
    return false;
  }
}

function personId(origin: string) {
  return `${canonicalFor(origin, "/")}#person`;
}

function breadcrumb(
  origin: string,
  pathname: (typeof STRUCTURED_ROUTE_PATHS)[number],
) {
  if (pathname === "/") return undefined;
  const current = metadataFor(pathname);
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalFor(origin, pathname)}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: metadataFor("/").title,
        item: canonicalFor(origin, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: current.title,
        item: canonicalFor(origin, pathname),
      },
    ],
  } as const;
}

function items(values: readonly JsonObject[]) {
  return {
    "@type": "ItemList",
    numberOfItems: values.length,
    itemListElement: values.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
  } as const;
}

function validPublications(records: readonly Publication[]): boolean {
  if (records.length !== PUBLICATION_COUNT) return false;
  const ids = new Set<string>();
  const fragments = new Set<string>();
  return records.every(
    (record) =>
      safeText(record.id) &&
      safeText(record.fragment) &&
      record.fragment === `publication-${record.id}` &&
      safeText(record.title) &&
      record.authors.length > 0 &&
      record.authors.every(safeText) &&
      Number.isInteger(record.faisalAuthorIndex) &&
      record.faisalAuthorIndex >= 0 &&
      record.faisalAuthorIndex < record.authors.length &&
      safeText(record.type) &&
      (record.doi === undefined ||
        /^10\.\d{4,9}\/[a-z0-9._;()/:+-]+$/i.test(record.doi)) &&
      ids.add(record.id) &&
      fragments.add(record.fragment),
  );
}

function isCompletePublicSite(site: SiteModel): boolean {
  const routes = site.routes;
  return (
    site.public &&
    routes.home.public &&
    routes.research.public &&
    routes.publications.public &&
    routes.teaching.public &&
    routes.service.public &&
    routes.about.public &&
    routes.contact.public &&
    site.actions.profiles.length === 3 &&
    site.actions.profiles.every(
      (profile) =>
        safeApprovedProfileUrl(profile.href) && safeText(profile.label),
    ) &&
    validPublications(routes.publications.records)
  );
}

function collectionPage(
  origin: string,
  pathname: Exclude<(typeof STRUCTURED_ROUTE_PATHS)[number], "/">,
  mainEntity: JsonObject,
): JsonObject[] {
  const canonical = canonicalFor(origin, pathname);
  const breadcrumbNode = breadcrumb(origin, pathname);
  return [
    {
      "@type": "CollectionPage",
      "@id": `${canonical}#collection`,
      name: metadataFor(pathname).title,
      url: canonical,
      about: { "@id": personId(origin) },
      mainEntity,
    },
    ...(breadcrumbNode ? [breadcrumbNode] : []),
  ];
}

/**
 * Returns no document until the one integrated release decision validates the
 * complete site. It deliberately never models Contact, 404, CV, or unavailable
 * routes as an entity.
 */
export function structuredDataForRoute(input: {
  site: SiteModel;
  origin: string;
  pathname: string;
}): StructuredDocument | undefined {
  if (
    !STRUCTURED_ROUTE_PATHS.includes(
      input.pathname as (typeof STRUCTURED_ROUTE_PATHS)[number],
    ) ||
    !isCompletePublicSite(input.site)
  )
    return undefined;

  const { origin, site } = input;
  const pathname = input.pathname as (typeof STRUCTURED_ROUTE_PATHS)[number];
  const canonical = canonicalFor(origin, pathname);
  const person = personId(origin);
  let graph: JsonObject[];
  if (pathname === "/") {
    graph = [
      {
        "@type": "Person",
        "@id": person,
        name: PERSON_NAME,
        url: canonical,
        sameAs: site.actions.profiles.map((profile) => profile.href),
      },
      {
        "@type": "ProfilePage",
        "@id": `${canonical}#profile`,
        name: metadataFor(pathname).title,
        url: canonical,
        mainEntity: { "@id": person },
      },
    ];
  } else if (pathname === "/research") {
    const themes = site.routes.research.themes;
    if (
      themes.length !== 3 ||
      themes.some(
        (theme) =>
          !safeText(theme.title) ||
          !safeText(theme.summary) ||
          theme.publications.length === 0 ||
          theme.publications.some(
            (publication) =>
              !safeText(publication.id) || !safeText(publication.title),
          ),
      )
    )
      return undefined;
    graph = collectionPage(
      origin,
      pathname,
      items(
        themes.map((theme) => ({
          "@type": "DefinedTerm",
          name: theme.title,
          description: theme.summary,
          subjectOf: theme.publications.map((publication) => ({
            "@id": `${canonicalFor(origin, "/publications")}#publication-${publication.id}`,
          })),
        })),
      ),
    );
  } else if (pathname === "/publications") {
    const records = site.routes.publications.records;
    graph = collectionPage(
      origin,
      pathname,
      items(
        records.map((record) => ({
          "@type":
            record.type === "doctoral_thesis" ? "Thesis" : "ScholarlyArticle",
          "@id": `${canonical}#${record.fragment}`,
          name: record.title,
          ...(record.doi
            ? {
                identifier: {
                  "@type": "PropertyValue",
                  propertyID: "DOI",
                  value: record.doi,
                },
              }
            : {}),
          author: record.authors.map((author, index) =>
            index === record.faisalAuthorIndex
              ? { "@id": person }
              : { "@type": "Person", name: author },
          ),
        })),
      ),
    );
  } else if (pathname === "/teaching") {
    const courses = site.routes.teaching.courses;
    if (
      courses.length !== 19 ||
      courses.some((course) => !safeText(course.id) || !safeText(course.title))
    )
      return undefined;
    graph = collectionPage(
      origin,
      pathname,
      items(
        courses.map((course) => ({ "@type": "Course", name: course.title })),
      ),
    );
  } else if (pathname === "/leadership-service") {
    const service = [
      ...site.routes.service.leadership,
      ...site.routes.service.reviews,
      ...site.routes.service.community,
    ];
    if (
      service.length !== 10 ||
      service.some((entry) => !safeText(entry.id) || !safeText(entry.wording))
    )
      return undefined;
    graph = collectionPage(
      origin,
      pathname,
      items(
        service.map((entry) => ({ "@type": "Thing", name: entry.wording })),
      ),
    );
  } else {
    graph = [
      {
        "@type": "ProfilePage",
        "@id": `${canonical}#profile`,
        name: metadataFor(pathname).title,
        url: canonical,
        mainEntity: { "@id": person },
      },
      breadcrumb(origin, pathname)!,
    ];
  }
  return { "@context": SCHEMA_CONTEXT, "@graph": graph };
}

const allowedTypes = new Set([
  "Person",
  "ProfilePage",
  "BreadcrumbList",
  "ListItem",
  "CollectionPage",
  "ItemList",
  "DefinedTerm",
  "ScholarlyArticle",
  "Thesis",
  "PropertyValue",
  "Course",
  "Thing",
]);
const allowedProperties = new Set([
  "@context",
  "@graph",
  "@type",
  "@id",
  "name",
  "url",
  "sameAs",
  "mainEntity",
  "itemListElement",
  "numberOfItems",
  "position",
  "item",
  "about",
  "description",
  "subjectOf",
  "identifier",
  "propertyID",
  "value",
  "author",
]);

/** Independent local allowlist validator; schema.org has no bundled offline schema. */
export function validateStructuredDocument(value: unknown): boolean {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const document = value as Record<string, unknown>;
  if (
    document["@context"] !== SCHEMA_CONTEXT ||
    !Array.isArray(document["@graph"]) ||
    document["@graph"].length === 0
  )
    return false;
  const ids = new Set<string>();
  const walk = (node: unknown): boolean => {
    if (Array.isArray(node)) return node.every(walk);
    if (!node || typeof node !== "object")
      return typeof node === "string" || typeof node === "number";
    const object = node as Record<string, unknown>;
    if (Object.keys(object).some((key) => !allowedProperties.has(key)))
      return false;
    if (
      "@type" in object &&
      (!safeText(object["@type"]) || !allowedTypes.has(object["@type"]))
    )
      return false;
    if ("@id" in object) {
      const isEntityDefinition = Object.keys(object).some(
        (key) => !key.startsWith("@"),
      );
      if (
        !safeIdentifier(object["@id"]) ||
        (isEntityDefinition && !ids.add(object["@id"]))
      )
        return false;
    }
    return Object.entries(object).every(([key, child]) =>
      key.startsWith("@") ? true : walk(child),
    );
  };
  return (document["@graph"] as unknown[]).every(walk);
}

export function serializeStructuredDocument(
  document: StructuredDocument,
): string {
  if (!validateStructuredDocument(document))
    throw new Error(
      "Structured-data document failed the local allowlist validator.",
    );
  return JSON.stringify(document).replace(/<\/script/gi, "<\\/script");
}
