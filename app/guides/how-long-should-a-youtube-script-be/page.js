import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.youtubeScript.title,description:guides.youtubeScript.description,path:`/guides/${guides.youtubeScript.slug}`});
export default function Page(){return <GuideLayout guide={guides.youtubeScript}/>}
