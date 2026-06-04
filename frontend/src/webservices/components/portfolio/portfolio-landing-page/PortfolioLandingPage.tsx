import { usePortfolioLandingPageContent } from '@/hooks/usePortfolioLandingPageContent'
import { usePortfolioLandingPageParticleCanvas } from '@/hooks/usePortfolioLandingPageParticleCanvas'
import {
  CanvasLayer,
  LowerPortfolioContent,
  PortfolioLandingAvailabilityBadge,
  PortfolioLandingHeadline,
  PortfolioLandingIntroRow,
  PortfolioLandingRoleList,
  RadialGlowLayer,
} from '../../common'

/**
 * @function PortfolioLandingPage
 * @memberof webservices/components/portfolio/portfolio-landing-page
 * @description Renders the portfolio landing page with animated canvas background and hero copy.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingPage />
 */
export function PortfolioLandingPage() {
  const { portfolioLandingPageContent } = usePortfolioLandingPageContent()
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
          availabilityLabel={portfolioLandingPageContent.availabilityBadge}
        />
        <PortfolioLandingHeadline
          displayName={portfolioLandingPageContent.headlineDisplayName}
          headlineAccent={portfolioLandingPageContent.headlineAccent}
          headlineMuted={portfolioLandingPageContent.headlineMuted}
        />
        <PortfolioLandingIntroRow intro={portfolioLandingPageContent.intro} />
        <PortfolioLandingRoleList roleWords={portfolioLandingPageContent.roleWords} />
      </LowerPortfolioContent>
    </section>
  )
}
