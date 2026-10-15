import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="card flex h-full flex-col gap-4 p-7"
    >
      <Quote className="text-primary-200" size={28} aria-hidden="true" />
      <p className="flex-1 text-sm text-ink-600">&ldquo;{testimonial.quote}&rdquo;</p>
      <div>
        <p className="text-sm font-bold text-ink-800">{testimonial.name}</p>
        <p className="text-xs text-ink-400">{testimonial.role}</p>
      </div>
      <span className="badge w-fit !bg-ink-100 !text-ink-500">Sample Feedback</span>
    </motion.div>
  );
}
