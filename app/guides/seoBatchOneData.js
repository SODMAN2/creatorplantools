const updated = { lastUpdated: 'September 20, 2026', lastUpdatedIso: '2026-09-20' };

export const seoBatchOneGuides = {
  twoColumnScript: {
    ...updated,
    slug: 'two-column-video-script-template',
    title: 'Two-Column Video Script Template for YouTube: Audio, Visuals and Timing',
    description: 'Copy a two-column YouTube script template with audio, visual actions and timing. Use a complete original example to plan narration, B-roll and silent beats.',
    intro: 'A two-column video script puts what viewers hear beside what they see. Copy the blank template below, write one beat per row, and use it to brief yourself or an editor before recording. An optional timing column keeps demonstrations and narration in sync.',
    sections: [
      {
        heading: 'Blank reusable two-column script template',
        paragraphs: ['Audio and visuals are the two main columns. Timing is a planning aid, not a third type of content. Copy this tab-separated template into a document or spreadsheet; each tab separates a column. Duplicate the main-point row for additional steps. Replace every bracketed instruction before recording.'],
        templateLabel: 'Blank audio and visual script',
        template: `VIDEO: [working title]
VIEWER OUTCOME: [one thing viewers will learn or do]
VERSION / DATE: [draft number and date]
TARGET RUNTIME: [approximate finished length]

Timing (optional)\tAudio / narration\tVisual / action
[start–end]\t[Opening: exact spoken words]\t[Opening shot, framing and on-screen text]
[start–end]\t[Setup: exact spoken words]\t[Show materials, screen or starting state]
[start–end]\t[Main point: exact spoken words; sound if needed]\t[Action, B-roll, text and asset filename]
[start–end]\t[VISUAL ONLY — no narration; specify sound]\t[Demonstration or reading time; hold length]
[start–end]\t[Recap and useful next step: exact spoken words]\t[Finished result and closing frame]

ASSETS TO CAPTURE: [shots, screens, graphics]
OPEN QUESTIONS: [facts, permissions or actions to check]`,
      },
      {
        heading: 'What belongs in each column?',
        list: [
          'Audio / narration: write the actual spoken sentence. Mark sound effects or music as instructions in brackets so they are not mistaken for speech.',
          'Visual / action: say what appears, what changes, and which detail needs to be visible. “Close-up: connect the cable to the labelled port” is more useful than “B-roll”.',
          'Timing: use approximate start and end times for the finished edit. Keep a separate schedule for filming; a ten-second scene can take several minutes to capture.',
          'Row boundaries: start a new row when the idea or action changes. One sentence can span several shots, and a single shot can support several sentences.',
        ],
        links: [{ href: '/tools/video-script-outline-builder', label: 'Use the Video Script Outline Builder to decide the beat order first' }],
      },
      {
        heading: 'Complete original example: label a charging cable',
        paragraphs: ['This finished script plans a 60-second hands-only tutorial using paper tape, a pen and an unplugged cable. The narration below is complete. Times are rough editing targets; rehearse the words and actions together before treating them as fixed.'],
        table: {
          caption: 'Worked script: make a readable cable label',
          headers: ['Timing', 'Audio / narration', 'Visual / action'],
          rows: [
            ['00:00–00:08', '“Which cable belongs to your camera? Make a small label so you can find it without guessing.”', 'Overhead shot of three unplugged cables. Pick up the camera cable. Text: “Label your cable”.'],
            ['00:08–00:17', '“You need paper tape and a pen. Leave the cable unplugged while you work, and keep the connector uncovered.”', 'Place tape and pen beside the cable. Point to the connector and the clear space around it.'],
            ['00:17–00:29', '“Wrap a short strip around the cable, a little way from the end. Press the sticky sides together to make a flat flag.”', 'Close-up of wrapping tape around the cable. Fold the ends together; keep the connector in frame.'],
            ['00:29–00:35', '[VISUAL ONLY — no narration. Keep quiet handling sounds.]', 'Hold a six-second close-up while pressing the tape flat. Show the flag from both sides.'],
            ['00:35–00:47', '“Write the device name on both sides. I am using CAMERA, so I can read the label whichever way the cable is facing.”', 'Write CAMERA on each side. Rotate the cable slowly so both labels can be read.'],
            ['00:47–01:00', '“Put it back with the other cables and check that the name is easy to spot. Label one cable you often mix up, then try finding it again.”', 'Return cable to the original group. Select it using the label. End on a still close-up of the finished flag.'],
          ],
        },
      },
      {
        heading: 'How to write a visual-only beat',
        paragraphs: ['A visual-only beat is time without spoken narration. The viewer might watch a hand movement, compare two images, or read a short label. Write “VISUAL ONLY” in the audio column and specify whether the soundtrack continues. A blank cell could otherwise be mistaken for unfinished work.', 'In the example, the six-second tape close-up is part of the minute, even though it adds no words. Do not fill that space with extra narration just to meet a word-count target. Equally, do not add the six seconds twice if your rehearsal already includes it.'],
        links: [{ href: '/guides/how-to-plan-b-roll-for-videos', label: 'Plan B-roll shots with a clear purpose' }],
      },
      {
        heading: 'Use the template before recording and editing',
        steps: [
          'Write the viewer outcome, then place the opening, steps and ending in order. Put exact narration beside each action.',
          'Read every row aloud while miming or rehearsing the action. Shorten the sentence or extend the shot if the two cannot fit together.',
          'Mark silent holds explicitly. Check that important labels and movements have enough viewing time.',
          'Turn the visual column into a capture list. Group shots that use the same setup and give files names that match their rows.',
          'Record a scratch read, update the timing column, then record the final narration and footage. Give the editor the current script version and its assets.',
          'During the rough cut, replace planned times with actual edit times. Recheck adjacent rows whenever a beat moves.',
        ],
        links: [
          { href: '/tools/youtube-script-length-calculator', label: 'Estimate a word budget from your target spoken duration' },
          { href: '/tools/voiceover-duration-calculator', label: 'Estimate the spoken duration of an existing draft' },
        ],
      },
    ],
    cta: { heading: 'Start with your video’s beats', text: 'Outline the useful steps, then paste them into the audio and visual template above.', label: 'Build a script outline', href: '/tools/video-script-outline-builder' },
    faqs: [
      ['Is this still a two-column script if it includes timing?', 'Yes. Audio and visuals are the two content columns. The optional timing column helps coordinate them and can be removed if you only need a rough plan.'],
      ['Should every row have narration?', 'No. Mark visual-only rows clearly and describe the sound and hold length. Demonstrations and readable on-screen information can need time without speech.'],
    ],
  },
  voiceoverScriptFormat: {
    ...updated,
    slug: 'voiceover-script-format-template',
    title: 'Voiceover Script Format: A Recording-Ready Template',
    description: 'Copy a recording-ready voiceover script template with pause, emphasis, pronunciation and pickup notes, plus a complete example and timed read calculation.',
    intro: 'A recording-ready voiceover script separates spoken words from delivery instructions. Use the template and notation below to make pauses, difficult names and retakes clear before you press record.',
    sections: [
      {
        heading: 'Blank reusable voiceover script template',
        paragraphs: ['Copy this into your document, replace the placeholders and use a readable font with space between lines. Keep stable line IDs so you and an editor can identify a retake even after the timing changes. These marks are CreatorPlanTools suggestions, not a required industry format.'],
        templateLabel: 'Blank recording script',
        template: `PROJECT: [title] | VERSION / DATE: [version and date]
VOICE: [tone and intended listener]
TARGET: [approximate finished duration]
SPOKEN WORDS: [count narration only]
PACE: [words per minute from a representative read]
PRONUNCIATION: [word or name = agreed spoken pronunciation]

KEY: [PAUSE 1s] = silence; *word* = gentle emphasis
[VISUAL: cue] = editor instruction, not spoken
[PICKUP L02, TAKE 2] = a replacement recording of line L02

L01 [opening cue or approximate edit time]
[Write the exact opening sentence.]
[PAUSE: length if needed]

L02 [VISUAL: what the viewer must see here]
[Write the next spoken sentence; mark *emphasis*.]

L03 [VISUAL HOLD: length; no narration]
[Write the closing sentence after the hold.]

PICKUPS / SELECTED TAKES:
[Line ID | take | reason for retake | selected audio filename]
TIMING NOTES: [scratch read duration; extra holds; revised total]`,
      },
      {
        heading: 'Use a small, consistent notation key',
        table: {
          caption: 'Suggested marks for a narrator and editor',
          headers: ['Mark', 'How to use it'],
          rows: [
            ['[PAUSE 1s]', 'Leave a deliberate one-second gap. Ordinary punctuation can handle normal sentence rhythm; mark longer or meaningful pauses explicitly.'],
            ['*important*', 'Stress this word gently. The asterisks are instructions, not spoken words. Avoid emphasising every sentence.'],
            ['PRONUNCIATION: Nori = NOR-ee', 'Put the agreed pronunciation in the header. Check unfamiliar names with the person or an authoritative recording before the session.'],
            ['[PICKUP L02, TAKE 2]', 'Record a replacement for L02. Leave a short gap after any spoken slate and remove that slate from the final edit.'],
            ['[VISUAL: show the label]', 'Coordinate the delivery with a shot or screen action. Use a separate hold marker if narration must stop.'],
          ],
        },
        links: [{ href: '/guides/voiceover-pacing-for-videos', label: 'Choose pauses and emphasis with the voiceover pacing guide' }],
      },
      {
        heading: 'Complete original example: a reusable recording checklist',
        paragraphs: ['This complete short voiceover has 70 spoken words across L01–L05. Count only the narration, including “Nori” as one word; exclude headers, line IDs, visual instructions and the pickup log. Nori is the fictional notebook name in this example.'],
        templateLabel: 'Completed voiceover script',
        template: `PROJECT: A reusable recording checklist | VERSION: 1
VOICE: Calm and practical, speaking to a first-time creator
TARGET: About 35 seconds | SPOKEN WORDS: 70 | PACE: 140 WPM
PRONUNCIATION: Nori = NOR-ee

L01 [VISUAL: open the notebook]
Before you record, open your Nori notebook and write three checks at the top of the page.
[PAUSE 1s]

L02 [VISUAL: point to each written check]
Check the microphone, clear the background, and silence your phone.

L03 [VISUAL: show the record button]
Now record *one* short sentence and play it back.
[PAUSE 1s]

L04 [VISUAL: headphones beside the notebook]
Listen for a clear voice without distracting noise.
[VISUAL HOLD 3s — no narration; show the checked list]

L05 [VISUAL: turn to a fresh page]
When everything is ready, keep this checklist beside you so your next recording starts with the same simple routine. You can then concentrate on the explanation.

PICKUP LOG (not spoken):
L03 | TAKE 2 | missed “one” | select L03-take02.wav
EDITOR: Replace the original L03 with take 2; do not keep both.`,
      },
      {
        heading: 'Timed read example: estimate first, measure next',
        paragraphs: ['For the example above, 70 words ÷ 140 words per minute × 60 gives 30 seconds of estimated speech. If that pace excludes the marked gaps, add two one-second pauses and the three-second visual hold: 30 + 1 + 1 + 3 = 35 seconds.', 'For an illustrative rehearsal, suppose L01–L05 take 32 seconds to speak and the marked gaps take five more seconds. The measured read would be 37 seconds. That is a worked measurement scenario, not an audio recording supplied with this guide. Your own read may differ.', 'If your stopwatch already includes those gaps, use its total; do not add them again. Retakes increase session time, but a replacement pickup should not increase the finished runtime when it replaces the original line.'],
        links: [{ href: '/tools/voiceover-duration-calculator', label: 'Estimate narration time from the spoken word count' }],
      },
      {
        heading: 'Prepare the script for the recording session',
        steps: [
          'Finish the idea order before marking delivery. Read each sentence aloud and replace wording that is hard to say.',
          'Move directions into brackets and confirm pronunciations. Count only the words the audience will hear.',
          'Mark a few purposeful pauses and stressed words. Put visual cues beside the line they affect.',
          'Record and time a scratch read in the intended voice. Adjust the wording or visual hold before rushing the delivery.',
          'Record pickups using stable line IDs. Match microphone position, tone and surrounding sentence rhythm, then log the selected take.',
          'Give the editor the final script and audio selections. Measure the assembled recording again after pauses, pickups and visuals are edited.',
        ],
        paragraphs: ['Estimated runtime and actual recorded runtime can differ because of breath, pronunciation, emphasis, pauses and delivery. The finished video may also include demonstrations or music without speech. A word-count estimate is a starting point for rehearsal.'],
        links: [
          { href: '/tools/video-script-outline-builder', label: 'Organise the script before formatting the read' },
          { href: '/tools/youtube-script-length-calculator', label: 'Set a word budget when you have a target runtime' },
        ],
      },
    ],
    cta: { heading: 'Check the spoken word count against time', text: 'Enter narration words only, choose a planning pace, then confirm the result with a recorded read.', label: 'Estimate voiceover duration', href: '/tools/voiceover-duration-calculator' },
    faqs: [
      ['Should pronunciation notes be included in the word count?', 'No. Count the name as it appears in the spoken sentence, but exclude the separate pronunciation note and all other recording directions.'],
      ['How do I mark a retake without confusing the editor?', 'Keep the original line ID, add a take number, and record which file should replace that line. A pickup log tells the editor which recording to use.'],
    ],
  },
  tutorialDescription: {
    ...updated,
    slug: 'youtube-tutorial-description-template',
    title: 'YouTube Tutorial Description Template with Chapters and Resources',
    description: 'Copy a YouTube tutorial description template with a summary, prerequisites, chapters, resources, credits and CTA, plus a complete original example.',
    intro: 'A useful tutorial description tells viewers what they will make, what they need and where to find each step. Copy this structure, replace the placeholders with details from your finished video, and remove sections that do not apply.',
    sections: [
      {
        heading: 'Blank reusable tutorial description template',
        paragraphs: ['The opening should make sense on its own. Add chapter times only after checking the final edit; the times below are placeholders, not a list ready to publish. Keep each resource beside a short explanation of its purpose.'],
        templateLabel: 'Blank YouTube tutorial description',
        template: `[Learn to do WHAT, using WHICH method or tools. Say who this tutorial is for and what the finished result will be.]

BEFORE YOU START
- [Materials, app/version or account needed]
- [Skill, setup or file needed; delete if none]

CHAPTERS
00:00 [Opening chapter title]
[mm:ss] [First useful step]
[mm:ss] [Next useful step]
[mm:ss] [Finished result or check]

RESOURCES
- [Resource name — what it helps with]: [full URL]
- [File or reference used in the tutorial]: [full URL]

CREDITS / DISCLOSURE
[Credit assets or collaborators where needed. Clearly describe any relevant sponsor, affiliate or other commercial relationship. Remove this placeholder.]

NEXT STEP
[One useful action: try the exercise, ask a specific question or watch a relevant follow-up.]`,
      },
      {
        heading: 'Complete original example: a paper video shot list',
        paragraphs: ['This description accompanies an invented 4-minute-20-second tutorial about making a paper shot list. It includes everything needed to publish the example text: a specific summary, materials, chapter titles, real relevant resource URLs, credits and one next step. It is a teaching example, not a claim that this video or sponsorship exists.'],
        templateLabel: 'Completed tutorial description',
        template: `Make a paper shot list for a short desk tutorial. We turn one video idea into an opening shot, close-ups and a final result shot, then check the list before recording.

BEFORE YOU START
- One sheet of paper and a pen
- A simple tutorial idea you can demonstrate at your desk
- No app, account or previous filming experience needed

CHAPTERS
00:00 The finished shot list
00:25 Write the viewer outcome
01:05 Divide the page into audio and visuals
02:00 Add close-ups for each action
03:10 Check the list against the script
03:55 Recap and recording preparation

RESOURCES
- Plan supporting shots with the B-roll guide: https://creatorplantools.com/guides/how-to-plan-b-roll-for-videos
- Arrange the video’s opening, steps and ending: https://creatorplantools.com/tools/video-script-outline-builder

CREDITS / DISCLOSURE
The demonstration and drawings in this example tutorial are original. No music or third-party footage is used. This example has no sponsor or affiliate links.

NEXT STEP
Draft a five-shot list for your own tutorial. Which action needs the closest view?`,
      },
      {
        heading: 'Which sections are optional?',
        list: [
          'Summary: keep a specific opening in this template. Name the task, the approach and the result rather than starting with unrelated channel information.',
          'Prerequisites: useful when viewers need materials, a file, an account or prior knowledge. Remove the section when there is nothing to prepare.',
          'Chapters: optional. Include them when viewers can usefully jump between parts of the tutorial. Use the actual section boundaries from the finished video.',
          'Resources: optional if there are no supporting files or references. Link only to resources you have checked and that help with the demonstrated task.',
          'Credits and disclosures: conditional, not something to omit when an asset, relationship or applicable obligation calls for them. Replace the example wording with accurate information and complete relevant upload settings separately.',
          'CTA: optional. One practical next step is enough; a tutorial can also end without asking the viewer to do anything.',
        ],
        paragraphs: ['These section choices are CreatorPlanTools writing recommendations. YouTube does not require this particular description layout. A disclosure paragraph is not a substitute for checking any applicable platform settings or obligations.'],
      },
      {
        heading: 'Official YouTube limits and chapter rules',
        paragraphs: ['YouTube allows up to 5,000 characters in a description. Its guidance encourages creators to explain the video in the opening lines; this does not establish a fixed 150-character search excerpt.'],
        externalResource: { before: 'Source: ', label: 'YouTube Help — tips for video descriptions', href: 'https://support.google.com/youtube/answer/12948449?hl=en', after: ' (checked September 20, 2026).' },
        links: [{ href: '/tools/youtube-description-length-checker', label: 'Count the full description, including resources and chapter text' }],
      },
      {
        heading: 'Check the chapter list against the actual edit',
        paragraphs: ['For manual chapters, YouTube documents a 00:00 start, at least three timestamps in ascending order, and chapters at least 10 seconds long. Include a title with each timestamp. Access and eligibility also matter, so correct text alone does not ensure chapters appear.', 'In the worked example, the last chapter starts at 03:55 and the video ends at 04:20, leaving 25 seconds. Every earlier interval also exceeds 10 seconds. The section names describe what the viewer can do at that point.'],
        externalResource: { before: 'Source: ', label: 'YouTube Help — video chapters', href: 'https://support.google.com/youtube/answer/9884579?hl=en', after: ' (checked September 20, 2026).' },
        links: [{ href: '/guides/youtube-chapters-not-showing', label: 'Troubleshoot chapters that do not appear' }],
      },
      {
        heading: 'Final description check before publishing',
        steps: [
          'Replace all placeholders and delete unused headings. Check that the opening matches what the tutorial actually teaches.',
          'Confirm prerequisites against the demonstrated materials or software version.',
          'Play the final upload and compare every chapter time with its section. Recheck after any edit that changes timing.',
          'Open each resource URL and confirm the correct destination and access. Add accurate credits and relevant disclosures.',
          'Check the total character count, then review the description on the video page. Counting text does not check chapter availability or writing quality.',
        ],
        links: [
          { href: '/tools/youtube-title-length-checker', label: 'Check the title alongside the description' },
          { href: '/guides/how-to-write-better-video-descriptions', label: 'Improve the wording of the opening and supporting sections' },
          { href: '/tools/video-publishing-checklist', label: 'Finish the upload review with the Video Publishing Checklist' },
        ],
      },
    ],
    cta: { heading: 'Check the completed description', text: 'Paste your full draft into the checker to see the character count and remaining space.', label: 'Check description length', href: '/tools/youtube-description-length-checker' },
    faqs: [
      ['Can I reuse the same description for every tutorial?', 'Reuse the structure, but replace the summary, prerequisites, chapter times and resources for each video. Check credits and disclosures again rather than copying them automatically.'],
      ['Do I need chapters in a short tutorial?', 'No. Use them when the sections help viewers navigate. If you choose manual chapters, follow YouTube’s documented timestamp and chapter-length rules.'],
    ],
  },
  chaptersNotShowing: {
    ...updated,
    slug: 'youtube-chapters-not-showing',
    title: 'YouTube Chapters Not Showing? Check Timestamps and Eligibility',
    description: 'Troubleshoot missing YouTube chapters with a decision tree, invalid and corrected timestamps, official chapter rules, and feature eligibility checks.',
    intro: 'If YouTube chapters are missing, check the saved description, the timing of the finished video and your channel’s feature access. The decision tree below focuses on manual chapters entered in a video description.',
    sections: [
      {
        heading: 'Start with the documented YouTube requirements',
        list: [
          'Add timestamps with titles to the video description and save the change.',
          'Begin the list at 00:00.',
          'Include at least three timestamps, ordered from earliest to latest.',
          'Keep every chapter at least 10 seconds long.',
        ],
        externalResource: { before: 'Official source: ', label: 'YouTube Help — video chapters', href: 'https://support.google.com/youtube/answer/9884579?hl=en', after: ' (checked September 20, 2026). The same page directs creators without chapter access to Advanced features.' },
      },
      {
        heading: 'Diagnostic decision tree',
        paragraphs: ['Start at step 1. Follow the Yes branch to the next step. After a No branch, make the correction and start again with the saved description. The one-line formatting and final-upload checks are CreatorPlanTools troubleshooting recommendations, not extra published eligibility rules.'],
        diagnostics: [
          { question: 'Is the list in the video description, and is it saved?', no: 'Open the video’s details in YouTube Studio, add the list to Description and save. A comment containing times is not the documented manual-chapter setup.', yes: 'Continue to step 2.' },
          { question: 'Does the first entry start at 00:00?', no: 'Add a titled opening section at 00:00; the video still has an opening even if the main lesson starts later.', yes: 'Continue to step 3.' },
          { question: 'Are there at least three titled timestamps in ascending order?', no: 'Fix duplicate or backward times and missing titles. Add useful section boundaries if the video supports three chapters; do not invent irrelevant sections.', yes: 'Continue to step 4.' },
          { question: 'Does every chapter have at least 10 seconds within the video?', no: 'Compare adjacent starts and the final start against the video end. Move or combine short sections and remove times beyond the actual runtime.', yes: 'Continue to step 5.' },
          { question: 'Are chapter names and timestamp boundaries easy to read?', no: 'As a practical cleanup, put each time and its descriptive title on its own line. Use colons for times and avoid blank titles or sentences containing several times.', yes: 'Continue to step 6. A vague title can be unhelpful even when the timestamp is valid.' },
          { question: 'Does the channel have access to Advanced features?', no: 'Check YouTube Studio → Settings → Channel → Feature eligibility and follow the access instructions shown for your channel.', yes: 'Continue to the eligibility and final-upload checks below. Passing this text check does not guarantee chapter availability.' },
        ],
      },
      {
        heading: 'Invalid example: missing 00:00 and backward order',
        paragraphs: ['For a 2:20 tutorial, this first draft begins after the opening and puts 00:30 after 01:10.'],
        templateLabel: 'Invalid chapter list — start and order',
        template: `00:12 Gather materials
01:10 Fold the label
00:30 Write the device name`,
      },
      {
        heading: 'Corrected start and order',
        paragraphs: ['This corrected list follows the example edit from its opening through each action. Its chapter intervals are 30, 40 and 70 seconds.'],
        templateLabel: 'Corrected list for the 2:20 video',
        template: `00:00 Gather materials
00:30 Fold the label
01:10 Write the device name`,
      },
      {
        heading: 'Invalid example: too few chapters and a short interval',
        paragraphs: ['This 1:20 video has only two timestamps, and the first interval lasts five seconds. Merely adding another title will not repair the short interval.'],
        templateLabel: 'Invalid chapter list — count and interval',
        template: `00:00 Materials
00:05 Make the label`,
      },
      {
        heading: 'Corrected chapter count and intervals',
        paragraphs: ['Use this correction only if the actual video has these sections. The resulting chapters last 20, 30 and 30 seconds. If the edit cannot support useful chapter boundaries, leave manual chapters out or revise the video.'],
        templateLabel: 'Corrected list for the 1:20 video',
        template: `00:00 Materials
00:20 Make the label
00:50 Check the finished label`,
      },
      {
        heading: 'Fix missing titles and unclear formatting',
        paragraphs: ['“00:00” alone lacks a title. “00.30 -” uses a dot instead of a colon and provides no useful chapter name. “Step three at one minute ten” is prose rather than a clear timestamp entry. A practical replacement for a 2:20 video is shown below.', 'YouTube asks for timestamps and titles. The recommendation to use one plain, descriptive title per line is our formatting advice. We are not claiming an official minimum title length or a ban on punctuation. A title such as “Part 2” is vague; replacing it improves navigation but does not by itself prove why chapters were missing.'],
        templateLabel: 'Clear timestamps with descriptive titles',
        template: `00:00 Prepare the materials
00:30 Fold the tape flag
01:10 Write and check the label`,
      },
      {
        heading: 'Complete worked diagnosis: times beyond the video end',
        paragraphs: ['Suppose the final upload is 2:20 long, but this list came from an earlier edit. The 02:30 start is outside the video. Even after removing it, 02:15 would leave only five seconds for the last chapter.'],
        templateLabel: 'Invalid list for the finished 2:20 upload',
        template: `00:00 Materials
00:30 Fold the tape
02:15 Read the label
02:30 Recap`,
      },
      {
        heading: 'Correct the list using the final upload',
        paragraphs: ['Watch the final video and locate the real section changes. In this example, writing starts at 01:10 and the final check starts at 02:00. The corrected chapters last 30, 40, 50 and 20 seconds. There is no timestamp for the end itself, because it would start a section with no video left.', 'The end-of-video calculation applies the documented minimum chapter duration to the actual upload. A timestamp beyond the end cannot identify a playable section. A character counter cannot detect either problem.'],
        templateLabel: 'Completed corrected list for the 2:20 upload',
        template: `00:00 Prepare materials
00:30 Fold the tape flag
01:10 Write the device name
02:00 Check the finished label`,
        links: [{ href: '/tools/youtube-description-length-checker', label: 'Check description length separately from chapter timing' }],
      },
      {
        heading: 'If the text is correct, check access and availability',
        paragraphs: ['YouTube lists adding chapters among Advanced features. Check feature access in YouTube Studio under Settings → Channel → Feature eligibility, and follow the instructions presented for your channel.'],
        externalResource: { before: 'Official source: ', label: 'YouTube Help — feature access for creators', href: 'https://support.google.com/youtube/answer/9890437?hl=en', after: ' (checked September 20, 2026).' },
      },
      {
        heading: 'Manual chapters and automatic chapters are different',
        paragraphs: ['YouTube says manual chapters override automatic chapters. In its automatic-chapters guidance, it notes that not all videos qualify and not every eligible video receives automatic chapters. It also warns that active channel strikes or content potentially inappropriate for some viewers can make the chapters feature unavailable.', 'Our final checks: reopen the saved description, compare it with the final upload and inspect the video’s player. If chapters still do not appear, use the help options in YouTube Studio or the official chapter help page. Do not assume that changing whitespace can resolve a feature-access restriction.'],
        externalResource: { before: 'See the availability notes in ', label: 'YouTube’s video chapters documentation', href: 'https://support.google.com/youtube/answer/9884579?hl=en', after: '. No fixed appearance delay or additional subscriber threshold is claimed in this guide.' },
        links: [
          { href: '/tools/video-publishing-checklist', label: 'Review the rest of the upload with the Video Publishing Checklist' },
          { href: '/guides/how-to-write-better-video-descriptions', label: 'Review description wording and supporting information' },
          { href: '/guides/youtube-tutorial-description-template', label: 'Copy a full tutorial description with a chapter section' },
        ],
      },
    ],
    cta: { heading: 'Put the corrected list into a complete description', text: 'Use the tutorial template for a summary, prerequisites, chapter list and useful resources.', label: 'Get the tutorial description template', href: '/guides/youtube-tutorial-description-template' },
    faqs: [
      ['Does passing a timestamp-format check guarantee chapters?', 'No. A text check cannot confirm your channel’s feature access, video eligibility or the player’s chapter availability. Check the actual upload and YouTube Studio too.'],
      ['Should the last timestamp be the video end time?', 'No. A chapter start needs video after it. Check the gap between the final chapter start and the end of the video, as well as the gaps between chapter starts.'],
    ],
  },
};
