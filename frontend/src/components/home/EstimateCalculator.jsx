import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calculator, Clock, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navServices } from '../../data/navLinks';
import { SCOPES, ESTIMATES } from '../../data/estimates';
import { getIcon } from '../../utils/iconMap';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function EstimateCalculator() {
  const [serviceSlug, setServiceSlug] = useState(null);
  const [scopeId, setScopeId] = useState(null);

  const result = serviceSlug && scopeId ? ESTIMATES[serviceSlug]?.[scopeId] : null;
  const serviceTitle = navServices.find((s) => s.slug === serviceSlug)?.title;

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-app">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="badge">
            <Calculator size={14} /> Instant Estimate
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Get a Ballpark Estimate in Seconds</h2>
          <p className="mt-3 text-base text-ink-500">
            Pick a service and a scope to see an approximate budget range and timeline — no
            sign-up required.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-ink-100 bg-white p-6 sm:p-8"
        >
          <div>
            <p className="mb-3 text-sm font-bold text-ink-700">1. What do you need?</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {navServices.map((s) => {
                const Icon = getIcon(s.icon);
                const active = serviceSlug === s.slug;
                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setServiceSlug(s.slug)}
                    aria-pressed={active}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center text-xs font-semibold transition-colors ${
                      active
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-ink-200 text-ink-600 hover:border-primary-300'
                    }`}
                  >
                    <Icon size={18} />
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-bold text-ink-700">2. How much scope?</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {SCOPES.map((scope) => {
                const active = scopeId === scope.id;
                return (
                  <button
                    key={scope.id}
                    type="button"
                    onClick={() => setScopeId(scope.id)}
                    aria-pressed={active}
                    className={`rounded-xl border p-3.5 text-left transition-colors ${
                      active
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-ink-200 hover:border-primary-300'
                    }`}
                  >
                    <p className={`text-sm font-bold ${active ? 'text-primary-700' : 'text-ink-700'}`}>
                      {scope.label}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">{scope.detail}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={`${serviceSlug}-${scopeId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 rounded-xl bg-gradient-to-br from-primary-700 to-primary-950 p-5 text-white sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-200">
                  Estimated range for {serviceTitle} ({SCOPES.find((s) => s.id === scopeId)?.label})
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <div className="flex items-center gap-2">
                    <IndianRupee size={18} className="text-accent-300" />
                    <span className="text-lg font-extrabold">{result.range}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-accent-300" />
                    <span className="text-lg font-extrabold">{result.weeks}</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-ink-300">
                  This is an approximate starting range — your final quote depends on exact
                  requirements.
                </p>
                <Link
                  to={`/contact?service=${encodeURIComponent(serviceTitle)}&note=${encodeURIComponent(
                    `I'm interested in ${serviceTitle} (${SCOPES.find((s) => s.id === scopeId)?.label} scope). My estimated range was ${result.range} with a timeline of ${result.weeks}. Please share a detailed quote.`
                  )}`}
                  className="btn-primary mt-4 !bg-white !text-primary-700 hover:!bg-ink-100"
                >
                  Get a Detailed Quote <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
            {serviceSlug && scopeId && !result && (
              <motion.div
                key={`${serviceSlug}-${scopeId}-custom`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 rounded-xl bg-gradient-to-br from-primary-700 to-primary-950 p-5 text-white sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-200">
                  {serviceTitle} ({SCOPES.find((s) => s.id === scopeId)?.label})
                </p>
                <p className="mt-3 text-lg font-extrabold">Custom quote</p>
                <p className="mt-1 text-sm text-ink-200">
                  Pricing depends heavily on your workflows, integrations and data. Share a few details
                  and we&apos;ll send you a tailored estimate.
                </p>
                <Link
                  to={`/contact?service=${encodeURIComponent(serviceTitle)}&note=${encodeURIComponent(
                    `I'm interested in ${serviceTitle} (${SCOPES.find((s) => s.id === scopeId)?.label} scope). Please share a detailed quote.`
                  )}`}
                  className="btn-primary mt-4 !bg-white !text-primary-700 hover:!bg-ink-100"
                >
                  Get a Custom Quote <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
