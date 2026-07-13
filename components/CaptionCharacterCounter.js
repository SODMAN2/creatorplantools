'use client';

import { useState } from 'react';

function getStatus(characterCount) {
  if (characterCount < 50) return {
    label: 'Very short caption',
    message: 'This may work for a quick thought, but check whether a little more context would help the reader.',
    className: 'caption-status-very-short',
  };
  if (characterCount <= 300) return {
    label: 'Good caption length',
    message: 'This is a practical length for a clear, focused social caption.',
    className: 'title-status-good',
  };
  if (characterCount <= 1000) return {
    label: 'Long caption',
    message: 'There is room for more detail. Use line breaks and remove anything that does not help the reader.',
    className: 'title-status-long',
  };
  return {
    label: 'Very long caption',
    message: 'Review the caption for repeated ideas and make sure the opening communicates the main point quickly.',
    className: 'title-status-too-long',
  };
}

function formatReadingTime(wordCount) {
  if (wordCount === 0) return '0 sec';
  const seconds = Math.max(1, Math.round((wordCount / 200) * 60));
  if (seconds < 60) return `~${seconds} sec`;
  const minutes = Math.ceil(seconds / 60);
  return `~${minutes} min`;
}

export default function CaptionCharacterCounter() {
  const [caption, setCaption] = useState('');
  const characterCount = caption.length;
  const wordCount = caption.trim() ? caption.trim().split(/\s+/).length : 0;
  const lineCount = caption ? caption.split(/\r\n|\r|\n/).length : 0;
  const readingTime = formatReadingTime(wordCount);
  const status = getStatus(characterCount);

  return <>
    <div className="field">
      <label htmlFor="caption-text">Caption text</label>
      <textarea
        id="caption-text"
        className="caption-input"
        rows="11"
        placeholder="Write or paste your TikTok, Instagram, Shorts, Reels, or social post caption here..."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
        autoFocus
      />
    </div>

    <div className="caption-counts" aria-label="Caption counts">
      <div><strong>{characterCount}</strong><span>Characters</span></div>
      <div><strong>{wordCount}</strong><span>Words</span></div>
      <div><strong>{lineCount}</strong><span>Lines</span></div>
      <div><strong>{readingTime}</strong><span>Est. reading time</span></div>
    </div>

    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Caption status</span><strong>{status.label}</strong><p>{status.message}</p>
    </div>
    <p className="field-help caption-note">Length is only one editing check. It does not guarantee reach, views, ranking, or engagement.</p>
  </>;
}
