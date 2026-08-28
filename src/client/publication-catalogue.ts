import {
  EMPTY_PUBLICATION_QUERY,
  boundPublicationQuery,
  copyVisibleCitation,
  parsePublicationQuery,
  publicationMatches,
  reconcilePublicationFragment,
  serializePublicationQuery,
  type PublicationQueryState,
} from "../lib/publications/query";
import { PUBLICATION_OPERATIONAL_COPY } from "../lib/publications/model";

type RecordElement = HTMLElement & {
  dataset: DOMStringMap & {
    publicationRecord?: string;
    search?: string;
    year?: string;
    type?: string;
  };
};

function requiredElement<T extends Element>(
  root: ParentNode,
  selector: string,
): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error("Publication enhancement is unavailable.");
  return element;
}

function initializeCatalogue(root: HTMLElement): void {
  const controls = requiredElement<HTMLElement>(
    root,
    "[data-publication-controls]",
  );
  const query = requiredElement<HTMLInputElement>(
    root,
    "[data-publication-query]",
  );
  const year = requiredElement<HTMLSelectElement>(
    root,
    "[data-publication-year]",
  );
  const type = requiredElement<HTMLSelectElement>(
    root,
    "[data-publication-type]",
  );
  const clear = requiredElement<HTMLButtonElement>(
    root,
    "[data-clear-filters]",
  );
  const clearNoResults = requiredElement<HTMLButtonElement>(
    root,
    "[data-clear-no-results]",
  );
  const summary = requiredElement<HTMLElement>(root, "[data-result-summary]");
  const activeFilters = requiredElement<HTMLUListElement>(
    root,
    "[data-active-filters]",
  );
  const noResults = requiredElement<HTMLElement>(root, "[data-no-results]");
  const invalidQuery = requiredElement<HTMLElement>(
    root,
    "[data-invalid-query-state]",
  );
  const catalogueHeading = requiredElement<HTMLElement>(
    root,
    "#publication-catalogue-heading",
  );
  const citationStatus = requiredElement<HTMLElement>(
    root,
    "[data-citation-status]",
  );
  const offlineState = requiredElement<HTMLElement>(
    root,
    "[data-offline-state]",
  );
  const records = Array.from(
    root.querySelectorAll<RecordElement>("[data-publication-record]"),
  );
  if (!records.length)
    throw new Error("Publication enhancement is unavailable.");

  const ids = new Set<string>();
  for (const record of records) {
    const id = record.dataset.publicationRecord;
    if (
      !id ||
      ids.has(id) ||
      !record.dataset.search ||
      !record.dataset.year ||
      !record.dataset.type
    )
      throw new Error("Publication enhancement is unavailable.");
    ids.add(id);
  }

  for (const record of records) {
    const citation = record.querySelector<HTMLElement>(
      "[data-visible-citation]",
    );
    const actions = record.querySelector<HTMLElement>(".publication-actions");
    if (!citation || !actions || !citation.id) continue;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.copyCitation = record.id;
    button.setAttribute("aria-describedby", citation.id);
    button.textContent = "Copy citation";
    actions.append(button);
  }

  const options = {
    years: new Set(
      Array.from(year.options, (option) => option.value).filter(Boolean),
    ),
    types: new Set(
      Array.from(type.options, (option) => option.value).filter(Boolean),
    ),
    themes: new Set<string>(),
  };

  let currentState: PublicationQueryState = EMPTY_PUBLICATION_QUERY;

  function setControls(state: PublicationQueryState): void {
    query.value = state.q;
    year.value = options.years.has(state.year) ? state.year : "";
    type.value = options.types.has(state.type) ? state.type : "";
  }

  function updateUrl(
    state: PublicationQueryState,
    mode: "push" | "replace",
  ): void {
    const serialized = serializePublicationQuery(state);
    const url = `${window.location.pathname}${serialized ? `?${serialized}` : ""}${window.location.hash}`;
    window.history[mode === "push" ? "pushState" : "replaceState"](
      null,
      "",
      url,
    );
  }

  function renderActiveFilters(state: PublicationQueryState): void {
    activeFilters.replaceChildren();
    const entries: readonly [keyof PublicationQueryState, string, string][] = [
      ["q", "Search", state.q ? `“${state.q}”` : ""],
      ["year", "Year", state.year],
      [
        "type",
        "Publication type",
        type.selectedOptions[0]?.textContent?.trim() ?? "",
      ],
    ];
    for (const [key, label, value] of entries) {
      if (!state[key]) continue;
      const item = document.createElement("li");
      const text = document.createElement("span");
      text.textContent = `${label}: ${value}`;
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.removePublicationFilter = key;
      button.textContent = "Remove";
      button.setAttribute(
        "aria-label",
        `Remove ${label.toLocaleLowerCase("en")} filter: ${value}`,
      );
      item.append(text, button);
      activeFilters.append(item);
    }
    activeFilters.hidden = activeFilters.childElementCount === 0;
  }

  function applyState(
    state: PublicationQueryState,
    {
      announce = false,
      history,
    }: Readonly<{
      announce?: boolean;
      history?: "push" | "replace";
    }> = {},
  ): number {
    currentState = state;
    setControls(state);
    let shown = 0;
    for (const record of records) {
      const matches = publicationMatches(
        {
          searchText: record.dataset.search ?? "",
          year: Number(record.dataset.year),
          type: record.dataset.type ?? "",
        },
        state,
      );
      record.hidden = !matches;
      if (matches) shown += 1;
    }
    const filtered = Boolean(
      state.q || state.year || state.type || state.theme,
    );
    summary.textContent = filtered
      ? `${shown} of ${records.length} ${shown === 1 ? "publication" : "publications"}`
      : `${records.length} publications`;
    renderActiveFilters(state);
    clear.disabled = !filtered;
    noResults.hidden = shown !== 0;
    if (history) updateUrl(state, history);
    if (announce) summary.setAttribute("aria-live", "polite");
    return shown;
  }

  function stateFromControls(): PublicationQueryState {
    return Object.freeze({
      q: boundPublicationQuery(query.value),
      year: options.years.has(year.value) ? year.value : "",
      type: options.types.has(type.value) ? type.value : "",
      theme: "",
    });
  }

  function commitControls(): void {
    invalidQuery.hidden = true;
    applyState(stateFromControls(), { announce: true, history: "push" });
  }

  function clearFilters(focus: "search" | "heading"): void {
    invalidQuery.hidden = true;
    applyState(EMPTY_PUBLICATION_QUERY, { announce: true, history: "push" });
    (focus === "search" ? query : catalogueHeading).focus();
  }

  function focusFragment(): void {
    let fragment = "";
    try {
      fragment = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      invalidQuery.hidden = false;
      applyState(EMPTY_PUBLICATION_QUERY, { history: "replace" });
      catalogueHeading.focus();
      return;
    }
    const reconciliation = reconcilePublicationFragment(
      ids,
      fragment,
      currentState,
    );
    if (!fragment) return;
    if (reconciliation.invalid || !reconciliation.targetId) {
      invalidQuery.hidden = false;
      applyState(EMPTY_PUBLICATION_QUERY, { history: "replace" });
      catalogueHeading.focus();
      return;
    }
    const target = records.find(
      (record) => record.dataset.publicationRecord === reconciliation.targetId,
    );
    if (!target) return;
    if (serializePublicationQuery(currentState))
      applyState(reconciliation.state, { announce: true, history: "replace" });
    target.hidden = false;
    const heading = target.querySelector<HTMLElement>(
      "[data-publication-heading]",
    );
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start" });
  }

  query.addEventListener("change", commitControls);
  query.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitControls();
    }
  });
  year.addEventListener("change", commitControls);
  type.addEventListener("change", commitControls);
  clear.addEventListener("click", () => clearFilters("search"));
  clearNoResults.addEventListener("click", () => clearFilters("heading"));
  activeFilters.addEventListener("click", (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>(
      "[data-remove-publication-filter]",
    );
    const key = button?.dataset.removePublicationFilter;
    if (!button || !key || !["q", "year", "type"].includes(key)) return;
    const next = { ...currentState, [key]: "" };
    applyState(Object.freeze(next), { announce: true, history: "push" });
    ({ q: query, year, type })[key as "q" | "year" | "type"].focus();
  });
  root.addEventListener("click", async (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>(
      "[data-copy-citation]",
    );
    if (!button) return;
    const citation = document.getElementById(
      `${button.dataset.copyCitation ?? ""}-citation`,
    );
    const value = citation?.textContent ?? "";
    const copied = await copyVisibleCitation(value, (text) =>
      navigator.clipboard.writeText(text),
    );
    citationStatus.textContent = copied
      ? PUBLICATION_OPERATIONAL_COPY.copied
      : PUBLICATION_OPERATIONAL_COPY.copyFailed;
  });

  window.addEventListener("popstate", () => {
    const parsed = parsePublicationQuery(
      new URLSearchParams(window.location.search),
      options,
    );
    invalidQuery.hidden = !parsed.invalid;
    applyState(parsed.state, { announce: true });
    focusFragment();
  });
  window.addEventListener("hashchange", focusFragment);
  const updateOffline = (): void => {
    offlineState.hidden = navigator.onLine;
  };
  window.addEventListener("online", updateOffline);
  window.addEventListener("offline", updateOffline);

  const parsed = parsePublicationQuery(
    new URLSearchParams(window.location.search),
    options,
  );
  invalidQuery.hidden = !parsed.invalid;
  applyState(parsed.state, { history: "replace" });
  controls.hidden = false;
  updateOffline();
  focusFragment();
}

for (const root of document.querySelectorAll<HTMLElement>(
  "[data-publication-catalogue]",
)) {
  try {
    initializeCatalogue(root);
  } catch {
    // Fail closed: controls remain hidden and the complete server-rendered list
    // remains unchanged. Diagnostics are deliberately not exposed or logged.
  }
}
