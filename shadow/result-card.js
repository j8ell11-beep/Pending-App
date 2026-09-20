// Generates copy for a future share card. Shadow build only.
window.PendingResultCard={
 make({identified=0,count=0,minutes=null,target=100}={}){
  const hit=Number(identified)>=Number(target);
  return {
   title:"MY PENDING MONEY SWEEP",
   amount:Number(identified)||0,
   looseEnds:Number(count)||0,
   minutes,
   target:Number(target)||100,
   targetHit:hit,
   shareText:"I identified £"+(Number(identified)||0).toFixed(2)+" in my PENDING Money Sweep"+(hit?" and completed the £"+target+" challenge":"")+". How much money have you forgotten about?"
  };
 }
};