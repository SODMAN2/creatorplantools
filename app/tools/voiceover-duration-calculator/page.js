import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import VoiceCalculator from '@/components/VoiceCalculator';

export const metadata = {
  title: 'Voiceover Duration Calculator',
  description: 'Estimate voiceover duration from your script word count and narration speed with this free calculator.',
  alternates: { canonical: '/tools/voiceover-duration-calculator' },
};

export default function Page() {
  return <ToolLayout eyebrow="Voiceover tool" title="Voiceover Duration Calculator" intro="Find out roughly how long your script will take to read aloud at slow, natural, or energetic pacing." tool={<VoiceCalculator />} explanation="This calculator divides your word count by the selected narration speed. The result helps with editing, shot planning, and content deadlines." steps={['Paste your script into a word processor to find its word count.', 'Enter that total and choose the closest narration pace.', 'Rehearse the script once and account for any long pauses, demonstrations, or music breaks.']} faqs={[["How long is a 1,000-word voiceover?", "At 140 words per minute, it is about 7 minutes and 9 seconds before longer pauses or edits."], ["What affects voiceover length?", "Speaking speed, emphasis, breathing, pronunciation, dramatic pauses, and breaks for visuals all change the final duration."], ["Is faster narration better for short-form content?", "Not always. Faster delivery can add energy, but clarity and comprehension should come first."]] }>
    <h2>Plan the delivery and visuals</h2>
    <p>Read the <Link className="content-link" href="/guides/voiceover-pacing-for-videos">voiceover pacing guide</Link> for practical advice on emphasis, pauses, and clarity. If the narration drives your edit, use the <Link className="content-link" href="/guides/how-to-plan-b-roll-for-videos">B-roll planning guide</Link> to match useful visuals to each section.</p>
  </ToolLayout>;
}
