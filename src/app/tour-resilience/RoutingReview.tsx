"use client";
import { useEffect, useState } from "react";
type Advisory = {endDate:string; dates:string; route:string; flag:string; note:string};
const initialDate = "2026-11-25";
function localDate(){return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/London",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());}
export default function RoutingReview({items}:{items:Advisory[]}){
 const [today,setToday]=useState(initialDate);
 useEffect(()=>{const refresh=()=>setToday(localDate());refresh();const id=window.setInterval(refresh,60000);return()=>window.clearInterval(id);},[]);
 const active=items.filter(item=>item.endDate>=today);
 const archived=items.filter(item=>item.endDate<today);
 return <><div className="route-cards">{active.map(item=><article className="route-card" key={item.route}><span className="route-num">{item.dates}</span><p className="eyebrow">{item.flag}</p><h3>{item.route}</h3><p>{item.note}</p></article>)}</div>{active.length===0&&<p>No remaining scheduled routing advisories.</p>}<details id="routing-press-archive" className="discovery-prompt discovery-prompt-wide"><summary>Past routing advisories · press and research archive ({archived.length})</summary><p>Historical planning questions, not active alerts or evidence of disruption. Actual travel and operational outcomes have not been verified. Retained for retrospective press questions and lessons learned.</p>{archived.map(item=><article key={item.route}><h3>{item.route} · {item.dates}</h3><p>{item.flag} — original planning advisory</p><p>{item.note}</p></article>)}<a className="text-link" href="/pay-it-forward/adventure/#post-show">POST-SHOW RECORD ↗</a></details></>;
}
