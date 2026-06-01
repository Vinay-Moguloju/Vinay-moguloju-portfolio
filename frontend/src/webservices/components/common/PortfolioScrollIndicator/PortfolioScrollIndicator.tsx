import { ArrowDown } from 'lucide-react'
import { getPortfolioMotionRevealPreset } from '@dataservices/config/portfolioMotionPresets'
import { motion } from 'motion/react'
import { PortfolioMotionReveal } from '../PortfolioMotionReveal'

type PortfolioScrollIndicatorProps = {
  className?: string
}

const portfolioScrollIndicatorMotion = getPortfolioMotionRevealPreset('scrollIndicator')

/**
 * @function PortfolioScrollIndicator
 * @memberof webservices/components/common/PortfolioScrollIndicator
 * @description Renders the animated down-arrow scroll hint (positioning handled by parent styles).
 * @param {PortfolioScrollIndicatorProps} props - Optional className for layout placement.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioScrollIndicator className="portfolio-landing-page__scroll-indicator" />
 */
export function PortfolioScrollIndicator({ className = '' }: PortfolioScrollIndicatorProps) {
  return (
    <PortfolioMotionReveal
      className={className}
      delay={portfolioScrollIndicatorMotion.delay}
      duration={portfolioScrollIndicatorMotion.duration}
      initialY={portfolioScrollIndicatorMotion.initialY}
    >
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
        <ArrowDown className="portfolio-icon-muted" size={14} />
      </motion.div>
    </PortfolioMotionReveal>
  )
}
