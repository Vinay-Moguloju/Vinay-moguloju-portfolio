/**
 * @module dataservices/config/portfolioApiConfig
 * @description Resolves portfolio API base URL for local dev vs GitHub Pages production.
 */

const PORTFOLIO_LOCAL_API_BASE_URL = 'http://localhost:8080/api'

const rawPortfolioApiBaseUrl = import.meta.env.VITE_API_BASE_URL

/**
 * @function isAbsolutePortfolioApiBaseUrl
 * @memberof dataservices/config/portfolioApiConfig
 * @description Returns true when the value is an absolute http(s) API URL.
 * @param {string} apiBaseUrl - Candidate base URL from env.
 * @returns {boolean}
 */
const isAbsolutePortfolioApiBaseUrl = (apiBaseUrl: string): boolean =>
  /^https?:\/\//i.test(apiBaseUrl)

/**
 * @function resolvePortfolioApiBaseUrl
 * @memberof dataservices/config/portfolioApiConfig
 * @description Picks API base URL: local default in dev; production requires absolute VITE_API_BASE_URL.
 * @returns {string | null} Base URL ending without trailing slash, or null when API calls should be skipped.
 *
 * @example
 * resolvePortfolioApiBaseUrl()
 */
export const resolvePortfolioApiBaseUrl = (): string | null => {
  if (typeof rawPortfolioApiBaseUrl !== 'string') {
    return import.meta.env.DEV ? PORTFOLIO_LOCAL_API_BASE_URL : null
  }

  const trimmedPortfolioApiBaseUrl = rawPortfolioApiBaseUrl.trim()

  if (!trimmedPortfolioApiBaseUrl) {
    return import.meta.env.DEV ? PORTFOLIO_LOCAL_API_BASE_URL : null
  }

  if (!isAbsolutePortfolioApiBaseUrl(trimmedPortfolioApiBaseUrl)) {
    return null
  }

  return trimmedPortfolioApiBaseUrl.replace(/\/$/, '')
}

/** Base URL for axios, or null on GitHub Pages when no hosted API is configured. */
export const PORTFOLIO_API_BASE_URL = resolvePortfolioApiBaseUrl()

/** True when the app should call the Spring Boot API (local dev or production with VITE_API_BASE_URL). */
export const isPortfolioApiEnabled = PORTFOLIO_API_BASE_URL !== null
