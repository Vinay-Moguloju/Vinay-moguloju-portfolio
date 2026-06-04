/**
 * @module dataservices/types/portfolioNavContent.types
 * @description Types for GET /api/portfolio-nav-content (mirrors PORTFOLIO_NAV_CONTENT).
 */

export type PortfolioNavSectionLink = {
  label: string
  sectionId: string
}

export type PortfolioNavContent = {
  navBrandName: string
  sectionLinks: readonly PortfolioNavSectionLink[]
}
