# Faisal Albalwy academic website

Personal academic website for Faisal Albalwy, Assistant Professor of
Cybersecurity at Taibah University.

Live site: [https://fbalwy.github.io](https://fbalwy.github.io)

## Website

The site is a static Astro project with a concise, single-page academic
presentation. It includes academic affiliations, education and qualifications,
external positions, research interests, prospective-student guidance,
traditional publication citations with source-backed journal quartile badges,
courses taught, grants, work experience, committee service, and scholarly peer
review.

Publication and peer-review records are prepared from the project's reviewed
ORCID-linked catalogue. Journal badges retain the selected source, metric year,
subject category, and quartile context.

The small research-metrics strip on the home page is a verified Google Scholar
snapshot. Before each push that changes the site, refresh the three values in
`content/data/scholar-metrics.json` from the public Scholar profile and update
its observation date.

## Local development

The exact toolchain is Node `24.19.0` and npm `11.19.0`.

```sh
npm ci
npm run verify
npm run build
npm run preview-local
```

The site is static, contains no analytics or contact form, and uses the verified
Taibah University email address as the contact route.

## Deployment

Every push to `main` builds and deploys the site through the reviewed GitHub
Pages workflow in `.github/workflows/deploy.yml`. Production builds use
`https://fbalwy.github.io` as the canonical origin and generate production
robots and sitemap files. Local, CI, and preview builds remain non-indexable.
