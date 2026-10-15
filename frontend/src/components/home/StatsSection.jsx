import { motion } from 'framer-motion';
import siteConfig from '../../config/site';
import AnimatedCounter from '../common/AnimatedCounter';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';

export default function StatsSection() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <motion.div
        className="container-app grid grid-cols-2 gap-8 py-14 sm:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {siteConfig.stats.map((stat, i) => (
          <motion.div key={stat.label} custom={i} variants={fadeUp} className="text-center">
            <p
              className={`text-4xl font-extrabold sm:text-5xl ${
                i % 2 === 0 ? 'text-primary-600' : 'text-accent-500'
              }`}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-ink-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
