'use client';

import { useState } from 'react';

const DESCRIPTION_LIMIT = 5000;

export default function YouTubeDescriptionLengthChecker() {
  const [description, setDescription] = useState('');
  const characterCount = description.length;
  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0;
  const lineCount = description ? description.split(/\r\n|\r|\n/).length : 0;
  const preview = description.slice(0, 150);
  const remaining = DESCRIPTION_LIMIT - characterCount;
  const status = characterCount === 0
    ? { label: 'Add a description to check', className: 'title-status-short' }
    : remaining < 0
      ? { label: `${Math.abs(remaining).toLocaleString('en-GB')} ${remaining === -1 ? 'character' : 'characters'} over the limit`, className: 'title-status-too-long' }
      : { label: `${remaining.toLocaleString('en-GB')} ${remaining === 1 ? 'character' : 'characters'} remaining`, className: 'title-status-good' };

  return <>
    <div className="field">
      <label htmlFor="youtube-description">Video description</label>
      <textarea id="youtube-description" className="description-input" rows="12" placeholder="Paste or write your YouTube video description here..." value={description} onChange={(event) => setDescription(event.target.value)} aria-describedby="description-limit-note" aria-invalid={remaining < 0} />
      <p className="tool-note" id="description-limit-note">YouTube’s description maximum is 5,000 characters. Include all text, spaces, line breaks, links and timestamps.</p>
    </div>
    <div className="description-counts" aria-label="Description counts">
      <div><strong>{characterCount}</strong><span>Characters</span></div>
      <div><strong>{wordCount}</strong><span>Words</span></div>
      <div><strong>{lineCount}</strong><span>Lines</span></div>
    </div>
    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Length check against 5,000 characters</span><strong>{status.label}</strong><p>{remaining < 0 ? 'Shorten the draft by at least this many characters, then recheck.' : 'Being within the limit does not validate writing quality, links or chapter functionality.'}</p>
    </div>
    <div className="description-preview">
      <div><strong>First 150 characters</strong><span>{Math.min(characterCount, 150)}/150</span></div>
      <p>{preview || 'Your opening preview will appear here.'}</p>
      <p className="tool-note">Illustrative preview only. 150 characters is not an official or guaranteed YouTube search-display limit.</p>
    </div>
  </>;
}
