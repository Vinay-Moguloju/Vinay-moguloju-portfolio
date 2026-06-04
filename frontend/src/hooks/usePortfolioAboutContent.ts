/**
 * @module hooks/usePortfolioAboutContent
 * @description Loads about section content from the API with static fallback.
 */

import { fetchPortfolioAboutContent } from '@dataservices/api/portfolioAboutContentApi'
import { isPortfolioApiEnabled } from '@dataservices/config/portfolioApiConfig'
import { PORTFOLIO_ABOUT_CONTENT } from '@dataservices/content/portfolioContent'
import type { PortfolioAboutContent } from '@dataservices/types/portfolioAboutContent.types'
import { useEffect, useState } from 'react'

export type UsePortfolioAboutContentArgs = {
  portfolioAboutContentId?: number
}

/**
 * @function usePortfolioAboutContent
 * @memberof hooks/usePortfolioAboutContent
 * @description Fetches portfolio about content; falls back to PORTFOLIO_ABOUT_CONTENT when API fails.
 * @param {UsePortfolioAboutContentArgs} [args] - Optional API row id.
 * @returns {{ isPortfolioAboutContentLoading: boolean, portfolioAboutContent: PortfolioAboutContent }}
 *
 * @example
 * const { portfolioAboutContent } = usePortfolioAboutContent()
 */
export function usePortfolioAboutContent(args: UsePortfolioAboutContentArgs = {}) {
  const [isPortfolioAboutContentLoading, setIsPortfolioAboutContentLoading] = useState(true)
  const [portfolioAboutContent, setPortfolioAboutContent] =
    useState<PortfolioAboutContent>(PORTFOLIO_ABOUT_CONTENT)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioAboutContent = async () => {
      if (!isPortfolioApiEnabled) {
        setIsPortfolioAboutContentLoading(false)
        return
      }

      setIsPortfolioAboutContentLoading(true)

      try {
        const apiPortfolioAboutContent = await fetchPortfolioAboutContent({
          portfolioAboutContentId: args.portfolioAboutContentId,
        })

        if (isMounted) {
          setPortfolioAboutContent(apiPortfolioAboutContent)
        }
      } catch {
        if (isMounted) {
          setPortfolioAboutContent(PORTFOLIO_ABOUT_CONTENT)
        }
      } finally {
        if (isMounted) {
          setIsPortfolioAboutContentLoading(false)
        }
      }
    }

    void loadPortfolioAboutContent()

    return () => {
      isMounted = false
    }
  }, [args.portfolioAboutContentId])

  return {
    isPortfolioAboutContentLoading,
    portfolioAboutContent,
  }
}
