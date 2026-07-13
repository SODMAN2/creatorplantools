export const toolSections = [
  {
    id: 'youtube-tools',
    title: 'YouTube Tools',
    description: 'Plan long-form videos, shape clearer packaging, and estimate the script behind your next YouTube upload.',
    guideLinks: [
      { label: 'YouTube video planning checklist', href: '/guides/youtube-video-planning-checklist' },
      { label: 'How long should a YouTube script be?', href: '/guides/how-long-should-a-youtube-script-be' },
    ],
    tools: [
      { icon: 'YT', name: 'YouTube Script Length Calculator', description: 'Estimate the word count you need for a target video length and speaking pace.', href: '/tools/youtube-script-length-calculator' },
      { icon: 'T', name: 'YouTube Title Length Checker', description: 'Check a YouTube title’s characters, words, and readability with a simple length status.', href: '/tools/youtube-title-length-checker' },
      { icon: 'D', name: 'YouTube Description Length Checker', description: 'Check a YouTube description’s characters, words, lines, opening preview, and structure.', href: '/tools/youtube-description-length-checker' },
    ],
  },
  {
    id: 'short-form-tools',
    title: 'Shorts, TikTok & Reels Tools',
    description: 'Build stronger openings and review the structure, captions, and hashtags for short-form vertical content.',
    guideLinks: [
      { label: 'How to plan YouTube Shorts', href: '/guides/how-to-plan-youtube-shorts' },
      { label: 'TikTok video structure guide', href: '/guides/tiktok-video-structure' },
    ],
    tools: [
      { icon: 'V', name: 'TikTok Video Planner', description: 'Plan a clear hook, content beats, call to action, and timing for a short-form video.', href: '/tools/tiktok-video-planner' },
      { icon: '#', name: 'Hashtag Counter', description: 'Count, clean, and review hashtags for YouTube, TikTok, Instagram, Reels, and Shorts.', href: '/tools/hashtag-counter' },
      { icon: 'C', name: 'Caption Character Counter', description: 'Count characters, words, lines, and estimated reading time for social media captions.', href: '/tools/caption-character-counter' },
    ],
  },
  {
    id: 'creator-planning-tools',
    title: 'Creator Planning Tools',
    description: 'Organise content ideas, shape stronger openings, and turn finished drafts into realistic recording and production plans.',
    guideLinks: [
      { label: 'Content calendar for creators', href: '/guides/content-calendar-for-creators' },
      { label: 'How to batch create content', href: '/guides/how-to-batch-create-content' },
    ],
    tools: [
      { icon: 'CAL', name: 'Content Calendar Planner', description: 'Organise weekly or monthly content ideas by platform, format, date, and production status.', href: '/tools/content-calendar-planner' },
      { icon: 'H', name: 'Video Hook Checker', description: 'Check a video opening line’s words, characters, estimated speaking time, and practical hook length.', href: '/tools/video-hook-checker' },
      { icon: 'VO', name: 'Voiceover Duration Calculator', description: 'Turn a script word count into a realistic voiceover duration at different narration speeds.', href: '/tools/voiceover-duration-calculator' },
    ],
  },
  {
    id: 'analytics-growth-tools',
    title: 'Analytics & Growth Estimate Tools',
    description: 'Explore watch time, engagement, and revenue scenarios using your own figures and cautious assumptions.',
    guideLinks: [
      { label: 'How often should creators post?', href: '/guides/how-often-should-creators-post' },
      { label: 'How to batch create content', href: '/guides/how-to-batch-create-content' },
    ],
    tools: [
      { icon: '$', name: 'YouTube Revenue Calculator', description: 'Estimate possible monthly and yearly YouTube revenue from views and RPM scenarios.', href: '/tools/youtube-revenue-calculator' },
      { icon: '%', name: 'Engagement Rate Calculator', description: 'Calculate engagement by views or followers for videos and social media posts.', href: '/tools/engagement-rate-calculator' },
      { icon: 'WT', name: 'Watch Time Calculator', description: 'Estimate total watch time in minutes, hours, and days from views and average view duration.', href: '/tools/watch-time-calculator' },
    ],
  },
];

export const toolList = toolSections.flatMap((section) => section.tools);
