// Lightweight nav data so the mega-menus render instantly without waiting on the API.
// Must stay in sync with the slugs seeded in backend/prisma/seed.js.

export const navServices = [
  { slug: 'website-development', title: 'Website Development', icon: 'Globe' },
  { slug: 'mobile-app-development', title: 'Mobile App Development', icon: 'Smartphone' },
  { slug: 'ecommerce-development', title: 'E-Commerce Development', icon: 'ShoppingCart' },
  { slug: 'custom-software-development', title: 'Custom Software Development', icon: 'Code2' },
  { slug: 'ui-ux-design', title: 'UI/UX Design', icon: 'Palette' },
  { slug: 'api-backend-development', title: 'API & Backend Development', icon: 'Server' },
  { slug: 'cloud-devops', title: 'Cloud & DevOps', icon: 'Cloud' },
  { slug: 'maintenance-support', title: 'Maintenance & Support', icon: 'Wrench' },
  { slug: 'saas-development', title: 'SaaS Development', icon: 'Layers3' },
  { slug: 'erp-development', title: 'ERP Development', icon: 'Building2' },
  { slug: 'ai-automation', title: 'AI & Automation', icon: 'Sparkles' },
  { slug: 'ai-agent-development', title: 'AI Agents & Agentic AI', icon: 'Bot' },
  { slug: 'generative-ai-development', title: 'Generative AI & LLM Apps', icon: 'BrainCircuit' },
  { slug: 'ai-chatbot-development', title: 'AI Chatbots & Voice Assistants', icon: 'MessagesSquare' },
];

export const navIndustries = [
  { slug: 'education', title: 'Education', icon: 'GraduationCap' },
  { slug: 'real-estate', title: 'Real Estate', icon: 'Building2' },
  { slug: 'healthcare', title: 'Healthcare', icon: 'HeartPulse' },
  { slug: 'ecommerce', title: 'E-Commerce', icon: 'ShoppingBag' },
  { slug: 'fintech', title: 'FinTech', icon: 'Landmark' },
  { slug: 'travel-tourism', title: 'Travel & Tourism', icon: 'Plane' },
  { slug: 'enterprise', title: 'Enterprise', icon: 'Building' },
];
