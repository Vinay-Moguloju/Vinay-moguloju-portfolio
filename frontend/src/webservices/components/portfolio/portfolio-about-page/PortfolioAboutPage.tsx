import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { PORTFOLIO_ABOUT_IMAGE_URL } from '@dataservices/content/portfolioContent'
import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { usePortfolioAboutContent } from '@/hooks/usePortfolioAboutContent'

/**
 * @function PortfolioAboutPage
 * @memberof webservices/components/portfolio/portfolio-about-page
 * @description Renders the portfolio about section with stats and media.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioAboutPage />
 */
export function PortfolioAboutPage() {
  const { portfolioAboutContent } = usePortfolioAboutContent()
  const portfolioAboutSectionRef = useRef(null)
  const isPortfolioAboutInView = useInView(portfolioAboutSectionRef, {
    margin: '-100px',
    once: true,
  })

  return (
    <section id="about" className="portfolio-about" ref={portfolioAboutSectionRef}>
      <div className="portfolio-about__inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isPortfolioAboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="portfolio-section-header"
        >
          <span className={getPortfolioTypographyPresetClassName('sectionLabel')}>
            {portfolioAboutContent.sectionLabel}
          </span>
        </motion.div>

        <div className="portfolio-about__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2
              className={`${getPortfolioTypographyPresetClassName('displayHeadingLg')} portfolio-about__heading`}
            >
              {portfolioAboutContent.heading}
            </h2>
            <div className="portfolio-about__paragraphs">
              {portfolioAboutContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={getPortfolioTypographyPresetClassName('body')}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="portfolio-about__stats">
              {portfolioAboutContent.stats.map((stat, statIndex) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPortfolioAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + statIndex * 0.1, duration: 0.5 }}
                  className="portfolio-stat-card"
                >
                  <div className={getPortfolioTypographyPresetClassName('statValue')}>
                    {stat.value}
                  </div>
                  <div className={getPortfolioTypographyPresetClassName('statLabel')}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isPortfolioAboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="portfolio-about__media"
          >
            <div className="portfolio-about__image-wrap">
              <img
                alt={portfolioAboutContent.imageAlt}
                className="portfolio-about__image"
                src={PORTFOLIO_ABOUT_IMAGE_URL}
              />
              <div className="portfolio-about__image-overlay" />
              <div className="portfolio-about__status-wrap">
                <div className="portfolio-image-badge">
                  <span className="portfolio-status-dot portfolio-status-dot--lg" />
                  <span className={getPortfolioTypographyPresetClassName('statusChipText')}>
                    {portfolioAboutContent.statusChip}
                  </span>
                </div>
              </div>
            </div>
            <div className="portfolio-about__accent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
