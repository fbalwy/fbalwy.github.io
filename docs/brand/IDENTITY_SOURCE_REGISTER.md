# Taibah University identity source register

**Work package:** BRD-001 v1  
**Inventory date:** 18 August 2026 (Asia/Riyadh)  
**Scope:** the supplied identity guide and every regular file below `ملفات الهوية/`, inspected read-only. This register does not grant rights, extract rules, create derivatives, or decide final licensing.

## Handling and classification

Every listed original is a protected source: it must not be modified, moved, renamed, optimised, or published directly merely because it appears here. The final column is a web-workflow classification, not a permission grant.

| Classification | Meaning in this register |
|---|---|
| Protected master | Authoritative original evidence or production master; preserve unchanged and derive only in a later authorised package. |
| Candidate web source | Potential input for a later, traceable web derivative or approved fallback; not a direct-publication decision. |
| Reference-only | Evidence, production-template, or documentation source; not intended for direct website delivery. |
| Blocked | Must not be embedded, converted, served, or distributed until the stated blocker is resolved. |
| Unsuitable direct web asset | A supplied original that should not be published as-is because of format, scale, purpose, or context. |

**Integrity key:** `OK` means the native decoder/package validator completed successfully: PDFs parsed and all 20 identity-PDF pages rendered; raster images decoded; fonts passed `fc-scan`; Office ZIP packages passed `unzip -t` and rendered with LibreOffice. “Unique” means no identical SHA-256 was found among the 40 identity files. Dimensions are pixels for raster, points for PDF/Office pages, and `n/a` where a fixed canvas does not apply.

## Aggregate reconciliation

| Scope | Count / size | Reconciliation |
|---|---:|---|
| Guide | 1 PDF; 60,673,721 bytes; 78 pages | Matches the previously reported 78 guide pages. SHA-256: `7d9e0e18ffa207365113f2f38752ec5cf03e6f9cc801344de7907cd790b0e089`. |
| Identity package | 40 files; 51,396,579 bytes | Matches the previously reported 40 identity files. |
| Combined supplied identity evidence | 41 files; 112,070,300 bytes | 1 guide + 40 package files. |
| Identity formats | 10 PDF, 11 PNG, 13 TTF, 2 DOCX, 1 PPTX, 1 JPG, 2 TXT | Total = 40. |
| Identity PDF content | 10 PDFs; 20 pages | 2 logo pages + 9 icon pages + 4 certificate pages + 5 template pages = 20. |
| Office content | 2 DOCX; 4 rendered A4 pages; 1 PPTX; 10 slides | DOCX pagination was checked by LibreOffice rendering; it is renderer-dependent. |
| Exact binary duplicates | 0 | All 40 SHA-256 values are distinct. Named siblings are recorded as variants, not assumed duplicates. |

## Source register

