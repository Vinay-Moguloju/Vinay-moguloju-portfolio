import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'

type PortfolioLandingActionRowProps = {
  className?: string
  onPrimaryActionClick: () => void
  onSecondaryActionClick: () => void
  primaryActionLabel: string
  secondaryActionLabel: string
}

const portfolioLandingActionRowMotion = getPortfolioMotionRevealPreset('landingActionRow')

/**
 * @function PortfolioLandingActionRow
 * @memberof webservices/components/common/PortfolioLandingActionRow
 * @description Renders the animated CTA buttons on the portfolio landing page.
 * @param {PortfolioLandingActionRowProps} props - Button labels, handlers, and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingActionRow primaryActionLabel="View my work" secondaryActionLabel="Get in touch" onPrimaryActionClick={() => {}} onSecondaryActionClick={() => {}} />
 */
export function PortfolioLandingActionRow({
  className = 'portfolio-landing-page__actions',
  onPrimaryActionClick,
  onSecondaryActionClick,
  primaryActionLabel,
  secondaryActionLabel,
}: PortfolioLandingActionRowProps) {
  return (
    <PortfolioMotionReveal
      className={className}
      delay={portfolioLandingActionRowMotion.delay}
      duration={portfolioLandingActionRowMotion.duration}
      initialY={portfolioLandingActionRowMotion.initialY}
    >
      <button
        type="button"
        onClick={onPrimaryActionClick}
        className="portfolio-button portfolio-button--primary"
      >
        {primaryActionLabel}
      </button>
      <button
        type="button"
        onClick={onSecondaryActionClick}
        className="portfolio-button portfolio-button--secondary"
      >
        {secondaryActionLabel}
      </button>
    </PortfolioMotionReveal>
  )
}
