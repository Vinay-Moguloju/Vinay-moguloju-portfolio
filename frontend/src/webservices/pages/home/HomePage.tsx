import { PortfolioSectionModalProvider } from '@/hooks/usePortfolioSectionModal'
import { PortfolioLandingPage, PortfolioNav } from '@webservices/components/portfolio'
import { PORTFOLIO_ACCESSIBILITY_LABELS } from '@dataservices/content/portfolioContent'
import { PortfolioSectionModalHost } from './PortfolioSectionModalHost'

/**
 * @function HomePage
 * @memberof webservices/pages/home/HomePage
 * @description Composes the non-scrollable portfolio landing layout with section modals.
 * @returns {JSX.Element}
 *
 * @example
 * <HomePage />
 */
export function HomePage() {
  return (
    <PortfolioSectionModalProvider>
      <main aria-label={PORTFOLIO_ACCESSIBILITY_LABELS.home} className="portfolio-page">
        <PortfolioNav />
        <PortfolioLandingPage />
        <PortfolioSectionModalHost />
      </main>
    </PortfolioSectionModalProvider>
  )
}
