import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClasses = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignClasses} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && <span className="badge w-fit">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-base text-ink-500 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
