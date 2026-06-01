import {
  PortfolioAboutPage,
  PortfolioContactPage,
  PortfolioHero,
  PortfolioNav,
  PortfolioSkillsPage,
  PortfolioWorkPage,
} from '@webservices/components/portfolio'
import { PORTFOLIO_ACCESSIBILITY_LABELS } from '@dataservices/content/portfolioContent'

/**
 * @function PortfolioSectionDivider
 * @memberof webservices/pages/home/HomePage
 * @description Renders a horizontal divider between portfolio sections.
 * @returns {JSX.Element}
 */
function PortfolioSectionDivider() {
  return (
    <div className="portfolio-section-divider-wrap">
      <div className="portfolio-section-divider" />
    </div>
  )
}

/**
 * @function HomePage
 * @memberof webservices/pages/home/HomePage
 * @description Composes the single-page portfolio layout.
 * @returns {JSX.Element}
 *
 * @example
 * <HomePage />
 */
export function HomePage() {
  return (
    <main aria-label={PORTFOLIO_ACCESSIBILITY_LABELS.home} className="portfolio-page">
      <PortfolioNav />
      <PortfolioHero />
      <PortfolioSectionDivider />
      <PortfolioAboutPage />
      <PortfolioSectionDivider />
      <PortfolioWorkPage />
      <PortfolioSectionDivider />
      <PortfolioSkillsPage />
      <PortfolioSectionDivider />
      <PortfolioContactPage />
    </main>
  )
}
