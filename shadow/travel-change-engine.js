// Travel Drawer prototype. Live FX/conversion eligibility requires current provider data.
window.PendingTravelChange={
 item({currency,amount=0,type="mixed"}={}){return {id:crypto.randomUUID(),currency:String(currency||"").toUpperCase(),amount:Math.max(0,Number(amount)||0),type,createdAt:new Date().toISOString()};},
 estimate(items=[],rates={}){
  return items.map(i=>({...i,estimatedGBP:rates[i.currency]?i.amount*Number(rates[i.currency]):null})); 
 },
 totalGBP(items=[]){return items.reduce((s,i)=>s+(Number(i.estimatedGBP)||0),0);},
 route({itemId,action,destination=null}={}){return {id:crypto.randomUUID(),itemId,action,destination,status:"planned",createdAt:new Date().toISOString()};}
};