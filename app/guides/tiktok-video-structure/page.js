import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.tiktok.title,description:guides.tiktok.description,path:`/guides/${guides.tiktok.slug}`});
export default function Page(){return <GuideLayout guide={guides.tiktok}/>}
