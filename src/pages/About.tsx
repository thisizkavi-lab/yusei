import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
    const { t } = useTranslation();
    const story = useScrollReveal();
    const philosophy = useScrollReveal();
    const quote = useScrollReveal();
    const workshop = useScrollReveal();

    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container container--text">
                    <p className="section-label">{t('about.label')}</p>
                    <h1 className="page-header__title">{t('about.title')}</h1>
                </div>
            </section>

            {/* Story */}
            <section className="section" ref={story.ref}>
                <div className="container">
                    <div className={`about-story fade-in ${story.isVisible ? 'visible' : ''}`}>
                        <div className="about-story__portrait">
                            <img src="/images/artisan.png" alt="Yusei artisan" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="about-story__content">
                            <h2 className="about-story__title">{t('about.story_title')}</h2>
                            <div className="divider" />
                            <p>{t('about.story_p1')}</p>
                            <p>{t('about.story_p2')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section section--cream" ref={philosophy.ref}>
                <div className="container container--narrow">
                    <div className={`about-philosophy fade-in ${philosophy.isVisible ? 'visible' : ''}`}>
                        <h2 className="about-philosophy__title">{t('about.philosophy_title')}</h2>
                        <div className="divider" />
                        <p>{t('about.philosophy_p1')}</p>
                        <p>{t('about.philosophy_p2')}</p>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="section" ref={quote.ref}>
                <div className="container container--narrow">
                    <blockquote className={`about-quote fade-in ${quote.isVisible ? 'visible' : ''}`}>
                        {t('about.quote')}
                    </blockquote>
                </div>
            </section>

            {/* Workshop */}
            <section className="section section--cream" ref={workshop.ref}>
                <div className="container">
                    <p className="section-label">{t('about.workshop_title')}</p>
                    <div className={`workshop-grid stagger-children ${workshop.isVisible ? 'visible' : ''}`}>
                        <div className="workshop-grid__item workshop-grid__item--large">
                            <img src="/images/workshop.png" alt="Workshop" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="workshop-grid__item">
                            <img src="/images/hero.png" alt="Crafting" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="workshop-grid__item">
                            <img src="/images/leather-texture.png" alt="Leather texture" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
