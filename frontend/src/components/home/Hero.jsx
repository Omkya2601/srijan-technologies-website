import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import HeroBackground from './HeroBackground';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 to-ink-950 text-white">
      <HeroBackground />
      <div className="container-app relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.2] sm:text-5xl lg:text-6xl">
            We Build Digital Solutions That Move Businesses Forward.
          </h1>
          <p className="max-w-xl text-base text-ink-200">
            From websites and mobile applications to enterprise platforms and industry-specific
            software, we design and develop scalable digital solutions that help businesses grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Start Your Project
            </Button>
            <Button
              to="/services"
              variant="outline"
              className="!border-white/25 !text-white hover:!border-white hover:!text-white"
            >
              Explore Our Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden lg:block"
        >
          <HeroIllustration className="mx-auto w-full max-w-md" />
        </motion.div>
      </div>
    </section>
  );
}
