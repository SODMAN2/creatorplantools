import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.simpleWorkflow.title,description:guides.simpleWorkflow.description,path:`/guides/${guides.simpleWorkflow.slug}`});
export default function Page(){return <GuideLayout guide={guides.simpleWorkflow}/>}
