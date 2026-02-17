import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { products } from '../data/products';
import './Home.css';

export default function Home() {
    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || 'en';

    const pillars = useScrollReveal();
    const featured = useScrollReveal();
    const about = useScrollReveal();
    const process = useScrollReveal();

    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home">
            {/* Hero */}
            <section className="hero">
                <div className="hero__bg">
                    <img src="/images/hero.png" alt="Artisan handcrafting leather" loading="eager" />
                    <div className="hero__overlay" />
                </div>
                <div className="hero__content">
                    <p className="hero__tagline">{t('hero.tagline')}</p>
                    <Link to={`/${currentLang}/custom-orders`} className="btn btn--outline hero__cta">
                        {t('hero.cta')}
                    </Link>
                </div>
                <div className="hero__scroll">
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="1" y="1" width="14" height="22" rx="7" />
                        <line x1="8" y1="6" x2="8" y2="10" className="hero__scroll-line" />
                    </svg>
                </div>
            </section>

            {/* Craft Pillars */}
            <section className="section pillars" ref={pillars.ref}>
                <div className="container">
                    <p className="section-label">{t('pillars.label')}</p>
                    <div className={`pillars__grid stagger-children ${pillars.isVisible ? 'visible' : ''}`}>
                        <div className="pillar">
                            <span className="pillar__number">01</span>
                            <h3 className="pillar__title">{t('pillars.one_title')}</h3>
                            <div className="divider" />
                            <p className="pillar__desc">{t('pillars.one_desc')}</p>
                        </div>
                        <div className="pillar">
                            <span className="pillar__number">02</span>
                            <h3 className="pillar__title">{t('pillars.two_title')}</h3>
                            <div className="divider" />
                            <p className="pillar__desc">{t('pillars.two_desc')}</p>
                        </div>
                        <div className="pillar">
                            <span className="pillar__number">03</span>
                            <h3 className="pillar__title">{t('pillars.three_title')}</h3>
                            <div className="divider" />
                            <p className="pillar__desc">{t('pillars.three_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Works */}
            <section className="section section--cream" ref={featured.ref}>
                <div className="container">
                    <p className="section-label">{t('featured.label')}</p>
                    <div className="featured__header">
                        <h2 className="section-title">{t('featured.title')}</h2>
                        <Link to={`/${currentLang}/gallery`} className="btn btn--ghost">{t('featured.view_all')}</Link>
                    </div>
                    <div className={`featured__grid stagger-children ${featured.isVisible ? 'visible' : ''}`}>
                        {featuredProducts.map((product) => (
                            <Link
                                key={product.id}
                                to={`/${currentLang}/gallery/${product.id}`}
                                className="featured__card"
                            >
                                <div className="featured__img img-reveal">
                                    {product.id === 'tote-01' ? (
                                        <img src="/images/tote.png" alt={currentLang === 'jp' ? product.nameJp : product.nameEn} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : product.id === 'wallet-01' ? (
                                        <img src="/images/wallet.png" alt={currentLang === 'jp' ? product.nameJp : product.nameEn} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div
                                            className="featured__img-placeholder"
                                            style={{ backgroundColor: product.color }}
                                        >
                                            <span className="featured__img-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                                    <polyline points="21 15 16 10 5 21" />
                                                </svg>
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="featured__info">
                                    <h3 className="featured__name">{currentLang === 'jp' ? product.nameJp : product.nameEn}</h3>
                                    <span className="featured__material">{product.material}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="section" ref={about.ref}>
                <div className="container">
                    <div className={`about-preview fade-in ${about.isVisible ? 'visible' : ''}`}>
                        <div className="about-preview__image">
                            <img src="/images/artisan.png" alt="Yusei artisan" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="about-preview__content">
                            <p className="section-label">{t('about_preview.label')}</p>
                            <p className="about-preview__text">{t('about_preview.text')}</p>
                            <Link to={`/${currentLang}/about`} className="btn btn--ghost">{t('about_preview.link')}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section section--cream process-section" ref={process.ref}>
                <div className="container">
                    <div className={`process fade-in ${process.isVisible ? 'visible' : ''}`}>
                        <p className="section-label">{t('custom.process_label')}</p>
                        <div className="process__steps">
                            {['step1', 'step2', 'step3', 'step4', 'step5'].map((step, i) => (
                                <div className="process__step" key={step}>
                                    <span className="process__step-num">{String(i + 1).padStart(2, '0')}</span>
                                    <h4 className="process__step-title">{t(`custom.${step}_title`)}</h4>
                                    <p className="process__step-desc">{t(`custom.${step}_desc`)}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
                            <Link to={`/${currentLang}/custom-orders`} className="btn btn--primary">{t('hero.cta')}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
