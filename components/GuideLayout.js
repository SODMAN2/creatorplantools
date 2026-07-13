import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import RelatedContent from './RelatedContent';
import { getRelatedForGuide } from './relatedContentData';
import JsonLd from './JsonLd';

const BASE_URL = 'https://creatorplantools.com';
const LAST_UPDATED = 'July 13, 2026';
const LAST_UPDATED_ISO = '2026-07-13';

export default function GuideLayout({ guide }) {
  const url = `${BASE_URL}/guides/${guide.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: guide.title,
        description: guide.intro,
        url,
        mainEntityOfPage: url,
        articleSection: 'Creator guides',
        dateModified: LAST_UPDATED_ISO,
        publisher: { '@id': `${BASE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: guide.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return <article className="guide-page">
    <JsonLd data={structuredData} />
    <div className="wrap guide-wrap">
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: guide.title, href: `/guides/${guide.slug}` }]} />
      <header className="guide-head">
        <div className="eyebrow">Creator guide</div>
        <h1>{guide.title}</h1>
        <p>{guide.intro}</p>
        <p className="guide-updated"><time dateTime={LAST_UPDATED_ISO}>Last updated: {LAST_UPDATED}</time></p>
      </header>
      <div className="guide-content">
        {guide.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.example && <div className="guide-example"><strong>Practical example</strong><p>{section.example}</p></div>}
          {section.links?.map((link) => <p className="guide-related" key={link.href}>Related: <Link href={link.href}>{link.label}</Link></p>)}
        </section>)}
        <section className="guide-cta">
          <h2>{guide.cta.heading}</h2>
          <p>{guide.cta.text}</p>
          <Link className="button" href={guide.cta.href}>{guide.cta.label}</Link>
        </section>
        <section className="guide-faqs">
          <h2>Frequently asked questions</h2>
          {guide.faqs.map(([question, answer]) => <div className="faq" key={question}><h3>{question}</h3><p>{answer}</p></div>)}
        </section>
        <aside className="guide-page-disclaimer" aria-label="Guide results disclaimer">
          <strong>General planning guidance only.</strong>
          <p>This guide does not guarantee views, reach, rankings, revenue, engagement, monetisation, or growth. Results vary by audience, content, execution, platform changes, and other factors.</p>
        </aside>
        <RelatedContent related={getRelatedForGuide(guide.slug)} />
        <div className="back-link"><Link href="/guides">← Browse all creator guides</Link></div>
      </div>
    </div>
  </article>;
}
