import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import siteConfig from '../../config/site';
import { fadeUp, viewportOnce } from '../../utils/motion';

const STEPS = [
  {
    icon: Lightbulb,
    label: 'Idea',
    detail: 'Every project starts with understanding what you\'re trying to achieve and why.',
  },
  {
    icon: PenTool,
    label: 'Creation',
    detail: 'We shape that idea into a concrete plan — architecture, design and scope.',
  },
  {
    icon: Cpu,
    label: 'Technology',
    detail: 'We build it with the right tools, written to be reliable and easy to maintain.',
  },
  {
    icon: TrendingUp,
    label: 'Growth',
    detail: 'We stay on to support, improve and scale the product as your business grows.',
  },
];

export default function BrandJourney() {
  return (
    <section className="section-padding">
      <div className="container-app flex flex-col gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="badge">Why "{siteConfig.shortName}"</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Srijan means "creation" — it's how we approach every project
          </h2>
          <p className="mt-3 text-base text-ink-500">
            From the first idea to a product that keeps growing, here's how we think about the
            work we do.
          </p>
        </motion.div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative flex flex-col gap-3 rounded-2xl border border-ink-100 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <step.icon size={20} />
              </span>
              <h3 className="font-bold">{step.label}</h3>
              <p className="text-sm text-ink-500">{step.detail}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight
                  size={18}
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-ink-300 lg:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
