import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.facelessChannel.title,description:guides.facelessChannel.description,alternates:{canonical:`/guides/${guides.facelessChannel.slug}`}};
export default function Page(){return <GuideLayout guide={guides.facelessChannel}/>}
