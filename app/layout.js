import './globals.css';
import './guides.css';
import './revenue-calculator.css';
import './engagement-calculator.css';
import './watch-time-calculator.css';
import './structure.css';
import './description-checker.css';
import Link from 'next/link';

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
        <main>{children}</main>
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
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>
          </div>
          <div className="wrap copyright">© {new Date().getFullYear()} CreatorPlanTools. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
