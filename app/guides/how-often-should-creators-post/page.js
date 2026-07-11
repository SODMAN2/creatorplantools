import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.postingFrequency.title,description:guides.postingFrequency.description,alternates:{canonical:`/guides/${guides.postingFrequency.slug}`}};
export default function Page(){return <GuideLayout guide={guides.postingFrequency}/>}
