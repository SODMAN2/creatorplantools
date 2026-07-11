import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.youtubeScript.title,description:guides.youtubeScript.description,alternates:{canonical:`/guides/${guides.youtubeScript.slug}`}};
export default function Page(){return <GuideLayout guide={guides.youtubeScript}/>}
