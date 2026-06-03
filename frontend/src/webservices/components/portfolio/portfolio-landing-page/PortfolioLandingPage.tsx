import { PORTFOLIO_BRAND } from '@dataservices/content/portfolioContent'
import { usePortfolioLandingPageContent } from '@/hooks/usePortfolioLandingPageContent'
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
  const { portfolioLandingPageContent } = usePortfolioLandingPageContent()
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
          availabilityLabel={portfolioLandingPageContent.availabilityBadge}
        />
        <PortfolioLandingHeadline
          displayName={PORTFOLIO_BRAND.displayName}
          headlineAccent={portfolioLandingPageContent.headlineAccent}
          headlineMuted={portfolioLandingPageContent.headlineMuted}
        />
        <PortfolioLandingIntroRow
          intro={portfolioLandingPageContent.intro}
          roleWords={portfolioLandingPageContent.roleWords}
        />
        <PortfolioLandingActionRow
          onPrimaryActionClick={() => openPortfolioSectionModal('work')}
          onSecondaryActionClick={() => openPortfolioSectionModal('contact')}
          primaryActionLabel={portfolioLandingPageContent.primaryActionLabel}
          secondaryActionLabel={portfolioLandingPageContent.secondaryActionLabel}
        />
      </LowerPortfolioContent>
    </section>
  )
}
