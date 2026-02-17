import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Materials.css';

interface MaterialSectionProps {
    title: string;
    paragraphs: string[];
    index: number;
}

function MaterialSection({ title, paragraphs, index }: MaterialSectionProps) {
    const reveal = useScrollReveal();
    return (
        <div className={`material-section fade-in ${reveal.isVisible ? 'visible' : ''}`} ref={reveal.ref}>
            <div className="material-section__number">{String(index + 1).padStart(2, '0')}</div>
            <div className="material-section__content">
                <h3 className="material-section__title">{title}</h3>
                <div className="divider" />
                {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
            <div className="material-section__visual">
                <div
                    className="material-section__placeholder"
                    style={{
                        background: `linear-gradient(${135 + index * 20}deg, ${['#5c4a2a', '#3d3429', '#6b7c5e', '#4a3d2e', '#2d2822', '#b8960c', '#8b6914'][index % 7]
                            }, #1a1612)`,
                    }}
                />
            </div>
        </div>
    );
}

export default function Materials() {
    const { t } = useTranslation();

    const sections = [
        { titleKey: 'leather_title', paragraphs: ['leather_p1', 'leather_p2'] },
        { titleKey: 'tanning_title', paragraphs: ['tanning_p1', 'tanning_p2'] },
        { titleKey: 'patina_title', paragraphs: ['patina_p1', 'patina_p2'] },
        { titleKey: 'stitch_title', paragraphs: ['stitch_p1', 'stitch_p2'] },
        { titleKey: 'edge_title', paragraphs: ['edge_p1'] },
        { titleKey: 'hardware_title', paragraphs: ['hardware_p1'] },
        { titleKey: 'care_title', paragraphs: ['care_p1', 'care_p2'] },
    ];

    return (
        <div className="materials-page">
            <section className="page-header">
                <div className="container container--text">
                    <p className="section-label">{t('materials.label')}</p>
                    <h1 className="page-header__title">{t('materials.title')}</h1>
                    <p className="page-header__intro">{t('materials.intro')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {sections.map((section, i) => (
                        <MaterialSection
                            key={section.titleKey}
                            title={t(`materials.${section.titleKey}`)}
                            paragraphs={section.paragraphs.map((k) => t(`materials.${k}`))}
                            index={i}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
