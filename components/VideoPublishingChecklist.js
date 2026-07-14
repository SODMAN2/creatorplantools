'use client';

import { useState } from 'react';

const sections = [
  ['Video Planning', ['Clear topic', 'Strong hook', 'Clear audience', 'Main points prepared', 'Call to action included']],
  ['Script and Voiceover', ['Script checked', 'Intro is not too long', 'Voiceover pacing checked', 'No unnecessary repetition', 'Ending is clear']],
  ['Title, Description and Caption', ['Title is clear', 'Description/caption is written', 'Important keywords included naturally', 'No misleading claims', 'Links or credits added if needed']],
  ['Thumbnail or First Frame', ['Visual is clear', 'Text is readable if used', 'Not too crowded', 'Matches the video topic']],
  ['Final Upload Check', ['Video watched once before publishing', 'Audio level checked', 'Spelling checked', 'Platform settings checked', 'Publish date/time planned']],
];

const items = sections.flatMap(([, sectionItems]) => sectionItems);

function getReadiness(percentage) {
  if (percentage === 100) return { label: 'Ready to publish', className: 'checklist-ready' };
  if (percentage >= 50) return { label: 'Almost ready', className: 'checklist-almost' };
  return { label: 'Needs more preparation', className: 'checklist-needs-work' };
}

export default function VideoPublishingChecklist() {
  const [completed, setCompleted] = useState({});
  const completedCount = items.filter((item) => completed[item]).length;
  const percentage = Math.round((completedCount / items.length) * 100);
  const readiness = getReadiness(percentage);

  function toggle(item) {
    setCompleted((current) => ({ ...current, [item]: !current[item] }));
  }

  return <div className="publishing-checklist">
    <div className="checklist-summary" aria-live="polite">
      <div><strong>{items.length}</strong><span>Total items</span></div>
      <div><strong>{completedCount}</strong><span>Completed</span></div>
      <div><strong>{percentage}%</strong><span>Complete</span></div>
    </div>
    <div className={`checklist-readiness ${readiness.className}`} aria-live="polite">
      <span>Publishing readiness</span>
      <strong>{readiness.label}</strong>
      <div className="checklist-progress" role="progressbar" aria-label="Checklist completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow={percentage}>
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
    {sections.map(([title, sectionItems]) => <fieldset className="checklist-section" key={title}>
      <legend>{title}</legend>
      {sectionItems.map((item) => <label className="checklist-item" key={item}>
        <input type="checkbox" checked={Boolean(completed[item])} onChange={() => toggle(item)} />
        <span>{item}</span>
      </label>)}
    </fieldset>)}
    <button className="checklist-reset" type="button" onClick={() => setCompleted({})} disabled={completedCount === 0}>Clear checklist</button>
    <p className="tool-note">Your selections stay on this page only and are not saved.</p>
  </div>;
}
