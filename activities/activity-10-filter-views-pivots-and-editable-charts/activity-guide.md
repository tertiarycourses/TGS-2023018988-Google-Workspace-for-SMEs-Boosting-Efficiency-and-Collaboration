# Activity 10: Filter views pivots and editable charts

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K6 A5

## Scenario

Sales and Operations need different filtered views without disrupting each other. Summarise enquiry stages and visualise counts using the validated 12-row cohort.

## Goal and prerequisites

Filter view does not disrupt peer view; pivot counts 4/3/3/2 total 12; chart is editable and correctly labels enquiry counts.

Tools: Sheets. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [enquiries-clean.csv](enquiries-clean.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Import enquiries-clean.csv and name the tab Clean. Select the full header and 12 data rows.
2. Create a named filter view for Qualified enquiries using the Data menu Filter views control available to your account.
3. Ask a paired editor to confirm their own view remains unchanged; record the distinction from a basic filter.
4. Create a pivot table from Clean A1:D13 with stage as rows and COUNTA of enquiry_id as values.
5. Check that New 4, Qualified 3, Won 3 and Lost 2 sum to 12.
6. Insert a column chart from the stage/count summary, excluding the grand-total row.
7. Set the chart title to Validated enquiry stages and label the measure Enquiry count.
8. Export the pivot summary and capture chart/source evidence; save the view and verify again as a second user.

## Acceptance checks

Filter view does not disrupt peer view; pivot counts 4/3/3/2 total 12; chart is editable and correctly labels enquiry counts.

| Evidence | Artifact | Expected result |
|---|---|---|
| VIEW | Sales qualified | Partner view unaffected |
| PIVOT | Stage counts | 4,3,3,2 |
| TOTAL | Pivot count | 12 |
| CHART | Column chart | Counts match source |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Partner loses visible rows | Basic filter applied to shared view | Use a filter view instead |
| Pivot counts 11 | Source range omitted final row | Inspect pivot source range |
| Won shown as revenue | Wrong measure/title pairing | Label count and currency separately |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
