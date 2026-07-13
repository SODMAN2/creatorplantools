import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Editorial Policy | CreatorPlanTools',
  description:
    'Learn how CreatorPlanTools creates, reviews, and updates its creator planning tools and beginner-friendly guides.',
  path: '/editorial-policy',
  absoluteTitle: true,
});

export default function EditorialPolicyPage() {
  return (
    <div className="page">
      <div className="wrap content">
        <Breadcrumbs items={[{ label: 'Editorial Policy', href: '/editorial-policy' }]} />
        <div className="eyebrow">Editorial Policy</div>
        <h1>Editorial Policy</h1>
        <p className="muted">Last updated: July 13, 2026</p>
        <p className="page-intro">
          This policy explains how CreatorPlanTools creates, reviews, and updates its
          creator tools and guides.
        </p>

        <h2>Our purpose</h2>
        <p>
          CreatorPlanTools publishes free resources to help beginner creators make
          better planning decisions. Our <Link className="content-link" href="/tools">tools</Link>{' '}
          and <Link className="content-link" href="/guides">guides</Link> are designed
          to make topics such as scripts, timing, video structure, engagement, and
          content planning easier to understand. You can learn more about the site on
          our <Link className="content-link" href="/about">About page</Link>.
        </p>

        <h2>How we create guides</h2>
        <p>
          We choose practical questions that creators commonly face, then write
          original, plain-language guidance around those questions. Guides are
          structured to explain the main idea, show useful planning steps, and give
          readers enough context to apply the advice to their own audience, platform,
          and creative style.
        </p>
        <p>
          Content is reviewed for clarity, usefulness, and consistency before it is
          published. Our guides are educational resources, not a substitute for
          financial, legal, or other professional advice.
        </p>

        <h2>How our tools work</h2>
        <p>
          Our browser-based tools use the information a user enters and apply the
          formulas, ranges, checks, or planning rules explained on the relevant tool
          page. They are intended for planning, estimates, and educational guidance
          only. Users should review each result and apply their own judgement before
          making publishing or business decisions.
        </p>

        <h2>Estimates and limitations</h2>
        <p>
          Tool outputs and examples are estimates, not predictions or promises. Real
          results can vary because of audience behaviour, content quality, format,
          editing, publishing choices, platform changes, and many other factors outside
          our control. CreatorPlanTools does not guarantee views, revenue, rankings,
          engagement, or growth.
        </p>
        <p>
          For more information about using the site and how information is handled,
          read our <Link className="content-link" href="/terms">Terms of Use</Link> and{' '}
          <Link className="content-link" href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>Updates and corrections</h2>
        <p>
          We may review and update content when a tool changes, guidance can be made
          clearer, or relevant platform practices evolve. If we identify a meaningful
          factual error, unclear statement, or calculation issue, we aim to correct it
          promptly. Publication and update dates may be shown where they help readers
          understand how current a page is.
        </p>

        <h2>Contact for corrections or feedback</h2>
        <p>
          If you spot an error or want to suggest an improvement, email{' '}
          <a className="content-link" href="mailto:hello@creatorplantools.com">
            hello@creatorplantools.com
          </a>{' '}
          or use our <Link className="content-link" href="/contact">contact page</Link>.
          Please include the page URL and a short explanation so we can review the
          feedback.
        </p>
      </div>
    </div>
  );
}
