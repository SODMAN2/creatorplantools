import Link from 'next/link';

const popularTools = [
  {
    icon: 'YT',
    name: 'YouTube Script Length Calculator',
    description: 'Estimate a practical word-count range from your target video length and speaking pace.',
    href: '/tools/youtube-script-length-calculator',
  },
  {
    icon: 'H',
    name: 'Video Hook Checker',
    description: 'Review the length and estimated speaking time of your opening line before you record.',
    href: '/tools/video-hook-checker',
  },
  {
    icon: 'V',
    name: 'TikTok Video Planner',
    description: 'Map out a hook, content beats, call to action, and timing for a short-form video.',
    href: '/tools/tiktok-video-planner',
  },
  {
    icon: 'C',
    name: 'Caption Character Counter',
    description: 'Check characters, words, lines, and reading time for social media captions.',
    href: '/tools/caption-character-counter',
  },
  {
    icon: 'VO',
    name: 'Voiceover Duration Calculator',
    description: 'Turn a script word count into a realistic voiceover duration at different narration speeds.',
    href: '/tools/voiceover-duration-calculator',
  },
  {
    icon: 'WT',
    name: 'Watch Time Calculator',
    description: 'Estimate total watch time from your views and average view duration.',
    href: '/tools/watch-time-calculator',
  },
];

const helpfulGuides = [
  {
    title: 'YouTube Video Planning Checklist',
    description: 'Follow a practical workflow from idea and audience promise to script, visuals, upload, and review.',
    href: '/guides/youtube-video-planning-checklist',
  },
  {
    title: 'How to Plan Content for a Faceless Channel',
    description: 'Build a repeatable plan for topics, scripts, voiceovers, visuals, and consistent publishing.',
    href: '/guides/how-to-plan-content-for-a-faceless-channel',
  },
  {
    title: 'How to Plan YouTube Shorts',
    description: 'Shape a focused Short with a clear hook, useful core idea, visual plan, and next step.',
    href: '/guides/how-to-plan-youtube-shorts',
  },
  {
    title: 'TikTok Video Structure: Hook, Value, CTA',
    description: 'Use a simple structure to keep a short-form video clear, useful, and easy to follow.',
    href: '/guides/tiktok-video-structure',
  },
  {
    title: 'How to Write a Video Hook',
    description: 'Write specific openings that quickly tell the right viewer why the video matters.',
    href: '/guides/how-to-write-a-video-hook',
  },
  {
    title: 'Content Calendar for Creators',
    description: 'Create a manageable calendar for YouTube, TikTok, Reels, and repeatable content workflows.',
    href: '/guides/content-calendar-for-creators',
  },
];

const reasons = [
  ['Free browser-based tools', 'Use every calculator, checker, and planner online for free.'],
  ['Beginner-friendly planning help', 'Get straightforward inputs, useful explanations, and practical next steps.'],
  ['No login required', 'Start planning immediately without creating an account or sharing tool inputs.'],
  ['Made for creator workflows', 'Plan YouTube videos, TikToks, Shorts, Reels, and faceless content in one place.'],
];

export const metadata = {
  title: 'Free Creator Planning Tools for YouTube, TikTok & Reels',
  description: 'Free creator planning tools and practical guides for YouTube, TikTok, Shorts, Reels, faceless channels, scripts, hooks, captions, and content planning.',
  keywords: [
    'free creator planning tools',
    'YouTube planning tools',
    'TikTok creator tools',
    'YouTube Shorts tools',
    'Instagram Reels tools',
    'faceless channel tools',
    'content planning guides',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Free Creator Planning Tools for YouTube, TikTok & Reels',
    description: 'Plan videos, scripts, hooks, captions, and creator workflows with free browser-based tools and practical guides. No login required.',
    url: '/',
    siteName: 'CreatorPlanTools',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Free Creator Planning Tools for YouTube, TikTok & Reels',
    description: 'Free tools and practical guides for YouTube, TikTok, Shorts, Reels, faceless channels, and content planning.',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CreatorPlanTools',
    url: 'https://creatorplantools.com',
    description: metadata.description,
  };

  return <>
    <section className="hero home-hero" aria-labelledby="home-heading"><div className="wrap">
      <div className="eyebrow">Free creator planning tools and guides</div>
      <h1 id="home-heading">Plan better content for YouTube, TikTok, Shorts, and Reels</h1>
      <p>CreatorPlanTools gives creators free browser-based tools and practical guides for scripts, hooks, captions, faceless channels, video structure, and content planning. Turn an idea into a clearer plan without creating an account.</p>
      <div className="buttons"><Link className="button" href="/tools">Explore free tools</Link><Link className="button secondary" href="/guides">Browse creator guides</Link></div>
      <ul className="hero-benefits" aria-label="Site benefits">
        <li>Free to use</li>
        <li>No login required</li>
        <li>Beginner-friendly</li>
      </ul>
    </div></section>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

    <section aria-labelledby="popular-tools-heading"><div className="wrap">
      <div className="section-head"><div className="eyebrow">Popular tools</div><h2 id="popular-tools-heading">Plan your next piece of content</h2><p>Use quick, focused tools for common creator tasks—from script timing and hooks to captions, short-form structure, and watch-time estimates.</p></div>
      <div className="grid home-card-grid">{popularTools.map((tool) => <Link className="card" href={tool.href} key={tool.href}><span className="icon" aria-hidden="true">{tool.icon}</span><h3>{tool.name}</h3><p className="muted">{tool.description}</p><b>Use tool <span aria-hidden="true">&rarr;</span></b></Link>)}</div>
      <div className="section-action"><Link className="button secondary" href="/tools">View all creator tools</Link></div>
    </div></section>

    <section className="soft" aria-labelledby="helpful-guides-heading"><div className="wrap">
      <div className="section-head"><div className="eyebrow">Helpful creator guides</div><h2 id="helpful-guides-heading">Practical help for better content planning</h2><p>Follow clear guides for long-form videos, short-form content, faceless channels, hooks, and sustainable publishing workflows.</p></div>
      <div className="grid home-card-grid">{helpfulGuides.map((guide) => <Link className="card" href={guide.href} key={guide.href}><h3>{guide.title}</h3><p className="muted">{guide.description}</p><b>Read guide <span aria-hidden="true">&rarr;</span></b></Link>)}</div>
      <div className="section-action"><Link className="button secondary" href="/guides">View all creator guides</Link></div>
    </div></section>

    <section aria-labelledby="why-heading"><div className="wrap why-layout">
      <div className="section-head why-intro"><div className="eyebrow">Why CreatorPlanTools?</div><h2 id="why-heading">Simple planning help, built for creators</h2><p>CreatorPlanTools helps you make practical decisions before you spend time recording, editing, or publishing.</p></div>
      <div className="why-grid">{reasons.map(([title, description], index) => <div className="why-item" key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
    </div></section>

    <section className="home-explore" aria-labelledby="explore-heading"><div className="wrap home-explore-inner">
      <div><h2 id="explore-heading">Start with your next creator task</h2><p>Choose a focused tool for a quick answer, or read a guide for a complete planning workflow.</p></div>
      <div className="buttons"><Link className="button" href="/tools">Browse all tools</Link><Link className="button secondary" href="/guides">Browse all guides</Link></div>
    </div></section>

    <aside className="wrap home-disclaimer" aria-label="Planning guidance disclaimer">
      <strong>Estimates and planning guidance only.</strong>
      <p>CreatorPlanTools does not guarantee views, revenue, search rankings, engagement, monetisation, or channel growth. Actual results depend on your content, audience, platforms, and other factors.</p>
    </aside>
  </>;
}
