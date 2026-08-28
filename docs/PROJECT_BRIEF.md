# Faisal Albalwy academic website — project brief

**Work package:** STR-001 v1  
**Phase:** P2 — Strategy and Governance  
**Status:** Binding strategy baseline for downstream work; not final page copy or a frozen sitemap  
**Prepared:** 19 August 2026 (Asia/Riyadh)  
**Website language:** English only  
**Identity baseline:** Gate G0 approved; conservative text-only/no-logo affiliation treatment  

## 1. Purpose and definition of success

### 1.1 Project purpose

Create an English-only, research-first personal academic website that helps visitors understand Faisal Albalwy's scholarly direction, inspect the evidence behind his work, and take an appropriate next step. The website must bring research, publications, teaching, leadership and service, biography, contact, and a current public CV into one credible, maintainable experience without presenting the site as an official Taibah University property.

The website is a gateway to verified evidence, not a promotional substitute for it and not an online copy of every record in a CV or evidence archive.

### 1.2 Launch success definition

The release candidate is successful when all of the following are true before any production launch decision:

1. Visitors can quickly understand the verified research agenda and reach supporting publications or project evidence.
2. The highest-priority journeys—exploring research, finding a publication, assessing collaboration fit, contacting Faisal, and downloading the CV—can be completed without ambiguity or a dead end.
3. Every public factual claim is supported, current enough for its purpose, and either verified or suppressed; provisional planning evidence is never presented as established fact.
4. The experience is usable across representative mobile, tablet, desktop, keyboard, zoom, reduced-motion, forced-colors, print, font-failure, and no-image conditions.
5. The site remains unmistakably personal: Faisal is primary, and Taibah University is subordinate text affiliation with a clearly external, same-tab official link.
6. The release meets the measurable project-controlled outcomes in Section 8. Traffic, search ranking, citation growth, and inquiry volume are not launch acceptance measures.
7. QA-008 can issue a release-readiness record with no unresolved launch blocker. Production approval still belongs to the owner at Gate G5; deployment, DNS, and P9 remain outside this brief.

## 2. Locked strategic direction

These decisions bind later strategy, content, design, build, integration, and QA work unless a governed upstream decision is formally reopened.

| Area | Binding decision |
|---|---|
| Product identity | This is Faisal Albalwy's personal academic website, not an official university portal or institutional publication. Faisal is first in visual, reading, accessible, metadata, print, and structured-data order. |
| Language | Public website content, navigation, metadata, downloads, and interaction text are English only. |
| Content priority | Research is the organizing priority. Publications provide the evidence record; teaching, leadership and service, and biography provide supporting dimensions. |
| Navigation benchmark | Use `Research`, `Publications`, `Teaching`, `Leadership & Service`, and `About` as the research-first benchmark. `Contact` and `Download CV` are priority actions. STR-003 owns the final sitemap, labels, routes, and placement. |
| Affiliation | Use visible text affiliation only: `Institutional affiliation: Taibah University`, with one clearly external link to the verified official university destination. The link opens in the same tab. Include personal-site/non-endorsement meaning where context could be ambiguous. |
| Brand assets | No university logo image, placeholder, protected media, supplied pattern, supplied icon, invented lockup, university-derived favicon/avatar, unavailable SVG, or Tosh font. Use Alexandria when its approved local candidate is available and retain the complete system-font fallback. |
| Contact | Institutional email is the only launch contact pathway. No contact form, data capture, response-time promise, open calendar, personal phone number, or private address. |
| Measurement | No third-party analytics or tracking by default. INT-005 must document the no-analytics decision unless a later evidenced need and privacy review formally changes it. |
| Claims | Prior structures, profiles, CV summaries, schedules, decisions, certificates, and scholarly profiles are planning evidence only until governed and reconciled. Unverified, conflicting, stale, private, confidential, or student-identifying claims are suppressed. |
| Release boundary | This brief authorizes no final copy, sitemap freeze, design, schema, code, deployment, production release, domain or DNS change, webmaster submission, gate closure, or P9 work. |

## 3. Audiences, questions, tasks, and evidence needs

Audience priority expresses the website's editorial and task-design emphasis; it does not assert a traffic distribution.

