import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.repurposeVideo.title,description:guides.repurposeVideo.description,path:`/guides/${guides.repurposeVideo.slug}`});
export default function Page(){return <GuideLayout guide={guides.repurposeVideo}/>}
