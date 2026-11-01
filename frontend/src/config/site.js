// Centralized branding & contact configuration.
// Update these values to rebrand the site without touching component code.

export const siteConfig = {
  name: 'Srijan Technologies',
  shortName: 'Srijan',
  tagline: "Creating What's Next",
  journey: ['Idea', 'Creation', 'Technology', 'Growth'],
  description:
    'Srijan Technologies is an India-based software development company designing and building websites, mobile apps, e-commerce platforms and custom software for businesses, startups, schools, hospitals, real estate companies and more.',
  url: 'https://www.srijantechnologies.example',

  email: 'omkarjadhav2426@gmail.com',
  salesEmail: 'omkarjadhav2426@gmail.com',
  phone: '+919284313575', // used in tel: links — no spaces
  phoneDisplay: '+91 92843 13575',
  whatsappNumber: '919284313575',

  address: {
    line1: 'Alandi',
    city: 'Pune',
    state: 'Maharashtra',
    zip: '412105',
    country: 'India',
  },

  businessHours: [
    { days: 'Monday – Friday', hours: '10:00 AM – 7:00 PM IST' },
    { days: 'Saturday', hours: '10:00 AM – 2:00 PM IST' },
    { days: 'Sunday', hours: 'Closed' },
  ],

  social: {
    linkedin: 'https://linkedin.com/company/srijan-technologies',
    twitter: 'https://twitter.com/srijantech',
    github: 'https://github.com/srijan-technologies',
    instagram: 'https://instagram.com/srijantechnologies',
  },

  stats: [
    { label: 'Projects Delivered', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Industries Served', value: 10, suffix: '+' },
    { label: 'Client Satisfaction', value: 99, suffix: '%' },
  ],

  year: new Date().getFullYear(),
};

export default siteConfig;
