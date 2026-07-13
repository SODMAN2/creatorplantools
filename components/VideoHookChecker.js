'use client';

import { useState } from 'react';

function getStatus(wordCount) {
  if (wordCount < 5) return { label: 'Too short', message: 'Add a little more detail so the viewer can quickly understand the topic or benefit.', className: 'title-status-short' };
  if (wordCount <= 18) return { label: 'Good hook length', message: 'This is a useful length for a clear opening. Read it aloud and check that it matches the video.', className: 'title-status-good' };
  if (wordCount <= 30) return { label: 'Getting long', message: 'Look for setup, filler, or repeated ideas you can move later in the video.', className: 'title-status-long' };
  return { label: 'Too long', message: 'Try leading with one clear promise, problem, question, or result and save the context for later.', className: 'title-status-too-long' };
}

function formatSpeakingTime(wordCount) {
  if (wordCount === 0) return '0 sec';
  const seconds = Math.max(1, Math.ceil((wordCount / 150) * 60));
  if (seconds < 60) return `${seconds} sec`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return remainingSeconds ? `${minutes} min ${remainingSeconds} sec` : `${minutes} min`;
}

export default function VideoHookChecker() {
  const [hook, setHook] = useState('');
  const characterCount = hook.length;
  const wordCount = hook.trim() ? hook.trim().split(/\s+/).length : 0;
  const status = getStatus(wordCount);

  return <>
    <div className="field">
      <label htmlFor="video-hook">Video hook or opening line</label>
      <textarea id="video-hook" className="hook-input" rows="8" placeholder="e.g. If your videos feel slow, cut these three things before you record again." value={hook} onChange={(event) => setHook(event.target.value)} autoFocus />
    </div>
    <div className="title-counts hook-counts" aria-label="Hook counts and estimated speaking time">
      <div><strong>{characterCount}</strong><span>Characters</span></div>
      <div><strong>{wordCount}</strong><span>Words</span></div>
      <div><strong>{formatSpeakingTime(wordCount)}</strong><span>Speaking time</span></div>
    </div>
    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Hook status</span><strong>{status.label}</strong><p>{status.message}</p>
    </div>
    <p className="tool-note">Speaking time is estimated at 150 words per minute. Your delivery, pauses, and emphasis will affect the actual time.</p>
  </>;
}
