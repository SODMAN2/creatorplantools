import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.videoHook.title,description:guides.videoHook.description,alternates:{canonical:`/guides/${guides.videoHook.slug}`}};
export default function Page(){return <GuideLayout guide={guides.videoHook}/>}
