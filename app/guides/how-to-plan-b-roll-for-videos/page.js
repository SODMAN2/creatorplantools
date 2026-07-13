import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.broll.title,description:guides.broll.description,path:`/guides/${guides.broll.slug}`});
export default function Page(){return <GuideLayout guide={guides.broll}/>}
