import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.youtubeChecklist.title,description:guides.youtubeChecklist.description,alternates:{canonical:`/guides/${guides.youtubeChecklist.slug}`}};
export default function Page(){return <GuideLayout guide={guides.youtubeChecklist}/>}
