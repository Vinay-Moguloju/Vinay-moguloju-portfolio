import type { ReactNode } from 'react'

type LowerPortfolioContentProps = {
  children: ReactNode
  className?: string
}

/**
 * @function LowerPortfolioContent
 * @memberof webservices/components/common/LowerPortfolioContent
 * @description Wraps lower-portfolio page content in a consistent container.
 * @param {LowerPortfolioContentProps} props - Child content and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <LowerPortfolioContent>
 *   <div>...</div>
 * </LowerPortfolioContent>
 */
export function LowerPortfolioContent({ children, className = '' }: LowerPortfolioContentProps) {
  return <div className={['lower-portfolio-content', className].join(' ').trim()}>{children}</div>
}

