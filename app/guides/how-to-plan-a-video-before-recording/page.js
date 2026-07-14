import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.planBeforeRecording.title,description:guides.planBeforeRecording.description,path:`/guides/${guides.planBeforeRecording.slug}`});
export default function Page(){return <GuideLayout guide={guides.planBeforeRecording}/>}
