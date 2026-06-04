/**
 * @module hooks/usePortfolioWorkContent
 * @description Loads work section content from the API with static fallback.
 */

import { fetchPortfolioWorkContent } from '@dataservices/api/portfolioWorkContentApi'
import { isPortfolioApiEnabled } from '@dataservices/config/portfolioApiConfig'
import { PORTFOLIO_PROJECTS_CONTENT } from '@dataservices/content/portfolioContent'
import type { PortfolioWorkContent } from '@dataservices/types/portfolioWorkContent.types'
import { useEffect, useState } from 'react'

export type UsePortfolioWorkContentArgs = {
  portfolioWorkContentId?: number
}

/**
 * @function usePortfolioWorkContent
 * @memberof hooks/usePortfolioWorkContent
 * @description Fetches portfolio work content; falls back to PORTFOLIO_PROJECTS_CONTENT when API fails.
 * @param {UsePortfolioWorkContentArgs} [args] - Optional API row id.
 * @returns {{ isPortfolioWorkContentLoading: boolean, portfolioWorkContent: PortfolioWorkContent }}
 *
 * @example
 * const { portfolioWorkContent } = usePortfolioWorkContent()
 */
export function usePortfolioWorkContent(args: UsePortfolioWorkContentArgs = {}) {
  const [isPortfolioWorkContentLoading, setIsPortfolioWorkContentLoading] = useState(true)
  const [portfolioWorkContent, setPortfolioWorkContent] =
    useState<PortfolioWorkContent>(PORTFOLIO_PROJECTS_CONTENT)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioWorkContent = async () => {
      if (!isPortfolioApiEnabled) {
        setIsPortfolioWorkContentLoading(false)
        return
      }

      setIsPortfolioWorkContentLoading(true)

      try {
        const apiPortfolioWorkContent = await fetchPortfolioWorkContent({
          portfolioWorkContentId: args.portfolioWorkContentId,
        })

        if (isMounted) {
          setPortfolioWorkContent(apiPortfolioWorkContent)
        }
      } catch {
        if (isMounted) {
          setPortfolioWorkContent(PORTFOLIO_PROJECTS_CONTENT)
        }
      } finally {
        if (isMounted) {
          setIsPortfolioWorkContentLoading(false)
        }
      }
    }

    void loadPortfolioWorkContent()

    return () => {
      isMounted = false
    }
  }, [args.portfolioWorkContentId])

  return {
    isPortfolioWorkContentLoading,
    portfolioWorkContent,
  }
}
