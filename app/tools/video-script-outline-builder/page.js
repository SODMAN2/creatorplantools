import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import VideoScriptOutlineBuilder from '@/components/VideoScriptOutlineBuilder';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({ title: 'Video Script Outline Builder', description: 'Build a simple video script outline for YouTube, TikTok, Shorts, Reels, Instagram, or faceless videos with this free browser-based planning tool.', path: '/tools/video-script-outline-builder' });

export default function Page() {
  return <ToolLayout eyebrow="Video planning tool" title="Video Script Outline Builder" intro="Plan a clear hook, intro, three main points, transitions, and call to action before you record a video." tool={<VideoScriptOutlineBuilder />} wide explanation="This browser-based planner turns your notes into a clean outline you can use for YouTube, TikTok, Shorts, Reels, Instagram, or faceless videos. It does not write or assess your script with AI." steps={['Add your topic, platform, target audience, and the useful goal of the video.', 'Draft an opening idea and up to three main points in the order viewers need them.', 'Add a relevant call to action plus any visual, recording, or editing notes.', 'Read the live preview from top to bottom and revise anything that feels unclear or out of order.']} faqs={[
    ['What is a video script outline?', 'A video script outline is a short plan for the order of your opening, introduction, main ideas, transitions, and ending. It can guide recording without requiring a word-for-word script.'],
    ['Can I use this for YouTube, TikTok, Shorts, and Reels?', 'Yes. The same basic outline can support long-form, short-form, Instagram, and faceless videos. Adjust the number and depth of each point to suit the format.'],
    ['Do I need to fill in every field?', 'No. Use only the fields your video needs. A very short video may have one main point, while a longer tutorial may use all three as broad sections.'],
    ['Does the tool use AI or write the script for me?', 'No. It is a browser-based planning form. It arranges the ideas you enter and provides a few general transition examples.'],
    ['Is my outline stored or sent anywhere?', 'No. The tool requires no login and does not save or send the information you enter. Clearing or leaving the page removes the current outline.'],
    ['Will using an outline guarantee more views or better retention?', 'No. An outline can make planning easier, but it cannot guarantee views, retention, ranking, revenue, reach, or growth. Results depend on the topic, execution, audience, platform, and other factors.'],
  ]}>
    <h2>Practical tips for better video outlines</h2>
    <ul className="steps"><li>Give the video one clear job that can be explained in a single sentence.</li><li>Write the hook after deciding what the video genuinely delivers, then check it with the <Link className="content-link" href="/tools/video-hook-checker">Video Hook Checker</Link>.</li><li>Arrange points in the order a beginner needs them, with essential context before advanced detail.</li><li>Attach an example, demonstration, visual, or source to each important point.</li><li>Read the outline aloud and estimate a suitable draft with the <Link className="content-link" href="/tools/youtube-script-length-calculator">YouTube Script Length Calculator</Link> or <Link className="content-link" href="/tools/voiceover-duration-calculator">Voiceover Duration Calculator</Link>.</li><li>Use a call to action only when there is a natural and useful next step.</li></ul>
    <h2>Turn the outline into a recording plan</h2>
    <p>For a fuller workflow, read <Link className="content-link" href="/guides/how-to-plan-a-video-before-recording">How to Plan a Video Before Recording</Link>, <Link className="content-link" href="/guides/how-to-write-a-video-hook">How to Write a Video Hook</Link>, or <Link className="content-link" href="/guides/how-to-plan-a-faceless-youtube-video">How to Plan a Faceless YouTube Video</Link>.</p>
    <p>When the outline is ready, organise production with the <Link className="content-link" href="/tools/content-calendar-planner">Content Calendar Planner</Link> and the guide to <Link className="content-link" href="/guides/how-to-create-a-simple-content-workflow">creating a simple content workflow</Link>.</p>
  </ToolLayout>;
}
