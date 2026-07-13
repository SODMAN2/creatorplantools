import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
export const metadata={title:guides.batchContent.title,description:guides.batchContent.description,alternates:{canonical:`/guides/${guides.batchContent.slug}`}};
export default function Page(){return <GuideLayout guide={guides.batchContent}/>}
