type FooterPortfolioContentProps = {
  copyrightLabel: string
}

/**
 * @function FooterPortfolioContent
 * @memberof webservices/components/common/FooterPortfolioContent
 * @description Renders the portfolio footer bar content (copyright line).
 * @param {FooterPortfolioContentProps} props - Footer text labels.
 * @returns {JSX.Element}
 *
 * @example
 * <FooterPortfolioContent
 *   copyrightLabel="Built with React + TypeScript + Vite · Tailwind CSS · SCSS · Motion · React Router · Axios · Spring Boot · Java · PostgreSQL · Flyway · Maven · Docker · GitHub Actions · GitHub Pages"
 * />
 */
export function FooterPortfolioContent({ copyrightLabel }: FooterPortfolioContentProps) {
  return (
    <div className="portfolio-footer__bar">
      <span className="portfolio-footer-meta">{copyrightLabel}</span>
    </div>
  )
}
