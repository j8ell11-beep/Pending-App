// Routing/accounting prototype. Production cash movement must be performed by authorised partners.
window.PendingCashDrop={
 quote({gross=0,fixedFee=0,percentFee=0,partnerBonus=0}={}){
  gross=Math.max(0,Number(gross)||0);
  const fee=Math.max(0,Number(fixedFee)||0)+gross*Math.max(0,Number(percentFee)||0)/100;
  const net=Math.max(0,gross-fee)+Math.max(0,Number(partnerBonus)||0);
  return {gross,fee,partnerBonus:Math.max(0,Number(partnerBonus)||0),net};
 },
 compare(routes=[]){
  return routes.map(r=>({...r,...this.quote(r)})).sort((a,b)=>b.net-a.net);
 },
 receipt({gross=0,net=0,destination="",provider="",status="pending"}={}){
  return {id:crypto.randomUUID(),gross:Number(gross)||0,net:Number(net)||0,destination,provider,status,createdAt:new Date().toISOString()};
 }
};