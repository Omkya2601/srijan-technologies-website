import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import Seo from '../components/common/Seo';
import ContactForm from '../components/common/ContactForm';
import siteConfig from '../config/site';
import { fadeUp, viewportOnce } from '../utils/motion';

const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}, ${siteConfig.address.country}`;
const mapQuery = encodeURIComponent(fullAddress);
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
  {
    icon: MapPin,
    label: 'Location',
    value: `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Srijan Technologies for a free consultation on your website, mobile app or custom software project."
        path="/contact"
      />

      <section className="section-padding bg-gradient-to-b from-primary-950 to-ink-950 text-white">
        <div className="container-app text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">Let's Talk About Your Project</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            Fill out the form and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-app grid gap-12 lg:grid-cols-[1fr,1.3fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl font-extrabold">Contact Information</h2>
              <p className="mt-2 text-sm text-ink-500">
                Prefer to reach out directly? Use any of the details below.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <detail.icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-400">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="font-semibold hover:text-primary-600">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-400">Business Hours</p>
                  <ul className="mt-1 flex flex-col gap-0.5">
                    {siteConfig.businessHours.map((bh) => (
                      <li key={bh.days} className="text-sm font-semibold">
                        {bh.days}: <span className="font-medium text-ink-500">{bh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-app">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="overflow-hidden rounded-2xl border border-ink-100"
          >
            <div className="flex flex-col items-start justify-between gap-3 border-b border-ink-100 p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-bold">Find Us Here</h2>
                <p className="text-sm text-ink-500">{fullAddress}</p>
              </div>
              <a
                href={mapDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline shrink-0"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
            <iframe
              title={`Map showing ${siteConfig.name} office location in ${siteConfig.address.city}`}
              src={mapEmbedSrc}
              className="h-80 w-full sm:h-96"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
