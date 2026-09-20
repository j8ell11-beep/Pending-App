// PENDING Revenue Architecture — shadow only; not wired into V3.2.
window.PENDING_REVENUE={
 publicEnabled:false,
 streams:[
  {id:"plus",name:"PENDING+",model:"subscription",audience:"consumer"},
  {id:"perks",name:"PENDING Perks",model:"affiliate/partner commission",audience:"consumer"},
  {id:"resolve",name:"PENDING Resolve",model:"B2B SaaS",audience:"business"},
  {id:"promise",name:"PENDING Promise",model:"B2B SaaS/integration",audience:"business"},
  {id:"api",name:"PENDING API",model:"usage/integration",audience:"enterprise"},
  {id:"insights",name:"PENDING Insights",model:"aggregate analytics",audience:"business"},
  {id:"work",name:"PENDING Work",model:"higher-value subscription",audience:"self-employed/SME"},
  {id:"household",name:"PENDING Household",model:"subscription",audience:"household"},
  {id:"benefit",name:"PENDING Benefit",model:"per-employee licence",audience:"employer"},
  {id:"white_label",name:"PENDING Platform",model:"licence/implementation",audience:"enterprise"},
  {id:"referrals",name:"PENDING Specialist Referrals",model:"disclosed referral fee",audience:"consumer"}
 ],
 rules:{
  noSaleOfPersonalData:true,
  commercialInfluenceMustBeDisclosed:true,
  paidRelationshipCannotChangeFactualOutcome:true,
  regulatedReferralsRequireComplianceReview:true
 }
};