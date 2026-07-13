import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.postingFrequency.title,description:guides.postingFrequency.description,path:`/guides/${guides.postingFrequency.slug}`});
export default function Page(){return <GuideLayout guide={guides.postingFrequency}/>}
