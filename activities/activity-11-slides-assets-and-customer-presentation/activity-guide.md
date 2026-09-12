# Activity 11: Slides assets and customer presentation

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K2 K4 A3

## Scenario

Marketing needs a short customer presentation containing only approved product facts and a pipeline chart with a clear data period.

## Goal and prerequisites

Three customer slides use approved facts, clear visual hierarchy and synthetic-data chart label; private cost details are absent and viewer access is verified.

Tools: Slides, Sheets, Drive. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [pitch-outline.md](pitch-outline.md)
- [product-facts.csv](product-facts.csv)
- [scenario.json](scenario.json)
- [stage-counts.csv](stage-counts.csv)

## Detailed procedure

1. Create a new Slides presentation named HHS Customer Pitch using the local pitch-outline.md.
2. Create three slides using title and image layouts, keeping product price SGD 29 and approved delivery/return terms.
3. Insert a locally supplied product illustration or an approved mock image; add accurate alternative text.
4. Insert or link a Sheets chart from the validated stage counts and label it Synthetic September 2026 enquiry cohort.
5. Use consistent theme fonts and check the visual hierarchy in presentation mode.
6. Review speaker notes, comments and hidden content for internal margin/cost values and remove them from the customer copy.
7. Share only with your named training viewer and ask them to open the presentation.
8. Download PDF and inspect all pages. Save the source presentation URL, release PDF and publication checklist.

## Acceptance checks

Three customer slides use approved facts, clear visual hierarchy and synthetic-data chart label; private cost details are absent and viewer access is verified.

| Evidence | Artifact | Expected result |
|---|---|---|
| PRICE | Customer slide | SGD 29 |
| CHART | Stages | 4/3/3/2 with synthetic label |
| PRIVATE | Notes/comments | No internal cost values |
| VIEW | PDF/viewer | Readable and accessible |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Linked chart out of date | Source changed after insertion | Review current data and refresh deliberately |
| Customer cannot open source | Source ACL separate | Share approved source or use snapshot |
| Notes contain internal margin | Source deck reused without release review | Remove private notes and inspect export |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
