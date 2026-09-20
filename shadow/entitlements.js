// PENDING entitlement engine — shadow build only.
(function(){
 const C=window.PENDING_COMMERCIAL;
 function entitlement(planId){
  const p=C&&C.plans[planId]||C.plans.free;
  return {plan:p.id,activeItemLimit:p.activeItems??Infinity,features:new Set(p.features||[])};
 }
 function can(planId,feature){return entitlement(planId).features.has(feature)}
 function canAddItem(planId,currentOpen){const e=entitlement(planId);return currentOpen<e.activeItemLimit}
 window.PendingEntitlements={entitlement,can,canAddItem};
})();