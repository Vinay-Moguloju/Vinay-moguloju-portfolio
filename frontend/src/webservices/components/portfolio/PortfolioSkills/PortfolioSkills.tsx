import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import './_PortfolioSkills.scss'

const portfolioSkillCategories = [
  {
    name: 'Frontend',
    skills: [
      { level: 95, name: 'React / Next.js' },
      { level: 92, name: 'TypeScript' },
      { level: 90, name: 'CSS / Tailwind' },
      { level: 85, name: 'Animation / Motion' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { level: 90, name: 'Node.js / Spring Boot' },
      { level: 88, name: 'PostgreSQL' },
      { level: 83, name: 'REST APIs' },
      { level: 80, name: 'Redis / Caching' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { level: 78, name: 'Docker / K8s' },
      { level: 85, name: 'CI/CD (GitHub Actions)' },
      { level: 82, name: 'AWS / Vercel' },
      { level: 75, name: 'Observability' },
    ],
  },
]

const portfolioSkillTools = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Spring Boot',
  'PostgreSQL',
  'Redis',
  'REST',
  'Prisma',
  'Docker',
  'Kubernetes',
  'AWS',
  'Vercel',
  'Figma',
  'Git',
  'Storybook',
  'Vitest',
  'Playwright',
  'WebSockets',
]

/**
 * @function PortfolioSkills
 * @memberof webservices/components/portfolio/PortfolioSkills
 * @description Renders the portfolio skills section with progress bars and tool tags.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioSkills />
 */
export function PortfolioSkills() {
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
          <span className="portfolio-section-label">03 / Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isPortfolioSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="portfolio-section-heading"
        >
          What I work with
        </motion.h2>

        <div className="portfolio-skills__grid">
          {portfolioSkillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isPortfolioSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + categoryIndex * 0.1, duration: 0.6 }}
              className="portfolio-skill-card"
            >
              <h3 className="portfolio-skill-category-title">{category.name}</h3>
              <div className="portfolio-skill-bar-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="portfolio-skill-bar-header">
                      <span className="portfolio-skill-name">{skill.name}</span>
                      <span className="portfolio-skill-percent">{skill.level}%</span>
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
          <p className="portfolio-comment-label">// Full stack</p>
          <div className="portfolio-tag-list">
            {portfolioSkillTools.map((tool, toolIndex) => (
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
