import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.calendar.title,description:guides.calendar.description,alternates:{canonical:`/guides/${guides.calendar.slug}`}};
export default function Page(){return <GuideLayout guide={guides.calendar}/>}
