'use client';

import {useState} from 'react';

const numberFormatter=new Intl.NumberFormat('en-US',{maximumFractionDigits:2});

export default function WatchTimeCalculator(){
  const[views,setViews]=useState(10000);
  const[duration,setDuration]=useState(30);
  const[unit,setUnit]=useState('seconds');
  const toSafeNumber=(value)=>{
    const number=Number(value);
    return Number.isFinite(number)?Math.max(0,number):0;
  };
  const safeViews=toSafeNumber(views);
  const safeDuration=toSafeNumber(duration);
  const totalMinutes=safeViews*safeDuration*(unit==='seconds'?1/60:1);
  const totalHours=totalMinutes/60;
  const totalDays=totalHours/24;
  const format=(value)=>Number.isFinite(value)?numberFormatter.format(value):'Too large to calculate';

  return <>
    <div className="field">
      <label htmlFor="watch-time-views">Total views</label>
      <input id="watch-time-views" type="number" min="0" step="1" inputMode="numeric" value={views} onChange={event=>setViews(event.target.value)}/>
    </div>
    <div className="duration-fields">
      <div className="field">
        <label htmlFor="average-view-duration">Average view duration</label>
        <input id="average-view-duration" type="number" min="0" step="0.1" inputMode="decimal" value={duration} onChange={event=>setDuration(event.target.value)}/>
      </div>
      <div className="field">
        <label htmlFor="duration-unit">Duration unit</label>
        <select id="duration-unit" value={unit} onChange={event=>setUnit(event.target.value)}>
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
        </select>
      </div>
    </div>
    <div className="watch-time-results" aria-live="polite">
      <div><span>Total minutes</span><strong>{format(totalMinutes)}</strong></div>
      <div><span>Total hours</span><strong>{format(totalHours)}</strong></div>
      <div><span>Total days</span><strong>{format(totalDays)}</strong></div>
      <p>Estimated watch time across all entered views. One day equals 24 total watch hours.</p>
    </div>
    <p className="formula-note">Formula: views × average view duration</p>
  </>;
}
