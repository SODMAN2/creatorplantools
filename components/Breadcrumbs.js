import Link from 'next/link';

const BASE_URL = 'https://creatorplantools.com';

export default function Breadcrumbs({ items }) {
  const crumbs = [{ label: 'Home', href: '/' }, ...items];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${BASE_URL}${crumb.href}`,
    })),
  };

  return <>
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => <span className="breadcrumb-item" key={crumb.href}>
        {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
        {index === crumbs.length - 1
          ? <span aria-current="page">{crumb.label}</span>
          : <Link href={crumb.href}>{crumb.label}</Link>}
      </span>)}
    </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
  </>;
}
