# Activity 4: Posting lifecycle and asset metadata

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K2 K5 A2

## Scenario

Product sheet P-101 has three competing copies. Sales sent an obsolete price. Create a single source of record with an explicit business publication lifecycle.

## Goal and prerequisites

One current P-101 source is registered, price is SGD 49, approval checkpoint and viewer evidence exist, and obsolete reference is retired.

Tools: Drive, Docs, Sheets. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [asset-register.csv](asset-register.csv)
- [product-copy.md](product-copy.md)
- [scenario.json](scenario.json)

## Detailed procedure

1. Open asset-register.csv and product-copy.md. Identify P-101’s conflicting price values.
2. Create a Restricted Google Doc for P-101 and paste the product copy. Correct the price to SGD 49.00.
3. Create or import the asset register into Sheets and add source_url, approver, published_on and review_due columns.
4. Name the current document version Draft v 1, ask a partner to comment on accuracy, and resolve the review finding.
5. Record the approval in the register and name the corrected version Approved v 2.
6. Create an approved release PDF and keep its URL separate from the editable source URL. For this exercise share only with named test identities.
7. Update the index to the approved current copy and mark the older mock copy Superseded.
8. Open the registered URL as the intended viewer and verify price, title and release note. Save the completed register and release PDF.

## Acceptance checks

One current P-101 source is registered, price is SGD 49, approval checkpoint and viewer evidence exist, and obsolete reference is retired.

| Evidence | Artifact | Expected result |
|---|---|---|
| META | P-101 | ID, owner, status, due date populated |
| RELEASE | v 2 | Price SGD 49 and approval note |
| URL | Published copy | Current intended audience |
| OLD | v 1 reference | No longer used in current index |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Sales shares older PDF | Snapshot does not update with source | Replace public reference; verify release ID |
| Two current source links | Duplicate records for same asset ID | Choose authorised source and archive duplicate |
| Unapproved content publicly visible | Audience broadened before review | Restrict; approve and republish deliberately |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
