import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import ContentCalendarPlanner from '@/components/ContentCalendarPlanner';

const faqs = [
  ['Is this content calendar planner free?', 'Yes. It is free to use in your browser and does not require an account.'],
  ['Does the planner save my content ideas?', 'No. Nothing is sent to a database or saved in browser storage. Your plan clears when you refresh or leave the page, so copy anything you want to keep into your usual notes or calendar.'],
  ['Can I plan content for more than one platform?', 'Yes. Add separate ideas for YouTube, TikTok, YouTube Shorts, Instagram Reels, Instagram, faceless channels, or another platform. The summary counts posts for each platform.'],
  ['Should I plan weekly or monthly?', 'Use the range that feels easiest to maintain. A weekly plan is often simpler for beginners, while a monthly view can help with campaigns, recurring formats, and batching.'],
  ['Does following a content calendar guarantee growth?', 'No. A calendar can make your workflow clearer, but it cannot guarantee views, reach, rankings, revenue, engagement, or growth.'],
];

export const metadata = {
  title: 'Content Calendar Planner for Creators',
  description: 'Plan weekly or monthly content ideas for YouTube, TikTok, Shorts, Reels, Instagram, and faceless channels with this free browser-based content calendar.',
  keywords: ['content calendar planner', 'creator content planner', 'social media content calendar', 'YouTube content planner', 'TikTok content planner', 'faceless channel planner'],
  alternates: { canonical: '/tools/content-calendar-planner' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Content Calendar Planner for Creators',
    description: 'Build a simple weekly or monthly creator content plan for YouTube, TikTok, Shorts, Reels, Instagram, and faceless channels.',
    url: '/tools/content-calendar-planner',
    siteName: 'CreatorPlanTools',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Content Calendar Planner for Creators',
    description: 'Plan creator content ideas by platform, date, type, and status with a free browser-based tool.',
  },
};

export default function Page() {
  return <>
    <ToolLayout
      wide
      eyebrow="Creator planning tool"
      title="Content Calendar Planner"
      intro="Organise simple weekly or monthly content ideas for YouTube, TikTok, Shorts, Reels, Instagram, and faceless channels."
      tool={<ContentCalendarPlanner />}
      explanation="Add content ideas with a platform, format, planned date, status, and notes. The table keeps your current plan together, while the summary shows how your posts are distributed."
      steps={[
        'Enter one clear content idea or topic.',
        'Choose its platform, content type, planned date, and current status.',
        'Add an optional note for the hook, production task, or repurposing angle.',
        'Select “Add idea to calendar” and repeat for each post you want to plan.',
        'Review the table and summary, then copy the plan into your permanent calendar before leaving the page.',
      ]}
      faqs={faqs}
    >
      <h2>Practical content calendar tips</h2>
      <ul className="planning-tips">
        <li><strong>Plan around your real capacity.</strong> A smaller plan you can complete is more useful than a crowded calendar you cannot maintain.</li>
        <li><strong>Give each post one job.</strong> Decide whether it should teach, entertain, answer a question, share a process, or support another piece of content.</li>
        <li><strong>Batch similar tasks.</strong> Group research, scripting, recording, or editing sessions where that makes the work easier. The <Link className="content-link" href="/guides/how-to-batch-create-content">content batching guide</Link> explains a practical approach.</li>
        <li><strong>Leave space to adjust.</strong> Dates can move when a topic needs more research or a timely idea becomes more useful.</li>
        <li><strong>Reuse the central idea thoughtfully.</strong> Adapt the angle and format for each platform instead of posting an identical copy. See <Link className="content-link" href="/guides/how-to-turn-one-video-idea-into-many-posts">how to turn one video idea into multiple posts</Link>.</li>
        <li><strong>Review before planning the next period.</strong> Note which formats were manageable and which steps caused delays. Use the <Link className="content-link" href="/guides/content-calendar-for-creators">content calendar guide for creators</Link> to build a repeatable routine.</li>
      </ul>

      <h2>Example weekly content plan</h2>
      <p>This example turns one useful theme into a manageable mix of formats. Change the frequency and platforms to fit your own time and audience.</p>
      <div className="calendar-table-scroll"><table className="example-plan">
        <thead><tr><th>Day</th><th>Platform</th><th>Content idea</th><th>Type</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Monday</td><td>YouTube</td><td>Five simple lighting tips for home videos</td><td>Long-form video</td><td>Scheduled</td></tr>
          <tr><td>Wednesday</td><td>YouTube Shorts</td><td>One fast window-light setup</td><td>Short-form video</td><td>Ready</td></tr>
          <tr><td>Friday</td><td>Instagram</td><td>Before-and-after lighting checklist</td><td>Carousel</td><td>Planned</td></tr>
        </tbody>
      </table></div>

      <h2>Plan the details for each post</h2>
      <p>Once the dates are clear, shape short-form ideas with the <Link className="content-link" href="/tools/tiktok-video-planner">TikTok Video Planner</Link> and review the opening with the <Link className="content-link" href="/tools/video-hook-checker">Video Hook Checker</Link>. Before publishing, use the <Link className="content-link" href="/tools/caption-character-counter">Caption Character Counter</Link> and <Link className="content-link" href="/tools/hashtag-counter">Hashtag Counter</Link> to check your supporting copy.</p>
    </ToolLayout>
  </>;
}
