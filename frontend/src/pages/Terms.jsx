import Seo from '../components/common/Seo';
import LegalContent from '../components/common/LegalContent';
import siteConfig from '../config/site';

const SECTIONS = [
  {
    heading: '1. Acceptance of Terms',
    body: [
      `By accessing or using the ${siteConfig.name} website, or by engaging us for website, mobile app, e-commerce or custom software development services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this website or our services.`,
    ],
  },
  {
    heading: '2. Services Provided',
    body: [
      `${siteConfig.name} provides software development services including but not limited to website development, mobile application development, e-commerce platforms, custom software, UI/UX design, API and backend development, cloud and DevOps setup, and ongoing maintenance and support.`,
      'The exact scope, deliverables, timeline and cost of any engagement will be defined in a separate written proposal, quotation or service agreement signed by both parties before work begins. These Terms apply in addition to, and do not replace, that project-specific agreement.',
    ],
  },
  {
    heading: '3. Client Responsibilities',
    body: [
      'To deliver a project on schedule and to the agreed quality, we rely on timely cooperation from the client. This includes:',
    ],
    list: [
      'Providing accurate project requirements, content, branding assets and access credentials in a timely manner',
      'Reviewing and providing feedback on deliverables within agreed timeframes',
      'Ensuring that any content, images or third-party materials supplied to us do not infringe on the rights of others',
      'Making payments according to the agreed schedule',
    ],
  },
  {
    heading: '4. Project Timelines & Delivery',
    body: [
      'Project timelines are estimates communicated in good faith based on the agreed scope. Timelines may be affected by delays in client feedback, scope changes, or content delivery. Any material change in scope after a project has started will be discussed and may result in a revised timeline and cost, communicated before additional work begins.',
    ],
  },
  {
    heading: '5. Payment Terms',
    body: [
      'Payment terms (including any advance/milestone payments) will be specified in the project proposal or invoice. Unless otherwise agreed in writing, invoices are due within the period stated on the invoice. We reserve the right to pause work on a project if payments are significantly overdue, after prior written notice to the client.',
    ],
  },
  {
    heading: '6. Intellectual Property Rights',
    body: [
      'Upon full payment for a project, ownership of the final custom deliverables (source code, designs and assets created specifically for that project) transfers to the client, except for any third-party tools, libraries, frameworks or pre-existing components used in the build, which remain licensed under their own respective terms.',
      `${siteConfig.name} retains the right to showcase completed projects in its portfolio and marketing materials, unless the client requests confidentiality in writing.`,
    ],
  },
  {
    heading: '7. Confidentiality',
    body: [
      'We treat client business information, credentials and project details as confidential and will not disclose them to third parties except where required to deliver the agreed services, with the client\'s consent, or as required by law.',
    ],
  },
  {
    heading: '8. Warranties & Disclaimers',
    body: [
      'We aim to deliver reliable, well-tested software, and typically offer a limited post-launch bug-fix window as specified in the project agreement. Beyond any such agreed warranty period, the website, application or software is provided "as is," and we do not guarantee that it will be completely error-free, uninterrupted or compatible with every future browser, device or third-party service update.',
    ],
  },
  {
    heading: '9. Limitation of Liability',
    body: [
      `To the maximum extent permitted by law, ${siteConfig.name} shall not be liable for any indirect, incidental or consequential damages arising from the use of, or inability to use, our services or any website/application we build, including but not limited to loss of revenue, data or business opportunities. Our total liability for any claim relating to a project is limited to the amount paid by the client for that specific project.`,
    ],
  },
  {
    heading: '10. Termination',
    body: [
      'Either party may terminate an ongoing engagement with written notice as specified in the project agreement. In the event of termination, the client is responsible for payment for all work completed up to the termination date.',
    ],
  },
  {
    heading: '11. Governing Law & Jurisdiction',
    body: [
      `These Terms are governed by the laws of India. Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in ${siteConfig.address.city}, ${siteConfig.address.state}, India.`,
    ],
  },
  {
    heading: '12. Changes to These Terms',
    body: [
      'We may update these Terms from time to time to reflect changes in our services or for legal or regulatory reasons. The "Last updated" date at the top of this page indicates when these Terms were last revised. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.',
    ],
  },
  {
    heading: '13. Contact Us',
    body: [
      `If you have any questions about these Terms & Conditions, please contact us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description={`Terms and conditions for using the ${siteConfig.name} website and engaging our software development services.`}
        path="/terms"
      />
      <LegalContent
        title="Terms & Conditions"
        lastUpdated={`January ${siteConfig.year}`}
        intro={`These Terms & Conditions ("Terms") govern your use of the ${siteConfig.name} website and any services provided by ${siteConfig.name} ("we", "us", "our"). This is a general template intended to be reviewed and finalized by qualified legal counsel before relying on it for actual client engagements.`}
        sections={SECTIONS}
      />
    </>
  );
}
