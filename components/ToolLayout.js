import Link from 'next/link';
import RelatedContent from './RelatedContent';
import { getRelatedForTool } from './relatedContentData';

export default function ToolLayout({ eyebrow, title, intro, tool, explanation, steps, faqs, children, wide = false }) {
  return <div className="page"><div className="wrap">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/tools">Tools</Link><span aria-hidden="true">/</span><span>{title}</span></nav>
    <div className="page-head"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="muted">{intro}</p></div>
    <div className={`tool${wide ? ' tool-wide' : ''}`}>
      <div className="panel">{tool}</div>
      <aside className="panel"><h2>What this tool does</h2><p className="muted">{explanation}</p><p><strong>Free to use.</strong> Your entries stay in your browser and are not saved.</p></aside>
    </div>
    <div className="content">
      <h2>How to use this tool</h2>
      <ol className="steps">{steps.map((step) => <li key={step}>{step}</li>)}</ol>
      {children}
      <h2>Frequently asked questions</h2>
      {faqs.map(([question, answer]) => <div className="faq" key={question}><h3>{question}</h3><p className="muted">{answer}</p></div>)}
      <RelatedContent related={getRelatedForTool(title)} />
      <div className="back-link"><Link href="/tools">← Browse all creator tools</Link></div>
    </div>
  </div></div>;
}
