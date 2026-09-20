// Planning/ledger prototype. PENDING does not hold or move funds in this build.
window.PendingGiftPot={
 create({name="Gift Pot",target=0,targetDate=null}={}){
  return {id:crypto.randomUUID(),name,target:Math.max(0,Number(target)||0),targetDate,entries:[]};
 },
 add(pot,{amount=0,source="manual_top_up",note=""}={}){
  const entry={id:crypto.randomUUID(),amount:Math.max(0,Number(amount)||0),source,note,createdAt:new Date().toISOString()};
  return {...pot,entries:[...(pot.entries||[]),entry]};
 },
 totals(pot){
  const entries=pot.entries||[];
  const recovered=entries.filter(x=>x.source==="recovered_money").reduce((s,x)=>s+x.amount,0);
  const userFunded=entries.filter(x=>x.source!=="recovered_money").reduce((s,x)=>s+x.amount,0);
  const total=recovered+userFunded,target:Number(pot.target)||0;
  return {recovered,userFunded,total,target,remaining:Math.max(0,target-total),percent:target?Math.min(100,total/target*100):0};
 },
 scheduledPlan({amount=0,frequency="monthly",nextDate=null}={}){
  return {amount:Math.max(0,Number(amount)||0),frequency,nextDate,status:"planning_only"};
 }
};