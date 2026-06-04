/* global React */
const INSIGHTS = [
    {
        tag: 'Field note',
        title: 'The quiet layer',
        sub: 'How retrieval reshapes enterprise software — without touching the model.',
        when: 'May 2026',
        read: '6 min',
        accent: 'aqua',
    },
    {
        tag: 'Brief',
        title: 'A short rulebook for shipping AI features',
        sub: 'Three principles, fewer meetings, smaller blast radius.',
        when: 'Apr 2026',
        read: '4 min',
        accent: 'amethyst',
    },
    {
        tag: 'Research',
        title: 'Cost curves that actually matter',
        sub: 'Tokens per dollar is the wrong axis. Here is the right one.',
        when: 'Mar 2026',
        read: '11 min',
        accent: 'ink',
    },
    {
        tag: 'Field note',
        title: 'Why agents fail in regulated industries',
        sub: 'Not the model. The audit trail.',
        when: 'Feb 2026',
        read: '5 min',
        accent: 'aqua',
    },
];

function InsightsList({ onSelect }) {
    return (
        <section className="qsw-section qsw-section--paper-warm">
            <div className="qsw-section-head">
                <div className="qs-eyebrow">Insights</div>
                <h2 className="qsw-section-h">Short reads from inside engagements.</h2>
            </div>
            <ul className="qsw-insights">
                {INSIGHTS.map((it, i) => (
                    <li key={i} className="qsw-insight" onClick={() => onSelect && onSelect(it)}>
                        <div className={'qsw-insight-tag qsw-insight-tag--' + it.accent}>{it.tag}</div>
                        <div className="qsw-insight-body">
                            <h3 className="qsw-insight-title">{it.title}</h3>
                            <p className="qsw-insight-sub">{it.sub}</p>
                        </div>
                        <div className="qsw-insight-meta">
                            <span>{it.when}</span>
                            <span className="qsw-insight-meta-dot">·</span>
                            <span>{it.read}</span>
                        </div>
                        <div className="qsw-insight-arrow" aria-hidden="true">→</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

window.InsightsList = InsightsList;
window.INSIGHTS = INSIGHTS;
