import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
    const { t } = useTranslation();
    const content = useScrollReveal();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    };

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container container--text">
                    <p className="section-label">{t('contact.label')}</p>
                    <h1 className="page-header__title">{t('contact.title')}</h1>
                    <p className="page-header__intro">{t('contact.intro')}</p>
                </div>
            </section>

            <section className="section" ref={content.ref}>
                <div className="container">
                    <div className={`contact-layout fade-in ${content.isVisible ? 'visible' : ''}`}>
                        <div className="contact-info">
                            <div className="contact-info__block">
                                <h3 className="contact-info__label">{t('contact.email_label')}</h3>
                                <a href="mailto:hello@yusei.jp" className="contact-info__value">{t('contact.email')}</a>
                            </div>

                            <div className="contact-info__block">
                                <h3 className="contact-info__label">{t('contact.location_label')}</h3>
                                <p className="contact-info__value">{t('contact.location')}</p>
                            </div>

                            <div className="contact-info__block">
                                <h3 className="contact-info__label">{t('contact.social_label')}</h3>
                                <div className="contact-social">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            {submitted ? (
                                <div className="custom-success">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <p>{t('contact.form_success')}</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <div className="custom-form__row">
                                        <div className="form-group">
                                            <label className="form-label">{t('contact.form_name')}</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">{t('contact.form_email')}</label>
                                            <input
                                                type="email"
                                                className="form-input"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">{t('contact.form_subject')}</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">{t('contact.form_message')}</label>
                                        <textarea
                                            className="form-textarea"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn--primary contact-form__submit">
                                        {t('contact.form_submit')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
