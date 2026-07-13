import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import CaptionCharacterCounter from '@/components/CaptionCharacterCounter';

export const metadata = {
  title: 'Caption Character Counter',
  description: 'Count caption characters, words, lines, and estimated reading time for TikTok, Instagram, YouTube Shorts, Facebook Reels, and social posts.',
  alternates: { canonical: '/tools/caption-character-counter' },
  openGraph: {
    title: 'Caption Character Counter | CreatorPlanTools',
    description: 'Check social caption length, word count, line count, and estimated reading time with this free browser-based tool.',
    url: '/tools/caption-character-counter',
    type: 'website',
  },
};

export default function Page() {
  return <ToolLayout
    eyebrow="TikTok, Instagram, Shorts & Reels tool"
    title="Caption Character Counter"
    intro="Check the length of a caption for TikTok, Instagram, YouTube Shorts, Facebook Reels, and other social media posts before you publish."
    tool={<CaptionCharacterCounter />}
    explanation="The counter measures characters, words, and lines, then estimates reading time at about 200 words per minute. Its length status is a practical editing guide, not a guarantee of reach, views, ranking, or engagement."
    steps={[
      'Type or paste your complete social media caption into the large text box.',
      'Review the live character, word, line, and estimated reading time figures.',
      'Use the length status and writing tips below to make the caption clearer and easier to scan.',
    ]}
    faqs={[
      ['What counts as a character?', 'Letters, numbers, spaces, punctuation, emojis, symbols, and line breaks all contribute to the character count. Some combined emoji can use more than one underlying character.'],
      ['What do the caption length statuses mean?', 'Under 50 characters is very short, 50–300 is a good caption length, 301–1,000 is long, and over 1,000 is very long. These are simple writing guides rather than platform limits.'],
      ['How is estimated reading time calculated?', 'The estimate uses a reading speed of about 200 words per minute. Actual reading time varies by reader, formatting, vocabulary, and caption complexity.'],
      ['Does a certain caption length get more views?', 'No. Caption length does not guarantee reach, views, ranking, or engagement. Choose a length that communicates the post clearly to your audience.'],
      ['Can I use this for TikTok, Instagram, Shorts, and Reels?', 'Yes. You can check captions for TikTok, Instagram, YouTube Shorts, Facebook Reels, and general social posts. Always review the current rules in the platform where you plan to publish.'],
      ['Does this tool save or send my caption anywhere?', 'No. The counter is free, works in your browser, and does not save your text, use an AI API, or require an account.'],
    ]}
  >
    <h2>Practical caption writing tips</h2>
    <ul className="steps">
      <li>Put the main idea or useful context near the beginning so readers can understand the post quickly.</li>
      <li>Use short sentences and line breaks when a longer caption would otherwise feel like one large block.</li>
      <li>Match the caption to the post instead of adding unrelated keywords or trends.</li>
      <li>Give the reader a useful next step only when it feels natural, such as answering a question or viewing a related resource.</li>
      <li>Proofread names, links, hashtags, disclosures, and calls to action before publishing.</li>
      <li>Adapt the caption for each platform and audience rather than assuming one version works everywhere.</li>
    </ul>

    <h2>Example caption structure</h2>
    <div className="caption-structure">
      <div><h3>1. Opening line</h3><p>Start with a clear observation, question, result, or reason to keep reading.</p></div>
      <div><h3>2. Useful context</h3><p>Add the key detail, lesson, story, or explanation that supports the post.</p></div>
      <div><h3>3. Simple next step</h3><p>Finish with a relevant question or action when it genuinely helps the reader.</p></div>
      <div><h3>4. Supporting details</h3><p>Add only relevant hashtags, credits, links, or disclosures in an easy-to-scan format.</p></div>
    </div>

    <h2>Plan the rest of your post</h2>
    <p className="muted">Review your tags with the <Link className="content-link" href="/tools/hashtag-counter">Hashtag Counter</Link>, check long-form video copy with the <Link className="content-link" href="/tools/youtube-description-length-checker">YouTube Description Length Checker</Link>, or organise a short-form idea with the <Link className="content-link" href="/tools/tiktok-video-planner">TikTok Video Planner</Link>.</p>
    <p className="muted">For more practical guidance, read <Link className="content-link" href="/guides/tiktok-video-structure">TikTok Video Structure: Hook, Value, CTA</Link>, <Link className="content-link" href="/guides/how-to-plan-youtube-shorts">How to Plan YouTube Shorts</Link>, and <Link className="content-link" href="/guides/how-to-write-better-video-descriptions">How to Write Better Video Descriptions</Link>.</p>
  </ToolLayout>;
}
