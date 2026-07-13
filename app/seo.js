const SITE_NAME = 'CreatorPlanTools';

export function createPageMetadata({ title, description, path, absoluteTitle = false }) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary',
      title: absoluteTitle ? title : `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
