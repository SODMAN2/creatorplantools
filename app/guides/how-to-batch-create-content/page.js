import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.batchContent.title,description:guides.batchContent.description,path:`/guides/${guides.batchContent.slug}`});
export default function Page(){return <GuideLayout guide={guides.batchContent}/>}
