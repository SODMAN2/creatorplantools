'use client';

import { useId, useState } from 'react';

export default function CopyableTemplate({ label, text }) {
  const id = useId();
  const [message, setMessage] = useState('');

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied. Paste into your own document to edit it.');
    } catch {
      setMessage('Select the text below and use your device’s Copy command.');
    }
  }

  return <div className="guide-template">
    <div className="guide-template-heading"><label htmlFor={id}>{label}</label><button type="button" className="button" onClick={copy}>Copy text</button></div>
    <textarea id={id} readOnly value={text} rows={Math.min(20, text.split('\n').length + 1)} spellCheck={false} />
    <p className="guide-copy-status" role="status">{message || 'Copy this text into your own document to edit it.'}</p>
  </div>;
}
