"use client";
import { useState } from "react";
const url = "https://loptr-lab.github.io/pay-it-forward/tour-resilience/london/";
export default function AdventureShare(){
 const [status,setStatus]=useState("");
 const [showLink,setShowLink]=useState(false);
 async function share(){
  setStatus("");
  if(typeof navigator.share === "function"){try{await navigator.share({title:"The Wolf’s Gambit | Play It Forward",text:"Make music a reason to meet someone.",url});return;}catch(error){if(error instanceof Error && error.name==="AbortError")return;}}
  try{await navigator.clipboard.writeText(url);setStatus("Adventure link copied.");}catch{setShowLink(true);setStatus("Copy the adventure link below.");}
 }
 return <div><button className="button secondary" type="button" onClick={share}>SHARE THIS ADVENTURE</button>{showLink && <label>Adventure link<input readOnly value={url} onFocus={e=>e.currentTarget.select()} /></label>}<p role="status">{status}</p></div>;
}
