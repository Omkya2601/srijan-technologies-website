// Site content (services, industries, portfolio case studies, FAQs).
// Edit this file to change what the pages show — the site is fully static.

export const services = [
  {
    "id": 1,
    "capabilities": [
      "Corporate Websites",
      "Landing Pages",
      "Customer Portals",
      "Admin Dashboards"
    ],
    "slug": "website-development",
    "title": "Website Development",
    "shortDescription": "Business websites, corporate websites, landing pages, portals and custom web applications.",
    "icon": "Globe",
    "heroTitle": "High-Performance Websites Built for Business Growth",
    "heroSubtitle": "We design and build fast, secure, SEO-friendly websites that turn visitors into customers — from corporate sites to complex web portals.",
    "benefits": [
      "Mobile-first, responsive layouts that work on every device",
      "SEO-friendly structure to improve organic visibility",
      "Fast load times through optimized assets and clean code",
      "Content-managed pages your team can update independently",
      "Secure hosting and deployment practices from day one"
    ],
    "process": [
      {
        "step": "Discovery",
        "detail": "Understand your business goals, audience and content needs."
      },
      {
        "step": "Information Architecture",
        "detail": "Map out site structure, navigation and page flows."
      },
      {
        "step": "UI Design",
        "detail": "Design high-fidelity pages aligned with your brand."
      },
      {
        "step": "Development",
        "detail": "Build responsive, accessible pages with clean, maintainable code."
      },
      {
        "step": "QA & Launch",
        "detail": "Cross-browser and device testing before go-live."
      }
    ],
    "technologies": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "REST APIs"
    ],
    "faqs": [
      {
        "q": "How long does a business website take to build?",
        "a": "Most corporate and business websites take 3-6 weeks depending on the number of pages and required integrations."
      },
      {
        "q": "Will I be able to update content myself?",
        "a": "Yes — we can build in a content management layer so your team can update text and images without touching code."
      },
      {
        "q": "Do you handle hosting and domains?",
        "a": "We can advise on and set up hosting, domains and SSL, or work with your existing provider."
      }
    ],
    "order": 1
  },
  {
    "id": 2,
    "capabilities": [
      "Android & iOS",
      "Cross-Platform Apps",
      "Business Applications",
      "Push Notifications"
    ],
    "slug": "mobile-app-development",
    "title": "Mobile App Development",
    "shortDescription": "Android and iOS applications, cross-platform apps and business applications.",
    "icon": "Smartphone",
    "heroTitle": "Native-Quality Mobile Apps for iOS and Android",
    "heroSubtitle": "We build cross-platform and native mobile applications that deliver smooth performance and a consistent experience across devices.",
    "benefits": [
      "Single codebase for iOS and Android with React Native",
      "Offline-first data handling where needed",
      "Push notifications and deep-linking support",
      "App Store and Play Store submission support",
      "Ongoing updates aligned with OS releases"
    ],
    "process": [
      {
        "step": "Discovery",
        "detail": "Define target platforms, core features and user flows."
      },
      {
        "step": "UX Design",
        "detail": "Wireframe and prototype key screens for usability."
      },
      {
        "step": "Development",
        "detail": "Build the app with a shared codebase and native modules where required."
      },
      {
        "step": "Testing",
        "detail": "Device testing across screen sizes and OS versions."
      },
      {
        "step": "Release",
        "detail": "Store submission, versioning and rollout support."
      }
    ],
    "technologies": [
      "React Native",
      "Flutter",
      "Node.js",
      "REST APIs",
      "Firebase"
    ],
    "faqs": [
      {
        "q": "Should I build native or cross-platform?",
        "a": "For most business apps, cross-platform frameworks like React Native deliver near-native performance at a lower cost — we recommend this unless you need deep hardware integration."
      },
      {
        "q": "Can you maintain an existing app?",
        "a": "Yes, we take on maintenance and feature development for existing mobile applications."
      },
      {
        "q": "Do you handle app store submission?",
        "a": "Yes, we manage store listings, screenshots, and the review submission process."
      }
    ],
    "order": 2
  },
  {
    "id": 3,
    "capabilities": [
      "Product & Inventory",
      "Payments & Coupons",
      "Customer Accounts",
      "Sales Analytics"
    ],
    "slug": "ecommerce-development",
    "title": "E-Commerce Development",
    "shortDescription": "Complete online stores, product management, payments, orders, customers and analytics.",
    "icon": "ShoppingCart",
    "heroTitle": "E-Commerce Platforms Built to Convert and Scale",
    "heroSubtitle": "From storefront to checkout, we build online stores with reliable payments, inventory management and a smooth customer experience.",
    "benefits": [
      "Secure payment gateway integrations",
      "Inventory and order management dashboards",
      "Optimized product pages and checkout flow",
      "Customer accounts, order history and notifications",
      "Analytics to track sales and customer behavior"
    ],
    "process": [
      {
        "step": "Discovery",
        "detail": "Understand catalog size, payment needs and fulfillment workflow."
      },
      {
        "step": "Architecture",
        "detail": "Design the data model for products, orders and customers."
      },
      {
        "step": "Design",
        "detail": "Design product, cart and checkout experiences for conversion."
      },
      {
        "step": "Development",
        "detail": "Build storefront, admin dashboard and payment integrations."
      },
      {
        "step": "Launch & Support",
        "detail": "Go-live support and ongoing store enhancements."
      }
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Razorpay"
    ],
    "faqs": [
      {
        "q": "Which payment gateways do you support?",
        "a": "We integrate with Stripe, Razorpay and other regional gateways depending on your market."
      },
      {
        "q": "Can you migrate my existing store?",
        "a": "Yes, we can migrate products, customers and order history from most existing platforms."
      },
      {
        "q": "Do you provide an admin dashboard?",
        "a": "Yes, every store includes a dashboard for managing products, orders and customers."
      }
    ],
    "order": 3
  },
  {
    "id": 4,
    "capabilities": [
      "Business Management Systems",
      "Workflow Automation",
      "Internal Tools",
      "Role-Based Access"
    ],
    "slug": "custom-software-development",
    "title": "Custom Software Development",
    "shortDescription": "Customized software designed around business processes.",
    "icon": "Code2",
    "heroTitle": "Custom Software Designed Around Your Business Processes",
    "heroSubtitle": "When off-the-shelf tools fall short, we design and build software tailored to how your business actually operates.",
    "benefits": [
      "Software modeled around your real workflows, not generic templates",
      "Integrations with your existing tools and data sources",
      "Scalable architecture that grows with your business",
      "Role-based access control for teams and departments",
      "Long-term maintainability through clean, documented code"
    ],
    "process": [
      {
        "step": "Requirements Analysis",
        "detail": "Map current processes and identify automation opportunities."
      },
      {
        "step": "Solution Architecture",
        "detail": "Design the system architecture and data model."
      },
      {
        "step": "Iterative Development",
        "detail": "Build in phases with regular demos and feedback loops."
      },
      {
        "step": "Testing",
        "detail": "Validate against real business scenarios."
      },
      {
        "step": "Deployment & Training",
        "detail": "Roll out to your team with documentation and training."
      }
    ],
    "technologies": [
      "Node.js",
      "React",
      "PostgreSQL",
      "Docker",
      "REST APIs"
    ],
    "faqs": [
      {
        "q": "What kinds of processes can be automated?",
        "a": "Common examples include approvals, reporting, scheduling, inventory tracking and internal data management."
      },
      {
        "q": "How do you handle changing requirements?",
        "a": "We build iteratively with regular check-ins so requirement changes can be incorporated without derailing the project."
      },
      {
        "q": "Will we own the source code?",
        "a": "Yes, you retain full ownership of all custom software we build for you."
      }
    ],
    "order": 4
  },
  {
    "id": 5,
    "capabilities": [
      "User Research",
      "Wireframes & Prototypes",
      "Design Systems",
      "Usability Testing"
    ],
    "slug": "ui-ux-design",
    "title": "UI/UX Design",
    "shortDescription": "Modern user interfaces and user experiences focused on usability and conversion.",
    "icon": "Palette",
    "heroTitle": "Interfaces Designed for Usability and Conversion",
    "heroSubtitle": "We design digital products people enjoy using — grounded in research, usability principles and your brand identity.",
    "benefits": [
      "User research and journey mapping before design begins",
      "Wireframes and interactive prototypes for early validation",
      "Consistent design systems for scalable product design",
      "Accessibility considered from the first design decision",
      "Design handoff optimized for smooth development"
    ],
    "process": [
      {
        "step": "Research",
        "detail": "Understand users, competitors and business goals."
      },
      {
        "step": "Wireframing",
        "detail": "Structure layouts and user flows before visual design."
      },
      {
        "step": "Visual Design",
        "detail": "Apply brand, typography and color to high-fidelity screens."
      },
      {
        "step": "Prototyping",
        "detail": "Build interactive prototypes for stakeholder and user testing."
      },
      {
        "step": "Handoff",
        "detail": "Deliver design specs and assets ready for development."
      }
    ],
    "technologies": [
      "Figma",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "faqs": [
      {
        "q": "Do you design for existing products or only new ones?",
        "a": "Both — we redesign existing products for better usability and design new products from scratch."
      },
      {
        "q": "Do you build design systems?",
        "a": "Yes, we create reusable component libraries and style guides so your product stays visually consistent as it grows."
      },
      {
        "q": "Can you design and develop the same project?",
        "a": "Yes, our design and development teams work together so what gets designed is what gets shipped."
      }
    ],
    "order": 5
  },
  {
    "id": 6,
    "capabilities": [
      "REST API Design",
      "Authentication",
      "Payment Integrations",
      "Third-Party APIs"
    ],
    "slug": "api-backend-development",
    "title": "API & Backend Development",
    "shortDescription": "Secure and scalable APIs and backend systems.",
    "icon": "Server",
    "heroTitle": "Secure, Scalable APIs and Backend Systems",
    "heroSubtitle": "We build the backend infrastructure that powers your applications — reliable, well-documented and built to scale.",
    "benefits": [
      "RESTful API design following clear, consistent conventions",
      "Authentication and authorization built in from the start",
      "Database design optimized for your query patterns",
      "Rate limiting and input validation for security",
      "API documentation for internal and third-party developers"
    ],
    "process": [
      {
        "step": "API Design",
        "detail": "Define endpoints, data contracts and authentication strategy."
      },
      {
        "step": "Database Design",
        "detail": "Model data for performance and integrity."
      },
      {
        "step": "Development",
        "detail": "Build and test endpoints against real use cases."
      },
      {
        "step": "Security Review",
        "detail": "Validate inputs, permissions and rate limits."
      },
      {
        "step": "Deployment",
        "detail": "Deploy with monitoring and logging in place."
      }
    ],
    "technologies": [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT"
    ],
    "faqs": [
      {
        "q": "Can you integrate with third-party APIs?",
        "a": "Yes, we regularly integrate payment providers, communication tools and other third-party services."
      },
      {
        "q": "Do you provide API documentation?",
        "a": "Yes, every API we build includes clear documentation of endpoints and expected payloads."
      },
      {
        "q": "How do you handle authentication?",
        "a": "We implement JWT-based or session-based authentication depending on your application needs."
      }
    ],
    "order": 6
  },
  {
    "id": 7,
    "capabilities": [
      "Cloud Deployment",
      "CI/CD Pipelines",
      "Containerization",
      "Monitoring & Alerting"
    ],
    "slug": "cloud-devops",
    "title": "Cloud & DevOps",
    "shortDescription": "Cloud deployment, CI/CD, infrastructure and application monitoring.",
    "icon": "Cloud",
    "heroTitle": "Reliable Cloud Infrastructure and Deployment Pipelines",
    "heroSubtitle": "We set up cloud infrastructure, automated deployment pipelines and monitoring so your applications stay fast and available.",
    "benefits": [
      "Cloud infrastructure setup on AWS and other providers",
      "CI/CD pipelines for automated testing and deployment",
      "Containerization with Docker for consistent environments",
      "Application monitoring and alerting",
      "Cost-optimized infrastructure recommendations"
    ],
    "process": [
      {
        "step": "Infrastructure Audit",
        "detail": "Assess current setup and identify improvements."
      },
      {
        "step": "Architecture Design",
        "detail": "Design a cloud architecture for reliability and cost efficiency."
      },
      {
        "step": "Pipeline Setup",
        "detail": "Configure CI/CD for automated builds and deployments."
      },
      {
        "step": "Monitoring Setup",
        "detail": "Implement logging, monitoring and alerting."
      },
      {
        "step": "Ongoing Support",
        "detail": "Continuous infrastructure management and optimization."
      }
    ],
    "technologies": [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Nginx"
    ],
    "faqs": [
      {
        "q": "Which cloud providers do you work with?",
        "a": "We primarily work with AWS, but can also work with other major providers depending on your requirements."
      },
      {
        "q": "Can you set up CI/CD for our existing repo?",
        "a": "Yes, we can configure automated pipelines for testing and deployment on your existing codebase."
      },
      {
        "q": "Do you offer ongoing infrastructure management?",
        "a": "Yes, we offer ongoing monitoring, scaling and cost-optimization support."
      }
    ],
    "order": 7
  },
  {
    "id": 8,
    "capabilities": [
      "Bug Fixing",
      "Performance Tuning",
      "Security Updates",
      "Feature Development"
    ],
    "slug": "maintenance-support",
    "title": "Maintenance & Support",
    "shortDescription": "Bug fixing, performance improvements, security updates and ongoing maintenance.",
    "icon": "Wrench",
    "heroTitle": "Ongoing Maintenance to Keep Your Software Running Smoothly",
    "heroSubtitle": "Software needs care after launch. We provide bug fixes, performance improvements and security updates to keep your product healthy.",
    "benefits": [
      "Proactive monitoring to catch issues early",
      "Regular security patches and dependency updates",
      "Performance tuning as usage grows",
      "Bug triage and resolution with clear turnaround times",
      "Flexible support plans based on your needs"
    ],
    "process": [
      {
        "step": "Audit",
        "detail": "Review current codebase, dependencies and performance."
      },
      {
        "step": "Prioritization",
        "detail": "Triage issues by impact and urgency."
      },
      {
        "step": "Resolution",
        "detail": "Fix bugs, apply patches and optimize performance."
      },
      {
        "step": "Monitoring",
        "detail": "Set up ongoing monitoring to catch future issues early."
      },
      {
        "step": "Reporting",
        "detail": "Regular reports on system health and work completed."
      }
    ],
    "technologies": [
      "Node.js",
      "React",
      "PostgreSQL",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Do you support applications you did not originally build?",
        "a": "Yes, we take on maintenance for existing applications after an initial codebase review."
      },
      {
        "q": "What are your response times?",
        "a": "Response times depend on the support plan, with expedited handling available for critical issues."
      },
      {
        "q": "Can you also add new features during maintenance?",
        "a": "Yes, ongoing maintenance engagements often include small feature enhancements alongside fixes."
      }
    ],
    "order": 8
  },
  {
    "id": 9,
    "capabilities": [
      "Multi-Tenant Architecture",
      "Subscription Billing",
      "User & Team Management",
      "Usage Analytics"
    ],
    "slug": "saas-development",
    "title": "SaaS Development",
    "shortDescription": "Multi-tenant SaaS platforms with subscriptions, billing, user management and analytics.",
    "icon": "Layers3",
    "heroTitle": "SaaS Platforms Built to Scale From Day One",
    "heroSubtitle": "We design and build multi-tenant SaaS products with subscription billing, role-based access and the analytics you need to grow.",
    "benefits": [
      "Multi-tenant architecture that isolates customer data safely",
      "Subscription and billing flows integrated from the start",
      "Role-based user and team management out of the box",
      "Usage analytics to understand adoption and churn",
      "Architecture designed to onboard your first 10 or 10,000th customer"
    ],
    "process": [
      {
        "step": "Discovery",
        "detail": "Define your ideal customer, pricing model and core workflows."
      },
      {
        "step": "Architecture",
        "detail": "Design multi-tenancy, data isolation and billing strategy."
      },
      {
        "step": "Development",
        "detail": "Build the core product, admin console and billing integration."
      },
      {
        "step": "Testing",
        "detail": "Validate tenant isolation, billing edge cases and performance."
      },
      {
        "step": "Launch & Iterate",
        "detail": "Go live and iterate based on real usage data."
      }
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe Billing",
      "Redis"
    ],
    "faqs": [
      {
        "q": "What is multi-tenancy and do I need it?",
        "a": "Multi-tenancy lets one codebase and database safely serve many customers. It matters once you plan to sell the same product to multiple businesses."
      },
      {
        "q": "Can you integrate subscription billing?",
        "a": "Yes, we integrate providers like Stripe Billing to handle plans, trials, upgrades and invoicing."
      },
      {
        "q": "Can an existing product be converted into SaaS?",
        "a": "In many cases yes — we assess your current architecture and plan a path to multi-tenancy."
      }
    ],
    "order": 9
  },
  {
    "id": 10,
    "capabilities": [
      "HR & Payroll",
      "Finance & Accounting",
      "Inventory & CRM",
      "Role-Based Dashboards"
    ],
    "slug": "erp-development",
    "title": "ERP Development",
    "shortDescription": "Connected ERP systems covering HR, finance, inventory, CRM and reporting.",
    "icon": "Building2",
    "heroTitle": "ERP Systems That Connect Your Business Operations",
    "heroSubtitle": "We build enterprise resource planning systems that bring HR, finance, inventory and reporting into one connected platform.",
    "benefits": [
      "Departments work from a single source of truth instead of spreadsheets",
      "Role-based dashboards tailored to each department",
      "Modular design so you can start with one module and expand",
      "Custom reports and business intelligence built around your KPIs",
      "Integrations with existing accounting and payroll tools"
    ],
    "process": [
      {
        "step": "Process Mapping",
        "detail": "Document how each department currently operates."
      },
      {
        "step": "Module Design",
        "detail": "Design HR, finance, inventory and CRM modules around real workflows."
      },
      {
        "step": "Development",
        "detail": "Build modules iteratively, starting with your highest-impact area."
      },
      {
        "step": "Data Migration",
        "detail": "Migrate existing records safely with validation."
      },
      {
        "step": "Rollout & Training",
        "detail": "Roll out department by department with hands-on training."
      }
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "REST APIs"
    ],
    "faqs": [
      {
        "q": "Do we need to replace all our current systems at once?",
        "a": "No — we typically roll out ERP modules one department at a time to reduce disruption."
      },
      {
        "q": "Can the ERP integrate with our accounting software?",
        "a": "Yes, we build integrations with common accounting and payroll tools where APIs are available."
      },
      {
        "q": "How is data kept secure across departments?",
        "a": "We implement role-based access control so employees only see the data relevant to their role."
      }
    ],
    "order": 10
  },
  {
    "id": 11,
    "capabilities": [
      "AI Integrations",
      "Document Processing",
      "Intelligent Search",
      "Workflow Automation"
    ],
    "slug": "ai-automation",
    "title": "AI & Automation",
    "shortDescription": "AI integrations, intelligent workflows and business process automation.",
    "icon": "Sparkles",
    "heroTitle": "Practical AI and Automation for Real Business Workflows",
    "heroSubtitle": "We integrate AI where it genuinely saves time — document processing, intelligent search, assistants and workflow automation.",
    "benefits": [
      "AI integrations scoped to real, measurable workflow problems",
      "Document processing to reduce manual data entry",
      "Intelligent search across your internal content and data",
      "Workflow automation that removes repetitive manual steps",
      "Clear evaluation of where AI adds value versus added complexity"
    ],
    "process": [
      {
        "step": "Opportunity Assessment",
        "detail": "Identify workflows where automation or AI genuinely helps."
      },
      {
        "step": "Solution Design",
        "detail": "Design the automation or AI integration around your data and tools."
      },
      {
        "step": "Development",
        "detail": "Build and integrate the solution into your existing systems."
      },
      {
        "step": "Evaluation",
        "detail": "Test accuracy, reliability and business impact before rollout."
      },
      {
        "step": "Rollout & Monitoring",
        "detail": "Deploy with monitoring to track performance over time."
      }
    ],
    "technologies": [
      "Node.js",
      "Python",
      "LLM APIs",
      "PostgreSQL",
      "REST APIs"
    ],
    "faqs": [
      {
        "q": "Do you build our own AI models?",
        "a": "For most business use cases we integrate proven AI APIs rather than training custom models, which is faster and more cost-effective."
      },
      {
        "q": "How do you decide where AI actually helps?",
        "a": "We start with a workflow assessment and only recommend AI where it measurably reduces manual work or improves accuracy."
      },
      {
        "q": "Is our data used to train external AI models?",
        "a": "We configure integrations to align with your data privacy requirements and the policies of the AI providers used."
      }
    ],
    "order": 11
  },
  {
    "id": 12,
    "capabilities": [
      "Autonomous Task Agents",
      "Multi-Agent Workflows",
      "Tool & API Integration",
      "Human-in-the-Loop Controls"
    ],
    "slug": "ai-agent-development",
    "title": "AI Agents & Agentic AI",
    "shortDescription": "Autonomous AI agents that plan, use your tools and complete multi-step business tasks.",
    "icon": "Bot",
    "heroTitle": "AI Agents That Get Real Work Done — Not Just Chat",
    "heroSubtitle": "We design and build agentic AI systems that understand a goal, plan the steps, use your software and data, and deliver results — with humans in control where it matters.",
    "benefits": [
      "Agents that complete multi-step tasks end to end, not just answer questions",
      "Connected to your CRM, ERP, email, databases and internal APIs through secure tools",
      "Human-in-the-loop approvals for sensitive actions like payments or customer emails",
      "Multi-agent workflows where specialised agents hand work to each other",
      "Full audit trail of every decision and action an agent takes",
      "Guardrails, evaluation and monitoring so agents stay accurate and on-task"
    ],
    "process": [
      {
        "step": "Use-Case Discovery",
        "detail": "Pick high-value, repeatable workflows where an agent can own the outcome."
      },
      {
        "step": "Agent Design",
        "detail": "Define the goal, tools, permissions, memory and approval points for each agent."
      },
      {
        "step": "Tool Integration",
        "detail": "Securely connect the agent to your systems via APIs, MCP servers and databases."
      },
      {
        "step": "Evaluation & Guardrails",
        "detail": "Test against real scenarios, measure accuracy and add safety checks."
      },
      {
        "step": "Launch & Monitoring",
        "detail": "Roll out gradually with dashboards, logs and continuous improvement."
      }
    ],
    "technologies": [
      "Claude",
      "OpenAI",
      "LangGraph",
      "Model Context Protocol (MCP)",
      "Python",
      "Node.js",
      "PostgreSQL + pgvector"
    ],
    "faqs": [
      {
        "q": "What is the difference between an AI agent and a chatbot?",
        "a": "A chatbot answers questions. An AI agent is given a goal and can plan steps, call your systems (CRM, email, databases) and complete the task — for example qualifying a lead, updating records and booking a meeting."
      },
      {
        "q": "Can we control what the agent is allowed to do?",
        "a": "Yes. Every agent gets explicit permissions per tool, and sensitive actions can require a human approval before they run. All actions are logged for review."
      },
      {
        "q": "Which AI models do you use?",
        "a": "We choose the model per task — typically Claude or GPT-class models for reasoning, and smaller models where speed or cost matters. The architecture stays model-agnostic so you can switch later."
      },
      {
        "q": "How long does it take to launch a first agent?",
        "a": "A focused first agent for one workflow usually takes 3–6 weeks including integration, evaluation and a pilot with your team."
      }
    ],
    "order": 12
  },
  {
    "id": 13,
    "capabilities": [
      "RAG Knowledge Assistants",
      "LLM Feature Integration",
      "Content Generation",
      "Fine-Tuning & Evaluation"
    ],
    "slug": "generative-ai-development",
    "title": "Generative AI & LLM Apps",
    "shortDescription": "Custom GPT-style apps, RAG knowledge assistants and LLM features inside your product.",
    "icon": "BrainCircuit",
    "heroTitle": "Generative AI Built Into Your Products and Workflows",
    "heroSubtitle": "From private knowledge assistants trained on your documents to AI features inside your app, we build secure, reliable LLM solutions that your team and customers actually use.",
    "benefits": [
      "RAG assistants that answer from your own documents, policies and data — with sources",
      "AI features inside your existing web or mobile app (summaries, drafting, smart search)",
      "Content generation pipelines for product descriptions, reports and marketing copy",
      "Private deployment options so sensitive data stays within your control",
      "Prompt, retrieval and output evaluation to keep answers accurate"
    ],
    "process": [
      {
        "step": "Discovery",
        "detail": "Define the use case, users, data sources and success metrics."
      },
      {
        "step": "Data Preparation",
        "detail": "Clean, chunk and index your documents and data for retrieval."
      },
      {
        "step": "Build & Integrate",
        "detail": "Build the LLM pipeline and integrate it into your app or workflow."
      },
      {
        "step": "Evaluate",
        "detail": "Measure answer quality, hallucination rate, latency and cost."
      },
      {
        "step": "Deploy & Improve",
        "detail": "Launch with monitoring and a feedback loop for continuous tuning."
      }
    ],
    "technologies": [
      "Claude",
      "OpenAI",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Pinecone",
      "Python",
      "React"
    ],
    "faqs": [
      {
        "q": "What is RAG?",
        "a": "Retrieval-Augmented Generation lets an AI answer questions using your own documents. It searches your content first and then writes an answer with references, which greatly reduces made-up answers."
      },
      {
        "q": "Is our company data safe?",
        "a": "We use enterprise API terms where providers do not train on your data, add role-based access to documents, and can deploy in your own cloud when required."
      },
      {
        "q": "Can you add AI to our existing application?",
        "a": "Yes. We regularly add features like AI search, summarisation and drafting to existing web and mobile apps via a secure backend API."
      }
    ],
    "order": 13
  },
  {
    "id": 14,
    "capabilities": [
      "Website & WhatsApp Chatbots",
      "Voice AI Assistants",
      "Lead Qualification",
      "Multilingual Support"
    ],
    "slug": "ai-chatbot-development",
    "title": "AI Chatbots & Voice Assistants",
    "shortDescription": "24/7 AI assistants for websites, WhatsApp and phone that support customers and capture leads.",
    "icon": "MessagesSquare",
    "heroTitle": "AI Assistants That Support Customers and Capture Leads 24/7",
    "heroSubtitle": "Smart chat and voice assistants for your website, WhatsApp and phone lines — trained on your business, connected to your systems and able to hand over to a human anytime.",
    "benefits": [
      "Instant answers around the clock in English, Hindi, Marathi and other languages",
      "WhatsApp, website chat, Instagram and voice call support from one brain",
      "Lead capture and qualification pushed straight into your CRM",
      "Order status, bookings and appointment scheduling through your systems",
      "Smooth handover to a human agent with full conversation context"
    ],
    "process": [
      {
        "step": "Conversation Design",
        "detail": "Map the top customer questions, journeys and handover rules."
      },
      {
        "step": "Knowledge Setup",
        "detail": "Train the assistant on your FAQs, catalogue, policies and website."
      },
      {
        "step": "Integrations",
        "detail": "Connect WhatsApp, website, CRM, booking and order systems."
      },
      {
        "step": "Testing",
        "detail": "Test real conversations for accuracy, tone and edge cases."
      },
      {
        "step": "Launch & Analytics",
        "detail": "Go live with dashboards for conversations, leads and resolution rate."
      }
    ],
    "technologies": [
      "Claude",
      "OpenAI",
      "WhatsApp Business API",
      "Twilio",
      "Node.js",
      "React",
      "PostgreSQL"
    ],
    "faqs": [
      {
        "q": "Can the chatbot work on WhatsApp?",
        "a": "Yes. We integrate with the official WhatsApp Business API so customers can chat, get answers, book appointments and receive updates on WhatsApp."
      },
      {
        "q": "Does it support Indian languages?",
        "a": "Yes. Modern AI models handle Hindi, Marathi and many other Indian languages, and we test conversations in the languages your customers use."
      },
      {
        "q": "What happens when the bot cannot answer?",
        "a": "It hands the conversation to your team with the full chat history, so customers never have to repeat themselves."
      }
    ],
    "order": 14
  }
];

