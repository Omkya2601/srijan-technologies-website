import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import Seo from '../../components/common/Seo';
import { ServiceSchema } from '../../components/common/StructuredData';
import SectionHeading from '../../components/common/SectionHeading';
import CTASection from '../../components/common/CTASection';
import AsyncState from '../../components/common/AsyncState';
import Button from '../../components/common/Button';
import useFetch from '../../hooks/useFetch';
import { servicesApi } from '../../services/api';
import { getIcon } from '../../utils/iconMap';
import { fadeUp, viewportOnce } from '../../utils/motion';

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-ink-100 py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold">{faq.q}</span>
        <ChevronDown size={18} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-3 text-sm text-ink-500">{faq.a}</p>}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const { data: service, loading, error, refetch } = useFetch(
    () => servicesApi.getBySlug(slug),
    [slug]
  );

  if (!loading && !error && !service) return <Navigate to="/404" replace />;

  const Icon = service ? getIcon(service.icon) : null;

  return (
    <>
      <Seo
        title={service ? service.title : 'Service'}
        description={service ? service.heroSubtitle : undefined}
        path={`/services/${slug}`}
      />

      {service && <ServiceSchema service={service} />}

      <AsyncState loading={loading} error={error} onRetry={refetch}>
        {service && (
          <>
            <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
              <div className="container-app grid gap-10 lg:grid-cols-[auto,1fr] lg:items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                  <Icon size={32} />
                </span>
                <div>
                  <h1 className="max-w-3xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                    {service.heroTitle}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg text-ink-200">{service.heroSubtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button to="/contact" icon={ArrowRight}>
                      Request a Quote
                    </Button>
                    <Button to="/portfolio" variant="outline" className="!border-white/30 !text-white hover:!border-white">
                      View Our Work
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container-app grid gap-12 lg:grid-cols-2">
                <SectionHeading
                  align="left"
                  eyebrow="Benefits"
                  title={`Why Businesses Choose Us for ${service.title}`}
                />
                <motion.ul
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="flex flex-col gap-4"
                >
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                        <Check size={14} />
                      </span>
                      <span className="text-sm text-ink-600">{benefit}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </section>

            <section className="section-padding bg-ink-50">
              <div className="container-app flex flex-col gap-12">
                <SectionHeading
                  eyebrow="Our Process"
                  title={`How We Deliver ${service.title}`}
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={step.step}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className="card flex flex-col gap-2 p-5"
                    >
                      <span className="text-xs font-bold text-primary-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-bold">{step.step}</h3>
                      <p className="text-xs text-ink-500">{step.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container-app flex flex-col gap-8">
                <SectionHeading eyebrow="Tech Stack" title="Technologies We Use for This Service" />
                <div className="flex flex-wrap justify-center gap-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding bg-ink-50">
              <div className="container-app grid gap-12 lg:grid-cols-[1fr,1.4fr]">
                <SectionHeading align="left" eyebrow="FAQs" title="Common Questions" />
                <div>
                  {service.faqs.map((faq, i) => (
                    <FaqItem key={faq.q} faq={faq} index={i} />
                  ))}
                </div>
              </div>
            </section>

            <CTASection
              title={`Ready to Start Your ${service.title} Project?`}
              secondaryLabel="View All Services"
              secondaryTo="/services"
            />
          </>
        )}
      </AsyncState>
    </>
  );
}
