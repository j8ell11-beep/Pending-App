// PENDING Gift Pot — shadow build only. No banking or payments are live.
window.PENDING_GIFT_POT={
 publicEnabled:false,
 headline:"TURN RECOVERED MONEY INTO SOMETHING FOR SOMEONE",
 fundingSources:["recovered_money","manual_top_up","scheduled_top_up"],
 features:{
  multiplePots:true,
  targetAmount:true,
  targetDate:true,
  recoveredMoneyAllocation:true,
  manualTopUp:true,
  scheduledTopUpIntent:true,
  giftCardComparison:true,
  reminders:true
 },
 rules:{
  bankTransfersLive:false,
  directDebitsLive:false,
  standingOrdersLive:false,
  neverClaimFundsHeldByPending:true,
  recoveredAndUserFundedMoneySeparated:true
 }
};