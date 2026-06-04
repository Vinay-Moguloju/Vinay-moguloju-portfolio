import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import { usePortfolioSkillsContent } from '@/hooks/usePortfolioSkillsContent'

/**
 * @function PortfolioSkillsPage
 * @memberof webservices/components/portfolio/portfolio-skills-page
 * @description Renders the portfolio skills section with progress bars and tool tags.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioSkillsPage />
 */
export function PortfolioSkillsPage() {
  const { portfolioSkillsContent } = usePortfolioSkillsContent()
  const portfolioSkillsSectionRef = useRef(null)
  const isPortfolioSkillsInView = useInView(portfolioSkillsSectionRef, {
    margin: '-80px',
    once: true,
  })

  return (
    <section id="skills" className="portfolio-skills" ref={portfolioSkillsSectionRef}>
      <div className="portfolio-skills__inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isPortfolioSkillsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="portfolio-skills__header"
        >
          <span className={getPortfolioTypographyPresetClassName('sectionLabel')}>
            {portfolioSkillsContent.sectionLabel}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isPortfolioSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={getPortfolioTypographyPresetClassName('sectionHeading')}
        >
          {portfolioSkillsContent.heading}
        </motion.h2>

        <div className="portfolio-skills__grid">
          {portfolioSkillsContent.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isPortfolioSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + categoryIndex * 0.1, duration: 0.6 }}
              className="portfolio-skill-card"
            >
              <h3 className={getPortfolioTypographyPresetClassName('skillCategoryTitle')}>
                {category.name}
              </h3>
              <div className="portfolio-skill-bar-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="portfolio-skill-bar-header">
                      <span className={getPortfolioTypographyPresetClassName('skillName')}>
                        {skill.name}
                      </span>
                      <span className={getPortfolioTypographyPresetClassName('skillPercent')}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="portfolio-skill-bar-track">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isPortfolioSkillsInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.9,
                          ease: 'easeOut',
                        }}
                        className="portfolio-skill-bar-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isPortfolioSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className={getPortfolioTypographyPresetClassName('commentLabel')}>
            {portfolioSkillsContent.commentLabel}
          </p>
          <div className="portfolio-tag-list">
            {portfolioSkillsContent.tools.map((tool, toolIndex) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isPortfolioSkillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + toolIndex * 0.03, duration: 0.3 }}
                className="portfolio-tech-tag"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
