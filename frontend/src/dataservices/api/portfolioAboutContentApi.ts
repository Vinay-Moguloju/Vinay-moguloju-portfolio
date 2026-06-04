/**
 * @module dataservices/api/portfolioAboutContentApi
 * @description Fetches portfolio about section content from GET /api/portfolio-about-content.
 */

import { apiClient, assertPortfolioApiEnabled } from './client'
import { PORTFOLIO_API_PATHS } from '@dataservices/config/portfolioApiPaths'
import type { PortfolioAboutContent } from '@dataservices/types/portfolioAboutContent.types'

export type FetchPortfolioAboutContentArgs = {
  portfolioAboutContentId?: number
}

/**
 * @function fetchPortfolioAboutContent
 * @memberof dataservices/api/portfolioAboutContentApi
 * @description Loads about modal content; optional `id` query param selects a specific row.
 * @param {FetchPortfolioAboutContentArgs} [args] - Optional row id.
 * @returns {Promise<PortfolioAboutContent>} About section copy and stats.
 *
 * @example
 * await fetchPortfolioAboutContent()
 */
export const fetchPortfolioAboutContent = async (
  args: FetchPortfolioAboutContentArgs = {},
): Promise<PortfolioAboutContent> => {
  assertPortfolioApiEnabled()

  const { portfolioAboutContentId } = args
  const response = await apiClient.get<PortfolioAboutContent>(
    PORTFOLIO_API_PATHS.portfolioAboutContent,
    {
      params:
        portfolioAboutContentId === undefined
          ? undefined
          : { id: portfolioAboutContentId },
    },
  )

  return response.data
}
