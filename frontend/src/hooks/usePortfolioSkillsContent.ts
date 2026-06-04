/**
 * @module hooks/usePortfolioSkillsContent
 * @description Loads skills section content from the API with static fallback.
 */

import { fetchPortfolioSkillsContent } from '@dataservices/api/portfolioSkillsContentApi'
import { isPortfolioApiEnabled } from '@dataservices/config/portfolioApiConfig'
import { PORTFOLIO_SKILLS_CONTENT } from '@dataservices/content/portfolioContent'
import type { PortfolioSkillsContent } from '@dataservices/types/portfolioSkillsContent.types'
import { useEffect, useState } from 'react'

export type UsePortfolioSkillsContentArgs = {
  portfolioSkillsContentId?: number
}

/**
 * @function usePortfolioSkillsContent
 * @memberof hooks/usePortfolioSkillsContent
 * @description Fetches portfolio skills content; falls back to PORTFOLIO_SKILLS_CONTENT when API fails.
 * @param {UsePortfolioSkillsContentArgs} [args] - Optional API row id.
 * @returns {{ isPortfolioSkillsContentLoading: boolean, portfolioSkillsContent: PortfolioSkillsContent }}
 *
 * @example
 * const { portfolioSkillsContent } = usePortfolioSkillsContent()
 */
export function usePortfolioSkillsContent(args: UsePortfolioSkillsContentArgs = {}) {
  const [isPortfolioSkillsContentLoading, setIsPortfolioSkillsContentLoading] = useState(true)
  const [portfolioSkillsContent, setPortfolioSkillsContent] =
    useState<PortfolioSkillsContent>(PORTFOLIO_SKILLS_CONTENT)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioSkillsContent = async () => {
      if (!isPortfolioApiEnabled) {
        setIsPortfolioSkillsContentLoading(false)
        return
      }

      setIsPortfolioSkillsContentLoading(true)

      try {
        const apiPortfolioSkillsContent = await fetchPortfolioSkillsContent({
          portfolioSkillsContentId: args.portfolioSkillsContentId,
        })

        if (isMounted) {
          setPortfolioSkillsContent(apiPortfolioSkillsContent)
        }
      } catch {
        if (isMounted) {
          setPortfolioSkillsContent(PORTFOLIO_SKILLS_CONTENT)
        }
      } finally {
        if (isMounted) {
          setIsPortfolioSkillsContentLoading(false)
        }
      }
    }

    void loadPortfolioSkillsContent()

    return () => {
      isMounted = false
    }
  }, [args.portfolioSkillsContentId])

  return {
    isPortfolioSkillsContentLoading,
    portfolioSkillsContent,
  }
}
