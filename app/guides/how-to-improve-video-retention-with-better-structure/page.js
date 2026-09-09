import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.retentionStructure.title,description:guides.retentionStructure.description,path:`/guides/${guides.retentionStructure.slug}`});
export default function Page(){return <GuideLayout guide={guides.retentionStructure}/>}
