import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import AsyncState from '../components/common/AsyncState';
import useFetch from '../hooks/useFetch';
import { portfolioApi } from '../services/api';
import { fadeUp, viewportOnce } from '../utils/motion';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const { data: project, loading, error, refetch } = useFetch(
    () => portfolioApi.getBySlug(slug),
    [slug]
  );

  if (!loading && !error && !project) return <Navigate to="/404" replace />;

  return (
    <>
      <Seo
        title={project ? project.title : 'Case Study'}
        description={project ? project.summary : undefined}
        path={`/portfolio/${slug}`}
      />

      <AsyncState loading={loading} error={error} onRetry={refetch}>
        {project && (
          <>
            <section className="relative overflow-hidden bg-ink-950 text-white">
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="container-app relative py-24">
                <div className="flex flex-wrap gap-2">
                  <span className="badge bg-white/10 text-white">{project.industry}</span>
                  {project.isDemo && (
                    <span className="badge bg-accent-500/20 text-accent-300">Demo Project</span>
                  )}
                </div>
                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-ink-200">{project.summary}</p>
              </div>
            </section>

            <section className="section-padding">
              <div className="container-app grid gap-10 lg:grid-cols-2">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                  <h2 className="mb-3 text-2xl font-bold">The Business Problem</h2>
                  <p className="text-sm text-ink-500">{project.problem}</p>
                </motion.div>
                <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                  <h2 className="mb-3 text-2xl font-bold">The Solution</h2>
                  <p className="text-sm text-ink-500">{project.solution}</p>
                </motion.div>
              </div>
            </section>

            <section className="section-padding bg-ink-50">
              <div className="container-app flex flex-col gap-10">
                <SectionHeading eyebrow="Features" title="What We Built" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="card flex items-center gap-3 p-4">
                      <CheckCircle2 size={18} className="shrink-0 text-primary-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container-app flex flex-col gap-8">
                <SectionHeading eyebrow="Tech Stack" title="Technologies Used" />
                <div className="flex flex-wrap justify-center gap-3">
                  {project.technologies.map((tech) => (
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

            {project.architecture && (
              <section className="section-padding bg-ink-50">
                <div className="container-app mx-auto max-w-3xl">
                  <SectionHeading align="left" eyebrow="Architecture" title="How It's Built" />
                  <p className="mt-6 text-sm text-ink-600">{project.architecture}</p>
                </div>
              </section>
            )}

            <section className={`section-padding ${project.architecture ? '' : 'bg-ink-50'}`}>
              <div className="container-app flex flex-col gap-10">
                <SectionHeading eyebrow="Outcomes" title="Results" />
                <div className="grid gap-5 sm:grid-cols-3">
                  {project.results.map((result, i) => (
                    <motion.div
                      key={result}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className="card p-6 text-center text-sm font-semibold text-ink-600"
                    >
                      {result}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {project.lessons && (
              <section className="section-padding bg-ink-50">
                <div className="container-app mx-auto max-w-3xl">
                  <SectionHeading align="left" eyebrow="Lessons Learned" title="What This Project Taught Us" />
                  <p className="mt-6 text-sm text-ink-600">{project.lessons}</p>
                </div>
              </section>
            )}

            <CTASection
              title="Have a Similar Project in Mind?"
              secondaryLabel="View More Case Studies"
              secondaryTo="/portfolio"
            />
          </>
        )}
      </AsyncState>
    </>
  );
}
