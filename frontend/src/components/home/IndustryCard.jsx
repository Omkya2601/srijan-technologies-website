import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getIcon } from '../../utils/iconMap';
import { scaleIn } from '../../utils/motion';

export default function IndustryCard({ industry, index = 0 }) {
  const Icon = getIcon(industry.icon);

  return (
    <motion.div
      custom={index}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <Link
        to={`/industries/${industry.slug}`}
        className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-white to-ink-50 p-7 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-glow"
      >
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-500/5 transition-transform group-hover:scale-150" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
          <Icon size={24} aria-hidden="true" />
        </div>
        <div className="relative flex flex-1 flex-col gap-2">
          <h3 className="flex items-center gap-1.5 text-lg font-bold">
            {industry.title}
            <ArrowUpRight
              size={16}
              className="opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
          <p className="text-sm text-ink-500">{industry.shortDescription}</p>
        </div>
      </Link>
    </motion.div>
  );
}
