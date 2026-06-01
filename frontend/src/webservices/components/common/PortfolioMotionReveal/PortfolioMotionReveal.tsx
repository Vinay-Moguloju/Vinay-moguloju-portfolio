import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type PortfolioMotionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  initialX?: number
  initialY?: number
}

/**
 * @function PortfolioMotionReveal
 * @memberof webservices/components/common/PortfolioMotionReveal
 * @description Reusable fade/slide-in motion wrapper for portfolio section content.
 * @param {PortfolioMotionRevealProps} props - Children, layout class, and motion timing.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioMotionReveal className="portfolio-landing-page__badge-wrap" initialY={20} duration={0.6}>
 *   <span>Content</span>
 * </PortfolioMotionReveal>
 */
export function PortfolioMotionReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  initialX = 0,
  initialY = 0,
}: PortfolioMotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
