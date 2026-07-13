import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.videoDescriptions.title,description:guides.videoDescriptions.description,alternates:{canonical:`/guides/${guides.videoDescriptions.slug}`}};
export default function Page(){return <GuideLayout guide={guides.videoDescriptions}/>}
