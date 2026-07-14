'use client';

import { useState } from 'react';

const initialValues = { topic: '', platform: 'YouTube', audience: '', goal: '', hook: '', point1: '', point2: '', point3: '', cta: '', notes: '' };
const transitions = ['Now that we have covered that, let us move to the next point.', 'Here is what that looks like in practice.', 'The next step builds on this idea.'];

export default function VideoScriptOutlineBuilder() {
  const [values, setValues] = useState(initialValues);
  const update = (field) => (event) => setValues({ ...values, [field]: event.target.value });
  const points = [values.point1, values.point2, values.point3];
  return <div className="outline-builder">
    <div className="outline-form">
      <div className="field"><label htmlFor="outline-topic">Video topic</label><input id="outline-topic" value={values.topic} onChange={update('topic')} placeholder="e.g. How to organise a small home office" /></div>
      <div className="field"><label htmlFor="outline-platform">Platform</label><select id="outline-platform" value={values.platform} onChange={update('platform')}><option>YouTube</option><option>TikTok</option><option>YouTube Shorts</option><option>Instagram Reels</option><option>Instagram</option><option>Faceless video</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="outline-audience">Target audience</label><input id="outline-audience" value={values.audience} onChange={update('audience')} placeholder="e.g. Beginners working from home" /></div>
      <div className="field"><label htmlFor="outline-goal">Video goal</label><input id="outline-goal" value={values.goal} onChange={update('goal')} placeholder="e.g. Help viewers plan a practical setup" /></div>
      <div className="field"><label htmlFor="outline-hook">Hook/opening idea</label><textarea id="outline-hook" rows="3" value={values.hook} onChange={update('hook')} placeholder="What will make the right viewer want to continue?" /></div>
      {[1, 2, 3].map((number) => <div className="field" key={number}><label htmlFor={`outline-point-${number}`}>Main point {number}</label><textarea id={`outline-point-${number}`} rows="2" value={values[`point${number}`]} onChange={update(`point${number}`)} placeholder={`Idea, step, or story beat ${number}`} /></div>)}
      <div className="field"><label htmlFor="outline-cta">Call to action</label><textarea id="outline-cta" rows="2" value={values.cta} onChange={update('cta')} placeholder="e.g. Try the first step and save this plan for later" /></div>
      <div className="field"><label htmlFor="outline-notes">Notes</label><textarea id="outline-notes" rows="3" value={values.notes} onChange={update('notes')} placeholder="Visuals, examples, sources, props, or reminders" /></div>
      <button className="button secondary" type="button" onClick={() => setValues(initialValues)}>Clear outline</button>
    </div>
    <section className="outline-preview" aria-live="polite" aria-labelledby="outline-preview-title">
      <div className="outline-preview-head"><span>{values.platform} outline</span><h2 id="outline-preview-title">{values.topic || 'Your video script outline'}</h2>{values.audience && <p><strong>Audience:</strong> {values.audience}</p>}{values.goal && <p><strong>Goal:</strong> {values.goal}</p>}</div>
      <div className="outline-section"><h3>Hook</h3><p>{values.hook || 'Add an opening idea that introduces the value of the video.'}</p></div>
      <div className="outline-section"><h3>Intro</h3><p>{values.topic ? `Introduce ${values.topic}${values.audience ? ` for ${values.audience}` : ''} and briefly explain what the viewer will learn.` : 'Briefly introduce the topic and tell viewers what the video will cover.'}</p></div>
      <div className="outline-section"><h3>Main points</h3><ol>{points.map((point, index) => <li key={index}>{point || `Add main point ${index + 1}.`}</li>)}</ol></div>
      <div className="outline-section"><h3>Example transition lines</h3><ul>{transitions.map((line) => <li key={line}>{line}</li>)}</ul></div>
      <div className="outline-section"><h3>Call to action</h3><p>{values.cta || 'Add a relevant next step for the viewer, if the video needs one.'}</p></div>
      <div className="outline-section"><h3>Notes</h3><p className="preserve-lines">{values.notes || 'Add recording, visual, sourcing, or editing reminders.'}</p></div>
    </section>
  </div>;
}
