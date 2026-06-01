import { AnimatePresence, motion } from 'motion/react'
import { usePortfolioNavInteractions } from '@/hooks/usePortfolioNavInteractions'
import './_PortfolioNav.scss'
import { UpperPortfolioNavContent } from '../UpperPortfolioNavContent'

const PORTFOLIO_NAV_BRAND_LABEL = 'Vinay Kumar Moguloju'
const PORTFOLIO_NAV_HIRE_ME_LABEL = 'Hire me'

const portfolioNavSectionLinks = [
  { label: 'About', sectionId: 'about' },
  { label: 'Work', sectionId: 'work' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Contact', sectionId: 'contact' },
] as const

/**
 * @function PortfolioNav
 * @memberof webservices/components/portfolio/PortfolioNav
 * @description Fixed portfolio header with brand, section links, and hire-me CTA.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioNav />
 */
export function PortfolioNav() {
  const {
    isPortfolioMobileMenuOpen,
    isPortfolioNavScrolled,
    openPortfolioHomeSection,
    scrollToPortfolioNavSection,
    togglePortfolioMobileMenu,
  } = usePortfolioNavInteractions()

  const portfolioNavRootClassName = isPortfolioNavScrolled
    ? 'portfolio-nav portfolio-nav--scrolled'
    : 'portfolio-nav portfolio-nav--top'

  return (
    <>
      <nav aria-label="Portfolio" className={portfolioNavRootClassName}>
        <UpperPortfolioNavContent
          brandLabel={PORTFOLIO_NAV_BRAND_LABEL}
          isMobileMenuOpen={isPortfolioMobileMenuOpen}
          onBrandClick={openPortfolioHomeSection}
          onMobileMenuToggle={togglePortfolioMobileMenu}
          onNavigate={scrollToPortfolioNavSection}
          sectionLinks={portfolioNavSectionLinks}
        />
      </nav>

      <AnimatePresence>
        {isPortfolioMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="portfolio-nav__mobile-menu"
          >
            {portfolioNavSectionLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => scrollToPortfolioNavSection(link.sectionId)}
                className="portfolio-nav-mobile-link-button"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToPortfolioNavSection('contact')}
              className="portfolio-button portfolio-button--hire-me portfolio-nav__mobile-hire-me"
            >
              {PORTFOLIO_NAV_HIRE_ME_LABEL}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