| ID | Priority | Audience segment | Highest-priority questions | Tasks the site must support | Evidence needed before publication |
|---|---|---|---|---|---|
| A1 | Primary | Academic collaborators and research groups | What problems does Faisal work on? Which methods, systems, and outputs demonstrate fit? Where could collaboration begin? | Understand the research agenda; inspect selected systems/projects; follow related publications; initiate a focused inquiry. | Governed research statement; verified themes; reconciled publications; verified project/system status, role, collaborators, code, and outputs where shown. |
| A2 | Primary | Funding bodies and research program managers | Is there relevant capability and a credible delivery record? What role and outcomes can be evidenced? | Evaluate thematic and program fit; inspect funded-work evidence; review the current CV; contact by institutional email. | Verified project sponsor, period, role, status, partners, funding attribution, outputs, and public-use rights; privacy-reviewed CV. |
| A3 | Primary | Prospective postgraduate students and supervisees | Are the research topics relevant? What teaching or supervision experience is verified? Are inquiries currently welcome? | Explore themes and teaching; understand expectations; check a verified availability statement; send an appropriate email inquiry. | Verified course titles; approved supervision records; consent for any student names; current inquiry/availability policy; no unsupported position or funding promise. |
| A4 | Primary | Technology-sector and public-sector partners | How does the work connect research with responsible application? What system maturity or leadership evidence supports a partnership discussion? | Review applied research and systems; assess partnership fit; inspect relevant leadership evidence; make contact. | Verified role, project maturity, outcomes, permissions, and partner visibility; no unsupported deployment, impact, or endorsement claim. |
| A5 | Secondary | Journal editors, publishers, conference organizers, and peer-review communities | What is the authoritative scholarly record and relevant subject expertise? What service or speaking evidence is appropriate? | Find and verify publications; reach scholarly profiles; review selected service; contact for a relevant invitation. | Deduplicated publisher/DOI metadata; source-labelled profile links; verified, non-confidential review/service records; confirmed public biography or speaking material if offered. |
| A6 | Secondary | University peers, evaluators, and academic decision-makers | What is the coherent academic record across research, teaching, leadership, service, and education? | Review the evidence-backed profile; inspect career context; download the current CV; verify the institutional affiliation externally. | Reconciled appointments, education, roles, dates, courses, service, and CV; claim-level provenance; official external affiliation link. |
| A7 | Secondary | Media and event organizers seeking relevant expertise | Is the expertise relevant and is there an accurate, reusable source for background? | Confirm subject fit; read a concise verified biography; access the CV or approved speaker material; contact by email. | Approved biography and topic descriptions; current role evidence; media-use rights for any optional future assets; no inflated expertise or availability claim. |

## 4. Ranked visitor-task matrix

The thresholds below are **proposed project thresholds**, not observed user baselines. STR-003 and later usability work may refine the interaction model, but may not reduce the underlying task priority without documenting the reason.

| Rank | Visitor task | Audiences | Required evidence or content | Observable pre-launch completion condition |
|---:|---|---|---|---|
| 1 | Understand the research agenda and identify supporting evidence | A1, A2, A3, A4, A5, A6, A7 | Verified research framing, themes, selected work, and related publications | From the homepage or any primary entry point, an evaluator can state the research focus and reach at least one supporting record within two purposeful navigation choices. |
| 2 | Find and verify a publication | A1, A2, A5, A6 | Reconciled catalogue; canonical title, authors, year/status, venue, DOI/publisher link, and lawful full-text/code/data links where available | An evaluator can find a specified record by title, author, year, DOI, or theme and reach its canonical external evidence without encountering a duplicate or conflicting record. |
| 3 | Assess research collaboration or funded-program fit | A1, A2, A4 | Evidence-backed themes, projects/systems, roles, maturity/status, outputs, and inquiry pathway | An evaluator can identify a relevant area, distinguish demonstrated work from emerging direction, inspect supporting evidence, and reach the institutional email pathway without an unsupported impact claim. |
| 4 | Contact Faisal for a legitimate professional inquiry | A1, A2, A3, A4, A5, A6, A7 | Clearly labelled inquiry contexts and verified institutional email | `Contact` remains a priority action; an evaluator reaches and activates the institutional email route within two purposeful choices. No form, tracker, private contact detail, or unmaintainable response promise appears. |
| 5 | Download and assess the current public English CV | A2, A5, A6, A7 | One searchable, privacy-reviewed, metadata-scrubbed English CV with visible update date, file type, and size | `Download CV` remains a priority action; the file opens/downloads successfully, is keyboard reachable, and matches the approved public version with no competing CV. |
| 6 | Evaluate teaching and supervision relevance | A3, A6 | Verified course titles, teaching approach, approved supervision records, and current inquiry policy | An evaluator can understand the teaching/supervision scope without seeing timetable data, student-identifying data, unsupported availability, or funding promises. |
| 7 | Evaluate leadership and service evidence | A2, A4, A5, A6 | Verified role names, service categories, periods where evidenced, and carefully scoped outcomes | An evaluator can distinguish leadership, university service, reviewing, and community engagement and reach their evidence context without scans, private identifiers, double-counted totals, or unrelated people. |
| 8 | Verify identity and institutional relationship | A1–A7 | Faisal-first identity; visible text affiliation; verified official university link; personal-site notice | Every representative page/state keeps Faisal primary and the affiliation subordinate. The same-tab external link works, and no mark or wording implies university ownership, endorsement, or clearance. |

