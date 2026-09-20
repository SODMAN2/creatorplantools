'use client';
import {useState} from 'react';
const currency=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
export default function YouTubeRevenueCalculator(){
  const[views,setViews]=useState(100000);
  const[rpm,setRpm]=useState(4);
  const toSafeNumber=(value)=>{
    const number=Number(value);
    return Number.isFinite(number)?Math.max(0,number):0;
  };
  const safeViews=toSafeNumber(views);
  const safeRpm=toSafeNumber(rpm);
  const monthlyRevenue=(safeViews/1000)*safeRpm;
  const format=(value)=>Number.isFinite(value)?currency.format(value):'Too large to calculate';

  return <>
    <p id="revenue-input-note" className="muted">Use views and RPM for the same content and reporting period. For Shorts RPM, use the matching engaged views.</p>
    <div className="field">
      <label htmlFor="monthly-views">Monthly views</label>
      <input id="monthly-views" type="number" min="0" step="1000" inputMode="numeric" aria-describedby="revenue-input-note" value={views} onChange={e=>setViews(e.target.value)}/>
    </div>
    <div className="field">
      <label htmlFor="rpm">RPM (revenue per 1,000 views, USD)</label>
      <input id="rpm" type="number" min="0" step="0.01" inputMode="decimal" aria-describedby="revenue-input-note" value={rpm} onChange={e=>setRpm(e.target.value)}/>
    </div>
    <div className="revenue-results" aria-live="polite">
      <div><span>Estimated monthly revenue</span><strong>{format(monthlyRevenue)}</strong></div>
      <div><span>Estimated yearly revenue</span><strong>{format(monthlyRevenue*12)}</strong></div>
      <p>Estimate only. Actual earnings can be higher or lower and are not guaranteed. The yearly projection assumes the same monthly views and RPM for 12 months.</p>
    </div>
    <p className="formula-note">Monthly estimate: views ÷ 1,000 × RPM. Yearly projection: monthly estimate × 12.</p>
  </>;
}
