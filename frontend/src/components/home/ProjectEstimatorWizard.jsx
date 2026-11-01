import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  ShoppingCart,
  Layers3,
  Building2,
  Sparkles,
  Code2,
  MoreHorizontal,
} from 'lucide-react';
import { contactApi } from '../../services/api';
import { trackEvent } from '../../utils/analytics';

const BUILD_TYPES = [
  { value: 'Website', icon: Globe },
  { value: 'Mobile App', icon: Smartphone },
  { value: 'E-Commerce', icon: ShoppingCart },
  { value: 'SaaS', icon: Layers3 },
  { value: 'ERP', icon: Building2 },
  { value: 'AI Solution', icon: Sparkles },
  { value: 'Custom Software', icon: Code2 },
  { value: 'Other', icon: MoreHorizontal },
];

const INDUSTRIES = ['Education', 'Healthcare', 'Real Estate', 'FinTech', 'E-Commerce', 'Travel', 'Enterprise', 'Other'];

const STAGES = ['Idea', 'Planning', 'Existing Product', 'Redesign', 'Migration'];

const BUDGETS = [
  'Under ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹15,00,000',
  '₹15,00,000 – ₹40,00,000',
  '₹40,00,000+',
  'Not sure yet',
];

const TIMELINES = ['As soon as possible', '1 – 3 months', '3 – 6 months', '6+ months', 'Not sure yet'];

const STEPS = ['Build', 'Industry', 'Stage', 'Budget', 'Timeline', 'Contact'];

const initialForm = {
  projectType: '',
  industry: '',
  stage: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const COLUMN_CLASSES = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
};

function OptionGrid({ options, value, onChange, columns = 4 }) {
  return (
    <div className={`grid gap-3 ${COLUMN_CLASSES[columns]}`}>
      {options.map((opt) => {
        const label = typeof opt === 'string' ? opt : opt.value;
        const Icon = typeof opt === 'string' ? null : opt.icon;
        const active = value === label;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            aria-pressed={active}
            className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center text-sm font-semibold transition-colors ${
              active ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-ink-200 text-ink-600 hover:border-primary-300'
            }`}
          >
            {Icon && <Icon size={20} />}
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function ProjectEstimatorWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const canAdvance = () => {
    if (step === 0) return !!form.projectType;
    if (step === 1) return !!form.industry;
    if (step === 2) return !!form.stage;
    if (step === 3) return !!form.budget;
    if (step === 4) return !!form.timeline;
    return true;
  };

  const goNext = () => {
    if (!canAdvance()) return;
    if (step === 0) trackEvent('estimator_started', { projectType: form.projectType });
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const validateContact = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please add a few details about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateContact()) return;
    setSubmitting(true);
    try {
      const res = await contactApi.submit(form);
      trackEvent('estimator_completed', { projectType: form.projectType, industry: form.industry });
      setDone(res);
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Check size={28} />
        </span>
        <h3 className="text-xl font-bold">{done.via === 'whatsapp' ? 'Almost Done!' : 'Request Received'}</h3>
        <p className="text-sm text-ink-500">
          {done.via === 'whatsapp'
            ? `Thanks, ${form.name.split(' ')[0]}! WhatsApp has opened with your project details — just tap send there to reach us.`
            : `Thanks, ${form.name.split(' ')[0]}! We'll review your project details and get back to you within one business day.`}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
      <div className="mb-8 flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-1.5">
            <div className={`h-1.5 rounded-full ${i <= step ? 'bg-primary-600' : 'bg-ink-100'}`} />
            <span className={`hidden text-xs font-semibold sm:block ${i === step ? 'text-primary-600' : 'text-ink-400'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
        >
          {step === 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">What do you want to build?</h3>
              <OptionGrid options={BUILD_TYPES} value={form.projectType} onChange={(v) => update('projectType', v)} />
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">Which industry is this for?</h3>
              <OptionGrid options={INDUSTRIES} value={form.industry} onChange={(v) => update('industry', v)} />
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">What stage is your project at?</h3>
              <OptionGrid options={STAGES} value={form.stage} onChange={(v) => update('stage', v)} columns={3} />
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">What's your estimated budget?</h3>
              <OptionGrid options={BUDGETS} value={form.budget} onChange={(v) => update('budget', v)} columns={2} />
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">What's your timeline?</h3>
              <OptionGrid options={TIMELINES} value={form.timeline} onChange={(v) => update('timeline', v)} columns={2} />
            </div>
          )}
          {step === 5 && (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <h3 className="text-lg font-bold">Almost done — how can we reach you?</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="est-name" className="label">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="est-name"
                    className="input"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="est-email" className="label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="est-email"
                    type="email"
                    className="input"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="est-phone" className="label">
                    Phone
                  </label>
                  <input
                    id="est-phone"
                    type="tel"
                    className="input"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="est-company" className="label">
                    Company
                  </label>
                  <input
                    id="est-company"
                    className="input"
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="est-message" className="label">
                  Tell us more about your requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="est-message"
                  rows={4}
                  className="input resize-none"
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-fit">
                {submitting ? 'Sending…' : 'Request Consultation'}
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {step < 5 && (
        <div className="mt-8 flex items-center justify-between border-t border-ink-100 pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="btn-outline disabled:invisible"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button type="button" onClick={goNext} disabled={!canAdvance()} className="btn-primary">
            Continue <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
