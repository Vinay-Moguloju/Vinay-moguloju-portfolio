import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { scrollToPortfolioSectionById, usePortfolioHeroParticleCanvas } from '@/hooks'
import './_PortfolioHero.scss'
import { CanvasLayer, LowerPortfolioContent, RadialGlowLayer, StatusBadgeWrap } from '../../common'

const portfolioHeroRoleWords = ['Full-Stack', 'Creative', 'Engineer']

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
              Available for projects
            </span>
          </StatusBadgeWrap>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h1 className="portfolio-display-heading-xl portfolio-hero__title">
            Vinay Moguloju
            <br />
            <span className="portfolio-text-accent">Builds Things</span>
            <br />
            <span className="portfolio-text-muted-soft">That Matter.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="portfolio-hero__copy-row"
        >
          <p className="portfolio-text-body-lg portfolio-hero__intro">
            I craft high-performance web experiences at the intersection of elegant code and
            thoughtful design. Focused on shipping products people love.
          </p>

          <div className="portfolio-hero__role-list">
            {portfolioHeroRoleWords.map((word, wordIndex) => (
              <span
                key={word}
                className={
                  wordIndex === 0
                    ? 'portfolio-text-mono-role portfolio-text-mono-role--primary'
                    : 'portfolio-text-mono-role'
                }
              >
                {word}
                {wordIndex < portfolioHeroRoleWords.length - 1 && (
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
            View my work
          </button>
          <button
            type="button"
            onClick={() => scrollToPortfolioSectionById('contact')}
            className="portfolio-button portfolio-button--secondary"
          >
            Get in touch
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
