import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { cards } from "./data"; 


export default function MyCards() {
  return (
    <div className="m-3 bg-stone-900 p-10">
      <h1 className="text-3xl font-bold text-slate-50">Profile : พัฒธรักษ์ สวัสดี</h1>
      <h1 className="text-3xl font-bold text-slate-50">No : 026640491027-2</h1>
      <h1 className="text-3xl font-bold text-slate-50">Email : pattarak.saw@rmutto.ac.th</h1>
      <hr />
    </div>
  );
}