## 5. Working value proposition and positioning guardrails

### 5.1 Working strategic proposition

The site should make a credible case that Faisal's academic profile connects an evidence-backed research agenda with teaching, service, and responsible real-world engagement. The distinguishing value is the **clear relationship between scholarly direction, verifiable outputs, and appropriate routes to collaboration**.

This is a strategic proposition, not final public copy. STR-002 must finalize the professional descriptor, voice, naming, and affiliation wording after checking all factual dependencies.

### 5.2 Positioning guardrails

- Lead with research questions, contributions, and evidence; do not lead with titles, metrics, institutional branding, or a complete career chronology.
- Keep research and publications distinct: research explains direction and context; publications provide the canonical scholarly record.
- Present leadership and industry engagement as supported context for research translation, never as proof of impact by association.
- Separate established work, emerging directions, funded projects, research systems, and aspirations through explicit labels.
- Use precise, calm, internationally readable English. Avoid superlatives, generic innovation language, and claims such as `world-leading`, `official`, `endorsed`, `deployed`, or `current` unless exact evidence supports them.
- Treat metrics as optional, source-labelled, dated evidence. Never merge database totals or make traffic/citation figures the site's value proposition.
- Do not turn the homepage into a full CV, publication archive, evidence repository, university portal, or corporate executive profile.
- Calls to action must be specific to a visitor need and must not imply guaranteed availability, funding, partnership, response time, or institutional authority.

## 6. Launch scope, deferrals, and non-goals

### 6.1 Launch content scope

The launch content model must support the following needs. These are content capabilities, not a sitemap freeze; STR-003 decides final destinations and routes.

- A concise homepage gateway that establishes personal identity, verified affiliation, research direction, selected evidence, and priority actions.
- A coherent research presentation with verified themes, selected projects/systems, established-versus-emerging labels, related outputs, and collaboration pathways.
- An authoritative, deduplicated publication catalogue with selected/featured context and canonical external evidence.
- A teaching and supervision presentation limited to verified and privacy-safe records.
- A leadership and service presentation that distinguishes role categories and avoids confidential or duplicative evidence.
- A readable biography and career/education context built only from reconciled facts.
- A short, task-oriented contact experience using institutional email only.
- One current, searchable, accessible, privacy-reviewed English CV.
- Necessary ownership, affiliation, source/update, privacy, and accessibility context.

### 6.2 Launch functional scope

- Research-first navigation using the approved benchmark as input to STR-003.
- Persistent, clearly differentiated `Contact` and `Download CV` actions.
- Publication search and filtering sufficient to find records by title, author, year, DOI, and theme; exact controls remain subject to data and architecture decisions.
- Stable internal navigation, external scholarly/profile links, and same-tab official university affiliation link.
- Responsive, keyboard-operable components and complete loading, empty, no-results, error, unavailable, and 404 recovery states where applicable.
- Local Alexandria candidate with `font-display: swap` when used, plus a complete system-font fallback; no remote font service.
- Search/discovery metadata, canonical references, and structured data only after content and technical governance validates ownership and facts.
- A documented email-only contact decision and a documented no-analytics decision.

### 6.3 Explicit deferrals

