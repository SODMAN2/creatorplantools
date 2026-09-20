import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import YouTubeRevenueCalculator from '@/components/YouTubeRevenueCalculator';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'YouTube Revenue Calculator',
  description: 'Estimate monthly YouTube revenue from views and RPM, then project a year at the same rate. Free calculator; estimates do not guarantee earnings.',
  path: '/tools/youtube-revenue-calculator',
});

const faqs = [
  ['What does RPM mean?', 'RPM means revenue per 1,000 views after YouTube’s revenue share. YouTube Analytics RPM already includes views that did not show ads, so no additional ad-view percentage is applied. Use an RPM for the same content and reporting period as your views.'],
  ['How is estimated YouTube revenue calculated?', 'Monthly revenue is monthly views divided by 1,000, multiplied by RPM. The yearly projection is the monthly estimate multiplied by 12, assuming the same monthly views and RPM throughout the year.'],
  ['Why might actual revenue be different?', 'Actual revenue can vary with audience location, topic, season, video format, advertiser demand, ad availability, viewer behaviour, and other revenue adjustments.'],
  ['Is this an official YouTube calculator?', 'No. CreatorPlanTools is independent, and this calculator does not use or claim to provide official YouTube data.'],
  ['Can I enter CPM instead of RPM?', 'No. CPM describes an advertiser’s cost per 1,000 ad impressions before YouTube’s revenue share. It is not the creator’s revenue per 1,000 views. This calculator uses RPM only.'],
  ['Can I use this calculator for Shorts?', 'Use the engaged views that correspond to your Shorts RPM, from the same content and reporting period. Do not combine a Shorts RPM with a different view-count definition or a long-form RPM.'],
];

export default function Page() {
  return <ToolLayout
    eyebrow="YouTube planning tool"
    title="YouTube Revenue Calculator"
    intro="Estimate monthly YouTube revenue using monthly views and RPM, then project a year at the same rate. These estimates do not guarantee earnings."
    tool={<YouTubeRevenueCalculator />}
    explanation="This free browser-based calculator creates a planning estimate from the numbers you enter. It is independent of YouTube, does not use official YouTube data, and cannot predict or guarantee actual earnings. Your entries stay in your browser and are not saved."
    steps={[
      'Enter the monthly views for the content you want to estimate. For Shorts, use the engaged views that match your Shorts RPM.',
      'Enter RPM in USD per 1,000 views. Use your own figure for the same content and reporting period when available, or compare clearly labelled planning assumptions.',
      'Review the monthly estimate and yearly projection, remembering that the yearly figure assumes the same results for 12 months.',
    ]}
    faqs={faqs}
  >
    <h2>Helpful revenue examples</h2>
    <div className="example-grid">
      <div className="example"><h3>100,000 monthly views</h3><p>100,000 ÷ 1,000 × $3 RPM gives an estimate of <strong>$300 per month</strong>, or <strong>$3,600 per year</strong> at the same monthly rate.</p></div>
      <div className="example"><h3>200,000 monthly views</h3><p>200,000 ÷ 1,000 × $5 RPM gives an estimate of <strong>$1,000 per month</strong>, or <strong>$12,000 per year</strong> at the same monthly rate.</p></div>
    </div>
    <p className="muted">These examples are simple scenarios, not typical or promised results. Try a low, middle, and high RPM to see a more useful range.</p>
    <p>Read <a className="text-link" href="https://support.google.com/youtube/answer/9314357?hl=en">YouTube’s official RPM and revenue definitions</a> to choose the right input from your analytics.</p>
    <h2>Plan the content behind the estimate</h2>
    <p>Revenue is only one part of a sustainable channel plan. Use the <Link className="text-link" href="/tools/youtube-script-length-calculator">YouTube Script Length Calculator</Link> to set a first-draft word count, then follow the <Link className="text-link" href="/guides/youtube-video-planning-checklist">YouTube video planning checklist</Link> to organise production. Faceless creators can also use the <Link className="text-link" href="/guides/how-to-plan-a-faceless-youtube-video">faceless YouTube video planning guide</Link>.</p>
  </ToolLayout>;
}