| # | Stable relative path | Type and byte size | Dimensions / count | Colour, transparency, or native metadata | Integrity / relationship | Intended website role | Classification |
|---:|---|---|---|---|---|---|---|
| 1 | `الدليل الارشادي للهوية البصرية.pdf` | PDF 1.4; 60,673,721 | 78 pages; 841.89 x 595.276 pt (A4 landscape) | Vector/raster guide; not encrypted | OK; SHA-256 recorded above; sole guide | Authoritative visual-identity evidence | Protected master |
| 2 | `ملفات الهوية/الخطوط/الخط البديل/OFL.txt` | TXT; 4,484 | n/a | ASCII, CRLF | OK; licensing document for Alexandria family | License evidence to retain with any later permitted Alexandria distribution | Reference-only |
| 3 | `ملفات الهوية/الخطوط/الخط البديل/README.txt` | TXT; 2,316 | n/a | UTF-8 | OK; Alexandria package readme | Family/package documentation | Reference-only |
| 4 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-Black.ttf` | TTF; 172,424 | Scalable outline font | Alexandria Black; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback display weight; later web subsetting required | Candidate web source |
| 5 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-Bold.ttf` | TTF; 172,884 | Scalable outline font | Alexandria Bold; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback heading/action weight; later web subsetting required | Candidate web source |
| 6 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-ExtraBold.ttf` | TTF; 172,936 | Scalable outline font | Alexandria ExtraBold; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback display weight; later web subsetting required | Candidate web source |
| 7 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-ExtraLight.ttf` | TTF; 172,036 | Scalable outline font | Alexandria ExtraLight; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback light weight; later web subsetting required | Candidate web source |
| 8 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-Light.ttf` | TTF; 171,964 | Scalable outline font | Alexandria Light; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback light weight; later web subsetting required | Candidate web source |
| 9 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-Medium.ttf` | TTF; 172,800 | Scalable outline font | Alexandria Medium; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback medium weight; later web subsetting required | Candidate web source |
| 10 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-Regular.ttf` | TTF; 171,500 | Scalable outline font | Alexandria Regular; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback body weight; later web subsetting required | Candidate web source |
| 11 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-SemiBold.ttf` | TTF; 172,912 | Scalable outline font | Alexandria SemiBold; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback heading/action weight; later web subsetting required | Candidate web source |
| 12 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-Thin.ttf` | TTF; 171,508 | Scalable outline font | Alexandria Thin; Latin and Arabic coverage reported | OK; static Alexandria weight sibling | Potential fallback thin weight; later web subsetting required | Candidate web source |
| 13 | `ملفات الهوية/الخطوط/الخط البديل/static/Alexandria-VariableFont_wght.ttf` | TTF; 325,564 | Scalable variable outline font | Alexandria; Latin and Arabic coverage reported | OK; variable counterpart to the nine static Alexandria weights | Preferred source candidate if an authorised web subset is later made | Candidate web source |
| 14 | `ملفات الهوية/الخطوط/الخط الرسمي/ToshA_Taiba_v2_507/ToshA-Bold.ttf` | TTF; 65,052 | Scalable outline font | Tosh A Bold; Latin and Arabic coverage reported | OK; official Tosh A weight sibling | Official-family evidence only | Blocked - no supplied web-embedding, redistribution, or subsetting grant |
| 15 | `ملفات الهوية/الخطوط/الخط الرسمي/ToshA_Taiba_v2_507/ToshA-Medium.ttf` | TTF; 65,376 | Scalable outline font | Tosh A Medium; Latin and Arabic coverage reported | OK; official Tosh A weight sibling | Official-family evidence only | Blocked - no supplied web-embedding, redistribution, or subsetting grant |
| 16 | `ملفات الهوية/الخطوط/الخط الرسمي/ToshA_Taiba_v2_507/ToshA-Regular.ttf` | TTF; 65,200 | Scalable outline font | Tosh A Regular; Latin and Arabic coverage reported | OK; official Tosh A weight sibling | Official-family evidence only | Blocked - no supplied web-embedding, redistribution, or subsetting grant |
| 17 | `ملفات الهوية/الشعار/JPG/شعار الجامعة ملون عامودي.jpg` | JPEG; 1,779,968 | 1856 x 1507 px | CMYK, 8-bit, no alpha; 288 dpi | OK, Unique; vertical colour logo export, with PNG/vector siblings | Print-oriented comparison evidence | Unsuitable direct web asset |
| 18 | `ملفات الهوية/الشعار/PDF/الشعار بشكل أفقي باللغة الإنجليزية.pdf` | PDF 1.4; 490,321 | 1 page; 841.89 x 595.276 pt (A4 landscape) | Vector logo on page; not encrypted | OK, Unique; official English horizontal master | Owner-authorised affiliation-mark master for later traceable derivative | Protected master |
| 19 | `ملفات الهوية/الشعار/PDF/الشعار بشكل عمودي باللغتين.pdf` | PDF 1.4; 590,770 | 1 page; 841.89 x 595.276 pt (A4 landscape) | Vector logo on page; not encrypted | OK, Unique; vertical bilingual master and PNG siblings | Institutional logo evidence for exceptional bilingual layouts | Protected master |
| 20 | `ملفات الهوية/الشعار/PNG/شعار الجامعة أفقي أبيض  إنجليزي PNG.png` | PNG; 69,131 | 1243 x 340 px | sRGB, 8-bit, alpha | OK, Unique; English-horizontal white counterpart to row 18 | Possible dark-surface affiliation fallback, subject to later visual QA | Candidate web source |
| 21 | `ملفات الهوية/الشعار/PNG/شعار الجامعة أفقي أبيض عربي_إنجليزي PNG (2).png` | PNG; 83,656 | 1598 x 367 px | sRGB, 8-bit, alpha | OK, Unique; bilingual horizontal white variant | Bilingual production reference; not needed for English-only launch | Reference-only |
| 22 | `ملفات الهوية/الشعار/PNG/شعار الجامعة أفقي ملون عربي_إنجليزي PNG.png` | PNG; 120,756 | 1598 x 367 px | sRGB, 8-bit, alpha | OK, Unique; bilingual horizontal colour variant | Bilingual production reference; not needed for English-only launch | Reference-only |
| 23 | `ملفات الهوية/الشعار/PNG/شعار الجامعة عامودي أبيض عربي_إنجليزي PNG.png` | PNG; 218,693 | 1856 x 1507 px | sRGB, 8-bit, alpha | OK, Unique; bilingual vertical white variant | Exceptional-layout reference; not preferred for English-only launch | Reference-only |
| 24 | `ملفات الهوية/الشعار/PNG/شعار الجامعة عامودي ملون عربي_إنجليزي PNG.png` | PNG; 311,014 | 1856 x 1507 px | sRGB, 8-bit, alpha | OK, Unique; bilingual vertical colour variant | Exceptional-layout reference; not preferred for English-only launch | Reference-only |
| 25 | `ملفات الهوية/أيقونات/أيقونات للاستخدام في العروض والتصاميم.pdf` | PDF 1.4; 3,525,226 | 9 pages; 841.89 x 595.276 pt (A4 landscape) | Icon-sheet PDF; not encrypted | OK, Unique; all 9 pages rendered | Presentation/design icon reference, not a web-icon delivery pack | Reference-only |
| 26 | `ملفات الهوية/شهادات/شهادات حضور/نموذج شهادة 02-8.png` | PNG; 66,681 | 843 x 597 px | sRGB, 8-bit, alpha | OK, Unique; attendance-certificate family raster companion | Certificate-template evidence only | Reference-only |
| 27 | `ملفات الهوية/شهادات/شهادات حضور/نموذج شهادة 02.pdf` | PDF 1.6; 161,454 | 1 page; 841.89 x 595.276 pt (A4 landscape) | Certificate template; not encrypted | OK, Unique; attendance-certificate family member | Certificate-template evidence only | Reference-only |
| 28 | `ملفات الهوية/شهادات/شهادات حضور/نموذج شهادة 2.pdf` | PDF 1.6; 169,592 | 1 page; 841.89 x 595.276 pt (A4 landscape) | Certificate template; not encrypted | OK, Unique; separately encoded attendance-template variant, not an exact duplicate of row 27 | Certificate-template evidence only | Reference-only |
| 29 | `ملفات الهوية/شهادات/شهادات شكر/نموذج شهادة 01-8.png` | PNG; 73,389 | 843 x 597 px | sRGB, 8-bit, alpha | OK, Unique; appreciation-certificate family raster companion | Certificate-template evidence only | Reference-only |
| 30 | `ملفات الهوية/شهادات/شهادات شكر/نموذج شهادة 01.pdf` | PDF 1.6; 229,266 | 1 page; 841.89 x 595.276 pt (A4 landscape) | Certificate template; not encrypted | OK, Unique; appreciation-certificate family member | Certificate-template evidence only | Reference-only |
| 31 | `ملفات الهوية/شهادات/شهادات شكر/نموذج شهادة 1.pdf` | PDF 1.6; 236,881 | 1 page; 841.89 x 595.276 pt (A4 landscape) | Certificate template; not encrypted | OK, Unique; separately encoded appreciation-template variant, not an exact duplicate of row 30 | Certificate-template evidence only | Reference-only |
| 32 | `ملفات الهوية/القوالب/الخطابات/كليشة الخطابات.docx` | DOCX; 206,839 | 1 rendered A4 page | Office Open XML package | OK, Unique; letterhead template | Print-letterhead production reference | Reference-only |
| 33 | `ملفات الهوية/القوالب/الخطابات/نموذج ورق مروس.png` | PNG; 25,689,672 | 5500 x 4400 px | sRGB, 8-bit, no alpha; 72 dpi | OK, Unique; raster letterhead counterpart | High-resolution print reference | Unsuitable direct web asset |
| 34 | `ملفات الهوية/القوالب/العروض التقديمية/قالب عرض تقديمي - جامعة طيبة.pptx` | PPTX; 3,104,707 | 10 slides; 960.009 x 540 pt rendered (16:9) | Office Open XML package | OK, Unique; all slides counted and first/last visually rendered | Production-template reference for layout rhythm, not website content | Reference-only |
| 35 | `ملفات الهوية/القوالب/أخرى/notebook.pdf` | PDF 1.4; 1,148,151 | 1 page; 419.528 x 595.276 pt | Notebook template; not encrypted | OK, Unique | Print/stationery reference | Reference-only |
| 36 | `ملفات الهوية/القوالب/أخرى/الأشرطة-01.png` | PNG; 1,314,075 | 14617 x 10334 px | sRGB, 8-bit, alpha | OK, Unique; high-resolution strip/pattern sibling | Candidate source for later restrained decorative derivative | Candidate web source |
| 37 | `ملفات الهوية/القوالب/أخرى/شريط 2-01.png` | PNG; 2,210,785 | 14617 x 10334 px | sRGB, 8-bit, alpha | OK, Unique; high-resolution strip/pattern sibling | Candidate source for later restrained decorative derivative | Candidate web source |
| 38 | `ملفات الهوية/القوالب/أخرى/شريط الباترن-01.png` | PNG; 1,787,188 | 14617 x 10334 px | sRGB, 8-bit, alpha | OK, Unique; high-resolution strip/pattern sibling | Candidate source for later restrained decorative derivative | Candidate web source |
| 39 | `ملفات الهوية/القوالب/أخرى/قالب A4 عامودي.docx` | DOCX; 3,272,652 | 3 rendered A4 pages | Office Open XML package | OK, Unique; DOCX counterpart to row 40 | Print-document production reference | Reference-only |
| 40 | `ملفات الهوية/القوالب/أخرى/قالب A4 عامودي.pdf` | PDF 1.6; 1,126,208 | 3 pages; 595.276 x 841.89 pt (A4 portrait) | Print template; not encrypted | OK, Unique; PDF counterpart to row 39 | Print-document production reference | Reference-only |
| 41 | `ملفات الهوية/القوالب/أخرى/مسودة.pdf` | PDF 1.4; 1,330,548 | 1 page; 419.528 x 595.276 pt | Draft/notebook-style template; not encrypted | OK, Unique | Print/stationery reference | Reference-only |

## Visual verification evidence

The guide was not assessed from text extraction alone. It was rendered at 110 dpi and visually reviewed at the following representative pages: 1 (cover and pattern edge treatment), 12 (identity/personality table), 18 (logo forms), 19 (clear-space diagrams), 20 (size examples), 21 (prohibited constructions), 22 (surface variants), 23 (placement), 27 (palette presentation), 28 (type/graphic system), 29-30 (pattern composition and construction), 36 (pattern application), and 78 (closing spread). The renders were legible, free of clipping/blank pages, and visually consistent with the source package.

In addition, both vector logo-master PDFs were rendered and visually checked. They visibly contain, respectively, the English horizontal and bilingual vertical lockups. The first and tenth presentation slides were rendered and checked; both are 16:9 template slides with the supplied dark-navy, teal/sky, and pattern treatment. First pages of every identity PDF were visually sampled, while every page of all ten identity PDFs was successfully rendered.

## Constraints and unresolved risks carried forward

- The owner authorises only the unmodified official English horizontal university logo as an affiliation mark on this English-only personal academic site. The inventory records this owner decision without asserting university or third-party legal clearance.
- No ready-made SVG, standalone symbol, favicon, or English-horizontal colour PNG is supplied. The English-horizontal colour PDF is the protected vector master; a traceable derivative, if needed, belongs to a later authorised work package.
- The Tosh A files are technically readable but blocked for web use: the package contains no explicit grant for web embedding, redistribution, conversion, or subsetting. Alexandria is the supplied fallback family with an OFL record; later work must retain and verify that record rather than infer broader rights.
- Certificate, letterhead, notebook, document, and presentation templates are production/reference material, not public website content. No claim is made here that any depicted logos, icons, patterns, or templates may be independently republished.
- The similarly named certificate PDFs are not byte-identical. Their naming implies family relationship, but this inventory intentionally does not infer identical contents, intended substitution, or licensing from filenames alone.

## BRD-001 validation result

Coverage is complete: 1/1 guide and 40/40 recursively discovered identity files each appear exactly once in the register. Source counts, guide pages, identity-PDF pages, Office page/slide totals, raster dimensions, native readability, and duplicate reconciliation passed. There are no unreadable supplied files. The next dependency-eligible work packages are BRD-002 and BRD-003; both remain responsible for rule extraction, web-suitability/licensing analysis, and subsequent conclusions.
