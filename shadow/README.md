# PENDING commercial shadow build

This directory is deliberately separate from the public V3.2 tester experience.

Prepared:
- Free entitlement: 5 active items.
- PENDING+ monthly: £2.99/month.
- PENDING+ annual: £24.99/year (preferred offer).
- Founding Member: £39.99 one-off lifetime core access, temporary.
- Subscription states: free, trial, active, past_due, cancelled, expired, founder.
- Feature entitlement engine.
- Internal pricing preview.
- Payment and public-upgrade flags default OFF.

Before live monetisation:
1. Replace browser-only persistence with authenticated accounts and secure cloud storage.
2. Add server-side entitlement verification. Never trust browser entitlement state for paid access.
3. Connect a payment provider and implement checkout, renewal, cancellation, failed-payment and webhook handling.
4. Finalise UK-facing privacy notice, terms, subscription/cancellation disclosures and VAT/tax treatment.
5. Test restore/export/migration so existing prototype users can retain data.
6. Run payment flows in sandbox/test mode before enabling production.

Public V3.2 remains untouched by this shadow build.
