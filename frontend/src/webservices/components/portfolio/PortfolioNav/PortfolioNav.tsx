import { AnimatePresence, motion } from 'motion/react'
import {
  PORTFOLIO_ACCESSIBILITY_LABELS,
  PORTFOLIO_NAV_CONTACT_CTA_LABEL,
} from '@dataservices/content/portfolioContent'
import { usePortfolioNavContent } from '@/hooks/usePortfolioNavContent'
import { usePortfolioNavInteractions } from '@/hooks/usePortfolioNavInteractions'
import { UpperPortfolioNavContent } from '../UpperPortfolioNavContent'

/**
 * @function PortfolioNav
 * @memberof webservices/components/portfolio/PortfolioNav
 * @description Fixed portfolio header with brand, section links, and contact CTA.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioNav />
 */
export function PortfolioNav() {
  const { portfolioNavContent } = usePortfolioNavContent()
  const {
    isPortfolioMobileMenuOpen,
    openPortfolioHomeSection,
    openPortfolioNavSectionModal,
    togglePortfolioMobileMenu,
  } = usePortfolioNavInteractions()

  return (
    <>
      <nav
        aria-label={PORTFOLIO_ACCESSIBILITY_LABELS.nav}
        className="portfolio-nav portfolio-nav--top"
      >
        <UpperPortfolioNavContent
          brandLabel={portfolioNavContent.navBrandName}
          isMobileMenuOpen={isPortfolioMobileMenuOpen}
          mobileMenuToggleLabels={{
            close: PORTFOLIO_ACCESSIBILITY_LABELS.mobileMenuClose,
            open: PORTFOLIO_ACCESSIBILITY_LABELS.mobileMenuOpen,
          }}
          onBrandClick={openPortfolioHomeSection}
          onMobileMenuToggle={togglePortfolioMobileMenu}
          onNavigate={openPortfolioNavSectionModal}
          sectionLinks={portfolioNavContent.sectionLinks}
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
            {portfolioNavContent.sectionLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => openPortfolioNavSectionModal(link.sectionId)}
                className="portfolio-nav-mobile-link-button"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => openPortfolioNavSectionModal('contact')}
              className="portfolio-button portfolio-button--contact-cta portfolio-nav__mobile-contact-cta"
            >
              {PORTFOLIO_NAV_CONTACT_CTA_LABEL}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
