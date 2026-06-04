/* global React */
function Header({ current = 'home', onNav }) {
    const items = [
        { id: 'home', label: 'Home' },
        { id: 'practice', label: 'Practice' },
        { id: 'insights', label: 'Insights' },
        { id: 'about', label: 'About' },
    ];
    return (
        <header className="qsw-header">
            <a className="qsw-brand" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }}>
                <img src="../../assets/logo-black.svg" alt="Quantum Simplex" />
            </a>
            <nav className="qsw-nav">
                {items.map(it => (
                    <a key={it.id}
                        href="#"
                        onClick={(e) => { e.preventDefault(); onNav && onNav(it.id); }}
                        className={'qsw-nav-link' + (current === it.id ? ' is-active' : '')}>
                        {it.label}
                    </a>
                ))}
            </nav>
            <div className="qsw-header-cta">
                <button className="qs-btn qs-btn-primary qs-btn-sm" onClick={() => onNav && onNav('contact')}>
                    Start a project <span aria-hidden="true">→</span>
                </button>
            </div>
        </header>
    );
}

window.Header = Header;
