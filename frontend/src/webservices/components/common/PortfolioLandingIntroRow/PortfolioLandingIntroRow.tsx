import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'

type PortfolioLandingIntroRowProps = {
  className?: string
  intro: string
}

const portfolioLandingCopyRowMotion = getPortfolioMotionRevealPreset('landingCopyRow')

/**
 * @function PortfolioLandingIntroRow
 * @memberof webservices/components/common/PortfolioLandingIntroRow
 * @description Renders the animated intro copy on the portfolio landing page.
 * @param {PortfolioLandingIntroRowProps} props - Intro text and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingIntroRow intro="I craft..." />
 */
export function PortfolioLandingIntroRow({
  className = 'portfolio-landing-page__copy-row',
  intro,
}: PortfolioLandingIntroRowProps) {
  return (
    <PortfolioMotionReveal
      className={className}
      delay={portfolioLandingCopyRowMotion.delay}
      duration={portfolioLandingCopyRowMotion.duration}
      initialY={portfolioLandingCopyRowMotion.initialY}
    >
      <p className={`${getPortfolioTypographyPresetClassName('bodyLg')} portfolio-landing-page__intro`}>
        {intro}
      </p>
    </PortfolioMotionReveal>
  )
}
