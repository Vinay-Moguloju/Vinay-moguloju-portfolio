/**
 * @module dataservices/types/portfolioContactContent.types
 * @description Types for GET /api/portfolio-contact-content (mirrors PORTFOLIO_CONTACT_CONTENT).
 */

export type PortfolioContactFormFields = {
  emailLabel: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  nameLabel: string
  namePlaceholder: string
  submitLabel: string
  title: string
}

export type PortfolioContactProfileKey = 'email' | 'github' | 'linkedIn' | 'phone'

export type PortfolioContactSocialLink = {
  handle: string
  href: string
  label: string
  profileKey: PortfolioContactProfileKey
}

export type PortfolioContactContent = {
  footerCopyright: string
  form: PortfolioContactFormFields
  headingAccent: string
  headingPrimary: string
  headingSuffix: string
  intro: string
  sectionLabel: string
  socialLinks: readonly PortfolioContactSocialLink[]
  successMessage: string
  successTitle: string
}
