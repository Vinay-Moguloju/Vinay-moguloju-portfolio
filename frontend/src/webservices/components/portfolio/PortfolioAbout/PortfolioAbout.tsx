import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import './_PortfolioAbout.scss'

const portfolioAboutStats = [
  { label: 'Years experience', value: '5+' },
  { label: 'Projects shipped', value: '40+' },
  { label: 'Happy clients', value: '12' },
  { label: 'Open source libs', value: '3' },
]

/**
 * @function PortfolioAbout
 * @memberof webservices/components/portfolio/PortfolioAbout
 * @description Renders the portfolio about section with stats and media.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioAbout />
 */
export function PortfolioAbout() {
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
          <span className="portfolio-section-label">01 / About</span>
        </motion.div>

        <div className="portfolio-about__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="portfolio-display-heading-lg portfolio-about__heading">
              I turn complex problems into clean, elegant solutions.
            </h2>
            <div className="portfolio-about__paragraphs">
              <p className="portfolio-text-body">
                I&apos;m a full-stack developer who obsesses over every detail — from database query
                optimization to pixel-perfect animations. I believe the best software is invisible:
                it just works, beautifully.
              </p>
              <p className="portfolio-text-body">
                When I&apos;m not shipping code, I&apos;m contributing to open source, writing about
                web performance, or experimenting with generative art. I care deeply about building
                things that are fast, accessible, and delightful to use.
              </p>
            </div>

            <div className="portfolio-about__stats">
              {portfolioAboutStats.map((stat, statIndex) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPortfolioAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + statIndex * 0.1, duration: 0.5 }}
                  className="portfolio-stat-card"
                >
                  <div className="portfolio-stat-value">{stat.value}</div>
                  <div className="portfolio-stat-label">{stat.label}</div>
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
                alt="Developer workspace with laptop and coffee"
                className="portfolio-about__image"
                src="https://images.unsplash.com/photo-1520583457224-aee11bad5112?w=800&h=900&fit=crop&auto=format"
              />
              <div className="portfolio-about__image-overlay" />
              <div className="portfolio-about__status-wrap">
                <div className="portfolio-image-badge">
                  <span className="portfolio-status-dot portfolio-status-dot--lg" />
                  <span className="portfolio-status-chip-text">Currently: Building in public</span>
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
