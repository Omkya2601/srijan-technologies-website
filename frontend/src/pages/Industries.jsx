import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, LayoutGrid } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import AsyncState from '../components/common/AsyncState';
import CTASection from '../components/common/CTASection';
import useFetch from '../hooks/useFetch';
import { industriesApi } from '../services/api';
import { getIcon } from '../utils/iconMap';

function IndustryPanel({ industry }) {
  const Icon = getIcon(industry.icon);
  return (
    <motion.div
      key={industry.slug}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
          <Icon size={22} />
        </span>
        <h3 className="text-xl font-bold">{industry.heroTitle}</h3>
      </div>
      <p className="text-sm text-ink-500">{industry.heroSubtitle}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {industry.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 rounded-lg bg-ink-50 p-3 text-sm font-semibold">
            <LayoutGrid size={16} className="shrink-0 text-primary-600" />
            {feature}
          </div>
        ))}
      </div>
      <Link to={`/industries/${industry.slug}`} className="btn-primary w-fit">
        Discuss Your Solution <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}

export default function Industries() {
  const { data, loading, error, refetch } = useFetch(industriesApi.list, []);
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    if (data?.length && !selectedSlug) setSelectedSlug(data[0].slug);
  }, [data, selectedSlug]);

  const selected = (data || []).find((i) => i.slug === selectedSlug);

  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Industry-specific software for education, real estate, healthcare, e-commerce, fintech, travel and enterprise businesses."
        path="/industries"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Software Solutions Tailored to Your Industry
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            Every industry runs differently. We build software that reflects how your business
            actually operates, not a generic one-size-fits-all product.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading eyebrow="Industries" title="Pick an Industry to See What We Build" />

          <AsyncState loading={loading} error={error} onRetry={refetch} isEmpty={data?.length === 0}>
            {/* Desktop: tab list + detail panel */}
            <div className="hidden gap-8 lg:grid lg:grid-cols-[260px,1fr]">
              <div className="flex flex-col gap-1">
                {(data || []).map((industry) => {
                  const Icon = getIcon(industry.icon);
                  const active = industry.slug === selectedSlug;
                  return (
                    <button
                      key={industry.slug}
                      type="button"
                      onClick={() => setSelectedSlug(industry.slug)}
                      aria-pressed={active}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        active ? 'bg-primary-50 text-primary-700' : 'text-ink-600 hover:bg-ink-50'
                      }`}
                    >
                      <Icon size={18} className="shrink-0" />
                      {industry.title}
                    </button>
                  );
                })}
              </div>
              <div className="card p-8">
                <AnimatePresence mode="wait">{selected && <IndustryPanel industry={selected} />}</AnimatePresence>
              </div>
            </div>

            {/* Mobile / tablet: accordion */}
            <div className="flex flex-col gap-2 lg:hidden">
              {(data || []).map((industry) => {
                const Icon = getIcon(industry.icon);
                const open = industry.slug === selectedSlug;
                return (
                  <div key={industry.slug} className="card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setSelectedSlug(open ? null : industry.slug)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left"
                    >
                      <span className="flex items-center gap-3 text-sm font-bold">
                        <Icon size={18} className="text-primary-600" />
                        {industry.title}
                      </span>
                      <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-t border-ink-100"
                        >
                          <div className="p-5">
                            <IndustryPanel industry={industry} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AsyncState>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry Listed?"
        description="We build custom software beyond these categories too — tell us what you need."
      />
    </>
  );
}
