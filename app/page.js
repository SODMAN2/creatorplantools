import Link from 'next/link';
import { toolList } from './tools/toolData';

const featured = [
  ['How Long Should a YouTube Script Be?', 'Learn how speaking pace, pauses, and editing style affect your ideal word count.', '/guides/how-long-should-a-youtube-script-be'],
  ['TikTok Video Structure: Hook, Value, CTA', 'Use a practical structure to keep short-form videos clear and focused.', '/guides/tiktok-video-structure'],
  ['Voiceover Pacing for Videos', 'Use pacing, emphasis, and breathing room to improve delivery.', '/guides/voiceover-pacing-for-videos'],
];

export default function Home() {
  return <>
    <div className="hero"><div className="wrap">
      <div className="eyebrow">Plan with confidence</div>
      <h1>Free tools and guides for smarter content creation</h1>
      <p>CreatorPlanTools helps YouTubers, TikTokers, Instagram creators, and faceless content creators plan videos, estimate timing, and build clearer content structures—without guesswork.</p>
      <div className="buttons"><Link className="button" href="/tools">Explore free tools</Link><Link className="button secondary" href="/guides">Read the guides</Link></div>
    </div></div>
    <section id="tools"><div className="wrap">
      <div className="section-head"><div className="eyebrow">Creator tools</div><h2>Useful answers in a few clicks</h2><p>Simple calculators and planners designed around everyday creator workflows.</p></div>
      <div className="grid">{toolList.map((tool) => <Link className="card" href={tool.href} key={tool.href}><span className="icon" aria-hidden="true">{tool.icon}</span><h3>{tool.name}</h3><p className="muted">{tool.description}</p><b>Use tool →</b></Link>)}</div>
      <div className="section-action"><Link className="button secondary" href="/tools">View all creator tools</Link></div>
    </div></section>
    <section className="soft" id="guides"><div className="wrap">
      <div className="section-head"><div className="eyebrow">Featured guides</div><h2>Build better content foundations</h2></div>
      <div className="grid">{featured.map(([title, description, href]) => <Link className="card" href={href} key={href}><h3>{title}</h3><p className="muted">{description}</p><b>Read guide →</b></Link>)}</div>
      <div className="section-action"><Link className="button secondary" href="/guides">View all guides</Link></div>
    </div></section>
  </>;
}
