import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import Seo from '../../components/common/Seo';
import SectionHeading from '../../components/common/SectionHeading';
import CTASection from '../../components/common/CTASection';
import AsyncState from '../../components/common/AsyncState';
import Button from '../../components/common/Button';
import useFetch from '../../hooks/useFetch';
import { industriesApi } from '../../services/api';
import { getIcon } from '../../utils/iconMap';
import { fadeUp, scaleIn, viewportOnce } from '../../utils/motion';

export default function IndustryDetail() {
  const { slug } = useParams();
  const { data: industry, loading, error, refetch } = useFetch(
    () => industriesApi.getBySlug(slug),
    [slug]
  );

  if (!loading && !error && !industry) return <Navigate to="/404" replace />;

  const Icon = industry ? getIcon(industry.icon) : null;

  return (
    <>
      <Seo
        title={industry ? `${industry.title} Software` : 'Industry'}
        description={industry ? industry.heroSubtitle : undefined}
        path={`/industries/${slug}`}
      />

      <AsyncState loading={loading} error={error} onRetry={refetch}>
        {industry && (
          <>
            <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
              <div className="container-app grid gap-10 lg:grid-cols-[auto,1fr] lg:items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                  <Icon size={32} />
                </span>
                <div>
                  <h1 className="max-w-3xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                    {industry.heroTitle}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg text-ink-200">{industry.heroSubtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button to="/contact" icon={ArrowRight}>
                      Discuss Your Idea
                    </Button>
                    <Button to="/portfolio" variant="outline" className="!border-white/30 !text-white hover:!border-white">
                      View Our Work
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container-app flex flex-col gap-12">
                <SectionHeading
                  eyebrow="Core Modules"
                  title={`What Our ${industry.title} Software Covers`}
                  description="A modular feature set that can be tailored to your organization's specific requirements."
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {industry.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      custom={i}
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className="card flex items-center gap-3 p-5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <LayoutGrid size={18} />
                      </span>
                      <span className="text-sm font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding bg-ink-50">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="container-app grid gap-8 rounded-3xl bg-white p-10 lg:grid-cols-2 lg:items-center"
              >
                <div>
                  <h2 className="text-3xl font-extrabold">Built Around Your Existing Operations</h2>
                  <p className="mt-4 text-sm text-ink-500">
                    We start by mapping how your organization currently handles the workflows above,
                    then design a system that fits — rather than forcing your team to adapt to
                    rigid, generic software.
                  </p>
                </div>
                <div>
                  <p className="mt-4 text-sm text-ink-500 lg:mt-0">
                    Every module can be scoped independently, so you can start with your highest-priority
                    workflow and expand the system over time as your needs grow.
                  </p>
                </div>
              </motion.div>
            </section>

            <CTASection
              title={`Ready to Digitize Your ${industry.title} Operations?`}
              secondaryLabel="Explore All Industries"
              secondaryTo="/industries"
            />
          </>
        )}
      </AsyncState>
    </>
  );
}
