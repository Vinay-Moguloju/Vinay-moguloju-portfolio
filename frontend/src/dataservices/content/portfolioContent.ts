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
  displayName: 'Vinay Moguloju',
  email: 'hello@vinaykumar-portfolio.com',
  footerBrand: 'Vinay.dev',
  fullName: 'Vinay Kumar Moguloju',
} as const

export const PORTFOLIO_ACCESSIBILITY_LABELS = {
  home: 'Home',
  mobileMenuClose: 'Close menu',
  mobileMenuOpen: 'Open menu',
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
  availabilityBadge: 'Available for projects',
  headlineAccent: 'Builds Things',
  headlineMuted: 'That Matter.',
  intro:
    'I craft high-performance web experiences at the intersection of elegant code and thoughtful design. Focused on shipping products people love.',
  primaryActionLabel: 'View my work',
  roleWords: ['Full-Stack', 'Creative', 'Engineer'],
  secondaryActionLabel: 'Get in touch',
} as const

export const PORTFOLIO_ABOUT_CONTENT = {
  heading: 'I turn complex problems into clean, elegant solutions.',
  imageAlt: 'Developer workspace with laptop and coffee',
  paragraphs: [
    "I'm a full-stack developer who obsesses over every detail — from database query optimization to pixel-perfect animations. I believe the best software is invisible: it just works, beautifully.",
    "When I'm not shipping code, I'm contributing to open source, writing about web performance, or experimenting with generative art. I care deeply about building things that are fast, accessible, and delightful to use.",
  ],
  sectionLabel: '01 / About',
  stats: [
    { label: 'Years experience', value: '5+' },
    { label: 'Projects shipped', value: '40+' },
    { label: 'Happy clients', value: '12' },
    { label: 'Open source libs', value: '3' },
  ],
  statusChip: 'Currently: Building in public',
} as const

export const PORTFOLIO_PROJECTS_CONTENT = {
  actionLabels: {
    caseStudy: 'Case study',
    code: 'Code',
    live: 'Live',
  },
  heading: 'Selected projects',
  projects: [
    {
      accentColorKey: 'primary' as PortfolioProjectAccentColorKey,
      category: 'SaaS Product',
      description:
        'A next-gen PM tool that uses LLMs to auto-prioritize tasks, generate standup summaries, and predict blockers before they happen. Reduced planning overhead by 60% for 3,000+ teams.',
      id: 1,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectMeridian,
      stack: ['Next.js', 'TypeScript', 'OpenAI', 'Postgres', 'Redis'],
      tagline: 'AI-powered project management',
      title: 'Meridian',
      year: '2024',
    },
    {
      accentColorKey: 'purple' as PortfolioProjectAccentColorKey,
      category: 'Open Source',
      description:
        'An open-source library that brings CRDTs and operational transforms to React apps. Makes collaborative editing dead simple with a 5-line setup. 2.1k GitHub stars.',
      id: 2,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectFluxDb,
      stack: ['TypeScript', 'WebSockets', 'CRDT', 'React', 'Vite'],
      tagline: 'Real-time sync engine for React',
      title: 'FluxDB',
      year: '2024',
    },
    {
      accentColorKey: 'coral' as PortfolioProjectAccentColorKey,
      category: 'Consumer App',
      description:
        'A curated travel platform aggregating cost-of-living data, coworking spaces, visa requirements, and expat community reviews. 18k monthly active users.',
      id: 3,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectNomadAtlas,
      stack: ['React', 'Node.js', 'REST', 'MongoDB', 'Mapbox'],
      tagline: 'Digital nomad city explorer',
      title: 'Nomad Atlas',
      year: '2023',
    },
    {
      accentColorKey: 'amber' as PortfolioProjectAccentColorKey,
      category: 'Design System',
      description:
        'A production-grade React component library with 80+ accessible components, a Figma kit, and a dedicated Storybook. Powers 6 enterprise products.',
      id: 4,
      imageUrl: PORTFOLIO_MEDIA_URLS.projectSpectraUi,
      stack: ['React', 'Radix UI', 'Storybook', 'Figma', 'Changesets'],
      tagline: 'Design system & component library',
      title: 'Spectra UI',
      year: '2023',
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
        { level: 92, name: 'TypeScript' },
        { level: 90, name: 'CSS / Tailwind' },
        { level: 85, name: 'Animation / Motion' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { level: 90, name: 'Node.js / Spring Boot' },
        { level: 88, name: 'PostgreSQL' },
        { level: 83, name: 'REST APIs' },
        { level: 80, name: 'Redis / Caching' },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { level: 78, name: 'Docker / K8s' },
        { level: 85, name: 'CI/CD (GitHub Actions)' },
        { level: 82, name: 'AWS / Vercel' },
        { level: 75, name: 'Observability' },
      ],
    },
  ],
  commentLabel: '// Full stack',
  heading: 'What I work with',
  sectionLabel: '03 / Skills',
  tools: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'PostgreSQL',
    'Redis',
    'REST',
    'Prisma',
    'Docker',
    'Kubernetes',
    'AWS',
    'Vercel',
    'Figma',
    'Git',
    'Storybook',
    'Vitest',
    'Playwright',
    'WebSockets',
  ],
} as const

export const PORTFOLIO_CONTACT_CONTENT = {
  footerCopyright: '© 2026 Vinay Moguloju · Built with React + TypeScript',
  form: {
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    submitLabel: 'Send message',
    title: 'Send a message',
  },
  headingAccent: ' great',
  headingPrimary: "Let's build something",
  headingSuffix: ' together.',
  intro:
    "I'm open to freelance projects, full-time roles, and interesting collaborations. If you have an idea you'd like to explore, I'd love to hear about it.",
  sectionLabel: '04 / Contact',
  socialLinks: [
    {
      handle: '@vinaymoguloju',
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.github,
      label: 'GitHub',
      profileKey: 'github',
    },
    {
      handle: '@vinaymoguloju',
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.twitter,
      label: 'Twitter',
      profileKey: 'twitter',
    },
    {
      handle: PORTFOLIO_BRAND.displayName,
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.linkedIn,
      label: 'LinkedIn',
      profileKey: 'linkedIn',
    },
    {
      handle: PORTFOLIO_BRAND.email,
      href: PORTFOLIO_SOCIAL_PROFILE_URLS.email,
      label: 'Email',
      profileKey: 'email',
    },
  ],
  successMessage:
    "Thanks for reaching out. I'll get back to you within 24 hours.",
  successTitle: 'Message sent!',
} as const

export const PORTFOLIO_ABOUT_IMAGE_URL = PORTFOLIO_MEDIA_URLS.aboutWorkspace
