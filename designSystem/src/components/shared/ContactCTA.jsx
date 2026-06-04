/* global React */
function ContactCTA() {
    const [sent, setSent] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [topic, setTopic] = React.useState('Wave reading');

    function submit(e) {
        e.preventDefault();
        if (!email) return;
        setSent(true);
    }

    return (
        <section className="qsw-contact">
            <div className="qsw-contact-inner">
                <div className="qsw-contact-text">
                    <div className="qs-eyebrow" style={{ color: 'var(--qs-aqua-200)' }}>Talk to us</div>
                    <h2 className="qsw-contact-h">A 30-minute call.<br />Nothing to lose.</h2>
                    <p className="qsw-contact-lede">
                        Tell us what you're trying to read, build, or train for.
                        We'll send you back a plain answer in two working days.
                    </p>
                </div>
                <form className="qsw-contact-form" onSubmit={submit}>
                    {sent ? (
                        <div className="qsw-contact-thanks">
                            <div className="qs-eyebrow" style={{ color: 'var(--qs-aqua-300)' }}>Sent</div>
                            <h3>Thank you. We'll be in touch.</h3>
                            <p>Check your inbox for confirmation.</p>
                        </div>
                    ) : (
                        <>
                            <div className="qsw-contact-row">
                                <label className="qs-label" style={{ color: 'var(--qs-aqua-100)' }}>Work email</label>
                                <input className="qsw-contact-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com" type="email" required />
                            </div>
                            <div className="qsw-contact-row">
                                <label className="qs-label" style={{ color: 'var(--qs-aqua-100)' }}>I'm interested in</label>
                                <div className="qsw-contact-pills">
                                    {['Wave reading', 'Boat building', 'Crew training'].map(t => (
                                        <button key={t} type="button"
                                            className={'qsw-contact-pill' + (topic === t ? ' is-active' : '')}
                                            onClick={() => setTopic(t)}>{t}</button>
                                    ))}
                                </div>
                            </div>
                            <button className="qs-btn qs-btn-accent qs-btn-lg" type="submit">
                                Send the note <span aria-hidden="true">→</span>
                            </button>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
}

window.ContactCTA = ContactCTA;
