import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import YouTubeDescriptionLengthChecker from '@/components/YouTubeDescriptionLengthChecker';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'YouTube Description Length Checker',
  description: 'Count YouTube description characters against the 5,000-character limit. See remaining space or over-limit text, word count and an illustrative opening preview.',
  path: '/tools/youtube-description-length-checker',
});

export default function Page() {
  return <ToolLayout
    eyebrow="YouTube tool"
    title="YouTube Description Length Checker"
    intro="Count your YouTube description’s characters and see how much space remains within the 5,000-character maximum."
    tool={<YouTubeDescriptionLengthChecker />}
    explanation="The checker counts characters, words and lines, shows remaining or over-limit characters, and previews the first 150 characters. It does not validate chapter functionality, links, readability or description quality."
    steps={[
      'Type or paste your complete YouTube video description into the text box.',
      'Review the live character, word, and line counts plus the first 150-character preview.',
      'If over the limit, remove at least the reported number of characters. Review chapter timing, links and the finished description separately in YouTube Studio.',
    ]}
    faqs={[
      ['What is the maximum YouTube description length?', 'YouTube’s official help states a maximum of 5,000 characters. Use only the space your summary and supporting information need; filling the limit is not a goal.'],
      ['Is 150 characters an official YouTube preview limit?', 'No. This tool uses 150 characters as an illustrative preview of your opening. It is not an official or guaranteed search-display limit. Review the description on YouTube itself.'],
      ['Do spaces and line breaks count as characters?', 'Yes. This counter includes spaces, punctuation and line breaks, as well as the text of links and timestamps. It counts UTF-16 units, so some emoji and combined symbols can use more than one unit; confirm a draft near the limit in YouTube Studio.'],
      ['Will a longer description improve my YouTube ranking?', 'Not automatically. A useful description can give viewers context, but length alone does not guarantee rankings, views, or traffic.'],
      ['Should I add links and timestamps?', 'Add them when they help the viewer. Keep the video summary near the top, label sections clearly, and include only relevant links, chapters, credits, or disclosures.'],
      ['Does this tool save my description?', 'No. The tool works in your browser, and your text is not saved or sent to an AI service.'],
    ]}
  >
    <p className="muted"><time dateTime="2026-09-20">Last updated: September 20, 2026</time></p>
    <h2>Official description maximum: 5,000 characters</h2>
    <p><a className="content-link" href="https://support.google.com/youtube/answer/12948449?hl=en" target="_blank" rel="noopener noreferrer">YouTube’s description guidance</a> states that descriptions allow a maximum of 5,000 characters (checked September 20, 2026). The total covers the full description, including your summary, timestamps, resource URLs and credits.</p>
    <p>The first-150-character panel is a writing aid. It is not an official search snippet length or a promise about where YouTube will truncate your text. Check the actual video page and its mobile display.</p>
    <h2>Within-limit and over-limit examples</h2>
    <div className="description-structure">
      <p><strong>Short example: 72 characters</strong><br />Learn to label a charging cable with paper tape and a pen in one minute.<br />This leaves 4,928 characters. Being within the limit only answers a length question.</p>
      <p><strong>At the boundary: 5,000 characters</strong><br />A complete draft counted at 5,000 has zero characters remaining. Adding one ordinary letter takes it to 5,001, or one over.</p>
      <p><strong>Over the limit: 5,080 characters</strong><br />Remove at least 80 characters. For example, removing an 82-character repeated sentence leaves 4,998, with two remaining. Preserve necessary credits and disclosures.</p>
    </div>
    <p>This browser counter uses UTF-16 units; some emoji and combined symbols take more than one unit. This is a counting convention, not a claim about YouTube’s internal implementation. Confirm unusual symbols and drafts near the maximum in YouTube Studio.</p>
    <h2>Build the description and check chapters separately</h2>
    <p>Copy the <Link className="content-link" href="/guides/youtube-tutorial-description-template">YouTube tutorial description template</Link> for a summary, prerequisites, chapters and resources. If chapters do not appear, follow <Link className="content-link" href="/guides/youtube-chapters-not-showing">the timestamp and eligibility checks</Link>; the character count cannot diagnose chapter availability.</p>
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
