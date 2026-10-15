import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  MessagesSquare,
  Sparkles,
  Headset,
  Target,
  FileSearch,
  BarChart3,
  Workflow,
  UserCheck,
  CheckCircle2,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';

const AGENT_STEPS = [
  { tool: 'plan', text: 'Break goal into 4 steps' },
  { tool: 'crm.search', text: 'Found new lead: Acme Retail Pvt Ltd' },
  { tool: 'web.enrich', text: 'Company size 120 · Retail · Pune' },
  { tool: 'score', text: 'Lead score 86/100 — high intent' },
  { tool: 'email.draft', text: 'Personalised reply drafted' },
  { tool: 'approval', text: 'Waiting for your approval to send', pending: true },
];

const AGENTS = [
  {
    Icon: Headset,
    title: 'Customer Support Agent',
    text: 'Resolves tickets, checks order status, processes returns and escalates tricky cases to your team.',
  },
  {
    Icon: Target,
    title: 'Sales & Lead Agent',
    text: 'Qualifies inbound leads, enriches your CRM, books meetings and follows up automatically.',
  },
  {
    Icon: FileSearch,
    title: 'Document Processing Agent',
    text: 'Reads invoices, contracts and forms, extracts the data and posts it into your ERP.',
  },
  {
    Icon: BarChart3,
    title: 'Data & Reporting Agent',
    text: 'Answers business questions from your database in plain English and prepares weekly reports.',
  },
  {
    Icon: Workflow,
    title: 'Operations Agent',
    text: 'Runs back-office workflows — inventory reorders, scheduling, approvals and reminders.',
  },
  {
    Icon: UserCheck,
    title: 'HR & Recruiting Agent',
    text: 'Screens resumes, schedules interviews and guides new hires through onboarding.',
  },
];

const AI_SERVICES = [
  { Icon: Bot, title: 'AI Agents & Agentic AI', to: '/services/ai-agent-development' },
  { Icon: BrainCircuit, title: 'Generative AI & LLM Apps', to: '/services/generative-ai-development' },
  { Icon: MessagesSquare, title: 'AI Chatbots & Voice', to: '/services/ai-chatbot-development' },
  { Icon: Sparkles, title: 'AI & Automation', to: '/services/ai-automation' },
];

// A looping "agent run" that shows, step by step, how an agent plans and uses tools.
function AgentConsole() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(reduceMotion ? AGENT_STEPS.length : 0);

  useEffect(() => {
    if (reduceMotion || !inView) return undefined;
    const id = setInterval(() => {
      // Pause on the finished run for a few ticks, then start over.
      setVisible((v) => (v >= AGENT_STEPS.length + 3 ? 0 : v + 1));
    }, 900);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border border-white/10 bg-ink-950/70 p-5 font-mono text-[13px] shadow-2xl backdrop-blur"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="flex items-center gap-1.5 text-xs text-ink-400">
          <Bot size={14} className="text-accent-400" /> sales-agent · running
        </span>
      </div>

      <p className="text-ink-300">
        <span className="text-accent-400">goal ›</span> Qualify today&apos;s website leads and draft replies
      </p>

      <ul className="mt-4 space-y-2.5" aria-label="Agent steps">
        {AGENT_STEPS.map((step, i) => {
          const shown = i < visible;
          return (
            <li
              key={step.tool}
              className={`flex items-start gap-2.5 transition-all duration-300 ${
                shown ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
              }`}
            >
              {step.pending ? (
                <Loader2 size={16} className="mt-0.5 shrink-0 animate-spin text-accent-400" />
              ) : (
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              )}
              <span className="min-w-0">
                <span className="rounded bg-primary-500/15 px-1.5 py-0.5 text-primary-200">{step.tool}</span>{' '}
                <span className={step.pending ? 'text-accent-300' : 'text-ink-200'}>{step.text}</span>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-ink-400">
        <ShieldCheck size={14} className="text-emerald-400" />
        Human-in-the-loop · every action logged
      </div>
    </div>
  );
}

export default function AiAgentsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-ink-950 to-primary-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-primary-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="container-app relative flex flex-col gap-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-xs font-bold text-accent-300">
              <Sparkles size={14} /> Agentic AI
            </span>
            <h2 className="max-w-xl text-3xl font-extrabold sm:text-4xl">
              AI Agents That Work Alongside Your Team
            </h2>
            <p className="max-w-xl text-base text-ink-300 sm:text-lg">
              Go beyond chatbots. We build AI agents that understand a goal, plan the steps, use your
              CRM, ERP, email and databases, and finish the job — with you approving anything
              important.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
              <Link to="/services/ai-agent-development" className="btn-primary">
                Explore AI Agents <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact?service=AI%20Agents%20%26%20Agentic%20AI"
                className="btn border border-white/25 text-white hover:border-white"
              >
                Book an AI Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto w-full max-w-lg"
          >
            <AgentConsole />
          </motion.div>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AGENTS.map(({ Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-primary-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-300">{text}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">Our AI services</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {AI_SERVICES.map(({ Icon, title, to }) => (
              <Link
                key={to}
                to={to}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-ink-100 transition-colors hover:border-accent-400/50 hover:text-white"
              >
                <Icon size={16} className="text-accent-400" />
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
