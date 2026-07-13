import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'About CreatorPlanTools | Free Planning Tools for Creators',
  description: 'Learn how CreatorPlanTools provides free browser-based planning tools and practical guides for YouTube, TikTok, Instagram, and faceless creators.',
  path: '/about',
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <div className="page">
      <div className="wrap content">
        <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
        <div className="eyebrow">About</div>
        <h1>Practical planning tools for modern creators</h1>
        <p className="muted page-updated"><time dateTime="2026-07-13">Last reviewed: July 13, 2026</time></p>
        <p className="page-intro">
          CreatorPlanTools is a collection of free, browser-based planning tools and
          practical guides for people who create content online.
        </p>
        <h2>Who the site is for</h2>
        <p>
          The resources are designed for YouTube, TikTok, and Instagram creators,
          including faceless content creators and independent publishers. Whether you
          are planning your first video or refining an established process, the aim is
          to make everyday creator decisions easier to understand.
        </p>
        <h2>What you can plan</h2>
        <p>
          CreatorPlanTools covers common parts of the creator workflow, including
          script planning, voiceover timing, video structure, engagement, and watch
          time. The tools provide quick estimates, while the guides explain the ideas
          behind the numbers so you can adapt them to your format, audience, and style.
        </p>
        <h2>Our approach</h2>
        <p>
          We aim to publish clear, original, and useful resources without unnecessary
          complexity. Tool results are estimates, not promises. CreatorPlanTools does
          not guarantee views, followers, income, or performance on any platform.
        </p>
      </div>
    </div>
  );
}
