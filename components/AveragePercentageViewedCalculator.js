'use client';

import { useState } from 'react';
import { calculateAveragePercentageViewed, describeDuration, formatPercentage } from '@/lib/averagePercentageViewed.mjs';

export default function AveragePercentageViewedCalculator() {
  const [videoLength, setVideoLength] = useState('10:00');
  const [averageViewDuration, setAverageViewDuration] = useState('5:00');
  const [touched, setTouched] = useState({});
  const result = calculateAveragePercentageViewed(videoLength, averageViewDuration);
  const fields = [
    { key: 'videoLength', id: 'apv-video-length', label: 'Video length', value: videoLength, setValue: setVideoLength, hint: 'The full runtime of this one video. For example, 10:00 means 10 minutes.' },
    { key: 'averageViewDuration', id: 'apv-average-duration', label: 'Average view duration', value: averageViewDuration, setValue: setAverageViewDuration, hint: 'The average time watched for the same video and reporting period. For example, 5:00 means 5 minutes.' },
  ];

  return <div className="apv-calculator">
    <p id="apv-format" className="muted">Enter minutes:seconds, such as <strong>5:00</strong>, or hours:minutes:seconds, such as <strong>1:05:00</strong>. For less than a second, use <strong>0:00.5</strong>. An example is filled in below.</p>
    {fields.map(({ key, id, label, value, setValue, hint }) => {
      const error = touched[key] ? result.errors[key] : null;
      return <div className="field" key={key}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" value={value} maxLength={24} spellCheck={false} autoComplete="off" aria-invalid={Boolean(error)} aria-describedby={`apv-format ${id}-hint${error ? ` ${id}-error` : ''}`} onChange={(event) => setValue(event.target.value)} onBlur={() => setTouched((current) => ({ ...current, [key]: true }))} />
        <p id={`${id}-hint`} className="apv-hint">{hint}</p>
        {error && <p id={`${id}-error`} className="apv-error" role="alert">{label}: {error}</p>}
      </div>;
    })}
    <div className="apv-result" role="status" aria-live="polite" aria-atomic="true">
      {result.percentage === null ? <p>Enter a valid video length greater than zero and an average view duration of zero or more to see your result.</p> : <>
        <span>Average Percentage Viewed</span>
        <strong className="apv-percentage">{formatPercentage(result.percentage)}</strong>
        <p className="apv-arithmetic">{describeDuration(result.averageMilliseconds)} average view duration ÷ {describeDuration(result.videoMilliseconds)} video length × 100 = {formatPercentage(result.percentage)}</p>
        {result.percentage > 100 && <p><strong>Above 100%:</strong> the average time watched is longer than one full runtime. This is mathematically possible when replay or loop viewing is included in the duration you enter. Check your platform’s reporting definitions.</p>}
      </>}
    </div>
    <p className="apv-hint">Updates as you type. Results use at most one decimal place; a non-zero result below 0.1% is shown as &lt;0.1%. Rounded analytics inputs can give a slightly different result from platform reports.</p>
  </div>;
}
