import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import VideoHookChecker from '@/components/VideoHookChecker';

export const metadata = {
  title: 'Video Hook Checker',
  description: 'Check your video hook word count, character count, and estimated speaking time with a free browser-based tool for clearer opening lines.',
  alternates: { canonical: '/tools/video-hook-checker' },
  openGraph: {
    title: 'Video Hook Checker | CreatorPlanTools',
    description: 'Check whether a video opening line is clear and concise with live counts, estimated speaking time, and practical hook-writing tips.',
    url: '/tools/video-hook-checker',
    type: 'website',
  },
};

export default function Page() {
  return <ToolLayout
    eyebrow="Video planning tool"
    title="Video Hook Checker"
    intro="Check whether your video opening line is short enough for the first few seconds and clear enough to introduce one focused idea."
    tool={<VideoHookChecker />}
    explanation="The checker counts the words and characters in your opening line, estimates its speaking time, and compares its word count with a simple planning range. It cannot predict views, retention, reach, ranking, or growth."
    steps={[
      'Type or paste the first line you plan to say in your video.',
      'Review the word count, character count, estimated speaking time, and length status.',
      'Read the hook aloud, then trim setup or add missing detail until the main idea is easy to understand.',
      'Check that the rest of the video delivers what the opening line promises.',
    ]}
    faqs={[
      ['How many words should a video hook be?', 'As a practical starting point, 5–18 words is concise enough for many opening lines. Some topics need a little more context, so clarity matters more than reaching an exact number.'],
      ['How is speaking time estimated?', 'The tool uses a pace of 150 words per minute. Your actual time may differ because of pauses, emphasis, delivery style, and on-screen action.'],
      ['Does a short hook guarantee better retention or more views?', 'No. Length alone cannot guarantee views, retention, reach, ranking, or growth. The idea, audience, delivery, visuals, accuracy, and rest of the video all matter.'],
      ['Should I start every video with a question?', 'No. A hook can introduce a specific problem, result, useful surprise, demonstration, or question. Choose the form that fits the video naturally.'],
      ['Can I use this for TikTok, Reels, and YouTube Shorts?', 'Yes. The checker can help with opening lines for short-form and long-form videos, but you should adapt the wording and pace to the platform, format, and audience.'],
      ['Is my hook saved or sent anywhere?', 'No. The checker runs in your browser, requires no login, and does not save or send the text you enter.'],
    ]}
  >
    <h2>Practical hook-writing tips</h2>
    <ul className="steps">
      <li>Make the subject, problem, or benefit understandable without a long introduction.</li>
      <li>Write for the specific viewer who will find the next part useful.</li>
      <li>Lead with one main idea instead of squeezing the whole video into the opening line.</li>
      <li>Use familiar, concrete words and remove greetings or background the viewer does not need yet.</li>
      <li>Pair the spoken hook with a first frame or visual that supports the same message.</li>
      <li>Keep the promise accurate and deliver on it promptly in the video.</li>
    </ul>

    <h2>Example hook improvements</h2>
    <div className="title-examples">
      <div className="title-example"><h3>Too vague</h3><p><strong>Before:</strong> Here are some editing tips.</p><p><strong>Clearer:</strong> Cut these three pauses to make your tutorial feel faster.</p></div>
      <div className="title-example"><h3>Too much setup</h3><p><strong>Before:</strong> I have been making videos for a while, and today I wanted to talk about lighting.</p><p><strong>Clearer:</strong> This one lighting change makes phone video look more natural.</p></div>
      <div className="title-example"><h3>Overpromising</h3><p><strong>Before:</strong> This hook will make every video go viral.</p><p><strong>Clearer:</strong> Try this opening when your tutorial needs a clearer first line.</p></div>
    </div>

    <h2>Plan the rest of your video</h2>
    <p className="muted">Turn the opening into a complete short-form outline with the <Link className="content-link" href="/tools/tiktok-video-planner">TikTok Video Planner</Link>, then check a longer draft with the <Link className="content-link" href="/tools/youtube-script-length-calculator">YouTube Script Length Calculator</Link>.</p>
    <p className="muted">Before publishing, review your copy with the <Link className="content-link" href="/tools/caption-character-counter">Caption Character Counter</Link> and <Link className="content-link" href="/tools/hashtag-counter">Hashtag Counter</Link>. For more help, read <Link className="content-link" href="/guides/how-to-write-a-video-hook">How to Write a Video Hook</Link>, the <Link className="content-link" href="/guides/tiktok-video-structure">TikTok Video Structure guide</Link>, or <Link className="content-link" href="/guides/how-to-plan-youtube-shorts">How to Plan YouTube Shorts</Link>.</p>
  </ToolLayout>;
}
