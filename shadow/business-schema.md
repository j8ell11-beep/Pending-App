# PENDING Business — shadow architecture

## 1. PENDING Resolve
A structured resolution channel for opted-in customer cases.

Case:
- case_id
- user_id
- business_id
- pending_item_id
- category
- amount (optional)
- reference (shared only with explicit case consent)
- opened_at
- status: submitted | acknowledged | action_required | processing | resolved | closed
- target_date
- resolved_at

Business actions:
- acknowledge
- request information
- update status
- confirm refund/replacement/action
- resolve case

## 2. PENDING FastTrack
A participating business can provide a dedicated resolution route.
FastTrack means access to a structured route, NOT guaranteed preferential treatment or outcome.

## 3. PENDING Promise
A business registers a concrete after-sales promise, e.g. expected refund timeframe.
PENDING tracks the stated deadline and alerts the user if unresolved.
The business cannot pay to suppress or rewrite missed deadlines.

## 4. PENDING API
Future authenticated endpoints/events:
- create/update resolution case
- acknowledge case
- status changed
- refund approved
- refund sent
- replacement sent
- case resolved

Production requires authentication, authorisation, audit logging, rate limiting, idempotency and webhook signature verification.

## 5. PENDING Insights
Only sufficiently aggregated/anonymised operational insights.
Examples: common resolution stage, aggregate time-to-response, aggregate time-to-resolution.
No sale of personal case histories or individual user data.

## Integrity rules
- Consumer consent before sharing case-specific data.
- Commercial payment cannot change factual status, deadlines, rankings or outcome reporting.
- Sponsored/commercial relationships clearly disclosed.
- Business performance claims require defined metrics and adequate genuine data.
- Corrections/disputes need an audit trail.
