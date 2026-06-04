/**
 * @module dataservices/config/portfolioApiPaths
 * @description REST path segments for portfolio backend APIs (appended to PORTFOLIO_API_BASE_URL).
 */

export const PORTFOLIO_API_PATHS = {
  portfolioAboutContent: '/portfolio-about-content',
  portfolioContactContent: '/portfolio-contact-content',
  portfolioLandingPageContent: '/portfolio-landing-page-content',
  portfolioNavContent: '/portfolio-nav-content',
  portfolioSkillsContent: '/portfolio-skills-content',
  portfolioWorkContent: '/portfolio-work-content',
} as const
