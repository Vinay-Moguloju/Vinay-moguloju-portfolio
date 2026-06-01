import { AnimatePresence, motion } from 'motion/react'
import {
  PORTFOLIO_ACCESSIBILITY_LABELS,
  PORTFOLIO_BRAND,
  PORTFOLIO_NAV_CONTENT,
} from '@dataservices/content/portfolioContent'
import { usePortfolioNavInteractions } from '@/hooks/usePortfolioNavInteractions'
import { UpperPortfolioNavContent } from '../UpperPortfolioNavContent'

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
      <nav aria-label={PORTFOLIO_ACCESSIBILITY_LABELS.nav} className={portfolioNavRootClassName}>
        <UpperPortfolioNavContent
          brandLabel={PORTFOLIO_BRAND.fullName}
          hireMeLabel={PORTFOLIO_NAV_CONTENT.hireMeLabel}
          isMobileMenuOpen={isPortfolioMobileMenuOpen}
          mobileMenuToggleLabels={{
            close: PORTFOLIO_ACCESSIBILITY_LABELS.mobileMenuClose,
            open: PORTFOLIO_ACCESSIBILITY_LABELS.mobileMenuOpen,
          }}
          onBrandClick={openPortfolioHomeSection}
          onMobileMenuToggle={togglePortfolioMobileMenu}
          onNavigate={scrollToPortfolioNavSection}
          sectionLinks={PORTFOLIO_NAV_CONTENT.sectionLinks}
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
            {PORTFOLIO_NAV_CONTENT.sectionLinks.map((link) => (
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
              {PORTFOLIO_NAV_CONTENT.hireMeLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
