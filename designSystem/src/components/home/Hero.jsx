/* global React */
function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="qsw-hero">
      <div className="qsw-hero-grid">
        <div className="qsw-hero-text">
          <div className="qs-eyebrow">Perplexity in plain words</div>
          <h1 className="qsw-hero-h">Future tech, <br/>read plainly.</h1>
          <p className="qsw-hero-lede">
            We help leaders see the shape of what's coming, decide what to do about it,
            and ship the first version. No hype. No haze.
          </p>
          <div className="qsw-hero-ctas">
            <button className="qs-btn qs-btn-primary qs-btn-lg" onClick={onPrimary}>
              Read the brief <span aria-hidden="true">→</span>
            </button>
            <button className="qs-btn qs-btn-ghost qs-btn-lg" onClick={onSecondary}>
              Three principles
            </button>
          </div>
        </div>
        <div className="qsw-hero-mark">
          <div className="qsw-hero-mark-inner">
            <img src="../../assets/icon-black.svg" alt="" />
          </div>
          <div className="qsw-hero-mark-caption">
            <span className="qs-mono">simplex · n.</span>
            <span>the simplest possible polytope</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
