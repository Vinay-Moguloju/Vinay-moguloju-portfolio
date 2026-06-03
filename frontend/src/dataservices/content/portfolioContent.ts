/**
 * @module dataservices/content/portfolioContent
 * @description Single source of truth for all static portfolio copy and structured section data.
 */

import type { PortfolioProjectAccentColorKey } from '@dataservices/config/portfolioDesignTokens'
import {
  PORTFOLIO_MEDIA_URLS,
  PORTFOLIO_SOCIAL_PROFILE_URLS,
} from '@dataservices/config/portfolioExternalResources'

export const PORTFOLIO_BRAND = {
  displayName: 'Vinay Kumar',
  email: 'mogulojuvinaykumar@gmail.com',
  footerBrand: 'Vinay Kumar',
  fullName: 'Vinay Kumar Moguloju',
  location: 'Melissa, TX',
  phone: '571-295-8383',
  title: 'Senior Fullstack Engineer',
} as const

export const PORTFOLIO_ACCESSIBILITY_LABELS = {
  home: 'Home',
  mobileMenuClose: 'Close menu',
  mobileMenuOpen: 'Open menu',
  modalClose: 'Close section',
  nav: 'Portfolio',
} as const

export const PORTFOLIO_NAV_CONTENT = {
  hireMeLabel: 'Hire me',
  sectionLinks: [
    { label: 'About', sectionId: 'about' },
    { label: 'Work', sectionId: 'work' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Contact', sectionId: 'contact' },
  ],
} as const

export const PORTFOLIO_LANDING_PAGE_CONTENT = {
  availabilityBadge: 'Open to senior Fullstack opportunities',
  headlineAccent: 'Builds Things',
  headlineMuted: 'That Matter.',
  intro:
    'Senior Fullstack Engineer building scalable SPAs and micro-frontends across e-commerce, retail, and telecom — focused on React, Next.js, performance, and WCAG 2.1 AA accessibility.',
  primaryActionLabel: 'View my work',
  roleWords: ['Senior Fullstack', 'React / Next.js', 'Micro-Frontends'],
  secondaryActionLabel: 'Hire me',
} as const

export const PORTFOLIO_ABOUT_CONTENT = {
  heading:
    'I design and ship accessible, high-performance frontends for customer-facing products at scale.',
  imageAlt: 'Vinay Kumar working on frontend architecture and UI development',
  paragraphs: [
    'I am a Senior Fullstack Engineer focused on analyzing, designing, and developing highly scalable, multi-tier web applications. I specialize in React.js, Next.js, TypeScript, and modern CSS workflows across e-commerce, retail, and telecom domains.',
    'At Abercrombie & Fitch, I build and enhance customer-facing micro-frontends, migrate legacy experiences to React 18, contribute shared utilities across MFEs, and use AI-assisted development with Cursor, LLMs, and MCP to accelerate delivery while maintaining quality, accessibility, and team standards.',
  ],
  sectionLabel: '01 / About',
  stats: [
    { label: 'Core focus', value: 'Fullstack' },
    { label: 'Industry domains', value: '3' },
    { label: 'Current role', value: 'A&F' },
    { label: 'Accessibility standard', value: 'WCAG 2.1 AA' },
  ],
  statusChip: 'Currently: Senior Fullstack Engineer @ Abercrombie & Fitch',
} as const

export const PORTFOLIO_PROJECTS_CONTENT = {
  actionLabels: {
    caseStudy: 'Case study',
    code: 'Code',
    live: 'Live',
  },
  heading: 'Selected work & innovations',
  projects: [
    {
      accentColorKey: 'primary' as PortfolioProjectAccentColorKey,
      category: 'E-Commerce / MFE',
      description:
        'Customer-facing micro-frontend powering product listing, product detail, cart, checkout, and account experiences for Abercrombie & Fitch and Hollister. Delivered accessible UI with Next.js SSR/SSG, Redux Toolkit, GraphQL, Storybook, and Core Web Vitals optimization.',
      id: 1,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectCustomerMfe,
      stack: ['React 18', 'Next.js', 'TypeScript', 'Redux Toolkit', 'GraphQL', 'Storybook'],
      tagline: 'Customer storefront micro-frontend',
      title: 'Customer MFE',
      year: '2023–Present',
    },
    {
      accentColorKey: 'purple' as PortfolioProjectAccentColorKey,
      category: 'Platform Migration',
      description:
        'Owned the Associate Discount repository end-to-end — bootstrapped the React 18 codebase from scratch and migrated from vanilla JavaScript to improve reusability, developer experience, and performance using Vite, testing harnesses, and shared UI patterns.',
      id: 2,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectAssociateDiscount,
      stack: ['React 18', 'Vite', 'TypeScript', 'Redux Saga', 'ESLint', 'Prettier'],
      tagline: 'Vanilla JS to React 18 migration',
      title: 'Associate Discount',
      year: '2023–Present',
    },
    {
      accentColorKey: 'amber' as PortfolioProjectAccentColorKey,
      category: 'Innovation / AI',
      description:
        'Hackathon project: built a Gemini-powered AI chatbot anchored on the storefront so customers can ask policy and FAQ questions and receive concise, helpful summaries — improving self-service support on customer-facing pages.',
      id: 3,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectAiChatbot,
      stack: ['React', 'Gemini API', 'Node.js', 'Feature Flags', 'TypeScript'],
      tagline: 'Gemini-powered storefront chatbot',
      title: 'AI Storefront Chatbot',
      year: 'Hackathon',
    },
    {
      accentColorKey: 'coral' as PortfolioProjectAccentColorKey,
      category: 'Retail / POS',
      description:
        'Built React/Redux POS screens for Verizon store associates — including in-store pickup, same-day delivery, store appointments, and order lookup — with Storybook-documented components, WCAG 2.1 AA accessibility, and AWS S3/CloudFront deployment.',
      id: 4,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectVerizonPos,
      stack: ['React', 'Redux', 'TypeScript', 'Storybook', 'AWS S3', 'CloudFront'],
      tagline: 'Associate point-of-sale platform',
      title: 'Verizon POS',
      year: '2019–2021',
    },
  ],
  sectionLabel: '02 / Work',
} as const

export const PORTFOLIO_SKILLS_CONTENT = {
  categories: [
    {
      name: 'Frontend',
      skills: [
        { level: 95, name: 'React / Next.js' },
        { level: 93, name: 'TypeScript / JavaScript (ES6+)' },
        { level: 92, name: 'CSS / SCSS / Tailwind' },
        { level: 90, name: 'Accessibility (WCAG 2.1 AA)' },
      ],
    },
    {
      name: 'State & Integration',
      skills: [
        { level: 92, name: 'Redux Toolkit / Redux-Saga' },
        { level: 90, name: 'REST APIs / BFF' },
        { level: 88, name: 'GraphQL / Apollo Client' },
        { level: 85, name: 'Node.js / Express.js' },
      ],
    },
    {
      name: 'Quality & Delivery',
      skills: [
        { level: 90, name: 'Jest / React Testing Library' },
        { level: 88, name: 'Cypress / Playwright' },
        { level: 90, name: 'CI/CD (GitHub Actions / GitLab)' },
        { level: 85, name: 'AWS / Docker / Kubernetes' },
      ],
    },
  ],
  commentLabel: '// Senior Fullstack stack',
  heading: 'Core skills from production work',
  sectionLabel: '03 / Skills',
  tools: [
    'React 18',
    'Next.js',
    'TypeScript',
    'Redux Toolkit',
    'Redux-Saga',
    'GraphQL',
    'Apollo Client',
    'Node.js',
    'Express.js',
    'HTML5',
    'CSS3',
    'SASS/SCSS',
    'Tailwind CSS',
    'Storybook',
    'Figma',
    'Webpack',
    'Vite',
    'Jest',
    'React Testing Library',
    'Cypress',
    'Playwright',
    'Docker',
    'Kubernetes',
    'AWS',
    'GitHub Actions',
    'GitLab CI/CD',
    'Cursor IDE',
    'MCP',
  ],
} as const

export const PORTFOLIO_CONTACT_CONTENT = {
  footerCopyright:
    '© 2026 Vinay Kumar Moguloju · Senior Fullstack Engineer · Built with React + TypeScript',
  form: {
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about the role, project, or team...',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    submitLabel: 'Send message',
    title: 'Send a message',
  },
  headingAccent: ' Senior Fullstack teams',
  headingPrimary: "Let's connect for",
  headingSuffix: '.',
  intro:
    'I am open to Senior Fullstack engineer roles, contract work, and strong product/engineering collaborations. Based in Melissa, TX and experienced working remotely with distributed Agile teams across e-commerce, retail, and telecom.',
  sectionLabel: '04 / Contact',
  socialLinks: [
    {
      handle: PORTFOLIO_BRAND.email,
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.email,
      label: 'Email',
      profileKey: 'email',
    },
    {
      handle: PORTFOLIO_BRAND.phone,
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.phone,
      label: 'Phone',
      profileKey: 'phone',
    },
    {
      handle: PORTFOLIO_BRAND.fullName,
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.linkedIn,
      label: 'LinkedIn',
      profileKey: 'linkedIn',
    },
    {
      handle: '@vinaymoguloju',
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.github,
      label: 'GitHub',
      profileKey: 'github',
    },
  ],
  successMessage:
    "Thanks for reaching out. I'll review your message and get back to you within 24 hours.",
  successTitle: 'Message sent!',
} as const

export const PORTFOLIO_ABOUT_IMAGE_URL = PORTFOLIO_MEDIA_URLS.aboutWorkspace
