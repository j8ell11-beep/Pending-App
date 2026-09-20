# PENDING Perks — Make My Money Go Further

## Product decision
Build ALL useful routes and let PENDING identify the best potential route rather than locking the user into one commercial partner.

Routes:
1. Direct retailer/provider price or discount
2. Cashback site
3. PENDING partner/affiliate offer
4. Voucher/promo code
5. Loyalty/rewards route

## Offer record
- offer_id
- provider
- route_type
- intent_category
- headline
- base_price
- instant_discount
- cashback_amount
- cashback_status: potential | tracked | confirmed | declined
- fees
- expiry
- affiliate
- sponsored
- last_verified_at
- destination

## Comparison principles
- Compare net cost where comparison is genuinely like-for-like.
- Show ALL viable routes; highlight best potential value without hiding alternatives.
- Cashback is not a saving until confirmed.
- Do not assume voucher + cashback stacking unless verified.
- Do not double-count loyalty points, cashback or discounts.
- Sponsored placements are labelled and cannot silently override the value ranking.
- Affiliate relationships are disclosed.
- User always chooses whether to leave PENDING for an offer.

## Financial-benefit accounting
Keep four ledgers separate:
- money identified
- money recovered
- confirmed additional savings/cashback
- user-funded top-ups

Potential/pending cashback is displayed separately and excluded from confirmed financial benefit.

## Commercial model
Potential revenue streams:
- affiliate commission
- direct partner commission
- sponsored placements (clearly labelled)
- exclusive member discounts
- cashback/reward referral arrangements

## UX trigger
Perks appear only after the user intentionally allocates recovered money to an applicable purpose such as Holiday, Fun or Purchase. Avoid generic ad-feed behaviour.

Flow:
RECOVER → SPLIT → CHOOSE PURPOSE → MAKE MY MONEY GO FURTHER → COMPARE ROUTES → USER CHOOSES → TRACK BENEFIT
