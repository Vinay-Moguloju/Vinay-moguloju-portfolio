/**
 * @module dataservices/api/portfolioLandingPageContentApi
 * @description Fetches landing page content from GET /api/portfolio-landing-page-content.
 */

import { apiClient, assertPortfolioApiEnabled } from './client'
import { PORTFOLIO_API_PATHS } from '@dataservices/config/portfolioApiPaths'
import type { PortfolioLandingPageContent } from '@dataservices/types/portfolioLandingPageContent.types'

export type FetchPortfolioLandingPageContentArgs = {
  portfolioLandingPageContentId?: number
}

/**
 * @function fetchPortfolioLandingPageContent
 * @memberof dataservices/api/portfolioLandingPageContentApi
 * @description Loads landing copy; optional `id` query param selects a specific row.
 * @param {FetchPortfolioLandingPageContentArgs} [args] - Optional row id.
 * @returns {Promise<PortfolioLandingPageContent>} Landing hero and CTA copy.
 *
 * @example
 * await fetchPortfolioLandingPageContent()
 * await fetchPortfolioLandingPageContent({ portfolioLandingPageContentId: 1 })
 */
export const fetchPortfolioLandingPageContent = async (
  args: FetchPortfolioLandingPageContentArgs = {},
): Promise<PortfolioLandingPageContent> => {
  assertPortfolioApiEnabled()

  const { portfolioLandingPageContentId } = args
  const response = await apiClient.get<PortfolioLandingPageContent>(
    PORTFOLIO_API_PATHS.portfolioLandingPageContent,
    {
      params:
        portfolioLandingPageContentId === undefined
          ? undefined
          : { id: portfolioLandingPageContentId },
    },
  )

  return response.data
}
