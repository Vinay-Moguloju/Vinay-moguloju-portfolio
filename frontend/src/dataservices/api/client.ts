import axios from 'axios'
import { API_BASE_URL } from '@dataservices/config/constants'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ?? error.message ?? 'Request failed'
    return Promise.reject(new Error(message))
  },
)
