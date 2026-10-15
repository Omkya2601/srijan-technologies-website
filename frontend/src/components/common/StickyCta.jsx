import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Desktop-only by design: on mobile the WhatsApp quick-enquiry widget already
// occupies the bottom-right corner, and stacking a second floating element on
// a small viewport risks covering content rather than helping conversion.
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-6 z-30 hidden xl:block"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-700"
          >
            Let&apos;s Build Something
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
