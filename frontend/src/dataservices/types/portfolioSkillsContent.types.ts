/**
 * @module dataservices/types/portfolioSkillsContent.types
 * @description Types for GET /api/portfolio-skills-content (mirrors PORTFOLIO_SKILLS_CONTENT).
 */

export type PortfolioSkillLevel = {
  level: number
  name: string
}

export type PortfolioSkillsCategory = {
  name: string
  skills: readonly PortfolioSkillLevel[]
}

export type PortfolioSkillsContent = {
  categories: readonly PortfolioSkillsCategory[]
  commentLabel: string
  heading: string
  sectionLabel: string
  tools: readonly string[]
}
