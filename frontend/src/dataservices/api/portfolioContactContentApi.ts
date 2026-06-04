/**
 * @module dataservices/api/portfolioContactContentApi
 * @description Fetches portfolio contact section content from GET /api/portfolio-contact-content.
 */

import { apiClient, assertPortfolioApiEnabled } from './client'
import { PORTFOLIO_API_PATHS } from '@dataservices/config/portfolioApiPaths'
import type { PortfolioContactContent } from '@dataservices/types/portfolioContactContent.types'

export type FetchPortfolioContactContentArgs = {
  portfolioContactContentId?: number
}

/**
 * @function fetchPortfolioContactContent
 * @memberof dataservices/api/portfolioContactContentApi
 * @description Loads contact modal content; optional `id` query param selects a specific row.
 * @param {FetchPortfolioContactContentArgs} [args] - Optional row id.
 * @returns {Promise<PortfolioContactContent>} Contact form labels and social links.
 *
 * @example
 * await fetchPortfolioContactContent()
 */
export const fetchPortfolioContactContent = async (
  args: FetchPortfolioContactContentArgs = {},
): Promise<PortfolioContactContent> => {
  assertPortfolioApiEnabled()

  const { portfolioContactContentId } = args
  const response = await apiClient.get<PortfolioContactContent>(
    PORTFOLIO_API_PATHS.portfolioContactContent,
    {
      params:
        portfolioContactContentId === undefined
          ? undefined
          : { id: portfolioContactContentId },
    },
  )

  return response.data
}
