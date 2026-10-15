import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function LegalContent({ title, lastUpdated, intro, sections }) {
  return (
    <section className="section-padding">
      <div className="container-app grid gap-12 lg:grid-cols-[220px,1fr]">
        <div className="hidden lg:block">
          <div className="sticky top-28 flex flex-col gap-1 border-l border-ink-100 pl-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-400">
              On this page
            </p>
            {sections.map((s) => (
              <a
                key={s.heading}
                href={`#${slugify(s.heading)}`}
                className="py-1 text-sm text-ink-500 transition-colors hover:text-primary-600"
              >
                {s.heading}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-ink-400">Last updated: {lastUpdated}</p>
            {intro && <p className="mt-5 text-base text-ink-600">{intro}</p>}
          </motion.div>

          <div className="mt-10 flex flex-col gap-10">
            {sections.map((s, i) => (
              <motion.div
                key={s.heading}
                id={slugify(s.heading)}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="scroll-mt-28"
              >
                <h2 className="text-lg font-bold text-ink-800">{s.heading}</h2>
                <div className="mt-2.5 flex flex-col gap-3 text-sm leading-relaxed text-ink-600">
                  {s.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                  {s.list && (
                    <ul className="flex flex-col gap-1.5 pl-1">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
