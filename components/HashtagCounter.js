'use client';

import { useState } from 'react';

function findHashtags(text) {
  return text.match(/#[\p{L}\p{M}\p{N}_]+/gu) || [];
}

function getStatus(count) {
  if (count === 0) return {
    label: 'No hashtags found',
    message: 'Add a hashtag beginning with # to see it counted here.',
    className: 'hashtag-status-empty',
  };
  if (count <= 10) return {
    label: 'Good hashtag range',
    message: 'You have between 1 and 10 hashtags. Check that each one is relevant to the content.',
    className: 'title-status-good',
  };
  return {
    label: 'Too many hashtags',
    message: 'Consider removing broad, repeated, or less relevant hashtags to keep the list focused.',
    className: 'title-status-too-long',
  };
}

export default function HashtagCounter() {
  const [text, setText] = useState('');
  const hashtags = findHashtags(text);
  const seen = new Set();
  const uniqueHashtags = hashtags.filter((hashtag) => {
    const normalized = hashtag.toLocaleLowerCase();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
  const duplicateCount = hashtags.length - uniqueHashtags.length;
  const cleanedOutput = uniqueHashtags.join(' ');
  const status = getStatus(hashtags.length);

  return <>
    <div className="field">
      <label htmlFor="hashtag-text">Hashtags or caption text</label>
      <textarea
        id="hashtag-text"
        className="hashtag-input"
        rows="10"
        placeholder="Paste a caption or hashtags here, for example: Planning my next video #ContentCreator #YouTubeTips"
        value={text}
        onChange={(event) => setText(event.target.value)}
        autoFocus
      />
    </div>

    <div className="hashtag-counts" aria-label="Hashtag counts">
      <div><strong>{hashtags.length}</strong><span>Total hashtags</span></div>
      <div><strong>{uniqueHashtags.length}</strong><span>Unique hashtags</span></div>
    </div>

    <div className={`hashtag-duplicate ${duplicateCount ? 'hashtag-duplicate-warning' : ''}`} aria-live="polite">
      <strong>{duplicateCount ? `${duplicateCount} duplicate ${duplicateCount === 1 ? 'hashtag' : 'hashtags'} found` : 'No duplicate hashtags found'}</strong>
      <span>{duplicateCount ? 'The cleaned output below keeps the first version of each hashtag.' : 'Hashtags with different capitalisation are treated as the same hashtag.'}</span>
    </div>

    <div className={`title-status ${status.className}`} aria-live="polite">
      <span>Hashtag status</span><strong>{status.label}</strong><p>{status.message}</p>
    </div>

    <section className="hashtag-results" aria-labelledby="detected-hashtags-heading">
      <h3 id="detected-hashtags-heading">Detected hashtags</h3>
      {hashtags.length
        ? <div className="hashtag-list">{hashtags.map((hashtag, index) => <span key={`${hashtag}-${index}`}>{hashtag}</span>)}</div>
        : <p className="muted">Detected hashtags will appear here.</p>}
    </section>

    <div className="field hashtag-cleaned">
      <label htmlFor="cleaned-hashtags">Cleaned hashtags</label>
      <textarea
        id="cleaned-hashtags"
        rows="4"
        value={cleanedOutput}
        placeholder="Your hashtags without duplicates will appear here."
        readOnly
      />
      <p className="field-help">Duplicates are removed without changing your original text.</p>
    </div>
  </>;
}
