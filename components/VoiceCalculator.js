'use client';

import { useState } from 'react';

export default function VoiceCalculator() {
  const [words, setWords] = useState('1000');
  const [wpm, setWpm] = useState('140');
  const valid = words.trim() !== '' && Number.isSafeInteger(Number(words)) && Number(words) > 0;
  const seconds = valid ? Math.round(Number(words) / Number(wpm) * 60) : 0;
  const time = `${Math.floor(seconds / 60)} min ${seconds % 60} sec`;

  return <>
    <div className="field">
      <label htmlFor="voiceover-word-count">Spoken script word count</label>
      <input id="voiceover-word-count" type="number" min="1" step="1" value={words} onChange={(event) => setWords(event.target.value)} aria-describedby="voiceover-word-help" aria-invalid={!valid} />
      <p className="tool-note" id="voiceover-word-help">Count narration only. Leave out headings, visual cues and recording notes.</p>
    </div>
    <div className="field"><label htmlFor="voiceover-pace">Voiceover pace</label><select id="voiceover-pace" value={wpm} onChange={(event) => setWpm(event.target.value)}><option value="110">Slow and deliberate — 110 WPM</option><option value="140">Natural — 140 WPM</option><option value="170">Energetic — 170 WPM</option></select></div>
    <div className="result" aria-live="polite"><span>Estimated spoken duration</span><strong>{valid ? time : 'Enter a positive whole word count'}</strong><span>Allow separately for longer pauses, visual holds and retakes. Confirm the finished timing with a recorded read.</span></div>
  </>;
}
