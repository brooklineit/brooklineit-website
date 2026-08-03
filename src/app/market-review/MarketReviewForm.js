'use client';

import { useState } from 'react';
import { submitForm, LEAD_SUBJECTS } from '@/lib/forms';

const SERVICES = ['Water', 'Fire', 'Smoke', 'Mold', 'Biohazard', 'Reconstruction'];

const AD_SPEND = ['Not running ads', 'Under $2K', '$2K–5K', '$5K–10K', '$10K+'];
const WHO_RUNS = ['Nobody', 'In-house', 'An agency', 'A franchise program'];
const HAS_SITE = ['Yes', 'Yes but the agency owns it', 'No', 'Not sure'];

const EMPTY = {
  company: '',
  name: '',
  email: '',
  phone: '',
  city: '',
  counties: '',
  services: [],
  adSpend: '',
  whoRuns: '',
  hasSite: '',
  notes: '',
};

export default function MarketReviewForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [submitError, setSubmitError] = useState('');

  const set = (key, val) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services: v.services.includes(svc)
        ? v.services.filter((s) => s !== svc)
        : [...v.services, svc],
    }));
    setErrors((e) => (e.services ? { ...e, services: undefined } : e));
  };

  const validate = () => {
    const e = {};
    if (!values.company.trim()) e.company = 'Company name is required.';
    if (!values.name.trim()) e.name = 'Your name is required.';
    if (!values.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!values.phone.trim()) e.phone = 'Phone is required.';
    if (!values.city.trim()) e.city = 'Primary city or metro is required.';
    if (!values.services.length) e.services = 'Select at least one service.';
    if (!values.adSpend) e.adSpend = 'Select your current monthly ad spend.';
    if (!values.whoRuns) e.whoRuns = 'Select who runs your ads.';
    if (!values.hasSite) e.hasSite = 'Select an option.';
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector('[aria-invalid="true"]');
      if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }

    setStatus('sending');
    setSubmitError('');

    const result = await submitForm({
      _subject: LEAD_SUBJECTS.marketReview,
      leadType: 'Restoration Marketing — Market Review',
      company: values.company,
      name: values.name,
      email: values.email,
      phone: values.phone,
      primaryCity: values.city,
      countiesServed: values.counties || '(not provided)',
      servicesOffered: values.services.join(', '),
      currentMonthlyAdSpend: values.adSpend,
      whoRunsAdsNow: values.whoRuns,
      ownsWebsite: values.hasSite,
      anythingElse: values.notes || '(not provided)',
    });

    if (result.ok) {
      setStatus('sent');
    } else {
      setStatus('error');
      setSubmitError(result.error);
    }
  };

  if (status === 'sent') {
    return (
      <div className="callout" role="status" style={{ marginTop: 32 }}>
        <div className="tag">Request received</div>
        <h3>Thanks — we&apos;ll be in touch.</h3>
        <p>
          We&apos;ll look at your market, your current ads, and your local presence, then get back to you
          with what we find. If your market is already taken, we&apos;ll tell you that straight away.
        </p>
      </div>
    );
  }

  const invalid = (key) => (errors[key] ? 'true' : undefined);

  return (
    <form onSubmit={onSubmit} noValidate style={{ marginTop: 32 }}>
      <div className="form-group">
        <label htmlFor="company">Company name *</label>
        <input id="company" type="text" placeholder="Your company" value={values.company}
          aria-invalid={invalid('company')} onChange={(e) => set('company', e.target.value)} />
        {errors.company && <div className="form-error">{errors.company}</div>}
      </div>

      <div className="field-pair">
        <div className="form-group">
          <label htmlFor="name">Your name *</label>
          <input id="name" type="text" placeholder="Your name" value={values.name}
            aria-invalid={invalid('name')} onChange={(e) => set('name', e.target.value)} />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" placeholder="you@company.com" value={values.email}
            aria-invalid={invalid('email')} onChange={(e) => set('email', e.target.value)} />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
      </div>

      <div className="field-pair">
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" value={values.phone}
            aria-invalid={invalid('phone')} onChange={(e) => set('phone', e.target.value)} />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="city">Primary city / metro served *</label>
          <input id="city" type="text" placeholder="e.g. Charleston, SC" value={values.city}
            aria-invalid={invalid('city')} onChange={(e) => set('city', e.target.value)} />
          {errors.city && <div className="form-error">{errors.city}</div>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="counties">Counties or surrounding areas served</label>
        <textarea id="counties" placeholder="e.g. Charleston, Berkeley, Dorchester counties"
          style={{ minHeight: 90 }} value={values.counties}
          onChange={(e) => set('counties', e.target.value)} />
      </div>

      <div className="form-group">
        <label>Services offered *</label>
        <div className="checkbox-grid">
          {SERVICES.map((svc) => (
            <label key={svc} className={`checkbox-item${values.services.includes(svc) ? ' is-checked' : ''}`}>
              <input type="checkbox" checked={values.services.includes(svc)}
                onChange={() => toggleService(svc)} />
              {svc}
            </label>
          ))}
        </div>
        {errors.services && <div className="form-error">{errors.services}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="adSpend">Current monthly ad spend *</label>
        <select id="adSpend" value={values.adSpend} aria-invalid={invalid('adSpend')}
          onChange={(e) => set('adSpend', e.target.value)}>
          <option value="">Select one…</option>
          {AD_SPEND.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {errors.adSpend && <div className="form-error">{errors.adSpend}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="whoRuns">Who runs your ads now? *</label>
        <select id="whoRuns" value={values.whoRuns} aria-invalid={invalid('whoRuns')}
          onChange={(e) => set('whoRuns', e.target.value)}>
          <option value="">Select one…</option>
          {WHO_RUNS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {errors.whoRuns && <div className="form-error">{errors.whoRuns}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="hasSite">Do you have a website you own? *</label>
        <select id="hasSite" value={values.hasSite} aria-invalid={invalid('hasSite')}
          onChange={(e) => set('hasSite', e.target.value)}>
          <option value="">Select one…</option>
          {HAS_SITE.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {errors.hasSite && <div className="form-error">{errors.hasSite}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="notes">Anything else</label>
        <textarea id="notes" placeholder="Anything you want us to know before we look…"
          value={values.notes} onChange={(e) => set('notes', e.target.value)} />
      </div>

      {status === 'error' && (
        <div className="form-error" role="alert" style={{ marginBottom: 16, fontSize: 14 }}>
          {submitError}
        </div>
      )}

      <button type="submit" className="btn btn-dark" disabled={status === 'sending'}
        style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.6 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Request a Market Review →'}
      </button>
    </form>
  );
}
