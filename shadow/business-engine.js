// Prototype state machine only. Production implementation must be server-side.
window.PendingBusiness={
 allowed:{
  submitted:["acknowledged","closed"],
  acknowledged:["action_required","processing","resolved","closed"],
  action_required:["processing","resolved","closed"],
  processing:["action_required","resolved","closed"],
  resolved:["closed"],
  closed:[]
 },
 transition(caseRecord,nextStatus){
  const current=caseRecord.status||"submitted";
  if(!(this.allowed[current]||[]).includes(nextStatus)) return {...caseRecord,error:"Invalid status transition"};
  return {...caseRecord,status:nextStatus,updated_at:new Date().toISOString(),...(nextStatus==="resolved"?{resolved_at:new Date().toISOString()}:{})};
 },
 promiseStatus({targetDate,resolvedAt=null}={}){
  if(resolvedAt) return "resolved";
  if(!targetDate) return "no_target";
  return new Date(targetDate)<new Date()?"overdue":"on_track";
 }
};