import { PORTFOLIO_ACCESSIBILITY_LABELS } from '@dataservices/content/portfolioContent'
import { usePortfolioContactContent } from '@/hooks/usePortfolioContactContent'
import { FooterPortfolioContent } from '../../common'

/**
 * @function PortfolioFooter
 * @memberof webservices/components/portfolio/PortfolioFooter
 * @description Fixed portfolio footer bar aligned with the top navigation content rail.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioFooter />
 */
export function PortfolioFooter() {
  const { portfolioContactContent } = usePortfolioContactContent()

  return (
    <footer
      aria-label={PORTFOLIO_ACCESSIBILITY_LABELS.footer}
      className="portfolio-footer portfolio-footer--bottom"
    >
      <FooterPortfolioContent copyrightLabel={portfolioContactContent.footerCopyright} />
    </footer>
  )
}
