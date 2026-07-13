import Link from 'next/link';
import { toolList, toolSections } from './toolData';

const faqs = [
  ['Are all CreatorPlanTools tools free?', 'Yes. Every tool on this page is free to use, works in your browser, and does not require an account.'],
  ['Do I need creator experience to use these tools?', 'No. The tools are designed to be beginner-friendly, with straightforward inputs and practical explanations to help new and experienced creators plan content.'],
  ['Which platforms do the tools support?', 'The collection includes tools for YouTube, YouTube Shorts, TikTok, Instagram Reels, and general video, voiceover, and social media planning.'],
  ['Are my tool inputs saved?', 'No. The tools run in your browser, and CreatorPlanTools does not save the information you enter into a calculation or planner.'],
  ['Can these tools predict views, revenue, or channel growth?', 'No. Calculators and checks provide estimates and planning guidance based on the information you enter. They cannot predict or guarantee platform performance.'],
];

export const metadata = {
  title: 'Free Creator Tools for YouTube, TikTok, Shorts & Reels',
  description: 'Use free browser-based creator tools for YouTube, TikTok, Shorts and Reels. Plan scripts and videos, check captions, and estimate watch time, engagement and revenue.',
  keywords: ['free creator tools', 'YouTube tools', 'TikTok tools', 'YouTube Shorts tools', 'Instagram Reels tools', 'content creator planning tools'],
  alternates: { canonical: '/tools' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Free Creator Tools for YouTube, TikTok, Shorts & Reels',
    description: 'Beginner-friendly browser tools for planning content, checking copy, and exploring creator growth estimates. Free to use with no account required.',
    url: '/tools',
    siteName: 'CreatorPlanTools',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Free Creator Tools for YouTube, TikTok, Shorts & Reels',
    description: 'Free browser-based tools for creator planning, scripts, short-form content, analytics, and growth estimates.',
  },
};

function ToolCard({ tool }) {
  return <Link className="card tool-card" href={tool.href}>
    <span className="icon" aria-hidden="true">{tool.icon}</span>
    <h3>{tool.name}</h3>
    <p className="muted">{tool.description}</p>
    <b>Use tool <span aria-hidden="true">→</span></b>
  </Link>;
}

export default function ToolsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Free Creator Tools for YouTube, TikTok, Shorts & Reels',
        description: metadata.description,
        url: 'https://creatorplantools.com/tools',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: toolList.length,
          itemListElement: toolList.map((tool, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tool.name,
            url: `https://creatorplantools.com${tool.href}`,
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

  return <div className="page tools-index"><div className="wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

    <div className="page-head tools-head">
      <div className="eyebrow">Free creator planning tools</div>
      <h1>Plan better content with simple, practical tools</h1>
      <p className="page-intro">CreatorPlanTools offers free, browser-based, beginner-friendly creator planning tools for YouTube, Shorts, TikTok, Instagram Reels, and other content workflows. Plan a script, improve your video structure, check publishing copy, or explore useful performance estimates—without creating an account.</p>
    </div>

    <nav className="tool-section-nav" aria-label="Tool categories">
      {toolSections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
    </nav>

    <div className="tool-sections">
      {toolSections.map((section) => <section className="tool-category" id={section.id} aria-labelledby={`${section.id}-heading`} key={section.id}>
        <div className="tool-category-head">
          <div>
            <h2 id={`${section.id}-heading`}>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className="category-guides" aria-label={`Guides for ${section.title}`}>
            <span>Related guides</span>
            {section.guideLinks.map((guide) => <Link href={guide.href} key={guide.href}>{guide.label} <span aria-hidden="true">→</span></Link>)}
          </div>
        </div>
        <div className="grid tool-grid">{section.tools.map((tool) => <ToolCard tool={tool} key={tool.href} />)}</div>
      </section>)}
    </div>

    <div className="index-cta"><div><h2>Need help turning a plan into a repeatable workflow?</h2><p className="muted">Browse practical guides about scripts, hooks, pacing, B-roll, publishing schedules, and creator workflows.</p></div><Link className="button secondary" href="/guides">Browse all creator guides</Link></div>

    <section className="tools-faq" aria-labelledby="tools-faq-heading">
      <div className="eyebrow">Common questions</div>
      <h2 id="tools-faq-heading">Creator tools FAQ</h2>
      <p className="muted">Quick answers about how the tools work and what their results mean.</p>
      {faqs.map(([question, answer]) => <div className="faq" key={question}><h3>{question}</h3><p className="muted">{answer}</p></div>)}
    </section>

    <aside className="tools-disclaimer" aria-label="Tool results disclaimer">
      <strong>Planning estimates, not promises.</strong>
      <p>CreatorPlanTools provides estimates and general planning guidance. Results do not guarantee views, revenue, search rankings, engagement, monetisation, or channel growth. Actual performance depends on your content, audience, platform changes, and many other factors.</p>
    </aside>
  </div></div>;
}
