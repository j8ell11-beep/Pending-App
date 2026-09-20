// PENDING commercial configuration — NOT wired into public V3.2.
window.PENDING_COMMERCIAL={
 version:"shadow-1",
 currency:"GBP",
 plans:{
  free:{id:"free",name:"Free",priceMonthly:0,activeItems:5,features:["money_sweep","money_out_there","basic_reminders"]},
  plus_monthly:{id:"plus_monthly",name:"PENDING+",priceMonthly:2.99,billing:"monthly",features:["unlimited_items","money_sweep","smart_reminders","chase_assistance","expiry_tracking","recovery_history","backup_sync"]},
  plus_annual:{id:"plus_annual",name:"PENDING+",priceAnnual:24.99,billing:"annual",featured:true,features:["unlimited_items","money_sweep","smart_reminders","chase_assistance","expiry_tracking","recovery_history","backup_sync"]},
  founder:{id:"founder",name:"Founding Member",priceOnce:39.99,billing:"lifetime_core",temporary:true,features:["lifetime_core_access"]}
 },
 status:["free","trial","active","past_due","cancelled","expired","founder"],
 rules:{founderPublic:false,paymentsEnabled:false,publicUpgradeEnabled:false}
};