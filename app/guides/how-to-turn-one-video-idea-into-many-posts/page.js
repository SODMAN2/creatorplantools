import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.repurposeVideo.title,description:guides.repurposeVideo.description,alternates:{canonical:`/guides/${guides.repurposeVideo.slug}`}};
export default function Page(){return <GuideLayout guide={guides.repurposeVideo}/>}
