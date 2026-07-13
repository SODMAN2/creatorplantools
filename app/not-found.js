import Link from 'next/link';

const helpfulLinks = [
  {
    title: 'Tools',
    description: 'Use free calculators, checkers, and planners for your next piece of content.',
    href: '/tools',
  },
  {
    title: 'Guides',
    description: 'Browse practical advice for planning videos, scripts, hooks, and creator workflows.',
    href: '/guides',
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions about CreatorPlanTools and how the site works.',
    href: '/faq',
  },
  {
    title: 'Contact',
    description: 'Let us know if you followed a link that should be working or need more help.',
    href: '/contact',
  },
];

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you requested could not be found on CreatorPlanTools.',
};

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-heading">
      <div className="wrap not-found-wrap">
        <div className="not-found-intro">
          <div className="not-found-code" aria-hidden="true">404</div>
          <div className="eyebrow">Page not found</div>
          <h1 id="not-found-heading">We could not find that page</h1>
          <p>
            The page may have moved, the address may have been typed incorrectly, or the link may no longer be available.
          </p>
          <p className="not-found-encouragement">
            You can still explore our free creator tools and practical guides to keep planning your next piece of content.
          </p>
          <Link className="button" href="/">Return to the homepage</Link>
        </div>

        <nav className="not-found-links" aria-label="Helpful pages">
          {helpfulLinks.map((item) => (
            <Link className="not-found-link" href={item.href} key={item.href}>
              <span>
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
              <span className="not-found-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