export const industries = [
  {
    "id": 1,
    "slug": "education",
    "title": "Education",
    "shortDescription": "School management systems, student portals, attendance, fees, exams, communication and administration.",
    "icon": "GraduationCap",
    "heroTitle": "School Management Software Built for Modern Institutions",
    "heroSubtitle": "We build platforms that simplify administration, improve communication and give schools a clear view of student performance.",
    "features": [
      "Student Management",
      "Teacher Management",
      "Attendance Tracking",
      "Fee Management",
      "Exam & Grading",
      "Timetable Scheduling",
      "Parent Portal",
      "Notifications & Announcements",
      "Reports & Analytics",
      "Admin Dashboard"
    ],
    "order": 1
  },
  {
    "id": 2,
    "slug": "real-estate",
    "title": "Real Estate",
    "shortDescription": "Property listing platforms, lead management, CRM, agent dashboards, property search and booking.",
    "icon": "Building2",
    "heroTitle": "Real Estate Platforms That Turn Listings Into Leads",
    "heroSubtitle": "From property discovery to closing, we build platforms that help real estate businesses manage listings, leads and agents efficiently.",
    "features": [
      "Property Listings",
      "Advanced Property Search",
      "Lead Management",
      "Agent Management",
      "CRM Integration",
      "Property Booking & Scheduling",
      "Customer Portal",
      "Admin Dashboard",
      "Reports & Analytics"
    ],
    "order": 2
  },
  {
    "id": 3,
    "slug": "healthcare",
    "title": "Healthcare",
    "shortDescription": "Hospital management systems, appointments, patient management, billing, reports and doctor portals.",
    "icon": "HeartPulse",
    "heroTitle": "Hospital Management Software for Better Patient Care",
    "heroSubtitle": "We build healthcare platforms that streamline patient management, scheduling and billing while keeping data secure.",
    "features": [
      "Patient Management",
      "Doctor Management",
      "Appointment Scheduling",
      "Billing & Invoicing",
      "Pharmacy Management",
      "Laboratory Management",
      "Staff Management",
      "Reports & Analytics",
      "Admin Dashboard"
    ],
    "order": 3
  },
  {
    "id": 4,
    "slug": "ecommerce",
    "title": "E-Commerce",
    "shortDescription": "Online stores, inventory management, orders, payments, customer management and analytics.",
    "icon": "ShoppingBag",
    "heroTitle": "E-Commerce Solutions for Retail and D2C Brands",
    "heroSubtitle": "We help e-commerce businesses launch and scale online stores with reliable inventory, payment and customer management.",
    "features": [
      "Product & Inventory Management",
      "Order Management",
      "Payment Integration",
      "Customer Accounts",
      "Discounts & Promotions",
      "Shipping & Fulfillment",
      "Sales Analytics",
      "Admin Dashboard"
    ],
    "order": 4
  },
  {
    "id": 5,
    "slug": "fintech",
    "title": "FinTech",
    "shortDescription": "Payment systems, transaction management, dashboards, reconciliation and financial workflows.",
    "icon": "Landmark",
    "heroTitle": "Secure Software for Financial Products and Workflows",
    "heroSubtitle": "We build fintech applications with a strong focus on security, accuracy and compliance-friendly architecture.",
    "features": [
      "Transaction Management",
      "Payment Processing",
      "Financial Dashboards",
      "Reconciliation Tools",
      "Reporting & Audit Trails",
      "Role-Based Access Control",
      "Notifications & Alerts",
      "Admin Dashboard"
    ],
    "order": 5
  },
  {
    "id": 6,
    "slug": "travel-tourism",
    "title": "Travel & Tourism",
    "shortDescription": "Travel portals, booking systems, hotel management, tour management and customer platforms.",
    "icon": "Plane",
    "heroTitle": "Booking Platforms for Travel and Hospitality Businesses",
    "heroSubtitle": "We build travel platforms that simplify bookings, itinerary management and customer communication.",
    "features": [
      "Tour & Package Listings",
      "Booking & Reservation Management",
      "Hotel Management",
      "Itinerary Planning",
      "Payment Integration",
      "Customer Portal",
      "Reviews & Ratings",
      "Admin Dashboard"
    ],
    "order": 6
  },
  {
    "id": 7,
    "slug": "enterprise",
    "title": "Enterprise",
    "shortDescription": "Internal business applications, CRM, ERP, dashboards, workflow automation and integrations.",
    "icon": "Building",
    "heroTitle": "Enterprise Software That Streamlines Internal Operations",
    "heroSubtitle": "We design internal tools and enterprise platforms that automate workflows and connect data across departments.",
    "features": [
      "Custom CRM",
      "Workflow Automation",
      "Internal Dashboards",
      "Role-Based Access Control",
      "Reporting & Analytics",
      "Third-Party Integrations",
      "Document Management",
      "Admin Controls"
    ],
    "order": 7
  }
];

