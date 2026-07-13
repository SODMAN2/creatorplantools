import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Terms of Use | CreatorPlanTools',
  description: 'Read the CreatorPlanTools terms of use for its free creator planning tools, calculators, estimates, and practical guides.',
  path: '/terms',
  absoluteTitle: true,
});

export default function TermsPage() {
  return (
    <div className="page">
      <div className="wrap content">
        <Breadcrumbs items={[{ label: 'Terms of Use', href: '/terms' }]} />
        <div className="eyebrow">Terms</div>
        <h1>Terms of Use</h1>
        <p className="muted page-updated"><time dateTime="2026-07-13">Last updated: July 13, 2026</time></p>
        <p className="page-intro">
          By using CreatorPlanTools, you agree to these terms. If you do not agree,
          please do not use the website.
        </p>
        <h2>Tools and information</h2>
        <p>
          CreatorPlanTools provides general planning tools, calculators, and guides.
          Tool outputs are estimates only. Actual results can vary because of speaking
          style, editing choices, audience behaviour, platform changes, and other
          factors outside our control.
        </p>
        <h2>No guaranteed results</h2>
        <p>
          We do not guarantee views, watch time, engagement, followers, income, or
          performance on YouTube, TikTok, Instagram, or any other platform. Nothing on
          this site should be treated as financial, legal, or professional advice.
        </p>
        <h2>Your responsibility</h2>
        <p>
          You are responsible for how you use the tools, estimates, and information on
          this site. You should review results, apply your own judgement, and confirm
          that your content and activity comply with applicable laws and platform rules.
        </p>
        <h2>Acceptable use</h2>
        <p>
          You may use the website for lawful personal or business planning. You must
          not disrupt the service, attempt unauthorised access, introduce malicious
          code, or copy substantial parts of the site in a way that infringes applicable
          rights.
        </p>
        <h2>Availability and liability</h2>
        <p>
          We may update, suspend, or remove content or features. To the fullest extent
          permitted by law, the site is provided without warranties, and
          CreatorPlanTools is not responsible for losses resulting from reliance on its
          estimates or information.
        </p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a className="content-link" href="mailto:hello@creatorplantools.com">hello@creatorplantools.com</a>.</p>
      </div>
    </div>
  );
}