- Final English page copy, professional descriptor, biography, and navigation labels until STR-002 and Phase 3.
- Final sitemap, route names, hierarchy, and URL policy until STR-003.
- Claim-level source precedence, inclusion/exclusion, privacy, and freshness rules until STR-004.
- Project or publication detail routes until durable evidence and a clear visitor need justify them.
- BibTeX/RIS export, automated DOI updates, and other advanced publication utilities until the canonical catalogue is stable.
- Approved portraits, activity photography, diagrams, media kits, talks/media libraries, and social assets until rights, consent, provenance, accessibility, and maintenance requirements pass.
- Contact form, scheduling, newsletter, comments, accounts, authentication, database, CMS, personalization, or user-submitted content.
- Analytics or tracking unless a later documented measurement need, data-minimization decision, and privacy review justify a change.
- News, blog, insights, awards, metrics, funding, certifications, memberships, peer review, community service, media, gallery, people, or lab as standalone launch destinations.
- Automatic scraping or live synchronization from scholarly platforms.
- Any university logo image or university-derived favicon/avatar/social treatment. The accepted launch identity is text-only.

### 6.4 Non-goals

- Acting as an official Taibah University site, speaking for the university, or implying institutional endorsement or legal clearance.
- Publishing raw CV/profile evidence, schedules, appointment decisions, certificates, identity documents, private correspondence, signatures, QR codes, document numbers, unrelated committee members, or protected source files.
- Publishing personal contact details, student-identifying information without consent, confidential project material, reviewed-manuscript information, or unauthorized full text.
- Maximizing page views, session duration, social engagement, citation counts, or search ranking as a release criterion.
- Reproducing every CV entry, profile metric, course, service item, image, or historical record.
- Creating final designs, schemas, code, deployment configuration, production infrastructure, release packages, DNS changes, or P9 operations in STR-001.

## 7. Binding quality and governance constraints

### 7.1 Credibility and evidence

- STR-004 and CNT-001 must establish claim-level provenance, authority, verification state, last-verified date, privacy class, and public disposition.
- Public claims require an approved source appropriate to that fact. Conflicts must be reconciled; otherwise the claim is omitted or explicitly qualified.
- Publication metadata must be deduplicated and reconciled against canonical publisher/DOI evidence. Platform totals remain separate, dated, and source-labelled.
- Project funding, roles, status, maturity, partners, outputs, education, appointments, honors, memberships, service dates, review totals, supervision, and availability require exact evidence before use.
- Evidence links must support the adjacent proposition; raw internal evidence files are never the public proof mechanism.
- Final copy may be confident but must not promote unverifiable claims, extrapolate from filenames or file metadata, or turn planning summaries into facts.

### 7.2 Brand and institutional boundary

- Preserve the G0-approved personal-primary, affiliation-secondary hierarchy on every surface and in every output mode.
- Use no university logo image or empty image reserve. Keep the image clear-space and 12–15rem logo test tokens inactive.
- Affiliation uses visible English text and a clearly external official link that opens in the same tab. Link meaning must not depend on color or an icon.
- Use the approved semantic token system and its contrast restrictions. No undocumented official tint, shade, darkened teal, pattern, icon, or institutional primitive may be invented.
- Tosh remains blocked. Alexandria is a licensed project fallback, not the official university typeface; system fallback must preserve the experience.
- Gate G0 project acceptance must never be described as university approval, endorsement, trademark permission, or legal clearance.

### 7.3 Accessibility and inclusive use

- WCAG 2.2 AA is the binding target, verified through automated checks plus manual keyboard, focus, zoom/reflow, screen-reader, contrast, reduced-motion, forced-colors, print, and failure-state review.
- Semantic HTML, ordered headings, landmarks, visible labels, descriptive links, programmatic names/states, and non-color cues are mandatory.
- Every priority journey must be completable by keyboard. Focus is always visible and never depends on hover.
- Content must reflow at 400% zoom and at a 320 CSS-pixel viewport without loss or page-level horizontal scrolling, except an explicitly labelled data region with an accessible alternative.
- Meaning must survive font failure, image blocking, reduced motion, forced colors, and print. No image, animation, chart color, icon, or placeholder may carry essential meaning alone.
- The public CV must be searchable and accessibility-reviewed; link text includes file type, size, and update date.

### 7.4 Privacy and security

