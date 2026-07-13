import Link from 'next/link';

function RelatedGroup({ title, items }) {
  return <div className="related-group">
    <h3>{title}</h3>
    <div className="related-grid">
      {items.map((item) => <Link className="related-card" href={item.href} key={item.href}>
        <span>{item.label}</span>
        <p>{item.description}</p>
      </Link>)}
    </div>
  </div>;
}

export default function RelatedContent({ related }) {
  if (!related) return null;
  return <section className="related-content" aria-labelledby="related-content-title">
    <div className="related-heading">
      <div className="eyebrow">Keep planning</div>
      <h2 id="related-content-title">Related tools and guides</h2>
      <p>Continue with a practical next step for this topic.</p>
    </div>
    <RelatedGroup title="Related tools" items={related.tools} />
    <RelatedGroup title="Related guides" items={related.guides} />
  </section>;
}
