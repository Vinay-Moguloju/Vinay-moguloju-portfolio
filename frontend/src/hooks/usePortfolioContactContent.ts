/**
 * @module hooks/usePortfolioContactContent
 * @description Loads contact section content from the API with static fallback.
 */

import { fetchPortfolioContactContent } from '@dataservices/api/portfolioContactContentApi'
import { isPortfolioApiEnabled } from '@dataservices/config/portfolioApiConfig'
import { PORTFOLIO_CONTACT_CONTENT } from '@dataservices/content/portfolioContent'
import type { PortfolioContactContent } from '@dataservices/types/portfolioContactContent.types'
import { useEffect, useState } from 'react'

export type UsePortfolioContactContentArgs = {
  portfolioContactContentId?: number
}

/**
 * @function usePortfolioContactContent
 * @memberof hooks/usePortfolioContactContent
 * @description Fetches portfolio contact content; falls back to PORTFOLIO_CONTACT_CONTENT when API fails.
 * @param {UsePortfolioContactContentArgs} [args] - Optional API row id.
 * @returns {{ isPortfolioContactContentLoading: boolean, portfolioContactContent: PortfolioContactContent }}
 *
 * @example
 * const { portfolioContactContent } = usePortfolioContactContent()
 */
export function usePortfolioContactContent(args: UsePortfolioContactContentArgs = {}) {
  const [isPortfolioContactContentLoading, setIsPortfolioContactContentLoading] = useState(true)
  const [portfolioContactContent, setPortfolioContactContent] =
    useState<PortfolioContactContent>(PORTFOLIO_CONTACT_CONTENT)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioContactContent = async () => {
      if (!isPortfolioApiEnabled) {
        setIsPortfolioContactContentLoading(false)
        return
      }

      setIsPortfolioContactContentLoading(true)

      try {
        const apiPortfolioContactContent = await fetchPortfolioContactContent({
          portfolioContactContentId: args.portfolioContactContentId,
        })

        if (isMounted) {
          setPortfolioContactContent(apiPortfolioContactContent)
        }
      } catch {
        if (isMounted) {
          setPortfolioContactContent(PORTFOLIO_CONTACT_CONTENT)
        }
      } finally {
        if (isMounted) {
          setIsPortfolioContactContentLoading(false)
        }
      }
    }

    void loadPortfolioContactContent()

    return () => {
      isMounted = false
    }
  }, [args.portfolioContactContentId])

  return {
    isPortfolioContactContentLoading,
    portfolioContactContent,
  }
}
