import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CustomOrders.css';

interface FormData {
    name: string;
    email: string;
    country: string;
    language: string;
    product: string;
    dimensions: string;
    leather: string;
    color: string;
    hardware: string;
    budget: string;
    notes: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function CustomOrders() {
    const { t } = useTranslation();
    const process = useScrollReveal();
    const policies = useScrollReveal();
    const form = useScrollReveal();

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', country: '', language: '',
        product: '', dimensions: '', leather: '', color: '',
        hardware: '', budget: '', notes: '',
    });

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const validate = (): boolean => {
        const errs: FormErrors = {};
        if (!formData.name.trim()) errs.name = t('custom.form_required');
        if (!formData.email.trim()) {
            errs.email = t('custom.form_required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errs.email = t('custom.form_invalid_email');
        }
        if (!formData.country.trim()) errs.country = t('custom.form_required');
        if (!formData.product) errs.product = t('custom.form_required');
        if (!formData.budget) errs.budget = t('custom.form_required');
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
        }
    };

    const steps = [
        { key: 'step1', num: '01' },
        { key: 'step2', num: '02' },
        { key: 'step3', num: '03' },
        { key: 'step4', num: '04' },
        { key: 'step5', num: '05' },
    ];

    const productTypes = ['bag', 'wallet', 'belt', 'jacket', 'accessory', 'other'];
    const budgetRanges = ['under300', '300to500', '500to1000', '1000to2000', 'over2000'];

    return (
        <div className="custom-page">
            <section className="page-header">
                <div className="container container--text">
                    <p className="section-label">{t('custom.label')}</p>
                    <h1 className="page-header__title">{t('custom.title')}</h1>
                    <p className="page-header__intro">{t('custom.intro')}</p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section section--cream" ref={process.ref}>
                <div className="container">
                    <p className="section-label">{t('custom.process_label')}</p>
                    <div className={`custom-process stagger-children ${process.isVisible ? 'visible' : ''}`}>
                        {steps.map((step) => (
                            <div className="custom-step" key={step.key}>
                                <span className="custom-step__num">{step.num}</span>
                                <h3 className="custom-step__title">{t(`custom.${step.key}_title`)}</h3>
                                <p className="custom-step__desc">{t(`custom.${step.key}_desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="section" ref={policies.ref}>
                <div className="container container--narrow">
                    <div className={`custom-policies fade-in ${policies.isVisible ? 'visible' : ''}`}>
                        <div className="custom-policy">
                            <h3>{t('custom.timeline_title')}</h3>
                            <p>{t('custom.timeline_text')}</p>
                        </div>
                        <div className="custom-policy">
                            <h3>{t('custom.deposit_title')}</h3>
                            <p>{t('custom.deposit_text')}</p>
                        </div>
                        <div className="custom-policy">
                            <h3>{t('custom.cancel_title')}</h3>
                            <p>{t('custom.cancel_text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="section section--cream" ref={form.ref} id="order-form">
                <div className="container container--narrow">
                    <div className={`fade-in ${form.isVisible ? 'visible' : ''}`}>
                        <h2 className="section-title" style={{ textAlign: 'center' }}>{t('custom.form_title')}</h2>
                        <div className="divider" style={{ margin: 'var(--space-lg) auto var(--space-xl)' }} />

                        {submitted ? (
                            <div className="custom-success">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <p>{t('custom.form_success')}</p>
                            </div>
                        ) : (
                            <form className="custom-form" onSubmit={handleSubmit} noValidate>
                                <div className="custom-form__row">
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_name')} *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                        />
                                        {errors.name && <span className="form-error">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_email')} *</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                        />
                                        {errors.email && <span className="form-error">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="custom-form__row">
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_country')} *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.country}
                                            onChange={(e) => handleChange('country', e.target.value)}
                                        />
                                        {errors.country && <span className="form-error">{errors.country}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_language')}</label>
                                        <select
                                            className="form-select"
                                            value={formData.language}
                                            onChange={(e) => handleChange('language', e.target.value)}
                                        >
                                            <option value="">—</option>
                                            <option value="en">English</option>
                                            <option value="jp">日本語</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="custom-form__row">
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_product')} *</label>
                                        <select
                                            className="form-select"
                                            value={formData.product}
                                            onChange={(e) => handleChange('product', e.target.value)}
                                        >
                                            <option value="">—</option>
                                            {productTypes.map((type) => (
                                                <option key={type} value={type}>{t(`custom.product_types.${type}`)}</option>
                                            ))}
                                        </select>
                                        {errors.product && <span className="form-error">{errors.product}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_dimensions')}</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.dimensions}
                                            onChange={(e) => handleChange('dimensions', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="custom-form__row">
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_leather')}</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.leather}
                                            onChange={(e) => handleChange('leather', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_color')}</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.color}
                                            onChange={(e) => handleChange('color', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="custom-form__row">
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_hardware')}</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.hardware}
                                            onChange={(e) => handleChange('hardware', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('custom.form_budget')} *</label>
                                        <select
                                            className="form-select"
                                            value={formData.budget}
                                            onChange={(e) => handleChange('budget', e.target.value)}
                                        >
                                            <option value="">—</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>{t(`custom.budget_ranges.${range}`)}</option>
                                            ))}
                                        </select>
                                        {errors.budget && <span className="form-error">{errors.budget}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">{t('custom.form_notes')}</label>
                                    <textarea
                                        className="form-textarea"
                                        value={formData.notes}
                                        onChange={(e) => handleChange('notes', e.target.value)}
                                        rows={5}
                                    />
                                </div>

                                <button type="submit" className="btn btn--primary custom-form__submit">
                                    {t('custom.form_submit')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
