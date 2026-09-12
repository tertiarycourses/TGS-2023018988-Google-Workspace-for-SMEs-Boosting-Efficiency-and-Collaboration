# Activity 6: Docs structure and collaborative review

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K2 K4 A2 A3

## Scenario

A delivery policy is hard to navigate and reviewers overwrite each other. Build a structured document and distinguish proposed edits from accepted content.

## Goal and prerequisites

Heading outline works; supported 14-day return correction is accepted, unsupported change rejected, and approved version evidence is saved.

Tools: Docs, Drive. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [delivery-policy.md](delivery-policy.md)
- [policy-facts.csv](policy-facts.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Create a Google Doc from delivery-policy.md. Rename it HHS DP-01 delivery policy followed by your initials.
2. Apply Heading 1 to Delivery eligibility and Returns; apply Heading 2 to Standard delivery.
3. Check the document outline and confirm both main sections appear.
4. Share the training document with your partner as Commenter and ask them to propose the provided correction using Suggesting or a comment if suggesting is unavailable.
5. Select the return-window text and record the verified source from policy-facts.csv. Do not accept unsupported changes.
6. As editor accept the supported correction and reject the deliberately unsupported free-delivery suggestion.
7. Resolve the discussion only after checking final content. Name the current version Approved DP-01 v 2.
8. Export PDF and save review-evidence.md containing proposed change, decision, source and final value.

## Acceptance checks

Heading outline works; supported 14-day return correction is accepted, unsupported change rejected, and approved version evidence is saved.

| Evidence | Artifact | Expected result |
|---|---|---|
| STRUCT | Outline | Two Heading 1 sections visible |
| REVIEW | Suggestion | 14-day proposal recorded |
| DECISION | Accepted text | Verified terms reflected |
| RELEASE | Named version | DP-01 v 2 approved |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Outline missing headings | Direct formatting used instead of styles | Apply Heading 1/2 to structure |
| Reviewer overwrites content | Editing mode used for review | Use Suggesting and review role |
| Comment resolved but text wrong | Discussion closure mistaken for correction | Check final policy text and approval |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
