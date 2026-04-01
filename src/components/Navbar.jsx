import { useState } from "react";
import { navigationLinks, personalInfo } from "../content/portfolio";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="topbar">
            <div className="container topbar-inner">
                <a className="brand" href="#top" aria-label="Ir al inicio">
                    <span className="brand-mark">FP</span>
                    <span className="brand-copy">
                        <strong>{personalInfo.firstName} Puma</strong>
                        <span>Backend Engineer</span>
                    </span>
                </a>

                <nav className="desktop-nav" aria-label="Principal">
                    {navigationLinks.map((link) => (
                        <a key={link.id} href={`#${link.id}`} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a className="nav-cta" href="#contact">
                    Hablemos
                </a>

                <button
                    type="button"
                    className="menu-button"
                    aria-label="Abrir menú"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((currentValue) => !currentValue)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {menuOpen ? (
                <nav className="mobile-panel container" id="mobile-menu" aria-label="Principal móvil">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="mobile-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            ) : null}
        </header>
    );
};
