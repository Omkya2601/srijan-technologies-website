import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
            <Compass size={32} />
          </span>
          <span className="text-6xl font-extrabold text-primary-600/20">404</span>
          <h1 className="text-2xl font-extrabold sm:text-3xl">Looks like you've taken a wrong turn.</h1>
          <p className="max-w-md text-sm text-ink-500">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/">Back to Home</Button>
            <Button to="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
