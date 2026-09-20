// PENDING Cash Drop Network — shadow build only. No cash handling or deposits are live.
window.PENDING_CASH_DROP={
 publicEnabled:false,
 headline:"SEE A COIN. PICK IT UP. PUT IT PENDING.",
 routes:[
  {id:"coin_kiosk",label:"Coin-counting kiosk",examples:["Coinstar-style","Glory-style"]},
  {id:"retail_cash",label:"Retail cash-deposit network",examples:["PayPoint-style"]},
  {id:"bank_partner",label:"Bank / e-money partner",examples:["regulated account destination"]}
 ],
 destinations:["Gift Pot","Holiday Pot","Emergency Pot","Debt Goal","Purchase Goal","Custom Goal"],
 rules:{
  pendingDoesNotHoldFunds:true,
  noBankCredentialsCollected:true,
  providerFeeMustBeShown:true,
  netDepositMustBeShown:true,
  regulatedPartnerRequiredForLiveMoneyMovement:true
 }
};