import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.calendar.title,description:guides.calendar.description,path:`/guides/${guides.calendar.slug}`});
export default function Page(){return <GuideLayout guide={guides.calendar}/>}
