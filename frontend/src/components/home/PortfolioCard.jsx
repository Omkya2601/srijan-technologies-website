import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scaleIn } from '../../utils/motion';

export default function PortfolioCard({ project, index = 0 }) {
  return (
    <motion.div
      custom={index}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="card group flex h-full flex-col overflow-hidden"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-ink-100">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="badge w-fit">{project.industry}</span>
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-ink-500">{project.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex flex-wrap gap-1.5">
            {(project.technologies || []).slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold text-ink-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 transition-transform group-hover:gap-2.5"
        >
          View Case Study <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}
