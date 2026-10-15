import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function CTASection({
  title = 'Have a Project in Mind?',
  description = "Tell us about your idea and we'll help you turn it into a working product.",
  primaryLabel = 'Talk to an Expert',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="section-padding">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-app"
      >
        <div className="rounded-3xl bg-gradient-to-br from-primary-700 to-primary-950 px-8 py-16 text-center text-white sm:px-16">
          <div className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <p className="max-w-xl text-ink-200">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to={primaryTo} variant="primary" icon={ArrowRight} className="!bg-white !text-primary-700 hover:!bg-ink-100">
                {primaryLabel}
              </Button>
              {secondaryLabel && (
                <Button
                  to={secondaryTo}
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-white"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
