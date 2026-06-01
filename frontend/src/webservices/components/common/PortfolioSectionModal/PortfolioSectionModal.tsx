import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'

type PortfolioSectionModalProps = {
  children: ReactNode
  closeButtonLabel: string
  isOpen: boolean
  onClose: () => void
  title: string
}

/**
 * @function PortfolioSectionModal
 * @memberof webservices/components/common/PortfolioSectionModal
 * @description Renders a fullscreen portfolio section modal with animated entrance and scrollable body.
 * @param {PortfolioSectionModalProps} props - Modal visibility, title, content, and close handler.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioSectionModal isOpen title="01 / About" onClose={() => {}} closeButtonLabel="Close section">
 *   <PortfolioAboutPage />
 * </PortfolioSectionModal>
 */
export function PortfolioSectionModal({
  children,
  closeButtonLabel,
  isOpen,
  onClose,
  title,
}: PortfolioSectionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          aria-labelledby="portfolio-section-modal-title"
          aria-modal="true"
          className="portfolio-section-modal"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
        >
          <motion.button
            animate={{ opacity: 1 }}
            aria-hidden="true"
            className="portfolio-section-modal__backdrop"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            tabIndex={-1}
            type="button"
          />

          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="portfolio-section-modal__panel"
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portfolio-section-modal__header">
              <h2
                className="portfolio-section-modal__title"
                id="portfolio-section-modal-title"
              >
                {title}
              </h2>
              <button
                aria-label={closeButtonLabel}
                className="portfolio-section-modal__close-button"
                onClick={onClose}
                type="button"
              >
                <X className="portfolio-icon-current" size={20} />
              </button>
            </div>

            <div className="portfolio-section-modal__body">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
