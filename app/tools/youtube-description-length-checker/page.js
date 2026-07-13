import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import YouTubeDescriptionLengthChecker from '@/components/YouTubeDescriptionLengthChecker';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'YouTube Description Length Checker',
  description: 'Check your YouTube description character count, word count, line count, opening preview, and structure with this free browser-based tool.',
  path: '/tools/youtube-description-length-checker',
});

export default function Page() {
  return <ToolLayout
    eyebrow="YouTube tool"
    title="YouTube Description Length Checker"
    intro="Check the length, readability, and structure of a YouTube video description before you publish."
    tool={<YouTubeDescriptionLengthChecker />}
    explanation="The checker counts characters, words, and lines, shows the first 150 characters, and places the description in a simple planning range. It does not predict rankings, views, or traffic."
    steps={[
      'Type or paste your complete YouTube video description into the text box.',
      'Review the live character, word, and line counts plus the first 150-character preview.',
      'Use the status and tips below to improve clarity, structure, and usefulness before publishing.',
    ]}
    faqs={[
      ['How long should a YouTube description be?', 'There is no single perfect length. As a practical starting point, 100–500 characters can cover a basic summary, while 501–2,000 characters gives you room for more detail.'],
      ['Why does the first 150 characters matter?', 'The opening should quickly explain the video because viewers may see only an excerpt before choosing to expand the full description.'],
      ['Do spaces and line breaks count as characters?', 'Yes. The character total includes letters, numbers, spaces, punctuation, symbols, and line breaks.'],
      ['Will a longer description improve my YouTube ranking?', 'Not automatically. A useful description can give viewers context, but length alone does not guarantee rankings, views, or traffic.'],
      ['Should I add links and timestamps?', 'Add them when they help the viewer. Keep the video summary near the top, label sections clearly, and include only relevant links, chapters, credits, or disclosures.'],
      ['Does this tool save my description?', 'No. The tool works in your browser, and your text is not saved or sent to an AI service.'],
    ]}
  >
    <h2>Practical tips for better YouTube descriptions</h2>
    <ul className="steps">
      <li>Open with one or two clear sentences explaining what the video covers and who it helps.</li>
      <li>Put the most useful information early instead of beginning with a long list of links.</li>
      <li>Use short paragraphs, descriptive headings, and line breaks so the text is easy to scan.</li>
      <li>Add chapters, sources, credits, disclosures, and relevant links only when they help the viewer.</li>
      <li>Write naturally, avoid repeated keywords, and check that every promise matches the video.</li>
    </ul>

    <h2>Example YouTube description structure</h2>
    <div className="description-structure">
      <p><strong>1. Opening summary</strong><br />In one or two sentences, explain the video topic and the result or information viewers can expect.</p>
      <p><strong>2. Helpful details</strong><br />Add supporting context, key points, or a short list of resources mentioned in the video.</p>
      <p><strong>3. Chapters or timestamps</strong><br />Use clearly labelled timestamps when the video has useful sections viewers may want to revisit.</p>
      <p><strong>4. Links, credits, and disclosures</strong><br />Finish with relevant links, creator credits, sources, and any necessary sponsorship or affiliate disclosure.</p>
    </div>

    <h2>Plan and polish the rest of your video</h2>
    <p className="muted">Check your packaging with the <Link className="content-link" href="/tools/youtube-title-length-checker">YouTube Title Length Checker</Link>, estimate your draft with the <Link className="content-link" href="/tools/youtube-script-length-calculator">YouTube Script Length Calculator</Link>, or explore a scenario with the <Link className="content-link" href="/tools/youtube-revenue-calculator">YouTube Revenue Calculator</Link>.</p>
    <p className="muted">For more guidance, read <Link className="content-link" href="/guides/how-to-write-better-video-descriptions">How to Write Better Video Descriptions</Link> and use the <Link className="content-link" href="/guides/youtube-video-planning-checklist">YouTube Video Planning Checklist</Link>.</p>
  </ToolLayout>;
}
