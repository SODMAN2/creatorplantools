import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import TikTokPlanner from '@/components/TikTokPlanner';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'TikTok Video Planner',
  description: 'Plan a focused TikTok video with suggested timing for your hook, main content, and call to action.',
  path: '/tools/tiktok-video-planner',
});

export default function Page() {
  return <ToolLayout eyebrow="Short-form tool" title="TikTok Video Planner" intro="Turn a topic and target duration into a simple structure for a clear, focused short-form video." tool={<TikTokPlanner />} explanation="The planner allocates time to three essentials: a quick hook, the main value, and a clear next step. Use it for TikTok, Reels, or YouTube Shorts." steps={['Enter the central topic or promise of your video.', 'Choose the target duration that fits your idea.', 'Draft each section using the suggested timing, then read it aloud and refine.']} faqs={[["What makes a strong TikTok hook?", "A strong hook quickly creates curiosity or promises a relevant outcome. It should accurately match what the video delivers."], ["How many ideas should one short video cover?", "Usually one central idea. A narrow promise makes the video easier to follow and gives each point enough time."], ["Do I always need a call to action?", "No. Use one only when there is a useful next step, such as saving the video, trying a tip, or viewing a related post."]] }>
    <h2>Strengthen each part of the plan</h2>
    <p>Use the <Link className="content-link" href="/guides/tiktok-video-structure">TikTok video structure guide</Link> to shape the hook, value, and call to action. For more opening ideas, read <Link className="content-link" href="/guides/how-to-write-a-video-hook">how to write a video hook</Link>.</p>
  </ToolLayout>;
}
