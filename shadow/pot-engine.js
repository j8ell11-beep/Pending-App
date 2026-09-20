// Aggregation model. Server-side equivalent required before launch.
window.PendingPot={
 normalise(entry={}){
  return {amount:Math.max(0,Number(entry.amount)||0),category:String(entry.category||"Other"),consented:entry.consented===true,country:String(entry.country||"UK"),createdAt:entry.createdAt||new Date().toISOString()};
 },
 aggregate(entries=[]){
  const valid=entries.map(this.normalise).filter(x=>x.consented&&x.country==="UK");
  const categories={};let total=0;
  valid.forEach(x=>{total+=x.amount;categories[x.category]=(categories[x.category]||0)+x.amount});
  return {total,contributions:valid.length,categories,metric:"identified"};
 }
};