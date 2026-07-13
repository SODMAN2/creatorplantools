import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.youtubeShorts.title,description:guides.youtubeShorts.description,path:`/guides/${guides.youtubeShorts.slug}`});
export default function Page(){return <GuideLayout guide={guides.youtubeShorts}/>}
