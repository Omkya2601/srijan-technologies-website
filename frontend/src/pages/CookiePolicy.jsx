import Seo from '../components/common/Seo';
import LegalContent from '../components/common/LegalContent';
import siteConfig from '../config/site';

const SECTIONS = [
  {
    heading: '1. What Are Cookies',
    body: [
      'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function properly, remember preferences, and — where enabled — understand how visitors use a site.',
    ],
  },
  {
    heading: '2. Cookies Used on This Site',
    body: [
      `At present, ${siteConfig.name} does not run third-party analytics or advertising trackers, so this site does not set tracking cookies. Any data saved in your browser (for example, a remembered theme preference) is stored locally on your device and is never transmitted to us or any third party.`,
    ],
  },
  {
    heading: '3. If Analytics Are Added in the Future',
    body: [
      'Should we introduce analytics or other tracking cookies in the future to better understand site usage, this policy will be updated first, and — where required by applicable law — a consent mechanism will be added before any such cookies are set.',
    ],
  },
  {
    heading: '4. Managing Cookies in Your Browser',
    body: [
      'Most browsers let you view, delete and block cookies through their settings. Refer to your browser\'s help documentation for instructions specific to Chrome, Firefox, Safari or Edge.',
    ],
  },
  {
    heading: '5. Changes to This Policy',
    body: [
      'We may update this Cookie Policy as our use of cookies changes. The "Last updated" date above reflects the most recent revision.',
    ],
  },
  {
    heading: '6. Contact Us',
    body: [
      `If you have questions about this Cookie Policy, contact us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
    ],
  },
];

export default function CookiePolicy() {
  return (
    <>
      <Seo
        title="Cookie Policy"
        description={`How ${siteConfig.name} uses cookies and similar technologies on this website.`}
        path="/cookie-policy"
      />
      <LegalContent
        title="Cookie Policy"
        lastUpdated={`January ${siteConfig.year}`}
        intro={`This Cookie Policy explains how ${siteConfig.name} ("we", "us", "our") uses cookies and similar technologies on this website. This is a general template intended to be reviewed and finalized by qualified legal counsel.`}
        sections={SECTIONS}
      />
    </>
  );
}
