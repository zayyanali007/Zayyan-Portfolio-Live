
import { ExperienceItem, SkillCategory, Project } from './types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Lead CMS Architect",
    company: "Soft Three",
    location: "Karachi, PK",
    period: "Feb 2026 - Present",
    description: [
      "Architecting enterprise-grade WordPress ecosystems using modern OOP PHP and custom plugin engines designed for high-concurrency environments.",
      "Developing high-conversion Shopify storefronts with complex Liquid logic and headless Next.js integrations to bridge e-commerce with brand storytelling.",
      "Building intelligent bridge layers between CMS platforms and external CRM/ERP systems via REST APIs, ensuring 100% data integrity across the stack.",
      "Implementing server-side performance optimizations and custom caching layers for multi-tenant CMS architectures."
    ]
  },
  {
    role: "Technical Workflow Consultant",
    company: "Woodpecker Digital",
    location: "Karachi, PK",
    period: "Oct 2024 - Jan 2025",
    description: [
      "Engineered automated deployment pipelines and custom internal tools that reduced development-to-production cycles by 40%.",
      "Built bespoke WordPress solutions using ACF Pro and advanced custom post type relationships for content-heavy enterprise clients.",
      "Developed interactive frontend components using ES6+ and modern JavaScript frameworks, prioritizing performance and accessibility.",
      "Refactored mission-critical legacy codebases to improve scalability, security, and maintainability for long-term growth."
    ]
  },
  {
    role: "Quality Engineering & Web Optimization",
    company: "Design Oxyll",
    location: "Karachi, PK",
    period: "Sep 2022 - May 2024",
    description: [
      "Led technical audits and performance optimization strategies for high-traffic CMS installations, achieving sub-second 'Time to Interactive'.",
      "Developed complex UI features for WordPress and Shopify utilizing modern CSS/JS standards and modular design systems.",
      "Optimized database architectures and SQL queries to handle complex relational content without performance degradation.",
      "Established rigorous QA protocols and automated testing suites for complex plugin and theme deployments."
    ]
  },
  {
    role: "Digital Architecture Engineer",
    company: "ZAR Tech",
    location: "Karachi, PK",
    period: "Feb 2021 - Mar 2022",
    description: [
      "Engineered foundational web architectures using WordPress, Shopify, and Webflow for rapid-growth startups.",
      "Developed pixel-perfect custom themes from scratch with integrated logic layers for custom user interactions.",
      "Automated client onboarding and data migration workflows using custom scripts and early-stage AI toolsets.",
      "Built secure e-commerce systems with multi-currency support and global payment gateway integrations."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Advanced CMS Architecture",
    skills: ["Headless WordPress", "Shopify Liquid Engine", "Custom Plugin Logic", "ACF Pro Logic", "Theme Engine Dev", "Multi-tenant Systems"]
  },
  {
    title: "AI & Automation",
    skills: ["Zapier Flow Design", "Make.com Architect", "GHL Custom Workflows", "API Bridge Dev", "Gemini AI Integration", "Business Logic Mapping"]
  },
  {
    title: "Modern Engineering",
    skills: ["Next.js / React", "PHP OOP / Laravel", "Node.js", "Tailwind CSS", "Motion UI Design", "Systemic Scalability"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Autonomous CRM Logic Engine",
    category: "AI Automation & GHL",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    stack: ["GHL", "Make.com", "OpenAI API", "Webhooks"],
    description: "Architected a sophisticated automation layer that eliminated 40+ hours of manual admin work weekly and increased lead conversion by 22% through instant, context-aware AI responses."
  },
  {
    title: "Taqreebaat: Scalable Event Ecosystem",
    category: "Full Stack & SASS",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "SASS"],
    description: "Built a robust unified platform capable of managing 500+ concurrent users with zero latency, providing a seamless digital hub for high-traffic event logistics."
  },
  {
    title: "Enterprise Headless CMS Migration",
    category: "CMS Architecture & Frontend",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    stack: ["Next.js", "Shopify Liquid", "PHP (OOP)", "Tailwind CSS"],
    description: "Engineered a Headless CMS solution reducing page load speed to under 0.8s and achieving a 100/100 Google Lighthouse score for Performance and SEO."
  },
  {
    title: "AI-Driven Operational Hub",
    category: "Consulting & AI Implementation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    stack: ["Python", "Zapier", "API Integration", "AI Agents"],
    description: "Designed a Single Source of Truth operational hub, centralizing business intelligence into a real-time dashboard and automating fragmented communications."
  }
];

export const RESUME_CONTEXT = `
Zayyan Ali is a Lead CMS Architect and AI Automation Expert. 
Core Philosophy: Engineering Efficiency. He doesn't just build sites; he architects self-sustaining digital ecosystems bridging complex code with business logic.
Core Service Pillars:
1. Advanced CMS Architecture: Specializing in Headless setups, enterprise WordPress architectures, and complex Shopify Liquid storefronts.
2. AI Workflow Automation: Expert in Zapier, Make.com, and GHL custom integrations that bridge legacy systems with modern AI capabilities.
3. Modern SASS/Frontend: Proficient in Next.js, React, and high-end Motion UI using Framer Motion and Tailwind.
Identity: Creative Technologist & AI Automation Architect based in Karachi, Pakistan.
No administrative or generic office tasks; all work is Technical Workflow Consulting or System Engineering.
`;
