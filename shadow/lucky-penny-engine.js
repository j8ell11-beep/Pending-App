// Lucky Penny ledger prototype. Does not move money.
window.PendingLuckyPenny={
 create({amount=0,currency="GBP",source="found"}={}){
  return {id:crypto.randomUUID(),amount:Math.max(0,Number(amount)||0),currency,source,status:"found",createdAt:new Date().toISOString()};
 },
 allocate(entry,action,destination=null){
  return {...entry,action,destination,status:"planned",allocatedAt:new Date().toISOString()};
 },
 confirm(entry){
  return {...entry,status:"confirmed",confirmedAt:new Date().toISOString()};
 },
 totals(entries=[]){
  const confirmed=entries.filter(x=>x.status==="confirmed");
  const sum=a=>confirmed.filter(x=>x.action===a).reduce((s,x)=>s+(Number(x.amount)||0),0);
  return {
   found:entries.reduce((s,x)=>s+(Number(x.amount)||0),0),
   towardsGoals:sum("save")+sum("grow"),
   gifted:sum("gift"),
   given:sum("give")
  };
 }
};