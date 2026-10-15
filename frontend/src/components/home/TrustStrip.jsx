import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Layers3,
  Building2,
  Bot,
  Cloud,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, staggerContainer } from '../../utils/motion';

const CAPABILITIES = [
  { label: 'Web', hint: 'Sites & portals', Icon: Globe, to: '/services/website-development' },
  { label: 'Mobile', hint: 'iOS & Android', Icon: Smartphone, to: '/services/mobile-app-development' },
  { label: 'SaaS', hint: 'Cloud products', Icon: Layers3, to: '/services/saas-development' },
  { label: 'ERP', hint: 'Ops & finance', Icon: Building2, to: '/services/erp-development' },
  { label: 'AI Agents', hint: 'Agentic & GenAI', Icon: Bot, to: '/services/ai-agent-development' },
  { label: 'Cloud', hint: 'DevOps & hosting', Icon: Cloud, to: '/services/cloud-devops' },
  { label: 'E-Commerce', hint: 'Online stores', Icon: ShoppingCart, to: '/services/ecommerce-development' },
];

// Floating "what we build" card that overlaps the bottom of the hero. Every chip links
// straight to its service page so visitors can jump to what they need.
export default function TrustStrip() {
  return (
    <section aria-labelledby="capabilities-heading" className="relative z-20 pb-6">
      <div className="container-app">
        <div className="-mt-10 rounded-2xl border border-ink-100 bg-white p-4 shadow-soft sm:p-5 md:-mt-14">
          <div className="mb-4 flex items-center justify-center gap-3 md:justify-between">
            <h2
              id="capabilities-heading"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              What we build
            </h2>
            <Link
              to="/services"
              className="group hidden items-center gap-1 text-sm font-bold text-primary-600 hover:text-primary-700 md:inline-flex"
            >
              View all services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 xl:grid-cols-7"
          >
            {CAPABILITIES.map(({ label, hint, Icon, to }, i) => (
              <motion.li
                key={label}
                variants={fadeUp}
                custom={i}
                className={i === CAPABILITIES.length - 1 ? 'col-span-2 sm:col-span-1' : ''}
              >
                <Link
                  to={to}
                  className="group flex h-full items-center gap-2.5 rounded-xl border border-transparent bg-ink-50 px-2.5 py-3 transition-all sm:px-3 duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-white hover:shadow-glow"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600 shadow-sm transition-colors duration-200 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-accent-500 group-hover:text-white">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-ink-800 group-hover:text-primary-700">
                      {label}
                    </span>
                    <span className="block text-xs font-medium leading-snug text-ink-500">{hint}</span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <Link
            to="/services"
            className="mt-4 flex items-center justify-center gap-1 text-sm font-bold text-primary-600 md:hidden"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
