import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import YouTubeRevenueCalculator from '@/components/YouTubeRevenueCalculator';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'YouTube Revenue Calculator',
  description: 'Estimate possible monthly and yearly YouTube revenue from views, RPM, and an optional monetized playback percentage.',
  path: '/tools/youtube-revenue-calculator',
});

const faqs = [
  ['What does RPM mean?', 'RPM means revenue per 1,000 playbacks in this calculator. Enter the rate you want to test, based on your own channel data or a planning assumption.'],
  ['How is estimated YouTube revenue calculated?', 'The calculator multiplies monthly views by the optional monetized playback percentage, divides by 1,000, and multiplies that figure by your RPM. The yearly estimate is the monthly result multiplied by 12.'],
  ['Why might actual revenue be different?', 'Actual revenue can vary with audience location, topic, season, video format, advertiser demand, ad availability, viewer behaviour, and other revenue adjustments.'],
  ['Is this an official YouTube calculator?', 'No. CreatorPlanTools is independent, and this calculator does not use or claim to provide official YouTube data.'],
  ['What if I do not know my monetized playback percentage?', 'Leave the field blank to run a simple views-and-RPM scenario. If you add a percentage, the calculator applies your RPM only to that share of total views.'],
];

export default function Page() {
  return <ToolLayout
    eyebrow="YouTube planning tool"
    title="YouTube Revenue Calculator"
    intro="Estimate possible monthly and yearly revenue using your monthly views, an RPM assumption, and an optional monetized playback percentage."
    tool={<YouTubeRevenueCalculator />}
    explanation="This free browser-based calculator creates a planning estimate from the numbers you enter. It is independent of YouTube, does not use official YouTube data, and cannot predict or guarantee actual earnings. Your entries stay in your browser and are not saved."
    steps={[
      'Enter the number of views you expect in an average month.',
      'Enter an RPM to test. Use your own historical figure when available, or compare several cautious scenarios.',
      'Optionally enter the percentage of views you expect to be monetized. Leave it blank to apply the RPM to all views.',
      'Review the monthly estimate and yearly projection, remembering that the yearly figure assumes the same results for 12 months.',
    ]}
    faqs={faqs}
  >
    <h2>Helpful revenue examples</h2>
    <div className="example-grid">
      <div className="example"><h3>Growing channel</h3><p>50,000 monthly views at a $3 RPM gives an estimate of <strong>$150 per month</strong> when the optional percentage is blank.</p></div>
      <div className="example"><h3>Monetized playback scenario</h3><p>200,000 views, a $5 RPM, and 60% monetized playbacks gives an estimate of <strong>$600 per month</strong>.</p></div>
    </div>
    <p className="muted">These examples are simple scenarios, not typical or promised results. Try a low, middle, and high RPM to see a more useful range.</p>
    <h2>Plan the content behind the estimate</h2>
    <p>Revenue is only one part of a sustainable channel plan. Use the <Link className="text-link" href="/tools/youtube-script-length-calculator">YouTube Script Length Calculator</Link> to set a first-draft word count, then follow the <Link className="text-link" href="/guides/youtube-video-planning-checklist">YouTube video planning checklist</Link> to organise production. Faceless creators can also use the <Link className="text-link" href="/guides/how-to-plan-a-faceless-youtube-video">faceless YouTube video planning guide</Link>.</p>
  </ToolLayout>;
}
