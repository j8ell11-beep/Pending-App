# Great British PENDING Pot — data contract

Shadow architecture only; no live collection yet.

## Contribution
- contribution_id: random server-generated ID
- created_at: timestamp
- country: UK
- amount_identified: decimal, non-negative
- category: controlled broad category
- consent_version: versioned explicit consent
- consented: true

## Explicitly excluded
- name
- email
- item notes
- claim/reference numbers
- company names
- free-text descriptions

## Publication rules
1. Counter = sum of genuine consented UK identified amounts.
2. Never call identified money "recovered".
3. Category breakdowns require a minimum cohort before display.
4. Never manufacture seed totals or testimonials.
5. Withdrawal/deletion mechanism must be designed before production collection.
6. Production aggregation must be server-side; browser JavaScript is illustrative only.
7. Add abuse/duplicate controls before using the figure in advertising or PR.

## Future public story
THE GREAT BRITISH PENDING POT
How much money is Britain leaving unresolved?

Live total → broad category breakdown → £100 Challenge CTA.
