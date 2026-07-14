import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import VideoPublishingChecklist from '@/components/VideoPublishingChecklist';

export const metadata = {
  title: 'Video Publishing Checklist for YouTube, TikTok & Reels',
  description: 'Use a free video publishing checklist to review your plan, script, title, caption, thumbnail, audio, and upload settings before you publish.',
  alternates: { canonical: '/tools/video-publishing-checklist' },
  openGraph: {
    title: 'Video Publishing Checklist | CreatorPlanTools',
    description: 'Check 24 practical details before publishing a YouTube video, TikTok, Short, Reel, Instagram video, or faceless video.',
    url: '/tools/video-publishing-checklist',
    type: 'website',
  },
};

export default function Page() {
  return <ToolLayout
    eyebrow="Video publishing tool"
    title="Video Publishing Checklist"
    intro="Review the important planning, script, packaging, visual, and upload details before publishing a YouTube video, TikTok, Short, Reel, Instagram video, or faceless video."
    tool={<VideoPublishingChecklist />}
    explanation="Work through 24 practical checks and see your completed total, percentage, and a simple readiness message. The checklist helps you spot unfinished tasks; it cannot guarantee views, reach, rankings, revenue, or growth."
    steps={[
      'Work through each section and tick an item only after you have checked it for this video.',
      'Use the completed count and percentage to see how much of your publishing review remains.',
      'Return to any unticked item and make the necessary change in your script, edit, packaging, or upload settings.',
      'When every relevant check is complete, do one calm final review before publishing or scheduling the video.',
    ]}
    faqs={[
      ['What videos can I use this checklist for?', 'Use it for YouTube videos, YouTube Shorts, TikToks, Instagram Reels, other Instagram videos, and faceless videos. Some checks may be more important on one platform than another.'],
      ['What do the readiness messages mean?', 'Needs more preparation appears below 50%, Almost ready appears from 50% to 99%, and Ready to publish appears at 100%. These are simple progress labels, not predictions of performance.'],
      ['Do I need to complete every item?', 'Aim to review every item, but use your judgement. For example, links or credits may not be needed for every video, while accurate platform settings and a final watch are broadly useful.'],
      ['Does completing the checklist guarantee more views?', 'No. A checklist can support a careful workflow, but it cannot guarantee views, reach, rankings, revenue, engagement, or growth.'],
      ['Are my checklist selections saved?', 'No. The tool runs in your browser, requires no login, and does not save or send your selections. They reset when the page is refreshed or closed.'],
      ['When should I use the checklist?', 'Use it after the edit and publishing copy are mostly complete, but early enough that you still have time to correct the video, audio, thumbnail, caption, or settings.'],
    ]}
    wide
  >
    <h2>Practical video publishing tips</h2>
    <ul className="steps">
      <li>Check the title, opening, thumbnail or first frame together so they communicate the same topic without misleading the viewer.</li>
      <li>Watch the exported video on a phone as well as a larger screen when possible, especially for small text and vertical framing.</li>
      <li>Listen once with headphones and once through ordinary speakers to catch uneven voice, music, or background noise.</li>
      <li>Confirm visibility, audience, disclosure, caption, category, playlist, cover, and scheduling settings on the platform you are using.</li>
      <li>Add credits, permissions, affiliate disclosures, or source links whenever your content requires them.</li>
      <li>Leave enough time between upload and publication for processing, caption review, and a final check.</li>
    </ul>

    <h2>Build a simple publishing workflow</h2>
    <p className="muted">Start with the <Link className="content-link" href="/tools/video-script-outline-builder">Video Script Outline Builder</Link> and <Link className="content-link" href="/tools/video-hook-checker">Video Hook Checker</Link>. Before upload, review longer copy with the <Link className="content-link" href="/tools/youtube-description-length-checker">YouTube Description Length Checker</Link> or <Link className="content-link" href="/tools/caption-character-counter">Caption Character Counter</Link>, then schedule the work in the <Link className="content-link" href="/tools/content-calendar-planner">Content Calendar Planner</Link>.</p>
    <p className="muted">For a fuller process, read <Link className="content-link" href="/guides/how-to-plan-a-video-before-recording">How to Plan a Video Before Recording</Link>, <Link className="content-link" href="/guides/how-to-create-a-simple-content-workflow">How to Create a Simple Content Workflow</Link>, and <Link className="content-link" href="/guides/how-to-use-hooks-captions-and-hashtags-together">How to Use Hooks, Captions, and Hashtags Together</Link>.</p>
  </ToolLayout>;
}
