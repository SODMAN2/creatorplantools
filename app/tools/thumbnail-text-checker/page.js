import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import ThumbnailTextChecker from '@/components/ThumbnailTextChecker';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Thumbnail Text Checker',
  description: 'Check the character count, word count, and readability of YouTube thumbnail, Shorts, TikTok, or Reel cover text with this free browser tool.',
  path: '/tools/thumbnail-text-checker',
});

export default function Page() {
  return <ToolLayout
    eyebrow="Creator planning tool"
    title="Thumbnail Text Checker"
    intro="Check whether text for a YouTube thumbnail, Shorts cover, TikTok cover, or Reel cover is short and easy to scan."
    tool={<ThumbnailTextChecker />}
    explanation="The checker counts characters and words, then gives a simple readability status based on the number of words. It works entirely in your browser and does not predict content performance."
    steps={[
      'Type or paste the words you plan to place on your thumbnail or cover.',
      'Review the live character count, word count, and readability status.',
      'Trim extra words, then preview the text at the small size viewers may see on a phone.',
    ]}
    faqs={[
      ['How many words should thumbnail text have?', 'One to three words is very short, while four to seven words is a practical range for many thumbnails. Eight to twelve words can be harder to scan, and more than twelve is usually too long for thumbnail text.'],
      ['Does the checker work for Shorts, TikTok, and Reels?', 'Yes. You can use it to review text planned for YouTube thumbnails, Shorts covers, TikTok covers, and Instagram Reel covers.'],
      ['Does shorter text always make a better thumbnail?', 'No. Short text can be easier to scan, but it still needs to be clear, relevant, and readable within the design.'],
      ['Should thumbnail text repeat the video title?', 'Usually it is more useful for the thumbnail and title to work together. The thumbnail can highlight a short phrase, result, question, or contrast instead of repeating every title word.'],
      ['Will good thumbnail text get more clicks or views?', 'There is no guarantee. This tool only provides length guidance. Topic relevance, design, accuracy, audience interest, and the content itself also matter.'],
      ['Is my text saved?', 'No. The checker runs in your browser, requires no login, and does not store the text you enter.'],
    ]}
  >
    <h2>Practical tips for better thumbnail text</h2>
    <ul className="steps">
      <li>Focus on one idea, benefit, question, or contrast.</li>
      <li>Use familiar words that a viewer can understand quickly.</li>
      <li>Remove filler words and details already clear from the image or title.</li>
      <li>Use strong contrast and a large, simple typeface in the final design.</li>
      <li>Check the cover at phone size and make sure important words are not hidden by platform overlays.</li>
      <li>Keep the wording accurate and avoid promises the video does not deliver.</li>
    </ul>

    <h2>Example thumbnail text ideas</h2>
    <div className="title-examples">
      <div className="title-example"><h3>Result</h3><p><strong>Before:</strong> How I Finally Made My Videos Look Much Better</p><p><strong>Shorter idea:</strong> Better Videos</p></div>
      <div className="title-example"><h3>Curiosity</h3><p><strong>Before:</strong> The Editing Mistake That Most New Creators Make</p><p><strong>Shorter idea:</strong> Avoid This Mistake</p></div>
      <div className="title-example"><h3>Simple promise</h3><p><strong>Before:</strong> A Complete Workflow for Planning Content Every Week</p><p><strong>Shorter idea:</strong> Plan a Week</p></div>
    </div>

    <h2>Plan the rest of your video packaging</h2>
    <p className="muted">Pair the cover with a clear <Link className="content-link" href="/tools/youtube-title-length-checker">YouTube title</Link>, review the opening with the <Link className="content-link" href="/tools/video-hook-checker">Video Hook Checker</Link>, and check the full upload with the <Link className="content-link" href="/tools/video-publishing-checklist">Video Publishing Checklist</Link>. For social copy, use the <Link className="content-link" href="/tools/caption-character-counter">Caption Character Counter</Link>.</p>

    <h2>Related planning guides</h2>
    <p className="muted">Build the idea around the cover with <Link className="content-link" href="/guides/how-to-plan-a-video-before-recording">How to Plan a Video Before Recording</Link>, <Link className="content-link" href="/guides/how-to-plan-a-faceless-youtube-video">How to Plan a Faceless YouTube Video</Link>, and <Link className="content-link" href="/guides/how-to-create-a-simple-content-workflow">How to Create a Simple Content Workflow</Link>.</p>
  </ToolLayout>;
}
