// Illustrative starting-point ranges shown by the Instant Estimate tool.
// These are approximate and intended to give visitors a ballpark before a
// detailed quote — not a binding price. Keep in sync with navLinks service slugs.

export const SCOPES = [
  { id: 'basic', label: 'Basic', detail: 'A simple, essential version to get started quickly.' },
  { id: 'standard', label: 'Standard', detail: 'A fully-featured build with custom design and integrations.' },
  { id: 'advanced', label: 'Advanced', detail: 'A complex, scalable build with advanced functionality.' },
];

export const ESTIMATES = {
  'website-development': {
    basic: { range: '₹40,000 – ₹90,000', weeks: '2 – 3 weeks' },
    standard: { range: '₹1,00,000 – ₹2,50,000', weeks: '4 – 6 weeks' },
    advanced: { range: '₹3,00,000 – ₹6,00,000', weeks: '8 – 12 weeks' },
  },
  'mobile-app-development': {
    basic: { range: '₹1,50,000 – ₹3,00,000', weeks: '4 – 6 weeks' },
    standard: { range: '₹3,50,000 – ₹7,00,000', weeks: '8 – 12 weeks' },
    advanced: { range: '₹8,00,000 – ₹15,00,000', weeks: '14 – 20 weeks' },
  },
  'ecommerce-development': {
    basic: { range: '₹80,000 – ₹1,50,000', weeks: '3 – 4 weeks' },
    standard: { range: '₹2,00,000 – ₹4,50,000', weeks: '6 – 9 weeks' },
    advanced: { range: '₹5,00,000 – ₹10,00,000', weeks: '10 – 16 weeks' },
  },
  'custom-software-development': {
    basic: { range: '₹1,00,000 – ₹2,50,000', weeks: '4 – 6 weeks' },
    standard: { range: '₹3,00,000 – ₹7,00,000', weeks: '8 – 14 weeks' },
    advanced: { range: '₹8,00,000 – ₹18,00,000', weeks: '16 – 24 weeks' },
  },
  'ui-ux-design': {
    basic: { range: '₹30,000 – ₹60,000', weeks: '1 – 2 weeks' },
    standard: { range: '₹70,000 – ₹1,50,000', weeks: '3 – 5 weeks' },
    advanced: { range: '₹2,00,000 – ₹4,00,000', weeks: '6 – 8 weeks' },
  },
  'api-backend-development': {
    basic: { range: '₹60,000 – ₹1,20,000', weeks: '2 – 4 weeks' },
    standard: { range: '₹1,50,000 – ₹3,50,000', weeks: '5 – 8 weeks' },
    advanced: { range: '₹4,00,000 – ₹9,00,000', weeks: '10 – 16 weeks' },
  },
  'cloud-devops': {
    basic: { range: '₹40,000 – ₹80,000', weeks: '1 – 2 weeks' },
    standard: { range: '₹1,00,000 – ₹2,50,000', weeks: '3 – 5 weeks' },
    advanced: { range: '₹3,00,000 – ₹6,00,000', weeks: '6 – 10 weeks' },
  },
  'maintenance-support': {
    basic: { range: '₹10,000 – ₹25,000 / month', weeks: 'Ongoing' },
    standard: { range: '₹25,000 – ₹60,000 / month', weeks: 'Ongoing' },
    advanced: { range: '₹60,000 – ₹1,50,000 / month', weeks: 'Ongoing' },
  },
};
