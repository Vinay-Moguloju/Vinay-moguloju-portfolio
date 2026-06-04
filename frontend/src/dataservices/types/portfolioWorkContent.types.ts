/**
 * @module dataservices/types/portfolioWorkContent.types
 * @description Types for GET /api/portfolio-work-content (mirrors PORTFOLIO_PROJECTS_CONTENT).
 */

import type { PortfolioProjectAccentColorKey } from '@dataservices/config/portfolioDesignTokens'

export type PortfolioWorkActionLabels = {
  caseStudy: string
  code: string
  live: string
}

export type PortfolioWorkProject = {
  accentColorKey: PortfolioProjectAccentColorKey
  category: string
  description: string
  id: number
  imageUrl: string
  stack: readonly string[]
  tagline: string
  title: string
  year: string
}

export type PortfolioWorkContent = {
  actionLabels: PortfolioWorkActionLabels
  heading: string
  projects: readonly PortfolioWorkProject[]
  sectionLabel: string
}
