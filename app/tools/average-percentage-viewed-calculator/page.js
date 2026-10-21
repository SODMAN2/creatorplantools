import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import AveragePercentageViewedCalculator from '@/components/AveragePercentageViewedCalculator';
import { createPageMetadata } from '@/app/seo';
import './apv.css';

export const metadata = createPageMetadata({
  title: 'Average Percentage Viewed Calculator — AVD to %',
  description: 'Calculate average percentage viewed from video length and average view duration. Enter mm:ss or hh:mm:ss, see the arithmetic, and understand results above 100%.',
  path: '/tools/average-percentage-viewed-calculator',
});

const faqs = [
  ['How do I calculate average percentage viewed?', 'Divide the average view duration by the full video length and multiply by 100, using matching time units. For a 10-minute video with a 5-minute average view duration, 5 ÷ 10 × 100 = 50%. Use the duration and analytics from the same video and reporting period.'],
  ['What is the difference between AVD and APV?', 'Average view duration (AVD) is an amount of time watched on average. Average percentage viewed (APV) expresses that time as a proportion of the video’s full runtime. A 2-minute AVD is 25% of an 8-minute video, but 50% of a 4-minute video.'],
  ['Can average percentage viewed be above 100%?', 'Yes, mathematically: 45 seconds divided by a 30-second video is 150%. That can describe viewing time which includes replaying or looping. Whether a platform includes those plays in a particular metric depends on its reporting rules; this calculator does not reproduce every platform report.'],
  ['Is 50% average percentage viewed good?', 'There is no single percentage that this calculator treats as a universal grade. Interpretation depends on video length, format, audience, content type, traffic source, and viewer intent. Compare similar videos and use your own analytics as context.'],
  ['Does APV tell me how many viewers finished the video?', 'No. It describes average viewing time relative to runtime. It does not show the proportion of unique viewers who reached the end or where viewers left. A retention curve and completion metric answer different questions.'],
  ['Why might my result differ from YouTube Analytics?', 'Displayed average view duration may be rounded, and YouTube applies its own metric definitions and traffic rules. Use the same video and reporting period. For Shorts, YouTube Help describes AVD and APV using engaged views and their corresponding watch time, rather than all starts.'],
  ['Can I enter zero, short videos, or videos longer than an hour?', 'Average view duration can be 0:00, giving 0%. Video length must be greater than zero. Use 0:01 for one second, 0:00.5 for half a second, and 1:30:00 for 90 minutes. Negative, malformed, and blank entries do not produce a percentage.'],
];

export default function Page() {
  return <ToolLayout
    eyebrow="Video analytics tool"
    title="Average Percentage Viewed Calculator"
    intro="Convert average view duration into the average share of one video’s runtime watched. Enter the video length and average view duration to calculate APV, with the arithmetic shown."
    tool={<AveragePercentageViewedCalculator />}
    explanation="This APV calculator divides average view duration by video length and multiplies by 100. Use the same video, platform, and reporting period. Results can exceed 100% when the entered viewing time includes replays; the percentage describes time watched, not how many people finished."
    steps={[
      'Enter the full video length as mm:ss or hh:mm:ss. For example, 10:00 is 10 minutes, while 1:10:00 is 1 hour 10 minutes.',
      'Enter average view duration for that same video and reporting period. Use 0:00 for a measured zero; a blank field does not mean zero.',
      'Read the percentage and the worked arithmetic, which update as you type. Fix any highlighted input error before calculating.',
      'Interpret the result alongside video length, format, audience, and traffic source. Compare similar content rather than applying a universal score.',
    ]}
    faqs={faqs}
  >
    <h2>The average percentage viewed formula</h2>
    <p className="apv-formula"><strong>Average Percentage Viewed = Average View Duration ÷ Video Length × 100</strong></p>
    <p>Both durations must use the same units. The calculator converts your time entries to matching units automatically, so you do not need to work out decimal minutes. Use one video’s full runtime rather than a typical length for a whole channel.</p>

    <h2>Average view duration vs average percentage viewed</h2>
    <p><strong>AVD is time; APV is a percentage.</strong> A 2-minute average view duration means 25% of an 8-minute video, or 50% of a 4-minute video. The time watched is the same, but the share of the runtime changes. Neither number tells you exactly when people stopped watching.</p>

    <h2>Worked examples</h2>
    <p>These examples demonstrate the formula. They are not performance benchmarks.</p>
    <div className="apv-examples">
      <div className="apv-example"><h3>10:00 video · 5:00 average view duration</h3><p>5 minutes ÷ 10 minutes × 100 = <strong>50%</strong>.</p><p>The average time watched equals half of one full runtime.</p></div>
      <div className="apv-example"><h3>8:00 video · 2:00 average view duration</h3><p>2 minutes ÷ 8 minutes × 100 = <strong>25%</strong>.</p><p>The average time watched equals a quarter of the runtime.</p></div>
      <div className="apv-example"><h3>0:30 video · 0:45 average view duration</h3><p>45 seconds ÷ 30 seconds × 100 = <strong>150%</strong>.</p><p>The average time watched equals one and a half full runtimes. This is mathematically possible if the entered duration includes replay or loop viewing; it does not mean 150% of unique viewers finished.</p></div>
      <div className="apv-example"><h3>1:30:00 video · 0:22:30 average view duration</h3><p>22.5 minutes ÷ 90 minutes × 100 = <strong>25%</strong>.</p><p>The same calculation works for videos longer than an hour.</p></div>
    </div>

    <h2>Why a result can exceed 100%</h2>
    <p>The formula has no 100% cap: if average viewing time exceeds the nominal video length, the ratio exceeds one. Replayed sections or looped viewing can produce that relationship where those plays are included in the input metric. This is a general mathematical explanation, not a claim that every platform counts replays or loops in the same way.</p>

    <h2>Official YouTube definitions</h2>
    <p><a data-analytics-resource className="text-link" href="https://developers.google.com/youtube/analytics/metrics#Watch_time_metrics">YouTube’s Analytics API documentation</a> defines averageViewDuration as mean playback length in seconds and averageViewPercentage as the mean percentage watched per playback. It also states that both exclude looping Clips traffic from 13 December 2021. That specific Clips rule should not be generalised to every kind of replay or loop.</p>
    <p>For Shorts, <a data-analytics-resource className="text-link" href="https://support.google.com/youtube/answer/12220281?hl=en">YouTube Help’s content performance definitions</a> describe AVD and APV for viewers who stayed to watch, calculated from engaged views and their corresponding watch time. Use matching analytics, and check the platform’s own report when an exact reported metric matters. Official sources checked 21 October 2026.</p>

    <h2>CreatorPlanTools guidance: interpret the number in context</h2>
    <p>This calculator assigns no good or bad grade. Video length, format, audience, content type, traffic source, and viewer intent all affect what a comparison means. Review similar videos and your own history. An APV result is an average, not a retention curve, completion rate, or prediction of reach.</p>
    <p>For <strong>total accumulated viewing time</strong> across views, use the <Link className="text-link" href="/tools/watch-time-calculator">Watch Time Calculator</Link>. For interactions relative to views or followers, use the <Link className="text-link" href="/tools/engagement-rate-calculator">Engagement Rate Calculator</Link>. To review the viewing experience behind the numbers, read <Link className="text-link" href="/guides/how-to-improve-video-retention-with-better-structure">how to improve video retention with better structure</Link>.</p>
  </ToolLayout>;
}
