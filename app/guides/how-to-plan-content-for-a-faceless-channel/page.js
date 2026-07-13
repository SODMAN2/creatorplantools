import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.facelessChannel.title,description:guides.facelessChannel.description,path:`/guides/${guides.facelessChannel.slug}`});
export default function Page(){return <GuideLayout guide={guides.facelessChannel}/>}
