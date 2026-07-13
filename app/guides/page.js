import Link from 'next/link';
import { guideList } from './guideData';

const guideCategories = [
  {
    id: 'youtube-planning-guides',
    title: 'YouTube Planning Guides',
    description: 'Plan long-form YouTube videos from the first outline to the finished title, script, visuals, and description.',
    slugs: [
      'youtube-video-planning-checklist',
      'how-long-should-a-youtube-script-be',
      'how-to-plan-b-roll-for-videos',
      'how-to-write-better-video-descriptions',
    ],
    tools: [
      { label: 'YouTube Script Length Calculator', href: '/tools/youtube-script-length-calculator' },
      { label: 'YouTube Description Length Checker', href: '/tools/youtube-description-length-checker' },
      { label: 'YouTube Title Length Checker', href: '/tools/youtube-title-length-checker' },
    ],
  },
  {
    id: 'faceless-content-guides',
    title: 'Faceless Content Guides',
    description: 'Build clearer faceless videos and channels with purposeful scripts, visuals, branding, and production systems.',
    slugs: [
      'how-to-plan-a-faceless-youtube-video',
      'how-to-plan-content-for-a-faceless-channel',
      'how-to-make-faceless-content-look-professional',
    ],
    tools: [
      { label: 'Voiceover Duration Calculator', href: '/tools/voiceover-duration-calculator' },
      { label: 'Video Hook Checker', href: '/tools/video-hook-checker' },
    ],
  },
  {
    id: 'short-form-guides',
    title: 'Shorts, TikTok & Reels Guides',
    description: 'Create focused vertical videos with stronger hooks, a useful structure, and realistic short-form timing.',
    slugs: [
      'how-to-plan-youtube-shorts',
      'tiktok-video-structure',
      'how-to-write-a-video-hook',
    ],
    tools: [
      { label: 'TikTok Video Planner', href: '/tools/tiktok-video-planner' },
      { label: 'Caption Character Counter', href: '/tools/caption-character-counter' },
      { label: 'Hashtag Counter', href: '/tools/hashtag-counter' },
    ],
  },
  {
    id: 'content-workflow-guides',
    title: 'Content Workflow Guides',
    description: 'Organise ideas, voiceovers, publishing schedules, batching, and repurposing into a workflow you can maintain.',
    slugs: [
      'content-calendar-for-creators',
      'voiceover-pacing-for-videos',
      'how-to-batch-create-content',
      'how-to-turn-one-video-idea-into-many-posts',
      'how-often-should-creators-post',
    ],
    tools: [
      { label: 'Browse all creator tools', href: '/tools' },
      { label: 'Voiceover Duration Calculator', href: '/tools/voiceover-duration-calculator' },
    ],
  },
];

const faqs = [
  ['Who are these creator guides for?', 'The guides are written for new and experienced YouTubers, TikTok creators, Instagram creators, faceless channel owners, and independent publishers who want a clearer planning process.'],
  ['Where should a beginner start?', 'Start with the YouTube video planning checklist for long-form content or the TikTok video structure guide for short-form content. Then use the guide that matches your next task, such as writing a hook, timing a script, or building a content calendar.'],
  ['Do the guides cover both long-form and short-form video?', 'Yes. The library covers long-form YouTube planning as well as YouTube Shorts, TikTok, Instagram Reels, voiceovers, captions, hooks, descriptions, and reusable content workflows.'],
  ['Are the guides and related tools free?', 'Yes. You can read every guide and use the linked browser-based planning tools for free, without creating an account.'],
  ['Will following these guides guarantee more views or revenue?', 'No. The guides offer general planning advice and practical frameworks. Results vary by content, audience, platform, execution, and other factors outside the scope of a planning guide.'],
];

const guideBySlug = new Map(guideList.map((guide) => [guide.slug, guide]));
const orderedGuides = guideCategories.flatMap((category) => category.slugs.map((slug) => guideBySlug.get(slug)));

