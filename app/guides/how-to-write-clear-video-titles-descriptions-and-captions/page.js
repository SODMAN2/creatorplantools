import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.clearPackaging.title,description:guides.clearPackaging.description,path:`/guides/${guides.clearPackaging.slug}`});
export default function Page(){return <GuideLayout guide={guides.clearPackaging}/>}
