import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.youtubeSeries.title,description:guides.youtubeSeries.description,path:`/guides/${guides.youtubeSeries.slug}`});
export default function Page(){return <GuideLayout guide={guides.youtubeSeries}/>}
