/**
 * @module dataservices/api/portfolioNavContentApi
 * @description Fetches portfolio nav content from GET /api/portfolio-nav-content.
 */

import { apiClient } from './client'
import { PORTFOLIO_API_PATHS } from '@dataservices/config/portfolioApiPaths'
import type { PortfolioNavContent } from '@dataservices/types/portfolioNavContent.types'

export type FetchPortfolioNavContentArgs = {
  portfolioNavContentId?: number
}

/**
 * @function fetchPortfolioNavContent
 * @memberof dataservices/api/portfolioNavContentApi
 * @description Loads nav content; optional `id` query param selects a specific row.
 * @param {FetchPortfolioNavContentArgs} [args] - Optional row id.
 * @returns {Promise<PortfolioNavContent>} Nav labels and section links.
 *
 * @example
 * await fetchPortfolioNavContent()
 * await fetchPortfolioNavContent({ portfolioNavContentId: 1 })
 */
export const fetchPortfolioNavContent = async (
  args: FetchPortfolioNavContentArgs = {},
): Promise<PortfolioNavContent> => {
  const { portfolioNavContentId } = args
  const response = await apiClient.get<PortfolioNavContent>(
    PORTFOLIO_API_PATHS.portfolioNavContent,
    {
      params:
        portfolioNavContentId === undefined
          ? undefined
          : { id: portfolioNavContentId },
    },
  )

  return response.data
}
