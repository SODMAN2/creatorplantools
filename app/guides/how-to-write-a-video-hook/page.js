import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.videoHook.title,description:guides.videoHook.description,path:`/guides/${guides.videoHook.slug}`});
export default function Page(){return <GuideLayout guide={guides.videoHook}/>}
