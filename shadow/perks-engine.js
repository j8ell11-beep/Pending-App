// Comparison engine prototype. Production prices/offers require live provider feeds and server-side validation.
window.PendingPerks={
 netCost(o={}){
  const price=Math.max(0,Number(o.price)||0);
  const instant=Math.max(0,Number(o.instantDiscount)||0);
  const cashback=Math.max(0,Number(o.cashback)||0);
  const fees=Math.max(0,Number(o.fees)||0);
  return Math.max(0,price-instant-cashback+fees);
 },
 compare(offers=[]){
  return offers.map(o=>({...o,netCost:this.netCost(o),potentialSaving:Math.max(0,(Number(o.price)||0)-this.netCost(o))}))
   .sort((a,b)=>a.netCost-b.netCost);
 },
 benefit({recovered=0,confirmedDiscounts=0,confirmedCashback=0,pendingCashback=0,userTopups=0}={}){
  return {
   recovered:Number(recovered)||0,
   confirmedExtraValue:(Number(confirmedDiscounts)||0)+(Number(confirmedCashback)||0),
   pendingCashback:Number(pendingCashback)||0,
   userTopups:Number(userTopups)||0,
   confirmedFinancialBenefit:(Number(recovered)||0)+(Number(confirmedDiscounts)||0)+(Number(confirmedCashback)||0)
  };
 }
};