- Data minimization is the default: publish only information needed for a defined audience task.
- Institutional email is the sole contact path. No form processor, CAPTCHA, anti-spam vendor, tracking pixel, third-party analytics, embedded social feed, or external font call is allowed at launch.
- Public documents and media require rights/consent review, metadata stripping, hidden-content inspection, safe filenames, and an approved manifest before release.
- External links and downloads must be validated; no private path, source metadata, secret, identifier, or protected file may enter public output.
- Dependency, header, document, and asset security/privacy checks remain release requirements even for a static-first implementation.

### 7.5 Responsive behavior and proposed performance budgets

The following are **proposed project thresholds** for later architecture and QA. They are not measurements of an existing site. TEC-001 or QA-005 may tighten them or document an evidence-backed revision; a revision must preserve fast mobile use and must not silently weaken this brief.

- Validate complete representative routes at 320, 375, 720, and 1440 CSS pixels, plus content-driven breakpoints and 200%/400% zoom.
- Across three repeatable cold-load mobile lab runs of each representative content-heavy route, target a median Largest Contentful Paint no greater than 2.5 seconds, Cumulative Layout Shift no greater than 0.10, and Total Blocking Time no greater than 200 milliseconds.
- Target no more than 500 KB compressed initial transfer per representative HTML route, excluding the user-initiated CV and other on-demand downloads; target no more than 150 KB compressed initial JavaScript.
- Make zero third-party requests for analytics, tracking, fonts, forms, social widgets, or decorative media.
- Load content and core navigation without requiring client-side JavaScript where the selected architecture can reasonably support it; publication enhancement may use progressive client-side behavior without hiding the underlying record.
- Avoid autoplay, parallax, continuous decoration, and layout-dependent media. Respect the G0 reduced-motion and no-image defaults.

### 7.6 Maintainability and freshness

- Recurring publications, themes, projects, courses, roles, service, profile links, metrics, and update dates must use validated structured data or another single-source content method selected later.
- Every time-sensitive claim category must have a named owner, review trigger or cadence, source, and last-verified field before release.
- The site must not require a developer to change a factual record in multiple places. Shared facts and links have one canonical source.
- Metrics and `current`/`present` statements are optional; if used, they must expose their source and observation date and receive a pre-release freshness check.
- News, feeds, dashboards, and live integrations remain deferred because no ongoing publishing owner or operational need has been established.
- A change to a binding Phase 1 source, token, brand asset, affiliation treatment, or exception status reopens G0-dependent validation.

## 8. Measurable launch outcomes

All thresholds in this section are **proposed project acceptance thresholds** unless they restate a binding standard or upstream control. They are evaluated on the frozen release candidate before Gate G5.

