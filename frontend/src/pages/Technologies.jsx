import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import TechnologyGroup from '../components/home/TechnologyCard';
import CTASection from '../components/common/CTASection';
import technologyGroups from '../data/technologies';

export default function Technologies() {
  return (
    <>
      <Seo
        title="Technologies We Use"
        description="A look at the frontend, backend, database, mobile, cloud and AI technologies — including LLMs, agentic AI frameworks and vector search — Srijan Technologies uses to build software."
        path="/technologies"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
            A Modern, Proven Technology Stack
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            We choose technologies based on what a project actually needs — reliability,
            performance and long-term maintainability come first.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Toolkit"
            title="Technologies Across the Full Stack — and AI"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group, i) => (
              <TechnologyGroup key={group.category} group={group} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Specific Tech Stack in Mind?"
        description="We're happy to work within your existing stack or recommend one suited to your project."
      />
    </>
  );
}
