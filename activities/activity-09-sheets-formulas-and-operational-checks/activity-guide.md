# Activity 9: Sheets formulas and operational checks

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K6 A5

## Scenario

Operations needs the enquiry pipeline value and conversion rate. Compute explicit numerators and denominators rather than relying on an unlabeled percentage.

## Goal and prerequisites

Total 12, Won 3, Won revenue SGD 960, conversion 25%, average won SGD 320 all match hand calculation and report labels identify the cohort.

Tools: Sheets. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [enquiries-clean.csv](enquiries-clean.csv)
- [hand-check.md](hand-check.md)
- [products-lookup.csv](products-lookup.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Import enquiries-clean.csv into Sheets, rename the imported tab exactly Clean and confirm 12 enquiry rows plus one header. Formula references below depend on this tab name.
2. Create a Summary tab. Put labels Total enquiries, Won enquiries, Won revenue, Conversion andAverage won value in A2:A6; put their values/formulas in B2:B6.
3. Enter =COUNTA(Clean!A2:A13) and =COUNTIF(Clean!C2:C13,"Won") in the first two value cells.
4. Enter =SUMIF(Clean!C2:C13,"Won", Clean!D2:D13) for revenue.
5. In Summary B5 enter =IF(B2=0,"No data", B3/B2) and format numeric results as percent. B2 is total enquiries and B3 is Won enquiries; label this denominator explicitly.
6. Calculate average won value as Won revenue divided by Won count and format as SGD currency.
7. Use the provided hand-check.md to independently add 360,180 and 420 and compare against the sheet.
8. Add an empty-period test with a No data label, then save the report evidence and export the summary PDF.

## Acceptance checks

Total 12, Won 3, Won revenue SGD 960, conversion 25%, average won SGD 320 all match hand calculation and report labels identify the cohort.

| Evidence | Artifact | Expected result |
|---|---|---|
| COUNT | Unique IDs | 12 |
| WON | Stage rows | 3 |
| REV | Won revenue | SGD 960 |
| RATE | Won / enquiries | 25% with cohort label |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| SUMIF wrong total | Sum range offset from criteria range | Align row 2:13 on both ranges |
| Conversion exceeds 100% | Numerator and denominator from different populations | Use same validated enquiry cohort |
| Zero interpreted as failure | Empty period masked by IFERROR | State No data alongside result |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