| ID | Project-controlled outcome | Proposed threshold | Observable acceptance method | Primary downstream owner |
|---|---|---|---|---|
| O1 | Priority journey completion | 100% of the eight Section 4 journeys complete in QA-008 with no critical assistance, dead end, or launch-blocking defect | Execute scripted academic, funder, student, partner, editor/evaluator, and media journeys; record path, result, friction, and defect severity | STR-003, DES-003, QA-008 |
| O2 | Research-first findability | Tasks ranked 1–5 are reachable from the homepage or a relevant primary entry within two purposeful navigation choices; `Contact` and `Download CV` remain clearly differentiated priority actions | Navigation-tree review, content inventory, keyboard walkthrough, and representative usability tasks | STR-003, CNT-008, DES-003, QA-008 |
| O3 | Evidence coverage and claim safety | 100% of public factual claims have an approved provenance/status record; 0 unresolved, conflicting, private, or unsupported claims are promoted | Join the final content/data set to the evidence registry; sample-check and then page-by-page audit every public claim | STR-004, CNT-001, CNT-009, QA-002 |
| O4 | Publication record integrity | 100% of launch records pass the approved schema and reconciliation rules; 0 known duplicate canonical records; every displayed DOI/publisher link resolves or is deliberately omitted with reason | Schema validation, duplicate/conflict log review, external-link check, and manual sample against publisher evidence | CNT-004, DAT-001/002, QA-002 |
| O5 | Accessibility | WCAG 2.2 AA target; 0 critical or serious automated findings; 100% of priority journeys keyboard-completable; no loss at 200%/400% zoom, 320 px, reduced motion, forced colors, font/image failure, or representative screen-reader review | Automated audit plus manual keyboard, screen-reader, contrast, reflow, state, PDF, and failure-mode checklist | DES-004/005, QA-004 |
| O6 | Responsive and interaction resilience | 0 page-level overflow, clipped essential content, inaccessible control, or broken state at the representative widths/modes in Section 7.5; all applicable default/hover/focus/active/selected/disabled/loading/empty/error states pass | Cross-browser screenshots, DOM overflow checks, interaction tests, zoom/reflow and operational-state walkthrough | BLD-008/009, QA-003 |
| O7 | Performance | Meet the proposed LCP, CLS, TBT, transfer, JavaScript, and zero-third-party-request budgets in Section 7.5 on representative routes, or record and approve a stricter/evidence-backed architecture revision before build | Three-run mobile lab median, bundle/transfer report, request inventory, font test, and performance audit | TEC-001, BLD-008, QA-005 |
| O8 | Privacy and security | 0 exposed restricted identifiers, private evidence, unapproved documents/media, secrets, trackers, form submissions, source paths, or sensitive metadata; contact remains email-only | Public-file inventory, metadata/hidden-content scan, dependency/header review, request capture, and page-by-page privacy audit | STR-004, DAT-003/004, INT-004/005, QA-006 |
| O9 | Brand and institutional integrity | 100% of routes/states preserve Faisal-first, text-only affiliation; 0 logo-image requests, Tosh uses, protected assets, invented identity elements, or endorsement claims | Route/resource scan, DOM/metadata order review, computed-style/token audit, image/font failure test, and QA-009 report | DES-005, BLD-001/009, INT-001/003, QA-009 |
| O10 | CV readiness | Exactly one public English CV; searchable and accessibility-reviewed; update date, file type, and size visible; 0 restricted data or unnecessary metadata | File inventory, PDF text/accessibility/privacy inspection, link/download test, and comparison with approved source | DAT-004, BLD-003, QA-002/004/006 |
| O11 | Freshness ownership | 100% of time-sensitive claim categories and external links have a source, owner, last-verified field, and review trigger/cadence; 0 broken required links at release-candidate review | Governance/schema inspection, owner matrix, last-verified completeness check, and link checker | STR-004/005, DAT-001/002, QA-002 |
| O12 | English-only consistency | 100% of public interface/content, metadata, error states, and the public CV use approved English; no bilingual identity asset or accidental untranslated interface string | String/content inventory, editorial review, metadata inspection, and route/state walkthrough | STR-002, CNT-009, QA-002/004 |

## 9. Post-launch signals and external matters

These items are deliberately separated from project-controlled launch acceptance.

### 9.1 Post-launch signals without analytics

With no analytics, no numerical traffic baseline or conversion target is asserted. The owner may use privacy-preserving operational observations after launch authorization, such as:

- whether incoming institutional-email inquiries identify a clear research, supervision, speaking, or partnership context;
- repeated visitor-reported difficulty finding a publication, CV, or contact route;
- broken-link reports, stale-profile reports, and the time needed to correct them;
- owner adherence to the agreed publication, CV, role, and link review process; and
- evidence-backed requests that justify a deferred capability.

These signals may inform a future backlog. They do not retroactively define launch success and do not authorize analytics, P9 work, or production changes.

### 9.2 External matters that are not project acceptance criteria

- Taibah University institutional, trademark, or legal clearance for a logo image. The accepted launch does not use or require one.
- Search-engine indexing, ranking, knowledge-panel changes, citation growth, or scholarly-platform coverage.
- Number of visits, downloads, inquiries, collaborations, grants, invitations, students, or media requests.
- Availability of optional portraits, partner logos, media, or future branded assets.
- Production hosting, custom domain, DNS, HTTPS, redirects, webmaster tools, deployment, rollback, or any Phase P9 operation.

## 10. Assumptions, dependencies, and risks

### 10.1 Key assumptions

