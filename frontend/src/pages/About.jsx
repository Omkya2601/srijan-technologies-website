import { motion } from 'framer-motion';
import { Compass, Eye, HeartHandshake, Sparkles } from 'lucide-react';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { fadeUp, viewportOnce } from '../utils/motion';

const VALUES = [
  { icon: Compass, title: 'Clarity Over Complexity', detail: 'We favor solutions that are easy to understand, maintain and extend over clever but fragile ones.' },
  { icon: Eye, title: 'Outcomes Over Output', detail: 'Shipping code is not the goal — solving the business problem it was written for is.' },
  { icon: HeartHandshake, title: 'Honest Communication', detail: 'We tell clients what is realistic, not just what is easy to hear.' },
  { icon: Sparkles, title: 'Craft in the Details', detail: 'From API design to pixel spacing, we care about the parts users never see and the ones they do.' },
];

const EXPERTISE = [
  'Web application development',
  'Mobile application development',
  'E-commerce platforms',
  'Custom business software',
  'API and backend architecture',
  'Cloud infrastructure and DevOps',
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Srijan Technologies, a Pune, India-based software company — our mission, values and approach to building software for businesses across industries."
        path="/about"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl"
          >
            Software Built with Purpose, Delivered with Care
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-5 max-w-2xl text-lg text-ink-200"
          >
            Srijan Technologies is a Pune-based software development company focused on helping
            Indian businesses, startups and institutions digitize their operations through
            thoughtfully engineered digital products.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app grid gap-10 lg:grid-cols-3">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="card p-8">
            <h2 className="mb-3 text-2xl font-bold">Our Mission</h2>
            <p className="text-sm text-ink-500">
              To help organizations of every size replace manual, disconnected processes with
              reliable software — built around how they actually work, not a one-size-fits-all
              template.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={viewportOnce} className="card p-8">
            <h2 className="mb-3 text-2xl font-bold">Our Vision</h2>
            <p className="text-sm text-ink-500">
              To be a long-term technology partner for the businesses we work with — not a
              one-time vendor — supporting their software as their needs evolve.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={viewportOnce} className="card p-8">
            <h2 className="mb-3 text-2xl font-bold">Our Approach</h2>
            <p className="text-sm text-ink-500">
              We start with the business problem, not the tech stack. Requirements, architecture
              and design decisions all flow from a clear understanding of your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Believe"
            title="The Values That Shape How We Build"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <value.icon size={20} />
                </span>
                <h3 className="font-bold">{value.title}</h3>
                <p className="text-sm text-ink-500">{value.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Team & Expertise"
            title="A Small, Senior Team Focused on Doing Fewer Things Well"
            description="Srijan Technologies is built around a core team of engineers and designers, supplemented by trusted specialists as projects require. Team profiles will be added here as the company grows."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card p-8"
          >
            <h3 className="mb-4 font-bold">Areas of Expertise</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {EXPERTISE.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
