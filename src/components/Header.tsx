import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function Header() {
    const { t, i18n } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const currentLang = lang || 'en';
    const otherLang = currentLang === 'en' ? 'jp' : 'en';

    const switchLanguage = () => {
        const newPath = location.pathname.replace(`/${currentLang}`, `/${otherLang}`);
        i18n.changeLanguage(otherLang);
        navigate(newPath);
    };

    const navLinks = [
        { to: `/${currentLang}/about`, label: t('nav.about') },
        { to: `/${currentLang}/materials`, label: t('nav.materials') },
        { to: `/${currentLang}/gallery`, label: t('nav.gallery') },
        { to: `/${currentLang}/custom-orders`, label: t('nav.custom') },
        { to: `/${currentLang}/contact`, label: t('nav.contact') },
    ];

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header__inner">
                <Link to={`/${currentLang}`} className="header__logo">
                    <span className="header__logo-text">Yusei</span>
                </Link>

                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__links">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className={`header__link ${location.pathname === link.to ? 'header__link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="header__actions">
                        <div className="header__social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                </svg>
                            </a>
                        </div>

                        <button className="header__lang-toggle" onClick={switchLanguage}>
                            <span className={currentLang === 'en' ? 'active' : ''}>{t('lang.en')}</span>
                            <span className="header__lang-divider">/</span>
                            <span className={currentLang === 'jp' ? 'active' : ''}>{t('lang.jp')}</span>
                        </button>
                    </div>
                </nav>

                <button
                    className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