export const portfolio = [
  {
    "id": 1,
    "category": "Industry Solutions",
    "architecture": "A React frontend with role-based dashboards (admin, teacher, parent) backed by a Node.js/Express API and PostgreSQL database, with campus-level data scoping so each campus only sees its own records.",
    "lessons": "Rolling out attendance and fees first, before more complex modules like exams, gave staff an early win and made adoption across campuses much smoother.",
    "featured": true,
    "isDemo": true,
    "slug": "school-management-platform",
    "title": "School Management Platform",
    "industry": "Education",
    "summary": "A unified platform for a growing K-12 school network to manage students, attendance, fees and communication.",
    "problem": "The school network relied on spreadsheets and paper records across multiple campuses, making attendance tracking, fee collection and parent communication slow and error-prone.",
    "solution": "We built a centralized platform with role-based dashboards for administrators, teachers and parents, automating attendance, fee reminders and exam result publishing.",
    "features": [
      "Multi-campus student records",
      "Digital attendance with daily reports",
      "Online fee payment and receipts",
      "Exam and report card generation",
      "Parent-teacher messaging"
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "results": [
      "Reduced administrative paperwork significantly across campuses",
      "Faster fee collection with online payment reminders",
      "Improved parent engagement through real-time updates"
    ],
    "image": "/images/portfolio/school-management.jpg",
    "order": 1
  },
  {
    "id": 2,
    "category": "Industry Solutions",
    "architecture": "A searchable listings frontend paired with a lightweight CRM backend — leads are assigned to agents automatically based on property location and load balancing rules.",
    "lessons": "Agent adoption improved significantly once lead assignment was automated, removing the manual hand-off step that had been causing delays.",
    "featured": true,
    "isDemo": true,
    "slug": "real-estate-platform",
    "title": "Real Estate Platform",
    "industry": "Real Estate",
    "summary": "A property listing and lead management platform for a regional real estate brokerage.",
    "problem": "The brokerage managed listings and leads manually across spreadsheets and messaging apps, causing missed follow-ups and inconsistent listing data.",
    "solution": "We delivered a platform with property listings, an integrated CRM for lead tracking, and agent dashboards to manage assigned properties and clients.",
    "features": [
      "Searchable property listings with filters",
      "Lead capture and assignment to agents",
      "Agent performance dashboard",
      "Property booking and visit scheduling",
      "Admin reporting on inventory and leads"
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Framer Motion"
    ],
    "results": [
      "Centralized lead tracking eliminated missed follow-ups",
      "Faster property search improved client experience",
      "Clear visibility into agent performance for management"
    ],
    "image": "/images/portfolio/real-estate.jpg",
    "order": 2
  },
  {
    "id": 3,
    "category": "Industry Solutions",
    "architecture": "A department-aware data model links patients, doctors and billing records, with a shared patient record accessible across departments to prevent duplication.",
    "lessons": "Centralizing patient records across departments was the single highest-impact change — it eliminated the duplicate-record problem that caused most of the original delays.",
    "featured": true,
    "isDemo": true,
    "slug": "hospital-management-system",
    "title": "Hospital Management System",
    "industry": "Healthcare",
    "summary": "A patient and appointment management system for a multi-department hospital.",
    "problem": "Appointment scheduling and patient records were handled separately across departments, leading to duplicated records and long wait times.",
    "solution": "We built a unified system for patient records, appointment scheduling, billing and department-wise doctor availability.",
    "features": [
      "Centralized patient records",
      "Appointment scheduling across departments",
      "Billing and invoice generation",
      "Doctor availability management",
      "Reporting for hospital administration"
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express.js"
    ],
    "results": [
      "Reduced patient wait times through better scheduling",
      "Eliminated duplicate patient records across departments",
      "Faster billing cycles with automated invoicing"
    ],
    "image": "/images/portfolio/hospital-management.jpg",
    "order": 3
  },
  {
    "id": 4,
    "category": "E-Commerce",
    "architecture": "A headless storefront built in React consumes a Node.js/Express commerce API, with Stripe handling payments and webhooks keeping order status in sync in real time.",
    "lessons": "Building the admin dashboard alongside the storefront (not as an afterthought) meant the brand could manage inventory and orders confidently from day one of launch.",
    "featured": true,
    "isDemo": true,
    "slug": "ecommerce-platform",
    "title": "E-Commerce Platform",
    "industry": "E-Commerce",
    "summary": "A complete online store for a growing D2C retail brand.",
    "problem": "The brand needed to move from a marketplace-only presence to a self-owned storefront with better margins and direct customer relationships.",
    "solution": "We built a full storefront with product catalog management, secure checkout, order tracking and a customer-facing account area.",
    "features": [
      "Product catalog with variants",
      "Secure payment gateway integration",
      "Order tracking and notifications",
      "Customer accounts and order history",
      "Sales analytics dashboard"
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe"
    ],
    "results": [
      "Established a direct-to-customer sales channel",
      "Improved margins by reducing marketplace dependency",
      "Actionable sales insights through the analytics dashboard"
    ],
    "image": "/images/portfolio/ecommerce-platform.jpg",
    "order": 4
  },
  {
    "id": 5,
    "category": "Industry Solutions",
    "architecture": "A real-time availability engine checks inventory across tours and hotel partners before confirming a booking, avoiding the double-booking issues of the old manual process.",
    "lessons": "Real-time availability checking turned out to be the make-or-break feature — without it, the platform would have just digitized the same coordination problems.",
    "featured": false,
    "isDemo": true,
    "slug": "travel-booking-platform",
    "title": "Travel Booking Platform",
    "industry": "Travel",
    "summary": "A tour and hotel booking platform for a regional travel agency.",
    "problem": "Bookings were coordinated manually over phone and email, making it hard to manage availability and provide customers with real-time confirmation.",
    "solution": "We built an online booking platform covering tour packages, hotel availability and real-time booking confirmation with payment integration.",
    "features": [
      "Tour package listings",
      "Real-time availability and booking",
      "Payment integration",
      "Customer itinerary management",
      "Admin dashboard for bookings and inventory"
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "results": [
      "Enabled real-time booking confirmations for customers",
      "Reduced manual coordination workload for staff",
      "Clearer visibility into booking trends and inventory"
    ],
    "image": "/images/portfolio/travel-booking.jpg",
    "order": 5
  },
  {
    "id": 6,
    "category": "ERP",
    "architecture": "A modular internal platform where project tracking, client records and reporting share one PostgreSQL database, letting leadership query across modules instead of stitching together exports from separate tools.",
    "lessons": "Consolidating three separate internal tools into one platform took longer than expected, but the cross-module reporting it unlocked was the outcome leadership valued most.",
    "featured": false,
    "isDemo": true,
    "slug": "business-management-platform",
    "title": "Business Management Platform",
    "industry": "Enterprise",
    "summary": "An internal operations platform for a mid-sized services company.",
    "problem": "Different teams used disconnected tools for project tracking, client records and reporting, making cross-team visibility difficult for leadership.",
    "solution": "We built a unified internal platform combining project tracking, client records and role-based reporting dashboards.",
    "features": [
      "Project and task tracking",
      "Centralized client records",
      "Role-based access control",
      "Custom reporting dashboards",
      "Third-party tool integrations"
    ],
    "technologies": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker"
    ],
    "results": [
      "Improved cross-team visibility for leadership",
      "Reduced tool sprawl by consolidating internal systems",
      "Faster reporting through automated dashboards"
    ],
    "image": "/images/portfolio/business-platform.jpg",
    "order": 6
  }
];

export const faqs = [
  {
    "id": 1,
    "question": "How much does software development cost?",
    "answer": "It depends on scope and complexity — a landing page and a multi-tenant SaaS platform have very different costs. Use our Instant Estimate tool for a ballpark range, or request a consultation for a detailed quote.",
    "order": 1
  },
  {
    "id": 2,
    "question": "How long does a project take?",
    "answer": "Most business websites take 3-6 weeks, mobile apps and custom software typically take 8-16 weeks depending on scope, and larger ERP/SaaS builds are scoped and delivered in phases.",
    "order": 2
  },
  {
    "id": 3,
    "question": "Do you build custom software?",
    "answer": "Yes — custom software built around your specific processes is one of our core services, rather than forcing your business into generic off-the-shelf tools.",
    "order": 3
  },
  {
    "id": 4,
    "question": "Do you provide mobile applications?",
    "answer": "Yes, we build both cross-platform apps (a single codebase for iOS and Android) and native apps where deep hardware integration is required.",
    "order": 4
  },
  {
    "id": 5,
    "question": "Do you work with startups?",
    "answer": "Yes, we work with startups, SMEs and enterprises alike, and can help scope an MVP that validates your idea without over-building on day one.",
    "order": 5
  },
  {
    "id": 6,
    "question": "Can you maintain an existing application?",
    "answer": "Yes, we take on maintenance and feature development for applications we did not originally build, starting with a codebase review.",
    "order": 6
  },
  {
    "id": 7,
    "question": "Do you provide cloud deployment?",
    "answer": "Yes, we set up cloud infrastructure, CI/CD pipelines and monitoring, primarily on AWS, and can work with other providers depending on your requirements.",
    "order": 7
  },
  {
    "id": 8,
    "question": "Can you integrate payment gateways?",
    "answer": "Yes, we integrate payment providers such as Stripe and Razorpay for e-commerce, SaaS billing and other transactional workflows.",
    "order": 8
  },
  {
    "id": 9,
    "question": "Can you build ERP or SaaS systems?",
    "answer": "Yes, ERP and SaaS development are both core services — see our Services page for details on multi-tenant architecture, billing and departmental modules.",
    "order": 9
  },
  {
    "id": 10,
    "question": "Do you provide post-launch support?",
    "answer": "Yes, ongoing maintenance and support is available after launch, covering bug fixes, performance tuning, security updates and small feature additions.",
    "order": 10
  }
];
