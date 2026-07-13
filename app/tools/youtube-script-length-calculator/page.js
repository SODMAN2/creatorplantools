import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import ScriptCalculator from '@/components/ScriptCalculator';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'YouTube Script Length Calculator',
  description: 'Calculate the ideal YouTube script word count for your target video length and speaking pace.',
  path: '/tools/youtube-script-length-calculator',
});

export default function Page() {
  return <ToolLayout eyebrow="YouTube tool" title="YouTube Script Length Calculator" intro="Estimate how many words you need for a YouTube video based on its target length and your speaking pace." tool={<ScriptCalculator />} explanation="The calculator multiplies your target duration by a realistic speaking rate. It gives you a useful first-draft target—not a rigid rule." steps={['Enter the finished video length you are aiming for.', 'Choose a speaking pace that matches your delivery style.', 'Use the suggested word count as your drafting target, then rehearse and adjust.']} faqs={[["How many words are in a 10-minute YouTube video?", "At a conversational 140 words per minute, about 1,400 words. Visual breaks and pauses can reduce the script length needed."], ["What is a good speaking pace for YouTube?", "Around 130–150 words per minute suits many explanatory videos. Tutorials may be slower, while entertainment content can be faster."], ["Should I script every word?", "It depends on your style. Faceless videos and detailed explainers often benefit from full scripts; conversational videos may only need structured notes."]] }>
    <h2>Turn the estimate into a workable script</h2>
    <p>Use the <Link className="content-link" href="/guides/how-long-should-a-youtube-script-be">YouTube script length guide</Link> to account for pauses, demonstrations, and editing style. When the draft is ready, the <Link className="content-link" href="/tools/voiceover-duration-calculator">Voiceover Duration Calculator</Link> can help you check its likely spoken runtime.</p>
  </ToolLayout>;
}
