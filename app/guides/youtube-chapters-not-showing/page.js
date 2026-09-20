import GuideLayout from '@/components/GuideLayout';
import { seoBatchOneGuides } from '../seoBatchOneData';
import { createPageMetadata } from '@/app/seo';

const guide = seoBatchOneGuides.chaptersNotShowing;
export const metadata = createPageMetadata({ title: guide.title, description: guide.description, path: `/guides/${guide.slug}` });
export default function Page() { return <GuideLayout guide={guide} />; }
