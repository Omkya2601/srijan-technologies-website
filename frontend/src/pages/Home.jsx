import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/common/Seo';
import { OrganizationSchema, FaqSchema } from '../components/common/StructuredData';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import BrandJourney from '../components/home/BrandJourney';
import StatsSection from '../components/home/StatsSection';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/home/ServiceCard';
import AiAgentsSection from '../components/home/AiAgentsSection';
import IndustryCard from '../components/home/IndustryCard';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessStepper from '../components/home/ProcessStepper';
import TechnologyGroup from '../components/home/TechnologyCard';
import PortfolioCard from '../components/home/PortfolioCard';
import TestimonialCard from '../components/home/TestimonialCard';
import FaqAccordion from '../components/home/FaqAccordion';
import EstimateCalculator from '../components/home/EstimateCalculator';
import ProjectEstimatorWizard from '../components/home/ProjectEstimatorWizard';
import CTASection from '../components/common/CTASection';
import AsyncState from '../components/common/AsyncState';
import useFetch from '../hooks/useFetch';
import { servicesApi, industriesApi, portfolioApi, faqsApi } from '../services/api';
import technologyGroups from '../data/technologies';
import testimonials from '../data/testimonials';

export default function Home() {
  const services = useFetch(servicesApi.list, []);
  const industries = useFetch(industriesApi.list, []);
  const portfolio = useFetch(portfolioApi.list, []);
  const faqs = useFetch(faqsApi.list, []);

  const featuredPortfolio = (portfolio.data || []).filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Seo
        title="Software Development Company in India"
        description="Srijan Technologies is a Pune, India-based software development company building websites, mobile apps, e-commerce platforms and custom software for businesses across every industry."
        path="/"
      />
      <OrganizationSchema />
      {faqs.data?.length > 0 && <FaqSchema faqs={faqs.data} />}

      <Hero />
      <TrustStrip />
      <BrandJourney />
      <StatsSection />

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-End Software Development Services"
            description="From concept to launch and beyond, we cover every layer of your digital product."
          />
          <AsyncState loading={services.loading} error={services.error} onRetry={services.refetch}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(services.data || []).map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
          </AsyncState>
          <div className="flex justify-center">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <AiAgentsSection />

      <EstimateCalculator />

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Industry-Specific Solutions Built On Real Workflows"
            description="We understand that every industry has different operational needs — our solutions reflect that."
          />
          <AsyncState loading={industries.loading} error={industries.error} onRetry={industries.refetch}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(industries.data || []).map((industry, i) => (
                <IndustryCard key={industry.slug} industry={industry} index={i} />
              ))}
            </div>
          </AsyncState>
          <div className="flex justify-center">
            <Link to="/industries" className="btn-outline">
              Explore All Industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Srijan"
            title="Built to Deliver, Built to Last"
            description="We combine technical depth with clear communication so projects stay on track from day one."
          />
          <WhyChooseUs />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Development Process"
            description="A structured, transparent process that keeps every project predictable from kickoff to launch."
          />
          <ProcessStepper />
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Stack"
            title="Technologies We Work With"
            description="We choose proven, well-supported technologies suited to your product's requirements."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group, i) => (
              <TechnologyGroup key={group.category} group={group} index={i} />
            ))}
          </div>
        </div>
      </section>

      {featuredPortfolio.length > 0 && (
        <section className="section-padding">
          <div className="container-app flex flex-col gap-12">
            <SectionHeading
              eyebrow="Our Work"
              title="Selected Case Studies"
              description="A look at how we've helped businesses across industries digitize their operations."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPortfolio.map((project, i) => (
                <PortfolioCard key={project.slug} project={project} index={i} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link to="/portfolio" className="btn-outline">
                View Our Work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-ink-50">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="What Clients Say"
            title="Feedback From Our Engagements"
            description="Placeholder examples of the feedback format this section will show — replace with real client testimonials as they come in."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name + i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="FAQs"
            title="Common Questions"
            description="Answers to what business owners most often ask before starting a project."
          />
          <AsyncState loading={faqs.loading} error={faqs.error} onRetry={faqs.refetch}>
            <FaqAccordion faqs={faqs.data || []} />
          </AsyncState>
        </div>
      </section>

      <section className="section-padding bg-ink-50">
        <div className="container-app flex flex-col gap-12">
          <SectionHeading
            eyebrow="Tell Us About Your Project"
            title="Get a Consultation Tailored to Your Idea"
            description="Answer a few quick questions and we'll follow up with next steps."
          />
          <ProjectEstimatorWizard />
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Great?"
        description="Tell us about your project and we'll get back to you with next steps within one business day."
        primaryLabel="Start Your Project"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
