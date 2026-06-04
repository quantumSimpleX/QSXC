/* global React */
function InsightDetail({ insight, onBack }) {
  const it = insight || { tag: 'Field note', title: 'The quiet layer', sub: 'How retrieval reshapes enterprise software — without touching the model.', when: 'May 2026', read: '6 min', accent: 'aqua' };
  return (
    <article className="qsw-detail">
      <button className="qsw-back" onClick={onBack}><span aria-hidden="true">←</span> All insights</button>
      <header className="qsw-detail-head">
        <div className={'qsw-insight-tag qsw-insight-tag--' + it.accent}>{it.tag}</div>
        <h1 className="qsw-detail-h">{it.title}</h1>
        <p className="qsw-detail-sub">{it.sub}</p>
        <div className="qsw-detail-meta">
          <span>{it.when}</span>
          <span className="qsw-insight-meta-dot">·</span>
          <span>{it.read}</span>
          <span className="qsw-insight-meta-dot">·</span>
          <span>By the Quantum Simplex team</span>
        </div>
      </header>
      <hr className="qs-rule" />
      <div className="qsw-detail-body">
        <p className="qsw-detail-lede">
          Most of the value showing up in enterprise AI is not in the model. It is in the layer underneath —
          the retrieval, the routing, the audit trail. We call it the quiet layer because nobody demos it.
        </p>
        <p>
          For the last eighteen months we have watched teams swap models the way they used to swap CSS frameworks.
          The model is now a component. The system around it is the product.
        </p>
        <h2>Three places it actually moves</h2>
        <p>
          The pattern repeats across every engagement we have run this year. The model is held constant.
          The thing that changes is one of three things.
        </p>
        <ul className="qsw-detail-list">
          <li><strong>Retrieval.</strong> A better index beats a better model in nine of ten internal Q&amp;A use cases.</li>
          <li><strong>Routing.</strong> Sending the right question to the right model, with the right tools attached, saves more money than fine-tuning ever will.</li>
          <li><strong>Audit.</strong> In regulated industries, the audit trail is the product. Build that first.</li>
        </ul>
        <blockquote className="qsw-quote">
          <p>"We don't predict the future. We help you read it."</p>
        </blockquote>
        <h2>What this means for your roadmap</h2>
        <p>
          If your team is debating which foundation model to standardize on, you are debating the wrong thing.
          Pick any of the top three. Spend the next quarter on the layer underneath.
        </p>
      </div>
      <div className="qsw-detail-foot">
        <span className="qs-eyebrow">Related</span>
        <a href="#">A short rulebook for shipping AI features →</a>
      </div>
    </article>
  );
}

window.InsightDetail = InsightDetail;
