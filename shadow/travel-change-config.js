// PENDING Travel Change — shadow build only. No currency exchange or cash custody is live.
window.PENDING_TRAVEL_CHANGE={
 publicEnabled:false,
 headline:"EVERY COIN. EVERY NOTE. HAS A PLACE.",
 routes:["convert","keep_for_next_trip","gift","donate"],
 features:{
  travelDrawer:true,
  multiCurrency:true,
  estimatedGBPValue:true,
  conversionComparison:true,
  nextTripPot:true,
  giftCurrency:true,
  donateCurrency:true
 },
 rules:{
  estimatesMustBeTimestamped:true,
  conversionFeesShown:true,
  unsupportedCoinsClearlyMarked:true,
  neverClaimEstimatedValueAsGuaranteed:true,
  noCashCustodyByPending:true
 }
};