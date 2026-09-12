# Activity 5: Search recovery and version diagnosis

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 20 minutes · **Mapping:** K3 K5 A2

## Scenario

The warehouse manager cannot find the approved delivery checklist. The search result contains a similarly named draft, and an edit removed an important dispatch check.

## Goal and prerequisites

Correct checklist identity is found and the approved address verification line is restored with an inspectable recovery log.

Tools: Drive, Docs. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [dispatch-checklist.md](dispatch-checklist.md)
- [recovery-log.csv](recovery-log.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Create a Google Doc from dispatch-checklist.md in your training folder and name its version Dispatch v 1.
2. Add the customer-address verification line and name the version Dispatch v 2 approved.
3. Make a later test edit that removes the line and clearly label it as a deliberate training fault.
4. Search Drive for the checklist title and apply the Documents type filter. Record the returned item identity and location.
5. Open File then Version history then See version history. Compare the named approved checkpoint with current content.
6. With owner/editor permission restore the approved checkpoint or copy the approved text back with an explicit recovery note.
7. Ask your partner to confirm the address-check line and open the current source URL.
8. Complete recovery-log.csv with item ID, selected checkpoint, reason and final validation.

## Acceptance checks

Correct checklist identity is found and the approved address verification line is restored with an inspectable recovery log.

| Evidence | Artifact | Expected result |
|---|---|---|
| FIND | DELIVERY-01 | Correct location and identifier |
| HISTORY | Dispatch v 2 | Approved checkpoint identified |
| RECOVER | Current text | Address check restored |
| ACCESS | Intended viewer | Known URL opens |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Correct file absent from search | Wrong account, location or access | Test known URL and invited identity |
| Draft mistaken for current | Title reused without asset identifier | Validate register and approved location |
| Restored content still incomplete | Wrong checkpoint selected | Compare explicit acceptance lines |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
