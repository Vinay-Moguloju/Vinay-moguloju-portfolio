/**
 * @module dataservices/config/portfolioTypographyPresets
 * @description Maps semantic typography preset names to CSS class names.
 * Sizes, colors, and font families live in styles/portfolioDesignTokens.css.
 */

export const PORTFOLIO_TYPOGRAPHY_PRESET_CLASS_NAMES = {
  body: 'portfolio-text-body',
  bodyLg: 'portfolio-text-body-lg',
  commentLabel: 'portfolio-comment-label',
  displayHeadingLg: 'portfolio-display-heading-lg',
  displayHeadingMd: 'portfolio-display-heading-md',
  displayHeadingXl: 'portfolio-display-heading-xl',
  footerMeta: 'portfolio-footer-meta',
  formLabel: 'portfolio-form-label',
  formSuccessCopy: 'portfolio-form-success-copy',
  formSuccessTitle: 'portfolio-form-success-title',
  formTitle: 'portfolio-form-title',
  linkAction: 'portfolio-link-action',
  linkActionAccent: 'portfolio-link-action portfolio-link-action--accent',
  monoRole: 'portfolio-text-mono-role',
  monoRolePrimary: 'portfolio-text-mono-role portfolio-text-mono-role--primary',
  projectDescription: 'portfolio-project-description',
  projectTagline: 'portfolio-project-tagline',
  sectionHeading: 'portfolio-section-heading',
  sectionLabel: 'portfolio-section-label',
  skillCategoryTitle: 'portfolio-skill-category-title',
  skillName: 'portfolio-skill-name',
  skillPercent: 'portfolio-skill-percent',
  socialHandle: 'portfolio-social-handle',
  socialLabel: 'portfolio-social-label',
  statLabel: 'portfolio-stat-label',
  statValue: 'portfolio-stat-value',
  statusChipText: 'portfolio-status-chip-text',
  textAccent: 'portfolio-text-accent',
  textMutedSoft: 'portfolio-text-muted-soft',
} as const

export type PortfolioTypographyPresetName = keyof typeof PORTFOLIO_TYPOGRAPHY_PRESET_CLASS_NAMES

/**
 * @function getPortfolioTypographyPresetClassName
 * @memberof dataservices/config/portfolioTypographyPresets
 * @description Returns the CSS class name for a named typography preset.
 * @param {PortfolioTypographyPresetName} presetName - Semantic preset identifier.
 * @returns {string} CSS class string to apply in JSX.
 *
 * @example
 * getPortfolioTypographyPresetClassName('displayHeadingXl')
 */
export const getPortfolioTypographyPresetClassName = (
  presetName: PortfolioTypographyPresetName,
): string => PORTFOLIO_TYPOGRAPHY_PRESET_CLASS_NAMES[presetName]
