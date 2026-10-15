import { motion } from 'framer-motion';
import {
  Target,
  Rocket,
  Layers,
  ShieldCheck,
  Smartphone,
  MessageSquare,
  Clock,
  LifeBuoy,
} from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';

const REASONS = [
  { icon: Target, title: 'Business-Focused Solutions', detail: 'We design software around your goals and workflows, not generic templates.' },
  { icon: Rocket, title: 'Modern Technology', detail: 'We build with current, well-supported tools chosen for the problem at hand.' },
  { icon: Layers, title: 'Scalable Architecture', detail: 'Systems designed to grow with your user base and data without a rebuild.' },
  { icon: ShieldCheck, title: 'Secure Development', detail: 'Security practices are built in from planning through deployment.' },
  { icon: Smartphone, title: 'Responsive Design', detail: 'Every product we ship works cleanly across mobile, tablet and desktop.' },
  { icon: MessageSquare, title: 'Transparent Communication', detail: 'Regular updates and clear timelines throughout the engagement.' },
  { icon: Clock, title: 'On-Time Delivery', detail: 'Realistic planning and iterative delivery keep projects on schedule.' },
  { icon: LifeBuoy, title: 'Post-Launch Support', detail: 'We stay engaged after launch with maintenance and improvements.' },
];

export default function WhyChooseUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {REASONS.map((reason, i) => (
        <motion.div
          key={reason.title}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3 rounded-2xl border border-ink-100 p-6 transition-colors hover:border-primary-200"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${
              i % 2 === 0 ? 'bg-primary-50 text-primary-600' : 'bg-accent-500/10 text-accent-600'
            }`}
          >
            <reason.icon size={20} />
          </span>
          <h3 className="font-bold">{reason.title}</h3>
          <p className="text-sm text-ink-500">{reason.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
