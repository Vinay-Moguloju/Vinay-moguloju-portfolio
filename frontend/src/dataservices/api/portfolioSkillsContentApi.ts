/**
 * @module dataservices/api/portfolioSkillsContentApi
 * @description Fetches portfolio skills section content from GET /api/portfolio-skills-content.
 */

import { apiClient, assertPortfolioApiEnabled } from './client'
import { PORTFOLIO_API_PATHS } from '@dataservices/config/portfolioApiPaths'
import type { PortfolioSkillsContent } from '@dataservices/types/portfolioSkillsContent.types'

export type FetchPortfolioSkillsContentArgs = {
  portfolioSkillsContentId?: number
}

/**
 * @function fetchPortfolioSkillsContent
 * @memberof dataservices/api/portfolioSkillsContentApi
 * @description Loads skills modal content; optional `id` query param selects a specific row.
 * @param {FetchPortfolioSkillsContentArgs} [args] - Optional row id.
 * @returns {Promise<PortfolioSkillsContent>} Skills categories and tool tags.
 *
 * @example
 * await fetchPortfolioSkillsContent()
 */
export const fetchPortfolioSkillsContent = async (
  args: FetchPortfolioSkillsContentArgs = {},
): Promise<PortfolioSkillsContent> => {
  assertPortfolioApiEnabled()

  const { portfolioSkillsContentId } = args
  const response = await apiClient.get<PortfolioSkillsContent>(
    PORTFOLIO_API_PATHS.portfolioSkillsContent,
    {
      params:
        portfolioSkillsContentId === undefined
          ? undefined
          : { id: portfolioSkillsContentId },
    },
  )

  return response.data
}
