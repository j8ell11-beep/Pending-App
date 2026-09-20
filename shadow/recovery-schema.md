# PENDING Recovery Loop — shadow data model

## Recovery event
- recovery_id
- pending_item_id
- amount_recovered
- recovered_at
- chase_count
- days_waiting

## Allocation
- allocation_id
- recovery_id
- amount
- bucket: save | debt | goal | use | give | unallocated
- goal_id (optional)
- created_at

## Goal
- goal_id
- name
- target_amount
- archived

## Rules
- A recovery may be split across multiple allocations.
- Allocation totals must never exceed the recovered amount unless the excess is explicitly recorded as a user-funded PENDING Boost.
- PENDING Boost is not recovered money and must never inflate recovery statistics.
- Identified, recovered, allocated and user-added money are separate metrics.
- PENDING does not claim that allocation means a bank transfer occurred.
- Impact receipts hide counterparty/item detail by default.
- Sharing is opt-in.
- Financial products or investment recommendations require a separate compliance review before production.

## Dashboard metrics
Recovered total
→ saved
→ debt/bills
→ goals
→ used
→ given
→ unallocated

This creates the retention loop:
FIND → CHASE → RECOVER → ALLOCATE → IMPACT → FIND MORE
