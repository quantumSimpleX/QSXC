/* global React */
function Footer() {
    return (
        <footer className="qsw-footer">
            <div className="qsw-footer-rule"></div>
            <div className="qsw-footer-grid">
                <div className="qsw-footer-brand">
                    <img src="../../assets/logo-black.svg" alt="Quantum Simplex" />
                    <p>Perplexity in plain words.</p>
                </div>
                <div className="qsw-footer-cols">
                    <div>
                        <div className="qs-eyebrow">Practice</div>
                        <ul>
                            <li><a href="#">Wave reading</a></li>
                            <li><a href="#">Boat building</a></li>
                            <li><a href="#">Crew training</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="qs-eyebrow">Read</div>
                        <ul>
                            <li><a href="#">Field notes</a></li>
                            <li><a href="#">Briefs</a></li>
                            <li><a href="#">Research</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="qs-eyebrow">Company</div>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="qsw-footer-bottom">
                <span>© 2026 Quantum Simplex.</span>
                <span className="qs-mono">v.2026.05</span>
            </div>
        </footer>
    );
}

window.Footer = Footer;
