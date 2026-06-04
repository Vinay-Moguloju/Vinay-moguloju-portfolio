/**
 * @module dataservices/api/portfolioWorkContentApi
 * @description Fetches portfolio work section content from GET /api/portfolio-work-content.
 */

import { apiClient, assertPortfolioApiEnabled } from './client'
import { PORTFOLIO_API_PATHS } from '@dataservices/config/portfolioApiPaths'
import type { PortfolioWorkContent } from '@dataservices/types/portfolioWorkContent.types'

export type FetchPortfolioWorkContentArgs = {
  portfolioWorkContentId?: number
}

/**
 * @function fetchPortfolioWorkContent
 * @memberof dataservices/api/portfolioWorkContentApi
 * @description Loads work modal content; optional `id` query param selects a specific row.
 * @param {FetchPortfolioWorkContentArgs} [args] - Optional row id.
 * @returns {Promise<PortfolioWorkContent>} Projects grid copy and project list.
 *
 * @example
 * await fetchPortfolioWorkContent()
 */
export const fetchPortfolioWorkContent = async (
  args: FetchPortfolioWorkContentArgs = {},
): Promise<PortfolioWorkContent> => {
  assertPortfolioApiEnabled()

  const { portfolioWorkContentId } = args
  const response = await apiClient.get<PortfolioWorkContent>(
    PORTFOLIO_API_PATHS.portfolioWorkContent,
    {
      params:
        portfolioWorkContentId === undefined ? undefined : { id: portfolioWorkContentId },
    },
  )

  return response.data
}
