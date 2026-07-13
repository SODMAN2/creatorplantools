import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.videoDescriptions.title,description:guides.videoDescriptions.description,path:`/guides/${guides.videoDescriptions.slug}`});
export default function Page(){return <GuideLayout guide={guides.videoDescriptions}/>}
