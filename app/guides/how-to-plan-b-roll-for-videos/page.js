import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.broll.title,description:guides.broll.description,alternates:{canonical:`/guides/${guides.broll.slug}`}};
export default function Page(){return <GuideLayout guide={guides.broll}/>}
