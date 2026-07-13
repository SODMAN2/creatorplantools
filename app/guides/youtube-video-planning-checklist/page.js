import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.youtubeChecklist.title,description:guides.youtubeChecklist.description,path:`/guides/${guides.youtubeChecklist.slug}`});
export default function Page(){return <GuideLayout guide={guides.youtubeChecklist}/>}
