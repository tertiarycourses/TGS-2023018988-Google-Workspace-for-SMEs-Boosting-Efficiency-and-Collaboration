# Activity 23: Visitor journey funnel and improvement tests

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K6 K7 A5 A7

## Scenario

Marketing wants three customer-experience improvements. Use a synthetic visitor funnel and test definitions rather than asserting website analytics is automatically available from Drive.

## Goal and prerequisites

Funnel and ratios are correct and labelled synthetic; three ideas name friction, owner, measure, threshold and test period.

Tools: Sheets, Sites. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [experiment-template.csv](experiment-template.csv)
- [journey-friction.csv](journey-friction.csv)
- [scenario.json](scenario.json)
- [visitor-funnel.csv](visitor-funnel.csv)

## Detailed procedure

1. Import visitor-funnel.csv into Sheets and read journey-friction.csv.
2. Calculate product reach 600/1000, start rate 120/600, completion 72/120 and visitor conversion 72/1000.
3. Label all four denominators and verify 60%,20%,60% and 7.2%.
4. Create a column or funnel-style comparison chart that displays the four synthetic stage counts.
5. Write three improvements: task-based product navigation, a shorter consented enquiry form, and a consultation-booking link.
6. For each idea name customer friction, change, owner, success metric, target and test period using experiment-template.csv.
7. State that real site visitor measurement requires configured analytics and approved collection; do not claim these are live Workspace metrics.
8. Save the monthly visitor report and three measurable idea proposals.

## Acceptance checks

Funnel and ratios are correct and labelled synthetic; three ideas name friction, owner, measure, threshold and test period.

| Evidence | Artifact | Expected result |
|---|---|---|
| FUNNEL | Stages | 1000/600/120/72 |
| MATH | Conversion | 7.2% landing cohort |
| IDEA1 | Navigation | Product reach target>=70% |
| IDEA2/3 | Form/booking | Completion>=75%; availability test |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Conversion 60% shown as visitor rate | Starter denominator mistaken for landing cohort | Label each ratio explicitly |
| Analytics reports no visitors | Instrumentation not configured/available | Verify actual collection; avoid invented data |
| Three ideas cannot be tested | No measure or owner | Add threshold, period and accountable owner |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
