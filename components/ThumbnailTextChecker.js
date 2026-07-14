'use client';

import { useState } from 'react';

function getStatus(wordCount) {
  if (wordCount <= 3) return { label: 'Very short', message: 'Quick to scan. Check that the words still communicate a clear idea.', className: 'title-status-short' };
  if (wordCount <= 7) return { label: 'Good thumbnail text length', message: 'This is a practical range for text that viewers can scan quickly.', className: 'title-status-good' };
  if (wordCount <= 12) return { label: 'Getting long', message: 'Try removing filler or keeping only the most important phrase.', className: 'title-status-long' };
  return { label: 'Too long for a thumbnail', message: 'Choose one main idea and shorten it so the text is easier to read at a small size.', className: 'title-status-too-long' };
}

export default function ThumbnailTextChecker() {
  const [text, setText] = useState('');
  const characterCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const status = getStatus(wordCount);

  return <>
    <div className="field">
      <label htmlFor="thumbnail-text">Thumbnail or cover text</label>
      <textarea id="thumbnail-text" rows="4" placeholder="e.g. Stop Doing This" value={text} onChange={(event) => setText(event.target.value)} autoFocus />
    </div>
    <div className="title-counts" aria-label="Thumbnail text counts">
      <div><strong>{characterCount}</strong><span>Characters</span></div>
      <div><strong>{wordCount}</strong><span>Words</span></div>
    </div>
    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Readability status</span><strong>{status.label}</strong><p>{status.message}</p>
    </div>
  </>;
}
