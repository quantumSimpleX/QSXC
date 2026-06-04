/* global React */
const PRACTICES = [
  {
    n: '01',
    name: 'Wave reading',
    short: 'See what is actually arriving — and on what timeline.',
    body: 'A six-week scan of one technology vector, mapped to your business. You get a written brief, a working model of the cost curve, and a 12-month decision calendar.',
    accent: 'aqua',
  },
  {
    n: '02',
    name: 'Boat building',
    short: 'Ship a first version that survives contact with reality.',
    body: 'We embed with one of your teams for 8–12 weeks and ship a working prototype. Real users, real data, real budget. We leave behind a team that can take it further.',
    accent: 'amethyst',
  },
  {
    n: '03',
    name: 'Crew training',
    short: 'Raise the floor of what your org can build.',
    body: 'Workshops, office hours, and rewritten internal docs. Senior engineers, product managers, and execs walk out reading the same map. No certificates. No theater.',
    accent: 'ink',
  },
];

function PracticeGrid({ onSelect }) {
  return (
    <section className="qsw-section">
      <div className="qsw-section-head">
        <div className="qs-eyebrow">Three practices</div>
        <h2 className="qsw-section-h">Read the wave. Build the boat. Train the crew.</h2>
      </div>
      <div className="qsw-practice-grid">
        {PRACTICES.map(p => (
          <article key={p.n} className={'qsw-practice qsw-practice--' + p.accent}
                   onClick={() => onSelect && onSelect(p)}>
            <div className="qsw-practice-num">{p.n}</div>
            <h3 className="qsw-practice-name">{p.name}</h3>
            <p className="qsw-practice-short">{p.short}</p>
            <p className="qsw-practice-body">{p.body}</p>
            <div className="qsw-practice-cta">
              <span>How we run it</span>
              <span aria-hidden="true">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.PracticeGrid = PracticeGrid;
window.PRACTICES = PRACTICES;
