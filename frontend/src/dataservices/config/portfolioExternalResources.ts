/**
 * @module dataservices/config/portfolioExternalResources
 * @description Single source of truth for portfolio external URLs (APIs, fonts, media, social profiles).
 */

import portfolioAboutWorkspaceImage from '@webservices/assets/hero.png'

/** Google Fonts stylesheet used by the portfolio UI. */
export const PORTFOLIO_GOOGLE_FONTS_STYLESHEET_URL =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'

/** REST API base URL for portfolio backend integration. */
export const PORTFOLIO_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api'

/** Remote and local media URLs referenced by portfolio sections. */
export const PORTFOLIO_MEDIA_URLS = {
  aboutWorkspace: portfolioAboutWorkspaceImage,
  projectAiChatbot:
    'https://images.unsplash.com/photo-1675334758735-5f989ff8237f?w=800&h=500&fit=crop&auto=format',
  projectAssociateDiscount:
    'https://images.unsplash.com/photo-1650661926447-9efb2610f64c?w=800&h=500&fit=crop&auto=format',
  projectCustomerMfe:
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=500&fit=crop&auto=format',
  projectVerizonPos:
    'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=500&fit=crop&auto=format',
} as const

/** External profile and contact URLs for portfolio social links. */
export const PORTFOLIO_SOCIAL_PROFILE_URLS = {
  email: 'mailto:mogulojuvinaykumar@gmail.com',
  github: 'https://github.com/vinaymoguloju',
  linkedIn: 'https://www.linkedin.com/in/vinaymoguloju',
  phone: 'tel:+15712958383',
} as const
