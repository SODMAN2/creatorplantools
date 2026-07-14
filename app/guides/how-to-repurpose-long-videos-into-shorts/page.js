import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.longToShorts.title,description:guides.longToShorts.description,path:`/guides/${guides.longToShorts.slug}`});
export default function Page(){return <GuideLayout guide={guides.longToShorts}/>}
