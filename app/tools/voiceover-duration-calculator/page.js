import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import VoiceCalculator from '@/components/VoiceCalculator';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Voiceover Duration Calculator',
  description: 'Estimate spoken voiceover time from word count and pace. Compare timing examples, allow for pauses, and check your draft with a recorded read.',
  path: '/tools/voiceover-duration-calculator',
});

export default function Page() {
  return <ToolLayout eyebrow="Voiceover tool" title="Voiceover Duration Calculator" intro="Enter your spoken script word count and choose a pace to estimate minutes and seconds of narration." tool={<VoiceCalculator />} explanation="Estimated minutes = spoken words ÷ words per minute. The result is rounded to the nearest second. It estimates one read of your narration, not the entire recording session or finished video." steps={['Count the words that will actually be spoken; exclude headings, visual directions, pronunciation notes and pickup logs.', 'Enter a positive whole word count and choose the closest narration pace. WPM means words per minute.', 'Record a representative read. Allow for longer pauses and visual holds, and replace the estimate with the measured timing when available.']} faqs={[
    ['How long is a 1,000-word voiceover?', 'At 140 words per minute, 1,000 words is approximately 7 minutes and 9 seconds. Longer pauses and visual holds can extend the finished runtime.'],
    ['Does the estimate include retakes?', 'No. Retakes and setup add time to the recording session. A selected retake normally replaces an original line in the edit rather than adding to the finished voiceover.'],
    ['Why does my recording differ from the estimate?', 'Your actual pace varies with breathing, emphasis, pronunciation and familiarity. The selected pace is a planning assumption, so a recorded read gives a better measurement.'],
    ['Is faster narration better for short-form content?', 'Not always. Faster delivery can add energy, but clarity and comprehension should come first.'],
  ]}>
    <p className="muted"><time dateTime="2026-09-20">Last updated: September 20, 2026</time></p>
    <h2>Word-count and pace examples</h2>
    <ul className="steps">
      <li><strong>140 words at 140 WPM:</strong> 140 ÷ 140 = 1 minute of estimated speech.</li>
      <li><strong>330 words at 110 WPM:</strong> 330 ÷ 110 = 3 minutes. A separate 20-second visual demonstration would make the planned total 3 minutes 20 seconds.</li>
      <li><strong>700 words at 140 WPM:</strong> 700 ÷ 140 = 5 minutes. At 170 WPM, the same text is about 4 minutes 7 seconds.</li>
    </ul>
    <h2>What the estimate excludes</h2>
    <p>The calculator does not read your delivery notes or measure pauses. Longer silences, visual-only demonstrations, music breaks, retakes and recording setup are not added automatically. If a pace measured from your own read already includes ordinary breathing and pauses, do not add those same gaps twice.</p>
    <p>For example, a 700-word draft at 140 WPM plus a separate 15-second visual hold gives a planning total of 5 minutes 15 seconds. A real read may still differ. Time the assembled narration and visuals before fixing the final edit length.</p>
    <h2>Prepare a script you can record</h2>
    <p>Use the <Link className="content-link" href="/guides/voiceover-script-format-template">voiceover script format template</Link> to mark pauses, pronunciation and pickups. Use the <Link className="content-link" href="/guides/two-column-video-script-template">two-column video script template</Link> when narration must line up with specific shots or silent holds.</p>
    <h2>Plan the delivery and visuals</h2>
    <p>Read the <Link className="content-link" href="/guides/voiceover-pacing-for-videos">voiceover pacing guide</Link> for practical advice on emphasis, pauses, and clarity. If the narration drives your edit, use the <Link className="content-link" href="/guides/how-to-plan-b-roll-for-videos">B-roll planning guide</Link> to match useful visuals to each section.</p>
  </ToolLayout>;
}
