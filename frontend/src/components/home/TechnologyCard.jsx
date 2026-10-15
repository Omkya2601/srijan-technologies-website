import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/motion';

export default function TechnologyGroup({ group, index = 0 }) {
  const isAccent = index % 2 !== 0;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="card p-6"
    >
      <h3
        className={`mb-4 text-sm font-bold uppercase tracking-wide ${
          isAccent ? 'text-accent-600' : 'text-primary-600'
        }`}
      >
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className={`rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-700 transition-colors ${
              isAccent ? 'hover:border-accent-300 hover:text-accent-600' : 'hover:border-primary-300 hover:text-primary-600'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
