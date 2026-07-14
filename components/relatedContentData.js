const tools = {
  publishing: ['Video Publishing Checklist', '/tools/video-publishing-checklist', 'Review the important details before publishing a video.'],
  outline: ['Video Script Outline Builder', '/tools/video-script-outline-builder', 'Turn your video idea into a clear recording outline.'],
  calendar: ['Content Calendar Planner', '/tools/content-calendar-planner', 'Organise content ideas by platform, date, format, and status.'],
  script: ['YouTube Script Length Calculator', '/tools/youtube-script-length-calculator', 'Estimate a word-count target from runtime and speaking pace.'],
  title: ['YouTube Title Length Checker', '/tools/youtube-title-length-checker', 'Review a title\'s length, word count, and readability.'],
  description: ['YouTube Description Length Checker', '/tools/youtube-description-length-checker', 'Check the length, opening, and structure of a description.'],
  planner: ['TikTok Video Planner', '/tools/tiktok-video-planner', 'Map a short video\'s hook, value, call to action, and timing.'],
  hashtags: ['Hashtag Counter', '/tools/hashtag-counter', 'Count, clean, and review social media hashtags.'],
  caption: ['Caption Character Counter', '/tools/caption-character-counter', 'Check caption characters, words, lines, and reading time.'],
  hook: ['Video Hook Checker', '/tools/video-hook-checker', 'Review the length and speaking time of an opening line.'],
  voiceover: ['Voiceover Duration Calculator', '/tools/voiceover-duration-calculator', 'Estimate how long a finished script may take to narrate.'],
  revenue: ['YouTube Revenue Calculator', '/tools/youtube-revenue-calculator', 'Explore cautious scenarios using views and your own RPM.'],
  engagement: ['Engagement Rate Calculator', '/tools/engagement-rate-calculator', 'Calculate interactions relative to views or followers.'],
  watchTime: ['Watch Time Calculator', '/tools/watch-time-calculator', 'Convert views and average duration into total watch time.'],
};

const guides = {
  script: ['How Long Should a YouTube Script Be?', '/guides/how-long-should-a-youtube-script-be', 'Choose a script length for your format, visuals, and pace.'],
  checklist: ['YouTube Video Planning Checklist', '/guides/youtube-video-planning-checklist', 'Work through the idea, script, visuals, packaging, and review.'],
  descriptions: ['How to Write Better Video Descriptions', '/guides/how-to-write-better-video-descriptions', 'Write clear summaries, chapters, links, credits, and disclosures.'],
  hooks: ['How to Write a Video Hook', '/guides/how-to-write-a-video-hook', 'Open with a relevant promise and earn the viewer\'s attention.'],
  shorts: ['How to Plan YouTube Shorts', '/guides/how-to-plan-youtube-shorts', 'Shape one focused vertical video from opening to payoff.'],
  tiktok: ['TikTok Video Structure: Hook, Value, CTA', '/guides/tiktok-video-structure', 'Build a complete short-form idea around clear content beats.'],
  voiceover: ['Voiceover Pacing for Videos', '/guides/voiceover-pacing-for-videos', 'Plan understandable narration with purposeful pauses.'],
  facelessVideo: ['How to Plan a Faceless YouTube Video', '/guides/how-to-plan-a-faceless-youtube-video', 'Coordinate narration, research, visuals, and production.'],
  facelessChannel: ['How to Plan Content for a Faceless Channel', '/guides/how-to-plan-content-for-a-faceless-channel', 'Build useful content pillars and a sustainable workflow.'],
  professional: ['Make Faceless Content Look Professional', '/guides/how-to-make-faceless-content-look-professional', 'Improve visual consistency, audio, sourcing, and quality control.'],
  broll: ['How to Plan B-Roll for Videos', '/guides/how-to-plan-b-roll-for-videos', 'Turn an outline into a purposeful supporting shot list.'],
  calendar: ['Simple Content Calendar for Creators', '/guides/content-calendar-for-creators', 'Organise ideas and production around real capacity.'],
  posting: ['How Often Should Creators Post?', '/guides/how-often-should-creators-post', 'Choose a publishing rhythm you can maintain without rushing.'],
  batch: ['How to Batch Create Content', '/guides/how-to-batch-create-content', 'Group compatible tasks while protecting quality.'],
  repurpose: ['Turn One Video Idea Into Multiple Posts', '/guides/how-to-turn-one-video-idea-into-many-posts', 'Adapt one useful idea across formats without making duplicates.'],
  preRecord: ['How to Plan a Video Before Recording', '/guides/how-to-plan-a-video-before-recording', 'Prepare the outcome, outline, words, visuals, and recording setup.'],
  workflow: ['Simple Content Workflow for YouTube, TikTok, and Reels', '/guides/how-to-create-a-simple-content-workflow', 'Move ideas through production, review, scheduling, and learning.'],
  package: ['Use Hooks, Captions, and Hashtags Together', '/guides/how-to-use-hooks-captions-and-hashtags-together', 'Give each part of a short-form post a clear, connected job.'],
  series: ['How to Plan a YouTube Video Series', '/guides/how-to-plan-a-youtube-video-series', 'Map useful standalone episodes into a connected viewer journey.'],
  longToShorts: ['Repurpose Long Videos into Shorts, TikToks, and Reels', '/guides/how-to-repurpose-long-videos-into-shorts', 'Turn standalone long-form moments into complete vertical videos.'],
};

