import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getIcon } from '../../utils/iconMap';
import { scaleIn } from '../../utils/motion';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = getIcon(service.icon);

  return (
    <motion.div
      custom={index}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      className="card group flex h-full flex-col gap-5 p-7 transition-shadow hover:shadow-glow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-bold">{service.title}</h3>
        <p className="text-sm text-ink-500">{service.shortDescription}</p>
        {service.capabilities?.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {service.capabilities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold text-ink-600"
              >
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>
      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 transition-transform group-hover:gap-2.5"
      >
        Learn More <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
