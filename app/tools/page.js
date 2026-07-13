import Link from 'next/link';
import { toolList } from './toolData';

export const metadata = {
  title: 'Free Creator Tools for YouTube, TikTok & More',
  description: 'Browse free CreatorPlanTools calculators and planners for YouTube, TikTok, Instagram, scripts, voiceovers, watch time, engagement, and revenue.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Free Creator Tools | CreatorPlanTools',
    description: 'Free calculators and planners for video scripts, voiceovers, titles, watch time, engagement, revenue, and short-form content.',
    url: '/tools',
    type: 'website',
  },
};

export default function ToolsPage() {
  return <div className="page tools-index"><div className="wrap">
    <div className="page-head"><div className="eyebrow">Free creator tools</div><h1>Plan your next piece of content</h1><p className="muted">Use straightforward calculators and planners for scripts, voiceovers, short-form videos, titles, and channel metrics. Every tool is free and works without an account.</p></div>
    <div className="grid tool-grid">{toolList.map((tool) => <Link className="card tool-card" href={tool.href} key={tool.href}><span className="icon" aria-hidden="true">{tool.icon}</span><h2>{tool.name}</h2><p className="muted">{tool.description}</p><b>Use tool <span aria-hidden="true">→</span></b></Link>)}</div>
    <div className="index-cta"><div><h2>Need help planning the content around the numbers?</h2><p className="muted">Read practical guides covering scripts, pacing, video structure, B-roll, publishing schedules, and creator workflows.</p></div><Link className="button secondary" href="/guides">Browse creator guides</Link></div>
  </div></div>;
}
