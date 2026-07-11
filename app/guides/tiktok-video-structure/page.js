import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.tiktok.title,description:guides.tiktok.description,alternates:{canonical:`/guides/${guides.tiktok.slug}`}};
export default function Page(){return <GuideLayout guide={guides.tiktok}/>}
