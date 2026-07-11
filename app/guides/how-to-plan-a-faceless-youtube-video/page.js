import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.faceless.title,description:guides.faceless.description,alternates:{canonical:`/guides/${guides.faceless.slug}`}};
export default function Page(){return <GuideLayout guide={guides.faceless}/>}
