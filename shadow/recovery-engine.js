// Client-side prototype logic. Production data must be account-backed/server-validated.
window.PendingRecovery={
 goal({id,name,target}){return {id:id||crypto.randomUUID(),name:String(name||"My goal"),target:Math.max(0,Number(target)||0),allocated:0};},
 allocate({amount,bucket="unallocated",goalId=null}){
  return {id:crypto.randomUUID(),amount:Math.max(0,Number(amount)||0),bucket,goalId,createdAt:new Date().toISOString()};
 },
 progress(goal,allocations=[]){
  const allocated=allocations.filter(a=>a.goalId===goal.id).reduce((s,a)=>s+(Number(a.amount)||0),0);
  const pct=goal.target?Math.min(100,(allocated/goal.target)*100):0;
  return {...goal,allocated,percent:pct};
 },
 receipt({amount=0,daysWaiting=null,chases=0,recoveredAt=null,totalRecovered=0,goalName=null,goalAllocated=0}={}){
  return {title:"PENDING RECOVERY RECEIPT",amount:Number(amount)||0,daysWaiting,chases:Number(chases)||0,recoveredAt:recoveredAt||new Date().toISOString(),totalRecovered:Number(totalRecovered)||0,goalName,goalAllocated:Number(goalAllocated)||0};
 }
};