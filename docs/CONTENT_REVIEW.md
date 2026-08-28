# CNT-009 v1 — independent content review and release recommendation

**Review date:** 19 August 2026 (Asia/Riyadh)  
**Reviewer role:** Independent content reviewer  
**Reviewed output:** `content/approved/`  
**Recommendation:** **G2 PASS**  
**Gate action:** None. This report recommends a decision; it does not close G2.

## 1. Outcome

The English public-content pack is factually supportable, privacy-minimised, rights-safe, substantive on every approved route, and deterministic for downstream implementation. It contains exactly seven route files, one shared-interface file, and one strict JSON manifest.

| Measure | Result |
|---|---:|
| Approved routes | 7 include; 0 conditional; 0 omit; 0 block |
| Route modules | 56 total: 44 include; 12 omit; 0 conditional; 0 block |
| Shared-interface modules | 7 include |
| Approved claim keys | 35 |
| Explicitly suppressed claim keys | 20 |
| Canonical publication lineages | 27 |
| Unique normalized DOIs | 26 |
| Authoritative DOI-less theses | 1 |
| Latest selection | 5 |
| Featured selection | 4 |
| Privacy-safe unique course titles | 19 |
| Marker/privacy scan findings | 0 |

The pack maximises useful public substance without turning uncertain, private, time-sensitive, or rights-restricted values into public claims. All exclusions have an accountable reopening trigger in the manifest.

## 2. Method and decision rule

The review applied the supplied content-governance precedence, evidence registry, editorial direction, information architecture, project brief, publication logs, brand rules, co-branding model, and asset manifest. It then independently checked the underlying public primary sources and the registered protected institutional records.

The decision sequence was:

1. establish the exact visitor task and route module;
2. identify the atomic factual claims required for useful copy;
3. resolve each claim against the strongest available primary source;
4. check identity, date type and precision, currentness, status, privacy, rights, and wording proportionality;
5. include only the minimum supported value needed for the visitor task;
6. omit the value when the required threshold was not met, recording a specific reopening trigger;
7. bind publication-related copy to canonical stable IDs rather than duplicating bibliographic metadata;
8. check the complete output for route substance, accessibility, markers, private values, protected-asset references, forms, analytics, and deterministic counts.

The authoring packs were treated as proposals, not authorities. Where an authoring value and a primary record differed, the primary record controlled. A material example is the teaching list: the supplied proposed list contained titles not present in the registered schedules and omitted titles that were present. The approved list was rebuilt from the schedules.

## 3. Source and currentness matrix

