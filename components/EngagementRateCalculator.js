'use client';

import {useState} from 'react';

const numberFormatter=new Intl.NumberFormat('en-US',{maximumFractionDigits:2});
const percentageFormatter=new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

export default function EngagementRateCalculator(){
  const[values,setValues]=useState({likes:1200,comments:80,shares:45,saves:25,views:25000,followers:10000});
  const[method,setMethod]=useState('views');
  const update=(field,value)=>setValues(current=>({...current,[field]:value}));
  const safe=(field)=>Math.max(0,Number(values[field])||0);
  const total=safe('likes')+safe('comments')+safe('shares')+safe('saves');
  const denominator=safe(method);
  const rate=denominator>0?(total/denominator)*100:null;
  const basis=method==='views'?'views':'followers';

  return <>
    <fieldset className="calculation-method">
      <legend>Calculate engagement rate by</legend>
      <div className="method-options">
        <label className={method==='views'?'selected':''}><input type="radio" name="engagement-method" value="views" checked={method==='views'} onChange={e=>setMethod(e.target.value)}/> Views</label>
        <label className={method==='followers'?'selected':''}><input type="radio" name="engagement-method" value="followers" checked={method==='followers'} onChange={e=>setMethod(e.target.value)}/> Followers</label>
      </div>
    </fieldset>
    <div className="engagement-inputs">
      {['likes','comments','shares','saves'].map(field=><div className="field" key={field}><label htmlFor={`engagement-${field}`}>{field[0].toUpperCase()+field.slice(1)}</label><input id={`engagement-${field}`} type="number" min="0" step="1" inputMode="numeric" value={values[field]} onChange={e=>update(field,e.target.value)}/></div>)}
    </div>
    <div className="engagement-inputs denominator-inputs">
      <div className="field"><label htmlFor="engagement-views">Views</label><input id="engagement-views" type="number" min="0" step="1" inputMode="numeric" value={values.views} onChange={e=>update('views',e.target.value)}/></div>
      <div className="field"><label htmlFor="engagement-followers">Followers</label><input id="engagement-followers" type="number" min="0" step="1" inputMode="numeric" value={values.followers} onChange={e=>update('followers',e.target.value)}/></div>
    </div>
    <div className="engagement-result" aria-live="polite">
      <span>Engagement rate by {basis}</span>
      <strong>{rate===null?'—':`${percentageFormatter.format(rate)}%`}</strong>
      {rate===null?<p>Enter more than zero {basis} to calculate a rate.</p>:<p>{numberFormatter.format(total)} total engagements across {numberFormatter.format(denominator)} {basis}. That is about {percentageFormatter.format(rate)} engagements for every 100 {basis}.</p>}
    </div>
    <p className="formula-note">Formula: (likes + comments + shares + saves) ÷ {basis} × 100</p>
  </>;
}
