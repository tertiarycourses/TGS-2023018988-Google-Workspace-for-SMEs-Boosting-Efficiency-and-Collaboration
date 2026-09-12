# Activity 22: Workspace metrics and evidence provenance

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 30 minutes · **Mapping:** K6 A5

## Scenario

The original practical assessment requests document access frequency, collaboration rate and engagement. Report defined measures from labelled synthetic events without claiming unavailable tenant telemetry.

## Goal and prerequisites

Report correctly shows 60 view events and 50% defined collaboration across 4 edited docs, with explicit synthetic source, population and limitation notes.

Tools: Sheets; Admin reporting demonstration. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [document-events.csv](document-events.csv)
- [document-summary.csv](document-summary.csv)
- [metric-dictionary.md](metric-dictionary.md)
- [scenario.json](scenario.json)
- [weekly-views.csv](weekly-views.csv)

## Detailed procedure

1. Import document-events.csv and document-summary.csv into Sheets as separate Raw Events and Summary tabs.
2. Read metric-dictionary.md and identify action, actor_id, document_id and event date.
3. Count view events per document using a pivot table or COUNTIFS and confirm 24,18,12 and 6.
4. In a new Editor Counts tab enter DOC01–DOC04 in A2:A5. In B2 enter =COUNTUNIQUE(FILTER('Raw Events'!D$2:D$68,'Raw Events'!C$2:C$68=A2,'Raw Events'!E$2:E$68="edit")) and fill down. This independently deduplicates actor IDs from the raw event rows. Verify 3,2,1,1 against the supplied summary.
5. Flag each edited document with>=2 distinct editors and compute collaborative documents divided by all 4 edited documents.
6. Confirm total 60 view events and 50% collaboration rate with a hand check.
7. Create a labelled monthly report stating synthetic source, September period, definitions, limitations and one corrective action.
8. If a trainer demonstrates Admin Reports, record the actual role/edition/source and differences without replacing synthetic results with invented telemetry.

## Acceptance checks

Report correctly shows 60 view events and 50% defined collaboration across 4 edited docs, with explicit synthetic source, population and limitation notes.

| Evidence | Artifact | Expected result |
|---|---|---|
| VIEWS | DOC01..04 | 24+18+12+6=60 |
| EDITORS | DOC01..04 | 3,2,1,1 |
| COLLAB | >=2 editors | 2/4=50% |
| SOURCE | Report | Synthetic explicitly stated |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Views called customers | Repeated/internal events misclassified | Label view events and source population |
| Collaboration denominator wrong | All assets included instead of edited docs | Use the defined 4 edited-doc cohort |
| Admin metric unavailable | Role/edition/report limitation | Use labelled synthetic data; record gap |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
