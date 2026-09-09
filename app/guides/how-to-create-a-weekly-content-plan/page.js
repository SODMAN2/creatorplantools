import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.weeklyPlan.title,description:guides.weeklyPlan.description,path:`/guides/${guides.weeklyPlan.slug}`});
export default function Page(){return <GuideLayout guide={guides.weeklyPlan}/>}
