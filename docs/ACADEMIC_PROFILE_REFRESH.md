# Academic profile refresh

## Design recommendation

Retain one English-language page with clear subsections. Use a restrained
editorial treatment: a serif nameplate, readable sans-serif profile text,
white background, navy text, blue links, and fine engraved section rules.
The reference is [Peter Freeman's Manchester profile](https://research.manchester.ac.uk/en/persons/peter.j.freeman).
Borrow its information hierarchy, not its university branding, navigation
tabs, sidebar, or personal content.

The implemented header places the name and academic title first, followed by
a visible email address and the university address. Academic-profile icons
and the linked citation-metrics snapshot remain below. The contact QR stays
on the right on desktop and first, centred, on mobile.

## Single-page structure

1. **Identity and contact:** name, role, email, university address, profile
   icons, metrics, and contact QR.
2. **Academic profile:** a short research introduction, academic affiliations,
   education and qualifications, and external positions. Each subsection has
   a narrow label column and a readable content column on desktop, stacking
   naturally on mobile.
3. **Research interests.**
4. **Prospective research students.**
5. **Publications:** retain the existing citation format, author emphasis,
   italic publication titles, and ranking-report links.
6. **Courses taught**, followed by **Grants and funding** when available.
7. **Work experience**, **University committee service**, and **Scholarly peer review**.

Two optional refinements for a later owner decision:

- A compact set of in-page section links if navigation through the publication
  list becomes cumbersome; these would scroll, not open separate pages.
- A supplied professional portrait, only if desired. The text-first header
  is complete without one.

Avoid decorative diagrams, large coloured panels, sliders, separate tabs,
duplicated qualifications sections, or additional dashboards.

## Content evidence and date handling

Checked on 5 September 2026.

- **Citation metrics:** the public Google Scholar profile's “All” column
  showed 645 citations, h-index 11, and i10-index 12. The snapshot and
  observation date were refreshed before the site update.
- **Current affiliation:** Assistant Professor, Department of Cybersecurity,
  College of Computer Science and Engineering, Taibah University. Sources:
  [faculty profile](https://www.taibahu.edu.sa/en/employees/120) and
  [department page](https://www.taibahu.edu.sa/en/college-of-computer-science-and-engineering-in-al-madinah-al-munawwarah-/department-of-cybersecurity).
  No appointment start date is inferred from the ORCID employment start,
  which may refer to university service rather than the current rank.
- **Address:** Prince Nayef Road, Madinah 42353, Saudi Arabia, from
  [Taibah University's contact page](https://www.taibahu.edu.sa/en/contact-us).
  This is the central university address, not a verified personal office.
  No building, room number, or P.O. Box is inferred.
- **PhD, Computer Science, The University of Manchester:** the public
  [ORCID education record](https://orcid.org/0000-0002-2342-2156) records the
  study period as 2017–2021; the
  [awarding institution's thesis record](https://research.manchester.ac.uk/en/studentTheses/a-blockchain-infrastructure-to-support-smart-contracts-based-cons/)
  gives 14 April 2022 as the award date. Both are explicitly labelled on
  the page. The thesis is not added to the publications list.
- **MSc, Advanced Computer Science (Computer Security), Manchester, 2013;
  BSc, Computer Science, Taibah, 2009:** the earlier project CV extraction
  supplies the full degree wording; the owner's current request confirms
  the years. The
  [publisher-hosted author biography](https://www.sciencedirect.com/science/article/pii/S0167739X23003643)
  corroborates Manchester Computer Security 2013 and Taibah Computer Science
  2009.
- **Honorary Research Fellow, School of Health Sciences, The University of
  Manchester:** the same publisher-hosted biography records a 2021 start.
  The earlier CV extraction describes this as a former role. The owner
  tentatively recalls 2021–2023; the end year remains unconfirmed, so the
  website says “Former appointment · Appointed 2021” rather than implying
  either a current role or an established 2023 endpoint.

The original CV PDFs were OneDrive online-only files and could not be read
in this session. This refresh does not claim to have re-extracted them and
does not reintroduce public CV downloads.

## Verification

Astro diagnostics passed with zero errors and warnings, all 56 existing tests
passed, and the production build passed its public-content scan and release
boundary checks. Two existing type errors in the profile-icon lookup and
optional journal-ranking lookup were corrected without changing their visible
design. The local page returned HTTP 200. This refresh did not include a new
interactive browser QA session of the website.
