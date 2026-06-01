import {
  PORTFOLIO_BRAND,
  PORTFOLIO_LANDING_PAGE_CONTENT,
} from '@dataservices/content/portfolioContent'
import {
  scrollToPortfolioSectionById,
  usePortfolioLandingPageParticleCanvas,
} from '@/hooks'
import {
  CanvasLayer,
  LowerPortfolioContent,
  PortfolioLandingActionRow,
  PortfolioLandingAvailabilityBadge,
  PortfolioLandingHeadline,
  PortfolioLandingIntroRow,
  PortfolioScrollIndicator,
  RadialGlowLayer,
} from '../../common'

/**
 * @function PortfolioLandingPage
 * @memberof webservices/components/portfolio/portfolio-landing-page
 * @description Renders the portfolio landing page with animated canvas background and section CTAs.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingPage />
 */
export function PortfolioLandingPage() {
  const { portfolioLandingPageCanvasRef } = usePortfolioLandingPageParticleCanvas()

  return (
    <section className="portfolio-landing-page">
      <CanvasLayer
        canvasRef={portfolioLandingPageCanvasRef}
        className="portfolio-landing-page__canvas"
      />
      <RadialGlowLayer className="portfolio-landing-page__glow" />

      <LowerPortfolioContent className="portfolio-landing-page__content">
        <PortfolioLandingAvailabilityBadge
          availabilityLabel={PORTFOLIO_LANDING_PAGE_CONTENT.availabilityBadge}
        />
        <PortfolioLandingHeadline
          displayName={PORTFOLIO_BRAND.displayName}
          headlineAccent={PORTFOLIO_LANDING_PAGE_CONTENT.headlineAccent}
          headlineMuted={PORTFOLIO_LANDING_PAGE_CONTENT.headlineMuted}
        />
        <PortfolioLandingIntroRow
          intro={PORTFOLIO_LANDING_PAGE_CONTENT.intro}
          roleWords={PORTFOLIO_LANDING_PAGE_CONTENT.roleWords}
        />
        <PortfolioLandingActionRow
          onPrimaryActionClick={() => scrollToPortfolioSectionById('work')}
          onSecondaryActionClick={() => scrollToPortfolioSectionById('contact')}
          primaryActionLabel={PORTFOLIO_LANDING_PAGE_CONTENT.primaryActionLabel}
          secondaryActionLabel={PORTFOLIO_LANDING_PAGE_CONTENT.secondaryActionLabel}
        />
      </LowerPortfolioContent>

      <PortfolioScrollIndicator className="portfolio-landing-page__scroll-indicator" />
    </section>
  )
}
