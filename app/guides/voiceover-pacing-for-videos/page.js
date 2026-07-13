import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.voiceover.title,description:guides.voiceover.description,path:`/guides/${guides.voiceover.slug}`});
export default function Page(){return <GuideLayout guide={guides.voiceover}/>}
