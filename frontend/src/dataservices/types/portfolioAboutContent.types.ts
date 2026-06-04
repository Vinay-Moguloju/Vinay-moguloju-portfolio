/**
 * @module dataservices/types/portfolioAboutContent.types
 * @description Types for GET /api/portfolio-about-content (mirrors PORTFOLIO_ABOUT_CONTENT).
 */

export type PortfolioAboutStat = {
  label: string
  value: string
}

export type PortfolioAboutContent = {
  heading: string
  imageAlt: string
  paragraphs: readonly string[]
  sectionLabel: string
  stats: readonly PortfolioAboutStat[]
  statusChip: string
}
