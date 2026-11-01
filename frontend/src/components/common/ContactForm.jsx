import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Check, Send } from 'lucide-react';
import { contactApi } from '../../services/api';
import { navServices } from '../../data/navLinks';
import { trackEvent } from '../../utils/analytics';

const BUDGET_RANGES = [
  'Under ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹15,00,000',
  '₹15,00,000 – ₹40,00,000',
  '₹40,00,000+',
  'Not sure yet',
];

const INDUSTRY_OPTIONS = [
  'Education',
  'Healthcare',
  'Real Estate',
  'FinTech',
  'E-Commerce',
  'Travel',
  'Enterprise',
  'Other',
];

const TIMELINE_OPTIONS = ['As soon as possible', '1 – 3 months', '3 – 6 months', '6+ months', 'Not sure yet'];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  industry: '',
  budget: '',
  timeline: '',
  message: '',
};

export default function ContactForm({ className = '' }) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(() => {
    const serviceParam = searchParams.get('service');
    const noteParam = searchParams.get('note');
    const matchedService = navServices.find((s) => s.title === serviceParam)?.title;
    return {
      ...initialForm,
      service: matchedService || (serviceParam ? 'Other' : ''),
      message: noteParam || '',
    };
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please describe your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await contactApi.submit(form);
      trackEvent('contact_form_submitted', { service: form.service });
      setSent(res);
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      if (err.details?.length) {
        const fieldErrors = {};
        err.details.forEach((d) => {
          fieldErrors[d.field] = d.message;
        });
        setErrors(fieldErrors);
      }
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className={`flex flex-col items-center gap-4 py-10 text-center ${className}`} role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Check size={28} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold">{sent.via === 'whatsapp' ? 'Almost Done!' : 'Message Sent'}</h3>
        <p className="max-w-sm text-sm text-ink-500">{sent.message}</p>
        <button type="button" onClick={() => setSent(null)} className="btn-outline mt-2">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-5 ${className}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="input"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="company" className="label">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="input"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="service" className="label">
            Service Required
          </label>
          <select id="service" name="service" className="input" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {navServices.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="industry" className="label">
            Industry
          </label>
          <select id="industry" name="industry" className="input" value={form.industry} onChange={handleChange}>
            <option value="">Select an industry</option>
            {INDUSTRY_OPTIONS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="label">
            Budget Range
          </label>
          <select id="budget" name="budget" className="input" value={form.budget} onChange={handleChange}>
            <option value="">Select a range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="label">
            Timeline
          </label>
          <select id="timeline" name="timeline" className="input" value={form.timeline} onChange={handleChange}>
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="input resize-none"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us about your project, goals and timeline…"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-fit">
        {submitting ? 'Sending…' : 'Request a Free Consultation'}
        {!submitting && <Send size={18} aria-hidden="true" />}
      </button>
    </form>
  );
}
