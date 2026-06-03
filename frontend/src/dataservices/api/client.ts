import axios from 'axios'
import {
  isPortfolioApiEnabled,
  PORTFOLIO_API_BASE_URL,
} from '@dataservices/config/portfolioApiConfig'

export const apiClient = axios.create({
  baseURL: PORTFOLIO_API_BASE_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * @function assertPortfolioApiEnabled
 * @memberof dataservices/api/client
 * @description Throws when API calls are disabled (e.g. GitHub Pages without VITE_API_BASE_URL).
 */
export const assertPortfolioApiEnabled = (): void => {
  if (!isPortfolioApiEnabled || !PORTFOLIO_API_BASE_URL) {
    throw new Error('Portfolio API is not configured for this environment.')
  }
}

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ?? error.message ?? 'Request failed'
    return Promise.reject(new Error(message))
  },
)
