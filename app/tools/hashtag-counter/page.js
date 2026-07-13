import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import HashtagCounter from '@/components/HashtagCounter';

export const metadata = {
  title: 'Hashtag Counter & Duplicate Cleaner',
  description: 'Count hashtags, find duplicates, and create a cleaned hashtag list for YouTube, TikTok, Instagram, Reels, and Shorts with this free browser-based tool.',
  alternates: { canonical: '/tools/hashtag-counter' },
  openGraph: {
    title: 'Hashtag Counter | CreatorPlanTools',
    description: 'Count, clean, and review hashtags for videos and social posts with a free browser-based tool.',
    url: '/tools/hashtag-counter',
    type: 'website',
  },
};

export default function Page() {
  return <ToolLayout
    eyebrow="YouTube, TikTok & Instagram tool"
    title="Hashtag Counter"
    intro="Count, clean, and review hashtags in a caption or hashtag list before you publish on YouTube, TikTok, Instagram, Reels, or Shorts."
    tool={<HashtagCounter />}
    explanation="The counter finds hashtags in your text, compares total and unique counts, flags duplicates, and creates a cleaned list. The 1–10 range is a simple review guide, not a promise of views, reach, ranking, or growth."
    steps={[
      'Type or paste your hashtags, video description, or social caption into the large text box.',
      'Review the total, unique, duplicate, and status information as you edit.',
      'Check each detected hashtag for relevance, then use the cleaned output if you want a list with duplicates removed.',
    ]}
    faqs={[
      ['What counts as a hashtag?', 'This tool detects a # symbol followed by letters, numbers, combining marks, or underscores. A # symbol on its own is not counted.'],
      ['Are duplicate hashtags case-sensitive?', 'No. For duplicate checking, #VideoTips and #videotips are treated as the same hashtag. The cleaned output keeps the first version you entered.'],
      ['How many hashtags should I use?', 'This tool uses 1–10 hashtags as a simple, beginner-friendly review range. The right number depends on the platform, format, audience, and relevance of each hashtag.'],
      ['Do hashtags guarantee more views or reach?', 'No. Hashtags can provide topic context, but they do not guarantee views, reach, ranking, engagement, or growth.'],
      ['Can I paste a full caption?', 'Yes. The tool extracts hashtags from surrounding caption or description text and leaves your original input unchanged.'],
      ['Does this tool save or send my caption anywhere?', 'No. It runs in your browser. Your text is not saved, sent to an AI service, or tied to an account.'],
    ]}
  >
    <h2>Practical hashtag tips without keyword stuffing</h2>
    <ul className="steps">
      <li>Choose hashtags that accurately describe the specific topic, format, or audience of the post.</li>
      <li>Prefer a short, relevant set over a long block of loosely related or trending terms.</li>
      <li>Avoid repeating the same hashtag with different capitalisation or placing it several times in one caption.</li>
      <li>Do not force keywords into hashtags when natural caption text explains the topic more clearly.</li>
      <li>Review platform guidance and your own results over time because conventions can change.</li>
      <li>Treat hashtags as supporting context, not as a guarantee of reach, ranking, views, or growth.</li>
    </ul>

    <h2>Review hashtags for each platform</h2>
    <div className="hashtag-platforms">
      <div><h3>YouTube and Shorts</h3><p>Keep hashtags closely connected to the video. Use a clear title and useful description instead of relying on a long hashtag list.</p></div>
      <div><h3>TikTok and Reels</h3><p>Match hashtags to the actual subject and intended viewer. Broad trending tags are not automatically more useful than specific ones.</p></div>
      <div><h3>Instagram posts</h3><p>Check that every hashtag adds distinct context. Remove duplicates and unrelated terms before publishing.</p></div>
      <div><h3>Across platforms</h3><p>Adapt the caption and hashtag set to each post rather than assuming the same list suits every audience.</p></div>
    </div>

    <h2>Plan the rest of your post or video</h2>
    <p className="muted">For YouTube, pair a focused hashtag set with a clear <Link className="content-link" href="/tools/youtube-title-length-checker">YouTube title</Link> and a useful <Link className="content-link" href="/tools/youtube-description-length-checker">YouTube description</Link>. For short-form content, map the hook, value, and call to action with the <Link className="content-link" href="/tools/tiktok-video-planner">TikTok Video Planner</Link>.</p>
    <p className="muted">You can also read <Link className="content-link" href="/guides/how-to-write-better-video-descriptions">How to Write Better Video Descriptions</Link>, the <Link className="content-link" href="/guides/tiktok-video-structure">TikTok Video Structure guide</Link>, or <Link className="content-link" href="/guides/how-to-plan-youtube-shorts">How to Plan YouTube Shorts</Link> for practical publishing context.</p>
  </ToolLayout>;
}
