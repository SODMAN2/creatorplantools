import Link from 'next/link';

export default function GuideLayout({ guide }) {
  return <article className="guide-page">
    <div className="wrap guide-wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span>{guide.title}</span></nav>
      <header className="guide-head">
        <div className="eyebrow">Creator guide</div>
        <h1>{guide.title}</h1>
        <p>{guide.intro}</p>
      </header>
      <div className="guide-content">
        {guide.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.example && <div className="guide-example"><strong>Practical example</strong><p>{section.example}</p></div>}
        </section>)}
        <section className="guide-cta">
          <h2>{guide.cta.heading}</h2>
          <p>{guide.cta.text}</p>
          <Link className="button" href={guide.cta.href}>{guide.cta.label}</Link>
        </section>
        <section className="guide-faqs">
          <h2>Frequently asked questions</h2>
          {guide.faqs.map(([question, answer]) => <div className="faq" key={question}><h3>{question}</h3><p>{answer}</p></div>)}
        </section>
      </div>
    </div>
  </article>;
}
