import Seo from '../components/common/Seo';
import LegalContent from '../components/common/LegalContent';
import siteConfig from '../config/site';

const SECTIONS = [
  {
    heading: '1. Introduction',
    body: [
      `${siteConfig.name} ("we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect through this website, how we use it, and the choices you have. This is a general template intended to be reviewed and finalized by qualified legal counsel before relying on it in production, particularly to confirm compliance with applicable data protection laws in the regions you operate in.`,
    ],
  },
  {
    heading: '2. Information We Collect',
    body: ['We collect information in the following ways:'],
    list: [
      'Information you provide directly — such as your name, email, phone number, company and project details when you submit our contact form or the instant estimate tool',
      'Usage data — such as pages visited, browser type and approximate location, typically collected automatically through standard web server logs',
      'Communication records — if you contact us by email, phone or WhatsApp, we keep a record of that communication to respond to your enquiry',
    ],
  },
  {
    heading: '3. How We Use Your Information',
    body: ['We use the information we collect to:'],
    list: [
      'Respond to enquiries submitted through the contact form or quick-enquiry widget',
      'Prepare quotes, proposals and project communication',
      'Improve our website and the services we offer',
      'Comply with legal obligations where applicable',
    ],
  },
  {
    heading: '4. Cookies & Tracking Technologies',
    body: [
      'This website may use browser local storage to remember minor preferences (for example, an admin session token after logging in). We do not currently use third-party advertising or analytics cookies. If that changes, this policy will be updated accordingly.',
    ],
  },
  {
    heading: '5. Third-Party Services',
    body: [
      'We may use third-party services to operate this website and our business, such as email providers, hosting providers and WhatsApp for enquiry communication. These providers only receive the information necessary to perform their function and are expected to handle it securely.',
    ],
  },
  {
    heading: '6. Data Retention',
    body: [
      'We retain enquiry and contact information for as long as reasonably necessary to respond to your enquiry, maintain business records, and comply with legal obligations. You may request deletion of your information at any time as described in the "Your Rights" section below.',
    ],
  },
  {
    heading: '7. Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect the information we hold, including password hashing for admin accounts, authenticated access to lead data, and secure transmission over HTTPS. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: '8. Your Rights',
    body: ['Depending on your location, you may have rights to:'],
    list: [
      'Request a copy of the personal information we hold about you',
      'Request correction of inaccurate information',
      'Request deletion of your information',
      'Withdraw consent to future communication from us',
    ],
  },
  {
    heading: '9. Children\'s Privacy',
    body: [
      'This website and our services are intended for businesses and professional individuals. We do not knowingly collect personal information from children.',
    ],
  },
  {
    heading: '10. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.',
    ],
  },
  {
    heading: '11. Contact Us',
    body: [
      `To exercise any of the rights above, or if you have questions about this Privacy Policy, please contact us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`How ${siteConfig.name} collects, uses and protects information submitted through this website.`}
        path="/privacy-policy"
      />
      <LegalContent
        title="Privacy Policy"
        lastUpdated={`January ${siteConfig.year}`}
        intro={`This Privacy Policy describes how ${siteConfig.name} collects, uses and protects information when you visit this website or contact us.`}
        sections={SECTIONS}
      />
    </>
  );
}
