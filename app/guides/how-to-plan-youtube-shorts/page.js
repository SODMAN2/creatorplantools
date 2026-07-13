import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.youtubeShorts.title,description:guides.youtubeShorts.description,alternates:{canonical:`/guides/${guides.youtubeShorts.slug}`}};
export default function Page(){return <GuideLayout guide={guides.youtubeShorts}/>}
