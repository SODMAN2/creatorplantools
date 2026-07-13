import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import YouTubeTitleLengthChecker from '@/components/YouTubeTitleLengthChecker';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'YouTube Title Length Checker',
  description: 'Check your YouTube title character count, word count, and length with a free browser-based tool, plus practical tips and title examples.',
  path: '/tools/youtube-title-length-checker',
});

export default function Page() {
  return <ToolLayout
    eyebrow="YouTube tool"
    title="YouTube Title Length Checker"
    intro="Check whether your video title is clear, readable, and a practical length for YouTube search results and mobile viewers."
    tool={<YouTubeTitleLengthChecker />}
    explanation="The checker counts every character, including spaces and punctuation, then places your title in a simple planning range. It does not predict performance or guarantee more views."
    steps={[
      'Type or paste your planned YouTube video title into the text box.',
      'Review the live character count, word count, and length status.',
      'Keep the main topic and viewer benefit clear, then trim words that do not add useful meaning.',
    ]}
    faqs={[
      ['What is a good length for a YouTube title?', 'A title between 20 and 70 characters is a useful planning range for many videos. Clarity matters more than reaching an exact number.'],
      ['Does YouTube have a title character limit?', 'YouTube titles can contain up to 100 characters. A shorter title may still be easier to scan when less space is available in search results or on mobile.'],
      ['Do spaces and punctuation count as characters?', 'Yes. This checker includes letters, numbers, spaces, punctuation, and symbols in the character total.'],
      ['Will a title in the good range get more views?', 'Not necessarily. Title length is only one part of video packaging. Topic demand, relevance, thumbnail, viewer trust, and the video itself also matter.'],
      ['Should I put keywords at the start of my title?', 'Put the clearest subject or benefit early when it reads naturally. Avoid repeating phrases or forcing keywords that make the title awkward.'],
    ]}
  >
    <h2>Practical YouTube title tips</h2>
    <ul className="steps">
      <li>Tell viewers what the video is about using specific, familiar words.</li>
      <li>Put the most useful or distinctive information near the beginning.</li>
      <li>Remove repeated ideas, filler words, and unnecessary punctuation.</li>
      <li>Make sure the title accurately matches the video instead of overpromising.</li>
      <li>Read it beside your thumbnail and avoid duplicating all the same words.</li>
    </ul>

    <h2>Example title improvements</h2>
    <div className="title-examples">
      <div className="title-example"><h3>Too vague</h3><p><strong>Before:</strong> My New Video Setup</p><p><strong>Clearer:</strong> My Simple YouTube Studio Setup for Small Rooms</p></div>
      <div className="title-example"><h3>Too wordy</h3><p><strong>Before:</strong> Everything You Need to Know About How I Plan, Write, Film and Edit Every YouTube Video</p><p><strong>Clearer:</strong> How I Plan, Film and Edit a YouTube Video</p></div>
      <div className="title-example"><h3>Main value appears late</h3><p><strong>Before:</strong> Things I Learned This Year About Making Better Voiceovers</p><p><strong>Clearer:</strong> 7 Voiceover Tips for Clearer YouTube Videos</p></div>
    </div>

    <h2>Plan the rest of your video</h2>
    <p className="muted">Once the title promise is clear, estimate your draft with the <Link className="content-link" href="/tools/youtube-script-length-calculator">YouTube Script Length Calculator</Link>, or use the <Link className="content-link" href="/guides/youtube-video-planning-checklist">YouTube video planning checklist</Link> to organise the idea, hook, visuals, and publishing details.</p>
  </ToolLayout>;
}
