import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/motion';

const STEPS = [
  { num: '01', title: 'Discovery', detail: 'Understand business requirements and goals.' },
  { num: '02', title: 'Strategy', detail: 'Define solution architecture and project roadmap.' },
  { num: '03', title: 'UI/UX Design', detail: 'Create wireframes, user flows and high-fidelity designs.' },
  { num: '04', title: 'Development', detail: 'Build frontend, backend, APIs and integrations.' },
  { num: '05', title: 'Testing', detail: 'Perform functional, security, performance and responsive testing.' },
  { num: '06', title: 'Deployment', detail: 'Deploy the application to production.' },
  { num: '07', title: 'Support', detail: 'Provide maintenance and continuous improvements.' },
];

export default function ProcessStepper() {
  return (
    <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step, i) => (
        <motion.div
          key={step.num}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="card relative flex flex-col gap-3 p-6"
        >
          <span
            className={`text-2xl font-extrabold ${i % 2 === 0 ? 'text-primary-500/30' : 'text-accent-500/40'}`}
          >
            {step.num}
          </span>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="text-sm text-ink-500">{step.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
