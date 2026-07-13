'use client';

import { useState } from 'react';

function getStatus(characterCount) {
  if (characterCount < 20) return { label: 'Too short', message: 'Add enough detail to make the video topic and value clear.', className: 'title-status-short' };
  if (characterCount <= 70) return { label: 'Good length', message: 'This title is in a clear, readable planning range.', className: 'title-status-good' };
  if (characterCount <= 100) return { label: 'Getting long', message: 'Consider moving the most important words earlier or trimming extra detail.', className: 'title-status-long' };
  return { label: 'Too long', message: 'Shorten the title so its main idea is easier to scan on smaller screens.', className: 'title-status-too-long' };
}

export default function YouTubeTitleLengthChecker() {
  const [title, setTitle] = useState('');
  const characterCount = title.length;
  const wordCount = title.trim() ? title.trim().split(/\s+/).length : 0;
  const status = getStatus(characterCount);

  return <>
    <div className="field">
      <label htmlFor="youtube-title">Video title</label>
      <textarea id="youtube-title" rows="4" placeholder="e.g. How to Plan a YouTube Video from Start to Finish" value={title} onChange={(event) => setTitle(event.target.value)} autoFocus />
    </div>
    <div className="title-counts" aria-label="Title counts">
      <div><strong>{characterCount}</strong><span>Characters</span></div>
      <div><strong>{wordCount}</strong><span>Words</span></div>
    </div>
    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Title status</span><strong>{status.label}</strong><p>{status.message}</p>
    </div>
  </>;
}
