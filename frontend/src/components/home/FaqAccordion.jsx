import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-b border-ink-100 py-4"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold">{faq.question}</span>
        <ChevronDown size={18} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-ink-500">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, i) => (
        <FaqItem
          key={faq.id}
          faq={faq}
          index={i}
          isOpen={openId === faq.id}
          onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
        />
      ))}
    </div>
  );
}
