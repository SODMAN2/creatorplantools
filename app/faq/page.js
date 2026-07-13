import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageMetadata } from '@/app/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = createPageMetadata({
  title: 'Creator FAQ | Free Creator Tools and Guides',
  description:
    'Find answers about CreatorPlanTools, free creator tools, supported platforms, calculator estimates, accounts, updates, and feedback.',
  path: '/faq',
  absoluteTitle: true,
});

const faqs = [
  {
    question: 'What is CreatorPlanTools?',
    answer:
      'CreatorPlanTools is a collection of browser-based planning tools and practical guides for content creators. It helps with tasks such as planning scripts, checking content length, estimating timing, reviewing video hooks, and understanding creator metrics.',
  },
  {
    question: 'Are the tools free to use?',
    answer:
      'Yes. The tools and guides currently available on CreatorPlanTools are free to use.',
  },
  {
    question: 'Do I need to create an account or log in?',
    answer:
      'No. No login or account is required to use the tools or read the guides.',
  },
  {
    question: 'Which platforms and content formats are supported?',
    answer:
      'The resources can help creators working on YouTube videos, YouTube Shorts, TikTok, Instagram, Reels, and other short-form or long-form content. Many tools and guides are also useful for faceless channels, although each creator should adapt the guidance to their platform, format, audience, and style.',
  },
  {
    question: 'How accurate are the calculators?',
    answer:
      'The calculators use the information you enter together with straightforward formulas, ranges, or planning rules. Their results are estimates and planning guidance only. Actual outcomes can differ because of factors such as speaking pace, editing, audience behaviour, content quality, platform changes, and the accuracy of the information entered.',
  },
  {
    question: 'Do the tools guarantee views, revenue, rankings, or growth?',
    answer:
      'No. CreatorPlanTools does not guarantee views, reach, revenue, rankings, engagement, followers, or channel growth. Tool results and guide examples are educational planning aids, not predictions or promises of performance.',
  },
  {
    question: 'How should I use the tools and guides together?',
    answer:
      'Start with the creator tools for a quick calculation, check, or planning result, then read the creator guides for context and practical next steps. Review the result with your own judgement and adjust it for your content, audience, goals, and platform requirements.',
  },
  {
    question: 'How often is CreatorPlanTools updated?',
    answer:
      'The site is reviewed and updated as tools improve, guidance needs clarification, or relevant creator and platform practices change. There is no fixed update schedule, and important platform rules should always be confirmed with the platform itself.',
  },
  {
    question: 'How can I report a correction or send feedback?',
    answer:
      'Email hello@creatorplantools.com with the page URL and a short explanation, or use the contact page. Feedback helps us review and improve the site.',
  },
];

export default function FAQPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <div className="page">
      <JsonLd data={structuredData} />
      <div className="wrap content">
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
        <div className="eyebrow">Help and information</div>
        <h1>Creator FAQ</h1>
        <p className="page-intro">
          Straightforward answers about using CreatorPlanTools, understanding tool
          results, and finding the right resources for your creator workflow.
        </p>

        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => (
            <section className="faq" aria-labelledby={`faq-${index}`} key={question}>
              <h2 id={`faq-${index}`}>{question}</h2>
              <p>
                {question === 'How should I use the tools and guides together?' ? (
                  <>
                    Start with the <Link className="content-link" href="/tools">creator tools</Link>{' '}
                    for a quick calculation, check, or planning result, then read the{' '}
                    <Link className="content-link" href="/guides">creator guides</Link>{' '}
                    for context and practical next steps. Review the result with your
                    own judgement and adjust it for your content, audience, goals, and
                    platform requirements.
                  </>
                ) : question === 'How can I report a correction or send feedback?' ? (
                  <>
                    Email{' '}
                    <a className="content-link" href="mailto:hello@creatorplantools.com">
                      hello@creatorplantools.com
                    </a>{' '}
                    with the page URL and a short explanation, or use the{' '}
                    <Link className="content-link" href="/contact">contact page</Link>.
                    Feedback helps us review and improve the site.
                  </>
                ) : answer}
              </p>
            </section>
          ))}
        </div>

        <section className="faq-more" aria-labelledby="more-information">
          <h2 id="more-information">More information</h2>
          <p>
            Learn more <Link className="content-link" href="/about">about CreatorPlanTools</Link>,
            how content is created and reviewed in the{' '}
            <Link className="content-link" href="/editorial-policy">Editorial Policy</Link>,
            and how the site operates in the <Link className="content-link" href="/privacy">Privacy Policy</Link>{' '}
            and <Link className="content-link" href="/terms">Terms of Use</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
