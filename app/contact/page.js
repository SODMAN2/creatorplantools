import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Contact CreatorPlanTools',
  description: 'Contact CreatorPlanTools with feedback, corrections, questions, or suggestions for free tools and practical creator guides.',
  path: '/contact',
  absoluteTitle: true,
});

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap content">
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
        <div className="eyebrow">Contact</div>
        <h1>Contact CreatorPlanTools</h1>
        <p className="page-intro">
          You can contact the site owner with feedback, corrections, questions about
          the site, or suggestions for creator tools and guides.
        </p>
        <section className="contact-card" aria-labelledby="email-heading">
          <h2 id="email-heading">Email</h2>
          <p>Send your message to <a className="content-link" href="mailto:hello@creatorplantools.com">hello@creatorplantools.com</a>.</p>
          <p className="muted">
            Response times may vary. Please include enough detail for us to understand
            your question or suggestion, and do not send passwords, payment details,
            or other sensitive information.
          </p>
        </section>
      </div>
    </div>
  );
}
