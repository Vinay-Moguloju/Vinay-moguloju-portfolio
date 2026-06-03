/**
 * @module hooks/usePortfolioNavContent
 * @description Loads nav content from the API with static fallback.
 */

import { fetchPortfolioNavContent } from '@dataservices/api/portfolioNavContentApi'
import { isPortfolioApiEnabled } from '@dataservices/config/portfolioApiConfig'
import { PORTFOLIO_NAV_CONTENT } from '@dataservices/content/portfolioContent'
import type { PortfolioNavContent } from '@dataservices/types/portfolioNavContent.types'
import { useEffect, useState } from 'react'

export type UsePortfolioNavContentArgs = {
  portfolioNavContentId?: number
}

/**
 * @function usePortfolioNavContent
 * @memberof hooks/usePortfolioNavContent
 * @description Fetches portfolio nav content; falls back to PORTFOLIO_NAV_CONTENT when API fails.
 * @param {UsePortfolioNavContentArgs} [args] - Optional API row id.
 * @returns {{ isPortfolioNavContentLoading: boolean, portfolioNavContent: PortfolioNavContent }}
 *
 * @example
 * const { portfolioNavContent } = usePortfolioNavContent()
 */
export function usePortfolioNavContent(args: UsePortfolioNavContentArgs = {}) {
  const [isPortfolioNavContentLoading, setIsPortfolioNavContentLoading] = useState(true)
  const [portfolioNavContent, setPortfolioNavContent] =
    useState<PortfolioNavContent>(PORTFOLIO_NAV_CONTENT)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioNavContent = async () => {
      if (!isPortfolioApiEnabled) {
        setIsPortfolioNavContentLoading(false)
        return
      }

      setIsPortfolioNavContentLoading(true)

      try {
        const apiPortfolioNavContent = await fetchPortfolioNavContent({
          portfolioNavContentId: args.portfolioNavContentId,
        })

        if (isMounted) {
          setPortfolioNavContent(apiPortfolioNavContent)
        }
      } catch {
        if (isMounted) {
          setPortfolioNavContent(PORTFOLIO_NAV_CONTENT)
        }
      } finally {
        if (isMounted) {
          setIsPortfolioNavContentLoading(false)
        }
      }
    }

    void loadPortfolioNavContent()

    return () => {
      isMounted = false
    }
  }, [args.portfolioNavContentId])

  return {
    isPortfolioNavContentLoading,
    portfolioNavContent,
  }
}
