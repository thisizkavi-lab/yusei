import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { products } from '../data/products';
import './Gallery.css';

type Category = 'all' | 'bags' | 'wallets' | 'jackets' | 'custom';

export default function Gallery() {
    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || 'en';
    const [activeFilter, setActiveFilter] = useState<Category>('all');
    const grid = useScrollReveal();

    const filters: { key: Category; label: string }[] = [
        { key: 'all', label: t('gallery.filter_all') },
        { key: 'bags', label: t('gallery.filter_bags') },
        { key: 'wallets', label: t('gallery.filter_wallets') },
        { key: 'jackets', label: t('gallery.filter_jackets') },
        { key: 'custom', label: t('gallery.filter_custom') },
    ];

    const filtered = activeFilter === 'all'
        ? products
        : products.filter((p) => p.category === activeFilter);

    return (
        <div className="gallery-page">
            <section className="page-header">
                <div className="container container--text">
                    <p className="section-label">{t('gallery.label')}</p>
                    <h1 className="page-header__title">{t('gallery.title')}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="gallery-filters">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                className={`gallery-filter ${activeFilter === f.key ? 'gallery-filter--active' : ''}`}
                                onClick={() => setActiveFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className={`gallery-grid stagger-children ${grid.isVisible ? 'visible' : ''}`} ref={grid.ref}>
                        {filtered.map((product) => (
                            <Link
                                key={product.id}
                                to={`/${currentLang}/gallery/${product.id}`}
                                className="gallery-card"
                            >
                                <div className="gallery-card__img img-reveal">
                                    {product.images.length > 0 ? (
                                        <img
                                            src={product.images[0]}
                                            alt={currentLang === 'jp' ? product.nameJp : product.nameEn}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div
                                            className="gallery-card__placeholder"
                                            style={{ backgroundColor: product.color }}
                                        >
                                            <span className="gallery-card__icon">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                                    <polyline points="21 15 16 10 5 21" />
                                                </svg>
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="gallery-card__info">
                                    <h3 className="gallery-card__name">
                                        {currentLang === 'jp' ? product.nameJp : product.nameEn}
                                    </h3>
                                    <div className="gallery-card__meta">
                                        <span>{product.material}</span>
                                        <span className="gallery-card__dot">·</span>
                                        <span>{product.timeline}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
