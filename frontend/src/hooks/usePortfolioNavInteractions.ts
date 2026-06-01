/**
 * @module hooks/usePortfolioNavInteractions
 * @description Tracks portfolio navbar mobile menu visibility and section modal navigation.
 */

import { useState } from 'react'
import {
  openPortfolioSectionModalById,
  usePortfolioSectionModal,
} from './usePortfolioSectionModal'

/**
 * @function usePortfolioNavInteractions
 * @memberof hooks/usePortfolioNavInteractions
 * @description Manages portfolio navbar mobile menu state and section modal navigation.
 * @returns {{
 *   closePortfolioMobileMenu: () => void,
 *   isPortfolioMobileMenuOpen: boolean,
 *   openPortfolioHomeSection: () => void,
 *   openPortfolioNavSectionModal: (sectionId: string) => void,
 *   togglePortfolioMobileMenu: () => void,
 * }}
 *
 * @example
 * const { openPortfolioNavSectionModal } = usePortfolioNavInteractions()
 */
export function usePortfolioNavInteractions() {
  const [isPortfolioMobileMenuOpen, setIsPortfolioMobileMenuOpen] = useState(false)
  const { closePortfolioSectionModal, openPortfolioSectionModal } = usePortfolioSectionModal()

  const closePortfolioMobileMenu = () => {
    setIsPortfolioMobileMenuOpen(false)
  }

  const togglePortfolioMobileMenu = () => {
    setIsPortfolioMobileMenuOpen((isMenuOpen) => !isMenuOpen)
  }

  const openPortfolioHomeSection = () => {
    closePortfolioSectionModal()
    closePortfolioMobileMenu()
  }

  const openPortfolioNavSectionModal = (sectionId: string) => {
    openPortfolioSectionModalById(sectionId, openPortfolioSectionModal)
    closePortfolioMobileMenu()
  }

  return {
    closePortfolioMobileMenu,
    isPortfolioMobileMenuOpen,
    openPortfolioHomeSection,
    openPortfolioNavSectionModal,
    togglePortfolioMobileMenu,
  }
}
