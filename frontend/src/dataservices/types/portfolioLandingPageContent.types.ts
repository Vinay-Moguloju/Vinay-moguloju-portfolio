/**
 * @module dataservices/types/portfolioLandingPageContent.types
 * @description Types for GET /api/portfolio-landing-page-content (mirrors PORTFOLIO_LANDING_PAGE_CONTENT).
 */

export type PortfolioLandingPageContent = {
  availabilityBadge: string
  headlineAccent: string
  headlineMuted: string
  intro: string
  primaryActionLabel: string
  roleWords: readonly string[]
  secondaryActionLabel: string
}
