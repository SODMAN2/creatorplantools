'use client';

import { useState } from 'react';

function getStatus(characterCount) {
  if (characterCount < 100) return { label: 'Too short', message: 'Add more useful context about the video and what viewers can expect.', className: 'title-status-short' };
  if (characterCount <= 500) return { label: 'Good basic description', message: 'This is a useful basic length for a clear video summary.', className: 'title-status-good' };
  if (characterCount <= 2000) return { label: 'Detailed description', message: 'There is room here for a summary, helpful details, links, and credits.', className: 'title-status-long' };
  return { label: 'Very long description', message: 'Check that every section is useful and remove repeated or outdated information.', className: 'title-status-too-long' };
}

export default function YouTubeDescriptionLengthChecker() {
  const [description, setDescription] = useState('');
  const characterCount = description.length;
  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0;
  const lineCount = description ? description.split(/\r\n|\r|\n/).length : 0;
  const preview = description.slice(0, 150);
  const status = getStatus(characterCount);

  return <>
    <div className="field">
      <label htmlFor="youtube-description">Video description</label>
      <textarea id="youtube-description" className="description-input" rows="12" placeholder="Paste or write your YouTube video description here..." value={description} onChange={(event) => setDescription(event.target.value)} autoFocus />
    </div>
    <div className="description-counts" aria-label="Description counts">
      <div><strong>{characterCount}</strong><span>Characters</span></div>
      <div><strong>{wordCount}</strong><span>Words</span></div>
      <div><strong>{lineCount}</strong><span>Lines</span></div>
    </div>
    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Description status</span><strong>{status.label}</strong><p>{status.message}</p>
    </div>
    <div className="description-preview">
      <div><strong>First 150 characters</strong><span>{Math.min(characterCount, 150)}/150</span></div>
      <p>{preview || 'Your opening preview will appear here.'}</p>
    </div>
  </>;
}
