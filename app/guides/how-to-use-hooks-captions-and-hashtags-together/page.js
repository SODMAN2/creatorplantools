import GuideLayout from '@/components/GuideLayout'; import { guides } from '../guideData';
import { createPageMetadata } from '@/app/seo';
export const metadata=createPageMetadata({title:guides.hooksCaptionsHashtags.title,description:guides.hooksCaptionsHashtags.description,path:`/guides/${guides.hooksCaptionsHashtags.slug}`});
export default function Page(){return <GuideLayout guide={guides.hooksCaptionsHashtags}/>}
