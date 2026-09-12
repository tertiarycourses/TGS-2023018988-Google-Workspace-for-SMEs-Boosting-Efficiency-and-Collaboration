# Activity 14: Gmail routing labels and search controls

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K3 K5 A3

## Scenario

Sales loses customer enquiries among newsletters. Route only matching messages to a label and verify that a reply is treated according to its own criteria.

## Goal and prerequisites

Positive and negative message tests match the declared criteria; action is label only and the report distinguishes reply criteria from conversation grouping.

Tools: Gmail. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [filter-spec.md](filter-spec.md)
- [mock-emails.csv](mock-emails.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Read mock-emails.csv and filter-spec.md; no real customer message is needed.
2. Use trainer-provided received synthetic messages in a dedicated classroom test mailbox: two enquiry subjects and two non-matching subjects. Unsent drafts cannot demonstrate incoming-filter application. If received test mail is unavailable, document the planned test and do not claim the routing passed.
3. In Gmail search subject:(HHS enquiry) and inspect the preview matches.
4. Create an Enquiries training label, then create a filter from the search criteria.
5. Select Apply the label and choose the training label. Do not select forwarding or Delete it.
6. If you intend to label existing synthetic messages, choose the matching-existing option deliberately.
7. Check a matching message, a non-matching message and a reply whose subject differs; record observed outcomes.
8. Remove the training filter and optional label after saving evidence.

## Acceptance checks

Positive and negative message tests match the declared criteria; action is label only and the report distinguishes reply criteria from conversation grouping.

| Evidence | Artifact | Expected result |
|---|---|---|
| MATCH | M01/M03 | Enquiries label present |
| NEGATIVE | M02/M04 | Label absent |
| RULE | Filter action | No forwarding or delete |
| CLEANUP | Training rule | Removed after evidence |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Newsletter labeled | Criteria too broad | Preview and narrow subject/sender |
| Reply not labeled | Reply fails saved criteria | Inspect its actual fields |
| Old mail unaffected | Existing matching option not selected | Apply explicitly only if intended |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
