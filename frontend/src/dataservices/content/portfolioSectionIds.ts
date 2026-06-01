/**
 * @module dataservices/content/portfolioSectionIds
 * @description Portfolio section identifiers used for navigation and modal routing.
 */

export const PORTFOLIO_SECTION_IDS = ['about', 'work', 'skills', 'contact'] as const

export type PortfolioSectionId = (typeof PORTFOLIO_SECTION_IDS)[number]

/**
 * @function isPortfolioSectionId
 * @memberof dataservices/content/portfolioSectionIds
 * @description Validates whether a string is a supported portfolio section id.
 * @param {string} sectionId - Candidate section id.
 * @returns {sectionId is PortfolioSectionId} True when the id is supported.
 *
 * @example
 * isPortfolioSectionId('about')
 */
export const isPortfolioSectionId = (sectionId: string): sectionId is PortfolioSectionId =>
  PORTFOLIO_SECTION_IDS.includes(sectionId as PortfolioSectionId)
