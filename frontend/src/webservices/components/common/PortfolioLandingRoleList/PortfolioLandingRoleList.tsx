import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'

type PortfolioLandingRoleListProps = {
  className?: string
  roleWords: readonly string[]
}

const portfolioLandingRoleListMotion = getPortfolioMotionRevealPreset('landingActionRow')

/**
 * @function PortfolioLandingRoleList
 * @memberof webservices/components/common/PortfolioLandingRoleList
 * @description Renders the animated role tags row below the landing intro copy.
 * @param {PortfolioLandingRoleListProps} props - Role words and optional wrapper className.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingRoleList roleWords={['Senior Fullstack', 'React / Next.js']} />
 */
export function PortfolioLandingRoleList({
  className = 'portfolio-landing-page__role-list',
  roleWords,
}: PortfolioLandingRoleListProps) {
  return (
    <PortfolioMotionReveal
      className={className}
      delay={portfolioLandingRoleListMotion.delay}
      duration={portfolioLandingRoleListMotion.duration}
      initialY={portfolioLandingRoleListMotion.initialY}
    >
      {roleWords.map((word, wordIndex) => (
        <span className="portfolio-landing-page__role-list-item" key={word}>
          <span className={getPortfolioTypographyPresetClassName('monoRole')}>{word}</span>
          {wordIndex < roleWords.length - 1 && (
            <span className="portfolio-text-mono-separator">·</span>
          )}
        </span>
      ))}
    </PortfolioMotionReveal>
  )
}