const toolMap = {
  'Video Publishing Checklist': [['outline', 'hook', 'description', 'caption', 'calendar'], ['preRecord', 'workflow', 'package']],
  'Video Script Outline Builder': [['hook', 'script', 'voiceover', 'calendar'], ['preRecord', 'hooks', 'facelessVideo', 'workflow']],
  'Content Calendar Planner': [['planner', 'hook'], ['calendar', 'batch', 'repurpose']],
  'YouTube Script Length Calculator': [['voiceover', 'hook'], ['script', 'checklist']],
  'YouTube Title Length Checker': [['description', 'script'], ['checklist', 'hooks']],
  'YouTube Description Length Checker': [['title', 'script'], ['descriptions', 'checklist']],
  'TikTok Video Planner': [['hook', 'caption'], ['tiktok', 'shorts']],
  'Hashtag Counter': [['caption', 'engagement'], ['descriptions', 'calendar']],
  'Caption Character Counter': [['hashtags', 'hook'], ['descriptions', 'repurpose']],
  'Video Hook Checker': [['planner', 'caption'], ['hooks', 'tiktok']],
  'Voiceover Duration Calculator': [['script', 'hook'], ['voiceover', 'broll']],
  'YouTube Revenue Calculator': [['watchTime', 'engagement'], ['checklist', 'posting']],
  'Engagement Rate Calculator': [['watchTime', 'revenue'], ['posting', 'calendar']],
  'Watch Time Calculator': [['engagement', 'revenue'], ['checklist', 'tiktok']],
};

const guideMap = {
  'how-long-should-a-youtube-script-be': [['script', 'voiceover'], ['voiceover', 'checklist']],
  'how-to-plan-a-faceless-youtube-video': [['voiceover', 'hook'], ['broll', 'professional']],
  'voiceover-pacing-for-videos': [['voiceover', 'script'], ['broll', 'facelessVideo']],
  'tiktok-video-structure': [['planner', 'hook'], ['shorts', 'hooks']],
  'content-calendar-for-creators': [['planner', 'voiceover'], ['batch', 'posting']],
  'how-to-write-a-video-hook': [['hook', 'planner'], ['tiktok', 'shorts']],
  'youtube-video-planning-checklist': [['script', 'title'], ['broll', 'descriptions']],
  'how-to-plan-b-roll-for-videos': [['voiceover', 'script'], ['facelessVideo', 'professional']],
  'how-to-make-faceless-content-look-professional': [['voiceover', 'description'], ['facelessVideo', 'facelessChannel']],
  'how-often-should-creators-post': [['planner', 'voiceover'], ['calendar', 'batch']],
  'how-to-plan-youtube-shorts': [['planner', 'hook'], ['hooks', 'tiktok']],
  'how-to-write-better-video-descriptions': [['description', 'title'], ['checklist', 'repurpose']],
  'how-to-batch-create-content': [['voiceover', 'planner'], ['calendar', 'posting']],
  'how-to-turn-one-video-idea-into-many-posts': [['planner', 'caption'], ['calendar', 'shorts']],
  'how-to-plan-content-for-a-faceless-channel': [['voiceover', 'hook'], ['facelessVideo', 'professional']],
  'how-to-plan-a-video-before-recording': [['hook', 'script'], ['hooks', 'checklist']],
  'how-to-create-a-simple-content-workflow': [['calendar', 'caption'], ['batch', 'repurpose']],
  'how-to-use-hooks-captions-and-hashtags-together': [['hook', 'hashtags', 'caption'], ['hooks', 'repurpose']],
  'how-to-plan-a-youtube-video-series': [['calendar', 'script', 'description'], ['batch', 'checklist']],
  'how-to-repurpose-long-videos-into-shorts': [['calendar', 'caption', 'hashtags'], ['repurpose', 'facelessChannel']],
};

const item = ([label, href, description]) => ({ label, href, description });
function resolve(mapping) {
  if (!mapping) return null;
  return { tools: mapping[0].map((key) => item(tools[key])), guides: mapping[1].map((key) => item(guides[key])) };
}

export const getRelatedForTool = (title) => resolve(toolMap[title]);
export const getRelatedForGuide = (slug) => resolve(guideMap[slug]);
