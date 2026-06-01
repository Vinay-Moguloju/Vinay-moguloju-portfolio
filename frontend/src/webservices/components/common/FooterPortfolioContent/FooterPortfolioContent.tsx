type FooterPortfolioContentProps = {
  brandLabel: string
  copyrightLabel: string
}

/**
 * @function FooterPortfolioContent
 * @memberof webservices/components/common/FooterPortfolioContent
 * @description Renders the portfolio footer content row (brand + copyright line).
 * @param {FooterPortfolioContentProps} props - Footer text labels.
 * @returns {JSX.Element}
 *
 * @example
 * <FooterPortfolioContent
 *   brandLabel="Vinay.dev"
 *   copyrightLabel="© 2026 Vinay Moguloju · Built with React + TypeScript"
 * />
 */
export function FooterPortfolioContent({
  brandLabel,
  copyrightLabel,
}: FooterPortfolioContentProps) {
  return (
    <div className="portfolio-footer">
      <span className="portfolio-footer-brand">{brandLabel}</span>
      <span className="portfolio-footer-meta">{copyrightLabel}</span>
    </div>
  )
}