| Subject | Primary source checked | Result used in public copy | Checked |
|---|---|---|---|
| Current appointment and public email | [Taibah University faculty profile](https://www.taibahu.edu.sa/en/employees/120) | Faisal Albalwy; Assistant Professor; institutional email | 19 Aug 2026 |
| Current department and affiliation | [Taibah University Department of Cybersecurity faculty listing](https://www.taibahu.edu.sa/en/college-of-computer-science-and-engineering-in-al-madinah-al-munawwarah-/department-of-cybersecurity/faculty-members) | Department of Cybersecurity; Assistant Professor; Taibah University | 19 Aug 2026 |
| Institutional destination | [Taibah University](https://www.taibahu.edu.sa/) | Text-only affiliation link | 19 Aug 2026 |
| Doctorate and thesis | [The University of Manchester thesis record](https://research.manchester.ac.uk/en/studentTheses/a-blockchain-infrastructure-to-support-smart-contracts-based-cons/) | PhD; award date; exact thesis title | 19 Aug 2026 |
| Public researcher identity | [ORCID 0000-0002-2342-2156](https://orcid.org/0000-0002-2342-2156) | Exact ORCID destination and identity corroboration | 19 Aug 2026 |
| Current scholarly profile | [Google Scholar](https://scholar.google.com/citations?hl=en&user=zkrWLDAAAAAJ&view_op=list_works&sortby=pubdate) | Exact profile destination and discovery context only | 19 Aug 2026 |
| Health-data research theme | Publisher abstracts for DOI `10.3390/systems14040385`, `10.2196/27816`, and `10.1016/j.eswa.2026.132969` | Proportionate route-level theme and summary | 19 Aug 2026 |
| Blockchain research theme | Publisher abstracts for DOI `10.1016/j.aej.2025.06.011` and `10.7717/peerj-cs.2914` | Proportionate route-level theme and summary | 19 Aug 2026 |
| Threat-detection research theme | Publisher abstracts for DOI `10.3390/systems13040231` and `10.3389/fcomp.2024.1387354` | Proportionate route-level theme and summary | 19 Aug 2026 |
| Publication catalogue | Twenty-six DOI registrations plus publisher or repository records; canonical dataset and conflict log | 27 eligible lineages, exact IDs, dates, statuses, and links | 19 Aug 2026 |
| Teaching | Ten registered Taibah University schedules covering academic years 1444–1447 AH | 19 unique reviewed English course titles only | 19 Aug 2026 |
| Technology leadership | Three registered Taibah University appointment decisions | Three one-year terms, described by source-safe Gregorian year | 19 Aug 2026 |
| Peer review | Registered conference, publisher, and journal issuer certificates | Five source-specific records; counts not aggregated | 19 Aug 2026 |
| Community engagement | Registered Taibah University-supervised activity certificates | Two activity lineages, minimal role and dates | 19 Aug 2026 |

All 26 DOI API records and the six principal public identity/institutional URLs returned successful responses during the final check. Crossref exposed no `update-to` or `updated-by` relation for any of the 26 DOI lineages. The one other recorded version relationship is JMIR's version-of-record link to its preprint; the preprint is not counted separately. No correction or retraction notice was found in the reviewed canonical record set.

Protected schedules, decisions, and certificates were used as evidence only. None is linked, reproduced, embedded, or described by a private storage path in visitor copy.

## 4. Resolved public identity and biography

The public identity is consistently **Faisal Albalwy**. The approved appointment is **Assistant Professor, Department of Cybersecurity, Taibah University**. The concise descriptor is **Assistant Professor of Cybersecurity and researcher focused on trustworthy digital systems**. The wording never shortens the rank to “Professor” and does not imply an institutionally endorsed website.

The doctorate is approved as a PhD awarded by The University of Manchester on 14 April 2022. The thesis title is retained exactly as the awarding-institution record presents it: *A BLOCKCHAIN INFRASTRUCTURE TO SUPPORT SMART CONTRACTS-BASED CONSENT MODELS FOR CLINICAL GENOMICS*.

The institutional email `fbalwy@taibahu.edu.sa` is approved because it is currently published by Taibah University and is necessary for the Contact task. No phone number, physical address, private email, contact-form endpoint, response-time promise, or availability claim is included.

The verified profile destinations are Google Scholar, ORCID, and the Taibah faculty profile. Scopus, Web of Science, ResearchGate, and other profile destinations remain omitted because exact current identity-safe destinations were not independently resolved.

### Exact approved claim register

All approved claims were last verified on 19 August 2026. The manifest retains the exact source-artifact keys and reopening triggers for each row.

| Claim key | Approved value | Public location |
|---|---|---|
| `person.display_name` | Faisal Albalwy | All routes; shared identity; metadata |
| `person.descriptor` | Assistant Professor of Cybersecurity and researcher focused on trustworthy digital systems | Home; About |
| `appointment.rank` | Assistant Professor | Home; About |
| `appointment.department` | Department of Cybersecurity | About |
| `affiliation.institution` | Taibah University | Shared footer; Home; About; Contact |
| `affiliation.official_url` | `https://www.taibahu.edu.sa/` | Shared footer; Home; About; Contact |
| `affiliation.personal_site_notice` | This is Faisal Albalwy's personal academic website. Taibah University is shown as his institutional affiliation; this is not an official Taibah University website. | Shared footer; Home; About; Contact |
| `contact.institutional_email` | `fbalwy@taibahu.edu.sa` | Contact; shared footer |
| `profile.google_scholar` | Exact verified Scholar destination in the source matrix | Contact; shared footer; Publications recovery state |
| `profile.orcid` | `https://orcid.org/0000-0002-2342-2156` | Contact; shared footer |
| `profile.taibah` | `https://www.taibahu.edu.sa/en/employees/120` | About; Contact; shared footer |
| `education.phd` | PhD, The University of Manchester | About |
| `education.phd_award_date` | 14 April 2022 | About |
| `education.thesis` | *A BLOCKCHAIN INFRASTRUCTURE TO SUPPORT SMART CONTRACTS-BASED CONSENT MODELS FOR CLINICAL GENOMICS* | About; canonical Publications record |
| `research.theme.health_data` | Privacy-preserving health-data sharing | Home; Research; About |
| `research.theme.blockchain` | Blockchain security and interoperability | Home; Research; About |
| `research.theme.ml_detection` | Machine learning for cyber-threat detection | Home; Research; About |
| `publication.catalogue_27` | 27 canonical work lineages | Publications; Home featured binding |
| `publication.latest_5` | Five exact stable IDs listed in Section 6 | Publications |
| `publication.featured_4` | Four exact stable IDs listed in Section 6 | Home; Publications |
| `publication.future_issue_status` | Available online; issue assigned for 1 December 2026 | Publications |
| `teaching.course_titles_19` | Nineteen exact titles listed in Section 7 | Teaching; Home snapshot |
| `leadership.deputy_ceo_2023` | One-year Deputy CEO for Business Development appointment at Wadi Taibah Company in 2023 | Leadership & Service; About |
| `leadership.ceo_2024` | One-year CEO appointment at Wadi Taibah Company in 2024 | Leadership & Service; About |
| `leadership.ceo_renewal_2025` | One-year renewal of the CEO appointment in 2025 | Leadership & Service; About |
| `service.ieee_reviewer_2026` | Reviewer for the named 2nd IEEE conference, 12–14 February 2026 | Leadership & Service |
| `service.mdpi_reviews_2025_2026` | 45 reviews for MDPI journals during 2025–2026; later certificate dated 14 August 2026 | Leadership & Service |
| `service.eswa_reviews_2023_2025` | 22 reviews for *Expert Systems with Applications*, October 2023–July 2025 | Leadership & Service |
| `service.fgcs_reviews_2023_2025` | 28 reviews for *Future Generation Computer Systems*, November 2023–June 2025 | Leadership & Service |
| `service.jisa_reviews_2025` | Five reviews for the *Journal of Information Security and Applications*, April–May 2025 | Leadership & Service |
| `community.drug_awareness_2023` | Contribution to a Taibah-supervised awareness-of-drug-harms activity, 8–13 July 2023 | Leadership & Service |
| `community.blockchain_workshop_2023` | Contribution to presenting a Taibah-supervised blockchain technology and entrepreneurship workshop, 9–10 August 2023 | Leadership & Service |
| `document.cv_unavailable` | CV unavailable | Home; About; shared header/footer |
| `privacy.no_form` | No contact form | Contact; shared footer |
| `privacy.no_analytics` | No third-party analytics or tracking | Shared footer |

## 5. Research review

Three route-level research themes are approved:

- privacy-preserving health-data sharing;
- blockchain security and interoperability; and
- machine learning for cyber-threat detection.

The descriptions were checked against current publisher abstracts and are deliberately proportionate. They state the questions and methods visible in the publication evidence but do not claim deployment, adoption, funded programmes, clinical use, measured impact, exclusive expertise, or current project status.

Seven stable publication IDs provide the explicit primary evidence bindings in the Research file. These bindings support route explanation and related-publication navigation only. They do not create a complete record-level taxonomy. The catalogue theme filter is therefore omitted until every one of the 27 lineages has a reviewed, stable relationship decision.

Emerging directions, funded projects, named systems, funding, impact, partners, implementation outcomes, and other project assertions remain suppressed.

## 6. Publication reconciliation

The approved publication catalogue contains exactly **27** eligible, verified work lineages: **26** with unique normalized DOIs and **one** authoritative University of Manchester thesis without a DOI.

### Candidate accounting

| Population | Included | Held | Linked or excluded, not counted | Total |
|---|---:|---:|---:|---:|
| Registered candidates | 24 | 1 | 3 | 28 |
| Current Scholar discoveries | 3 | 0 | 0 | 3 |
| **All candidates** | **27** | **1** | **3** | **31** |

The three discoveries were admitted only after publisher and DOI verification. Scholar was used for discovery, never as the sole bibliographic authority.

The held Journal of New Materials for Electrochemical Systems candidate remains outside the approved pack because its claimed DOI is unregistered and the publisher-hosted PDF exposes conflicting pagination. The three registered linked rows are two duplicate profile citations and one conference/in-press form already represented by its version of record. They do not create additional catalogue counts. The JMIR preprint DOI is also linked to, rather than counted separately from, the version of record.

### Record validation

| Check | Result |
|---|---|
| Strict canonical JSON parse | Pass |
| Eligible and verified records | 27 of 27 |
| Unique stable IDs | 27 of 27 |
| Exactly one Faisal identity flag per author list | 27 of 27 |
| At least one explicitly typed date per record | 27 of 27 |
| Correction/retraction state checked | 27 of 27 |
| Unique normalized DOIs | 26 |
| Authoritative DOI-less record | 1 thesis |
| Duplicate canonical lineages | 0 |

The latest set is the first five eligible records in canonical order:

1. `doi-10-1016-j-eswa-2026-132969`
2. `doi-10-3390-systems14040385`
3. `doi-10-32604-cmc-2025-075098`
4. `doi-10-1016-j-aej-2025-06-011`
5. `doi-10-18280-isi-300510`

The featured set is fixed at four topic-balanced, evidence-backed entry points:

1. `doi-10-3390-systems14040385`
2. `doi-10-1016-j-aej-2025-06-011`
3. `doi-10-3389-fcomp-2024-1387354`
4. `doi-10-2196-27816`

Featured status is explained as a discovery aid, not a quality, citation, prestige, ranking, or impact judgement. The latest/featured overlap contains two records and remains justified by different visitor tasks.

The Elsevier record `doi-10-1016-j-eswa-2026-132969` is live online but has an issue assigned for **1 December 2026**, after the review date. Approved copy therefore uses the exact label **Available online; issue assigned for 1 December 2026**. It is not silently described as already issue-published.

The Publications route binds every one of the 27 canonical stable IDs and does not duplicate the title, author, venue, date, DOI, article number, or version logic owned by `content/data/publications.json`.

## 7. Teaching review

The approved teaching list contains exactly 19 unique schedule-backed English titles:

- Algorithms and Data Structures
- Compiler Construction
- Computer Programming
- Computer Security
- Computer Skills
- Cryptography
- Cybersecurity Design Principles
- Cybersecurity Fundamentals
- Field Training
- Graduation Project I
- Graduation Project II
- Information Technology Systems Components
- Introduction to Computing
- Programming I
- Research Project
- Research Seminar
- Selected Topics
- Software Engineering
- Theory of Computation

This list replaces the proposed authoring list because only 10 of its 19 titles matched the titles independently found in the registered schedules. The approved list is deduplicated after reviewing all ten schedule records. English titles were reviewed as public translations of the course-title fields.

No course code, section, room, meeting time, enrolment, student identifier, student name, schedule image, current-offering claim, assessment practice, teaching approach, programme authority, or supervision availability is published.

## 8. Leadership, scholarly service, and community review

The approved historical technology-leadership copy records:

- a one-year Deputy CEO for Business Development appointment at Wadi Taibah Company in 2023;
- a one-year CEO appointment in 2024; and
- a one-year CEO renewal in 2025.

The decisions are used only for the stated roles, organisation, year, and one-year duration. Their Hijri dates were not converted to exact Gregorian days because independent conversion paths were not sufficiently consistent for day-level public precision. The pack does not infer duties, outcomes, team size, partnerships, institutional representation, or current leadership status beyond the stated terms.

The peer-review section contains five source-specific records: one 2026 IEEE conference reviewer record and separate MDPI, *Expert Systems with Applications*, *Future Generation Computer Systems*, and *Journal of Information Security and Applications* review records. The later MDPI certificate controls over the earlier overlapping certificate. Counts remain separate and are not summed into an aggregate.

The community section contains two privacy-safe 2023 activity lineages: contribution to an awareness-of-drug-harms activity and contribution to presenting a blockchain technology and entrepreneurship workshop. Volunteer hours, national identifiers, signatures, QR data, certificate images, and unneeded administrative detail are excluded.

University committee service, professional development, memberships, talks beyond the approved workshop wording, honours, and current-role extrapolation remain suppressed pending stronger item-level review and selection.

## 9. Page-by-page findings and fixes

| Route | Release | Substantive approved content | Material review decision |
|---|---|---|---|
| `/` | Include | Identity, descriptor, affiliation, three themes, featured binding, teaching/service snapshots, About, Contact, CV state, personal-site notice | Removed unsupported metrics, current-project and availability implications; kept the page useful through evidence-backed route summaries |
| `/research` | Include | Three explained themes, seven evidence bindings, related-publication and inquiry pathways | Approved route themes from primary abstracts; omitted project, system, impact and full-catalogue taxonomy claims |
| `/publications` | Include | All 27 canonical IDs, latest five, featured four, controls, statuses, empty/error states, source note | Held candidate and linked versions remain absent from counts; future issue status stays explicit; theme filter omitted |
| `/teaching` | Include | 19 unique course titles, privacy boundary, related routes, inquiry guidance | Rebuilt the course set from ten primary schedules; removed all timetable and student detail |
| `/leadership-service` | Include | Three dated leadership terms, five source-specific review records, two community lineages, inquiry guidance | Prevented currentness extrapolation and aggregate review counts; omitted protected records and personal identifiers |
| `/about` | Include | Short and extended biographies, doctorate/thesis, current appointment, selected leadership context, CV state, affiliation notice | Kept biography proportionate; omitted other degrees, appointment history, honours, metrics and unavailable CV |
| `/contact` | Include | Inquiry guidance, verified institutional email, three profiles, affiliation notice, related routes | Email-only pathway; no form, location, private contact, availability or response-time promise |

Every route supports a clear visitor task and contains more than navigation or placeholder copy. The information architecture and navigation labels are preserved exactly, including **Leadership & Service**.

## 10. Shared interface, English, brand, and accessibility audit

The shared-interface file provides exact navigation, visible and accessible mobile-menu labels, action labels, footer and affiliation language, publication controls and failure states, CV-unavailable treatment, offline behavior, 404 copy, application-error copy, and route metadata.

Review results:

- English is concise, professional, and consistent across routes.
- First-person and third-person voice changes are intentional: visitor-facing research statements use first person; biographical and evidence summaries use third person.
- Terminology is consistent: **Assistant Professor**, **Department of Cybersecurity**, **Taibah University**, **Leadership & Service**, and **CV unavailable**.
- Heading hierarchy is deterministic; each route file and shared-interface inventory has one level-one heading.
- Links have meaningful labels; repeated external actions include “external” in visible or accessible copy.
- Publication title/author/venue/DOI fields are required to remain selectable text in implementation.
- Empty, load-failure, partial-data, offline, 404, and site-error states are present.
- Search and filter labels, defaults, clear action, result count, and no-results recovery are explicit.
- Metadata exists for seven routes plus 404 and application-error states.
- Co-branding remains text-only. No Taibah logo, seal, brand asset, or implied institutional endorsement is approved.
- The personal-site notice and direct university link appear consistently where required and in the shared footer.

## 11. Privacy, rights, and release scan

The eight visitor-copy Markdown files were scanned after final editing.

| Scan class | Findings |
|---|---:|
| Authoring placeholders or verification markers | 0 |
| Registry claim/source/discovery identifiers | 0 |
| Private storage paths | 0 |
| Hashes in visitor copy | 0 |
| Phone values | 0 |
| Private email values | 0 |
| Physical addresses | 0 |
| Student identifiers | 0 |
| Timetable details | 0 |
| National or other identity numbers | 0 |
| Signature or QR payloads | 0 |
| Protected-asset links | 0 |
| Logo image references | 0 |
| Form endpoints | 0 |
| Analytics or tracking identifiers | 0 |
| Unique approved institutional email values | 1 |

The single approved email value is `fbalwy@taibahu.edu.sa`. Negative privacy statements such as “no contact form” or “does not use third-party analytics” are policy declarations, not embedded collection or tracking mechanisms.

Link and identifier checks also passed. Visitor copy contains only the seven frozen internal routes plus the approved Publications anchor; all five unique external visitor destinations returned successful responses. The Publications binding contains exactly the 27 canonical stable IDs in canonical order, with no unknown or duplicate ID. Latest and featured arrays match the selection log and manifest exactly. Seven route metadata records plus 404 and application-error metadata describe only approved substance.

No protected CV or institutional document is public. The CV action is consistently non-clickable and labelled **CV unavailable**. The public pack contains no photograph, signature, QR code, national identifier, schedule, certificate, administrative decision, private folder name, or private document hash.

## 12. Explicit suppressions and reopening triggers

| Suppressed claim key | Reason | Reopen only when |
|---|---|---|
| `education.other_degrees` | No direct awarding-institution primary resolved | Exact awarding-institution record and identity match |
| `appointment.history_start_dates` | Current pages establish current rank, not appointment history | Authoritative appointment record |
| `leadership.current_status` | Dated one-year terms do not establish current status | Fresh accountable-company or appointing-authority record |
| `research.emerging_directions` | No dated owner classification | Dated approved owner statement plus evidence map |
| `research.funded_projects` | Core project, role, funder, status, confidentiality, and rights fields unresolved | Field-authoritative project and award records |
| `research.systems` | No governed identity, role, or maturity record | Canonical record plus role/maturity review |
| `publication.theme_filter` | Not all 27 record relationships approved | Complete primary-abstract review and stable relationship data |
| `teaching.approach` | No source-backed teaching-practice record | Dated approved practice evidence |
| `teaching.assessment` | No source-backed assessment-practice record | Approved course-specific assessment evidence |
| `supervision.records` | Role, privacy, consent, and public necessity unresolved | Authoritative privacy-safe record and applicable consent |
| `supervision.availability` | No fresh capacity or availability statement | Current owner-approved availability record |
| `university.committee_service` | Exact English names, roles, periods, and selection not fully reviewed | Complete decision-level translation and chronology review |
| `service.talks` | A role beyond the approved workshop wording is not established | Issuer-authoritative event role record |
| `professional.development` | Issuer, exact type, dates, status, and selection unresolved | Issuer-primary records and editorial selection |
| `professional.memberships` | Member authority, class, period, and currentness unresolved | Current member-authority record |
| `about.recognition` | No governed recognition claim or selection rationale | Issuer-primary recognition record and selection decision |
| `contact.location` | Unnecessary for the email visitor task | Demonstrated need plus privacy, safety, and freshness review |
| `document.cv_download` | No approved minimised English derivative | Document, privacy, rights, accessibility, metadata, and owner approvals |
| `profile.other_platforms` | Exact destinations not independently resolved | Identity, access, safety, and freshness checks for each profile |
| `metrics.funding_and_impact` | Unnecessary and unsupported at the required atomic threshold | New atomic primary evidence and governed editorial need |

The manifest mirrors these 20 deterministic suppressions and records each route's blocked value classes and freshness triggers.

## 13. Freshness and controlled limitations

Reopen the relevant decision before release, and thereafter at the governing cadence, if any of the following occurs:

- the Taibah faculty profile or department listing changes rank, department, affiliation, name form, email, or availability;
- the Manchester record changes thesis identity or award metadata;
- a DOI/publisher record adds a correction, retraction, expression of concern, new version relationship, date, title, author, or status change;
- the future Elsevier issue date passes or its online/issue status changes;
- canonical catalogue membership or ordering changes, requiring a complete latest-set rerun;
- featured balance or the approved research narrative changes;
- the held JNMES candidate gains a valid registered DOI and coherent publisher metadata;
- an official schedule, appointment, certificate, current-role record, or owner-approved statement supersedes the reviewed evidence;
- a public English CV is produced and separately passes document, privacy, rights, accessibility, metadata, and owner review;
- forms, analytics, assets, co-branding, or route scope are proposed.

Known controlled limitations are intentional: no public CV; no contact form; no record-level theme filter; no public schedule, certificate, decision, logo, or portrait; no current leadership extrapolation; no unverified profile destinations; and no claim about response time, availability, supervision capacity, funding, impact, or institutional endorsement.

## 14. Deterministic pack hashes

SHA-256 values below identify the final visitor-copy inputs. The manifest hash is recorded separately after the visitor-file hash map is final. This report is not self-hashed.

| File | SHA-256 |
|---|---|
| `content/approved/about.md` | `40a0804d4cb44469215e85a0166dcb3f9e74b29a4843a53bdd7913d407b29d90` |
| `content/approved/contact.md` | `eb8a5192ffb970f61b9ba0ba53ce82901aee10cbf2623d348050be692db850ee` |
| `content/approved/home.md` | `e5a7a6c05e5ecbcfe5e77fce7d3d6f47f0bf2c1bcd035e3a4120cd245ae02da3` |
| `content/approved/leadership-service.md` | `8c36eaca7c4b9cc9b10eb1d284dfd0f4ce22ddff06164f26fc5a7b7ae78774c6` |
| `content/approved/publications.md` | `67f15aeee61a4f92cd48f30c249b9cec02d7f860982e341032e4c849ddd8ec08` |
| `content/approved/research.md` | `05de99f0d104fe08cf73886d03fd48d416c15e5755babfd6dde24910fb12d2c7` |
| `content/approved/site-ui.md` | `28ab7924c7a04050e5cab7edae3cd8ae7dc5276790bc1208d46fecbc02ab18fa` |
| `content/approved/teaching.md` | `be63d06567aa7b29d33bad58e8e6646d58d03ab4116ad1afa15afdf6f957838f` |
| `content/approved/APPROVED_COPY_MANIFEST.json` | `d3a27bd307b20b556d89ff71cb699935ddd80ace7394bca5f18ca40fc1df5ad1` |

The machine-readable manifest must parse strictly and its declared route, module, claim, publication, selection, course, and scan counts must equal the arrays it governs. Final validation records the manifest's own SHA-256 outside the manifest to avoid self-reference.

## 15. G2 recommendation and boundary

**Recommendation: G2 PASS.**

The recommendation is based on complete route substance, direct-primary resolution of the core public identity and doctoral facts, exact publication reconciliation, rebuilt schedule-backed teaching content, minimally stated historical leadership/service/community records, deterministic omissions, and a zero-finding marker/privacy/rights scan.

This document does **not** close G2. CNT-009 does not edit the dashboard, authoring packs, evidence registry, canonical publication JSON, publication logs, schemas, design, code, assets, or CV; it does not deploy, change DNS, or begin P9. The authorised gate owner must record any gate transition separately.
