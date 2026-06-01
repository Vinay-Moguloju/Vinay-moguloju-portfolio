import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'

type PortfolioLandingIntroRowProps = {
  className?: string
  intro: string
  roleWords: readonly string[]
}

const portfolioLandingCopyRowMotion = getPortfolioMotionRevealPreset('landingCopyRow')

/**
 * @function PortfolioLandingIntroRow
 * @memberof webservices/components/common/PortfolioLandingIntroRow
 * @description Renders the animated intro copy and role tags on the portfolio landing page.
 * @param {PortfolioLandingIntroRowProps} props - Intro text, role words, and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioLandingIntroRow intro="I craft..." roleWords={['Full-Stack', 'Creative', 'Engineer']} />
 */
export function PortfolioLandingIntroRow({
  className = 'portfolio-landing-page__copy-row',
  intro,
  roleWords,
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

      <div className="portfolio-landing-page__role-list">
        {roleWords.map((word, wordIndex) => (
          <span
            key={word}
            className={
              wordIndex === 0
                ? getPortfolioTypographyPresetClassName('monoRolePrimary')
                : getPortfolioTypographyPresetClassName('monoRole')
            }
          >
            {word}
            {wordIndex < roleWords.length - 1 && (
              <span className="portfolio-text-mono-separator">·</span>
            )}
          </span>
        ))}
      </div>
    </PortfolioMotionReveal>
  )
}
