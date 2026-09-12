# Activity 7: Docs templates and publication readiness

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K2 K4 A2 A3

## Scenario

Sales reuses a brochure containing an old address and an internal cost figure. Apply a publication checklist to a controlled template before export.

## Goal and prerequisites

Brochure has no template placeholders or internal cost, accurate product facts, a tested descriptive link, and a readable approved PDF.

Tools: Docs, Drive. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [brochure-template.md](brochure-template.md)
- [product-facts.csv](product-facts.csv)
- [publication-checklist.csv](publication-checklist.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Create a Google Doc using brochure-template.md and the product-facts.csv mock data.
2. Replace all brace placeholders and set the product name, SGD 29 price and example contact.
3. Remove the internal unit_cost field and review comments for internal notes.
4. Apply heading styles and add descriptive link text for the delivery policy.
5. Insert an optional locally supplied illustration and add an accurate alternative text description through Image options or the available Alt text control.
6. Review the publication-checklist.csv row by row and record pass or corrective action.
7. Download the document as PDF, open it, and inspect every page and hyperlink with a test viewer.
8. Save the approved brochure PDF and completed release checklist.

## Acceptance checks

Brochure has no template placeholders or internal cost, accurate product facts, a tested descriptive link, and a readable approved PDF.

| Evidence | Artifact | Expected result |
|---|---|---|
| FACT | Price | SGD 29 matches approved product record |
| LEAK | unit_cost | Absent from public export |
| LINK | Delivery terms | Intended viewer can open |
| PDF | Release copy | Current version and readable layout |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Placeholder remains | Template fields incomplete | Search for double-brace markers |
| PDF contains old address | Export predates source update | Regenerate from approved current source |
| Link gives permission error | Target ACL differs from brochure | Share approved target to intended audience |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
