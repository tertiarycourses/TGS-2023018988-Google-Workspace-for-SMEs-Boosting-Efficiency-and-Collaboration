# Activity 8: Sheets import schema and data validation

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K2 K4 A2

## Scenario

Enquiry data has duplicate IDs, numeric amounts stored as text and inconsistent stages. A marketing report is unreliable until the data contract is validated.

## Goal and prerequisites

Clean sheet contains 12 unique enquiries, valid stages and numeric amounts; duplicate/type decisions and invalid-input rejection are evidenced.

Tools: Sheets. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [cleaning-log.csv](cleaning-log.csv)
- [enquiries-dirty.csv](enquiries-dirty.csv)
- [scenario.json](scenario.json)
- [source-notes.md](source-notes.md)

## Detailed procedure

1. In Sheets create HHS Enquiry Data and choose File then Import then Upload to import enquiries-dirty.csv into a new sheet.
2. Rename the tab Raw and freeze the header row. Check spreadsheet locale and verify interpreted dates.
3. Duplicate the tab as Clean so the original mock input remains unchanged.
4. Add checks using COUNTIF for duplicate IDs and ISNUMBER for amount values.
5. Review duplicate E003 against source-notes.md and keep one authorised record. Record the decision in cleaning-log.csv.
6. Standardise stages to New, Qualified, Won or Lost and apply a Data validation dropdown to the stage column with invalid input rejected.
7. Format numeric amounts as SGD currency and confirm numeric values remain numbers.
8. Try a deliberate invalid stage in a spare test row, confirm rejection, remove the test row and export the cleaned CSV.

## Acceptance checks

Clean sheet contains 12 unique enquiries, valid stages and numeric amounts; duplicate/type decisions and invalid-input rejection are evidenced.

| Evidence | Artifact | Expected result |
|---|---|---|
| ROWS | Input | 12 unique IDs after review |
| STAGE | Validation | Invalid PendingRejected input blocked |
| TYPE | Amounts | ISNUMBER true on report rows |
| DUP | E003 | Duplicate resolution documented |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Revenue unexpectedly zero | Amounts imported as text | Test ISNUMBER; correct source/import |
| Stage groups split | won and Won differ | Standardise against allowed stages |
| Revenue inflated | Duplicate enquiry ID counted twice | Review duplicate IDs before removal |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
