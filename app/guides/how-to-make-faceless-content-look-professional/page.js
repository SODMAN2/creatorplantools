import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.professionalFaceless.title,description:guides.professionalFaceless.description,alternates:{canonical:`/guides/${guides.professionalFaceless.slug}`}};
export default function Page(){return <GuideLayout guide={guides.professionalFaceless}/>}
