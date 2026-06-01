import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'

type PortfolioLandingHeadlineProps = {
  displayName: string
  headlineAccent: string
  headlineMuted: string
  titleClassName?: string
}

const portfolioLandingHeadlineMotion = getPortfolioMotionRevealPreset('landingHeadline')

/**
 * @function PortfolioLandingHeadline
 * @memberof webservices/components/common/PortfolioLandingHeadline
 * @description Renders the animated primary headline on the portfolio landing page.
 * @param {PortfolioLandingHeadlineProps} props - Headline copy and optional title className.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingHeadline displayName="Vinay Moguloju" headlineAccent="Builds Things" headlineMuted="That Matter." />
 */
export function PortfolioLandingHeadline({
  displayName,
  headlineAccent,
  headlineMuted,
  titleClassName = 'portfolio-landing-page__title',
}: PortfolioLandingHeadlineProps) {
  return (
    <PortfolioMotionReveal
      delay={portfolioLandingHeadlineMotion.delay}
      duration={portfolioLandingHeadlineMotion.duration}
      initialY={portfolioLandingHeadlineMotion.initialY}
    >
      <h1
        className={`${getPortfolioTypographyPresetClassName('displayHeadingXl')} ${titleClassName}`}
      >
        {displayName}
        <br />
        <span className={getPortfolioTypographyPresetClassName('textAccent')}>
          {headlineAccent}
        </span>
        <br />
        <span className={getPortfolioTypographyPresetClassName('textMutedSoft')}>
          {headlineMuted}
        </span>
      </h1>
    </PortfolioMotionReveal>
  )
}
