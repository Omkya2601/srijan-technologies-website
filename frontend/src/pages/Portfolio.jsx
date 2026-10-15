import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import PortfolioCard from '../components/home/PortfolioCard';
import AsyncState from '../components/common/AsyncState';
import CTASection from '../components/common/CTASection';
import useFetch from '../hooks/useFetch';
import { portfolioApi } from '../services/api';

const CATEGORIES = ['All', 'Web', 'Mobile', 'E-Commerce', 'SaaS', 'ERP', 'AI', 'Industry Solutions'];

export default function Portfolio() {
  const { data, loading, error, refetch } = useFetch(portfolioApi.list, []);
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    const projects = data || [];
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  }, [data, filter]);

  const availableCategories = useMemo(() => {
    const present = new Set((data || []).map((p) => p.category));
    return CATEGORIES.filter((c) => c === 'All' || present.has(c));
  }, [data]);

  return (
    <>
      <Seo
        title="Portfolio & Case Studies"
        description="Explore case studies of platforms Srijan Technologies has built for education, real estate, healthcare, e-commerce, travel and enterprise clients."
        path="/portfolio"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Our Work Across Industries
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            A look at representative projects showing how we approach real business problems.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading eyebrow="Case Studies" title="Selected Projects" />

          {availableCategories.length > 2 && (
            <div className="flex flex-wrap justify-center gap-2">
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <AsyncState loading={loading} error={error} onRetry={refetch} isEmpty={data?.length === 0}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((project, i) => (
                  <PortfolioCard key={project.slug} project={project} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-400">
                No projects in this category yet — check back soon.
              </p>
            )}
          </AsyncState>
        </div>
      </section>

      <CTASection title="Want Results Like These for Your Business?" primaryLabel="Start Your Project" />
    </>
  );
}
