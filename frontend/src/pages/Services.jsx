import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/home/ServiceCard';
import AsyncState from '../components/common/AsyncState';
import CTASection from '../components/common/CTASection';
import useFetch from '../hooks/useFetch';
import { servicesApi } from '../services/api';

export default function Services() {
  const { data, loading, error, refetch } = useFetch(servicesApi.list, []);

  return (
    <>
      <Seo
        title="Our Services"
        description="Website development, mobile apps, e-commerce, custom software, UI/UX design, APIs, cloud & DevOps and ongoing maintenance — explore what Srijan Technologies builds."
        path="/services"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Software Development Services Built Around Your Goals
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            Whether you need a new product built from scratch or support for an existing system,
            our services cover the full software development lifecycle.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Offer"
            title="Eight Core Service Areas"
            description="Each service can stand alone or combine with others depending on your project's scope."
          />
          <AsyncState loading={loading} error={error} onRetry={refetch} isEmpty={data?.length === 0}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(data || []).map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
          </AsyncState>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Tell us about your goals and we'll recommend the right approach — no obligation."
        primaryLabel="Discuss Your Idea"
      />
    </>
  );
}
