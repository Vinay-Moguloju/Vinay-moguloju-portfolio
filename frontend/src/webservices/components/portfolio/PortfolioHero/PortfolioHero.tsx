import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import {
  PORTFOLIO_BRAND,
  PORTFOLIO_HERO_CONTENT,
} from '@dataservices/content/portfolioContent'
import { scrollToPortfolioSectionById, usePortfolioHeroParticleCanvas } from '@/hooks'
import { CanvasLayer, LowerPortfolioContent, RadialGlowLayer, StatusBadgeWrap } from '../../common'

/**
 * @function PortfolioHero
 * @memberof webservices/components/portfolio/PortfolioHero
 * @description Renders the portfolio hero section with animated canvas background.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioHero />
 */
export function PortfolioHero() {
  const { portfolioHeroCanvasRef } = usePortfolioHeroParticleCanvas()

  return (
    <section className="portfolio-hero">
      <CanvasLayer canvasRef={portfolioHeroCanvasRef} className="portfolio-hero__canvas" />
      <RadialGlowLayer className="portfolio-hero__glow" />

      <LowerPortfolioContent className="portfolio-hero__content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="portfolio-hero__badge-wrap"
        >
          <StatusBadgeWrap>
            <span className="portfolio-status-badge">
              <span className="portfolio-status-dot" />
              {PORTFOLIO_HERO_CONTENT.availabilityBadge}
            </span>
          </StatusBadgeWrap>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h1
            className={`${getPortfolioTypographyPresetClassName('displayHeadingXl')} portfolio-hero__title`}
          >
            {PORTFOLIO_BRAND.displayName}
            <br />
            <span className={getPortfolioTypographyPresetClassName('textAccent')}>
              {PORTFOLIO_HERO_CONTENT.headlineAccent}
            </span>
            <br />
            <span className={getPortfolioTypographyPresetClassName('textMutedSoft')}>
              {PORTFOLIO_HERO_CONTENT.headlineMuted}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="portfolio-hero__copy-row"
        >
          <p
            className={`${getPortfolioTypographyPresetClassName('bodyLg')} portfolio-hero__intro`}
          >
            {PORTFOLIO_HERO_CONTENT.intro}
          </p>

          <div className="portfolio-hero__role-list">
            {PORTFOLIO_HERO_CONTENT.roleWords.map((word, wordIndex) => (
              <span
                key={word}
                className={
                  wordIndex === 0
                    ? getPortfolioTypographyPresetClassName('monoRolePrimary')
                    : getPortfolioTypographyPresetClassName('monoRole')
                }
              >
                {word}
                {wordIndex < PORTFOLIO_HERO_CONTENT.roleWords.length - 1 && (
                  <span className="portfolio-text-mono-separator">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="portfolio-hero__actions"
        >
          <button
            type="button"
            onClick={() => scrollToPortfolioSectionById('work')}
            className="portfolio-button portfolio-button--primary"
          >
            {PORTFOLIO_HERO_CONTENT.primaryActionLabel}
          </button>
          <button
            type="button"
            onClick={() => scrollToPortfolioSectionById('contact')}
            className="portfolio-button portfolio-button--secondary"
          >
            {PORTFOLIO_HERO_CONTENT.secondaryActionLabel}
          </button>
        </motion.div>
      </LowerPortfolioContent>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="portfolio-hero__scroll-indicator"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="portfolio-icon-muted" size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
