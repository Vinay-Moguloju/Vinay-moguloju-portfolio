import type { ReactNode } from 'react'
import {
  PORTFOLIO_ABOUT_CONTENT,
  PORTFOLIO_ACCESSIBILITY_LABELS,
  PORTFOLIO_CONTACT_CONTENT,
  PORTFOLIO_PROJECTS_CONTENT,
  PORTFOLIO_SKILLS_CONTENT,
} from '@dataservices/content/portfolioContent'
import type { PortfolioSectionId } from '@dataservices/content/portfolioSectionIds'
import {
  PortfolioAboutPage,
  PortfolioContactPage,
  PortfolioSkillsPage,
  PortfolioWorkPage,
} from '@webservices/components/portfolio'
import { usePortfolioSectionModal } from '@/hooks/usePortfolioSectionModal'
import { PortfolioSectionModal } from '@webservices/components/common'

const PORTFOLIO_SECTION_MODAL_CONFIG: Record<
  PortfolioSectionId,
  { content: ReactNode; title: string }
> = {
  about: {
    content: <PortfolioAboutPage />,
    title: PORTFOLIO_ABOUT_CONTENT.sectionLabel,
  },
  contact: {
    content: <PortfolioContactPage />,
    title: PORTFOLIO_CONTACT_CONTENT.sectionLabel,
  },
  skills: {
    content: <PortfolioSkillsPage />,
    title: PORTFOLIO_SKILLS_CONTENT.sectionLabel,
  },
  work: {
    content: <PortfolioWorkPage />,
    title: PORTFOLIO_PROJECTS_CONTENT.sectionLabel,
  },
}

/**
 * @function PortfolioSectionModalHost
 * @memberof webservices/pages/home/PortfolioSectionModalHost
 * @description Mounts the active portfolio section inside the shared section modal.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioSectionModalHost />
 */
export function PortfolioSectionModalHost() {
  const {
    activePortfolioSectionId,
    closePortfolioSectionModal,
    isPortfolioSectionModalOpen,
  } = usePortfolioSectionModal()

  const portfolioSectionModalConfig = activePortfolioSectionId
    ? PORTFOLIO_SECTION_MODAL_CONFIG[activePortfolioSectionId]
    : null

  return (
    <PortfolioSectionModal
      closeButtonLabel={PORTFOLIO_ACCESSIBILITY_LABELS.modalClose}
      isOpen={isPortfolioSectionModalOpen}
      onClose={closePortfolioSectionModal}
      title={portfolioSectionModalConfig?.title ?? ''}
    >
      {portfolioSectionModalConfig?.content ?? null}
    </PortfolioSectionModal>
  )
}
