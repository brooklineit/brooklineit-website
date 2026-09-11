'use client';

import { useState } from 'react';
import { submitForm, LEAD_SUBJECTS } from '@/lib/forms';
import { trackLead } from '@/lib/analytics';

const EMPTY = { name: '', company: '', email: '', phone: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [submitError, setSubmitError] = useState('');

  const set = (key, val) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Your name is required.';
    if (!values.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email address.';
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
      _subject: LEAD_SUBJECTS.itCheckup,
      leadType: 'Free IT Checkup — Contact Form',
      name: values.name,
      company: values.company || '(not provided)',
      email: values.email,
      phone: values.phone || '(not provided)',
      message: values.message || '(not provided)',
    });

    if (result.ok) {
      setStatus('sent');
      trackLead('it_checkup');
    } else {
      setStatus('error');
      setSubmitError(result.error);
    }
  };

  if (status === 'sent') {
    return (
      <div className="callout" role="status" style={{ marginTop: 32 }}>
        <div className="tag">Message received</div>
        <h3>Thanks — we&apos;ll be in touch.</h3>
        <p>We&apos;ll get back to you soon. If it&apos;s urgent, call us at 570.344.4900.</p>
      </div>
    );
  }

  const invalid = (key) => (errors[key] ? 'true' : undefined);

  return (
    <form onSubmit={onSubmit} noValidate style={{ marginTop: 32 }}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input id="name" type="text" placeholder="Your name" value={values.name}
          aria-invalid={invalid('name')} onChange={(e) => set('name', e.target.value)} />
        {errors.name && <div className="form-error">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Your company name" value={values.company}
          onChange={(e) => set('company', e.target.value)} />
      </div>
      <div className="field-pair">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" placeholder="you@company.com" value={values.email}
            aria-invalid={invalid('email')} onChange={(e) => set('email', e.target.value)} />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" value={values.phone}
            onChange={(e) => set('phone', e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">What can we help with?</label>
        <textarea id="message" placeholder="Tell us a bit about your situation..." value={values.message}
          onChange={(e) => set('message', e.target.value)} />
      </div>

      {status === 'error' && (
        <div className="form-error" role="alert" style={{ marginBottom: 16, fontSize: 14 }}>
          {submitError}
        </div>
      )}

      <button type="submit" className="btn btn-dark" disabled={status === 'sending'}
        style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.6 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}