| ID | Assumption | Consequence if false |
|---|---|---|
| AS-01 | Gate G0's accepted text-only/no-logo system remains unchanged. | Reopen affected brand validation before downstream design or build continues. Do not improvise an image mark. |
| AS-02 | The research-first benchmark is directionally approved but the final sitemap remains open until STR-003. | STR-003 may change grouping/routes while preserving the ranked tasks and priority actions. |
| AS-03 | Sufficient evidence exists to publish a useful research-led profile after Phase 3 reconciliation. | Reduce or omit affected claims/sections; never fill gaps with inference or promotional copy. |
| AS-04 | A verified institutional email and official university URL remain available at release review. | Pause the affected contact/affiliation pathway and resolve the verified destination; do not substitute a private contact channel. |
| AS-05 | One current, privacy-reviewed English CV can be approved before build completion. | Keep the Download CV action unavailable with an honest state or hold release readiness; do not publish an older/private version. |
| AS-06 | A static-first, repository-managed implementation can meet the launch tasks. | TEC-001 may select another proportionate approach, but no CMS/database/account system is justified without a documented need. |
| AS-07 | Email-only contact and no analytics remain adequate for the first release. | A later change requires explicit need, privacy, security, retention, vendor, consent, and maintenance review before implementation. |

### 10.2 Dependencies

- **Upstream:** Approved G0 corpus, especially `IDENTITY_DECISION_LOG.md`, `COBRANDING_MODEL.md`, `WEB_BRAND_SPEC.md`, `WEB_ASSET_MANIFEST.md`, `BRAND_APPLICATION_BOARD.html/.pdf`, `BRAND_COMPLIANCE_REVIEW.md`, and `content/brand/tokens.json`.
- **Strategy:** STR-002 editorial direction; STR-003 information architecture; STR-004 content governance; STR-005 delivery ownership and risk tracking.
- **Content:** CNT-001 evidence registry and CNT-002–009 reconciled, reviewed English copy and data.
- **Data/assets/technical:** DAT-001/002 schemas and validated data; DAT-003/004 public-asset and CV controls; TEC-001 architecture decision.
- **Design/build:** DES-001–005 and BLD-001–009 must preserve the brief's priority, evidence, brand, privacy, accessibility, and state boundaries.
- **Integration/QA:** INT-001–005 and QA-001–009 must verify discoverability, ownership semantics, email-only/no-analytics defaults, claim safety, accessibility, performance, privacy/security, and identity compliance.

### 10.3 Risk register

| ID | Risk | Effect | Required control / owner |
|---|---|---|---|
| R-01 | Conflicting or stale biographical, role, project, service, metric, or availability claims | Loss of credibility; misleading public record | STR-004 rules; CNT-001 claim registry; reconcile or suppress; CNT-009 and QA-002 independent review |
| R-02 | Duplicate, malformed, or date-conflicted publication records | Visitors cannot reliably find or cite work | CNT-004 canonical reconciliation and conflict log; schema checks; canonical publisher/DOI evidence |
| R-03 | Institutional branding is read as ownership or endorsement | Reputational/legal ambiguity | Text-only affiliation, Faisal-first order, same-tab official link, personal-site notice, no image mark; QA-009 |
| R-04 | CV or evidence files expose identifiers, hidden text, metadata, signatures, or QR codes | Privacy/security harm | DAT-003/004 manifest, redaction/suppression, metadata/hidden-content scan, QA-006 |
| R-05 | Student, collaborator, partner, sponsor, photo, code, or project information lacks consent/rights | Privacy, confidentiality, or copyright breach | Publish only approved text/evidence; require consent/rights/provenance; omit when unresolved; STR-004 and DAT-003 |
| R-06 | Site breadth dilutes the research-first proposition | Visitors cannot understand the profile or choose a next step | Enforce ranked task matrix, curated homepage, scope limits, and STR-003 IA testing |
| R-07 | Publication search/filter or long academic content harms mobile/accessibility performance | Core research evidence becomes hard to use | Progressive enhancement, structured data, long-content tests, proposed budgets, QA-003/004/005 |
| R-08 | No ongoing owner is assigned to volatile claims and links | The site becomes stale after release | STR-005 owner matrix; schema last-verified fields; release completeness check; maintenance trigger handoff |
| R-09 | No analytics leads stakeholders to request unsupported traffic claims | Vanity goals displace task/evidence quality | Preserve no-analytics decision; use pre-launch task acceptance and qualitative owner-observed signals only |
| R-10 | Missing portrait, logo, icon, pattern, or media is treated as a design gap | Unlicensed or fabricated assets enter the site | No-image layouts are complete by design; text, typography, whitespace, and accessible structure carry meaning |
| R-11 | Institutional email, external profile, DOI, or CV links break | Priority journeys fail | Automated and manual link validation; visible unavailable/recovery state; pre-release freshness owner |
| R-12 | Scope drifts into launch operations | Unauthorized external change | Stop at Gate G5; no deployment, production, DNS, webmaster, or P9 action under this brief |

