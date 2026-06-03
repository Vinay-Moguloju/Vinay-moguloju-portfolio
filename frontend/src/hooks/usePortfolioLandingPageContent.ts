/**
 * @module hooks/usePortfolioLandingPageContent
 * @description Loads landing page content from the API with static fallback.
 */

import { fetchPortfolioLandingPageContent } from '@dataservices/api/portfolioLandingPageContentApi'
import { isPortfolioApiEnabled } from '@dataservices/config/portfolioApiConfig'
import { PORTFOLIO_LANDING_PAGE_CONTENT } from '@dataservices/content/portfolioContent'
import type { PortfolioLandingPageContent } from '@dataservices/types/portfolioLandingPageContent.types'
import { useEffect, useState } from 'react'

export type UsePortfolioLandingPageContentArgs = {
  portfolioLandingPageContentId?: number
}

/**
 * @function usePortfolioLandingPageContent
 * @memberof hooks/usePortfolioLandingPageContent
 * @description Fetches landing content; falls back to PORTFOLIO_LANDING_PAGE_CONTENT when API fails.
 * @param {UsePortfolioLandingPageContentArgs} [args] - Optional API row id.
 * @returns {{
 *   isPortfolioLandingPageContentLoading: boolean,
 *   portfolioLandingPageContent: PortfolioLandingPageContent,
 * }}
 *
 * @example
 * const { portfolioLandingPageContent } = usePortfolioLandingPageContent()
 */
export function usePortfolioLandingPageContent(
  args: UsePortfolioLandingPageContentArgs = {},
) {
  const [isPortfolioLandingPageContentLoading, setIsPortfolioLandingPageContentLoading] =
    useState(true)
  const [portfolioLandingPageContent, setPortfolioLandingPageContent] =
    useState<PortfolioLandingPageContent>(PORTFOLIO_LANDING_PAGE_CONTENT)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioLandingPageContent = async () => {
      if (!isPortfolioApiEnabled) {
        setIsPortfolioLandingPageContentLoading(false)
        return
      }

      setIsPortfolioLandingPageContentLoading(true)

      try {
        const apiPortfolioLandingPageContent = await fetchPortfolioLandingPageContent({
          portfolioLandingPageContentId: args.portfolioLandingPageContentId,
        })

        if (isMounted) {
          setPortfolioLandingPageContent(apiPortfolioLandingPageContent)
        }
      } catch {
        if (isMounted) {
          setPortfolioLandingPageContent(PORTFOLIO_LANDING_PAGE_CONTENT)
        }
      } finally {
        if (isMounted) {
          setIsPortfolioLandingPageContentLoading(false)
        }
      }
    }

    void loadPortfolioLandingPageContent()

    return () => {
      isMounted = false
    }
  }, [args.portfolioLandingPageContentId])

  return {
    isPortfolioLandingPageContentLoading,
    portfolioLandingPageContent,
  }
}
