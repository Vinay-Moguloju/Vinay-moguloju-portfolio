import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { PortfolioSectionId } from '@dataservices/content/portfolioSectionIds'
import { isPortfolioSectionId } from '@dataservices/content/portfolioSectionIds'

type PortfolioSectionModalContextValue = {
  activePortfolioSectionId: PortfolioSectionId | null
  closePortfolioSectionModal: () => void
  isPortfolioSectionModalOpen: boolean
  openPortfolioSectionModal: (sectionId: PortfolioSectionId) => void
}

const PortfolioSectionModalContext = createContext<PortfolioSectionModalContextValue | null>(null)

type PortfolioSectionModalProviderProps = {
  children: ReactNode
}

/**
 * @function PortfolioSectionModalProvider
 * @memberof hooks/usePortfolioSectionModal
 * @description Provides portfolio section modal open/close state to descendant components.
 * @param {PortfolioSectionModalProviderProps} props - Child tree to wrap.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioSectionModalProvider><HomePage /></PortfolioSectionModalProvider>
 */
export function PortfolioSectionModalProvider({ children }: PortfolioSectionModalProviderProps) {
  const [activePortfolioSectionId, setActivePortfolioSectionId] =
    useState<PortfolioSectionId | null>(null)

  const openPortfolioSectionModal = useCallback((sectionId: PortfolioSectionId) => {
    setActivePortfolioSectionId(sectionId)
  }, [])

  const closePortfolioSectionModal = useCallback(() => {
    setActivePortfolioSectionId(null)
  }, [])

  useEffect(() => {
    if (!activePortfolioSectionId) return

    const handlePortfolioSectionModalEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePortfolioSectionModal()
      }
    }

    window.addEventListener('keydown', handlePortfolioSectionModalEscape)

    return () => window.removeEventListener('keydown', handlePortfolioSectionModalEscape)
  }, [activePortfolioSectionId, closePortfolioSectionModal])

  const contextValue = useMemo(
    () => ({
      activePortfolioSectionId,
      closePortfolioSectionModal,
      isPortfolioSectionModalOpen: activePortfolioSectionId !== null,
      openPortfolioSectionModal,
    }),
    [
      activePortfolioSectionId,
      closePortfolioSectionModal,
      openPortfolioSectionModal,
    ],
  )

  return (
    <PortfolioSectionModalContext.Provider value={contextValue}>
      {children}
    </PortfolioSectionModalContext.Provider>
  )
}

/**
 * @function usePortfolioSectionModal
 * @memberof hooks/usePortfolioSectionModal
 * @description Reads and controls the active portfolio section modal state.
 * @returns {PortfolioSectionModalContextValue} Modal state and actions.
 *
 * @example
 * const { openPortfolioSectionModal } = usePortfolioSectionModal()
 */
export function usePortfolioSectionModal(): PortfolioSectionModalContextValue {
  const portfolioSectionModalContext = useContext(PortfolioSectionModalContext)

  if (!portfolioSectionModalContext) {
    throw new Error('usePortfolioSectionModal must be used within PortfolioSectionModalProvider')
  }

  return portfolioSectionModalContext
}

/**
 * @function openPortfolioSectionModalById
 * @memberof hooks/usePortfolioSectionModal
 * @description Opens a portfolio section modal when the section id is valid.
 * @param {string} sectionId - Target section id from navigation.
 * @param {(sectionId: PortfolioSectionId) => void} openPortfolioSectionModal - Modal open handler.
 * @returns {void}
 *
 * @example
 * openPortfolioSectionModalById('about', openPortfolioSectionModal)
 */
export const openPortfolioSectionModalById = (
  sectionId: string,
  openPortfolioSectionModal: (sectionId: PortfolioSectionId) => void,
): void => {
  if (!isPortfolioSectionId(sectionId)) return

  openPortfolioSectionModal(sectionId)
}
