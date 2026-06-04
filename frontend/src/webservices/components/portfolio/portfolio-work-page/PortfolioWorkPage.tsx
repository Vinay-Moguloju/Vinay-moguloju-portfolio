import { useRef, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Code2, ExternalLink } from 'lucide-react'
import {
  resolvePortfolioProjectAccentColor,
  type PortfolioProjectAccentColorKey,
} from '@dataservices/config/portfolioDesignTokens'
import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { usePortfolioWorkContent } from '@/hooks/usePortfolioWorkContent'

const buildPortfolioProjectAccentStyle = (
  accentColorKey: PortfolioProjectAccentColorKey,
): CSSProperties =>
  ({
    '--portfolio-project-accent': resolvePortfolioProjectAccentColor(accentColorKey),
  }) as CSSProperties

/**
 * @function PortfolioWorkPage
 * @memberof webservices/components/portfolio/portfolio-work-page
 * @description Renders the portfolio projects grid section.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioWorkPage />
 */
export function PortfolioWorkPage() {
  const { portfolioWorkContent } = usePortfolioWorkContent()
  const [hoveredPortfolioProjectId, setHoveredPortfolioProjectId] = useState<number | null>(null)
  const portfolioProjectsSectionRef = useRef(null)
  const isPortfolioProjectsInView = useInView(portfolioProjectsSectionRef, {
    margin: '-80px',
    once: true,
  })

  return (
    <section id="work" className="portfolio-projects" ref={portfolioProjectsSectionRef}>
      <div className="portfolio-projects__inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isPortfolioProjectsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="portfolio-projects__header"
        >
          <span className={getPortfolioTypographyPresetClassName('sectionLabel')}>
            {portfolioWorkContent.sectionLabel}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isPortfolioProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={getPortfolioTypographyPresetClassName('sectionHeading')}
        >
          {portfolioWorkContent.heading}
        </motion.h2>

        <div className="portfolio-projects__grid">
          {portfolioWorkContent.projects.map((project, projectIndex) => {
            const isPortfolioProjectHovered = hoveredPortfolioProjectId === project.id
            const portfolioProjectCardClassName = isPortfolioProjectHovered
              ? 'portfolio-project-card portfolio-project-card--active'
              : 'portfolio-project-card'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isPortfolioProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + projectIndex * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredPortfolioProjectId(project.id)}
                onMouseLeave={() => setHoveredPortfolioProjectId(null)}
                className={portfolioProjectCardClassName}
                style={buildPortfolioProjectAccentStyle(project.accentColorKey)}
              >
                <div className="portfolio-project-card__media">
                  <img
                    alt={project.title}
                    className="portfolio-project-card__image"
                    src={project.imageUrl}
                  />
                  <div className="portfolio-project-card__overlay" />
                  <div className="portfolio-project-card__badges">
                    <span className="portfolio-project-card__category-badge">
                      {project.category}
                    </span>
                    <span className="portfolio-project-card__year-badge">{project.year}</span>
                  </div>
                </div>

                <div className="portfolio-project-card__body">
                  <h3
                    className={`${getPortfolioTypographyPresetClassName('displayHeadingMd')} portfolio-project-card__title`}
                  >
                    {project.title}
                  </h3>
                  <p className={getPortfolioTypographyPresetClassName('projectTagline')}>
                    {project.tagline}
                  </p>
                  <p className={getPortfolioTypographyPresetClassName('projectDescription')}>
                    {project.description}
                  </p>

                  <div className="portfolio-project-card__stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="portfolio-stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-project-card__actions">
                    <div className="portfolio-project-card__links">
                      <button
                        type="button"
                        className={getPortfolioTypographyPresetClassName('linkAction')}
                      >
                        <Code2 className="portfolio-icon-current" size={15} />{' '}
                        {portfolioWorkContent.actionLabels.code}
                      </button>
                      <button
                        type="button"
                        className={getPortfolioTypographyPresetClassName('linkAction')}
                      >
                        <ExternalLink className="portfolio-icon-current" size={15} />{' '}
                        {portfolioWorkContent.actionLabels.live}
                      </button>
                    </div>
                    <button
                      type="button"
                      className={getPortfolioTypographyPresetClassName('linkActionAccent')}
                    >
                      {portfolioWorkContent.actionLabels.caseStudy}{' '}
                      <ArrowRight className="portfolio-icon-current" size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
