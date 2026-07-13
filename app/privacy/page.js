import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Privacy Policy | CreatorPlanTools',
  description: 'Read the CreatorPlanTools privacy policy, including how browser-based tools, cookies, third-party services, and contact messages are handled.',
  path: '/privacy',
  absoluteTitle: true,
});

export default function PrivacyPage() {
  return (
    <div className="page">
      <div className="wrap content">
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
        <div className="eyebrow">Privacy</div>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: July 13, 2026</p>
        <p className="page-intro">
          CreatorPlanTools does not require you to create an account or log in. Where
          possible, the tools run directly in your browser.
        </p>
        <h2>Information we collect</h2>
        <p>
          Information entered into the current calculators and planners is processed
          in your browser. CreatorPlanTools does not receive or store those tool inputs.
          If you email us, we receive the email address and information you choose to
          include in your message so that we can respond.
        </p>
        <p>
          Like most websites, our hosting provider may process standard technical
          information needed to deliver and protect the site, such as an IP address,
          browser type, requested page, and request time.
        </p>
        <h2>Cookies</h2>
        <p>
          CreatorPlanTools does not currently require account or tool-calculation
          cookies. If analytics, advertising, or other cookie-based features are added,
          this policy will be updated and consent controls will be provided where
          required.
        </p>
        <h2>Third-party services</h2>
        <p>
          We use third-party hosting infrastructure to make the website available.
          Those providers may process limited technical data on our behalf. Links to
          other websites or services are governed by their own privacy policies.
          CreatorPlanTools does not currently display advertising.
        </p>
        <h2>Contact</h2>
        <p>For questions about this policy, email <a className="content-link" href="mailto:hello@creatorplantools.com">hello@creatorplantools.com</a>.</p>
      </div>
    </div>
  );
}
