import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Shipping.css';

export default function Shipping() {
    const { t } = useTranslation();
    const info = useScrollReveal();
    const faq = useScrollReveal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqItems = t('shipping.faq', { returnObjects: true }) as Array<{ q: string; a: string }>;

    const policySections = [
        { title: t('shipping.production_title'), text: t('shipping.production_text') },
        { title: t('shipping.shipping_title'), text: t('shipping.shipping_text') },
        { title: t('shipping.customs_title'), text: t('shipping.customs_text') },
        { title: t('shipping.tracking_title'), text: t('shipping.tracking_text') },
        { title: t('shipping.delays_title'), text: t('shipping.delays_text') },
        { title: t('shipping.returns_title'), text: t('shipping.returns_text') },
    ];

    return (
        <div className="shipping-page">
            <section className="page-header">
                <div className="container container--text">
                    <p className="section-label">{t('shipping.label')}</p>
                    <h1 className="page-header__title">{t('shipping.title')}</h1>
                </div>
            </section>

            {/* Policy Sections */}
            <section className="section" ref={info.ref}>
                <div className="container container--narrow">
                    <div className={`shipping-policies fade-in ${info.isVisible ? 'visible' : ''}`}>
                        {policySections.map((section, i) => (
                            <div className="shipping-policy" key={i}>
                                <h3 className="shipping-policy__title">{section.title}</h3>
                                <p className="shipping-policy__text">{section.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section--cream" ref={faq.ref}>
                <div className="container container--narrow">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                        {t('shipping.faq_title')}
                    </h2>
                    <div className={`faq-list fade-in ${faq.isVisible ? 'visible' : ''}`}>
                        {faqItems.map((item, i) => (
                            <div
                                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                                key={i}
                            >
                                <button
                                    className="faq-item__question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span>{item.q}</span>
                                    <svg
                                        className="faq-item__icon"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </button>
                                <div className="faq-item__answer">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
