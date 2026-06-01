import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'
import { StatusBadgeWrap } from '../StatusBadgeWrap'

type PortfolioLandingAvailabilityBadgeProps = {
  availabilityLabel: string
  className?: string
}

const portfolioLandingAvailabilityBadgeMotion =
  getPortfolioMotionRevealPreset('landingAvailabilityBadge')

/**
 * @function PortfolioLandingAvailabilityBadge
 * @memberof webservices/components/common/PortfolioLandingAvailabilityBadge
 * @description Renders the animated availability badge on the portfolio landing page.
 * @param {PortfolioLandingAvailabilityBadgeProps} props - Badge label and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingAvailabilityBadge availabilityLabel="Available for projects" />
 */
export function PortfolioLandingAvailabilityBadge({
  availabilityLabel,
  className = 'portfolio-landing-page__badge-wrap',
}: PortfolioLandingAvailabilityBadgeProps) {
  return (
    <PortfolioMotionReveal
      className={className}
      duration={portfolioLandingAvailabilityBadgeMotion.duration}
      initialY={portfolioLandingAvailabilityBadgeMotion.initialY}
    >
      <StatusBadgeWrap>
        <span className="portfolio-status-badge">
          <span className="portfolio-status-dot" />
          {availabilityLabel}
        </span>
      </StatusBadgeWrap>
    </PortfolioMotionReveal>
  )
}
