import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.professionalFaceless.title,description:guides.professionalFaceless.description,path:`/guides/${guides.professionalFaceless.slug}`});
export default function Page(){return <GuideLayout guide={guides.professionalFaceless}/>}