export const metadata = {
  title: 'Creator Guides for YouTube, TikTok & Reels',
  description: 'Practical content creator guides for planning YouTube videos, Shorts, TikToks and Reels. Improve scripts, hooks, captions, descriptions and creator workflows.',
  keywords: ['content creator guides', 'YouTube planning guides', 'faceless content guides', 'TikTok video guides', 'YouTube Shorts guides', 'content workflow guides'],
  alternates: { canonical: '/guides' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Content Creator Guides for YouTube, TikTok & Reels',
    description: 'Practical guides for planning videos, scripts, hooks, captions, descriptions, faceless content, and repeatable creator workflows.',
    url: '/guides',
    siteName: 'CreatorPlanTools',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Content Creator Guides for YouTube, TikTok & Reels',
    description: 'Plan better videos, scripts, hooks, captions, descriptions, and content workflows with practical creator guides.',
  },
};

function GuideCard({ guide }) {
  return <Link className="card guide-card" href={`/guides/${guide.slug}`}>
    <h3>{guide.title}</h3>
    <p className="muted">{guide.description}</p>
    <b>Read guide <span aria-hidden="true">&rarr;</span></b>
  </Link>;
}

export default function GuidesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Content Creator Guides for YouTube, TikTok & Reels',
        description: metadata.description,
        url: 'https://creatorplantools.com/guides',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: orderedGuides.length,
          itemListElement: orderedGuides.map((guide, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: guide.title,
            url: `https://creatorplantools.com/guides/${guide.slug}`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return <div className="page guides-index"><div className="wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

    <div className="page-head guides-head">
      <div className="eyebrow">Creator planning guides</div>
      <h1>Practical guides for planning better content</h1>
      <p className="page-intro">Use these guides to plan videos, captions, hooks, descriptions, scripts, and content workflows for YouTube, Shorts, TikTok, Instagram Reels, and faceless channels. Each guide turns a common creator task into clear, practical steps.</p>
    </div>

    <nav className="guide-section-nav" aria-label="Guide categories">
      {guideCategories.map((category) => <a href={`#${category.id}`} key={category.id}>{category.title}</a>)}
    </nav>

    <div className="guide-sections">
      {guideCategories.map((category) => <section className="guide-category" id={category.id} aria-labelledby={`${category.id}-heading`} key={category.id}>
        <div className="guide-category-head">
          <h2 id={`${category.id}-heading`}>{category.title}</h2>
          <p>{category.description}</p>
          <div className="guide-tool-links" aria-label={`Tools related to ${category.title}`}>
            <span>Related tools:</span>
            {category.tools.map((tool) => <Link href={tool.href} key={tool.href}>{tool.label}</Link>)}
          </div>
        </div>
        <div className="guide-grid">
          {category.slugs.map((slug) => <GuideCard guide={guideBySlug.get(slug)} key={slug} />)}
        </div>
      </section>)}
    </div>

    <div className="guides-tools-cta">
      <div><h2>Ready to put a guide into practice?</h2><p>Use the free planning tools to check script timing, shape a hook, review captions and descriptions, or map out a short-form video.</p></div>
      <Link className="button" href="/tools">Explore all creator tools</Link>
    </div>

    <section className="guides-faq" aria-labelledby="guides-faq-heading">
      <div className="eyebrow">Common questions</div>
      <h2 id="guides-faq-heading">Creator guides FAQ</h2>
      <p className="muted">Helpful answers for choosing and using the guides.</p>
      {faqs.map(([question, answer]) => <div className="faq" key={question}><h3>{question}</h3><p className="muted">{answer}</p></div>)}
    </section>

    <aside className="guides-disclaimer" aria-label="Planning advice disclaimer">
      <strong>Planning advice, not a performance guarantee.</strong>
      <p>These guides provide general planning advice only. They do not guarantee views, revenue, search rankings, monetisation, engagement, or channel growth.</p>
    </aside>
  </div></div>;
}
