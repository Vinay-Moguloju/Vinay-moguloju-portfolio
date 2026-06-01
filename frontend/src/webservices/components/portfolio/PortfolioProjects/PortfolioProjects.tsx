import { useRef, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Code2, ExternalLink } from 'lucide-react'
import './_PortfolioProjects.scss'

const portfolioProjects = [
  {
    category: 'SaaS Product',
    color: '#c8ff57',
    description:
      'A next-gen PM tool that uses LLMs to auto-prioritize tasks, generate standup summaries, and predict blockers before they happen. Reduced planning overhead by 60% for 3,000+ teams.',
    id: 1,
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=500&fit=crop&auto=format',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Postgres', 'Redis'],
    tagline: 'AI-powered project management',
    title: 'Meridian',
    year: '2024',
  },
  {
    category: 'Open Source',
    color: '#7c6aff',
    description:
      'An open-source library that brings CRDTs and operational transforms to React apps. Makes collaborative editing dead simple with a 5-line setup. 2.1k GitHub stars.',
    id: 2,
    image:
      'https://images.unsplash.com/photo-1675334758735-5f989ff8237f?w=800&h=500&fit=crop&auto=format',
    stack: ['TypeScript', 'WebSockets', 'CRDT', 'React', 'Vite'],
    tagline: 'Real-time sync engine for React',
    title: 'FluxDB',
    year: '2024',
  },
  {
    category: 'Consumer App',
    color: '#ff6b6b',
    description:
      'A curated travel platform aggregating cost-of-living data, coworking spaces, visa requirements, and expat community reviews. 18k monthly active users.',
    id: 3,
    image:
      'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=500&fit=crop&auto=format',
    stack: ['React', 'Node.js', 'REST', 'MongoDB', 'Mapbox'],
    tagline: 'Digital nomad city explorer',
    title: 'Nomad Atlas',
    year: '2023',
  },
  {
    category: 'Design System',
    color: '#ffb347',
    description:
      'A production-grade React component library with 80+ accessible components, a Figma kit, and a dedicated Storybook. Powers 6 enterprise products.',
    id: 4,
    image:
      'https://images.unsplash.com/photo-1650661926447-9efb2610f64c?w=800&h=500&fit=crop&auto=format',
    stack: ['React', 'Radix UI', 'Storybook', 'Figma', 'Changesets'],
    tagline: 'Design system & component library',
    title: 'Spectra UI',
    year: '2023',
  },
]

const buildPortfolioProjectAccentStyle = (accentColor: string): CSSProperties =>
  ({
    '--portfolio-project-accent': accentColor,
  }) as CSSProperties

/**
 * @function PortfolioProjects
 * @memberof webservices/components/portfolio/PortfolioProjects
 * @description Renders the portfolio projects grid section.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioProjects />
 */
export function PortfolioProjects() {
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
          <span className="portfolio-section-label">02 / Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isPortfolioProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="portfolio-section-heading"
        >
          Selected projects
        </motion.h2>

        <div className="portfolio-projects__grid">
          {portfolioProjects.map((project, projectIndex) => {
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
                style={buildPortfolioProjectAccentStyle(project.color)}
              >
                <div className="portfolio-project-card__media">
                  <img
                    alt={project.title}
                    className="portfolio-project-card__image"
                    src={project.image}
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
                  <h3 className="portfolio-display-heading-md portfolio-project-card__title">
                    {project.title}
                  </h3>
                  <p className="portfolio-project-tagline">{project.tagline}</p>
                  <p className="portfolio-project-description">{project.description}</p>

                  <div className="portfolio-project-card__stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="portfolio-stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-project-card__actions">
                    <div className="portfolio-project-card__links">
                      <button type="button" className="portfolio-link-action">
                        <Code2 className="portfolio-icon-current" size={15} /> Code
                      </button>
                      <button type="button" className="portfolio-link-action">
                        <ExternalLink className="portfolio-icon-current" size={15} /> Live
                      </button>
                    </div>
                    <button type="button" className="portfolio-link-action portfolio-link-action--accent">
                      Case study <ArrowRight className="portfolio-icon-current" size={14} />
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
