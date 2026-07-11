import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.voiceover.title,description:guides.voiceover.description,alternates:{canonical:`/guides/${guides.voiceover.slug}`}};
export default function Page(){return <GuideLayout guide={guides.voiceover}/>}
