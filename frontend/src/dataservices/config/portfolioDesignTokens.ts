/**
 * @module dataservices/config/portfolioDesignTokens
 * @description JavaScript mirror of portfolio design tokens for runtime styling (canvas, inline styles).
 * Font sizes, colors, and families are defined in styles/portfolioDesignTokens.css.
 */

/** RGB components for the portfolio primary accent (matches --primary). */
export const PORTFOLIO_PRIMARY_ACCENT_RGB = {
  b: 87,
  g: 255,
  r: 200,
} as const

/** Maps project accent keys to CSS custom property names. */
export const PORTFOLIO_PROJECT_ACCENT_COLOR_VARIABLES = {
  amber: '--portfolio-color-accent-amber',
  coral: '--portfolio-color-accent-coral',
  primary: '--portfolio-color-accent-primary',
  purple: '--portfolio-color-accent-purple',
} as const

export type PortfolioProjectAccentColorKey = keyof typeof PORTFOLIO_PROJECT_ACCENT_COLOR_VARIABLES

/**
 * @function resolvePortfolioProjectAccentColor
 * @memberof dataservices/config/portfolioDesignTokens
 * @description Resolves a project accent key to a CSS variable reference for inline styles.
 * @param {PortfolioProjectAccentColorKey} accentColorKey - Token key from portfolio content.
 * @returns {string} CSS variable reference usable in style objects.
 *
 * @example
 * resolvePortfolioProjectAccentColor('primary')
 */
export const resolvePortfolioProjectAccentColor = (
  accentColorKey: PortfolioProjectAccentColorKey,
): string => `var(${PORTFOLIO_PROJECT_ACCENT_COLOR_VARIABLES[accentColorKey]})`