## 11. Downstream handoffs

| Work package / phase | Binding handoff from STR-001 |
|---|---|
| **STR-002 — Editorial direction** | Finalize the English professional descriptor, value proposition wording, voice, naming, relationship language, and calls to action. Preserve research-first emphasis, Faisal-first identity, neutral text affiliation, personal-site meaning, evidence-first tone, and prohibited endorsement/inflation claims. Do not treat the working proposition as final copy. |
| **STR-003 — Information architecture** | Freeze sitemap, navigation, routes, utility placement, and deferred destinations against the eight ranked tasks. Begin with the five-item research-first benchmark and priority Contact/CV actions, but document any change. Demonstrate that tasks 1–5 meet the proposed two-choice findability threshold without duplicative or misleading routes. |
| **STR-004 — Content governance** | Define source precedence, claim states, public/private classifications, verification and last-verified rules, conflict handling, consent/rights, metrics policy, link checking, and suppression criteria. Ensure every audience evidence need can resolve to a governed source. |
| **STR-005 — Delivery tracker** | Assign owners, dependencies, status, risk, review cadence, and acceptance evidence for every launch outcome and risk in this brief. Do not recast P9 or production work as current scope. |
| **Phase 3 — Content** | Build the claim registry before final copy. Produce only verified English content; clearly separate established work from emerging direction; reconcile publications; suppress unresolved facts; independently review the full copy pack before G2. |
| **Phase 4 — Data/assets/technical** | Use validated structured data and one canonical source per recurring fact. Prepare one safe English CV. Document static-first architecture, local font/fallback, email-only contact, no-analytics state, progressive publication enhancement, and the proposed performance budgets. |
| **Phase 5 — Design** | Design research-first, no-image-complete journeys and all operational states. Preserve G0 tokens, text-only affiliation, Faisal-first hierarchy, accessible content density, long academic metadata, and representative viewport/zoom modes. |
| **Phase 6 — Build** | Implement the approved IA/content/design without adding claims, routes, assets, tracking, forms, or identity treatments by convenience. Preserve semantic HTML, progressive enhancement, fallback behavior, and single-source content. |
| **Phase 7 — Integration** | Keep metadata and structured data Faisal-first; do not name Taibah University as site owner/publisher. Use no university favicon/logo in social output. Implement the approved email-only pathway and explicitly record the no-analytics decision. |
| **Phase 8 — QA** | Test every outcome in Section 8 against one frozen release candidate. QA-008 reports visitor-journey readiness and known issues; QA does not authorize production. Stop at manual Gate G5. |

## 12. STR-001 acceptance record

| Acceptance requirement | Evidence in this brief | Result |
|---|---|---|
| Internally consistent with G0 and autonomous policy | Sections 2, 7.2, 9.2, 10, and 11 preserve the text-only/no-logo system, Gate G5 stop, and P9 exclusion | Pass |
| English-only and research-first | Sections 1, 2, 4, 5, 6, and O12 | Pass |
| Every audience maps to priority tasks and evidence | Section 3 maps A1–A7; Section 4 maps each ranked task back to those IDs and its evidence | Pass |
| Measurable, non-vanity outcomes | Sections 8 and 9 separate observable pre-launch acceptance from traffic/post-launch/external signals | Pass |
| Scope, deferrals, and non-goals explicit | Section 6 | Pass |
| Brand, privacy, and accessibility constraints binding | Section 7 and outcomes O5, O8, and O9 | Pass |
| Unverifiable claims not promoted | Sections 2, 5.2, 7.1, O3, and risks R-01/R-02 | Pass |
| Downstream handoffs unambiguous | Section 11 identifies STR-002/003/004/005 and Phases 3–8 responsibilities | Pass |
| Sitemap and final copy not prematurely frozen | Status line; Sections 2, 5.1, 6.1, 6.3, and STR-002/003 handoffs | Pass |
| No deployment, DNS, gate closure, or P9 authorization | Sections 1.2, 2, 6.4, 9.2, R-12, and Phase 8 handoff | Pass |

**STR-001 result:** the binding project brief is complete. G1 remains outside this step and depends on STR-002, STR-003, and STR-004 passing their own acceptance checks.
