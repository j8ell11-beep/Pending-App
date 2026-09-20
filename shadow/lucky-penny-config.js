// PENDING Lucky Penny — shadow build only.
window.PENDING_LUCKY_PENNY={
 publicEnabled:false,
 name:"Lucky Penny",
 headline:"NO PENNY FORGOTTEN.",
 supportingLine:"Every coin. Every note. Has a place.",
 actions:[
  {id:"save",label:"SAVE IT",meaning:"Put found money towards a goal"},
  {id:"grow",label:"GROW IT",meaning:"Add it to a Change Pot"},
  {id:"gift",label:"GIFT IT",meaning:"Pass the value or physical coin to somebody"},
  {id:"give",label:"GIVE IT",meaning:"Allocate it to a supported charity route"}
 ],
 counters:["found","towards_goals","gifted","given"],
 rules:{
  foundMoneySeparateFromRecovered:true,
  giftingMustBeUserInitiated:true,
  charityMustBeConfirmedBeforeCounting:true,
  noClaimOfActualTransferUntilConfirmed:true,
  publicSharingOptInOnly:true
 }
};