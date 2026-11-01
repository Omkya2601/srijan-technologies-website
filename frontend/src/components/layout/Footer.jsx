import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import siteConfig from '../../config/site';
import { navServices, navIndustries } from '../../data/navLinks';
import { LinkedInIcon, TwitterIcon, GitHubIcon, InstagramIcon } from '../common/SocialIcons';
import Logo from '../common/Logo';

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Portfolio', to: '/portfolio' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: 'Twitter', href: siteConfig.social.twitter, icon: TwitterIcon },
  { label: 'GitHub', href: siteConfig.social.github, icon: GitHubIcon },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-app flex flex-col items-center justify-between gap-4 border-b border-white/10 py-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-base font-bold text-white">Have a project in mind?</p>
          <p className="text-sm text-ink-400">We usually reply within one business day.</p>
        </div>
        <Link
          to="/contact"
          className="btn-primary shrink-0 !bg-white !text-primary-700 hover:!bg-ink-100"
        >
          Talk to Us
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="container-app grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo size={34} linkClassName="text-white" />
          <p className="mt-3 max-w-sm text-sm text-ink-400">{siteConfig.description}</p>
          <div className="mt-4 flex gap-2.5">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-ink-300 transition-colors hover:border-accent-400 hover:text-accent-400"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {navServices.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-accent-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Industries</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {navIndustries.slice(0, 6).map((ind) => (
              <li key={ind.slug}>
                <Link to={`/industries/${ind.slug}`} className="transition-colors hover:text-accent-400">
                  {ind.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-app flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 text-xs text-ink-500 sm:flex-row">
        <p>
          © {siteConfig.year} {siteConfig.name}. All Rights Reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 transition-colors hover:text-accent-400">
            <Mail size={13} /> {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-accent-400">
            <Phone size={13} /> {siteConfig.phoneDisplay}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} /> {siteConfig.address.city}, {siteConfig.address.state}
          </span>
        </div>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-accent-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-accent-400">
            Terms &amp; Conditions
          </Link>
          <Link to="/cookie-policy" className="hover:text-accent-400">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
