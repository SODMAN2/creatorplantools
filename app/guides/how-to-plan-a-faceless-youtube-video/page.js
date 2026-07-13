import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.faceless.title,description:guides.faceless.description,path:`/guides/${guides.faceless.slug}`});
export default function Page(){return <GuideLayout guide={guides.faceless}/>}
