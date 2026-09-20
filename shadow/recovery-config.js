// PENDING Recovery Loop — shadow only; not wired into public V3.2.
window.PENDING_RECOVERY={
 publicEnabled:false,
 allocations:[
  {id:"save",label:"SAVE IT",description:"Put recovered money toward savings or an emergency fund."},
  {id:"debt",label:"CLEAR IT",description:"Put recovered money toward a debt or bill."},
  {id:"goal",label:"FUND A GOAL",description:"Put recovered money toward something you're working toward."},
  {id:"use",label:"USE IT",description:"Use the money for something already planned."},
  {id:"give",label:"GIVE A LITTLE",description:"Optionally allocate some to a cause you choose."},
  {id:"unallocated",label:"DECIDE LATER",description:"Keep it recovered but unallocated for now."}
 ],
 boost:{enabled:false,label:"PENDING BOOST",description:"Optionally top up recovered money toward a goal using your own money."},
 impactReceipt:{enabled:true,shareByDefault:false,hideCounterpartyByDefault:true}
};