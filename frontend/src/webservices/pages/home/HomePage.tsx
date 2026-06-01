import {
  PortfolioAbout,
  PortfolioContact,
  PortfolioHero,
  PortfolioNav,
  PortfolioProjects,
  PortfolioSkills,
} from '@webservices/components/portfolio'

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
    <main aria-label="Home" className="portfolio-page">
      <PortfolioNav />
      <PortfolioHero />
      <PortfolioSectionDivider />
      <PortfolioAbout />
      <PortfolioSectionDivider />
      <PortfolioProjects />
      <PortfolioSectionDivider />
      <PortfolioSkills />
      <PortfolioSectionDivider />
      <PortfolioContact />
    </main>
  )
}
