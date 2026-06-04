/* global React */
function PrinciplesStrip() {
  const items = [
    { k: '01', t: 'Plain words first', d: 'If we can\'t explain it in a paragraph, we don\'t understand it yet.' },
    { k: '02', t: 'Smaller blast radius', d: 'Ship the smallest useful thing. Then ship the next one.' },
    { k: '03', t: 'No model worship', d: 'The model is a component. The system is the product.' },
  ];
  return (
    <section className="qsw-strip">
      <div className="qsw-strip-grid">
        {items.map(it => (
          <div key={it.k} className="qsw-strip-item">
            <div className="qsw-strip-k">{it.k}</div>
            <div className="qsw-strip-t">{it.t}</div>
            <div className="qsw-strip-d">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.PrinciplesStrip = PrinciplesStrip;
