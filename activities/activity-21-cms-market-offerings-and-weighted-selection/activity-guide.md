# Activity 21: CMS market offerings and weighted selection

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K8 A4

## Scenario

An SME choosing between Google Sites, WordPress and SharePoint needs a documented content-management decision, including audience, editing workflow, integrations and operational ownership.

## Goal and prerequisites

Comparison covers Google Sites plus 2 offerings with dated primary sources, weights 100, correct 3.65/3.90/3.45 scores and a mandatory-constraint decision.

Tools: Sheets, browser research. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [cms-requirements.md](cms-requirements.md)
- [offering-evidence.csv](offering-evidence.csv)
- [scenario.json](scenario.json)
- [selection-matrix.csv](selection-matrix.csv)

## Detailed procedure

1. Read cms-requirements.md and mark mandatory versus weighted criteria.
2. Open the official Google Sites, WordPress roles and SharePoint permissions documentation listed in sources.md.
3. Record the supported role/sharing/publishing contracts and research date in offering-evidence.csv.
4. Import selection-matrix.csv into Sheets and verify weights sum to 100.
5. Calculate each weighted score using SUMPRODUCT of weights and scenario scores divided by 100.
6. Confirm Sites 3.65, WordPress 3.90 and SharePoint 3.45 for the supplied fictional scores.
7. Change one requirement or weight and explain how the recommendation changes; apply mandatory constraints before interpreting the rank.
8. Save a comparison report with sources, scenario assumptions, risks, operational owner and recommendation.

## Acceptance checks

Comparison covers Google Sites plus 2 offerings with dated primary sources, weights 100, correct 3.65/3.90/3.45 scores and a mandatory-constraint decision.

| Evidence | Artifact | Expected result |
|---|---|---|
| WEIGHTS | Matrix | 30+25+25+20=100 |
| MATH | Sites score | 3.65 |
| SOURCES | Offerings | Official links/date documented |
| GATE | Must-have | Failure excludes unsuitable option |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Weights total 110 | Scoring arithmetic invalid | Normalise weights to 100 |
| Vendor brochure treated as proof | Feature claim lacks contract source | Read official roles/permission documentation |
| High score hides unmet hard constraint | Weighted average masks mandatory need | Apply must-have gate before ranking |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
