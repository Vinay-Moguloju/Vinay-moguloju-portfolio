/**
 * @module hooks/usePortfolioNavInteractions
 * @description Tracks portfolio navbar scroll state and mobile menu visibility.
 */

import { useEffect, useState } from 'react'

const PORTFOLIO_NAV_SCROLL_THRESHOLD_PX = 40

/**
 * @function scrollToPortfolioSectionById
 * @memberof hooks/usePortfolioNavInteractions
 * @description Scrolls the page to a portfolio section by its DOM id.
 * @param {string} sectionId - Target section element id.
 * @returns {void}
 *
 * @example
 * scrollToPortfolioSectionById('about')
 */
export const scrollToPortfolioSectionById = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView()
}

/**
 * @function usePortfolioNavInteractions
 * @memberof hooks/usePortfolioNavInteractions
 * @description Manages portfolio navbar scroll styling and mobile menu open state.
 * @returns {{
 *   closePortfolioMobileMenu: () => void,
 *   isPortfolioMobileMenuOpen: boolean,
 *   isPortfolioNavScrolled: boolean,
 *   openPortfolioHomeSection: () => void,
 *   scrollToPortfolioSectionById: (sectionId: string) => void,
 *   togglePortfolioMobileMenu: () => void,
 * }}
 *
 * @example
 * const { isPortfolioNavScrolled, scrollToPortfolioSectionById } = usePortfolioNavInteractions()
 */
export function usePortfolioNavInteractions() {
  const [isPortfolioNavScrolled, setIsPortfolioNavScrolled] = useState(false)
  const [isPortfolioMobileMenuOpen, setIsPortfolioMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handlePortfolioNavScroll = () => {
      setIsPortfolioNavScrolled(window.scrollY > PORTFOLIO_NAV_SCROLL_THRESHOLD_PX)
    }

    handlePortfolioNavScroll()
    window.addEventListener('scroll', handlePortfolioNavScroll)

    return () => window.removeEventListener('scroll', handlePortfolioNavScroll)
  }, [])

  const closePortfolioMobileMenu = () => {
    setIsPortfolioMobileMenuOpen(false)
  }

  const togglePortfolioMobileMenu = () => {
    setIsPortfolioMobileMenuOpen((isMenuOpen) => !isMenuOpen)
  }

  const openPortfolioHomeSection = () => {
    window.scrollTo({ top: 0 })
    closePortfolioMobileMenu()
  }

  const scrollToPortfolioNavSection = (sectionId: string) => {
    scrollToPortfolioSectionById(sectionId)
    closePortfolioMobileMenu()
  }

  return {
    closePortfolioMobileMenu,
    isPortfolioMobileMenuOpen,
    isPortfolioNavScrolled,
    openPortfolioHomeSection,
    scrollToPortfolioNavSection,
    togglePortfolioMobileMenu,
  }
}
