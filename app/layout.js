import './globals.css';
import './guides.css';
import './revenue-calculator.css';
import './engagement-calculator.css';
import './watch-time-calculator.css';
import './structure.css';
import './description-checker.css';
import './hashtag-counter.css';
import './caption-counter.css';
import './content-calendar.css';
import './analytics-consent.css';
import Link from 'next/link';
import AnalyticsProvider, { AnalyticsConsent, AnalyticsSettingsButton } from '@/components/AnalyticsProvider';
import { toolList } from './tools/toolData';
import { guideList } from './guides/guideData';

const analyticsCatalog = Object.fromEntries([
  ...Object.entries({ '/': 'CreatorPlanTools', '/tools': 'Creator tools', '/guides': 'Creator guides', '/about': 'About', '/faq': 'FAQ', '/contact': 'Contact', '/editorial-policy': 'Editorial Policy', '/privacy': 'Privacy Policy', '/terms': 'Terms of Use' }).map(([path, title]) => [path, { title }]),
  ...toolList.map((tool) => [tool.href, { title: tool.name, tool: tool.name }]),
  ...guideList.map((guide) => [`/guides/${guide.slug}`, { title: guide.title }]),
]);

export const metadata = {
  metadataBase: new URL('https://creatorplantools.com'),
  title: {
    default: 'CreatorPlanTools | Free Tools for Content Creators',
    template: '%s | CreatorPlanTools',
  },
  description: 'Free tools and practical guides to help content creators plan videos, estimate timing, and improve content structure.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider catalog={analyticsCatalog}>
        <header>
          <div className="nav wrap">
            <Link className="brand" href="/">CreatorPlanTools</Link>
            <nav aria-label="Main navigation">
              <Link href="/tools">Tools</Link>
              <Link href="/guides">Guides</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <AnalyticsConsent />
        <main data-analytics-links>{children}</main>
        <footer>
          <div className="wrap footer-grid">
            <div className="footer-about">
              <Link className="brand" href="/">CreatorPlanTools</Link>
              <p>Free planning tools and practical guides for YouTubers, short-form creators, and independent content publishers.</p>
            </div>
            <div>
              <strong>Explore</strong>
              <Link href="/tools">Tools</Link>
              <Link href="/guides">Guides</Link>
            </div>
            <div>
              <strong>Information</strong>
              <Link href="/about">About</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/editorial-policy">Editorial Policy</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <AnalyticsSettingsButton />
              <Link href="/terms">Terms of Use</Link>
            </div>
          </div>
          <div className="wrap copyright">© {new Date().getFullYear()} CreatorPlanTools. All rights reserved.</div>
        </footer>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
