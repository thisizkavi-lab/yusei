import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
    const { t } = useTranslation();
    const { lang, productId } = useParams<{ lang: string; productId: string }>();
    const currentLang = lang || 'en';

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <div className="product-detail">
                <div className="container" style={{ padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
                    <p>Product not found.</p>
                    <Link to={`/${currentLang}/gallery`} className="btn btn--ghost" style={{ marginTop: 'var(--space-lg)', display: 'inline-flex' }}>
                        {t('gallery.back')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail">
            <section className="section">
                <div className="container">
                    <Link to={`/${currentLang}/gallery`} className="product-detail__back">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        {t('gallery.back')}
                    </Link>

                    <div className="product-detail__layout">
                        <div className="product-detail__images">
                            <div className="product-detail__main-img">
                                {product.images.length > 0 ? (
                                    <img
                                        src={product.images[0]}
                                        alt={currentLang === 'jp' ? product.nameJp : product.nameEn}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div
                                        className="product-detail__placeholder"
                                        style={{ backgroundColor: product.color }}
                                    >
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255,255,255,0.15)' }}>
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <polyline points="21 15 16 10 5 21" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="product-detail__info">
                            <p className="section-label">{product.category}</p>
                            <h1 className="product-detail__title">
                                {currentLang === 'jp' ? product.nameJp : product.nameEn}
                            </h1>
                            <div className="divider" />
                            <p className="product-detail__desc">
                                {currentLang === 'jp' ? product.descJp : product.descEn}
                            </p>

                            <div className="product-detail__specs">
                                <h3 className="product-detail__specs-title">{t('gallery.specs')}</h3>
                                <dl className="product-detail__spec-list">
                                    <div className="product-detail__spec">
                                        <dt>{t('gallery.material_label')}</dt>
                                        <dd>{product.material}</dd>
                                    </div>
                                    <div className="product-detail__spec">
                                        <dt>{t('gallery.timeline_label')}</dt>
                                        <dd>{product.timeline}</dd>
                                    </div>
                                </dl>
                            </div>

                            <Link to={`/${currentLang}/custom-orders`} className="btn btn--primary product-detail__cta">
                                {t('gallery.request_similar')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
