# Activity 19: Sites architecture navigation and draft content

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 30 minutes · **Mapping:** K2 K3 K4 K5 A3

## Scenario

Customers cannot find delivery terms or the enquiry form on the SME site. Design a small information architecture around actual customer tasks and independent source assets.

## Goal and prerequisites

Four task-oriented pages with approved facts and a documented independent embed ACL exist; delivery terms are discoverable within 2 clicks in the test.

Tools: Sites, Docs, Drive. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [product-facts.csv](product-facts.csv)
- [scenario.json](scenario.json)
- [site-copy.md](site-copy.md)
- [usability-log.csv](usability-log.csv)

## Detailed procedure

1. Create a new training Google Site and use site-copy.md as the approved mock content source.
2. Create Home, Products, Delivery and Contact pages with the stated navigation labels.
3. Add approved product names/prices from product-facts.csv and a clear Product enquiry action.
4. Insert the approved brochure or document from your training Drive folder and note its independent Share setting.
5. Add delivery terms SGD 5 below SGD 80 and the approved return window.
6. Preview desktop and mobile layouts and check page hierarchy and navigation labels.
7. As site author open Preview and have your partner perform the delivery-price task on the author’s displayed preview; record clicks and confusion in usability-log.csv. Alternatively explicitly invite the paired learner as an editor for draft preview. This is a draft usability test; published visitor access is verified in Activity 20.
8. Save the site draft and evidence; publish only to the authorised training audience in the next activity.

## Acceptance checks

Four task-oriented pages with approved facts and a documented independent embed ACL exist; delivery terms are discoverable within 2 clicks in the test.

| Evidence | Artifact | Expected result |
|---|---|---|
| MAP | Four pages | Task labels consistent |
| FACT | Delivery | SGD 5 / threshold SGD 80 |
| EMBED | Brochure | Intended viewer access |
| TASK | Delivery terms | Located within 2 clicks |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Viewer sees permission request | Embedded file restricted to editors | Share approved release file appropriately |
| Terms absent from live site | Draft changes not published | Review and publish current change |
| Navigation uses internal jargon | Labels reflect departments, not visitor tasks | Use product/delivery/contact task labels |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
