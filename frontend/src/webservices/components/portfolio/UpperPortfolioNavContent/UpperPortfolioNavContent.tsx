import { Menu, X } from 'lucide-react'
import { PORTFOLIO_NAV_CONTACT_CTA_LABEL } from '@dataservices/content/portfolioContent'

type UpperPortfolioNavContentLink = {
  label: string
  sectionId: string
}

type UpperPortfolioNavContentProps = {
  brandLabel: string
  isMobileMenuOpen: boolean
  mobileMenuToggleLabels: {
    close: string
    open: string
  }
  onBrandClick: () => void
  onMobileMenuToggle: () => void
  onNavigate: (sectionId: string) => void
  sectionLinks: readonly UpperPortfolioNavContentLink[]
}

/**
 * @function UpperPortfolioNavContent
 * @memberof webservices/components/portfolio/UpperPortfolioNavContent
 * @description Renders the upper portfolio navbar inner layout (brand, links, CTA, mobile toggle).
 * @param {UpperPortfolioNavContentProps} props - Nav content configuration and handlers.
 * @returns {JSX.Element}
 *
 * @example
 * <UpperPortfolioNavContent
 *   brandLabel="Vinay.dev"
 *   isMobileMenuOpen={false}
 *   mobileMenuToggleLabels={{ close: 'Close menu', open: 'Open menu' }}
 *   onBrandClick={() => {}}
 *   onMobileMenuToggle={() => {}}
 *   onNavigate={() => {}}
 *   sectionLinks={[{ label: 'About', sectionId: 'about' }]}
 * />
 */
export function UpperPortfolioNavContent({
  brandLabel,
  isMobileMenuOpen,
  mobileMenuToggleLabels,
  onBrandClick,
  onMobileMenuToggle,
  onNavigate,
  sectionLinks,
}: UpperPortfolioNavContentProps) {
  return (
    <div className="portfolio-nav__bar">
      <div className="portfolio-nav__inner">
        <button type="button" onClick={onBrandClick} className="portfolio-nav-brand-button">
          {brandLabel}
        </button>

        <div className="portfolio-nav__desktop-links">
          {sectionLinks.map((link) => (
            <button
              key={link.sectionId}
              type="button"
              onClick={() => onNavigate(link.sectionId)}
              className="portfolio-nav-link-button"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen
              ? mobileMenuToggleLabels.close
              : mobileMenuToggleLabels.open
          }
          className="portfolio-nav-mobile-toggle"
          onClick={onMobileMenuToggle}
        >
          {isMobileMenuOpen ? (
            <X className="portfolio-icon-muted" size={20} />
          ) : (
            <Menu className="portfolio-icon-muted" size={20} />
          )}
        </button>
      </div>

      <button
        type="button"
        onClick={() => onNavigate('contact')}
        className="portfolio-button portfolio-button--contact-cta portfolio-nav__contact-cta"
      >
        {PORTFOLIO_NAV_CONTACT_CTA_LABEL}
      </button>
    </div>  
  )
}
