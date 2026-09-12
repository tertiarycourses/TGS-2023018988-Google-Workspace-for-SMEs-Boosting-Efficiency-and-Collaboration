# Activity 13: Forms validation and customer feedback analysis

**Course:** TGS-2023018988 · **Version:** 7.0 · **Time:** 25 minutes · **Mapping:** K6 K7 A5 A7

## Scenario

A feedback survey contains satisfaction ratings outside 1–5 and missing responses. Validate inputs and interpret the sample without turning a small survey into a population claim.

## Goal and prerequisites

Validated 10-response sample has mean 3.6/5 and 6/10 positive ratings; report labels synthetic scope and proposes a measurable website improvement.

Tools: Forms, Sheets. Use your training Google Account and a current browser. Work in a newly created training container with synthetic data. Features may be controlled by account, edition, role or administrator policy; use the stated fallback and record its limitation.

## Included mock data

- [feedback-form-spec.md](feedback-form-spec.md)
- [feedback.csv](feedback.csv)
- [scenario.json](scenario.json)

## Detailed procedure

1. Create or update a training feedback Form using feedback-form-spec.md with a required 1–5 rating and controlled issue category.
2. Test the input boundary by attempting an invalid value if the chosen question type permits it, or verify the fixed scale endpoints.
3. Import feedback.csv into a separate Sheets analysis tab; these are synthetic practise responses, not live survey data.
4. Check ten unique response IDs, rating bounds and missing-value count.
5. Calculate the rating mean using AVERAGE on the ten numeric values and independently add them to 36.
6. Calculate the proportion rating 4 or 5 using COUNTIF for values>=4 divided by 10.
7. Create a column chart of issue counts and a short analysis note labeling the sample synthetic.
8. Propose one website navigation test with an acceptance measure and save the feedback report and validation evidence.

## Acceptance checks

Validated 10-response sample has mean 3.6/5 and 6/10 positive ratings; report labels synthetic scope and proposes a measurable website improvement.

| Evidence | Artifact | Expected result |
|---|---|---|
| N | Valid sample | 10 |
| MEAN | Rating | 3.6/5 |
| POSITIVE | Rating 4 or 5 | 6/10 =60% |
| ACTION | Website issue | Navigation test defined |

## Troubleshooting

| Symptom | Cause | Check |
|---|---|---|
| Mean greater than 5 | Out-of-range value included | Validate 1..5 and quarantine invalid rows |
| Blank counted as zero | Missing interpreted as negative feedback | Separate missing from rating 1 |
| 60% called customer-wide satisfaction | Sample overgeneralised | Label synthetic 10-response sample |

## Evidence and cleanup

Create an `output/` folder for your exported artifact and an evidence log. Record the exact source/release URL, the tested identity role, date, expected result and observed result. Keep evidence containing actual account details private. Remove temporary grants, filters, events or space membership after the exercise; retain only approved training outputs.

## Primary sources

See [sources](sources.md). This guide distinguishes business register fields and synthetic artifacts from real product UI and telemetry.
