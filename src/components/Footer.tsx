import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || 'en';

    const navLinks = [
        { to: `/${currentLang}/about`, label: t('nav.about') },
        { to: `/${currentLang}/materials`, label: t('nav.materials') },
        { to: `/${currentLang}/gallery`, label: t('nav.gallery') },
        { to: `/${currentLang}/custom-orders`, label: t('nav.custom') },
        { to: `/${currentLang}/shipping`, label: t('nav.shipping') },
        { to: `/${currentLang}/contact`, label: t('nav.contact') },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Link to={`/${currentLang}`} className="footer__logo">Yusei</Link>
                        <p className="footer__tagline">{t('footer.tagline')}</p>
                    </div>

                    <nav className="footer__nav">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="footer__link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer__contact">
                        <div className="footer__social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                </svg>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                        <p className="footer__email">hello@yusei.jp</p>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span className="footer__made">{t('footer.made_in')}</span>
                    <span className="footer__copyright">{t('footer.copyright')}</span>
                </div>
            </div>
        </footer>
    );
}
