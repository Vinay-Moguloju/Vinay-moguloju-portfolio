import {
  PORTFOLIO_BRAND,
  PORTFOLIO_LANDING_PAGE_CONTENT,
} from '@dataservices/content/portfolioContent'
import { usePortfolioLandingPageParticleCanvas } from '@/hooks/usePortfolioLandingPageParticleCanvas'
import { usePortfolioSectionModal } from '@/hooks/usePortfolioSectionModal'
import {
  CanvasLayer,
  LowerPortfolioContent,
  PortfolioLandingActionRow,
  PortfolioLandingAvailabilityBadge,
  PortfolioLandingHeadline,
  PortfolioLandingIntroRow,
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
  const { openPortfolioSectionModal } = usePortfolioSectionModal()

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
          onPrimaryActionClick={() => openPortfolioSectionModal('work')}
          onSecondaryActionClick={() => openPortfolioSectionModal('contact')}
          primaryActionLabel={PORTFOLIO_LANDING_PAGE_CONTENT.primaryActionLabel}
          secondaryActionLabel={PORTFOLIO_LANDING_PAGE_CONTENT.secondaryActionLabel}
        />
      </LowerPortfolioContent>
    </section>
  )
}
