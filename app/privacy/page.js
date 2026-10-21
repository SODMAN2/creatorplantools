import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';
import { AnalyticsSettingsButton } from '@/components/AnalyticsProvider';

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
        <p className="muted page-updated"><time dateTime="2026-10-21">Last updated: October 21, 2026</time></p>
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
        <h2>Optional Google Analytics</h2>
        <p>
          We use Google Analytics 4, only with your prior consent, to understand
          aggregate site visits, acquisition sources, tool use and navigation to
          related tools, guides and editorial resources. Analytics is optional
          everywhere: we do not load it or send analytics events before you accept.
          Rejecting analytics leaves all tools available.
        </p>
        <p>
          After acceptance, Google Analytics may use first-party cookies such as
          <code> _ga </code> and <code> _ga_* </code> and browser identifiers to distinguish
          visits, including returning visits from the same consenting browser.
          Google also processes technical information such as browser/device details
          and network information needed to receive the events. These identifiers
          are not anonymous. Our analytics cookie lifetime is limited to 90 days
          without extending it on each visit.
        </p>
        <p>
          Our events record fixed tool names and page paths, types of internal
          navigation, and the domain of selected external resources. We remove
          query strings and fragments from page/link data and send only an origin
          for an external referral. Calculator inputs, results, scripts, descriptions,
          captions, email addresses and other content you enter are not intentionally
          sent as analytics events. We do not record tool use from the prefilled examples.
        </p>
        <h2>Your analytics choice and cookies</h2>
        <p>
          Choose “Accept analytics” or “Reject analytics” in the analytics notice.
          We store only that preference in your browser’s local storage to remember
          your choice; it does not contain tool entries or a visitor identifier.
          Core tools do not require analytics cookies. Clearing site storage removes
          the saved preference and we ask again.
        </p>
        <p>
          You can change your decision or withdraw consent at any time using
          “Analytics settings” in the footer or the button below. Rejection stops
          future analytics, removes our accessible Google Analytics cookies and,
          if Analytics has loaded, reloads the page to discard it. Save any tool
          entries you need before withdrawing. Withdrawal does not delete events
          already received by Google. Browsers or extensions may also block analytics.
        </p>
        <AnalyticsSettingsButton />
        <h2>Third-party services</h2>
        <p>
          We use third-party hosting infrastructure to make the website available.
          Those providers may process limited technical data on our behalf. Links to
          other websites or services are governed by their own privacy policies.
          CreatorPlanTools does not currently display advertising.
        </p>
        <p>
          Read <a className="content-link" href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its services</a> and
          {' '}<a className="content-link" href="https://policies.google.com/privacy">Google’s privacy policy</a> for details about Google’s processing.
        </p>
        <h2>Contact</h2>
        <p>For questions about this policy, email <a className="content-link" href="mailto:hello@creatorplantools.com">hello@creatorplantools.com</a>.</p>
      </div>
    </div>
  );
}
