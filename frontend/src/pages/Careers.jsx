import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Users, TrendingUp, Coffee, Laptop, HeartPulse, GraduationCap, Send, Briefcase } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import { careersApi } from '../services/api';
import siteConfig from '../config/site';
import { fadeUp, viewportOnce } from '../utils/motion';

const CULTURE_POINTS = [
  { icon: Users, title: 'Small, Senior Team', detail: 'Work directly with experienced engineers and designers — no bloated hierarchy.' },
  { icon: TrendingUp, title: 'Real Ownership', detail: 'Take a feature from requirements to production, not just a slice of the stack.' },
  { icon: Coffee, title: 'Sustainable Pace', detail: 'We plan realistically so quality work does not require burnout.' },
];

const BENEFITS = [
  { icon: Laptop, title: 'Modern Tooling', detail: 'Work with current frameworks and a setup that stays out of your way.' },
  { icon: HeartPulse, title: 'Health Coverage', detail: 'Health insurance support as part of the compensation package.' },
  { icon: GraduationCap, title: 'Learning Budget', detail: 'Support for courses, books and conferences that sharpen your craft.' },
];

// Sample positions — clearly marked as illustrative until real openings exist.
const SAMPLE_POSITIONS = [
  { title: 'React Developer', type: 'Full-time', location: 'Pune / Remote' },
  { title: 'Node.js Developer', type: 'Full-time', location: 'Pune / Remote' },
  { title: 'Full Stack Developer', type: 'Full-time', location: 'Pune / Remote' },
  { title: 'UI/UX Designer', type: 'Full-time', location: 'Pune / Remote' },
  { title: 'QA Engineer', type: 'Full-time', location: 'Pune / Remote' },
];

const ROLE_OPTIONS = [...SAMPLE_POSITIONS.map((p) => p.title), 'General Application'];

const initialForm = { name: '', email: '', phone: '', roleInterest: '', resumeLink: '', message: '' };

export default function Careers() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }));
  };

  const selectRole = (role) => {
    setForm((f) => ({ ...f, roleInterest: role }));
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.roleInterest) next.roleInterest = 'Please select a role.';
    if (!form.message.trim()) next.message = 'Please add a short note about yourself.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await careersApi.submit(form);
      toast.success(res.message || 'Thanks for applying!');
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

  return (
    <>
      <Seo
        title="Careers"
        description="Interested in working at Srijan Technologies? Explore sample open roles and learn about our culture."
        path="/careers"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Build Your Career With Srijan Technologies
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            We're a growing software development company looking for people who care about
            craftsmanship and solving real business problems.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading eyebrow="Our Culture" title="What It's Like to Work Here" />
          <div className="grid gap-6 sm:grid-cols-3">
            {CULTURE_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="card flex flex-col gap-3 p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <point.icon size={20} />
                </span>
                <h3 className="font-bold">{point.title}</h3>
                <p className="text-sm text-ink-500">{point.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading eyebrow="Benefits" title="What You Get" />
          <div className="grid gap-6 sm:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                  <b.icon size={20} />
                </span>
                <h3 className="font-bold">{b.title}</h3>
                <p className="text-sm text-ink-500">{b.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Openings"
            description="These are sample roles illustrating the kind of positions we typically hire for — check back for live openings, or apply below to be considered as roles open up."
          />
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
            {SAMPLE_POSITIONS.map((pos, i) => (
              <motion.div
                key={pos.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="card flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold">{pos.title}</h3>
                      <span className="badge !bg-ink-100 !text-ink-500">Sample Position</span>
                    </div>
                    <p className="text-xs text-ink-400">
                      {pos.type} · {pos.location}
                    </p>
                  </div>
                </div>
                <button type="button" onClick={() => selectRole(pos.title)} className="btn-outline shrink-0">
                  Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply-form" className="section-padding bg-ink-50 scroll-mt-24">
        <div className="container-app">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-2xl rounded-2xl border border-ink-100 bg-white p-8"
          >
            <h2 className="text-xl font-bold">Send Your Resume</h2>
            <p className="mt-2 text-sm text-ink-500">
              No open role that fits? Apply as a general application and we'll reach out when
              something relevant comes up.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input id="name" name="name" className="input" value={form.name} onChange={handleChange} />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <input id="phone" type="tel" name="phone" className="input" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="roleInterest" className="label">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="roleInterest"
                    name="roleInterest"
                    className="input"
                    value={form.roleInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select a role</option>
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.roleInterest && <p className="mt-1.5 text-xs text-red-500">{errors.roleInterest}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="resumeLink" className="label">
                  Resume / Portfolio Link
                </label>
                <input
                  id="resumeLink"
                  name="resumeLink"
                  placeholder="https://…"
                  className="input"
                  value={form.resumeLink}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Tell us about yourself <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input resize-none"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-fit">
                {submitting ? 'Sending…' : 'Send Application'}
                {!submitting && <Send size={18} />}
              </button>
            </form>

            <p className="mt-6 text-xs text-ink-400">
              You can also email us directly at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
